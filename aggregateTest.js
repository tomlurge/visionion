//	MAP
var mapServers = function() {
	var Servers = {
		count : 1 ,
		bwa : this.bwa ,
		bwc : this.bwc /*,
		osv.linux : (this.osv == "linux") ? 1 : 0 ,
		osv.darwin : (this.osv == "darwin") ? 1 : 0 ,
		osv.freebsd : (this.osv == "freebsd") ? 1 : 0 ,
		osv.windows : (this.osv == "windows") ? 1 : 0 ,
		osv.other : (this.osv == "other") ? 1 : 0	*/
	};
	emit( this.date , Servers ); 
};


//	REDUCE
var reduceServers = function ( key, values ) {	
	var fact = {
		count : 0 ,
		bwa : 0 ,
		bwc : 0 /*,
		osv.linux : 0 ,
		osv.darwin : 0 ,
		osv.freebsd : 0 ,
		osv.windows : 0 ,
		osv.other : 0 	*/
	};
	values.forEach( function(v) {
		fact.count += 1 ;
		fact.bwa += v.bwa ;
		fact.bwc += v.bwc ;
/*		fact.osv.linux += v.osv.linux ;
		fact.osv.darwin += v.osv.darwin ;
		fact.osv.freebsd += v.osv.freebsd ;
		fact.osv.windows += v.osv.windows ;
		fact.osv.other += v.osv.other ;	*/
	});
	return fact;
};


//	RUN MAPREDUCE
var doit = function() {
	db.importRelays.mapReduce (			
		mapServers,
		reduceServers,
		{ 
			out: { 
				reduce : "testFact"
			} ,			
			query : { "date" : date }
		}
	);
};
var date = "2013-04-03 21";	

db.testFact.remove();
doit();


/*	WHAT THE RESULT SHOULD BE

	servers: {
		count: int,
		bwa: int,
		bwc: int,
		osv: {
			linux: int,
			darwin: int,
			freebsd: int,
			windows: int,
			other: int
		}
	}
	
*/