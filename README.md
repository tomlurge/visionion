# visionion

visionion aims to provide a webbased visualization tool for Tor metrics data.

The [Tor](https://www.torproject.org/index.html) project is primarily a system to provide a user with anonymity while on the internet. 
It adds to this some means for censorship prevention as adversaries try to block access to Tor alltogether. 
The Tor infrastructure is comprised of several types of network nodes, and a lot thereof. 

Visualizing all the parts of this network in a meaningful way is propably not possible but of course insights can be drawn from combining different aspects and sources in one view. 
Visionion aims to integrate and visualize all available data in a generic and easily extensible fashion. 
These generic views can then be combined and tailored to elucidate structural patterns and hidden aspects in the data.




## Tor Metrics Data

The project website provides the [currently available data in JSON](https://metrics.torproject.org/graphs/) as well as an [overview of metrics descriptor formats](https://metrics.torproject.org/index.html) and the [raw data](https://metrics.torproject.org/data.html). 
It's currently saved to a PostgreSQL database ([SQL schema](https://gitweb.torproject.org/metrics-web.git/blob/HEAD:/db/tordir.sql)).




## Usage Scenario

A user might just have some simple questions: how many relays were there running in the past 3 months in .de? How much bandwidth was provided by relays running Tor version 0.2.3.x.?     
Such questions might just ask for a number and therefor need no visualization at all. 
When a series of numbers is asked for or when information needs get more complex because they involve different factors and sources of data a visualization can be very handy to ease comprehension of the answer. 
Even a simple graph of values over a period of time can be grasped much more easily than a list of numbers. 
Visually combining and contextualizing different aspects of data in one place can help understand causes, effects and correlations.   
When there is a problem to which not only the right answer but also the right question is not known a visualization can help understand what's going on in the first place. 
Certainly this is an ambitious task for which the visualization has to provide interactive controls and visual malleablity.      

How to achieve all this? 
Basically, take all network graphs and merge them into one single graph with plenty of options. 
Users should be able to navigate into any factor (bridge vs. relay, country, flags, Tor software version, operating system, EC2 cloud bridge or not) and learn the total relay number or advertised bandwidth or bandwidth history for their selection. 

**usecase 1**   
the most prominent usecase is the timeline with a graph representing volumina of bandwidth or numbers of hosts or number of clients etc. on the vertical axis   
**usecase 1a**   
it should also be possible to layer timeline graphs for the same time period but with different subject on each other to compare eg correlations between consumed bandwidth and number of clients   
**usecase 2**   
now imagine a plane orthogonal to the graph, representing some other data at that point in time eg adding to the graph of linux driven relays a cake diagram of all operating systems driving relays   
**usecase 3**   
now imagine a third plane on the floor showing geogrgraphic distribution of linux driven relays and how much bandwidth each of them handles, the imaginary center of linux driven traffic at the crosspoint of the first two planes   
**usecase 4**   
now add markers for certain events: the day when traffic from linux driven relays peaked, the day it hit an alltime low, the days it plummeted, the days it spiked etc.   
**usecase 5**   
show the biggest nodes for a given metric and their share of the total  

**1** represents the usecase that's presently handled by the Tor metrics project [graph visualizations](https://metrics.torproject.org/network.html). 
**1a** is available as a prototype at [interactive graphs](http://tigerpa.ws/tor_metrics/).   
**2** attempts to combine different visualization techniques like timeline and cake diagram. 
Different visualizations get rendered on different layers. 
Control shifts from the visualization framework to the web application.   
**3** introduces the geographical dimension which is not very strongly represented in the raw data but nonetheless an interesting perspective.   
**4** points the user in directions that might be worth to explore. It will need some analytics in the background.   
**5** checks (de-) centralizations in the infrastructure.   


More usecases
- Visualizing the total pbr of all relays with a certain characteristic, e.g. what's the total pbr of all relays in Germany?    
- number of relays running version 0.2.4 on Linux
- bandwidth provided by relays running version 0.2.4
- bytes per day transported by relays running Linux 
- number of relays running with type Guard and Middle, with the Fast and Stable flag, with version 0.2.3.x, on OS X, in AS 1234, not permitting any ports, in Germany, on May 23, 2013   (maximum level of detail)
- total pbr of all relays with a certain characteristic. E.g. what's the total pbr of all relays in Germany?
- bwa, bwc, and pbr are more important measures than the number of nodes. 
	
	TODO 	Here's my idea: how about you keep osv_r, tsv_r, fast_r, stable_r, and as_r and store arrays of [#nodes, bwa, bwc, pbr] for each of them?  For osv_r, tsv_r, and as_r that would mean storing an array of arrays, and for fast_r and stable_r it would be just that array.    



## Technical Overview

In a nutshell:
	
* Tor metrics data get's prepared and imported into a [MongoDB](http://www.mongodb.org/) database.  
* Aggregation and indexing transforms the imported data into a big fact table suitable to drive the visualization. 
* Visualization Framework is [D3.js](http://d3js.org/), additionally [Crossfilter](http://square.github.io/crossfilter/), maybe also [dc.js](http://nickqizhu.github.io/dc.js/).   
* Client side application framework used is [Angular.js](http://angularjs.org/).
* Targeted web browsers are Chrome and Firefox. Others might work as well.
Most of the visualization facets get rendered seperatly, on seperate planes (technically DIVs).   
The application prepares the joins and our eyes carry them out.

	TODO 	the different steps and how they relate should be explained more thoroughly	


### Database  
Since the data schema is quite flat and in a certain flux a NoSQL database seems appropriate. 
[**MongoDB**](http://www.mongodb.org/) was [chosen](http://kkovacs.eu/cassandra-vs-mongodb-vs-couchdb-vs-redis "Cassandra vs MongoDB vs CouchDB vs Redis vs Riak vs HBase vs Couchbase vs Neo4j vs Hypertable vs ElasticSearch vs Accumulo vs VoltDB vs Scalaris comparison") because of it's JavaScript support which promises nice integration with client side logic. 
 
MongoDB also fits our purpose well because it allows sparsely populated collections. 
As a document store it also supports nested collections which comes in very handy when the data sets retrieved from the network are not as uniform and regular as an RDBMS likes them to be. 
As MongoDB is a schemaless database we do not have to worry about future structural changes. 
When e.g. more performance data becomes available we can seamlessly add it without having to touch any of the existing documents.  

MongoDB has some constraints of it's own that need to be taken into account when designiing the facts collection:
- no joins    
 (but we can work around that by visually layering querie results on top of each other)    
- only 64 indices per collection (equals table in SQL-speak)    
 (slightly easing this problem: composite indices)    
- only one field in an index can be an array    
 (no workaround: we have to avoid arrays if they aren't really necessary)   

Since the complexity of the underlying data is rather limited MongoDBs query capabilities, although less expressive than SQL, should be sufficient. 
With a visualization tool the most interesting joins are anyway those that are carried out in the eyes of the user.   

The ability to store JavaScript-code in the MongoDB might help in the development of an analyzer toolkit. 
Support for geo-data could be beneficial either (no other NoSQL database has that so easily available AFAIK).  

A quick introduction to some MongoDB-specific terminology seems appropriate since we'll use these terms a lot: a **collection** is the MongoDB equivalent to a "table" in an RDBMS and likewise a **document** is the equivalent to a "table row" in an RDBMS. 

### Web application framework   
[Angular.js](http://angularjs.org/) is the likely candidate because of it's declarative style and it's attractive approach to routing and HTML extensions ([discussion](http://blog.stevensanderson.com/2012/08/01/rich-javascript-applications-the-seven-frameworks-throne-of-js-2012/ "Rich JavaScript Applications – the Seven Frameworks")). 
It integrates nicely [with](http://briantford.com/blog/angular-d3.html "Using the D3.js Visualization Library with AngularJS") D3.js. and [with](http://square.github.com/cube/) MongoDB (also [here](http://square.github.com/cubism/)).  


### Visualization framework  
[D3.js](http://d3js.org/) is a [leading](http://www.netmagazine.com/features/top-20-data-visualisation-tools "The top 20 data visualisation tools") data visualization framework for the web. 
It keeps a strong link between the data and it's visual representation, expresses it in a nice declarative and CSS-like style, provides an impressive set of features and renders to SVG.   




## Tor network terminology

The Tor network is comprised of a lot of different nodes. 
All these nodes operate - despite their different functions - from the same software, just with different configuration flags set. 
A single node can be in _most_ categories at the same time and in _every_ category over time.  
 
**Nodes** are all the actors that form the network. 
Nodes encompass clients and servers. Servers again encompass bridges and relays. Nodes can be either client or server, servers can be either bridge or relay. Relays can play different roles: Guard, Middle, Exit and Directory.    
**Clients** are end user nodes, connecting to the Tor network to anonymously use the internet.   
**Servers** are all nodes except clients. 
Servers encompass relays and bridges.   
**Bridges** are the nodes that clients connect to to circumvent attempts to block access to Tor.   
**Relays** are the nodes that form the actual Tor network which provides anonymity. 
Relays can take the roles of guard nodes, middle nodes, exit nodes and directory nodes.   
**Guard** relays function as entry points to an anonymized route through the Tor network. 
They are reached by the client either directly or, if a censor blocks them, through a bridge.   
**Middle** relays function as intermediary steps on that route.   
**Exit** relays function as exit points, leaving the Tor network and continuing to the destination on the internet.   
**Directory** relays provide some auxiliary services to the Tor network.   

	node				everything in the tor network
		client			the users
		server			everything serving the user
			bridge		special entry points for clients that need to circumvent blocking 
			relay		the actual anonymization network, with different roles:
						guard		entry points into the network (accessed by client directky or by bridge)
						middle		intermediary nodes on anonymizing route
						exit		now anonymized, continue route to actual destination on the internet
						directory	some auxiliary services 

A node may have been configured as bridge before or after being configured as a relay and that same node can switch to being a client at any time. But:   
- a node can't be a client and a server at the same time.   
- a node can't be a bridge and a relay at the same time.
For relays it's quite common that they fulfill some roles simultaneously: a relay can be configured as guard node, middle node, exit node and directory mirror at the same time. 

For a more detailed and extensive description see the extra page on [**tor**](doc/tor.md) .




## Import data

Visionion is driven by data collected through the Tor metrics project. 
This data is not always easy to interpret and sometimes fragmentary or even guesstimated for reasons of (preserving) anonymity. 
In the page on the [**gestalt**](doc/gestalt.md) of these numbers we take a more thorough look on how they are gathered and what they actually represent.   

Before Tor metrics data can be imported into MongoDB is has to be gathered and prepared. The [code](https://github.com/tomlurge/visionion/tree/master/importer) therefor is part of this project (and code repository) but outside the scope of this documentation. It is maintained by the Tor metrics [Project](https://metrics.torproject.org/‎).

### Data Schema Outline 

The initial database import schema has only one collection for all node types: 'client', 'bridge' and 'relay'. 
The following import outline documents the fields and values that each imported document may have depending on the type of node it represents. 
(The field names are rather short to achieve better performance in MongoDB. 
Memorizing them a little or looking them up again in the table below might be helpful when reading through the rest of the documentation and code.)
	
	node		field	description					type	subtype	aggregation	valuespace
	+----------+-------+---------------------------+--------+------+-----------+----------
	cbr			_id		document ID					string			(*)			fingerprint/'client'+span+date 
																				eg 'fingerprint-1-YYYYMMDDHH', 'client-24-YYYYMMDDHH'
	cbr			addd	timedate the doc was added	string						ISO 8601 extended format YYYY-MM-DDTHH:mm:ss.sssZ
	cbr			span	period of validity			integer			-			length of the interval this dataset describes, in hours:
																				one of: 1(default), 6, 24, 168
	cbr			date	datetime					string			-			start of the time span that this document describes
																				format "YYYY-MM-DD HH" as defined in ISO-8601
	cbr			type	type of document			string						one of: c (clients), b (bridge), r (relay)	
	c			cb		clients at bridges			integer			mean
	c			cbcc	clients@bridges per country	object			mean		{cc:integer ...}
	c			cr		clients at relays			integer			mean
	c			crcc	clients@relays per country	object			mean		{cc:integer ...}
	c			cpt		bridge pluggbl.transp.used	object						{obfs2/obfs3/OR/unknown:integer}
	c			cip		ip-version used				object			mode		{v4/v6:integer}		
	 br			node	node id						string			-			Tor fingerprint																
	 br			nick	nickname					string			mode		nickname of relay
	 br			bwa		bandwidth advertized 		integer			mean		B/s
	 br			bwc		bandwidth consumed 			integer			mean		B/s
	 br			tsv		Tor software version		string			mode		one of: 010, 011, 012, 020, 021, 022, 023, 024
	 br			osv		operating system			string			mode		one of: linux, darwin, freebsd, windows, other 
	 b			brp		bridge pool     			string			mode		one of: email, https, other 
	 b			bre		bridge is in EC2 cloud		boolean			mode
	 b			brt		bridge pluggable transport	array	string	mode (*)	some of: obfs2, obfs3
	  r			role	roles/functions of relay	array	string	mode (*)	some of: Guard, Middle, Exit, Dir
	  r			flag	flags 						array	string	mode (*)	some of: Authority, Fast, Stable, 
	  																			BadExit, BadDirectory, Named, Running, Unnamed,  Valid, V2Dir, V3Dir
	  r			pbr		consensus_weight_fraction	number			mean        probability of a client picking a relay for their path
	  r			pbg		guard_probability			number			mean		probability of a client picking a relay for their guard position
	  r			pbm		middle_probability			number			mean		probability of a client picking a relay for their middle position
	  r			pbe		exit_probability			number			mean		probability of a client picking a relay for their exit position
	  r			pex		permitted exit ports		array	integer	mode		some of: 80, 443, 6667
	  r			as		autonomous system			integer			mode		as number
	  r			cc		country code				string			mode		two-letter (ISO 3166-1 alpha-2), upper case

	
	LEGEND --------------------------------------------------------------------
	node		indicates, for which type of node the field is relevant, 
				c (clients), b (bridge), r (relay)
	field		name of the field in the database
	description	short characterization
	type		as defined in 3.5 of http://datatracker.ietf.org/doc/draft-zyp-json-schema/?include_text=1 
	subtype		if type is array, type of array content
	valuespace	expected values
				for lists of possible values "some of" where multiple values are possible or "one of" where possible values are mutually exclusive
	(*)			if the relay provides the functionality in question for at least half of the timespan in question

The timespan for import data is always 1 hour. During aggregation, described below, we will derive larger timespans to improve performance for  visualizations over large periods of time.   

There's a big differemce between client data and relay data that isn't immediatly obvious from the schema. 
Client data is - unlike all relay and bridge data - never collected at the client nodes themselves because that could compromise anonymity. 
Instead client data is estimated by some calculations over relay data. During that calculation client data is already aggregated into timespans. One entry of client data in the import database represents all clients during a given timespan. 
OTOH we import data for each and any server active during a given timespan. We keep this data to be able to look up individual relays but for most visualization tasks we want data for all servers (that have certain characteristics) during a timespan. This data is only aggregated within MongoDB by the mapReduce operation outlined below. 
So the import database contains many server entries per hour, one for each relay and bridge active during that timespan, but only one client entry, with numbers for all clients active during that timespan. 

One more detail: client data is originally calculated per day. The import data for clients contains one document for each hour because the default  timespan for server data is 1 hour. That means we have 24 client documents per day (one for each hour), each with the same values (see the [discussion](https://github.com/tomlurge/visionion/issues/5) for more details).

Check out an [**example**](doc/import.md) of each of the 3 types of documents in the import collection to get a better idea of its structure.


_default values_   
The data gathered by the Tor metrics project is not always complete (not astonishing for a network of that size, diversity of services and heterogenity of actors). See the seperate doc about [**default values**](doc/defaults.md) for a discussion about how to deal with missing data.



### JSON schema  
The above has been transformed into a JSON [schema](schema.json).   

The purpose of the schema is twofold: combined with a [validator](https://github.com/garycourt/JSV) it can provide some control over what data get's inserted into the database. Since MongoDB doesn't perform any consistency checks this can be useful to detect if somethings goes wrong.
More importantly the validator can spot data that's not handled by the schema and trigger the addition of an appropriate (probably rather generic) query interface to the visualization GUI.
		
If the outline above and the schema get out of sync, the *outline is authorative*. 
This may seem unusual but it reflects reality...   
For information about JSON Schema see [Wikipedia](http://en.wikipedia.org/wiki/JSON#Schema) and the [Draft Specification](http://datatracker.ietf.org/doc/draft-zyp-json-schema/?include_text=1).


### Indexing the import tables    

Indices over the import table are useful to speed up mapReduce. Two indices can be used:
	an index on "addd" since we query over "addd"
	an index on "date" since we emit date as (part of) the key 
see also:	
	http://stackoverflow.com/questions/15106869/mongodb-mapreduce-performance-using-indexes
	http://stackoverflow.com/questions/12015064/mongodb-mapreduce-and-sorting
	http://edgystuff.tumblr.com/post/7624019777/optimizing-map-reduce-with-mongodb
The respective MongoDB commands are:					
	> db.import.ensureIndex({date:1})
	> db.import.ensureIndex({addd:-1})	// 	descending since normally we are only interested 
										//	in the newest additions
Because we want to be able to find individual servers efficiently we might implement the 'date' index as a compound index, adding 'type' and 'role' (and maybe others).    
Additional indices may be needed to facilitate generic and unforseen queries and lookups of specific nodes.   

### Import checks  
We are making assumptions about the imported data that wouldn't hurt to be checked. 
E.g. a query checking if Bridges and all other types of relays are really disjunct sets:

	TODO




## Data aggregation

Aggregation of the imported data is necessary for several reasons:    
. the imported server data is ordered by individual server by date but most of the time we will not want to look at individual servers but at all servers or at a subset of servers sharing certain attributes during a given timespan.     
. the imported data reflects only a certain view on the underlying network, highly influenced by how the data is collected. A visualization needs to provide other and more diverse perspectives and the imported data has to be aggregated in different shapes and combinations to support the visualization accordingly. A well prepared database is a prerequisite for a responsively  interactive visualization.    
In proven OLAP fashion we aggregate all data into one big 'facts' collection.

Step 1 - aggregation of **import** data     
In a first step freshly imported data from the 'import' collection will be aggregated into the 'facts' collection.       
Step 2 - **optimization** of aggregated data    
Then the facts table will be aggregated into longer timespans and other simplifications (e.g. grouping countries into regions) to improve retrieval performance.   
Step 3 - **indexing** the 'facts' collection   
The aggregated collections has to be indexed to gain further speed advantages.    

	TODO 	Maybe the [Cube](https://github.com/square/cube) project (based on D3.js) can be useful. 
	

### aggregation step 1 : import data aggregation 

An exhaustive fact table should encompass everything we know from a certain timespan, about all node types woith any combination of characteristics. 
We can't really pre-aggregate all possible permutations because all possible combinations of say roles and flags and software-versions and os-versions and AS a relay could run under are practically countless. 
The structure of the facts collection is more based on the gestalt of the imported data than on real usecases. 
This is guesswork and probably will have to be modified after some user experiences have been collected.

Some administrative information first:

	0	_id, date, span

Client information is relatively sparse:

	1	clients
			total	
	2		atBridges
	3		atRelays
	4		cip4	
	5		cip6	
	6		cptObfs2
	7		cptObfs3
	8		cptOr	
	9		cptOther
	
For clients this is all we know, save the clients per country which we'll tackle later. 
Clients @bridges and @relays are mutually exclusive, the other fields aren't. 
We'll just list them one after another. 
For transports we currently have 4 possible values: obfs2, obfs3, OR, other. 

For servers - relays and bridges alike - we always aggregate total counts and counts for specific subcategories: os version (osv), tor software version (tsv), bandwidth advertized (bwa), bandwidth consumed (bwc), probabilities as applicable (pbr, pbg, pbm, pbe) and exit ports (for exit nodes)

										c	osv	tsv	bwa	bwc	p	pex	
	10	servers
			total						x	x	x	x	x	
			
For bridges it seems sensible to add a result object that has fields for every possible combination of transports offered.
The value is always the number of clients complying to the field type.			

	11		bridges
				total					x	x	x	x	x			
	12			brpEmail				x	x	x	x	x			
	13			brpHttps				x	x	x	x	x		
	14			brpOther				x	x	x	x	x
	15			breTrue					x	x	x	x	x
	16			brtObfs2				x	x	x	x	x
	17			brtObfs3				x	x	x	x	x
	18			brtObfs23				x	x	x	x	x
	
For relays we put an emphasis on roles and secondly flags. 
The aggregation however does not cover if a relays took more than one role (which is not uncommon).

	19		relays		
				roleAll
					total				x	x	x	x	x	x		
	20				flagNone			x	x	x	x	x	x					
	21				flagFast			x	x	x	x	x	x
	22				flagStable			x	x	x	x	x	x
	23				flagFastStable		x	x	x	x	x	x
	24			roleGuard		
					total				x	x	x	x	x	x		
	25				flagNone			x	x	x	x	x	x
	26				flagFast			x	x	x	x	x	x
	27				flagStable			x	x	x	x	x	x
	28				flagFastStable		x	x	x	x	x	x
	29			roleMiddle		
					total				x	x	x	x	x	x		
	30				flagNone			x	x	x	x	x	x
	31				flagFast			x	x	x	x	x	x
	32				flagStable			x	x	x	x	x	x
	33				flagFastStable		x	x	x	x	x	x
	34			roleExit		
					total				x	x	x	x	x	x	x	
	35				flagNone			x	x	x	x	x	x	x
	36				flagFast			x	x	x	x	x	x	x
	37				flagStable			x	x	x	x	x	x	x
	38				flagFastStable		x	x	x	x	x	x	x
	39			roleDir
					total				x	x	x	x	x
	40				authorityTrue		x	x	x	x	x

The values for each line (all the "x"es) are not only one number like with clients but they are objects with several field:value pairs: count, bandwidths and software versions for all server nodes, probabilities and exit ports where applicable.

This data schema profits from the fact that bandwidths, node counts, probabilties and the exit ports are independent from each other. 
There's no way how we could construct a different perspective where bandwidths and node counts don't correlate in the same way.

Country and AS information form enormous value spaces that - if they are not reduced - need to be at the root of a tree like structure, not at the leaves. 
Therefor we have to change perspective: we can't start from the perspective of servers and clients anymore, we have to start from the properties country and AS.   
Again there are differences: while there exist more than 40.000 autonomous systems, there are about 250 countries - which is still a lot, but manageable. We already have very interesting data about clients per country, which makes it mandatory to come up with a decent schema that can handle all countries. The solution is an array on country:value objects, each populated by a rather complex result object, like so:

	41	countries 					array of objects
			country					cc											country
			cbcc					int											how many clients in this country connecting through bridges
			crcc					int											how many clients in this country connecting through relays
			relay					int											how many relays in this country
			guard					int											how many guards in this country
			middle					int											how many middles in this country
			exit					int											how many exits in this country
			directory				int											how many directories in this country
			bwa						int											total bwa of all relays in this country
			bwc						int											total bwc of all relays in this country
			pbr						float										total probability of all relays in this country
			pbg						float										total probability of all guards in this country
			pbm						float										total probability of all middles in this country
			pbe						float										total probability of all exits in this country
			fast					int											how many fast relays in this country
			stable					int											how many stable relays in this country
			osv						object
				linux				int	
				freebsd				int	
				darwin				int	
				windows				int	
				other				int	
			tsv						object
				v010				int	
				v011				int	
				v012				int	
				v020				int	
				v021				int	
				v022				int	
				v023				int	
				v024				int	
			pex						object
				p4					int											4 as in 443
				p6					int											6 as in 6667
				p8					int											8 as in 80
				p46					int
				p48					int
				p68					int
				p468				int
			autosys					array of objects 
				as					string										as number
				count				int

This approach has one problem: with MongoDB the inner arrays can't be indexed if we already have an index on the outer array 'country' - and we definitely need that country index. For osv, tsv and pex this can be solved by plainly listing them: that's 16 rows. But for autonomous systems the problem is not so easily solvable since the matrix of 200 countries and all autonomous systems in our case is close to unmangeable. A possible workaround could be to limit the list to just the 10 or 100 AS with the most bandwidth, or probability, and one more value for the rest.

Additionally countries could be grouped into continents, political regions (like "middle east", "EU"), by bandwidth consumption etc.


Because of their sheer number also autonomous systems have to be analyzed on their own. To understand which of them are of significant importance to the network as a whole or to specfic countries, for specific functionalities, at specific times etc we need to aggregate them over at least the most common fields.

	42	autosys		 				array of objects							one result object per AS
			as						string										number of as (format is string because it's a name)
			name					string										name of as	
			home					string										home country of as, jurisdiction
			relay					int											how many relays in this AS
			bwa						int											total bwa of all relays in this AS
			bwc						int											total bwc of all relays in this AS
			fast					int											how many fast relays in this AS
			stable					int											how many stable relays in this AS
			guard					int											how many guards in this AS
			middle					int											how many middles in this AS
			exit					int											how many exits in this AS
			dir						int											how many directories in this AS
			pbr						int											total pbr of all relays in this AS 
			pbg						int											total pbg of all guards in this AS 
			pbm						int											total pbm of all middles in this AS 
			pbe						int											total pbe of all exits in this AS 
			countries				array of objects
				cc					string										two-letter (ISO 3166-1 alpha-2) country code
				relay				int											how many relays in that country in this AS
				bwa					int											how much bwa in that country in this AS
				bwc					int											how much bwc in that country in this AS
				pbr					float										total probability of all relays in that country and this AS
				pbg					float										total probability of all guards in that country and this AS
				pbm					float										total probability of all middles in that country and this AS
				pbe					float										total probability of all exits in that country and this AS

This is still sketchy. More input and ideas on handling AS would be welcome. 

See a [schematic example](doc/factsRow.md) of a facts document and a real [aggregated fact](doc/aggregated.md) for 2013-04-03 22.   


#### uncaptured dimensions

_Mutually non exclusive relay types_    
There is a problem: guards, middles, exits and directories aren't mutually exclusive. To capture any combination thereof we would need not only 4 but 15 rows, so add 9 to 40 = 49. 
Plus we wouldn't want to loose track of the flags and add another 66 rows. 

To cover all combinations of relay types and flags
	type	g	d	gd			15 permutations of type
			m		gmd
			gm		md
			gme		ged
			ge		gmed
			e		med
			me		ed
	flags	4	2	6			7 permutations with 4 flags, 1 with 2 flags, 7 with 6 flags
	total	28	2	36			makes 7x4 + 2x2 + 7x6
					66
					
Alltogether 115 columns. Maybe we can get rid of this scary situation by stuffing the combinations of types and flags into a seperate collection? 

_OS or Tor software versions_    
Adding OS or Tor software versions as further dimensions would mean blowing up the dimensionality to 37 x 5 = 195 or 37 x 8 = 296 respectively and I can't see any scenario in which this effort would be justified. And that still leaves out the 40 combinations of OS and Tor software versions.
Probably Tor software version and OS versions are only of limited significance. I tend to add them to the result objects of the main 31 server columns sketched out above and be done with it. 
13 more field:value pairs added to each result object, 5 for OS and 8 for TS: would that seem useful?
Maybe even cut that down and only add them to bridges and the 4 relays types, without honoring the flags?

At least theoretically interesting iare the 40 possible combinations of operating system and tor software compared with any of the other dimensions, e.g. the 8 basic node types (without flags) = 320 permutations. Not nice, but doable in a seperate collection. Would that be useful?

_flags_   
Most of the flags collected in the "relays" import collection actually serve so little purpose that we will not use them in the visualization, to avoid visual clutter and distraction and improve performance on the backend. 
They will be imported into the database but will not be aggregated. 
Only the flags "Fast", "Stable" and "Authority" will be aggregated for the following types of relays:   

				Fast	Stable	Authority
	Guard		x		x
	Middle		x		x
	Exit		x		x
	Directory 					x


#### further possibilities

_aggregate unique items_
maybe it would be useful to have a special collection called
	uniqueItems
that contains arrays of all values that ever turned up for a given field, e.g.
	countries
	autonomous systems
	nicknames
wouldn't it?

_scattering / spreading / evenness of distribution_    
So far we only examined aggregated groups of node types. To understand distribution over the individual nodes we have to collect some 10 or 100 or whatever biggest nodes in each category. 
These numbers can be added to the server result objects explained above. 
They can be added alongside applicable fields in the country objects, namely: relay (guard, middle, exit, dir), bandwidths, probabilities, flags. 
Likewise for AS.
And we should establish some measure to indicate how even the distribution is (without having to look at individual nodes).
But this is just a reminder and a list of notes. We agreed to postpone this domain.

	TODO

#### aggregation with mapReduce in MongoDB

It can't be overestimated enough that what you output in the map step has to have the exact same structure than what you output in the reduce step. It's called idempotence but few people have a good idea of what it actually means. I had a lot of problems with scripts running fine on the testdata but then failing strangely on the actual data. The reason was that the actual data set was much bigger and the mapReduce engine started to work through it in chunks: processing the first 100 documents in the collection, then the next 100 documents and so forth, and then aggregatig those results together like they were new input documents. So what you spit out in the reduce step - and you think you're done with that - get's sucked into another mapreduce circle again, and again... That's why it's so important when implementing the reduce step to always have in mind that you might not just chew through one more of those single-document map outputs, but through one of the results - which in this case were much more complex and therefor required some additional checks and logic. E.g. since we are counting a lot of single relay entries on a given date there was more than one place where it was tempting to add a +1 in the reduce step instead of adding the actual value contained in the document to be reduced - which might as well be 100 (and in that case actually was because MongoDBs mapReduce workes through the data in chunks of 100 documents). 

Another important thing to note - and that you don't learn from the MongoDB docs - is that you have a lot of freedom with your JavaScript as long as you don't break idempotence (see above). Most of the stuff like numbers of relays complying to certain characteristics is aggregated by just adding up document after document. But the more complex constructs like countries and autonomous systems which I had to collect from different documents through different means and intermediary steps can't be handled that easily. First I tried to aggregate them stepwise through intermediate collections but that didn't quite work out and made the whole thing very complex. Stackoverflow was my best friend again. The examples other people had posted really opened my eyes for what is possible within the reduce step - as long as the final output can be fed into it again (the importance of idempotence...).

For more nitty gritty details on aggregation with MongoDBs mapReduce see a compilation of [mapReduce](docs/mongoReduce.md) examples compiled from the web (mostly Stackoverflow) and some weird [working notes](docs/aggregation.md) on how to tackle the aggregation.   
And there's of course the mapReduce script [itself](aggregation/mongodb/mapreduce.js).



### aggregation step 2 : consolidation and simplification  

_timedate intervals / periods_    
The default timespan is 1 hour for relays and 24 hours for  clients. At a scale of 1 pixel per default timespan we can't see the whole data on a regular display.
So far we collected about 5 years of data so far, which leads the following numbers of pixels   

	5					5		years since 2008
	5 x 12				60		months
		   x 4			240 	weeks
	       x 30			1800	days
	       						// so, if 1px isn't to fine for our weary eyes, on a regular display 
	       						// we can show about half of the available data on a per day basis
	            x 4		2200	6 hours, quarter day
	            x24		43200	hourly

We will want to zoom in and out of the data visualization and henceforth need to define aggregated timespans. 
Sensible spans coudl be

	6h		6 hours
	1d		24 hours, 1 day
	1w		168 hours, 7 days, 1 week
	1m		1 month, about 4 weeks, about 30.5 days

If we skip months as too coarse anyway (but actually because they are so unwieldy irregular) we could get by with 4 possible integer values: 1, 6, 24, 168

_continents and political regions_    
Being able to group countries geographically (continents) or politically ("middle east", NATO, EU, "arab spring") should be helpful. 
Also grouping AS by jurisdiction (country) or level of NSA influence could help visualize interesting structural properties.

	TODO


#### Background Information
     
Wikipedia has quick introductions to the meaning of [mean](http://de.wikipedia.org/wiki/Arithmetisches_Mittel), [median](http://de.wikipedia.org/wiki/Median) and [mode](http://de.wikipedia.org/wiki/Modus_%28Statistik%29) (the links point to the german edition).

Some material about MongoDB and OLAP    
[MongoDB - Materialized View/OLAP Style Aggregation and Performance (stackoverflow)](http://stackoverflow.com/questions/11810911/mongodb-materialized-view-olap-style-aggregation-and-performance)    
[Another useful thread on stackoverflow](http://stackoverflow.com/questions/3478916/what-should-i-choose-mongodb-cassandra-redis-couchdb), see especially the second answer    
[MongoDB OLAP with pre-aggregated cubes](http://osdir.com/ml/mongodb-user/2011-01/msg01542.html)     
[DataBrewery Cubes](http://databrewery.org/cubes/doc/)      
[MongoDB OLAP](https://groups.google.com/forum/?fromgroups=#!searchin/mongodb-user/MongoDB$20OLAP/mongodb-user/Aaxn813-oO4/PMrYH7Mr_2YJ)     




### aggregation step 3 : Indexing

see [indexing notes](doc/indexingNotes.md).   

* import collections   
	relay: node+timespan to look up specific nodes   













### aggregation admin interface

	TODO

IMPORT
* field/browse: specify location of json data to import (local file or url)
* select: in which importCollection should the data be imported (importClients, importBridges, importRelays)
* remark: make sure that the import command allows overwriting existing records
* problem: this is a OS shell command - how to control it through a webinterface?

AGGREGATION
* field: select a date or a timspan (start: date or min, end: date or max) of the original data
* field: select a date or a timspan (start: date or min, end: date or max) of the last modification (addd) 
* both fields are optional and complementary. if nothing is selecetd everything get's generated

LOGIC
* the app needs to generate all datasets within the given time span 
* it also needs to (re-) generate all aggregated time spans (6h, 24h) during which single records have been added or modified

REMARKS
* updating existing data or adding new data should make no difference to the admin interface
  existing records in visFacts will be overwritten (aggregateFacts -> out:merge)





## Visualization


### Visualization Interface Wishlist

  * chrome colors green and purple
  
  * coloring of data should be readable for color blind people
  
  * selecting countries by region, by other criterias (eg number of relays), on a map etc
  
  * visualize countries on a fisheye map, with suitable projection
  
  * selecting time period by widget, zoom in/out, move left/right in time
  
  * ability to change scale on vertical axis
  
  * ensure that any field not accessible through predefined vis options is accessible through gerneric interface
  
  * combine criteria eg stable and fast relays runnix linux with OS version xy in country z
  
  * combine/add/stack graphs to show complete datasets (eg cake diagrams)
  
  * SVG export
  
  * [future] consumed bandwidth between relays  

this list is unsorted

Some useful links:  

[Topojson](https://github.com/mbostock/topojson/)  

[Fisheye](http://bost.ocks.org/mike/fisheye/)  




### Visualization Mechanics Wishlist
  
  * notify the client of new fields so he can add them to the generic interface 

  * RESTfulness: having the URL represent the complete state of a visualization e.g. including zoom factor, 
    active facets, selected clipping etc




## Technicalities

### JavaScript Issues
  
**datetime**

Handling of date and time can get difficult with JavaScript because not every
environment handles every possible datetime format equally well.  Besides the
ubiquitious UTC-epoch format which is rather inaccessable to humans we settle
on "YYYY-MM-DD HH" as defined in ISO-8601 which is supported across all
browsers and serves our needs just well.   If D3.js doesn't provide all we need
we may use the [Moment.JS](http://momentjs.com) library which "was designed to
work both in the browser and in Node.JS".  For further discussion of the topic
see
[Stackoverflow](http://stackoverflow.com/questions/1056728/formatting-a-date-in-javascript).


### [TODO](todo.md)


### technicalities

#### On OSX:
	
	# install MongoDB
		brew install mongodb
	
	# create data directory, start MongoDB and create the database
		mkdir MONGOdata
		mongod --dbpath MONGOdata
	
	# import the data
	Get sample data (caveat: it might not always be available):
	https://people.torproject.org/~karsten/volatile/clients-2013-10-18.json.gz (1.3 MB)
	https://people.torproject.org/~karsten/volatile/servers-2013-09-10.json.gz (72.5 MB)
	Unzip it (about 2 GB), import it into MongoDB from your system shell:
		mongoimport --db visionion --collection import --stopOnError --upsert --file ~/clients-2013-10-18.json
		mongoimport --db visionion --collection import --stopOnError --upsert --file ~/servers-2013-09-10.json
	DB size is now about 6 GB
	
	# start mongo shell
		mongo
	
	# ensure index over date of import collections
	on the mongo shell
		db.import.ensureIndex({"addd":-1})
		db.import.ensureIndex({"date":-1, "type":1})
	
	# run aggregation
	on the system shell
		mongo localhost:27017/visionion ~/visionion/aggregation/mongodb/mapreduce.js
	(http://stackoverflow.com/questions/8743385/running-a-script-having-mongodb-queries-from-mongodb-shell)

#### setting up hadoop

on a mac install hadoop with homebrew
	hadoop version 1.1.2
1.1.2 is the version that supports streaming and is supported by the mongodb-adapter (below)
for testing purposes a single hadoop instance is just fine, no cluster or pseudo cluster needed. this saves us all the configuration troubles. the single hadoop instance can be called from the command line by just entering
	hadoop jar <location of streaming jar>
further information on installing hadoop as a pseudo-cluster or with eclpise
	http://ragrawal.wordpress.com/2012/04/28/installing-hadoop-on-mac-osx-lion/
	http://importantfish.com/how-to-install-hadoop-on-mac-os-x/ (quite the same, though shorter)
	http://importantfish.com/how-to-run-hadoop-in-standalone-mode-using-eclipse-on-mac-os-x/


#### setting up mongodb-hadoop

instructions for how to install and use the mongo-hadoop adapter
	http://docs.mongodb.org/ecosystem/tutorial/getting-started-with-hadoop/
	https://github.com/mongodb/mongo-hadoop/blob/master/README.md#supported-distributions-of-hadoop

install the mongodb adapter 
	download from https://github.com/mongodb/mongo-hadoop
	in build.sbt add line
		hadoopRelease in ThisBuild := "1.1.x"
	build
		 ./sbt package
	copy files from targets (core, flume, hive, pig ...) into hadoop/libexec/lib
		mongo-hadoop-core_1.1.2-1.1.0.jar
		mongo-hadoop_1.1.2-1.1.0.jar
		possibly also mongo-hadoop-pig_1.1.2-1.1.0.jar and others (hive, flume ...)
	build 'fat' jar for streaming support
		./sbt mongo-hadoop-streaming/assembly
		"This jar file is runnable with hadoop jar, and contains all of the dependencies necessary to run the job."	
install the latest mongodb java driver
	get it from https://github.com/mongodb/mongo-java-driver/downloads
	and copy it also into hadoop/libexec/lib
for javascript streaming install node.js driver
	npm install node_mongo_hadoop
	
	
#### streaming command

see https://github.com/mongodb/mongo-hadoop/blob/master/streaming/README.md

	hadoop 
		jar 			/usr/local/Cellar/hadoop/1.1.2/libexec/contrib/streaming/hadoop-streaming-1.1.2.jar
		-libjars  		/usr/local/Cellar/hadoop/1.1.2/_mongo-hadoop/streaming/target/mongo-hadoop-streaming-assembly-1.1.0.jar
		-input 			/tmp/in
		-output			/tmp/out
		-inputformat 	com.mongodb.hadoop.mapred.MongoInputFormat 
		-outputformat 	com.mongodb.hadoop.mapred.MongoOutputFormat 
		-jobconf 		mongo.input.uri=mongodb://127.0.0.1:4000/visionion.import?readPreference=primary
		-jobconf 		mongo.output.uri=mongodb://127.0.0.1:4000/visionion.facts
     	-jobconf 		stream.io.identifier.resolver.class=com.mongodb.hadoop.streaming.io.MongoIdentifierResolver 
		-io 			mongodb 
		-mapper			~/visionion/aggregation/hadoop/mapper.js 
		-reducer		~/visionion/aggregation/hadoop/reducer.js 
	//	-jobconf		mongo.input.query={_id:{\\$gt:{\\$date:883440000000}}}     original example
		-jobconf		mongo.input.query={_id:{\\$date:1365030000000}}
		
the date has to be given as the number of milliseconds since the Unix epoch (http://docs.mongodb.org/manual/reference/bson-types/#timestamps). maybe useful: http://www.epochconverter.com/


#### Notes on using the mongo shell

	# housekeeping tasks in mongo shell
	show dbs
	use dbName
	db.dropDatabase()
	show collections
	db.collectionName.drop()							// deletes the collection		
	db.collectionName.remove()							// removes the content of the collection							
	db.collectionName.ensureIndex({fieldName:1})		// sorting: 1 ascending, -1 descending
	db.collectionName.dropIndex("indexName")
	db.collectionName.getIndexSpecs()
	db.collectionName.findOne()
	db.collectionName.find().pretty()
	db.collectionName.find({date : "2013-04-03 22", bre : true }).count()


#### modifying mongo defaults for macOS

(if mongodb was installed through homebrew's 'brew' command - see above)
	http://stackoverflow.com/questions/10760223/sane-defaults-for-mongodb-on-osx (first answer)
	It is probably worth raising the hard and soft limits for NumberOfFiles, as MongoDB uses this limit to determine the maximum number of connections that it will accept. On some versions, OS X defaults this number to 256, which means you can have a maximum of around 205 connections, which may be too low even for a development environment. 
	therefor adding
	  <key>HardResourceLimits</key>
	  <dict>
		<key>NumberOfFiles</key>
		<integer>1024</integer>
	  </dict>
	  <key>SoftResourceLimits</key>
	  <dict>
		<key>NumberOfFiles</key>
		<integer>1024</integer>
	  </dict>
	to 
		/usr/local/Cellar/mongodb/2.2.2-x86_64/homebrew.mxcl.mongodb.plist

(if mongodb was not installed through brew)
	ulimit -S -n 2048		// adjust file limits for this shell session
	ulimit -a 				// to check currently valid values 
	momgod --dbpath xyz		// then start mongo deamon
	further reading: 		http://superuser.com/questions/433746/is-there-a-fix-for-the-too-many-open-files-in-system-error-on-os-x-10-7-1 (first answer)
							http://krypted.com/mac-os-x/maximum-files-in-mac-os-x/
							


### performance issues
	
better late than never? after a few months of working on the damn aggregation script and a few weeks of feeling good because it works I finally realized that it is DAAAAAAMMMMMNNNNN SLOOOOOOOOOOOOOOOOOOOOWWWWWWWW

	performance when aggregating 1 hour of data (1 fact)
	without sort
		Sun Nov  3 23:35:18.519 [conn7]
		Mon Nov  4 00:48:44.547 [conn7]
			73 min
	with key "date" and sort on date
		Mon Nov  4 01:30:16.748 [conn8] 
		Mon Nov  4 02:26:33.475 [conn8]
			56 min
	country and AS removed
		Mon Nov  4 12:30:32.085 [conn9]
		Mon Nov  4 12:45:05.562 [conn9] 
			15 min
	moving db from HD to SSD
		Mon Nov  4 13:12:21.691 [conn1]
		Mon Nov  4 13:25:14.630 [conn1]
			13 min
	a second run with that configuration
		Mon Nov  4 13:31:22.063 [conn1]
		Mon Nov  4 13:43:03.567 [conn1]	
			12 min
	after seeting mongo file limits to 2048 (see below)
		Mon Nov  4 14:45:20.064 [conn1]
		Mon Nov  4 14:57:02.174 [conn1]
			12 min
	again with countries and AS, but running from ssd, with file limits 2048, with sort key on date
		Mon Nov  4 15:01:45.733 [conn2] 
		Mon Nov  4 16:04:50.240 [conn2]
			63 min


### working notes 

#### working notes 05/11/13:    

mapReduce of the basic timespan of 1 hour takes about 1 hour to compute (on my macbook pro, 2.6 ghz core 2 duo). "realtime"… leaving out countries and AS it still takes more than 10 minutes.
this is problematic for new data alone: i don't know if the Tor project can, wants to or even should dedicate that much computing power to the visualization task. it is even more problematic for the 5 years worth of raw data that we have amassed so far. with my macbook it would take another 5 years to churn through that. how frustrating! after months of work on the damn script…

i don't think that the script itself is flawed or that i missed optimization options (of course, being a newb to mongo, mapreduce and olap in general, i can't be sure about that)
2 alternatives: 
a) rent five 12 core servers and have the backlog data be mapreduced in 1 month (or 1 week, skipping countries and AS)
b) implement aggregation in either Hadoop or with mongodb's alternative "aggregation pipeline" implementation.

the disadvantage of (a) is inflexibility: if after 1 month and some investment (mayby 1000e) the aggregated data is flawed we have to start again. 
the advantage of (b) is that we need a second implementation anyway to check for correctness - although i would have liked to postpone that.
hadoop mapreduce or mongodb's aggregation pipeline? hadoop is scalable and since it's mapreduce too the mongodb mapreduce script should be rather straightforward to translate. but it may be a hassle to set up and connect to mongodb (although there exists a mongodb module for that) and it's java ... arrrg. 
mongodb's aggregation pipeline otoh is not as flexible as mapreduce, not as scalable as hadoop (but still 20x faster than mogodb mapreduce, so they say) but much less trouble to set up (none at all actually). it has one downside: it needs an application in front that feeds it with the importdata day by day, since it can't handle results that are bigger than 16 mb. silly mongodb limitations. mogodb's inferior scalability is not that much of an issue since the dataset can easily be split into chunks (years, months, days, hours) that again can be crunched by seperate mongodb instances, one per processor core. that means a little more setup and administration work but not prohibitivly much (and it's all easy steps whereas with hadoop it might prove challenging at least since it's a first time).
we will need such an application to control the whole beast anyway but that again is something that like the second implementation of aggregation i would have liked to postpone.

it's not bad to have the mapreduce implementation because it's powerful and flexible and we need a second implementation anyway. we can use it for testing, maybe updating and modifying existing aggregated data, just not for the initial import.

now, how to proceed? i'll have a look into hadoop aggregation for the next 2 days and see how far i get. after that maybe 2 days for hadoop. after that another week for one or the other if it seems like that would be enough time to implement the aggregation. that second week would seem to be justified since after that i have to completely switch tools and mindset and tackle the visualization itself:
- i do have the client data which is aggregated already. that's enough for testing a basic implementation of the visualization frontend
- with that basic frontend i have something to show
- i need a prototype to test if my facts scheme works well with D3 or if i have to rework it anyway

so, that's a plan. hoorray!
	
	mongoDB aggregation framework
	http://docs.mongodb.org/manual/reference/operator/aggregation/
	http://docs.mongodb.org/manual/core/aggregation-pipeline-limits/
	http://docs.mongodb.org/manual/tutorial/aggregation-zip-code-data-set/
	
#### update, half a day later
MongoDB Aggregation Framework won't cut it. no javascript, verbose syntax, and some rather unfortunate restrictions  make it close to impossible to re-implement the mapReduce script. so let's go with Hadoop.
	
	http://stackoverflow.com/questions/9287585/hadoop-map-reduce-vs-built-in-map-reduce
	http://steveeichert.com/2010/03/31/data-analysis-using-mongodb-map-reduce.html/
	https://github.com/mongodb/mongo-hadoop

####  working notes 07/11/13:	
hadoop is not that hard to set up after all (at last). 
problem is: java sucks.
other problem is: no debian package for hadoop.    
looked into alternatives briefly: mondrian (olap solution) is available for debian (but not in debian stable), as is virtuoso which claims to support map reduce (but only in a newer version, not the one in debian stable) and be very modern and fast (dito only in the newest version, not the one in debian stable). both not really sure bets and also not effortless to test either.   
along come articels about json support in PostgreSQL 9.4 being faster than in mongodb, and python in postgresql being very well supported, even suitable to implement map reduce jobs. the latter, together with the support of materialized views in the same PostgreSQL 9.4 should make it possible to put away mongodb for good (problem: debian stable contains only 9.1). and python (which is much more fun than java) is also supported by hadoops "streaming" extension.
so the plan is: 
- get a simple java based map reduce job running in hadoop (like: number of relays). 
- then implement the whole hadoop mapreduce job in python. 
- deploy a hadoop cluster on amazons Elastic MapReduce cloud service and get those 5 years crunched. 
- port the python script to PostgreSQL and make that the engine generate future (hourly) updates
- keep the mongodb implementation as a backup

	http://casbon.me/a-python-map-reduce-data-store
	http://obartunov.livejournal.com/175235.html

well, turning PostgreSQL into a mapreduce engine might prove a little harder than just porting the script to python. but as long as we get by with a single machine to process new data this should be doable. remember: the python-based-mapreduce-engine-in-postgresql is only intended for (hourly) data updates, not for crunching the 5 years backlog.

#### working notes 11/11/13:	
the preferred version of hadoop is 1.1.2 because it is (not the most but) rather current, supported by the mongo-hadoop connector, supported by oreillys "hadoop definitive guide" (which itself is better than "hadoop in action" and "hadoop beginners guide") and the following installation instructions that saved my live 
	http://ragrawal.wordpress.com/2012/04/28/installing-hadoop-on-mac-osx-lion/
	http://importantfish.com/how-to-install-hadoop-on-mac-os-x/ (quite the same, though shorter)
	http://importantfish.com/how-to-run-hadoop-in-standalone-mode-using-eclipse-on-mac-os-x/
	note: 	installation for standalone mode is much easier. 
			the ssh stuff is not needed and neither is editing the config files
there exists a hadoop eclipse plugin but it only runs with older versions of eclipse and since it only helps in settin up new hadoop jobs it's not worth the trouble for me (as i only need one map reduce) (forever?).    
Btw there's also a map reduce tutorial on the hadoop 1.1.2 documentation site
	http://hadoop.apache.org/docs/r1.1.2/mapred_tutorial.html#Source+Code

#### working notes 12/11/13:	
making progress with understanding hadoop. the def.guide is useful (although mostly for admin tasks, not for developing m/r jobs). the python idea though ... python is definitely slower than java so implementing the hadoop map reduce job in python probably was not such a good idea. will drop that. it would be more interesting to add hbase to the mix which is a column store that adds interactive queries to hadoop. but since both hadoop and hbase are not in debian stable, we seem to be stuck with postgresql, mongodb and an occassional import of data aggregated in hadoop...

#### working notes 18/11/13
it's raining and progress is slow. 
will next install streaming support for javascript with node.js and see how much impact the de-serialization to JSON (which the default mongodb job requires but node.js streaming does not)
then (if js streaming isn't surprising me with screamingly fast performance) implementation of a native hadoop job in either java or through Pig will be uncircumventable.

quick back-of-an-envelope calculations about the cost of aggregating 5 yours with mongodb on amazons ec2 cloud
	my macbook pro with 2.6 ghz core 2 duo equals roughly 5 EC2 Compute Units (ECU) 
	one 	High-CPU Extra Large Instance 7 GB of memory, 
				20 EC2 Compute Units* (8 virtual cores with 2.5 EC2 Compute Units each), 
				1690 GB of instance storage, 64-bit platform
			costs 	0.58	$ per h
					0.029	$ per ECU/h
	one		Cluster Compute Eight Extra Large 60.5 GB memory, 
				88 EC2 Compute Units*, 
				3370 GB of local instance storage, 64-bit platform, 10 Gigabit Ethernet
			costs 	2.40	$ per h
					0.02727	$ per ECU/h
	so, size of instance doesn't make much difference in cost. 1 ECU costs $ 0.028, which is about € 0.021
	we need 5 ECUs for 5 years, which is 5 x (5 x 365 x 24) = 219.000 ECUs
															  219.000 x 0.021 € = 4600 €
practically that's prohibitively expensive. there's no way around either re-implementing the m/r job or give up the countries and AS (which account to 80% of the computation) - or both.
it's also important to consider that EC2 computation costs 4x that of EMR (elastic map reduce) - although it's the same computing power. we need EC2 only for mongodb m/r. so the mongodb solution is from the start 4x more expensive than hadoop. but EMR doesn't support JavaScript (node.js streaming). one more reason to go with hadoop (java or pig).

a dedicated server of our own would cost about € 1300 (according to c't magazine 24/2013, 6 core 3.2 Ghz core i7 CPU) and provide about 20 ECU. it would need 1.25 years to crunch 5 years of data. cost for electricity (160 Watt) would have to be added, approx. 200 €. for the cost of the EC2 installation above we would get 3 servers, and a result in 4 months. after that the servers are worth about 2500 €, so the total cost would be about 2000 € (optimistically).

#### working notes 21/11/13
not much success with node.js streaming and hadoop. no help from mailing list and chat either.    

switched back to the original javascript mapreduce job for mongo since that has to be optimized anyway.    
checked processing times again:

	only server count					 2:15 min	   1 line
	clients + very sparse server data    4 min       100 lines  
	clients + server                    12 min       800 lines
	clients + server + countries        24 min    20.400 lines
	clients + server + countries + as   53 min    90.000 lines

assuming that initialisation takes 2 minutes we get the following times

	initialisierung			             2 min         0
	only server count					 0:15 min	   1 line	 0.07 lines/sec
	clients + very sparse server         2 min       100 lines   0.83 lines/sec
	server complete                      8 min       700 lines   1.46 lines/sec
	countries                           12 min    20.000 lines  27.78 lines/sec
	as                                  29 min    70.000 lines  40.22 lines/sec

that means that we loose a lot of time in the server aggregation. maybe initialisation can be simplified. that code is very verbose so we''ll try to simplify it on the way.   
the loops for country and as could be optimized by adding a datastructure which allows the lookup of countries/ASs already aggregated in log(O) time. currently they are just ordinary javascript arrays and we don't know how optimized these are.   
also we need more timing data. added some printjson(Date.now()); but milliseconds are not really exact enough.   
there are no debugging tools for mapreduce on mongodb either.
	TODO
	implement template for standard constructs in map and reduce
	check if it's possible to emit only those fields that carry actual values, leaving default initialisation to the reduce part
	replace for-in by a loop because its inefficient
	implement better looping through sorted arrays and binary search, maybe with underscore
	check examples for other ideas


more numbers    
	> db.import.distinct("date").length
	18672
	> db.import.distinct("as").length
	2014
	> db.import.distinct("cc").length
	124
meaning the database contains data for about 2 years, not 5 as I thought     
during these 2 years we have 124 distinct countries and 2014 distinct AS

	> db.import.distinct("_id",{"date" : "2013-04-03 23"}).length
	4704
meaning we have 4703 servers and 1 client document for that date

#### working notes 21/11/13
performance baseline    
the following most basic fact took 2:15 min to aggregate	
	> db.facts.find({"value.date" : "2013-04-03 23"})
	{ "_id" : "2013-04-03 23", "value" : { "date" : "2013-04-03 23", "span" : 1, "servers" : { "total" : { "count" : 4600366 } } } }
	
node.js steraming now basically running though throwing script errors on the node.js level - I take that as a good sign but right now am more occupied with optimizing the mapreduce job for mongodb. but after that's done aquiring some node.js proficieny is the next step to take anyway.
but if initialization in mongodb takes only 2 minutes the speed gain through the switch to node.js might be minimal - since my main hope was lying on skipping the BSON-JSON conversion step. in all other respects I doubt that there's much difference since it's the same v8 engine in node.js and mongodb 2.4
totally different question btw is how the spidermonkey engine in mongodb 2.0 performs (otherwise than not being multithreaded, obviously)


#### working notes 26/11/13
found the bug why the script was running so slow:
had accidently removed the query condition for date (line 2662)
now 1 hour is aggregated in 2 minutes.
OMG.
(found it because i realized that i had way to much servers: 4.600.000. realized that that might be because i'm summing up *all* servers in the import database. realized taht that might be because the query is not working. realized that i had commented out and subsequently deleted the query completely)

now the question is if i should continue work on a "cleaner" implementation of the mapreduce script. it definitely is quite verbose. but getting a prototype running might be more important right now.

i'll definitely not need to continue work on a hadoop implementation right now (although that's a pity because i was very close to getting something started) since with the current performance i can aggregate 1 year of data in about 10-12 days on my macbook. that's fast enough.