//	MAP  /////////////////////////////////////////////////////////////////////////////////////////////////////
var mapServersRelays = function() {
	var mapping = {
		date: this.date ,
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
	};
    emit( "relay" , mapping );
};

//	REDUCE  //////////////////////////////////////////////////////////////////////////////////////////////////
var reduceServersRelays = function ( key, values ) {	
	var temp = {
		date : 0 ,
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
	};
	values.forEach( function(v) {
		temp.date = v.date ;
		temp.count += 1 ;
		temp.bwa += v.bwa ;
		temp.bwc += v.bwc ;
		temp.osv.linux += v.osv.linux ;
		temp.osv.darwin += v.osv.darwin ;
		temp.osv.freebsd += v.osv.freebsd ;
		temp.osv.windows += v.osv.windows ;
		temp.osv.other += v.osv.other ;
		temp.tsv.v010 += v.tsv.v010 ;
		temp.tsv.v011 += v.tsv.v011 ;
		temp.tsv.v012 += v.tsv.v012 ;
		temp.tsv.v020 += v.tsv.v020 ;
		temp.tsv.v021 += v.tsv.v021 ;
		temp.tsv.v022 += v.tsv.v022 ;
		temp.tsv.v023 += v.tsv.v023 ;
		temp.tsv.v024 += v.tsv.v024 ;
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
				reduce : "tempServers" //,				//	reduce to intermediate collection
			//	nonAtomic : true
			} ,			
			query : { "date" : theDate } //,
			//	jsMode: true ,
			//	finalize : finalizeFacts
		}
	);
};

//	EXECUTION  ///////////////////////////////////////////////////////////////////////////////////////////////
var date = "2013-04-03 22" ;
var run = function(date) {
/*	housekeeping	*/
//  db.tempServers.remove();							//	only for solitary testing
/*	aggregation	*/
	aggregateServersRelays(date);
};
run(date);
