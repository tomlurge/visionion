//	MAP
var mapServers = function() {
	var Servers = {
		count : 1 ,
		bwa : this.bwa ,
		bwc : this.bwc ,
		osvLinux : (this.osv == "linux") ? 1 : 0 ,
		osvDarwin : (this.osv == "darwin") ? 1 : 0 ,
		osvFreebsd : (this.osv == "freebsd") ? 1 : 0 ,
		osvWindows : (this.osv == "windows") ? 1 : 0 ,
		osvOther : (this.osv == "other") ? 1 : 0
	};
	emit( this.date , Servers ); 
};


//	REDUCE
var reduceServers = function ( key, values ) {	
	var fact = {
		count : 0 ,
		bwa : 0 ,
		bwc : 0 ,
		osvLinux : 0 ,
		osvDarwin : 0 ,
		osvFreebsd : 0 ,
		osvWindows : 0 ,
		osvOther : 0
	};
	values.forEach( function(v) {
		fact.count += 1 ;
		fact.bwa += v.bwa ;
		fact.bwc += v.bwc ;
		fact.osvLinux += v.osvLinux ;
		fact.osvDarwin += v.osvDarwin ;
		fact.osvFreebsd += v.osvFreebsd ;
		fact.osvWindows += v.osvWindows ;
		fact.osvOther += v.osvOther ;
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
				reduce : "testFact2"
			} ,			
			query : { "date" : date }
		}
	);
};
var date = "2013-04-03 21";	

db.testFact2.remove();
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

     db.testFact2.findOne()
     {
         "_id" : "2013-04-03 21",
         "value" : {
             "count" : 101,
             "bwa" : 3636971212,
             "bwc" : 2525709180,
             "osvLinux" : 2523,
             "osvDarwin" : 93,
             "osvFreebsd" : 110,
             "osvWindows" : 625,
             "osvOther" : 0
        }
     }


*/
