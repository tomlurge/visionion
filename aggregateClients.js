//	MAP  /////////////////////////////////////////////////////////////////////////////////////////////////////
var mapClients = function() {
	var mapping = {
		clients : {
			total : this.cr + this.cb ,
			atBridges : this.cb ,
			atRelays : this.cr ,
			cip4 : this.cip.v4 ,
			cip6 : this.cip.v6 ,
			cptObfs2 : this.cpt.obfs2 ,
			cptObfs3 : this.cpt.obfs3 ,
			cptOR : this.cpt.OR ,
			cptUnknown : this.cpt.Unknown
		}
	};
	emit( this.date , mapping );
};

//	REDUCE  //////////////////////////////////////////////////////////////////////////////////////////////////
var reduceClients = function ( key, values ) {
	var fact = {	
		clients : {
			total : 0 ,
			atBridges : 0 ,
			atRelays : 0 ,
			cip4 : 0 ,
			cip6 : 0 ,
			cptObfs2 : 0 ,
			cptObfs3 : 0 ,
			cptOR : 0 ,
			cptUnknown : 0
		}
	};
	values.forEach( function(v) { 
		fact.clients.total += v.clients.total;
		fact.clients.atBridges += v.clients.atBridges ;
		fact.clients.atRelays += v.clients.atRelays ;
		fact.clients.cip4 += v.clients.cip4 ;
		fact.clients.cip6 += v.clients.cip6 ;
		fact.clients.cptObfs2 += v.clients.cptObfs2 ;
		fact.clients.cptObfs3 += v.clients.cptObfs3 ;
		fact.clients.cptOR += v.clients.cptOR ;
		fact.clients.cptUnknown += v.clients.cptUnknown ;
	});
	return fact;
};

//	BINDING MAPs AND REDUCE  /////////////////////////////////////////////////////////////////////////////////
var aggregateClients = function(theDate) {
	db.importClients.mapReduce (			
		mapClients,
		reduceClients,
		{ 
			out: { 
				reduce : "tempFacts", 					//	the temporary fact collection, with _id:value structure
			//	nonAtomic : true						//	prevents locking of the db during post-processing
			} ,			
			query : { "date" : theDate } ,				//	limit aggregation to date
			//	sort									//  sorts the input documents for fewer reduce operations
			//	jsMode: true ,							//	check if feasable! is faster, but needs more memory
			//	finalize : finalizeFacts
		}
	);
};

//	EXECUTION  ///////////////////////////////////////////////////////////////////////////////////////////////
var date = "2013-04-03 22" ;	
var run = function(date) {
/*	housekeeping	*/
    db.tempFacts.remove();	
/*	aggregation		*/
	aggregateClients(date);								//	OKAY
};
run(date);
