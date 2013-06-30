var date = "2013-04-03 21" ;


var mapClients = function() {
	var clients = {
		total : this.cr + this.cb ,
		atBridges : this.cb ,
		atRelays : this.cr ,
		cip4 : this.cip.v4 ,
		cip6 : this.cip.v6 ,
		cptObfs2 : this.cpt.obfs2 ,
		cptObfs3 : this.cpt.obfs3 
	};
	emit ( date , clients );
};

var reduceClients = function ( key, values ) {
	var v;
	var fact = {
		total : 0 ,
		atBridges : 0 ,
		atRelays : 0 ,
		cip4 : 0 ,
		cip6 : 0 ,
		cptObfs2 : 0 ,
		cptObfs3 : 0
	};
	values.forEach( function(v) { 
		fact.total += v.total;
		fact.atBridges += v.atBridges ;
		fact.atRelays += v.atRelays ;
		fact.cip4 += v.cip4 ;
		fact.cip6 += v.cip6 ;
		fact.cptObfs2 += v.cptObfs2 ;
		fact.cptObfs3 += v.cptObfs3 ;
	}
	)
	return fact;
};



var cleanup = function() {
	db.tempCountries.remove();
	db.tempAutosys.remove();
	db.tempFacts.remove();
	db.tempTest.remove();
};

cleanup();
db.importClients.mapReduce (			
	mapClients,
	reduceClients,
	{ 
		out: { 
			reduce : "tempTest", 
			nonAtomic : true		
		} ,			
		query : { "date" : date } ,	
		jsMode: true
	}
);