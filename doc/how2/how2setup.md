
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
