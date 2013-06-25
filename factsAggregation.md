**A schematic example of a document in the facts collection **
(SQL-speak for: row in the facts table)

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
		cpt<OR>: int,					copy
		cpt<??>: int				copy
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
				010: int,			sum over all relays/bridges with tsv 010
				011: int, 												 011
				012: int, 												 etc
				020: int, 
				021: int, 
				022: int, 
				023: int, 
				024: int
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

			