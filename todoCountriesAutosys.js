//	//////////////////////////////////////////////////////////////////////////////////////////////////////////	
//	MAP
//	//////////////////////////////////////////////////////////////////////////////////////////////////////////



//	countries												in 4 steps, because it has to be gathererd from 2 collections, one of them with 2 arrays
															. aggregate CountriesClientss.cbcc into a collection tempCountries with key country
															. aggregate CountriesClientss.crcc into the same collection tempCountries with key country
															. aggregate CountriesRelays into the same collection tempCountries with key country
															. aggregate all documents from that tempCountries collection into an array of objects 
															  in one field into the facts collection with key date
																																
var mapCountriesClientsCR = function() {
	var value = {
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
		if (this.country.cbcc.hasOwnProperty(field)) {
			country.cc = field;
			country.crcc = this[field];
			emit( this.country.cc , value );				//	emit is part of the loop - see: http://cookbook.mongodb.org/patterns/pivot/
		}
	}
};		
																
var mapCountriesClientsCB = function() {
	var value = {
		country : {
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
	for(field in this.country.cbcc) {
		if (this.country.cbcc.hasOwnProperty(field)) {
			country.cc = field;
			country.cbcc = this[field];
			emit( this.country.cc , value );				//	emit is part of the loop - see: http://cookbook.mongodb.org/patterns/pivot/
		}
	}
};

var mapCountriesRelays = function() {
	var value = {
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
	emit( this.country.cc , value );
};

var mapCountries = function() {							//	putting it all together
	var value = {
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
	emit( this.date , value );
};

//	autonomous systems 
var mapAutosys = function() {
	var value = {
		autosys : {
			as : this.as ,
			name : "" ,
			hone : "",
			relay : 1 ,
			bwa : this.bwa ,
			bwc : this.bwc ,
			fast : (this.flag.indexOf('fast') > -1) ? 1 : 0 ,
			stable : (this.flag.indexOf('stable') > -1) ? 1 : 0 ,
			guard : (this.role == "guard") ? 1 : 0 ,
			middle : (this.role == "middle") ? 1 : 0 ,
			exit : (this.role == "exit") ? 1 : 0 ,
			dir : (this.role == "dir") ? 1 : 0 ,
			pbr: this.pbr ,
			pbg : (this.role == "guard") ? this.pbg : 0 ,
			pbm : (this.role == "middle") ? this.pbm : 0 ,
			pbe : (this.role == "exit") ? this.pbe : 0 ,
			countries : {
				cc : this.cc ,
				relay : 1 ,
				bwa : this.bwa ,
				bwc : this.bwc ,
				pbr : this.pbr ,
				pbg : (this.role == "guard") ? this.pbg : 0 ,
				pbm : (this.role == "middle") ? this.pbm : 0 ,
				pbe : (this.role == "exit") ? this.pbe : 0
			}
		}
	};
    
	//	autosys.name = function(this.as) { return ""; }		//	TODO	lookup name for AS
	//	autosys.home = function(this.as) { return ""; }		//	TODO	lookup jurisdiction for AS

	emit( this.date , value );
};


//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
//	REDUCE
//	//////////////////////////////////////////////////////////////////////////////////////////////////////////


//	reduceCountriesClients
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

//	reduceCountriesRelays
var reduceCountriesRelays = function ( key, values ) {
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
		autosys: []										//	TODO	need to declare autosys before?		
	};
	values.forEach( function(v) {						//	adding up counts (except cc, cbcc, and crcc from clients)
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

//	reduceCountries
var reduceCountries = function ( key, values ) {
	var countries = new Array();
	var fact = { countries : [] };						// TODO 	ERROR
	var country = {	
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

//	reduceAutosys
var reduceAutosys = function ( key, values ) {
	var autosys =new Array();
	var countries =new Array();
	var fact = autosys ;
	var asObject = {
		as : "" ,
		name : "" ,
		hone : "",
		relay : 0 ,
		bwa : 0 ,
		bwc : 0 ,
		fast : 0 ,
		stable : 0 ,
		guard : 0 ,
		middle : 0 ,
		exit : 0 ,
		dir : 0 ,
		pbr: 0 ,
		pbg : 0 ,
		pbm : 0 ,
		pbe : 0 ,
		countries : []
	};
	var ccObject = {
		cc : "" ,
		relay : 0 ,
		bwa : 0 ,
		bwc : 0 ,
		pbr : 0 ,
		pbg : 0 ,
		pbm : 0 ,
		pbe : 0
	};
	values.forEach( function(v) {
		var asAquired = false;
		var asPos = 0 ;									//	autosys.length
		var ccAquired = false;
		var ccPos = 0 ;									//	countries.length
		for ( var i = 0; i < autosys.length; i++ ) {	//	first check if the AS was already acquired
			if ( autosys[i].as == v.as) {
				asAquired = true;
				asPos = i;								//	and if yes, get it's position in the array
				break;									
			}
		}
		if (!asAquired) {								//	TODO	is this initialization really necessary?
			autosys[0] = asObject;
			autosys[0].countries[0] = ccObject;
			autosys[asPos].as = v.as;
			autosys[asPos].name = v.name;
			autosys[asPos].home = v.home;
		}
		if (asAquired) {								//	for aquired AS check if country was already aquired
			for ( var i = 0; i < autosys[asPos].countries.length; i++ ) {	
				if ( autosys[asPos].countries[i].cc == v.countries.cc) {
					ccAquired = true;
					ccPos = i;
					break;									
				}
			}
		}
		if (!ccAquired) {
			autosys[asPos].countries[ccPos].cc = v.countries.cc;
		}
		autosys[asPos].relay += 1 ,
		autosys[asPos].bwa += v.bwa ,
		autosys[asPos].bwc += v.bwc ,
		autosys[asPos].fast += v.fast ,
		autosys[asPos].stable += v.stable ,
		autosys[asPos].guard += v.guard ,
		autosys[asPos].middle += v.middle ,
		autosys[asPos].exit += v.exit ,
		autosys[asPos].dir += v.dir ,
		autosys[asPos].pbr += v.pbr ,
		autosys[asPos].pbg += v.pbg ,
		autosys[asPos].pbm += v.pbm ,
		autosys[asPos].pbe += v.pbe ,
		autosys[asPos].countries[ccPos].relay += v.relay ,
		autosys[asPos].countries[ccPos].bwa += v.countries.bwa ,
		autosys[asPos].countries[ccPos].bwc += v.countries.bwc ,
		autosys[asPos].countries[ccPos].pbr += v.countries.pbr ,
		autosys[asPos].countries[ccPos].pbg += v.countries.pbg ,
		autosys[asPos].countries[ccPos].pbm += v.countries.pbm ,
		autosys[asPos].countries[ccPos].pbe += v.countries.pbe
	});
	return fact;
};

