//	MAP  /////////////////////////////////////////////////////////////////////////////////////////////////////
var mapServers = function() {
	var mapping = {
		servers : {
			total : {
				count : 1 ,
				bwa : this.bwa ,
				bwc : this.bwc ,
				osv : {
					linux : (this.osv == "linux") ? 1 : 0 ,
					darwin : (this.osv == "darwin") ? 1 : 0 ,
					freebsd : (this.osv == "freebsd") ? 1 : 0 ,
					windows : (this.osv == "windows") ? 1 : 0 ,
					other : (this.osv == "other") ? 1 : 0
				} ,
				tsv : {
					v010 : (this.tsv == "010") ? 1 : 0 ,
					v011 : (this.tsv == "011") ? 1 : 0 ,
					v012 : (this.tsv == "012") ? 1 : 0 ,
					v020 : (this.tsv == "020") ? 1 : 0 ,
					v021 : (this.tsv == "021") ? 1 : 0 ,
					v022 : (this.tsv == "022") ? 1 : 0 ,
					v023 : (this.tsv == "023") ? 1 : 0 ,
					v024 : (this.tsv == "024") ? 1 : 0
				}
			}
		}
	};
    emit( this.date , mapping );
};

//	REDUCE  //////////////////////////////////////////////////////////////////////////////////////////////////
var reduceServers = function ( key, values ) {	
	var fact = {
		servers : {
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
				tsv : {
					v010 : 0 ,
					v011 : 0 ,
					v012 : 0 ,
					v020 : 0 ,
					v021 : 0 ,
					v022 : 0 ,
					v023 : 0 ,
					v024 : 0
				}
			}
		}
	};
	values.forEach( function(v) {
		fact.servers.total.count += 1 ;
		fact.servers.total.bwa += v.servers.total.bwa ;
		fact.servers.total.bwc += v.servers.total.bwc ;
		fact.servers.total.osv.linux += v.servers.total.osv.linux ;
		fact.servers.total.osv.darwin += v.servers.total.osv.darwin ;
		fact.servers.total.osv.freebsd += v.servers.total.osv.freebsd ;
		fact.servers.total.osv.windows += v.servers.total.osv.windows ;
		fact.servers.total.osv.other += v.servers.total.osv.other ;
		fact.servers.total.tsv.v010 += v.servers.total.tsv.v010 ;
		fact.servers.total.tsv.v011 += v.servers.total.tsv.v011 ;
		fact.servers.total.tsv.v012 += v.servers.total.tsv.v012 ;
		fact.servers.total.tsv.v020 += v.servers.total.tsv.v020 ;
		fact.servers.total.tsv.v021 += v.servers.total.tsv.v021 ;
		fact.servers.total.tsv.v022 += v.servers.total.tsv.v022 ;
		fact.servers.total.tsv.v023 += v.servers.total.tsv.v023 ;
		fact.servers.total.tsv.v024 += v.servers.total.tsv.v024 ;
	});
	return fact;
};

//	BINDING MAP AND REDUCE  //////////////////////////////////////////////////////////////////////////////////
var aggregateServers = function(theDate) {
	db.tempServers.mapReduce (			
		mapServers,
		reduceServers,
		{ 
			out: { 
				reduce : "tempFacts",
			//	nonAtomic : true
			} ,			
			query : { "date" : theDate } ,
			//	jsMode: true ,
			//	finalize : finalizeFacts
		}
	);
};

//	EXECUTION  ///////////////////////////////////////////////////////////////////////////////////////////////
var date = "2013-04-03 22" ;
var run = function(date) {
/*	housekeeping	*/
    db.tempFacts.remove();
/*	aggregation	*/
	aggregateServers(date);
};
run(date);
