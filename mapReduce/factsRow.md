**A schematic example of a document in the facts collection **
(SQL-speak for: row in the facts table)

	{ 	
		_id: string,
		date: string,
		clients: {
			total: int,
			atBridges: int,
			atRelays: int;
			cip4: int,
			cip6: int,
			cptObfs2: int,
			cptObfs3: int,
			cptOR: int,
			cptOther: int
		},
		servers: {
			total: {
				count: int,
				bwa: int,
				bwc: int,
				osv: {
					linux: int,
					darwin: int,
					freebsd: int,
					windows: int,
					other: int
				},
				tsv: {
					v010: int,
					v011: int, 
					v012: int, 
					v020: int, 
					v021: int, 
					v022: int, 
					v023: int, 
					v024: int
				}
			},
			bridges: {
				total: {
					count: int,
					bwa: int,
					bwc: int,
					osv: ... ,			osv like above
					tsv: ... ,			tsv like above
				},
				brpEmail: {
					count: int,
					bwa: int,
					bwc: int,
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
						pbr: float,
						pex: {
							p4: int,
							p6: int,
							p8: int,
							p46: int,
							p48: int,
							p68: int,
							p468: int
					},
					...					flagNone, flagFast, flagStable, flagFastStable like above
				...						roleDir like above
		},
		countries: [					first establish a list of all countries from countries and relays data
			{							from that list populate the countries array with country objects
				country: cc,			from clients
				cbcc: int,				from clients
				crcc: int,				from clients
				relay: int,				from relays
				guard: int,				from relays
				middle: int,			from relays
				exit: int,				from relays
				dir: int,				from relays
				bwa: int,				from relays
				bwc: int,				from relays
				pbr: float,				from relays
				pbg: float,				from relays
				pbm: float,				from relays
				pbe: float,				from relays
				fast: int,				from relays
				stable: int,			from relays
				osv: ... ,				from relays				osv like above
				tsv: ... ,				from relays				tsv like above
				pex: ... ,				from relays				pex like above
				autosys: [
					{
						as: int,
						count: int
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
				home: cc,
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
	
				