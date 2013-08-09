//	MAP  /////////////////////////////////////////////////////////////////////////////////////////////////////
var mapServersBridges = function() {
	var map = {
//		nick: this.nick ,
//		servers : {
//			totalX : {
//				countX : 1
//			}
//		}
		servers: 1
	};
	emit( "ServersBridges" , map );	
};

//	REDUCE  //////////////////////////////////////////////////////////////////////////////////////////////////
var reduceServersBridges = function ( key, values ) {	
	var temp = {
//		nick : "" ,
//		servers : {
//			totalX : {
//				countX : 0
//			}
//		}
		servers : 0
	};
	values.forEach( function(v) {
//		temp.nick = v.nick ;
//		print(temp.nick);
//		temp.servers.totalX.countX += 1 ;
//		print(temp.servers.totalX.countX);
		temp.servers += 1 ;
	});
	return temp;
};

//	BINDING MAP AND REDUCE  //////////////////////////////////////////////////////////////////////////////////
var aggregateServersBridges = function(theDate) {
	// http://docs.mongodb.org/manual/reference/method/db.collection.mapReduce/#db.collection.mapReduce
	db.importBridges.mapReduce (			
		mapServersBridges,
		reduceServersBridges,
		{ 
			out: { 
				reduce : "tempFacts" 					//	the temporary fact collection
//				reduce : "visFacts" 					//	that didn't work out
			//	, nonAtomic : true						//	prevents locking of the db during post-processing
			} ,			
			query : { "date" : "2013-04-03 22" } 				//	limit aggregation to date
			//	, sort									//  sorts the input documents for fewer reduce operations
			//	, jsMode: true							//	check if feasable! is faster, but needs more memory
			//	, finalize : finalizeFacts
			, scope: { theDate: theDate}				//	http://stackoverflow.com/questions/2996268/mongodb-mapreduce-global-variables-within-map-function-instance
		}
	);
};

//	EXECUTION  ///////////////////////////////////////////////////////////////////////////////////////////////
var run = function(theDate) {
	db.tempFacts.remove()								//	careful with the axe, eugene
	aggregateServersBridges(theDate);
}("2013-04-03 22");
