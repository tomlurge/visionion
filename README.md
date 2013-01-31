visionion
=========

visionion aims to provide a webbased visualization tool for Tor metrics data.  

The [Tor](https://www.torproject.org/index.html) project is primarily a system to provide a user with anonymity while on the internet. It adds to this some means for censorship prevention as adversaries try to block access to Tor alltogether. The Tor infrastructure is comprised of several types of network nodes, and a lot thereof. 
Visualizing all the parts of this network in a meaningful way is propably not possible but of course insight can be drawn from combining different aspects and sources in one view. Visionion aims to integrate and visualize all available data in a generic and easily extensible fashion. These generic views can then be combined and tailored to elucidate structural patterns and hidden aspects in the data.


Tor Metrics Data
----------------
The currently available data is accessible in JSON from the [website](https://metrics.torproject.org/graphs/). There's also an overview of [metrics descriptor formats](https://metrics.torproject.org/index.html)
and the raw [data](https://metrics.torproject.org/data.html). It's currently saved to a PostgreSQL database (see the [schema](https://gitweb.torproject.org/metrics-web.git/blob/HEAD:/db/tordir.sql)).


Usage Scenario
--------------
Some examples: How many relays were there running in the past 3 months in .de? How much bandwidth was provided by relays running Tor version 0.2.3.x. Basically, take all network graphs and merge them into one single graph with plenty of options. Users should be able to navigate into any factor (bridge vs. relay, country, flags, Tor software version, operating system, EC2 cloud bridge or not) and learn the total relay number or advertised bandwidth or bandwidth history for their selection.

**1** the most prominent usecase is the timeline with a graph representing volumina of bandwidth or number of hosts or number of clients etc. on the vertical axis  
**1a** it should also be possible to layer timeline graphs for the same time period but with different subject on each other to compare eg consumed bandwidth and number of clients  
**2** now imagine a plane orthogonal to the graph, representing some other data at that point in time eg adding to the graph of linux driven relays a cake diagram of all operating systems driving relays  
**3** now imagine a third plane showing geogrgraphic distribution of linux driven relays and how much bandwidth each of them handles, the imaginary center of linux driven traffic at the crosspoint of the first two planes  
**4** now add markers for certain events: the day when traffic from linux driven relays peaked, the day it hit an alltime low, the days it plummeted, the days it spiked etc.

1 represents the usecase that's presently handled by the Tor metrics project [graph visualizations](https://metrics.torproject.org/network.html). 1a is available as a prototype of [interactive graphs](http://tigerpa.ws/tor_metrics/). 2 attempts to combine different visualization techniques like timeline and cake diagram. Different visualizations get rendered on different layers. Control shifts from the visualization framework to web application. 3 introduces the geographical dimension which is not very strongly represented in the raw data but nonetheless an interesting perspective. 4 points the user in directions that might be worth to explore. It will need some analytics in the background.


Technical Overview
------------------
In a nutshell:
* Tor metrics data get's imported into a MongoDB database.
* Client side application framework is Angular.js.
* Visualization Framework is D3.js.
* Supported web browsers are Chrome and Firefox. Others might work as well.
Most of the visualization facets get rendered seperatly, on seperate planes/DIVs. The application prepares the joins and our eyes carry them out. The DB is well off.

**Visualization framework** D3.js is [_the_](http://www.netmagazine.com/features/top-20-data-visualisation-tools "The top 20 data visualisation tools") data visualization framework for the web today. It keeps a strong link between the data and it's visual representation, expresses it a nice declarative and CSS-like style, provides an impressive set of features and renders to SVG.  
**Database** Since the data scheme is quite flat and in flux a NoSQL database seems appropriate. MongoDB was [chosen](http://kkovacs.eu/cassandra-vs-mongodb-vs-couchdb-vs-redis "Cassandra vs MongoDB vs CouchDB vs Redis vs Riak vs HBase vs Couchbase vs Neo4j vs Hypertable vs ElasticSearch vs Accumulo vs VoltDB vs Scalaris comparison") because of it's JavaScript support which promises nice integration with client side logic. Since the complexity of the underlying data is rather limited MongoDBs query capabilities, although less expressive than SQL, should be sufficient. With a visualization tool the most interesting joins are anyway those that are carried out in the eyes of the user. The ability to store JavaScript-code in the MongoDB might help in the development of some nice analyzer toolkit. Support for geo-data doesn't hurt either (no other NoSQL database has that so easily available AFAIK).  
**Web application framework** Angular.js was chosen because of ... well, that's another [discussion](http://blog.stevensanderson.com/2012/08/01/rich-javascript-applications-the-seven-frameworks-throne-of-js-2012/ "Rich JavaScript Applications – the Seven Frameworks"). But it's cool. And very modular. And the DOM is far away. And it plays nicely [together](http://briantford.com/blog/angular-d3.html "Using the D3.js Visualization Library with AngularJS")with D3.js. And [with](http://square.github.com/cube/) MongoDB (also [here](http://square.github.com/cubism/)).  


Tor Node Types
--------------
All the different nodes in the Tor network are - despite their different functions - in the end just that: nodes. Clients (which is Tor-speak for 'users') and bridges, relays and exit nodes, guards and directory servers all operate from the same code base, just with different configuration flags set. A single node can be in _most_ categories at the same time and in _every_ category over time.  It's quite common that a relay can be guard node, middle node, exit node, and directory mirror at the same time.  And that same node can be used as client at any time.  Also, the node may have been configured as bridge before or after being configured as relay.  
* client  
Tor doesn't log anything a clients, but only at bridges and directory mirrors. Bridges are obvious, but directory mirrors maybe not so much. The idea is to count network status requests per day and per country, aggregate that data for all directory mirrors, and derive the number of clients from that number.  
The "time to download files over Tor" and "timeouts and failures of downloading files over Tor" parts are learned from clients run by the Tor project itself.  
See https://metrics.torproject.org/formats.html for details: "Second, we describe the numerous aggregate statistics that relays publish about their usage (PDF), including byte histories, directory request statistics, connecting client statistics, bridge user statistics, cell-queue statistics, exit-port statistics, and bidirectional connection use."  
* bridge  
Bridges are simply relays with a I-want-to-be-a-bridge bit set in their configuration.  However, whether a node is a bridge or a relay determines to some extend what data we have about that node. For example, we don't have country information about bridges, but we have that for relays.
* guard node     
* middle node  
* exit node  
* directory mirror  



Data Schema Outline
-------------------
The database schema has only two datatypes for all node types: 'relay' for all nodes except clients, and'client'. Documents of type "relay" will be added to the collection named "relays", documents of type "client" likewise to the collection named "clients". These two collections contain all raw data as it is imported into the database. Further collections - equaling views in SQL-land - will be constructed through map/reduce style aggregation. They are described further down.

**Relays**  
The information available about the different types of relay nodes does vary to some degree. You wouldn't put them all together in one table if you used an RDBMS but that's okay with a document centric store like MongoDB since there is no penalty to pay for scarcely populated objects. OTOH MongoDB as a typical NoSQL store provides no joins which means that for retrieval purposes it can be very beneficial to have all data in one big table.  
That one big table for all relay types has the additional advantage of providing maximum extensibility and malleability. MongoDB will never complain if some documents inserted to it suddenly contain a new field. It couldn't be easier to add new data types, data sources or facets to the database. The client side code can instantly access these new fields (at least as soon as it becomes aware of them).  

	BMGED															Bridge Guard Middle Exit Directory
	in			code	description					type	subtype	valuespace
	+----------+-------+---------------------------+--------+-------+---------
	bgmed		_ID		document ID					string			date+fingerprint eg 'YYYYMMDDHH-fingerprint'
	bgmed		nid		node id						string			fingerprint
	bgmed		nick	nickname					string			
	bgmed		date	datetime					integer			JS Date in milliseconds since the epoch)
	bgmed		span	duration					integer			valid for how many hours, defaults to 1
	bgmed		type	type of node				array	string	Bridge,  Guard,  Middle,  Exit,  Dir
	bgmed		flag	flags 						array	string	Authority,  BadExit,  BadDirectory,  Fast,  Named,  Stable,  Running,  Unnamed,  Valid,  V2Dir,  V3Dir
	bgmed		bwa		bandwidth advertized 		integer											
	bgmed		bwc		bandwidth consumed 			integer											
	bgmed		tv		Tor software version		integer			010,  011,  012,  020,  021,  022,  023,  024
	bgmed		os		operating system			string
	bgmed		osn		operating system normalized	string			linux,  darwin,  freebsd,  windows,  other 
	bgmed		cwf		consensus_weight_fraction	number					
	bgmed		pg		guard_probability			number			
	bgmed		pm		middle_probability			number						
	bgmed		pe		exit_probability			number		
	 gmed		as		autonomous system			string	
	 gmed		pex		permitted exit ports		array	integer
	 gmed		cc		country code				string
	b			bag		bridge adress given out by	string			email,  https,  other 
	b			bez		bridge is in EZcloud		boolean
	b			bpt		bridge pluggable transport	array	string	obfs2 # obfs3 #	etc

**Clients**  
Clients OTOH have their own datatype because client data is - unlikey all relay data - never collected at the client nodes themselves. This is not surprising given the nature of the Tor project. Instead client data is derived from relay data through various means and is already aggregated when it is fed into the MongoDB. 

				code	description					type	subtype	valuespace
				+-------+---------------------------+-------+-------+---------
				_ID		document ID									date+'client' eg 'YYYYMMDDHH-client'
				date	datetime					JS.Date			JavaScript Date object
				span	duration					integer			valid for how many hours, defaults to 12
				cb		clients at bridges			integer		
				cr		clients at relays			integer			
				uni		unidirectional connections	integer
				bi		bidirectional connections	integer
				cen		possible censorship events	integer	
				dlf		time to download files		integer								
				fail	dl timeouts and failures	integer	
				drq		answering dir request		integer
				cbc		clients by country			array	object	{cc:number}
						
**Issues**   
_timedate_    
Check what possibilities JavaScript does provide to handle timedate. Specifically: what would be the most efficient way to handle hourly intervals?   
[Stackoverflow](http://stackoverflow.com/questions/1056728/formatting-a-date-in-javascript) rulez okay!
[Date.js](http://www.datejs.com/), [Moment.js](http://momentjs.com/)

_timedate intervals / periods_   
Periods so far are not part of the database schemas but when aggregation starts they will have to be added somehow. All relay data is collected in 1 hour intervals. As soon as the visualization starts to support zooming in and out specific time spans  preaggregated indices for different lenghts of periods will be needed. 

	bgmed		period	datetime interval			string			1h | 6h | 1d | 1w | 1m			months?	

we want to zoom in and out the timeline, so we need it at different scales   
do these scales have to be preproduced? mapreduce?   
like 1 pixel / 1 hour | 6 hours | 1 day | 1 week | 1 month (with 28-31 days)   
we have about 5 years of data so far, which leads the following numbers of pixels   

	5					5		years since 2008
	5 x 12				60		months
		   x 4			240 	weeks
	       x 30			1800	days
	       						// so, if 1px isn't to fine for our old eyes, on a regular display 
	       						// we can show about half of the available data on a per day basis
	            x 4		2200	6 hours, quarter day
	            x24		43200	hourly
						


Data Reprocessing
-----------------
Having all data sitting very generically in one big table has the disadvantage of being slow. To make up for that indices and aggregations are needed. Indices reestablish the differenciation that the one big table flattend. E.g. each node type needs it's own index. Aggregation has to precompute timespans, reduce value spaces, consolidate geographical information etc. Indices and aggregation are optimizations for preconfigured usecases and visualization options, adding targeted performance to generic flexibility. Additionally indices on the big "relay" collection have to facilitate generic and unforseen queries as much as possible.

Indices
* bridges
* guard nodes
* middle nodes
* exit nodes

Aggregations
* consolidate relays: bridges + guard nodes + middle nodes + exit nodes + directory servers
* consolidate anonymity: guard nodes + middle nodes + exit nodes
* consolidate censorship circumvention: bridges + directory servers
* for nodes: determine datetime intervals
* for relays: extract country codes from ip-adresses

**Issues**  
Aggregates should use normalized versions of operating system data:
	bgmed		osn		operating system normalized	string			linux | darwin | freebsd | windows | other  
Maybe aggregates should use normalized versions of autonomous system data:			
	 gmed		asn		autonomous system normalizd	string	

Some material about MongoDB and OLAP  
[MongoDB - Materialized View/OLAP Style Aggregation and Performance (stackoverflow)](http://stackoverflow.com/questions/11810911/mongodb-materialized-view-olap-style-aggregation-and-performance)  
[Another useful thread on stackoverflow](http://stackoverflow.com/questions/3478916/what-should-i-choose-mongodb-cassandra-redis-couchdb), see especially the second answer  
[MongoDB OLAP with pre-aggregated cubes](http://osdir.com/ml/mongodb-user/2011-01/msg01542.html)  
[DataBrewery Cubes](http://databrewery.org/cubes/doc/)  
[MongoDB OLAP](https://groups.google.com/forum/?fromgroups=#!searchin/mongodb-user/MongoDB$20OLAP/mongodb-user/Aaxn813-oO4/PMrYH7Mr_2YJ)  


Visualization Interface Wishlist
--------------------------------
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



Visualization Mechanics Wishlist
--------------------------------
* notify the client of new fields so he can add them to the generic interface 
* RESTfulness: having the URL represent the complete state of a visualization e.g. including zoom factor, 
  active facets, selected clipping etc


Data Import
-----------
An importer tool takes metrics descriptors as input and produces JSON/BSON to be imported into MongoDB.  
Such a tool should use Stem, which is a Python library that parses all relevant metrics descriptors.  I think it even has an export function that may or may not support JSON.  See Tor ticket #6171 for more details: https://trac.torproject.org/projects/tor/ticket/6171.  
[import.py](visionion/blob/master/import/import.py) is a simple data importer that uses Stem to read consensuses and server descriptors and that prints out dicts that could be imported into MongoDB.


Next Steps
----------
* The schema still needs a little conceptual refinement.
* When it feels considerably stable it will be transformed into a [proper](http://en.wikipedia.org/wiki/JSON#Schema) JSON [schema](visionion/blob/master/schema.json).
* Check how ip-adress to countycode conversion is done in MongoDB or if it should be done prior to import
* A subset of the schema should be defined to help starting the work on the data import tool.
* Then a prototype visualization of some graph will be the first occassion to connect the database, the web application framework and the visualization library.
* When that's accomplished more experiments need to be conducted to see if it's really possible to have more than one D3 instances on one webpage and how they can interact.
* Then the real work on the visualizations can begin.
* tbc