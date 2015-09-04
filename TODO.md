

## INSTANT TODO

	connect to the database
	draw first graph
	decide on web framework


## next steps

* sketches of a visualization





### AGGREGATION

client data

    right now the values reflect usage per day, not per hour
		therefor hourly values are each 24x too high
		daily and monthly values are multiplied on this basis
		so also daily values are 24 times too high too
		monthly analogously
		
		client data should be transformed to hourly values
    for further discussion see
    https://github.com/tomlurge/visionion/issues/5
    
remove simple and excessive versions of loops in 2.3 Countries and 2.4 AS

		some time in the future, when everything is running smoothly

command+control

		update
			make sure newly imported data does not overwrite the whole collection 
			but only the affected documents
			partially update documents with new features
			the functionality seems to be provided by MongoDB, but was never tested...
		
		automated workflow
			when data arrives in a certain directory -> import it
			when new data is imported -> aggregate it
		
		GUI
			web gui for manually controlling import and aggregation
					
default values

		default.md contains some discussion about the right way to define defaults

gestalt + mean + median

	indulge in data science
	make no mistake
	work on gestalt.md

more documentation of pre-import aggregation

	extract from karsten's mails



### INDEXES

	delete index over import
		eg addd

	facts collection needs to be indexed
		but this needs more thinking on the gui
			what visualizations
			what perspectives, controls

	
### DOCUMENTATION
	
	never finished


### VIS

	check D3 ecosystem
		cube	(only realtime?)
		dc
		crossfilter
		queue
	
	
### WEBAPP



### INTERFACE

	what to visualize
	how to interface it

### MISC
