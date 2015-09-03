TODO

	client	
    right now the values reflect usage per day, not per hour
		therefor hourly values are each 24x too high
		daily and monthly values are multiplied on this basis
		so also daily values are 24 times too high too
		monthly analogously
		
		client data should be transformed to hourly values
    for further discussion see
    https://github.com/tomlurge/visionion/issues/5
    

	check if the format of country.autosys is correctly documented 
		(object, not array)
		
	document all settings that have to be made before starting an aggregation run
		imortMR
		factMR
		
	remove simple and excessive versions of loops in 2.3 Countries and 2.4 AS
		some time in the future, when everything is running smoothly