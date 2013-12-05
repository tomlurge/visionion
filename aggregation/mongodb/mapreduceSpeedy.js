var runAggregation = function(date, span, update) {

//	//////////////////////////////////////////////////////////////////////////////////////////////
//
//	PRELIMINARIES
//
//	//////////////////////////////////////////////////////////////////////////////////////////////


	var osv = [
		{ 	name : "linux" ,
			test : ( this.osv == "linux" )
		} ,
		{ 	name : "darwin" ,
			test : ( this.osv == "darwin" )
		} ,
		{ 	name : "freebsd" ,
			test : ( this.osv == "freebsd" )
		} ,
		{ 	name : "windows" ,
			test : ( this.osv == "windows" )
		} ,
		{ 	name : "other" ,
			test : ( this.osv == "other" )
		}
	] ;

	var tsv = [
		{	name : "v010" ,
			test : ( this.tsv == "010" )
		} ,
		{	name : "v011" ,
			test : ( this.tsv == "011" )
		} ,
		{	name : "v012" ,
			test : ( this.tsv == "012" )
		} ,
		{	name : "v020" ,
			test : ( this.tsv == "020" )
		} ,
		{	name : "v021" ,
			test : ( this.tsv == "021" )
		} ,
		{	name : "v022" ,
			test : ( this.tsv == "022" )
		} ,
		{	name : "v023" ,
			test : ( this.tsv == "023" )
		} ,
		{	name : "v024" ,
			test : ( this.tsv == "024" )
		} ,
		{	name : "v025" ,
			test : ( this.tsv == "025" )
		}
	] ;

	var pex = [
		{ 	name : "p4" ,
			test : ( this.pex.indexOf(443) > -1 )
		} ,
		{ 	name : "p6" ,
			test : ( this.pex.indexOf(6667) > -1 )
		} ,
		{ 	name : "p8" ,
			test : ( this.pex.indexOf(80) > -1 )
		} ,
		{ 	name : "p46" ,
			test : ( this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1 )
		} ,
		{ 	name : "p48" ,
			test : ( this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1 )
		} ,
		{ 	name : "p68" ,
			test : ( this.pex.indexOf(80) > -1 && this.pex.indexOf(6667) > -1 )
		} ,
		{ 	name : "p468" ,
			test : ( this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1 )
		}
	] ;

	var roles = [
		{ 	name : "guard" ,
			test : ( this.role.indexOf("Guard") > -1 ) ,
			prob : ( this.pbg ) ,
			plbl : "pbg"                                                                    //  "plbl" short for "probability label"
		} ,
		{	name : "middle" ,
			test : ( this.role.indexOf("Middle") > -1 ) ,
			prob : ( this.pbm ) ,
			plbl : "pbm"
		} ,
		{ 	name : "exit" ,
			test : ( this.role.indexOf("Exit") > -1 ) ,
			prob : ( this.pbe ) ,
			plbl : "pbe"
		} ,
		{ 	name : "dir" ,
			test : ( this.role.indexOf("Dir") > -1 )
		}
	] ;

	var flags = [
		{ 	name : "notFastStable" ,
			test : ( !this.flag.indexOf("Fast") > -1 && !this.flag.indexOf("Stable") > -1 )
		} ,
		{ 	name : "fast" ,
			test : ( this.flag.indexOf("Fast") > -1  && !this.flag.indexOf("Stable") > -1 )
		} ,
		{ 	name : "stable" ,
			test : ( !this.flag.indexOf("Fast") > -1 && this.flag.indexOf("Stable") > -1 )
		} ,
		{ 	name : "fastStable" ,
			test : ( this.flag.indexOf("Fast") > -1 && this.flag.indexOf("Stable") > -1 )
		} ,
		{ 	name : "authority" ,
			test : ( this.flag.indexOf("Authority") > -1 )
		}
	] ;

	var brps = [
		{	name : "email" ,
			test : ( this.brp == "email" )
		} ,
		{	name : "https" ,
			test : ( this.brp == "https" )
		} ,
		{	name : "other" ,
			test : ( this.brp == "other" )
		}
	] ;

	var brts = [
		{	name : "obfs2" ,
			test : ( this.brt.indexOf('obfs2')  > -1 )                                          //  TODO check if "> -1"  is the right thing to do
		} ,
		{	name : "obfs3" ,
			test : ( this.brt.indexOf('obfs3')  > -1 )
		} ,
		{	name : "obfs23" ,
			test : ( this.brt.indexOf('obfs2')  > -1 && this.brt.indexOf('obfs3')  > -1 )
		}
	] ;

	var bres = [
		{	name : "bre" ,
			test : ( this.bre )
		}
	] ;


																									//	templates
	var Server = new Object();
	Server.prototype = {
		count :  	1 ,
		bwa :  		this.bwa ,
		bwc :   	this.bwc ,
		osv :		pop(osv) ,
		tsv :		pop(tsv)
	} ;

	function pop(x) {
		var p = {} ;
		for ( var v in x ) {
			p[v.name]  = v.test() ;       // die klammern hinter test sollen bewirken, dass er sofort ausgeführt wird
		}
		return p;
	}

	var ServerInit = new Object();
	ServerInit.prototype = {
		count :  	0 ,
		bwa :  		0 ,
		bwc :   	0 ,
		osv :		popInit(osv) ,
		tsv :		popInit(tsv)
	} ;

	function popInit(x) {
		var p = {} ;
		for ( var v in x ) {
			p[v.name]  = 0 ;
		}
		return p;
	}




//	//////////////////////////////////////////////////////////////////////////////////////////////
//
//	MAP
//
//	//////////////////////////////////////////////////////////////////////////////////////////////


	var mapValues = function() {

		var value = {																				// the mothership
			date : 		theDate ,
			span : 		theSpan ,
			clients : 	{} ,
			servers  : 	{} ,
			countries : [] ,
			autosys :	[]
		} ;


		if( this.type == "r" ) {																	//	RELAYS
			value.servers.total = new Server() ;													//	don't forget to pay credit to servers
			value.servers.relays = {} ;
			value.servers.relays.total = new Server() ;
			value.servers.relays.total.pbr = this.pbr ;
			value.servers.relays.roles = {} ;                                                       // really necessary?
			for ( var role in roles ) {
				if ( role.test ) {
					value.servers.relays.roles[role.name] = new Server() ;			                // populate roles
					if ( role.prob )                                                                // role "dir" has no probability value
						value.servers.relays[role.name][role.plbl] = this[role.plbl] ;
					if ( role.name == "exit" )
						value.servers.relays.roles.exit.pex = pop(pex) ;
				}
			}
			value.servers.relays.flags = {} ;                                                       // really necessary?
			for ( var flag in flags ) {
				if ( flag.test ) {
					value.servers.relays.flags[flag.name] = new Server() ; 	                        // populate flags
				}
			}
		}
		else if( this.type == "b" ) {																//	BRIDGES
			value.servers.total = new Server() ;													//	don't forget to pay credit to servers
			value.servers.bridges = {} ;
			value.servers.bridges.total = new Server();
			value.servers.bridges.brps = {} ;
			for ( var brp in brps ) {
				if ( brp.test ) {
					value.servers.bridges.brps[brp.name] = new Server() ;
				}
			}
			value.servers.bridges.brts = {} ;
			for ( var brt in brts ) {
				if ( brt.test ) {
					value.servers.bridges.brts[brt.name] = new Server() ;
				}
			}
			if ( bres[0].test ) {
				value.servers.bridges.bres = {} ;
				value.servers.bridges.bres.bre = new Server() ;
			}
		}
		else if( this.type == "c" ) {																//	CLIENTS
			value.clients = {
				total : 	this.cr + this.cb ,
				atBridges :	this.cb ,
				atRelays : 	this.cr ,
				cip4 : 		this.cip ? this.cip.v4 : 0 ,								            // line 55 to 60 this.cip + this.cpt tests to account for missing values in import data
				cip6 : 		this.cip ? this.cip.v6 : 0 ,
				cptObfs2 : 	this.cpt ? this.cpt.obfs2 : 0 ,
				cptObfs3 : 	this.cpt ? this.cpt.obfs3 : 0 ,
				cptOR : 	this.cpt ? this.cpt.OR : 0 ,
				cptUnknown :this.cpt ? this.cpt.unknown : 0
			}
		}


		if( this.type == "r" && this.as ) {															//  AUTOSYS
			var sys = {
				as :                    this.as ,
				//  name :           	function(as) { return name; } : ""						    //	TODO	lookup name for AS
				//  home :          	function(as) { return home; } : "" 						    //	TODO	lookup home country for AS
				relay :                 1 ,
				bwa :                   this.bwa ,
				bwc :                   this.bwc ,
				pbr:                    this.pbr ,
				pbg :                   this.pbg ,
				pbm :                   this.pbm ,
				pbe :                   this.pbe ,
				countries :             [{}]
			} ;
			if ( this.cc ) {
				sys.countries[0].cc = this.cc ;
				sys.countries[0].relay = 1 ;
				sys.countries[0].bwa = this.bwa ;
				sys.countries[0].bwc = this.bwc ;
				sys.countries[0].pbr = this.pbr ;
				sys.countries[0].pbg = this.pbg ;
				sys.countries[0].pbm = this.pbm ;
				sys.countries[0].pbe = this.pbe ;
			}
			for (var role in roles) {
				if ( role.test ) {
					sys[role.name] = 1 ;
					if ( this.cc ) sys.countries[0][role.name] = 1 ;
				}
			}
			for (var flag in flags) {
				if ( flag.test ) {
					sys[flag.name] = 1 ;
					if ( this.cc ) sys.countries[0][flag.name] = 1 ;
				}
			}
			value.autosys.push(sys)
		}

																									//  COUNTRIES
	/* 	aggregating countries
		country information can come from 2 sources: client data and relay data.
		when it comes from clients it contains 2 arrays: one for number of clients connecting
		through bridges by country, one for number of clients connecting through relays by
		country (this data is already pre-aggregated before import in one clients document
		per datetime). when the document comes from a relay it may contain at most 1 country
		(the country the relay is located in) and eventually the autonomous system.
		in the end we want to have an array of uniform country objects with all the data
		available.  these two types require rather different procedures when aggregating.
		in the map step
		we therefor first check if the type of the document at hand is "c"
		(client) or "r" (relay) and populate a country template accordingly.
		we have 3 cases since clients data contains 2 country arrays: cbcc and crcc. in each
		case we work from the same country template and fill it with the data from the mapped
		document.
		the countries array constructed from a mapped client type document may contain 2
		documents for each country - one from cbcc and one from crcc - and a total of about
		500 country documents (currently iso 3166 lists 254 countries) whereas a relay
		document maps to at most one country entry in the countries array.

		in the reduce step
		we than always first check if the country at hand is already contained in the
		fact.countries array. if so, we add new data to the values of that object, if not we
		push the country object at hand onto the fact.countries array.
		autosys is an array within the object and therefor needs an inner loop.
	*/

		function CountryObject() {}
	    CountryObject.prototype = {
			country: 			"" ,
			cbcc:				0 ,
			crcc:				0 ,
			relay: 				0 ,
			bwa: 				0 ,
			bwc: 				0 ,
			pbr: 				0 ,
			osv :               popInit(osv),
			tsv :               popInit(tsv) ,
			pex :               popInit(pex) ,
			autosys :			[]
		} ;
		for (var role in roles) {
			CountryObject.prototype[role.name] = 0 ;
			if (role.prob) CountryObject.prototype[role.plbl] = 0 ;
		}
		for (var flag in flags) { CountryObject.prototype[flag.name] = 0 }



		if (this.type == "c") {																	    //	if input document is of type "c" (client) just add client information,
			for(var cb in this.cbcc) {
				if (this.cbcc.hasOwnProperty(cb)) {
	                var cbccCountryObject = new CountryObject();
	                cbccCountryObject.country = cb ;
	                cbccCountryObject.cbcc = this.cbcc[cb] ;
	                cbccCountryObject.crcc = 0 ;
	                cbccCountryObject.relay = 0 ;
	                cbccCountryObject.bwa = 0 ;
	                cbccCountryObject.bwc = 0 ;
	                cbccCountryObject.pbr = 0 ;
					for (var role in roles) {
						cbccCountryObject[role.name] = 0 ;
						if (role.prob) cbccCountryObject[role.plbl] = 0 ;
					}
					for (var flag in flags) { cbccCountryObject[flag.name] = 0 ; }
	                cbccCountryObject.osv = {} ;
						for (var o in osv) { cbccCountryObject.osv[o.name] = 0 ; }
	                cbccCountryObject.tsv = {} ;
						for (var t in tsv) { cbccCountryObject.tsv[t.name] = 0 ; }
	                cbccCountryObject.pex = {} ;
						for (var p in pex) { cbccCountryObject.pex[p.name] = 0 ; }
	                cbccCountryObject.autosys = [] ;
	                value.countries.push(cbccCountryObject) ;
	            }
			}
			for(var cr in this.crcc) {
				if (this.crcc.hasOwnProperty(cr)) {
	                var crccCountryObject = new CountryObject();
	                crccCountryObject.country = cr ;
	                crccCountryObject.crcc = this.crcc[cr] ;
	                crccCountryObject.cbcc = 0 ;											        //	reset cbcc to 0, otherwise it will still hold the value from the last cbcc run
	                crccCountryObject.relay = 0 ;
	                crccCountryObject.bwa = 0 ;
	                crccCountryObject.bwc = 0 ;
	                crccCountryObject.pbr = 0 ;
					for (var role in roles) {
						crccCountryObject[role.name] = 0 ;
						if (role.prob) crccCountryObject[role.plbl] = 0 ;
					}
					for (var flag in flags) { crccCountryObject[flag.name] = 0 ; }
					crccCountryObject.osv = {} ;
					for (var o in osv) { crccCountryObject.osv[o.name] = 0 ; }
					crccCountryObject.tsv = {} ;
					for (var t in tsv) { crccCountryObject.tsv[t.name] = 0 ; }
					crccCountryObject.pex = {} ;
					for (var p in pex) { crccCountryObject.pex[p.name] = 0 ; }
	                crccCountryObject.osv = {} ;
	                crccCountryObject.autosys = [] ;
	                value.countries.push(crccCountryObject);
				}
			}
		}
		else if (this.type == "r" && this.cc) {                                                     //  if it's a relay and cc field is not empty
	        var rCountryObject = new CountryObject();
			rCountryObject.country = this.cc ;
			rCountryObject.cbcc = 0 ;
			rCountryObject.crcc = 0 ;
			rCountryObject.relay = 1 ;
			rCountryObject.pbr = this.pbr ;
			for (var role in roles) {
				if (role.test)  {
					rCountryObject[role.name] = 1 ;
					if (role.prob) rCountryObject[role.plbl] = this[role.plbl] ;
				}
			}
			for (var flag in flags) {
				if (flag.test)  rCountryObject[flag.name] = 1 ;
			}
			rCountryObject.bwa = this.bwa ;
			rCountryObject.bwc = this.bwc ;
			rCountryObject.osv = {} ;
	        for (var o in osv) {
		        if (o.test) rCountryObject.osv[o.name] = 1  ;
	        }
	        rCountryObject.tsv = {} ;
			for (var t in tsv) {
				if (t.test) rCountryObject.tsv[t.name] = 1 ;
			}
			rCountryObject.pex = {} ;
			if ( this.role.indexOf("Exit") > -1 ) {
				this.pex.indexOf(443) > -1 ? rCountryObject.pex.p4 = 1 : rCountryObject.pex.p4 = 0 ;
				this.pex.indexOf(6667) > -1 ? rCountryObject.pex.p6 = 1 : rCountryObject.pex.p6 = 0 ;
				this.pex.indexOf(80) > -1 ? rCountryObject.pex.p8 = 1 : rCountryObject.pex.p8 = 0 ;
				this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1 ? rCountryObject.pex.p46 = 1 : rCountryObject.pex.p46 = 0 ;
				this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1 ? rCountryObject.pex.p48 = 1 : rCountryObject.pex.p48 = 0 ;
				this.pex.indexOf(80) > -1 && this.pex.indexOf(6667) > -1 ? rCountryObject.pex.p68 = 1 : rCountryObject.pex.p68 = 0 ;
				this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1 ? rCountryObject.pex.p468 = 1 : rCountryObject.pex.p468 = 0 ;
			}
			rCountryObject.autosys = [] ;                                                           //  reduce otherwise skips autosys[] for relays
	        if (this.as) {
	            var countryASobject = {
	                as : this.as ,
	                count : 1
	            } ;
	            rCountryObject.autosys.push( countryASobject ) ;
	        }
	        value.countries.push( rCountryObject ) ;

		}

	//	emit( "Fact " + theSpan + " " + theDate , value );
		emit( theDate , value );
	};




//	//////////////////////////////////////////////////////////////////////////////////////////////
//
//	REDUCE
//
//	//////////////////////////////////////////////////////////////////////////////////////////////


	var reduceFact = function ( key, values ) {

		var fact = {																				//	INITIALIZE FACT
			date : "" ,
			span : 0 ,
			clients : {
				total : 0 ,
				atBridges : 0 ,
				atRelays : 0 ,
				cip4 : 0 ,
				cip6 : 0 ,
				cptObfs2 : 0 ,
				cptObfs3 : 0 ,
				cptOR : 0 ,
				cptUnknown : 0
			} ,
			servers : {
				total : function(){return new ServerInit();}() ,
				bridges : {
					total : function(){return new ServerInit();}() ,
					brps : {} ,
					brts : {}
				} ,
				relays : {
					total :  function(){return new ServerInit();}() ,
					roles : {} ,
					flags : {}
				}
			} ,
			countries : [] ,
			autosys: []
		};
		for (var brp in brps)
			fact.servers.bridges.brps[brp.name] = new ServerInit();
		for (var brt in brts)
			fact.servers.bridges.brts[brt.name] = new ServerInit();
		for (var role in roles)
			fact.servers.relays.roles[role.name] = new ServerInit();
		for (var flag in flags)
			fact.servers.relays.flags[flag.name] = new ServerInit();
		fact.servers.relays.total.pbr = 0 ;                                                         //  special cases
		fact.servers.relays.roles.guard.pbg = 0 ;
		fact.servers.relays.roles.middle.pbm = 0 ;
		fact.servers.relays.roles.exit.pbe = 0 ;
		fact.servers.relays.roles.exit.pex = {} ;
		for (var p in pex)
			fact.servers.relays.roles.exit.pex[p.name] = 0 ;



		values.forEach( function(v) {																//	POPULATE FACT
			fact.date = v.date ;
			fact.span = v.span ;

			fact.clients.total += v.clients.total ;													//	CLIENTS
			fact.clients.atBridges += v.clients.atBridges ;
			fact.clients.atRelays += v.clients.atRelays ;
			fact.clients.cip4 += v.clients.cip4 ;
			fact.clients.cip6 += v.clients.cip6 ;
			fact.clients.cptObfs2 += v.clients.cptObfs2 ;
			fact.clients.cptObfs3 += v.clients.cptObfs3 ;
			fact.clients.cptOR += v.clients.cptOR ;
			fact.clients.cptUnknown += v.clients.cptUnknown ;

	        fact.servers.total.count += v.servers.total.count ;					    			    //	SERVERS
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

			fact.servers.bridges.total.count += v.servers.bridges.total.count ;					    //	BRIDGES
			fact.servers.bridges.total.bwa += v.servers.bridges.total.bwa ;
			fact.servers.bridges.total.bwc += v.servers.bridges.total.bwc ;
			fact.servers.bridges.total.osv.linux += v.servers.bridges.total.osv.linux ;
			fact.servers.bridges.total.osv.darwin += v.servers.bridges.total.osv.darwin ;
			fact.servers.bridges.total.osv.freebsd += v.servers.bridges.total.osv.freebsd ;
			fact.servers.bridges.total.osv.windows += v.servers.bridges.total.osv.windows ;
			fact.servers.bridges.total.osv.other += v.servers.bridges.total.osv.other ;
			fact.servers.bridges.total.tsv.v010 += v.servers.bridges.total.tsv.v010 ;
			fact.servers.bridges.total.tsv.v011 += v.servers.bridges.total.tsv.v011 ;
			fact.servers.bridges.total.tsv.v012 += v.servers.bridges.total.tsv.v012 ;
			fact.servers.bridges.total.tsv.v020 += v.servers.bridges.total.tsv.v020 ;
			fact.servers.bridges.total.tsv.v021 += v.servers.bridges.total.tsv.v021 ;
			fact.servers.bridges.total.tsv.v022 += v.servers.bridges.total.tsv.v022 ;
			fact.servers.bridges.total.tsv.v023 += v.servers.bridges.total.tsv.v023 ;
			fact.servers.bridges.total.tsv.v024 += v.servers.bridges.total.tsv.v024 ;

			fact.servers.bridges.brpEmail.count += v.servers.bridges.brpEmail.count ;
			fact.servers.bridges.brpEmail.bwa += v.servers.bridges.brpEmail.bwa ;
			fact.servers.bridges.brpEmail.bwc += v.servers.bridges.brpEmail.bwc ;
			fact.servers.bridges.brpEmail.osv.linux += v.servers.bridges.brpEmail.osv.linux ;
			fact.servers.bridges.brpEmail.osv.darwin += v.servers.bridges.brpEmail.osv.darwin ;
			fact.servers.bridges.brpEmail.osv.freebsd += v.servers.bridges.brpEmail.osv.freebsd ;
			fact.servers.bridges.brpEmail.osv.windows += v.servers.bridges.brpEmail.osv.windows ;
			fact.servers.bridges.brpEmail.osv.other += v.servers.bridges.brpEmail.osv.other ;
			fact.servers.bridges.brpEmail.tsv.v010 += v.servers.bridges.brpEmail.tsv.v010 ;
			fact.servers.bridges.brpEmail.tsv.v011 += v.servers.bridges.brpEmail.tsv.v011 ;
			fact.servers.bridges.brpEmail.tsv.v012 += v.servers.bridges.brpEmail.tsv.v012 ;
			fact.servers.bridges.brpEmail.tsv.v020 += v.servers.bridges.brpEmail.tsv.v020 ;
			fact.servers.bridges.brpEmail.tsv.v021 += v.servers.bridges.brpEmail.tsv.v021 ;
			fact.servers.bridges.brpEmail.tsv.v022 += v.servers.bridges.brpEmail.tsv.v022 ;
			fact.servers.bridges.brpEmail.tsv.v023 += v.servers.bridges.brpEmail.tsv.v023 ;
			fact.servers.bridges.brpEmail.tsv.v024 += v.servers.bridges.brpEmail.tsv.v024 ;

			fact.servers.bridges.brpHttps.count += v.servers.bridges.brpHttps.count ;
			fact.servers.bridges.brpHttps.bwa += v.servers.bridges.brpHttps.bwa ;
			fact.servers.bridges.brpHttps.bwc += v.servers.bridges.brpHttps.bwc ;
			fact.servers.bridges.brpHttps.osv.linux += v.servers.bridges.brpHttps.osv.linux ;
			fact.servers.bridges.brpHttps.osv.darwin += v.servers.bridges.brpHttps.osv.darwin ;
			fact.servers.bridges.brpHttps.osv.freebsd += v.servers.bridges.brpHttps.osv.freebsd ;
			fact.servers.bridges.brpHttps.osv.windows += v.servers.bridges.brpHttps.osv.windows ;
			fact.servers.bridges.brpHttps.osv.other += v.servers.bridges.brpHttps.osv.other ;
			fact.servers.bridges.brpHttps.tsv.v010 += v.servers.bridges.brpHttps.tsv.v010 ;
			fact.servers.bridges.brpHttps.tsv.v011 += v.servers.bridges.brpHttps.tsv.v011 ;
			fact.servers.bridges.brpHttps.tsv.v012 += v.servers.bridges.brpHttps.tsv.v012 ;
			fact.servers.bridges.brpHttps.tsv.v020 += v.servers.bridges.brpHttps.tsv.v020 ;
			fact.servers.bridges.brpHttps.tsv.v021 += v.servers.bridges.brpHttps.tsv.v021 ;
			fact.servers.bridges.brpHttps.tsv.v022 += v.servers.bridges.brpHttps.tsv.v022 ;
			fact.servers.bridges.brpHttps.tsv.v023 += v.servers.bridges.brpHttps.tsv.v023 ;
			fact.servers.bridges.brpHttps.tsv.v024 += v.servers.bridges.brpHttps.tsv.v024 ;

			fact.servers.bridges.brpOther.count += v.servers.bridges.brpOther.count ;
			fact.servers.bridges.brpOther.bwa += v.servers.bridges.brpOther.bwa ;
			fact.servers.bridges.brpOther.bwc += v.servers.bridges.brpOther.bwc ;
			fact.servers.bridges.brpOther.osv.linux += v.servers.bridges.brpOther.osv.linux ;
			fact.servers.bridges.brpOther.osv.darwin += v.servers.bridges.brpOther.osv.darwin ;
			fact.servers.bridges.brpOther.osv.freebsd += v.servers.bridges.brpOther.osv.freebsd ;
			fact.servers.bridges.brpOther.osv.windows += v.servers.bridges.brpOther.osv.windows ;
			fact.servers.bridges.brpOther.osv.other += v.servers.bridges.brpOther.osv.other ;
			fact.servers.bridges.brpOther.tsv.v010 += v.servers.bridges.brpOther.tsv.v010 ;
			fact.servers.bridges.brpOther.tsv.v011 += v.servers.bridges.brpOther.tsv.v011 ;
			fact.servers.bridges.brpOther.tsv.v012 += v.servers.bridges.brpOther.tsv.v012 ;
			fact.servers.bridges.brpOther.tsv.v020 += v.servers.bridges.brpOther.tsv.v020 ;
			fact.servers.bridges.brpOther.tsv.v021 += v.servers.bridges.brpOther.tsv.v021 ;
			fact.servers.bridges.brpOther.tsv.v022 += v.servers.bridges.brpOther.tsv.v022 ;
			fact.servers.bridges.brpOther.tsv.v023 += v.servers.bridges.brpOther.tsv.v023 ;
			fact.servers.bridges.brpOther.tsv.v024 += v.servers.bridges.brpOther.tsv.v024 ;

			fact.servers.bridges.breTrue.count += v.servers.bridges.breTrue.count ;
			fact.servers.bridges.breTrue.bwa += v.servers.bridges.breTrue.bwa ;
			fact.servers.bridges.breTrue.bwc += v.servers.bridges.breTrue.bwc ;
			fact.servers.bridges.breTrue.osv.linux += v.servers.bridges.breTrue.osv.linux ;
			fact.servers.bridges.breTrue.osv.darwin += v.servers.bridges.breTrue.osv.darwin ;
			fact.servers.bridges.breTrue.osv.freebsd += v.servers.bridges.breTrue.osv.freebsd ;
			fact.servers.bridges.breTrue.osv.windows += v.servers.bridges.breTrue.osv.windows ;
			fact.servers.bridges.breTrue.osv.other += v.servers.bridges.breTrue.osv.other ;
			fact.servers.bridges.breTrue.tsv.v010 += v.servers.bridges.breTrue.tsv.v010 ;
			fact.servers.bridges.breTrue.tsv.v011 += v.servers.bridges.breTrue.tsv.v011 ;
			fact.servers.bridges.breTrue.tsv.v012 += v.servers.bridges.breTrue.tsv.v012 ;
			fact.servers.bridges.breTrue.tsv.v020 += v.servers.bridges.breTrue.tsv.v020 ;
			fact.servers.bridges.breTrue.tsv.v021 += v.servers.bridges.breTrue.tsv.v021 ;
			fact.servers.bridges.breTrue.tsv.v022 += v.servers.bridges.breTrue.tsv.v022 ;
			fact.servers.bridges.breTrue.tsv.v023 += v.servers.bridges.breTrue.tsv.v023 ;
			fact.servers.bridges.breTrue.tsv.v024 += v.servers.bridges.breTrue.tsv.v024 ;

			fact.servers.bridges.brtObfs2.count += v.servers.bridges.brtObfs2.count ;
			fact.servers.bridges.brtObfs2.bwa += v.servers.bridges.brtObfs2.bwa ;
			fact.servers.bridges.brtObfs2.bwc += v.servers.bridges.brtObfs2.bwc ;
			fact.servers.bridges.brtObfs2.osv.linux += v.servers.bridges.brtObfs2.osv.linux ;
			fact.servers.bridges.brtObfs2.osv.darwin += v.servers.bridges.brtObfs2.osv.darwin ;
			fact.servers.bridges.brtObfs2.osv.freebsd += v.servers.bridges.brtObfs2.osv.freebsd ;
			fact.servers.bridges.brtObfs2.osv.windows += v.servers.bridges.brtObfs2.osv.windows ;
			fact.servers.bridges.brtObfs2.osv.other += v.servers.bridges.brtObfs2.osv.other ;
			fact.servers.bridges.brtObfs2.tsv.v010 += v.servers.bridges.brtObfs2.tsv.v010 ;
			fact.servers.bridges.brtObfs2.tsv.v011 += v.servers.bridges.brtObfs2.tsv.v011 ;
			fact.servers.bridges.brtObfs2.tsv.v012 += v.servers.bridges.brtObfs2.tsv.v012 ;
			fact.servers.bridges.brtObfs2.tsv.v020 += v.servers.bridges.brtObfs2.tsv.v020 ;
			fact.servers.bridges.brtObfs2.tsv.v021 += v.servers.bridges.brtObfs2.tsv.v021 ;
			fact.servers.bridges.brtObfs2.tsv.v022 += v.servers.bridges.brtObfs2.tsv.v022 ;
			fact.servers.bridges.brtObfs2.tsv.v023 += v.servers.bridges.brtObfs2.tsv.v023 ;
			fact.servers.bridges.brtObfs2.tsv.v024 += v.servers.bridges.brtObfs2.tsv.v024 ;

			fact.servers.bridges.brtObfs3.count += v.servers.bridges.brtObfs3.count ;
			fact.servers.bridges.brtObfs3.bwa += v.servers.bridges.brtObfs3.bwa ;
			fact.servers.bridges.brtObfs3.bwc += v.servers.bridges.brtObfs3.bwc ;
			fact.servers.bridges.brtObfs3.osv.linux += v.servers.bridges.brtObfs3.osv.linux ;
			fact.servers.bridges.brtObfs3.osv.darwin += v.servers.bridges.brtObfs3.osv.darwin ;
			fact.servers.bridges.brtObfs3.osv.freebsd += v.servers.bridges.brtObfs3.osv.freebsd ;
			fact.servers.bridges.brtObfs3.osv.windows += v.servers.bridges.brtObfs3.osv.windows ;
			fact.servers.bridges.brtObfs3.osv.other += v.servers.bridges.brtObfs3.osv.other ;
			fact.servers.bridges.brtObfs3.tsv.v010 += v.servers.bridges.brtObfs3.tsv.v010 ;
			fact.servers.bridges.brtObfs3.tsv.v011 += v.servers.bridges.brtObfs3.tsv.v011 ;
			fact.servers.bridges.brtObfs3.tsv.v012 += v.servers.bridges.brtObfs3.tsv.v012 ;
			fact.servers.bridges.brtObfs3.tsv.v020 += v.servers.bridges.brtObfs3.tsv.v020 ;
			fact.servers.bridges.brtObfs3.tsv.v021 += v.servers.bridges.brtObfs3.tsv.v021 ;
			fact.servers.bridges.brtObfs3.tsv.v022 += v.servers.bridges.brtObfs3.tsv.v022 ;
			fact.servers.bridges.brtObfs3.tsv.v023 += v.servers.bridges.brtObfs3.tsv.v023 ;
			fact.servers.bridges.brtObfs3.tsv.v024 += v.servers.bridges.brtObfs3.tsv.v024 ;

			fact.servers.bridges.brtObfs23.count += v.servers.bridges.brtObfs23.count ;
			fact.servers.bridges.brtObfs23.bwa += v.servers.bridges.brtObfs23.bwa ;
			fact.servers.bridges.brtObfs23.bwc += v.servers.bridges.brtObfs23.bwc ;
			fact.servers.bridges.brtObfs23.osv.linux += v.servers.bridges.brtObfs23.osv.linux ;
			fact.servers.bridges.brtObfs23.osv.darwin += v.servers.bridges.brtObfs23.osv.darwin ;
			fact.servers.bridges.brtObfs23.osv.freebsd += v.servers.bridges.brtObfs23.osv.freebsd ;
			fact.servers.bridges.brtObfs23.osv.windows += v.servers.bridges.brtObfs23.osv.windows ;
			fact.servers.bridges.brtObfs23.osv.other += v.servers.bridges.brtObfs23.osv.other ;
			fact.servers.bridges.brtObfs23.tsv.v010 += v.servers.bridges.brtObfs23.tsv.v010 ;
			fact.servers.bridges.brtObfs23.tsv.v011 += v.servers.bridges.brtObfs23.tsv.v011 ;
			fact.servers.bridges.brtObfs23.tsv.v012 += v.servers.bridges.brtObfs23.tsv.v012 ;
			fact.servers.bridges.brtObfs23.tsv.v020 += v.servers.bridges.brtObfs23.tsv.v020 ;
			fact.servers.bridges.brtObfs23.tsv.v021 += v.servers.bridges.brtObfs23.tsv.v021 ;
			fact.servers.bridges.brtObfs23.tsv.v022 += v.servers.bridges.brtObfs23.tsv.v022 ;
			fact.servers.bridges.brtObfs23.tsv.v023 += v.servers.bridges.brtObfs23.tsv.v023 ;
			fact.servers.bridges.brtObfs23.tsv.v024 += v.servers.bridges.brtObfs23.tsv.v024 ;

	        fact.servers.relays.roleAll.total.count += v.servers.relays.roleAll.total.count ;       //	RELAYS ALL
			fact.servers.relays.roleAll.total.bwa += v.servers.relays.roleAll.total.bwa ;
			fact.servers.relays.roleAll.total.bwc += v.servers.relays.roleAll.total.bwc ;
			fact.servers.relays.roleAll.total.osv.linux += v.servers.relays.roleAll.total.osv.linux ;
			fact.servers.relays.roleAll.total.osv.darwin += v.servers.relays.roleAll.total.osv.darwin ;
			fact.servers.relays.roleAll.total.osv.freebsd += v.servers.relays.roleAll.total.osv.freebsd ;
			fact.servers.relays.roleAll.total.osv.windows += v.servers.relays.roleAll.total.osv.windows ;
			fact.servers.relays.roleAll.total.osv.other += v.servers.relays.roleAll.total.osv.other ;
			fact.servers.relays.roleAll.total.tsv.v010 += v.servers.relays.roleAll.total.tsv.v010 ;
			fact.servers.relays.roleAll.total.tsv.v011 += v.servers.relays.roleAll.total.tsv.v011 ;
			fact.servers.relays.roleAll.total.tsv.v012 += v.servers.relays.roleAll.total.tsv.v012 ;
			fact.servers.relays.roleAll.total.tsv.v020 += v.servers.relays.roleAll.total.tsv.v020 ;
			fact.servers.relays.roleAll.total.tsv.v021 += v.servers.relays.roleAll.total.tsv.v021 ;
			fact.servers.relays.roleAll.total.tsv.v022 += v.servers.relays.roleAll.total.tsv.v022 ;
			fact.servers.relays.roleAll.total.tsv.v023 += v.servers.relays.roleAll.total.tsv.v023 ;
			fact.servers.relays.roleAll.total.tsv.v024 += v.servers.relays.roleAll.total.tsv.v024 ;
			fact.servers.relays.roleAll.total.pbr += v.servers.relays.roleAll.total.pbr ;

			fact.servers.relays.roleAll.flagNone.count += v.servers.relays.roleAll.flagNone.count ;
			fact.servers.relays.roleAll.flagNone.bwa += v.servers.relays.roleAll.flagNone.bwa ;
			fact.servers.relays.roleAll.flagNone.bwc += v.servers.relays.roleAll.flagNone.bwc ;
			fact.servers.relays.roleAll.flagNone.osv.linux += v.servers.relays.roleAll.flagNone.osv.linux ;
			fact.servers.relays.roleAll.flagNone.osv.darwin += v.servers.relays.roleAll.flagNone.osv.darwin ;
			fact.servers.relays.roleAll.flagNone.osv.freebsd += v.servers.relays.roleAll.flagNone.osv.freebsd ;
			fact.servers.relays.roleAll.flagNone.osv.windows += v.servers.relays.roleAll.flagNone.osv.windows ;
			fact.servers.relays.roleAll.flagNone.osv.other += v.servers.relays.roleAll.flagNone.osv.other ;
			fact.servers.relays.roleAll.flagNone.tsv.v010 += v.servers.relays.roleAll.flagNone.tsv.v010 ;
			fact.servers.relays.roleAll.flagNone.tsv.v011 += v.servers.relays.roleAll.flagNone.tsv.v011 ;
			fact.servers.relays.roleAll.flagNone.tsv.v012 += v.servers.relays.roleAll.flagNone.tsv.v012 ;
			fact.servers.relays.roleAll.flagNone.tsv.v020 += v.servers.relays.roleAll.flagNone.tsv.v020 ;
			fact.servers.relays.roleAll.flagNone.tsv.v021 += v.servers.relays.roleAll.flagNone.tsv.v021 ;
			fact.servers.relays.roleAll.flagNone.tsv.v022 += v.servers.relays.roleAll.flagNone.tsv.v022 ;
			fact.servers.relays.roleAll.flagNone.tsv.v023 += v.servers.relays.roleAll.flagNone.tsv.v023 ;
			fact.servers.relays.roleAll.flagNone.tsv.v024 += v.servers.relays.roleAll.flagNone.tsv.v024 ;
			fact.servers.relays.roleAll.flagNone.pbr += v.servers.relays.roleAll.flagNone.pbr ;

			fact.servers.relays.roleAll.flagStable.count += v.servers.relays.roleAll.flagStable.count ;
			fact.servers.relays.roleAll.flagStable.bwa += v.servers.relays.roleAll.flagStable.bwa ;
			fact.servers.relays.roleAll.flagStable.bwc += v.servers.relays.roleAll.flagStable.bwc ;
			fact.servers.relays.roleAll.flagStable.osv.linux += v.servers.relays.roleAll.flagStable.osv.linux ;
			fact.servers.relays.roleAll.flagStable.osv.darwin += v.servers.relays.roleAll.flagStable.osv.darwin ;
			fact.servers.relays.roleAll.flagStable.osv.freebsd += v.servers.relays.roleAll.flagStable.osv.freebsd ;
			fact.servers.relays.roleAll.flagStable.osv.windows += v.servers.relays.roleAll.flagStable.osv.windows ;
			fact.servers.relays.roleAll.flagStable.osv.other += v.servers.relays.roleAll.flagStable.osv.other ;
			fact.servers.relays.roleAll.flagStable.tsv.v010 += v.servers.relays.roleAll.flagStable.tsv.v010 ;
			fact.servers.relays.roleAll.flagStable.tsv.v011 += v.servers.relays.roleAll.flagStable.tsv.v011 ;
			fact.servers.relays.roleAll.flagStable.tsv.v012 += v.servers.relays.roleAll.flagStable.tsv.v012 ;
			fact.servers.relays.roleAll.flagStable.tsv.v020 += v.servers.relays.roleAll.flagStable.tsv.v020 ;
			fact.servers.relays.roleAll.flagStable.tsv.v021 += v.servers.relays.roleAll.flagStable.tsv.v021 ;
			fact.servers.relays.roleAll.flagStable.tsv.v022 += v.servers.relays.roleAll.flagStable.tsv.v022 ;
			fact.servers.relays.roleAll.flagStable.tsv.v023 += v.servers.relays.roleAll.flagStable.tsv.v023 ;
			fact.servers.relays.roleAll.flagStable.tsv.v024 += v.servers.relays.roleAll.flagStable.tsv.v024 ;
			fact.servers.relays.roleAll.flagStable.pbr += v.servers.relays.roleAll.flagStable.pbr ;

			fact.servers.relays.roleAll.flagFast.count += v.servers.relays.roleAll.flagFast.count ;
			fact.servers.relays.roleAll.flagFast.bwa += v.servers.relays.roleAll.flagFast.bwa ;
			fact.servers.relays.roleAll.flagFast.bwc += v.servers.relays.roleAll.flagFast.bwc ;
			fact.servers.relays.roleAll.flagFast.osv.linux += v.servers.relays.roleAll.flagFast.osv.linux ;
			fact.servers.relays.roleAll.flagFast.osv.darwin += v.servers.relays.roleAll.flagFast.osv.darwin ;
			fact.servers.relays.roleAll.flagFast.osv.freebsd += v.servers.relays.roleAll.flagFast.osv.freebsd ;
			fact.servers.relays.roleAll.flagFast.osv.windows += v.servers.relays.roleAll.flagFast.osv.windows ;
			fact.servers.relays.roleAll.flagFast.osv.other += v.servers.relays.roleAll.flagFast.osv.other ;
			fact.servers.relays.roleAll.flagFast.tsv.v010 += v.servers.relays.roleAll.flagFast.tsv.v010 ;
			fact.servers.relays.roleAll.flagFast.tsv.v011 += v.servers.relays.roleAll.flagFast.tsv.v011 ;
			fact.servers.relays.roleAll.flagFast.tsv.v012 += v.servers.relays.roleAll.flagFast.tsv.v012 ;
			fact.servers.relays.roleAll.flagFast.tsv.v020 += v.servers.relays.roleAll.flagFast.tsv.v020 ;
			fact.servers.relays.roleAll.flagFast.tsv.v021 += v.servers.relays.roleAll.flagFast.tsv.v021 ;
			fact.servers.relays.roleAll.flagFast.tsv.v022 += v.servers.relays.roleAll.flagFast.tsv.v022 ;
			fact.servers.relays.roleAll.flagFast.tsv.v023 += v.servers.relays.roleAll.flagFast.tsv.v023 ;
			fact.servers.relays.roleAll.flagFast.tsv.v024 += v.servers.relays.roleAll.flagFast.tsv.v024 ;
			fact.servers.relays.roleAll.flagFast.pbr += v.servers.relays.roleAll.flagFast.pbr ;

			fact.servers.relays.roleAll.flagFastStable.count += v.servers.relays.roleAll.flagFastStable.count ;
			fact.servers.relays.roleAll.flagFastStable.bwa += v.servers.relays.roleAll.flagFastStable.bwa ;
			fact.servers.relays.roleAll.flagFastStable.bwc += v.servers.relays.roleAll.flagFastStable.bwc ;
			fact.servers.relays.roleAll.flagFastStable.osv.linux += v.servers.relays.roleAll.flagFastStable.osv.linux ;
			fact.servers.relays.roleAll.flagFastStable.osv.darwin += v.servers.relays.roleAll.flagFastStable.osv.darwin ;
			fact.servers.relays.roleAll.flagFastStable.osv.freebsd += v.servers.relays.roleAll.flagFastStable.osv.freebsd ;
			fact.servers.relays.roleAll.flagFastStable.osv.windows += v.servers.relays.roleAll.flagFastStable.osv.windows ;
			fact.servers.relays.roleAll.flagFastStable.osv.other += v.servers.relays.roleAll.flagFastStable.osv.other ;
			fact.servers.relays.roleAll.flagFastStable.tsv.v010 += v.servers.relays.roleAll.flagFastStable.tsv.v010 ;
			fact.servers.relays.roleAll.flagFastStable.tsv.v011 += v.servers.relays.roleAll.flagFastStable.tsv.v011 ;
			fact.servers.relays.roleAll.flagFastStable.tsv.v012 += v.servers.relays.roleAll.flagFastStable.tsv.v012 ;
			fact.servers.relays.roleAll.flagFastStable.tsv.v020 += v.servers.relays.roleAll.flagFastStable.tsv.v020 ;
			fact.servers.relays.roleAll.flagFastStable.tsv.v021 += v.servers.relays.roleAll.flagFastStable.tsv.v021 ;
			fact.servers.relays.roleAll.flagFastStable.tsv.v022 += v.servers.relays.roleAll.flagFastStable.tsv.v022 ;
			fact.servers.relays.roleAll.flagFastStable.tsv.v023 += v.servers.relays.roleAll.flagFastStable.tsv.v023 ;
			fact.servers.relays.roleAll.flagFastStable.tsv.v024 += v.servers.relays.roleAll.flagFastStable.tsv.v024 ;

			fact.servers.relays.roleGuard.total.count += v.servers.relays.roleGuard.total.count ;   //	RELAYS GUARD
			fact.servers.relays.roleGuard.total.bwa += v.servers.relays.roleGuard.total.bwa ;
			fact.servers.relays.roleGuard.total.bwc += v.servers.relays.roleGuard.total.bwc ;
			fact.servers.relays.roleGuard.total.osv.linux += v.servers.relays.roleGuard.total.osv.linux ;
			fact.servers.relays.roleGuard.total.osv.darwin += v.servers.relays.roleGuard.total.osv.darwin ;
			fact.servers.relays.roleGuard.total.osv.freebsd += v.servers.relays.roleGuard.total.osv.freebsd ;
			fact.servers.relays.roleGuard.total.osv.windows += v.servers.relays.roleGuard.total.osv.windows ;
			fact.servers.relays.roleGuard.total.osv.other += v.servers.relays.roleGuard.total.osv.other ;
			fact.servers.relays.roleGuard.total.tsv.v010 += v.servers.relays.roleGuard.total.tsv.v010 ;
			fact.servers.relays.roleGuard.total.tsv.v011 += v.servers.relays.roleGuard.total.tsv.v011 ;
			fact.servers.relays.roleGuard.total.tsv.v012 += v.servers.relays.roleGuard.total.tsv.v012 ;
			fact.servers.relays.roleGuard.total.tsv.v020 += v.servers.relays.roleGuard.total.tsv.v020 ;
			fact.servers.relays.roleGuard.total.tsv.v021 += v.servers.relays.roleGuard.total.tsv.v021 ;
			fact.servers.relays.roleGuard.total.tsv.v022 += v.servers.relays.roleGuard.total.tsv.v022 ;
			fact.servers.relays.roleGuard.total.tsv.v023 += v.servers.relays.roleGuard.total.tsv.v023 ;
			fact.servers.relays.roleGuard.total.tsv.v024 += v.servers.relays.roleGuard.total.tsv.v024 ;
			fact.servers.relays.roleGuard.total.pbg += v.servers.relays.roleGuard.total.pbg ;

			fact.servers.relays.roleGuard.flagNone.count += v.servers.relays.roleGuard.flagNone.count ;
			fact.servers.relays.roleGuard.flagNone.bwa += v.servers.relays.roleGuard.flagNone.bwa ;
			fact.servers.relays.roleGuard.flagNone.bwc += v.servers.relays.roleGuard.flagNone.bwc ;
			fact.servers.relays.roleGuard.flagNone.osv.linux += v.servers.relays.roleGuard.flagNone.osv.linux ;
			fact.servers.relays.roleGuard.flagNone.osv.darwin += v.servers.relays.roleGuard.flagNone.osv.darwin ;
			fact.servers.relays.roleGuard.flagNone.osv.freebsd += v.servers.relays.roleGuard.flagNone.osv.freebsd ;
			fact.servers.relays.roleGuard.flagNone.osv.windows += v.servers.relays.roleGuard.flagNone.osv.windows ;
			fact.servers.relays.roleGuard.flagNone.osv.other += v.servers.relays.roleGuard.flagNone.osv.other ;
			fact.servers.relays.roleGuard.flagNone.tsv.v010 += v.servers.relays.roleGuard.flagNone.tsv.v010 ;
			fact.servers.relays.roleGuard.flagNone.tsv.v011 += v.servers.relays.roleGuard.flagNone.tsv.v011 ;
			fact.servers.relays.roleGuard.flagNone.tsv.v012 += v.servers.relays.roleGuard.flagNone.tsv.v012 ;
			fact.servers.relays.roleGuard.flagNone.tsv.v020 += v.servers.relays.roleGuard.flagNone.tsv.v020 ;
			fact.servers.relays.roleGuard.flagNone.tsv.v021 += v.servers.relays.roleGuard.flagNone.tsv.v021 ;
			fact.servers.relays.roleGuard.flagNone.tsv.v022 += v.servers.relays.roleGuard.flagNone.tsv.v022 ;
			fact.servers.relays.roleGuard.flagNone.tsv.v023 += v.servers.relays.roleGuard.flagNone.tsv.v023 ;
			fact.servers.relays.roleGuard.flagNone.tsv.v024 += v.servers.relays.roleGuard.flagNone.tsv.v024 ;
			fact.servers.relays.roleGuard.flagNone.pbg += v.servers.relays.roleGuard.flagNone.pbg ;

			fact.servers.relays.roleGuard.flagStable.count += v.servers.relays.roleGuard.flagStable.count ;
			fact.servers.relays.roleGuard.flagStable.bwa += v.servers.relays.roleGuard.flagStable.bwa ;
			fact.servers.relays.roleGuard.flagStable.bwc += v.servers.relays.roleGuard.flagStable.bwc ;
			fact.servers.relays.roleGuard.flagStable.osv.linux += v.servers.relays.roleGuard.flagStable.osv.linux ;
			fact.servers.relays.roleGuard.flagStable.osv.darwin += v.servers.relays.roleGuard.flagStable.osv.darwin ;
			fact.servers.relays.roleGuard.flagStable.osv.freebsd += v.servers.relays.roleGuard.flagStable.osv.freebsd ;
			fact.servers.relays.roleGuard.flagStable.osv.windows += v.servers.relays.roleGuard.flagStable.osv.windows ;
			fact.servers.relays.roleGuard.flagStable.osv.other += v.servers.relays.roleGuard.flagStable.osv.other ;
			fact.servers.relays.roleGuard.flagStable.tsv.v010 += v.servers.relays.roleGuard.flagStable.tsv.v010 ;
			fact.servers.relays.roleGuard.flagStable.tsv.v011 += v.servers.relays.roleGuard.flagStable.tsv.v011 ;
			fact.servers.relays.roleGuard.flagStable.tsv.v012 += v.servers.relays.roleGuard.flagStable.tsv.v012 ;
			fact.servers.relays.roleGuard.flagStable.tsv.v020 += v.servers.relays.roleGuard.flagStable.tsv.v020 ;
			fact.servers.relays.roleGuard.flagStable.tsv.v021 += v.servers.relays.roleGuard.flagStable.tsv.v021 ;
			fact.servers.relays.roleGuard.flagStable.tsv.v022 += v.servers.relays.roleGuard.flagStable.tsv.v022 ;
			fact.servers.relays.roleGuard.flagStable.tsv.v023 += v.servers.relays.roleGuard.flagStable.tsv.v023 ;
			fact.servers.relays.roleGuard.flagStable.tsv.v024 += v.servers.relays.roleGuard.flagStable.tsv.v024 ;
			fact.servers.relays.roleGuard.flagStable.pbg += v.servers.relays.roleGuard.flagStable.pbg ;

			fact.servers.relays.roleGuard.flagFast.count += v.servers.relays.roleGuard.flagFast.count ;
			fact.servers.relays.roleGuard.flagFast.bwa += v.servers.relays.roleGuard.flagFast.bwa ;
			fact.servers.relays.roleGuard.flagFast.bwc += v.servers.relays.roleGuard.flagFast.bwc ;
			fact.servers.relays.roleGuard.flagFast.osv.linux += v.servers.relays.roleGuard.flagFast.osv.linux ;
			fact.servers.relays.roleGuard.flagFast.osv.darwin += v.servers.relays.roleGuard.flagFast.osv.darwin ;
			fact.servers.relays.roleGuard.flagFast.osv.freebsd += v.servers.relays.roleGuard.flagFast.osv.freebsd ;
			fact.servers.relays.roleGuard.flagFast.osv.windows += v.servers.relays.roleGuard.flagFast.osv.windows ;
			fact.servers.relays.roleGuard.flagFast.osv.other += v.servers.relays.roleGuard.flagFast.osv.other ;
			fact.servers.relays.roleGuard.flagFast.tsv.v010 += v.servers.relays.roleGuard.flagFast.tsv.v010 ;
			fact.servers.relays.roleGuard.flagFast.tsv.v011 += v.servers.relays.roleGuard.flagFast.tsv.v011 ;
			fact.servers.relays.roleGuard.flagFast.tsv.v012 += v.servers.relays.roleGuard.flagFast.tsv.v012 ;
			fact.servers.relays.roleGuard.flagFast.tsv.v020 += v.servers.relays.roleGuard.flagFast.tsv.v020 ;
			fact.servers.relays.roleGuard.flagFast.tsv.v021 += v.servers.relays.roleGuard.flagFast.tsv.v021 ;
			fact.servers.relays.roleGuard.flagFast.tsv.v022 += v.servers.relays.roleGuard.flagFast.tsv.v022 ;
			fact.servers.relays.roleGuard.flagFast.tsv.v023 += v.servers.relays.roleGuard.flagFast.tsv.v023 ;
			fact.servers.relays.roleGuard.flagFast.tsv.v024 += v.servers.relays.roleGuard.flagFast.tsv.v024 ;
			fact.servers.relays.roleGuard.flagFast.pbg += v.servers.relays.roleGuard.flagFast.pbg ;

			fact.servers.relays.roleGuard.flagFastStable.count += v.servers.relays.roleGuard.flagFastStable.count ;
			fact.servers.relays.roleGuard.flagFastStable.bwa += v.servers.relays.roleGuard.flagFastStable.bwa ;
			fact.servers.relays.roleGuard.flagFastStable.bwc += v.servers.relays.roleGuard.flagFastStable.bwc ;
			fact.servers.relays.roleGuard.flagFastStable.osv.linux += v.servers.relays.roleGuard.flagFastStable.osv.linux ;
			fact.servers.relays.roleGuard.flagFastStable.osv.darwin += v.servers.relays.roleGuard.flagFastStable.osv.darwin ;
			fact.servers.relays.roleGuard.flagFastStable.osv.freebsd += v.servers.relays.roleGuard.flagFastStable.osv.freebsd ;
			fact.servers.relays.roleGuard.flagFastStable.osv.windows += v.servers.relays.roleGuard.flagFastStable.osv.windows ;
			fact.servers.relays.roleGuard.flagFastStable.osv.other += v.servers.relays.roleGuard.flagFastStable.osv.other ;
			fact.servers.relays.roleGuard.flagFastStable.tsv.v010 += v.servers.relays.roleGuard.flagFastStable.tsv.v010 ;
			fact.servers.relays.roleGuard.flagFastStable.tsv.v011 += v.servers.relays.roleGuard.flagFastStable.tsv.v011 ;
			fact.servers.relays.roleGuard.flagFastStable.tsv.v012 += v.servers.relays.roleGuard.flagFastStable.tsv.v012 ;
			fact.servers.relays.roleGuard.flagFastStable.tsv.v020 += v.servers.relays.roleGuard.flagFastStable.tsv.v020 ;
			fact.servers.relays.roleGuard.flagFastStable.tsv.v021 += v.servers.relays.roleGuard.flagFastStable.tsv.v021 ;
			fact.servers.relays.roleGuard.flagFastStable.tsv.v022 += v.servers.relays.roleGuard.flagFastStable.tsv.v022 ;
			fact.servers.relays.roleGuard.flagFastStable.tsv.v023 += v.servers.relays.roleGuard.flagFastStable.tsv.v023 ;
			fact.servers.relays.roleGuard.flagFastStable.tsv.v024 += v.servers.relays.roleGuard.flagFastStable.tsv.v024 ;
			fact.servers.relays.roleGuard.flagFastStable.pbg += v.servers.relays.roleGuard.flagFastStable.pbg ;

			fact.servers.relays.roleMiddle.total.count += v.servers.relays.roleMiddle.total.count ;	//	RELAYS MIDDLE
			fact.servers.relays.roleMiddle.total.bwa += v.servers.relays.roleMiddle.total.bwa ;
			fact.servers.relays.roleMiddle.total.bwc += v.servers.relays.roleMiddle.total.bwc ;
			fact.servers.relays.roleMiddle.total.osv.linux += v.servers.relays.roleMiddle.total.osv.linux ;
			fact.servers.relays.roleMiddle.total.osv.darwin += v.servers.relays.roleMiddle.total.osv.darwin ;
			fact.servers.relays.roleMiddle.total.osv.freebsd += v.servers.relays.roleMiddle.total.osv.freebsd ;
			fact.servers.relays.roleMiddle.total.osv.windows += v.servers.relays.roleMiddle.total.osv.windows ;
			fact.servers.relays.roleMiddle.total.osv.other += v.servers.relays.roleMiddle.total.osv.other ;
			fact.servers.relays.roleMiddle.total.tsv.v010 += v.servers.relays.roleMiddle.total.tsv.v010 ;
			fact.servers.relays.roleMiddle.total.tsv.v011 += v.servers.relays.roleMiddle.total.tsv.v011 ;
			fact.servers.relays.roleMiddle.total.tsv.v012 += v.servers.relays.roleMiddle.total.tsv.v012 ;
			fact.servers.relays.roleMiddle.total.tsv.v020 += v.servers.relays.roleMiddle.total.tsv.v020 ;
			fact.servers.relays.roleMiddle.total.tsv.v021 += v.servers.relays.roleMiddle.total.tsv.v021 ;
			fact.servers.relays.roleMiddle.total.tsv.v022 += v.servers.relays.roleMiddle.total.tsv.v022 ;
			fact.servers.relays.roleMiddle.total.tsv.v023 += v.servers.relays.roleMiddle.total.tsv.v023 ;
			fact.servers.relays.roleMiddle.total.tsv.v024 += v.servers.relays.roleMiddle.total.tsv.v024 ;
			fact.servers.relays.roleMiddle.total.pbm += v.servers.relays.roleMiddle.total.pbm ;

			fact.servers.relays.roleMiddle.flagNone.count += v.servers.relays.roleMiddle.flagNone.count ;
			fact.servers.relays.roleMiddle.flagNone.bwa += v.servers.relays.roleMiddle.flagNone.bwa ;
			fact.servers.relays.roleMiddle.flagNone.bwc += v.servers.relays.roleMiddle.flagNone.bwc ;
			fact.servers.relays.roleMiddle.flagNone.osv.linux += v.servers.relays.roleMiddle.flagNone.osv.linux ;
			fact.servers.relays.roleMiddle.flagNone.osv.darwin += v.servers.relays.roleMiddle.flagNone.osv.darwin ;
			fact.servers.relays.roleMiddle.flagNone.osv.freebsd += v.servers.relays.roleMiddle.flagNone.osv.freebsd ;
			fact.servers.relays.roleMiddle.flagNone.osv.windows += v.servers.relays.roleMiddle.flagNone.osv.windows ;
			fact.servers.relays.roleMiddle.flagNone.osv.other += v.servers.relays.roleMiddle.flagNone.osv.other ;
			fact.servers.relays.roleMiddle.flagNone.tsv.v010 += v.servers.relays.roleMiddle.flagNone.tsv.v010 ;
			fact.servers.relays.roleMiddle.flagNone.tsv.v011 += v.servers.relays.roleMiddle.flagNone.tsv.v011 ;
			fact.servers.relays.roleMiddle.flagNone.tsv.v012 += v.servers.relays.roleMiddle.flagNone.tsv.v012 ;
			fact.servers.relays.roleMiddle.flagNone.tsv.v020 += v.servers.relays.roleMiddle.flagNone.tsv.v020 ;
			fact.servers.relays.roleMiddle.flagNone.tsv.v021 += v.servers.relays.roleMiddle.flagNone.tsv.v021 ;
			fact.servers.relays.roleMiddle.flagNone.tsv.v022 += v.servers.relays.roleMiddle.flagNone.tsv.v022 ;
			fact.servers.relays.roleMiddle.flagNone.tsv.v023 += v.servers.relays.roleMiddle.flagNone.tsv.v023 ;
			fact.servers.relays.roleMiddle.flagNone.tsv.v024 += v.servers.relays.roleMiddle.flagNone.tsv.v024 ;
			fact.servers.relays.roleMiddle.flagNone.pbm += v.servers.relays.roleMiddle.flagNone.pbm ;

			fact.servers.relays.roleMiddle.flagStable.count += v.servers.relays.roleMiddle.flagStable.count ;
			fact.servers.relays.roleMiddle.flagStable.bwa += v.servers.relays.roleMiddle.flagStable.bwa ;
			fact.servers.relays.roleMiddle.flagStable.bwc += v.servers.relays.roleMiddle.flagStable.bwc ;
			fact.servers.relays.roleMiddle.flagStable.osv.linux += v.servers.relays.roleMiddle.flagStable.osv.linux ;
			fact.servers.relays.roleMiddle.flagStable.osv.darwin += v.servers.relays.roleMiddle.flagStable.osv.darwin ;
			fact.servers.relays.roleMiddle.flagStable.osv.freebsd += v.servers.relays.roleMiddle.flagStable.osv.freebsd ;
			fact.servers.relays.roleMiddle.flagStable.osv.windows += v.servers.relays.roleMiddle.flagStable.osv.windows ;
			fact.servers.relays.roleMiddle.flagStable.osv.other += v.servers.relays.roleMiddle.flagStable.osv.other ;
			fact.servers.relays.roleMiddle.flagStable.tsv.v010 += v.servers.relays.roleMiddle.flagStable.tsv.v010 ;
			fact.servers.relays.roleMiddle.flagStable.tsv.v011 += v.servers.relays.roleMiddle.flagStable.tsv.v011 ;
			fact.servers.relays.roleMiddle.flagStable.tsv.v012 += v.servers.relays.roleMiddle.flagStable.tsv.v012 ;
			fact.servers.relays.roleMiddle.flagStable.tsv.v020 += v.servers.relays.roleMiddle.flagStable.tsv.v020 ;
			fact.servers.relays.roleMiddle.flagStable.tsv.v021 += v.servers.relays.roleMiddle.flagStable.tsv.v021 ;
			fact.servers.relays.roleMiddle.flagStable.tsv.v022 += v.servers.relays.roleMiddle.flagStable.tsv.v022 ;
			fact.servers.relays.roleMiddle.flagStable.tsv.v023 += v.servers.relays.roleMiddle.flagStable.tsv.v023 ;
			fact.servers.relays.roleMiddle.flagStable.tsv.v024 += v.servers.relays.roleMiddle.flagStable.tsv.v024 ;
			fact.servers.relays.roleMiddle.flagStable.pbm += v.servers.relays.roleMiddle.flagStable.pbm ;

			fact.servers.relays.roleMiddle.flagFast.count += v.servers.relays.roleMiddle.flagFast.count ;
			fact.servers.relays.roleMiddle.flagFast.bwa += v.servers.relays.roleMiddle.flagFast.bwa ;
			fact.servers.relays.roleMiddle.flagFast.bwc += v.servers.relays.roleMiddle.flagFast.bwc ;
			fact.servers.relays.roleMiddle.flagFast.osv.linux += v.servers.relays.roleMiddle.flagFast.osv.linux ;
			fact.servers.relays.roleMiddle.flagFast.osv.darwin += v.servers.relays.roleMiddle.flagFast.osv.darwin ;
			fact.servers.relays.roleMiddle.flagFast.osv.freebsd += v.servers.relays.roleMiddle.flagFast.osv.freebsd ;
			fact.servers.relays.roleMiddle.flagFast.osv.windows += v.servers.relays.roleMiddle.flagFast.osv.windows ;
			fact.servers.relays.roleMiddle.flagFast.osv.other += v.servers.relays.roleMiddle.flagFast.osv.other ;
			fact.servers.relays.roleMiddle.flagFast.tsv.v010 += v.servers.relays.roleMiddle.flagFast.tsv.v010 ;
			fact.servers.relays.roleMiddle.flagFast.tsv.v011 += v.servers.relays.roleMiddle.flagFast.tsv.v011 ;
			fact.servers.relays.roleMiddle.flagFast.tsv.v012 += v.servers.relays.roleMiddle.flagFast.tsv.v012 ;
			fact.servers.relays.roleMiddle.flagFast.tsv.v020 += v.servers.relays.roleMiddle.flagFast.tsv.v020 ;
			fact.servers.relays.roleMiddle.flagFast.tsv.v021 += v.servers.relays.roleMiddle.flagFast.tsv.v021 ;
			fact.servers.relays.roleMiddle.flagFast.tsv.v022 += v.servers.relays.roleMiddle.flagFast.tsv.v022 ;
			fact.servers.relays.roleMiddle.flagFast.tsv.v023 += v.servers.relays.roleMiddle.flagFast.tsv.v023 ;
			fact.servers.relays.roleMiddle.flagFast.tsv.v024 += v.servers.relays.roleMiddle.flagFast.tsv.v024 ;
			fact.servers.relays.roleMiddle.flagFast.pbm += v.servers.relays.roleMiddle.flagFast.pbm ;

			fact.servers.relays.roleMiddle.flagFastStable.count += v.servers.relays.roleMiddle.flagFastStable.count ;
			fact.servers.relays.roleMiddle.flagFastStable.bwa += v.servers.relays.roleMiddle.flagFastStable.bwa ;
			fact.servers.relays.roleMiddle.flagFastStable.bwc += v.servers.relays.roleMiddle.flagFastStable.bwc ;
			fact.servers.relays.roleMiddle.flagFastStable.osv.linux += v.servers.relays.roleMiddle.flagFastStable.osv.linux ;
			fact.servers.relays.roleMiddle.flagFastStable.osv.darwin += v.servers.relays.roleMiddle.flagFastStable.osv.darwin ;
			fact.servers.relays.roleMiddle.flagFastStable.osv.freebsd += v.servers.relays.roleMiddle.flagFastStable.osv.freebsd ;
			fact.servers.relays.roleMiddle.flagFastStable.osv.windows += v.servers.relays.roleMiddle.flagFastStable.osv.windows ;
			fact.servers.relays.roleMiddle.flagFastStable.osv.other += v.servers.relays.roleMiddle.flagFastStable.osv.other ;
			fact.servers.relays.roleMiddle.flagFastStable.tsv.v010 += v.servers.relays.roleMiddle.flagFastStable.tsv.v010 ;
			fact.servers.relays.roleMiddle.flagFastStable.tsv.v011 += v.servers.relays.roleMiddle.flagFastStable.tsv.v011 ;
			fact.servers.relays.roleMiddle.flagFastStable.tsv.v012 += v.servers.relays.roleMiddle.flagFastStable.tsv.v012 ;
			fact.servers.relays.roleMiddle.flagFastStable.tsv.v020 += v.servers.relays.roleMiddle.flagFastStable.tsv.v020 ;
			fact.servers.relays.roleMiddle.flagFastStable.tsv.v021 += v.servers.relays.roleMiddle.flagFastStable.tsv.v021 ;
			fact.servers.relays.roleMiddle.flagFastStable.tsv.v022 += v.servers.relays.roleMiddle.flagFastStable.tsv.v022 ;
			fact.servers.relays.roleMiddle.flagFastStable.tsv.v023 += v.servers.relays.roleMiddle.flagFastStable.tsv.v023 ;
			fact.servers.relays.roleMiddle.flagFastStable.tsv.v024 += v.servers.relays.roleMiddle.flagFastStable.tsv.v024 ;
			fact.servers.relays.roleMiddle.flagFastStable.pbm += v.servers.relays.roleMiddle.flagFastStable.pbm ;

			fact.servers.relays.roleExit.total.count += v.servers.relays.roleExit.total.count ;	    //	RELAYS EXIT
			fact.servers.relays.roleExit.total.bwa += v.servers.relays.roleExit.total.bwa ;
			fact.servers.relays.roleExit.total.bwc += v.servers.relays.roleExit.total.bwc ;
			fact.servers.relays.roleExit.total.osv.linux += v.servers.relays.roleExit.total.osv.linux ;
			fact.servers.relays.roleExit.total.osv.darwin += v.servers.relays.roleExit.total.osv.darwin ;
			fact.servers.relays.roleExit.total.osv.freebsd += v.servers.relays.roleExit.total.osv.freebsd ;
			fact.servers.relays.roleExit.total.osv.windows += v.servers.relays.roleExit.total.osv.windows ;
			fact.servers.relays.roleExit.total.osv.other += v.servers.relays.roleExit.total.osv.other ;
			fact.servers.relays.roleExit.total.tsv.v010 += v.servers.relays.roleExit.total.tsv.v010 ;
			fact.servers.relays.roleExit.total.tsv.v011 += v.servers.relays.roleExit.total.tsv.v011 ;
			fact.servers.relays.roleExit.total.tsv.v012 += v.servers.relays.roleExit.total.tsv.v012 ;
			fact.servers.relays.roleExit.total.tsv.v020 += v.servers.relays.roleExit.total.tsv.v020 ;
			fact.servers.relays.roleExit.total.tsv.v021 += v.servers.relays.roleExit.total.tsv.v021 ;
			fact.servers.relays.roleExit.total.tsv.v022 += v.servers.relays.roleExit.total.tsv.v022 ;
			fact.servers.relays.roleExit.total.tsv.v023 += v.servers.relays.roleExit.total.tsv.v023 ;
			fact.servers.relays.roleExit.total.tsv.v024 += v.servers.relays.roleExit.total.tsv.v024 ;
			fact.servers.relays.roleExit.total.pex.p4 += v.servers.relays.roleExit.total.pex.p4 ;
			fact.servers.relays.roleExit.total.pex.p6 += v.servers.relays.roleExit.total.pex.p6 ;
			fact.servers.relays.roleExit.total.pex.p8 += v.servers.relays.roleExit.total.pex.p8 ;
			fact.servers.relays.roleExit.total.pex.p46 += v.servers.relays.roleExit.total.pex.p46 ;
			fact.servers.relays.roleExit.total.pex.p48 += v.servers.relays.roleExit.total.pex.p48 ;
			fact.servers.relays.roleExit.total.pex.p68 += v.servers.relays.roleExit.total.pex.p68 ;
			fact.servers.relays.roleExit.total.pex.p468 += v.servers.relays.roleExit.total.pex.p468 ;
			fact.servers.relays.roleExit.total.pbe += v.servers.relays.roleExit.total.pbe ;

			fact.servers.relays.roleExit.flagNone.count += v.servers.relays.roleExit.flagNone.count ;
			fact.servers.relays.roleExit.flagNone.bwa += v.servers.relays.roleExit.flagNone.bwa ;
			fact.servers.relays.roleExit.flagNone.bwc += v.servers.relays.roleExit.flagNone.bwc ;
			fact.servers.relays.roleExit.flagNone.osv.linux += v.servers.relays.roleExit.flagNone.osv.linux ;
			fact.servers.relays.roleExit.flagNone.osv.darwin += v.servers.relays.roleExit.flagNone.osv.darwin ;
			fact.servers.relays.roleExit.flagNone.osv.freebsd += v.servers.relays.roleExit.flagNone.osv.freebsd ;
			fact.servers.relays.roleExit.flagNone.osv.windows += v.servers.relays.roleExit.flagNone.osv.windows ;
			fact.servers.relays.roleExit.flagNone.osv.other += v.servers.relays.roleExit.flagNone.osv.other ;
			fact.servers.relays.roleExit.flagNone.tsv.v010 += v.servers.relays.roleExit.flagNone.tsv.v010 ;
			fact.servers.relays.roleExit.flagNone.tsv.v011 += v.servers.relays.roleExit.flagNone.tsv.v011 ;
			fact.servers.relays.roleExit.flagNone.tsv.v012 += v.servers.relays.roleExit.flagNone.tsv.v012 ;
			fact.servers.relays.roleExit.flagNone.tsv.v020 += v.servers.relays.roleExit.flagNone.tsv.v020 ;
			fact.servers.relays.roleExit.flagNone.tsv.v021 += v.servers.relays.roleExit.flagNone.tsv.v021 ;
			fact.servers.relays.roleExit.flagNone.tsv.v022 += v.servers.relays.roleExit.flagNone.tsv.v022 ;
			fact.servers.relays.roleExit.flagNone.tsv.v023 += v.servers.relays.roleExit.flagNone.tsv.v023 ;
			fact.servers.relays.roleExit.flagNone.tsv.v024 += v.servers.relays.roleExit.flagNone.tsv.v024 ;
			fact.servers.relays.roleExit.flagNone.pex.p4 += v.servers.relays.roleExit.flagNone.pex.p4 ;
			fact.servers.relays.roleExit.flagNone.pex.p6 += v.servers.relays.roleExit.flagNone.pex.p6 ;
			fact.servers.relays.roleExit.flagNone.pex.p8 += v.servers.relays.roleExit.flagNone.pex.p8 ;
			fact.servers.relays.roleExit.flagNone.pex.p46 += v.servers.relays.roleExit.flagNone.pex.p46 ;
			fact.servers.relays.roleExit.flagNone.pex.p48 += v.servers.relays.roleExit.flagNone.pex.p48 ;
			fact.servers.relays.roleExit.flagNone.pex.p68 += v.servers.relays.roleExit.flagNone.pex.p68 ;
			fact.servers.relays.roleExit.flagNone.pex.p468 += v.servers.relays.roleExit.flagNone.pex.p468 ;
			fact.servers.relays.roleExit.flagNone.pbe += v.servers.relays.roleExit.flagNone.pbe ;

			fact.servers.relays.roleExit.flagFast.count += v.servers.relays.roleExit.flagFast.count ;
			fact.servers.relays.roleExit.flagFast.bwa += v.servers.relays.roleExit.flagFast.bwa ;
			fact.servers.relays.roleExit.flagFast.bwc += v.servers.relays.roleExit.flagFast.bwc ;
			fact.servers.relays.roleExit.flagFast.osv.linux += v.servers.relays.roleExit.flagFast.osv.linux ;
			fact.servers.relays.roleExit.flagFast.osv.darwin += v.servers.relays.roleExit.flagFast.osv.darwin ;
			fact.servers.relays.roleExit.flagFast.osv.freebsd += v.servers.relays.roleExit.flagFast.osv.freebsd ;
			fact.servers.relays.roleExit.flagFast.osv.windows += v.servers.relays.roleExit.flagFast.osv.windows ;
			fact.servers.relays.roleExit.flagFast.osv.other += v.servers.relays.roleExit.flagFast.osv.other ;
			fact.servers.relays.roleExit.flagFast.tsv.v010 += v.servers.relays.roleExit.flagFast.tsv.v010 ;
			fact.servers.relays.roleExit.flagFast.tsv.v011 += v.servers.relays.roleExit.flagFast.tsv.v011 ;
			fact.servers.relays.roleExit.flagFast.tsv.v012 += v.servers.relays.roleExit.flagFast.tsv.v012 ;
			fact.servers.relays.roleExit.flagFast.tsv.v020 += v.servers.relays.roleExit.flagFast.tsv.v020 ;
			fact.servers.relays.roleExit.flagFast.tsv.v021 += v.servers.relays.roleExit.flagFast.tsv.v021 ;
			fact.servers.relays.roleExit.flagFast.tsv.v022 += v.servers.relays.roleExit.flagFast.tsv.v022 ;
			fact.servers.relays.roleExit.flagFast.tsv.v023 += v.servers.relays.roleExit.flagFast.tsv.v023 ;
			fact.servers.relays.roleExit.flagFast.tsv.v024 += v.servers.relays.roleExit.flagFast.tsv.v024 ;
			fact.servers.relays.roleExit.flagFast.pex.p4 += v.servers.relays.roleExit.flagFast.pex.p4 ;
			fact.servers.relays.roleExit.flagFast.pex.p6 += v.servers.relays.roleExit.flagFast.pex.p6 ;
			fact.servers.relays.roleExit.flagFast.pex.p8 += v.servers.relays.roleExit.flagFast.pex.p8 ;
			fact.servers.relays.roleExit.flagFast.pex.p46 += v.servers.relays.roleExit.flagFast.pex.p46 ;
			fact.servers.relays.roleExit.flagFast.pex.p48 += v.servers.relays.roleExit.flagFast.pex.p48 ;
			fact.servers.relays.roleExit.flagFast.pex.p68 += v.servers.relays.roleExit.flagFast.pex.p68 ;
			fact.servers.relays.roleExit.flagFast.pex.p468 += v.servers.relays.roleExit.flagFast.pex.p468 ;
			fact.servers.relays.roleExit.flagFast.pbe += v.servers.relays.roleExit.flagFast.pbe ;

			fact.servers.relays.roleExit.flagStable.count += v.servers.relays.roleExit.flagStable.count ;
			fact.servers.relays.roleExit.flagStable.bwa += v.servers.relays.roleExit.flagStable.bwa ;
			fact.servers.relays.roleExit.flagStable.bwc += v.servers.relays.roleExit.flagStable.bwc ;
			fact.servers.relays.roleExit.flagStable.osv.linux += v.servers.relays.roleExit.flagStable.osv.linux ;
			fact.servers.relays.roleExit.flagStable.osv.darwin += v.servers.relays.roleExit.flagStable.osv.darwin ;
			fact.servers.relays.roleExit.flagStable.osv.freebsd += v.servers.relays.roleExit.flagStable.osv.freebsd ;
			fact.servers.relays.roleExit.flagStable.osv.windows += v.servers.relays.roleExit.flagStable.osv.windows ;
			fact.servers.relays.roleExit.flagStable.osv.other += v.servers.relays.roleExit.flagStable.osv.other ;
			fact.servers.relays.roleExit.flagStable.tsv.v010 += v.servers.relays.roleExit.flagStable.tsv.v010 ;
			fact.servers.relays.roleExit.flagStable.tsv.v011 += v.servers.relays.roleExit.flagStable.tsv.v011 ;
			fact.servers.relays.roleExit.flagStable.tsv.v012 += v.servers.relays.roleExit.flagStable.tsv.v012 ;
			fact.servers.relays.roleExit.flagStable.tsv.v020 += v.servers.relays.roleExit.flagStable.tsv.v020 ;
			fact.servers.relays.roleExit.flagStable.tsv.v021 += v.servers.relays.roleExit.flagStable.tsv.v021 ;
			fact.servers.relays.roleExit.flagStable.tsv.v022 += v.servers.relays.roleExit.flagStable.tsv.v022 ;
			fact.servers.relays.roleExit.flagStable.tsv.v023 += v.servers.relays.roleExit.flagStable.tsv.v023 ;
			fact.servers.relays.roleExit.flagStable.tsv.v024 += v.servers.relays.roleExit.flagStable.tsv.v024 ;
			fact.servers.relays.roleExit.flagStable.pex.p4 += v.servers.relays.roleExit.flagStable.pex.p4 ;
			fact.servers.relays.roleExit.flagStable.pex.p6 += v.servers.relays.roleExit.flagStable.pex.p6 ;
			fact.servers.relays.roleExit.flagStable.pex.p8 += v.servers.relays.roleExit.flagStable.pex.p8 ;
			fact.servers.relays.roleExit.flagStable.pex.p46 += v.servers.relays.roleExit.flagStable.pex.p46 ;
			fact.servers.relays.roleExit.flagStable.pex.p48 += v.servers.relays.roleExit.flagStable.pex.p48 ;
			fact.servers.relays.roleExit.flagStable.pex.p68 += v.servers.relays.roleExit.flagStable.pex.p68 ;
			fact.servers.relays.roleExit.flagStable.pex.p468 += v.servers.relays.roleExit.flagStable.pex.p468 ;
			fact.servers.relays.roleExit.flagStable.pbe += v.servers.relays.roleExit.flagStable.pbe ;

			fact.servers.relays.roleExit.flagFastStable.count += v.servers.relays.roleExit.flagFastStable.count ;
			fact.servers.relays.roleExit.flagFastStable.bwa += v.servers.relays.roleExit.flagFastStable.bwa ;
			fact.servers.relays.roleExit.flagFastStable.bwc += v.servers.relays.roleExit.flagFastStable.bwc ;
			fact.servers.relays.roleExit.flagFastStable.osv.linux += v.servers.relays.roleExit.flagFastStable.osv.linux ;
			fact.servers.relays.roleExit.flagFastStable.osv.darwin += v.servers.relays.roleExit.flagFastStable.osv.darwin ;
			fact.servers.relays.roleExit.flagFastStable.osv.freebsd += v.servers.relays.roleExit.flagFastStable.osv.freebsd ;
			fact.servers.relays.roleExit.flagFastStable.osv.windows += v.servers.relays.roleExit.flagFastStable.osv.windows ;
			fact.servers.relays.roleExit.flagFastStable.osv.other += v.servers.relays.roleExit.flagFastStable.osv.other ;
			fact.servers.relays.roleExit.flagFastStable.tsv.v010 += v.servers.relays.roleExit.flagFastStable.tsv.v010 ;
			fact.servers.relays.roleExit.flagFastStable.tsv.v011 += v.servers.relays.roleExit.flagFastStable.tsv.v011 ;
			fact.servers.relays.roleExit.flagFastStable.tsv.v012 += v.servers.relays.roleExit.flagFastStable.tsv.v012 ;
			fact.servers.relays.roleExit.flagFastStable.tsv.v020 += v.servers.relays.roleExit.flagFastStable.tsv.v020 ;
			fact.servers.relays.roleExit.flagFastStable.tsv.v021 += v.servers.relays.roleExit.flagFastStable.tsv.v021 ;
			fact.servers.relays.roleExit.flagFastStable.tsv.v022 += v.servers.relays.roleExit.flagFastStable.tsv.v022 ;
			fact.servers.relays.roleExit.flagFastStable.tsv.v023 += v.servers.relays.roleExit.flagFastStable.tsv.v023 ;
			fact.servers.relays.roleExit.flagFastStable.tsv.v024 += v.servers.relays.roleExit.flagFastStable.tsv.v024 ;
			fact.servers.relays.roleExit.flagFastStable.pex.p4 += v.servers.relays.roleExit.flagFastStable.pex.p4 ;
			fact.servers.relays.roleExit.flagFastStable.pex.p6 += v.servers.relays.roleExit.flagFastStable.pex.p6 ;
			fact.servers.relays.roleExit.flagFastStable.pex.p8 += v.servers.relays.roleExit.flagFastStable.pex.p8 ;
			fact.servers.relays.roleExit.flagFastStable.pex.p46 += v.servers.relays.roleExit.flagFastStable.pex.p46 ;
			fact.servers.relays.roleExit.flagFastStable.pex.p48 += v.servers.relays.roleExit.flagFastStable.pex.p48 ;
			fact.servers.relays.roleExit.flagFastStable.pex.p68 += v.servers.relays.roleExit.flagFastStable.pex.p68 ;
			fact.servers.relays.roleExit.flagFastStable.pex.p468 += v.servers.relays.roleExit.flagFastStable.pex.p468 ;
			fact.servers.relays.roleExit.flagFastStable.pbe += v.servers.relays.roleExit.flagFastStable.pbe ;

			fact.servers.relays.roleDir.total.count += v.servers.relays.roleDir.total.count ;       //	RELAYS DIR
			fact.servers.relays.roleDir.total.bwa += v.servers.relays.roleDir.total.bwa ;
			fact.servers.relays.roleDir.total.bwc += v.servers.relays.roleDir.total.bwc ;
			fact.servers.relays.roleDir.total.osv.linux += v.servers.relays.roleDir.total.osv.linux ;
			fact.servers.relays.roleDir.total.osv.darwin += v.servers.relays.roleDir.total.osv.darwin ;
			fact.servers.relays.roleDir.total.osv.freebsd += v.servers.relays.roleDir.total.osv.freebsd ;
			fact.servers.relays.roleDir.total.osv.windows += v.servers.relays.roleDir.total.osv.windows ;
			fact.servers.relays.roleDir.total.osv.other += v.servers.relays.roleDir.total.osv.other ;
			fact.servers.relays.roleDir.total.tsv.v010 += v.servers.relays.roleDir.total.tsv.v010 ;
			fact.servers.relays.roleDir.total.tsv.v011 += v.servers.relays.roleDir.total.tsv.v011 ;
			fact.servers.relays.roleDir.total.tsv.v012 += v.servers.relays.roleDir.total.tsv.v012 ;
			fact.servers.relays.roleDir.total.tsv.v020 += v.servers.relays.roleDir.total.tsv.v020 ;
			fact.servers.relays.roleDir.total.tsv.v021 += v.servers.relays.roleDir.total.tsv.v021 ;
			fact.servers.relays.roleDir.total.tsv.v022 += v.servers.relays.roleDir.total.tsv.v022 ;
			fact.servers.relays.roleDir.total.tsv.v023 += v.servers.relays.roleDir.total.tsv.v023 ;
			fact.servers.relays.roleDir.total.tsv.v024 += v.servers.relays.roleDir.total.tsv.v024 ;

			fact.servers.relays.roleDir.authorityTrue.count += v.servers.relays.roleDir.authorityTrue.count ;
			fact.servers.relays.roleDir.authorityTrue.bwa += v.servers.relays.roleDir.authorityTrue.bwa ;
			fact.servers.relays.roleDir.authorityTrue.bwc += v.servers.relays.roleDir.authorityTrue.bwc ;
			fact.servers.relays.roleDir.authorityTrue.osv.linux += v.servers.relays.roleDir.authorityTrue.osv.linux ;
			fact.servers.relays.roleDir.authorityTrue.osv.darwin += v.servers.relays.roleDir.authorityTrue.osv.darwin ;
			fact.servers.relays.roleDir.authorityTrue.osv.freebsd += v.servers.relays.roleDir.authorityTrue.osv.freebsd ;
			fact.servers.relays.roleDir.authorityTrue.osv.windows += v.servers.relays.roleDir.authorityTrue.osv.windows ;
			fact.servers.relays.roleDir.authorityTrue.osv.other += v.servers.relays.roleDir.authorityTrue.osv.other ;
			fact.servers.relays.roleDir.authorityTrue.tsv.v010 += v.servers.relays.roleDir.authorityTrue.tsv.v010 ;
			fact.servers.relays.roleDir.authorityTrue.tsv.v011 += v.servers.relays.roleDir.authorityTrue.tsv.v011 ;
			fact.servers.relays.roleDir.authorityTrue.tsv.v012 += v.servers.relays.roleDir.authorityTrue.tsv.v012 ;
			fact.servers.relays.roleDir.authorityTrue.tsv.v020 += v.servers.relays.roleDir.authorityTrue.tsv.v020 ;
			fact.servers.relays.roleDir.authorityTrue.tsv.v021 += v.servers.relays.roleDir.authorityTrue.tsv.v021 ;
			fact.servers.relays.roleDir.authorityTrue.tsv.v022 += v.servers.relays.roleDir.authorityTrue.tsv.v022 ;
			fact.servers.relays.roleDir.authorityTrue.tsv.v023 += v.servers.relays.roleDir.authorityTrue.tsv.v023 ;
			fact.servers.relays.roleDir.authorityTrue.tsv.v024 += v.servers.relays.roleDir.authorityTrue.tsv.v024 ;


																	                                //	COUNTRIES
			v.countries.forEach( function (vCountry) {											    //	<- double loop part 1: countries in values emitted from map
				var incomingCountryAlreadyknown = false ;                                           //  assuming data about this country has not already been aded to fact
				for ( var fc = 0 , fcl = fact.countries.length; fc < fcl ; fc++ ) {					//	<- double loop part 2: countries in fact
					var countryFact = fact.countries[fc] ;											//	check the array for countries already added to the aggregation process
					if ( countryFact.country == vCountry.country ) {							    //	if an object for this country was already added to the array
						countryFact.cbcc += vCountry.cbcc ;									        //	add values from countryMapped to that already existing object
						countryFact.crcc += vCountry.crcc ;
						countryFact.relay += vCountry.relay ;
						countryFact.guard += vCountry.guard ;
						countryFact.middle += vCountry.middle ;
						countryFact.exit += vCountry.exit ;
						countryFact.dir += vCountry.dir ;
						countryFact.bwa += vCountry.bwa ;
						countryFact.bwc += vCountry.bwc ;
						countryFact.pbr += vCountry.pbr ;
						countryFact.pbg += vCountry.pbg ;
						countryFact.pbm += vCountry.pbm ;
						countryFact.pbe += vCountry.pbe ;
						countryFact.fast += vCountry.fast ;
						countryFact.stable += vCountry.stable ;
						countryFact.osv.linux += vCountry.osv.linux ;
						countryFact.osv.darwin += vCountry.osv.darwin ;
						countryFact.osv.freebsd += vCountry.osv.freebsd ;
						countryFact.osv.windows += vCountry.osv.windows ;
						countryFact.osv.other += vCountry.osv.other ;
						countryFact.tsv.v010 += vCountry.tsv.v010 ;
						countryFact.tsv.v011 += vCountry.tsv.v011 ;
						countryFact.tsv.v012 += vCountry.tsv.v012 ;
						countryFact.tsv.v020 += vCountry.tsv.v020 ;
						countryFact.tsv.v021 += vCountry.tsv.v021 ;
						countryFact.tsv.v022 += vCountry.tsv.v022 ;
						countryFact.tsv.v023 += vCountry.tsv.v023 ;
						countryFact.tsv.v024 += vCountry.tsv.v024 ;
						countryFact.pex.p4 += vCountry.pex.p4 ;
						countryFact.pex.p6 += vCountry.pex.p6 ;
						countryFact.pex.p8 += vCountry.pex.p8 ;
						countryFact.pex.p46 += vCountry.pex.p46 ;
						countryFact.pex.p48 += vCountry.pex.p48 ;
						countryFact.pex.p68 += vCountry.pex.p68 ;
						countryFact.pex.p468 += vCountry.pex.p468 ;

						for ( var vca = 0 , vcal = vCountry.autosys.length ; vca < vcal ; vca++ ) { //	<- inner double loop part 1: 'as' in mapped.countries
						    var incomingASinCountryAlreadyKown = false ;	                        //     (can be nmore than one, because incoming may be pre-aggregated)						var incomingASinCountryAlreadyKown = false ;
							var countryASmap = vCountry.autosys[vca] ;						        //	countryASmap is the whole object { as : int, count : int }

							for ( var fca = 0 , fcal = countryFact.autosys.length; fca < fcal ; fca++ ) {   //	<- inner double loop part 2: 'as' in fact.countries
							    var countryAsFact = countryFact.autosys[fca] ;
								if (countryAsFact.as == countryASmap.as) {
	                                countryAsFact.count += countryASmap.count ;
		                            incomingASinCountryAlreadyKown = true ;
		                            break ;
	                            }
	                        }
	                        if ( !incomingASinCountryAlreadyKown ) {                                //	after the inner loop is through
	                            countryFact.autosys.push(countryASmap) ;                            //	if the 'as' wasn't found in the array add it
							}
						}                                                                           //  return to the outer loop, check the next country passed in by mapValues
						incomingCountryAlreadyknown = true ;
						break ;
					}
				}
				if ( !incomingCountryAlreadyknown ) { 												//	if the country does not exist in the array so far
					fact.countries.push(vCountry) ;											        //	add the country object to the array
				}
			});


			v.autosys.forEach( function(vAutosys) {													//	AUTOSYS
				var incomingASalreadyKnown = false ;
				for ( var fa = 0 , fal = fact.autosys.length ; fa < fal ; fa++ ) {
					var asFact = fact.autosys[fa] ;													//	for each object in fact.autosys
					if ( asFact.as == vAutosys.as ) {												//	if that objects 'as' field equals that of the relay getting mapped
						asFact.relay += vAutosys.relay ;											//	add up the numbers
						asFact.bwa += vAutosys.bwa ;
						asFact.bwc += vAutosys.bwc ;
						asFact.fast += vAutosys.fast ;
						asFact.stable += vAutosys.stable ;
						asFact.guard += vAutosys.guard ;
						asFact.middle += vAutosys.middle ;
						asFact.exit += vAutosys.exit ;
						asFact.dir += vAutosys.dir ;
						asFact.pbr += vAutosys.pbr ;
						asFact.pbg += vAutosys.pbg ;
						asFact.pbm += vAutosys.pbm ;
						asFact.pbe += vAutosys.pbe ;

						for ( var vac = 0 , vacl = vAutosys.countries.length ;  vac < vacl ; vac++ ) {
							var incomingCountryInASalreadyKown = false ;
							var asCountryMap = vAutosys.countries[vac] ;

							for ( var fac = 0 , facl = asFact.countries.length; fac < facl ; fac++ ) {
								var asCountryFact = asFact.countries[fac] ;

								if (asCountryFact.cc == asCountryMap.cc) {
									asCountryFact.relay += asCountryMap.relay ;
									asCountryFact.bwa += asCountryMap.bwa ;
									asCountryFact.bwc += asCountryMap.bwc ;
									asCountryFact.fast += asCountryMap.fast ;
									asCountryFact.stable += asCountryMap.stable ;
									asCountryFact.guard += asCountryMap.guard ;
									asCountryFact.middle += asCountryMap.middle ;
									asCountryFact.exit += asCountryMap.exit ;
									asCountryFact.dir += asCountryMap.dir ;
									asCountryFact.pbr += asCountryMap.pbr ;
									asCountryFact.pbg += asCountryMap.pbg ;
									asCountryFact.pbm += asCountryMap.pbm ;
									asCountryFact.pbe += asCountryMap.pbe ;
									incomingCountryInASalreadyKown = true ;
									break ;
								}
							}
							if ( !incomingCountryInASalreadyKown ) {
								asFact.countries.push(asCountryMap) ;
							}

						}

						incomingASalreadyKnown = true ;
						break ;
					}
				}
				if ( !incomingASalreadyKnown ) {
					fact.autosys.push(vAutosys) ;
				}

			});

		});
		printjson(fact.date);
		return fact;
	};




//	//////////////////////////////////////////////////////////////////////////////////////////////
//	//////////////////////////////////////////////////////////////////////////////////////////////
//
//	FINALIZE
//
//	//////////////////////////////////////////////////////////////////////////////////////////////


	var finalizeFact = function ( key, fact ) {
		/*
		//	do fancy stuff like averages etc.
		//	note that the fact.average field would have to be present in map and reduce too even if
	    //  unused until finalize
		//	example from http://docs.mongodb.org/manual/tutorial/perform-incremental-map-reduce/
				if (fact.count > 0) fact.average = fact.total / fact.count;
		//  see also http://docs.mongodb.org/manual/reference/method/db.collection.mapReduce/#calculate-order-and-total-quantity-with-average-quantity-per-item
		*/
		return fact ;
	};




//	//////////////////////////////////////////////////////////////////////////////////////////////
//	//////////////////////////////////////////////////////////////////////////////////////////////
//
//	EXECUTE
//
//	//////////////////////////////////////////////////////////////////////////////////////////////


   //  db.facts.remove();				 		//	{ _id : "Fact " + theSpan + " " + theDate }     TODO    remove after testing
	db.import.mapReduce (
		mapValues,
		reduceFact,
		{ 
			out: { 
				merge : "facts"		 														    //	the final fact collection
																								//  'merge' replaces existing documents with the same key
																								//  'reduce' would add values to exsiting documents - we don't want that
				, nonAtomic : false																//	prevents locking of the db during post-processing
			}
			, query : { "addd" : { "$gte" : update}  }
			, jsMode: true																		//	TODO    check: is faster, but needs more memory
//			, finalize : finalizeFact
			, scope: { theDate: date, theSpan: span } 		                                    //  globally (in the mapReduce job) available  variables
	        , sort : { "date" : 1 }                                                             //  speeds up mapReduce as 'date' is indexed in the import collection
																								//	but demands that "sort" equals the key of the map operation
		}
	);
}("2013-04-03 23" , 1 , "2013-08-14T09:23:45.302Z");										    //	TODO	remove self call after testing
																								//	2013-04-03 23 ^= 1365030000000