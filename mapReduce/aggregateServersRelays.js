//	MAP  /////////////////////////////////////////////////////////////////////////////////////////////////////
var mapServersRelays = function() {
	var map = {
		date: this.date ,
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
    emit( this.date + " ServersRelays" , map );
};

//	REDUCE  //////////////////////////////////////////////////////////////////////////////////////////////////
var reduceServersRelays = function ( key, values ) {	
	var temp = {
		date : 0 ,
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
		temp.date = v.date ;
		temp.servers.total.count += 1 ;
		temp.servers.total.bwa += v.servers.total.bwa ;
		temp.servers.total.bwc += v.servers.total.bwc ;
		temp.servers.total.osv.linux += v.servers.total.osv.linux ;
		temp.servers.total.osv.darwin += v.servers.total.osv.darwin ;
		temp.servers.total.osv.freebsd += v.servers.total.osv.freebsd ;
		temp.servers.total.osv.windows += v.servers.total.osv.windows ;
		temp.servers.total.osv.other += v.servers.total.osv.other ;
		temp.servers.total.tsv.v010 += v.servers.total.tsv.v010 ;
		temp.servers.total.tsv.v011 += v.servers.total.tsv.v011 ;
		temp.servers.total.tsv.v012 += v.servers.total.tsv.v012 ;
		temp.servers.total.tsv.v020 += v.servers.total.tsv.v020 ;
		temp.servers.total.tsv.v021 += v.servers.total.tsv.v021 ;
		temp.servers.total.tsv.v022 += v.servers.total.tsv.v022 ;
		temp.servers.total.tsv.v023 += v.servers.total.tsv.v023 ;
		temp.servers.total.tsv.v024 += v.servers.total.tsv.v024 ;
	});
	return temp;
};

//	BINDING MAP AND REDUCE  //////////////////////////////////////////////////////////////////////////////////
var aggregateServersRelays = function(theDate) {
	db.importRelays.mapReduce (			
		mapServersRelays,
		reduceServersRelays,
		{ 
			out: { 
				reduce : "tempFacts" 					//	the temporary fact collection
			//	, nonAtomic : true						//	prevents locking of the db during post-processing
			} ,			
			query : { "date" : theDate } 				//	limit aggregation to date
			//	, sort									//  sorts the input documents for fewer reduce operations
			//	, jsMode: true							//	check if feasable! is faster, but needs more memory
			//	, finalize : finalizeFacts
		}
	);
};

//	EXECUTION  ///////////////////////////////////////////////////////////////////////////////////////////////
var date = "2013-04-03 22" ;
var run = function(date) {
	aggregateServersRelays(date);
};
run(date);
