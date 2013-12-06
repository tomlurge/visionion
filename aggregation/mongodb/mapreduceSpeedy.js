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
			test : ( this.role.indexOf("Guard") > -1 )
		} ,
		{	name : "middle" ,
			test : ( this.role.indexOf("Middle") > -1 )
		} ,
		{ 	name : "exit" ,
			test : ( this.role.indexOf("Exit") > -1 )
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

	var probs = [
		{ 	name : "relay" ,
			test : ( this.pbr ) ,
			labl : "pbr"
		} ,
		{ 	name : "guard" ,
			test : ( this.pbg ) ,
			labl : "pbg"
		} ,
		{	name : "middle" ,
			test : ( this.pbm ) ,
			labl : "pbm"
		} ,
		{ 	name : "exit" ,
			test : ( this.pbe ) ,
			labl : "pbe"
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
			p[v.name] = 0 ;
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
			value.servers.total = new Server() ;													//	pay credit to servers
			value.servers.relays = {} ;
			value.servers.relays.total = new Server() ;
			value.servers.relays.roles = {} ;                                                       // really necessary?
			for (var role in roles) {
				if (role.test) {
					value.servers.relays.roles[role.name] = new Server() ;			                // populate roles
					if (role.name == "exit")
						value.servers.relays.roles.exit.pex = pop(pex) ;
				}
			}
			value.servers.relays.flags = {} ;                                                       // really necessary?
			for (var flag in flags) {
				if (flag.test) value.servers.relays.flags[flag.name] = new Server() ; 	            // populate flags
			}
			value.servers.relays.probs = {} ;
			for (var prob in probs) {
				if (prob.test) value.servers.relays.probs[prob.name] = prob.test ;
			}
			value.servers.relays.mixes = {} ;
		}
		else if (this.type == "b") {																//	BRIDGES
			value.servers.total = new Server() ;													//  pay credit to servers
			value.servers.bridges = {} ;
			value.servers.bridges.total = new Server();
			value.servers.bridges.brps = {} ;
			for (var brp in brps) {
				if (brp.test) value.servers.bridges.brps[brp.name] = new Server() ;
			}
			value.servers.bridges.brts = {} ;
			for (var brt in brts) {
				if (brt.test) value.servers.bridges.brts[brt.name] = new Server() ;
			}
			if (bres[0].test) {
				value.servers.bridges.bres = {} ;
				value.servers.bridges.bres.bre = new Server() ;
			}
		}
		else if (this.type == "c") {																//	CLIENTS
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
			country : 			"" ,
			cbcc :				0 ,
			crcc :				0 ,
			relay : 			0 ,
			bwa : 				0 ,
			bwc : 				0 ,
		    roles : 			{} ,
		    flags : 			{} ,
		    probs : 			{} ,
			osv :               popInit(osv),
			tsv :               popInit(tsv) ,
			pex :               popInit(pex) ,
			autosys :			[]
		} ;
		for (var role in roles)
			CountryObject.prototype.roles[role.name] = 0 ;
		for (var flag in flags)
			CountryObject.prototype.flags[flag.name] = 0 ;
		for (var prob in probs)
			CountryObject.prototype.probs[prob.name] = 0 ;



		if (this.type == "c") {																	    //	if input document is of type "c" (client) just add client information,
			for(var cb in this.cbcc) {
				if (this.cbcc.hasOwnProperty(cb)) {
	                var cbccCountryObject = new CountryObject();
	                cbccCountryObject.country = cb ;
	                cbccCountryObject.cbcc = this.cbcc[cb] ;
					/*
	                cbccCountryObject.crcc = 0 ;
	                cbccCountryObject.relay = 0 ;
	                cbccCountryObject.bwa = 0 ;
	                cbccCountryObject.bwc = 0 ;
	                cbccCountryObject.pbr = 0 ;
					for (var role in roles) { cbccCountryObject[role.name] = 0 ; }
					for (var flag in flags) { cbccCountryObject[flag.name] = 0 ; }
	                cbccCountryObject.osv = {} ;
					for (var o in osv) { cbccCountryObject.osv[o.name] = 0 ; }
	                cbccCountryObject.tsv = {} ;
					for (var t in tsv) { cbccCountryObject.tsv[t.name] = 0 ; }
	                cbccCountryObject.pex = {} ;
					for (var p in pex) { cbccCountryObject.pex[p.name] = 0 ; }
	                cbccCountryObject.autosys = [] ;
	                */
	                value.countries.push(cbccCountryObject) ;
	            }
			}
			for(var cr in this.crcc) {
				if (this.crcc.hasOwnProperty(cr)) {
	                var crccCountryObject = new CountryObject();
	                crccCountryObject.country = cr ;
	                crccCountryObject.crcc = this.crcc[cr] ;
	                crccCountryObject.cbcc = 0 ;											        //	reset cbcc to 0, otherwise it will still hold the value from the last cbcc run
	                /*
	                crccCountryObject.relay = 0 ;
	                crccCountryObject.bwa = 0 ;
	                crccCountryObject.bwc = 0 ;
	                crccCountryObject.pbr = 0 ;
					for (var role in roles) { crccCountryObject[role.name] = 0 ; }
					for (var flag in flags) { crccCountryObject[flag.name] = 0 ; }
					crccCountryObject.osv = {} ;
					for (var o in osv) { crccCountryObject.osv[o.name] = 0 ; }
					crccCountryObject.tsv = {} ;
					for (var t in tsv) { crccCountryObject.tsv[t.name] = 0 ; }
					crccCountryObject.pex = {} ;
					for (var p in pex) { crccCountryObject.pex[p.name] = 0 ; }
	                crccCountryObject.autosys = [] ;
	                 */
	                value.countries.push(crccCountryObject);
				}
			}
		}
		else if (this.type == "r" && this.cc) {                                                     //  if it's a relay and cc field is not empty
	        var rCountryObject = new CountryObject();
			rCountryObject.country = this.cc ;
			// rCountryObject.cbcc = 0 ;
			// rCountryObject.crcc = 0 ;
			rCountryObject.relay = 1 ;
			rCountryObject.bwa = this.bwa ;
			rCountryObject.bwc = this.bwc ;
			for (var role in roles)
				if (role.test)  rCountryObject.roles[role.name] = 1 ;
			for (var flag in flags)
				if (flag.test)  rCountryObject.flags[flag.name] = 1 ;
			for (var prob in probs)
				if (prob.test)  rCountryObject.probs[prob.name] = this[prob.labl] ;                 //  "labl", because here we're querying the import data
	        for (var o in osv)
		        if (o.test) rCountryObject.osv[o.name] = 1 ;
			for (var t in tsv)
				if (t.test) rCountryObject.tsv[t.name] = 1 ;
			if ( this.role.indexOf("Exit") > -1 ) {
				for (var p in pex)
					if (p.test) rCountryObject.pex[p.name] = 1 ;
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


		if (this.as) {															                    //  AUTOSYS
			var sys = {
				as :                    this.as ,
				//  name :           	function(as) { return name; } : ""						    //	TODO	lookup name for AS
				//  home :          	function(as) { return home; } : "" 						    //	TODO	lookup home country for AS
				relay :                 1 ,
				bwa :                   this.bwa ,
				bwc :                   this.bwc ,
				roles :                 {} ,
				flags :                 {} ,
				probs :                 {} ,
				countries :             [{
					cc :                this.cc ,                                                   //  if cc is undefined the following values will be
					relay :             1 ,                                                         //  added to "undefined" (and won't do any harm)
					bwa :               this.bwa ,
					bwc :               this.bwc ,
					roles :             {} ,
					flags :             {} ,
					probs :             {}
				}]
			} ;
			for (var role in roles) {
				(role.test) ? sys.roles[role.name] = 1 : sys.roles[role.name] = 0 ;
				(role.test) ? sys.countries[0].roles[role.name] = 1 :sys.countries[0].roles[role.name] = 0 ;
			}
			for (var flag in flags) {
				(flag.test) ? sys.flags[flag.name] = 1 : sys.flags[flag.name] = 0 ;
				(flag.test) ? sys.countries[0].flags[flag.name] = 1 : sys.countries[0].flags[flag.name] = 0 ;
			}
			for (var prob in probs) {
				(prob.test) ? sys.probs[prob.name] = prob.test : sys.probs[prob.name] = 0 ;
				(prob.test) ? sys.countries[0].probs[prob.name] = prob.test : sys.countries[0].probs[prob.name] = 0 ;
			}

			value.autosys.push(sys)
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
					flags : {} ,
					probs : {} ,
					mixes : {}
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
		for (var prob in probs)
			fact.servers.relays.probs[prob.name] = 0;
		fact.servers.relays.roles.exit.pex = {} ;
		for (var p in pex)
			fact.servers.relays.roles.exit.pex[p.name] = 0 ;



		values.forEach( function(v) {																//	ADD INCOMING
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
			fact.servers.total.bwc 	+= v.servers.total.bwc ;
			for (var o in osv)
				fact.servers.total.osv[o.name] 					+= v.servers.total.osv[o.name] ;
			for (var t in tsv)
				fact.servers.total.tsv[t.name] 					+= v.servers.total.tsv[t.name] ;

			fact.servers.bridges.total.count 					+= v.servers.bridges.total.count ;	//	BRIDGES
			fact.servers.bridges.total.bwa 						+= v.servers.bridges.total.bwa ;
			fact.servers.bridges.total.bwc 						+= v.servers.bridges.total.bwc ;
			for (var o in osv)
				fact.servers.bridges.total.osv[o.name] 			+= v.servers.bridges.total.osv[o.name] ;
			for (var t in tsv)
				fact.servers.bridges.total.tsv[t.name] 			+= v.servers.bridges.total.tsv[t.name] ;

			fact.servers.bridges.brps.email.count 				+= v.servers.bridges.brps.email.count ;
			fact.servers.bridges.brps.email.bwa 				+= v.servers.bridges.brps.email.bwa ;
			fact.servers.bridges.brps.email.bwc 				+= v.servers.bridges.brps.email.bwc ;
			for (var o in osv)
				fact.servers.bridges.brps.email.osv[o.name] 	+= v.servers.bridges.brps.email.osv[o.name] ;
			for (var t in tsv)
				fact.servers.bridges.brps.email.tsv[t.name] 	+= v.servers.bridges.brps.email.tsv[t.name] ;

			fact.servers.bridges.brps.https.count 				+= v.servers.bridges.brps.https.count ;
			fact.servers.bridges.brps.https.bwa 				+= v.servers.bridges.brps.https.bwa ;
			fact.servers.bridges.brps.https.bwc 				+= v.servers.bridges.brps.https.bwc ;
			for (var o in osv)
				fact.servers.bridges.brps.https.osv[o.name] 	+= v.servers.bridges.brps.https.osv[o.name] ;
			for (var t in tsv)
				fact.servers.bridges.brps.https.tsv[t.name] 	+= v.servers.bridges.brps.https.tsv[t.name] ;

			fact.servers.bridges.brps.other.count 				+= v.servers.bridges.brps.other.count ;
			fact.servers.bridges.brps.other.bwa 				+= v.servers.bridges.brps.other.bwa ;
			fact.servers.bridges.brps.other.bwc 				+= v.servers.bridges.brps.other.bwc ;
			for (var o in osv)
				fact.servers.bridges.brps.other.osv[o.name] 	+= v.servers.bridges.brps.other.osv[o.name] ;
			for (var t in tsv)
				fact.servers.bridges.brps.other.tsv[t.name] 	+= v.servers.bridges.brps.other.tsv[t.name] ;

			fact.servers.bridges.brts.obfs2.count 				+= v.servers.bridges.brts.obfs2.count ;
			fact.servers.bridges.brts.obfs2.bwa 				+= v.servers.bridges.brts.obfs2.bwa ;
			fact.servers.bridges.brts.obfs2.bwc 				+= v.servers.bridges.brts.obfs2.bwc ;
			for (var o in osv)
				fact.servers.bridges.brts.obfs2.osv[o.name] 	+= v.servers.bridges.brts.obfs2.osv[o.name] ;
			for (var t in tsv)
				fact.servers.bridges.brts.obfs2.tsv[t.name] 	+= v.servers.bridges.brts.obfs2.tsv[t.name] ;

			fact.servers.bridges.brts.obfs3.count 				+= v.servers.bridges.brts.obfs3.count ;
			fact.servers.bridges.brts.obfs3.bwa 				+= v.servers.bridges.brts.obfs3.bwa ;
			fact.servers.bridges.brts.obfs3.bwc 				+= v.servers.bridges.brts.obfs3.bwc ;
			for (var o in osv)
				fact.servers.bridges.brts.obfs3.osv[o.name] 	+= v.servers.bridges.brts.obfs3.osv[o.name] ;
			for (var t in tsv)
				fact.servers.bridges.brts.obfs3.tsv[t.name] 	+= v.servers.bridges.brts.obfs3.tsv[t.name] ;

			fact.servers.bridges.brts.obfs23.count 				+= v.servers.bridges.brts.obfs23.count ;
			fact.servers.bridges.brts.obfs23.bwa 				+= v.servers.bridges.brts.obfs23.bwa ;
			fact.servers.bridges.brts.obfs23.bwc 				+= v.servers.bridges.brts.obfs23.bwc ;
			for (var o in osv)
				fact.servers.bridges.brts.obfs23.osv[o.name] 	+= v.servers.bridges.brts.obfs23.osv[o.name] ;
			for (var t in tsv)
				fact.servers.bridges.brts.obfs23.tsv[t.name] 	+= v.servers.bridges.brts.obfs23.tsv[t.name] ;

			fact.servers.bridges.bres.bre.count 				+= v.servers.bridges.bres.bre.count ;
			fact.servers.bridges.bres.bre.bwa 					+= v.servers.bridges.bres.bre.bwa ;
			fact.servers.bridges.bres.bre.bwc 					+= v.servers.bridges.bres.bre.bwc ;
			for (var o in osv)
				fact.servers.bridges.bres.bre.osv[o.name] 		+= v.servers.bridges.bres.bre.osv[o.name] ;
			for (var t in tsv)
				fact.servers.bridges.bres.bre.tsv[t.name] 		+= v.servers.bridges.bres.bre.tsv[t.name] ;


	        fact.servers.relays.total.count 					+= v.servers.relays.total.count ;	//	RELAYS
			fact.servers.relays.total.bwa 						+= v.servers.relays.total.bwa ;
			fact.servers.relays.total.bwc 						+= v.servers.relays.total.bwc ;
			for (var o in osv)
				fact.servers.relays.total.osv[o.name] 			+= v.servers.relays.total.osv[o.name] ;
			for (var t in tsv)
				fact.servers.relays.total.tsv[t.name] 			+= v.servers.relays.total.tsv[t.name] ;

			fact.servers.relays.roles.guard.count 				+= v.servers.relays.roles.guard.count ;
			fact.servers.relays.roles.guard.bwa 				+= v.servers.relays.roles.guard.bwa ;
			fact.servers.relays.roles.guard.bwc 				+= v.servers.relays.roles.guard.bwc ;
			for (var o in osv)
				fact.servers.relays.roles.guard.osv[o.name] 	+= v.servers.relays.roles.guard.osv[o.name] ;
			for (var t in tsv)
				fact.servers.relays.roles.guard.tsv[t.name] 	+= v.servers.relays.roles.guard.tsv[t.name] ;

			fact.servers.relays.roles.middle.count 				+= v.servers.relays.roles.middle.count ;
			fact.servers.relays.roles.middle.bwa 				+= v.servers.relays.roles.middle.bwa ;
			fact.servers.relays.roles.middle.bwc 				+= v.servers.relays.roles.middle.bwc ;
			for (var o in osv)
				fact.servers.relays.roles.middle.osv[o.name] 	+= v.servers.relays.roles.middle.osv[o.name] ;
			for (var t in tsv)
				fact.servers.relays.roles.middle.tsv[t.name] 	+= v.servers.relays.roles.middle.tsv[t.name] ;

			fact.servers.relays.roles.exit.count 				+= v.servers.relays.roles.exit.count ;
			fact.servers.relays.roles.exit.bwa 					+= v.servers.relays.roles.exit.bwa ;
			fact.servers.relays.roles.exit.bwc 					+= v.servers.relays.roles.exit.bwc ;
			for (var o in osv)
				fact.servers.relays.roles.exit.osv[o.name] 	    += v.servers.relays.roles.exit.osv[o.name] ;
			for (var t in tsv)
				fact.servers.relays.roles.exit.tsv[t.name] 	    += v.servers.relays.roles.exit.tsv[t.name] ;
			for (var p in pex)
				fact.servers.relays.roles.exit.pex[p.name] 	    += v.servers.relays.roles.exit.pex[p.name] ;

			fact.servers.relays.roles.dir.count 				+= v.servers.relays.roles.dir.count ;
			fact.servers.relays.roles.dir.bwa 					+= v.servers.relays.roles.dir.bwa ;
			fact.servers.relays.roles.dir.bwc 					+= v.servers.relays.roles.dir.bwc ;
			for (var o in osv)
				fact.servers.relays.roles.dir.osv[o.name] 	    += v.servers.relays.roles.dir.osv[o.name] ;
			for (var t in tsv)
				fact.servers.relays.roles.dir.tsv[t.name] 	    += v.servers.relays.roles.dir.tsv[t.name] ;


			fact.servers.relays.flags.notFastStable.count 		+= v.servers.relays.flags.notFastStable.count ;
			fact.servers.relays.flags.notFastStable.bwa 		+= v.servers.relays.flags.notFastStable.bwa ;
			fact.servers.relays.flags.notFastStable.bwc 		+= v.servers.relays.flags.notFastStable.bwc ;
			for (var o in osv)
				fact.servers.relays.flags.notFastStable.osv[o.name] += v.servers.relays.flags.notFastStable.osv[o.name] ;
			for (var t in tsv)
				fact.servers.relays.flags.notFastStable.tsv[t.name] += v.servers.relays.flags.notFastStable.tsv[t.name] ;

			fact.servers.relays.flags.fast.count 				+= v.servers.relays.flags.fast.count ;
			fact.servers.relays.flags.fast.bwa 					+= v.servers.relays.flags.fast.bwa ;
			fact.servers.relays.flags.fast.bwc 					+= v.servers.relays.flags.fast.bwc ;
			for (var o in osv)
				fact.servers.relays.flags.fast.osv[o.name] 	    += v.servers.relays.flags.fast.osv[o.name] ;
			for (var t in tsv)
				fact.servers.relays.flags.fast.tsv[t.name] 	    += v.servers.relays.flags.fast.tsv[t.name] ;

			fact.servers.relays.flags.stable.count 				+= v.servers.relays.flags.stable.count ;
			fact.servers.relays.flags.stable.bwa 				+= v.servers.relays.flags.stable.bwa ;
			fact.servers.relays.flags.stable.bwc 				+= v.servers.relays.flags.stable.bwc ;
			for (var o in osv)
				fact.servers.relays.flags.stable.osv[o.name] 	+= v.servers.relays.flags.stable.osv[o.name] ;
			for (var t in tsv)
				fact.servers.relays.flags.stable.tsv[t.name] 	+= v.servers.relays.flags.stable.tsv[t.name] ;

			fact.servers.relays.flags.fastStable.count 			+= v.servers.relays.flags.fastStable.count ;
			fact.servers.relays.flags.fastStable.bwa 			+= v.servers.relays.flags.fastStable.bwa ;
			fact.servers.relays.flags.fastStable.bwc 			+= v.servers.relays.flags.fastStable.bwc ;
			for (var o in osv)
				fact.servers.relays.flags.fastStable.osv[o.name] += v.servers.relays.flags.fastStable.osv[o.name] ;
			for (var t in tsv)
				fact.servers.relays.flags.fastStable.tsv[t.name] += v.servers.relays.flags.fastStable.tsv[t.name] ;

			fact.servers.relays.flags.authority.count 			+= v.servers.relays.flags.authority.count ;
			fact.servers.relays.flags.authority.bwa 			+= v.servers.relays.flags.authority.bwa ;
			fact.servers.relays.flags.authority.bwc 			+= v.servers.relays.flags.authority.bwc ;
			for (var o in osv)
				fact.servers.relays.flags.authority.osv[o.name] += v.servers.relays.flags.authority.osv[o.name] ;
			for (var t in tsv)
				fact.servers.relays.flags.authority.tsv[t.name] += v.servers.relays.flags.authority.tsv[t.name] ;

			for (var prob in probs)
				fact.servers.relays.probs[prob.name]            += v.servers.relays.probs[prob.name] ;




																	                                //	COUNTRIES
			v.countries.forEach( function (vCountry) {											    //	<- double loop part 1: countries in values emitted from map
				var incomingCountryAlreadyknown = false ;                                           //  assuming data about this country has not already been aded to fact
				for ( var fc = 0 , fcl = fact.countries.length; fc < fcl ; fc++ ) {					//	<- double loop part 2: countries in fact
					var countryFact = fact.countries[fc] ;											//	check the array for countries already added to the aggregation process
					if ( countryFact.country == vCountry.country ) {							    //	if an object for this country was already added to the array
						countryFact.cbcc += vCountry.cbcc ;									        //	add values from countryMapped to that already existing object
						countryFact.crcc += vCountry.crcc ;
						countryFact.relay += vCountry.relay ;
						countryFact.bwa += vCountry.bwa ;
						countryFact.bwc += vCountry.bwc ;
						for (var role in roles)
							countryFact.roles[role.name] += vCountry.roles[role.name] ;
						for (var flag in flags)
							countryFact.flags[flag.name] += vCountry.flags[flag.name] ;
						for (var prob in probs)
							countryFact.probs[prob.name] += vCountry.probs[prob.name] ;
						for (var o in osv)
							countryFact.osv[o.name] += vCountry.osv[o.name] ;
						for (var t in tsv)
							countryFact.tsv[t.name] += vCountry.tsv[t.name] ;
						for (var p in pex)
							countryFact.pex[p.name] += vCountry.pex[p.name] ;

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
						for (var role in roles)
							asFact.roles[role.name] += vAutosys.roles[role.name] ;
						for (var flag in flags)
							asFact.flags[flag.name] += vAutosys.flags[flag.name] ;
						for (var prob in probs)
							asFact.probs[prob.name] += vAutosys.probs[prob.name] ;

						for ( var vac = 0 , vacl = vAutosys.countries.length ;  vac < vacl ; vac++ ) {
							var incomingCountryInASalreadyKown = false ;
							var asCountryMap = vAutosys.countries[vac] ;

							for ( var fac = 0 , facl = asFact.countries.length; fac < facl ; fac++ ) {
								var asCountryFact = asFact.countries[fac] ;

								if (asCountryFact.cc == asCountryMap.cc) {
									asCountryFact.relay += asCountryMap.relay ;
									asCountryFact.bwa += asCountryMap.bwa ;
									asCountryFact.bwc += asCountryMap.bwc ;
									for (var role in roles)
										asCountryFact.roles[role.name] += asCountryMap.roles[role.name] ;
									for (var flag in flags)
										asCountryFact.flags[flag.name] += asCountryMap.flags[flag.name] ;
									for (var prob in probs)
										asCountryFact.probs[prob.name] += asCountryMap.probs[prob.name] ;
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
