TODO

	AGGREGATION
	
		date
			muss jetzt weg, wo wir per addd kontrollieren, was aggregiert werden soll	
	
		unknown/noData
			we're missing the field "unknown" for every instance where we have no data. 
			therfor a lot of numbers don't add up and it's not easy to see why (or if) that happens.
			the only exemption seems to be cpt (bridge pluggable transport) but i'll have to check that too
		
			
		command+control
			update
				make sure newly imported data does not overwrite the whole collection but only the affected documents
				same for aggregation
			add more data
				the last 5 years
			automated workflow
				when data arrives in a certain directory -> import it
				when new data is imported -> aggregate it
			manual control
				gui for manually controlling import and aggregation
				
				
		naming
			replace "total" through "flagAny"
			maybe other inconsistencies
		
		documentation
			is currently a mess
				only one import
				type
				span
			factsrow.md
				add descriptions
				add type of timespan aggregation
					sum
					mean
					etc?
			
		timespans
			really needs to be done
			first check D3 if they do it?
		
		test suite
		
			
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
		