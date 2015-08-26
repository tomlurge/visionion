## Technicalities

### <span id="background">Background Information</span>

Wikipedia has quick introductions to the meaning of [mean](http://de.wikipedia.org/wiki/Arithmetisches_Mittel), [median](http://de.wikipedia.org/wiki/Median) and [mode](http://de.wikipedia.org/wiki/Modus_%28Statistik%29) (the links point to the german edition).


### <span id="jsIssues">JavaScript Issues</span>

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

	correction: as of June 2015 we  use 
		YYYY-MM-DDTHH:MM
	because that's understood by JavaScripts Date function

###<span id="indexing">Indexing</span>

see [indexing notes](doc/how2/how2index.md)

####<span id="indexingImport">Indexing Import Data</span>

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

####<span id="indexingAggregated">Indexing Aggregated Data</span>


* import collections
	relay: node+timespan to look up specific nodes




###<span id="notes">Working Notes</span>

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
it is written that csv is more compact than json. an experiment suggested that thats not true, since size was almost the same. but the expoeriment was flawed as the [generated csv file](doc/testCSV/2013_04_02_01_importMR.csv) clearly shows. needs more work.
								
###### constructing fake data from the data i've got

	export 31 days from 2013-04-01 to 2013-05-01 (inclusive)
	make 12 months from them (don't forget to shorten february)
	make 10 years from that (don't forget leap years)
	import that into a new collection called "fakes"
	(generate bins from there)
	
for more details see [how to generate fake data](doc/how2/how2fake.md)