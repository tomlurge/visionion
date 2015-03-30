//	///////////////////////////////////////////////////////////////////////
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
 server			report
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
 *		1.1		configuration
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


//	an allencompassing function call passes in the parameters
//	determing which documents to map and reduce
//	(see the last line ...)
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
 *		1.1		CONFIGURATION
 *
 */


	//	all object properties work as variable declarations
	// 	and at the same time are tests that return the value
	//	that's needed later during mapping -
	//	either truthy/falsy or an integer or a string

	//	client
	var client = (incoming.type === "c");
	var cip = incoming.cip,
			cpt = incoming.cpt;

	//	server
	//	exp		permitted exit ports
	var inExp = incoming.exp ? incoming.exp : false;
	var exp = {
		e4: inExp ? inExp.indexOf(443) > -1 : false,
		e6: inExp ? inExp.indexOf(6667) > -1 : false,
		e8: inExp ? inExp.indexOf(80) > -1 : false
	};
	//	osv		operating system version
	var osv = {
		od: incoming.osv === "darwin",
		of: incoming.osv === "freebsd",
		ol: incoming.osv === "linux",
		oo: incoming.osv === "other",
		ow: incoming.osv === "windows"
	};
	//	tsv		Tor software version
	var tsv = {
		t10: incoming.tsv === "010",
		t11: incoming.tsv === "011",
		t12: incoming.tsv === "012",
		t20: incoming.tsv === "020",
		t21: incoming.tsv === "021",
		t22: incoming.tsv === "022",
		t23: incoming.tsv === "023",
		t24: incoming.tsv === "024",
		t25: incoming.tsv === "025"
	};
	
	//	relay
	var relay = incoming.type === "r";
	//	role
	var inRole = incoming.role ? incoming.role : false;
	var role = {
		g: inRole ? inRole.indexOf("Guard") > -1 : false,
		m: inRole ? inRole.indexOf("Middle") > -1 : false,
		e: inRole ? inRole.indexOf("Exit") > -1 : false,
		d: inRole ? inRole.indexOf("Dir") > -1 : false
	};
	//	flag
	var	inFlag = incoming.flag ? incoming.flag : false;
	var flag = {
		f: inFlag ? inFlag.indexOf("Fast") > -1 : false,
		s: inFlag ? inFlag.indexOf("Stable") > -1 : false,
		a: inFlag ? inFlag.indexOf("Authority") > -1 : false
	};
	//	probability
	var prob = {
		pr: incoming.pr,
		pg: incoming.pg,
		pm: incoming.pm,
		pe: incoming.pe
	};

	// bridge
	var bridge = incoming.type === "b";
	//	plug		bridge pluggable transport
	var inPlug = incoming.plug ? incoming.plug : false;
	var plug = {
		b2: inPlug ? inPlug.indexOf('obfs2') > -1 : false,
		b3: inPlug ? inPlug.indexOf('obfs3') > -1 : false
	};
	//	pool
	var pool = {
		be: incoming.pool === "email",
		bh: incoming.pool === "https",
		bo: incoming.pool === "other"
	};
	//	host
	var host = {
		bc: incoming.ec2
	};


	//	TODO wrong location, but mongo insists on it
	function pro() {
		var truth = true;
		//	iterate through the arguments passed to 'pro'
		for (var p = 0; p < arguments.length; p++) {
			//	if any of them is false we return false
			if (!arguments[p]) { truth = false; }
		}
		return truth;
	}

	//	server map structure
	var serverTree = {
		bridge: {
			total:			{ test: pro(bridge) },
			project: {
				proPool: {
					e:			{ test: pro(pool.be) },											//	email
					h:			{ test: pro(pool.bh) },											//	https
					o:			{ test: pro(pool.bo) }											//	other
				},
				proPlug: {
					b2:			{ test: pro(plug.b2) },											//	obfs2
					b3:			{ test: pro(plug.b3) },											//	obfs3
					b23:		{ test: pro(plug.b2, plug.b3) }							//	obfs2 + 3
				},
				proHost: {
					ec2:		{ test: pro(host.bc) }
				}
			}
		},
		relay: {
			total:			{ test: pro(relay), subr: [prob.pr] },
			project: {
				proRole: {
					g:			{ test: pro(role.g), subr: [prob.pg] },			//	guard
					m:			{ test: pro(role.m), subr: [prob.pm] },			//	middle
					e:			{ test: pro(role.e), subr: [prob.pe, exp] },	//	exit
					d:			{ test: pro(role.d) }												//	directory
				},
				proFlag: {
					f:			{ test: pro(flag.f), subr: [prob] },					//	fast
					s:			{ test: pro(flag.s), subr: [prob] },					//	stable
					fs:			{ test: pro(flag.f,flag.s), subr: [prob] },	// 	f+s
					_fs:		{ test: pro((!flag.f), (!flag.s)), subr: [prob] },//	not f+s
															//	TODO		does it work?
					a:			{ test: pro(flag.a), subr: [prob] }					//	authority
				},
				proRoleFlag: {
					Gf:			{ test: pro(role.g, flag.f), subr: [prob.pg] },
					Gs:			{ test: pro(role.g, flag.s), subr: [prob.pg] },
					Gfs:		{ test: pro(role.g, flag.f, flag.s), subr: [prob.pg] },
					Mf:			{ test: pro(role.m, flag.f), subr: [prob.pm] },
					Ms:			{ test: pro(role.m, flag.s), subr: [prob.pm] },
					Mfs:		{ test: pro(role.m, flag.f, flag.s), subr: [prob.pm] },
					Ef:			{ test: pro(role.e, flag.f), subr: [prob.pe, exp] },
					Es:			{ test: pro(role.e, flag.s), subr: [prob.pe, exp] },
					Efs:		{ test: pro(role.e, flag.f, flag.s), subr: [prob.pe, exp] },
					Df:			{ test: pro(role.d, flag.f) },
					Ds:			{ test: pro(role.d, flag.s) },
					Dfs:		{ test: pro(role.d, flag.f, flag.s) },
					Da:			{ test: pro(role.d, flag.a) },
					Dfa:		{ test: pro(role.d, flag.f, flag.a) },
					Dsa:		{ test: pro(role.d, flag.s, flag.a) },
					Dfsa:		{ test: pro(role.d, flag.f, flag.s, flag.a) }
				}
			}
			/*
			,
			disjunct: {
				disRoleFlag: {
					G:      { test: dis(role.g) }, 
					Gf:     { test: dis(role.g, flag.f) },
					Gs:     { test: dis(role.g, flag.s) },
					Gfs:    { test: dis(role.g, flag.f, flag.s) },
					M:      { test: dis(role.m) }, 
					Mf:     { test: dis(role.m, flag.f) },
					Ms:     { test: dis(role.m, flag.s) },
					Mfs:    { test: dis(role.m, flag.f, flag.s) },
					E:      { test: dis(role.e) }, 
					Ef:     { test: dis(role.e, flag.f) },
					Es:     { test: dis(role.e, flag.s) },
					Efs:    { test: dis(role.e, flag.f, flag.s) },
					D:      { test: dis(role.d) }, 
					Da:     { test: dis(role.d, flag.a) },
					GM:     { test: dis(role.g, role.m) }, 
					GMf:    { test: dis(role.g, role.m, flag.f) },
					GMs:    { test: dis(role.g, role.m, flag.s) },
					GMfs:   { test: dis(role.g, role.m, flag.f, flag.s) },
					GE:     { test: dis(role.g, role.e) }, 
					GEf:    { test: dis(role.g, role.e, flag.f) },
					GEs:    { test: dis(role.g, role.e, flag.s) },
					GEfs:   { test: dis(role.g, role.e, flag.f, flag.s) },
					GD:     { test: dis(role.g, role.d) }, 
					GDf:    { test: dis(role.g, role.d, flag.f) },
					GDs:    { test: dis(role.g, role.d, flag.s) },
					GDfs:   { test: dis(role.g, role.d, flag.f, flag.s) },
					GDa:    { test: dis(role.g, role.d, flag.a) },
					GDfa:   { test: dis(role.g, role.d, flag.f, flag.a) },
					GDsa:   { test: dis(role.g, role.d, flag.s, flag.a) },
					GDfsa:  { test: dis(role.g, role.d, flag.f, flag.s, flag.a) },
					GME:    { test: dis(role.g, role.m, role.e) },
					GMEf:   { test: dis(role.g, role.m, role.e, flag.f) },
					GMEs:   { test: dis(role.g, role.m, role.e, flag.s) },
					GMEfs:  { test: dis(role.g, role.m, role.e, flag.f, flag.s) },
					GMD:    { test: dis(role.g, role.m, role.d) },
					GMDf:   { test: dis(role.g, role.m, role.d, flag.f) },
					GMDs:   { test: dis(role.g, role.m, role.d, flag.s) },
					GMDfs:  { test: dis(role.g, role.m, role.d, flag.f, flag.s) },
					GMDa:   { test: dis(role.g, role.m, role.d, flag.a) },
					GMDfa:  { test: dis(role.g, role.m, role.d, flag.f, flag.a) },
					GMDsa:  { test: dis(role.g, role.m, role.d, flag.s, flag.a) },
					GMDfsa: { test: dis(role.g, role.m, role.d, flag.f, flag.s, flag.a) },
					ME:     { test: dis(role.m, role.e) }, 
					MEf:    { test: dis(role.m, role.e, flag.f) },
					MEs:    { test: dis(role.m, role.e, flag.s) },
					MEfs:   { test: dis(role.m, role.e, flag.f, flag.s) },
					MD:     { test: dis(role.m, role.d) }, 
					MDf:    { test: dis(role.m, role.d, flag.f) },
					MDs:    { test: dis(role.m, role.d, flag.s) },
					MDfs:   { test: dis(role.m, role.d, flag.f, flag.s) },
					MDa:    { test: dis(role.m, role.d, flag.a) },
					MDfa:   { test: dis(role.m, role.d, flag.f, flag.a) },
					MDsa:   { test: dis(role.m, role.d, flag.s, flag.a) },
					MDfsa:  { test: dis(role.m, role.d, flag.f, flag.s, flag.a) },
					MED:    { test: dis(role.m, role.e, role.d) },
					MEDf:   { test: dis(role.m, role.e, role.d, flag.f) },
					MEDs:   { test: dis(role.m, role.e, role.d, flag.s) },
					MEDfs:  { test: dis(role.m, role.e, role.d, flag.f, flag.s) },
					MEDa:   { test: dis(role.m, role.e, role.d, flag.a) },
					MEDfa:  { test: dis(role.m, role.e, role.d, flag.f, flag.a) },
					MEDsa:  { test: dis(role.m, role.e, role.d, flag.s, flag.a) },
					MEDfsa: { test: dis(role.m, role.e, role.d, flag.f, flag.s, flag.a) },
					ED:     { test: dis(role.e, role.d) }, 
					EDf:    { test: dis(role.e, role.d, flag.f) },
					EDs:    { test: dis(role.e, role.d, flag.s) },
					EDfs:   { test: dis(role.e, role.d, flag.f, flag.s) },
					EDa:    { test: dis(role.e, role.d, flag.a) },
					EDfa:   { test: dis(role.e, role.d, flag.f, flag.a) },
					EDsa:   { test: dis(role.e, role.d, flag.s, flag.a) },
					EDfsa:  { test: dis(role.e, role.d, flag.f, flag.s, flag.a) }
				}
			}*/
		}
	};



/*
 *
 *		1.2		HELPER FUNCTIONS
 *
 */


/*
 *
 *		1.2.1	SERVER HELPER FUNCTIONS
 *
 */

	//	tests in the serverTree above depend on the 2 functions
	//	pro() and dis()
	//	pro() tests if all parameters passed to it are true
	//	for the incoming document


	//	TODO moved above serverTree

	/*
	//	dis() tests if all parameters passed to it are true
	//	and all other parameters from the same parameter set are false
	//  for the incoming document
	function dis() {
		var truth = true;
		//	first step like pro()
		//	iterate through the arguments passed to 'dis'
		for (var d = 0; d < arguments.length; d++) {
			//	if any of them is false we return false
			if (!arguments[d]) { truth = false; }
		}
		//	if this step passed check for falsyness of absent parameters
		absent: {
			if (truth) {

				var roleFlag = [];
				for (var r in role) {
					if (role.hasOwnProperty(r)) {roleFlag.push(r);}
				}
				for (var f in flag) {
					if (flag.hasOwnProperty(f)) {{roleFlag.push(f);}
				}
				var roleFlagCopy = roleFlag;
				for (var n = 0; n < arguments.length; n++) {
					if (roleFlagCopy.indexOf(arguments[n]) > -1) {
						//	remove it from roleFlagCopy
					}


				}

					//für alle props in role und flag (besser: einer kopie davon)
					//	checke ob sie gleich einem parameter sind
					//	wenn ja, entnimm sie der kopie
					//für den rest
					//	führ den negativ-check durch

					for (var r in role) {
						if (arguments[n] == r)
					}


					//	get the first part of all arguments
					//	like only the 'role' of 'role.g'

					//	then get the properties of g that are not in the parameters

					//	then check these for falsyness

						//	if one of them is true
						truth = false;
					//	the condition doesn't hold, no further checks needed
					break absent;
				}
			}
		}

		return truth;
	}
	*/

	//	mapServer walks through the server properties as defined in the
	// 	tree like structure named serverTree above
	//	and at each knot either - if it is a leave - constructs a report
	//	or - if it's a knot - recursively starts a new walk with that knot
	//	as the new root node
	function mapServer(tree) {
		var result = {};
		//	walk through tree
		for (var knot in tree) {
			//	test for javascript idiosyncracies
			if (tree.hasOwnProperty(knot)) {
				//	check if knot is leave (only leaves carry 'test' properties)
				//	if (tree[knot].test) {
				if (Object.keys(tree[knot]).indexOf("test") > -1) {
					//	execute test to see if it returns "true"
					//	otherwise we don't want a report on this leave and move on
					if (tree[knot].test()) {
						//	construct report
						result[knot] = new Report(tree[knot]);
					}
				}
				// otherwise recursively check subtrees
				else {
					// current location tree[knot] becomes the new 'tree root'
					mapServer(tree[knot]);
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
	//	'test' and 'add' properties
	function Report(leave) {
		var report = {};

		//	'count', 'bwa, 'bwc', 'osv' and 'tsv' are collected for both
		//	'bridge' and 'relay' servers
		report.count = 1;
		report.bwa = incoming.bwa || 0;
		report.bwc = incoming.bwc || 0;
		report.osv = new SubReport(osv);
		report.tsv = new SubReport(tsv);

		//	further data is only collected for some relay servers
		if (relay) {
			//	test for _add_itional properties
			//	if (leave.add) {

			//	TODO	MOngoDB  "errmsg" : "exception: TypeError:
			// 									Object.keys called on non-object near
			// 									'if (Object.keys(leave).indexOf(\"add\") > -1'

			if (Object.keys(leave).indexOf("add") > -1) {
				leave.subr.forEach( function(a){
					// if 'a' has a subproperty (like eg 'probs.pr')
					if (a[0][0]) {
						report[a][a[0]] = a[a[0]];
					}
					// if 'a' has no subproperty (like just 'probs', or 'exp')
					else {
						report[a] = new SubReport(a);
					}
				});
			}
		}

		return report;

		function SubReport(sub) {
			var subR = {};
			if (incoming[sub]) {
				for (var arg in sub) {
					if (sub.hasOwnProperty(arg)) {
						subR.arg = sub.arg;
						break;
					}
				}
			}
			return subR;
		}

	}


	/*
	 *
	 *		1.2.2	COUNTRY HELPER FUNCTIONS
	 *
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
 *
 *		1.2.3	AUTOSYS HELPER FUNCTIONS
 *
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
		mapped.server.relay = mapServer(serverTree.relay);
	}

	//	MAPPING SERVER.BRIDGE
	//	likewise for bridges
	else if (bridge) {
		mapped.server.total = new Report(); //  pay credit to server.total
		mapped.server.bridge = mapServer(serverTree.bridge);
	}

	//	MAPPING CLIENT
	//	clients are easy. incoming data is copied into the following
	//	object as is
	else if (client) {
		mapped.client = {
			total: incoming.cr + incoming.cb,
			atBridge: incoming.cb,
			atRelay: incoming.cr,
			cip4: cip ? incoming.cip.v4 : 0,
			cip6: cip ? incoming.cip.v6 : 0,
			cptObfs2: cpt ? incoming.cpt.obfs2 : 0,
			cptObfs3: cpt ? incoming.cpt.obfs3 : 0,
			cptOR: cpt ? incoming.cpt.OR : 0,
			cptUnknown: cpt ? incoming.cpt.unknown: 0
		/*
		TODO the above is untested
		switch back to the following tested code if necessary

		 total: incoming.cr && incoming.cb ? incoming.cr + incoming.cb : 0,
		 atBridge: incoming.cb ? incoming.cb : 0,
		 atRelay: incoming.cr ? incoming.cr : 0,
		 cip4: incoming.cip && incoming.cip.v4 ? incoming.cip.v4 : 0,
		 cip6: incoming.cip && incoming.cip.v6 ? incoming.cip.v6 : 0,
		 cptObfs2: incoming.cpt && incoming.cpt.obfs2 ? incoming.cpt.obfs2 : 0,
		 cptObfs3: incoming.cpt && incoming.cpt.obfs3 ? incoming.cpt.obfs3 : 0,
		 cptOR: incoming.cpt && incoming.cpt.OR ? incoming.cpt.OR : 0,
		 cptUnknown: incoming.cpt && incoming.cpt.unknown ? incoming.cpt.unknown: 0

		 TODO	delete after testing
		 */
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
			for (var cb in incoming.cbcc) {		//	TODO	let's see if this works
				if (incoming.cbcc.hasOwnProperty(cb)) {
					mapped.country.push(new Country("cbcc", cb));
				}
			}
		}
		//	connecting by relay
		if (incoming.crcc) {
			var thatCRcc = incoming.crcc;			//	TODO	then do it here too
			for (var cr in thatCRcc) {
				if (thatCRcc.hasOwnProperty(cr)) {
					mapped.country.push(new Country("crcc", cr));
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
}("2013-04-03 22", "1", "2013-08-14T09:23:45.302Z");


//	///////////////////////////////////////////////////////////////////////
//	///////////////////////////////////////////////////////////////////////

})();	//	end "use strict"