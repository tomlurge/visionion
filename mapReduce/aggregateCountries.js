//	MAP  /////////////////////////////////////////////////////////////////////////////////////////////////////
var mapCountries = function() {							//	putting it all together
	var map = {
//		date: this.date ,
		country : {
			cc: this.cc ,
			cbcc: this.cbcc ,
			crcc: this.crcc ,
			relay: this.relay ,
			guard: this.guard ,
			middle: this.middle ,
			exit: this.exit ,
			dir: this.dir ,
			bwa: this.bwa ,
			bwc: this.bwc ,
			pbr: this.pbr ,
			pbg: this.pbg ,
			pbm: this.pbm ,
			pbe: this.pbe ,
			fast: this.fast ,
			stable: this.stable ,
			osv : {
				linux : this.osv.linux ,
				darwin : this.osv.darwin ,
				freebsd : this.osv.freebsd ,
				windows : this.osv.windows ,
				other : this.osv.other
			} ,
			tsv : {
				v010 : this.tsv.v010 ,
				v011 : this.tsv.v011 ,
				v012 : this.tsv.v012 ,
				v020 : this.tsv.v020 ,
				v021 : this.tsv.v021 ,
				v022 : this.tsv.v022 ,
				v023 : this.tsv.v023 ,
				v024 : this.tsv.v024
			} ,
			pex : {
				p4 : this.pex.p4 ,
				p6 : this.pex.p6 ,
				p8 : this.pex.p8 ,
				p46 : this.pex.p46 ,
				p48 : this.pex.p48 ,
				p68 : this.pex.p68 ,
				p468 : this.pex.p468
			} ,
			autosys: this.autosys						//	already an array of as:#
		}
	};
	emit( this.date + " Countries" , map );
};

//	REDUCE  //////////////////////////////////////////////////////////////////////////////////////////////////
var reduceCountries = function ( key, values ) {
	var countries = new Array();
	var fact = { 
//		fact.date = this.date ;							//	TODO	not sure if this will work
		countries : [] ; 								//	TODO 	ERROR
	};	
	var country = {	
//		date : 0 ,
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
		as: [] 				
	};
	values.forEach( function(v) {
		country.cc = v.cc ;
		country.cbcc = v.cbcc ;
		country.crcc = v.crcc ;
		country.relay = v.relay ;
		country.guard = v.guard ;
		country.middle = v.middle ;
		country.exit = v.exit ;
		country.dir = v.dir ;
		country.bwa = v.bwa ;
		country.bwc = v.bwc ;
		country.pbr = v.pbr ;
		country.pbg = v.pbg ;
		country.pbm = v.pbm ;
		country.pbe = v.pbe ;
		country.fast = v.fast ;
		country.stable = v.stable ;
		country.osv.linux = v.osv.linux ;
		country.osv.darwin = v.osv.darwin ;
		country.osv.freebsd = v.osv.freebsd ;
		country.osv.windows = v.osv.windows ;
		country.osv.other = v.osv.other ;
		country.tsv.v010 = v.tsv.v010 ;
		country.tsv.v011 = v.tsv.v011 ;
		country.tsv.v012 = v.tsv.v012 ;
		country.tsv.v020 = v.tsv.v020 ;
		country.tsv.v021 = v.tsv.v021 ;
		country.tsv.v022 = v.tsv.v022 ;
		country.tsv.v023 = v.tsv.v023 ;
		country.tsv.v024 = v.tsv.v024 ;
		country.pex.p4 = v.pex.p4 ;
		country.pex.p6 = v.pex.p6 ;
		country.pex.p8 = v.pex.p8 ;
		country.pex.p46 = v.pex.p46 ;
		country.pex.p48 = v.pex.p48 ;
		country.pex.p68 = v.pex.p68 ;
		country.pex.p468 = v.pex.p468 ;
		country.as = v.as ;
		//	finally push 'country' object onto 'countries' array
		countries.push(country);				
	});
	return fact;
};

//	BINDING MAP AND REDUCE  //////////////////////////////////////////////////////////////////////////////////
var aggregateCountries = function(theDate) {
	db.tempCountries.mapReduce (			
		mapCountries,
		reduceCountries,
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
	aggregateCountries(date);
};
run(date);
