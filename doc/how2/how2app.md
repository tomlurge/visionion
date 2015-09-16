strange title, indeed. what's meant is web *framework* specific stuff. like:   
node, express, backbone, thorax, handlebars etc etc - the whole zoo.

we're trying to stick with well established and documented techniques here. 


###NODE - serverside javascript runtime

	intro     http://blog.modulus.io/absolute-beginners-guide-to-nodejs
	
	var myModule = require('myModule'); // loads myModule from /node_modules dir
	myModule.runMe(                     // executes myModule's runMe method
		'data.json',                      // data, asynchronously loaded
		function(error, data) {           // callback, executed when data is loaded
			if (error) throw error;         // maybe data.json couldn't be found
			console.log(data)
		}
	);
	
	node myApp.js                       // make node run myApp
	
	
###NPM - node package manager

	node package management
	
	INSTALL 1 module:
	cd /into/my/app/directory
	npm install express                 // installs express into /node_modules
																			// within my app and makes it require_able
																			// and usable like any build-in module
	INSTALL all modules per project
	{                                   // place a 'package.json'
	  "name" : "MyStaticServer",        // in the root dir of your project
	  "version" : "0.0.1",
	  "dependencies" : {
	    "express" : "3.3.x",            // list any packages you need
	    "myModules" : "1.0"
	  }       
	}                                   // then run 'npm install' from that dir

	var MyMod = function() {};          // create a new module in a file myMod.js
	MyMod.prototype.myMethod = function() {
		return "oh my module, it is so good";
  };
	module.exports = MyMod;
	
	var MyMod = require('./myMod')      // load it into the app
																			// through it's path instead of its name
 

###D3 within node

	The correct way to use D3 within Node is to use NPM to install d3 and then to 
	require it. Either' npm install d3' or add it to a package.json file:
  { ... "dependencies": { "d3": "3" } ... }
  Once you have d3 in your node_modules directory, load it via require:
  var d3 = require("d3");
	http://stackoverflow.com/questions/9948350/how-to-use-d3-in-node-js-properly
	
	
###MONGODB.js & MONGOOSE - Node.js database drivers for MongoDB

	MONGODBJS
	intro     http://blog.modulus.io/mongodb-tutorial
	docs      http://mongodb.github.io/node-mongodb-native/2.0/
	api       http://mongodb.github.io/node-mongodb-native/2.0/api/
	install   npm install mongodb       // on the shell             
						{ "name": "myproject",    // or via project file
							"dependencies": {
							  "mongodb": "~2.0"
							},  ...
	use       var mongodb = require("mongodb");
						var MongoClient = mongodb.MongoClient;
						var url = "mongodb://localhost:27017/visionion
						MongoClient.connect(url, function (err,db) {
							if (err) { console.log("the end is near: ", err) }
							else { 
								console.log("connection established to ", url);
								var fake = db.colllection("fake");
								fake.find({myProp:"xyz"}).toArray(function (err,result) {
									if (err) { console.log(err) }
									else if (result.length) { console.log("Found: ",result }
									else { console.log("Nothing found") }
									db.close();
								});
							}
						});
						if .toArray is ommitted, a cursor is returned over which one has 
						to iterate with forEach to get the actual results. this can save 
						initial bandwidth. toArray makes the db return the full data 
						right away. With cursor the script could look like this:
						
						MongoClient.connect(url, function (err, db) {
							if (err) { console.log('Error:', err); } 
							else {
								console.log('Connection established to', url);
								var fake = db.collection('fake');
								//We have a cursor now with our find criteria
								var cursor = collection.find( {myProp:"xyz"} );
								// then maybe sort by age descending
								cursor.sort({age: -1});
								// or limit to max 10 records
								cursor.limit(10);
								// or skip specified records. 0 for skipping 0 records.
								cursor.skip(0);
								// or iterate on the result
								cursor.each(function (err, doc) {
									if (err) {
										console.log(err);
									} else {
										console.log('Fetched:', doc);
									}
								});
							}
						});

	MONGOOSE
	Mongoose is an extension of mongodb.js (and used in most tutorials). It 
	enables (and favors) the use of data schemas and adds some uilities.
	
	
###EXPRESS - thin web server layer
	
	could also be used for view rendering and routing, instead of backbone
	
	var express = require('express'),
			app = express();
	app.use(express.static(__dirname + '/public'));
	app.listen(8080);                   // anything in /public is now online:8080
	
	
###JADE / HANDLEBARS - html templating

	INSTALL     npm install jade
	IN APP.JS   var express = require("express");
							var app = express();                  // as above
							app.set("view engine", "jade");
							app.set("view.options", {layout: true});
							app.set("views", __dirname + "/views");
	
	jade doesn't have to be initialized in the code because express' render 
	command takes care of loading the requierd modules
	
	see "Building node applications", O'Reilly, S.11 ff
	
	
###BACKBONE - mvc framework

	model       data storage/retrieval + transformation 
								can contain defaults
														initialization (eg change listeners)
														transforamtion methods
									var MyModelClass = Backbone.Model.extend({...})
									var myModel = new MyModelClass({... some data ...})
	collection  manages sets of models
									var MyColl = Backbone.Collection.extend( {model: MyModel} );
								model instances are not automatically part of a collection
								the can be added and removed individually and as lists
	view        construct views into the model's data
								can contain initialize+render funcs and (HTML or D3) templates
								initialize  eg add listeners
								render      connects view to HTML element
														and variables to models
									var MyViewClass = Backbone.View.extend({...})
									var myView = new View({...})
	controller  no controller prototype. controller functionality is contained 
								- via events - in models and views and 
								- as routing information - in router 
								- as business logic - in pure javascript
	router      provides deep linking capability and browsable history
	                var MyRouterClass = Backbone.Router.extend({ ...});
									var myRouter = new MyRouterClass;
									Backbone.history.start();
								
								
###MARIONETTE / THORAX - routing and memory management for backbone
	
	marionette  popular
	thorax      yeoman etc integration


###RENDR / REACT - view extensions for backbone

	backbones view layer is rather thin and rudimentary and could be enhanced 
	by rendr or recat. both render on the server too. react is newer and quite 
	sophisticated and probably the winner here


###EXAMPLES

	examples where D3 is backed by a database are hard to come by. examples 
	about the usage of the native mongodb javascript driver are even harder to 
	find on the web. and an example of how all these well established 
	and very mainstream technologies - MongoDb, node, node-mongodb-native, 
	backbone and D3 - work together are near impossible to find. since i'm 
	having real trouble to tie together all these technologies with none of 
	which i'm very proficient i made a chart of examples covering parts of the 
	toolchain:
	
	mongo   node    driver  backb.  D3    example
		x       x       x             x     [Square's Cube](https://github.com/square/cube)
		x       x       .       x           [Addi Osmani's TodoMVC](https://github.com/addyosmani/backbone-fundamentals)
		x       x       x                   [Modulus](http://blog.modulus.io/mongodb-tutorial)
		x       x       x       :           [Blog rolling](http://howtonode.org/express-mongodb)
		x       x       .       :     x     [Anmol Koul](https://anmolkoul.wordpress.com/2015/06/05/interactive-data-visualization-using-d3-js-dc-js-nodejs-and-mongodb/)
														x     x     [Sam Selikoff](https://www.youtube.com/watch?v=ca3pQWc2-Xs)
														x     x     Mastering D3.js (book, Packt Publishing)
		(.) uses Mongooses
		(:) uses Express