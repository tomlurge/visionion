
### Notes on using the mongo shell

	# housekeeping tasks in mongo shell
	show dbs
	use dbName
	db.dropDatabase()
	show collections
	db.collectionName.drop()												// deletes the collection
	db.collectionName.remove()											// removes the contents of the collection
	db.collectionName.ensureIndex({fieldName:1})		// sorting: 1 ascending, -1 descending
	db.collectionName.dropIndex("indexName")
	db.collectionName.getIndexSpecs()
	db.collectionName.findOne()
	db.collectionName.find().pretty()
	db.collectionName.find({_id : "2013-04-03 22", bre : true }).count()


### more...

welche daten/zeitraum habe ich in import

	> db.import.distinct("date", {},{"date":1, "_id": -1})
		"2013-10-17 23"
		"2011-03-06 00"


### debugging

	print("debug comment");


### re-installing MongoDB through brew

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


### modifying mongo defaults
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


### use that mergetool with git

	mt = mergetool -t opendiff

### preparing osX
to get rid of that annoying ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000 **
I did the following on the shell: echo 'limit maxfiles 10000 unlimited' | sudo tee -a /etc/launchd.conf
because THEY told me so: http://serverfault.com/questions/15564/where-are-the-default-ulimits-specified-on-os-x-10-5
but it didn't help
maybe install mongo through homebrew? http://stackoverflow.com/questions/10760223/sane-defaults-for-mongodb-on-osx

### mongo startup and other basics

	# start db
	mongod --dbpath /MONGOdata
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
	db.collectionName.remove()		// löscht alle documente in der collection, aber nicht die c. selbst
	db.collectionName.ensureIndex({fieldName:1})		// sortierung: 1 aufsteigend, -1 absteigend
	db.collectionName.dropIndex("indexName")
	db.collectionName.getIndexSpecs()
	# most basic commands
	db.collectionName.findOne()



### mongo import

	in der bash
	mongoimport --db tor --collection importRelays --stopOnError --upsert --file /Volumes/zut/visionion/RAWdata/relays.json
	mongoimport --db tor --collection importBridges --stopOnError --upsert --file /Volumes/zut/visionion/RAWdata/bridges.json
	mongoimport --db tor --collection importClients --stopOnError --upsert --file /Volumes/zut/visionion/RAWdata/clients.json
	http://docs.mongodb.org/manual/reference/mongoimport/
	NOTES:
		since 2.4 MongoDB supports import over SSL connections
		--dbpath <path>	allows to write to the data files directly - faster, but blocks mongod during import
		mongoimport by default upserts based on the _id field (upsert: updates exsiting documents, adds new ones)


### mongo script

	http://docs.mongodb.org/manual/core/server-side-javascript/#running-js-scripts-in-mongo-on-mongod-host
	http://docs.mongodb.org/manual/tutorial/write-scripts-for-the-mongo-shell/
	# connecting to the db through some js code
	db = connect("localhost:27017/tor");
	# run a javascript file through a new mongo shell
	mongo localhost:27017/tor ~/visionion/aggregateFacts.js


### tor visionion

	~/.bash_profile			PATH=$PATH:/Users/tl/tor/mongo/bin
	mongo daemon starten		tl@h:~$ mongod --dbpath ~/tor/mongo/data
	mongo shell starten		tl@h:~$ mongo
	mongo viewer starten		tl@h:~$ ~/tor/mongo/mViewer-v0.9.1/start_mViewer.sh			[in localhost:8080]
							tl@h:~$ ~/tor/mongo/mViewer-v0.9.1/start_mViewer.sh	9090		[in localhost:9090]
	shell commands
		show dbs
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



### replace text

	DO IT FOR ONE
	db.import.find({"_id" : "client-1-2013010100"}).forEach(function(doc){db.import.update({_id:doc._id},{$set:{"date": doc.date.replace(" ", "T") + ":00"}})})
	DO IT FOR ALL
	db.import.find().forEach(function(doc){db.import.update({_id:doc._id},{$set:{"date": doc.date.replace(" ", "T") + ":00"}})})




### DATA TYPES

	null
	boolean
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






### notes from 'MongoDB in Action'

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

