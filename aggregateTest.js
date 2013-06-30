/*	TODO
wrap "cpt<??>" etc in quotes?
predefine the objects before the dot so that the machine can know if it's an array, an object etc ?
*/

//	PRELIMINAIRIES

var cleanup = function() {
	db.tempCountries.remove();
	db.tempAutosys.remove();
	db.tempFacts.remove();;
	db.tempTest.remove();
}		


//	CONFIG DATE

var date = "2013-04-03 21" ;


//	START MAPREDUCE JOBS

cleanup();
aggregateClients();


//	WORKERS

var mapClients = function() {
	var clients = {
	/*
		clients.total : this.cr + this.cb ,
		clients.atBridges : this.cb ,
		clients.atRelays : this.cr ,
		clients.cip4 : this.cip.v4 ,
		clients.cip6 : this.cip.v6 ,
		clients.cptObfs2 : this.cpt.obfs2 ,
		clients.cptObfs3 : this.cpt.obfs3 ,
		clients.cpt<OR> : this.cpt.<OR> ,
		clients.cpt<??> : this.cpt.<??>
	*/
		total : this.cr + this.cb ,
		atBridges : this.cb ,
		atRelays : this.cr ,
		cip4 : this.cip.v4 ,
		cip6 : this.cip.v6 ,
		cptObfs2 : this.cpt.obfs2 ,
		cptObfs3 : this.cpt.obfs3 ,
//		cpt<OR> : this.cpt.<OR> ,
//		cpt<??> : this.cpt.<??>
	
	}
	emit ( date , clients );
};


var reduceClients = function ( key, values ) {
	var v;
	var fact = {	
	/*
		clients.total : 0 ,
		clients.atBridges : 0 ,
		clients.atRelays : 0 ,
		clients.cip4 : 0 ,
		clients.cip6 : 0 ,
		clients.cptObfs2 : 0 ,
		clients.cptObfs3 : 0 ,
		clients.cpt<OR> : 0 ,
		clients.cpt<??> : 0
	*/	
		total : 0 ,
		atBridges : 0 ,
		atRelays : 0 ,
		cip4 : 0 ,
		cip6 : 0 ,
		cptObfs2 : 0 ,
		cptObfs3 : 0 ,
	//	cpt<OR> : 0 ,
	//	cpt<??> : 0
	};
	values.forEach( function(v) { 
	/*
		fact.clients.total += v.clients.total;
		fact.clients.atBridges += v.clients.atBridges ;
		fact.clients.atRelays += v.clients.atRelays ;
		fact.clients.cip4 += v.clients.cip4 ;
		fact.clients.cip6 += v.clients.cip6 ;
		fact.clients.cptObfs2 += v.clients.cptObfs2 ;
		fact.clients.cptObfs3 += v.clients.cptObfs3 ;
		fact.clients.cpt<OR> += v.clients.cpt<OR> ;
		fact.clients.cpt<??> += v.clients.cpt<??> 
	*/
		fact.total += v.total;
		fact.atBridges += v.atBridges ;
		fact.atRelays += v.atRelays ;
		fact.cip4 += v.cip4 ;
		fact.cip6 += v.cip6 ;
		fact.cptObfs2 += v.cptObfs2 ;
		fact.cptObfs3 += v.cptObfs3 ;
	//	fact.clients.cpt<OR> += v.clients.cpt<OR> ;
	//	fact.clients.cpt<??> += v.clients.cpt<??> 
	}
	return fact;
};


var aggregateClients = db.importClients.mapReduce (			
	mapClients,
	reduceClients,
	{ 
		out: { 
			reduce : "tempTest", 						// the temporary fact collection, with _id:value structure
			nonAtomic : true							// prevents locking of the db during post-processing
		} ,			
		query : { "date" : date } ,						// limit aggregation to date
		// sort											   sorts the input documents for fewer reduce operations
		jsMode: true ,									// check if feasable! is faster, but needs more memory
		finalize : finalizeFacts
	}
);
