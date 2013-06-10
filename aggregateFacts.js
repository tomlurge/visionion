/* http://docs.mongodb.org/manual/tutorial/map-reduce-examples/ */

// define a map function
var myMap = function() {
	emit (	
		this.date,								// this always refers to the instance document 
												// the map function is currently processing
		{	
			guards: this.guards					// gibt ein document zurück: "{guards: int}"
		}
	);
};

// define a corresponding reduce function
var myReduce = function ( key, valuesArray ) {	// key ist das erste element aus emit
												// valuesArray ein array der zweiten elemente über alle keys
  var sum = 0;
  values.forEach(function(guard) {
    sum += guards.count;						// guards.count gibt es garnicht, nur so als beispiel
  });
  return {guards: sum};
};


var myResult = db.importCollection.mapReduce ( 
	myMap, 
	myReduce, 
	{out: "facts"} 
);