//	MAP  /////////////////////////////////////////////////////////////////////////////////////////////////////
var mapClients = function() {
	var map = {
	};
	emit( "Clients" , map );
};

//	REDUCE  //////////////////////////////////////////////////////////////////////////////////////////////////
var reduceClients = function ( key, values ) {
	var fact = {	
		date : "some date" 
	};
	return fact;
};

//	BINDING MAPs AND REDUCE  /////////////////////////////////////////////////////////////////////////////////
var aggregateClients = function(theDate) {
	db.importClients.mapReduce (			
		mapClients,
		reduceClients,
		{ 
			out: { 
				merge : "tempFacts" 					//	the temporary fact collection
			}
			, query : { "date" : theDate } 				//	limit aggregation to date
			, scope: { theDate: theDate}				
		}
	);
};

//	EXECUTION  ///////////////////////////////////////////////////////////////////////////////////////////////
var run = function(theDate) {
	aggregateClients(theDate);
}("2013-04-03 22");
