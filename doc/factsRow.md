﻿**	sketch of a new design **

	clients						client
	servers						box
		total					server
		bridges					box
			total				server
			brps				box
				email			server
				https			server
				other			server
			brts				box
				obfs2			server
				obfs3			server
				obfs23			server
			bres				box
				bre				server
		relays					box
			total				server	+ prob
			roles				box
				guard			server	+ prob
				middle			server	+ prob
				exit			server	+ prob + pex
				dir				server
			flags				box
				notFastStable	server
				fast			server
				stable			server
				fastStable		server
				authority		server
			combinations		box						// later...
	countries
	autosys


TODO
	* die meisten a ? a : 0 abfragen sind überflüssig, 
		weil ein nicht-existierendes element "undefined" zurückgibt
		ausnahme: elemente von nicht existierenden objekten - 
			TypeError: Cannot read property 'xyz' of undefined
		deswegen muss nach den äusseren objekten (zb pex) ( = knoten) gefragt werden, 
			aber nicht nach all ihren werten (blättern)
	* die wahrscheinlichkeiten könnten noch in config+for_in loops gepackt werden	
	* ein config array für die grundstruktur (also flags, roles etc) 
		per foreach abfragen und tatsächlich die ganze konstruktion per script generieren
	* exit pex 446ff
	+ 226 ende ? plbl rather?

**	A schematic and annotated example of a document in the facts collection **

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

			