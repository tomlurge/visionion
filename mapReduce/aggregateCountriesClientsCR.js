//	MAP  /////////////////////////////////////////////////////////////////////////////////////////////////////
var mapCountriesClientsCR = function() {
	var map = {
		country :  {
			cc: "" ,
			cbcc: 0 ,
			crcc: 0 ,
			relay: 0 ,
			guard: 0 ,
			middle: 0 ,
			exit: 0 ,
			dir: 0 ,
			bwa: 0 ,
			bwc: 0 ,
			pbr: 0.0 ,
			pbg: 0.0 ,
			pbm: 0.0 ,
			pbe: 0.0 ,
			fast: 0 ,
			stable: 0 ,
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
			} ,
			pex : {
				p4 : 0 ,
				p6 : 0 ,
				p8 : 0 ,
				p46 : 0 ,
				p48 : 0 ,
				p68 : 0 ,
				p468 : 0
			} ,
			as: "" 
		}
	};
	for(var field in this.country.crcc) {
		if (this.country.crcc.hasOwnProperty(field)) {
			country.cc = field;
			country.crcc = this[field];
			emit( this.country.cc , map );				//	emit is part of the loop - see: http://cookbook.mongodb.org/patterns/pivot/
		}
	}
};

//	REDUCE  //////////////////////////////////////////////////////////////////////////////////////////////////
var reduceCountriesClients = function ( key, values ) {	//	same reduce function for CB and CR map functions	
	var temp = {	
		cc: "" ,
		cbcc: 0 ,
		crcc: 0 ,
		relay: 0 ,
		guard: 0 ,
		middle: 0 ,
		exit: 0 ,
		dir: 0 ,
		bwa: 0 ,
		bwc: 0 ,
		pbr: 0.0 ,
		pbg: 0.0 ,
		pbm: 0.0 ,
		pbe: 0.0 ,
		fast: 0 ,
		stable: 0 ,
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
		} ,
		pex : {
			p4 : 0 ,
			p6 : 0 ,
			p8 : 0 ,
			p46 : 0 ,
			p48 : 0 ,
			p68 : 0 ,
			p468 : 0
		} ,
		as: "" 				
	};
	values.forEach( function(v) {						// 	not much happening here since clients are already aggregated
		temp.cc = v.cc ;								//	getting the cc
		temp.cbcc = v.cbcc ;							//	catching the fish from mapCountriesClientsCB
		temp.crcc = v.crcc ;							//	catching the fish from mapCountriesClientsCR
		temp.relay = v.relay ;							//	only 0's from here on
		temp.guard = v.guard ;
		temp.middle = v.middle ;
		temp.exit = v.exit ;
		temp.dir = v.dir ;
		temp.bwa = v.bwa ;
		temp.bwc = v.bwc ;
		temp.pbr = v.pbr ;
		temp.pbg = v.pbg ;
		temp.pbm = v.pbm ;
		temp.pbe = v.pbe ;
		temp.fast = v.fast ;
		temp.stable = v.stable ;
		temp.osv.linux = v.osv.linux ;
		temp.osv.darwin = v.osv.darwin ;
		temp.osv.freebsd = v.osv.freebsd ;
		temp.osv.windows = v.osv.windows ;
		temp.osv.other = v.osv.other ;
		temp.tsv.v010 = v.tsv.v010 ;
		temp.tsv.v011 = v.tsv.v011 ;
		temp.tsv.v012 = v.tsv.v012 ;
		temp.tsv.v020 = v.tsv.v020 ;
		temp.tsv.v021 = v.tsv.v021 ;
		temp.tsv.v022 = v.tsv.v022 ;
		temp.tsv.v023 = v.tsv.v023 ;
		temp.tsv.v024 = v.tsv.v024 ;
		temp.pex.p4 = v.pex.p4 ;
		temp.pex.p6 = v.pex.p6 ;
		temp.pex.p8 = v.pex.p8 ;
		temp.pex.p46 = v.pex.p46 ;
		temp.pex.p48 = v.pex.p48 ;
		temp.pex.p68 = v.pex.p68 ;
		temp.pex.p468 = v.pex.p468 ;
		temp.as = v.as ;
	});
	return temp;
};

//	BINDING MAP AND REDUCE  //////////////////////////////////////////////////////////////////////////////////
var aggregateCountriesClientsCR = function(theDate) {
	db.importClients.mapReduce (			
		mapCountriesClientsCR,
		reduceCountriesClients,
		{ 
			out: { 
				reduce : "tempFacts" 					//	TODO	rather merge than reduce ?
			//	, nonAtomic : true						//	prevents locking of the db during post-processing
			}
			, query : { "date" : theDate } 				//	limit aggregation to date
			//	, sort									//  sorts the input documents for fewer reduce operations
			//	, jsMode: true							//	check if feasable! is faster, but needs more memory
			//	, finalize : finalizeFacts
			, scope: { theDate: theDate}				//	http://stackoverflow.com/questions/2996268/mongodb-mapreduce-global-variables-within-map-function-instance
		}
	);
};

//	EXECUTION  ///////////////////////////////////////////////////////////////////////////////////////////////
var run = function(theDate) {
	aggregateCountriesClientsCR(theDate);
}("2013-04-03 22" );
