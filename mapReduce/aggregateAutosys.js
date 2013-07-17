//	MAP  /////////////////////////////////////////////////////////////////////////////////////////////////////
var mapAutosys = function() {
	var map = {
		date: this.date ,
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
    /*
	autosys.name = function(this.as) { return ""; }		//	TODO	lookup name for AS
	autosys.home = function(this.as) { return ""; }		//	TODO	lookup jurisdiction for AS
	*/
    emit( this.date + " Autosys" , map );
};

//	REDUCE  //////////////////////////////////////////////////////////////////////////////////////////////////
var reduceAutosys = function ( key, values ) {	
	var autosys =new Array();
	var countries =new Array();
	var fact = autosys ;
	var asObject = {
		date : 0 ,
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
		};
		autosys[asPos].date = v.date ;
		autosys[asPos].relay += 1 ;
		autosys[asPos].bwa += v.bwa ;
		autosys[asPos].bwc += v.bwc ;
		autosys[asPos].fast += v.fast ;
		autosys[asPos].stable += v.stable ;
		autosys[asPos].guard += v.guard ;
		autosys[asPos].middle += v.middle ;
		autosys[asPos].exit += v.exit ;
		autosys[asPos].dir += v.dir ;
		autosys[asPos].pbr += v.pbr ;
		autosys[asPos].pbg += v.pbg ;
		autosys[asPos].pbm += v.pbm ;
		autosys[asPos].pbe += v.pbe ;
		autosys[asPos].countries[ccPos].relay += v.relay ;
		autosys[asPos].countries[ccPos].bwa += v.countries.bwa ;
		autosys[asPos].countries[ccPos].bwc += v.countries.bwc ;
		autosys[asPos].countries[ccPos].pbr += v.countries.pbr ;
		autosys[asPos].countries[ccPos].pbg += v.countries.pbg ;
		autosys[asPos].countries[ccPos].pbm += v.countries.pbm ;
		autosys[asPos].countries[ccPos].pbe += v.countries.pbe ;
	});
	return fact;
};

//	BINDING MAP AND REDUCE  //////////////////////////////////////////////////////////////////////////////////
var aggregateAutosys = function(theDate) {
	db.importRelays.mapReduce (			
		mapAutosys,
		reduceAutosys,
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
	aggregateAutosys(date);
};
run(date);
