(function () {
	"use strict";


//	//////////////////////////////////////////////////////////////////////////////////////////////
//	//////////////////////////////////////////////////////////////////////////////////////////////
//
//	MAP

function mapValues() {

//  make "this" - the document currently being mapped - referencable inside functions
	var that = this;

//	CONFIGIGURATION

//  scaffold of aggregated fact

	var mainConfig = {
		clients: {},
		servers: {
			total : [],
			relays: {
				total: ["pbr"],
				roles: {
					Guard: ["pbg"],
					Middle: ["pbm"],
					Exit: ["pbe", "pex"],
					Dir: []
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

//  server components

	var osvConfig = [
		{   name: "linux" ,
			test: function(){ return (that.osv === "linux" ); }
		} ,
		{   name: "darwin" ,
			test: function(){ return (that.osv === "darwin" ); }
		} ,
		{   name: "freebsd" ,
			test: function(){ return (that.osv === "freebsd" ); }
		} ,
		{   name: "windows" ,
			test: function(){ return (that.osv === "windows" ); }
		} ,
		{   name: "other" ,
			test: function(){ return (that.osv === "other" ); }
		}
	] ;

	var tsvConfig = [
		{	name: "v010" ,
			test: function(){ return (that.tsv === "010" ); }
		} ,
		{	name: "v011" ,
			test: function(){ return (that.tsv === "011" ); }
		} ,
		{	name: "v012" ,
			test: function(){ return (that.tsv === "012" ); }
		} ,
		{	name: "v020" ,
			test: function(){ return (that.tsv === "020" ); }
		} ,
		{	name: "v021" ,
			test: function(){ return (that.tsv === "021" ); }
		} ,
		{	name: "v022" ,
			test: function(){ return (that.tsv === "022" ); }
		} ,
		{	name: "v023" ,
			test: function(){ return (that.tsv === "023" ); }
		} ,
		{	name: "v024" ,
			test: function(){ return (that.tsv === "024" ); }
		} ,
		{	name: "v025" ,
			test: function(){ return (that.tsv === "025" ); }
		}
	] ;

	var pexConfig = [
		{   name: "p4" ,
			test: function(){ return (that.pex && that.pex.indexOf(443) > -1); }
		} ,
		{   name: "p6" ,
			test: function(){ return (that.pex && that.pex.indexOf(6667) > -1); }
		} ,
		{   name: "p8" ,
			test: function(){ return (that.pex && that.pex.indexOf(80) > -1); }
		} ,
		{   name: "p46" ,
			test: function(){ return (that.pex && that.pex.indexOf(443) > -1 && that.pex.indexOf(6667) > -1); }
		} ,
		{   name: "p48" ,
			test: function(){ return (that.pex && that.pex.indexOf(80) > -1 && that.pex.indexOf(443) > -1); }
		} ,
		{   name: "p68" ,
			test: function(){ return (that.pex && that.pex.indexOf(80) > -1 && that.pex.indexOf(6667) > -1); }
		} ,
		{   name: "p468" ,
			test: function(){ return (that.pex && that.pex.indexOf(80) > -1 && that.pex.indexOf(443) > -1 && that.pex.indexOf(6667) > -1); }
		}
	] ;

	var probsConfig = [
		{	name: "pbr" ,
			test: function(){ return (that.pbr ); } ,
			labl: "relay"
		} ,
		{	name: "pbg" ,
			test: function(){ return (that.pbg ); } ,
			labl: "guard"
		} ,
		{	name: "pbm" ,
			test: function(){ return (that.pbm ); } ,
			labl: "middle"
		} ,
		{	name: "pbe" ,
			test: function(){ return (that.pbe ); } ,
			labl: "exit"
		}
	] ;


//  TEST

	var testServers = function(configToTest, type) {
		var result;
		if (type === "relay") {
			//  test for roles
			if (configToTest in mainConfig.servers.relays.roles) {
				result = (that.role.indexOf(configToTest) > -1);
			}
			//  test for flags
			else if (configToTest in mainConfig.servers.relays.flags) {
				switch(configToTest) {
					case "authority":
						result = (that.flag && that.flag.indexOf("Authority") > -1);
						break;
					case "fast":
						result = (that.flag && that.flag.indexOf("Fast") > -1  && that.flag.indexOf("Stable") === -1);
						break;
					case "stable":
						result = (that.flag && that.flag.indexOf("Fast") === -1 && that.flag.indexOf("Stable") > -1);
						break;
					case "fastStable":
						result = (that.flag && that.flag.indexOf("Fast") > -1 && that.flag.indexOf("Stable") > -1);
						break;
					case "notFastStable":
						result = (that.flag && that.flag.indexOf("Fast") === -1 && that.flag.indexOf("Stable") === -1);
						break;
					default:
						result = false;
				}
			}
			else {
				result = false;
			}
		}
		else if (type === "bridge") {
			if (configToTest in mainConfig.servers.bridges.brps) {
				result = (that.brp && that.brp === configToTest);
			}
			else if (configToTest in mainConfig.servers.bridges.brts) {
				switch(configToTest) {
					case "obfs2":
						result = (that.brt && that.brt.indexOf('obfs2')  > -1);
						break;
					case "obfs3":
						result = (that.brt && that.brt.indexOf('obfs3') > -1);
						break;
					case "obfs23":
						result = (that.brt && that.brt.indexOf('obfs2')  > -1 && that.brt.indexOf('obfs3')  > -1);
						break;
					default:
						result = false;
				}
			}
			else if (configToTest in mainConfig.servers.bridges.bres) {
				result = (that.bre);
			}
			else {
				result = false;
			}
		}
		else {
			result = false;
		}
		return result;
	};


//  CONSTRUCT

//  construct nested property objects (osv, tsv, pex, probs...) inside the server object
	var PropInit = function (conf) {
		var list = {} ;
		conf.forEach( function(c) {                                 //  iterate through config array
			if (c.test()) {                                         //  if no test is provided no initialization is needed
				if (conf === probsConfig) {
					list[c.labl] = that[c.name];
				}
				else {
					list[c.name] = 1;                               //  everything else just adds 1 to the count
				}
			}
		});
		return list;
	};

//  construct server object
	var Server = function(args){
		args  = args || [];
		this.count = 1;
		this.bwa = that.bwa;
		this.bwc = that.bwc;
		this.osv = new PropInit( osvConfig );
		this.tsv = new PropInit( tsvConfig );
		var thus = this;
		args.forEach(function(arg) {
			if (arg === "pex" && that.pex) {
				thus.pex = new PropInit( pexConfig );
			}
			else if (arg === "pbr" || arg === "pbg" || arg === "pbm" || arg === "pbe") {
				if (that[arg]) {
					thus[arg] = that[arg];
				}
			}
			else if (arg === "probs") {
				thus.probs =  new PropInit( probsConfig );
			}
		});
	};



//  controls populating the mapped object with 'servers'
//  by checking the incoming doc against every knot in mainConfig
	var buildMain = function(config, type) {
        var result = {};
		for (var c in config) {
            if (config.hasOwnProperty(c)) {
                //  check for leaves in the main tree (which are arrays) and if they are relevant to the incoming data.
                //  if yes build server object(s)
                if (Object.prototype.toString.call(config[c]) === "[object Array]" ) {
	                //  but check for 'total' explicitly since it doesn't occur in import data and tehrefor won't pass the test
	                if (c === "total") {
		                result[c] = new Server(config[c]);
	                }
		            else if (testServers(c, type)) {
			            result[c] = new Server(config[c]);
                    }
                }
				//  else it must be a knot in the tree
				//  recursively check for leaves under that knot
	            else {
                    result[c] = buildMain(config[c], type);
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
		value.servers.relays = buildMain(mainConfig.servers.relays, "relay");
	}

//	FILLING IN BRIDGES
	else if (this.type === "b") {
		value.servers.total = new Server(); //	pay credit to servers
		value.servers.bridges = buildMain(mainConfig.servers.bridges, "bridge");
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


//  FILLING IN COUNTRIES


//  FILLING IN AUTOSYS



//  SENDING THE RESULT TO REDUCE

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

		var NewProto = function(){};
		NewProto.prototype = input.constructor;
		var temp = new NewProto();

		for(var key in input) {
			if (input.hasOwnProperty(key)) {
				temp[key] = clone(input[key]);
			}
		}
		return temp;
	}

//  WILL GO THROUGH EVERY PROPERTY IN INCOMING DATA AND ADD IT TO THE RESULT FACT AS AGGREGATED SO FAR
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

//  INITIALIZE REDUCTION BY GATHERING OF ADMINISTRATIVE DATA
	var fact = {
		date: theDate ,
		span: theSpan ,
		updt: theUpdate
	};

//  ADD INCOMING DATA TO THE RESULT FACT
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
				theUpdate: update
			}
		}
	);
}("2013-04-03 23" , "1" , "2013-08-14T09:23:45.302Z");


//	//////////////////////////////////////////////////////////////////////////////////////////////
//	//////////////////////////////////////////////////////////////////////////////////////////////

})();   // end "use strict"


