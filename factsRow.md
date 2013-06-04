**A schematic example of a document (SQL-speak: row) in the facts collection**

	{ 	
		_id: string,
		date: string,
		clients: {
			total: int,
			atBridges: int,
			atRelays: int;
			cip4: int,
			cip6: int,
			cpt: {
				obfs2: int,
				obfs3: int,
				or: int,
				obfs23: int,
				obfs2or: int,
				obfs3or: int,
				obfs23or: int,
				other: int
			}
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
					010: int,
					011: int, 
					012: int, 
					020: int, 
					021: int, 
					022: int, 
					023: int, 
					024: int
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
							4: int,
							6: int,
							8: int,
							46: int,
							48: int,
							68: int,
							468: int
					},
					...					flagNone, flagFast, flagStable, flagFastStable like above
				...						roleDir like above
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
						country: cc,
						relays: int,
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
	
				