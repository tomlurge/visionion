# mongo startup and other basics

## start db

	mongod --dbpath /MONGOdata

## start mongo shell

	mongo

# ensure index over date of import collection

	db.import.ensureIndex({addd:-1})
	db.import.ensureIndex({date:-1})
	db.import.ensureIndex({type:1})
	db.foo.find().explain()
	  // explain will return informatioon about the indices used for a query
	  // (if any) and stats about timing and the number of documents scanned


## run a javascript file through a new mongo shell

	mongo localhost:27017/tor ~/visionion/aggregateFacts.js

## housekeeping

	show dbs
	use dbName
	show collections

	db.system.namespaces.find();
	db.system.indexes.find();

	db.collectionName.findOne()
	db.collectionName.find().skip(5000).limit(1)
	db.collectionName.find().pretty()

	db.help()
	db.collectionName.help()

	db.dropDatabase()
	db.collectionName.drop()                // delete collection
	db.collectionName.remove()              // remove contents of collection
	db.users.remove({"fav.city": "Paris"})  // deletes those whole documents
	db.collectionName.renameCollection("newCollectionName")

	db.coll_Name.ensureIndex({fieldName:1}) // sort: 1 ascending, -1 descending
	db.collectionName.dropIndex("indexName")
	db.collectionName.getIndexSpecs()
	db.collectionName.getIndexes()


	db.collectionName.update( { key1:value1 }, { $set: { key2:value2 } } )
	db.collectionName.update( { key1:value1 }, { $unset: { key2:1 } } )
	db.users.update(
	  {"favorites.movies": "Casablanca"},
	  {$addToSet: {"favorites.movies": "The Maltese Falcon"} },
	  false,
	  true                  //  multiupdate, not only the first result
	)
	db.collectionName.upsert()

	db.runCommand()
	db.runCommand( {dbstats: 1} )           // wie db.stats()
	db.runCommand( {collstats: 'coll_Name'} // wie db.collectionName.stats()


	db.collectionName.command( {fieldName:value} ).explain()
	db.stats()
	db.collectionName.stats()

	getLastError            // check eg if creation of an index was successfull



### what's in the database?

	db.import.distinct("date", {},{"date":1, "_id": -1})
		"2013-10-17 23"
		...
		"2011-03-06 00"
	db.import.distinct("date").length
	  18672
	db.import.distinct("as").length
	  2014
	db.import.distinct("cc").length
	  124
	db.import.distinct("_id",{"date" : "2013-04-03 23"}).length
	  4704
	db.import.update({},{$rename: {'addd': 'updt'}}, false, true)

	db.facts.find({},{_id: 1}).pretty()
	{ "_id" : "2013-04-03 23" }
	{ "_id" : "2013-04-03 22" }
	...



### mongo import

	mongoimport --db tor --collection import --stopOnError --upsert --file relays.json
		since 2.4 MongoDB supports import over SSL connections
		--dbpath <path>	allows to write to the data files directly
			which is faster, but blocks mongod during import
		mongoimport by default upserts based on the _id field
			(upsert: updates exsiting documents, adds new ones)
		http://docs.mongodb.org/manual/reference/mongoimport/


### mongo script

	http://docs.mongodb.org/manual/core/server-side-javascript/#running-js-scripts-in-mongo-on-mongod-host
	http://docs.mongodb.org/manual/tutorial/write-scripts-for-the-mongo-shell/
	# connecting to the db through some js code
	db = connect("localhost:27017/tor");
	# run a javascript file through a new mongo shell
	mongo localhost:27017/tor ~/visionion/aggregateFacts.js


### replace text

	// in ONE document
	db.import
	  .find({"_id" : "client-1-2013010100"})
	  .forEach(function(doc){
	    db.import.update(
	      {_id:doc._id},
	      {$set:{"date": doc.date.replace(" ", "T") + ":00"}}
	    )
	  })

	// in ALL documents
	db.import
	  .find()                     // find everything, unconditionally
	  .forEach(function(doc){
	    db.import.update(
	      {_id:doc._id},
	      {$set:{"date": doc.date.replace(" ", "T") + ":00"}}
	    )
	  })




### DATA TYPES

	null
	boolean
	32-bit integer
	64-bit integer
	64-bit floating point
	string
	symbol
	object id
	date                          // as milliseconds since the epoch
	reg ex
	code
	binary data
	max value
	min value
	undefined
	array
	embedded document






### notes from 'MongoDB in Action'

	p 71
	You’re also creating a compound index on tags ascending and id descending.
	Indexes can be specified in ascending or descending order.
	This matters mainly when creating compound indexes;
	you should always choose the directions based on your expected query patterns.
	Since you’re going to want to query for a particular tag and show the results
	from newest to oldest, an index with tags ascending and ID descending will
	make that query use the index both for filtering results and for sorting them.
	As you can see here, you indicate index direction with 1 for ascending and -1
	for descending.

	p 82
	create unique index		ensureIndex()

	#action 83
	many to many relationships (in the absence of 'join')

	p 93
	Each member of a replica set logs all its writes to a special capped collection
	called oplog.rs.
	insert using safe mode
	index array keys

	p 96
	The BSON datetime type is used to store temporal values. Time values are
	represented using a signed 64-bit integer marking milliseconds since the Unix
	epoch, in UTC (Coordinated Universal Time). A negative value marks milliseconds
	prior to the epoch.

	p 101
	If you’re expecting a single document, findOne will return that document if it
	exists.
	If you need to return multiple documents, remember that you’ll be using find,
	and that this method will return a cursor. You’ll then need to iterate over
	that cursor somewhere in your application.

	p 101
	It's important that you have an index on any fields acting as references.

	user_ids = db
		.orders
		.find(
			{
				'line_items.sku': "9092",
				purchase_date: { '$gt': new Date(2009, 0, 1) }
			},
			{
				user_id: 1, _id: 0
			}
		)
		.toArray()
		.map( function(doc) { return doc['_id'] } )

	users = db.users.find({_id: {$in: user_ids}})



### installing MongoDB on OS X through brew

	brew install mongodb
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

add the following to /usr/local/Cellar/mongodb/2.2.2-x86_64/homebrew.mxcl.mongodb.plist

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

	following this advice
		http://stackoverflow.com/questions/10760223/sane-defaults-for-mongodb-on-osx (first answer)

(when starting from shell)

	added
		ulimit -n 2048    // adjust file limits for sessions started from shell
	to ~/.bashrc
	further reading:
	  http://superuser.com/questions/433746/is-there-a-fix-for-the-too-many-open
	 -files-in-system-error-on-os-x-10-7-1 (first answer)
	  http://krypted.com/mac-os-x/maximum-files-in-mac-os-x/

/usr/local/var/mongod.conf

	logpath auskommentiert
	gibt seine meldungen jetzt wieder in der shell aus



### preparing osX

to get rid of that annoying

	** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000 **

I did the following on the shell:

	echo 'limit maxfiles 10000 unlimited' | sudo tee -a /etc/launchd.conf

because THEY said so:

	http://serverfault.com/questions/15564/where-are-the-default-ulimits-specified-on-os-x-10-5

but it didn't help...
maybe install mongo through homebrew?

	http://stackoverflow.com/questions/10760223/sane-defaults-for-mongodb-on-osx
