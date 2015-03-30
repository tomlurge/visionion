﻿//	///////////////////////////////////////////////////////////////////////
//	///////////////////////////////////////////////////////////////////////
//
// 	TODO
//	wo kommt update bzw updt her? wie wird es verarbeitet?
//	documentation
//		add to docs db.import.update({},{$rename: {'pex': 'exp'}}, false, true
// 		move this comment to documentation
// 			'noFastStable' is projective
// 			(despite being "negative" it doesn't care about other flags))

/*
 rename in karstens script and docs
 server				report
 inclusive		project
 pex					exp
 pbr					pr
 pbg					pg
 pbm					pm
 pbe					pe
 brp					pool
 brt					plug
 bre					host (in docs only)
 bre					ec2
 */

//	mark all parts in script where mapping is configured locally
//		and not driven by section configuration
//
//




/*
 *
 *		0.		INTRODUCTION
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 		0.1		CONTENTS
 *
 *		0			intro, contents
 *		1.		map
 *		1.1		configuration and initialization
 *		1.2		helper functions
 *		1.2.1	server helper functions
 *		1.2.2	country helper functions
 *		1.2.3	autosys helper functions
 *		1.3		initiate mapping procedure
 *		2			reduce
 *		2.1		basics
 *		2.2		country
 *		2.3		autosys
 *		2.4		helpers
 *		3			execution
 *		3.1		parameters
 *
 *
 *
 *
 */


//	immediatly execute this script
//	use JavaScript Strict mode
(function () {
	"use strict";


/*
 *
 *		1.		MAP
 *
 */

function mapValues() {

	//	make "this" - the document currently being mapped -
	//	referencable inside functions
	var incoming = this;


	/*
	 *
	 *		1.1		CONFIGURATION AND INITIALIZATION
	 *
	 */


	//	all object properties work as variable declarations
	// 	and at the same time are tests that return the value
	//	that's needed later during mapping -
	//	either truthy/falsy or an integer or a string

	//	client init
	var client = (incoming.type === "c");
	var cb = incoming.cb,		//	clients at bridges
		cr = incoming.cr,		//	clients at relays
		cip = incoming.cip,	//	ip-version
		cpt = incoming.cpt;	//	bridge pluggable transport

	//	server init
	//	exp init		permitted exit ports
	var inExp = incoming.exp ? incoming.exp : false;
	var exp = {
		e4: inExp && inExp.indexOf(443) > -1 ? 1 : 0,
		e6: inExp && inExp.indexOf(6667) > -1 ? 1 : 0,
		e8: inExp && inExp.indexOf(80) > -1 ? 1 : 0,
		e46: inExp && inExp.indexOf(443) > -1 &&
					inExp.indexOf(6667) > -1 ? 1 : 0,
		e48: inExp && inExp.indexOf(443) > -1 &&
					inExp.indexOf(80) > -1 ? 1 : 0,
		e68: inExp && inExp.indexOf(6667) > -1 &&
					inExp.indexOf(80) > -1 ? 1 : 0,
		e468: inExp && inExp.indexOf(443) > -1 &&
					inExp.indexOf(6667) > -1 &&
					inExp.indexOf(80) > -1 ? 1 : 0
	};
	//	osv init		operating system version
	var osv = {
		od: incoming.osv === "darwin" ? 1 : 0,
		of: incoming.osv === "freebsd" ? 1 : 0,
		ol: incoming.osv === "linux" ? 1 : 0,
		oo: incoming.osv === "other" ? 1 : 0,
		ow: incoming.osv === "windows" ? 1 : 0
	};
	//	tsv init		Tor software version
	var tsv = {
		t10: incoming.tsv === "010" ? 1 : 0,
		t11: incoming.tsv === "011" ? 1 : 0,
		t12: incoming.tsv === "012" ? 1 : 0,
		t20: incoming.tsv === "020" ? 1 : 0,
		t21: incoming.tsv === "021" ? 1 : 0,
		t22: incoming.tsv === "022" ? 1 : 0,
		t23: incoming.tsv === "023" ? 1 : 0,
		t24: incoming.tsv === "024" ? 1 : 0,
		t25: incoming.tsv === "025" ? 1 : 0
	};

	//	relay init
	var relay = incoming.type === "r";
	//	role init
	var inRole = incoming.role ? incoming.role : false;
	var role = {
		g: inRole && inRole.indexOf("Guard") > -1 ? 1 : 0,
		m: inRole && inRole.indexOf("Middle") > -1 ? 1 : 0,
		e: inRole && inRole.indexOf("Exit") > -1 ? 1 : 0,
		d: inRole && inRole.indexOf("Dir") > -1 ? 1 : 0
	};
	//	flag init
	var inFlag = incoming.flag ? incoming.flag : false;
	var flag = {
		f: inFlag && inFlag.indexOf("Fast") > -1 ? 1 : 0,
		s: inFlag && inFlag.indexOf("Stable") > -1 ? 1 : 0,
		a: inFlag && inFlag.indexOf("Authority") > -1 ? 1 : 0
	};
	//	probability init
	var prob = {
		pr: incoming.pr ? incoming.pr : 0,
		pg: incoming.pg ? incoming.pg : 0,
		pm: incoming.pm ? incoming.pm : 0,
		pe: incoming.pe ? incoming.pe : 0
	};

	// bridge init
	var bridge = incoming.type === "b";
	//	plug init		bridge pluggable transport
	var inPlug = incoming.plug ? incoming.plug : false;
	var plug = {
		b2: inPlug && inPlug.indexOf('obfs2') > -1 ? 1 : 0,
		b3: inPlug && inPlug.indexOf('obfs3') > -1 ? 1 : 0,
		b23: inPlug && inPlug.indexOf('obfs2') > -1 &&
				 inPlug.indexOf('obfs3') > -1 ? 1 : 0
	};
	//	pool init
	var pool = {
		be: incoming.pool === "email" ? 1 : 0,
		bh: incoming.pool === "https" ? 1 : 0,
		bo: incoming.pool === "other" ? 1 : 0
	};
	//	host init
	var host = {
		bc: incoming.ec2 ? 1 : 0
	};


	//	default test for server report generation
	var test = {
		func: project,
		args: []				// project needs no  arguments like e.g. disjunct
	};

	//	bridge configuration
	var bridgeConf = {
		total:			[bridge],
		project: {
			proPool: {																	//	bridge pool
				e:			[pool.be],												//	email
				h:			[pool.bh],												//	https
				o:			[pool.bo]													//	other
			},
			proPlug: {																	//	pluggable tramsport
				b2:			[plug.b2],												//	obfs2
				b3:			[plug.b3],												//	obfs3
				b23:		[plug.b2, plug.b3]								//	obfs2 + 3
			},
			proHost: {
				ec2:		[host.bc]													//	EC2
			}
		}
	};

	//	relay configuration
	var relayConf = {
		total:			[relay],
		project: {
			proRole: {
				g:			[role.g],													//	guard
				m:			[role.m],													//	middle
				e:			[role.e],													//	exit
				d:			[role.d]													//	directory
			},
			proFlag: {
				f:			[flag.f],													//	fast
				s:			[flag.s],													//	stable
				fs:			[flag.f, flag.s],									// 	fast + stable
				NOfs:		[!flag.f, !flag.s],								//	not fast + not stable
				a:			[flag.a]													//	authority}
			},
			proRoleFlag: {
				Gf:			[role.g, flag.f],									//	Guard fast
				Gs:			[role.g, flag.s],									//	Guard stable
				Gfs:		[role.g, flag.f, flag.s],					//	Guard fast stable
				Mf:			[role.m, flag.f],									//	Middle fast
				Ms:			[role.m, flag.s],									//	Middle stable
				Mfs:		[role.m, flag.f, flag.s],					//	Middle fast stable
				Ef:			[role.e, flag.f],									//	Exit fast
				Es:			[role.e, flag.s],									//	Exit stable
				Efs:		[role.e, flag.f, flag.s],					//	Exit fast stable
				Df:			[role.d, flag.f],									//	Directory fast
				Ds:			[role.d, flag.s],									//	Directory stable
				Dfs:		[role.d, flag.f, flag.s],					//	Directory fast stable
				Da:			[role.d, flag.a],									//	Directory authority
				Dfa:		[role.d, flag.f, flag.a],					//	Dir. fast authority
				Dsa:		[role.d, flag.s, flag.a],					//	Dir. stable authority
				Dfsa:		[role.d, flag.f, flag.s, flag.a]	//	Dir. fast stable aut.
			}
		},
		disjunct: {
			test:		{
				func: disjunct,
				args : [role,flag]
			},
			disRoleFlag: {
				G:      [role.g],
				Gf:     [role.g, flag.f],
				Gs:     [role.g, flag.s],
				Gfs:    [role.g, flag.f, flag.s],
				M:      [role.m],
				Mf:     [role.m, flag.f],
				Ms:     [role.m, flag.s],
				Mfs:    [role.m, flag.f, flag.s],
				E:      [role.e],
				Ef:     [role.e, flag.f],
				Es:     [role.e, flag.s],
				Efs:    [role.e, flag.f, flag.s],
				D:      [role.d],
				Da:     [role.d, flag.a],
				GM:     [role.g, role.m],
				GMf:    [role.g, role.m, flag.f],
				GMs:    [role.g, role.m, flag.s],
				GMfs:   [role.g, role.m, flag.f, flag.s],
				GE:     [role.g, role.e],
				GEf:    [role.g, role.e, flag.f],
				GEs:    [role.g, role.e, flag.s],
				GEfs:   [role.g, role.e, flag.f, flag.s],
				GD:     [role.g, role.d],
				GDf:    [role.g, role.d, flag.f],
				GDs:    [role.g, role.d, flag.s],
				GDfs:   [role.g, role.d, flag.f, flag.s],
				GDa:    [role.g, role.d, flag.a],
				GDfa:   [role.g, role.d, flag.f, flag.a],
				GDsa:   [role.g, role.d, flag.s, flag.a],
				GDfsa:  [role.g, role.d, flag.f, flag.s, flag.a],
				GME:    [role.g, role.m, role.e],
				GMEf:   [role.g, role.m, role.e, flag.f],
				GMEs:   [role.g, role.m, role.e, flag.s],
				GMEfs:  [role.g, role.m, role.e, flag.f, flag.s],
				GMD:    [role.g, role.m, role.d],
				GMDf:   [role.g, role.m, role.d, flag.f],
				GMDs:   [role.g, role.m, role.d, flag.s],
				GMDfs:  [role.g, role.m, role.d, flag.f, flag.s],
				GMDa:   [role.g, role.m, role.d, flag.a],
				GMDfa:  [role.g, role.m, role.d, flag.f, flag.a],
				GMDsa:  [role.g, role.m, role.d, flag.s, flag.a],
				GMDfsa: [role.g, role.m, role.d, flag.f, flag.s, flag.a],
				GMED:   [role.g, role.m, role.e, role.d],
				GMEDf:  [role.g, role.m, role.e, role.d, flag.f],
				GMEDs:  [role.g, role.m, role.e, role.d, flag.s],
				GMEDfs: [role.g, role.m, role.e, role.d, flag.f, flag.s],
				GMEDa:  [role.g, role.m, role.e, role.d, flag.a],
				GMEDfa: [role.g, role.m, role.e, role.d, flag.f, flag.a],
				GMEDsa: [role.g, role.m, role.e, role.d, flag.s, flag.a],
				GMEDfsa:[role.g, role.m, role.e, role.d, flag.f, flag.s, flag.a],
				ME:     [role.m, role.e],
				MEf:    [role.m, role.e, flag.f],
				MEs:    [role.m, role.e, flag.s],
				MEfs:   [role.m, role.e, flag.f, flag.s],
				MD:     [role.m, role.d],
				MDf:    [role.m, role.d, flag.f],
				MDs:    [role.m, role.d, flag.s],
				MDfs:   [role.m, role.d, flag.f, flag.s],
				MDa:    [role.m, role.d, flag.a],
				MDfa:   [role.m, role.d, flag.f, flag.a],
				MDsa:   [role.m, role.d, flag.s, flag.a],
				MDfsa:  [role.m, role.d, flag.f, flag.s, flag.a],
				MED:    [role.m, role.e, role.d],
				MEDf:   [role.m, role.e, role.d, flag.f],
				MEDs:   [role.m, role.e, role.d, flag.s],
				MEDfs:  [role.m, role.e, role.d, flag.f, flag.s],
				MEDa:   [role.m, role.e, role.d, flag.a],
				MEDfa:  [role.m, role.e, role.d, flag.f, flag.a],
				MEDsa:  [role.m, role.e, role.d, flag.s, flag.a],
				MEDfsa: [role.m, role.e, role.d, flag.f, flag.s, flag.a],
				ED:     [role.e, role.d],
				EDf:    [role.e, role.d, flag.f],
				EDs:    [role.e, role.d, flag.s],
				EDfs:   [role.e, role.d, flag.f, flag.s],
				EDa:    [role.e, role.d, flag.a],
				EDfa:   [role.e, role.d, flag.f, flag.a],
				EDsa:   [role.e, role.d, flag.s, flag.a],
				EDfsa:  [role.e, role.d, flag.f, flag.s, flag.a]
			}
		}
	};



/*
 *
 *		1.2		HELPER FUNCTIONS
 *
 */


/*
 *		1.2.1	SERVER HELPER FUNCTIONS
 */

	//	mapServer walks through the server properties as defined in the
	// 	tree like structures named relayTree and bridgeTree (see above)
	//	and at each knot either - if it is a leave - constructs a report
	//	or - if it's a knot - recursively starts a new walk with that knot
	//	as the new root node
	function mapServer(serverConf, testFunction, testArguments) {

		var result = {};
		//	initialize test
		var testFunc = testFunction || test.func;
		var testArgs = testArguments || test.args;

		//	walk through config tree, breadth first, searching for leaves
		//	and add reports to leaves if they pass the test.
		//	for entries that are not leaves recursively start new walk
		//	but first check for local modifications to test arguments

		//	first check for modifications to test config
		//	at current level of serverConf
		for (var testCheck in serverConf) {
			if (serverConf.hasOwnProperty(testCheck)) {
				if (typeOf(serverConf[testCheck]) === "object") {
					//	check if entry contains 'test' prop, update test accordingly
					/*	this checks for func and args seperatly, allowing for
					 finegrained configuration that we currently don't use.
					 maybe overkill...*/
					if (serverConf[testCheck].test) {
						if (serverConf[testCheck].test.func) {
							testFunc = serverConf[testCheck].test.func;
						}
						if (serverConf[testCheck].test.args) {
							testArgs = serverConf[testCheck].test.args;
						}
					}
				}
			}
		}

		//	then traverse current level of serverConf again
		//	checking for leaves to report on
		for (var reportCheck in serverConf) {
			if (serverConf.hasOwnProperty(reportCheck)) {
				//	if it's an object but not a test, then it's root of a subtree
				if (typeOf(serverConf[reportCheck]) === "object" &&
						!serverConf[reportCheck].test ) {
						// current location entry in conf becomes a new 'tree root'
						result[reportCheck] =
							mapServer(serverConf[reportCheck], testFunc, testArgs);
				}
				//	if it's a leave (which carry arrays with config params)
				if (typeOf(serverConf[reportCheck]) === "array") {
					//	call testFunction with array properties
					if (testFunc.apply(this, serverConf[reportCheck],testArgs)){
						//	if test is successfull, construct a report at this leave
						result[reportCheck] = new Report();
					}
				}
			}
		}

		return result;
	}


	//	when mapServer finds a leave and the leave.test returns true
	// 	it initiates the construction of a report object by calling
	//	the following 'Report' constructor.
	//	the constructor already has some default properties predefined.
	//	further properties are added as configured through the leave's
	//	'test' and 'subr' properties
	function Report() {  // 'leave' is the 'tree[knot]' from mapServer()
		var report = {};

		//	'sum', 'bwa, 'bwc', 'osv' and 'tsv' are collected for both
		//	'bridge' and 'relay' servers
		report.sum = 1;
		report.bwa = incoming.bwa || 0;
		report.bwc = incoming.bwc || 0;
		report.osv = new SoloSubReport(osv);
		report.tsv = new SoloSubReport(tsv);

		if(relay) {
			report.prb = new SubReport(prob);						//	probabilities
			if(inExp) {
				report.exp = new SubReport(exp);					//	permitted exit ports
			}
		}
		if(bridge) {
			report.pol = new SoloSubReport(pool);				//	bridge pool
			report.plg = new SubReport(plug);						//	pluggable transport
			report.hst = new SubReport(host);						//	hosting
		}


		function SubReport(init) {
			var subReport = {};
			//	for each property in the initialization object (see section 1.1)
			for (var prop in init) {
				//	if the property is true for the incoming data
				if (init.hasOwnProperty(prop) && init[prop]) {
					//	add it to the subreport
					subReport[prop] = init[prop];
				}
			}
			return subReport;
		}

		//	since some init objects can have only one trueish property
		//	per incoming document, their SubReport constructor can be optimized
		function SoloSubReport(init) {
			var subReport = {};
			solo: {
				//	for each property in the initialization object (see section 1.1)
				for (var prop in init) {
					//	if the property is true for the incoming data
					if (init.hasOwnProperty(prop) && init[prop]) {
						//	add it to the subreport
						subReport[prop] = init[prop];
						//	only possible truish prop reached, break loop execution
						break solo;
					}
				}
			}
			return subReport;
		}

		return report;
	}


	//	project() tests if all parameters passed to it are true
	//	for the incoming document
	function project() {
		var name = "project";
		var projective = true;
		//	iterate through the arguments passed to 'project'
		for (var p = 0; p < arguments.length; p++) {
			//	if any of them is false we return false
			if (!arguments[p]) { projective = false; }
		}
		return projective;
	}


	//	TODO
	//	disjunct() tests if (only) all parameters passed to it are true
	//	while all other parameters from the same config set are false
	function disjunct() {
	//	TODO	wo übergebe ich eigentlich die parameter aus der tree config?
	//				was steht denn in disjunct.arguments ?
		var name = "disjunct";

		//	the config section to check against
		//	TODO	this is not generic
		// 				it only works for the configs hardwired in 'disConf' below.
		//				but the problem is: given a parameter like "role.g", how
		//				would one be able to extract programmatically from "role.g"
		//				the reference to "role"?
		//	well	we could add parameters to test in relayConfig/bridgeConfig
		var disConf = [role, flag];

		var args = Array.prototype.slice.call(arguments);
		var disjunctive = true;

		//	for all configs listed in disConf
		disConf.forEach(function (dis) {
			//	for all properties of those configs
			for (var d in dis) {
				if (dis.hasOwnProperty(d)) {

					if (args.indexOf(dis[d]) > -1 && !dis[d]) {
						disjunctive = false;
					}

					if (args.indexOf(dis[d]) === -1 && dis[d]) {
						disjunctive = false;
					}

				}
			}
		});


/*print(args.indexOf(dis[d]));
		 print(dis[d]);

		 if (
		 //	2 postive outcomes are possible:
		 //	the property DOES occur in arguments AND returns TRUE
		 ( args.indexOf(dis[d]) > -1 && dis[d] ) ||
		 //	or the prop DOES NOT occur in arguments	AND returns FALSE
		 ( args.indexOf(dis[d]) === -1 && !dis[d] )
		 ) {
		 disjunctive = true;
		 //	continue with loops

		 print(disjunctive);

		 }

		 //	otherwise the condition doesn't hold
		 else {
		 disjunctive = false;

		 print(disjunctive);
		 return disjunctive;
		 //	no need for further checking
		 }*/
/*		//	backup
			loop: {
			//	for all configs listed in disConf
			for (var dis in disConf) {
				if (disConf.hasOwnProperty(dis)) {
					//	for all properties of those configs
					for (var d in dis) {
						if (dis.hasOwnProperty(d)) {
							//	2 postive outcomes are possible:
							//	the property DOES occur in arguments AND returns TRUE
							print(dis[d]);
							if ( args.indexOf(dis[d]) > -1 && dis[d] ) {
								//	continue with loops
								disjunctive = true;
								print("disjunctLoop 1");
							}
							//	or the prop DOES NOT occur in arguments	AND returns FALSE
							else if ( args.indexOf(dis[d]) < 0 && !dis[d] ) {
								//	continue with loops
								disjunctive = true;
								print("disjunctLoop 2");
							}
							//	otherwise the conditions don't hold
							else {
								disjunctive = false;
								//	no need for further checking
								print("disjunctLoop 3");
								break loop;
							}
						}
					}
				}
			}
		}*/
		return disjunctive;
	}


	//	a better typeof()
	//	http://javascript.crockford.com/remedial.html
	function typeOf(value) {
		var s = typeof value;
		if (s === 'object') {
			if (value) {
				if (Object.prototype.toString.call(value) == '[object Array]') {
					s = 'array';
				}
			} else {
				s = 'null';
			}
		}
		return s;
	}



	/*
	 *		1.2.2	COUNTRY HELPER FUNCTIONS
	 */

//	construct country object
/*	country information can come from 2 sources: client data and relay
	data. when it comes from client it contains 2 arrays: one for number
	of cclients connecting through bridge by country, one for number of
	clients connecting through relay by country (this data is already pre-
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
	mapped document. the country array constructed from a mapped client
	type document may contain 2 documents for each country - one from cbcc
	and one from crcc - and a total of about 500 country documents whereas
	a relay document maps to at most one country entry in the country
	array.
	
	in the reduce step
	we than always check first if the country at hand is already contained
	in the fact.country array. if so, we add new data to the values of
	that object, if not we push the country object at hand onto the
	fact.country array. autosys is an array within the object and
	therefor needs an inner loop. */
	function Country(arg, country) {
		var countryObject = {
			country: country
		};

		if (arg === "relay") {
			countryObject.relay = 1;
			countryObject.bwa = incoming.bwa;
			countryObject.bwc = incoming.bwc;
			countryObject.proRole = {};
			countryObject.proFlag = {};
			countryObject.proProb = {};

			for (var r in role) {
				if (role.hasOwnProperty(r) && r) {
					countryObject.proRole[r] = 1;
				}
			}
			for (var f in flag) {
				if (flag.hasOwnProperty(f) && f) {
					countryObject.proFlag[f] = 1;
				}
			}
			for (var p in prob) {
				if (prob.hasOwnProperty(p) && p) {
					countryObject.proProb[p] = prob[p]; }
			}
			for (var o in osv) {
				if (osv.hasOwnProperty(o) && o) {
					countryObject.osv = {};
					countryObject.osv[o] = 1;
				}
			}
			for (var t in tsv) {
				if (tsv.hasOwnProperty(t) && t) {
					countryObject.tsv = {};
					countryObject.tsv[t] = 1;
				}
			}
			if (incoming.as) {
				countryObject.autosys = [				//	TODO	why is this an array?
					{	as: incoming.as,						//				why not just an object
						count: 1										//				with   as:count   pairs?
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


/*
 *		1.2.3	AUTOSYS HELPER FUNCTIONS
 */

	//	construct autosys object
	function AS(){
		var asObject = {
			as: incoming.as,
			//	name: lookupASname();	TODO	lookup name for AS
			//	home: lookupAShome();	TODO	lookup home country for AS
			relay: 1,
			bwa: incoming.bwa || 0,
			bwc: incoming.bwc || 0,
			proRole: {},
			proFlag: {},
			proProb: {},
			country: [{
				cc: incoming.cc,
				relay: 1,
				bwa: incoming.bwa || 0,
				bwc: incoming.bwc || 0,
				proRole: {},
				proFlag: {},
				proProb: {}
			}]
		};
		for (var r in role) {
			if (role.hasOwnProperty(r) && r) {
				asObject.proRole[r] = 1;
				asObject.country[0].proRole[r] = 1;
			}
		}
		for (var f in flag) {
			if (flag.hasOwnProperty(f) && f) {
				asObject.proFlag[f] = 1;
				asObject.country[0].proFlag[f] = 1;
			}
		}
		for (var p in prob) {
			if (prob.hasOwnProperty(p) && p) {
				asObject.proProb[p] = prob[p];
				asObject.country[0].proProb[p] = prob[p];
			}
		}
		return asObject;
	}



/*
 *
 *		1.3		INITIATE MAPPING PROCEDURE
 *
 */

	//	SEEDING RESULT OBJECT
	//	after all the configs and definitions
	//	this is where the action starts:
	//	the "mapped" object is instantiated,
	//	some basic administrative data
	//	pulled in from the function call parameters,
	//	and the hooks for the main categories
	//	client, server (bridges + relays), country
	//	and autonomous system are created
	var mapped = {
		date: theDate,
		span: theSpan,
		updt: theUpdate,
		client: {},
		server: {},
		country: [],
		autosys: []
	};

	//	MAPPING SERVER.RELAY
	//	if the incoming document represents a relay, mapServer is called with
	//	the relay part of the serverTree map as configuration.
	if (relay) {
		//	"server.total" is  mentioned nowhere but here and 6 lines below...
		mapped.server.total = new Report(); //  pay credit to server.total
		mapped.server.relay = mapServer(relayConf);
	}

	//	MAPPING SERVER.BRIDGE
	//	likewise for bridges
	else if (bridge) {
		mapped.server.total = new Report(); //  pay credit to server.total
		mapped.server.bridge = mapServer(bridgeConf);
	}

	//	MAPPING CLIENT
	//	clients are easy. incoming data is copied into the following
	//	object as is
	else if (client) {
		mapped.client = {
			total: cr && cb ? cr + cb : 0,
			atBridge: cb ? cb : 0,
			atRelay: cr ? cr : 0,
			cip4: cip && cip.v4 ? cip.v4 : 0,
			cip6: cip && cip.v6 ? cip.v6 : 0,
			cptObfs2: cpt && cpt.obfs2 ? cpt.obfs2 : 0,
			cptObfs3: cpt && cpt.obfs3 ? cpt.obfs3 : 0,
			cptOR: cpt && cpt.OR ? cpt.OR : 0,
			cptUnknown: cpt && cpt.unknown ? cpt.unknown: 0
		};
	}

	//	MAPPING COUNTRY
	//	mapping countries is a littel involved since they occur in several
	//	parst of the incoming data (relay and client) and are aggregeted
	//	in several parts of the result (country and autosys).
	//	countries are mentioned in relay data specifying the physical
	//	location of the relay
	if (relay && incoming.cc) {
		mapped.country.push(new Country("relay", incoming.cc));
	}
	//	countries are also mentioned in client data specifying how many
	//	clients connected from (or in?) that country by bridges or relays
	else if (client) {
		//	connecting by bridge
		if (incoming.cbcc) {
			/*var thatCBcc = incoming.cbcc;		//	TODO	why so involved?
			 for (var cb in thatCBcc) {
			 if (thatCBcc.hasOwnProperty(cb)) {
			 mapped.country.push(new Country("cbcc", cb));
			 }
			 }*/
			for (var cbIn in incoming.cbcc) {		//	TODO	let's see if this works
				if (incoming.cbcc.hasOwnProperty(cbIn)) {
					mapped.country.push(new Country("cbcc", cbIn));
				}
			}
		}
		//	connecting by relay
		if (incoming.crcc) {
			var thatCRcc = incoming.crcc;			//	TODO	then do it here too
			for (var crIn in thatCRcc) {
				if (thatCRcc.hasOwnProperty(crIn)) {
					mapped.country.push(new Country("crcc", crIn));
				}
			}
		}
	}

	//	MAPPING AUTOSYS
	if (relay && incoming.as) {
		mapped.autosys.push(new AS());
	}


	//	SENDING THE RESULT TO REDUCE
	emit(theDate, mapped);
}




//	///////////////////////////////////////////////////////////////////////
//	///////////////////////////////////////////////////////////////////////
//	///////////////////////////////////////////////////////////////////////
//	///////////////////////////////////////////////////////////////////////
//	///////////////////////////////////////////////////////////////////////
//	///////////////////////////////////////////////////////////////////////
//
//	REDUCE

function reduceFact(key, values) {

//	server + CLIENT
//	will go through every property in incoming data
//	and add it to the result fact as aggregated so far
	function update(fact, value){
		for (var property in value){
			if (value.hasOwnProperty(property) &&
				//	arrays are handled seperately
				//	(that concerns the sections "country" and "autosys")
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
		country: [],
		autosys: []
	};

//	REDUCE INCOMING DATA TO THE RESULT FACT
	values.forEach(function(value) {

		//	first reduce all properties
		//  except "country" and "autosys" arrays
		//	because these require special treatment
		//	update() doesn't touch arrays
		update(fact, value);

		value.country.forEach(function(vCountry) {
		//	double loop part 1: country in values emitted from map
			//	assuming data about this country hasn't already been aded to fact
			var incomingCountryAlreadyknown = false;
			//	double loop part 2: country in fact
			for (var fc = 0, fcl = fact.country.length; fc < fcl; fc++) {
				//	check the array for country already added to the aggregation
				var countryFact = fact.country[fc];
				//	if an object for this country was already added to the array
				if (countryFact.country === vCountry.country) {
					//	add values from countryMapped to that already existing object
					update(countryFact, vCountry);
					if (vCountry.autosys) {
						//	inner double loop part 1: 'as' in mapped.country
						for (var vca = 0, vcal = vCountry.autosys.length;
								 vca < vcal;
								 vca++) {
							//	(can be nmore than one,
							//	 because incoming may be pre-aggregated)
							var incomingASinCountryAlreadyKown = false;
							//	countryASmap is the whole object {as: int, count: int}
							var countryASmap = vCountry.autosys[vca];

							//	<- inner double loop part 2: 'as' in fact.country
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
				fact.country.push(vCountry);
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
					for (var vac = 0, vacl = vAutosys.country.length;
							 vac < vacl;
							 vac++) {
						var incomingCountryInASalreadyKown = false;
						var asCountryMap = vAutosys.country[vac];
						for (var fac = 0, facl = asFact.country.length;
								 fac < facl;
								 fac++) {
							var asCountryFact = asFact.country[fac];
							if (asCountryFact.cc === asCountryMap.cc) {
								update(asCountryFact, asCountryMap);
								incomingCountryInASalreadyKown = true;
								break;
							}
						}
						if (!incomingCountryInASalreadyKown) {
							asFact.country.push(asCountryMap);
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
//	///////////////////////////////////////////////////////////////////////
//	///////////////////////////////////////////////////////////////////////
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
}("2013-04-03 13", "1", "2013-08-14T09:23:45.302Z");


//	///////////////////////////////////////////////////////////////////////
//	///////////////////////////////////////////////////////////////////////

})();	//	end "use strict"