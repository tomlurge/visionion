//	MAP  /////////////////////////////////////////////////////////////////////////////////////////////////////
var mapServersRelays = function() {
	var mapping = {
		servers : {
			serversRelays : {							//	"serversRelays" will become "total" in the next aggregation step
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
//	emit( (this.date, "relays") , mapping );   			//	combined key '{this.date, "relays"}'
    emit( this.date , mapping );						//  TODO    only for testing
};

//	REDUCE  //////////////////////////////////////////////////////////////////////////////////////////////////
var reduceServersRelays = function ( key, values ) {	
	var temp = {
		servers : {
			serversRelays : {
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
		temp.servers.serversRelays.count += 1 ;
		temp.servers.serversRelays.bwa += v.servers.serversRelays.bwa ;
		temp.servers.serversRelays.bwc += v.servers.serversRelays.bwc ;
		temp.servers.serversRelays.osv.linux += v.servers.serversRelays.osv.linux ;
		temp.servers.serversRelays.osv.darwin += v.servers.serversRelays.osv.darwin ;
		temp.servers.serversRelays.osv.freebsd += v.servers.serversRelays.osv.freebsd ;
		temp.servers.serversRelays.osv.windows += v.servers.serversRelays.osv.windows ;
		temp.servers.serversRelays.osv.other += v.servers.serversRelays.osv.other ;
		temp.servers.serversRelays.tsv.v010 += v.servers.serversRelays.tsv.v010 ;
		temp.servers.serversRelays.tsv.v011 += v.servers.serversRelays.tsv.v011 ;
		temp.servers.serversRelays.tsv.v012 += v.servers.serversRelays.tsv.v012 ;
		temp.servers.serversRelays.tsv.v020 += v.servers.serversRelays.tsv.v020 ;
		temp.servers.serversRelays.tsv.v021 += v.servers.serversRelays.tsv.v021 ;
		temp.servers.serversRelays.tsv.v022 += v.servers.serversRelays.tsv.v022 ;
		temp.servers.serversRelays.tsv.v023 += v.servers.serversRelays.tsv.v023 ;
		temp.servers.serversRelays.tsv.v024 += v.servers.serversRelays.tsv.v024 ;
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
				reduce : "tempServers",					//	reduce to intermediate collection
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
    db.tempServers.remove();
/*	aggregation	*/
	aggregateServersRelays(date);
};
run(date);
