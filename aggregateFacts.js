/* 		aggregation steps
	0.	aggregation starts either triggered by the import of new data 
		or periodically, first checking the import collection for newly imported documents
		from the newly imported documents it extracts the dates and for each distinct date starts the following aggregation procedure:
	1.	more than one mapReduce for one import collection
		some mapReduce steps are to complex to put them together in one map/reduce
	A.	they can be run sequentelly and all be reduced to one result { out: { reduce : "tempFacts" }
		http://stackoverflow.com/questions/5681851/mongodb-combine-data-from-multiple-collections-in-to-one-how
		http://tebros.com/2011/07/using-mongodb-mapreduce-to-join-2-collections/
	2.	probably we can then also aggregate from different import tables
		should still be possible with  { out: { reduce : "tempFacts" }
	B.	amounting to the following mapReduce steps:
		* clients				from clients import collection
		* servers
			** 					from bridges import collection
			**					from relays import collection
		* bridges				from bridges import collection
		* relays				from relays import collection
		* countries
			** 					from clients import collection
			**					from relays import collection
		* autonomous systems	
			** 					from clients import collection
			**					from relays import collection
	3.	servers, countries and autonomous sytems need to be aggregated from 2 import collections
		and the resulting aggregates merged into one, like: { out: { merge : "servers/countriea/autosys" } }
	4.	to get rid of the "value" object we need one further step
		http://stackoverflow.com/questions/7257989/in-mongodb-mapreduce-how-can-i-flatten-the-values-object
		this is not part of the mapReduce operation
	5.	the resulting fact document has to be added to the facts collection
		overwriting older documents for the same date if need be (e.g. if new data arrived for already existing imports)
		using the update() method
		The update() method can either replace the existing document with the new document or update specific fields in the existing document.
		If the <update> argument contains fields not currently in the document, the update() method adds the new fields to the document.
		If you set the upsert option in the <options> argument to true or 1 and no existing document match the <query> argument, the update() method can insert a new document into the collection.
	
*/




//	a little helper to check if an array contains a value
//	http://stackoverflow.com/questions/237104/array-containsobj-in-javascript
contains(this.a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}


//	the mother ship
//	aggregate facts for one date

aggregateFacts(aDate) {									

	var date = aDate ;
	var fact ;
	
	
	//	PREPARATION
	
	var cleanup = function() {
		db.tempFacts.remove();
		db.tempServers.remove();
		db.tempCountries.remove();
		db.tempAutosys.remove();
	}
	
	
	// 	EMIT
	// 	clients
	var mapClients = function() {
		var clients = {
			clients.total : this.cr + this.cb ,
			clients.atBridges : this.cb ,
			clients.atRelays : this.cr ,
			clients.cip4 : this.cip,v4 ,
			clients.cip6 : this.cip.v6 ,
			clients.cptObfs2 : this.cpt.obfs2 ,
			clients.cptObfs3 : this.cpt.obfs3 ,
			clients.cptOr : this.cpt.or ,
			clients.cptUnknown : this.cpt.unknown
		}
		emit ( date , clients );
	};
	
	//	servers 											   in 2 steps, because it has to be gathererd from 2 collections
	var mapServersRelay = function() {
		var serversRelay = {
			count : 1 ,
			bwa : this.bwa ,
			bwc : this.bwc ,
			osv.linux : (this.osv == "linux") ? 1 : 0 ,
			osv.darwin : (this.osv == "darwin") ? 1 : 0 ,
			osv.freebsd : (this.osv == "freebsd") ? 1 : 0 ,
			osv.windows : (this.osv == "windows") ? 1 : 0 ,
			osv.other : (this.osv == "other") ? 1 : 0 ,
			tsv.010 : (this.tsv == "010") ? 1 : 0 ,
			tsv.011 : (this.tsv == "011") ? 1 : 0 ,
			tsv.012 : (this.tsv == "012") ? 1 : 0 ,
			tsv.020 : (this.tsv == "020") ? 1 : 0 ,
			tsv.021 : (this.tsv == "021") ? 1 : 0 ,
			tsv.022 : (this.tsv == "022") ? 1 : 0 ,
			tsv.023 : (this.tsv == "023") ? 1 : 0 ,
			tsv.024 : (this.tsv == "024") ? 1 : 0
		}
		emit ( date , serversRelay );
	};
	
	var mapServersBridge = function() {
		var serversBridge = {
			count : 1 ,
			bwa : this.bwa ,
			bwc : this.bwc ,
			osv.linux : (this.osv == "linux") ? 1 : 0 ,
			osv.darwin : (this.osv == "darwin") ? 1 : 0 ,
			osv.freebsd : (this.osv == "freebsd") ? 1 : 0 ,
			osv.windows : (this.osv == "windows") ? 1 : 0 ,
			osv.other : (this.osv == "other") ? 1 : 0 ,
			tsv.010 : (this.tsv == "010") ? 1 : 0 ,
			tsv.011 : (this.tsv == "011") ? 1 : 0 ,
			tsv.012 : (this.tsv == "012") ? 1 : 0 ,
			tsv.020 : (this.tsv == "020") ? 1 : 0 ,
			tsv.021 : (this.tsv == "021") ? 1 : 0 ,
			tsv.022 : (this.tsv == "022") ? 1 : 0 ,
			tsv.023 : (this.tsv == "023") ? 1 : 0 ,
			tsv.024 : (this.tsv == "024") ? 1 : 0
		}
		emit ( date , serversBridge );
	};
	
	//	bridges	
	var mapBridges = function() {
		var bridges = {
			servers.bridges.total.count : (type == "bridge") ? 1 : 0 ,
			servers.bridges.total.bwa : (type == "bridge") ? this.bwa : 0 ,
			servers.bridges.total.bwc : (type == "bridge") ? this.bwc : 0 ,
			servers.bridges.total.osv.linux : (this.type == "bridge" && this.osv == "linux") ? 1 : 0 ,
			servers.bridges.total.osv.darwin : (this.type == "bridge" && this.osv == "darwin") ? 1 : 0 ,
			servers.bridges.total.osv.freebsd : (this.type == "bridge" && this.osv == "freebsd") ? 1 : 0 ,
			servers.bridges.total.osv.windows : (this.type == "bridge" && this.osv == "windows") ? 1 : 0 ,
			servers.bridges.total.osv.other : (this.type == "bridge" && this.osv == "other") ? 1 : 0 ,
			servers.bridges.total.tsv.010 : (this.type == "bridge" && this.tsv == "010") ? 1 : 0 ,
			servers.bridges.total.tsv.011 : (this.type == "bridge" && this.tsv == "011") ? 1 : 0 ,
			servers.bridges.total.tsv.012 : (this.type == "bridge" && this.tsv == "012") ? 1 : 0 ,
			servers.bridges.total.tsv.020 : (this.type == "bridge" && this.tsv == "020") ? 1 : 0 ,
			servers.bridges.total.tsv.021 : (this.type == "bridge" && this.tsv == "021") ? 1 : 0 ,
			servers.bridges.total.tsv.022 : (this.type == "bridge" && this.tsv == "022") ? 1 : 0 ,
			servers.bridges.total.tsv.023 : (this.type == "bridge" && this.tsv == "023") ? 1 : 0 ,
			servers.bridges.total.tsv.024 : (this.type == "bridge" && this.tsv == "024") ? 1 : 0 ,
			
			servers.bridges.brpEmail.count : (this.brp == "email") ? 1 : 0 ,
			servers.bridges.brpEmail.bwa : (this.brp == "email") ? this.bwa : 0 ,
			servers.bridges.brpEmail.bwc : (this.brp == "email") ? this.bwc : 0 ,
			servers.bridges.brpEmail.osv.linux : (this.brp == "email" && this.osv == "linux") ? 1 : 0 ,
			servers.bridges.brpEmail.osv.darwin : (this.brp == "email" && this.osv == "darwin") ? 1 : 0 ,
			servers.bridges.brpEmail.osv.freebsd : (this.brp == "email" && this.osv == "freebsd") ? 1 : 0 ,
			servers.bridges.brpEmail.osv.windows : (this.brp == "email" && this.osv == "windows") ? 1 : 0 ,
			servers.bridges.brpEmail.osv.other : (this.brp == "email" && this.osv == "other") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.010 : (this.brp == "email" && this.tsv == "010") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.011 : (this.brp == "email" && this.tsv == "011") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.012 : (this.brp == "email" && this.tsv == "012") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.020 : (this.brp == "email" && this.tsv == "020") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.021 : (this.brp == "email" && this.tsv == "021") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.022 : (this.brp == "email" && this.tsv == "022") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.023 : (this.brp == "email" && this.tsv == "023") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.024 : (this.brp == "email" && this.tsv == "024") ? 1 : 0 ,
		
			servers.bridges.brpHttps.count : (this.brp == "https") ? 1 : 0 ,
			servers.bridges.brpHttps.bwa : (this.brp == "https") ? this.bwa : 0 ,
			servers.bridges.brpHttps.bwc : (this.brp == "https") ? this.bwc : 0 ,
			servers.bridges.brpHttps.osv.linux : (this.brp == "https" && this.osv == "linux") ? 1 : 0 ,
			servers.bridges.brpHttps.osv.darwin : (this.brp == "https" && this.osv == "darwin") ? 1 : 0 ,
			servers.bridges.brpHttps.osv.freebsd : (this.brp == "https" && this.osv == "freebsd") ? 1 : 0 ,
			servers.bridges.brpHttps.osv.windows : (this.brp == "https" && this.osv == "windows") ? 1 : 0 ,
			servers.bridges.brpHttps.osv.other : (this.brp == "https" && this.osv == "other") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.010 : (this.brp == "https" && this.tsv == "010") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.011 : (this.brp == "https" && this.tsv == "011") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.012 : (this.brp == "https" && this.tsv == "012") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.020 : (this.brp == "https" && this.tsv == "020") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.021 : (this.brp == "https" && this.tsv == "021") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.022 : (this.brp == "https" && this.tsv == "022") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.023 : (this.brp == "https" && this.tsv == "023") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.024 : (this.brp == "https" && this.tsv == "024") ? 1 : 0 ,
		
			servers.bridges.brpOther.count : (this.brp == "other") ? 1 : 0 ,
			servers.bridges.brpOther.bwa : (this.brp == "other") ? this.bwa : 0 ,
			servers.bridges.brpOther.bwc : (this.brp == "other") ? this.bwc : 0 ,
			servers.bridges.brpOther.osv.linux : (this.brp == "other" && this.osv == "linux") ? 1 : 0 ,
			servers.bridges.brpOther.osv.darwin : (this.brp == "other" && this.osv == "darwin") ? 1 : 0 ,
			servers.bridges.brpOther.osv.freebsd : (this.brp == "other" && this.osv == "freebsd") ? 1 : 0 ,
			servers.bridges.brpOther.osv.windows : (this.brp == "other" && this.osv == "windows") ? 1 : 0 ,
			servers.bridges.brpOther.osv.other : (this.brp == "other" && this.osv == "other") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.010 : (this.brp == "other" && this.tsv == "010") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.011 : (this.brp == "other" && this.tsv == "011") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.012 : (this.brp == "other" && this.tsv == "012") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.020 : (this.brp == "other" && this.tsv == "020") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.021 : (this.brp == "other" && this.tsv == "021") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.022 : (this.brp == "other" && this.tsv == "022") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.023 : (this.brp == "other" && this.tsv == "023") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.024 : (this.brp == "other" && this.tsv == "024") ? 1 : 0 ,
		
			servers.bridges.breTrue.count : (this.bre == "true") ? 1 : 0 ,
			servers.bridges.breTrue.bwa : (this.bre == "true") ? this.bwa : 0 ,
			servers.bridges.breTrue.bwc : (this.bre == "true") ? this.bwc : 0 ,
			servers.bridges.breTrue.osv.linux : (this.bre == "true" && this.osv == "linux") ? 1 : 0 ,
			servers.bridges.breTrue.osv.darwin : (this.bre == "true" && this.osv == "darwin") ? 1 : 0 ,
			servers.bridges.breTrue.osv.freebsd : (this.bre == "true" && this.osv == "freebsd") ? 1 : 0 ,
			servers.bridges.breTrue.osv.windows : (this.bre == "true" && this.osv == "windows") ? 1 : 0 ,
			servers.bridges.breTrue.osv.other : (this.bre == "true" && this.osv == "other") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.010 : (this.bre == "true" && this.tsv == "010") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.011 : (this.bre == "true" && this.tsv == "011") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.012 : (this.bre == "true" && this.tsv == "012") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.020 : (this.bre == "true" && this.tsv == "020") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.021 : (this.bre == "true" && this.tsv == "021") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.022 : (this.bre == "true" && this.tsv == "022") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.023 : (this.bre == "true" && this.tsv == "023") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.024 : (this.bre == "true" && this.tsv == "024") ? 1 : 0 ,
		
			servers.bridges.brtObfs2.count : (this.brt == [obfs2]) ? 1 : 0 ,
			servers.bridges.brtObfs2.bwa : (this.brt == [obfs2]) ? this.bwa : 0 ,
			servers.bridges.brtObfs2.bwc : (this.brt == [obfs2]) ? this.bwc : 0 ,
			servers.bridges.brtObfs2.osv.linux : (this.brt == [obfs2] && this.osv == "linux") ? 1 : 0 ,
			servers.bridges.brtObfs2.osv.darwin : (this.brt == [obfs2] && this.osv == "darwin") ? 1 : 0 ,
			servers.bridges.brtObfs2.osv.freebsd : (this.brt == [obfs2] && this.osv == "freebsd") ? 1 : 0 ,
			servers.bridges.brtObfs2.osv.windows : (this.brt == [obfs2] && this.osv == "windows") ? 1 : 0 ,
			servers.bridges.brtObfs2.osv.other : (this.brt == [obfs2] && this.osv == "other") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.010 : (this.brt == [obfs2] && this.tsv == "010") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.011 : (this.brt == [obfs2] && this.tsv == "011") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.012 : (this.brt == [obfs2] && this.tsv == "012") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.020 : (this.brt == [obfs2] && this.tsv == "020") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.021 : (this.brt == [obfs2] && this.tsv == "021") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.022 : (this.brt == [obfs2] && this.tsv == "022") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.023 : (this.brt == [obfs2] && this.tsv == "023") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.024 : (this.brt == [obfs2] && this.tsv == "024") ? 1 : 0 ,
			
			servers.bridges.brtObfs3.count : (this.brt == [obfs3]) ? 1 : 0 ,
			servers.bridges.brtObfs3.bwa : (this.brt == [obfs3]) ? this.bwa : 0 ,
			servers.bridges.brtObfs3.bwc : (this.brt == [obfs3]) ? this.bwc : 0 ,
			servers.bridges.brtObfs3.osv.linux : (this.brt == [obfs3] && this.osv == "linux") ? 1 : 0 ,
			servers.bridges.brtObfs3.osv.darwin : (this.brt == [obfs3] && this.osv == "darwin") ? 1 : 0 ,
			servers.bridges.brtObfs3.osv.freebsd : (this.brt == [obfs3] && this.osv == "freebsd") ? 1 : 0 ,
			servers.bridges.brtObfs3.osv.windows : (this.brt == [obfs3] && this.osv == "windows") ? 1 : 0 ,
			servers.bridges.brtObfs3.osv.other : (this.brt == [obfs3] && this.osv == "other") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.010 : (this.brt == [obfs3] && this.tsv == "010") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.011 : (this.brt == [obfs3] && this.tsv == "011") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.012 : (this.brt == [obfs3] && this.tsv == "012") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.020 : (this.brt == [obfs3] && this.tsv == "020") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.021 : (this.brt == [obfs3] && this.tsv == "021") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.022 : (this.brt == [obfs3] && this.tsv == "022") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.023 : (this.brt == [obfs3] && this.tsv == "023") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.024 : (this.brt == [obfs3] && this.tsv == "024") ? 1 : 0 ,
			
			servers.bridges.brtObfs23.count : (this.brt == [obfs23, obfs3]) ? 1 : 0 ,
			servers.bridges.brtObfs23.bwa : (this.brt == [obfs23, obfs3]) ? this.bwa : 0 ,
			servers.bridges.brtObfs23.bwc : (this.brt == [obfs23, obfs3]) ? this.bwc : 0 ,
			servers.bridges.brtObfs23.osv.linux : (this.brt == [obfs23, obfs3] && this.osv == "linux") ? 1 : 0 ,
			servers.bridges.brtObfs23.osv.darwin : (this.brt == [obfs23, obfs3] && this.osv == "darwin") ? 1 : 0 ,
			servers.bridges.brtObfs23.osv.freebsd : (this.brt == [obfs23, obfs3] && this.osv == "freebsd") ? 1 : 0 ,
			servers.bridges.brtObfs23.osv.windows : (this.brt == [obfs23, obfs3] && this.osv == "windows") ? 1 : 0 ,
			servers.bridges.brtObfs23.osv.other : (this.brt == [obfs23, obfs3] && this.osv == "other") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.010 : (this.brt == [obfs23, obfs3] && this.tsv == "010") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.011 : (this.brt == [obfs23, obfs3] && this.tsv == "011") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.012 : (this.brt == [obfs23, obfs3] && this.tsv == "012") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.020 : (this.brt == [obfs23, obfs3] && this.tsv == "020") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.021 : (this.brt == [obfs23, obfs3] && this.tsv == "021") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.022 : (this.brt == [obfs23, obfs3] && this.tsv == "022") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.023 : (this.brt == [obfs23, obfs3] && this.tsv == "023") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.024 : (this.brt == [obfs23, obfs3] && this.tsv == "024") ? 1 : 0
		}
		emit ( date , bridges );
	};
	
	//	relays			
	var mapRelays = function() {
		var relays = {
			servers.relays.roleAll.total.count : (this.type == "relay") ? 1 : 0 ,
			servers.relays.roleAll.total.bwa : (this.type == "relay") ? this.bwa : 0 ,
			servers.relays.roleAll.total.bwc : (this.type == "relay") ? this.bwc : 0 ,
			servers.relays.roleAll.total.osv.linux : (this.type == "relay" && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleAll.total.osv.darwin : (this.type == "relay" && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleAll.total.osv.freebsd : (this.type == "relay" && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleAll.total.osv.windows : (this.type == "relay" && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleAll.total.osv.other : (this.type == "relay" && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.010 : (this.type == "relay" && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.011 : (this.type == "relay" && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.012 : (this.type == "relay" && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.020 : (this.type == "relay" && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.021 : (this.type == "relay" && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.022 : (this.type == "relay" && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.023 : (this.type == "relay" && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.024 : (this.type == "relay" && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleAll.total.pbr : (this.type == "relay") ? this.pbr : 0.0 ,
			
			servers.relays.roleAll.flagNone.count : (this.type == "relay" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleAll.flagNone.bwa : (this.type == "relay" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleAll.flagNone.bwc : (this.type == "relay" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleAll.flagNone.osv.linux : (this.type == "relay" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.osv.darwin : (this.type == "relay" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.osv.freebsd : (this.type == "relay" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.osv.windows : (this.type == "relay" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.osv.other : (this.type == "relay" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.010 : (this.type == "relay" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.011 : (this.type == "relay" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.012 : (this.type == "relay" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.020 : (this.type == "relay" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.021 : (this.type == "relay" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.022 : (this.type == "relay" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.023 : (this.type == "relay" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.024 : (this.type == "relay" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.pbr : (this.type == "relay" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? this.pbr : 0.0 ,
			
			servers.relays.roleAll.flagStable.count : (this.type == "relay" && !contains(this.flag, fast) && contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleAll.flagStable.bwa : (this.type == "relay" && !contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleAll.flagStable.bwc : (this.type == "relay" && !contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleAll.flagStable.osv.linux : (this.type == "relay" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.osv.darwin : (this.type == "relay" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.osv.freebsd : (this.type == "relay" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.osv.windows : (this.type == "relay" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.osv.other : (this.type == "relay" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.010 : (this.type == "relay" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.011 : (this.type == "relay" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.012 : (this.type == "relay" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.020 : (this.type == "relay" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.021 : (this.type == "relay" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.022 : (this.type == "relay" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.023 : (this.type == "relay" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.024 : (this.type == "relay" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.pbr : (this.type == "relay" && !contains(this.flag, fast) && contains(this.flag,stable)) ? this.pbr : 0.0 ,
			
			servers.relays.roleAll.flagFast.count : (this.type == "relay" && contains(this.flag, fast) && !contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleAll.flagFast.bwa : (this.type == "relay" && contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleAll.flagFast.bwc : (this.type == "relay" && contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleAll.flagFast.osv.linux : (this.type == "relay" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.osv.darwin : (this.type == "relay" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.osv.freebsd : (this.type == "relay" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.osv.windows : (this.type == "relay" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.osv.other : (this.type == "relay" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.010 : (this.type == "relay" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.011 : (this.type == "relay" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.012 : (this.type == "relay" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.020 : (this.type == "relay" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.021 : (this.type == "relay" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.022 : (this.type == "relay" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.023 : (this.type == "relay" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.024 : (this.type == "relay" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.pbr : (this.type == "relay" && contains(this.flag, fast) && !contains(this.flag,stable)) ? this.pbr : 0.0 ,
	
			servers.relays.roleAll.flagFastStable.count : (this.type == "relay" && contains(this.flag, fast) && contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.bwa : (this.type == "relay" && contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleAll.flagFastStable.bwc : (this.type == "relay" && contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleAll.flagFastStable.osv.linux : (this.type == "relay" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.osv.darwin : (this.type == "relay" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.osv.freebsd : (this.type == "relay" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.osv.windows : (this.type == "relay" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.osv.other : (this.type == "relay" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.010 : (this.type == "relay" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.011 : (this.type == "relay" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.012 : (this.type == "relay" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.020 : (this.type == "relay" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.021 : (this.type == "relay" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.022 : (this.type == "relay" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.023 : (this.type == "relay" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.024 : (this.type == "relay" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.pbr : (this.type == "relay" && contains(this.flag, fast) && contains(this.flag,stable)) ? this.pbr : 0.0 ,			
			
			// GUARD
			servers.relays.roleGuard.total.count : (this.role == "guard") ? 1 : 0 ,
			servers.relays.roleGuard.total.bwa : (this.role == "guard") ? this.bwa : 0 ,
			servers.relays.roleGuard.total.bwc : (this.role == "guard") ? this.bwc : 0 ,
			servers.relays.roleGuard.total.osv.linux : (this.role == "guard" && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleGuard.total.osv.darwin : (this.role == "guard" && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleGuard.total.osv.freebsd : (this.role == "guard" && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleGuard.total.osv.windows : (this.role == "guard" && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleGuard.total.osv.other : (this.role == "guard" && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.010 : (this.role == "guard" && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.011 : (this.role == "guard" && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.012 : (this.role == "guard" && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.020 : (this.role == "guard" && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.021 : (this.role == "guard" && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.022 : (this.role == "guard" && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.023 : (this.role == "guard" && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.024 : (this.role == "guard" && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleGuard.total.pbg : (this.role == "guard") ? this.pbg : 0.0 ,		
			
			servers.relays.roleGuard.flagNone.count : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.bwa : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleGuard.flagNone.bwc : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleGuard.flagNone.osv.linux : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.osv.darwin : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.osv.freebsd : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.osv.windows : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.osv.other : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.010 : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.011 : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.012 : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.020 : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.021 : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.022 : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.023 : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.024 : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.pbg : (this.role == "guard" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? this.pbg : 0.0 ,
			
			servers.relays.roleGuard.flagStable.count : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.bwa : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleGuard.flagStable.bwc : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleGuard.flagStable.osv.linux : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.osv.darwin : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.osv.freebsd : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.osv.windows : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.osv.other : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.010 : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.011 : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.012 : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.020 : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.021 : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.022 : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.023 : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.024 : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.pbg : (this.role == "guard" && !contains(this.flag, fast) && contains(this.flag,stable)) ? this.pbg : 0.0 ,			
			
			servers.relays.roleGuard.flagFast.count : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.bwa : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleGuard.flagFast.bwc : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleGuard.flagFast.osv.linux : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.osv.darwin : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.osv.freebsd : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.osv.windows : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.osv.other : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.010 : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.011 : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.012 : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.020 : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.021 : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.022 : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.023 : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.024 : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.pbg : (this.role == "guard" && contains(this.flag, fast) && !contains(this.flag,stable)) ? this.pbg : 0.0 ,
	
			servers.relays.roleGuard.flagFastStable.count : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.bwa : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleGuard.flagFastStable.bwc : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleGuard.flagFastStable.osv.linux : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.osv.darwin : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.osv.freebsd : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.osv.windows : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.osv.other : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.010 : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.011 : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.012 : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.020 : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.021 : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.022 : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.023 : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.024 : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.pbg : (this.role == "guard" && contains(this.flag, fast) && contains(this.flag,stable)) ? this.pbg : 0.0 ,
			
			// MIDDLE
			servers.relays.roleMiddle.total.count : (this.role == "middle") ? 1 : 0 ,
			servers.relays.roleMiddle.total.bwa : (this.role == "middle") ? this.bwa : 0 ,
			servers.relays.roleMiddle.total.bwc : (this.role == "middle") ? this.bwc : 0 ,
			servers.relays.roleMiddle.total.osv.linux : (this.role == "middle" && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleMiddle.total.osv.darwin : (this.role == "middle" && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleMiddle.total.osv.freebsd : (this.role == "middle" && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleMiddle.total.osv.windows : (this.role == "middle" && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleMiddle.total.osv.other : (this.role == "middle" && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.010 : (this.role == "middle" && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.011 : (this.role == "middle" && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.012 : (this.role == "middle" && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.020 : (this.role == "middle" && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.021 : (this.role == "middle" && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.022 : (this.role == "middle" && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.023 : (this.role == "middle" && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.024 : (this.role == "middle" && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleMiddle.total.pbm : (this.role == "middle") ? this.pbm : 0.0 ,
					
			servers.relays.roleMiddle.flagNone.count : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.bwa : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleMiddle.flagNone.bwc : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleMiddle.flagNone.osv.linux : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.osv.darwin : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.osv.freebsd : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.osv.windows : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.osv.other : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.010 : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.011 : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.012 : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.020 : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.021 : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.022 : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.023 : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.024 : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.pbm : (this.role == "middle" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? this.pbm : 0.0 ,
			
			servers.relays.roleMiddle.flagStable.count : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.bwa : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleMiddle.flagStable.bwc : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleMiddle.flagStable.osv.linux : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.osv.darwin : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.osv.freebsd : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.osv.windows : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.osv.other : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.010 : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.011 : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.012 : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.020 : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.021 : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.022 : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.023 : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.024 : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.pbm : (this.role == "middle" && !contains(this.flag, fast) && contains(this.flag,stable)) ? this.pbm : 0.0 ,
						
			servers.relays.roleMiddle.flagFast.count : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.bwa : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleMiddle.flagFast.bwc : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleMiddle.flagFast.osv.linux : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.osv.darwin : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.osv.freebsd : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.osv.windows : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.osv.other : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.010 : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.011 : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.012 : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.020 : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.021 : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.022 : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.023 : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.024 : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.pbm : (this.role == "middle" && contains(this.flag, fast) && !contains(this.flag,stable)) ? this.pbm : 0.0 ,
	
			servers.relays.roleMiddle.flagFastStable.count : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.bwa : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleMiddle.flagFastStable.bwc : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleMiddle.flagFastStable.osv.linux : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.osv.darwin : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.osv.freebsd : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.osv.windows : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.osv.other : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.010 : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.011 : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.012 : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.020 : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.021 : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.022 : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.023 : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.024 : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.pbm : (this.role == "middle" && contains(this.flag, fast) && contains(this.flag,stable)) ? this.pbm : 0.0 ,
			
			// EXIT
			servers.relays.roleExit.total.count : (this.role == "exit") ? 1 : 0 ,
			servers.relays.roleExit.total.bwa : (this.role == "exit") ? this.bwa : 0 ,
			servers.relays.roleExit.total.bwc : (this.role == "exit") ? this.bwc : 0 ,
			servers.relays.roleExit.total.osv.linux : (this.role == "exit" && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleExit.total.osv.darwin : (this.role == "exit" && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleExit.total.osv.freebsd : (this.role == "exit" && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleExit.total.osv.windows : (this.role == "exit" && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleExit.total.osv.other : (this.role == "exit" && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.010 : (this.role == "exit" && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.011 : (this.role == "exit" && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.012 : (this.role == "exit" && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.020 : (this.role == "exit" && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.021 : (this.role == "exit" && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.022 : (this.role == "exit" && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.023 : (this.role == "exit" && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.024 : (this.role == "exit" && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleExit.total.pex.4 : (this.role == "exit" && this.pex == [443]) ? 1 : 0 ,
			servers.relays.roleExit.total.pex.6 : (this.role == "exit" && this.pex == [6667]) ? 1 : 0 ,
			servers.relays.roleExit.total.pex.8 : (this.role == "exit" && this.pex == [80]) ? 1 : 0 ,
			servers.relays.roleExit.total.pex.46 : (this.role == "exit" && this.pex == [443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.total.pex.48 : (this.role == "exit" && this.pex == [80, 443]) ? 1 : 0 ,
			servers.relays.roleExit.total.pex.68 : (this.role == "exit" && this.pex == [80, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.total.pex.468 : (this.role == "exit" && this.pex == [80, 443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.total.pbe : (this.role == "exit") ? this.pbe : 0.0 ,
						
			servers.relays.roleExit.flagNone.count : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.bwa : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleExit.flagNone.bwc : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleExit.flagNone.osv.linux : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.osv.darwin : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.osv.freebsd : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.osv.windows : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.osv.other : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.010 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.011 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.012 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.020 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.021 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.022 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.023 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.024 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pex.4 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [443]) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pex.6 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pex.8 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [80]) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pex.46 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pex.48 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [80, 443]) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pex.68 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [80, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pex.468 : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [80, 443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pbe : (this.role == "exit" && !contains(this.flag, fast) && !contains(this.flag,stable)) ? this.pbe : 0.0 ,
			
			servers.relays.roleExit.flagFast.count : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.bwa : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleExit.flagFast.bwc : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleExit.flagFast.osv.linux : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.osv.darwin : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.osv.freebsd : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.osv.windows : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.osv.other : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.010 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.011 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.012 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.020 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.021 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.022 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.023 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.024 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pex.4 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [443]) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pex.6 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pex.8 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [80]) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pex.46 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pex.48 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [80, 443]) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pex.68 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [80, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pex.468 : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable) && this.pex == [80, 443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pbe : (this.role == "exit" && contains(this.flag, fast) && !contains(this.flag,stable)) ? this.pbe : 0.0 ,
			
			servers.relays.roleExit.flagStable.count : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.bwa : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleExit.flagStable.bwc : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleExit.flagStable.osv.linux : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.osv.darwin : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.osv.freebsd : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.osv.windows : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.osv.other : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.010 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.011 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.012 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.020 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.021 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.022 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.023 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.024 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pex.4 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [443]) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pex.6 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pex.8 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [80]) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pex.46 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pex.48 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [80, 443]) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pex.68 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [80, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pex.468 : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [80, 443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pbe : (this.role == "exit" && !contains(this.flag, fast) && contains(this.flag,stable)) ? this.pbe : 0.0 ,
			
			servers.relays.roleExit.flagFastStable.count : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable)) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.bwa : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleExit.flagFastStable.bwc : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleExit.flagFastStable.osv.linux : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.osv.darwin : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.osv.freebsd : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.osv.windows : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.osv.other : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.010 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.011 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.012 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.020 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.021 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.022 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.023 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.024 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.tsv == "024") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pex.4 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [443]) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pex.6 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pex.8 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [80]) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pex.46 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pex.48 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [80, 443]) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pex.68 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [80, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pex.468 : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable) && this.pex == [80, 443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pbe : (this.role == "exit" && contains(this.flag, fast) && contains(this.flag,stable)) ? this.pbe : 0.0 ,		
			
			// DIR
			servers.relays.roleDir.total.count : (this.role == "dir") ? 1 : 0 ,
			servers.relays.roleDir.total.bwa : (this.role == "dir") ? this.bwa : 0 ,
			servers.relays.roleDir.total.bwc : (this.role == "dir") ? this.bwc : 0 ,
			servers.relays.roleDir.total.osv.linux : (this.role == "dir" && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleDir.total.osv.darwin : (this.role == "dir" && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleDir.total.osv.freebsd : (this.role == "dir" && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleDir.total.osv.windows : (this.role == "dir" && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleDir.total.osv.other : (this.role == "dir" && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.010 : (this.role == "dir" && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.011 : (this.role == "dir" && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.012 : (this.role == "dir" && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.020 : (this.role == "dir" && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.021 : (this.role == "dir" && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.022 : (this.role == "dir" && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.023 : (this.role == "dir" && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.024 : (this.role == "dir" && this.tsv == "024") ? 1 : 0 ,		
			
			servers.relays.roleDir.authorityTrue.count : (this.role == "dir" && this.flag == "Authority") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.bwa : (this.role == "dir" && this.flag == "Authority") ? this.bwa : 0 ,
			servers.relays.roleDir.authorityTrue.bwc : (this.role == "dir" && this.flag == "Authority") ? this.bwc : 0 ,
			servers.relays.roleDir.authorityTrue.osv.linux : (this.role == "dir" && this.flag == "Authority" && this.osv == "linux") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.osv.darwin : (this.role == "dir" && this.flag == "Authority" && this.osv == "darwin") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.osv.freebsd : (this.role == "dir" && this.flag == "Authority" && this.osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.osv.windows : (this.role == "dir" && this.flag == "Authority" && this.osv == "windows") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.osv.other : (this.role == "dir" && this.flag == "Authority" && this.osv == "other") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.010 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "010") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.011 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "011") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.012 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "012") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.020 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "020") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.021 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "021") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.022 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "022") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.023 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "023") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.024 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "024") ? 1 : 0
		}										// this is HUGE
		emit ( date , relays );
	};
	
	//	countries 												in 2 steps, because it has to be gathererd from 2 collections
	var mapCountriesClient = function() {
		var countriesClient = {
		
		}
		emit ( date , countriesClient );
	};
	
	var mapCountriesRelay = function() {
		var countriesRelay = {
		
		}
		emit ( date , countriesRelay );
	};
	
	//	autonomous systems 										in 2 steps, because it has to be gathererd from 2 collections
	var mapAutosysClient = function() {
		var autosysClient = {
		
		}
		emit ( date , autosysClient );
	};
	
	var mapAutosysRelay = function() {
		var autosysRelay = {
		
		}
		emit ( date , autosysRelay );
	};
	
	
	// REDUCE
	
	var reduceFacts = function ( key, value ) {
		fact = {										
			
		};
		
		// doing stuff
		
		return fact;
	};
	
	
	// FINALIZE
	
	var finalizeFacts = function ( key, fact ) {
														// doing stuff e.g. some averages
	};
	
	
	// EXECUTION
	
	// clients
	var resultClients = db.importClients.mapReduce (			
		mapClients,
		reduceFacts,
		{ 
			out: { 
				reduce : "tempFacts", 					// the temporary fact collection, with _id:value structure
				nonAtomic : true						// prevents locking of the db during post-processing
			} ,			
			query : { "date" : myDate } ,				// limit aggregation to myDate
			// sort										   sorts the input documents for fewer reduce operations
			jsMode: true ,								// check if feasable! is faster, but needs more memory
			finalize : finalizeFacts
		}
	);
	
	// servers 											   in 2 steps, because it has to be gathererd from 2 collections 
	var resultServersRelay = db.importRelays.mapReduce (			
		mapServersRelay,
		reduceFacts,
		{ 
			out: { 
				reduce : "tempFacts",
				nonAtomic : true
			} ,			
			query : { "date" : myDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	var resultServersBridge = db.importBridges.mapReduce (			
		mapServersBridge,
		reduceFacts,
		{ 
			out: { 
				reduce : "tempFacts",
				nonAtomic : true
			} ,			
			query : { "date" : myDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	// bridges
	var resultBridges = db.importBridges.mapReduce (			
		mapBridges,
		reduceFacts,
		{ 
			out: { 
				reduce : "tempFacts",
				nonAtomic : true
			} ,			
			query : { "date" : myDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	// relays
	var resultRelays = db.importRelays.mapReduce (			
		mapBridges,
		reduceFacts,
		{ 
			out: { 
				reduce : "tempFacts",
				nonAtomic : true
			} ,			
			query : { "date" : myDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	// countries 											   in 2 steps, because it has to be gathererd from 2 collections 
	var resultCountriesClient = db.importClients.mapReduce (			
		mapCountriesClient,
		reduceFacts,
		{ 
			out: { 
				reduce : "tempFacts",
				nonAtomic : true
			} ,			
			query : { "date" : myDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	var resultCountriesRelay = db.importRelays.mapReduce (			
		mapCountriesRelay,
		reduceFacts,
		{ 
			out: { 
				reduce : "tempFacts",
				nonAtomic : true
			} ,			
			query : { "date" : myDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	// autonomous systems 									   in 2 steps, because it has to be gathererd from 2 collections 
	var resultAutosysClient = db.importClients.mapReduce (			
		mapAutosysClient,
		reduceFacts,
		{ 
			out: { 
				reduce : "tempFacts",
				nonAtomic : true
			} ,			
			query : { "date" : myDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	var resultAutosysRelay = db.importRelays.mapReduce (			
		mapAutosysRelay,
		reduceFacts,
		{ 
			out: { 
				reduce : "tempFacts",
				nonAtomic : true
			} ,			
			query : { "date" : myDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	
}



