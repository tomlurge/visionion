//	//////////////////////////////////////////////////////////////////////////////////////////////
//	//////////////////////////////////////////////////////////////////////////////////////////////
//
//	CONFIG


//  MAIN STRUCTURE

var mainConfig = {
	clients: {},
	servers: {
		total : function() {return new Server();},
		relays: {
			total: function() {return new Server(pbr);},
			roles: {
				guard: function() {return new Server(pbg);},
				middle: function() {return new Server(pbm);},
				exit: function() {return new Server(pbe, pex);},
				dir: function() {return new Server();}
			},
			flags: {
				notFastStable: function() {return new Server(probs);},
				fast: function() {return new Server(probs);},
				stable: function() {return new Server(probs);},
				fastStable: function() {return new Server(probs);},
				authority: function() {return new Server(probs);}
			}
		},
		bridges: {
			total: function() {return new Server();},
			brps: {
				email: function() {return new Server();},
				https: function() {return new Server();},
				other: function() {return new Server();}
			},
			brts: {
				obfs2: function() {return new Server();},
				obfs3: function() {return new Server();},
				obfs23: function() {return new Server();}
			},
			bres: {
				bre: function() {return new Server();}
			}
		}
	},
	countries: {},
	autosys: {}
};

/*  ALTERNATIVE MAIN STRUCTURE

var rootConfig = [
	"clients",
	"servers",
	"countries",
	"autosys"
];

var serversConfig = [
	"total",
	"relays",
	"bridges"
];

var relaysConfig = [
	"total",
	"roles",
	"flags",
	"probs"
];

var bridgesConfig = [
	"total",
	"brps",
	"brts",
	"bres"
];

var rolesConfig = [
	"Guard",
	"Middle",
	"Exit",
	"Dir"
];

var flagsConfig = [
	"notFastStable",
	"fast",
	"stable",
	"fastStable",
	"authority"
];

var brpsConfig = [
	"email",
	"https",
	"other"
];

var brtsConfig = [
	"obfs2",
	"obfs3",
	"obfs23"
];

var bresConfig = [
	"bre"
];
*/


//  SERVER SETUP

var osvConfig = [
	"linux",
	"darwin",
	"freebsd",
	"windows",
	"other"
];

var tsvConfig = [
	"010",
	"011",
	"012",
	"020",
	"021",
	"022",
	"023",
	"024",
	"025"
];

var probsConfig = [
	"pbr",
	"pbg",
	"pbm",
	"pbe"
];

var pexConfig = [
	"p4",
	"p6",
	"p8",
	"p46",
	"p48",
	"p68",
	"p468"
];





//	//////////////////////////////////////////////////////////////////////////////////////////////
//	//////////////////////////////////////////////////////////////////////////////////////////////
//
//	MAP


function mapValues() {

//  THE MOTHERSHIP
	var value = {
		date: theDate,
		span: theSpan,
		updt: theUpdate,
		clients: {},
		servers: {},
		countries: {},
		autosys: {}
	};


//  MACHINERY

	var that = this;

	var PropInit = function (config, test) {                        //  TODO    if this doesn't work call Server() with 3. parameter "this"
		var list = {} ;
		var testIt = test || false;                                 //  if no test is provided we don't want the value
		config.forEach(function(c) {                                //  iterate through config array
			if (testIt(c)) {                                        //  if test returns false no initialization needed
				if (config == tsvConfig)
					list["v" + c] = 1;                              //  silly tsv property name can't start with an int
				else
					list[c] = 1;
			}
		});
		return list;
	};

	var Server = function(args){
		this.count = 1 ;
		this.bwa = that.bwa ;
		this.bwc = that.bwc ;
		this.osv = new PropInit(
			osvConfig,
			function(c){return (that.osv == c);}
		);
		this.tsv = new PropInit(
			tsvConfig,
			function(c){return (that.tsv == c);}
		);
		args.forEach( function(arg) {
			if (arg == pex) {
				new PropInit(
					pexConfig,
					function(c) {
						if (that.pex)
							switch(c) {
								case 'p4':
									return (that.pex.indexOf(443) > -1);
								case 'p6':
									return (that.pex.indexOf(6667) > -1);
								case 'p8':
									return (that.pex.indexOf(80) > -1);
								case 'p46':
									return (that.pex.indexOf(443) > -1 && that.pex.indexOf(6667) > -1);
								case 'p48':
									return (that.pex.indexOf(80) > -1 && that.pex.indexOf(443) > -1);
								case 'p68':
									return (that.pex.indexOf(80) > -1 && that.pex.indexOf(6667) > -1);
								case 'p468':
									return (that.pex.indexOf(80) > -1 && that.pex.indexOf(443) > -1 && that.pex.indexOf(6667) > -1);
									break;
							}
						else return false;
					}
				);
			}
			else if (arg == pbr || pbg || pbm || pbe) {             //  TODO    stub

			}
			else if (arg == probs) {                                //  TODO    stub

			}
		});
	};

	var testServers = function(toTest) {
		if (that.type == "r") {
			if (toTest in mainConfig.servers.relays.roles)
				return (that.role.indexOf(toTest) > -1);
			else if (toTest in mainConfig.servers.relays.flags) {
				switch(toTest) {
					case 'authority':   //  TODO    when will that be relevant? should it really be part of flagsTest? is the logic ok?
						return (that.flag && that.flag.indexOf("Authority") > -1);
					case 'fast':
						return (that.flag && that.flag.indexOf("Fast") > -1  && !that.flag.indexOf("Stable") > -1);
						break;
					case 'stable':
						return (that.flag && !that.flag.indexOf("Fast") > -1 && that.flag.indexOf("Stable") > -1);
						break;
					case 'fastStable':
						return (that.flag && that.flag.indexOf("Fast") > -1 && that.flag.indexOf("Stable") > -1);
						break;
					case 'notFastStable':
	//				return (that.flag && !that.flag.indexOf("Fast") > -1 && !that.flag.indexOf("Stable") > -1);
						return true;
						break;
				}
			}
		}
		else if (that.type == "b") {
			if (toTest in mainConfig.servers.bridges.brps) {
				return (that.brp && that.brp == toTest);
			}
			else if (toTest in mainConfig.servers.bridges.brts) {
				switch(toTest) {
					case 'obfs2':
						return (that.brt && that.brt.indexOf('obfs2')  > -1);
						break;
					case 'obfs3':
						return (that.brt && that.brt.indexOf('obfs3') > -1);
						break;
					case 'obfs23':
						return (that.brt && that.brt.indexOf('obfs2')  > -1 && that.brt.indexOf('obfs3')  > -1);
						break;
				}
			}
			else if (toTest in mainConfig.servers.bridges.bres) {
				return (that.bre);
			}
		}
	};

	var buildMain = function(config) {
		for (var c in config)
			if (typeof(c) == "function" && testServers(c))
				value[c] = c;                                       //  TODO    or value[c] = c(); ?
			else {
				value[c] = {};
				buildMain(config[c]);
			};
	};


//	RELAYS
	if (this.type == "r") {
		value.servers.total = new Server(); //	pay credit to servers
		value.servers.relays = function() {
			buildMain(mainConfig.servers.relays);
		};
	}

//	BRIDGES
	else if (this.type == "b") {
		value.servers.total = new Server(); //	pay credit to servers
		value.servers.bridges = function() {
			buildMain(mainConfig.servers.bridges);
		};
	}

//	CLIENTS
	else if (this.type == "c") {
		value.clients = {
			total: this.cr && this.cb ? this.cr + this.cb : 0,
			atBridges:  this.cb ? this.cb : 0,
			atRelays: this.cr ? this.cr : 0,
			cip4: this.cip  && this.cip.v4 ? this.cip.v4 : 0,
			cip6: this.cip && this.cip.v6 ? this.cip.v6 : 0,
			cptObfs2: this.cpt && this.cpt.obfs2 ? this.cpt.obfs2 : 0,
			cptObfs3: this.cpt && this.cpt.obfs3 ? this.cpt.obfs3 : 0,
			cptOR: this.cpt && this.cpt.OR ? this.cpt.OR : 0,
			cptUnknown: this.cpt && this.cpt.unknown ? this.cpt.unknown : 0
		};
	}


//  COUNTRIES


//  AUTOSYS


//  AND BE DONE WITH IT

	emit( theDate , value );
} ;



//	//////////////////////////////////////////////////////////////////////////////////////////////
//	//////////////////////////////////////////////////////////////////////////////////////////////
//
//	REDUCE


function reduceFact( key, values ) {


//  A HELPER FUNCTION
	function clone(input){
		if(input == null || typeof(input) != 'object')
			return input;

		/*  the nect line of code might not work well with Server() generated objects beacuse it
		    "breaks if the object being cloned has a constructor that requires parameters."
		    see the comments to  http://stackoverflow.com/a/122190/128165 for more detail.
		//	var temp = input.constructor();
			therefor we're replacing it with the following block */
		var newProto = function(){};
		newProto.prototype = obj.constructor;
		var temp = new newProto();

		for(var key in input)
			temp[key] = clone(input[key]);
		return temp;
	}
	/*
	 //  a much more comprehensive alternative to the clone function above would be the following.
	 //  it promises to also work with objects whose constructor has required parameters.
	 //  i'm not sure yet if Server() fits that description.

	 function deepCopy(src, _visited) {    // _visited is INTERNAL
	 if(src == null || typeof(src) !== 'object'){
	 return src;
	 }

	 // Initialize the visited objects array if needed
	 // This is used to detect cyclic references
	 if (_visited == undefined){
	 _visited = [];
	 }
	 // Otherwise, ensure src has not already been visited
	 else {
	 var i, len = _visited.length;
	 for (i = 0; i < len; i++) {
	 // If src was already visited, don't try to copy it, just return the reference
	 if (src === _visited[i]) {
	 return src;
	 }
	 }
	 }

	 // Add this object to the visited array
	 _visited.push(src);

	 //Honor native/custom clone methods
	 if(typeof src.clone == 'function'){
	 return src.clone(true);
	 }

	 //Special cases:
	 //Date
	 if (src instanceof Date){
	 return new Date(src.getTime());
	 }
	 //RegExp
	 if(src instanceof RegExp){
	 return new RegExp(src);
	 }
	 //DOM Elements
	 if(src.nodeType && typeof src.cloneNode == 'function'){
	 return src.cloneNode(true);
	 }

	 //If we've reached here, we have a regular object, array, or function

	 //make sure the returned object has the same prototype as the original
	 var proto = (Object.getPrototypeOf ? Object.getPrototypeOf(src): src.__proto__);
	 if (!proto) {
	 proto = src.constructor.prototype; //this line would probably only be reached by very old browsers
	 }
	 var ret = object_create(proto);

	 for(var key in src){
	 //Note: this does NOT preserve ES5 property attributes like 'writable', 'enumerable', etc.
	 //For an example of how this could be modified to do so, see the singleMixin() function
	 ret[key] = deepCopy(src[key], _visited);
	 }
	 return ret;
	 }

	 */

//  DEFINING THE WORKHORSE - WILL GO THROUGH EVERY PROPERTY IN INCOMING DATA AND ADD IT TO THE 'FACT'
	function update(fact, value){
		for (var property in value){
			if (fact[property] !== undefined){   // existing path - needs to be updated
				if (typeof(fact[property]) === 'number') {
					fact[property] += value[property];
				}
				else if (typeof(fact[property]) === 'string') {
					fact[property] = value[property];
				}
				else {  // element is object - drill down
					update( fact[property], value[property] );
				}
			} else {    // new path - needs to be added
				fact[property] = clone(value[property]);
			}
		}
	}


//  STARTING REDUCTION WITH THE GATHERING OF BUREAUCRATIC DETAILS
	var fact = {
		date: theDate ,
		span: theSpan ,
		updt: theUpdate
	};

//  RUNNING THE WORKHORSE
	values.forEach( function(value) {
		update(fact,value);
	});

//  AND BE DONE WITH IT, THIS TIME FOR REAL
	return fact;

} ;


//	//////////////////////////////////////////////////////////////////////////////////////////////
//	//////////////////////////////////////////////////////////////////////////////////////////////
//
//	EXECUTE


var runAggregation = function(date, span, update) {
	db.import.mapReduce (
		mapValues,
		reduceFact,
		{
			out: {
				merge: "facts"  //	the final fact collection:'merge' replaces existing documents with the same key, 'reduce' would add values to exsiting documents - we don't want that
			},
			query: {
				"date": date,
				"addd": { "$gte": update }
			},
			jsMode: true,   //	if "true" is faster, but needs more memory
			sort: { "date": 1 },    //  speeds up mapReduce as 'date' is indexed in the import collection but demands that "sort" equals the key of the map operation
			scope: {    //  globally (in the mapReduce job) available variables
				theDate: date,
				theSpan: span,
				theUpdate: update,
				mainConfig:mainConfig,
				osvConfig: osvConfig,
				tsvConfig: tsvConfig,
				pexConfig: pexConfig,
				probsConfig: probsConfig,
				testConfig: testConfig
			}
		}
	);
}("2013-04-03 23" , "1" , "2013-08-14T09:23:45.302Z");


