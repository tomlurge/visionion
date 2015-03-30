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





### what made me think about hadoop in the first place


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
(found it because i realized that i had way to much servers: 4.600.000. realized that that might be because i'm summing up *all* servers in the import database. realized that that might be because the query is not working. realized that i had commented out and subsequently deleted the query completely)

now the question is if i should continue work on a "cleaner" implementation of the mapreduce script. it definitely is quite verbose. but getting a prototype running might be more important right now.

i'll definitely not need to continue work on a hadoop implementation right now (although that's a pity because i was very close to getting something started) since with the current performance i can aggregate 1 year of data in about 10-12 days on my macbook. that's fast enough.