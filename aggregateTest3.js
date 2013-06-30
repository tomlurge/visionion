//	MAP
var mapServers = function() {
	var Servers = {
		count : 1 ,
		bwa : this.bwa ,
		bwc : this.bwc ,

            linux : (this.osv == "linux") ? 1 : 0 ,
            darwin : (this.osv == "darwin") ? 1 : 0 ,
            freebsd : (this.osv == "freebsd") ? 1 : 0 ,
            windows : (this.osv == "windows") ? 1 : 0 ,
            other : (this.osv == "other") ? 1 : 0

	};
	emit( this.date , Servers ); 
};

//	REDUCE
var reduceServers = function ( key, values ) {	
	var fact = {
		count : 0 ,
		bwa : 0 ,
		bwc : 0 ,
        osv : {
            linux : 0 ,
            darwin : 0 ,
            freebsd : 0 ,
            windows : 0 ,
            other : 0
        }
	};
	values.forEach( function(v) {
		fact.count += 1 ;
		fact.bwa += v.bwa ;
		fact.bwc += v.bwc ;
        fact.osv.linux += v.linux ;
        fact.osv.darwin += v.darwin ;
        fact.osv.freebsd += v.freebsd ;
        fact.osv.windows += v.windows ;
        fact.osv.other += v.other ;
	});
	return fact;
};

//	RUN MAPREDUCE
var run = function() {
	db.importRelays.mapReduce (			
		mapServers,
		reduceServers,
		{ 
			out: { 
				reduce : "testFact3"
			} ,			
			query : { "date" : date }
		}
	);
};
var date = "2013-04-03 21";
db.testFact3.remove();
run();


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


	AND WHAT IT IS


     > db.testFact3.findOne()
     {
         "_id" : "2013-04-03 21",
         "value" : {
             "count" : 101,
             "bwa" : 3636971212,
             "bwc" : 2525709180,
             "osv" : {
                 "linux" : NaN,
                 "darwin" : NaN,
                 "freebsd" : NaN,
                 "windows" : NaN,
                 "other" : NaN
             }
         }
     }
*/
