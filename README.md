visionion
=========

visionion aims to provide a webbased visualization tool for Tor metrics data.

The [Tor](https://www.torproject.org/index.html) project is primarily a system to provide a user with anonymity while on the internet. 
It adds to this some means for censorship prevention as adversaries try to block access to Tor alltogether. 
The Tor infrastructure is comprised of several types of network nodes, and a lot thereof. 

Visualizing all the parts of this network in a meaningful way is propably not possible but of course insights can be drawn from combining different aspects and sources in one view. 
Visionion aims to integrate and visualize all available data in a generic and easily extensible fashion. 
These generic views can then be combined and tailored to elucidate structural patterns and hidden aspects in the data.




Tor Metrics Data
----------------
The project website provides the [currently available data in JSON](https://metrics.torproject.org/graphs/) as well as an [overview of metrics descriptor formats](https://metrics.torproject.org/index.html) and the [raw data](https://metrics.torproject.org/data.html). 
It's currently saved to a PostgreSQL database ([SQL schema](https://gitweb.torproject.org/metrics-web.git/blob/HEAD:/db/tordir.sql)).




Usage Scenario
--------------
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

**1** 
the most prominent usecase is the timeline with a graph representing volumina of bandwidth or number of hosts or number of clients etc. on the vertical axis   
**1a** 
it should also be possible to layer timeline graphs for the same time period but with different subject on each other to compare eg consumed bandwidth and number of clients   
**2** 
now imagine a plane orthogonal to the graph, representing some other data at that point in time eg adding to the graph of linux driven relays a cake diagram of all operating systems driving relays   
**3** 
now imagine a third plane on the floor showing geogrgraphic distribution of linux driven relays and how much bandwidth each of them handles, the imaginary center of linux driven traffic at the crosspoint of the first two planes   
**4** 
now add markers for certain events: the day when traffic from linux driven relays peaked, the day it hit an alltime low, the days it plummeted, the days it spiked etc.   
**5** 
show the biggest nodes for a given metric and their share of the total  

**1** 
represents the usecase that's presently handled by the Tor metrics project [graph visualizations](https://metrics.torproject.org/network.html). 
**1a** 
is available as a prototype at [interactive graphs](http://tigerpa.ws/tor_metrics/).   
**2** 
attempts to combine different visualization techniques like timeline and cake diagram. 
Different visualizations get rendered on different layers. 
Control shifts from the visualization framework to the web application.   
**3** 
introduces the geographical dimension which is not very strongly represented in the raw data but nonetheless an interesting perspective.   
**4** 
points the user in directions that might be worth to explore. 
It will need some analytics in the background.   
**5** 
checks (de-) centralizations in the infrastructure.   




Technical Overview
------------------
In a nutshell:
* Tor metrics data get's imported into a [MongoDB](http://www.mongodb.org/) database.  
* Aggregation and indexing transforms the imported data into a big fact table suitable to drive the visualization. 
* Visualization Framework is [D3.js](http://d3js.org/), additionally [Crossfilter](http://square.github.io/crossfilter/).   
* Client side application framework is not yet decided. Either [Angular.js](http://angularjs.org/), Knockout.js or Can.js.   
* Targeted web browsers are Chrome and Firefox. Others might work as well.
Most of the visualization facets get rendered seperatly, on seperate planes (technically DIVs).   
The application prepares the joins and our eyes carry them out.   


**Visualization framework** 
[D3.js](http://d3js.org/) is a [leading](http://www.netmagazine.com/features/top-20-data-visualisation-tools "The top 20 data visualisation tools") data visualization framework for the web. 
It keeps a strong link between the data and it's visual representation, expresses it in a nice declarative and CSS-like style, provides an impressive set of features and renders to SVG.   


**Database** 
Since the data schema is quite flat and in a certain flux a NoSQL database seems appropriate. 
[MongoDB](http://www.mongodb.org/) was [chosen](http://kkovacs.eu/cassandra-vs-mongodb-vs-couchdb-vs-redis "Cassandra vs MongoDB vs CouchDB vs Redis vs Riak vs HBase vs Couchbase vs Neo4j vs Hypertable vs ElasticSearch vs Accumulo vs VoltDB vs Scalaris comparison") because of it's JavaScript support which promises nice integration with client side logic. 
Since the complexity of the underlying data is rather limited MongoDBs query capabilities, although less expressive than SQL, should be sufficient. 
With a visualization tool the most interesting joins are anyway those that are carried out in the eyes of the user.   
The ability to store JavaScript-code in the MongoDB might help in the development of an analyzer toolkit. 
Support for geo-data could be beneficial either (no other NoSQL database has that so easily available AFAIK).  


**Web application framework** 
[Angular.js](http://angularjs.org/) is the likely candidate because of it's declarative style and it's attractive approach to routing and HTML extensions ([discussion](http://blog.stevensanderson.com/2012/08/01/rich-javascript-applications-the-seven-frameworks-throne-of-js-2012/ "Rich JavaScript Applications – the Seven Frameworks")). 
It integrates nicely [with](http://briantford.com/blog/angular-d3.html "Using the D3.js Visualization Library with AngularJS") D3.js. and [with](http://square.github.com/cube/) MongoDB (also [here](http://square.github.com/cubism/)).  




Tor network terminology
-----------------------
The Tor network is comprised of a lot of different nodes. 
All these nodes operate - despite their different functions - from the same software, just with different configuration flags set. 
A single node can be in _most_ categories at the same time and in _every_ category over time.  
 
_Nodes_ are all the actors that form the network. 
Nodes encompass clients, bridges and relays.    
_Clients_ are the end users, connecting to the Tor network to anonymously use the internet.   
_Servers_ are everything except clients. 
Servers encompass relays and bridges.   
_Bridges_ are the nodes that clients connect to to circumvent attempts to block access to Tor.   
_Relays_ are the nodes that form the actual Tor network which provides anonymity. 
Relays encompass guard nodes, middle nodes, exit nodes and directory nodes.   
_Guard_ nodes function as entry points to an anonymized route through the Tor network. 
They are reached by the client either directly or, if a censor blocks them, through a bridge.   
_Middle_ nodes function as intermediary steps on that route.   
_Exit_ nodes function as exit points, leaving the Tor network and continuing to the destination on the internet.   
_Directory_ nodes provide some auxiliary services to the Tor network.   

	node					everything in the tor network
		client				the users
		server				everything serving the user
			bridge			special entry points for clients that need to circumvent blocking 
			relay			the actual anonymization network
				guard		entry points into the network (accessed by client directky or by bridge)
				middle		intermediary nodes on anonymizing route
				exit		now anonymized, continue route to actual destination on the internet
				directory	some auxiliary services 


It's quite common that a relay is guard node, middle node, exit node, and directory mirror at the same time and that same node can be used as client at any time. 
Also, the node may have been configured as bridge before or after being configured as a relay.   
But there are two exceptions to the general rule:   
1) a node can't be a client and a server at the same time.   
2) a node can't be a bridge and a relay at the same time.

**a more detailed description of the different nodes**
* client  
Tor doesn't log any data at individual clients themselves, but it logs abstract data about clients at bridges and directory mirrors. 
Bridges are obvious, but directory mirrors maybe not so much. 
The idea is to count network status requests per day and per country, aggregate that data for all directory mirrors, and derive the number of clients from that number.   
The "time to download files over Tor" and "timeouts and failures of downloading files over Tor" parts are learned from clients run by the Tor project itself.   
See https://metrics.torproject.org/formats.html for details: "Second, we describe the numerous aggregate statistics that relays publish about their usage (PDF), including byte histories, directory request statistics, connecting client statistics, bridge user statistics, cell-queue statistics, exit-port statistics, and bidirectional connection use."   
* bridge  
Bridges are simply nodes with a I-want-to-be-a-bridge bit set in their configuration. 
However, whether a node is a bridge or a relay determines to some extend what data we have about that node. 
For example, we don't have country information about bridges, but we have that for relays.
* guard node     
* middle node  
* exit node  
* directory mirror  

	TODO

**even more**
* for some rather detailed explenations see the [Tor directory protocol, version 3](https://gitweb.torproject.org/torspec.git/blob/HEAD:/dir-spec.txt)
	
	
<!--

MAIL Jan 17 12:11
...
 The "time to download files over Tor" and "timeouts and
failures of downloading files over Tor" parts are what we learn from
clients we run ourselves. 
...
There's not just one document per relay/bridge.  These are the
documents you have per relay/bridge:

- Network status entry: There's a network status entry for every relay
or bridge with some summary information.  It's a confirmation by either
the directory authorities (for relays) or the bridge authority (for
bridges) that the given relay/bridge information is valid.  But this
summary doesn't contain, e.g., OS information or number of bytes spent
on answering directory requests.

- Server descriptor: Every relay or bridge publishes a descriptor
containing its contact information and capabilities to the directory
authorities or bridge authority every 12--18 hours.  This server
descriptor is then referenced by digest from one or typically multiple
network status entries.

- Extra-info descriptor: Statistical information about a relay or bridge
is not contained in the server descriptor, but in an extra-info
descriptor.  These are referenced from server descriptors by digest,
with a 1:1 relationship.

And while we're at descriptor types, there's a separate descriptor type
for "time to download files over Tor" and "timeouts and failures of
downloading files over Tor".  These data come from Torperf output files.

...
You can assign a consensus weight fraction to
each relay, for any given date and hour.  Then you can say that all
clients used that relay for about x% of their paths, or that a
particular client used that relay for a particular path with a
probability of x%.

There are currently four such weights/probabilities defined for relays
(this does not apply to bridges).  Quoting from Onionoo's protocol
specification:

"consensus_weight_fraction": Fraction of this relay's consensus weight
compared to the sum of all consensus weights in the network. This
fraction is a very rough approximation of the probability of this relay
to be selected by clients.

"guard_probability": Probability of this relay to be selected for the
guard position. This probability is calculated based on consensus
weights, relay flags, and bandwidth weights in the consensus. Path
selection depends on more factors, so that this probability can only be
an approximation.

"middle_probability": Probability of this relay to be selected for the
middle position. This probability is calculated based on consensus
weights, relay flags, and bandwidth weights in the consensus. Path
selection depends on more factors, so that this probability can only be
an approximation.

"exit_probability": Probability of this relay to be selected for the
exit position. This probability is calculated based on consensus
weights, relay flags, and bandwidth weights in the consensus. Path
selection depends on more factors, so that this probability can only be
an approximation.
...
For visualization, autonomous systems are very similar to countries.
Think of an autonomous system as a group of IP address blocks belonging
to the same organization.  You want to avoid that all relays in a path,
or at least entry and exit, are located in the same autonomous system
and thereby controlled by the same organization.  And you want to avoid
that a single AS/organization sees a too high percentage of Tor traffic.
For example, AS39138 rrbone UG (haftungsbeschraenkt) currently sees
almost 20% of Tor's exit traffic.  That's about as interesting as the
fact that over 30% of Tor's traffic exits from U.S. relays.
...
| what information about clients do you gather at the guards and bridges ?
See https://metrics.torproject.org/formats.html for details: "Second, we
describe the numerous aggregate statistics that relays publish about
their usage (PDF), including byte histories, directory request
statistics, connecting client statistics, bridge user statistics,
cell-queue statistics, exit-port statistics, and bidirectional
connection use."


MAIL JAN 18
...
Ah, directory mirrors are just relays with an open directory ports.  So,
the set of directory mirrors is a subset of the set of relays, and
there'd be flags and all that for directory mirrors, too.


MAIL May 16

Bandwidth figures are for all types of service.  In theory, we have data
about consumed directory bandwidth for newer relays or bridges, but not
for traffic as bridge, guard, middle, or exit node.  There are privacy
implications of gathering too detailed data, so we can't get more
detailed data.  I'd say let's only work with total bandwidth per relay
or bridge, that is, the data that you already have.

MAIL May 18

I'm already taking the BadExit flag into account in the importer: a
relay that has the Exit flag _and_ the BadExit flag isn't put into the
Exit category.  The BadExit flag doesn't have any impact on the other types.


MAIL May 21

	      Guard   Middle  Exit    Directory
Authority     [ ]     [ ]     [ ]     [X]
Being an authority is mostly relevant for directories, if at all.
Hmmm, that doesn't sound very important :/
You're right, it's not.
...
However, you left out two important flags:
Exit & !BadExit [X]   [ ]     [ ]     [ ]
Guard         [ ]     [ ]     [X]     [ ]
Knowing if an exit may also be used in the guard position can be interesting.

Uh? Exits and Guard in my scheme are types of relays, not flags. 
Maybe you should check the readme.md again to see if I missed more flags.

So, if your schema allow comparisons between two types, we're all set.
For example, it's interesting to compare Exit-type relays with
Guard-type relays.  If that is possible, there's no need to look at the
Exit & !BadExit or Guard flags anymore.


-->



Data Schema Outline
-------------------
The initial database import schema has only 3 collections for all node types: 'relay', 'bridge' and'client'. 
Documents of type "guard", "middle", "exit" and "directory" will be added to the collection named "relay", documents of type "bridge" will be added to the collection named "bridge", documents of type "client" will be added to the collection named "client". 
These 3 collections contain all raw data as it is imported into the database. 


**relays**  
	
	in			field	description					type	subtype	aggregation	valuespace
	+----------+-------+---------------------------+--------+------+-----------+----------
	bgmed		node	node id						string			-			Tor fingerprint
	bgmed		nick	nickname					string			mode		nickname of relay
	bgmed		date	datetime					string			-			start of the time span that this document describes
																				format "YYYY-MM-DD HH" as defined in ISO-8601
	bgmed		role	roles/functions of relay	array	string	mode [*]	some of: Guard,  Middle,  Exit,  Dir
	 gmed		flag	flags 						array	string	mode [*]	some of: Authority,  BadExit,  BadDirectory,  Fast,  
	 																					 Named,  Stable,  Running,  Unnamed,  Valid,  
	 																					 V2Dir,  V3Dir
	bgmed		bwa		bandwidth advertized 		integer			mean		B/s
	bgmed		bwc		bandwidth consumed 			integer			mean		B/s
	bgmed		tsv		Tor software version		string			mode		one of: 010,  011,  012,  020,  021,  022,  023,  024
	bgmed		osv		operating system			string			mode		one of: linux,  darwin,  freebsd,  windows,  other 
	 gmed		pbr		consensus_weight_fraction	number			mean        probability of a client picking a relay for their path
	 gmed		pbg		guard_probability			number			mean		probability of a client picking a relay for their guard position
	 gmed		pbm		middle_probability			number			mean		probability of a client picking a relay for their middle position
	 gmed		pbe		exit_probability			number			mean		probability of a client picking a relay for their exit position
	   e		pex		permitted exit ports		array	integer	mode		some of: 80, 443, 6667
	 gmed		as		autonomous system			integer			mode		
	 gmed		cc		country code				string			mode		two-letter (ISO 3166-1 alpha-2), upper case


**bridges**  
	
	in			field	description					type	subtype	aggregation	valuespace
	+----------+-------+---------------------------+--------+------+-----------+----------
	bgmed		node	node id						string			-			Tor fingerprint
	bgmed		nick	nickname					string			mode		nickname of relay
	bgmed		date	datetime					string			-			start of the time span that this document describes
																				format "YYYY-MM-DD HH" as defined in ISO-8601
	bgmed		bwa		bandwidth advertized 		integer			mean		B/s
	bgmed		bwc		bandwidth consumed 			integer			mean		B/s
	bgmed		tsv		Tor software version		string			mode		one of: 010,  011,  012,  020,  021,  022,  023,  024
	bgmed		osv		operating system			string			mode		one of: linux,  darwin,  freebsd,  windows,  other 
	b			brp		bridge pool     			string			mode		one of: email,  https,  other 
	b			bre		bridge is in EC2 cloud		boolean			mode
	b			brt		bridge pluggable transport	array	string	mode [*]	some of: obfs2, obfs3


**clients**  

				field	description					type	subtype	aggregation	valuespace
				+-------+---------------------------+-------+------+------------+---------
				date	datetime					string						Start of the time span that this document describes
																				format "YYYY-MM-DD HH" as defined in ISO-8601
				cb		clients at bridges			integer			mean
				cbcc	clients@bridges per country	array	object	mean		{cc:integer}	// an array of {countrycode : int } objects
				cr		clients at relays			integer			mean
				crcc	clients@relays per country	array	object	mean		{cc:integer}
				cpt		bridge pluggbl.transp.used	array	object				{obfs2/obfs3/<??>/<OR>:integer}
				cip		ip-version used				array	object	mode		{v4/v6:integer}
	
	LEGEND --------------------------------------------------------------------
	in			indicates, for which type of node the field is relevant, 
				'bgmed' standing for Bridge Guard Middle Exit Directory
	field		name of the field in the database
	description	short description of the field's semantics
	type		as defined in 3.5 of http://datatracker.ietf.org/doc/draft-zyp-json-schema/?include_text=1 
	subtype		if type is array, type of array content
	valuespace	expected values
				for lists of possible values "some of" where multiple values are possible 
				or "one of" where possible values are mutually exclusive
	[*]			if the relay provides the functionality in question for at least half of the timespan in question

Client data is - unlikey all relay and bridge data - never collected at the client nodes themselves (otherwise anonymity could be compromised). 
Instead client data is derived from relay data through special means and is already aggregated into timespans when it is imported into the MongoDB. 


**JSON schema**  
The above has been transformed into a JSON [schema](schema.json).   
		
If the outline above and the schema get out of sync, the *schema is authorative*.   
For information about JSON Schema see [Wikipedia](http://en.wikipedia.org/wiki/JSON#Schema) and the [Draft Specification](http://datatracker.ietf.org/doc/draft-zyp-json-schema/?include_text=1).

The purpose of the schema is twofold: combined with a [validator](https://github.com/garycourt/JSV) it can provide some control over what data get's inserted into the database. Since MongoDB doesn't perform any consistency checks this can be useful to detect if somethings goes wrong.
More importantly the validator can spot data that's not handled by the schema and trigger the addition of an appropriate (probably rather generic) query interface to the visualization GUI.




Data Reprocessing
-----------------

<!-- 
The information available about the different types of nodes varies to some degree. 
You wouldn't put them all together in one table if you used an RDBMS but a document centric store like MongoDB works differently. 
There is no performance penalty to pay for scarcely populated tables: this facilitates big diverse tables. 
OTOH MongoDB as a typical NoSQL store provides no joins: this mandates big diverse tables for complex retrieval tasks.  
That one big table for all relay, bridge  and client data provides maximum extensibility and malleability. 
Changes in the Tor network structure or in available data will not compromise teh database over time. 
MongoDB will never complain if some documents inserted to it suddenly contain a new field or are missing another one. 
Adding new data types or modifying value spaces is always possible without need for further adjustments. 
The client side code can instantly access these new fields (at least as soon as it knows how to ask for them).   
 -->


Aggregation of imported data is essential to this project, for several reasons:
* the server data is ordered by individual server by date but most of the time we will not want to look at individual servers but at all servers together during a given timespan or at least at a group of servers sharing certain attributes.   


Dividing that big table of imported data into specialized collections according to the visual needs of the interface is a prerequisite for a responsive and interactive visualization.    
* what's even more important is that the data as it is gathered and imported into the DB reflects the technical structure of the network but not necessarily the logical structure that we'd like to examine and understand.   
For example data from clients and from relays is collected in different ways and imported in different collections but the relation between the number of clients connecting to the network and the bandwidth available to them is one of the crucial characteristics of the network. 
Also the data can be of very different nature: percentages don't easily compare to absolute values and also not all absolute values in one category add up to a meaningful sum because value spaces overlap.   
Therefor it's important to carefully select, construct and arrange meaningful and actually comparable configurations.   

Step 1 - topical aggregation:     
The aggregated collections will be those that actually provide the data to the visualization frontend. They are mappings from the imported data to the concepts that drive the interface. I call these aggregations step 1 collections or topical collections.    
Step 2 - formal aggregation:   
A second step of aggregation will consolidate these topical collections in precomputed timespans, regions, groups of node types etc to improve retrieval performance. They are reductions of the still very detailed data derived from the imports in step 1. I call these aggregations step 2 collections or formal collections.    
Step 3 - indexing:    
All these aggregated collections will then have to be enhanced by indices to gain further speed advantages.   
Additionally indices on the big "relay" collection of imported data have to facilitate generic and unforseen queries as much as possible.    


**Understanding the data**
The imported data is quite diverse and heterogeneous. The table below tries to capture its different dimensions.    
"Mode" refers to the essential quality of the thing being counted. 
This may be the numbers of hardware instances, software characteristics, measures of quality of service, number of users. 
We import data in two collections: relays and clients. The fields in these collections overlap only in one case: country. Countries are a powerful metaphor and because of this overlap they become a prominent player in the visualization, but they are still just a medium, not a subject of discourse. We are not interested in countries per se, we just use them to make connections.     
"Measure" documents if the numbers denote absolute values, percentages, averages etc. 
Obviously one would compare apples with oranges by comparing an absolute value like the number of available Bridges with an relative value like uptime. 
"Unit" is not much different from Measure, mainly reflecting if the field is single value or multi valued.
"Upper limit" denotes the upper limit of the value space. For percentages it's 100. For each relay type it's the total number of relays - the important implication being that each relay can simultaneously belong to multiple types: the types alltogether don't add up to the number of relays, the're up to 4 times more. Only Bridges are distinct.

"scat" is short for scattering (or spreading) and indicates how evenly distributed the value space is. This needs further thinking.
	

	TYPE	FIELD	MODE	MEASURE			UNIT				UPPER LIMIT
	-----------------------------------------------------------------------
	NODE								
			bgmed	hard	sum				count				relay
			osv		soft	sum...s			count/item			relay
			tsv		soft	sum...s			count/item			relay
			upt		quality	avg				percentage			100
			bwp		ip		scat + sum		count				
			bwc		ip		scat + sum		count				bwp
			// bwa							
									
	RELAY								
			gmed	hard	sum				count				relay minus Bridge
			g		hard	sum				count				< gmed
			m		hard	sum				count				< gmed
			e		hard	sum				count				< gmed
			d		hard	sum				count				< gmed
			pbr		quality	avg				percentage			100 (but should be much less)
			pbg		quality	avg				percentage			100 (but should be much less)
			pbm		quality	avg				percentage			100 (but should be much less)
			pbe		quality	avg				percentage			100 (but should be much less)
			flag	soft	sum...s			count/item			< gmed
			as		net		scat + sum...s	count/item			< gmed (but really much less)
			// pex	soft	sum,sum,sum		count/item			< gmed
									
	BRIDGE														relay minus GMED
			b		hard	sum	count		relay	
			brp		net		sum,sum,sum		count/item			bridge
			bre		hard	sum				count				< bridge
			brt		soft	sum,sum			count/item			bridge
								
	CLIENT							
			cb		user	sum				client
			cr		user	sum				client
			cpt		soft	sum,sum,sum,sum	count/item		
			cip		soft	sum,sum			count/item
						
	COUTRY					
	clients					
			cbcc	user	sum				client/country
			crcc	user	sum				client/country
	relays					
			osv		soft	sum...s			count/item/country	relay
			tsv		soft					count/item/country	relay
			upt		quality	avg				percentage/country	100
			bwp		ip		scat + sum		count/country		
			bwc		ip		scat + sum		count/country		bwp
			g		hard	sum				count/country		< gmed
			m		hard	sum				count/country		< gmed
			e		hard	sum				count/country		< gmed
			d		hard	sum				count/country		< gmed
			pbr		quality	avg				percentage/country	100 (but should be much less)
			pbg		quality	avg				percentage/country	100 (but should be much less)
			pbm		quality	avg				percentage/country	100 (but should be much less)
			pbe		quality	avg				percentage/country	100 (but should be much less)
			flag	soft	sum...s			count/item/country	< gmed
			as		net		scat + sum...s	count/item/country	< gmed (but really much less)
			// pex				
			// bwa		

Overview data on clients and relays:   
We have some very general data on all relays and bridges: total count, software version, operating system version, total bandwidth provided and consumed. 
Correspondingly we have quite general data on clients: how many clients in total were connected to the tor network via bridges or directly via guard nodes. 
These two fit well together.
We also know which IP-version and which obfuscation techniques clients use. 
But that's about it with clients and relays. 

Clients:   
Client data is on purpose quite sparse and we can't make much more than compare numbers of clients with the much more detailed data about the relays that make up the tor network. 
We will eg not be able to follow clients through the network.

Countries:   
The most detailed view we can get on clients is their distribution by country. This is interesting since we know also from each relay in which country it is related. And we know a lot about relays. So maybe we can construct some useful views on specific characteristics of relays and total numbers of clients by country.

Relays:   
Additionally to the data on relays and bridges we have quite specific data on different types of relays (but not bridges), namely guards, middle nodes, exits and directory servers. 
This data is detailed but not easy to handle. 
Numbers for the different types of relays don't add up to the total number of relays since each relay can (and most often does) serve more than one purpose and implements two, three or all four types of relays besides bridges.   
We know for each relay with which probability it is part of a clients route through the network, but we would need to agggregate averages and mean deviations to add some meaning to these numbers. 
We also know for most relays through which AS they are connected but this is a very large number of different AS which we first need to aggregate to find the most used ones and how high the concentration is. 
We then have some flags and exit port information which again are not particularily easy to visualize (and interpret).

Bridges:    
Last not least we have some data about bridges, but not as much as about relays. This is again on purpose since bridges serve to circumvent attempts to block the access to the tor network alltogether. Gathering too much information about them would make the censors job easier. 
What's fortunate about bridges is that they are mutually exclusive to relays. So at least these numbers add up.
Apart from that we don't know much more than a few technicalities that don't have much impact on the rest of the network: from which bridge pool they were assigned, which transport they use and if they are hosted in the EC2 cloud. 


_flags_
On closer inspection it became clear that most of the flags actually serve so little purpose that we will not use them in the visualization thereby trying to avoid visual clutter and distraction. 
They will remain in the schema and will be imported into the Database but will not be aggregated.  
Only the flags "Fast", "Stable", "BadExit" and "Authority" will be aggregated for the following types of relays: 
				Fast	Stable	BadExit	Authority
	Guard		x		x
	Middle		x		x
	Exit		x		x		x
	Directory 							x
	
	

**Import checks**
We are making assumptions about the imported data that wouldn't hurt to be checked. 
The following query checks if Bridges and all other types of relays are really disjunct sets:

	TODO



**Topical aggregation**
* consolidate relays: bridges + guard nodes + middle nodes + exit nodes + directory servers
* consolidate anonymity: guard nodes + middle nodes + exit nodes
* consolidate censorship circumvention: bridges + directory servers

	AGG.NAME	CAT		FIELD	TYPE	SUBTYPE	AGGREGATION		STEPS
	a1-country	ident
						_id						cc + '-1-' + date
						cc						for each country
						span	1
																				
												FALSCH														
												MUSS														
						das						ALLES														
						wird					AUF														
						hart					24														
												STUNDEN														
												BASIS														
												UMGERECHNET														
												WERDEN														
												WEIL DIE CLIENT DATA														
												NUR 24 GENAU IST
												
												
						date					by each date
				clients
						cbcc					from client		copy+paste
						crcc					from client		copy+paste
				relays
						osv		array	object	from relay		for this country 	
																for this date 		
																for each osv		take note of osv
																					sum up occurrences
						tsv		array	object	like osv
						upt		integer			from relay		for this country 	
																for this date 		average of all uptimes
						bwp		integer			from relay		for this country 	
																for this date 		sum up values
						bwc		integer			like bwp	
						gmed	integer			from relay		for this country 	
																for this date 		sum up all nodes except bridges
						g		integer			from relay		for this country 	
																for this date 		sum up all guards
						m		integer			like g
						e		integer			like g
						d		integer			like g
						pbr		percentage		from relay		for this country 	
																for this date 		average of all pbr's
						pbg		percentage		like pbr
						pbm		percentage		like pbr
						pbe		percentage		like pbr
						as		array	object	from relay		for this country 	
																for this date		
																for each node		take note of AS
																					sum up occurrences
				flags	
						gme-fast	int			from relay		for this country 	
																for this date		sum of all nodes with flag fast
						gme-stable	int			like gem-fast
						g-fast		int			like...
						g-stable	int			like...
						m-fast		int			like...
						m-stable	int			like...
						e-fast		int			like...
						e-stable	int			like...
						e-badexit	int			like...
		
Relay data by country like tsv, osv, upt, bwp and bwc could even be split up to the type level but I have no idea how to visualize that properly. 
Implementation would not be difficult (just a different combination of the steps already implemented above) but would still use quite some time and resources. Seems superfluous right now.   
Maybe just for gmed (guard-middle-exit-dir) and bridges?    
Maybe it' the other way round and the a1-relay collection is superfluous? It certainly can be constructed from gmed and bridges.
The utility of flags is also a little unclear.


	AGG.NAME	CAT		FIELD	TYPE	SUBTYPE	AGGREGATION		STEPS
	a1-bgmed	ident
						_id						'relay'-1-' + date
						span					1
						date					by each date
				nodes
						bgmed	integer			from relay		for this date		sum up all nodes
						osv		array	object	from relay		for this date 		
																for each node		take note of osv
																					sum up occurrences
						tsv		array	object	from relay		for this date 		
																for each node		take note of tsv
																					sum up occurrences
						upt		integer			from relay		for this date 		average of all uptimes
						bwp		integer			from relay		for this date 		sum up values
						bwc		integer			from relay		for this date 		sum up values	
								
						
	
	AGG.NAME	CAT		FIELD	TYPE	SUBTYPE	AGGREGATION		STEPS
	a1-gmed		ident
						_id						'gmed-1-' + date
						span					1
						date					by each date
				nodes
						gmed	integer			from relay		for this date		sum up all 
																			 		guard, middle, exit, dir
						osv		array	object	from relay		for this date 		
																for gmed nodes		take note of osv
																					sum up occurrences
						tsv		array	object	from relay		for this date 		
																for gmed nodes		take note of tsv
																					sum up occurrences
						upt		integer			from relay		for this date		
																for gmed nodes 		average of all uptimes
						bwp		integer			from relay		for this date		
																for gmed nodes 		sum up values
						bwc		integer			from relay		for this date		
																for gmed nodes 		sum up values	
						g		integer			from relay		for this date		sum up all guard nodes
						m		integer			from relay		for this date		sum up all middle nodes
						e		integer			from relay		for this date		sum up all exit nodes
						d		integer			from relay		for this date		sum up all dir nodes
						pbr		percentage		from relay		for this date		average of all pbr
						pbg		percentage		from relay		for this date		average of all pbg
						pbm		percentage		from relay		for this date		average of all pbm
						pbe		percentage		from relay		for this date		average of all pbe
						as		array	object	from relay		for this date		
																for each node		take note of AS
																					sum up occurrences
				flags	
						gme-fast	int			from relay		for this date
																for each node
																with flag fast		sum
						gme-stable	int			from relay		for this date
																for each node
																with flag stable	sum
						g-fast		int			from relay		for this date
																for each guard
																with flag fast		sum
						g-stable	int			like g-fast
						m-fast		int			like...
						m-stable	int			like...
						e-fast		int			like...
						e-stable	int			like...
						e-badexit	int			like...
		
	
		
	AGG.NAME	CAT		FIELD	TYPE	SUBTYPE	AGGREGATION		STEPS
	a1-bridge	ident
						_id						'bridge-1-' + date
						span					1
						date					by each date
				bridges
						bridge	integer			from relay		for this date		sum up all bridges
						osv		array	object	from relay		for this date 		
																for bridge nodes	take note of osv
																					sum up occurrences
						tsv		array	object	from relay		for this date 		
																for bridge nodes	take note of tsv
																					sum up occurrences
						upt		integer			from relay		for this date		
																for bridge nodes	average of all uptimes
						bwp		integer			from relay		for this date		
																for bridge nodes	sum up values
						bwc		integer			from relay		for this date		
																for bridge nodes 	sum up values
						brp		integer			from relay		for this date
																for each bridge	
																for each pool		sum
						bre		integer			from relay		for this date
																for each bridge		
																with bre true		sum
						brt		integer			from relay		for this date
																for each bridge	
																for each transport	sum
	
	
	
	AGG.NAME	CAT		FIELD	TYPE	SUBTYPE	AGGREGATION		STEPS
	a1-censor	ident																bridges+directories+cpt
						_id						'censor-1-' + date
						span					1
						date					by each date
				
				TODO		




	 
The client collection doesn't need any further aggregation since it is - as described above - already aggregated when it is imported into the Database. For indices see below.


_scattering / spreading / evenness of distribution_
So far we're only gathering all AS and how many nodes are connected to them. 
With a little more statistical knowledge and effort (hint hint) we could derive some facts about e.g. evenness of distribution.    
Maybe also bandwidth data could benefit from such measures.   
Who else?

	TODO
	
	
_supporting indices over relay and bridge_
Indices over the imported relay collection can probably speed up aggregation considerably. 
I didn't test this but it really seems reasonable and since the aggregation task is quite massive the overhead in time and space to generate these indices seems justified.

	FOR			OVER 	INCLUDING FIELDS
	a1-country	relay	country+date+type
	a1-relays	relay	date -> use date+type
	a1-gmed		relay	date+type


_aggregation mdularization_
With so much aggregation taking place it should be tried to prevent aggregation steps more than once for different views but build them on each other like a pyramid.   
Especially the country collection has a lot of overlap with other views.    
Maybe it would be good to seperate GMED and Bridges in the import collections

	TODO

	
	
**Formal aggregation**

This means aggregations over time and space. 
Time quite obviously translates to the ability watch the data from the finest level available - hourly - to an overview that shows the whole timespan available - currently 5 years - in a single view. The equivalent to zooming in and out. 
Space translates to the ability to group countries to meaningful regions, either continents or geopolitical regions like "arab spring countries".


_uptimes_
A node may not be online in every part of an aggregated timespan. 
We don't count servers that haven't been available for at least 30% of a timespan. 
That way we are counting the bandwidth a little conservativ, while we are too optimistic regarding the number of available servers.

We could document the details by recording a nodes uptime and calculating the bandwidth actually provided by multiplying the uptime (in percent) with the bandwidth advertized, thus adding 2 new fields to the collection.
But it probably is sufficient to calculate the bwa "bandwidth advertized" field accordingly and be done with it.
Because of that the following two lines were deleted from the schema. 

	bgmed		bwp		bandwidth actually provided integer			mean		B/s
	bgmed		upt		uptime						integer			mean		percentage of the given span the relay was actually available
	

_timedate intervals / periods_   
The default timespan is 1 hour for relays and 24 hours for clients. At a scale of 1 pixel per default timespan we can't see the whole data on a regular display.
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

From an earlier version of the import schema:
	bgmed		span	period of validity			integer			-			length of the interval this dataset describes, in hours:
																				one of: 1(default), 6, 24, 168


_continents and political regions_

	TODO
	


**Indices**

* bridges
* guard nodes
* middle nodes
* exit nodes


**Issues**
Maybe aggregates should use normalized versions of autonomous system data:			
	 gmed		asn		autonomous system normalizd	string	
Would be good to check the DB for how many AS we currently have and if a small number of them is significantly important (I need to learn some statistics terms...).


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


<!-- 
Re: metrics visualization

Your question was what factors would be relevant for users.  I'm trying
to make a short list here:

- bridge vs. relay: bridges are simply relays with a
I-want-to-be-a-bridge bit set in their configuration.  However, whether
a node is a bridge or a relay determines to some extend what data we
have about that node.  For example, we don't have country information
about bridges, but we have that for relays.

- country code

- flags: does the relay permit exiting to the Internet, is it a
potential guard node, is it fast, is it stable, etc.

- Tor software version
- operating system

- EC2 cloud bridge or not: our EC2 bridge image uses a naming scheme
that allows us to determine whether a bridge is run in Amazon's cloud or
not.

- Autonomous system: in which AS is a relay running (this information is
not available for bridges).  We currently don't extract this
information, but it's only a database lookup away.

- advertised bandwidth: maybe we only want to look at relays with a
given minimum advertised bandwidth.

- permitted exit ports: maybe we only want to look at relays permitting
exiting to port 80 and 443, or at relays permitting everything except
those ports, or any other port combination.

- for bridges, were they given out via BridgeDB's https or email pool or
not given out at all?

- for bridges, did they permit a given pluggable transport, like obfs2?

These are just a few ideas.  Some of these might turn out to be really
boring, and there might be exciting ones that I didn't list here.  We'll
probably learn more about good factors once there's something to play
with.  It would be cool if a new visualization would allow for removing
or adding factors easily, as well as adding or removing aggregates
(relay numbers, bandwidth numbers, etc.).


Re: [tor-assistants] metrics visualization

Right now, if you ask
for relays running version 0.2.4, it looks up those numbers in the
static JSON file that metrics exports.  You cannot ask for the number of
relays running version 0.2.4 on Linux, and you cannot ask for bandwidth
provided by relays running version 0.2.4.  If we wanted to add those
numbers, I'd have to add a new JSON file containing that particular
subset of relays; that doesn't scale.  What we should instead do is
define a data interface that's driven by the graphing engine that we can
then write a back-end counter-part for.  I have weak memories of data
warehouses and OLAP from my Information Science studies, but I don't
know how to design and implement such a thing using open-source
components.  I'd love to have help with this by knowing what data is
required for a good graphing framework.
...
Maybe there should be an "All" selection for every factor.  With
the current data it would only be possible to select one factor value
that is not "All" and select "All" for all other factors.  Once it's
possible to look at "0.2.4 relays on Linux", one could select something
else than "All" for more than one factor.  Or did you mean something else?


Re: [tor-assistants] metrics visualization

Yes, but pretty much anything above - except location and datetime - is 
measured in quantities of nodes: how many nodes run linux, how many nodes 
are stable, how many nodes permit exit pot 80 etc etc. All dimensions 
except location and datetime break down to quantities.

You could also ask how many bytes per day are transported by relays
running Linus.  Or, what's the probability of having a Windows relay as
your entry guard.


Re: visionion - aggregation

| Note that you wouldn't have to aggregate by single relay or bridge, but
| you could aggregate all relays or bridges with the same combination of
| dimensions.  For example, you only care about facts like "on May 23,
| 2013, there were 25 relays running with type Guard and Middle, with the
| Fast and Stable flag, with version 0.2.3.x, on OS X, in AS 1234, not
| permitting any ports, in Germany".

When I wrote that example, I wanted to express the maximum level of
detail that you'd have to keep to answer any question that anybody could
ever want to ask.  I wanted to say that you don't need to remember which
particular relay fingerprints are behind that number.  But you're right
that nobody would actually want to know the answer to such a detailed
question.

Starting from the other end, I suggest you start with questions touching
only a single dimension: "how many relays were there in Germany?" or
"how many relays were there on OS X?"  And when people want to know
more, like: "how many relays on OS X were there in Germany?", it would
be good if the system can be extended to answer such questions.  But
actually extending it could be step two.


MAY 23 9:17pm

Assume we only have node numbers as measure and relay types (only Guard
and Exit) and software versions (only 0.2.1, 0.2.2, and 0.2.3) as
dimensions.  Now, for a given hour, we could group relays, so that:

Guard/0.2.1 + Guard/0.2.2 + Guard/0.2.3 + Exit/0.2.1 + Exit/0.2.2 +
Exit/0.2.3 = all nodes

With clients, we don't have data for combinations of dimensions, but
only by a single dimension.  So, for a given day, we have:

de + us + fr + it + uk + gr + ... = all nodes connecting via bridges
IPv4 + IPv6 = all nodes connecting via bridges
obfs2 + obfs3 + websocket = all nodes connecting via bridges

But there's no such thing as de/IPv4/obfs2, and we can't derive that
number from our data.


MAY 25 7:17pm

There's a large emphasis on node numbers, but really, bwa, bwc, and pbr 
are more important measures than the number of nodes.

Here's my idea: how about you keep osv_r, tsv_r, fast_r, stable_r, and
as_r and store arrays of [#nodes, bwa, bwc, pbr] for each of them?  For
osv_r, tsv_r, and as_r that would mean storing an array of arrays, and
for fast_r and stable_r it would be just that array.




-->



Visualization Mechanics Wishlist
--------------------------------
* notify the client of new fields so he can add them to the generic interface 
* RESTfulness: having the URL represent the complete state of a visualization e.g. including zoom factor, 
  active facets, selected clipping etc




JavaScript Issues
-----------------

_framework_
still not sure which framework to use. something lightweight should suffice. 
angular.js maybe to involved. 
knockout.js like angular.js takes a declarative approach.
can.js doesn't have that declarative touch but apart from that looks very promising.
  
_datetime_    
Handling of date and time can get difficult with JavaScript because not every environment handles every possible datetime format equally well. 
Besides the ubiquitious UTC-epoch format which is rather inaccessable to humans we settle on "YYYY-MM-DD HH" as defined in ISO-8601 which is supported across all browsers and serves our needs just well.   
If D3.js doesn't provide all we need we may use the [Moment.JS](http://momentjs.com) library which "was designed to work both in the browser and in Node.JS". 
For further discussion of the topic see [Stackoverflow](http://stackoverflow.com/questions/1056728/formatting-a-date-in-javascript).




Data Import
-----------
An importer tool takes metrics descriptors as input and produces JSON or BSON to be imported into MongoDB. 
Such a tool should use Stem, which is a Python library that parses all relevant metrics descriptors. 
I think it even has an export function that may or may not support JSON. 
See Tor ticket #6171 for more details: https://trac.torproject.org/projects/tor/ticket/6171.  
[import.py](visionion/blob/master/import/import.py) is a simple data importer that uses Stem to read consensuses and server descriptors and that prints out dicts that could be imported into MongoDB.




Next Steps
----------
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
