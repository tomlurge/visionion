

## INSTANT TODO

	docs need more love
	


## next steps

*	aggregation
		solve client data hourly issue
		aggregate one month with server and client data (april 2013?)
		export that month as JSON and CSV (compare sizes)
		change dates in the export and reimport it 
			to fill the database with bogus data for a few years
		aggregate days and months (factsMR.js)

* sketches of a visualization

* more documentation of pre-import aggregation (extract from karsten's mails)

* aggregation of visualization primitives and timespans

* figure out how to control MongoDB via external scripts   
  http://docs.mongodb.org/manual/tutorial/write-scripts-for-the-mongo-shell/
  e.g. prompt:> mongo localhost:27017/tor ~/visionion/aggregation.js
particularily aggregation, indexing and status/control-queries
* Then a prototype visualization of some graph will be the first occassion to connect the database, the web application framework and the visualization library.
* When that's accomplished more experiments need to be conducted to see if it's really possible to have more than one D3 instances on one webpage and how they can interact.
* Then the real work on the visualizations can begin.
* tbc

### AGGREGATION
		
	
	command+control
		update
			make sure newly imported data does not overwrite the whole collection but only the affected documents
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
		but first check D3 and Cube if they do it
	
	test suite
			
### INDEXES

	delete index over addd

	facts collection needs to be indexed
	but this needs more thinking on the gui
		what visualizations
		what perspectives, controls
	
	documentation
	
### DOCUMENTATION
	
	needs refactoring
	
		intro
		gestalt
		backend/model
			import
				schema
			aggregation
				sample fact
			database
				indexing
				querying
		frontend/view
			node
			react
			bootstrap
			webpack
		vis
			D3
			supporting libraries
		setup
			project
			data
			import
			aggregation


### VIS

	check D3 ecosystem
		cube	(only realtime?)
		dc
		crossfilter
		queue
	
	literaturtipps
		zum einstieg
			Interactive Data Visualization for the Web
			http://chimera.labs.oreilly.com/books/1230000000345/index.html
		erste komplexe projekte, mit crossfilter
			developing a d3 edge
			http://backstopmedia.booktype.pro/developing-a-d3js-edge/1-getting-started/
			(auch als pdf)
		für fortgeschrittene
			mastering d3.js (packt) - mit backbone-beispielen
			d3.js cookbook (packt)
			
### WEBAPP

		
	

### INTERFACE

	what to visualize
	how to interface it
