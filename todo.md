TODO

	AGGREGATION
	
		aggregationCA
			BUGS
			in countries
				countries.country.crcc and cbcc always 0
				countries.country.autosys "thisAS"
			in autonomous systems
				eg	{
						"as" : 20115,
						"name" : "",
						"home" : "",
						"relay" : 24,
						"bwa" : 4817220,
						"bwc" : 1325809,
						"fast" : 22,
						"stable" : 14,
						"guard" : 3,
						"middle" : 24,
						"exit" : 1,
						"dir" : 16,
						"pbr" : 0.00049,
						"pbg" : 0.000449,
						"pbm" : 0.0010119999999999997,
						"pbe" : 0.00001,
						"countries" : [
							{
								"country" : "US",
								"relay" : 1,
								"bwa" : 215639,
								"bwc" : 7755,
								"pbr" : 0.000015,
								"pbg" : 0.000031,
								"pbm" : 0.000014,
								"pbe" : 0
							}
						]
					},
				number of relays seems plausible (corresponds to stable, guard etc)
				but in countries 2 things implausible
					only one country
					and only 1 relay in that country
					
		unknown
			we're missing the field unknown. therfor a lot of numbers don't add up
			
		command+control
			update
				make sure newly imported data overwrites not the whole collection but only the affected documents
				same for aggregation
			add more data
				the last 5 years
			automated workflow
				when data arrive sin a certain directory -> import it
				when new data is imported -> aggregate it
			manual control
				gui for manually controlling import and aggregation
				
				
		naming
			replace "total" through "flagAny"
			maybe other inconsistencies
		
		documentation
			is currently a mess
			
		timespans
			really needs to be done
			first check D3 if they do it?
			
			
	INDEXES
	
		facts collection needs to be indexed
		but this needs more thinking on the gui
			what visualizations
			what perspectives, controls
		
		documentation

		
	DOCUMENTATION
		
		split it up in
			intro
			backend
				import
				aggregation
				indexing + querying
			webapp
				node
				angular
				bootstrap
				yeoman
			vis
				D3
				supporting libraries
			setup

			
	WEBAPP
	
		2 days playing with angular
		1 days playing with node
		1 day playing with node and mongo
		1 day playing with angular and node and mongo
		1 day playing with D3 and mongo
		
	
	INTERFACE
	
		what to visualize
		how to interface it
		
	
	VIS
	
		check D3 ecosystem
			cube	(only realtime?)
			dc
			crossfilter
			queue
		