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




## Technical Overview

In a nutshell:
	
* Tor metrics data get's imported into a [MongoDB](http://www.mongodb.org/) database.  
* Aggregation and indexing transforms the imported data into a big fact table suitable to drive the visualization. 
* Visualization Framework is [D3.js](http://d3js.org/), additionally [Crossfilter](http://square.github.io/crossfilter/), maybe also [dc.js](http://nickqizhu.github.io/dc.js/).   
* Client side application framework used is [Angular.js](http://angularjs.org/).
* Targeted web browsers are Chrome and Firefox. Others might work as well.
Most of the visualization facets get rendered seperatly, on seperate planes (technically DIVs).   
The application prepares the joins and our eyes carry them out.   

	TODO 	the different steps and how they relate should be explained more thoroughly


### Database  
Since the data schema is quite flat and in a certain flux a NoSQL database seems appropriate. 
[MongoDB](http://www.mongodb.org/) was [chosen](http://kkovacs.eu/cassandra-vs-mongodb-vs-couchdb-vs-redis "Cassandra vs MongoDB vs CouchDB vs Redis vs Riak vs HBase vs Couchbase vs Neo4j vs Hypertable vs ElasticSearch vs Accumulo vs VoltDB vs Scalaris comparison") because of it's JavaScript support which promises nice integration with client side logic. 
Since the complexity of the underlying data is rather limited MongoDBs query capabilities, although less expressive than SQL, should be sufficient. 
With a visualization tool the most interesting joins are anyway those that are carried out in the eyes of the user.   
The ability to store JavaScript-code in the MongoDB might help in the development of an analyzer toolkit. 
Support for geo-data could be beneficial either (no other NoSQL database has that so easily available AFAIK).  


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

For a more detailed and extensive description see the [**doc.tor**](https://github.com/tomlurge/visionion/blob/master/doc/tor.md) page.




## Import data

	TODO	re-formulate

- what data is available
- how do we load it into the database

A [discussion](https://github.com/tomlurge/visionion/issues/5) about client data provides a good example about how an issue that seems intuitively clear to the unanticipating user quickly can become complex and subtly entagled. 
In [**doc.gestalt**](https://github.com/tomlurge/visionion/blob/master/doc/gestalt.md) we try to have a more thorough take on what the numbers at hand actually represent.

The initial database import schema has only one collection for all node types: 'client', 'bridge' and 'relay'. 
(A "collection" is the MongoDB equivalent to a "table" in an RDBMS. 
Likewise a "document" is the equivalent to a "table row" in an RDBMS). 


### Data Schema Outline 

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

Check out an [**example**](https://github.com/tomlurge/visionion/blob/master/doc/import.md) of each of the 3 types of documents the import collection to get a better idea of its structure.


_flags_   
Most of the flags collected in the "relays" import collection actually serve so little purpose that we will not use them in the visualization, to avoid visual clutter and distraction and improve performance on the backend. 
They will be imported into the database but will not be aggregated. 
Only the flags "Fast", "Stable" and "Authority" will be aggregated for the following types of relays:   

				Fast	Stable	Authority
	Guard		x		x
	Middle		x		x
	Exit		x		x
	Directory 					x


_default values_   
Please see the seperate doc about [**default values**](https://github.com/tomlurge/visionion/blob/master/doc/defaults.md).



### JSON schema  
The above has been transformed into a JSON [schema](schema.json).   

The purpose of the schema is twofold: combined with a [validator](https://github.com/garycourt/JSV) it can provide some control over what data get's inserted into the database. Since MongoDB doesn't perform any consistency checks this can be useful to detect if somethings goes wrong.
More importantly the validator can spot data that's not handled by the schema and trigger the addition of an appropriate (probably rather generic) query interface to the visualization GUI.
		
If the outline above and the schema get out of sync, the *outline is authorative*. 
This may seem unusual but it reflects reality...   
For information about JSON Schema see [Wikipedia](http://en.wikipedia.org/wiki/JSON#Schema) and the [Draft Specification](http://datatracker.ietf.org/doc/draft-zyp-json-schema/?include_text=1).


### Import checks  
We are making assumptions about the imported data that wouldn't hurt to be checked. 
E.g. a query checking if Bridges and all other types of relays are really disjunct sets:

	TODO





## Data aggregation


### MongoDB    
In proven OLAP fashion we'll aggregate all data into one big facts collection ('collections' are the MongoDB equivalent to SQL tables). 
MongoDB does fit this purpose well because it allows sparsely populated collections. As a document store it also supports nested collections which comes in very handy when the data sets retrieved from the network are not as uniform and regular as we'd like them to be. As MongoDB is a schemaless database we do not have to worry about future structural changes. When e.g. more performance data becomes available we can seamlessly add it without having to touch any of the existing documents.
MongoDB has some constraints of it's own that need to be taken into account when designiing the facts collection:
- no joins    
 (but we can work around that by visually layering querie results on top of each other)    
- only 64 indices per collection (equals table in SQL-speak)    
 (slightly easing this problem: composite indices)    
- only one field in an index can be an array    
 (no workaround: we have to avoid arrays if they aren't really necessary)   


### Indexing the import tables    
During mapReduce MongoDB can only take advantage of two indices: one covering the query and one covering the sort. For that reason the import collection will need to be indexed by date to support the query. Sort is less clear (to me). Maybe an index over type would be beneficial.  


### Aggregation   
Aggregation of the imported data is necessary for several reasons:    
. the imported server data is ordered by individual server by date but most of the time we will not want to look at individual servers but at all servers or at a subset of servers sharing certain attributes during a given timespan.     
. the imported data reflects only a certain view on the underlying network, highly influenced by how the data is collected. A visualization needs to provide other and more diverse perspectives and the imported data has to be aggregated in different shapes and combinations to support the visualization accordingly. A well prepared database is a prerequisite for a responsive and interactive visualization.    

Step 1 - aggregation of imported data     
In a first step imported data will be added to the facts collection.       
Step 2 - consolidation and simplification    
Then the facts table will be aggregated into longer timespans and other simplifications (e.g. regions) to improve retrieval performance.   
Step 3 - indexing    
The aggregated collections will be indexed to gain further speed advantages.    
Additionally indices over the 3 import collections are needed to facilitate generic and unforseen queries and lookups on specific nodes.     


#### aggregation step 1 : import data aggregation 

tl;dr: a schematic example of a row of the resulting facts collection can be found [here](doc/factsRow.md)   

	TODO 	check if the relative link works

A rather minimal fact table would include:   
	(4 relays x 2 flags + 3 nodes) x 2 bandwidths = 22 bandwidths
But we need the intermediate steps too because we also want to know these numbers for groups of nodes like all stable relays or all servers. That already leads to more than 30 bandwidth values - a rough first estimate and a very reasonable and encouraging result. But this sketch neglects a lot of information that we want to make visible, and the devil lies in the detail (-ed data sets).    

An exhaustive fact table should encompass everything we know from a certain timespan, about all node types and in any dimension. 
We'll see how far we can get on the way.

	0	_id, date, span
	1	clients
			total					int
	2		atBridges				int
	3		atRelays				int
	4		cip4					int
	5		cip6					int
	6		cptObfs2				int
	7		cptObfs3				int
	8		cptOr					int
	9		cptOther				int
	
For clients this is all we know, save the clients per country which we'll tackle later. 
Clients @bridges and @relays are mutually exclusive, the other fields aren't. We'll just list them one after another. 
For transports we currently have 4 possible values: obfs2, obfs3, OR, other. 
More transports may be developed in the future.    
It seems sensible to add  a result object that has fields for every possible combination of transports offered by a bridge. 
The value is always the number of clients complying to the field type. 

									legend			c	osv	tsv	bwa	bwc	prb	pex	
	10	servers
			total					object			x	x	x	x	x	
	11		bridges
				total				object			x	x	x	x	x			
	12			brpEmail			object			x	x	x	x	x			
	13			brpHttps			object			x	x	x	x	x		
	14			brpOther			object			x	x	x	x	x
	15			breTrue				object			x	x	x	x	x
	16			brtObfs2			object			x	x	x	x	x
	17			brtObfs3			object			x	x	x	x	x
	18			brtObfs23			object			x	x	x	x	x
	19		relays		
				roleAll
					total			object			x	x	x	x	x	x		
	20				flagNone		object			x	x	x	x	x	x					
	21				flagFast		object			x	x	x	x	x	x
	22				flagStable		object			x	x	x	x	x	x
	23				flagFastStable	object			x	x	x	x	x	x
	24			roleGuard		
					total			object			x	x	x	x	x	x		
	25				flagNone		object			x	x	x	x	x	x
	26				flagFast		object			x	x	x	x	x	x
	27				flagStable		object			x	x	x	x	x	x
	28				flagFastStable	object			x	x	x	x	x	x
	29			roleMiddle		
					total			object			x	x	x	x	x	x		
	30				flagNone		object			x	x	x	x	x	x
	31				flagFast		object			x	x	x	x	x	x
	32				flagStable		object			x	x	x	x	x	x
	33				flagFastStable	object			x	x	x	x	x	x
	34			roleExit		
					total			object			x	x	x	x	x	x	x	
	35				flagNone		object			x	x	x	x	x	x	x
	36				flagFast		object			x	x	x	x	x	x	x
	37				flagStable		object			x	x	x	x	x	x	x
	38				flagFastStable	object			x	x	x	x	x	x	x
	39			roleDir
					total			object			x	x	x	x	x
	40				authorityTrue	object			x	x	x	x	x

That's 34 columns about servers, including the most common flags. Still looks manageable.
And we cover a lot of ground here since the value is not only a number like with clients but it's an object with several field:value pairs: count, bandwidths and software versions for all server nodes, probabilities and exitports where applicable.
The result object en detail:
First every object contains a field counting the number of nodes that comply to the field type.
Second for each of these node types 2 bandwidth values can be calculated: advertized and consumed bandwidth.
Third all objects contain sub-objects for Tor software version and operating system.
Finally some node types have addidtional fields in their results object:    
- the relays also carry a probabilty field   
- exits also carrys the permitted exit ports. 
  There are 3 possible values and every combination thereof which makes 7 fields.   
  We'll add these as a sub-object to the result object.    

This elegant way of using the columns for more than one result type is possible because bandwidths, node counts, probabilties and the exit ports are independent from each other. 
There's no way how we could construct a different perspective where bandwidths and node counts don't correlate in the same way.

But now we've reached the end of low hanging fruit. 


_Mutually non exclusive relay types_    
Up to now it looks like we have everything covered. Or is there a combination of type, flag and probabilty that we couldn't find in this table in one easy step?
The astute reader will have noticed that there indeed is indeed a problem: guards, middles, exits and directories aren't mutually exclusive. To capture any combination thereof we would need not only 4 but 15 rows, so add 9 to 40 = 49. 
Plus we wouldn't want to loose track of the flags and add another - hold your breath - 66 rows. 

	combinations of relay types and flags
	type	g	d	gd
			m		gmd
			gm		md
			gme		ged
			ge		gmed
			e		med
			me		ed
	flags	4	2	6
	total	28	2	36
					66
					
Alltogether 115 columns. Maybe we can get rid of this scary situation by stuffing the combinations of types and flags into a seperate collection? 

_OS or Tor software versions_    
Adding OS or Tor software versions as further dimensions would mean blowing up the dimensionality to 37 x 5 = 195 or 37 x 8 = 296 respectively and I can't see any scenario in which this effort would be justified. And that still leaves out the 40 combinations of OS and Tor software versions.
Probably Tor software version and OS versions are only of limited significance. I tend to add them to the result objects of the main 31 server columns sketched out above and be done with it. 
13 more field:value pairs added to each result object, 5 for OS and 8 for TS: would that seem useful?
Maybe even cut that down and only add them to bridges and the 4 relays types, without honoring the flags?

At least theoretically interesting iare the 40 possible combinations of operating system and tor software compared with any of the other dimensions, e.g. the 8 basic node types (without flags) = 320 permutations. Not nice, but doable in a seperate collection. Would that be useful?

_Areas_    
But so far this was all peanuts compared to country and AS information. 
These are enormous value spaces that - if they are not reduced - need to be at the root of a tree like structure, not at the leaves. 
Therefor we have to change perspective: we can't start from the perspective of servers and clients anymore, we have to start from the properties country and AS.

Again there are differences: while there exist about 37.000 autonomous systems, there are less than 200 countries - which is still a lot, but manageable. We already have very interesting data about clients per country, which makes it mandatory to come up with a decent schema that can handle all countries. The solution is an array on country:value objects, each populated by a rather complex result object, like so:

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


_aggregate unique items_
maybe it would be useful to have a special collection called
	uniqueItems
that contains arrays of all values that ever turned up for a given field, e.g.
	countries
	autonomous systems
	nicknames
wouldn't it?


_uptimes_    
A node may not be online in every part of an aggregated timespan. 
We don't count servers that haven't been available for at least 30% of a timespan. 
That way we are counting the bandwidth a little conservativ, while we are too optimistic regarding the number of available servers.


_scattering / spreading / evenness of distribution_    
So far we only examined aggregated groups of node types. To understand distribution over the individual nodes we have to collect some 10 or 100 or whatever biggest nodes in each category. 
These numbers can be added to the server result objects explained above. 
They can be added alongside applicable fields in the country objects, namely: relay (guard, middle, exit, dir), bandwidths, probabilities, flags. 
Likewise for AS.
And we should establish some measure to indicate how even the distribution is (without having to look at individual nodes).
But this is just a reminder and a list of notes. We agreed to postpone this domain.

	TODO


#### aggregation step 2 : consolidation and simplification  

aggregations over time and space. 
Time quite obviously translates to the ability to watch the data from the finest level available - hourly - to an overview that shows the whole timespan available - currently 5 years - in a single view. The equivalent to zooming in and out. 
Space translates to the ability to group countries to meaningful regions, either continents or geopolitical regions like "arab spring".
	

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


We probably need to pre-aggregate these timespans in MongoDB (which provides map/reduce functionality and an "aggregation framework". Maybe the [Cube](https://github.com/square/cube) project (based on D3.js) can be used. 


_continents and political regions_    

	TODO




**Issues**    


**Background Information**     
Wikipedia has quick introductions to the meaning of [mean](http://de.wikipedia.org/wiki/Arithmetisches_Mittel), [median](http://de.wikipedia.org/wiki/Median) and [mode](http://de.wikipedia.org/wiki/Modus_%28Statistik%29) (the links point to the german edition).

Some material about MongoDB and OLAP    
[MongoDB - Materialized View/OLAP Style Aggregation and Performance (stackoverflow)](http://stackoverflow.com/questions/11810911/mongodb-materialized-view-olap-style-aggregation-and-performance)    
[Another useful thread on stackoverflow](http://stackoverflow.com/questions/3478916/what-should-i-choose-mongodb-cassandra-redis-couchdb), see especially the second answer    
[MongoDB OLAP with pre-aggregated cubes](http://osdir.com/ml/mongodb-user/2011-01/msg01542.html)     
[DataBrewery Cubes](http://databrewery.org/cubes/doc/)      
[MongoDB OLAP](https://groups.google.com/forum/?fromgroups=#!searchin/mongodb-user/MongoDB$20OLAP/mongodb-user/Aaxn813-oO4/PMrYH7Mr_2YJ)     


<!--

MAIL May 1


Speaking of aggregation, should there be a threshold of non-null entries
below which we don't aggregate an entry?  For example, if a relay was
only running for 1 out of 6 hours, should we rather exclude it?  If so,
what fraction of non-null entries would we require?
...
I think Onionoo includes a data point if it has data for at least 20% of
the considered interval, and considers the data point as null otherwise.
So, for a 6 hour interval, having data for 1 hour wouldn't suffice, but
2 hours or more would be okay.
...
Mode in math sense, so most frequent element, breaking ties somehow.
So, if a relay upgrades in a 6-hour period, we'll have to pick either
version number for the 6-hour data point.  Using the mode and breaking
ties by picking the larger version number, we'll have these results:
023 023 023 023 023 024 -> 023
023 023 023 023 024 024 -> 023
023 023 023 024 024 024 -> 024
023 023 null null 024 024 -> 024
And if we use the 20% threshold for non-null values:
023 024 null null null null -> 024
023 null null null null null -> null


MAIL May 25

Also, we should distinguish more clearly between measures and dimensions
(see m/d column below).  I envision a single fact table that's a
combination of the current nodes and clients table.

in   code   m/d  description     type
+---+------+----+---------------+--------------------------------------
rbc  _id    d    document ID     dict of:
                                - datetime, ISODate
                                - span, integer, in hours
                                - type: "relay", "bridge", or "client"
                                - fingerprint, string, only rb span=1
                                - nickname, string, only rb span=1
r    rtype  d    type of relay   some of "Guard", ...
r    rflag  d    relay flags     some of "Fast", "Stable", ...
rb   tsv    d    software ver.   string
rb   osv    d    operating sys.  string
r    as     d    auton. sys.     integer
r    pex    d    perm. exit p.   array of integers
r c  cc     d    country code    string
b   brp    d    bridge pool     string
b   bre    d    EC2 cloud       boolean
bc  brt    d    pluggable trans string
 c  cdc    d    direct conn.    boolean: connect via relay or bridge?
 c  cip    d    ip version      integer: connect via IP version 4 or 6
rbc  nodes  m    # of nodes      float
rb   bwa    m    bw advertised   float
rb   bwc    m    bw consumed     float
r    pbr    m    cons. weight    float
r    pbg    m    guard prob.     float
r    pbm    m    middle prob.    float
r    pbe    m    exit prob.      float


-->





## Indexing

* import collections   
	relay: node+timespan to look up specific nodes   





## aggregation admin interface

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




## Usecases

How well would the schema developed so far from the inherent characteristics of
the data and the limitations of the database fit the usecases we already
gathered?

### 1

Visualizing the total pbr of all relays with a certain characteristic. 
For example, what's the total pbr of all relays in Germany?    
_._ covered by the aggregations outlined above! (by the countries subcollection)

### 2

Right now, if you ask for relays running version 0.2.4, it looks up those numbers in the static JSON file that metrics exports.  You cannot ask for the number of relays running version 0.2.4 on Linux, and you cannot ask for bandwidth provided by relays running version 0.2.4.   
_._ I described the aggregation required to fulfill this usecase above and dismissed it as too expensive. 
But it may be tackled again.    

### 3

One could ask how many bytes per day are transported by relays running Linus. 
Or, what's the probability of having a Windows relay as your entry guard.   
_._ more software version tasks. 
My question is still: is this really important on such a detailed level?   

### 4

Note that you wouldn't have to aggregate by single relay or bridge, but you could aggregate all relays or bridges with the same combination of dimensions.  For example, you only care about facts like "on May 23, 2013, there were 25 relays running with type Guard and Middle, with the Fast and Stable flag, with version 0.2.3.x, on OS X, in AS 1234, not permitting any ports, in Germany".    
When I wrote that example, I wanted to express the maximum level of detail that you'd have to keep to answer any question that anybody could ever want to ask.  I wanted to say that you don't need to remember which particular relay fingerprints are behind that number.  But you're right that nobody would actually want to know the answer to such a detailed question.    
Starting from the other end, I suggest you start with questions touching only a single dimension: "how many relays were there in Germany?" or "how many relays were there on OS X?"  And when people want to know more, like: "how many relays on OS X were there in Germany?", it would be good if the system can be extended to answer such questions.  But actually extending it could be step two.    
_._ The schema above could be extended, with not too much effort, to cover such queries. In this case I would probably add 5 os columns relay to the country sub-collection.   

### 5

There's a large emphasis on node numbers, but really, bwa, bwc, and pbr are more important measures than the number of nodes. Here's my idea: how about you keep osv_r, tsv_r, fast_r, stable_r, and as_r and store arrays of [#nodes, bwa, bwc, pbr] for each of them?  For osv_r, tsv_r, and as_r that would mean storing an array of arrays, and for fast_r and stable_r it would be just that array.    
_._ I hope I took this into account with the new aggregation concept.   

### 6

But still, visualizing the average pbr (consensus weight fraction) or all relays doesn't make much sense to me.  The pbr values of all relays add up to 100%, so that the average is always 1 / #relays. What makes more sense is visualizing the total pbr of all relays with a certain characteristic.  For example, what's the total pbr of all relays in Germany? That makes much more sense to me.    
_._ covered    




## Visualization Interface Wishlist

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




## Visualization Mechanics Wishlist
  
  * notify the client of new fields so he can add them to the generic interface 

  * RESTfulness: having the URL represent the complete state of a visualization e.g. including zoom factor, 
    active facets, selected clipping etc




## JavaScript Issues
  
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




## Data Import

An importer tool takes metrics descriptors as input and produces JSON or BSON
to be imported into MongoDB.  Such a tool should use Stem, which is a Python
library that parses all relevant metrics descriptors.  I think it even has an
export function that may or may not support JSON.  See Tor ticket #6171 for
more details: https://trac.torproject.org/projects/tor/ticket/6171.
[import.py](visionion/blob/master/import/import.py) is a simple data importer
that uses Stem to read consensuses and server descriptors and that prints out
dicts that could be imported into MongoDB.




## Next Steps

  * sketches of a visualization
  
  * more documentation of pre-import aggregation (extract from karsten's mails)
  
  * aggregation of visualization primitives and timespans
  
  * figure out how to control MongoDB via external scripts   
      http://docs.mongodb.org/manual/tutorial/write-scripts-for-the-mongo-shell/
      e.g. prompt:> mongo localhost:27017/tor ~/visionion/aggregation.js
    particularily aggregation, indexing and status/control-queries
  
  * Then a prototype visualization of some graph will be the first occassion to connect the database, the web application framework and the visualization library.
  
  * When that's accomplished more experiments need to be conducted to see if it's really possible to have more than one D3 instances on one webpage and how they can interact.
  
  * Then the real work on the visualizations can begin.
  
  * tbc




## Setup guide

On OSX:

	brew install mongodb
	
	# Start mongo db and create the database
	mkdir MONGOdata
	mongod --dbpath MONGOdata
	
	# Import the data
	Get sample data (caveat: it might not always be available):
	https://people.torproject.org/~karsten/volatile/nodes-2013-08-14.json.gz
	Unzip it. Then import it into MongoDB from your system shell:
	mongoimport --db visionion --collection import --stopOnError --upsert --file ~/nodes-2013-08-14.json
	
	# start mongo shell
	mongo
	
	# ensure index over date of import collections
	db.import.ensureIndex({date:1})
	db.import.ensureIndex({type:1})
	
	
	

## Notes on using the mongo shell

	# run a javascript file through a new mongo shell
	mongo localhost:27017/tor visionion/aggregateFacts.js
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


