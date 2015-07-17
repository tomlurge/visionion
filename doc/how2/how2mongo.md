data directory zurück auf zut
xcode updaten
brew install mongodb
rauskriegen wie man dann die console auf die shell leitet
	oder log file usage lernen
oder weiter selbst installiert und per shell starten
	dann in der bash_profile wieder den pfad setzen
	und ulimit peramnent ändern (bash rc ?

########################### debugging
print("debug comment");


########################### re-installing MongoDB through brew
tl@h:~/tor$ brew install mongodb
==> Downloading http://fastdl.mongodb.org/osx/mongodb-osx-x86_64-2.2.2.tgz
Already downloaded: /Library/Caches/Homebrew/mongodb-2.2.2-x86_64.tgz
==> Caveats
To have launchd start mongodb at login:
    ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents
Then to load mongodb now:
    launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist
Or, if you don't want/need launchctl, you can just run:
    mongod
/usr/local/Cellar/mongodb/2.2.2-x86_64: 21 files, 170M, built in 4 seconds


########################### modifying mongo defaults
(for homebrew install and starting through ... well? launchctl maybe?)
adding
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
following this advice
	http://stackoverflow.com/questions/10760223/sane-defaults-for-mongodb-on-osx (first answer)

(when starting from shell)
	added
		ulimit -n 2048		// adjust file limits for sessions started from shell
	to ~/.bashrc
	further reading: 		http://superuser.com/questions/433746/is-there-a-fix-for-the-too-many-open-files-in-system-error-on-os-x-10-7-1 (first answer)
						http://krypted.com/mac-os-x/maximum-files-in-mac-os-x/

/usr/local/var/mongod.conf
	logpath auskommentiert
	gibt seine meldungen jetzt wieder in der shell aus


###########################	mongo mapReduce


########################### use that mergetool with git
mt = mergetool -t opendiff

############################ how to set up a javascript project with several files
use node
check node documentation

########################### check everything for this and self(that)


########################### create poroject that can be downloaded


############################ preparing osX
to get rid of that annoying ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000 **
I did the following on the shell: echo 'limit maxfiles 10000 unlimited' | sudo tee -a /etc/launchd.conf
because THEY told me so: http://serverfault.com/questions/15564/where-are-the-default-ulimits-specified-on-os-x-10-5
but it didn't help
maybe install mongo through homebrew? http://stackoverflow.com/questions/10760223/sane-defaults-for-mongodb-on-osx

############################# mongo startup and other basics
############################################################
# start db
mongod --dbpath /Volumes/zut/visionion/MONGOdata
# start mongo shell
mongo
# ensure index over date of import collection
db.import.ensureIndex({addd:-1})
db.import.ensureIndex({date:-1})
db.import.ensureIndex({type:1})
# run a javascript file through a new mongo shell
mongo localhost:27017/tor ~/visionion/aggregateFacts.js
# housekeeping tasks in mongo shell
show dbs
use dbName
db.dropDatabase()
show collections
db.collectionName.remove()						// löscht alle documente in der collection, aber nicht die c. selbst
db.collectionName.ensureIndex({fieldName:1})		// sortierung: 1 aufsteigend, -1 absteigend
db.collectionName.dropIndex("indexName")
db.collectionName.getIndexSpecs()
# most basic commands (hast du schon wieder alles vergessen =:-[ )
db.collectionName.findOne()



############################# mongo import
##########################################
in der bash
mongoimport --db tor --collection importRelays --stopOnError --upsert --file /Volumes/zut/visionion/RAWdata/relays.json
mongoimport --db tor --collection importBridges --stopOnError --upsert --file /Volumes/zut/visionion/RAWdata/bridges.json
mongoimport --db tor --collection importClients --stopOnError --upsert --file /Volumes/zut/visionion/RAWdata/clients.json
http://docs.mongodb.org/manual/reference/mongoimport/
NOTES:
	since 2.4 MongoDB supports import over SSL connections
	--dbpath <path>	allows to write to the data files directly - faster, but blocks mongod during import
	mongoimport by default upserts based on the _id field (upsert: updates exsiting documents, adds new ones)


############################# mongo script
##########################################
http://docs.mongodb.org/manual/core/server-side-javascript/#running-js-scripts-in-mongo-on-mongod-host
http://docs.mongodb.org/manual/tutorial/write-scripts-for-the-mongo-shell/
# connecting to the db through some js code
db = connect("localhost:27017/tor");
# run a javascript file through a new mongo shell
mongo localhost:27017/tor ~/visionion/aggregateFacts.js


############################ tor visionion
##########################################
~/.bash_profile			PATH=$PATH:/Users/tl/tor/mongo/bin
mongo daemon starten		tl@h:~$ mongod --dbpath ~/tor/mongo/data
mongo shell starten		tl@h:~$ mongo
mongo viewer starten		tl@h:~$ ~/tor/mongo/mViewer-v0.9.1/start_mViewer.sh			[in localhost:8080]
						tl@h:~$ ~/tor/mongo/mViewer-v0.9.1/start_mViewer.sh	9090		[in localhost:9090]
shell commands				show dbs
						use dbName
						db.dropDatabase()		// in db.irgendeinKommando steht "db." immer für die aktuell ausgewählte datenbank
						show collections
						db.getCollectionNames()
						db.collectionName.find()
						db.collectionName.find().skip(5000).limit(1)
						db.collectionName.findOne()
						db.collectionName.find({"fieldName.subFieldName": "value"})
						db.collectionName.find( {fieldName: {"$gt": 20, "$lt": 25 }} )
						db.collectionName.remove()	// delete all documents within the collection
						db.users.remove({"favorites.cities": "Cheyenne"})	// deletes those whole documents
						db.collectionName.drop()	// delete the collection alltogether
						db.help()
						db.collectionName.help()
						db.collectionName.update( { key1:value1 }, { $set: { key2:value2 } } )
						db.collectionName.update( { key1:value1 }, { $unset: { key2:1 } } )
						db.users.update( {"favorites.movies": "Casablanca"},
							{$addToSet: {"favorites.movies": "The Maltese Falcon"} }, false, true )
							3. arg false :
							4. arg true : multiupdate, not only the first result
						db.collectionName.upsert()
						db.runCommand()
						it														// return next result set
						db.collectionName.command( {fieldName:value} ).explain()
						db.collectionName.ensureIndex({fieldName: 1})  			// or -1 for descending
						db.collectionName.getIndexes()
						db.stats()
						db.collectionName.stats()
						db.runCommand( {dbstats: 1} )							// wie db.stats()
						db.runCommand( {collstats: 'collectionName'}			// wie db.collectionName.stats()
						db.products.renameCollection("store_products")
						$in, $all, $nin 										// set operators
						$nin													// doesn't use indices
						db.products.find('details.color': { $nin: ["black", "blue"] }	// neither
						db.products.find('details.color': { $in: ["black", "blue"] } 	// or (inclusive)
						db.products.find('details.color': { $all: ["black", "blue"] }	// all of them
						db.categories.find({_id: {$in: product['category_ids']}})
						db.food.find({"fruit" : ["apple", "banana", "peach"]})	// returns only exact match
						db.system.namespaces.find();
						db.system.indexes.find();
						db.numbers.find({n: {$type: 18}});	// type 18 steht für 64-bit integers
															// consult the BSON spec at http:// bsonspec.org

						db.users.find({age: {$gte: 0, $lte: 30}) 			// $lt $lte $gt $gte
						$ne, $not, $or, $and, $exists						// boolean operators
						db.users.find(last_name: {$not: /^B/} }				// last name doesn't start with 'B'
						db.products.find('details.manufacturer': 'ACME', tags: {$ne: "gardening"} }
								// find all products manufactured by ACME that aren’t tagged with gardening:
						{ _id: 1, tags: ["tools", "equipment", "soil"] }	// beispiel
						db.products.find({tags: "soil"})					// suchen im array erfordert
														                        // keine spezielle syntax
						db.products.find({'tags.0': "soil"})				// 'soil' als erster tag im tags-array
						db.users.find({addresses: {$elemMatch: {name: 'home', state: 'NY'}}})
												// $elemMatch
												// to restrict multiple conditions to the same sub-document
												// wichtig, falls ein user mehrere adressen haben kann
												// aber die beiden kriterien von derselben adresse
												// erfüllt werden sollen
						db.users.find({addresses: {$size: 3}})				// user mit genau 3 adressen
						db.reviews.find({$where: "function() { return this.helpful_votes > 3; }"}})
												// javascript queries mit $where
						db.reviews.find({$where: "this.helpful_votes > 3"}})
												// the same, in abbreviated form
						db.reviews.find( { user_id: ObjectId("4c4b1476238d3b4dd5000001"),
										   $where: "(this.rating * .92) > 3" } )
												// uses a standard query on a presumably- indexed user_id field,
												// and employs a JavaScript expression for a special usecase
						db.users.find(last_name: {$not: /^B/} }		// regular expresseion, indexed
												// regular expression other than this prefix style expression
												// aren't indexed
						db.orders.find({subtotal: {$mod: [3, 0]}})			// modulo operator
						db.users.find({_id: {$type: 2}})					// find by BSON type

						db.users.find({}, {username: 1})			// projection: find all, but only return username
															// returns _id too, if you don't explicitely 0 that
						db.users.find({}, {addresses: 0})						// return everything excluding adresses
						db.products.find({}, {reviews: {$slice: 12}} )			// pagination, the first 12
						db.products.find({}, {reviews: {$slice: -12}} )			// pagination, the last 12
						db.products.find({}, {reviews: {$slice: [24, 12] }} )	// skip 24, return #25 to #36
						db.products.find({"desc":"mp3").limit(12).skip(24)		// skip 24, return #25 to #36
						db.reviews.find({}).sort({helpful_votes:-1, rating: -1})
															// sort by helpfullness, then by rating, descending
						db.docs.find({}).skip(500000).limit(10).sort({date: 1}) // inefficient !!!

						db.relay.find({date: "2013-04-27 07"},{pex:1,type: 1, nick:1}).sort({pex:-1})

						db.products.distinct("tags")
						db.products.distinct("tags", {category_id: ObjectId("6a5b1476238d3b4dd5000048")})
												// distinct tags von objekten aus einer bestimmten kategorie
						getLastError			// check eg if creation of an index was successfull
						db.foo.find().explain() //explain will return informatioon aboiut the indices used for
												// the query (if any) and stats about timing and the number of
												// documents scanned
						db.map.find({"gps" : {"$near" : [40, -73]}}) 		// finds all documents in the map
						 													// in order by distance from (40, -73
						db.runCommand({"group" : { ... } )					// aggregation - group by key
																			// def guide s82
						db.runCommand({"group" : {
							"ns" : "stocks",								// collection
							"key" : "day",									// group by
							"initial" : {"time" : 0}, 						// start with
							"$reduce" : function(doc, prev) {				// keep only the highest
								if (doc.time > prev.time) {
									prev.price = doc.price;
									prev.time = doc.time; }},
							"condition" : {"day" : {"$gt" : "2010/09/30"}} 	// after a certain date
						}})													// returns an array of documents
																			// plus some meta data
						> db.import.distinct("date").length
							18672
						> db.import.distinct("as").length
							2014
						> db.import.distinct("cc").length
							124
						> db.import.distinct("_id",{"date" : "2013-04-03 23"}).length
							4704
						> db.import.update({},{$rename: {'addd': 'updt'}}, false, true)

> db.facts.find({},{_id: 1}).pretty()
{ "_id" : "2013-04-03 23" }
{ "_id" : "2013-04-03 22" }
{ "_id" : "2013-04-03 20" }
{ "_id" : "2013-04-03 13" }
{ "_id" : "2013-04-03 14" }
>



INDEXES
=======

						db.collectionName.ensureIndex({fieldName:1})		// sortierung: 1 aufsteigend, -1 absteigend
						db.collectionName.dropIndex("indexName")
						db.collectionName.getIndexSpecs()

indexes beziehen sich immer auf eine collection
	eine collection kann maximal 64 indexes haben
		aber ein multi-key index über einen array mit mehr als 64 feldern ist möglich
eine suche kann immer nur einen index nutzen
arrays werden automatisch als multikey indexes indexiert
ein compound index indexiert mehrere felder
	dabei ist die reihenfolge wichtig
	eine suche kann nur uber das erste feld eines compound index geführt werden
		aber nicht nur über das zweite
	ein suche kann über das erste und zweite element eines compound index geführt werden,
		aber nicht über das erste+dritte und auch nicht das zweite+dritte
	ausserdem low selectivity fields zuletzt
		also zb zuerst date, dann type

ein compound index kann nur einen array enthalten
ein index "überdeckt" (covers) eine suche, wenn er sowhl alle suchfelder als auch alle zurückzugebenden felder enthält
	in diesem fall muss zur beantwortung der frage nicht auf das originaldokument zugegriffen werden
man kann auch felder in sub-documents indexieren
	db.people.ensureIndex( { "address.zipcode": 1 } )
	das ist nicht das gleiche wie das ganze sub-document zu indexieren

> db.relay.stats()
{
	"ns" : "tor.relay",
	"count" : 4.600.366,
	"size" :           1.823.813.584,
	"avgObjSize" :               396,44967030884067,
	"storageSize" : 	2.449.735.680,
	"numExtents" : 21,
	"nindexes" : 17,
	"lastExtentSize" :   638.570.496,
	"paddingFactor" : 1,
	"systemFlags" : 0,
	"userFlags" : 0,
	"totalIndexSize" : 3.018.015.056,
	"indexSizes" : {
		"_id_" : 		  368.770.304,
		"pex_1" : 	  121.667.056,
		"flag_1" : 	  462.966.000,
		"type_1" : 	  193.861.136,
		"as_1" : 		  104.391.168,
		"cc_1" : 		   88.382.560,
		"pe_1" : 		  104.407.520,
		"pg_1" : 		  104.407.520,
		"pm_1" : 	 	  104.407.520,
		"os_1" : 		  108.103.072,
		"nick_1" : 	  125.951.280,
		"tsv_1" : 	   97.073.648,
		"ba_1" : 		   31.543.008,
		"bez_1" : 	   24.111.024,
		"bpt_1" : 	    9.762.144,
		"nid_1" : 	  270.609.248,
		"nid_1_date_1_type_1_ba_1" :
					  697.600.848,
	},
	"ok" : 1
}
>


unique indices 		may be useful for views where we want exactly one entry per datetime
sparse indices			ignore documents for which the indexed field is null
multikey indices		eg on array fileds like tags	 (default if the index builder finds an array)

specifying an index	spec = {ns: "green.users", key: {'addresses.zip': 1}, name: 'zip'}
					db.system.indexes.insert(spec, true)
finding an index		db.system.indexes.find()
						  { "_id" : ObjectId("4d2205c4051f853d46447e95"), "ns" : "green.users",
 							 "key" : { "addresses.zip" : 1 }, "name" : "zip", "v" : 1 }

my indexes so far:

> db.client.ensureIndex({cb: 1})
> db.client.ensureIndex({cbcc: 1})
> db.client.ensureIndex({cr: 1})
> db.client.ensureIndex({crcc: 1})

> db.relay.ensureIndex({pex: 1})
> db.relay.ensureIndex({flag: 1})
> db.relay.ensureIndex({type: 1})
> db.relay.ensureIndex({as: 1})
> db.relay.ensureIndex({cc: 1})
> db.relay.ensureIndex({pe: 1}
> db.relay.ensureIndex({pe: 1})
> db.relay.ensureIndex({pg:1})
> db.relay.ensureIndex({pm:1})
> db.relay.ensureIndex({os:1})
> db.relay.ensureIndex({nick:1})
> db.relay.ensureIndex({tsv:1})
> db.relay.ensureIndex({ba:1}, {sparse:true})
> db.relay.ensureIndex({bez:1}, {sparse:true})
> db.relay.ensureIndex({bpt:1}, {sparse:true})

> db.stats()
{
	"db" : "tor",
	"collections" : 4,
	"objects" : 4600537,
	"avgObjSize" : 396.5257273227017,
	"dataSize" : 		1824231280,
	"storageSize" : 	2450776064,
	"numExtents" : 26,
	"indexes" : 20,
	"indexSize" : 		2049845840,
	"fileSize" : 		8519680000,
	"nsSizeMB" : 16,
	"dataFileVersion" : {
		"major" : 4,
		"minor" : 5
	},
	"ok" : 1
}
>


################
### replace text
DO IT FOR ONE
db.import.find({"_id" : "client-1-2013010100"}).forEach(function(doc){db.import.update({_id:doc._id},{$set:{"date": doc.date.replace(" ", "T") + ":00"}})})
DO IT FOR ALL
db.import.find().forEach(function(doc){db.import.update({_id:doc._id},{$set:{"date": doc.date.replace(" ", "T") + ":00"}})})



##########


MAP REDUCE
==========

hours 	0 to 5 		from span 	1	to 	hour		0	in span 	6
hours 	6 to 11 		from span 	1	to 	hour		6	in span 	6
hours 	12 to 17 		from span 	1	to 	hour		12	in span 	6
hours 	18 to 24 		from span 	1	to 	hour		18	in span 	6

hours 	0,6, 12, 18	from span		6	to hour		0	in span	24

every 7 	span 24                                          	in span 	168




DATA TYPES				null
==========				boolean
						32-bit integer
						64-bit integer
						64-bit floating point
						string
						symbol
						object id
						date					// as milliseconds since the epoch
						reg ex
						code
						binary data
						max value
						min value
						undefined
						array
						embedded document














safe mode
bulk insert


#action 71
You’re also creating a compound index on tags ascending and id descending. Indexes can be specified in ascending or descending order. This matters mainly when creating compound indexes; you should always choose the directions based on your expected query patterns. Since you’re going to want to query for a particular tag and show the results from newest to oldest, an index with tags ascending and ID descending will make that query use the index both for filtering results and for sorting them. As you can see here, you indicate index direction with 1 for ascending and -1 for descending.
#action 82
create unique index		ensureIndex()
#action 83
many to many relationships (in the absence of 'join')
#action 93
Each member of a replica set logs all its writes to a special capped collection called oplog.rs.
insert using safe mode
index array keys
#action 96
Datetimes	The BSON datetime type is used to store temporal values. Time values are represented using a signed 64-bit integer marking milliseconds since the Unix epoch, in UTC (Coordinated Universal Time). A negative value marks milliseconds prior to the epoch.11
A couple usage notes follow. First, if you’re creating dates in JavaScript, keep in mind that months in JavaScript dates are 0-based. This means that new Date(2011, 5, 11) will create a date object representing June 11, 2011
Custom types	But what if you must store your times with their time zones? Sometimes the basic BSON types don’t suffice. Though there’s no way to create a custom BSON type, you can compose the various primitive BSON values to create your own virtual type. For instance, if you wanted to store times with zone, you might use a document structure like this, in Ruby:
{:time_with_zone =>
	{:time => Time.utc.now,
	 :zone => "EST"
	}
}
It’s not difficult to write an application so that it transparently handles these composite representations. This is usually how it’s done in the real world.
#action 101
If you’re expecting a single document, findOne will return that document if it exists.
If you need to return multiple documents, remember that you’ll be using find, and that this method will return a cursor. You’ll then need to iterate over that cursor some- where in your application.
#action 101
It's important that you have an index on any fields acting as references.


user_ids = db.orders.find(
		{	'line_items.sku': "9092",
			purchase_date: { '$gt': new Date(2009, 0, 1) }
		},
		{	user_id: 1, _id: 0 }
	).
	toArray().
	map( function(doc) { return doc['_id'] }
)
users = db.users.find({_id: {$in: user_ids}})



############################## G+J projekt
##########################################

START MONGO IN REPLICATIONMODE
------------------------------
start mongo in replication mode
	tl@h:~$ mongod --dbpath ~/guj/mongoData --rest --replSet reploman
	// maybe it will start complaining about EMPTYCONFIG - that will be resolved in next step
start mongo shell
	tl@h:~$ mongo
	> rs.initiate()	// initiate replication configuration
	> rs.conf()		// check replication cluster status
	> show dbs
	> use et			// switch to et database

MONGO EXPORT DATA
-----------------
MONGO alone, without direct connection to solr, without replication mode
extract archive, add mongo/bin to path in bash_profile, create data-directory (eg /mongoData)
	tl@h:~$ mongod --dbpath ~/guj/mongoData --rest
import databasedump from essenundtrinken
	tl@h:~$ mongorestore /Users/tl/guj/et_json/dump
start mongo shell
	tl@h:~$ mongo
	> show dbs
	> use et_rezeptdb
start new shell
	tl@h:~$ mongoexport --db et_rezeptdb --collection et_rezeptdb --jsonArray --out ~/Desktop/et3.json
start new shell
	tl@h:~/guj/soft/solr4/example$ java -jar start.jar
start new shell
	tl@h:~$ curl 'http://localhost:8983/solr/update/json?commit=true' --data-binary @/Users/tl/Desktop/et3.json -H 'Content-type:application/json'
{"responseHeader":{"status":400,"QTime":7},"error":{"msg":"Error parsing JSON field value. Unexpected OBJECT_START","code":400}}
es hilft also alles nichts: solr4 akzeptiert das json nicht, das mongodb exportiert.
jsonlint auf der konsole (per node) kam nicht zum ende, JSON Validator hat die korrektheit des json bestätigt. nu weiss ich auch nich weiter mit solr4
solr361 hingegen gibt "Error 400 invalid key: $date [92]"
weiss ich auch nich weiter mit solr361


MONGO GRUNDLAGEN
================
shell 1		mongod --dbpath ~/guj/mongodb-data --rest --replSet reploman
shell 2		mongo
			show dbs
			use et
			show collections
			db.et.find({}).skip(5000).limit(1)
			db.et.findOne()
			db.help()
			db.et.help()

test = { test : "mongo"};
db.et.save(test); 	// oder auch db.et.insert(test)
db.et.find({"test":"mongo"}).forEach(printjson); // oder findOne in einer grossen db
db.et.update({"test":"mongo"} , { $set : {"hand" : "fuss" } } );
db.et.update({"test":"mongo"} , { $set : {"kopf" : "hand" + "+" + "fuss" } } );


> db.et.find({"hand":"fuss"}).forEach(printjson);
{ "_id" : ObjectId("5076a587d43f4ea13ae627c1"), "hand" : "fuss" }
> db.et.find({"_id" : ObjectId("5076a587d43f4ea13ae627c1")}).forEach(printjson);
{ "_id" : ObjectId("5076a587d43f4ea13ae627c1"), "hand" : "fuss" }
<076a587d43f4ea13ae627c1") } , "update" : { "kopf" : "weh"} } )
{
	"value" : {
		"_id" : ObjectId("5076a587d43f4ea13ae627c1"),
		"hand" : "fuss"
	},
	"ok" : 1
}
> db.et.find({"_id" : ObjectId("5076a587d43f4ea13ae627c1")}).forEach(printjson);
{ "_id" : ObjectId("5076a587d43f4ea13ae627c1"), "kopf" : "weh" }
> db.et.update({"kopf" : "weh"} , { $set : { "hand" : "fuss" } } ) ;
> db.et.update({"kopf" : "weh"} , { $set : { "oh" : "weia" } } ) ;
> db.et.update({"kopf" : "weh"} , { $set : { "mongo" : "test" } } ) ;
> db.et.find({"_id" : ObjectId("5076a587d43f4ea13ae627c1")}).forEach(printjson);
{
	"_id" : ObjectId("5076a587d43f4ea13ae627c1"),
	"hand" : "fuss",
	"kopf" : "weh",
	"mongo" : "test",
	"oh" : "weia"
}
>



mehrere einträge bearbeiten
> db.users.update({birthday : "10/13/1978"}, ... {$set : {gift : "Happy Birthday!"}}, false, true)
//	das zweite true sorgt dafür, dass nicht nur der erste terffer bearbeitet wird
// aber vorsicht: enifcahe versionen von update ersetzen das ganze dokument

prüfen, wieviele einträge bearbeitet worden sind
>  db.count.update({x : 1}, {$inc : {x : 1}}, false, true)
>  db.runCommand({getLastError : 1})  	{ 		"err" : null,  		"updatedExisting" : true, "n" : 5, 		"ok" : true  	}
//	"n" gibt die zahl der bearbeitetetn einträge an


db.et.update(
	{"_id": /1*/},
	temp = "_id",
	{$set : {url : "http://www.essen-und-trinken.de/rezepte" + temp}},
	false,
	true)

// update modifiers sind hilfreich
tempo = db.runCommand({"findAndModify": "et", 	// findAndModify iteriert über alle einträge in et
	"query" : {"_id": /1*/} ,
	var myId = "_id",
	"update" : {"$set": {"url" : "http://www.essen-und-trinken.de/rezepte/" + "_id"}},


db.runCommand (
	{
	"findAndModify": "et",
	"query" : {"kopf": /1*/} ,
	var myId = "_id",
	"update" : {"$set": {"url" : "http://www.essen-und-trinken.de/rezepte/" + "_id"}
	}
)

db.runCommand ( { "findAndModify": "et", "query" : {"kopf": /1*/}, "update" : {"$set": {"url" : "http://www.essen-und-trinken.de/rezepte/" + "_id"}})
