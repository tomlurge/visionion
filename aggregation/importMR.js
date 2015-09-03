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
 *					This script, importMR.js, is a Map Reduce script that aggregates the
 *					data that the importer scripts collect from various Tor sources and
 *					transforms it into a format suitable for driving the visionion
 *					visualization.
 *
 *					The MAP step begins with an elaborate section on configuration and
 *					initilaization. Any updates to this script that only aim to add new
 *					topics or features should in most cases have to modify nothing else
 *					than the configuration section of the Map step.
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

/*
 The MapReduce runtime provided by MongoDB feeds a collection of documents one
 after the other into this script. Each incoming document is handed over to
 the mapValues() function (so configured in db.runCommand() at the very bottom
 of this script).
 */

function mapValues() {
	"use strict";


/*
 *		1.1		INITIALIZATION AND CONFIGURATION
 *
 */

	//	make "this" - the document currently being mapped - referencable
	//	inside inner functions
	var incoming = this;

	//	date will be used to generate the key to the reduce operation
	var date = incoming.date;

	//	all object properties serve as variable declarations but also as
	//	tests that return the value needed during mapping:
	//	either truthy/falsy or an integer or a string

	//	CLIENT INITIALIZATION
	var client = (incoming.type === "c");
	var cb = incoming.cb,			//	clients at bridges
			cr = incoming.cr,			//	clients at relays
			cip = incoming.cip,		//	ip-version
			cpt = incoming.cpt;		//	bridge pluggable transport


	//	SERVER INITIALIZATION for both BRIDGES and RELAYS
	//	exp init		permitted exit ports
	var inExp = incoming.exp || false;
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


	// SERVER INITIALIZATION only for BRIDGES
	var bridge = (incoming.type === "b");
	//	plug init		bridge pluggable transport
	var inPlug = incoming.plug || false;
	var plug = {
		b2: inPlug && inPlug.indexOf('obfs2') > -1 ? 1 : 0,
		b3: inPlug && inPlug.indexOf('obfs3') > -1 ? 1 : 0,
		b23: inPlug && inPlug.indexOf('obfs2') > -1 &&
		inPlug.indexOf('obfs3') > -1 ? 1 : 0
	};
	//	pool init
	var pool = {
		be: incoming.bpol === "email" ? 1 : 0,
		bh: incoming.bpol === "https" ? 1 : 0,
		bo: incoming.bpol === "other" ? 1 : 0
	};
	//	host init
	var host = {
		bc: incoming.ec2 ? 1 : 0
	};


	//	SERVER INITIALIZATION only for RELAYS
	var relay = (incoming.type === "r");
	//	role init
	var inRole = incoming.role || false;
	var role = {
		g: inRole && inRole.indexOf("Guard") > -1 ? 1 : 0,
		m: inRole && inRole.indexOf("Middle") > -1 ? 1 : 0,
		e: inRole && inRole.indexOf("Exit") > -1 ? 1 : 0,
		d: inRole && inRole.indexOf("Dir") > -1 ? 1 : 0
	};
	//	flag init
	var inFlag = incoming.flag || false;
	var flag = {
		f: inFlag && inFlag.indexOf("Fast") > -1 ? 1 : 0,
		s: inFlag && inFlag.indexOf("Stable") > -1 ? 1 : 0,
		a: inFlag && inFlag.indexOf("Authority") > -1 ? 1 : 0
	};
	//	probability init
	var prob = {
		pr: incoming.pr || 0,
		pg: incoming.pg || 0,
		pm: incoming.pm || 0,
		pe: incoming.pe || 0
	};


	//	BRIDGE RESULT TREE CONFIGURATION
	var bridgeConf = {
		total:		[ bridge ],
		//	defaults to projective testing
		pool: {																			//	bridge pool
			be:			[ pool.be ],											//	email
			bh:			[ pool.bh ],											//	https
			bo:			[ pool.bo ]												//	other
		},
		plug: {																			//	pluggable tramsport
			b2:			[ plug.b2 ],											//	obfs2
			b3:			[ plug.b3 ],											//	obfs3
			b23:		[ plug.b2, plug.b3 ]							//	obfs2 + 3
		},
		host: {
			bc:			[ host.bc ]												//	EC2
		}
	};


	//	RELAY RESULT TREE CONFIGURATION
	var relayConf = {
		//	defaults to projective testing
		total:		[ relay ],
		roleFlag: {																	//	(projective)  Roles + Flags
			G:      [ role.g ],
			Gf:     [ role.g,  flag.f ],
			Gs:     [ role.g,  flag.s ],
			Gfs:    [ role.g,  flag.f,  flag.s ],
			M:      [ role.m ],
			Mf:     [ role.m,  flag.f ],
			Ms:     [ role.m,  flag.s ],
			Mfs:    [ role.m,  flag.f,  flag.s ],
			E:      [ role.e ],
			Ef:     [ role.e,  flag.f ],
			Es:     [ role.e,  flag.s ],
			Efs:    [ role.e,  flag.f,  flag.s ],
			D:      [ role.d ],
			Da:     [ role.d,  flag.a ],
			GM:     [ role.g,  role.m ],
			GMf:    [ role.g,  role.m,  flag.f ],
			GMs:    [ role.g,  role.m,  flag.s ],
			GMfs:   [ role.g,  role.m,  flag.f,  flag.s ],
			GE:     [ role.g,  role.e ],
			GEf:    [ role.g,  role.e,  flag.f ],
			GEs:    [ role.g,  role.e ],
			GEfs:   [ role.g,  role.e,  flag.f,  flag.s ],
			GD:     [ role.g,  role.d ],
			GDf:    [ role.g,  role.d,  flag.f ],
			GDs:    [ role.g,  role.d,  flag.s ],
			GDfs:   [ role.g,  role.d,  flag.f,  flag.s ],
			GDa:    [ role.g,  role.d,  flag.a ],
			GDfa:   [ role.g,  role.d,  flag.f,  flag.a ],
			GDsa:   [ role.g,  role.d,  flag.s,  flag.a ],
			GDfsa:  [ role.g,  role.d,  flag.f,  flag.s,  flag.a ],
			GME:    [ role.g,  role.m,  role.e ],
			GMEf:   [ role.g,  role.m,  role.e,  flag.f ],
			GMEs:   [ role.g,  role.m,  role.e,  flag.s ],
			GMEfs:  [ role.g,  role.m,  role.e,  flag.f,  flag.s ],
			GMD:    [ role.g,  role.m,  role.d ],
			GMDf:   [ role.g,  role.m,  role.d,  flag.f ],
			GMDs:   [ role.g,  role.m,  role.d,  flag.s ],
			GMDfs:  [ role.g,  role.m,  role.d,  flag.f,  flag.s ],
			GMDa:   [ role.g,  role.m,  role.d,  flag.a ],
			GMDfa:  [ role.g,  role.m,  role.d,  flag.f,  flag.a ],
			GMDsa:  [ role.g,  role.m,  role.d,  flag.s,  flag.a ],
			GMDfsa: [ role.g,  role.m,  role.d,  flag.f,  flag.s,  flag.a ],
			GMED:   [ role.g,  role.m,  role.e,  role.d ],
			GMEDf:  [ role.g,  role.m,  role.e,  role.d,  flag.f ],
			GMEDs:  [ role.g,  role.m,  role.e,  role.d,  flag.s ],
			GMEDfs: [ role.g,  role.m,  role.e,  role.d,  flag.f,  flag.s ],
			GMEDa:  [ role.g,  role.m,  role.e,  role.d,  flag.a ],
			GMEDfa: [ role.g,  role.m,  role.e,  role.d,  flag.f,  flag.a ],
			GMEDsa: [ role.g,  role.m,  role.e,  role.d,  flag.s,  flag.a ],
			GMEDfsa:[ role.g,  role.m,  role.e,  role.d,  flag.f,  flag.s,  flag.a ],
			ME:     [ role.m,  role.e ],
			MEf:    [ role.m,  role.e,  flag.f ],
			MEs:    [ role.m,  role.e,  flag.s ],
			MEfs:   [ role.m,  role.e,  flag.f,  flag.s ],
			MD:     [ role.m,  role.d ],
			MDf:    [ role.m,  role.d,  flag.f ],
			MDs:    [ role.m,  role.d,  flag.s ],
			MDfs:   [ role.m,  role.d,  flag.f,  flag.s ],
			MDa:    [ role.m,  role.d,  flag.a ],
			MDfa:   [ role.m,  role.d,  flag.f,  flag.a ],
			MDsa:   [ role.m,  role.d,  flag.s,  flag.a ],
			MDfsa:  [ role.m,  role.d,  flag.f,  flag.s,  flag.a ],
			MED:    [ role.m,  role.e,  role.d ],
			MEDf:   [ role.m,  role.e,  role.d,  flag.f ],
			MEDs:   [ role.m,  role.e,  role.d,  flag.s ],
			MEDfs:  [ role.m,  role.e,  role.d,  flag.f,  flag.s ],
			MEDa:   [ role.m,  role.e,  role.d,  flag.a ],
			MEDfa:  [ role.m,  role.e,  role.d,  flag.f,  flag.a ],
			MEDsa:  [ role.m,  role.e,  role.d,  flag.s,  flag.a ],
			MEDfsa: [ role.m,  role.e,  role.d,  flag.f,  flag.s,  flag.a ],
			ED:     [ role.e,  role.d ],
			EDf:    [ role.e,  role.d,  flag.f ],
			EDs:    [ role.e,  role.d,  flag.s ],
			EDfs:   [ role.e,  role.d,  flag.f,  flag.s ],
			EDa:    [ role.e,  role.d,  flag.a ],
			EDfa:   [ role.e,  role.d,  flag.f,  flag.a ],
			EDsa:   [ role.e,  role.d,  flag.s,  flag.a ],
			EDfsa:  [ role.e,  role.d,  flag.f,  flag.s,  flag.a ]
		},
		//	dis		disjunctive testing
		disRole: {																			//	disjunctive Roles
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
		disFlag: {																			//	disjunctive Flags
			none:   [!flag.f, !flag.s, !flag.a],
			f:      [ flag.f, !flag.s, !flag.a],
			s:      [!flag.f,  flag.s, !flag.a],
			a:      [!flag.f, !flag.s,  flag.a],
			fs:     [ flag.f,  flag.s, !flag.a],
			fa:     [ flag.f, !flag.s,  flag.a],
			sa:     [!flag.f,  flag.s,  flag.a],
			fsa:    [ flag.f,  flag.s,  flag.a]
		},
		disRoleFlag: {																		//	disjunctive Roles + Flags
			none:   [!role.g, !role.m, !role.e, !role.d, !flag.f, !flag.s, !flag.a ],
			G:      [ role.g, !role.m, !role.e, !role.d, !flag.f, !flag.s, !flag.a ],
			Gf:     [ role.g, !role.m, !role.e, !role.d,  flag.f, !flag.s, !flag.a ],
			Gs:     [ role.g, !role.m, !role.e, !role.d, !flag.f,  flag.s, !flag.a ],
			Gfs:    [ role.g, !role.m, !role.e, !role.d,  flag.f,  flag.s, !flag.a ],
			M:      [!role.g,  role.m, !role.e, !role.d, !flag.f, !flag.s, !flag.a ],
			Mf:     [!role.g,  role.m, !role.e, !role.d,  flag.f, !flag.s, !flag.a ],
			Ms:     [!role.g,  role.m, !role.e, !role.d, !flag.f,  flag.s, !flag.a ],
			Mfs:    [!role.g,  role.m, !role.e, !role.d,  flag.f,  flag.s, !flag.a ],
			E:      [!role.g, !role.m,  role.e, !role.d, !flag.f, !flag.s, !flag.a ],
			Ef:     [!role.g, !role.m,  role.e, !role.d,  flag.f, !flag.s, !flag.a ],
			Es:     [!role.g, !role.m,  role.e, !role.d, !flag.f,  flag.s, !flag.a ],
			Efs:    [!role.g, !role.m,  role.e, !role.d,  flag.f,  flag.s, !flag.a ],
			D:      [!role.g, !role.m, !role.e,  role.d, !flag.f, !flag.s, !flag.a ],
			Da:     [!role.g, !role.m, !role.e,  role.d, !flag.f, !flag.s,  flag.a ],
			GM:     [ role.g,  role.m, !role.e, !role.d, !flag.f, !flag.s, !flag.a ],
			GMf:    [ role.g,  role.m, !role.e, !role.d,  flag.f, !flag.s, !flag.a ],
			GMs:    [ role.g,  role.m, !role.e, !role.d, !flag.f,  flag.s, !flag.a ],
			GMfs:   [ role.g,  role.m, !role.e, !role.d,  flag.f,  flag.s, !flag.a ],
			GE:     [ role.g, !role.m,  role.e, !role.d, !flag.f, !flag.s, !flag.a ],
			GEf:    [ role.g, !role.m,  role.e, !role.d,  flag.f, !flag.s, !flag.a ],
			GEs:    [ role.g, !role.m,  role.e, !role.d, !flag.f,  flag.s, !flag.a ],
			GEfs:   [ role.g, !role.m,  role.e, !role.d,  flag.f,  flag.s, !flag.a ],
			GD:     [ role.g, !role.m, !role.e,  role.d, !flag.f, !flag.s, !flag.a ],
			GDf:    [ role.g, !role.m, !role.e,  role.d,  flag.f, !flag.s, !flag.a ],
			GDs:    [ role.g, !role.m, !role.e,  role.d, !flag.f,  flag.s, !flag.a ],
			GDfs:   [ role.g, !role.m, !role.e,  role.d,  flag.f,  flag.s, !flag.a ],
			GDa:    [ role.g, !role.m, !role.e,  role.d, !flag.f, !flag.s,  flag.a ],
			GDfa:   [ role.g, !role.m, !role.e,  role.d,  flag.f, !flag.s,  flag.a ],
			GDsa:   [ role.g, !role.m, !role.e,  role.d, !flag.f,  flag.s,  flag.a ],
			GDfsa:  [ role.g, !role.m, !role.e,  role.d,  flag.f,  flag.s,  flag.a ],
			GME:    [ role.g,  role.m,  role.e, !role.d, !flag.f, !flag.s, !flag.a ],
			GMEf:   [ role.g,  role.m,  role.e, !role.d,  flag.f, !flag.s, !flag.a ],
			GMEs:   [ role.g,  role.m,  role.e, !role.d, !flag.f,  flag.s, !flag.a ],
			GMEfs:  [ role.g,  role.m,  role.e, !role.d,  flag.f,  flag.s, !flag.a ],
			GMD:    [ role.g,  role.m, !role.e,  role.d, !flag.f, !flag.s, !flag.a ],
			GMDf:   [ role.g,  role.m, !role.e,  role.d,  flag.f, !flag.s, !flag.a ],
			GMDs:   [ role.g,  role.m, !role.e,  role.d, !flag.f,  flag.s, !flag.a ],
			GMDfs:  [ role.g,  role.m, !role.e,  role.d,  flag.f,  flag.s, !flag.a ],
			GMDa:   [ role.g,  role.m, !role.e,  role.d, !flag.f, !flag.s,  flag.a ],
			GMDfa:  [ role.g,  role.m, !role.e,  role.d,  flag.f, !flag.s,  flag.a ],
			GMDsa:  [ role.g,  role.m, !role.e,  role.d, !flag.f,  flag.s,  flag.a ],
			GMDfsa: [ role.g,  role.m, !role.e,  role.d,  flag.f,  flag.s,  flag.a ],
			GMED:   [ role.g,  role.m,  role.e,  role.d, !flag.f, !flag.s, !flag.a ],
			GMEDf:  [ role.g,  role.m,  role.e,  role.d,  flag.f, !flag.s, !flag.a ],
			GMEDs:  [ role.g,  role.m,  role.e,  role.d, !flag.f,  flag.s, !flag.a ],
			GMEDfs: [ role.g,  role.m,  role.e,  role.d,  flag.f,  flag.s, !flag.a ],
			GMEDa:  [ role.g,  role.m,  role.e,  role.d, !flag.f, !flag.s,  flag.a ],
			GMEDfa: [ role.g,  role.m,  role.e,  role.d,  flag.f, !flag.s,  flag.a ],
			GMEDsa: [ role.g,  role.m,  role.e,  role.d, !flag.f,  flag.s,  flag.a ],
			GMEDfsa:[ role.g,  role.m,  role.e,  role.d,  flag.f,  flag.s,  flag.a ],
			ME:     [!role.g,  role.m,  role.e, !role.d, !flag.f, !flag.s, !flag.a ],
			MEf:    [!role.g,  role.m,  role.e, !role.d,  flag.f, !flag.s, !flag.a ],
			MEs:    [!role.g,  role.m,  role.e, !role.d, !flag.f,  flag.s, !flag.a ],
			MEfs:   [!role.g,  role.m,  role.e, !role.d,  flag.f,  flag.s, !flag.a ],
			MD:     [!role.g,  role.m, !role.e,  role.d, !flag.f, !flag.s, !flag.a ],
			MDf:    [!role.g,  role.m, !role.e,  role.d,  flag.f, !flag.s, !flag.a ],
			MDs:    [!role.g,  role.m, !role.e,  role.d, !flag.f,  flag.s, !flag.a ],
			MDfs:   [!role.g,  role.m, !role.e,  role.d,  flag.f,  flag.s, !flag.a ],
			MDa:    [!role.g,  role.m, !role.e,  role.d, !flag.f, !flag.s,  flag.a ],
			MDfa:   [!role.g,  role.m, !role.e,  role.d,  flag.f, !flag.s,  flag.a ],
			MDsa:   [!role.g,  role.m, !role.e,  role.d, !flag.f,  flag.s,  flag.a ],
			MDfsa:  [!role.g,  role.m, !role.e,  role.d,  flag.f,  flag.s,  flag.a ],
			MED:    [!role.g,  role.m,  role.e,  role.d, !flag.f, !flag.s, !flag.a ],
			MEDf:   [!role.g,  role.m,  role.e,  role.d,  flag.f, !flag.s, !flag.a ],
			MEDs:   [!role.g,  role.m,  role.e,  role.d, !flag.f,  flag.s, !flag.a ],
			MEDfs:  [!role.g,  role.m,  role.e,  role.d,  flag.f,  flag.s, !flag.a ],
			MEDa:   [!role.g,  role.m,  role.e,  role.d, !flag.f, !flag.s,  flag.a ],
			MEDfa:  [!role.g,  role.m,  role.e,  role.d,  flag.f, !flag.s,  flag.a ],
			MEDsa:  [!role.g,  role.m,  role.e,  role.d, !flag.f,  flag.s,  flag.a ],
			MEDfsa: [!role.g,  role.m,  role.e,  role.d,  flag.f,  flag.s,  flag.a ],
			ED:     [!role.g, !role.m,  role.e,  role.d, !flag.f, !flag.s, !flag.a ],
			EDf:    [!role.g, !role.m,  role.e,  role.d,  flag.f, !flag.s, !flag.a ],
			EDs:    [!role.g, !role.m,  role.e,  role.d, !flag.f,  flag.s, !flag.a ],
			EDfs:   [!role.g, !role.m,  role.e,  role.d,  flag.f,  flag.s, !flag.a ],
			EDa:    [!role.g, !role.m,  role.e,  role.d, !flag.f, !flag.s,  flag.a ],
			EDfa:   [!role.g, !role.m,  role.e,  role.d,  flag.f, !flag.s,  flag.a ],
			EDsa:   [!role.g, !role.m,  role.e,  role.d, !flag.f,  flag.s,  flag.a ],
			EDfsa:  [!role.g, !role.m,  role.e,  role.d,  flag.f,  flag.s,  flag.a ]
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
		//	mapServer walks depth first through the server properties as defined in
		//	the tree configuration structures. the variable serverConf can evaluate
		//	to either relayConf or bridgeConf (see above).
		//	at each knot it either - if it's a fork - recursively starts a new
		//	walk with that knot as the new root node or - if it is a leave -
		//	runs the test with the arguments configured in the leave, and,
		//	if the test returns true, constructs a report and adds it to the
		//	result tree (otherwise the result tree will contain no report at
		//	this leave for this incoming document)

		var result = {};

		//	start walking through the configTree (either relayConf or bridgeConf)
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
		//	reports contain sub reports that may be single valued (constructed by
		//	calling the 'SingelSubReport' constructor) for multi valued (calling
		//	'SubReport' respectively).

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
			report.pol = new SingleSubReport(pool);				//	bridge pool
			report.plg = new SubReport(plug);							//	pluggable transport
			report.hst = new SubReport(host);							//	hosting
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

		//	since some init objects can have only one truthy property
		//	per incoming document, their SubReport constructor can be optimized
		function SingleSubReport(init) {
			var subReport = {};
			solo: {
				//	for each property in the initialization object (see section 1.1)
				for (var prop in init) {
					//	if the property is truthy for the incoming data
					if (init.hasOwnProperty(prop) && init[prop]) {
						//	add it to the subreport
						subReport[prop] = init[prop];
						//	only possible truthy prop reached, break loop execution
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
		//	of clients connecting through bridge by country (cbcc) and one for number
		//	of clients connecting through relay by country (crcc) (this data is
		//	already preaggregated before import in one clients document per day).
		//	when the incoming documentc originates from a relay it may contain
		//	at most 1 country (the country the relay is located in) and
		//	eventually the autonomous system.
		//	the resulting document should comprise one array of uniform country
		//	objects, each containing all available data for that country.
		//
		//	these 2 types of results require rather different aggregation
		//	procedures. the map step therefor first checks if the type of
		//	the document at hand is "client" or "relay" and populates a country
		//	template accordingly. 3 cases have to be considered since client
		//	data contains 2 country arrays: cbcc and crcc. in each case the
		//	script starts from the same country template and fills it with the
		//	data from the mapped document. the country array constructed from a
		//	mapped client type document may contain 2 documents for each
		//	country - 1 from cbcc and 1 from crcc - and a total of about 500
		//	country documents whereas a relay document can map to only one
		//	country entry in the country array.
		//
		//	the reduce step then first checks if the country at hand is already
		//	contained in the fact.country array. if so, it adds new data to the
		//	values of that object, if not it pushes the country object at hand onto
		//	the fact.country array. autosys is an array within the object and
		//	therefor needs an inner loop.

		var countryObject = {
			country: country
		};

		if (arg === "relay") {
			countryObject.relay = 1;
			countryObject.bwa = incoming.bwa;
			countryObject.bwc = incoming.bwc;
			countryObject.role = {};
			countryObject.flag = {};
			countryObject.prob = {};

			for (var r in role) {
				if (role.hasOwnProperty(r) && role[r]) {
					countryObject.role[r] = 1;
				}
			}
			for (var f in flag) {
				if (flag.hasOwnProperty(f) && flag[f]) {
					countryObject.flag[f] = 1;
				}
			}
			for (var p in prob) {
				if (prob.hasOwnProperty(p) && prob[p]) {
					countryObject.prob[p] = prob[p]; }
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
			 countryObject.autosys["AS" + incoming.as] = 1;
			 }
			/*	EXTENDED/EXCESSIVE VERSION: AUTOSYS ARRAY AND AS OBJECTS
			if (incoming.as) {
				countryObject.autosys = [];
				countryObject.autosys[0] = {
					"as" : "AS" + incoming.as,
					"count" : 1
				};
			}
			*/

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
			as: "AS" + incoming.as,
			/*	possible future enhancement:
				// 	get full name of AS from external source
				name: lookupASname();
				//	get home country for AS from external source
				home: lookupAShome();
			*/
			relay: 1,
			bwa: incoming.bwa || 0,
			bwc: incoming.bwc || 0,
			role: {},
			flag: {},
			prob: {}
		};
		//	check if need for country sub array
		var ccObject = incoming.cc ? true : false;
		if (ccObject) {
			asObject.country = [
				{
					cc: incoming.cc,
					relay: 1,
					bwa: incoming.bwa || 0,
					bwc: incoming.bwc || 0,
					role: {},
					flag: {},
					prob: {}
				}
			];
		}
		//	populate property sub objects
		for (var r in role) {
			if (role.hasOwnProperty(r) && role[r]) {
				asObject.role[r] = 1;
				if (ccObject) {
					asObject.country[0].role[r] = 1;
				}
			}
		}
		for (var f in flag) {
			if (flag.hasOwnProperty(f) && flag[f]) {
				asObject.flag[f] = 1;
				if (ccObject) {
					asObject.country[0].flag[f] = 1;
				}
			}
		}
		for (var p in prob) {
			if (prob.hasOwnProperty(p) && prob[p]) {
				asObject.prob[p] = prob[p];
				if (ccObject) {
					asObject.country[0].prob[p] = prob[p];
				}
			}
		}

		return asObject;
	}




/*
 *		1.3		INITIATE MAPPING PROCEDURE
 *
 */

	//	SEEDING RESULT OBJECT
	var value = {
		//	after all the configurations and initializations this is where the
		//	action starts: the mapping value is initialized and hooks for the main
		// categories client, server (bridges + relays), country and autonomous
		//	system are created
		date: date,
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
		value.server.total = new Report();			//  pay credit to server.total
		value.server.relay = mapServer(relayConf);
	}

	//	MAPPING SERVER.BRIDGE
	else if (bridge) {
		//	likewise for bridges
		value.server.total = new Report();			//  pay credit to server.total
		value.server.bridge = mapServer(bridgeConf);
	}

	//	MAPPING CLIENT
	else if (client) {
		//	incoming client data is copied into the client section as is
		value.client = {
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
		value.country.push(new Country("relay", incoming.cc));
	}
	else if (client) {
		//	countries are also mentioned in client data specifying how many
		//	clients connected from (or in?) that country by bridges or relays
		if (incoming.cbcc) {
			//	connecting by bridge
			for (var cbIn in incoming.cbcc) {
				if (incoming.cbcc.hasOwnProperty(cbIn)) {
					value.country.push(new Country("cbcc", cbIn));
				}
			}
		}
		if (incoming.crcc) {
			//	connecting by relay
			for (var crIn in incoming.crcc) {
				if (incoming.crcc.hasOwnProperty(crIn)) {
					value.country.push(new Country("crcc", crIn));
				}
			}


		}
	}

	//	MAPPING AUTOSYS
	if (relay && incoming.as) {
		value.autosys.push(new AS());
	}


	//	CREATE ID AND ADJUST DATE ACCORDING TO SPAN
	var key;
	//	hourly aggregation
	if (theSpan === "h") {
		key = date.replace("T","-").slice(0,13);
	}
	//	daily aggregation
	if (theSpan === "d") {
		//	strip hours from key (which will become the result's _id)
		key = date.slice(0, 10);
		//	set 'date' to the start of that day
		value.date = key + "T00:00";
	}
	//	monthly aggregation
	if (theSpan === "m") {
		//	strip hours and days from key (which will become the result's _id)
		key = date.slice(0, 7);
		//	set 'date' to the start of that month
		value.date = key + "-01T00:00";
	}


	//	SENDING THE RESULT TO REDUCE
	emit(key, value);
}



/*
 *
 *		2.		REDUCE
 *
 */

/*
 The Reduce step takes an array of key/value pairs as emitted by the Map step
 and reduces them one by one, according to their key.
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
		date: "",
		span: theSpan,
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
		//	because these require special treatment
		//	(function "update()" won't touch arrays)
		update(fact, value);

		function update(reduced, mapped) {
			for (var property in mapped) {
				if (mapped.hasOwnProperty(property) &&
						//	arrays are handled seperately
						//	(that concerns the sections "country" and "autosys")
					Object.prototype.toString.call(mapped[property]) !==
					"[object Array]"
				) {
					//	check incoming value against already reduced fact
					//	existing path - needs to be updated
					if (reduced[property] !== undefined) {
						if (typeof(reduced[property]) === 'number') {
							reduced[property] += mapped[property];
						}
						else if (typeof(reduced[property]) === 'string') {
							reduced[property] = mapped[property];
						}
						else {	//	element is object - drill down
							update(reduced[property], mapped[property]);
						}
					} else {	//	new path - needs to be added
						reduced[property] = clone(mapped[property]);
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
		/*	SIMPLE VERSION
		//	LOOP 1/2: 'country' array in values emitted from map
		value.country.forEach( function(valCountryObj) {
			//	assuming data about current country hasn't already been aded to fact
			var incomingCountryAlreadyKnown = false;
			//	LOOP 2/2: for each country object in fact's 'country' array
			fact.country.forEach( function(factCountryObj) {
				//	if an object for this country was already added to the array
				if (factCountryObj.country === valCountryObj.country) {
					//	add values from incoming country to the fact's country object
					update(factCountryObj, valCountryObj);
					incomingCountryAlreadyKnown = true;
				}
			});
			//	if the country wasn't found in the reduced fact
			if (!incomingCountryAlreadyKnown) {
				//	add the country object to the fact.counry array
				fact.country.push(valCountryObj);
			}
		});
		*/

		/*	EXTENDED VERSION WITH LOOPS OPTIMIZED FOR PERFORMANCE */
		//	LOOP OVER COUNTRY ARRAY 1/2: INCOMING VALUES
		value.country.forEach(function(valCountryObj) {
			//	assuming data about current country hasn't already been aded to fact
			var incomingCountryAlreadyKnown = false;

			//	LOOP OVER COUNTRY ARRAY 2/2: REDUCED FACT
			for (var fc = 0, fcl = fact.country.length; fc < fcl; fc++) {
				var factCountryObj = fact.country[fc];
				//	if an object for this country was already added to the array
				if (factCountryObj.country === valCountryObj.country) {
					//	add values from incoming country to the fact's country object
					update(factCountryObj, valCountryObj);
					incomingCountryAlreadyKnown = true;
					break;
				}
			}
			//	if the incoming country wasn't found in the fact.country array
			if (!incomingCountryAlreadyKnown) {
				//	add the country object to the array
				fact.country.push(valCountryObj);
			}
		});
		/*	EXCESSIVE VERSION WITH LOOPS OPTIMIZED FOR PERFORMANCE
		 AND COUNTRY.AUTOSYS IMPLEMENTED AS ARRAY INSTEAD OF A SIMPLE OBJECT

		//	OUTER LOOP OVER COUNTRY ARRAY 1/2: INCOMING VALUES
		value.country.forEach(function(valCountryObj) {
			//	assuming data about current country hasn't already been aded to fact
			var incomingCountryAlreadyKnown = false;

			//	OUTER LOOP OVER COUNTRY ARRAY 2/2: REDUCED FACT
			for (var fc = 0, fcl = fact.country.length; fc < fcl; fc++) {
				var factCountryObj = fact.country[fc];
				//	if an object for this country was already added to the array
				if (factCountryObj.country === valCountryObj.country) {
					//	add values from incoming country to the fact's country object
					update(factCountryObj, valCountryObj);

					//	update() doesn't cover arrays, therefor country.autosys has to be
					//	handeled seperately
					if (valCountryObj.autosys) {
						//	INNER LOOP 1/2: AS data in incoming value.country
						for (var vca = 0, vcal = valCountryObj.autosys.length;
								 vca < vcal;
								 vca++) {
							//	(can be nmore than one because incoming may be pre-aggregated)
							var ASinIncomingCountryAlreadyKown = false;
							//	valCountryAS is the whole object {as: string, count: int}
							var valCountryAS = valCountryObj.autosys[vca];

							//	INNER LOOP 2/2: check fact.country.autosys for incoming AS
							//	make sure the fact object has an autosys array
							if (!factCountryObj.autosys) {
								factCountryObj.autosys = [];
							}
							for (var fca = 0, fcal = factCountryObj.autosys.length;
									 fca < fcal;
									 fca++) {
								var factCountryAS = factCountryObj.autosys[fca];
								//	if incoming country.AS is found in fact, add count
								if (factCountryAS.as === valCountryAS.as) {
									factCountryAS.count += valCountryAS.count;
									ASinIncomingCountryAlreadyKown = true;
									break;
								}
							}
							//	after the inner loop is through
							if (!ASinIncomingCountryAlreadyKown) {
								//	if incoming AS wasn't found in fact.country.autosys, add it
								factCountryObj.autosys.push(valCountryAS);
							}
							//	return to the outer loop, check the next country passed in
						}
					}

					incomingCountryAlreadyKnown = true;
					break;
				}
			}
			//	if the incoming country doesn't exist in the fact.country array so far
			if (!incomingCountryAlreadyKnown) {
				//	add the country object to the array
				fact.country.push(valCountryObj);
			}
		});
		 */

/*
 *		2.4		AUTONOMOUS SYSTEMS
 */
		/* SIMPLE VERSION
		//	OUTER LOOP OVER AUTOSYS ARRAY 1/2: INCOMING VALUES
		value.autosys.forEach( function(valASobj) {
			var incomingASalreadyKnown = false;
			//	OUTER LOOP OVER AUTOSYS ARRAY 2/2: REDUCED FACT
			fact.autosys.forEach( function(factASobj) {

				//	if the fact's object's 'as' field equals that of the incoming value
				if (factASobj.as === valASobj.as) {
					//	add up the numbers
					update(factASobj, valASobj);


					//	update() doesn't cover arrays, therefor autosys.country has to be
					//	handeled seperately. first check for it's existance since inner
					//	arrays in AS (and country) objects are only created on demand
					if (valASobj.country) {

						//	INNER LOOP OVER AUTOSYS.COUNTRY ARRAY 1/2: INCOMING VALUE
						//	now check each country in the country array
						//	of that incoming AS object value
						valASobj.country.forEach(function (valAScountryObj) {
							var incomingAScountryAlreadyKown = false;

							//	INNER LOOP OVER AUTOSYS.COUNTRY ARRAY 2/2: REDUCED FACT
							//	compare them with the countries in the country array
							//	of  fact's AS object. again check for it's existance first
							if (!factASobj.country) {
								factASobj.country = [];
							}
							factASobj.country.forEach(function (factAScountryObj) {

								//	if the incoming AS is already present in fact
								if (factAScountryObj.cc === valAScountryObj.cc) {
									//	add up the numbers
									update(factAScountryObj, valAScountryObj);
									incomingAScountryAlreadyKown = true;
								}

							});
							//	if incoming AS wasn't already known add it to facts country
							if (!incomingAScountryAlreadyKown) {
								factASobj.country.push(valAScountryObj);
							}

						});

					}


					incomingASalreadyKnown = true;
				}
			});
			//	if the incoming country wasn't already known add it to the fact
			if (!incomingASalreadyKnown) {
				fact.autosys.push(valASobj);
			}
		});
		 */

		/*	EXTENDED VERSION WITH LOOPS OPTIMIZED FOR PERFORMANCE */
		//	OUTER LOOP OVER AUTOSYS ARRAY 1/2: INCOMING VALUES
		value.autosys.forEach(function(valASobj) {
			//	assuming data about current AS hasn't already been aded to fact
			var incomingASalreadyKnown = false;

			//	OUTER LOOP OVER AUTOSYS ARRAY 2/2: REDUCED FACT
			for (var fa = 0, fal = fact.autosys.length; fa < fal; fa++) {
				var factASobj = fact.autosys[fa];

				//	if the fact's object's 'as' field equals that of the incoming value
				if (factASobj.as === valASobj.as) {
					//	add up the numbers
					update(factASobj, valASobj);

					//	update() doesn't cover arrays, therefor autosys.country has to be
					//	handeled seperately
					if (valASobj.country) {
						//	INNER LOOP OVER AUTOSYS.COUNTRY ARRAY 1/2: INCOMING VALUE
						//	now check each country in the country array
						//	of that incoming AS object value
						for (var vac = 0, vacl = valASobj.country.length;
								 vac < vacl;
								 vac++) {
							var incomingCountryInASalreadyKown = false;
							var valAScountryObj = valASobj.country[vac];

							//	INNER LOOP OVER AUTOSYS.COUNTRY ARRAY 2/2: REDUCED FACT
							//	compare them with the countries in the country array
							//	of  fact's AS object
							//	but first make sure the fact object has an autosys array
							if (!factASobj.country) {
								factASobj.country = [];
							}
							for (var fac = 0, facl = factASobj.country.length;
									 fac < facl;
									 fac++) {
								var factAScountryObj = factASobj.country[fac];
								//	if the incoming AS is already present in fact
								if (factAScountryObj.cc === valAScountryObj.cc) {
									//	add up the numbers
									update(factAScountryObj, valAScountryObj);
									incomingCountryInASalreadyKown = true;
									break;
								}
							}
							//	if incoming AS wasn't already known add it to the facts country
							if (!incomingCountryInASalreadyKown) {
								factASobj.country.push(valAScountryObj);
							}
						}
					}

					incomingASalreadyKnown = true;
					break;
				}
			}
			//	if the incoming country wasn't already known add it to the fact
			if (!incomingASalreadyKnown) {
				fact.autosys.push(valASobj);
			}
		});


	// END values.forEach
	});


	//	fact.span has to be set after update(), otherwise it wil be overwritten
	fact.span = theSpan;

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


function runAggregation (inSpan, inStart, inEnd, inUpdated) {
	"use strict";

	var span = inSpan;
	var start = inStart;
	var end = inEnd || start;
	var updated = inUpdated || "2000-01-01T00:00:00.000Z";


	//	supported "span" values are "d" (daily) and "m" (monthly)
	if ( ! ( (span === "h") || (span === "d") || (span === "m") ) ) {
		print('first parameter must be "h" (for "hourly"), "d" (for "daily") or ' +
			'"m" (for "monthly") aggregation!');
		return;
	}

	db.runCommand (
		{
			mapReduce: "import",			//	the sourcing database collection
			map: mapValues,
			reduce: reduceFact,
			finalize: finalizeFact,
			out: {
				//	the resulting  collection of reduced facts:
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
			jsMode: false,
				//	if "true" it's faster, but needs more memory
				//	works only for up to 500.000 keys
			sort: {
				//	speeds up mapReduce as 'date' is indexed in the import collection
				"date": 1
			},
			scope: {
				//	globally (in the mapReduce job) available variables
				theSpan: span,
				theUpdate: updated
			}
		}
	);
}


runAggregation(
	//	mandatory: "h" for hourly, "d" for daily or "m" for monthly aggregation
	"h"
	//	mandatory: start aggregation at (inclusive)
	,"2013-04-02T00:00"
	//	optional: stop aggregation at (inclusive)
	,"2013-05-01T23:00"
	//	optional: only consider data added on or after
	//,"2013-08-14T09:23:45.302Z"
);


/* HINT - READ BEFORE RUNNING

 in absence of a polished UI this has to do as interface and manual:

	- of course check parameters in runAggregation)
	- check parameters in db.runCommand, especially
	-- mapReduce
	-- merge

	everything else should work automagically

 */