var mapValues = function() {
    var s = ( this.type == "b" || this.type == "r" ) ;											//	servers
	var value = {
		servers : {
			total : {
 				count : 				s ?  1 : 0 ,
			} 
		}
	};				
	emit( theDate , value );
};

var reduceFact = function ( key, values ) {
	var fact = {
		servers : {																				//	SERVERS
			total : {
				count : 0 ,
			}
		}
	};
	values.forEach( function(v) {
        fact.servers.total.count += v.servers.total.count ;					    			    //	SERVERS
	});
	return fact;
};

var runAggregation = function() {
	db.import.mapReduce (
		mapValues,
		reduceFact,
		{ 
			out: { 
				merge : "facts"		}
			, query : { "date" : "2013-04-03 23"  }
			, jsMode: true																		//	TODO    check: is faster, but needs more memory
	        , sort : { "date" : 1 }                                                             //  speeds up mapReduce as 'date' is indexed in the import collection
																								//	but demands that "sort" equals the key of the map operation
		}
	);
}();		