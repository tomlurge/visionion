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

//  server types

	var serversConfig = {
		relays: {
			total: ["pbr"],
			roles: {
				guard: ["pbg"],
				middle: ["pbm"],
				exit: ["pbe", "pex"],
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
	};
	
//  relays

	var rolesConfig = [
		{	name : "guard",
			test: function(){ return (that.role && that.role.indexOf("Guard") > -1); }
		},
		{	name : "middle",
			test: function(){ return (that.role && that.role.indexOf("Middle") > -1); }
		},
		{	name : "exit",
			test: function(){ return (that.role && that.role.indexOf("Exit") > -1); }
		},
		{   name : "dir",
			test: function(){ return (that.role && that.role.indexOf("Dir") > -1); }
		}
	];

	var flagsConfig = [
		{   name : "notFastStable",
			test: function(){ return (that.flag && that.flag.indexOf("Fast") === -1 && that.flag.indexOf("Stable") === -1); }
		},
		{   name : "fast",
			test: function(){ return (that.flag && that.flag.indexOf("Fast") > -1  && that.flag.indexOf("Stable") === -1); }
		},
		{   name : "stable",
			test: function(){ return (that.flag && that.flag.indexOf("Fast") === -1 && that.flag.indexOf("Stable") > -1); }
		},
		{   name : "fastStable",
			test: function(){ return (that.flag && that.flag.indexOf("Fast") > -1 && that.flag.indexOf("Stable") > -1); }
		},
		{   name : "authority",
			test: function(){ return (that.flag && that.flag.indexOf("Authority") > -1); }
		}
	];

//  bridges

	var brpsConfig = [
		{	name: "email",
			test: function(){ return (that.brp === "email"); }
		},
		{	name: "https",
			test: function(){ return (that.brp === "https"); }
		},
		{	name: "other",
			test: function(){ return (that.brp === "other"); }
		}
	];

	var brtsConfig = [
		{	name: "obfs2",
			test: function(){ return (that.brt && that.brt.indexOf('obfs2') > -1); }
		},
		{	name: "obfs3",
			test: function(){ return (that.brt && that.brt.indexOf('obfs3') > -1); }
		},
		{	name: "obfs23",
			test: function(){ return (that.brt && that.brt.indexOf('obfs2') > -1 && that.brt.indexOf('obfs3') > -1); }
		}
	];

	var bresConfig = [
		{	name: "bre",
			test: function(){ return (that.bre); }
		}
	];
	

//  server components

	var osvConfig = [
		{   name: "linux",
			test: function(){ return (that.osv === "linux"); }
		},
		{   name: "darwin",
			test: function(){ return (that.osv === "darwin"); }
		},
		{   name: "freebsd",
			test: function(){ return (that.osv === "freebsd"); }
		},
		{   name: "windows",
			test: function(){ return (that.osv === "windows"); }
		},
		{   name: "other",
			test: function(){ return (that.osv === "other"); }
		}
	];

	var tsvConfig = [
		{	name: "v010",
			test: function(){ return (that.tsv === "010"); }
		},
		{	name: "v011",
			test: function(){ return (that.tsv === "011"); }
		},
		{	name: "v012",
			test: function(){ return (that.tsv === "012"); }
		},
		{	name: "v020",
			test: function(){ return (that.tsv === "020"); }
		},
		{	name: "v021",
			test: function(){ return (that.tsv === "021"); }
		},
		{	name: "v022",
			test: function(){ return (that.tsv === "022"); }
		},
		{	name: "v023",
			test: function(){ return (that.tsv === "023"); }
		},
		{	name: "v024",
			test: function(){ return (that.tsv === "024"); }
		},
		{	name: "v025",
			test: function(){ return (that.tsv === "025"); }
		}
	];

//  relay components
	
	var pexConfig = [
		{   name: "p4",
			test: function(){ return (that.pex && that.pex.indexOf(443) > -1); }
		},
		{   name: "p6",
			test: function(){ return (that.pex && that.pex.indexOf(6667) > -1); }
		},
		{   name: "p8",
			test: function(){ return (that.pex && that.pex.indexOf(80) > -1); }
		},
		{   name: "p46",
			test: function(){ return (that.pex && that.pex.indexOf(443) > -1 && that.pex.indexOf(6667) > -1); }
		},
		{   name: "p48",
			test: function(){ return (that.pex && that.pex.indexOf(80) > -1 && that.pex.indexOf(443) > -1); }
		},
		{   name: "p68",
			test: function(){ return (that.pex && that.pex.indexOf(80) > -1 && that.pex.indexOf(6667) > -1); }
		},
		{   name: "p468",
			test: function(){ return (that.pex && that.pex.indexOf(80) > -1 && that.pex.indexOf(443) > -1 && that.pex.indexOf(6667) > -1); }
		}
	];

	var probsConfig = [
		{   name: "pbr",
			test: function(){ return (that.pbr); },
			labl: "relay"
		},
		{	name: "pbg",
			test: function(){ return (that.pbg); },
			labl: "guard"
		},
		{	name: "pbm",
			test: function(){ return (that.pbm); },
			labl: "middle"
		},
		{	name: "pbe",
			test: function(){ return (that.pbe); },
			labl: "exit"
		}
	];



//  HELPER FUNCTIONS

//  manage populating the mapped object with 'servers'
//  by checking the incoming doc against every knot in serversConfig
	function populateServers(config, type) {
		var result = {};

		for (var c in config) {
			if (config.hasOwnProperty(c)) {
				//  check for leaves in the main tree (which are arrays) and if they are relevant to the incoming data.
				//  if yes build server object(s)
				if (Object.prototype.toString.call(config[c]) === "[object Array]" ) {
					//  but check for 'total' explicitly since it doesn't occur in import data and tehrefor won't pass the test
					if (c === "total") {
						result[c] = new ServerObject(config[c]);
					}
					else if (testServerType(c, type)) {
						result[c] = new ServerObject(config[c]);
					}
				}
				//  else it must be a knot in the tree
				//  recursively check for leaves under that knot
				else {
					result[c] = populateServers(config[c], type);
				}
			}
		}
		return result;

		//  server type testing
		function testServerType(c, type) {
			var result;
			if (type === "relay") {
				//  test for roles
				if (c in serversConfig.relays.roles) {
					rolesConfig.forEach(function(config){
						if (config.name === c) { result = config.test(); }
					});

				}
				//  test for flags
				else if (c in serversConfig.relays.flags) {
					flagsConfig.forEach(function(config){
						if (config.name === c) { result = config.test(); }
					});
				}
				else {
					result = false;
				}
			}
			else if (type === "bridge") {
				//  test for transport
				if (c in serversConfig.bridges.brts) {
					brtsConfig.forEach(function(config){
						if (config.name === c) { result = config.test(); }
					});
				}
				//  test for bridge pool
				else if (c in serversConfig.bridges.brps) {
					// result = brpsConfig[name[c]].test();  //  (that.brp && that.brp === c);
					brpsConfig.forEach(function(config){
						if (config.name === c) { result = config.test(); }
					});
				}
				//  test for EC2 cloud
				else if (c in serversConfig.bridges.bres) {
					//result = bresConfig[name[c]].test();  //  (that.bre);
					bresConfig.forEach(function(config){
						if (config.name === c) { result = config.test(); }
					});
				}
				else {
					result = false;
				}
			}
			else {
				result = false;
			}
			return result;
		}

	}

//  construct server object
	function ServerObject(args){
		args  = args || [];
		this.count = 1;
		this.bwa = that.bwa || 0;
		this.bwc = that.bwc || 0;
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

		//  construct nested property objects (osv, tsv, pex, probs...) inside the server object
		function PropInit(conf) {
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
		}

	}

//  construct countries object
/*	country information can come from 2 sources: client data and relay data.
	when it comes from clients it contains 2 arrays: one for number of clients connecting
	through bridges by country, one for number of clients connecting through relays by
	country (this data is already pre-aggregated before import in one clients document
	per datetime). when the document comes from a relay it may contain at most 1 country
	(the country the relay is located in) and eventually the autonomous system.
	in the end we want to have an array of uniform country objects with all the data
	available.  these two types require rather different procedures when aggregating.
	in the map step
	we therefor first check if the type of the document at hand is "c"
	(client) or "r" (relay) and populate a country template accordingly.
	we have 3 cases since clients data contains 2 country arrays: cbcc and crcc. in each
	case we work from the same country template and fill it with the data from the mapped
	document.
	the countries array constructed from a mapped client type document may contain 2
	documents for each country - one from cbcc and one from crcc - and a total of about
	500 country documents (as of this writing iso 3166 lists 254 countries) whereas a relay
	document maps to at most one country entry in the countries array.
	
	in the reduce step
	we than always check first if the country at hand is already contained in the
	fact.countries array. if so, we add new data to the values of that object, if not we
	push the country object at hand onto the fact.countries array.
	autosys is an array within the object and therefor needs an inner loop. */
	function CountryObject(arg, country) {
		var countryObject = {
			country: country
		};

		if (arg === "relay") {
			countryObject.relay = 1;
			countryObject.bwa = that.bwa;
			countryObject.bwc = that.bwc;
			countryObject.roles = {};
			rolesConfig.forEach(function (c) {
				if (c.test()) {
					countryObject.roles[c.name] = 1;
				}
			});
			countryObject.flags = {};
			flagsConfig.forEach(function (c) {
				if (c.test()) {
					countryObject.flags[c.name] = 1;
				}
			});
			countryObject.probs = {};
			probsConfig.forEach(function (c) {
				if (c.test()) {
					countryObject.probs[c.name] = that[c.name];
				}
			});
			osvConfig.forEach(function (c) {
				if (c.test()) {
					countryObject.osv = {};
					countryObject.osv[c.name] = 1;
				}
			});
			tsvConfig.forEach(function (c) {
				if (c.test()) {
					countryObject.tsv = {};
					countryObject.tsv[c.name] = 1;
				}
			});
			if (that.as) {
				countryObject.autosys = [
					{   as: that.as,
						count: 1
					}
				];
			}
		}
		else if (arg === "cbcc") {
			countryObject.cbcc = that.cbcc[country];
		}
		else if (arg === "crcc") {
			countryObject.crcc = that.crcc[country];
		}
		return countryObject;
	}

//  construct autosys object
	function ASObject(){
		var asObject = {
			as: that.as ,
			//  name: lookupASname();                                   //	TODO	lookup name for AS
			//  home: lookupAShome();                                   //	TODO	lookup home country for AS
			relay: 1 ,
			bwa:   that.bwa || 0,
			bwc:   that.bwc || 0,
			roles: {} ,
			flags: {} ,
			probs: {} ,
			countries: [{
				cc:                that.cc ,
				relay:             1 ,
				bwa:               that.bwa || 0,
				bwc:               that.bwc || 0,
				roles:             {} ,
				flags:             {} ,
				probs:             {}
			}]
		};

		rolesConfig.forEach(function (c) {
			if (c.test()) {
				asObject.roles[c.name] = 1;
				asObject.countries[0].roles[c.name] = 1;
			}
		});
		flagsConfig.forEach(function (c) {
			if (c.test()) {
				asObject.flags[c.name] = 1;
				asObject.countries[0].flags[c.name] = 1;
			}
		});
		probsConfig.forEach(function (c) {
			if (c.test()) {
				asObject.probs[c.name] = that[c.name];
				asObject.countries[0].probs[c.name] = that[c.name];
			}
		});

		return asObject;
	}



//  SEEDING RESULT OBJECT
	var value = {
		date: theDate,
		span: theSpan,
		updt: theUpdate,
		clients: {},
		servers: {},
		countries: [],
		autosys: []
	};

//  POPULATING SERVERS / RELAYS
	if (this.type === "r") {
		value.servers.total = new ServerObject(); //	pay credit to servers
		value.servers.relays = populateServers(serversConfig.relays, "relay");
	}

//	POPULATING SERVERS / BRIDGES
	else if (this.type === "b") {
		value.servers.total = new ServerObject(); //	pay credit to servers
		value.servers.bridges = populateServers(serversConfig.bridges, "bridge");
	}

//	POPULATING CLIENTS
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

//  POPULATING COUNTRIES
	if (that.type === "r" && that.cc) {
		value.countries.push( new CountryObject("relay", that.cc) ) ;

	}
	else if (that.type === "c") {
		for(var cb in that.cbcc) {
			if (that.cbcc.hasOwnProperty(cb)) {
				value.countries.push(new CountryObject("cbcc", cb)) ;
			}
		}
		for(var cr in that.crcc) {
			if (that.crcc.hasOwnProperty(cr)) {
				value.countries.push(new CountryObject("crcc", cr));
			}
		}
	}

//  POPULATING AUTOSYS
	if (this.type === "r" && this.as) {
		value.autosys.push(new ASObject());
	}


//  SENDING THE RESULT TO REDUCE

	emit(theDate, value);
}



//	//////////////////////////////////////////////////////////////////////////////////////////////
//	//////////////////////////////////////////////////////////////////////////////////////////////
//
//	REDUCE

function reduceFact( key, values ) {

//  SERVERS + CLIENTS
//  will go through every property in incoming data and add it to the result fact as aggregated so far
	function update(fact, value){
		for (var property in value){
			if (value.hasOwnProperty(property)){
				//  arrays are handled seperately (that concerns the sections "countries" and "autosys")
				if (Object.prototype.toString.call(value[property]) === "[object Array]" ) {}// do nothing
				//  check incoming value against already aggregated fact
				else if (fact[property] !== undefined){   // existing path - needs to be updated
                    if (typeof(fact[property]) === 'number') {
	                    fact[property] += value[property];
                    }
                    else if (typeof(fact[property]) === 'string') {
                        fact[property] = value[property];
                    }
                    else {  //  element is object - drill down
                        update( fact[property], value[property] );
                    }
                } else {    //  new path - needs to be added
                    fact[property] = clone(value[property]);
                }
            }
		}

		//  see http://stackoverflow.com/a/122190/128165 for details
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

	}


//  INITIALIZE REDUCTION BY GATHERING OF ADMINISTRATIVE DATA
	var fact = {
		date: theDate,
		span: theSpan,
		updt: theUpdate,
		countries: [],
		autosys: []
	};

//  REDUCE INCOMING DATA TO THE RESULT FACT
	values.forEach(function(value) {

		//  first reduce all properties except "countries" and "autosys" arrays because these require special treatment
		//  update() doesn't touch arrays
		update(fact, value);

		value.countries.forEach(function(vCountry) {											//	<- double loop part 1: countries in values emitted from map
			var incomingCountryAlreadyknown = false ;                                           //  assuming data about this country has not already been aded to fact
			for ( var fc = 0 , fcl = fact.countries.length; fc < fcl ; fc++ ) {					//	<- double loop part 2: countries in fact
				var countryFact = fact.countries[fc] ;											//	check the array for countries already added to the aggregation process
				if ( countryFact.country === vCountry.country ) {							    //	if an object for this country was already added to the array
					update(countryFact, vCountry);					                            //	add values from countryMapped to that already existing object
					if (vCountry.autosys) {
						for ( var vca = 0 , vcal = vCountry.autosys.length ; vca < vcal ; vca++ ) { //	<- inner double loop part 1: 'as' in mapped.countries
							var incomingASinCountryAlreadyKown = false ;	                        //     (can be nmore than one, because incoming may be pre-aggregated)						var incomingASinCountryAlreadyKown = false ;
							var countryASmap = vCountry.autosys[vca] ;						        //	countryASmap is the whole object { as : int, count : int }

							for ( var fca = 0 , fcal = countryFact.autosys.length; fca < fcal ; fca++ ) {   //	<- inner double loop part 2: 'as' in fact.countries
								var countryAsFact = countryFact.autosys[fca] ;
								if (countryAsFact.as === countryASmap.as) {
									countryAsFact.count += countryASmap.count ;
									incomingASinCountryAlreadyKown = true ;
									break ;
								}
							}
							if ( !incomingASinCountryAlreadyKown ) {                                //	after the inner loop is through
								countryFact.autosys.push(countryASmap) ;                            //	if the 'as' wasn't found in the array add it
							}
						}                                                                           //  return to the outer loop, check the next country passed in by mapValues
					}
					incomingCountryAlreadyknown = true ;
					break ;
				}
			}
			if (!incomingCountryAlreadyknown) {                                                 //	if the country does not exist in the array so far
				fact.countries.push(vCountry) ;											        //	add the country object to the array
			}
		});

		value.autosys.forEach( function(vAutosys) {
			var incomingASalreadyKnown = false ;
			for ( var fa = 0 , fal = fact.autosys.length ; fa < fal ; fa++ ) {
				var asFact = fact.autosys[fa] ;													//	for each object in fact.autosys
				if ( asFact.as === vAutosys.as ) {												//	if that objects 'as' field equals that of the relay getting mapped
					update(asFact, vAutosys);											        //	add up the numbers
					for ( var vac = 0 , vacl = vAutosys.countries.length ;  vac < vacl ; vac++ ) {
						var incomingCountryInASalreadyKown = false ;
						var asCountryMap = vAutosys.countries[vac] ;
						for ( var fac = 0 , facl = asFact.countries.length; fac < facl ; fac++ ) {
							var asCountryFact = asFact.countries[fac] ;
							if (asCountryFact.cc === asCountryMap.cc) {
								update(asCountryFact, asCountryMap);
								incomingCountryInASalreadyKown = true ;
								break ;
							}
						}
						if ( !incomingCountryInASalreadyKown ) {
							asFact.countries.push(asCountryMap) ;
						}
					}
					incomingASalreadyKnown = true ;
					break ;
				}
			}
			if ( !incomingASalreadyKnown ) {
				fact.autosys.push(vAutosys) ;
			}
		});

	});

	values.forEach( function(value) {
		update(fact,value);
	});

//  AND BE DONE WITH IT
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


/*  TODO    check against results from mapreduce script v1
			at least the bridge data is different
 */