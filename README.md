# visionion

visionion aims to provide a webbased visualization tool for Tor metrics data.

The [Tor](https://www.torproject.org/index.html) project is primarily a system to provide a user with anonymity while on the internet.
It adds to this some means for censorship circumvention as adversaries try to block access to Tor alltogether.
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
A simple graph of values over a period of time can already be grasped much more easily than a list of numbers.
Visually combining and contextualizing different aspects of data in one place can help understand causes, effects and correlations.
When there is a problem to which not only the right answer but also the right question is not known a visualization can help develop an understanding of what's going on in the first place.
Certainly this is an ambitious task for which the visualization has to provide interactive controls and visual malleablity.

How to achieve all this?
Basically, take all network graphs and merge them into one single graph with plenty of options.
Users should be able to navigate into any factor (bridge vs. relay, country, flags, Tor software version, operating system, EC2 cloud bridge or not) and learn the total relay number or advertised bandwidth or bandwidth history or any other available metric for their selection.

**Scenario 1 : a classic curve**
The most prominent usecase is the timeline with a graph representing volumina of bandwidth or number of hosts or number of clients etc. on the vertical axis.
This scenario is currently implemented by the Tor metrics project [graph visualizations](https://metrics.torproject.org/network.html).

**Scenario 1a : curves layered on each other**
It should also be possible to layer timeline graphs for the same time period but with different subject on each other to compare eg correlations between consumed bandwidth and number of clients.
This scenario is currently available as a prototype at [interactive graphs](http://tigerpa.ws/tor_metrics/).

**Scenario 2 : adding detail on an orthogonal plane**
Imagine a plane orthogonal to the graph, representing some other data at that point in time eg adding to the graph of Linux driven relays a cake diagram of all operating systems driving relays.
This is one step beyond simple layering of graphs. Combining different visualization techniques like timeline and cake diagram visualizes relations between different categories of data. Control shifts from the visualization framework to the web application.

**Scenario 3 : geography**
A ground plane on the floor might show geographic distribution of linux driven relays and how much bandwidth each of them handles, the imaginary center of Linux driven traffic at the crosspoint of the first two planes.
The geographical dimension is not very strongly represented in the raw data but nonetheless sometimes an important perspective.

**Scenario 4 : events**
Now add markers for certain events: the day when traffic from linux driven relays peaked, the day it hit an alltime low, the days it plummeted, the days it spiked etc.
Markers point the user in directions that might be worth to explore. Its driven by some analytics in the background.

**Scenario 5 : amassments**
Emphasize the biggest nodes for a given metric and their share of the total.
Facilitate checks for (de-) centralizations in the infrastructure.


### More usecases
* Visualizing the total pbr of all relays with a certain characteristic, e.g. what's the total pbr of all relays in Germany?
* number of relays running version 0.2.4 on Linux.
* bandwidth provided by relays running version 0.2.4
* bytes per day transported by relays running Linux.
* number of relays running with type Guard and Middle, with the Fast and Stable flag, with version 0.2.3.x, on OS X, in AS 1234, not permitting any ports, in Germany, on May 23, 2013   (maximum level of detail)
* total pbr of all relays with a certain characteristic. E.g. what's the total pbr of all relays in Germany?
* bwa, bwc, and pbr are more important measures than the number of nodes.




## Technical Overview

In a nutshell:

* Tor metrics data get's prepared and imported into a [MongoDB](http://www.mongodb.org/) database.
* Aggregation and indexing transforms the imported data into a big fact table (a "[cube](http://en.wikipedia.org/wiki/OLAP_cube)" in OLAP parlance) suitable to drive the visualization.
* Visualization Framework is [D3.js](http://d3js.org/), additionally [Crossfilter](http://square.github.io/crossfilter/), maybe also [dc.js](http://nickqizhu.github.io/dc.js/).
* Client side application framework used will probably be [React.js](http://facebook.github.io/react/), or [Angular.js](http://angularjs.org/) later.
* Targeted web browsers are Chrome and Firefox. Others might work as well.
Most of the visualization facets get rendered seperatly, on seperate planes (technically DIVs).
The application prepares the joins and the eyes carry them out.


### Database
Since the data schema is quite flat and in a certain flux a NoSQL database seems appropriate.
[**MongoDB**](http://www.mongodb.org/) was [chosen](http://kkovacs.eu/cassandra-vs-mongodb-vs-couchdb-vs-redis "Cassandra vs MongoDB vs CouchDB vs Redis vs Riak vs HBase vs Couchbase vs Neo4j vs Hypertable vs ElasticSearch vs Accumulo vs VoltDB vs Scalaris comparison") because of it's JavaScript support which promises nice integration with client side logic. MongoDB also satisfies an important requirement by the Tor project: it's available as a stable Debian package, although slightly dated ([MongoDB 2.0.6](https://packages.debian.org/search?keywords=mongodb&searchon=names&suite=stable&section=all)), and as a rather recent version in Wheezy backports ([MongoDB 2.4.8](https://packages.debian.org/search?keywords=mongodb&searchon=names&section=all&suite=wheezy-backports)). In retrospect it should be said that no other database suitable to our requirements was available as a package in the stable Debian distribution. We were lucky.

A super-quick introduction into MongoDB-specific terminology: a **collection** is the MongoDB equivalent to a "table" in an RDBMS and likewise a **document** is the equivalent to a "table row" in an RDBMS.

MongoDB also fits our purpose well because its performance doesn't suffer from sparsely populated collections.
As a document store it supports nested collections which comes in handy when the data sets retrieved from the network are not as uniform and regular as an RDBMS likes them to be.
As MongoDB is a schemaless database we do not have to worry about future structural changes.
When e.g. more performance data becomes available we can seamlessly add it without having to touch any of the existing documents.

Together with these benefits come some constraints that need to be taken into account when designiing the facts collection:

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


### Web application framework

[React.js](http://facebook.github.io/react/)is promising candidate because of it's declarative style and it's attractive approach to routing and view updates. Ressources:

- [React Getting Started](http://facebook.github.io/react/docs/getting-started.html)
- the accompanying routing architecture [Flux](http://facebook.github.io/react/blog/2014/05/06/flux.html)
- [D3 and React - the future of charting components?](http://10consulting.com/2014/02/19/d3-plus-reactjs-for-charting/)
- From the D3 creator himself: [bar + sum: d3.js, react.js, & Flux](http://bl.ocks.org/milroc/d22bbf92231876505e5d)
- Scalable Data Visualization - [React.js Conference 2015 talk and demo] (https://github.com/znation/scalable-data-visualization)

But there is a problem: both React.js and D3.js want to control the DOM. 
It is possible to tell React to stay away from the D3 part of the DOM but the question is what benefits React can then provide to us.
- [Ways of Integrating React.js and D3](http://ahmadchatha.com/writings/article1.html)


[Angular.js](http://angularjs.org/) is runner up. It integrates nicely [with](http://briantford.com/blog/angular-d3.html "Using the D3.js Visualization Library with AngularJS") D3.js. and [with](http://square.github.com/cube/) MongoDB (also [here](http://square.github.com/cubism/)).
 A prototype with Angular, D3 and MongoDB is documented [here](http://adilmoujahid.com/posts/2015/01/interactive-data-visualization-d3-dc-python-mongodb/). THere's also a new book [Data Visualization with D3 and AngularJS](http://shop.oreilly.com/product/9781784398484.do).
But AngularJS currently undergoes a major rework. Version 2 is expected for the end of 2015 and will (try to) incorporate the good (declarative) parts of React.js. 

[Backbone] is a rather pedestrian solution but will be tedious as soon as the interface get's more elaborated.

[Ember] is used in the company of D3's developer Mike Bostock. Ember is rather opinionated and bloated. OTOH in our case framework size is negligable compared to data size. And the strength of Ember is that it can provide results quickly.

Status: undecided. Advantage for Angular.

>TODO
>we'll know more after the first prototype.

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

	node							everything in the tor network
		client					the users
		server					everything serving the user
			bridge				special entry points to circumvent blocking
			relay					the actual anonymization network, with different roles:
				guard				entry points into the network
				middle			intermediary nodes on anonymizing route
				exit				now anonymized, continue route to actual destination
				directory		some auxiliary services

Some of these node types are mutually exclusive, some are not:

- a node may have been configured as bridge before or after being configured as a relay and that same node can switch to being a client at any time. But:
- a node can't be a client and a server at the same time.
- a server node can't be a bridge and a relay at the same time.
- a relay node quite commonly fulfills various roles simultaneously: a relay can be configured as guard node, middle node, exit node and directory mirror at the same time.

All this might be a bit confusing at first. What is most important to realize is that adding up the different kinds of relay nodes - guard, middle, exit and directory - will result in a number much bigger than the relay nodes actually available in the network.
For a more detailed and extensive description see the extra page on [**tor**](doc/tor.md).



## Import data

Visionion is driven by data collected through the [Tor metrics Project](https://metrics.torproject.org/‎).
This data is not always easy to interpret and sometimes fragmentary or even guesstimated for reasons of (preserving) anonymity.
In the page on the [**gestalt**](doc/gestalt.md) of these numbers we take a more thorough look on how they are gathered and what they actually represent.

Before Tor metrics data can be imported into MongoDB is has to be gathered and prepared. The respective [importer code](https://github.com/tomlurge/visionion/tree/master/importer) is part of this project (and code repository) but outside the scope of this documentation. It is maintained by the Tor metrics project.

### Data Schema Outline

The initial database import schema has only one collection for all node types: 'client', 'bridge' and 'relay'.
The following import outline documents the fields and values that each imported document may have depending on the type of node it represents.
(The field names are rather short to achieve better performance in MongoDB.
Memorizing them or looking them up again in the table below will be helpful when reading through the rest of the documentation and the code.)

	node		field	desc												type		subtype
	+-------+-----+---------------------------+-------+------
	cbr			_id		document ID									string				
																													
	cbr			updt	timedate the doc was added	string				
	cbr			span	period of validity					string				
																													
	cbr			date	datetime										string				
																													
	cbr			type	type of document						string				
	c				cb		clients at bridges					integer				
	c				cbcc	clients@bridges per country	object				
	c				cr		clients at relays						integer				
	c				crcc	clients@relays per country	object				
	c				cpt		bridge pluggbl.transp.used	object				
	c				cip		ip-version used							object				
	 br			node	node id											string				
	 br			nick	nickname										string				
	 br			bwa		bandwidth advertized 				integer				
	 br			bwc		bandwidth consumed 					integer				
	 br			tsv		Tor software version				string				
	 br			osv		operating system						string				
	 b			pool	bridge pool     						string				
	 b			ec2		bridge is in EC2 cloud			boolean				
	 b			plug	bridge pluggable transport	array		string
	  r			role	roles/functions of relay		array		string
	  r			flag	flags 											array		string
	  																			 								
	  r			pr		consensus_weight_fraction		number				
	  r			pg		guard_probability						number				
	  r			pm		middle_probability					number				
	  r			pe		exit_probability						number				
	  r			exp		permitted exit ports				array		integer
	  r			as		autonomous system						integer				
	  r			cc		country code								string				


	LEGEND --------------------------------------------------------------------
	node				indicates, for which type of node the field is relevant,
							c (clients), b (bridge), r (relay)
	field				name of the field in the database
	desc				description,	short characterization
	type				as defined in 3.5 of 
							http://datatracker.ietf.org/doc/draft-zyp-json-schema/?include_text=1
	subtype			if type is array, type of array content
	valuespace	expected values
							for lists of possible values "some of" where multiple values are
							possible or "one of" where possible values are mutually exclusive
	(*)					if the relay provides the functionality in question for at least
	 						half of the timespan in question
	 					
	 						
		node		field	aggregation	valuespace
  	+-------+-----+-----------+----------
  	cbr			_id		(*)					fingerprint/'client'+span+date
  														eg 'fingerprint-1-YYYYMMDDHH'
  	cbr			updt							ISO 8601 extended format YYYY-MM-DDTHH:mm:ss.sssZ
  	cbr			span	-						length of the interval this dataset describes:
  														one of: "h"(hourly), "d" (daily), "m" (monthly)
  	cbr			date	-						start of the time span that this document describes
  														format "YYYY-MM-DDTHH:MM" as defined by ECMAScript
  	cbr			type							one of: "c" (clients), "b" (bridge), "r" (relay)
  	c				cb		mean
  	c				cbcc	mean				{cc:integer ...}
  	c				cr		mean
  	c				crcc	mean				{cc:integer ...}
  	c				cpt								{obfs2/obfs3/OR/unknown:integer}
  	c				cip		mode				{v4/v6:integer}
  	 br			node	-						Tor fingerprint
  	 br			nick	mode				nickname of relay
  	 br			bwa		mean				B/s
  	 br			bwc		mean				B/s
  	 br			tsv		mode				one of: 010, 011, 012, 020, 021, 022, 023, 024, 025
  	 br			osv		mode				one of: linux, darwin, freebsd, windows, other
  	 b			pool	mode				one of: email, https, other
  	 b			ec2		mode				//	maps to category 'host'
  	 b			plug	mode (*)		some of: obfs2, obfs3
  	  r			role	mode (*)		some of: Guard, Middle, Exit, Dir
  	  r			flag	mode (*)		some of: Authority, Fast, Stable, BadExit, 
  	  												BadDirectory, Named, Running, Unnamed,  Valid, 
  	  												V2Dir, V3Dir
  	  r			pr		mean				probability this relay is used in a path
  	  r			pg		mean				probability this relay is used as a guard node
  	  r			pm		mean				probability this relay is used as a middle node
  	  r			pe		mean				probability this relay is used as a exit nod
  	  r			exp		mode				some of: 80, 443, 6667
  	  r			as		mode				as number
  	  r			cc		mode				two-letter (ISO 3166-1 alpha-2), upper case
  

	
The timespan for import data is always 1 hour. During aggregation, described below, we will derive larger timespans to improve performance for  visualizations over larger periods of time.

There's a big difference between client data and relay data that isn't immediatly obvious from the schema.
Client data is - unlike all relay and bridge data - never collected at the client nodes themselves because that could compromise anonymity.
Instead client data is estimated by some calculations over relay data. During that calculation client data is already aggregated into timespans. One entry of client data in the import database represents all clients during a given timespan.
OTOH we import data for each and every server active during a given timespan. We keep this data to be able to look up individual relays but for most visualization tasks we want data for all servers (that have certain characteristics) during a timespan. This data is only aggregated within MongoDB by the mapReduce operation outlined below.
So the import database contains many server entries per hour, one for each relay and bridge active during that timespan, but only one client entry, with numbers for all clients active during that timespan.

One more detail: client data is originally calculated per day. The import data for clients contains one document for each hour because the default timespan for server data is 1 hour. That means we have 24 client documents per day (one for each hour), each with the same values (see the [discussion](https://github.com/tomlurge/visionion/issues/5) for more details).

Check out an [**example**](doc/import.md) of each of the 3 types of documents in the import collection to get a better idea of its structure.


**Default values**
The data gathered by the Tor metrics project is not always complete (not astonishing for a network of that size, diversity of services and heterogenity of actors). See the seperate doc about [**default values**](doc/defaults.md) for a discussion about how to deal with missing data.



### JSON schema
The above has been transformed into a JSON [schema](doc/schema.json).

The purpose of the schema is twofold: combined with a [validator](https://github.com/garycourt/JSV) it can provide some control over what data get's inserted into the database. Since MongoDB doesn't perform any consistency checks this can be useful to detect if something goes wrong.
More importantly the validator can spot data that's not handled by the schema and trigger the addition of an appropriate (probably rather generic) query interface to the visualization GUI.

If the outline above and the schema get out of sync, the *outline is authorative*.
(This may seem unusual and the plan was to have it the other way round but reality is that changes are first documented in the outline and then - hopefully - implemented  in the schema...).

For information about JSON Schema see [Wikipedia](http://en.wikipedia.org/wiki/JSON#Schema) and the [Draft Specification](http://datatracker.ietf.org/doc/draft-zyp-json-schema/?include_text=1).


### Indexing the import tables

Indices over the import table are essential as they speed up mapReduce very considerably. Two indices can be used:

- an index on "updt" since we query over "updt"
- an index on "date" since the key in the mapping step is derived from date

see also:

- http://stackoverflow.com/questions/15106869/mongodb-mapreduce-performance-using-indexes
- http://stackoverflow.com/questions/12015064/mongodb-mapreduce-and-sorting
- http://edgystuff.tumblr.com/post/7624019777/optimizing-map-reduce-with-mongodb

The respective MongoDB commands are:

	db.import.ensureIndex({date:1})
	db.import.ensureIndex({updt:-1})	// descending since normally we are only interested in the newest additions

Later we might want to be able to find individual servers efficiently and therefor implement the 'date' index as a compound index, adding 'type' and 'role' (and maybe others). Additional indices may be needed to facilitate generic and unforseen queries and lookups of specific nodes but for mapReduce style aggregation of the main "cube" that drives the generic parts of the visualization these 2 indices are all we need.


### Import checks
We are making assumptions about the imported data that wouldn't hurt to be checked.
E.g. a query checking if Bridges and all other types of relays are really disjunct sets:

>TODO




## Data aggregation

Aggregation of the imported data is necessary for several reasons:

- the imported server data is ordered by individual server by date but most of the time we will not want to look at individual servers but at all servers or at a subset of servers sharing certain attributes during a given timespan.
- the imported data reflects only a certain view on the underlying network, highly influenced by how the data is collected. A visualization needs to provide other and more diverse perspectives and the imported data has to be aggregated in different shapes and combinations to support the visualization accordingly.
- A well prepared database is a prerequisite for a responsively  interactive visualization. The nearer the Gestalt of the database is to the queries posed, the better.

In proven OLAP fashion we will aggregate all data into one big 'facts' collection.

1. aggregation of **import** data
In a first step freshly imported data from the 'import' collection will be aggregated into the 'facts' collection. To do that we are using MongoDBs map reduce engine with the [importMR.js](aggregation/importMR.js) script. This script does the bulk work in transforming the raw data from Tor into a gestalt suitable for visualization.
2. **optimization** of aggregated data
Then the facts table will be aggregated into longer timespans and other simplifications (e.g. grouping countries into regions) to improve retrieval performance. This step is implemented in the [factMR.js](aggregation/factMR.js) script, again as a map reduce job.
3. **indexing** the 'facts' collection
The aggregated collection then has to be indexed to make retrieval in the browser as fast as possible.

>TODO
>Maybe the [Cube](https://github.com/square/cube) project (based on D3.js) can be useful.


### aggregation step 1 : import data aggregation

An exhaustive fact table should ideally encompass everything we know from a certain timespan, about all node types and with any combination of characteristics.
But we can't really pre-aggregate all possible permutations of characteristics (like say roles and flags and software-versions and os-versions and AS) a relay could run under because they are practically countless.
The structure of the facts collection is still heavily influenced by the gestalt of the imported data. We tried to find a sensible balance between size of the aggregated data set and the total of all possible queries. A well constructed dataset provides a good base from which nearly every conceivable question can be answered with minimal further processing. This is guesswork and, especially with regard to our lack of experience in the field, will probably need to be modified after some user experiences have been collected.

We divided the set of properties into 4 subsets:

1. administrative properties
   these properties keep track of the provenance of a fact

	_id
	date
	span
	update

2. primary structural properties
   the imported data is very diverse in nature. we found the following categorization useful to express it's main components

	client
	server
	country
	autonomous system

3. secondary structural properties
   for servers we developped a secondary set of characteristics since they are the most richly structured component of the network and also the most important topic when analyzing it.

	type of server (bridge or relay)
	role and flag of relay
	pool, plug and host of bridge

	Bridges have certain chracteristics that seem important enough to mandate their own subcategories. That results in some doubling of materialization (e.g. you can look up plugs under pools as well as pools under plugs) but that's the price you have to pay for responsive interfaces.
	In the case of relay.roles and relay.flags though we go much further than that: all permutations of flag and role are materialized, both projectively and disjunctively (meaning that a node that carries the flag and role in question will be counted under projective, but it will only be counted under disjunctive if it carries no other flags and roles). Projective aggregation is useful when quickly searching for nodes that fulfill certain criteria. But only disjunctive aggregates add up to the correct total: they are more cumbersome to use but provide a more detailed view.
	Note: the default mode is always projective. If the value in question is not prefixed with 'dis' counting was done projectively.


Primary and secondary properties together form the main structure of an aggregated fact. They form a tree and at every leave of that tree a so called report is generated. This report contains the 4. subset of properties and this is where the beef of the data, the numbers materialize.

4. non-structural properties
   The following properties make up the reports that are generated for each structural property as described above. Clients, servers, countries and autonomous systems are rather different types of objects and consequently the reports generated for them do not all contain the same set of properties. We will document the specifics in more detail below.

	sum
	bwa
	bwc
	prb
	osv
	tsv
	exp
	pol
	plg
	hst
	cip
	cpt
	cr
	cb

	There is a structure in the 4th category too: osv, tsv, prb and others contain subcategories that then contain the numbers, but we do think that these properties are not important enough to be part of the main structure of the aggregated data and that only materializing them at an instance level strikes the right balance between detail and compactness. This is not set in stone though: we may be proven wrong by real world use and e.g. have to aggregate all permutations of roles and tsv in a future version.



TODO
Country and AS information form enormous value spaces that need to be next to the root of aggregated tree structure, not at the leaves. We have to change perspective: we can't start from the perspective of servers and clients anymore, we have to start from the properties country and AS.


####detailed documentation of structure and reports####

#####structure#####

overview

		_id										
  	value									
  		date								
  		span								
  		updt								
  		client							
  												clients have no subcategories, only one report
  		server							each entry under server carries a report
  			total							
  			bridge						
  				total						
  				pool						
  					e							email
  					h							https
  					o							other
  				plug						
  					b2						obfs2
  					b3						obfs3
  					b23						obfs2 + obfs3
  				host						
  					ec2						hosted in amazon ec2 cloud
  			relay							
  				total						
  				roleFlag			
  												69 permtations of 
  												Guard, Middle, Exit Directory, 
  												fast, stable, authority
  												projective
  				disRole					
  												15 permtations of 
  												Guard, Middle, Exit Directory
  												disjunctive					
  				disFlag					
  												8 permtations of 
  												fast, stable, authority
  												disjunctive
  				disRoleFlag			
  												70 permtations of 
  												Guard, Middle, Exit Directory, 
  												fast, stable, authority
  												disjunctive
  		country							
  												array of all countries
  		autosys							
  												array of all AS

detailed

	_id										//	first some administrative information
	value									
		date								
		span								
		updt								
		client							//	clients have no subcategories, only one report
			total							For clients this is all we know, save the clients per country which we'll tackle later.
                        Clients @bridges and @relays are mutually exclusive, the other fields aren't.
			atBridge					
			atRelay						
			cip4							
			cip6							
			cptObfs2					
			cptObfs3					
			cptObfs23					
			cptOR							
			cptUnknown				
		server							
			total							
			bridge						
				total						
				pool						
					e							email
					h							https
					o							other
				plug						
					b2						obfs2
					b3						obfs3
					b23						obfs2 + obfs3
				host						
					ec2						hosted in amazon ec2 cloud
			relay							
				total						
				roleFlag					
					G							Guard 
					Gf						Guard fast 
					Gs						Guard stable 
					Gfs						Guard fast stable 
					M							Middle 
					Mf						Middle fast 
					Ms						Middle stable 
					Mfs						Middle fast stable 
					E							Exit 
					Ef						Exit fast 
					Es						Exit stable 
					Efs						Exit fast stable 
					D							Directory 
					Da						Directory authority
					GM						Guard Middle 
					GMf						Guard Middle fast 
					GMs						Guard Middle stable 
					GMfs					Guard Middle fast stable 
					GE						Guard Exit 
					GEf						Guard Exit fast 
					GEs						Guard Exit stable 
					GEfs					Guard Exit fast stable 
					GD						Guard Directory 
					GDf						Guard Directory fast 
					GDs						Guard Directory stable 
					GDfs					Guard Directory fast stable 
					GDa						Guard Directory authority
					GDfa					Guard Directory fast authority
					GDsa					Guard Directory stable authority
					GDfsa					Guard Directory fast stable authority
					GME						Guard Middle Exit 
					GMEf					Guard Middle Exit fast 
					GMEs					Guard Middle Exit stable 
					GMEfs					Guard Middle Exit fast stable 
					GMD						Guard Middle Directory 
					GMDf					Guard Middle Directory fast 
					GMDs					Guard Middle Directory stable 
					GMDfs					Guard Middle Directory fast stable 
					GMDa					Guard Middle Directory 
					GMDfa					Guard Middle Directory fast authority
					GMDsa					Guard Middle Directory stable authority
					GMDfsa				Guard Middle Directory fast stable authority
					ME						Middle Exit 
					MEf						Middle Exit fast 
					MEs						Middle Exit stable 
					MEfs					Middle Exit fast stable 
					MD						Middle Directory 
					MDf						Middle Directory fast 
					MDs						Middle Directory stable 
					MDfs					Middle Directory fast stable 
					MDa						Middle Directory authority
					MDfa					Middle Directory fast authority
					MDsa					Middle Directory stable authority
					MDfsa					Middle Directory fast stable authority
					MED						Middle Exit Directory 
					MEDf					Middle Exit Directory fast 
					MEDs					Middle Exit Directory stable 
					MEDfs					Middle Exit Directory fast stable 
					MEDa					Middle Exit Directory authority
					MEDfa					Middle Exit Directory fast authority
					MEDsa					Middle Exit Directory stable authority
					MEDfsa				Middle Exit Directory fast stable authority
					ED						Exit Directory 
					EDf						Exit Directory fast 
					EDs						Exit Directory stable 
					EDfs					Exit Directory fast stable 
					EDa						Exit Directory 
					EDfa					Exit Directory fast authority
					EDsa					Exit Directory stable authority
					EDfsa					Exit Directory fast stable authority
				disRole					
					none					
					G							
					M							
					E							
					D							
					GM						
					GE						
					GD						
					GME						
					GMD						
					GMED					
					ME						
					MD						
					MED						
					ED						
				disFlag					
					none					
					f							
					s							
					a							
					fs						
					fa						
					sa						
					fsa						
				disRoleFlag			
					none						
					G							
					Gf						
					Gs						
					Gfs						
					M							
					Mf						
					Ms						
					Mfs						
					E							
					Ef						
					Es						
					Efs						
					D							
					Da						
					GM						
					GMf						
					GMs						
					GMfs					
					GE						
					GEf						
					GEs						
					GEfs					
					GD						
					GDf						
					GDs						
					GDfs					
					GDa						
					GDfa					
					GDsa					
					GDfsa					
					GME						
					GMEf					
					GMEs					
					GMEfs					
					GMD						
					GMDf					
					GMDs					
					GMDfs					
					GMDa					
					GMDfa					
					GMDsa					
					GMDfsa				
					ME						
					MEf						
					MEs						
					MEfs					
					MD						
					MDf						
					MDs						
					MDfs					
					MDa						
					MDfa					
					MDsa					
					MDfsa					
					MED						
					MEDf					
					MEDs					
					MEDfs					
					MEDa					
					MEDfa					
					MEDsa					
					MEDfsa				
					ED						
					EDf						
					EDs						
					EDfs					
					EDa						
					EDfa					
					EDsa					
					EDfsa					
		country							//	array of all countries
		autosys							//	array of all AS
		
		

######PROJECTIVE vs DISJUNCTIVE######

the default testing logic is projective:
	counting _any_ node which fulfills the criteria
	(probably also fulfilling many other criterias)
sections beginning with "dis" (disR, disF and disRF) are tested
disjunctively:
	counting _only_ nodes that fulfill _exactly_ the criterias
	(evaluate to true for the given criterias and evaluating to false
	for all others)



#####REPORTS#####



This data schema profits from the fact that node counts, software versions, bandwidths, probabilties and the exit ports are independent from each other.

######server report
bridge + relay

	sum			count
	bwa			bandwidth advertized
	bwc			bandwidth consumed
	osv			operating system version
		od			darwin
		of			freebsd
		ol			linux
		ow			windows
		oo			other
	tsv			tor software version
		t..			eg t25 for version 0.25

only bridge
		
	pol			bridge pool														TODO
		email
		https
		other
	plg			pluggable transport
		b2			obfs2
		b3			obfs3
		b23			obfs2 + obfs3
	hst			hosting service
		bc			amazon EC2 cloud hosting

only relay

	prb 		probablitiy of being used as
		pg			guard
		pm			middle
		pe			exit
		pd			directory
	exp			permitted exit ports (projective)
		e4			443
		e6			6667
		e8			80
		e46			443 + 6667
		e48			443 + 80
		e68			6667 + 80
		e468		443 + 6667 + 80
		
		
######country reports
	
We already have very interesting data about clients per country, which makes it  desirable to come up with a schema that can handle all countries. The solution is an array of country:value objects, each populated by a rather complex result object, like so:
	
		country				cc					country code
		cbcc					int					totaltotal clients in this country connecting through bridges
		crcc					int					totaltotal clients in this country connecting through relays
		relay					int					totaltotal relays in this country
		bwa						int					total bwa of all relays in this country
		bwc						int					total bwc of all relays in this country
		role
			g						int					total guard relays in this country
			m						int					total middle relays in this country
			e						int					total exit relays in this country
			d						int					total directory relays in this country
		flag
			f						int					total fast relays in this country
			s						int					total stable relays in this country
		prob											probability
			pr					float				total prob of all relays in this country
			pg					float				total prob of all guards in this country
			pm					float				total prob of all middles in this country
			pe					float				total prob of all exits in this country
		osv						object			operating system used
			od					int					Darwin
			of					int					FreeBSD
			ol					int					Linux
			ow					int					Windows
			oo					int					Other
		tsv						object
			t10					int
			t11					int
			t12					int
			t20					int
			t21					int
			t22					int
			t23					int
			t24					int
			t25					int
		pex						object
			p4					int					4 as in 443
			p6					int					6 as in 6667
			p8					int					8 as in 80
			p46					int
			p48					int
			p68					int
			p468				int
		autosys										all AS serving this country
			AS					int					as number


This approach has one problem: with MongoDB inner arrays can't be indexed if ther's already an index on the outer array 'country' - and we definitely need that country index. For osv, tsv and exp this can be solved by plainly listing them: that's 16 rows. But for autonomous systems the problem is not so easily solvable since the matrix of 200 countries and all autonomous systems in our case is practically unmangeable. A possible workaround could be to limit the list to just the 10 or 100 AS with the most bandwidth, or probability, and one more value for the rest.

Additionally countries could be grouped into continents, political regions (like "middle east", "EU"), by bandwidth consumption etc.
	
	
######autonomous system reports

There exist more than 40.000 autonomous systems. Because of their sheer number also autonomous systems have to be analyzed on their own. To understand which of them are of significant importance to the network as a whole or to specfic countries, for specific functionalities, at specific times etc we need to aggregate them over at least the most common fields.

		as						string			number of as (format is string because it's a name)
		relay					int					how many relays in this AS
		bwa						int					total bwa of all relays in this AS
		bwc						int					total bwc of all relays in this AS
		role
			g						int					total guard relays in this AS
			m						int					total middle relays in this AS
			e						int					total exit relays in this AS
			d						int					total directory relays in this AS
		flag
			f						int					total fast relays in this AS
			s						int					total stable relays in this AS
		prob
			pr					int					total pbr of all relays in this AS
			pg					int					total pbg of all guards in this AS
			pm					int					total pbm of all middles in this AS
			pe					int					total pbe of all exits in this AS
		country				array of objects
			cc					string			ISO 3166-1 two-letter country code
			relay				int					total relays in that country in this AS
			bwa					int					total bwa in that country in this AS
			bwc					int					total bwc in that country in this AS
			role
				g
				m
				e
				d
			flag
				f
				s
			prob										probability
				pr				float				total prob of all relays in this country + AS
				pg				float				total prob of all guards in this country + AS
				pm				float				total prob of all middles in this country + AS
				pe				float				total prob of all exits in this country + AS




Check out a real [aggregated fact](doc/2013_04_02_01_importMR.json) for 2013-04-02 01. The document is rather long with about 60.000 lines, so you'll profit from a decent editor, preferably with code folding support, when viewing it.



**flags**
Only the flags "Fast", "Stable" and "Authority" will be aggregated. Most of the flags collected in the "relays" import collection actually serve so little purpose that we will not use them in the visualization, to avoid visual clutter and distraction and improve performance on the backend.
They will be imported into the database but will not be aggregated.

#### further possibilities

######aggregate unique items
maybe it would be useful to have a special collection called *uniqueItems*, that contains arrays of all values that ever turned up for a given field, e.g.

	uniqueItems
		countries
		autonomous systems
		nicknames

######scattering / spreading / evenness of distribution
So far we only examined aggregated groups of node types. To understand distribution over the individual nodes we have to collect some 10 or 100 or whatever biggest nodes in each category.
These numbers can be added to the server result objects explained above.
They can be added alongside applicable fields in the country objects, namely: relay (guard, middle, exit, dir), bandwidths, probabilities, flags.
Likewise for AS.
And we should establish some measure to indicate how even the distribution is (without having to look at individual nodes).

#### aggregation with mapReduce in MongoDB - some hints

It can't be overestimated enough that what is output in the map step has to have the exact same structure than what is output in the reduce step. The two structures have to be **idempotent**. I had a lot of trouble with scripts running fine on the testdata but then failing strangely on the actual data. The reason was that the actual data set was much bigger and the mapReduce engine in MongoDB started to work through it in chunks: processing the first 100 documents in the collection, then the next 100 documents and so forth, and then aggregatig those results together like they were new input documents. So what is spit out in the reduce step - and you think you're done with that - get's sucked into another mapreduce circle again, and again... That's why it's so important when implementing the reduce step to always have in mind that it might not just chew through one more of those single-document 'map' outputs, but through one of the 'reduce' outputs - which in this case were much more complex and therefor required some additional checks and logic. E.g. since we are counting a lot of single relay entries on a given date there was more than one place where it was tempting to add a +1 in the reduce step instead of adding the actual value contained in the document to be reduced - which might as well be 100 (and in that case actually was because MongoDBs mapReduce workes through the data in chunks of 100 documents).

Another important thing to note - and that you don't learn from the MongoDB docs - is that you have a lot of freedom with your JavaScript as long as you don't break idempotence. Most of the stuff like numbers of relays complying to certain characteristics is aggregated by just adding up document after document. But the more complex constructs like countries and autonomous systems which I had to collect from different documents through different means and intermediary steps can't be gathered that easily. First I tried to aggregate them stepwise through intermediate collections but that didn't quite work out and made the whole thing very complex. Stackoverflow was my best friend. The examples other people had posted really opened my eyes for what is possible within the reduce step.

For more nitty gritty details on aggregation with MongoDBs mapReduce see a collection of mapReduce [examples](doc/mongoReduce.md) compiled from the web (mostly Stackoverflow) and some weird [working notes](doc/aggregation.md) on how to tackle the aggregation.
And there's of course the [**mapReduce script**](aggregation/mongodb/mapreduce.js) itself.



### aggregation step 2 : consolidation and simplification

######timedate intervals / periods
The default timespan is 1 hour for relays and 1 day for  clients. At a scale of 1 pixel per default timespan we can't see the whole data on a regular display.
So far we collected about 5 years of data, which leads the following numbers of pixels

	5					5		years since 2008
	5 x 12				60		months
		   x 4			240 	weeks
	       x 30			1800	days
	       						// so, if 1px isn't to fine for our weary eyes, on a regular display
	       						// we can show about half of the available data on a per day basis
	            x 4		2200	6 hours, quarter day
	            x24		43200	hourly

We will want to zoom in and out of the data visualization and henceforth need to define aggregated timespans.
Sensible spans could be

	H		1hour, the default and minimal span
	Q		6 hours, quarter day
	D		24 hours, 1 day
	W		168 hours, 7 days, 1 week
	M		1 month, about 4 weeks, about 30.5 days

To keep things simple we start with hourly, daily and monthly timespans. Hourly data is what we got, 24 hours make a day and around 30 days make a month. So we get approximately regular jumps between zoom steps.   
If need arises quarter-daily and weekly aggregations can be added later. Yearly aggregation will not be needed anytime soon.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15

######continents and political regions
Being able to group countries geographically (continents) or politically (eg. "five eyes", EU, "arab spring") should be helpful.
Also grouping AS by jurisdiction (country) or level of NSA influence could help visualize interesting structural properties.

>TODO


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

>TODO

IMPORT
* field/browse: specify location of json data to import (local file or url)
* select: in which importCollection should the data be imported (importClients, importBridges, importRelays)
* remark: make sure that the import command allows overwriting existing records
* problem: this is a OS shell command - how to control it through a webinterface?

AGGREGATION
* field: select a date or a timspan (start: date or min, end: date or max) of the original data
* field: select a date or a timspan (start: date or min, end: date or max) of the last modification (updt)
* both fields are optional and complementary. if nothing is selecetd everything get's generated

LOGIC
* the app needs to generate all datasets within the given time span
* it also needs to (re-) generate all aggregated time spans (6h, 24h) during which single records have been added or modified

REMARKS
* updating existing data or adding new data should make no difference to the admin interface
  existing records in visFacts will be overwritten (aggregateFacts -> out:merge)





## Visualization


### Visualization Interface Wishlist

- coloring of data should be readable for color blind people
- selecting countries by region, by other criterias (eg number of relays), on a map etc
- visualize countries on a fisheye map, with suitable projection
- selecting time period by widget, zoom in/out, move left/right in time
- ability to change scale on vertical axis
- ensure that any field not accessible through predefined vis options is accessible through gerneric interface
- combine criteria eg stable and fast relays runnix linux with OS version xy in country z
- combine/add/stack graphs to show complete datasets (eg cake diagrams)
- SVG export
- [future] consumed bandwidth between relays
- chrome colors green and purple


Some useful links:

- [Topojson](https://github.com/mbostock/topojson/)
- [Fisheye](http://bost.ocks.org/mike/fisheye/)


### Visualization Mechanics Wishlist

- notify the client of new fields so he can add them to the generic interface
- RESTfulness: having the URL represent the complete state of a visualization
  e.g. including zoom factor, active facets, selected clipping etc
- bookmarkability of any state of visualization
- no dependance on client-side javascript



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

	correction: we now use YYYY-MM-DDTHH:MM, because that's understood by JavaScripts Date function

### [TODO](todo.md)


### settig up a development environment with a virtual machine, through Vagrant:

Requires [vagrant](http://www.vagrantup.com/downloads.html) to build a development virtual machine.

    vagrant up
    # if ready ssh into the vm
    vagrant ssh
    # in the shell execute (alias mongo localhost:27017/visionion /vagrant/aggregation/mongodb/mr3.js )
    mr3
    # to run the aggregation


### settig up a development environment on OS X, by foot:

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
		db.import.ensureIndex({"updt":-1})
		db.import.ensureIndex({"date":-1, "type":1})

	or put the following
		db.getCollection("import").ensureIndex({"updt":-1})tCollection("import").ensureIndex({"date":-1, "type":1})
	into a file called ensureIndex.js and run it from the unix shell like so
		mongo localhost:27017/visionion ~/visionion/aggregation/mongodb/ensureIndex.js


	# run aggregation
	on the system shell
		mongo localhost:27017/visionion ~/visionion/aggregation/mongodb/mr3.js
	(http://stackoverflow.com/questions/8743385/running-a-script-having-mongodb-queries-from-mongodb-shell)


	# check result
	tl@h:~/tor$ mongo
	MongoDB shell version: 2.4.8
	connecting to: test
	> use visionion
	switched to db visionion
	> db.facts.find({"_id" : "2013-04-03 23"}).pretty()


### Notes on using the mongo shell

	# housekeeping tasks in mongo shell
	show dbs
	use dbName
	db.dropDatabase()
	show collections
	db.collectionName.drop()							// deletes the collection
	db.collectionName.remove()							// removes the contents of the collection
	db.collectionName.ensureIndex({fieldName:1})		// sorting: 1 ascending, -1 descending
	db.collectionName.dropIndex("indexName")
	db.collectionName.getIndexSpecs()
	db.collectionName.findOne()
	db.collectionName.find().pretty()
	db.collectionName.find({date : "2013-04-03 22", bre : true }).count()


### modifying mongo defaults for macOS

######if mongodb was installed through homebrew's 'brew' command - see above

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

to 	/usr/local/Cellar/mongodb/2.2.2-x86_64/homebrew.mxcl.mongodb.plist

######if mongodb was not installed through brew

	ulimit -S -n 2048		// adjust file limits for this shell session
	ulimit -a 				// to check currently valid values
	momgod --dbpath xyz		// then start mongo deamon
	further reading: 		http://superuser.com/questions/433746/is-there-a-fix-for-the-too-many-open-files-in-system-error-on-os-x-10-7-1 (first answer)
							http://krypted.com/mac-os-x/maximum-files-in-mac-os-x/



### working notes

##### 16/12/13
(working on mr script version 3 - "functional")
those mongodb crashes... http://dabeals.com/software/2013/08/23/illegal-instruction-4/ says: "Googling “Illegal instruction: 4″ suggested a number of problems, all pointing to some issue with native binaries compiled with various versions of gcc on various minor versions of Mac OS."
switching to a mongodb 2.4.8 downloaded from mongodb.org instead of the homebrew version. maybe even switch back to 2.0.9? bug reports on the interwebs seem to suggest that the problem has to do with the v8 engine. would be a pity though since the initial mapReduce of 5 years data would take much longer without the multithreading introduced by v8 in mongodb 2.2

now look at that: 2.4.8 directly from mongodb.org crashes in exactly the same way as the homebrew version. 2.0.6 instead (who's javascript engine is not googles v8 but mozillas spidermonkey) fails gracefully with the following message:
	Mon Dec 16 13:35:38 uncaught exception: map reduce failed:{
		"assertion" : "invoke failed: JS Error: InternalError: too much recursion nofile_b:21",
		"assertionCode" : 9004,
		"errmsg" : "db assertion failure",
		"ok" : 0
	}

turned out it was a problem with the script (surprise, surprise...) but always good to have an alternative tool with better error reporting ;-)

###### the data i've got
	
	documents
	range from		"date" : "2011-03-06T00:00"
								// db.import.find().sort({date:1}).limit(1);
	to						"date" : "2013-10-17T23:00"
								// db.import.find().sort({date:-1}).limit(1);
	but most of that is only client data
	
	servers and clients are only availbale 
	from				"date" : "2013-04-01T00:00"
								// db.import.find({type:"r"}).sort({date:1}).limit(1);
	to						"date" : "2013-05-10T02:00:00"
								// db.import.find({type:"r"}).sort({date:-1}).limit(1);
								
###### csv versus json
it is written that csv is more compact than json. my experiments suggest that thats not true, at least not for my data. size was almost the same. no need to bother with conversion to csv
								
###### constructing fake data from the data i've got

	export 31 days from 2013-04-01 to 2013-05-01 (inclusive)
	make 12 months from them (don't forget to shorten february)
	make 10 years from that (don't forget leap years)
	import that into a new collection called "fakes"
	(generate bins from there)
	
