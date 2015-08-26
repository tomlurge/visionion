## Data Aggregation

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


### <span id="import">Import Data Aggregation</span>

An exhaustive fact table should ideally encompass everything we know from a certain timespan, about all node types and with any combination of characteristics.
But we can't really pre-aggregate all possible permutations of characteristics (like say roles and flags and software-versions and os-versions and AS) a relay could run under because they are practically countless.
The structure of the facts collection is still heavily influenced by the gestalt of the imported data. We tried to find a sensible balance between size of the aggregated data set and the total of all possible queries. A well constructed dataset provides a good base from which nearly every conceivable question can be answered with minimal further processing. This is guesswork and, especially with regard to our lack of experience in the field, will probably need to be modified after some user experiences have been collected.

We divided the set of properties into 4 subsets:

#####administrative properties  
these properties keep track of the provenance of a fact

	_id
	date
	span
	update

#####primary structural properties   
the imported data is very diverse in nature. we found the following categorization useful to express it's main components

	client
	server
	country
	autonomous system

#####secondary structural properties   
for servers we developped a secondary set of characteristics since they are the most richly structured component of the network and also the most important topic when analyzing it.

	type of server (bridge or relay)
	role and flag of relay
	pool, plug and host of bridge

	Bridges have certain chracteristics that seem important enough to mandate their own subcategories. That results in some doubling of materialization (e.g. you can look up plugs under pools as well as pools under plugs) but that's the price you have to pay for responsive interfaces.
	In the case of relay.roles and relay.flags though we go much further than that: all permutations of flag and role are materialized, both projectively and disjunctively (meaning that a node that carries the flag and role in question will be counted under projective, but it will only be counted under disjunctive if it carries no other flags and roles). Projective aggregation is useful when quickly searching for nodes that fulfill certain criteria. But only disjunctive aggregates add up to the correct total: they are more cumbersome to use but provide a more detailed view.
	Note: the default mode is always projective. If the value in question is not prefixed with 'dis' counting was done projectively.


Primary and secondary properties together form the main structure of an aggregated fact. They form a tree and at every leave of that tree a so called report is generated. This report contains the 4. subset of properties and this is where the beef of the data, the numbers materialize.

#####non-structural properties   
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


####<span id="structure">Structural Overview</span>


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

####<span id="detailed"></span>Structure Detailed</span>

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
		
		

#####<span id="prodis">PROJECTIVE vs DISJUNCTIVE</span>

the default testing logic is projective:
	counting _any_ node which fulfills the criteria
	(probably also fulfilling many other criterias)
sections beginning with "dis" (disR, disF and disRF) are tested
disjunctively:
	counting _only_ nodes that fulfill _exactly_ the criterias
	(evaluate to true for the given criterias and evaluating to false
	for all others)



####<span id="reports">Reports</span>

This data schema profits from the fact that node counts, software versions, bandwidths, probabilties and the exit ports are independent from each other.

#####<span id="server">Server Reports</span>
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
		
		
#####<span id="country">Country Reports</span>
	
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
	
	
#####<span id="as">Autonomous System Reports</span>

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

####<span id="future">Future Possibilities</span>

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

###<span id="consolidate">Consolidation And Simplification</span>

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



###<span id="admin">Aggregation Admin Interface</span>

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



###<span id="mongoDB">MapReduce in MongoDB</span>

It can't be overestimated enough that what is output in the map step has to have the exact same structure than what is output in the reduce step. The two structures have to be **idempotent**. I had a lot of trouble with scripts running fine on the testdata but then failing strangely on the actual data. The reason was that the actual data set was much bigger and the mapReduce engine in MongoDB started to work through it in chunks: processing the first 100 documents in the collection, then the next 100 documents and so forth, and then aggregatig those results together like they were new input documents. So what is spit out in the reduce step - and you think you're done with that - get's sucked into another mapreduce circle again, and again... That's why it's so important when implementing the reduce step to always have in mind that it might not just chew through one more of those single-document 'map' outputs, but through one of the 'reduce' outputs - which in this case were much more complex and therefor required some additional checks and logic. E.g. since we are counting a lot of single relay entries on a given date there was more than one place where it was tempting to add a +1 in the reduce step instead of adding the actual value contained in the document to be reduced - which might as well be 100 (and in that case actually was because MongoDBs mapReduce workes through the data in chunks of 100 documents).

Another important thing to note - and that you don't learn from the MongoDB docs - is that you have a lot of freedom with your JavaScript as long as you don't break idempotence. Most of the stuff like numbers of relays complying to certain characteristics is aggregated by just adding up document after document. But the more complex constructs like countries and autonomous systems which I had to collect from different documents through different means and intermediary steps can't be gathered that easily. First I tried to aggregate them stepwise through intermediate collections but that didn't quite work out and made the whole thing very complex. Stackoverflow was my best friend. The examples other people had posted really opened my eyes for what is possible within the reduce step.

For more nitty gritty details on aggregation with MongoDBs mapReduce see a collection of mapReduce [examples](doc/how2/how2mapReduce.md) compiled from the web (mostly Stackoverflow) and some weird [working notes](doc/aggregation.md#notes) on how to tackle the aggregation.
And there's of course the [**mapReduce script**](aggregation/mongodb/importMR.js) itself.

Some material about MongoDB and OLAP
[MongoDB - Materialized View/OLAP Style Aggregation and Performance (stackoverflow)](http://stackoverflow.com/questions/11810911/mongodb-materialized-view-olap-style-aggregation-and-performance)
[Another useful thread on stackoverflow](http://stackoverflow.com/questions/3478916/what-should-i-choose-mongodb-cassandra-redis-couchdb), see especially the second answer
[MongoDB OLAP with pre-aggregated cubes](http://osdir.com/ml/mongodb-user/2011-01/msg01542.html)
[DataBrewery Cubes](http://databrewery.org/cubes/doc/)
[MongoDB OLAP](https://groups.google.com/forum/?fromgroups=#!searchin/mongodb-user/MongoDB$20OLAP/mongodb-user/Aaxn813-oO4/PMrYH7Mr_2YJ)





###<span id="notes">Notes</span>

####Subsequent Incremental Map-Reduce (mapping heterogeneous collections)
http://docs.mongodb.org/manual/tutorial/perform-incremental-map-reduce/

if several collections with different fields have to be aggregated into one target collection   
	either all map functions have to contaion all fields (with sensible defaults like 0 or null)   
	or the reduce function must handle the case of a missing field, which means:   
	
	- asking/waiting if map delivers the field
	- if yes that case receive the value
	- otherwise create it with sensible defaults

see MAPPING 2 COLLECTIONS INTO 1 RESULT - VERSION #2

####calling emit multiple times
http://docs.mongodb.org/manual/reference/method/db.collection.mapReduce/#db.collection.mapReduce
The following map function may call emit(key,value) multiple times depending on the number of elements in the input document's items field:

	function() {
		this.items.forEach(function(item){ emit(item.sku, 1); });
	}

####accessing a field in an array
	
	var chartData = [{"Value1":17.800,"DateAndTime":"\/Date(1338501601000)\/"}]
	chartData[0].DateAndTime;
	
####accessing name of field and value of field
	
	var myObject = {} ;
	myObject["aaa"] = "AAA" ;
	myObject["bbb"] = "BBB" ;
	var fieldName, fieldValue ;
	for(fieldName in myObject) {
	   fieldValue = myObject[fieldName] ;
	   alert("name : " + fieldName + " : value : " + fieldValue) ;
	}


####aggregation steps
	
	0.	aggregation starts either triggered by the import of new data 
		or periodically, first checking the import collection for newly imported documents
		from the newly imported documents it extracts the dates and for each distinct date starts the following aggregation procedure:
	1.	more than one mapReduce for one import collection
		some mapReduce steps are too complex to put them together in one map/reduce
	A.	they can be run sequentially and all be reduced to one result { out: { reduce : "tempFacts" }
		http://stackoverflow.com/questions/5681851/mongodb-combine-data-from-multiple-collections-in-to-one-how
		http://tebros.com/2011/07/using-mongodb-mapreduce-to-join-2-collections/
	2.	probably we can then also aggregate from different import tables
		should still be possible with  { out: { reduce : "tempFacts" }
	B.	amounting to the following mapReduce steps:
		* clients				from clients import collection
		* servers
			**					from bridges import collection
			**					from relays import collection
		* bridges				from bridges import collection
		* relays				from relays import collection
		* countries
			**					from clients import collection
			**					from relays import collection
		* autonomous systems	from relays import collection
	3.	server and countries need to be aggregated from 2 import collections
		and the resulting aggregates reduced into one, like: { out: { reduce : "servers/countries/autosys" } }
	p4.	to get rid of the "value" object we need one further step
		http://stackoverflow.com/questions/7257989/in-mongodb-mapreduce-how-can-i-flatten-the-values-object
		this is not part of the mapReduce operation
	5.	the resulting fact document has to be added to the facts collection
		overwriting older documents for the same date if need be (e.g. if new data arrived for already existing imports)
		using the update() method
		The update() method can either replace the existing document with the new document or update specific fields in the existing document.
		If the <update> argument contains fields not currently in the document, the update() method adds the new fields to the document.
		If you set the upsert option in the <options> argument to true or 1 and no existing document match the <query> argument, the update() method can insert a new document into the collection.


####tactical considerations  (Friday, August 9, 2013)

it's not possible to aggregate from multiple documents in tempFacts into one visFacts document
if those multiple documents in tempFacts do not each carry every field of the final visFacts document
which means that they each would have to be around 3000 lines long and contain a template of the final aggregated monster. that's just not feasable.

what alternatives do we have?   

we could aggregate into multiple smaller documents like we do right now
and then just copy the results into a final visFacts document with ordinary database commands instead of fancy mapreduce logic. we could do this while also getting rid of the "value" attribute that MongoDB's mapReduce insists on forcing on us thereby killimg two birds with one stone (poor birds! in german this saying is somewhat less disturbing).   
downside: mixing mapReduce and database procedures. getting rid of "value" is not that important either

or we could try some fancy looping logic like some of the MAPPING 2 COLLECTIONS INTO 1 RESULT - VERSIONs below and see how far we get.   
downside: it's not clear and how many portals to hell that opens

or we could reevaluate if it was good idea to split import data across 3 collections 
and if we could consolidate aggergation into 1 step and process by consolidating imports into 1 table

downside: requires thinking.

thinking: 
query could be refined to only select appropriate documents 
				(maybe imported dcuments get a field "_typ" with values "client", "relay" or "bridge")
				but that would still need more than one aggregation script
				not good...
			
or in every map step we first ask if the document has the field we're asking for.   
can that be solved programmatically by a loop?   
do we have to ask for each object too?   
could that even facilitate the procedure? 

OR:	let's add a type field   
copy all raw data into one import collection called "import"    
copy all aggregate scripts into one big script (like in the beginning)    
modify aggregation script    
either where appropriate add "if type == xxx" statements to the map step   
 
or, easier but longer, if/else whole blocks copied over from the current scripts   
with the else being default values ("", 0, etc)    
use out:reduce instead of merge   




