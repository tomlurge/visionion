//	MAP  /////////////////////////////////////////////////////////////////////////////////////////////////////
var mapRelays = function() {
	var mapped = {
		relays: 1
	};
	emit( "Relays" , mapped );	
};

//	REDUCE  //////////////////////////////////////////////////////////////////////////////////////////////////
var reduceRelays = function ( key, mapped ) {	
	var reduced = {
		relays : 0
	};
	mapped.forEach( function(v) {
		reduced.relays += v.relays ;
		print(reduced.relays);
	});
	return reduced;
};

//	BINDING MAP AND REDUCE  //////////////////////////////////////////////////////////////////////////////////
var aggregateRelays = function(theDate) {
	db.importRelays.mapReduce (			
		mapRelays,
		reduceRelays,
		{ 
			out: { 
				reduce : "tempFacts" 					//	the temporary fact collection
			}		
			, scope: { theDate: theDate}				
			, query : { "date" : theDate } 				//	limit aggregation to date
		}
	);
};

//	EXECUTION  ///////////////////////////////////////////////////////////////////////////////////////////////
var run = function(theDate) {
	db.tempFacts.remove()								//	careful with the axe, eugene
	aggregateRelays(theDate);
}("2013-04-03 22");



/*

1
...
100				 100
1
...		(32x)	3232
101
1
...
65				  65

3364	!=		3397


> db.importRelays.find( { date: "2013-04-03 22" }).count()
3364
> db.importRelays.findOne()
{
	"_id" : "0007D67338884CB39AF52CD37B4A1A54DCEDC448-1-2013040321",
	"addd" : "2013-06-19T14:32:39.299Z",
	"node" : "0007D67338884CB39AF52CD37B4A1A54DCEDC448",
	"nick" : "Free4all",
	"date" : "2013-04-03 21",
	"span" : 1,
	"role" : [
		"Middle",
		"Dir"
	],
	"flag" : [
		"Fast",
		"Named",
		"Running",
		"V2Dir",
		"Valid"
	],
	"bwa" : 54276,
	"tsv" : "024",
	"osv" : "linux",
	"pbr" : 0.000003,
	"pbg" : 0,
	"pbm" : 0.000009,
	"pbe" : 0,
	"as" : 21502,
	"cc" : "FR"
}
> 

> db.tempFacts.find().pretty()
{ "_id" : "Relays", "value" : { "relays" : 65 } }

*/