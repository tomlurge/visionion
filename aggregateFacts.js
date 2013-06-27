/* 		aggregation steps
	0.	aggregation starts either triggered by the import of new data 
		or periodically, first checking the import collection for newly imported documents
		from the newly imported documents it extracts the dates and for each distinct date starts the following aggregation procedure:
	1.	more than one mapReduce for one import collection
		some mapReduce steps are to complex to put them together in one map/reduce
	A.	they can be run sequentelly and all be reduced to one result { out: { reduce : "tempFacts" }
		http://stackoverflow.com/questions/5681851/mongodb-combine-data-from-multiple-collections-in-to-one-how
		http://tebros.com/2011/07/using-mongodb-mapreduce-to-join-2-collections/
	2.	probably we can then also aggregate from different import tables
		should still be possible with  { out: { reduce : "tempFacts" }
	B.	amounting to the following mapReduce steps:
		* clients				from clients import collection
		* servers
			** 					from bridges import collection
			**					from relays import collection
		* bridges				from bridges import collection
		* relays				from relays import collection
		* countries
			** 					from clients import collection
			**					from relays import collection
		* autonomous systems	
			** 					from clients import collection
			**					from relays import collection
	3.	servers, countries and autonomous sytems need to be aggregated from 2 import collections
		and the resulting aggregates merged into one, like: { out: { merge : "servers/countries/autosys" } }
	4.	to get rid of the "value" object we need one further step
		http://stackoverflow.com/questions/7257989/in-mongodb-mapreduce-how-can-i-flatten-the-values-object
		this is not part of the mapReduce operation
	5.	the resulting fact document has to be added to the facts collection
		overwriting older documents for the same date if need be (e.g. if new data arrived for already existing imports)
		using the update() method
		The update() method can either replace the existing document with the new document or update specific fields in the existing document.
		If the <update> argument contains fields not currently in the document, the update() method adds the new fields to the document.
		If you set the upsert option in the <options> argument to true or 1 and no existing document match the <query> argument, the update() method can insert a new document into the collection.
	
*/

/*
	aggregate countries and autonomous systems
	all countries and all autonomous systems ever mentioned should be aggregated in 2 collections
		aggregatedCountries
		aggregatedAutosys
	each one probably only holding one array of unique items. from these collections the 'countries' and 'autosys' aggregations could be constructed.
	another way to deal with the issue would of course be to only aggregate the countries and autosys per timespan that acctually turned up.
*/

/*
	aggregate unique items
	it would probably be useful to have a special collection called
		uniqueItems
	that contains arrays of all values that ever turned up for a given field, e.g.
		countries
		autonomous systems
		nicknames
		
*/

/*	javascript problems
	adress the field name and it's value seperately
	adress a field in an object in an array
		something like superfield.field[i].subfield
*/



//	the mother ship
//	aggregate facts for one date

aggregateFacts(aDate) {		
	
	
	//	PRELIMINARIES					

	var date = aDate ;
	
	var cleanup = function() {
		db.tempCountries.remove();
		db.tempAutosys.remove();
		db.tempFacts.remove();
	}
	
	//	a little helper to check if an array contains a value
	//	http://stackoverflow.com/questions/237104/array-containsobj-in-javascript
	var contains = function(this.a, obj) {
		for (var i = 0; i < a.length; i++) {
			if (a[i] === obj) {
				return true;
			}
		}
		return false;
	}
	
	
	

	//	//////////////////////////////////////////////////////////////////////////////////////////////////////////	
	// 	EMIT
	//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	// 	clients
	var mapClients = function() {
		var clients = {
			clients.total : this.cr + this.cb ,
			clients.atBridges : this.cb ,
			clients.atRelays : this.cr ,
			clients.cip4 : this.cip,v4 ,
			clients.cip6 : this.cip.v6 ,
			clients.cptObfs2 : this.cpt.obfs2 ,
			clients.cptObfs3 : this.cpt.obfs3 ,
			clients.cpt<OR> : this.cpt.<OR> ,
			clients.cpt<??> : this.cpt.<??>
		}
		emit ( date , clients );
	};

	
	//	servers												in 3 steps, because it has to be gathererd from 2 collections and then aggregated to a 3.					
														/*	the emit fuctions only differ in their KEYs 
															to prevent overwriting intermediate data from different sources, the 2 intermediate emits
															can't use just 'date' as the key. apart from that it's all the same */
	var mapServersRelay = function() {
		var serversRelay = {
			count : 1 ,
			bwa : this.bwa ,
			bwc : this.bwc ,
			osv.linux : (this.osv == "linux") ? 1 : 0 ,
			osv.darwin : (this.osv == "darwin") ? 1 : 0 ,
			osv.freebsd : (this.osv == "freebsd") ? 1 : 0 ,
			osv.windows : (this.osv == "windows") ? 1 : 0 ,
			osv.other : (this.osv == "other") ? 1 : 0 ,
			tsv.010 : (this.tsv == "010") ? 1 : 0 ,
			tsv.011 : (this.tsv == "011") ? 1 : 0 ,
			tsv.012 : (this.tsv == "012") ? 1 : 0 ,
			tsv.020 : (this.tsv == "020") ? 1 : 0 ,
			tsv.021 : (this.tsv == "021") ? 1 : 0 ,
			tsv.022 : (this.tsv == "022") ? 1 : 0 ,
			tsv.023 : (this.tsv == "023") ? 1 : 0 ,
			tsv.024 : (this.tsv == "024") ? 1 : 0
		}
		emit ( {date, "relays"} , serversRelay );			//	combined key '{date, "relays"}'
	};
	
	var mapServersBridge = function() {
		var serversBridge = {
			count : 1 ,
			bwa : this.bwa ,
			bwc : this.bwc ,
			osv.linux : (this.osv == "linux") ? 1 : 0 ,
			osv.darwin : (this.osv == "darwin") ? 1 : 0 ,
			osv.freebsd : (this.osv == "freebsd") ? 1 : 0 ,
			osv.windows : (this.osv == "windows") ? 1 : 0 ,
			osv.other : (this.osv == "other") ? 1 : 0 ,
			tsv.010 : (this.tsv == "010") ? 1 : 0 ,
			tsv.011 : (this.tsv == "011") ? 1 : 0 ,
			tsv.012 : (this.tsv == "012") ? 1 : 0 ,
			tsv.020 : (this.tsv == "020") ? 1 : 0 ,
			tsv.021 : (this.tsv == "021") ? 1 : 0 ,
			tsv.022 : (this.tsv == "022") ? 1 : 0 ,
			tsv.023 : (this.tsv == "023") ? 1 : 0 ,
			tsv.024 : (this.tsv == "024") ? 1 : 0
		}
		emit ( {date, "bridges"} , serversBridge );			//	combined key '{date, "bridges"}'
	};
	
	var mapServers = function() {
		var servers = {
			count : 1 ,
			bwa : this.bwa ,
			bwc : this.bwc ,
			osv.linux : (this.osv == "linux") ? 1 : 0 ,
			osv.darwin : (this.osv == "darwin") ? 1 : 0 ,
			osv.freebsd : (this.osv == "freebsd") ? 1 : 0 ,
			osv.windows : (this.osv == "windows") ? 1 : 0 ,
			osv.other : (this.osv == "other") ? 1 : 0 ,
			tsv.010 : (this.tsv == "010") ? 1 : 0 ,
			tsv.011 : (this.tsv == "011") ? 1 : 0 ,
			tsv.012 : (this.tsv == "012") ? 1 : 0 ,
			tsv.020 : (this.tsv == "020") ? 1 : 0 ,
			tsv.021 : (this.tsv == "021") ? 1 : 0 ,
			tsv.022 : (this.tsv == "022") ? 1 : 0 ,
			tsv.023 : (this.tsv == "023") ? 1 : 0 ,
			tsv.024 : (this.tsv == "024") ? 1 : 0
		}
		emit ( date , servers );							//	ordinary key 'date'
	};

	
	//	bridges	
	var mapBridges = function() {
		var bridges = {
			servers.bridges.total.count : (this.type == "bridge") ? 1 : 0 ,
			servers.bridges.total.bwa : (this.type == "bridge") ? this.bwa : 0 ,
			servers.bridges.total.bwc : (this.type == "bridge") ? this.bwc : 0 ,
			servers.bridges.total.osv.linux : (this.type == "bridge" && this.osv == "linux") ? 1 : 0 ,
			servers.bridges.total.osv.darwin : (this.type == "bridge" && this.osv == "darwin") ? 1 : 0 ,
			servers.bridges.total.osv.freebsd : (this.type == "bridge" && this.osv == "freebsd") ? 1 : 0 ,
			servers.bridges.total.osv.windows : (this.type == "bridge" && this.osv == "windows") ? 1 : 0 ,
			servers.bridges.total.osv.other : (this.type == "bridge" && this.osv == "other") ? 1 : 0 ,
			servers.bridges.total.tsv.010 : (this.type == "bridge" && this.tsv == "010") ? 1 : 0 ,
			servers.bridges.total.tsv.011 : (this.type == "bridge" && this.tsv == "011") ? 1 : 0 ,
			servers.bridges.total.tsv.012 : (this.type == "bridge" && this.tsv == "012") ? 1 : 0 ,
			servers.bridges.total.tsv.020 : (this.type == "bridge" && this.tsv == "020") ? 1 : 0 ,
			servers.bridges.total.tsv.021 : (this.type == "bridge" && this.tsv == "021") ? 1 : 0 ,
			servers.bridges.total.tsv.022 : (this.type == "bridge" && this.tsv == "022") ? 1 : 0 ,
			servers.bridges.total.tsv.023 : (this.type == "bridge" && this.tsv == "023") ? 1 : 0 ,
			servers.bridges.total.tsv.024 : (this.type == "bridge" && this.tsv == "024") ? 1 : 0 ,
			
			servers.bridges.brpEmail.count : (this.brp == "email") ? 1 : 0 ,
			servers.bridges.brpEmail.bwa : (this.brp == "email") ? this.bwa : 0 ,
			servers.bridges.brpEmail.bwc : (this.brp == "email") ? this.bwc : 0 ,
			servers.bridges.brpEmail.osv.linux : (this.brp == "email" && this.osv == "linux") ? 1 : 0 ,
			servers.bridges.brpEmail.osv.darwin : (this.brp == "email" && this.osv == "darwin") ? 1 : 0 ,
			servers.bridges.brpEmail.osv.freebsd : (this.brp == "email" && this.osv == "freebsd") ? 1 : 0 ,
			servers.bridges.brpEmail.osv.windows : (this.brp == "email" && this.osv == "windows") ? 1 : 0 ,
			servers.bridges.brpEmail.osv.other : (this.brp == "email" && this.osv == "other") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.010 : (this.brp == "email" && this.tsv == "010") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.011 : (this.brp == "email" && this.tsv == "011") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.012 : (this.brp == "email" && this.tsv == "012") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.020 : (this.brp == "email" && this.tsv == "020") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.021 : (this.brp == "email" && this.tsv == "021") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.022 : (this.brp == "email" && this.tsv == "022") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.023 : (this.brp == "email" && this.tsv == "023") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.024 : (this.brp == "email" && this.tsv == "024") ? 1 : 0 ,
		
			servers.bridges.brpHttps.count : (this.brp == "https") ? 1 : 0 ,
			servers.bridges.brpHttps.bwa : (this.brp == "https") ? this.bwa : 0 ,
			servers.bridges.brpHttps.bwc : (this.brp == "https") ? this.bwc : 0 ,
			servers.bridges.brpHttps.osv.linux : (this.brp == "https" && this.osv == "linux") ? 1 : 0 ,
			servers.bridges.brpHttps.osv.darwin : (this.brp == "https" && this.osv == "darwin") ? 1 : 0 ,
			servers.bridges.brpHttps.osv.freebsd : (this.brp == "https" && this.osv == "freebsd") ? 1 : 0 ,
			servers.bridges.brpHttps.osv.windows : (this.brp == "https" && this.osv == "windows") ? 1 : 0 ,
			servers.bridges.brpHttps.osv.other : (this.brp == "https" && this.osv == "other") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.010 : (this.brp == "https" && this.tsv == "010") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.011 : (this.brp == "https" && this.tsv == "011") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.012 : (this.brp == "https" && this.tsv == "012") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.020 : (this.brp == "https" && this.tsv == "020") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.021 : (this.brp == "https" && this.tsv == "021") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.022 : (this.brp == "https" && this.tsv == "022") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.023 : (this.brp == "https" && this.tsv == "023") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.024 : (this.brp == "https" && this.tsv == "024") ? 1 : 0 ,
		
			servers.bridges.brpOther.count : (this.brp == "other") ? 1 : 0 ,
			servers.bridges.brpOther.bwa : (this.brp == "other") ? this.bwa : 0 ,
			servers.bridges.brpOther.bwc : (this.brp == "other") ? this.bwc : 0 ,
			servers.bridges.brpOther.osv.linux : (this.brp == "other" && this.osv == "linux") ? 1 : 0 ,
			servers.bridges.brpOther.osv.darwin : (this.brp == "other" && this.osv == "darwin") ? 1 : 0 ,
			servers.bridges.brpOther.osv.freebsd : (this.brp == "other" && this.osv == "freebsd") ? 1 : 0 ,
			servers.bridges.brpOther.osv.windows : (this.brp == "other" && this.osv == "windows") ? 1 : 0 ,
			servers.bridges.brpOther.osv.other : (this.brp == "other" && this.osv == "other") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.010 : (this.brp == "other" && this.tsv == "010") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.011 : (this.brp == "other" && this.tsv == "011") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.012 : (this.brp == "other" && this.tsv == "012") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.020 : (this.brp == "other" && this.tsv == "020") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.021 : (this.brp == "other" && this.tsv == "021") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.022 : (this.brp == "other" && this.tsv == "022") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.023 : (this.brp == "other" && this.tsv == "023") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.024 : (this.brp == "other" && this.tsv == "024") ? 1 : 0 ,
		
			servers.bridges.breTrue.count : (this.bre == "true") ? 1 : 0 ,
			servers.bridges.breTrue.bwa : (this.bre == "true") ? this.bwa : 0 ,
			servers.bridges.breTrue.bwc : (this.bre == "true") ? this.bwc : 0 ,
			servers.bridges.breTrue.osv.linux : (this.bre == "true" && this.osv == "linux") ? 1 : 0 ,
			servers.bridges.breTrue.osv.darwin : (this.bre == "true" && this.osv == "darwin") ? 1 : 0 ,
			servers.bridges.breTrue.osv.freebsd : (this.bre == "true" && this.osv == "freebsd") ? 1 : 0 ,
			servers.bridges.breTrue.osv.windows : (this.bre == "true" && this.osv == "windows") ? 1 : 0 ,
			servers.bridges.breTrue.osv.other : (this.bre == "true" && this.osv == "other") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.010 : (this.bre == "true" && this.tsv == "010") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.011 : (this.bre == "true" && this.tsv == "011") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.012 : (this.bre == "true" && this.tsv == "012") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.020 : (this.bre == "true" && this.tsv == "020") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.021 : (this.bre == "true" && this.tsv == "021") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.022 : (this.bre == "true" && this.tsv == "022") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.023 : (this.bre == "true" && this.tsv == "023") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.024 : (this.bre == "true" && this.tsv == "024") ? 1 : 0 ,
		
			servers.bridges.brtObfs2.count : (this.brt == [obfs2]) ? 1 : 0 ,
			servers.bridges.brtObfs2.bwa : (this.brt == [obfs2]) ? this.bwa : 0 ,
			servers.bridges.brtObfs2.bwc : (this.brt == [obfs2]) ? this.bwc : 0 ,
			servers.bridges.brtObfs2.osv.linux : (this.brt == [obfs2] && this.osv == "linux") ? 1 : 0 ,
			servers.bridges.brtObfs2.osv.darwin : (this.brt == [obfs2] && this.osv == "darwin") ? 1 : 0 ,
			servers.bridges.brtObfs2.osv.freebsd : (this.brt == [obfs2] && this.osv == "freebsd") ? 1 : 0 ,
			servers.bridges.brtObfs2.osv.windows : (this.brt == [obfs2] && this.osv == "windows") ? 1 : 0 ,
			servers.bridges.brtObfs2.osv.other : (this.brt == [obfs2] && this.osv == "other") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.010 : (this.brt == [obfs2] && this.tsv == "010") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.011 : (this.brt == [obfs2] && this.tsv == "011") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.012 : (this.brt == [obfs2] && this.tsv == "012") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.020 : (this.brt == [obfs2] && this.tsv == "020") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.021 : (this.brt == [obfs2] && this.tsv == "021") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.022 : (this.brt == [obfs2] && this.tsv == "022") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.023 : (this.brt == [obfs2] && this.tsv == "023") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.024 : (this.brt == [obfs2] && this.tsv == "024") ? 1 : 0 ,
			
			servers.bridges.brtObfs3.count : (this.brt == [obfs3]) ? 1 : 0 ,
			servers.bridges.brtObfs3.bwa : (this.brt == [obfs3]) ? this.bwa : 0 ,
			servers.bridges.brtObfs3.bwc : (this.brt == [obfs3]) ? this.bwc : 0 ,
			servers.bridges.brtObfs3.osv.linux : (this.brt == [obfs3] && this.osv == "linux") ? 1 : 0 ,
			servers.bridges.brtObfs3.osv.darwin : (this.brt == [obfs3] && this.osv == "darwin") ? 1 : 0 ,
			servers.bridges.brtObfs3.osv.freebsd : (this.brt == [obfs3] && this.osv == "freebsd") ? 1 : 0 ,
			servers.bridges.brtObfs3.osv.windows : (this.brt == [obfs3] && this.osv == "windows") ? 1 : 0 ,
			servers.bridges.brtObfs3.osv.other : (this.brt == [obfs3] && this.osv == "other") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.010 : (this.brt == [obfs3] && this.tsv == "010") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.011 : (this.brt == [obfs3] && this.tsv == "011") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.012 : (this.brt == [obfs3] && this.tsv == "012") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.020 : (this.brt == [obfs3] && this.tsv == "020") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.021 : (this.brt == [obfs3] && this.tsv == "021") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.022 : (this.brt == [obfs3] && this.tsv == "022") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.023 : (this.brt == [obfs3] && this.tsv == "023") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.024 : (this.brt == [obfs3] && this.tsv == "024") ? 1 : 0 ,
			
			servers.bridges.brtObfs23.count : (this.brt == [obfs23, obfs3]) ? 1 : 0 ,
			servers.bridges.brtObfs23.bwa : (this.brt == [obfs23, obfs3]) ? this.bwa : 0 ,
			servers.bridges.brtObfs23.bwc : (this.brt == [obfs23, obfs3]) ? this.bwc : 0 ,
			servers.bridges.brtObfs23.osv.linux : (this.brt == [obfs23, obfs3] && this.osv == "linux") ? 1 : 0 ,
			servers.bridges.brtObfs23.osv.darwin : (this.brt == [obfs23, obfs3] && this.osv == "darwin") ? 1 : 0 ,
			servers.bridges.brtObfs23.osv.freebsd : (this.brt == [obfs23, obfs3] && this.osv == "freebsd") ? 1 : 0 ,
			servers.bridges.brtObfs23.osv.windows : (this.brt == [obfs23, obfs3] && this.osv == "windows") ? 1 : 0 ,
			servers.bridges.brtObfs23.osv.other : (this.brt == [obfs23, obfs3] && this.osv == "other") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.010 : (this.brt == [obfs23, obfs3] && this.tsv == "010") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.011 : (this.brt == [obfs23, obfs3] && this.tsv == "011") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.012 : (this.brt == [obfs23, obfs3] && this.tsv == "012") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.020 : (this.brt == [obfs23, obfs3] && this.tsv == "020") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.021 : (this.brt == [obfs23, obfs3] && this.tsv == "021") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.022 : (this.brt == [obfs23, obfs3] && this.tsv == "022") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.023 : (this.brt == [obfs23, obfs3] && this.tsv == "023") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.024 : (this.brt == [obfs23, obfs3] && this.tsv == "024") ? 1 : 0
		}
		emit ( date , bridges );
	};
	

	//	relays
	var mapRelays = function() {
		var relays = {
			servers.relays.roleAll.total.count : 1 ,
			servers.relays.roleAll.total.bwa : this.bwa ,
			servers.relays.roleAll.total.bwc : this.bwc ,
			servers.relays.roleAll.total.osv.linux : (this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleAll.total.osv.darwin : (this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleAll.total.osv.freebsd : (this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleAll.total.osv.windows : (this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleAll.total.osv.other : (this.osv == "other") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.010 : (this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.011 : (this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.012 : (this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.020 : (this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.021 : (this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.022 : (this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.023 : (this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.024 : (this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleAll.total.pbr : this.pbr ,
			
			servers.relays.roleAll.flagNone.count : (!contains(this.flag, fast) && !contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleAll.flagNone.bwa : (!contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleAll.flagNone.bwc : (!contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleAll.flagNone.osv.linux : (!contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.osv.darwin : (!contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.osv.freebsd : (!contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.osv.windows : (!contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.osv.other : (!contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.010 : (!contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.011 : (!contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.012 : (!contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.020 : (!contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.021 : (!contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.022 : (!contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.023 : (!contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.024 : (!contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.pbr : (!contains(this.flag, fast) && !contains(this.flag,stable)) ? this.pbr : 0.0 ,
			
			servers.relays.roleAll.flagStable.count : (!contains(this.flag, fast) && contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleAll.flagStable.bwa : (!contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleAll.flagStable.bwc : (!contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleAll.flagStable.osv.linux : (!contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.osv.darwin : (!contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.osv.freebsd : (!contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.osv.windows : (!contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.osv.other : (!contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.010 : (!contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.011 : (!contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.012 : (!contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.020 : (!contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.021 : (!contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.022 : (!contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.023 : (!contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.024 : (!contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.pbr : (!contains(this.flag, fast) && contains(this.flag,stable)) ? this.pbr : 0.0 ,
			
			servers.relays.roleAll.flagFast.count : (contains(this.flag, fast) && !contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleAll.flagFast.bwa : (contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleAll.flagFast.bwc : (contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleAll.flagFast.osv.linux : (contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.osv.darwin : (contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.osv.freebsd : (contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.osv.windows : (contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.osv.other : (contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.010 : (contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.011 : (contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.012 : (contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.020 : (contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.021 : (contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.022 : (contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.023 : (contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.024 : (contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.pbr : (contains(this.flag, fast) && !contains(this.flag,stable)) ? this.pbr : 0.0 ,
	
			servers.relays.roleAll.flagFastStable.count : (contains(this.flag, fast) && contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.bwa : (contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleAll.flagFastStable.bwc : (contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleAll.flagFastStable.osv.linux : (contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.osv.darwin : (contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.osv.freebsd : (contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.osv.windows : (contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.osv.other : (contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.010 : (contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.011 : (contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.012 : (contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.020 : (contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.021 : (contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.022 : (contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.023 : (contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.024 : (contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.pbr : (contains(this.flag, fast) && contains(this.flag,stable)) ? this.pbr : 0.0 ,			
			
			// GUARD
			servers.relays.roleGuard.total.count : (this.role == "guard") ? 1 : 0 ,
			servers.relays.roleGuard.total.bwa : (this.role == "guard") ? this.bwa : 0 ,
			servers.relays.roleGuard.total.bwc : (this.role == "guard") ? this.bwc : 0 ,
			servers.relays.roleGuard.total.osv.linux : (this.role == "guard" && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleGuard.total.osv.darwin : (this.role == "guard" && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleGuard.total.osv.freebsd : (this.role == "guard" && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleGuard.total.osv.windows : (this.role == "guard" && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleGuard.total.osv.other : (this.role == "guard" && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.010 : (this.role == "guard" && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.011 : (this.role == "guard" && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.012 : (this.role == "guard" && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.020 : (this.role == "guard" && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.021 : (this.role == "guard" && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.022 : (this.role == "guard" && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.023 : (this.role == "guard" && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.024 : (this.role == "guard" && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleGuard.total.pbg : (this.role == "guard") ? this.pbg : 0.0 ,		
			
			servers.relays.roleGuard.flagNone.count : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.bwa : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleGuard.flagNone.bwc : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleGuard.flagNone.osv.linux : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.osv.darwin : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.osv.freebsd : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.osv.windows : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.osv.other : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.010 : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.011 : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.012 : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.020 : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.021 : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.022 : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.023 : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.024 : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.pbg : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? this.pbg : 0.0 ,
			
			servers.relays.roleGuard.flagStable.count : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.bwa : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleGuard.flagStable.bwc : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleGuard.flagStable.osv.linux : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.osv.darwin : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.osv.freebsd : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.osv.windows : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.osv.other : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.010 : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.011 : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.012 : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.020 : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.021 : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.022 : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.023 : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.024 : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.pbg : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable)) ? this.pbg : 0.0 ,			
			
			servers.relays.roleGuard.flagFast.count : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.bwa : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleGuard.flagFast.bwc : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleGuard.flagFast.osv.linux : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.osv.darwin : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.osv.freebsd : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.osv.windows : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.osv.other : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.010 : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.011 : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.012 : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.020 : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.021 : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.022 : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.023 : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.024 : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.pbg : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable)) ? this.pbg : 0.0 ,
	
			servers.relays.roleGuard.flagFastStable.count : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.bwa : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleGuard.flagFastStable.bwc : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleGuard.flagFastStable.osv.linux : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.osv.darwin : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.osv.freebsd : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.osv.windows : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.osv.other : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.010 : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.011 : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.012 : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.020 : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.021 : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.022 : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.023 : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.024 : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.pbg : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable)) ? this.pbg : 0.0 ,
			
			// MIDDLE
			servers.relays.roleMiddle.total.count : (this.role == "middle") ? 1 : 0 ,
			servers.relays.roleMiddle.total.bwa : (this.role == "middle") ? this.bwa : 0 ,
			servers.relays.roleMiddle.total.bwc : (this.role == "middle") ? this.bwc : 0 ,
			servers.relays.roleMiddle.total.osv.linux : (this.role == "middle" && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleMiddle.total.osv.darwin : (this.role == "middle" && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleMiddle.total.osv.freebsd : (this.role == "middle" && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleMiddle.total.osv.windows : (this.role == "middle" && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleMiddle.total.osv.other : (this.role == "middle" && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.010 : (this.role == "middle" && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.011 : (this.role == "middle" && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.012 : (this.role == "middle" && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.020 : (this.role == "middle" && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.021 : (this.role == "middle" && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.022 : (this.role == "middle" && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.023 : (this.role == "middle" && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.024 : (this.role == "middle" && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleMiddle.total.pbm : (this.role == "middle") ? this.pbm : 0.0 ,
					
			servers.relays.roleMiddle.flagNone.count : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.bwa : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleMiddle.flagNone.bwc : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleMiddle.flagNone.osv.linux : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.osv.darwin : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.osv.freebsd : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.osv.windows : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.osv.other : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.010 : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.011 : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.012 : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.020 : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.021 : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.022 : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.023 : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.024 : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.pbm : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? this.pbm : 0.0 ,
			
			servers.relays.roleMiddle.flagStable.count : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.bwa : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleMiddle.flagStable.bwc : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleMiddle.flagStable.osv.linux : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.osv.darwin : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.osv.freebsd : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.osv.windows : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.osv.other : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.010 : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.011 : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.012 : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.020 : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.021 : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.022 : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.023 : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.024 : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.pbm : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable)) ? this.pbm : 0.0 ,
						
			servers.relays.roleMiddle.flagFast.count : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.bwa : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleMiddle.flagFast.bwc : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleMiddle.flagFast.osv.linux : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.osv.darwin : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.osv.freebsd : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.osv.windows : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.osv.other : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.010 : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.011 : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.012 : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.020 : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.021 : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.022 : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.023 : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.024 : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.pbm : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable)) ? this.pbm : 0.0 ,
	
			servers.relays.roleMiddle.flagFastStable.count : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.bwa : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleMiddle.flagFastStable.bwc : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleMiddle.flagFastStable.osv.linux : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.osv.darwin : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.osv.freebsd : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.osv.windows : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.osv.other : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.010 : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.011 : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.012 : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.020 : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.021 : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.022 : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.023 : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.024 : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.pbm : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable)) ? this.pbm : 0.0 ,
			
			// EXIT
			servers.relays.roleExit.total.count : (this.role == "exit") ? 1 : 0 ,
			servers.relays.roleExit.total.bwa : (this.role == "exit") ? this.bwa : 0 ,
			servers.relays.roleExit.total.bwc : (this.role == "exit") ? this.bwc : 0 ,
			servers.relays.roleExit.total.osv.linux : (this.role == "exit" && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleExit.total.osv.darwin : (this.role == "exit" && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleExit.total.osv.freebsd : (this.role == "exit" && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleExit.total.osv.windows : (this.role == "exit" && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleExit.total.osv.other : (this.role == "exit" && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.010 : (this.role == "exit" && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.011 : (this.role == "exit" && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.012 : (this.role == "exit" && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.020 : (this.role == "exit" && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.021 : (this.role == "exit" && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.022 : (this.role == "exit" && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.023 : (this.role == "exit" && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.024 : (this.role == "exit" && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleExit.total.pex.4 : (this.role == "exit" && this.pex == [443]) ? 1 : 0 ,
			servers.relays.roleExit.total.pex.6 : (this.role == "exit" && this.pex == [6667]) ? 1 : 0 ,
			servers.relays.roleExit.total.pex.8 : (this.role == "exit" && this.pex == [80]) ? 1 : 0 ,
			servers.relays.roleExit.total.pex.46 : (this.role == "exit" && this.pex == [443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.total.pex.48 : (this.role == "exit" && this.pex == [80, 443]) ? 1 : 0 ,
			servers.relays.roleExit.total.pex.68 : (this.role == "exit" && this.pex == [80, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.total.pex.468 : (this.role == "exit" && this.pex == [80, 443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.total.pbe : (this.role == "exit") ? this.pbe : 0.0 ,
						
			servers.relays.roleExit.flagNone.count : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.bwa : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleExit.flagNone.bwc : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleExit.flagNone.osv.linux : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.osv.darwin : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.osv.freebsd : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.osv.windows : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.osv.other : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.010 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.011 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.012 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.020 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.021 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.022 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.023 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.024 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pex.4 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [443]) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pex.6 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pex.8 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [80]) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pex.46 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pex.48 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [80, 443]) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pex.68 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [80, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pex.468 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [80, 443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pbe : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? this.pbe : 0.0 ,
			
			servers.relays.roleExit.flagFast.count : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.bwa : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleExit.flagFast.bwc : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleExit.flagFast.osv.linux : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.osv.darwin : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.osv.freebsd : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.osv.windows : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.osv.other : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.010 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.011 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.012 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.020 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.021 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.022 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.023 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.024 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pex.4 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [443]) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pex.6 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pex.8 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [80]) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pex.46 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pex.48 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [80, 443]) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pex.68 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [80, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pex.468 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [80, 443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pbe : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable)) ? this.pbe : 0.0 ,
			
			servers.relays.roleExit.flagStable.count : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.bwa : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleExit.flagStable.bwc : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleExit.flagStable.osv.linux : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.osv.darwin : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.osv.freebsd : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.osv.windows : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.osv.other : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.010 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.011 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.012 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.020 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.021 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.022 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.023 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.024 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pex.4 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [443]) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pex.6 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pex.8 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [80]) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pex.46 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pex.48 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [80, 443]) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pex.68 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [80, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pex.468 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [80, 443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pbe : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable)) ? this.pbe : 0.0 ,
			
			servers.relays.roleExit.flagFastStable.count : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.bwa : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleExit.flagFastStable.bwc : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleExit.flagFastStable.osv.linux : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.osv.darwin : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.osv.freebsd : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.osv.windows : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.osv.other : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.010 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.011 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.012 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.020 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.021 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.022 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.023 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.024 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pex.4 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [443]) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pex.6 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pex.8 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [80]) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pex.46 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pex.48 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [80, 443]) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pex.68 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [80, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pex.468 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [80, 443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pbe : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable)) ? this.pbe : 0.0 ,		
			
			// DIR
			servers.relays.roleDir.total.count : (this.role == "dir") ? 1 : 0 ,
			servers.relays.roleDir.total.bwa : (this.role == "dir") ? this.bwa : 0 ,
			servers.relays.roleDir.total.bwc : (this.role == "dir") ? this.bwc : 0 ,
			servers.relays.roleDir.total.osv.linux : (this.role == "dir" && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleDir.total.osv.darwin : (this.role == "dir" && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleDir.total.osv.freebsd : (this.role == "dir" && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleDir.total.osv.windows : (this.role == "dir" && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleDir.total.osv.other : (this.role == "dir" && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.010 : (this.role == "dir" && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.011 : (this.role == "dir" && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.012 : (this.role == "dir" && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.020 : (this.role == "dir" && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.021 : (this.role == "dir" && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.022 : (this.role == "dir" && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.023 : (this.role == "dir" && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.024 : (this.role == "dir" && this.tsv == "024") ? 1 : 0 ,		
			
			servers.relays.roleDir.authorityTrue.count : (this.role == "dir" && this.flag == "Authority") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.bwa : (this.role == "dir" && this.flag == "Authority") ? this.bwa : 0 ,
			servers.relays.roleDir.authorityTrue.bwc : (this.role == "dir" && this.flag == "Authority") ? this.bwc : 0 ,
			servers.relays.roleDir.authorityTrue.osv.linux : (this.role == "dir" && this.flag == "Authority" && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.osv.darwin : (this.role == "dir" && this.flag == "Authority" && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.osv.freebsd : (this.role == "dir" && this.flag == "Authority" && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.osv.windows : (this.role == "dir" && this.flag == "Authority" && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.osv.other : (this.role == "dir" && this.flag == "Authority" && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.010 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.011 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.012 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.020 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.021 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.022 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.023 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.024 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "024") ? 1 : 0
		}	
		emit ( date , relays );
	};
	

	//	countries											in 4 steps, because it has to be gathererd from 2 collections, one of them with 2 arrays
														/*	. aggregate countriesClients.cbcc into a collection tempCountries with key country
															. aggregate countriesClients.crcc into the same collection tempCountries with key country
															. aggregate countriesRelay into the same collection tempCountries with key country
															. aggregate all documents from that tempCountries collection into an array of objects 
															  in one field into the facts collection with key date
															*/																				
	var mapCountriesClientCR = function() {
		var country =  {
			cc: "" ,
			cbcc: 0 ,
			crcc: 0 ,
			relay: 0 ,
			guard: 0 ,
			middle: 0 ,
			exit: 0 ,
			dir: 0 ,
			bwa: 0 ,
			bwc: 0 ,
			pbr: 0.0 ,
			pbg: 0.0 ,
			pbm: 0.0 ,
			pbe: 0.0 ,
			fast: 0 ,
			stable: 0 ,
			osv.linux : 0 ,
			osv.darwin : 0 ,
			osv.freebsd : 0 ,
			osv.windows : 0 ,
			osv.other : 0 ,
			tsv.010 : 0 ,
			tsv.011 : 0 ,
			tsv.012 : 0 ,
			tsv.020 : 0 ,
			tsv.021 : 0 ,
			tsv.022 : 0 ,
			tsv.023 : 0 ,
			tsv.024 : 0 ,
			pex.4 : 0 ,
			pex.6 : 0 ,
			pex.8 : 0 ,
			pex.46 : 0 ,
			pex.48 : 0 ,
			pex.68 : 0 ,
			pex.468 : 0 ,
			as: "" 
		};
		for(field in this.crcc) {
			country.cc = field;
			country.crcc = this[field];
			emit ( this.cc , country );						//	emit is part of the loop - see: http://cookbook.mongodb.org/patterns/pivot/
		}
	};		
																	
	var mapCountriesClientCB = function() {
		var country =  {
			cc: "" ,
			cbcc: 0 ,
			crcc: 0 ,
			relay: 0 ,
			guard: 0 ,
			middle: 0 ,
			exit: 0 ,
			dir: 0 ,
			bwa: 0 ,
			bwc: 0 ,
			pbr: 0.0 ,
			pbg: 0.0 ,
			pbm: 0.0 ,
			pbe: 0.0 ,
			fast: 0 ,
			stable: 0 ,
			osv.linux : 0 ,
			osv.darwin : 0 ,
			osv.freebsd : 0 ,
			osv.windows : 0 ,
			osv.other : 0 ,
			tsv.010 : 0 ,
			tsv.011 : 0 ,
			tsv.012 : 0 ,
			tsv.020 : 0 ,
			tsv.021 : 0 ,
			tsv.022 : 0 ,
			tsv.023 : 0 ,
			tsv.024 : 0 ,
			pex.4 : 0 ,
			pex.6 : 0 ,
			pex.8 : 0 ,
			pex.46 : 0 ,
			pex.48 : 0 ,
			pex.68 : 0 ,
			pex.468 : 0 ,
			as: ""
		};
		for(field in this.cbcc) {
			country.cc = field;
			country.cbcc = this[field];
			emit ( this.cc , country );						//	emit is part of the loop - see: http://cookbook.mongodb.org/patterns/pivot/
		}
	};
	
	var mapCountriesRelay = function() {
		var country = {
			cc: this.cc ,
			cbcc: 0 ,
			crcc: 0 ,
			relay: 1 ,
			guard: (this.role == "guard") ? 1 : 0 ,
			middle: (this.role == "middle") ? 1 : 0 ,
			exit: (this.role == "exit") ? 1 : 0 ,
			dir: (this.role == "dir") ? 1 : 0 ,
			bwa: this.bwa ,
			bwc: this.bwc ,
			pbr: this.pbr ,
			pbg: (this.role == "guard") ? this.pbg : 0 ,
			pbm: (this.role == "middle") ? this.pbm : 0 ,
			pbe: (this.role == "exit") ? this.pbe : 0 ,
			fast: contains(this.flag, fast) ? 1 : 0 ,
			stable: contains(this.flag, stable) ? 1 : 0 ,
			osv.linux : (this.osv == "linux") ? 1 : 0 ,
			osv.darwin : (this.osv == "darwin") ? 1 : 0 ,
			osv.freebsd : (this.osv == "freebsd") ? 1 : 0 ,
			osv.windows : (this.osv == "windows") ? 1 : 0 ,
			osv.other : (this.osv == "other") ? 1 : 0 ,
			tsv.010 : (this.tsv == "010") ? 1 : 0 ,
			tsv.011 : (this.tsv == "011") ? 1 : 0 ,
			tsv.012 : (this.tsv == "012") ? 1 : 0 ,
			tsv.020 : (this.tsv == "020") ? 1 : 0 ,
			tsv.021 : (this.tsv == "021") ? 1 : 0 ,
			tsv.022 : (this.tsv == "022") ? 1 : 0 ,
			tsv.023 : (this.tsv == "023") ? 1 : 0 ,
			tsv.024 : (this.tsv == "024") ? 1 : 0 ,
			pex.4 : (this.role == "exit" && this.pex == [443]) ? 1 : 0 ,
			pex.6 : (this.role == "exit" && this.pex == [6667]) ? 1 : 0 ,
			pex.8 : (this.role == "exit" && this.pex == [80]) ? 1 : 0 ,
			pex.46 : (this.role == "exit" && this.pex == [443, 6667]) ? 1 : 0 ,
			pex.48 : (this.role == "exit" && this.pex == [80, 443]) ? 1 : 0 ,
			pex.68 : (this.role == "exit" && this.pex == [80, 6667]) ? 1 : 0 ,
			pex.468 : (this.role == "exit" && this.pex == [80, 443, 6667]) ? 1 : 0 ,
			as: this.as										//	walking through the import table, which contains only
															//	one as per entry
		}
		emit ( this.cc , country );
	};

	var mapCountries = function() {							//	putting it all together
		var country = {
			cc: this.cc ,
			cbcc: this.cbcc ,
			crcc: this.crcc ,
			relay: this.relay ,
			guard: this.guard ,
			middle: this.middle ,
			exit: this.exit ,
			dir: this.dir ,
			bwa: this.bwa ,
			bwc: this.bwc ,
			pbr: this.pbr ,
			pbg: this.pbg ,
			pbm: this.pbm ,
			pbe: this.pbe ,
			fast: this.fast ,
			stable: this.stable ,
			osv.linux : this.osv.linux ,
			osv.darwin : this.osv.darwin ,
			osv.freebsd : this.osv.freebsd ,
			osv.windows : this.osv.windows ,
			osv.other : this.osv.other ,
			tsv.010 : this.tsv.010 ,
			tsv.011 : this.tsv.011 ,
			tsv.012 : this.tsv.012 ,
			tsv.020 : this.tsv.020 ,
			tsv.021 : this.tsv.021 ,
			tsv.022 : this.tsv.022 ,
			tsv.023 : this.tsv.023 ,
			tsv.024 : this.tsv.024 ,
			pex.4 : this.pex.4 ,
			pex.6 : this.pex.6 ,
			pex.8 : this.pex.8 ,
			pex.46 : this.pex.46 ,
			pex.48 : this.pex.48 ,
			pex.68 : this.pex.68 ,
			pex.468 : this.pex.468 ,
			autosys: this.autosys							//	already an array of as:#
		}
		emit ( date , country );
	};


	//	autonomous systems 					

	var mapAutosys = function() {
		var autosys = {
			as : this.as ,
			name : "" ,
			hone : "",
			relay : 1 ,
			bwa : this.bwa ,
			bwc : this.bwc ,
			fast : (contains(this.flag, fast)) ? 1 : 0 ,
			stable : (contains(this.flag, stable)) ? 1 : 0 ,
			guard : (this.role == "guard") ? 1 : 0 ,
			middle : (this.role == "middle") ? 1 : 0 ,
			exit : (this.role == "exit") ? 1 : 0 ,
			dir : (this.role == "dir") ? 1 : 0 ,
			pbr: this.pbr ,
			pbg : (this.role == "guard") ? this.pbg : 0 ,
			pbm : (this.role == "middle") ? this.pbm : 0 ,
			pbe : (this.role == "exit") ? this.pbe : 0 ,
			countries.cc : this.cc ,
			countries.relay : 1 ,
			countries.bwa : this.bwa ,
			countries.bwc : this.bwc ,
			countries.pbr : this.pbr ,
			countries.pbg : (this.role == "guard") ? this.pbg : 0 ,
			countries.pbm : (this.role == "middle") ? this.pbm : 0 ,
			countries.pbe : (this.role == "exit") ? this.pbe : 0
		}
		autosys.name = function(this.as) { return ""; };	//	TODO	lookup name for AS	
		autosys.home = function(this.as) { return ""; };	//	TODO	lookup jurisdiction for AS
		emit ( date , autosys );
	};
	
	
	
	//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	REDUCE
	//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	var reduceClients = function ( key, values ) {
		var v;
		var fact = {	
			clients.total : 0 ,
			clients.atBridges : 0 ,
			clients.atRelays : 0 ,
			clients.cip4 : 0 ,
			clients.cip6 : 0 ,
			clients.cptObfs2 : 0 ,
			clients.cptObfs3 : 0 ,
			clients.cpt<OR> : 0 ,
			clients.cpt<??> : 0
		};
		values.forEach( function(v) { 
			fact.clients.total += v.clients.total;
			fact.clients.atBridges += v.clients.atBridges ;
			fact.clients.atRelays += v.clients.atRelays ;
			fact.clients.cip4 += v.clients.cip4 ;
			fact.clients.cip6 += v.clients.cip6 ;
			fact.clients.cptObfs2 += v.clients.cptObfs2 ;
			fact.clients.cptObfs3 += v.clients.cptObfs3 ;
			fact.clients.cpt<OR> += v.clients.cpt<OR> ;
			fact.clients.cpt<??> += v.clients.cpt<??> 
		}
		return fact;
	};
	
	//	reduceServersRelays and reduceServersBridges are exact duplicates and could be reduced to one, 
	//	but for the sake of readability i'm leaving them alone for now
	var reduceServersRelays = function ( key, values ) {	
		var v;
		var temp = {
			count : 0 ,
			bwa : 0 ,
			bwc : 0 ,
			osv.linux : 0 ,
			osv.darwin : 0 ,
			osv.freebsd : 0 ,
			osv.windows : 0 ,
			osv.other : 0 ,
			tsv.010 : 0 ,
			tsv.011 : 0 ,
			tsv.012 : 0 ,
			tsv.020 : 0 ,
			tsv.021 : 0 ,
			tsv.022 : 0 ,
			tsv.023 : 0 ,
			tsv.024 : 0
		};
		values.forEach( function(v) {
			temp.count += 1 ;
			temp.bwa += v.bwa ;
			temp.bwc += v.bwc ;
			temp.osv.linux += v.osv.linux ;
			temp.osv.darwin += v.osv.darwin ;
			temp.osv.freebsd += v.osv.freebsd ;
			temp.osv.windows += v.osv.windows ;
			temp.osv.other += v.osv.other ;
			temp.tsv.010 += v.tsv.010 ;
			temp.tsv.011 += v.tsv.011 ;
			temp.tsv.012 += v.tsv.012 ;
			temp.tsv.020 += v.tsv.020 ;
			temp.tsv.021 += v.tsv.021 ;
			temp.tsv.022 += v.tsv.022 ;
			temp.tsv.023 += v.tsv.023 ;
			temp.tsv.024 += v.tsv.024 
		}
		return temp;
	};
	
	var reduceServersBridges = function ( key, values ) {
		var v;
		var temp = {	
			count : 0 ,
			bwa : 0 ,
			bwc : 0 ,
			osv.linux : 0 ,
			osv.darwin : 0 ,
			osv.freebsd : 0 ,
			osv.windows : 0 ,
			osv.other : 0 ,
			tsv.010 : 0 ,
			tsv.011 : 0 ,
			tsv.012 : 0 ,
			tsv.020 : 0 ,
			tsv.021 : 0 ,
			tsv.022 : 0 ,
			tsv.023 : 0 ,
			tsv.024 : 0									
		};
		values.forEach( function(v) {
			temp.count += 1 ;	
			temp.bwa += v.bwa ;
			temp.bwc += v.bwc ;
			temp.osv.linux += v.osv.linux ;
			temp.osv.darwin += v.osv.darwin ;
			temp.osv.freebsd += v.osv.freebsd ;
			temp.osv.windows += v.osv.windows ;
			temp.osv.other += v.osv.other ;
			temp.tsv.010 += v.tsv.010 ;
			temp.tsv.011 += v.tsv.011 ;
			temp.tsv.012 += v.tsv.012 ;
			temp.tsv.020 += v.tsv.020 ;
			temp.tsv.021 += v.tsv.021 ;
			temp.tsv.022 += v.tsv.022 ;
			temp.tsv.023 += v.tsv.023 ;
			temp.tsv.024 += v.tsv.024 
		}
		return temp;
	};
	
	//	aggregating serverRelays and serverBridges into the combined servers fact
	var reduceServers = function ( key, values ) {
		var v;
		var fact = {	
			count : 0 ,
			bwa : 0 ,
			bwc : 0 ,
			osv.linux : 0 ,
			osv.darwin : 0 ,
			osv.freebsd : 0 ,
			osv.windows : 0 ,
			osv.other : 0 ,
			tsv.010 : 0 ,
			tsv.011 : 0 ,
			tsv.012 : 0 ,
			tsv.020 : 0 ,
			tsv.021 : 0 ,
			tsv.022 : 0 ,
			tsv.023 : 0 ,
			tsv.024 : 0									
		};
		values.forEach( function(v) {
			fact.count += v.count ;							//	while reduceServerRelays and reduceServerBridges count the raw data 1 by 1, 
															//	this final steps adds up results
			fact.bwa += v.bwa ;
			fact.bwc += v.bwc ;
			fact.osv.linux += v.osv.linux ;
			fact.osv.darwin += v.osv.darwin ;
			fact.osv.freebsd += v.osv.freebsd ;
			fact.osv.windows += v.osv.windows ;
			fact.osv.other += v.osv.other ;
			fact.tsv.010 += v.tsv.010 ;
			fact.tsv.011 += v.tsv.011 ;
			fact.tsv.012 += v.tsv.012 ;
			fact.tsv.020 += v.tsv.020 ;
			fact.tsv.021 += v.tsv.021 ;
			fact.tsv.022 += v.tsv.022 ;
			fact.tsv.023 += v.tsv.023 ;
			fact.tsv.024 += v.tsv.024 
		}
		return fact;
	};
	
	var reduceBridges = function ( key, values ) {
		var v;
		var fact = {										
			servers.bridges.total.count : 0 ;
			servers.bridges.total.bwa : 0 ;
			servers.bridges.total.bwc : 0 ;
			servers.bridges.total.osv.linux : 0 ;
			servers.bridges.total.osv.darwin : 0 ;
			servers.bridges.total.osv.freebsd : 0 ;
			servers.bridges.total.osv.windows : 0 ;
			servers.bridges.total.osv.other : 0 ;
			servers.bridges.total.tsv.010 : 0 ;
			servers.bridges.total.tsv.011 : 0 ;
			servers.bridges.total.tsv.012 : 0 ;
			servers.bridges.total.tsv.020 : 0 ;
			servers.bridges.total.tsv.021 : 0 ;
			servers.bridges.total.tsv.022 : 0 ;
			servers.bridges.total.tsv.023 : 0 ;
			servers.bridges.total.tsv.024 : 0 ;
			
			servers.bridges.brpEmail.count : 0 ;
			servers.bridges.brpEmail.bwa : 0 ;
			servers.bridges.brpEmail.bwc : 0 ;
			servers.bridges.brpEmail.osv.linux : 0 ;
			servers.bridges.brpEmail.osv.darwin : 0 ;
			servers.bridges.brpEmail.osv.freebsd : 0 ;
			servers.bridges.brpEmail.osv.windows : 0 ;
			servers.bridges.brpEmail.osv.other : 0 ;
			servers.bridges.brpEmail.tsv.010 : 0 ;
			servers.bridges.brpEmail.tsv.011 : 0 ;
			servers.bridges.brpEmail.tsv.012 : 0 ;
			servers.bridges.brpEmail.tsv.020 : 0 ;
			servers.bridges.brpEmail.tsv.021 : 0 ;
			servers.bridges.brpEmail.tsv.022 : 0 ;
			servers.bridges.brpEmail.tsv.023 : 0 ;
			servers.bridges.brpEmail.tsv.024 : 0 ;
		
			servers.bridges.brpHttps.count : 0 ;
			servers.bridges.brpHttps.bwa : 0 ;
			servers.bridges.brpHttps.bwc : 0 ;
			servers.bridges.brpHttps.osv.linux : 0 ;
			servers.bridges.brpHttps.osv.darwin : 0 ;
			servers.bridges.brpHttps.osv.freebsd : 0 ;
			servers.bridges.brpHttps.osv.windows : 0 ;
			servers.bridges.brpHttps.osv.other : 0 ;
			servers.bridges.brpHttps.tsv.010 : 0 ;
			servers.bridges.brpHttps.tsv.011 : 0 ;
			servers.bridges.brpHttps.tsv.012 : 0 ;
			servers.bridges.brpHttps.tsv.020 : 0 ;
			servers.bridges.brpHttps.tsv.021 : 0 ;
			servers.bridges.brpHttps.tsv.022 : 0 ;
			servers.bridges.brpHttps.tsv.023 : 0 ;
			servers.bridges.brpHttps.tsv.024 : 0 ;
		
			servers.bridges.brpOther.count : 0 ;
			servers.bridges.brpOther.bwa : 0 ;
			servers.bridges.brpOther.bwc : 0 ;
			servers.bridges.brpOther.osv.linux : 0 ;
			servers.bridges.brpOther.osv.darwin : 0 ;
			servers.bridges.brpOther.osv.freebsd : 0 ;
			servers.bridges.brpOther.osv.windows : 0 ;
			servers.bridges.brpOther.osv.other : 0 ;
			servers.bridges.brpOther.tsv.010 : 0 ;
			servers.bridges.brpOther.tsv.011 : 0 ;
			servers.bridges.brpOther.tsv.012 : 0 ;
			servers.bridges.brpOther.tsv.020 : 0 ;
			servers.bridges.brpOther.tsv.021 : 0 ;
			servers.bridges.brpOther.tsv.022 : 0 ;
			servers.bridges.brpOther.tsv.023 : 0 ;
			servers.bridges.brpOther.tsv.024 : 0 ;
		
			servers.bridges.breTrue.count : 0 ;
			servers.bridges.breTrue.bwa : 0 ;
			servers.bridges.breTrue.bwc : 0 ;
			servers.bridges.breTrue.osv.linux : 0 ;
			servers.bridges.breTrue.osv.darwin : 0 ;
			servers.bridges.breTrue.osv.freebsd : 0 ;
			servers.bridges.breTrue.osv.windows : 0 ;
			servers.bridges.breTrue.osv.other : 0 ;
			servers.bridges.breTrue.tsv.010 : 0 ;
			servers.bridges.breTrue.tsv.011 : 0 ;
			servers.bridges.breTrue.tsv.012 : 0 ;
			servers.bridges.breTrue.tsv.020 : 0 ;
			servers.bridges.breTrue.tsv.021 : 0 ;
			servers.bridges.breTrue.tsv.022 : 0 ;
			servers.bridges.breTrue.tsv.023 : 0 ;
			servers.bridges.breTrue.tsv.024 : 0 ;
		
			servers.bridges.brtObfs2.count : 0 ;
			servers.bridges.brtObfs2.bwa : 0 ;
			servers.bridges.brtObfs2.bwc : 0 ;
			servers.bridges.brtObfs2.osv.linux : 0 ;
			servers.bridges.brtObfs2.osv.darwin : 0 ;
			servers.bridges.brtObfs2.osv.freebsd : 0 ;
			servers.bridges.brtObfs2.osv.windows : 0 ;
			servers.bridges.brtObfs2.osv.other : 0 ;
			servers.bridges.brtObfs2.tsv.010 : 0 ;
			servers.bridges.brtObfs2.tsv.011 : 0 ;
			servers.bridges.brtObfs2.tsv.012 : 0 ;
			servers.bridges.brtObfs2.tsv.020 : 0 ;
			servers.bridges.brtObfs2.tsv.021 : 0 ;
			servers.bridges.brtObfs2.tsv.022 : 0 ;
			servers.bridges.brtObfs2.tsv.023 : 0 ;
			servers.bridges.brtObfs2.tsv.024 : 0 ;
			
			servers.bridges.brtObfs3.count : 0 ;
			servers.bridges.brtObfs3.bwa : 0 ;
			servers.bridges.brtObfs3.bwc : 0 ;
			servers.bridges.brtObfs3.osv.linux : 0 ;
			servers.bridges.brtObfs3.osv.darwin : 0 ;
			servers.bridges.brtObfs3.osv.freebsd : 0 ;
			servers.bridges.brtObfs3.osv.windows : 0 ;
			servers.bridges.brtObfs3.osv.other : 0 ;
			servers.bridges.brtObfs3.tsv.010 : 0 ;
			servers.bridges.brtObfs3.tsv.011 : 0 ;
			servers.bridges.brtObfs3.tsv.012 : 0 ;
			servers.bridges.brtObfs3.tsv.020 : 0 ;
			servers.bridges.brtObfs3.tsv.021 : 0 ;
			servers.bridges.brtObfs3.tsv.022 : 0 ;
			servers.bridges.brtObfs3.tsv.023 : 0 ;
			servers.bridges.brtObfs3.tsv.024 : 0 ;
			
			servers.bridges.brtObfs23.count : 0 ;
			servers.bridges.brtObfs23.bwa : 0 ;
			servers.bridges.brtObfs23.bwc : 0 ;
			servers.bridges.brtObfs23.osv.linux : 0 ;
			servers.bridges.brtObfs23.osv.darwin : 0 ;
			servers.bridges.brtObfs23.osv.freebsd : 0 ;
			servers.bridges.brtObfs23.osv.windows : 0 ;
			servers.bridges.brtObfs23.osv.other : 0 ;
			servers.bridges.brtObfs23.tsv.010 : 0 ;
			servers.bridges.brtObfs23.tsv.011 : 0 ;
			servers.bridges.brtObfs23.tsv.012 : 0 ;
			servers.bridges.brtObfs23.tsv.020 : 0 ;
			servers.bridges.brtObfs23.tsv.021 : 0 ;
			servers.bridges.brtObfs23.tsv.022 : 0 ;
			servers.bridges.brtObfs23.tsv.023 : 0 ;
			servers.bridges.brtObfs23.tsv.024 : 0
		}
		values.forEach( function(v) {
			fact.servers.bridges.total.count += v.servers.bridges.total.count ;
			fact.servers.bridges.total.bwa += v.servers.bridges.total.bwa ;
			fact.servers.bridges.total.bwc += v.servers.bridges.total.bwc ;
			fact.servers.bridges.total.osv.linux += v.servers.bridges.total.osv.linux ;
			fact.servers.bridges.total.osv.darwin += v.servers.bridges.total.osv.darwin ;
			fact.servers.bridges.total.osv.freebsd += v.servers.bridges.total.osv.freebsd ;
			fact.servers.bridges.total.osv.windows += v.servers.bridges.total.osv.windows ;
			fact.servers.bridges.total.osv.other += v.servers.bridges.total.osv.other ;
			fact.servers.bridges.total.tsv.010 += v.servers.bridges.total.tsv.010 ;
			fact.servers.bridges.total.tsv.011 += v.servers.bridges.total.tsv.011 ;
			fact.servers.bridges.total.tsv.012 += v.servers.bridges.total.tsv.012 ;
			fact.servers.bridges.total.tsv.020 += v.servers.bridges.total.tsv.020 ;
			fact.servers.bridges.total.tsv.021 += v.servers.bridges.total.tsv.021 ;
			fact.servers.bridges.total.tsv.022 += v.servers.bridges.total.tsv.022 ;
			fact.servers.bridges.total.tsv.023 += v.servers.bridges.total.tsv.023 ;
			fact.servers.bridges.total.tsv.024 += v.servers.bridges.total.tsv.024 ; 
			
			fact.servers.bridges.brpEmail.count += v.servers.bridges.brpEmail.count ;
			fact.servers.bridges.brpEmail.bwa += v.servers.bridges.brpEmail.bwa ;
			fact.servers.bridges.brpEmail.bwc += v.servers.bridges.brpEmail.bwc ;
			fact.servers.bridges.brpEmail.osv.linux += v.servers.bridges.brpEmail.osv.linux ;
			fact.servers.bridges.brpEmail.osv.darwin += v.servers.bridges.brpEmail.osv.darwin ;
			fact.servers.bridges.brpEmail.osv.freebsd += v.servers.bridges.brpEmail.osv.freebsd ;
			fact.servers.bridges.brpEmail.osv.windows += v.servers.bridges.brpEmail.osv.windows ;
			fact.servers.bridges.brpEmail.osv.other += v.servers.bridges.brpEmail.osv.other ;
			fact.servers.bridges.brpEmail.tsv.010 += v.servers.bridges.brpEmail.tsv.010 ;
			fact.servers.bridges.brpEmail.tsv.011 += v.servers.bridges.brpEmail.tsv.011 ;
			fact.servers.bridges.brpEmail.tsv.012 += v.servers.bridges.brpEmail.tsv.012 ;
			fact.servers.bridges.brpEmail.tsv.020 += v.servers.bridges.brpEmail.tsv.020 ;
			fact.servers.bridges.brpEmail.tsv.021 += v.servers.bridges.brpEmail.tsv.021 ;
			fact.servers.bridges.brpEmail.tsv.022 += v.servers.bridges.brpEmail.tsv.022 ;
			fact.servers.bridges.brpEmail.tsv.023 += v.servers.bridges.brpEmail.tsv.023 ;
			fact.servers.bridges.brpEmail.tsv.024 += v.servers.bridges.brpEmail.tsv.024 ; 
		
			fact.servers.bridges.brpHttps.count += v.servers.bridges.brpHttps.count ;
			fact.servers.bridges.brpHttps.bwa += v.servers.bridges.brpHttps.bwa ;
			fact.servers.bridges.brpHttps.bwc += v.servers.bridges.brpHttps.bwc ;
			fact.servers.bridges.brpHttps.osv.linux += v.servers.bridges.brpHttps.osv.linux ;
			fact.servers.bridges.brpHttps.osv.darwin += v.servers.bridges.brpHttps.osv.darwin ;
			fact.servers.bridges.brpHttps.osv.freebsd += v.servers.bridges.brpHttps.osv.freebsd ;
			fact.servers.bridges.brpHttps.osv.windows += v.servers.bridges.brpHttps.osv.windows ;
			fact.servers.bridges.brpHttps.osv.other += v.servers.bridges.brpHttps.osv.other ;
			fact.servers.bridges.brpHttps.tsv.010 += v.servers.bridges.brpHttps.tsv.010 ;
			fact.servers.bridges.brpHttps.tsv.011 += v.servers.bridges.brpHttps.tsv.011 ;
			fact.servers.bridges.brpHttps.tsv.012 += v.servers.bridges.brpHttps.tsv.012 ;
			fact.servers.bridges.brpHttps.tsv.020 += v.servers.bridges.brpHttps.tsv.020 ;
			fact.servers.bridges.brpHttps.tsv.021 += v.servers.bridges.brpHttps.tsv.021 ;
			fact.servers.bridges.brpHttps.tsv.022 += v.servers.bridges.brpHttps.tsv.022 ;
			fact.servers.bridges.brpHttps.tsv.023 += v.servers.bridges.brpHttps.tsv.023 ;
			fact.servers.bridges.brpHttps.tsv.024 += v.servers.bridges.brpHttps.tsv.024 ; 
		
			fact.servers.bridges.brpOther.count += v.servers.bridges.brpOther.count ;
			fact.servers.bridges.brpOther.bwa += v.servers.bridges.brpOther.bwa ;
			fact.servers.bridges.brpOther.bwc += v.servers.bridges.brpOther.bwc ;
			fact.servers.bridges.brpOther.osv.linux += v.servers.bridges.brpOther.osv.linux ;
			fact.servers.bridges.brpOther.osv.darwin += v.servers.bridges.brpOther.osv.darwin ;
			fact.servers.bridges.brpOther.osv.freebsd += v.servers.bridges.brpOther.osv.freebsd ;
			fact.servers.bridges.brpOther.osv.windows += v.servers.bridges.brpOther.osv.windows ;
			fact.servers.bridges.brpOther.osv.other += v.servers.bridges.brpOther.osv.other ;
			fact.servers.bridges.brpOther.tsv.010 += v.servers.bridges.brpOther.tsv.010 ;
			fact.servers.bridges.brpOther.tsv.011 += v.servers.bridges.brpOther.tsv.011 ;
			fact.servers.bridges.brpOther.tsv.012 += v.servers.bridges.brpOther.tsv.012 ;
			fact.servers.bridges.brpOther.tsv.020 += v.servers.bridges.brpOther.tsv.020 ;
			fact.servers.bridges.brpOther.tsv.021 += v.servers.bridges.brpOther.tsv.021 ;
			fact.servers.bridges.brpOther.tsv.022 += v.servers.bridges.brpOther.tsv.022 ;
			fact.servers.bridges.brpOther.tsv.023 += v.servers.bridges.brpOther.tsv.023 ;
			fact.servers.bridges.brpOther.tsv.024 += v.servers.bridges.brpOther.tsv.024 ; 
			
			fact.servers.bridges.breTrue.count += v.servers.bridges.breTrue.count ;
			fact.servers.bridges.breTrue.bwa += v.servers.bridges.breTrue.bwa ;
			fact.servers.bridges.breTrue.bwc += v.servers.bridges.breTrue.bwc ;
			fact.servers.bridges.breTrue.osv.linux += v.servers.bridges.breTrue.osv.linux ;
			fact.servers.bridges.breTrue.osv.darwin += v.servers.bridges.breTrue.osv.darwin ;
			fact.servers.bridges.breTrue.osv.freebsd += v.servers.bridges.breTrue.osv.freebsd ;
			fact.servers.bridges.breTrue.osv.windows += v.servers.bridges.breTrue.osv.windows ;
			fact.servers.bridges.breTrue.osv.other += v.servers.bridges.breTrue.osv.other ;
			fact.servers.bridges.breTrue.tsv.010 += v.servers.bridges.breTrue.tsv.010 ;
			fact.servers.bridges.breTrue.tsv.011 += v.servers.bridges.breTrue.tsv.011 ;
			fact.servers.bridges.breTrue.tsv.012 += v.servers.bridges.breTrue.tsv.012 ;
			fact.servers.bridges.breTrue.tsv.020 += v.servers.bridges.breTrue.tsv.020 ;
			fact.servers.bridges.breTrue.tsv.021 += v.servers.bridges.breTrue.tsv.021 ;
			fact.servers.bridges.breTrue.tsv.022 += v.servers.bridges.breTrue.tsv.022 ;
			fact.servers.bridges.breTrue.tsv.023 += v.servers.bridges.breTrue.tsv.023 ;
			fact.servers.bridges.breTrue.tsv.024 += v.servers.bridges.breTrue.tsv.024 ; 
		
			fact.servers.bridges.brtObfs2.count += v.servers.bridges.brtObfs2.count ;
			fact.servers.bridges.brtObfs2.bwa += v.servers.bridges.brtObfs2.bwa ;
			fact.servers.bridges.brtObfs2.bwc += v.servers.bridges.brtObfs2.bwc ;
			fact.servers.bridges.brtObfs2.osv.linux += v.servers.bridges.brtObfs2.osv.linux ;
			fact.servers.bridges.brtObfs2.osv.darwin += v.servers.bridges.brtObfs2.osv.darwin ;
			fact.servers.bridges.brtObfs2.osv.freebsd += v.servers.bridges.brtObfs2.osv.freebsd ;
			fact.servers.bridges.brtObfs2.osv.windows += v.servers.bridges.brtObfs2.osv.windows ;
			fact.servers.bridges.brtObfs2.osv.other += v.servers.bridges.brtObfs2.osv.other ;
			fact.servers.bridges.brtObfs2.tsv.010 += v.servers.bridges.brtObfs2.tsv.010 ;
			fact.servers.bridges.brtObfs2.tsv.011 += v.servers.bridges.brtObfs2.tsv.011 ;
			fact.servers.bridges.brtObfs2.tsv.012 += v.servers.bridges.brtObfs2.tsv.012 ;
			fact.servers.bridges.brtObfs2.tsv.020 += v.servers.bridges.brtObfs2.tsv.020 ;
			fact.servers.bridges.brtObfs2.tsv.021 += v.servers.bridges.brtObfs2.tsv.021 ;
			fact.servers.bridges.brtObfs2.tsv.022 += v.servers.bridges.brtObfs2.tsv.022 ;
			fact.servers.bridges.brtObfs2.tsv.023 += v.servers.bridges.brtObfs2.tsv.023 ;
			fact.servers.bridges.brtObfs2.tsv.024 += v.servers.bridges.brtObfs2.tsv.024 ; 
			
			fact.servers.bridges.brtObfs3.count += v.servers.bridges.brtObfs3.count ;
			fact.servers.bridges.brtObfs3.bwa += v.servers.bridges.brtObfs3.bwa ;
			fact.servers.bridges.brtObfs3.bwc += v.servers.bridges.brtObfs3.bwc ;
			fact.servers.bridges.brtObfs3.osv.linux += v.servers.bridges.brtObfs3.osv.linux ;
			fact.servers.bridges.brtObfs3.osv.darwin += v.servers.bridges.brtObfs3.osv.darwin ;
			fact.servers.bridges.brtObfs3.osv.freebsd += v.servers.bridges.brtObfs3.osv.freebsd ;
			fact.servers.bridges.brtObfs3.osv.windows += v.servers.bridges.brtObfs3.osv.windows ;
			fact.servers.bridges.brtObfs3.osv.other += v.servers.bridges.brtObfs3.osv.other ;
			fact.servers.bridges.brtObfs3.tsv.010 += v.servers.bridges.brtObfs3.tsv.010 ;
			fact.servers.bridges.brtObfs3.tsv.011 += v.servers.bridges.brtObfs3.tsv.011 ;
			fact.servers.bridges.brtObfs3.tsv.012 += v.servers.bridges.brtObfs3.tsv.012 ;
			fact.servers.bridges.brtObfs3.tsv.020 += v.servers.bridges.brtObfs3.tsv.020 ;
			fact.servers.bridges.brtObfs3.tsv.021 += v.servers.bridges.brtObfs3.tsv.021 ;
			fact.servers.bridges.brtObfs3.tsv.022 += v.servers.bridges.brtObfs3.tsv.022 ;
			fact.servers.bridges.brtObfs3.tsv.023 += v.servers.bridges.brtObfs3.tsv.023 ;
			fact.servers.bridges.brtObfs3.tsv.024 += v.servers.bridges.brtObfs3.tsv.024 ; 
			
			fact.servers.bridges.brtObfs23.count += v.servers.bridges.brtObfs23.count ;
			fact.servers.bridges.brtObfs23.bwa += v.servers.bridges.brtObfs23.bwa ;
			fact.servers.bridges.brtObfs23.bwc += v.servers.bridges.brtObfs23.bwc ;
			fact.servers.bridges.brtObfs23.osv.linux += v.servers.bridges.brtObfs23.osv.linux ;
			fact.servers.bridges.brtObfs23.osv.darwin += v.servers.bridges.brtObfs23.osv.darwin ;
			fact.servers.bridges.brtObfs23.osv.freebsd += v.servers.bridges.brtObfs23.osv.freebsd ;
			fact.servers.bridges.brtObfs23.osv.windows += v.servers.bridges.brtObfs23.osv.windows ;
			fact.servers.bridges.brtObfs23.osv.other += v.servers.bridges.brtObfs23.osv.other ;
			fact.servers.bridges.brtObfs23.tsv.010 += v.servers.bridges.brtObfs23.tsv.010 ;
			fact.servers.bridges.brtObfs23.tsv.011 += v.servers.bridges.brtObfs23.tsv.011 ;
			fact.servers.bridges.brtObfs23.tsv.012 += v.servers.bridges.brtObfs23.tsv.012 ;
			fact.servers.bridges.brtObfs23.tsv.020 += v.servers.bridges.brtObfs23.tsv.020 ;
			fact.servers.bridges.brtObfs23.tsv.021 += v.servers.bridges.brtObfs23.tsv.021 ;
			fact.servers.bridges.brtObfs23.tsv.022 += v.servers.bridges.brtObfs23.tsv.022 ;
			fact.servers.bridges.brtObfs23.tsv.023 += v.servers.bridges.brtObfs23.tsv.023 ;
			fact.servers.bridges.brtObfs23.tsv.024 += v.servers.bridges.brtObfs23.tsv.024 ; 
		}
		return fact;
	};
	
	var reduceRelays = function ( key, values ) {
		var v;
		var fact = {
			servers.relays.roleAll.total.count : 0 ;
			servers.relays.roleAll.total.bwa : 0 ;
			servers.relays.roleAll.total.bwc : 0 ;
			servers.relays.roleAll.total.osv.linux : 0 ;
			servers.relays.roleAll.total.osv.darwin : 0 ;
			servers.relays.roleAll.total.osv.freebsd : 0 ;
			servers.relays.roleAll.total.osv.windows : 0 ;
			servers.relays.roleAll.total.osv.other : 0 ;
			servers.relays.roleAll.total.tsv.010 : 0 ;
			servers.relays.roleAll.total.tsv.011 : 0 ;
			servers.relays.roleAll.total.tsv.012 : 0 ;
			servers.relays.roleAll.total.tsv.020 : 0 ;
			servers.relays.roleAll.total.tsv.021 : 0 ;
			servers.relays.roleAll.total.tsv.022 : 0 ;
			servers.relays.roleAll.total.tsv.023 : 0 ;
			servers.relays.roleAll.total.tsv.024 : 0 ;
			servers.relays.roleAll.total.pbr : 0 ;
			
			servers.relays.roleAll.flagNone.count : 0 ;
			servers.relays.roleAll.flagNone.bwa : 0 ;
			servers.relays.roleAll.flagNone.bwc : 0 ;
			servers.relays.roleAll.flagNone.osv.linux : 0 ;
			servers.relays.roleAll.flagNone.osv.darwin : 0 ;
			servers.relays.roleAll.flagNone.osv.freebsd : 0 ;
			servers.relays.roleAll.flagNone.osv.windows : 0 ;
			servers.relays.roleAll.flagNone.osv.other : 0 ;
			servers.relays.roleAll.flagNone.tsv.010 : 0 ;
			servers.relays.roleAll.flagNone.tsv.011 : 0 ;
			servers.relays.roleAll.flagNone.tsv.012 : 0 ;
			servers.relays.roleAll.flagNone.tsv.020 : 0 ;
			servers.relays.roleAll.flagNone.tsv.021 : 0 ;
			servers.relays.roleAll.flagNone.tsv.022 : 0 ;
			servers.relays.roleAll.flagNone.tsv.023 : 0 ;
			servers.relays.roleAll.flagNone.tsv.024 : 0 ;
			servers.relays.roleAll.flagNone.pbr : 0 ;
			
			servers.relays.roleAll.flagStable.count : 0 ;
			servers.relays.roleAll.flagStable.bwa : 0 ;
			servers.relays.roleAll.flagStable.bwc : 0 ;
			servers.relays.roleAll.flagStable.osv.linux : 0 ;
			servers.relays.roleAll.flagStable.osv.darwin : 0 ;
			servers.relays.roleAll.flagStable.osv.freebsd : 0 ;
			servers.relays.roleAll.flagStable.osv.windows : 0 ;
			servers.relays.roleAll.flagStable.osv.other : 0 ;
			servers.relays.roleAll.flagStable.tsv.010 : 0 ;
			servers.relays.roleAll.flagStable.tsv.011 : 0 ;
			servers.relays.roleAll.flagStable.tsv.012 : 0 ;
			servers.relays.roleAll.flagStable.tsv.020 : 0 ;
			servers.relays.roleAll.flagStable.tsv.021 : 0 ;
			servers.relays.roleAll.flagStable.tsv.022 : 0 ;
			servers.relays.roleAll.flagStable.tsv.023 : 0 ;
			servers.relays.roleAll.flagStable.tsv.024 : 0 ;
			servers.relays.roleAll.flagStable.pbr : 0 ;
			
			servers.relays.roleAll.flagFast.count : 0 ;
			servers.relays.roleAll.flagFast.bwa : 0 ;
			servers.relays.roleAll.flagFast.bwc : 0 ;
			servers.relays.roleAll.flagFast.osv.linux : 0 ;
			servers.relays.roleAll.flagFast.osv.darwin : 0 ;
			servers.relays.roleAll.flagFast.osv.freebsd : 0 ;
			servers.relays.roleAll.flagFast.osv.windows : 0 ;
			servers.relays.roleAll.flagFast.osv.other : 0 ;
			servers.relays.roleAll.flagFast.tsv.010 : 0 ;
			servers.relays.roleAll.flagFast.tsv.011 : 0 ;
			servers.relays.roleAll.flagFast.tsv.012 : 0 ;
			servers.relays.roleAll.flagFast.tsv.020 : 0 ;
			servers.relays.roleAll.flagFast.tsv.021 : 0 ;
			servers.relays.roleAll.flagFast.tsv.022 : 0 ;
			servers.relays.roleAll.flagFast.tsv.023 : 0 ;
			servers.relays.roleAll.flagFast.tsv.024 : 0 ;
			servers.relays.roleAll.flagFast.pbr : 0 ;
	
			servers.relays.roleAll.flagFastStable.count : 0 ;
			servers.relays.roleAll.flagFastStable.bwa : 0 ;
			servers.relays.roleAll.flagFastStable.bwc : 0 ;
			servers.relays.roleAll.flagFastStable.osv.linux : 0 ;
			servers.relays.roleAll.flagFastStable.osv.darwin : 0 ;
			servers.relays.roleAll.flagFastStable.osv.freebsd : 0 ;
			servers.relays.roleAll.flagFastStable.osv.windows : 0 ;
			servers.relays.roleAll.flagFastStable.osv.other : 0 ;
			servers.relays.roleAll.flagFastStable.tsv.010 : 0 ;
			servers.relays.roleAll.flagFastStable.tsv.011 : 0 ;
			servers.relays.roleAll.flagFastStable.tsv.012 : 0 ;
			servers.relays.roleAll.flagFastStable.tsv.020 : 0 ;
			servers.relays.roleAll.flagFastStable.tsv.021 : 0 ;
			servers.relays.roleAll.flagFastStable.tsv.022 : 0 ;
			servers.relays.roleAll.flagFastStable.tsv.023 : 0 ;
			servers.relays.roleAll.flagFastStable.tsv.024 : 0 ;
			servers.relays.roleAll.flagFastStable.pbr : 0 ;			
			
			// GUARD
			servers.relays.roleGuard.total.count : 0 ;
			servers.relays.roleGuard.total.bwa : 0 ;
			servers.relays.roleGuard.total.bwc : 0 ;
			servers.relays.roleGuard.total.osv.linux : 0 ;
			servers.relays.roleGuard.total.osv.darwin : 0 ;
			servers.relays.roleGuard.total.osv.freebsd : 0 ;
			servers.relays.roleGuard.total.osv.windows : 0 ;
			servers.relays.roleGuard.total.osv.other : 0 ;
			servers.relays.roleGuard.total.tsv.010 : 0 ;
			servers.relays.roleGuard.total.tsv.011 : 0 ;
			servers.relays.roleGuard.total.tsv.012 : 0 ;
			servers.relays.roleGuard.total.tsv.020 : 0 ;
			servers.relays.roleGuard.total.tsv.021 : 0 ;
			servers.relays.roleGuard.total.tsv.022 : 0 ;
			servers.relays.roleGuard.total.tsv.023 : 0 ;
			servers.relays.roleGuard.total.tsv.024 : 0 ;
			servers.relays.roleGuard.total.pbg : 0 ;		
			
			servers.relays.roleGuard.flagNone.count : 0 ;
			servers.relays.roleGuard.flagNone.bwa : 0 ;
			servers.relays.roleGuard.flagNone.bwc : 0 ;
			servers.relays.roleGuard.flagNone.osv.linux : 0 ;
			servers.relays.roleGuard.flagNone.osv.darwin : 0 ;
			servers.relays.roleGuard.flagNone.osv.freebsd : 0 ;
			servers.relays.roleGuard.flagNone.osv.windows : 0 ;
			servers.relays.roleGuard.flagNone.osv.other : 0 ;
			servers.relays.roleGuard.flagNone.tsv.010 : 0 ;
			servers.relays.roleGuard.flagNone.tsv.011 : 0 ;
			servers.relays.roleGuard.flagNone.tsv.012 : 0 ;
			servers.relays.roleGuard.flagNone.tsv.020 : 0 ;
			servers.relays.roleGuard.flagNone.tsv.021 : 0 ;
			servers.relays.roleGuard.flagNone.tsv.022 : 0 ;
			servers.relays.roleGuard.flagNone.tsv.023 : 0 ;
			servers.relays.roleGuard.flagNone.tsv.024 : 0 ;
			servers.relays.roleGuard.flagNone.pbg : 0 ;
			
			servers.relays.roleGuard.flagStable.count : 0 ;
			servers.relays.roleGuard.flagStable.bwa : 0 ;
			servers.relays.roleGuard.flagStable.bwc : 0 ;
			servers.relays.roleGuard.flagStable.osv.linux : 0 ;
			servers.relays.roleGuard.flagStable.osv.darwin : 0 ;
			servers.relays.roleGuard.flagStable.osv.freebsd : 0 ;
			servers.relays.roleGuard.flagStable.osv.windows : 0 ;
			servers.relays.roleGuard.flagStable.osv.other : 0 ;
			servers.relays.roleGuard.flagStable.tsv.010 : 0 ;
			servers.relays.roleGuard.flagStable.tsv.011 : 0 ;
			servers.relays.roleGuard.flagStable.tsv.012 : 0 ;
			servers.relays.roleGuard.flagStable.tsv.020 : 0 ;
			servers.relays.roleGuard.flagStable.tsv.021 : 0 ;
			servers.relays.roleGuard.flagStable.tsv.022 : 0 ;
			servers.relays.roleGuard.flagStable.tsv.023 : 0 ;
			servers.relays.roleGuard.flagStable.tsv.024 : 0 ;
			servers.relays.roleGuard.flagStable.pbg : 0 ;			
			
			servers.relays.roleGuard.flagFast.count : 0 ;
			servers.relays.roleGuard.flagFast.bwa : 0 ;
			servers.relays.roleGuard.flagFast.bwc : 0 ;
			servers.relays.roleGuard.flagFast.osv.linux : 0 ;
			servers.relays.roleGuard.flagFast.osv.darwin : 0 ;
			servers.relays.roleGuard.flagFast.osv.freebsd : 0 ;
			servers.relays.roleGuard.flagFast.osv.windows : 0 ;
			servers.relays.roleGuard.flagFast.osv.other : 0 ;
			servers.relays.roleGuard.flagFast.tsv.010 : 0 ;
			servers.relays.roleGuard.flagFast.tsv.011 : 0 ;
			servers.relays.roleGuard.flagFast.tsv.012 : 0 ;
			servers.relays.roleGuard.flagFast.tsv.020 : 0 ;
			servers.relays.roleGuard.flagFast.tsv.021 : 0 ;
			servers.relays.roleGuard.flagFast.tsv.022 : 0 ;
			servers.relays.roleGuard.flagFast.tsv.023 : 0 ;
			servers.relays.roleGuard.flagFast.tsv.024 : 0 ;
			servers.relays.roleGuard.flagFast.pbg : 0 ;
	
			servers.relays.roleGuard.flagFastStable.count : 0 ;
			servers.relays.roleGuard.flagFastStable.bwa : 0 ;
			servers.relays.roleGuard.flagFastStable.bwc : 0 ;
			servers.relays.roleGuard.flagFastStable.osv.linux : 0 ;
			servers.relays.roleGuard.flagFastStable.osv.darwin : 0 ;
			servers.relays.roleGuard.flagFastStable.osv.freebsd : 0 ;
			servers.relays.roleGuard.flagFastStable.osv.windows : 0 ;
			servers.relays.roleGuard.flagFastStable.osv.other : 0 ;
			servers.relays.roleGuard.flagFastStable.tsv.010 : 0 ;
			servers.relays.roleGuard.flagFastStable.tsv.011 : 0 ;
			servers.relays.roleGuard.flagFastStable.tsv.012 : 0 ;
			servers.relays.roleGuard.flagFastStable.tsv.020 : 0 ;
			servers.relays.roleGuard.flagFastStable.tsv.021 : 0 ;
			servers.relays.roleGuard.flagFastStable.tsv.022 : 0 ;
			servers.relays.roleGuard.flagFastStable.tsv.023 : 0 ;
			servers.relays.roleGuard.flagFastStable.tsv.024 : 0 ;
			servers.relays.roleGuard.flagFastStable.pbg : 0 ;
			
			// MIDDLE
			servers.relays.roleMiddle.total.count : 0 ;
			servers.relays.roleMiddle.total.bwa : 0 ;
			servers.relays.roleMiddle.total.bwc : 0 ;
			servers.relays.roleMiddle.total.osv.linux : 0 ;
			servers.relays.roleMiddle.total.osv.darwin : 0 ;
			servers.relays.roleMiddle.total.osv.freebsd : 0 ;
			servers.relays.roleMiddle.total.osv.windows : 0 ;
			servers.relays.roleMiddle.total.osv.other : 0 ;
			servers.relays.roleMiddle.total.tsv.010 : 0 ;
			servers.relays.roleMiddle.total.tsv.011 : 0 ;
			servers.relays.roleMiddle.total.tsv.012 : 0 ;
			servers.relays.roleMiddle.total.tsv.020 : 0 ;
			servers.relays.roleMiddle.total.tsv.021 : 0 ;
			servers.relays.roleMiddle.total.tsv.022 : 0 ;
			servers.relays.roleMiddle.total.tsv.023 : 0 ;
			servers.relays.roleMiddle.total.tsv.024 : 0 ;
			servers.relays.roleMiddle.total.pbm : 0 ;
					
			servers.relays.roleMiddle.flagNone.count : 0 ;
			servers.relays.roleMiddle.flagNone.bwa : 0 ;
			servers.relays.roleMiddle.flagNone.bwc : 0 ;
			servers.relays.roleMiddle.flagNone.osv.linux : 0 ;
			servers.relays.roleMiddle.flagNone.osv.darwin : 0 ;
			servers.relays.roleMiddle.flagNone.osv.freebsd : 0 ;
			servers.relays.roleMiddle.flagNone.osv.windows : 0 ;
			servers.relays.roleMiddle.flagNone.osv.other : 0 ;
			servers.relays.roleMiddle.flagNone.tsv.010 : 0 ;
			servers.relays.roleMiddle.flagNone.tsv.011 : 0 ;
			servers.relays.roleMiddle.flagNone.tsv.012 : 0 ;
			servers.relays.roleMiddle.flagNone.tsv.020 : 0 ;
			servers.relays.roleMiddle.flagNone.tsv.021 : 0 ;
			servers.relays.roleMiddle.flagNone.tsv.022 : 0 ;
			servers.relays.roleMiddle.flagNone.tsv.023 : 0 ;
			servers.relays.roleMiddle.flagNone.tsv.024 : 0 ;
			servers.relays.roleMiddle.flagNone.pbm : 0 ;
			
			servers.relays.roleMiddle.flagStable.count : 0 ;
			servers.relays.roleMiddle.flagStable.bwa : 0 ;
			servers.relays.roleMiddle.flagStable.bwc : 0 ;
			servers.relays.roleMiddle.flagStable.osv.linux : 0 ;
			servers.relays.roleMiddle.flagStable.osv.darwin : 0 ;
			servers.relays.roleMiddle.flagStable.osv.freebsd : 0 ;
			servers.relays.roleMiddle.flagStable.osv.windows : 0 ;
			servers.relays.roleMiddle.flagStable.osv.other : 0 ;
			servers.relays.roleMiddle.flagStable.tsv.010 : 0 ;
			servers.relays.roleMiddle.flagStable.tsv.011 : 0 ;
			servers.relays.roleMiddle.flagStable.tsv.012 : 0 ;
			servers.relays.roleMiddle.flagStable.tsv.020 : 0 ;
			servers.relays.roleMiddle.flagStable.tsv.021 : 0 ;
			servers.relays.roleMiddle.flagStable.tsv.022 : 0 ;
			servers.relays.roleMiddle.flagStable.tsv.023 : 0 ;
			servers.relays.roleMiddle.flagStable.tsv.024 : 0 ;
			servers.relays.roleMiddle.flagStable.pbm : 0 ;
						
			servers.relays.roleMiddle.flagFast.count : 0 ;
			servers.relays.roleMiddle.flagFast.bwa : 0 ;
			servers.relays.roleMiddle.flagFast.bwc : 0 ;
			servers.relays.roleMiddle.flagFast.osv.linux : 0 ;
			servers.relays.roleMiddle.flagFast.osv.darwin : 0 ;
			servers.relays.roleMiddle.flagFast.osv.freebsd : 0 ;
			servers.relays.roleMiddle.flagFast.osv.windows : 0 ;
			servers.relays.roleMiddle.flagFast.osv.other : 0 ;
			servers.relays.roleMiddle.flagFast.tsv.010 : 0 ;
			servers.relays.roleMiddle.flagFast.tsv.011 : 0 ;
			servers.relays.roleMiddle.flagFast.tsv.012 : 0 ;
			servers.relays.roleMiddle.flagFast.tsv.020 : 0 ;
			servers.relays.roleMiddle.flagFast.tsv.021 : 0 ;
			servers.relays.roleMiddle.flagFast.tsv.022 : 0 ;
			servers.relays.roleMiddle.flagFast.tsv.023 : 0 ;
			servers.relays.roleMiddle.flagFast.tsv.024 : 0 ;
			servers.relays.roleMiddle.flagFast.pbm : 0 ;
	
			servers.relays.roleMiddle.flagFastStable.count : 0 ;
			servers.relays.roleMiddle.flagFastStable.bwa : 0 ;
			servers.relays.roleMiddle.flagFastStable.bwc : 0 ;
			servers.relays.roleMiddle.flagFastStable.osv.linux : 0 ;
			servers.relays.roleMiddle.flagFastStable.osv.darwin : 0 ;
			servers.relays.roleMiddle.flagFastStable.osv.freebsd : 0 ;
			servers.relays.roleMiddle.flagFastStable.osv.windows : 0 ;
			servers.relays.roleMiddle.flagFastStable.osv.other : 0 ;
			servers.relays.roleMiddle.flagFastStable.tsv.010 : 0 ;
			servers.relays.roleMiddle.flagFastStable.tsv.011 : 0 ;
			servers.relays.roleMiddle.flagFastStable.tsv.012 : 0 ;
			servers.relays.roleMiddle.flagFastStable.tsv.020 : 0 ;
			servers.relays.roleMiddle.flagFastStable.tsv.021 : 0 ;
			servers.relays.roleMiddle.flagFastStable.tsv.022 : 0 ;
			servers.relays.roleMiddle.flagFastStable.tsv.023 : 0 ;
			servers.relays.roleMiddle.flagFastStable.tsv.024 : 0 ;
			servers.relays.roleMiddle.flagFastStable.pbm : 0 ;
			
			// EXIT
			servers.relays.roleExit.total.count : 0 ;
			servers.relays.roleExit.total.bwa : 0 ;
			servers.relays.roleExit.total.bwc : 0 ;
			servers.relays.roleExit.total.osv.linux : 0 ;
			servers.relays.roleExit.total.osv.darwin : 0 ;
			servers.relays.roleExit.total.osv.freebsd : 0 ;
			servers.relays.roleExit.total.osv.windows : 0 ;
			servers.relays.roleExit.total.osv.other : 0 ;
			servers.relays.roleExit.total.tsv.010 : 0 ;
			servers.relays.roleExit.total.tsv.011 : 0 ;
			servers.relays.roleExit.total.tsv.012 : 0 ;
			servers.relays.roleExit.total.tsv.020 : 0 ;
			servers.relays.roleExit.total.tsv.021 : 0 ;
			servers.relays.roleExit.total.tsv.022 : 0 ;
			servers.relays.roleExit.total.tsv.023 : 0 ;
			servers.relays.roleExit.total.tsv.024 : 0 ;
			servers.relays.roleExit.total.pex.4 : 0 ;
			servers.relays.roleExit.total.pex.6 : 0 ;
			servers.relays.roleExit.total.pex.8 : 0 ;
			servers.relays.roleExit.total.pex.46 : 0 ;
			servers.relays.roleExit.total.pex.48 : 0 ;
			servers.relays.roleExit.total.pex.68 : 0 ;
			servers.relays.roleExit.total.pex.468 : 0 ;
			servers.relays.roleExit.total.pbe : 0 ;
						
			servers.relays.roleExit.flagNone.count : 0 ;
			servers.relays.roleExit.flagNone.bwa : 0 ;
			servers.relays.roleExit.flagNone.bwc : 0 ;
			servers.relays.roleExit.flagNone.osv.linux : 0 ;
			servers.relays.roleExit.flagNone.osv.darwin : 0 ;
			servers.relays.roleExit.flagNone.osv.freebsd : 0 ;
			servers.relays.roleExit.flagNone.osv.windows : 0 ;
			servers.relays.roleExit.flagNone.osv.other : 0 ;
			servers.relays.roleExit.flagNone.tsv.010 : 0 ;
			servers.relays.roleExit.flagNone.tsv.011 : 0 ;
			servers.relays.roleExit.flagNone.tsv.012 : 0 ;
			servers.relays.roleExit.flagNone.tsv.020 : 0 ;
			servers.relays.roleExit.flagNone.tsv.021 : 0 ;
			servers.relays.roleExit.flagNone.tsv.022 : 0 ;
			servers.relays.roleExit.flagNone.tsv.023 : 0 ;
			servers.relays.roleExit.flagNone.tsv.024 : 0 ;
			servers.relays.roleExit.flagNone.pex.4 : 0 ;
			servers.relays.roleExit.flagNone.pex.6 : 0 ;
			servers.relays.roleExit.flagNone.pex.8 : 0 ;
			servers.relays.roleExit.flagNone.pex.46 : 0 ;
			servers.relays.roleExit.flagNone.pex.48 : 0 ;
			servers.relays.roleExit.flagNone.pex.68 : 0 ;
			servers.relays.roleExit.flagNone.pex.468 : 0 ;
			servers.relays.roleExit.flagNone.pbe : 0 ;
			
			servers.relays.roleExit.flagFast.count : 0 ;
			servers.relays.roleExit.flagFast.bwa : 0 ;
			servers.relays.roleExit.flagFast.bwc : 0 ;
			servers.relays.roleExit.flagFast.osv.linux : 0 ;
			servers.relays.roleExit.flagFast.osv.darwin : 0 ;
			servers.relays.roleExit.flagFast.osv.freebsd : 0 ;
			servers.relays.roleExit.flagFast.osv.windows : 0 ;
			servers.relays.roleExit.flagFast.osv.other : 0 ;
			servers.relays.roleExit.flagFast.tsv.010 : 0 ;
			servers.relays.roleExit.flagFast.tsv.011 : 0 ;
			servers.relays.roleExit.flagFast.tsv.012 : 0 ;
			servers.relays.roleExit.flagFast.tsv.020 : 0 ;
			servers.relays.roleExit.flagFast.tsv.021 : 0 ;
			servers.relays.roleExit.flagFast.tsv.022 : 0 ;
			servers.relays.roleExit.flagFast.tsv.023 : 0 ;
			servers.relays.roleExit.flagFast.tsv.024 : 0 ;
			servers.relays.roleExit.flagFast.pex.4 : 0 ;
			servers.relays.roleExit.flagFast.pex.6 : 0 ;
			servers.relays.roleExit.flagFast.pex.8 : 0 ;
			servers.relays.roleExit.flagFast.pex.46 : 0 ;
			servers.relays.roleExit.flagFast.pex.48 : 0 ;
			servers.relays.roleExit.flagFast.pex.68 : 0 ;
			servers.relays.roleExit.flagFast.pex.468 : 0 ;
			servers.relays.roleExit.flagFast.pbe : 0 ;
			
			servers.relays.roleExit.flagStable.count : 0 ;
			servers.relays.roleExit.flagStable.bwa : 0 ;
			servers.relays.roleExit.flagStable.bwc : 0 ;
			servers.relays.roleExit.flagStable.osv.linux : 0 ;
			servers.relays.roleExit.flagStable.osv.darwin : 0 ;
			servers.relays.roleExit.flagStable.osv.freebsd : 0 ;
			servers.relays.roleExit.flagStable.osv.windows : 0 ;
			servers.relays.roleExit.flagStable.osv.other : 0 ;
			servers.relays.roleExit.flagStable.tsv.010 : 0 ;
			servers.relays.roleExit.flagStable.tsv.011 : 0 ;
			servers.relays.roleExit.flagStable.tsv.012 : 0 ;
			servers.relays.roleExit.flagStable.tsv.020 : 0 ;
			servers.relays.roleExit.flagStable.tsv.021 : 0 ;
			servers.relays.roleExit.flagStable.tsv.022 : 0 ;
			servers.relays.roleExit.flagStable.tsv.023 : 0 ;
			servers.relays.roleExit.flagStable.tsv.024 : 0 ;
			servers.relays.roleExit.flagStable.pex.4 : 0 ;
			servers.relays.roleExit.flagStable.pex.6 : 0 ;
			servers.relays.roleExit.flagStable.pex.8 : 0 ;
			servers.relays.roleExit.flagStable.pex.46 : 0 ;
			servers.relays.roleExit.flagStable.pex.48 : 0 ;
			servers.relays.roleExit.flagStable.pex.68 : 0 ;
			servers.relays.roleExit.flagStable.pex.468 : 0 ;
			servers.relays.roleExit.flagStable.pbe : 0 ;
			
			servers.relays.roleExit.flagFastStable.count : 0 ;
			servers.relays.roleExit.flagFastStable.bwa : 0 ;
			servers.relays.roleExit.flagFastStable.bwc : 0 ;
			servers.relays.roleExit.flagFastStable.osv.linux : 0 ;
			servers.relays.roleExit.flagFastStable.osv.darwin : 0 ;
			servers.relays.roleExit.flagFastStable.osv.freebsd : 0 ;
			servers.relays.roleExit.flagFastStable.osv.windows : 0 ;
			servers.relays.roleExit.flagFastStable.osv.other : 0 ;
			servers.relays.roleExit.flagFastStable.tsv.010 : 0 ;
			servers.relays.roleExit.flagFastStable.tsv.011 : 0 ;
			servers.relays.roleExit.flagFastStable.tsv.012 : 0 ;
			servers.relays.roleExit.flagFastStable.tsv.020 : 0 ;
			servers.relays.roleExit.flagFastStable.tsv.021 : 0 ;
			servers.relays.roleExit.flagFastStable.tsv.022 : 0 ;
			servers.relays.roleExit.flagFastStable.tsv.023 : 0 ;
			servers.relays.roleExit.flagFastStable.tsv.024 : 0 ;
			servers.relays.roleExit.flagFastStable.pex.4 : 0 ;
			servers.relays.roleExit.flagFastStable.pex.6 : 0 ;
			servers.relays.roleExit.flagFastStable.pex.8 : 0 ;
			servers.relays.roleExit.flagFastStable.pex.46 : 0 ;
			servers.relays.roleExit.flagFastStable.pex.48 : 0 ;
			servers.relays.roleExit.flagFastStable.pex.68 : 0 ;
			servers.relays.roleExit.flagFastStable.pex.468 : 0 ;
			servers.relays.roleExit.flagFastStable.pbe : 0 ;		
			
			// DIR
			servers.relays.roleDir.total.count : 0 ;
			servers.relays.roleDir.total.bwa : 0 ;
			servers.relays.roleDir.total.bwc : 0 ;
			servers.relays.roleDir.total.osv.linux : 0 ;
			servers.relays.roleDir.total.osv.darwin : 0 ;
			servers.relays.roleDir.total.osv.freebsd : 0 ;
			servers.relays.roleDir.total.osv.windows : 0 ;
			servers.relays.roleDir.total.osv.other : 0 ;
			servers.relays.roleDir.total.tsv.010 : 0 ;
			servers.relays.roleDir.total.tsv.011 : 0 ;
			servers.relays.roleDir.total.tsv.012 : 0 ;
			servers.relays.roleDir.total.tsv.020 : 0 ;
			servers.relays.roleDir.total.tsv.021 : 0 ;
			servers.relays.roleDir.total.tsv.022 : 0 ;
			servers.relays.roleDir.total.tsv.023 : 0 ;
			servers.relays.roleDir.total.tsv.024 : 0 ;		
			
			servers.relays.roleDir.authorityTrue.count : 0 ;
			servers.relays.roleDir.authorityTrue.bwa : 0 ;
			servers.relays.roleDir.authorityTrue.bwc : 0 ;
			servers.relays.roleDir.authorityTrue.osv.linux : 0 ;
			servers.relays.roleDir.authorityTrue.osv.darwin : 0 ;
			servers.relays.roleDir.authorityTrue.osv.freebsd : 0 ;
			servers.relays.roleDir.authorityTrue.osv.windows : 0 ;
			servers.relays.roleDir.authorityTrue.osv.other : 0 ;
			servers.relays.roleDir.authorityTrue.tsv.010 : 0 ;
			servers.relays.roleDir.authorityTrue.tsv.011 : 0 ;
			servers.relays.roleDir.authorityTrue.tsv.012 : 0 ;
			servers.relays.roleDir.authorityTrue.tsv.020 : 0 ;
			servers.relays.roleDir.authorityTrue.tsv.021 : 0 ;
			servers.relays.roleDir.authorityTrue.tsv.022 : 0 ;
			servers.relays.roleDir.authorityTrue.tsv.023 : 0 ;
			servers.relays.roleDir.authorityTrue.tsv.024 : 0
		}	
		values.forEach( function(v) {
			fact.servers.relays.roleAll.total.count += v.servers.relays.roleAll.total.count ;
			fact.servers.relays.roleAll.total.bwa += v.servers.relays.roleAll.total.bwa ;
			fact.servers.relays.roleAll.total.bwc += v.servers.relays.roleAll.total.bwc ;
			fact.servers.relays.roleAll.total.osv.linux += v.servers.relays.roleAll.total.osv.linux ;
			fact.servers.relays.roleAll.total.osv.darwin += v.servers.relays.roleAll.total.osv.darwin ;
			fact.servers.relays.roleAll.total.osv.freebsd += v.servers.relays.roleAll.total.osv.freebsd ;
			fact.servers.relays.roleAll.total.osv.windows += v.servers.relays.roleAll.total.osv.windows ;
			fact.servers.relays.roleAll.total.osv.other += v.servers.relays.roleAll.total.osv.other ;
			fact.servers.relays.roleAll.total.tsv.010 += v.servers.relays.roleAll.total.tsv.010 ;
			fact.servers.relays.roleAll.total.tsv.011 += v.servers.relays.roleAll.total.tsv.011 ;
			fact.servers.relays.roleAll.total.tsv.012 += v.servers.relays.roleAll.total.tsv.012 ;
			fact.servers.relays.roleAll.total.tsv.020 += v.servers.relays.roleAll.total.tsv.020 ;
			fact.servers.relays.roleAll.total.tsv.021 += v.servers.relays.roleAll.total.tsv.021 ;
			fact.servers.relays.roleAll.total.tsv.022 += v.servers.relays.roleAll.total.tsv.022 ;
			fact.servers.relays.roleAll.total.tsv.023 += v.servers.relays.roleAll.total.tsv.023 ;
			fact.servers.relays.roleAll.total.tsv.024 += v.servers.relays.roleAll.total.tsv.024 ;
			fact.servers.relays.roleAll.total.pbr += v.servers.relays.roleAll.total.pbr ;
			
			fact.servers.relays.roleAll.flagNone.count += v.servers.relays.roleAll.flagNone.count ;
			fact.servers.relays.roleAll.flagNone.bwa += v.servers.relays.roleAll.flagNone.bwa ;
			fact.servers.relays.roleAll.flagNone.bwc += v.servers.relays.roleAll.flagNone.bwc ;
			fact.servers.relays.roleAll.flagNone.osv.linux += v.servers.relays.roleAll.flagNone.osv.linux ;
			fact.servers.relays.roleAll.flagNone.osv.darwin += v.servers.relays.roleAll.flagNone.osv.darwin ;
			fact.servers.relays.roleAll.flagNone.osv.freebsd += v.servers.relays.roleAll.flagNone.osv.freebsd ;
			fact.servers.relays.roleAll.flagNone.osv.windows += v.servers.relays.roleAll.flagNone.osv.windows ;
			fact.servers.relays.roleAll.flagNone.osv.other += v.servers.relays.roleAll.flagNone.osv.other ;
			fact.servers.relays.roleAll.flagNone.tsv.010 += v.servers.relays.roleAll.flagNone.tsv.010 ;
			fact.servers.relays.roleAll.flagNone.tsv.011 += v.servers.relays.roleAll.flagNone.tsv.011 ;
			fact.servers.relays.roleAll.flagNone.tsv.012 += v.servers.relays.roleAll.flagNone.tsv.012 ;
			fact.servers.relays.roleAll.flagNone.tsv.020 += v.servers.relays.roleAll.flagNone.tsv.020 ;
			fact.servers.relays.roleAll.flagNone.tsv.021 += v.servers.relays.roleAll.flagNone.tsv.021 ;
			fact.servers.relays.roleAll.flagNone.tsv.022 += v.servers.relays.roleAll.flagNone.tsv.022 ;
			fact.servers.relays.roleAll.flagNone.tsv.023 += v.servers.relays.roleAll.flagNone.tsv.023 ;
			fact.servers.relays.roleAll.flagNone.tsv.024 += v.servers.relays.roleAll.flagNone.tsv.024 ;
			fact.servers.relays.roleAll.flagNone.pbr += v.servers.relays.roleAll.flagNone.pbr ;
			
			fact.servers.relays.roleAll.flagStable.count += v.servers.relays.roleAll.flagStable.count ;
			fact.servers.relays.roleAll.flagStable.bwa += v.servers.relays.roleAll.flagStable.bwa ;
			fact.servers.relays.roleAll.flagStable.bwc += v.servers.relays.roleAll.flagStable.bwc ;
			fact.servers.relays.roleAll.flagStable.osv.linux += v.servers.relays.roleAll.flagStable.osv.linux ;
			fact.servers.relays.roleAll.flagStable.osv.darwin += v.servers.relays.roleAll.flagStable.osv.darwin ;
			fact.servers.relays.roleAll.flagStable.osv.freebsd += v.servers.relays.roleAll.flagStable.osv.freebsd ;
			fact.servers.relays.roleAll.flagStable.osv.windows += v.servers.relays.roleAll.flagStable.osv.windows ;
			fact.servers.relays.roleAll.flagStable.osv.other += v.servers.relays.roleAll.flagStable.osv.other ;
			fact.servers.relays.roleAll.flagStable.tsv.010 += v.servers.relays.roleAll.flagStable.tsv.010 ;
			fact.servers.relays.roleAll.flagStable.tsv.011 += v.servers.relays.roleAll.flagStable.tsv.011 ;
			fact.servers.relays.roleAll.flagStable.tsv.012 += v.servers.relays.roleAll.flagStable.tsv.012 ;
			fact.servers.relays.roleAll.flagStable.tsv.020 += v.servers.relays.roleAll.flagStable.tsv.020 ;
			fact.servers.relays.roleAll.flagStable.tsv.021 += v.servers.relays.roleAll.flagStable.tsv.021 ;
			fact.servers.relays.roleAll.flagStable.tsv.022 += v.servers.relays.roleAll.flagStable.tsv.022 ;
			fact.servers.relays.roleAll.flagStable.tsv.023 += v.servers.relays.roleAll.flagStable.tsv.023 ;
			fact.servers.relays.roleAll.flagStable.tsv.024 += v.servers.relays.roleAll.flagStable.tsv.024 ;
			fact.servers.relays.roleAll.flagStable.pbr += v.servers.relays.roleAll.flagStable.pbr ;
			
			fact.servers.relays.roleAll.flagFast.count += v.servers.relays.roleAll.flagFast.count ;
			fact.servers.relays.roleAll.flagFast.bwa += v.servers.relays.roleAll.flagFast.bwa ;
			fact.servers.relays.roleAll.flagFast.bwc += v.servers.relays.roleAll.flagFast.bwc ;
			fact.servers.relays.roleAll.flagFast.osv.linux += v.servers.relays.roleAll.flagFast.osv.linux ;
			fact.servers.relays.roleAll.flagFast.osv.darwin += v.servers.relays.roleAll.flagFast.osv.darwin ;
			fact.servers.relays.roleAll.flagFast.osv.freebsd += v.servers.relays.roleAll.flagFast.osv.freebsd ;
			fact.servers.relays.roleAll.flagFast.osv.windows += v.servers.relays.roleAll.flagFast.osv.windows ;
			fact.servers.relays.roleAll.flagFast.osv.other += v.servers.relays.roleAll.flagFast.osv.other ;
			fact.servers.relays.roleAll.flagFast.tsv.010 += v.servers.relays.roleAll.flagFast.tsv.010 ;
			fact.servers.relays.roleAll.flagFast.tsv.011 += v.servers.relays.roleAll.flagFast.tsv.011 ;
			fact.servers.relays.roleAll.flagFast.tsv.012 += v.servers.relays.roleAll.flagFast.tsv.012 ;
			fact.servers.relays.roleAll.flagFast.tsv.020 += v.servers.relays.roleAll.flagFast.tsv.020 ;
			fact.servers.relays.roleAll.flagFast.tsv.021 += v.servers.relays.roleAll.flagFast.tsv.021 ;
			fact.servers.relays.roleAll.flagFast.tsv.022 += v.servers.relays.roleAll.flagFast.tsv.022 ;
			fact.servers.relays.roleAll.flagFast.tsv.023 += v.servers.relays.roleAll.flagFast.tsv.023 ;
			fact.servers.relays.roleAll.flagFast.tsv.024 += v.servers.relays.roleAll.flagFast.tsv.024 ;
			fact.servers.relays.roleAll.flagFast.pbr += v.servers.relays.roleAll.flagFast.pbr ;
			
			fact.servers.relays.roleAll.flagFastStable.count += v.servers.relays.roleAll.flagFastStable.count ;
			fact.servers.relays.roleAll.flagFastStable.bwa += v.servers.relays.roleAll.flagFastStable.bwa ;
			fact.servers.relays.roleAll.flagFastStable.bwc += v.servers.relays.roleAll.flagFastStable.bwc ;
			fact.servers.relays.roleAll.flagFastStable.osv.linux += v.servers.relays.roleAll.flagFastStable.osv.linux ;
			fact.servers.relays.roleAll.flagFastStable.osv.darwin += v.servers.relays.roleAll.flagFastStable.osv.darwin ;
			fact.servers.relays.roleAll.flagFastStable.osv.freebsd += v.servers.relays.roleAll.flagFastStable.osv.freebsd ;
			fact.servers.relays.roleAll.flagFastStable.osv.windows += v.servers.relays.roleAll.flagFastStable.osv.windows ;
			fact.servers.relays.roleAll.flagFastStable.osv.other += v.servers.relays.roleAll.flagFastStable.osv.other ;
			fact.servers.relays.roleAll.flagFastStable.tsv.010 += v.servers.relays.roleAll.flagFastStable.tsv.010 ;
			fact.servers.relays.roleAll.flagFastStable.tsv.011 += v.servers.relays.roleAll.flagFastStable.tsv.011 ;
			fact.servers.relays.roleAll.flagFastStable.tsv.012 += v.servers.relays.roleAll.flagFastStable.tsv.012 ;
			fact.servers.relays.roleAll.flagFastStable.tsv.020 += v.servers.relays.roleAll.flagFastStable.tsv.020 ;
			fact.servers.relays.roleAll.flagFastStable.tsv.021 += v.servers.relays.roleAll.flagFastStable.tsv.021 ;
			fact.servers.relays.roleAll.flagFastStable.tsv.022 += v.servers.relays.roleAll.flagFastStable.tsv.022 ;
			fact.servers.relays.roleAll.flagFastStable.tsv.023 += v.servers.relays.roleAll.flagFastStable.tsv.023 ;
			fact.servers.relays.roleAll.flagFastStable.tsv.024 += v.servers.relays.roleAll.flagFastStable.tsv.024 ;
			fact.servers.relays.roleAll.flagFastStable.pbr += v.servers.relays.roleAll.flagFastStable.pbr ;
			
			// GUARD
			fact.servers.relays.roleGuard.total.count += v.servers.relays.roleGuard.total.count ;
			fact.servers.relays.roleGuard.total.bwa += v.servers.relays.roleGuard.total.bwa ;
			fact.servers.relays.roleGuard.total.bwc += v.servers.relays.roleGuard.total.bwc ;
			fact.servers.relays.roleGuard.total.osv.linux += v.servers.relays.roleGuard.total.osv.linux ;
			fact.servers.relays.roleGuard.total.osv.darwin += v.servers.relays.roleGuard.total.osv.darwin ;
			fact.servers.relays.roleGuard.total.osv.freebsd += v.servers.relays.roleGuard.total.osv.freebsd ;
			fact.servers.relays.roleGuard.total.osv.windows += v.servers.relays.roleGuard.total.osv.windows ;
			fact.servers.relays.roleGuard.total.osv.other += v.servers.relays.roleGuard.total.osv.other ;
			fact.servers.relays.roleGuard.total.tsv.010 += v.servers.relays.roleGuard.total.tsv.010 ;
			fact.servers.relays.roleGuard.total.tsv.011 += v.servers.relays.roleGuard.total.tsv.011 ;
			fact.servers.relays.roleGuard.total.tsv.012 += v.servers.relays.roleGuard.total.tsv.012 ;
			fact.servers.relays.roleGuard.total.tsv.020 += v.servers.relays.roleGuard.total.tsv.020 ;
			fact.servers.relays.roleGuard.total.tsv.021 += v.servers.relays.roleGuard.total.tsv.021 ;
			fact.servers.relays.roleGuard.total.tsv.022 += v.servers.relays.roleGuard.total.tsv.022 ;
			fact.servers.relays.roleGuard.total.tsv.023 += v.servers.relays.roleGuard.total.tsv.023 ;
			fact.servers.relays.roleGuard.total.tsv.024 += v.servers.relays.roleGuard.total.tsv.024 ;
			fact.servers.relays.roleGuard.total.pbg += v.servers.relays.roleGuard.total.pbg ;
			
			fact.servers.relays.roleGuard.flagNone.count += v.servers.relays.roleGuard.flagNone.count ;
			fact.servers.relays.roleGuard.flagNone.bwa += v.servers.relays.roleGuard.flagNone.bwa ;
			fact.servers.relays.roleGuard.flagNone.bwc += v.servers.relays.roleGuard.flagNone.bwc ;
			fact.servers.relays.roleGuard.flagNone.osv.linux += v.servers.relays.roleGuard.flagNone.osv.linux ;
			fact.servers.relays.roleGuard.flagNone.osv.darwin += v.servers.relays.roleGuard.flagNone.osv.darwin ;
			fact.servers.relays.roleGuard.flagNone.osv.freebsd += v.servers.relays.roleGuard.flagNone.osv.freebsd ;
			fact.servers.relays.roleGuard.flagNone.osv.windows += v.servers.relays.roleGuard.flagNone.osv.windows ;
			fact.servers.relays.roleGuard.flagNone.osv.other += v.servers.relays.roleGuard.flagNone.osv.other ;
			fact.servers.relays.roleGuard.flagNone.tsv.010 += v.servers.relays.roleGuard.flagNone.tsv.010 ;
			fact.servers.relays.roleGuard.flagNone.tsv.011 += v.servers.relays.roleGuard.flagNone.tsv.011 ;
			fact.servers.relays.roleGuard.flagNone.tsv.012 += v.servers.relays.roleGuard.flagNone.tsv.012 ;
			fact.servers.relays.roleGuard.flagNone.tsv.020 += v.servers.relays.roleGuard.flagNone.tsv.020 ;
			fact.servers.relays.roleGuard.flagNone.tsv.021 += v.servers.relays.roleGuard.flagNone.tsv.021 ;
			fact.servers.relays.roleGuard.flagNone.tsv.022 += v.servers.relays.roleGuard.flagNone.tsv.022 ;
			fact.servers.relays.roleGuard.flagNone.tsv.023 += v.servers.relays.roleGuard.flagNone.tsv.023 ;
			fact.servers.relays.roleGuard.flagNone.tsv.024 += v.servers.relays.roleGuard.flagNone.tsv.024 ;
			fact.servers.relays.roleGuard.flagNone.pbg += v.servers.relays.roleGuard.flagNone.pbg ;
			
			fact.servers.relays.roleGuard.flagStable.count += v.servers.relays.roleGuard.flagStable.count ;
			fact.servers.relays.roleGuard.flagStable.bwa += v.servers.relays.roleGuard.flagStable.bwa ;
			fact.servers.relays.roleGuard.flagStable.bwc += v.servers.relays.roleGuard.flagStable.bwc ;
			fact.servers.relays.roleGuard.flagStable.osv.linux += v.servers.relays.roleGuard.flagStable.osv.linux ;
			fact.servers.relays.roleGuard.flagStable.osv.darwin += v.servers.relays.roleGuard.flagStable.osv.darwin ;
			fact.servers.relays.roleGuard.flagStable.osv.freebsd += v.servers.relays.roleGuard.flagStable.osv.freebsd ;
			fact.servers.relays.roleGuard.flagStable.osv.windows += v.servers.relays.roleGuard.flagStable.osv.windows ;
			fact.servers.relays.roleGuard.flagStable.osv.other += v.servers.relays.roleGuard.flagStable.osv.other ;
			fact.servers.relays.roleGuard.flagStable.tsv.010 += v.servers.relays.roleGuard.flagStable.tsv.010 ;
			fact.servers.relays.roleGuard.flagStable.tsv.011 += v.servers.relays.roleGuard.flagStable.tsv.011 ;
			fact.servers.relays.roleGuard.flagStable.tsv.012 += v.servers.relays.roleGuard.flagStable.tsv.012 ;
			fact.servers.relays.roleGuard.flagStable.tsv.020 += v.servers.relays.roleGuard.flagStable.tsv.020 ;
			fact.servers.relays.roleGuard.flagStable.tsv.021 += v.servers.relays.roleGuard.flagStable.tsv.021 ;
			fact.servers.relays.roleGuard.flagStable.tsv.022 += v.servers.relays.roleGuard.flagStable.tsv.022 ;
			fact.servers.relays.roleGuard.flagStable.tsv.023 += v.servers.relays.roleGuard.flagStable.tsv.023 ;
			fact.servers.relays.roleGuard.flagStable.tsv.024 += v.servers.relays.roleGuard.flagStable.tsv.024 ;
			fact.servers.relays.roleGuard.flagStable.pbg += v.servers.relays.roleGuard.flagStable.pbg ;
			
			fact.servers.relays.roleGuard.flagFast.count += v.servers.relays.roleGuard.flagFast.count ;
			fact.servers.relays.roleGuard.flagFast.bwa += v.servers.relays.roleGuard.flagFast.bwa ;
			fact.servers.relays.roleGuard.flagFast.bwc += v.servers.relays.roleGuard.flagFast.bwc ;
			fact.servers.relays.roleGuard.flagFast.osv.linux += v.servers.relays.roleGuard.flagFast.osv.linux ;
			fact.servers.relays.roleGuard.flagFast.osv.darwin += v.servers.relays.roleGuard.flagFast.osv.darwin ;
			fact.servers.relays.roleGuard.flagFast.osv.freebsd += v.servers.relays.roleGuard.flagFast.osv.freebsd ;
			fact.servers.relays.roleGuard.flagFast.osv.windows += v.servers.relays.roleGuard.flagFast.osv.windows ;
			fact.servers.relays.roleGuard.flagFast.osv.other += v.servers.relays.roleGuard.flagFast.osv.other ;
			fact.servers.relays.roleGuard.flagFast.tsv.010 += v.servers.relays.roleGuard.flagFast.tsv.010 ;
			fact.servers.relays.roleGuard.flagFast.tsv.011 += v.servers.relays.roleGuard.flagFast.tsv.011 ;
			fact.servers.relays.roleGuard.flagFast.tsv.012 += v.servers.relays.roleGuard.flagFast.tsv.012 ;
			fact.servers.relays.roleGuard.flagFast.tsv.020 += v.servers.relays.roleGuard.flagFast.tsv.020 ;
			fact.servers.relays.roleGuard.flagFast.tsv.021 += v.servers.relays.roleGuard.flagFast.tsv.021 ;
			fact.servers.relays.roleGuard.flagFast.tsv.022 += v.servers.relays.roleGuard.flagFast.tsv.022 ;
			fact.servers.relays.roleGuard.flagFast.tsv.023 += v.servers.relays.roleGuard.flagFast.tsv.023 ;
			fact.servers.relays.roleGuard.flagFast.tsv.024 += v.servers.relays.roleGuard.flagFast.tsv.024 ;
			fact.servers.relays.roleGuard.flagFast.pbg += v.servers.relays.roleGuard.flagFast.pbg ;
			
			fact.servers.relays.roleGuard.flagFastStable.count += v.servers.relays.roleGuard.flagFastStable.count ;
			fact.servers.relays.roleGuard.flagFastStable.bwa += v.servers.relays.roleGuard.flagFastStable.bwa ;
			fact.servers.relays.roleGuard.flagFastStable.bwc += v.servers.relays.roleGuard.flagFastStable.bwc ;
			fact.servers.relays.roleGuard.flagFastStable.osv.linux += v.servers.relays.roleGuard.flagFastStable.osv.linux ;
			fact.servers.relays.roleGuard.flagFastStable.osv.darwin += v.servers.relays.roleGuard.flagFastStable.osv.darwin ;
			fact.servers.relays.roleGuard.flagFastStable.osv.freebsd += v.servers.relays.roleGuard.flagFastStable.osv.freebsd ;
			fact.servers.relays.roleGuard.flagFastStable.osv.windows += v.servers.relays.roleGuard.flagFastStable.osv.windows ;
			fact.servers.relays.roleGuard.flagFastStable.osv.other += v.servers.relays.roleGuard.flagFastStable.osv.other ;
			fact.servers.relays.roleGuard.flagFastStable.tsv.010 += v.servers.relays.roleGuard.flagFastStable.tsv.010 ;
			fact.servers.relays.roleGuard.flagFastStable.tsv.011 += v.servers.relays.roleGuard.flagFastStable.tsv.011 ;
			fact.servers.relays.roleGuard.flagFastStable.tsv.012 += v.servers.relays.roleGuard.flagFastStable.tsv.012 ;
			fact.servers.relays.roleGuard.flagFastStable.tsv.020 += v.servers.relays.roleGuard.flagFastStable.tsv.020 ;
			fact.servers.relays.roleGuard.flagFastStable.tsv.021 += v.servers.relays.roleGuard.flagFastStable.tsv.021 ;
			fact.servers.relays.roleGuard.flagFastStable.tsv.022 += v.servers.relays.roleGuard.flagFastStable.tsv.022 ;
			fact.servers.relays.roleGuard.flagFastStable.tsv.023 += v.servers.relays.roleGuard.flagFastStable.tsv.023 ;
			fact.servers.relays.roleGuard.flagFastStable.tsv.024 += v.servers.relays.roleGuard.flagFastStable.tsv.024 ;
			fact.servers.relays.roleGuard.flagFastStable.pbg += v.servers.relays.roleGuard.flagFastStable.pbg ;
			
			// MIDDLE
			fact.servers.relays.roleMiddle.total.count += v.servers.relays.roleMiddle.total.count ;
			fact.servers.relays.roleMiddle.total.bwa += v.servers.relays.roleMiddle.total.bwa ;
			fact.servers.relays.roleMiddle.total.bwc += v.servers.relays.roleMiddle.total.bwc ;
			fact.servers.relays.roleMiddle.total.osv.linux += v.servers.relays.roleMiddle.total.osv.linux ;
			fact.servers.relays.roleMiddle.total.osv.darwin += v.servers.relays.roleMiddle.total.osv.darwin ;
			fact.servers.relays.roleMiddle.total.osv.freebsd += v.servers.relays.roleMiddle.total.osv.freebsd ;
			fact.servers.relays.roleMiddle.total.osv.windows += v.servers.relays.roleMiddle.total.osv.windows ;
			fact.servers.relays.roleMiddle.total.osv.other += v.servers.relays.roleMiddle.total.osv.other ;
			fact.servers.relays.roleMiddle.total.tsv.010 += v.servers.relays.roleMiddle.total.tsv.010 ;
			fact.servers.relays.roleMiddle.total.tsv.011 += v.servers.relays.roleMiddle.total.tsv.011 ;
			fact.servers.relays.roleMiddle.total.tsv.012 += v.servers.relays.roleMiddle.total.tsv.012 ;
			fact.servers.relays.roleMiddle.total.tsv.020 += v.servers.relays.roleMiddle.total.tsv.020 ;
			fact.servers.relays.roleMiddle.total.tsv.021 += v.servers.relays.roleMiddle.total.tsv.021 ;
			fact.servers.relays.roleMiddle.total.tsv.022 += v.servers.relays.roleMiddle.total.tsv.022 ;
			fact.servers.relays.roleMiddle.total.tsv.023 += v.servers.relays.roleMiddle.total.tsv.023 ;
			fact.servers.relays.roleMiddle.total.tsv.024 += v.servers.relays.roleMiddle.total.tsv.024 ;
			fact.servers.relays.roleMiddle.total.pbm += v.servers.relays.roleMiddle.total.pbm ;
			
			fact.servers.relays.roleMiddle.flagNone.count += v.servers.relays.roleMiddle.flagNone.count ;
			fact.servers.relays.roleMiddle.flagNone.bwa += v.servers.relays.roleMiddle.flagNone.bwa ;
			fact.servers.relays.roleMiddle.flagNone.bwc += v.servers.relays.roleMiddle.flagNone.bwc ;
			fact.servers.relays.roleMiddle.flagNone.osv.linux += v.servers.relays.roleMiddle.flagNone.osv.linux ;
			fact.servers.relays.roleMiddle.flagNone.osv.darwin += v.servers.relays.roleMiddle.flagNone.osv.darwin ;
			fact.servers.relays.roleMiddle.flagNone.osv.freebsd += v.servers.relays.roleMiddle.flagNone.osv.freebsd ;
			fact.servers.relays.roleMiddle.flagNone.osv.windows += v.servers.relays.roleMiddle.flagNone.osv.windows ;
			fact.servers.relays.roleMiddle.flagNone.osv.other += v.servers.relays.roleMiddle.flagNone.osv.other ;
			fact.servers.relays.roleMiddle.flagNone.tsv.010 += v.servers.relays.roleMiddle.flagNone.tsv.010 ;
			fact.servers.relays.roleMiddle.flagNone.tsv.011 += v.servers.relays.roleMiddle.flagNone.tsv.011 ;
			fact.servers.relays.roleMiddle.flagNone.tsv.012 += v.servers.relays.roleMiddle.flagNone.tsv.012 ;
			fact.servers.relays.roleMiddle.flagNone.tsv.020 += v.servers.relays.roleMiddle.flagNone.tsv.020 ;
			fact.servers.relays.roleMiddle.flagNone.tsv.021 += v.servers.relays.roleMiddle.flagNone.tsv.021 ;
			fact.servers.relays.roleMiddle.flagNone.tsv.022 += v.servers.relays.roleMiddle.flagNone.tsv.022 ;
			fact.servers.relays.roleMiddle.flagNone.tsv.023 += v.servers.relays.roleMiddle.flagNone.tsv.023 ;
			fact.servers.relays.roleMiddle.flagNone.tsv.024 += v.servers.relays.roleMiddle.flagNone.tsv.024 ;
			fact.servers.relays.roleMiddle.flagNone.pbm += v.servers.relays.roleMiddle.flagNone.pbm ;
			
			fact.servers.relays.roleMiddle.flagStable.count += v.servers.relays.roleMiddle.flagStable.count ;
			fact.servers.relays.roleMiddle.flagStable.bwa += v.servers.relays.roleMiddle.flagStable.bwa ;
			fact.servers.relays.roleMiddle.flagStable.bwc += v.servers.relays.roleMiddle.flagStable.bwc ;
			fact.servers.relays.roleMiddle.flagStable.osv.linux += v.servers.relays.roleMiddle.flagStable.osv.linux ;
			fact.servers.relays.roleMiddle.flagStable.osv.darwin += v.servers.relays.roleMiddle.flagStable.osv.darwin ;
			fact.servers.relays.roleMiddle.flagStable.osv.freebsd += v.servers.relays.roleMiddle.flagStable.osv.freebsd ;
			fact.servers.relays.roleMiddle.flagStable.osv.windows += v.servers.relays.roleMiddle.flagStable.osv.windows ;
			fact.servers.relays.roleMiddle.flagStable.osv.other += v.servers.relays.roleMiddle.flagStable.osv.other ;
			fact.servers.relays.roleMiddle.flagStable.tsv.010 += v.servers.relays.roleMiddle.flagStable.tsv.010 ;
			fact.servers.relays.roleMiddle.flagStable.tsv.011 += v.servers.relays.roleMiddle.flagStable.tsv.011 ;
			fact.servers.relays.roleMiddle.flagStable.tsv.012 += v.servers.relays.roleMiddle.flagStable.tsv.012 ;
			fact.servers.relays.roleMiddle.flagStable.tsv.020 += v.servers.relays.roleMiddle.flagStable.tsv.020 ;
			fact.servers.relays.roleMiddle.flagStable.tsv.021 += v.servers.relays.roleMiddle.flagStable.tsv.021 ;
			fact.servers.relays.roleMiddle.flagStable.tsv.022 += v.servers.relays.roleMiddle.flagStable.tsv.022 ;
			fact.servers.relays.roleMiddle.flagStable.tsv.023 += v.servers.relays.roleMiddle.flagStable.tsv.023 ;
			fact.servers.relays.roleMiddle.flagStable.tsv.024 += v.servers.relays.roleMiddle.flagStable.tsv.024 ;
			fact.servers.relays.roleMiddle.flagStable.pbm += v.servers.relays.roleMiddle.flagStable.pbm ;
			
			fact.servers.relays.roleMiddle.flagFast.count += v.servers.relays.roleMiddle.flagFast.count ;
			fact.servers.relays.roleMiddle.flagFast.bwa += v.servers.relays.roleMiddle.flagFast.bwa ;
			fact.servers.relays.roleMiddle.flagFast.bwc += v.servers.relays.roleMiddle.flagFast.bwc ;
			fact.servers.relays.roleMiddle.flagFast.osv.linux += v.servers.relays.roleMiddle.flagFast.osv.linux ;
			fact.servers.relays.roleMiddle.flagFast.osv.darwin += v.servers.relays.roleMiddle.flagFast.osv.darwin ;
			fact.servers.relays.roleMiddle.flagFast.osv.freebsd += v.servers.relays.roleMiddle.flagFast.osv.freebsd ;
			fact.servers.relays.roleMiddle.flagFast.osv.windows += v.servers.relays.roleMiddle.flagFast.osv.windows ;
			fact.servers.relays.roleMiddle.flagFast.osv.other += v.servers.relays.roleMiddle.flagFast.osv.other ;
			fact.servers.relays.roleMiddle.flagFast.tsv.010 += v.servers.relays.roleMiddle.flagFast.tsv.010 ;
			fact.servers.relays.roleMiddle.flagFast.tsv.011 += v.servers.relays.roleMiddle.flagFast.tsv.011 ;
			fact.servers.relays.roleMiddle.flagFast.tsv.012 += v.servers.relays.roleMiddle.flagFast.tsv.012 ;
			fact.servers.relays.roleMiddle.flagFast.tsv.020 += v.servers.relays.roleMiddle.flagFast.tsv.020 ;
			fact.servers.relays.roleMiddle.flagFast.tsv.021 += v.servers.relays.roleMiddle.flagFast.tsv.021 ;
			fact.servers.relays.roleMiddle.flagFast.tsv.022 += v.servers.relays.roleMiddle.flagFast.tsv.022 ;
			fact.servers.relays.roleMiddle.flagFast.tsv.023 += v.servers.relays.roleMiddle.flagFast.tsv.023 ;
			fact.servers.relays.roleMiddle.flagFast.tsv.024 += v.servers.relays.roleMiddle.flagFast.tsv.024 ;
			fact.servers.relays.roleMiddle.flagFast.pbm += v.servers.relays.roleMiddle.flagFast.pbm ;
			
			fact.servers.relays.roleMiddle.flagFastStable.count += v.servers.relays.roleMiddle.flagFastStable.count ;
			fact.servers.relays.roleMiddle.flagFastStable.bwa += v.servers.relays.roleMiddle.flagFastStable.bwa ;
			fact.servers.relays.roleMiddle.flagFastStable.bwc += v.servers.relays.roleMiddle.flagFastStable.bwc ;
			fact.servers.relays.roleMiddle.flagFastStable.osv.linux += v.servers.relays.roleMiddle.flagFastStable.osv.linux ;
			fact.servers.relays.roleMiddle.flagFastStable.osv.darwin += v.servers.relays.roleMiddle.flagFastStable.osv.darwin ;
			fact.servers.relays.roleMiddle.flagFastStable.osv.freebsd += v.servers.relays.roleMiddle.flagFastStable.osv.freebsd ;
			fact.servers.relays.roleMiddle.flagFastStable.osv.windows += v.servers.relays.roleMiddle.flagFastStable.osv.windows ;
			fact.servers.relays.roleMiddle.flagFastStable.osv.other += v.servers.relays.roleMiddle.flagFastStable.osv.other ;
			fact.servers.relays.roleMiddle.flagFastStable.tsv.010 += v.servers.relays.roleMiddle.flagFastStable.tsv.010 ;
			fact.servers.relays.roleMiddle.flagFastStable.tsv.011 += v.servers.relays.roleMiddle.flagFastStable.tsv.011 ;
			fact.servers.relays.roleMiddle.flagFastStable.tsv.012 += v.servers.relays.roleMiddle.flagFastStable.tsv.012 ;
			fact.servers.relays.roleMiddle.flagFastStable.tsv.020 += v.servers.relays.roleMiddle.flagFastStable.tsv.020 ;
			fact.servers.relays.roleMiddle.flagFastStable.tsv.021 += v.servers.relays.roleMiddle.flagFastStable.tsv.021 ;
			fact.servers.relays.roleMiddle.flagFastStable.tsv.022 += v.servers.relays.roleMiddle.flagFastStable.tsv.022 ;
			fact.servers.relays.roleMiddle.flagFastStable.tsv.023 += v.servers.relays.roleMiddle.flagFastStable.tsv.023 ;
			fact.servers.relays.roleMiddle.flagFastStable.tsv.024 += v.servers.relays.roleMiddle.flagFastStable.tsv.024 ;
			fact.servers.relays.roleMiddle.flagFastStable.pbm += v.servers.relays.roleMiddle.flagFastStable.pbm ;
			
			// EXIT
			fact.servers.relays.roleExit.total.count += v.servers.relays.roleExit.total.count ;
			fact.servers.relays.roleExit.total.bwa += v.servers.relays.roleExit.total.bwa ;
			fact.servers.relays.roleExit.total.bwc += v.servers.relays.roleExit.total.bwc ;
			fact.servers.relays.roleExit.total.osv.linux += v.servers.relays.roleExit.total.osv.linux ;
			fact.servers.relays.roleExit.total.osv.darwin += v.servers.relays.roleExit.total.osv.darwin ;
			fact.servers.relays.roleExit.total.osv.freebsd += v.servers.relays.roleExit.total.osv.freebsd ;
			fact.servers.relays.roleExit.total.osv.windows += v.servers.relays.roleExit.total.osv.windows ;
			fact.servers.relays.roleExit.total.osv.other += v.servers.relays.roleExit.total.osv.other ;
			fact.servers.relays.roleExit.total.tsv.010 += v.servers.relays.roleExit.total.tsv.010 ;
			fact.servers.relays.roleExit.total.tsv.011 += v.servers.relays.roleExit.total.tsv.011 ;
			fact.servers.relays.roleExit.total.tsv.012 += v.servers.relays.roleExit.total.tsv.012 ;
			fact.servers.relays.roleExit.total.tsv.020 += v.servers.relays.roleExit.total.tsv.020 ;
			fact.servers.relays.roleExit.total.tsv.021 += v.servers.relays.roleExit.total.tsv.021 ;
			fact.servers.relays.roleExit.total.tsv.022 += v.servers.relays.roleExit.total.tsv.022 ;
			fact.servers.relays.roleExit.total.tsv.023 += v.servers.relays.roleExit.total.tsv.023 ;
			fact.servers.relays.roleExit.total.tsv.024 += v.servers.relays.roleExit.total.tsv.024 ;
			fact.servers.relays.roleExit.total.pex.4 += v.servers.relays.roleExit.total.pex.4 ;
			fact.servers.relays.roleExit.total.pex.6 += v.servers.relays.roleExit.total.pex.6 ;
			fact.servers.relays.roleExit.total.pex.8 += v.servers.relays.roleExit.total.pex.8 ;
			fact.servers.relays.roleExit.total.pex.46 += v.servers.relays.roleExit.total.pex.46 ;
			fact.servers.relays.roleExit.total.pex.48 += v.servers.relays.roleExit.total.pex.48 ;
			fact.servers.relays.roleExit.total.pex.68 += v.servers.relays.roleExit.total.pex.68 ;
			fact.servers.relays.roleExit.total.pex.468 += v.servers.relays.roleExit.total.pex.468 ;
			fact.servers.relays.roleExit.total.pbe += v.servers.relays.roleExit.total.pbe ;
						
			fact.servers.relays.roleExit.flagNone.count += v.servers.relays.roleExit.flagNone.count ;
			fact.servers.relays.roleExit.flagNone.bwa += v.servers.relays.roleExit.flagNone.bwa ;
			fact.servers.relays.roleExit.flagNone.bwc += v.servers.relays.roleExit.flagNone.bwc ;
			fact.servers.relays.roleExit.flagNone.osv.linux += v.servers.relays.roleExit.flagNone.osv.linux ;
			fact.servers.relays.roleExit.flagNone.osv.darwin += v.servers.relays.roleExit.flagNone.osv.darwin ;
			fact.servers.relays.roleExit.flagNone.osv.freebsd += v.servers.relays.roleExit.flagNone.osv.freebsd ;
			fact.servers.relays.roleExit.flagNone.osv.windows += v.servers.relays.roleExit.flagNone.osv.windows ;
			fact.servers.relays.roleExit.flagNone.osv.other += v.servers.relays.roleExit.flagNone.osv.other ;
			fact.servers.relays.roleExit.flagNone.tsv.010 += v.servers.relays.roleExit.flagNone.tsv.010 ;
			fact.servers.relays.roleExit.flagNone.tsv.011 += v.servers.relays.roleExit.flagNone.tsv.011 ;
			fact.servers.relays.roleExit.flagNone.tsv.012 += v.servers.relays.roleExit.flagNone.tsv.012 ;
			fact.servers.relays.roleExit.flagNone.tsv.020 += v.servers.relays.roleExit.flagNone.tsv.020 ;
			fact.servers.relays.roleExit.flagNone.tsv.021 += v.servers.relays.roleExit.flagNone.tsv.021 ;
			fact.servers.relays.roleExit.flagNone.tsv.022 += v.servers.relays.roleExit.flagNone.tsv.022 ;
			fact.servers.relays.roleExit.flagNone.tsv.023 += v.servers.relays.roleExit.flagNone.tsv.023 ;
			fact.servers.relays.roleExit.flagNone.tsv.024 += v.servers.relays.roleExit.flagNone.tsv.024 ;
			fact.servers.relays.roleExit.flagNone.pex.4 += v.servers.relays.roleExit.flagNone.pex.4 ;
			fact.servers.relays.roleExit.flagNone.pex.6 += v.servers.relays.roleExit.flagNone.pex.6 ;
			fact.servers.relays.roleExit.flagNone.pex.8 += v.servers.relays.roleExit.flagNone.pex.8 ;
			fact.servers.relays.roleExit.flagNone.pex.46 += v.servers.relays.roleExit.flagNone.pex.46 ;
			fact.servers.relays.roleExit.flagNone.pex.48 += v.servers.relays.roleExit.flagNone.pex.48 ;
			fact.servers.relays.roleExit.flagNone.pex.68 += v.servers.relays.roleExit.flagNone.pex.68 ;
			fact.servers.relays.roleExit.flagNone.pex.468 += v.servers.relays.roleExit.flagNone.pex.468 ;
			fact.servers.relays.roleExit.flagNone.pbe += v.servers.relays.roleExit.flagNone.pbe ;
			
			fact.servers.relays.roleExit.flagFast.count += v.servers.relays.roleExit.flagFast.count ;
			fact.servers.relays.roleExit.flagFast.bwa += v.servers.relays.roleExit.flagFast.bwa ;
			fact.servers.relays.roleExit.flagFast.bwc += v.servers.relays.roleExit.flagFast.bwc ;
			fact.servers.relays.roleExit.flagFast.osv.linux += v.servers.relays.roleExit.flagFast.osv.linux ;
			fact.servers.relays.roleExit.flagFast.osv.darwin += v.servers.relays.roleExit.flagFast.osv.darwin ;
			fact.servers.relays.roleExit.flagFast.osv.freebsd += v.servers.relays.roleExit.flagFast.osv.freebsd ;
			fact.servers.relays.roleExit.flagFast.osv.windows += v.servers.relays.roleExit.flagFast.osv.windows ;
			fact.servers.relays.roleExit.flagFast.osv.other += v.servers.relays.roleExit.flagFast.osv.other ;
			fact.servers.relays.roleExit.flagFast.tsv.010 += v.servers.relays.roleExit.flagFast.tsv.010 ;
			fact.servers.relays.roleExit.flagFast.tsv.011 += v.servers.relays.roleExit.flagFast.tsv.011 ;
			fact.servers.relays.roleExit.flagFast.tsv.012 += v.servers.relays.roleExit.flagFast.tsv.012 ;
			fact.servers.relays.roleExit.flagFast.tsv.020 += v.servers.relays.roleExit.flagFast.tsv.020 ;
			fact.servers.relays.roleExit.flagFast.tsv.021 += v.servers.relays.roleExit.flagFast.tsv.021 ;
			fact.servers.relays.roleExit.flagFast.tsv.022 += v.servers.relays.roleExit.flagFast.tsv.022 ;
			fact.servers.relays.roleExit.flagFast.tsv.023 += v.servers.relays.roleExit.flagFast.tsv.023 ;
			fact.servers.relays.roleExit.flagFast.tsv.024 += v.servers.relays.roleExit.flagFast.tsv.024 ;
			fact.servers.relays.roleExit.flagFast.pex.4 += v.servers.relays.roleExit.flagFast.pex.4 ;
			fact.servers.relays.roleExit.flagFast.pex.6 += v.servers.relays.roleExit.flagFast.pex.6 ;
			fact.servers.relays.roleExit.flagFast.pex.8 += v.servers.relays.roleExit.flagFast.pex.8 ;
			fact.servers.relays.roleExit.flagFast.pex.46 += v.servers.relays.roleExit.flagFast.pex.46 ;
			fact.servers.relays.roleExit.flagFast.pex.48 += v.servers.relays.roleExit.flagFast.pex.48 ;
			fact.servers.relays.roleExit.flagFast.pex.68 += v.servers.relays.roleExit.flagFast.pex.68 ;
			fact.servers.relays.roleExit.flagFast.pex.468 += v.servers.relays.roleExit.flagFast.pex.468 ;
			fact.servers.relays.roleExit.flagFast.pbe += v.servers.relays.roleExit.flagFast.pbe ;
			
			fact.servers.relays.roleExit.flagStable.count += v.servers.relays.roleExit.flagStable.count ;
			fact.servers.relays.roleExit.flagStable.bwa += v.servers.relays.roleExit.flagStable.bwa ;
			fact.servers.relays.roleExit.flagStable.bwc += v.servers.relays.roleExit.flagStable.bwc ;
			fact.servers.relays.roleExit.flagStable.osv.linux += v.servers.relays.roleExit.flagStable.osv.linux ;
			fact.servers.relays.roleExit.flagStable.osv.darwin += v.servers.relays.roleExit.flagStable.osv.darwin ;
			fact.servers.relays.roleExit.flagStable.osv.freebsd += v.servers.relays.roleExit.flagStable.osv.freebsd ;
			fact.servers.relays.roleExit.flagStable.osv.windows += v.servers.relays.roleExit.flagStable.osv.windows ;
			fact.servers.relays.roleExit.flagStable.osv.other += v.servers.relays.roleExit.flagStable.osv.other ;
			fact.servers.relays.roleExit.flagStable.tsv.010 += v.servers.relays.roleExit.flagStable.tsv.010 ;
			fact.servers.relays.roleExit.flagStable.tsv.011 += v.servers.relays.roleExit.flagStable.tsv.011 ;
			fact.servers.relays.roleExit.flagStable.tsv.012 += v.servers.relays.roleExit.flagStable.tsv.012 ;
			fact.servers.relays.roleExit.flagStable.tsv.020 += v.servers.relays.roleExit.flagStable.tsv.020 ;
			fact.servers.relays.roleExit.flagStable.tsv.021 += v.servers.relays.roleExit.flagStable.tsv.021 ;
			fact.servers.relays.roleExit.flagStable.tsv.022 += v.servers.relays.roleExit.flagStable.tsv.022 ;
			fact.servers.relays.roleExit.flagStable.tsv.023 += v.servers.relays.roleExit.flagStable.tsv.023 ;
			fact.servers.relays.roleExit.flagStable.tsv.024 += v.servers.relays.roleExit.flagStable.tsv.024 ;
			fact.servers.relays.roleExit.flagStable.pex.4 += v.servers.relays.roleExit.flagStable.pex.4 ;
			fact.servers.relays.roleExit.flagStable.pex.6 += v.servers.relays.roleExit.flagStable.pex.6 ;
			fact.servers.relays.roleExit.flagStable.pex.8 += v.servers.relays.roleExit.flagStable.pex.8 ;
			fact.servers.relays.roleExit.flagStable.pex.46 += v.servers.relays.roleExit.flagStable.pex.46 ;
			fact.servers.relays.roleExit.flagStable.pex.48 += v.servers.relays.roleExit.flagStable.pex.48 ;
			fact.servers.relays.roleExit.flagStable.pex.68 += v.servers.relays.roleExit.flagStable.pex.68 ;
			fact.servers.relays.roleExit.flagStable.pex.468 += v.servers.relays.roleExit.flagStable.pex.468 ;
			fact.servers.relays.roleExit.flagStable.pbe += v.servers.relays.roleExit.flagStable.pbe ;
			
			fact.servers.relays.roleExit.flagFastStable.count += v.servers.relays.roleExit.flagFastStable.count ;
			fact.servers.relays.roleExit.flagFastStable.bwa += v.servers.relays.roleExit.flagFastStable.bwa ;
			fact.servers.relays.roleExit.flagFastStable.bwc += v.servers.relays.roleExit.flagFastStable.bwc ;
			fact.servers.relays.roleExit.flagFastStable.osv.linux += v.servers.relays.roleExit.flagFastStable.osv.linux ;
			fact.servers.relays.roleExit.flagFastStable.osv.darwin += v.servers.relays.roleExit.flagFastStable.osv.darwin ;
			fact.servers.relays.roleExit.flagFastStable.osv.freebsd += v.servers.relays.roleExit.flagFastStable.osv.freebsd ;
			fact.servers.relays.roleExit.flagFastStable.osv.windows += v.servers.relays.roleExit.flagFastStable.osv.windows ;
			fact.servers.relays.roleExit.flagFastStable.osv.other += v.servers.relays.roleExit.flagFastStable.osv.other ;
			fact.servers.relays.roleExit.flagFastStable.tsv.010 += v.servers.relays.roleExit.flagFastStable.tsv.010 ;
			fact.servers.relays.roleExit.flagFastStable.tsv.011 += v.servers.relays.roleExit.flagFastStable.tsv.011 ;
			fact.servers.relays.roleExit.flagFastStable.tsv.012 += v.servers.relays.roleExit.flagFastStable.tsv.012 ;
			fact.servers.relays.roleExit.flagFastStable.tsv.020 += v.servers.relays.roleExit.flagFastStable.tsv.020 ;
			fact.servers.relays.roleExit.flagFastStable.tsv.021 += v.servers.relays.roleExit.flagFastStable.tsv.021 ;
			fact.servers.relays.roleExit.flagFastStable.tsv.022 += v.servers.relays.roleExit.flagFastStable.tsv.022 ;
			fact.servers.relays.roleExit.flagFastStable.tsv.023 += v.servers.relays.roleExit.flagFastStable.tsv.023 ;
			fact.servers.relays.roleExit.flagFastStable.tsv.024 += v.servers.relays.roleExit.flagFastStable.tsv.024 ;
			fact.servers.relays.roleExit.flagFastStable.pex.4 += v.servers.relays.roleExit.flagFastStable.pex.4 ;
			fact.servers.relays.roleExit.flagFastStable.pex.6 += v.servers.relays.roleExit.flagFastStable.pex.6 ;
			fact.servers.relays.roleExit.flagFastStable.pex.8 += v.servers.relays.roleExit.flagFastStable.pex.8 ;
			fact.servers.relays.roleExit.flagFastStable.pex.46 += v.servers.relays.roleExit.flagFastStable.pex.46 ;
			fact.servers.relays.roleExit.flagFastStable.pex.48 += v.servers.relays.roleExit.flagFastStable.pex.48 ;
			fact.servers.relays.roleExit.flagFastStable.pex.68 += v.servers.relays.roleExit.flagFastStable.pex.68 ;
			fact.servers.relays.roleExit.flagFastStable.pex.468 += v.servers.relays.roleExit.flagFastStable.pex.468 ;
			fact.servers.relays.roleExit.flagFastStable.pbe += v.servers.relays.roleExit.flagFastStable.pbe ;
			
			// DIR
			fact.servers.relays.roleDir.total.count += v.servers.relays.roleDir.total.count ;
			fact.servers.relays.roleDir.total.bwa += v.servers.relays.roleDir.total.bwa ;
			fact.servers.relays.roleDir.total.bwc += v.servers.relays.roleDir.total.bwc ;
			fact.servers.relays.roleDir.total.osv.linux += v.servers.relays.roleDir.total.osv.linux ;
			fact.servers.relays.roleDir.total.osv.darwin += v.servers.relays.roleDir.total.osv.darwin ;
			fact.servers.relays.roleDir.total.osv.freebsd += v.servers.relays.roleDir.total.osv.freebsd ;
			fact.servers.relays.roleDir.total.osv.windows += v.servers.relays.roleDir.total.osv.windows ;
			fact.servers.relays.roleDir.total.osv.other += v.servers.relays.roleDir.total.osv.other ;
			fact.servers.relays.roleDir.total.tsv.010 += v.servers.relays.roleDir.total.tsv.010 ;
			fact.servers.relays.roleDir.total.tsv.011 += v.servers.relays.roleDir.total.tsv.011 ;
			fact.servers.relays.roleDir.total.tsv.012 += v.servers.relays.roleDir.total.tsv.012 ;
			fact.servers.relays.roleDir.total.tsv.020 += v.servers.relays.roleDir.total.tsv.020 ;
			fact.servers.relays.roleDir.total.tsv.021 += v.servers.relays.roleDir.total.tsv.021 ;
			fact.servers.relays.roleDir.total.tsv.022 += v.servers.relays.roleDir.total.tsv.022 ;
			fact.servers.relays.roleDir.total.tsv.023 += v.servers.relays.roleDir.total.tsv.023 ;
			fact.servers.relays.roleDir.total.tsv.024 += v.servers.relays.roleDir.total.tsv.024 ;

			fact.servers.relays.roleDir.authorityTrue.count += v.servers.relays.roleDir.authorityTrue.count ;
			fact.servers.relays.roleDir.authorityTrue.bwa += v.servers.relays.roleDir.authorityTrue.bwa ;
			fact.servers.relays.roleDir.authorityTrue.bwc += v.servers.relays.roleDir.authorityTrue.bwc ;
			fact.servers.relays.roleDir.authorityTrue.osv.linux += v.servers.relays.roleDir.authorityTrue.osv.linux ;
			fact.servers.relays.roleDir.authorityTrue.osv.darwin += v.servers.relays.roleDir.authorityTrue.osv.darwin ;
			fact.servers.relays.roleDir.authorityTrue.osv.freebsd += v.servers.relays.roleDir.authorityTrue.osv.freebsd ;
			fact.servers.relays.roleDir.authorityTrue.osv.windows += v.servers.relays.roleDir.authorityTrue.osv.windows ;
			fact.servers.relays.roleDir.authorityTrue.osv.other += v.servers.relays.roleDir.authorityTrue.osv.other ;
			fact.servers.relays.roleDir.authorityTrue.tsv.010 += v.servers.relays.roleDir.authorityTrue.tsv.010 ;
			fact.servers.relays.roleDir.authorityTrue.tsv.011 += v.servers.relays.roleDir.authorityTrue.tsv.011 ;
			fact.servers.relays.roleDir.authorityTrue.tsv.012 += v.servers.relays.roleDir.authorityTrue.tsv.012 ;
			fact.servers.relays.roleDir.authorityTrue.tsv.020 += v.servers.relays.roleDir.authorityTrue.tsv.020 ;
			fact.servers.relays.roleDir.authorityTrue.tsv.021 += v.servers.relays.roleDir.authorityTrue.tsv.021 ;
			fact.servers.relays.roleDir.authorityTrue.tsv.022 += v.servers.relays.roleDir.authorityTrue.tsv.022 ;
			fact.servers.relays.roleDir.authorityTrue.tsv.023 += v.servers.relays.roleDir.authorityTrue.tsv.023 ;
			fact.servers.relays.roleDir.authorityTrue.tsv.024 += v.servers.relays.roleDir.authorityTrue.tsv.024 ;
		}
		return fact;
	};		
		
	var reduceCountriesClient = function ( key, values ) {	//	same reduce function for CB and CR map functions	
		var v;
		var temp = {	
			cc: "" ,
			cbcc: 0 ,
			crcc: 0 ,
			relay: 0 ,
			guard: 0 ,
			middle: 0 ,
			exit: 0 ,
			dir: 0 ,
			bwa: 0 ,
			bwc: 0 ,
			pbr: 0.0 ,
			pbg: 0.0 ,
			pbm: 0.0 ,
			pbe: 0.0 ,
			fast: 0 ,
			stable: 0 ,
			osv.linux : 0 ,
			osv.darwin : 0 ,
			osv.freebsd : 0 ,
			osv.windows : 0 ,
			osv.other : 0 ,
			tsv.010 : 0 ,
			tsv.011 : 0 ,
			tsv.012 : 0 ,
			tsv.020 : 0 ,
			tsv.021 : 0 ,
			tsv.022 : 0 ,
			tsv.023 : 0 ,
			tsv.024 : 0 ,
			pex.4 : 0 ,
			pex.6 : 0 ,
			pex.8 : 0 ,
			pex.46 : 0 ,
			pex.48 : 0 ,
			pex.68 : 0 ,
			pex.468 : 0 ,
			as: "" 				
		};
		values.forEach( function(v) {						// 	not much happening here since clients are already aggregated
			temp.cc = v.cc ;								//	getting the cc
			temp.cbcc = v.cbcc ;							//	catching the fish from mapCountriesClientCB
			temp.crcc = v.crcc ;							//	catching the fish from mapCountriesClientCR
			temp.relay = v.relay ;							//	only 0's from here on
			temp.guard = v.guard ;
			temp.middle = v.middle ;
			temp.exit = v.exit ;
			temp.dir = v.dir ;
			temp.bwa = v.bwa ;
			temp.bwc = v.bwc ;
			temp.pbr = v.pbr ;
			temp.pbg = v.pbg ;
			temp.pbm = v.pbm ;
			temp.pbe = v.pbe ;
			temp.fast = v.fast ;
			temp.stable = v.stable ;
			temp.osv.linux = v.osv.linux ;
			temp.osv.darwin = v.osv.darwin ;
			temp.osv.freebsd = v.osv.freebsd ;
			temp.osv.windows = v.osv.windows ;
			temp.osv.other = v.osv.other ;
			temp.tsv.010 = v.tsv.010 ;
			temp.tsv.011 = v.tsv.011 ;
			temp.tsv.012 = v.tsv.012 ;
			temp.tsv.020 = v.tsv.020 ;
			temp.tsv.021 = v.tsv.021 ;
			temp.tsv.022 = v.tsv.022 ;
			temp.tsv.023 = v.tsv.023 ;
			temp.tsv.024 = v.tsv.024 ;
			temp.pex.4 = v.pex.4 ;
			temp.pex.6 = v.pex.6 ;
			temp.pex.8 = v.pex.8 ;
			temp.pex.46 = v.pex.46 ;
			temp.pex.48 = v.pex.48 ;
			temp.pex.68 = v.pex.68 ;
			temp.pex.468 = v.pex.468 ;
			temp.as = v.as ;
		}
		return temp;
	};
		
	var reduceCountriesRelay = function ( key, values ) {
		var v;
		var temp = {	
			cc: "" ,
			cbcc: 0 ,
			crcc: 0 ,
			relay: 0 ,
			guard: 0 ,
			middle: 0 ,
			exit: 0 ,
			dir: 0 ,
			bwa: 0 ,
			bwc: 0 ,
			pbr: 0.0 ,
			pbg: 0.0 ,
			pbm: 0.0 ,
			pbe: 0.0 ,
			fast: 0 ,
			stable: 0 ,
			osv.linux : 0 ,
			osv.darwin : 0 ,
			osv.freebsd : 0 ,
			osv.windows : 0 ,
			osv.other : 0 ,
			tsv.010 : 0 ,
			tsv.011 : 0 ,
			tsv.012 : 0 ,
			tsv.020 : 0 ,
			tsv.021 : 0 ,
			tsv.022 : 0 ,
			tsv.023 : 0 ,
			tsv.024 : 0 ,
			pex.4 : 0 ,
			pex.6 : 0 ,
			pex.8 : 0 ,
			pex.46 : 0 ,
			pex.48 : 0 ,
			pex.68 : 0 ,
			pex.468 : 0 ,
			autosys: []										//	TODO	need to declare autosys before?		
		};
		values.forEach( function(v) {						//	adding up counts (except cc, cbcc, and crcc from clients)
			temp.cc = v.cc ;
			temp.cbcc = v.cbcc ;
			temp.crcc = v.crcc ;
			temp.relay += v.relay ;
			temp.guard += v.guard ;
			temp.middle += v.middle ;
			temp.exit += v.exit ;
			temp.dir += v.dir ;
			temp.bwa += v.bwa ;
			temp.bwc += v.bwc ;
			temp.pbr += v.pbr ;
			temp.pbg += v.pbg ;
			temp.pbm += v.pbm ;
			temp.pbe += v.pbe ;
			temp.fast += v.fast ;
			temp.stable += v.stable ;
			temp.osv.linux += v.osv.linux ;
			temp.osv.darwin += v.osv.darwin ;
			temp.osv.freebsd += v.osv.freebsd ;
			temp.osv.windows += v.osv.windows ;
			temp.osv.other += v.osv.other ;
			temp.tsv.010 += v.tsv.010 ;
			temp.tsv.011 += v.tsv.011 ;
			temp.tsv.012 += v.tsv.012 ;
			temp.tsv.020 += v.tsv.020 ;
			temp.tsv.021 += v.tsv.021 ;
			temp.tsv.022 += v.tsv.022 ;
			temp.tsv.023 += v.tsv.023 ;
			temp.tsv.024 += v.tsv.024 ;
			temp.pex.4 += v.pex.4 ;
			temp.pex.6 += v.pex.6 ;
			temp.pex.8 += v.pex.8 ;
			temp.pex.46 += v.pex.46 ;
			temp.pex.48 += v.pex.48 ;
			temp.pex.68 += v.pex.68 ;
			temp.pex.468 += v.pex.468 ;
			if (temp.autosys.indexOf(as) == -1) {			//	TODO	will this work?	
				temp.autosys.push(as);
			};
			temp.autosys.as += 1;
		}
		return temp;
	};
		
	var reduceCountries = function ( key, values ) {
		var v;
		var countries = new Array();
		var fact = { countries };
		var country = {	
			cc: "" ,
			cbcc: 0 ,
			crcc: 0 ,
			relay: 0 ,
			guard: 0 ,
			middle: 0 ,
			exit: 0 ,
			dir: 0 ,
			bwa: 0 ,
			bwc: 0 ,
			pbr: 0.0 ,
			pbg: 0.0 ,
			pbm: 0.0 ,
			pbe: 0.0 ,
			fast: 0 ,
			stable: 0 ,
			osv.linux : 0 ,
			osv.darwin : 0 ,
			osv.freebsd : 0 ,
			osv.windows : 0 ,
			osv.other : 0 ,
			tsv.010 : 0 ,
			tsv.011 : 0 ,
			tsv.012 : 0 ,
			tsv.020 : 0 ,
			tsv.021 : 0 ,
			tsv.022 : 0 ,
			tsv.023 : 0 ,
			tsv.024 : 0 ,
			pex.4 : 0 ,
			pex.6 : 0 ,
			pex.8 : 0 ,
			pex.46 : 0 ,
			pex.48 : 0 ,
			pex.68 : 0 ,
			pex.468 : 0 ,
			as: [] 				
		};
		values.forEach( function(v) {
			country.cc = v.cc ;
			country.cbcc = v.cbcc ;
			country.crcc = v.crcc ;
			country.relay = v.relay ;
			country.guard = v.guard ;
			country.middle = v.middle ;
			country.exit = v.exit ;
			country.dir = v.dir ;
			country.bwa = v.bwa ;
			country.bwc = v.bwc ;
			country.pbr = v.pbr ;
			country.pbg = v.pbg ;
			country.pbm = v.pbm ;
			country.pbe = v.pbe ;
			country.fast = v.fast ;
			country.stable = v.stable ;
			country.osv.linux = v.osv.linux ;
			country.osv.darwin = v.osv.darwin ;
			country.osv.freebsd = v.osv.freebsd ;
			country.osv.windows = v.osv.windows ;
			country.osv.other = v.osv.other ;
			country.tsv.010 = v.tsv.010 ;
			country.tsv.011 = v.tsv.011 ;
			country.tsv.012 = v.tsv.012 ;
			country.tsv.020 = v.tsv.020 ;
			country.tsv.021 = v.tsv.021 ;
			country.tsv.022 = v.tsv.022 ;
			country.tsv.023 = v.tsv.023 ;
			country.tsv.024 = v.tsv.024 ;
			country.pex.4 = v.pex.4 ;
			country.pex.6 = v.pex.6 ;
			country.pex.8 = v.pex.8 ;
			country.pex.46 = v.pex.46 ;
			country.pex.48 = v.pex.48 ;
			country.pex.68 = v.pex.68 ;
			country.pex.468 = v.pex.468 ;
			country.as = v.as ;
			//	finally push 'country' object onto 'countries' array
			countries.push(country);						
		}
		return fact;
	};
	
	var reduceAutosys = function ( key, values ) {
		var v;
		var autosys =new Array();
		var fact = { autosys };
		var asObject = {
			as : "" ,
			name : "" ,
			hone : "",
			relay : 0 ,
			bwa : 0 ,
			bwc : 0c ,
			fast : 0 ,
			stable : 0 ,
			guard : 0 ,
			middle : 0 ,
			exit : 0 ,
			dir : 0 ,
			pbr: 0 ,
			pbg : 0 ,
			pbm : 0 ,
			pbe : 0 ,
			countries.cc : "" ,
			countries.relay : 0 ,
			countries.bwa : 0 ,
			countries.bwc : 0 ,
			countries.pbr : 0 ,
			countries.pbg : 0 ,
			countries.pbm : 0 ,
			countries.pbe : 0
		};
		values.forEach( function(v) {
			if (autosys.objects !contains as-field with value v.as) {		//	PSEUDO CODE
				#asObject#.as = v.as;
				#asObject#.name = v.name;
				#asObject#.home = v.home;
				push #asObject#.as to autosys;
			}
			autosys.#asObject#.relay += 1 ,
			autosys.#asObject#.bwa += v.bwa ,
			autosys.#asObject#.bwc += v.bwc ,
			autosys.#asObject#.fast += v.fast ,
			autosys.#asObject#.stable += v.stable ,
			autosys.#asObject#.guard += v.guard ,
			autosys.#asObject#.middle += v.middle ,
			autosys.#asObject#.exit += v.exit ,
			autosys.#asObject#.dir += v.dir ,
			autosys.#asObject#.pbr += v.pbr ,
			autosys.#asObject#.pbg += v.pbg ,
			autosys.#asObject#.pbm += v.pbm ,
			autosys.#asObject#.pbe += v.pbe ,
			
			if (autosys.objects.as.countries !contains country-field with value v.countries.country) {		//	PSEUDO CODE
				#asObject#.as.countries.#countryObject# = v.countries.country;
				#asObject#.as.countries.#countryObject#name = v.name;
				#asObject#.as.countries.#countryObject#home = v.home;
				push #asObject#.as.countries.#countryObject# to autosys;
			}
			autosys.#asObject#.countries.#countryObject#.cc : "",			// ui
			autosys.#asObject#.countries.#countryObject#.relay += v.relay ,
			autosys.#asObject#.countries.#countryObject#.bwa += v.bwa ,
			autosys.#asObject#.countries.#countryObject#.bwc += v.bwc ,
			autosys.#asObject#.countries.#countryObject#.pbr += v.pbr ,
			autosys.#asObject#.countries.#countryObject#.pbg += v.pbg ,
			autosys.#asObject#.countries.#countryObject#.pbm += v.pbm ,
			autosys.#asObject#.countries.#countryObject#.pbe += v.pbe
				
		}
		
		return fact;
	};
	
	
	//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	FINALIZE
	//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	var finalizeFacts = function ( key, fact ) {
															// doing stuff e.g. some averages
	};
	
	
	
	//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	EXECUTION
	//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//	clients
	var aggregateClients = db.importClients.mapReduce (			
		mapClients,
		reduceClients,
		{ 
			out: { 
				reduce : "tempFacts", 						// the temporary fact collection, with _id:value structure
				nonAtomic : true							// prevents locking of the db during post-processing
			} ,			
			query : { "date" : date } ,						// limit aggregation to date
			// sort											   sorts the input documents for fewer reduce operations
			jsMode: true ,									// check if feasable! is faster, but needs more memory
			finalize : finalizeFacts
		}
	);
	
	
	//	servers 
	//	in 3 steps, because it has to be gathererd from 2 collections 
	
	var aggregateServersRelay = db.importRelays.mapReduce (			
		mapServersRelay,
		reduceServers,
		{ 
			out: { 
				reduce : "tempServers",						//	reduce to intermediate collection
				nonAtomic : true
			} ,			
			query : { "date" : date } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	var aggregateServersBridge = db.importBridges.mapReduce (			
		mapServersBridge,
		reduceServers,
		{ 
			out: { 
				reduce : "tempServers",						//	reduce to intermediate collection
				nonAtomic : true
			} ,			
			query : { "date" : date } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	var aggregateServers = db.tempServers.mapReduce (		//	take the intermediate collection as input
		mapServers,
		reduceServers,
		{ 
			out: { 
				reduce : "tempFacts",						//	reduce intermediates to final destination: tempFacts
				nonAtomic : true
			} ,			
			query : { "date" : date } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	
	//	bridges
	
	var aggregateBridges = db.importBridges.mapReduce (			
		mapBridges,
		reduceBridges,
		{ 
			out: { 
				reduce : "tempFacts",
				nonAtomic : true
			} ,			
			query : { "date" : date } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	
	//	relays
	
	var aggregateRelays = db.importRelays.mapReduce (			
		mapRelays,
		reduceRelays,
		{ 
			out: { 
				reduce : "tempFacts",
				nonAtomic : true
			} ,			
			query : { "date" : date } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	
	//	countries 		
	//	in 4 steps, because it has to be gathererd from 2 collections, one of them with 2 arrays
	
	var aggregateCountriesClientCR = db.importClients.mapReduce (			
		mapCountriesClientCR,
		reduceCountriesClient,
		{ 
			out: { 
				reduce : "tempCountries",
				nonAtomic : true
			} ,			
			query : { "date" : date } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	var aggregateCountriesClientCB = db.importClients.mapReduce (			
		mapCountriesClientCB,
		reduceCountriesClient,
		{ 
			out: { 
				reduce : "tempCountries",
				nonAtomic : true
			} ,			
			query : { "date" : date } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	var aggregateCountriesRelay = db.importRelays.mapReduce (			
		mapCountriesRelay,
		reduceCountriesRelay,
		{ 
			out: { 
				reduce : "tempCountries",
				nonAtomic : true
			} ,			
			query : { "date" : date } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	var aggregateCountries = db.tempCountries.mapReduce (			
		mapCountries,
		reduceCountries,
		{ 
			out: { 
				reduce : "tempFacts",
				nonAtomic : true
			} ,			
			query : { "date" : date } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	
	//	autonomous systems
	
	var aggregateAutosys = db.tempAutosys.mapReduce (			
		mapAutosys,
		reduceAutosys,
		{ 
			out: { 
				reduce : "tempFacts",
				nonAtomic : true
			} ,			
			query : { "date" : date } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	
}



