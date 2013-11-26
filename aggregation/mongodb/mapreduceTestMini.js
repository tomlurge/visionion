//	//////////////////////////////////////////////////////////////////////////////////////////////
//
//	MAP
//
//	//////////////////////////////////////////////////////////////////////////////////////////////


var mapValues = function() {
																			                    //  defining some variables to ease mapping

    var c = ( this.type == "c" ) ;																//	clients
    var b = ( this.type == "b" ) ;																//	bridges
    var r = ( this.type == "r" ) ;																//	relays
    var s = ( this.type == "b" || this.type == "r" ) ;											//	servers
	
	var osLinux = ( s && this.osv == "linux" ) ;
	var osDarwin = ( s && this.osv == "darwin" ) ;
	var osFreebsd = ( s && this.osv == "freebsd" ) ;
	var osWindows = ( s && this.osv == "windows" ) ;
	var osOther = ( s && this.osv == "other" ) ;
	
	var v010 = ( s && this.tsv == "010" ) ;
	var v011 = ( s && this.tsv == "011" ) ;
	var v012 = ( s && this.tsv == "012" ) ;
	var v020 = ( s && this.tsv == "020" ) ;
	var v021 = ( s && this.tsv == "021" ) ;
	var v022 = ( s && this.tsv == "022" ) ;
	var v023 = ( s && this.tsv == "023" ) ;
	var v024 = ( s && this.tsv == "024" ) ;
	
	
	
	var value = {
		date : theDate ,
		span : theSpan ,
/*		clients : {                                                                             //  CLIENTS
			total : 					c ?  this.cr + this.cb  : 0,
			atBridges :					c ?  this.cb : 0 ,
			atRelays : 					c ?  this.cr : 0,
			cip4 : 						c && this.cip && this.cip.v4 ? this.cip.v4 : 0,			// line 55 to 60 this.cip + this.cpt tests to account fpr missing values in import data
			cip6 : 						c && this.cip && this.cip.v6 ? this.cip.v6 : 0 ,
			cptObfs2 : 					c && this.cpt && this.cpt.obfs2 ? this.cpt.obfs2 : 0 ,
			cptObfs3 : 					c && this.cpt && this.cpt.obfs3 ? this.cpt.obfs3 : 0 ,
			cptOR : 					c && this.cpt && this.cpt.OR ? this.cpt.OR : 0 ,
			cptUnknown :				c && this.cpt && this.cpt.unknown ? this.cpt.unknown : 0
		} ,		                                                                                //  SERVERS
*/		servers : {
			total : {
 				count : 				s ?  1 : 0 ,
 				osv : 					{}														//	TODO	remove after testing
 				/* 				 ,
				bwa :	  				s ?  this.bwa : 0 ,
				bwc :	 				s ?  this.bwc : 0 ,
				osv : {	
					linux :				s && osLinux ? 1 : 0 ,
					darwin : 			s && osDarwin ? 1 : 0 ,
					freebsd : 			s && osFreebsd ? 1 : 0 ,
					windows : 			s && osWindows ? 1 : 0 ,
					other : 			s && osOther ? 1 : 0
				} ,
				tsv : {
					v010 :				s && v010 ? 1 : 0 ,
					v011 :				s && v011 ? 1 : 0 ,
					v012 :				s && v012 ? 1 : 0 ,
					v020 :				s && v020 ? 1 : 0 ,
					v021 :				s && v021 ? 1 : 0 ,
					v022 :				s && v022 ? 1 : 0 ,
					v023 :				s && v023 ? 1 : 0 ,
					v024 :				s && v024 ? 1 : 0
				}
*/			}
		} 
	};				
	emit( theDate , value );
};




//	//////////////////////////////////////////////////////////////////////////////////////////////
//	//////////////////////////////////////////////////////////////////////////////////////////////
//
//	REDUCE
//
//	//////////////////////////////////////////////////////////////////////////////////////////////


var reduceFact = function ( key, values ) {

	var fact = {
		date : "" ,
		span : 0 ,
/*		clients : {																				//	CLIENTS
			total : 0 ,
			atBridges : 0 ,
			atRelays : 0 ,
			cip4 : 0 ,
			cip6 : 0 ,
			cptObfs2 : 0 ,
			cptObfs3 : 0 ,
			cptOR : 0 ,
			cptUnknown : 0
		} ,
*/
		servers : {																				//	SERVERS
			total : {
				count : 0 ,
				bwa : 0 ,
				bwc : 0 ,
				osv : {
					linux : 0 ,
					darwin : 0 ,
					freebsd : 0 ,
					windows : 0 ,
					other : 0
				} ,
/*				tsv : {
					v010 : 0 ,
					v011 : 0 ,
					v012 : 0 ,
					v020 : 0 ,
					v021 : 0 ,
					v022 : 0 ,
					v023 : 0 ,
					v024 : 0
				}
*/
			}
		}
	};

	values.forEach( function(v) {
		fact.date = v.date ;
		fact.span = v.span ;

/*		fact.clients.total += v.clients.total ;													//	CLIENTS
		fact.clients.atBridges += v.clients.atBridges ;
		fact.clients.atRelays += v.clients.atRelays ;
		fact.clients.cip4 += v.clients.cip4 ;
		fact.clients.cip6 += v.clients.cip6 ;
		fact.clients.cptObfs2 += v.clients.cptObfs2 ;
		fact.clients.cptObfs3 += v.clients.cptObfs3 ;
		fact.clients.cptOR += v.clients.cptOR ;
		fact.clients.cptUnknown += v.clients.cptUnknown ;
*/
        fact.servers.total.count += v.servers.total.count ;					    			    //	SERVERS

		fact.servers.total.bwa += v.servers.total.bwa ;
		fact.servers.total.bwc += v.servers.total.bwc ;
		fact.servers.total.osv.linux += v.servers.total.osv.linux ;
		fact.servers.total.osv.darwin += v.servers.total.osv.darwin ;
		fact.servers.total.osv.freebsd += v.servers.total.osv.freebsd ;
		fact.servers.total.osv.windows += v.servers.total.osv.windows ;
		fact.servers.total.osv.other += v.servers.total.osv.other ;
/*		fact.servers.total.tsv.v010 += v.servers.total.tsv.v010 ;
		fact.servers.total.tsv.v011 += v.servers.total.tsv.v011 ;
		fact.servers.total.tsv.v012 += v.servers.total.tsv.v012 ;
		fact.servers.total.tsv.v020 += v.servers.total.tsv.v020 ;
		fact.servers.total.tsv.v021 += v.servers.total.tsv.v021 ;
		fact.servers.total.tsv.v022 += v.servers.total.tsv.v022 ;
		fact.servers.total.tsv.v023 += v.servers.total.tsv.v023 ;
		fact.servers.total.tsv.v024 += v.servers.total.tsv.v024 ;

*/
	});
//	printjson(fact.date);																			TODO	remove after testing
//	printjson("one more doc -  " + Date.now());
	return fact;
};



//	//////////////////////////////////////////////////////////////////////////////////////////////
//	//////////////////////////////////////////////////////////////////////////////////////////////
//
//	EXECUTE
//
//	//////////////////////////////////////////////////////////////////////////////////////////////


var runAggregation = function(date, span, update) {
   //  db.facts.remove();				 		//	{ _id : "Fact " + theSpan + " " + theDate }     TODO    remove after testing
	db.import.mapReduce (
		mapValues,
		reduceFact,
		{ 
			out: { 
				merge : "facts"		 														    //	the final fact collection
																								//  'merge' replaces existing documents with the same key
																								//  'reduce' would add values to exsiting documents - we don't want that
				, nonAtomic : true																//	prevents locking of the db during post-processing
			}
			, query : { "addd" : { "$gte" : update}  }
			, jsMode: true																		//	TODO    check: is faster, but needs more memory
			, scope: { theDate: date, theSpan: span } 		                                    //  globally (in the mapReduce job) available  variables
	        , sort : { "date" : 1 }                                                             //  speeds up mapReduce as 'date' is indexed in the import collection
																								//	but demands that "sort" equals the key of the map operation
		}
	);
}("2013-04-03 23" , 1 , "2013-08-14T09:23:45.302Z");										    //	TODO	remove self call after testing
																								//	2013-04-03 23 ^= 1365030000000 milliseconds since the UNIX epoch