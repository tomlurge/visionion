(function () {
	"use strict";


//	///////////////////////////////////////////////////////////////////////
//	///////////////////////////////////////////////////////////////////////
//
// 	TODO
//	wo kommt update bzw updt her? wie wird es verarbeitet?
//	rename pex to exp in documentation
//	rename inclusive to project in documentation
//	rename server to report in documentation
//	rename pex to exp in incoming data or in script...
// move this comment to documentation
// 		'noFastStable' is projective
// 		(despite being "negative" it doesn't care about other flags)

//  make new version of script
//	move all tests into serversConfig
//		make an object {
//			test: function() {return this.is = true; },
//			subReports: ["pex"],
//			name: pexMe
//		}
//	call them from within populateServersConfig to test if a report should
// be generated
// no need for testConfigProp

	/*
	docs

	section 0	intro, contents
			1	map
			1.1	servers config
			1.2	report config
			1.3	seeding result
			1.4	servers
			1.5 clients
			1.6 countries
			1.7 autosys
			2	reduce
			2.1	basics
			2.2	countries
			2.3	autosys
			2.4	helpers
			3	execution
			3.1	parameters

	 */

//	///////////////////////////////////////////////////////////////////////
//	///////////////////////////////////////////////////////////////////////
//
//	MAP

function mapValues() {

//	make "this" - the document currently being mapped - 
//	referencable inside functions
	var incoming = this;


//	CONFIGURATION

//	server types
	var serversConfig = {
		bridges: {
			total: [],
			project: {
				proBrp: {
					email: [],
					https: [],
					other: []
				},
				proBrt: {
					obfs2: [],
					obfs3: [],
					obfs23: []
				},
				proBre: {
					bre: []
				}
			}
		},
		relays: {
			total: ["pbr"],
			project: {
				role: {
					guard: ["pbg"],
					middle: ["pbm"],
					exit: ["pbe", "exp"],
					dir: []
				},
				flag: {
					fast: ["probs"],
					stable: ["probs"],
					fastStable: ["probs"],
					noFastStable: ["probs"],
					authority: ["probs"]
				},
				proRoleFlag: {
					Gf: ["pbg"],
					Gs: ["pbg"],
					Gfs: ["pbg"],
					Mf: ["pbm"],
					Ms: ["pbm"],
					Mfs: ["pbm"],
					Ef: ["pbe", "exp"],
					Es: ["pbe", "exp"],
					Efs: ["pbe", "exp"],
					Df: [],
					Ds: [],
					Dfs: [],
					Da: [],
					Dfa: [],
					Dsa: [],
					Dfsa: []
				}
			},
			disjunct: {
				disRoleFlag: {
				}
			}
		}
	};
	
//	relays
	var proRoleConfig = [	//	gets called from testServerProp()
		{	name: "guard",
			test: function() {return (
				incoming.role && incoming.role.indexOf("Guard") > -1
			);}
		},
		{	name: "middle",
			test: function() {return (
				incoming.role && incoming.role.indexOf("Middle") > -1
			);}
		},
		{	name: "exit",
			test: function() {return (
				incoming.role && incoming.role.indexOf("Exit") > -1
			);}
		},
		{	name: "dir",
			test: function() {return (
				incoming.role && incoming.role.indexOf("Dir") > -1
			);}
		}
	];

	var proFlagConfig = [
		{	name: "noFastStable",
			test: function() {return (
				incoming.flag &&
				incoming.flag.indexOf("Fast") === -1 &&
				incoming.flag.indexOf("Stable") === -1
			);}
		},
		{	name: "fast",
			test: function() {return (
				incoming.flag && incoming.flag.indexOf("Fast") > -1
			);}
		},
		{	name: "stable",
			test: function() {return (
				incoming.flag && incoming.flag.indexOf("Stable") > -1
			);}
		},
		{	name: "fastStable",
			test: function() {return (
				incoming.flag &&
				incoming.flag.indexOf("Fast") > -1 &&
				incoming.flag.indexOf("Stable") > -1
			);}
		},
		{	name: "authority",
			test: function() {return (
				incoming.flag && incoming.flag.indexOf("Authority") > -1
			);}
		}
	];

	var proRoleFlagConfig = [
		{	name: "Gf",
			test: function() {return (
				incoming.role && incoming.role.indexOf("Guard") > -1 &&
				incoming.flag && incoming.flag.indexOf("Fast") > -1
			);}
		},
		{	name: "Gs",
			test: function() {return (
				incoming.role && incoming.role.indexOf("Guard") > -1 &&
				incoming.flag && incoming.flag.indexOf("Stable") > -1
			);}
		},
		{	name: "Gfs",
			test: function() {return (
				incoming.role && incoming.role.indexOf("Guard") > -1 &&
				incoming.flag &&
				incoming.flag.indexOf("Fast") > -1 &&
				incoming.flag.indexOf("Stable") > -1
			);}
		},
		{	name: "Mf",
			test: function() {return (
				incoming.role && incoming.role.indexOf("Middle") > -1 &&
				incoming.flag && incoming.flag.indexOf("Fast") > -1
			);}
		},
		{	name: "Ms",
			test: function() {return (
				incoming.role && incoming.role.indexOf("Middle") > -1 &&
				incoming.flag && incoming.flag.indexOf("Stable") > -1
			);}
		},
		{	name: "Mfs",
			test: function() {return (
				incoming.role && incoming.role.indexOf("Middle") > -1 &&
				incoming.flag &&
				incoming.flag.indexOf("Fast") > -1 &&
				incoming.flag.indexOf("Stable") > -1
			);}
		},
		{	name: "Ef",
			test: function() {return (
				incoming.role && incoming.role.indexOf("Exit") > -1 &&
				incoming.flag && incoming.flag.indexOf("Fast") > -1
			);}
		},
		{	name: "Es",
			test: function() {return (
				incoming.role && incoming.role.indexOf("Exit") > -1 &&
				incoming.flag && incoming.flag.indexOf("Stable") > -1
			);}
		},
		{	name: "Efs",
			test: function() {return (
				incoming.role && incoming.role.indexOf("Exit") > -1 &&
				incoming.flag &&
				incoming.flag.indexOf("Fast") > -1 &&
				incoming.flag.indexOf("Stable") > -1
			);}
		},
		{	name: "Df",
			test: function() {return (
				incoming.role && incoming.role.indexOf("Dir") > -1 &&
				incoming.flag && incoming.flag.indexOf("Fast") > -1
			);}
		},
		{	name: "Ds",
			test: function() {return (
				incoming.role && incoming.role.indexOf("Dir") > -1 &&
				incoming.flag && incoming.flag.indexOf("Stable") > -1
			);}
		},
		{	name: "Dfs",
			test: function() {return (
				incoming.role && incoming.role.indexOf("Dir") > -1 &&
				incoming.flag &&
				incoming.flag.indexOf("Fast") > -1 &&
				incoming.flag.indexOf("Stable") > -1
			);}
		},
		{	name: "Dfa",
			test: function() {return (
				incoming.role && incoming.role.indexOf("Dir") > -1 &&
				incoming.flag &&
				incoming.flag.indexOf("Fast") > -1 &&
				incoming.flag.indexOf("Authority") > -1
			);}
		},
		{	name: "Dsa",
			test: function() {return (
				incoming.role && incoming.role.indexOf("Dir") > -1 &&
				incoming.flag &&
				incoming.flag.indexOf("Stable") > -1 &&
				incoming.flag.indexOf("Authority") > -1
			);}
		},
		{	name: "Dfsa",
			test: function() {return (
				incoming.role && incoming.role.indexOf("Dir") > -1 &&
				incoming.flag &&
				incoming.flag.indexOf("Fast") > -1 &&
				incoming.flag.indexOf("Stable") > -1 &&
				incoming.flag.indexOf("Authority") > -1
			);}
		}
	];


	//	TODO disRoleFlag
	var disRoleFlagConfig = [

	];


//	bridges

	var proBrpConfig = [
		{	name: "email",
			test: function() {return (incoming.brp === "email");}
		},
		{	name: "https",
			test: function() {return (incoming.brp === "https");}
		},
		{	name: "other",
			test: function() {return (incoming.brp === "other");}
		}
	];

	var proBrtConfig = [
		{	name: "obfs2",
			test: function() {return (
				incoming.brt && incoming.brt.indexOf('obfs2') > -1
			);}
		},
		{	name: "obfs3",
			test: function() {return (
				incoming.brt && incoming.brt.indexOf('obfs3') > -1
			);}
		},
		{	name: "obfs23",
			test: function() {return (
				incoming.brt &&
				incoming.brt.indexOf('obfs2') > -1 &&
				incoming.brt.indexOf('obfs3') > -1
			);}
		}
	];

	var proBreConfig = [
		{	name: "bre",
			test: function() {return (incoming.bre);}
		}
	];


//	subreport components

	var osvConfig = [
		{	name: "linux",
			test: function() {return (incoming.osv === "linux");}
		},
		{	name: "darwin",
			test: function() {return (incoming.osv === "darwin");}
		},
		{	name: "freebsd",
			test: function() {return (incoming.osv === "freebsd");}
		},
		{	name: "windows",
			test: function() {return (incoming.osv === "windows");}
		},
		{	name: "other",
			test: function() {return (incoming.osv === "other");}
		}
	];

	var tsvConfig = [
		{	name: "v010",
			test: function() {return (incoming.tsv === "010");}
		},
		{	name: "v011",
			test: function() {return (incoming.tsv === "011");}
		},
		{	name: "v012",
			test: function() {return (incoming.tsv === "012");}
		},
		{	name: "v020",
			test: function() {return (incoming.tsv === "020");}
		},
		{	name: "v021",
			test: function() {return (incoming.tsv === "021");}
		},
		{	name: "v022",
			test: function() {return (incoming.tsv === "022");}
		},
		{	name: "v023",
			test: function() {return (incoming.tsv === "023");}
		},
		{	name: "v024",
			test: function() {return (incoming.tsv === "024");}
		},
		{	name: "v025",
			test: function() {return (incoming.tsv === "025");}
		}
	];

//	relay specific subreport components

	//	projective counting of permitted exit ports
	var proExpConfig = [
		{	name: "e4",
			test: function() {return (
				incoming.exp && incoming.exp.indexOf(443) > -1
			);}
		},
		{	name: "e6",
			test: function() {return (
				incoming.exp && incoming.exp.indexOf(6667) > -1
			);}
		},
		{	name: "e8",
			test: function() {return (
				incoming.exp && incoming.exp.indexOf(80) > -1
			);}
		},
		{	name: "e46",
			test: function() {return (
				incoming.exp &&
				incoming.exp.indexOf(443) > -1 &&
				incoming.exp.indexOf(6667) > -1
			);}
		},
		{	name: "e48",
			test: function() {return (
				incoming.exp &&
				incoming.exp.indexOf(80) > -1 &&
				incoming.exp.indexOf(443) > -1
			);}
		},
		{	name: "e68",
			test: function() {return (
				incoming.exp &&
				incoming.exp.indexOf(80) > -1 &&
				incoming.exp.indexOf(6667) > -1
			);}
		},
		{	name: "e468",
			test: function() {return (
				incoming.exp &&
				incoming.exp.indexOf(80) > -1 &&
				incoming.exp.indexOf(443) > -1 &&
				incoming.exp.indexOf(6667) > -1
			);}
		}
	];

	//	TODO implement disRoleFlag or remove disExpConfig
	//	disjunct counting of permitted exit ports
	var disExpConfig = [
		{	name: "e4",
			test: function() {return (
				incoming.exp &&
				incoming.exp.indexOf(80) === -1 &&
				incoming.exp.indexOf(443) > -1 &&
				incoming.exp.indexOf(6667) === -1
			);}
		},
		{	name: "e6",
			test: function() {return (
				incoming.exp &&
				incoming.exp.indexOf(80) === -1 &&
				incoming.exp.indexOf(443) === -1 &&
				incoming.exp.indexOf(6667) > -1
			);}
		},
		{	name: "e8",
			test: function() {return (
				incoming.exp &&
				incoming.exp.indexOf(80) > -1 &&
				incoming.exp.indexOf(443) === -1 &&
				incoming.exp.indexOf(6667) === -1
			);}
		},
		{	name: "e46",
			test: function() {return (
				incoming.exp &&
				incoming.exp.indexOf(80) === -1 &&
				incoming.exp.indexOf(443) > -1 &&
				incoming.exp.indexOf(6667) > -1
			);}
		},
		{	name: "e48",
			test: function() {return (
				incoming.exp &&
				incoming.exp.indexOf(80) > -1 &&
				incoming.exp.indexOf(443) > -1 &&
				incoming.exp.indexOf(6667) === -1
			);}
		},
		{	name: "e68",
			test: function() {return (
				incoming.exp &&
				incoming.exp.indexOf(80) > -1 &&
				incoming.exp.indexOf(443) === -1 &&
				incoming.exp.indexOf(6667) > -1
			);}
		},
		{	name: "e468",
			test: function() {return (
				incoming.exp &&
				incoming.exp.indexOf(80) > -1 &&
				incoming.exp.indexOf(443) > -1 &&
				incoming.exp.indexOf(6667) > -1
			);}
		}
	];

	var probsConfig = [
		{	name: "pbr",
			test: function() {return (incoming.pbr);}
		},
		{	name: "pbg",
			test: function() {return (incoming.pbg);}
		},
		{	name: "pbm",
			test: function() {return (incoming.pbm);}
		},
		{	name: "pbe",
			test: function() {return (incoming.pbe);}
		}
	];



//	HELPER FUNCTIONS

	//	manage populating the report with server data
	//	by checking the incoming doc against every knot in serversConfig
	//	parameters can be (serversConfig.relays, "relay")
	//	or (serversConfig.bridges, "bridge")
	function populateServersConfig(config) {
		var result = {};

		// 	for each entry "c" in the respective "serverConfig" section
		for (var c in config) {
			// test for javascript idiosyncracies
			if (config.hasOwnProperty(c)) {
				//	test for leaves in the serverConfig tree
				//	which are arrays e.g. ["pbe", "exp"]
				//	and if they are relevant to the incoming data.
				//	if yes build 'report' object(s)
				if (Object.prototype.toString.call(config[c]) ===
					"[object Array]") {
					//	check for 'total' explicitly since it doesn't
					//	occur in import data, so won't pass the test
					if (c === "total") {
						result[c] = new Report(config[c]);
					}
					// so we reached a leave, that is not named total
					// we do now want to know if the incoming data contains
					// something relevant for this leave
					// to get an answer we start testConfigProp()
					// TODO why isn't the parameter not "config[c]"?
					// TODO	the test could even be called from within this
					//		if clause, no need for an extra function
					else if (testConfigProp(c)) {
						// if testConfigProp returns with true
						// we add a new report to the result
						// at section "c"
						result[c] = new Report(config[c]);
					}
				}
				//	else it must be a knot in the tree
				//	recursively check for leaves under that knot
				else {
					result[c] = populateServersConfig(config[c]);
				}
			}
		}
		return result;

		//	server type testing
		//	"c" is an entry in a serversConfig
		//	"type" is either "relays" or "bridges"
		function testConfigProp(c, type) {
			var result = false;
			if (incoming.type === "r") {
				//	test for proRole
				if (c in serversConfig.relays.project.role) {
					proRoleConfig.forEach(function(config){
						if (config.name === c) {result = config.test();}
					});
				}
				//	test for proFlag
				else if (c in serversConfig.relays.project.flag) {
					proFlagConfig.forEach(function(config){
						if (config.name === c) {result = config.test();}
					});
				}
				//	test for proRoleFlag
				else if (c in serversConfig.relays.project.proRoleFlag) {
					proRoleFlagConfig.forEach(function(config){
						if (config.name === c) {result = config.test();}
					});
				}
			}
			else if (incoming.type === "b") {
				//	test for transport
				if (c in serversConfig.bridges.project.proBrt) {
					proBrtConfig.forEach(function(config){
						if (config.name === c) {result = config.test();}
					});
				}
				//	test for bridge pool
				else if (c in serversConfig.bridges.project.proBrp) {
					proBrpConfig.forEach(function(config){
						if (config.name === c) {result = config.test();}
					});
				}
				//	test for EC2 cloud
				else if (c in serversConfig.bridges.project.proBre) {
					proBreConfig.forEach(function(config){
						if (config.name === c) {result = config.test();}
					});
				}
			}
			return result;
		}
	}

//	construct report object
	function Report(args){
		args = args || [];
		this.count = 1;
		this.bwa = incoming.bwa || 0;
		this.bwc = incoming.bwc || 0;
		this.osv = new SubReport(osvConfig);
		this.tsv = new SubReport(tsvConfig);
		var thus = this;
		args.forEach(function(arg) {
			if (arg === "exp" && incoming.exp) {
				thus.exp = new SubReport(proExpConfig);
			}
			else if (
				arg === "pbr" || "pbg" || "pbm" || "pbe"
			) {
				if (incoming[arg]) {
					thus[arg] = incoming[arg];
				}
			}
			else if (arg === "probs") {
				thus.probs = new SubReport(probsConfig);
			}
		});

		//	construct nested property objects (osv, tsv, exp, probs...)
		//	inside the report object
		function SubReport(config) {
			var list = {};
			//	iterate through config array
			config.forEach(function(c) {
				//	for each config entry check if it's test returns true
				if (c.test()) {	//	if no test is provided no init needed
					//	if yes and the config is probsConfig add up
					//	the probability values
					if (config === probsConfig) {
						// e.g. populate "exit" with incoming "pbe" data
						list[c.name] = incoming[c.name];
					}
					//	in all other positive cases just add 1
					//	because they are all only counting nodes
					else {
						list[c.name] = 1;
					}
				}
			});
			return list;
		}

	}

//	construct countries object
/*	country information can come from 2 sources: client data and relay
	data. when it comes from clients it contains 2 arrays: one for number
	ofcclients connecting through bridges by country, one for number of
	clientsconnecting through relays by country (this data is already pre-
	aggregatedbefore import in one clients document per datetime). when
	the documentccomes from a relay it may contain at most 1 country (the
	country the relay is located in) and eventually the autonomous system.
	in the end we want to have an array of uniform country objects with
	all the data available. these two types require rather different
	procedures when aggregating. in the map step we therefor first check
	if the type of the document at hand is "c" (client) or "r" (relay) and
	populate a country template accordingly. we have 3 cases since clients
	data contains 2 country arrays: cbcc and crcc. in each case we work
	from the same country template and fill it with the data from the
	mapped document. the countries array constructed from a mapped client
	type document may contain 2 documents for each country - one from cbcc
	and one from crcc - and a total of about 500 country documents whereas
	a relay document maps to at most one country entry in the countries
	array.
	
	in the reduce step
	we than always check first if the country at hand is already contained
	in the fact.countries array. if so, we add new data to the values of
	that object, if not we push the country object at hand onto the
	fact.countries array. autosys is an array within the object and
	therefor needs an inner loop. */
	function Country(arg, country) {
		var countryObject = {
			country: country
		};

		if (arg === "relay") {
			countryObject.relay = 1;
			countryObject.bwa = incoming.bwa;
			countryObject.bwc = incoming.bwc;
			countryObject.roles = {};
			proRoleConfig.forEach(function (c) {
				if (c.test()) {
					countryObject.roles[c.name] = 1;
				}
			});
			countryObject.flags = {};
			proFlagConfig.forEach(function (c) {
				if (c.test()) {
					countryObject.flags[c.name] = 1;
				}
			});
			countryObject.probs = {};
			probsConfig.forEach(function (c) {
				if (c.test()) {
					countryObject.probs[c.name] = incoming[c.name];
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
			if (incoming.as) {
				countryObject.autosys = [
					{	as: incoming.as,
						count: 1
					}
				];
			}
		}
		else if (arg === "cbcc") {
			countryObject.cbcc = incoming.cbcc[country];
		}
		else if (arg === "crcc") {
			countryObject.crcc = incoming.crcc[country];
		}
		return countryObject;
	}

//	construct autosys object
	function AS(){
		var asObject = {
			as: incoming.as,
			//	name: lookupASname();	TODO	lookup name for AS
			//	home: lookupAShome();	TODO	lookup home country for AS
			relay: 1,
			bwa: incoming.bwa || 0,
			bwc: incoming.bwc || 0,
			roles: {},
			flags: {},
			probs: {},
			countries: [{
				cc: incoming.cc,
				relay: 1,
				bwa: incoming.bwa || 0,
				bwc: incoming.bwc || 0,
				roles: {},
				flags: {},
				probs: {}
			}]
		};

		proRoleConfig.forEach(function (c) {
			if (c.test()) {
				asObject.roles[c.name] = 1;
				asObject.countries[0].roles[c.name] = 1;
			}
		});
		proFlagConfig.forEach(function (c) {
			if (c.test()) {
				asObject.flags[c.name] = 1;
				asObject.countries[0].flags[c.name] = 1;
			}
		});
		probsConfig.forEach(function (c) {
			if (c.test()) {
				asObject.probs[c.name] = incoming[c.name];
				asObject.countries[0].probs[c.name] = incoming[c.name];
			}
		});

		return asObject;
	}



//	SEEDING RESULT OBJECT
	var value = {
		date: theDate,
		span: theSpan,
		updt: theUpdate,
		clients: {},
		servers: {},
		countries: [],
		autosys: []
	};

//	POPULATING SERVERS.RELAYS
	if (this.type === "r") {
		value.servers.total = new Report(); //  pay credit to servers.total
		value.servers.relays =
			populateServersConfig(serversConfig.relays);
	}

//	POPULATING SERVERS.BRIDGES
	else if (this.type === "b") {
		value.servers.total = new Report(); //  pay credit to servers.total
		value.servers.bridges =
			populateServersConfig(serversConfig.bridges);
	}

//	POPULATING CLIENTS
	else if (this.type === "c") {
		value.clients = {
			total: this.cr && this.cb ? this.cr + this.cb : 0,
			atBridges: this.cb ? this.cb : 0,
			atRelays: this.cr ? this.cr : 0,
			cip4: this.cip && this.cip.v4 ? this.cip.v4 : 0,
			cip6: this.cip && this.cip.v6 ? this.cip.v6 : 0,
			cptObfs2: this.cpt && this.cpt.obfs2 ? this.cpt.obfs2 : 0,
			cptObfs3: this.cpt && this.cpt.obfs3 ? this.cpt.obfs3 : 0,
			cptOR: this.cpt && this.cpt.OR ? this.cpt.OR : 0,
			cptUnknown: this.cpt && this.cpt.unknown ? this.cpt.unknown : 0
		};
	}

//	POPULATING COUNTRIES
	if (incoming.type === "r" && incoming.cc) {
		value.countries.push(new Country("relay", incoming.cc));
	}
	else if (incoming.type === "c" && incoming.cbcc) {
		var thatCBcc = incoming.cbcc;
		for (var cb in thatCBcc) {
			if (thatCBcc.hasOwnProperty(cb)) {
				value.countries.push(new Country("cbcc", cb));
			}
		}
	}
	else if (incoming.type === "c" && incoming.crcc) {
		var thatCRcc = incoming.crcc;
		for (var cr in thatCRcc) {
			if (thatCRcc.hasOwnProperty(cr)) {
				value.countries.push(new Country("crcc", cr));
			}
		}
	}

//	POPULATING AUTOSYS
	if (this.type === "r" && this.as) {
		value.autosys.push(new AS());
	}


//	SENDING THE RESULT TO REDUCE

	emit(theDate, value);
}



//	///////////////////////////////////////////////////////////////////////
//	///////////////////////////////////////////////////////////////////////
//
//	REDUCE

function reduceFact(key, values) {

//	SERVERS + CLIENTS
//	will go through every property in incoming data
//	and add it to the result fact as aggregated so far
	function update(fact, value){
		for (var property in value){
			if (value.hasOwnProperty(property) &&
				//	arrays are handled seperately
				//	(that concerns the sections "countries" and "autosys")
				Object.prototype.toString.call(value[property]) !==
					"[object Array]"
				) {
				//	check incoming value against already aggregated fact
				//	existing path - needs to be updated
				if (fact[property] !== undefined) {
					if (typeof(fact[property]) === 'number') {
						fact[property] += value[property];
					}
					else if (typeof(fact[property]) === 'string') {
						fact[property] = value[property];
					}
					else {	//	element is object - drill down
						update(fact[property], value[property]);
					}
				} else {	//	new path - needs to be added
					fact[property] = clone(value[property]);
				}
			}
		}

		//	see http://stackoverflow.com/a/122190/128165 for details
		function clone(input){
			if(input === null || typeof(input) !== 'object') {
				return input;
			}
			var NewProto = function() {};
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


//	INITIALIZE REDUCTION BY GATHERING OF ADMINISTRATIVE DATA
	var fact = {
		date: theDate,
		span: theSpan,
		updt: theUpdate,
		countries: [],
		autosys: []
	};

//	REDUCE INCOMING DATA TO THE RESULT FACT
	values.forEach(function(value) {

		//	first reduce all properties
		//  except "countries" and "autosys" arrays
		//	because these require special treatment
		//	update() doesn't touch arrays
		update(fact, value);

		value.countries.forEach(function(vCountry) {
		//	double loop part 1: countries in values emitted from map
			//	assuming data about this country hasn't already been aded to fact
			var incomingCountryAlreadyknown = false;
			//	double loop part 2: countries in fact
			for (var fc = 0, fcl = fact.countries.length; fc < fcl; fc++) {
				//	check the array for countries already added to the aggregation
				var countryFact = fact.countries[fc];
				//	if an object for this country was already added to the array
				if (countryFact.country === vCountry.country) {
					//	add values from countryMapped to that already existing object
					update(countryFact, vCountry);
					if (vCountry.autosys) {
						//	inner double loop part 1: 'as' in mapped.countries
						for (var vca = 0, vcal = vCountry.autosys.length;
								 vca < vcal;
								 vca++) {
							//	(can be nmore than one,
							//	 because incoming may be pre-aggregated)
							var incomingASinCountryAlreadyKown = false;
							//	countryASmap is the whole object {as: int, count: int}
							var countryASmap = vCountry.autosys[vca];

							//	<- inner double loop part 2: 'as' in fact.countries
							for (var fca = 0, fcal = countryFact.autosys.length;
									 fca < fcal;
									 fca++) {
								var countryAsFact = countryFact.autosys[fca];
								if (countryAsFact.as === countryASmap.as) {
									countryAsFact.count += countryASmap.count;
									incomingASinCountryAlreadyKown = true;
									break;
								}
							}
							//	after the inner loop is through
							if (!incomingASinCountryAlreadyKown) {
								//	if the 'as' wasn't found in the array add it
								countryFact.autosys.push(countryASmap);
							}
						//	return to the outer loop, check the next country passed in
						}
					}
					incomingCountryAlreadyknown = true;
					break;
				}
			}
			//	if the country does not exist in the array so far
			if (!incomingCountryAlreadyknown) {
				//	add the country object to the array
				fact.countries.push(vCountry);
			}
		});

		value.autosys.forEach(function(vAutosys) {
			var incomingASalreadyKnown = false;
			for (var fa = 0, fal = fact.autosys.length; fa < fal; fa++) {
				//	for each object in fact.autosys
				var asFact = fact.autosys[fa];
				//	if that object's 'as' field equals that of the relay
				if (asFact.as === vAutosys.as) {
					//	add up the numbers
					update(asFact, vAutosys);
					for (var vac = 0, vacl = vAutosys.countries.length;
							 vac < vacl;
							 vac++) {
						var incomingCountryInASalreadyKown = false;
						var asCountryMap = vAutosys.countries[vac];
						for (var fac = 0, facl = asFact.countries.length;
								 fac < facl;
								 fac++) {
							var asCountryFact = asFact.countries[fac];
							if (asCountryFact.cc === asCountryMap.cc) {
								update(asCountryFact, asCountryMap);
								incomingCountryInASalreadyKown = true;
								break;
							}
						}
						if (!incomingCountryInASalreadyKown) {
							asFact.countries.push(asCountryMap);
						}
					}
					incomingASalreadyKnown = true;
					break;
				}
			}
			if (!incomingASalreadyKnown) {
				fact.autosys.push(vAutosys);
			}
		});

	});

//	AND BE DONE WITH IT
	return fact;

}


//	///////////////////////////////////////////////////////////////////////
//	///////////////////////////////////////////////////////////////////////
//
//	EXECUTE


var runAggregation = function(date, span, update) {
	db.import.mapReduce (
		mapValues,
		reduceFact,
		{
			out: {
				//	the final fact collection:'merge' replaces existing
				//	documents with the same key, 'reduce' would add values
				//	to exsiting documents - we don't want that
				merge: "facts"
			},
			query: {
				"date": date,
				"addd": {"$gte": update}
			},
			//	if "true" is faster, but needs more memory
			jsMode: true,
			//	speeds up mapReduce as 'date' is indexed in the import
			//	collection but demands that "sort" equals the key of the
			//	map operation
			sort: {"date": 1},
			//	globally (in the mapReduce job) available variables
			scope: {
				theDate: date,
				theSpan: span,
				theAddition: update
			}
		}
	);
}("2013-04-03 22", "1", "2013-08-14T09:23:45.302Z");


//	///////////////////////////////////////////////////////////////////////
//	///////////////////////////////////////////////////////////////////////

})();	//	end "use strict"