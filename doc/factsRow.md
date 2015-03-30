#schematic and annotated examples of a document in the facts collection

**4. version**
a refinement of version 3
as first implemented in version 7/8 and further refined in v9
									
	_id
	value
		date
		span
		updt								
		client
			total
			atBridge
			atRelay
			cip4
			cip6
			cptObfs2
			cptObfs3
			cptObfs23
			cptOR
			cptUnknown
		server					//	c	bwa	bwc	prb osv	tsv	exp	pol	plg	hst
			total					x	x	x	x	x	x	-	-	-	-
			bridge
				total				x	x	x	-	x	x	-	x	x	x
				pool				x	x	x	-	x	x	-	x	x	x
					e				x	x	x	-	x	x	-	x	x	x
					h				x	x	x	-	x	x	-	x	x	x
					o				x	x	x	-	x	x	-	x	x	x
				plug				x	x	x	-	x	x	-	x	x	x
					b2				x	x	x	-	x	x	-	x	x	x
					b3				x	x	x	-	x	x	-	x	x	x
					b23				x	x	x	-	x	x	-	x	x	x
				host				x	x	x	-	x	x	-	x	x	x
					ec2				x	x	x	-	x	x	-	x	x	x
			relay				//	c	bwa	bwc	prb osv	tsv	exp
				total				x	x	x	x	x	x	x
				role
					G				x	x	x	x	x	x	-
					M				x	x	x	x	x	x	-
					E				x	x	x	x	x	x	x
					D				x	x	x	x	x	x	-
				flag
					f				x	x	x	x	x	x	x
					s				x	x	x	x	x	x	x
					fs				x	x	x	x	x	x	x
					NOfs			x	x	x	x	x	x	x
					a				x	x	x	x	x	x	x
				roleFlag
					Gf				x	x	x	x	x	x	-
					Gs				x	x	x	x	x	x	-
					Gfs				x	x	x	x	x	x	-
					Mf				x	x	x	x	x	x	-
					Ms				x	x	x	x	x	x	-
					Mfs				x	x	x	x	x	x	-
					Ef				x	x	x	x	x	x	x
					Es				x	x	x	x	x	x	x
					Efs				x	x	x	x	x	x	x
					Df				x	x	x	x	x	x	-
					Ds				x	x	x	x	x	x	-
					Dfs				x	x	x	x	x	x	-
					Da				x	x	x	x	x	x	-
					Dfa				x	x	x	x	x	x	-
					Dsa				x	x	x	x	x	x	-
					Dfsa			x	x	x	x	x	x	-
				disR
					none			x	x	x	x	x	x	-
					G				x	x	x	x	x	x	-
					M				x	x	x	x	x	x	-
					E				x	x	x	x	x	x	x
					D				x	x	x	x	x	x	-
					GM				x	x	x	x	x	x	-
					GE				x	x	x	x	x	x	x
					GD				x	x	x	x	x	x	-
					GME				x	x	x	x	x	x	x
					GMD				x	x	x	x	x	x	-
					GMED			x	x	x	x	x	x	x
					ME				x	x	x	x	x	x	x
					MD				x	x	x	x	x	x	-
					MED				x	x	x	x	x	x	x
					ED				x	x	x	x	x	x	x
				disF
					none			x	x	x	x	x	x	x
					f				x	x	x	x	x	x	x
					s				x	x	x	x	x	x	x
					a				x	x	x	x	x	x	x
					fs				x	x	x	x	x	x	x
					fa				x	x	x	x	x	x	x
					sa				x	x	x	x	x	x	x
					fsa				x	x	x	x	x	x	x
				disRF
					none
					G				x	x	x	x	x	x	x
					Gf				x	x	x	x	x	x	x
					Gs				x	x	x	x	x	x	x
					Gfs				x	x	x	x	x	x	x
					M				x	x	x	x	x	x	x
					Mf				x	x	x	x	x	x	x
					Ms				x	x	x	x	x	x	x
					Mfs				x	x	x	x	x	x	x
					E				x	x	x	x	x	x	x
					Ef				x	x	x	x	x	x	x
					Es				x	x	x	x	x	x	x
					Efs				x	x	x	x	x	x	x
					D				x	x	x	x	x	x	x
					Da				x	x	x	x	x	x	x
					GM				x	x	x	x	x	x	x
					GMf				x	x	x	x	x	x	x
					GMs				x	x	x	x	x	x	x
					GMfs			x	x	x	x	x	x	x
					GE				x	x	x	x	x	x	x
					GEf				x	x	x	x	x	x	x
					GEs				x	x	x	x	x	x	x
					GEfs			x	x	x	x	x	x	x
					GD				x	x	x	x	x	x	x
					GDf				x	x	x	x	x	x	x
					GDs				x	x	x	x	x	x	x
					GDfs			x	x	x	x	x	x	x
					GDa				x	x	x	x	x	x	x
					GDfa			x	x	x	x	x	x	x
					GDsa			x	x	x	x	x	x	x
					GDfsa			x	x	x	x	x	x	x
					GME				x	x	x	x	x	x	x
					GMEf			x	x	x	x	x	x	x
					GMEs			x	x	x	x	x	x	x
					GMEfs			x	x	x	x	x	x	x
					GMD				x	x	x	x	x	x	x
					GMDf			x	x	x	x	x	x	x
					GMDs			x	x	x	x	x	x	x
					GMDfs			x	x	x	x	x	x	x
					GMDa			x	x	x	x	x	x	x
					GMDfa			x	x	x	x	x	x	x
					GMDsa			x	x	x	x	x	x	x
					GMDfsa			x	x	x	x	x	x	x
					ME				x	x	x	x	x	x	x
					MEf				x	x	x	x	x	x	x
					MEs				x	x	x	x	x	x	x
					MEfs			x	x	x	x	x	x	x
					MD				x	x	x	x	x	x	x
					MDf				x	x	x	x	x	x	x
					MDs				x	x	x	x	x	x	x
					MDfs			x	x	x	x	x	x	x
					MDa				x	x	x	x	x	x	x
					MDfa			x	x	x	x	x	x	x
					MDsa			x	x	x	x	x	x	x
					MDfsa			x	x	x	x	x	x	x
					MED				x	x	x	x	x	x	x
					MEDf			x	x	x	x	x	x	x
					MEDs			x	x	x	x	x	x	x
					MEDfs			x	x	x	x	x	x	x
					MEDa			x	x	x	x	x	x	x
					MEDfa			x	x	x	x	x	x	x
					MEDsa			x	x	x	x	x	x	x
					MEDfsa			x	x	x	x	x	x	x
					ED				x	x	x	x	x	x	x
					EDf				x	x	x	x	x	x	x
					EDs				x	x	x	x	x	x	x
					EDfs			x	x	x	x	x	x	x
					EDa				x	x	x	x	x	x	x
					EDfa			x	x	x	x	x	x	x
					EDsa			x	x	x	x	x	x	x
					EDfsa			x	x	x	x	x	x	x
		countries
				// like in 1. version
		autosys
				// like in 1. version

	the default testing logic is projective:
		counting _any_ node which fulfills the criteria
		(probably also fulfilling many other criterias)
	sections beginning with "dis" (disR, disF and disRF) are tested
	disjunctively:
		counting _only_ nodes that fulfill _exactly_ the criterias
		(evaluate to true for the given criterias and evaluating to false
		for all others)


**3. version**
a new attempt to properly represent relays
first implemented in mr4.js

	_id
	value
		date
		span
		updt
		client
			total
			atBridge
			atRelay
			cip4
			cip6
			cptObfs2
			cptObfs3
			cptObfs23
			cptOR
			cptUnknown
		server						//	c	bwa	bwc	prb osv	tsv	exp	pol	plg	hst
			total						x	x	x	x	x	x	-	-	-	-
			bridge						x	x	x	-	x	x	-	x	x	x
				total					x	x	x	-	x	x	-	x	x	x
				project	// *
					proPool				x	x	x	-	x	x	-	x	x	x
						e				x	x	x	-	x	x	-	x	x	x
						h				x	x	x	-	x	x	-	x	x	x
						o				x	x	x	-	x	x	-	x	x	x
					proPlug				x	x	x	-	x	x	-	x	x	x
						o2				x	x	x	-	x	x	-	x	x	x
						o3				x	x	x	-	x	x	-	x	x	x
						o23				x	x	x	-	x	x	-	x	x	x
					proHost				x	x	x	-	x	x	-	x	x	x
						ec2				x	x	x	-	x	x	-	x	x	x
			relay
				total					x	x	x	x	x	x	x
				project
					proRole
						g				x	x	x	x	x	x	-
						m				x	x	x	x	x	x	-
						e				x	x	x	x	x	x	x
						d				x	x	x	x	x	x	-
					proFlag
						f				x	x	x	x	x	x	x
						s				x	x	x	x	x	x	x
						fs				x	x	x	x	x	x	x
						NOfs			x	x	x	x	x	x	x
						a				x	x	x	x	x	x	x
					proRoleFlag
						Gf				x	x	x	x	x	x	-
						Gs				x	x	x	x	x	x	-
						Gfs				x	x	x	x	x	x	-
						Mf				x	x	x	x	x	x	-
						Ms				x	x	x	x	x	x	-
						Mfs				x	x	x	x	x	x	-
						Ef				x	x	x	x	x	x	x
						Es				x	x	x	x	x	x	x
						Efs				x	x	x	x	x	x	x
						Df				x	x	x	-	x	x	-
						Ds				x	x	x	-	x	x	-
						Dfs				x	x	x	-	x	x	-
						Da				x	x	x	-	x	x	-
						Dfa				x	x	x	-	x	x	-
						Dsa				x	x	x	-	x	x	-
						Dfsa			x	x	x	-	x	x	-
				disjunct // **
					disRoleFlag
						G				x	x	x	x	-	-	-
						Gf				x	x	x	x	-	-	-
						Gs				x	x	x	x	-	-	-
						Gfs				x	x	x	x	-	-	-
						M				x	x	x	x	-	-	-
						Mf				x	x	x	x	-	-	-
						Ms				x	x	x	x	-	-	-
						Mfs				x	x	x	x	-	-	-
						E				x	x	x	x	-	-	-
						Ef				x	x	x	x	-	-	-
						Es				x	x	x	x	-	-	-
						Efs				x	x	x	x	-	-	-
						D				x	x	x	-	-	-	-
						Da				x	x	x	-	-	-	-
						GM				x	x	x	x	-	-	-
						GMf				x	x	x	x	-	-	-
						GMs				x	x	x	x	-	-	-
						GMfs			x	x	x	x	-	-	-
						GE				x	x	x	x	-	-	-
						GEf				x	x	x	x	-	-	-
						GEs				x	x	x	x	-	-	-
						GEfs			x	x	x	x	-	-	-
						GD				x	x	x	x	-	-	-
						GDf				x	x	x	x	-	-	-
						GDs				x	x	x	x	-	-	-
						GDfs			x	x	x	x	-	-	-
						GDa				x	x	x	x	-	-	-
						GDfa			x	x	x	x	-	-	-
						GDsa			x	x	x	x	-	-	-
						GDfsa			x	x	x	x	-	-	-
						GME				x	x	x	x	-	-	-
						GMEf			x	x	x	x	-	-	-
						GMEs			x	x	x	x	-	-	-
						GMEfs			x	x	x	x	-	-	-
						GMD				x	x	x	x	-	-	-
						GMDf			x	x	x	x	-	-	-
						GMDs			x	x	x	x	-	-	-
						GMDfs			x	x	x	x	-	-	-
						GMDa			x	x	x	x	-	-	-
						GMDfa			x	x	x	x	-	-	-
						GMDsa			x	x	x	x	-	-	-
						GMDfsa			x	x	x	x	-	-	-
						ME				x	x	x	x	-	-	-
						MEf				x	x	x	x	-	-	-
						MEs				x	x	x	x	-	-	-
						MEfs			x	x	x	x	-	-	-
						MD				x	x	x	x	-	-	-
						MDf				x	x	x	x	-	-	-
						MDs				x	x	x	x	-	-	-
						MDfs			x	x	x	x	-	-	-
						MDa				x	x	x	x	-	-	-
						MDfa			x	x	x	x	-	-	-
						MDsa			x	x	x	x	-	-	-
						MDfsa			x	x	x	x	-	-	-
						MED				x	x	x	x	-	-	-
						MEDf			x	x	x	x	-	-	-
						MEDs			x	x	x	x	-	-	-
						MEDfs			x	x	x	x	-	-	-
						MEDa			x	x	x	x	-	-	-
						MEDfa			x	x	x	x	-	-	-
						MEDsa			x	x	x	x	-	-	-
						MEDfsa			x	x	x	x	-	-	-
						ED				x	x	x	x	-	-	-
						EDf				x	x	x	x	-	-	-
						EDs				x	x	x	x	-	-	-
						EDfs			x	x	x	x	-	-	-
						EDa				x	x	x	x	-	-	-
						EDfa			x	x	x	x	-	-	-
						EDsa			x	x	x	x	-	-	-
						EDfsa			x	x	x	x	-	-	-
		countries
				// like in 1. version
		autosys
				// like in 1. version

	(*)		project: 	counting _any_ node which fulfills the criteria (eventually among other criterias)
	(**)	disjunct: 	counting _only_ nodes that fulfill _exactly_ the criteria (and no other criterias)

	
**2. version**
as implemented in mr3.js - the 3. version of the MongoDB mapReduce script

	clients						client
	servers						{..}
		total					report
		bridges					{..}
			total				report
			brps				{..}
				email			report
				https			report
				other			report
			brts				{..}
				obfs2			report
				obfs3			report
				obfs23			report
			bres				{..}
				bre				report
		relays					{..}
			total				report	+ pbr
			roles				{..}
				guard			report	+ pbg
				middle			report	+ pbm
				exit			report	+ pbe + pex
				dir				report
			flags				{..}
				notFastStable	report	+ probs
				fast			report	+ probs
				stable			report	+ probs
				fastStable		report	+ probs
				authority		report	+ probs
			mixes				{..}						// TODO
				role*flag*prob	value (80 permutations)		// TODO
	countries
			// like in 1. version
	autosys
			// like in 1. version

where a "report" generally looks like this:

	count						int,			+1 for each relay or bridge
	bwa							int,			sum over all relays and bridges
	bwc							int,			dito
	osv: {
		linux					int,			sum over all relays/bridges with os linux
		darwin					int,												darwin
		freebsd					int,												etc
		windows: 				int,
		other					int
	},
	tsv: {
		v010					int,			sum over all relays/bridges with tsv 010
		v011					int, 												 011
		v012					int, 												 etc
		v020					int,
		v021					int,
		v022					int,
		v023					int,
		v024					int
	}
	// 	also some prob (pbr or pbg or pbm or pbe)
	//	and pex for exit relays
	
	
	


**1. version**  
as implemented in mapreduce.js - the 1. version of my MongoDB mapReduce scripts
and the 2. (unfinished) version

		fieldname: datatype				description
        -------------------				-----------
	{ 	
		_id: string,					
		date: string,
		span: integer,
		clients: {
			total: int,					sum cr+cb
			atBridges: int,				copy cr
			atRelays: int;				copy cb
			cip4: int,					copy cip.[version:v4].count
			cip6: int,					copy cip.[version:v6].count
			cptObfs2: int,				copy
			cptObfs3: int,				copy
			cptOR: int,					copy
			cptUnknown: int				copy
			}
		},
		servers: {
			total: {
				count: int,				+1 for each relay or bridge
				bwa: int,				sum over all relays and bridges
				bwc: int,				dito
				osv: {
					linux: int,			sum over all relays/bridges with os linux
					darwin: int,											darwin
					freebsd: int,											etc
					windows: int,
					other: int
				},
				tsv: {
					v010: int,			sum over all relays/bridges with tsv 010
					v011: int, 												 011
					v012: int, 												 etc
					v020: int, 
					v021: int, 
					v022: int, 
					v023: int, 
					v024: int
				}
			},
			bridges: {
				total: {
					count: int,			+1 for each bridge
					bwa: int,			sum over all bridges
					bwc: int,			dito
					osv: ... ,			osv like above
					tsv: ... ,			tsv like above
				},
				brpEmail: {
					count: int,			+1 for each bridge with brpEmail
					bwa: int,			sum over all bridges with brpEmail
					bwc: int,			dito
					osv: ... ,			osv like above
					tsv: ... ,			tsv like above
				},
				brpHttps: { 
					... 				count, bwa, bwc, osv, tsv like above
				},	
				...						brpOther, breTrue, brtObfs2, brtObfs3, brtObfs23 like above			
			},
			relays: {
				roleAll: {
					total: {
						count: int,
						bwa: int,
						bwc: int,
						osv: ... ,		osv like above
						tsv: ... ,		tsv like above
						pbr: float
					},
					flagNone: {
						...				count, bwa, bwc, osv, tsv, pbr like above
					},
					...					flagFast, flagStable, flagFastStable like above
				},
				roleGuard: {
					...					total, flagNone, flagFast, flagStable, flagFastStable like above
				},
				...						roleMiddle like above
				roleExit: {
					total: {
						count: int,
						bwa: int,
						bwc: int,
						osv: ... ,		osv like above
						tsv: ... ,		tsv like above
						pbe: float,
						exp: {
							e4: int,
							e6: int,
							e8: int,
							e46: int,
							e48: int,
							e68: int,
							e468: int
					},
					...					flagNone, flagFast, flagStable, flagFastStable like above
				...						roleDir (total + authorityTrue) like above
		},
		countries: [
			{
				country: cc,
				cbcc: int,
				crcc: int,
				relay: int,
				guard: int,
				middle: int,
				exit: int,
				dir: int,
				bwa: int,
				bwc: int,
				pbr: float,
				pbg: float,
				pbm: float,
				pbe: float,
				fast:int,
				stable: int,
				osv: ... ,				osv like above
				tsv: ... ,				tsv like above
				pex: ... ,				pex like above
				autosys: [
					{
						as: int
					},
					...					for all AS serving this country
				]
			},
			...							for all countries at this date
		],
		autosys: [ 
			{
				as: int,
				name: string,
				home: string,
				relay: int,
				bwa: int,
				bwc: int,
				fast:int,
				stable: int,
				guard: int,
				middle: int,
				exit: int,
				dir: int,
				pbr: float,
				pbg: float,
				pbm: float,
				pbe: float,
				countries: [
					{
						cc: string,
						relay: int,
						bwa: int,
						bwc: int,
						pbr: float,
						pbg: float,
						pbm: float,
						pbe: float
					},
					...					for all countries served by this AS
				]
			},
			...							for all AS at this date
		]
	}

			