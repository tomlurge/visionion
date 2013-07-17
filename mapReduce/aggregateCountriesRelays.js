//	MAP  /////////////////////////////////////////////////////////////////////////////////////////////////////
var mapCountriesRelays = function() {
	var map = {
		date: this.date ,
		country : {
			cc: this.cc ,
			cbcc: 0 ,
			crcc: 0 ,
			relay: 1 ,
			guard: (this.role == "guard") ? 1 : 0 ,
			middle: (this.role == "middle") ? 1 : 0 ,
			exit: (this.role == "exit") ? 1 : 0 ,
			dir: (this.role == "dir") ? 1 : 0 ,
			bwa: this.bwa ,
			bwc: this.bwc ,
			pbr: this.pbr ,
			pbg: (this.role == "guard") ? this.pbg : 0 ,
			pbm: (this.role == "middle") ? this.pbm : 0 ,
			pbe: (this.role == "exit") ? this.pbe : 0 ,
			fast: (this.flag.indexOf('fast') > -1) ? 1 : 0 ,
			stable: (this.flag.indexOf('stable') > -1) ? 1 : 0 ,
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
			} ,
			pex : {
				p4 : (this.role == "exit" && this.pex.indexOf(443) > -1) ? 1 : 0 ,
				p6 : (this.role == "exit" && this.pex.indexOf(6667) > -1) ? 1 : 0 ,
				p8 : (this.role == "exit" && this.pex.indexOf(80) > -1) ? 1 : 0 ,
				p46 : (this.role == "exit" && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1) ? 1 : 0 ,
				p48 : (this.role == "exit" && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1) ? 1 : 0 ,
				p68 : (this.role == "exit" && this.pex.indexOf(80) > -1 && this.pex.indexOf(6667) > -1) ? 1 : 0 ,
				p468 : (this.role == "exit" && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1) ? 1 : 0
			} ,
			as: this.as									//	walking through the import table, which contains only one as per entry
		}
	};
	emit( this.cc , map );
};

//	REDUCE  //////////////////////////////////////////////////////////////////////////////////////////////////
var reduceCountriesRelays = function ( key, values ) {
	var temp = {	
		date : 0 ,
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
		autosys: []										//	TODO	need to declare autosys before?		
	};
	values.forEach( function(v) {						//	adding up counts (except cc, cbcc, and crcc from clients)
		temp.date = v.date ;
		temp.cc = v.cc ;
		temp.cbcc = v.cbcc ;
		temp.crcc = v.crcc ;
		temp.relay += v.relay ;
		temp.guard += v.guard ;
		temp.middle += v.middle ;
		temp.exit += v.exit ;
		temp.dir += v.dir ;
		temp.bwa += v.bwa ;
		temp.bwc += v.bwc ;
		temp.pbr += v.pbr ;
		temp.pbg += v.pbg ;
		temp.pbm += v.pbm ;
		temp.pbe += v.pbe ;
		temp.fast += v.fast ;
		temp.stable += v.stable ;
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
		temp.pex.p4 += v.pex.p4 ;
		temp.pex.p6 += v.pex.p6 ;
		temp.pex.p8 += v.pex.p8 ;
		temp.pex.p46 += v.pex.p46 ;
		temp.pex.p48 += v.pex.p48 ;
		temp.pex.p68 += v.pex.p68 ;
		temp.pex.p468 += v.pex.p468 ;
		if (temp.autosys.indexOf(as) == -1) {			//	TODO	will this work?	
			temp.autosys.push(as);
		}
		temp.autosys.as += 1;
	});
	return temp;
};

//	BINDING MAP AND REDUCE  //////////////////////////////////////////////////////////////////////////////////
var aggregateCountriesRelays = function(theDate) {
	db.importRelays.mapReduce (			
		mapCountriesRelays,
		reduceCountriesRelays,
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
	aggregateCountriesRelays(date);	
};
run(date);
