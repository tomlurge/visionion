//	//////////////////////////////////////////////////////////////////////////////////////////////
//	//////////////////////////////////////////////////////////////////////////////////////////////
//
//	CONFIG

(function () {
	"use strict";

//  MAIN STRUCTURE

var mainConfig = {
	clients: {},
	servers: {
		total : [],
		relays: {
			total: ["pbr"],
			roles: {
				guard: ["pbg"],
				middle: ["pbe", "pex"],
				dir: []
			},
			flags: {
				notFastStable: ["probs"],
				fast: ["probs"],
				stable: ["probs"],
				fastStable: ["probs"],
				authority: ["probs"]
			}
		},
		bridges: {
			total: [],
			brps: {
				email: [],
				https: [],
				other: []
			},
			brts: {
				obfs2: [],
				obfs3: [],
				obfs23: []
			},
			bres: {
				bre: []
			}
		}
	},
	countries: {},
	autosys: {}
};

//  SERVER COMPONENTS

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


//  MACHINERY

//  make "this" - the  document currently being mapped - referencable inside function
	var that = this;

//  construct nested objects inside the server object
	var PropInit = function (config, test) {                        //  TODO    if this doesn't work call Server() with 3. parameter "this"
		var list = {} ;
		var testIt = test || false;                                 //  if no test is provided we don't want the value
		config.forEach( function(c) {                                //  iterate through config array
			if (testIt && testIt(c)) {                                        //  if test returns false no initialization needed
				if (config === tsvConfig) {
					list["v" + c] = 1;                              //  silly tsv property name can't start with an int
				}
				else if (config === probsConfig) {
					list[c] = that.c;                               //  summing up probabilities
				}
				else {
					list[c] = 1;                                    //  everybody else just counts numbers of servers
				}
			}
		});
		return list;
	};


//  construct server object

	var pexTest = function() {
		if (that.pex) {
			var result = {};
			result.p4 = (that.pex.indexOf(443) > -1);
			result.p6 =  (that.pex.indexOf(6667) > -1);
			result.p8 =  (that.pex.indexOf(80) > -1);
			result.p46 =  (that.pex.indexOf(443) > -1 && that.pex.indexOf(6667) > -1);
			result.p48 = (that.pex.indexOf(80) > -1 && that.pex.indexOf(443) > -1);
			result.p68 = (that.pex.indexOf(80) > -1 && that.pex.indexOf(6667) > -1);
			result.p468 =  (that.pex.indexOf(80) > -1 && that.pex.indexOf(443) > -1 && that.pex.indexOf(6667) > -1);
			return result;  // TODO     what to do with the result?
		}
		else {
			return false;
		}
	};

	var propsTest = function(p) {
		return (that[p] === p);
	};

	var Server = function(args){
		args  = args || [];
		this.count = 1;
		this.bwa = that.bwa;
		this.bwc = that.bwc;
		this.osv = new PropInit(
			osvConfig,
			function(c){return (that.osv === c);}
		);
		this.tsv = new PropInit(
			tsvConfig,
			function(c){return (that.tsv === c);}
		);
		var thus = this;
		args.forEach(function(arg) {
			if (arg === "pex") {
				thus.pex = new PropInit(
					pexConfig,
					pexTest
				);
			}
			else if (arg === "pbr" || arg === "pbg" || arg === "pbm" || arg === "pbe") { // TODO das hört nach dem ersten treffer auf, muss aber alle überprüfen, da mehrfachvorkommnisse möglich sind
				if (that.arg) {
					thus[arg] = that.arg;
				}
			}
			else if (arg === "probs") {
				thus.probs =  new PropInit(
					probsConfig,
                    function(){
                        return propsTest(arg)
                    }
				);
			}
		});

	};


//  test if a specific server should be constructed

	var flagsTest = function() {
		var result = {};
		result.authority = (that.flag && that.flag.indexOf("Authority") > -1);
		result.fast = (that.flag && that.flag.indexOf("Fast") > -1  && that.flag.indexOf("Stable") <= -1);
		result.stable = (that.flag && that.flag.indexOf("Fast") <= -1 && that.flag.indexOf("Stable") > -1);
		result.fastStable = (that.flag && that.flag.indexOf("Fast") > -1 && that.flag.indexOf("Stable") > -1);
		result.notFastStable = (that.flag && that.flag.indexOf("Fast") <= -1 && that.flag.indexOf("Stable") <= -1);
		return result;  // TODO     what to do with the result?
	};

	var rolesTest = function() {
		var result = {};
		result.obfs2 = (that.brt && that.brt.indexOf('obfs2')  > -1);
		result.obfs3 = (that.brt && that.brt.indexOf('obfs3') > -1);
		result.obfs23 = (that.brt && that.brt.indexOf('obfs2')  > -1 && that.brt.indexOf('obfs3')  > -1);
		return result;  // TODO     what to do with the result?
	};

	var testServers = function(toTest) {
		var result = {};
		if (that.type === "r") {
			if (toTest in mainConfig.servers.relays.roles) {
				result = (that.role.indexOf(toTest) > -1);
			}
			else if (toTest in mainConfig.servers.relays.flags) {
				result = flagsTest();
			}
		}
		else if (that.type === "b") {
			if (toTest in mainConfig.servers.bridges.brps) {
				result = (that.brp && that.brp === toTest);
			}
			else if (toTest in mainConfig.servers.bridges.brts) {
				result = rolesTest();
			}
			else if (toTest in mainConfig.servers.bridges.bres) {
				result = (that.bre);
			}
		}
		else {
			result = false;
		}
		return result;
	};

//  controls populating the mapped object with servers
	var buildMain = function(config) {
        var result = {};

		for (var c in config) {
            if (config.hasOwnProperty(c)) {
                if (Object.prototype.toString.call(config[c]) === "[object Array]" && testServers(config[c])) {
                    result[c] = new Server(config[c]);
                } else {
                    result[c] = buildMain(config[c]);
                }
            }
		}
        return result;
	};


//  SEEDING MAPPED OBJECT
	var value = {
		date: theDate,
		span: theSpan,
		updt: theUpdate,
		clients: {},
		servers: {},
		countries: {},
		autosys: {}
	};

//  FILLING IN RELAYS
	if (this.type === "r") {
		value.servers.total = new Server(); //	pay credit to servers
		value.servers.relays = buildMain(mainConfig.servers.relays);
	}

//	FILLING IN BRIDGES
	else if (this.type === "b") {
		value.servers.total = new Server(); //	pay credit to servers
		value.servers.bridges = buildMain(mainConfig.servers.bridges);
	}

//	FILLING IN CLIENTS
	else if (this.type === "c") {
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
}



//	//////////////////////////////////////////////////////////////////////////////////////////////
//	//////////////////////////////////////////////////////////////////////////////////////////////
//
//	REDUCE


function reduceFact( key, values ) {

//  HELPER FUNCTION - see http://stackoverflow.com/a/122190/128165 for details
	function clone(input){
		if(input === null || typeof(input) !== 'object') {
			return input;
		}

		var newProto = function(){};
		newProto.prototype = input.constructor;
		var temp = new newProto();

		for(var key in input) {
			if (input.hasOwnProperty(key)) {
				temp[key] = clone(input[key]);
			}
		}
		return temp;
	}

//  DEFINING THE WORKHORSE - WILL GO THROUGH EVERY PROPERTY IN INCOMING DATA AND ADD IT TO THE 'FACT'
	function update(fact, value){
		for (var property in value){
            if (value.hasOwnProperty(property)){
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
	}


//  INITIALIZING REDUCTION WITH THE GATHERING OF BUREAUCRATIC DETAIL
	var fact = {
		date: theDate ,
		span: theSpan ,
		updt: theUpdate
	};

//  STARTING THE WORKHORSE
	values.forEach( function(value) {
		update(fact,value);
	});

//  AND BE DONE WITH IT, AGAIN
	return fact;

}


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
				probsConfig: probsConfig
			}
		}
	);
}("2013-04-03 23" , "1" , "2013-08-14T09:23:45.302Z");

})();


