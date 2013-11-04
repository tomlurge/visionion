# visionion

## next steps

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

## TODO

### AGGREGATION
		
	schema.json
	
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

	facts collection needs to be indexed
	but this needs more thinking on the gui
		what visualizations
		what perspectives, controls
	
	documentation
	
### DOCUMENTATION
	
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
		
### WEBAPP

	2 days playing with angular
	1 days playing with node
	1 day playing with node and mongo
	1 day playing with angular and node and mongo
	1 day playing with D3 and mongo

### INTERFACE

	what to visualize
	how to interface it

### VIS

	check D3 ecosystem
		cube	(only realtime?)
		dc
		crossfilter
		queue
	