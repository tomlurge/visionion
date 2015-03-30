/** TODO
 *
 *	clients should be transformed to hourly values
 * 	for further discussion see
 * 	https://github.com/tomlurge/visionion/issues/5
 *
 */

/*
 *
 * 		0.1		CONTENTS
 *
 *		0			intro
 *		1.		MAP
 *		1.1		configuration and initialization
 *		1.2		helper functions
 *		1.2.1	server helper functions
 *		1.2.2	country helper functions
 *		1.2.3	autosys helper functions
 *		1.3		initiate mapping procedure
 *		2			REDUCE
 *		2.1		initialization
 *		2.2		clients & servers
 *		2.3		country
 *		2.4		autosys
 *		3			FINALIZE
 *		4			EXECUTE
 *
 *
 *
 *		0.		INTRODUCTION
 *
 *					This script, importMR.js, aggregates the data that the importer
 *					scripts collect from various Tor sources and transforms it into a
 *					structure suitable for driving the visualization.
 *					It is a map reduce script, and a rather long on.
 *
 *					The MAP step begins with an elaborate section on configuration and
 *					initilaization. Any updates to the script that only aim to add new
 *					topics or features should have to modify nothing else than this
 *					section. This should cover most cases.
 *
 *					The REDUCE section is comparatively short. Especially reducing the
 *					'server' objects is a very straight forward process (and 'clients'
 *					are no issue at all since they only get copied over from the
 *					imported data).
 *					OTOH 'countries' and 'autonomous systems' have to go through some
 *					nested loops because they collect data from different sections of
 *					the mapping output.
 *
 *					The FINIALIZE section is empty so far. Computation of averages and
 *					bounds might eventually be added in this section.
 *
 *					The EXECUTE section configures the map reduce apparatus and sets its
 *					global variables.
 *					Finally the script gets called with the desired 'start', 'end' and
 *					'updated' parameters.
 *
 *
 */





/*
 *
 *		1.		MAP
 *
 */


function mapValues() {
	"use strict";


/*
 *		1.1		INITIALIZATION AND CONFIGURATION
 *
 */

	//	make "this" - the document currently being mapped -referencable
	//	inside functions
	var incoming = this;

	//	the key to the reduce operation
	var date = incoming.date;

	//	all object properties serve as variable declarations but also as
	//	tests that return the value needed during mapping:
	//	either truthy/falsy or an integer or a string

	//	CLIENT INITIALIZATION
	var client = (incoming.type === "c");
	var cb = incoming.cb,		//	clients at bridges
		cr = incoming.cr,		//	clients at relays
		cip = incoming.cip,	//	ip-version
		cpt = incoming.cpt;	//	bridge pluggable transport


	//	SERVER INITIALIZATION
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


	// BRIDGE INITIALIZATION
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


	//	RELAY INITIALIZATION
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


	//	BRIDGE RESULT TREE CONFIGURATION
	var bridgeConf = {
		total:		[bridge],
		//	defaults to projective testing
		pool: {																			//	bridge pool
			e:			[pool.be],												//	email
			h:			[pool.bh],												//	https
			o:			[pool.bo]													//	other
		},
		plug: {																			//	pluggable tramsport
			b2:			[plug.b2],												//	obfs2
			b3:			[plug.b3],												//	obfs3
			b23:		[plug.b2, plug.b3]								//	obfs2 + 3
		},
		host: {
			ec2:		[host.bc]													//	EC2
		}
	};


	//	RELAY RESULT TREE CONFIGURATION
	var relayConf = {
		//	defaults to projective testing
		total:		[relay],
		role: {
			G:			[role.g],													//	guard
			M:			[role.m],													//	middle
			E:			[role.e],													//	exit
			D:			[role.d]													//	directory
		},
		flag: {
			f:			[flag.f],													//	fast
			s:			[flag.s],													//	stable
			fs:			[flag.f, flag.s],									// 	fast + stable
			NOfs:		[!flag.f, !flag.s],								//	not fast + not stable
			a:			[flag.a]													//	authority}
		},
		roleFlag: {
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
		},
		//	dis		disjunctive testing
		disR: {																			//	disjunctive Roles
			none:   [!role.g, !role.m, !role.e, !role.d],
			G:      [ role.g, !role.m, !role.e, !role.d],
			M:      [!role.g,  role.m, !role.e, !role.d],
			E:      [!role.g, !role.m,  role.e, !role.d],
			D:      [!role.g, !role.m, !role.e,  role.d],
			GM:     [ role.g,  role.m, !role.e, !role.d],
			GE:     [ role.g, !role.m,  role.e, !role.d],
			GD:     [ role.g, !role.m, !role.e,  role.d],
			GME:    [ role.g,  role.m,  role.e, !role.d],
			GMD:    [ role.g,  role.m, !role.e,  role.d],
			GMED:   [ role.g,  role.m,  role.e,  role.d],
			ME:     [!role.g,  role.m,  role.e, !role.d],
			MD:     [!role.g,  role.m, !role.e,  role.d],
			MED:    [!role.g,  role.m,  role.e,  role.d],
			ED:     [!role.g, !role.m,  role.e,  role.d]
		},
		disF: {																			//	disjunctive Flags
			none:   [!flag.f, !flag.s, !flag.a],
			f:      [ flag.f, !flag.s, !flag.a],
			s:      [!flag.f,  flag.s, !flag.a],
			a:      [!flag.f, !flag.s,  flag.a],
			fs:     [ flag.f,  flag.s, !flag.a],
			fa:     [ flag.f, !flag.s,  flag.a],
			sa:     [!flag.f,  flag.s,  flag.a],
			fsa:    [ flag.f,  flag.s,  flag.a]
		},
		disRF: {																		//	disjunctive Roles + Flags
			none:   [!role.g, !role.m, !role.e, !role.d, !flag.f, !flag.s, !flag.a],
			G:      [ role.g, !role.m, !role.e, !role.d, !flag.f, !flag.s, !flag.a],
			Gf:     [ role.g, !role.m, !role.e, !role.d,  flag.f, !flag.s, !flag.a],
			Gs:     [ role.g, !role.m, !role.e, !role.d, !flag.f,  flag.s, !flag.a],
			Gfs:    [ role.g, !role.m, !role.e, !role.d,  flag.f,  flag.s, !flag.a],
			M:      [!role.g,  role.m, !role.e, !role.d, !flag.f, !flag.s, !flag.a],
			Mf:     [!role.g,  role.m, !role.e, !role.d,  flag.f, !flag.s, !flag.a],
			Ms:     [!role.g,  role.m, !role.e, !role.d, !flag.f,  flag.s, !flag.a],
			Mfs:    [!role.g,  role.m, !role.e, !role.d,  flag.f,  flag.s, !flag.a],
			E:      [!role.g, !role.m,  role.e, !role.d, !flag.f, !flag.s, !flag.a],
			Ef:     [!role.g, !role.m,  role.e, !role.d,  flag.f, !flag.s, !flag.a],
			Es:     [!role.g, !role.m,  role.e, !role.d, !flag.f,  flag.s, !flag.a],
			Efs:    [!role.g, !role.m,  role.e, !role.d,  flag.f,  flag.s, !flag.a],
			D:      [!role.g, !role.m, !role.e,  role.d, !flag.f, !flag.s, !flag.a],
			Da:     [!role.g, !role.m, !role.e,  role.d, !flag.f, !flag.s,  flag.a],
			GM:     [ role.g,  role.m, !role.e, !role.d, !flag.f, !flag.s, !flag.a],
			GMf:    [ role.g,  role.m, !role.e, !role.d,  flag.f, !flag.s, !flag.a],
			GMs:    [ role.g,  role.m, !role.e, !role.d, !flag.f,  flag.s, !flag.a],
			GMfs:   [ role.g,  role.m, !role.e, !role.d,  flag.f,  flag.s, !flag.a],
			GE:     [ role.g, !role.m,  role.e, !role.d, !flag.f, !flag.s, !flag.a],
			GEf:    [ role.g, !role.m,  role.e, !role.d,  flag.f, !flag.s, !flag.a],
			GEs:    [ role.g, !role.m,  role.e, !role.d, !flag.f,  flag.s, !flag.a],
			GEfs:   [ role.g, !role.m,  role.e, !role.d,  flag.f,  flag.s, !flag.a],
			GD:     [ role.g, !role.m, !role.e,  role.d, !flag.f, !flag.s, !flag.a],
			GDf:    [ role.g, !role.m, !role.e,  role.d,  flag.f, !flag.s, !flag.a],
			GDs:    [ role.g, !role.m, !role.e,  role.d, !flag.f,  flag.s, !flag.a],
			GDfs:   [ role.g, !role.m, !role.e,  role.d,  flag.f,  flag.s, !flag.a],
			GDa:    [ role.g, !role.m, !role.e,  role.d, !flag.f, !flag.s,  flag.a],
			GDfa:   [ role.g, !role.m, !role.e,  role.d,  flag.f, !flag.s,  flag.a],
			GDsa:   [ role.g, !role.m, !role.e,  role.d, !flag.f,  flag.s,  flag.a],
			GDfsa:  [ role.g, !role.m, !role.e,  role.d,  flag.f,  flag.s,  flag.a],
			GME:    [ role.g,  role.m,  role.e, !role.d, !flag.f, !flag.s, !flag.a],
			GMEf:   [ role.g,  role.m,  role.e, !role.d,  flag.f, !flag.s, !flag.a],
			GMEs:   [ role.g,  role.m,  role.e, !role.d, !flag.f,  flag.s, !flag.a],
			GMEfs:  [ role.g,  role.m,  role.e, !role.d,  flag.f,  flag.s, !flag.a],
			GMD:    [ role.g,  role.m, !role.e,  role.d, !flag.f, !flag.s, !flag.a],
			GMDf:   [ role.g,  role.m, !role.e,  role.d,  flag.f, !flag.s, !flag.a],
			GMDs:   [ role.g,  role.m, !role.e,  role.d, !flag.f,  flag.s, !flag.a],
			GMDfs:  [ role.g,  role.m, !role.e,  role.d,  flag.f,  flag.s, !flag.a],
			GMDa:   [ role.g,  role.m, !role.e,  role.d, !flag.f, !flag.s,  flag.a],
			GMDfa:  [ role.g,  role.m, !role.e,  role.d,  flag.f, !flag.s,  flag.a],
			GMDsa:  [ role.g,  role.m, !role.e,  role.d, !flag.f,  flag.s,  flag.a],
			GMDfsa: [ role.g,  role.m, !role.e,  role.d,  flag.f,  flag.s,  flag.a],
			GMED:   [ role.g,  role.m,  role.e,  role.d, !flag.f, !flag.s, !flag.a],
			GMEDf:  [ role.g,  role.m,  role.e,  role.d,  flag.f, !flag.s, !flag.a],
			GMEDs:  [ role.g,  role.m,  role.e,  role.d, !flag.f,  flag.s, !flag.a],
			GMEDfs: [ role.g,  role.m,  role.e,  role.d,  flag.f,  flag.s, !flag.a],
			GMEDa:  [ role.g,  role.m,  role.e,  role.d, !flag.f, !flag.s,  flag.a],
			GMEDfa: [ role.g,  role.m,  role.e,  role.d,  flag.f, !flag.s,  flag.a],
			GMEDsa: [ role.g,  role.m,  role.e,  role.d, !flag.f,  flag.s,  flag.a],
			GMEDfsa:[ role.g,  role.m,  role.e,  role.d,  flag.f,  flag.s,  flag.a],
			ME:     [!role.g,  role.m,  role.e, !role.d, !flag.f, !flag.s, !flag.a],
			MEf:    [!role.g,  role.m,  role.e, !role.d,  flag.f, !flag.s, !flag.a],
			MEs:    [!role.g,  role.m,  role.e, !role.d, !flag.f,  flag.s, !flag.a],
			MEfs:   [!role.g,  role.m,  role.e, !role.d,  flag.f,  flag.s, !flag.a],
			MD:     [!role.g,  role.m, !role.e,  role.d, !flag.f, !flag.s, !flag.a],
			MDf:    [!role.g,  role.m, !role.e,  role.d,  flag.f, !flag.s, !flag.a],
			MDs:    [!role.g,  role.m, !role.e,  role.d, !flag.f,  flag.s, !flag.a],
			MDfs:   [!role.g,  role.m, !role.e,  role.d,  flag.f,  flag.s, !flag.a],
			MDa:    [!role.g,  role.m, !role.e,  role.d, !flag.f, !flag.s,  flag.a],
			MDfa:   [!role.g,  role.m, !role.e,  role.d,  flag.f, !flag.s,  flag.a],
			MDsa:   [!role.g,  role.m, !role.e,  role.d, !flag.f,  flag.s,  flag.a],
			MDfsa:  [!role.g,  role.m, !role.e,  role.d,  flag.f,  flag.s,  flag.a],
			MED:    [!role.g,  role.m,  role.e,  role.d, !flag.f, !flag.s, !flag.a],
			MEDf:   [!role.g,  role.m,  role.e,  role.d,  flag.f, !flag.s, !flag.a],
			MEDs:   [!role.g,  role.m,  role.e,  role.d, !flag.f,  flag.s, !flag.a],
			MEDfs:  [!role.g,  role.m,  role.e,  role.d,  flag.f,  flag.s, !flag.a],
			MEDa:   [!role.g,  role.m,  role.e,  role.d, !flag.f, !flag.s,  flag.a],
			MEDfa:  [!role.g,  role.m,  role.e,  role.d,  flag.f, !flag.s,  flag.a],
			MEDsa:  [!role.g,  role.m,  role.e,  role.d, !flag.f,  flag.s,  flag.a],
			MEDfsa: [!role.g,  role.m,  role.e,  role.d,  flag.f,  flag.s,  flag.a],
			ED:     [!role.g, !role.m,  role.e,  role.d, !flag.f, !flag.s, !flag.a],
			EDf:    [!role.g, !role.m,  role.e,  role.d,  flag.f, !flag.s, !flag.a],
			EDs:    [!role.g, !role.m,  role.e,  role.d, !flag.f,  flag.s, !flag.a],
			EDfs:   [!role.g, !role.m,  role.e,  role.d,  flag.f,  flag.s, !flag.a],
			EDa:    [!role.g, !role.m,  role.e,  role.d, !flag.f, !flag.s,  flag.a],
			EDfa:   [!role.g, !role.m,  role.e,  role.d,  flag.f, !flag.s,  flag.a],
			EDsa:   [!role.g, !role.m,  role.e,  role.d, !flag.f,  flag.s,  flag.a],
			EDfsa:  [!role.g, !role.m,  role.e,  role.d,  flag.f,  flag.s,  flag.a]
		}
	};


/*
 *		1.2		HELPER FUNCTIONS
 *
 */


/*
 *		1.2.1	SERVER HELPER FUNCTIONS
 */

	function mapServer(serverConf) {
		//	mapServer walks through the server properties as defined in the
		// 	tree like configuration structures relayConf and bridgeConf (see
		//  above), depth first.
		//	at each knot it either - if it's a knot - recursively starts a new
		//	walk with that knot as the new root node or - if it is a leave -
		//	runs the test with the arguments configured in the leave, and,
		//	if the test returns true, constructs a report and adds it to the
		//	result tree (otherwise the result tree will contain no report at
		//	this leave for this incoming document)

		var result = {};

		//	start walking through the configTree
		for (var entry in serverConf) {
			if (serverConf.hasOwnProperty(entry)) {
				//	if it's an object it must be the root of a subtree
				if (typeOf(serverConf[entry]) === "object") {
					//	current entry in conf becomes root of new mapping walk
					result[entry] = mapServer(serverConf[entry]);
				}
				//	if it's an array it must be a leave with report arguments)
				if (typeOf(serverConf[entry]) === "array") {
					//	run test with arguments configured in the leave
					if (testLeave(serverConf[entry])) {
						//	if test is successfull, construct a report at this leave
						result[entry] = new Report();
					}
				}
			}
		}

		return result;

		//	helpers

		function testLeave(reportArgs) {
			//	iterate through the report arguments passed to 'testLeave'.
			//	if any of the test conditions isn't met we return immediatly
			for (var arg = 0; arg < reportArgs.length; arg++) {
				if (!reportArgs[arg]) {
					return false;
				}
			}
			return true;
		}

		function typeOf(value) {
			//	typeof() without the bugs
			//	http://javascript.crockford.com/remedial.html
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

	}


	function Report() {
		//	when mapServer finds a leave and the test returns true
		// 	it initiates the construction of a report object by calling
		//	this 'Report' constructor.

		var report = {};

		//	'sum', 'bwa, 'bwc', 'osv' and 'tsv' are collected for both
		//	'bridge' and 'relay' servers
		report.sum = 1;
		report.bwa = incoming.bwa || 0;
		report.bwc = incoming.bwc || 0;
		report.osv = new SingleSubReport(osv);
		report.tsv = new SingleSubReport(tsv);

		if(relay) {
			report.prb = new SubReport(prob);						//	probabilities
			if(inExp) {
				report.exp = new SubReport(exp);					//	permitted exit ports
			}
		}
		if(bridge) {
			report.pol = new SingleSubReport(pool);			//	bridge pool
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
		function SingleSubReport(init) {
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



	/*
	 *		1.2.2	COUNTRY HELPER FUNCTIONS
	 */

	function Country(arg, country) {
		//	construct country object

		//	country information can originate from 2 sources: client and relay.
		//	when it originates from client it contains 2 arrays: one for number
		//	of clients connecting through bridge by country and one for number
		//	of clients connecting through relay by country (this data is
		//	already preaggregated before import in one clients document per
		//	datetime).
		//	when the incoming documentc originates from a relay it may contain
		//	at most 1 country (the country the relay is located in) and
		//	eventually the autonomous system. the resulting document should
		//	comprise an array of uniform country objects containing all
		//	available data.
		//	these 2 types of results require rather different aggregation
		//	procedures. the map step therefor first checks if the type of
		//	the document at hand is "client" or "relay" and populates a country
		//	template accordingly. 3 cases have to be considered since client
		//	data contains 2 country arrays: cbcc and crcc. in each case the
		//	script starts from the same country template and fills it with the
		//	data from the mapped document. the country array constructed from a
		//	mapped client type document may contain 2 documents for each
		//	country - 1 from cbcc and 1 from crcc - and a total of about 500
		//	country documents whereas a relay document maps to at most one
		//	country entry in the country array.
		//
		//	the reduce step then always checks first if the country at hand is
		//	already contained in the fact.country array. if so, it adds new
		//	data to the values of that object, if not it pushes the country
		//	object at hand onto the fact.country array. autosys is an array
		//	within the object and therefor needs an inner loop.

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
				if (role.hasOwnProperty(r) && role[r]) {
					countryObject.proRole[r] = 1;
				}
			}
			for (var f in flag) {
				if (flag.hasOwnProperty(f) && flag[f]) {
					countryObject.proFlag[f] = 1;
				}
			}
			for (var p in prob) {
				if (prob.hasOwnProperty(p) && prob[p]) {
					countryObject.proProb[p] = prob[p]; }
			}
			for (var o in osv) {
				if (osv.hasOwnProperty(o) && osv[o]) {
					countryObject.osv = {};
					countryObject.osv[o] = 1;
				}
			}
			for (var t in tsv) {
				if (tsv.hasOwnProperty(t) && tsv[t]) {
					countryObject.tsv = {};
					countryObject.tsv[t] = 1;
				}
			}
			if (incoming.as) {
				countryObject.autosys = {};
				countryObject.autosys["AS " + incoming.as] = 1;
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

	function AS(){
		//	construct autosys object
		var asObject = {
			as: incoming.as,
			//	possible future enhancement:
			// 	get full name of AS from external source
			//	name: lookupASname();
			//	possible future enhancement:
			//	get home country for AS from external source
			//	home: lookupAShome();
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
			if (role.hasOwnProperty(r) && role[r]) {
				asObject.proRole[r] = 1;
				asObject.country[0].proRole[r] = 1;
			}
		}
		for (var f in flag) {
			if (flag.hasOwnProperty(f) && flag[f]) {
				asObject.proFlag[f] = 1;
				asObject.country[0].proFlag[f] = 1;
			}
		}
		for (var p in prob) {
			if (prob.hasOwnProperty(p) && prob[p]) {
				asObject.proProb[p] = prob[p];
				asObject.country[0].proProb[p] = prob[p];
			}
		}
		return asObject;
	}




/*
 *		1.3		INITIATE MAPPING PROCEDURE
 *
 */

	//	SEEDING RESULT OBJECT
	var mapped = {
		//	after all the configurations and initializations this is where the
		//	action starts: hooks for themain categories client, server
		//	(bridges + relays), country and autonomous system are created
		client: {},
		server: {},
		country: [],
		autosys: []
	};

	//	MAPPING SERVER.RELAY
	if (relay) {
		//	if the incoming document represents a relay, mapServer is called
		//	with the relay part of the serverTree map as configuration.
		//	"server.total" is  mentioned nowhere but here and 6 lines below...
		mapped.server.total = new Report();			//  pay credit to server.total
		mapped.server.relay = mapServer(relayConf);
	}

	//	MAPPING SERVER.BRIDGE
	else if (bridge) {
		//	likewise for bridges
		mapped.server.total = new Report();			//  pay credit to server.total
		mapped.server.bridge = mapServer(bridgeConf);
	}

	//	MAPPING CLIENT
	else if (client) {
		//	incoming data is copied into the following object as is
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
	//	mapping countries is a little involved since they occur in both
	//	relay and client parts of the incoming data and are aggregeted
	//	in country and autosys parts of the result.
	if (relay && incoming.cc) {
		//	countries are mentioned in relay data specifying the physical
		//	location of the relay
		mapped.country.push(new Country("relay", incoming.cc));
	}
	else if (client) {
		//	countries are also mentioned in client data specifying how many
		//	clients connected from (or in?) that country by bridges or relays
		if (incoming.cbcc) {
			//	connecting by bridge
			for (var cbIn in incoming.cbcc) {
				if (incoming.cbcc.hasOwnProperty(cbIn)) {
					mapped.country.push(new Country("cbcc", cbIn));
				}
			}
		}
		if (incoming.crcc) {
			//	connecting by relay
			for (var crIn in incoming.crcc) {
				if (incoming.crcc.hasOwnProperty(crIn)) {
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
	emit(date, mapped);
}



/*
 *
 *		2.		REDUCE
 *
 */


function reduceFact(key, values) {
	"use strict";
	//	will go through every property in incoming data - server and client -
	//	and add it to the result fact as aggregated so far


/*
 *		2.1		INITIALIZATION
 */

	//	INITIALIZE REDUCTION BY GATHERING OF ADMINISTRATIVE DATA
	var fact = {
		date: key,
		span: "h",						//	import data is always aggregated hourly,
		updt: theUpdate,
		client: {},
		server: {
			total: {},
			bridge: {},
			relay: {}
		},
		country: [],
		autosys: []
	};


	//	REDUCE INCOMING DATA TO THE RESULT FACT
	values.forEach(function(value) {

/*
 *		2.2		CLIENTS & SERVERS
 */

		//	first reduce all properties except "country" and "autosys" arrays
		//	because these require special treatment (function "update()" won't
		//	touch arrays)
		update(fact, value);

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

/*
 *		2.3		COUNTRIES
 */

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

/*
 *		2.4		AUTONOMOUS SYSTEMS
 */

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

	//	finally retun the reduced fact
	return fact;

}



/*
 *
 *		3.		FINALIZE
 *
 */


function finalizeFact(key, fact) {
	"use strict";
	/*
	 maybe add some finishing touches like averages etc
	 */
	return fact;
}



/*
 *
 *		4.		EXECUTE
 *
 */


function runAggregation (inStart, inEnd, inUpdated) {
	"use strict";

	var start = inStart;
	var end = inEnd || start;
	var updated = inUpdated || "1999-12-31T23:59:59.999Z";

	db.runCommand (
		{
			mapReduce: "import",			//	the sourcing database collection
			map: mapValues,
			reduce: reduceFact,
			finalize: finalizeFact,
			out: {
				//	the final fact collection:
				//	'merge' replaces existing documents with the same key,
				//	'reduce' adds values to existing documents
				merge: "facts"
			},
			query: {
				"date": {
					"$gte": start,
					"$lte": end
					//	both conditions have to include equality, otherwise
					//	single parameter invocation (start === end) would return
					//	an empty result
				},
				"updt": {
					"$gte": updated
				}
			},
			jsMode: true,
				//	if "true" it's faster, but needs more memory
				//	works only for up to 500.000 keys
			sort: {
				//	speeds up mapReduce as 'date' is indexed in the import
				//	collection but demands that "sort" equals the key of the
				//	map operation
				"date": 1
			},
			scope: {
				//	globally (in the mapReduce job) available variables
				theUpdate: updated
			}
		}
	);
}


runAggregation(
	//	mandatory: start aggregation at (inclusive)
	 "2013-04-02 00"
	//	optional: stop aggregation at (inclusive)
//,"2013-04-04 00"
	//	optional: only consider data added on or after
//,"2013-08-14T09:23:45.302Z"
);
