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


// a little helper to check if an array contains a value
// http://stackoverflow.com/questions/237104/array-containsobj-in-javascript
contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}


// the mother ship
// aggregate facts for one date

aggregateFacts(aDate) {									

	var date = aDate ;
	var fact ;


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
	
	//	servers 											   in 3 steps, because it has to be gathererd from 2 collections
	var mapServersRelay = function() {
		var serversRelay = {
			count : 1 ,
			bwa : this.bwa ,
			bwc : this.bwc ,
			osv.linux : (osv == "linux") ? 1 : 0 ,
			osv.darwin : (osv == "darwin") ? 1 : 0 ,
			osv.freebsd : (osv == "freebsd") ? 1 : 0 ,
			osv.windows : (osv == "windows") ? 1 : 0 ,
			osv.other : (osv == "other") ? 1 : 0 ,
			tsv.010 : (tsv == "010") ? 1 : 0 ,
			tsv.011 : (tsv == "011") ? 1 : 0 ,
			tsv.012 : (tsv == "012") ? 1 : 0 ,
			tsv.020 : (tsv == "020") ? 1 : 0 ,
			tsv.021 : (tsv == "021") ? 1 : 0 ,
			tsv.022 : (tsv == "022") ? 1 : 0 ,
			tsv.023 : (tsv == "023") ? 1 : 0 ,
			tsv.024 : (tsv == "024") ? 1 : 0
		}
		emit ( date , serversRelay );
	};
	
	var mapServersBridge = function() {
		var serversBridge = {
			count : 1 ,
			bwa : this.bwa ,
			bwc : this.bwc ,
			osv.linux : (osv == "linux") ? 1 : 0 ,
			osv.darwin : (osv == "darwin") ? 1 : 0 ,
			osv.freebsd : (osv == "freebsd") ? 1 : 0 ,
			osv.windows : (osv == "windows") ? 1 : 0 ,
			osv.other : (osv == "other") ? 1 : 0 ,
			tsv.010 : (tsv == "010") ? 1 : 0 ,
			tsv.011 : (tsv == "011") ? 1 : 0 ,
			tsv.012 : (tsv == "012") ? 1 : 0 ,
			tsv.020 : (tsv == "020") ? 1 : 0 ,
			tsv.021 : (tsv == "021") ? 1 : 0 ,
			tsv.022 : (tsv == "022") ? 1 : 0 ,
			tsv.023 : (tsv == "023") ? 1 : 0 ,
			tsv.024 : (tsv == "024") ? 1 : 0
		}
		emit ( date , serversBridge );
	};
	
	// hmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm 		das rechts des doppelpunkts muss nochmal überdacht werden!
	var mapServers = function() {
		var servers = {
			servers.total.count : 1 ,
			servers.total.bwa : this.bwa ,
			servers.total.bwc : this.bwc ,
			servers.total.osv.linux : (osv == "linux") ? 1 : 0 ,
			servers.total.osv.darwin : (osv == "darwin") ? 1 : 0 ,
			servers.total.osv.freebsd : (osv == "freebsd") ? 1 : 0 ,
			servers.total.osv.windows : (osv == "windows") ? 1 : 0 ,
			servers.total.osv.other : (osv == "other") ? 1 : 0 ,
			servers.total.tsv.010 : (tsv == "010") ? 1 : 0 ,
			servers.total.tsv.011 : (tsv == "011") ? 1 : 0 ,
			servers.total.tsv.012 : (tsv == "012") ? 1 : 0 ,
			servers.total.tsv.020 : (tsv == "020") ? 1 : 0 ,
			servers.total.tsv.021 : (tsv == "021") ? 1 : 0 ,
			servers.total.tsv.022 : (tsv == "022") ? 1 : 0 ,
			servers.total.tsv.023 : (tsv == "023") ? 1 : 0 ,
			servers.total.tsv.024 : (tsv == "024") ? 1 : 0
		}
		emit ( date , servers );
	};
	
	//	bridges	
	var mapBridges = function() {
		var bridges = {
			servers.bridges.total.count : (type == "bridge") ? 1 : 0 ,
			servers.bridges.total.bwa : (type == "bridge") ? this.bwa : 0 ,
			servers.bridges.total.bwc : (type == "bridge") ? this.bwc : 0 ,
			servers.bridges.total.osv.linux : (type == "bridge" && osv == "linux") ? 1 : 0 ,
			servers.bridges.total.osv.darwin : (type == "bridge" && osv == "darwin") ? 1 : 0 ,
			servers.bridges.total.osv.freebsd : (type == "bridge" && osv == "freebsd") ? 1 : 0 ,
			servers.bridges.total.osv.windows : (type == "bridge" && osv == "windows") ? 1 : 0 ,
			servers.bridges.total.osv.other : (type == "bridge" && osv == "other") ? 1 : 0 ,
			servers.bridges.total.tsv.010 : (type == "bridge" && tsv == "010") ? 1 : 0 ,
			servers.bridges.total.tsv.011 : (type == "bridge" && tsv == "011") ? 1 : 0 ,
			servers.bridges.total.tsv.012 : (type == "bridge" && tsv == "012") ? 1 : 0 ,
			servers.bridges.total.tsv.020 : (type == "bridge" && tsv == "020") ? 1 : 0 ,
			servers.bridges.total.tsv.021 : (type == "bridge" && tsv == "021") ? 1 : 0 ,
			servers.bridges.total.tsv.022 : (type == "bridge" && tsv == "022") ? 1 : 0 ,
			servers.bridges.total.tsv.023 : (type == "bridge" && tsv == "023") ? 1 : 0 ,
			servers.bridges.total.tsv.024 : (type == "bridge" && tsv == "024") ? 1 : 0 ,
			
			servers.bridges.brpEmail.count : (brp == "email") ? 1 : 0 ,
			servers.bridges.brpEmail.bwa : (brp == "email") ? this.bwa : 0 ,
			servers.bridges.brpEmail.bwc : (brp == "email") ? this.bwc : 0 ,
			servers.bridges.brpEmail.osv.linux : (brp == "email" && osv == "linux") ? 1 : 0 ,
			servers.bridges.brpEmail.osv.darwin : (brp == "email" && osv == "darwin") ? 1 : 0 ,
			servers.bridges.brpEmail.osv.freebsd : (brp == "email" && osv == "freebsd") ? 1 : 0 ,
			servers.bridges.brpEmail.osv.windows : (brp == "email" && osv == "windows") ? 1 : 0 ,
			servers.bridges.brpEmail.osv.other : (brp == "email" && osv == "other") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.010 : (brp == "email" && tsv == "010") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.011 : (brp == "email" && tsv == "011") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.012 : (brp == "email" && tsv == "012") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.020 : (brp == "email" && tsv == "020") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.021 : (brp == "email" && tsv == "021") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.022 : (brp == "email" && tsv == "022") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.023 : (brp == "email" && tsv == "023") ? 1 : 0 ,
			servers.bridges.brpEmail.tsv.024 : (brp == "email" && tsv == "024") ? 1 : 0 ,
		
			servers.bridges.brpHttps.count : (brp == "https") ? 1 : 0 ,
			servers.bridges.brpHttps.bwa : (brp == "https") ? this.bwa : 0 ,
			servers.bridges.brpHttps.bwc : (brp == "https") ? this.bwc : 0 ,
			servers.bridges.brpHttps.osv.linux : (brp == "https" && osv == "linux") ? 1 : 0 ,
			servers.bridges.brpHttps.osv.darwin : (brp == "https" && osv == "darwin") ? 1 : 0 ,
			servers.bridges.brpHttps.osv.freebsd : (brp == "https" && osv == "freebsd") ? 1 : 0 ,
			servers.bridges.brpHttps.osv.windows : (brp == "https" && osv == "windows") ? 1 : 0 ,
			servers.bridges.brpHttps.osv.other : (brp == "https" && osv == "other") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.010 : (brp == "https" && tsv == "010") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.011 : (brp == "https" && tsv == "011") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.012 : (brp == "https" && tsv == "012") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.020 : (brp == "https" && tsv == "020") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.021 : (brp == "https" && tsv == "021") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.022 : (brp == "https" && tsv == "022") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.023 : (brp == "https" && tsv == "023") ? 1 : 0 ,
			servers.bridges.brpHttps.tsv.024 : (brp == "https" && tsv == "024") ? 1 : 0 ,
		
			servers.bridges.brpOther.count : (brp == "other") ? 1 : 0 ,
			servers.bridges.brpOther.bwa : (brp == "other") ? this.bwa : 0 ,
			servers.bridges.brpOther.bwc : (brp == "other") ? this.bwc : 0 ,
			servers.bridges.brpOther.osv.linux : (brp == "other" && osv == "linux") ? 1 : 0 ,
			servers.bridges.brpOther.osv.darwin : (brp == "other" && osv == "darwin") ? 1 : 0 ,
			servers.bridges.brpOther.osv.freebsd : (brp == "other" && osv == "freebsd") ? 1 : 0 ,
			servers.bridges.brpOther.osv.windows : (brp == "other" && osv == "windows") ? 1 : 0 ,
			servers.bridges.brpOther.osv.other : (brp == "other" && osv == "other") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.010 : (brp == "other" && tsv == "010") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.011 : (brp == "other" && tsv == "011") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.012 : (brp == "other" && tsv == "012") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.020 : (brp == "other" && tsv == "020") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.021 : (brp == "other" && tsv == "021") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.022 : (brp == "other" && tsv == "022") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.023 : (brp == "other" && tsv == "023") ? 1 : 0 ,
			servers.bridges.brpOther.tsv.024 : (brp == "other" && tsv == "024") ? 1 : 0 ,
		
			servers.bridges.breTrue.count : (bre == "true") ? 1 : 0 ,
			servers.bridges.breTrue.bwa : (bre == "true") ? this.bwa : 0 ,
			servers.bridges.breTrue.bwc : (bre == "true") ? this.bwc : 0 ,
			servers.bridges.breTrue.osv.linux : (bre == "true" && osv == "linux") ? 1 : 0 ,
			servers.bridges.breTrue.osv.darwin : (bre == "true" && osv == "darwin") ? 1 : 0 ,
			servers.bridges.breTrue.osv.freebsd : (bre == "true" && osv == "freebsd") ? 1 : 0 ,
			servers.bridges.breTrue.osv.windows : (bre == "true" && osv == "windows") ? 1 : 0 ,
			servers.bridges.breTrue.osv.other : (bre == "true" && osv == "other") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.010 : (bre == "true" && tsv == "010") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.011 : (bre == "true" && tsv == "011") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.012 : (bre == "true" && tsv == "012") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.020 : (bre == "true" && tsv == "020") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.021 : (bre == "true" && tsv == "021") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.022 : (bre == "true" && tsv == "022") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.023 : (bre == "true" && tsv == "023") ? 1 : 0 ,
			servers.bridges.breTrue.tsv.024 : (bre == "true" && tsv == "024") ? 1 : 0 ,
		
			servers.bridges.brtObfs2.count : (brt == [obfs2]) ? 1 : 0 ,
			servers.bridges.brtObfs2.bwa : (brt == [obfs2]) ? this.bwa : 0 ,
			servers.bridges.brtObfs2.bwc : (brt == [obfs2]) ? this.bwc : 0 ,
			servers.bridges.brtObfs2.osv.linux : (brt == [obfs2] && osv == "linux") ? 1 : 0 ,
			servers.bridges.brtObfs2.osv.darwin : (brt == [obfs2] && osv == "darwin") ? 1 : 0 ,
			servers.bridges.brtObfs2.osv.freebsd : (brt == [obfs2] && osv == "freebsd") ? 1 : 0 ,
			servers.bridges.brtObfs2.osv.windows : (brt == [obfs2] && osv == "windows") ? 1 : 0 ,
			servers.bridges.brtObfs2.osv.other : (brt == [obfs2] && osv == "other") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.010 : (brt == [obfs2] && tsv == "010") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.011 : (brt == [obfs2] && tsv == "011") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.012 : (brt == [obfs2] && tsv == "012") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.020 : (brt == [obfs2] && tsv == "020") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.021 : (brt == [obfs2] && tsv == "021") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.022 : (brt == [obfs2] && tsv == "022") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.023 : (brt == [obfs2] && tsv == "023") ? 1 : 0 ,
			servers.bridges.brtObfs2.tsv.024 : (brt == [obfs2] && tsv == "024") ? 1 : 0 ,
			
			servers.bridges.brtObfs3.count : (brt == [obfs3]) ? 1 : 0 ,
			servers.bridges.brtObfs3.bwa : (brt == [obfs3]) ? this.bwa : 0 ,
			servers.bridges.brtObfs3.bwc : (brt == [obfs3]) ? this.bwc : 0 ,
			servers.bridges.brtObfs3.osv.linux : (brt == [obfs3] && osv == "linux") ? 1 : 0 ,
			servers.bridges.brtObfs3.osv.darwin : (brt == [obfs3] && osv == "darwin") ? 1 : 0 ,
			servers.bridges.brtObfs3.osv.freebsd : (brt == [obfs3] && osv == "freebsd") ? 1 : 0 ,
			servers.bridges.brtObfs3.osv.windows : (brt == [obfs3] && osv == "windows") ? 1 : 0 ,
			servers.bridges.brtObfs3.osv.other : (brt == [obfs3] && osv == "other") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.010 : (brt == [obfs3] && tsv == "010") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.011 : (brt == [obfs3] && tsv == "011") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.012 : (brt == [obfs3] && tsv == "012") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.020 : (brt == [obfs3] && tsv == "020") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.021 : (brt == [obfs3] && tsv == "021") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.022 : (brt == [obfs3] && tsv == "022") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.023 : (brt == [obfs3] && tsv == "023") ? 1 : 0 ,
			servers.bridges.brtObfs3.tsv.024 : (brt == [obfs3] && tsv == "024") ? 1 : 0 ,
			
			servers.bridges.brtObfs23.count : (brt == [obfs23, obfs3]) ? 1 : 0 ,
			servers.bridges.brtObfs23.bwa : (brt == [obfs23, obfs3]) ? this.bwa : 0 ,
			servers.bridges.brtObfs23.bwc : (brt == [obfs23, obfs3]) ? this.bwc : 0 ,
			servers.bridges.brtObfs23.osv.linux : (brt == [obfs23, obfs3] && osv == "linux") ? 1 : 0 ,
			servers.bridges.brtObfs23.osv.darwin : (brt == [obfs23, obfs3] && osv == "darwin") ? 1 : 0 ,
			servers.bridges.brtObfs23.osv.freebsd : (brt == [obfs23, obfs3] && osv == "freebsd") ? 1 : 0 ,
			servers.bridges.brtObfs23.osv.windows : (brt == [obfs23, obfs3] && osv == "windows") ? 1 : 0 ,
			servers.bridges.brtObfs23.osv.other : (brt == [obfs23, obfs3] && osv == "other") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.010 : (brt == [obfs23, obfs3] && tsv == "010") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.011 : (brt == [obfs23, obfs3] && tsv == "011") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.012 : (brt == [obfs23, obfs3] && tsv == "012") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.020 : (brt == [obfs23, obfs3] && tsv == "020") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.021 : (brt == [obfs23, obfs3] && tsv == "021") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.022 : (brt == [obfs23, obfs3] && tsv == "022") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.023 : (brt == [obfs23, obfs3] && tsv == "023") ? 1 : 0 ,
			servers.bridges.brtObfs23.tsv.024 : (brt == [obfs23, obfs3] && tsv == "024") ? 1 : 0
		}
		emit ( date , bridges );
	};
	
	//	relays
	var mapRelays = function() {
		var relays = {
			servers.relays.roleAll.total.count : (type == "relay") ? 1 : 0 ,
			servers.relays.roleAll.total.bwa : (type == "relay") ? this.bwa : 0 ,
			servers.relays.roleAll.total.bwc : (type == "relay") ? this.bwc : 0 ,
			servers.relays.roleAll.total.osv.linux : (type == "relay" && osv == "linux") ? 1 : 0 ,
			servers.relays.roleAll.total.osv.darwin : (type == "relay" && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleAll.total.osv.freebsd : (type == "relay" && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleAll.total.osv.windows : (type == "relay" && osv == "windows") ? 1 : 0 ,
			servers.relays.roleAll.total.osv.other : (type == "relay" && osv == "other") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.010 : (type == "relay" && tsv == "010") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.011 : (type == "relay" && tsv == "011") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.012 : (type == "relay" && tsv == "012") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.020 : (type == "relay" && tsv == "020") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.021 : (type == "relay" && tsv == "021") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.022 : (type == "relay" && tsv == "022") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.023 : (type == "relay" && tsv == "023") ? 1 : 0 ,
			servers.relays.roleAll.total.tsv.024 : (type == "relay" && tsv == "024") ? 1 : 0 ,
			servers.relays.roleAll.total.pbr : (type == "relay") ? this.pbr : 0.0 ,
			
			servers.relays.roleAll.flagNone.count : (type == "relay" && !contains(flag, fast) && !contains(flag,stable)) ? 1 : 0 ,
			servers.relays.roleAll.flagNone.bwa : (type == "relay" && !contains(flag, fast) && !contains(flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleAll.flagNone.bwc : (type == "relay" && !contains(flag, fast) && !contains(flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleAll.flagNone.osv.linux : (type == "relay" && !contains(flag, fast) && !contains(flag,stable) && osv == "linux") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.osv.darwin : (type == "relay" && !contains(flag, fast) && !contains(flag,stable) && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.osv.freebsd : (type == "relay" && !contains(flag, fast) && !contains(flag,stable) && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.osv.windows : (type == "relay" && !contains(flag, fast) && !contains(flag,stable) && osv == "windows") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.osv.other : (type == "relay" && !contains(flag, fast) && !contains(flag,stable) && osv == "other") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.010 : (type == "relay" && !contains(flag, fast) && !contains(flag,stable) && tsv == "010") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.011 : (type == "relay" && !contains(flag, fast) && !contains(flag,stable) && tsv == "011") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.012 : (type == "relay" && !contains(flag, fast) && !contains(flag,stable) && tsv == "012") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.020 : (type == "relay" && !contains(flag, fast) && !contains(flag,stable) && tsv == "020") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.021 : (type == "relay" && !contains(flag, fast) && !contains(flag,stable) && tsv == "021") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.022 : (type == "relay" && !contains(flag, fast) && !contains(flag,stable) && tsv == "022") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.023 : (type == "relay" && !contains(flag, fast) && !contains(flag,stable) && tsv == "023") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.tsv.024 : (type == "relay" && !contains(flag, fast) && !contains(flag,stable) && tsv == "024") ? 1 : 0 ,
			servers.relays.roleAll.flagNone.pbr : (type == "relay" && !contains(flag, fast) && !contains(flag,stable)) ? this.pbr : 0.0 ,
			
			servers.relays.roleAll.flagStable.count : (type == "relay" && !contains(flag, fast) && contains(flag,stable)) ? 1 : 0 ,
			servers.relays.roleAll.flagStable.bwa : (type == "relay" && !contains(flag, fast) && contains(flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleAll.flagStable.bwc : (type == "relay" && !contains(flag, fast) && contains(flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleAll.flagStable.osv.linux : (type == "relay" && !contains(flag, fast) && contains(flag,stable) && osv == "linux") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.osv.darwin : (type == "relay" && !contains(flag, fast) && contains(flag,stable) && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.osv.freebsd : (type == "relay" && !contains(flag, fast) && contains(flag,stable) && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.osv.windows : (type == "relay" && !contains(flag, fast) && contains(flag,stable) && osv == "windows") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.osv.other : (type == "relay" && !contains(flag, fast) && contains(flag,stable) && osv == "other") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.010 : (type == "relay" && !contains(flag, fast) && contains(flag,stable) && tsv == "010") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.011 : (type == "relay" && !contains(flag, fast) && contains(flag,stable) && tsv == "011") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.012 : (type == "relay" && !contains(flag, fast) && contains(flag,stable) && tsv == "012") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.020 : (type == "relay" && !contains(flag, fast) && contains(flag,stable) && tsv == "020") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.021 : (type == "relay" && !contains(flag, fast) && contains(flag,stable) && tsv == "021") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.022 : (type == "relay" && !contains(flag, fast) && contains(flag,stable) && tsv == "022") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.023 : (type == "relay" && !contains(flag, fast) && contains(flag,stable) && tsv == "023") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.tsv.024 : (type == "relay" && !contains(flag, fast) && contains(flag,stable) && tsv == "024") ? 1 : 0 ,
			servers.relays.roleAll.flagStable.pbr : (type == "relay" && !contains(flag, fast) && contains(flag,stable)) ? this.pbr : 0.0 ,
			
			servers.relays.roleAll.flagFast.count : (type == "relay" && contains(flag, fast) && !contains(flag,stable)) ? 1 : 0 ,
			servers.relays.roleAll.flagFast.bwa : (type == "relay" && contains(flag, fast) && !contains(flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleAll.flagFast.bwc : (type == "relay" && contains(flag, fast) && !contains(flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleAll.flagFast.osv.linux : (type == "relay" && contains(flag, fast) && !contains(flag,stable) && osv == "linux") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.osv.darwin : (type == "relay" && contains(flag, fast) && !contains(flag,stable) && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.osv.freebsd : (type == "relay" && contains(flag, fast) && !contains(flag,stable) && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.osv.windows : (type == "relay" && contains(flag, fast) && !contains(flag,stable) && osv == "windows") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.osv.other : (type == "relay" && contains(flag, fast) && !contains(flag,stable) && osv == "other") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.010 : (type == "relay" && contains(flag, fast) && !contains(flag,stable) && tsv == "010") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.011 : (type == "relay" && contains(flag, fast) && !contains(flag,stable) && tsv == "011") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.012 : (type == "relay" && contains(flag, fast) && !contains(flag,stable) && tsv == "012") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.020 : (type == "relay" && contains(flag, fast) && !contains(flag,stable) && tsv == "020") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.021 : (type == "relay" && contains(flag, fast) && !contains(flag,stable) && tsv == "021") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.022 : (type == "relay" && contains(flag, fast) && !contains(flag,stable) && tsv == "022") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.023 : (type == "relay" && contains(flag, fast) && !contains(flag,stable) && tsv == "023") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.tsv.024 : (type == "relay" && contains(flag, fast) && !contains(flag,stable) && tsv == "024") ? 1 : 0 ,
			servers.relays.roleAll.flagFast.pbr : (type == "relay" && contains(flag, fast) && !contains(flag,stable)) ? this.pbr : 0.0 ,
	
			servers.relays.roleAll.flagFastStable.count : (type == "relay" && contains(flag, fast) && contains(flag,stable)) ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.bwa : (type == "relay" && contains(flag, fast) && contains(flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleAll.flagFastStable.bwc : (type == "relay" && contains(flag, fast) && contains(flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleAll.flagFastStable.osv.linux : (type == "relay" && contains(flag, fast) && contains(flag,stable) && osv == "linux") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.osv.darwin : (type == "relay" && contains(flag, fast) && contains(flag,stable) && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.osv.freebsd : (type == "relay" && contains(flag, fast) && contains(flag,stable) && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.osv.windows : (type == "relay" && contains(flag, fast) && contains(flag,stable) && osv == "windows") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.osv.other : (type == "relay" && contains(flag, fast) && contains(flag,stable) && osv == "other") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.010 : (type == "relay" && contains(flag, fast) && contains(flag,stable) && tsv == "010") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.011 : (type == "relay" && contains(flag, fast) && contains(flag,stable) && tsv == "011") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.012 : (type == "relay" && contains(flag, fast) && contains(flag,stable) && tsv == "012") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.020 : (type == "relay" && contains(flag, fast) && contains(flag,stable) && tsv == "020") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.021 : (type == "relay" && contains(flag, fast) && contains(flag,stable) && tsv == "021") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.022 : (type == "relay" && contains(flag, fast) && contains(flag,stable) && tsv == "022") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.023 : (type == "relay" && contains(flag, fast) && contains(flag,stable) && tsv == "023") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.tsv.024 : (type == "relay" && contains(flag, fast) && contains(flag,stable) && tsv == "024") ? 1 : 0 ,
			servers.relays.roleAll.flagFastStable.pbr : (type == "relay" && contains(flag, fast) && contains(flag,stable)) ? this.pbr : 0.0 ,			
			
			// GUARD
			servers.relays.roleGuard.total.count : (role == "guard") ? 1 : 0 ,
			servers.relays.roleGuard.total.bwa : (role == "guard") ? this.bwa : 0 ,
			servers.relays.roleGuard.total.bwc : (role == "guard") ? this.bwc : 0 ,
			servers.relays.roleGuard.total.osv.linux : (role == "guard" && osv == "linux") ? 1 : 0 ,
			servers.relays.roleGuard.total.osv.darwin : (role == "guard" && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleGuard.total.osv.freebsd : (role == "guard" && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleGuard.total.osv.windows : (role == "guard" && osv == "windows") ? 1 : 0 ,
			servers.relays.roleGuard.total.osv.other : (role == "guard" && osv == "other") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.010 : (role == "guard" && tsv == "010") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.011 : (role == "guard" && tsv == "011") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.012 : (role == "guard" && tsv == "012") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.020 : (role == "guard" && tsv == "020") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.021 : (role == "guard" && tsv == "021") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.022 : (role == "guard" && tsv == "022") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.023 : (role == "guard" && tsv == "023") ? 1 : 0 ,
			servers.relays.roleGuard.total.tsv.024 : (role == "guard" && tsv == "024") ? 1 : 0 ,
			servers.relays.roleGuard.total.pbg : (role == "guard") ? this.pbg : 0.0 ,		
			
			servers.relays.roleGuard.flagNone.count : (role == "guard" && !contains(flag, fast) && !contains(flag,stable)) ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.bwa : (role == "guard" && !contains(flag, fast) && !contains(flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleGuard.flagNone.bwc : (role == "guard" && !contains(flag, fast) && !contains(flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleGuard.flagNone.osv.linux : (role == "guard" && !contains(flag, fast) && !contains(flag,stable) && osv == "linux") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.osv.darwin : (role == "guard" && !contains(flag, fast) && !contains(flag,stable) && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.osv.freebsd : (role == "guard" && !contains(flag, fast) && !contains(flag,stable) && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.osv.windows : (role == "guard" && !contains(flag, fast) && !contains(flag,stable) && osv == "windows") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.osv.other : (role == "guard" && !contains(flag, fast) && !contains(flag,stable) && osv == "other") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.010 : (role == "guard" && !contains(flag, fast) && !contains(flag,stable) && tsv == "010") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.011 : (role == "guard" && !contains(flag, fast) && !contains(flag,stable) && tsv == "011") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.012 : (role == "guard" && !contains(flag, fast) && !contains(flag,stable) && tsv == "012") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.020 : (role == "guard" && !contains(flag, fast) && !contains(flag,stable) && tsv == "020") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.021 : (role == "guard" && !contains(flag, fast) && !contains(flag,stable) && tsv == "021") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.022 : (role == "guard" && !contains(flag, fast) && !contains(flag,stable) && tsv == "022") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.023 : (role == "guard" && !contains(flag, fast) && !contains(flag,stable) && tsv == "023") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.tsv.024 : (role == "guard" && !contains(flag, fast) && !contains(flag,stable) && tsv == "024") ? 1 : 0 ,
			servers.relays.roleGuard.flagNone.pbg : (role == "guard" && !contains(flag, fast) && !contains(flag,stable)) ? this.pbg : 0.0 ,
			
			servers.relays.roleGuard.flagStable.count : (role == "guard" && !contains(flag, fast) && contains(flag,stable)) ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.bwa : (role == "guard" && !contains(flag, fast) && contains(flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleGuard.flagStable.bwc : (role == "guard" && !contains(flag, fast) && contains(flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleGuard.flagStable.osv.linux : (role == "guard" && !contains(flag, fast) && contains(flag,stable) && osv == "linux") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.osv.darwin : (role == "guard" && !contains(flag, fast) && contains(flag,stable) && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.osv.freebsd : (role == "guard" && !contains(flag, fast) && contains(flag,stable) && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.osv.windows : (role == "guard" && !contains(flag, fast) && contains(flag,stable) && osv == "windows") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.osv.other : (role == "guard" && !contains(flag, fast) && contains(flag,stable) && osv == "other") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.010 : (role == "guard" && !contains(flag, fast) && contains(flag,stable) && tsv == "010") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.011 : (role == "guard" && !contains(flag, fast) && contains(flag,stable) && tsv == "011") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.012 : (role == "guard" && !contains(flag, fast) && contains(flag,stable) && tsv == "012") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.020 : (role == "guard" && !contains(flag, fast) && contains(flag,stable) && tsv == "020") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.021 : (role == "guard" && !contains(flag, fast) && contains(flag,stable) && tsv == "021") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.022 : (role == "guard" && !contains(flag, fast) && contains(flag,stable) && tsv == "022") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.023 : (role == "guard" && !contains(flag, fast) && contains(flag,stable) && tsv == "023") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.tsv.024 : (role == "guard" && !contains(flag, fast) && contains(flag,stable) && tsv == "024") ? 1 : 0 ,
			servers.relays.roleGuard.flagStable.pbg : (role == "guard" && !contains(flag, fast) && contains(flag,stable)) ? this.pbg : 0.0 ,			
			
			servers.relays.roleGuard.flagFast.count : (role == "guard" && contains(flag, fast) && !contains(flag,stable)) ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.bwa : (role == "guard" && contains(flag, fast) && !contains(flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleGuard.flagFast.bwc : (role == "guard" && contains(flag, fast) && !contains(flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleGuard.flagFast.osv.linux : (role == "guard" && contains(flag, fast) && !contains(flag,stable) && osv == "linux") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.osv.darwin : (role == "guard" && contains(flag, fast) && !contains(flag,stable) && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.osv.freebsd : (role == "guard" && contains(flag, fast) && !contains(flag,stable) && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.osv.windows : (role == "guard" && contains(flag, fast) && !contains(flag,stable) && osv == "windows") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.osv.other : (role == "guard" && contains(flag, fast) && !contains(flag,stable) && osv == "other") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.010 : (role == "guard" && contains(flag, fast) && !contains(flag,stable) && tsv == "010") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.011 : (role == "guard" && contains(flag, fast) && !contains(flag,stable) && tsv == "011") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.012 : (role == "guard" && contains(flag, fast) && !contains(flag,stable) && tsv == "012") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.020 : (role == "guard" && contains(flag, fast) && !contains(flag,stable) && tsv == "020") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.021 : (role == "guard" && contains(flag, fast) && !contains(flag,stable) && tsv == "021") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.022 : (role == "guard" && contains(flag, fast) && !contains(flag,stable) && tsv == "022") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.023 : (role == "guard" && contains(flag, fast) && !contains(flag,stable) && tsv == "023") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.tsv.024 : (role == "guard" && contains(flag, fast) && !contains(flag,stable) && tsv == "024") ? 1 : 0 ,
			servers.relays.roleGuard.flagFast.pbg : (role == "guard" && contains(flag, fast) && !contains(flag,stable)) ? this.pbg : 0.0 ,
	
			servers.relays.roleGuard.flagFastStable.count : (role == "guard" && contains(flag, fast) && contains(flag,stable)) ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.bwa : (role == "guard" && contains(flag, fast) && contains(flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleGuard.flagFastStable.bwc : (role == "guard" && contains(flag, fast) && contains(flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleGuard.flagFastStable.osv.linux : (role == "guard" && contains(flag, fast) && contains(flag,stable) && osv == "linux") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.osv.darwin : (role == "guard" && contains(flag, fast) && contains(flag,stable) && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.osv.freebsd : (role == "guard" && contains(flag, fast) && contains(flag,stable) && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.osv.windows : (role == "guard" && contains(flag, fast) && contains(flag,stable) && osv == "windows") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.osv.other : (role == "guard" && contains(flag, fast) && contains(flag,stable) && osv == "other") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.010 : (role == "guard" && contains(flag, fast) && contains(flag,stable) && tsv == "010") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.011 : (role == "guard" && contains(flag, fast) && contains(flag,stable) && tsv == "011") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.012 : (role == "guard" && contains(flag, fast) && contains(flag,stable) && tsv == "012") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.020 : (role == "guard" && contains(flag, fast) && contains(flag,stable) && tsv == "020") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.021 : (role == "guard" && contains(flag, fast) && contains(flag,stable) && tsv == "021") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.022 : (role == "guard" && contains(flag, fast) && contains(flag,stable) && tsv == "022") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.023 : (role == "guard" && contains(flag, fast) && contains(flag,stable) && tsv == "023") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.tsv.024 : (role == "guard" && contains(flag, fast) && contains(flag,stable) && tsv == "024") ? 1 : 0 ,
			servers.relays.roleGuard.flagFastStable.pbg : (role == "guard" && contains(flag, fast) && contains(flag,stable)) ? this.pbg : 0.0 ,
			
			// MIDDLE
			servers.relays.roleMiddle.total.count : (role == "middle") ? 1 : 0 ,
			servers.relays.roleMiddle.total.bwa : (role == "middle") ? this.bwa : 0 ,
			servers.relays.roleMiddle.total.bwc : (role == "middle") ? this.bwc : 0 ,
			servers.relays.roleMiddle.total.osv.linux : (role == "middle" && osv == "linux") ? 1 : 0 ,
			servers.relays.roleMiddle.total.osv.darwin : (role == "middle" && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleMiddle.total.osv.freebsd : (role == "middle" && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleMiddle.total.osv.windows : (role == "middle" && osv == "windows") ? 1 : 0 ,
			servers.relays.roleMiddle.total.osv.other : (role == "middle" && osv == "other") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.010 : (role == "middle" && tsv == "010") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.011 : (role == "middle" && tsv == "011") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.012 : (role == "middle" && tsv == "012") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.020 : (role == "middle" && tsv == "020") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.021 : (role == "middle" && tsv == "021") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.022 : (role == "middle" && tsv == "022") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.023 : (role == "middle" && tsv == "023") ? 1 : 0 ,
			servers.relays.roleMiddle.total.tsv.024 : (role == "middle" && tsv == "024") ? 1 : 0 ,
			servers.relays.roleMiddle.total.pbm : (role == "middle") ? this.pbm : 0.0 ,
					
			servers.relays.roleMiddle.flagNone.count : (role == "middle" && !contains(flag, fast) && !contains(flag,stable)) ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.bwa : (role == "middle" && !contains(flag, fast) && !contains(flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleMiddle.flagNone.bwc : (role == "middle" && !contains(flag, fast) && !contains(flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleMiddle.flagNone.osv.linux : (role == "middle" && !contains(flag, fast) && !contains(flag,stable) && osv == "linux") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.osv.darwin : (role == "middle" && !contains(flag, fast) && !contains(flag,stable) && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.osv.freebsd : (role == "middle" && !contains(flag, fast) && !contains(flag,stable) && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.osv.windows : (role == "middle" && !contains(flag, fast) && !contains(flag,stable) && osv == "windows") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.osv.other : (role == "middle" && !contains(flag, fast) && !contains(flag,stable) && osv == "other") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.010 : (role == "middle" && !contains(flag, fast) && !contains(flag,stable) && tsv == "010") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.011 : (role == "middle" && !contains(flag, fast) && !contains(flag,stable) && tsv == "011") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.012 : (role == "middle" && !contains(flag, fast) && !contains(flag,stable) && tsv == "012") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.020 : (role == "middle" && !contains(flag, fast) && !contains(flag,stable) && tsv == "020") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.021 : (role == "middle" && !contains(flag, fast) && !contains(flag,stable) && tsv == "021") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.022 : (role == "middle" && !contains(flag, fast) && !contains(flag,stable) && tsv == "022") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.023 : (role == "middle" && !contains(flag, fast) && !contains(flag,stable) && tsv == "023") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.tsv.024 : (role == "middle" && !contains(flag, fast) && !contains(flag,stable) && tsv == "024") ? 1 : 0 ,
			servers.relays.roleMiddle.flagNone.pbm : (role == "middle" && !contains(flag, fast) && !contains(flag,stable)) ? this.pbm : 0.0 ,
			
			servers.relays.roleMiddle.flagStable.count : (role == "middle" && !contains(flag, fast) && contains(flag,stable)) ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.bwa : (role == "middle" && !contains(flag, fast) && contains(flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleMiddle.flagStable.bwc : (role == "middle" && !contains(flag, fast) && contains(flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleMiddle.flagStable.osv.linux : (role == "middle" && !contains(flag, fast) && contains(flag,stable) && osv == "linux") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.osv.darwin : (role == "middle" && !contains(flag, fast) && contains(flag,stable) && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.osv.freebsd : (role == "middle" && !contains(flag, fast) && contains(flag,stable) && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.osv.windows : (role == "middle" && !contains(flag, fast) && contains(flag,stable) && osv == "windows") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.osv.other : (role == "middle" && !contains(flag, fast) && contains(flag,stable) && osv == "other") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.010 : (role == "middle" && !contains(flag, fast) && contains(flag,stable) && tsv == "010") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.011 : (role == "middle" && !contains(flag, fast) && contains(flag,stable) && tsv == "011") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.012 : (role == "middle" && !contains(flag, fast) && contains(flag,stable) && tsv == "012") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.020 : (role == "middle" && !contains(flag, fast) && contains(flag,stable) && tsv == "020") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.021 : (role == "middle" && !contains(flag, fast) && contains(flag,stable) && tsv == "021") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.022 : (role == "middle" && !contains(flag, fast) && contains(flag,stable) && tsv == "022") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.023 : (role == "middle" && !contains(flag, fast) && contains(flag,stable) && tsv == "023") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.tsv.024 : (role == "middle" && !contains(flag, fast) && contains(flag,stable) && tsv == "024") ? 1 : 0 ,
			servers.relays.roleMiddle.flagStable.pbm : (role == "middle" && !contains(flag, fast) && contains(flag,stable)) ? this.pbm : 0.0 ,
						
			servers.relays.roleMiddle.flagFast.count : (role == "middle" && contains(flag, fast) && !contains(flag,stable)) ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.bwa : (role == "middle" && contains(flag, fast) && !contains(flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleMiddle.flagFast.bwc : (role == "middle" && contains(flag, fast) && !contains(flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleMiddle.flagFast.osv.linux : (role == "middle" && contains(flag, fast) && !contains(flag,stable) && osv == "linux") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.osv.darwin : (role == "middle" && contains(flag, fast) && !contains(flag,stable) && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.osv.freebsd : (role == "middle" && contains(flag, fast) && !contains(flag,stable) && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.osv.windows : (role == "middle" && contains(flag, fast) && !contains(flag,stable) && osv == "windows") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.osv.other : (role == "middle" && contains(flag, fast) && !contains(flag,stable) && osv == "other") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.010 : (role == "middle" && contains(flag, fast) && !contains(flag,stable) && tsv == "010") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.011 : (role == "middle" && contains(flag, fast) && !contains(flag,stable) && tsv == "011") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.012 : (role == "middle" && contains(flag, fast) && !contains(flag,stable) && tsv == "012") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.020 : (role == "middle" && contains(flag, fast) && !contains(flag,stable) && tsv == "020") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.021 : (role == "middle" && contains(flag, fast) && !contains(flag,stable) && tsv == "021") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.022 : (role == "middle" && contains(flag, fast) && !contains(flag,stable) && tsv == "022") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.023 : (role == "middle" && contains(flag, fast) && !contains(flag,stable) && tsv == "023") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.tsv.024 : (role == "middle" && contains(flag, fast) && !contains(flag,stable) && tsv == "024") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFast.pbm : (role == "middle" && contains(flag, fast) && !contains(flag,stable)) ? this.pbm : 0.0 ,
	
			servers.relays.roleMiddle.flagFastStable.count : (role == "middle" && contains(flag, fast) && contains(flag,stable)) ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.bwa : (role == "middle" && contains(flag, fast) && contains(flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleMiddle.flagFastStable.bwc : (role == "middle" && contains(flag, fast) && contains(flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleMiddle.flagFastStable.osv.linux : (role == "middle" && contains(flag, fast) && contains(flag,stable) && osv == "linux") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.osv.darwin : (role == "middle" && contains(flag, fast) && contains(flag,stable) && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.osv.freebsd : (role == "middle" && contains(flag, fast) && contains(flag,stable) && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.osv.windows : (role == "middle" && contains(flag, fast) && contains(flag,stable) && osv == "windows") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.osv.other : (role == "middle" && contains(flag, fast) && contains(flag,stable) && osv == "other") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.010 : (role == "middle" && contains(flag, fast) && contains(flag,stable) && tsv == "010") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.011 : (role == "middle" && contains(flag, fast) && contains(flag,stable) && tsv == "011") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.012 : (role == "middle" && contains(flag, fast) && contains(flag,stable) && tsv == "012") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.020 : (role == "middle" && contains(flag, fast) && contains(flag,stable) && tsv == "020") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.021 : (role == "middle" && contains(flag, fast) && contains(flag,stable) && tsv == "021") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.022 : (role == "middle" && contains(flag, fast) && contains(flag,stable) && tsv == "022") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.023 : (role == "middle" && contains(flag, fast) && contains(flag,stable) && tsv == "023") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.tsv.024 : (role == "middle" && contains(flag, fast) && contains(flag,stable) && tsv == "024") ? 1 : 0 ,
			servers.relays.roleMiddle.flagFastStable.pbm : (role == "middle" && contains(flag, fast) && contains(flag,stable)) ? this.pbm : 0.0 ,
			
			// EXIT
			servers.relays.roleExit.total.count : (role == "exit") ? 1 : 0 ,
			servers.relays.roleExit.total.bwa : (role == "exit") ? this.bwa : 0 ,
			servers.relays.roleExit.total.bwc : (role == "exit") ? this.bwc : 0 ,
			servers.relays.roleExit.total.osv.linux : (role == "exit" && osv == "linux") ? 1 : 0 ,
			servers.relays.roleExit.total.osv.darwin : (role == "exit" && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleExit.total.osv.freebsd : (role == "exit" && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleExit.total.osv.windows : (role == "exit" && osv == "windows") ? 1 : 0 ,
			servers.relays.roleExit.total.osv.other : (role == "exit" && osv == "other") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.010 : (role == "exit" && tsv == "010") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.011 : (role == "exit" && tsv == "011") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.012 : (role == "exit" && tsv == "012") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.020 : (role == "exit" && tsv == "020") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.021 : (role == "exit" && tsv == "021") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.022 : (role == "exit" && tsv == "022") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.023 : (role == "exit" && tsv == "023") ? 1 : 0 ,
			servers.relays.roleExit.total.tsv.024 : (role == "exit" && tsv == "024") ? 1 : 0 ,
			servers.relays.roleExit.total.pex.4 : (role == "exit" && pex == [443]) ? 1 : 0 ,
			servers.relays.roleExit.total.pex.6 : (role == "exit" && pex == [6667]) ? 1 : 0 ,
			servers.relays.roleExit.total.pex.8 : (role == "exit" && pex == [80]) ? 1 : 0 ,
			servers.relays.roleExit.total.pex.46 : (role == "exit" && pex == [443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.total.pex.48 : (role == "exit" && pex == [80, 443]) ? 1 : 0 ,
			servers.relays.roleExit.total.pex.68 : (role == "exit" && pex == [80, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.total.pex.468 : (role == "exit" && pex == [80, 443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.total.pbe : (role == "exit") ? this.pbe : 0.0 ,
						
			servers.relays.roleExit.flagNone.count : (role == "exit" && !contains(flag, fast) && !contains(flag,stable)) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.bwa : (role == "exit" && !contains(flag, fast) && !contains(flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleExit.flagNone.bwc : (role == "exit" && !contains(flag, fast) && !contains(flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleExit.flagNone.osv.linux : (role == "exit" && !contains(flag, fast) && !contains(flag,stable) && osv == "linux") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.osv.darwin : (role == "exit" && !contains(flag, fast) && !contains(flag,stable) && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.osv.freebsd : (role == "exit" && !contains(flag, fast) && !contains(flag,stable) && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.osv.windows : (role == "exit" && !contains(flag, fast) && !contains(flag,stable) && osv == "windows") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.osv.other : (role == "exit" && !contains(flag, fast) && !contains(flag,stable) && osv == "other") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.010 : (role == "exit" && !contains(flag, fast) && !contains(flag,stable) && tsv == "010") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.011 : (role == "exit" && !contains(flag, fast) && !contains(flag,stable) && tsv == "011") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.012 : (role == "exit" && !contains(flag, fast) && !contains(flag,stable) && tsv == "012") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.020 : (role == "exit" && !contains(flag, fast) && !contains(flag,stable) && tsv == "020") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.021 : (role == "exit" && !contains(flag, fast) && !contains(flag,stable) && tsv == "021") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.022 : (role == "exit" && !contains(flag, fast) && !contains(flag,stable) && tsv == "022") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.023 : (role == "exit" && !contains(flag, fast) && !contains(flag,stable) && tsv == "023") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.tsv.024 : (role == "exit" && !contains(flag, fast) && !contains(flag,stable) && tsv == "024") ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pex.4 : (role == "exit" && !contains(flag, fast) && !contains(flag,stable) && pex == [443]) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pex.6 : (role == "exit" && !contains(flag, fast) && !contains(flag,stable) && pex == [6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pex.8 : (role == "exit" && !contains(flag, fast) && !contains(flag,stable) && pex == [80]) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pex.46 : (role == "exit" && !contains(flag, fast) && !contains(flag,stable) && pex == [443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pex.48 : (role == "exit" && !contains(flag, fast) && !contains(flag,stable) && pex == [80, 443]) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pex.68 : (role == "exit" && !contains(flag, fast) && !contains(flag,stable) && pex == [80, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pex.468 : (role == "exit" && !contains(flag, fast) && !contains(flag,stable) && pex == [80, 443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagNone.pbe : (role == "exit" && !contains(flag, fast) && !contains(flag,stable)) ? this.pbe : 0.0 ,
			
			servers.relays.roleExit.flagFast.count : (role == "exit" && contains(flag, fast) && !contains(flag,stable)) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.bwa : (role == "exit" && contains(flag, fast) && !contains(flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleExit.flagFast.bwc : (role == "exit" && contains(flag, fast) && !contains(flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleExit.flagFast.osv.linux : (role == "exit" && contains(flag, fast) && !contains(flag,stable) && osv == "linux") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.osv.darwin : (role == "exit" && contains(flag, fast) && !contains(flag,stable) && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.osv.freebsd : (role == "exit" && contains(flag, fast) && !contains(flag,stable) && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.osv.windows : (role == "exit" && contains(flag, fast) && !contains(flag,stable) && osv == "windows") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.osv.other : (role == "exit" && contains(flag, fast) && !contains(flag,stable) && osv == "other") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.010 : (role == "exit" && contains(flag, fast) && !contains(flag,stable) && tsv == "010") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.011 : (role == "exit" && contains(flag, fast) && !contains(flag,stable) && tsv == "011") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.012 : (role == "exit" && contains(flag, fast) && !contains(flag,stable) && tsv == "012") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.020 : (role == "exit" && contains(flag, fast) && !contains(flag,stable) && tsv == "020") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.021 : (role == "exit" && contains(flag, fast) && !contains(flag,stable) && tsv == "021") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.022 : (role == "exit" && contains(flag, fast) && !contains(flag,stable) && tsv == "022") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.023 : (role == "exit" && contains(flag, fast) && !contains(flag,stable) && tsv == "023") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.tsv.024 : (role == "exit" && contains(flag, fast) && !contains(flag,stable) && tsv == "024") ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pex.4 : (role == "exit" && contains(flag, fast) && !contains(flag,stable) && pex == [443]) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pex.6 : (role == "exit" && contains(flag, fast) && !contains(flag,stable) && pex == [6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pex.8 : (role == "exit" && contains(flag, fast) && !contains(flag,stable) && pex == [80]) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pex.46 : (role == "exit" && contains(flag, fast) && !contains(flag,stable) && pex == [443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pex.48 : (role == "exit" && contains(flag, fast) && !contains(flag,stable) && pex == [80, 443]) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pex.68 : (role == "exit" && contains(flag, fast) && !contains(flag,stable) && pex == [80, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pex.468 : (role == "exit" && contains(flag, fast) && !contains(flag,stable) && pex == [80, 443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFast.pbe : (role == "exit" && contains(flag, fast) && !contains(flag,stable)) ? this.pbe : 0.0 ,
			
			servers.relays.roleExit.flagStable.count : (role == "exit" && !contains(flag, fast) && contains(flag,stable)) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.bwa : (role == "exit" && !contains(flag, fast) && contains(flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleExit.flagStable.bwc : (role == "exit" && !contains(flag, fast) && contains(flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleExit.flagStable.osv.linux : (role == "exit" && !contains(flag, fast) && contains(flag,stable) && osv == "linux") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.osv.darwin : (role == "exit" && !contains(flag, fast) && contains(flag,stable) && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.osv.freebsd : (role == "exit" && !contains(flag, fast) && contains(flag,stable) && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.osv.windows : (role == "exit" && !contains(flag, fast) && contains(flag,stable) && osv == "windows") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.osv.other : (role == "exit" && !contains(flag, fast) && contains(flag,stable) && osv == "other") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.010 : (role == "exit" && !contains(flag, fast) && contains(flag,stable) && tsv == "010") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.011 : (role == "exit" && !contains(flag, fast) && contains(flag,stable) && tsv == "011") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.012 : (role == "exit" && !contains(flag, fast) && contains(flag,stable) && tsv == "012") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.020 : (role == "exit" && !contains(flag, fast) && contains(flag,stable) && tsv == "020") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.021 : (role == "exit" && !contains(flag, fast) && contains(flag,stable) && tsv == "021") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.022 : (role == "exit" && !contains(flag, fast) && contains(flag,stable) && tsv == "022") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.023 : (role == "exit" && !contains(flag, fast) && contains(flag,stable) && tsv == "023") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.tsv.024 : (role == "exit" && !contains(flag, fast) && contains(flag,stable) && tsv == "024") ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pex.4 : (role == "exit" && !contains(flag, fast) && contains(flag,stable) && pex == [443]) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pex.6 : (role == "exit" && !contains(flag, fast) && contains(flag,stable) && pex == [6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pex.8 : (role == "exit" && !contains(flag, fast) && contains(flag,stable) && pex == [80]) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pex.46 : (role == "exit" && !contains(flag, fast) && contains(flag,stable) && pex == [443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pex.48 : (role == "exit" && !contains(flag, fast) && contains(flag,stable) && pex == [80, 443]) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pex.68 : (role == "exit" && !contains(flag, fast) && contains(flag,stable) && pex == [80, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pex.468 : (role == "exit" && !contains(flag, fast) && contains(flag,stable) && pex == [80, 443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagStable.pbe : (role == "exit" && !contains(flag, fast) && contains(flag,stable)) ? this.pbe : 0.0 ,
			
			servers.relays.roleExit.flagFastStable.count : (role == "exit" && contains(flag, fast) && contains(flag,stable)) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.bwa : (role == "exit" && contains(flag, fast) && contains(flag,stable)) ? this.bwa : 0 ,
			servers.relays.roleExit.flagFastStable.bwc : (role == "exit" && contains(flag, fast) && contains(flag,stable)) ? this.bwc : 0 ,
			servers.relays.roleExit.flagFastStable.osv.linux : (role == "exit" && contains(flag, fast) && contains(flag,stable) && osv == "linux") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.osv.darwin : (role == "exit" && contains(flag, fast) && contains(flag,stable) && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.osv.freebsd : (role == "exit" && contains(flag, fast) && contains(flag,stable) && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.osv.windows : (role == "exit" && contains(flag, fast) && contains(flag,stable) && osv == "windows") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.osv.other : (role == "exit" && contains(flag, fast) && contains(flag,stable) && osv == "other") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.010 : (role == "exit" && contains(flag, fast) && contains(flag,stable) && tsv == "010") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.011 : (role == "exit" && contains(flag, fast) && contains(flag,stable) && tsv == "011") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.012 : (role == "exit" && contains(flag, fast) && contains(flag,stable) && tsv == "012") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.020 : (role == "exit" && contains(flag, fast) && contains(flag,stable) && tsv == "020") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.021 : (role == "exit" && contains(flag, fast) && contains(flag,stable) && tsv == "021") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.022 : (role == "exit" && contains(flag, fast) && contains(flag,stable) && tsv == "022") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.023 : (role == "exit" && contains(flag, fast) && contains(flag,stable) && tsv == "023") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.tsv.024 : (role == "exit" && contains(flag, fast) && contains(flag,stable) && tsv == "024") ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pex.4 : (role == "exit" && contains(flag, fast) && contains(flag,stable) && pex == [443]) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pex.6 : (role == "exit" && contains(flag, fast) && contains(flag,stable) && pex == [6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pex.8 : (role == "exit" && contains(flag, fast) && contains(flag,stable) && pex == [80]) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pex.46 : (role == "exit" && contains(flag, fast) && contains(flag,stable) && pex == [443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pex.48 : (role == "exit" && contains(flag, fast) && contains(flag,stable) && pex == [80, 443]) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pex.68 : (role == "exit" && contains(flag, fast) && contains(flag,stable) && pex == [80, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pex.468 : (role == "exit" && contains(flag, fast) && contains(flag,stable) && pex == [80, 443, 6667]) ? 1 : 0 ,
			servers.relays.roleExit.flagFastStable.pbe : (role == "exit" && contains(flag, fast) && contains(flag,stable)) ? this.pbe : 0.0 ,		
			
			// DIR
			servers.relays.roleDir.total.count : (role == "dir") ? 1 : 0 ,
			servers.relays.roleDir.total.bwa : (role == "dir") ? this.bwa : 0 ,
			servers.relays.roleDir.total.bwc : (role == "dir") ? this.bwc : 0 ,
			servers.relays.roleDir.total.osv.linux : (role == "dir" && osv == "linux") ? 1 : 0 ,
			servers.relays.roleDir.total.osv.darwin : (role == "dir" && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleDir.total.osv.freebsd : (role == "dir" && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleDir.total.osv.windows : (role == "dir" && osv == "windows") ? 1 : 0 ,
			servers.relays.roleDir.total.osv.other : (role == "dir" && osv == "other") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.010 : (role == "dir" && tsv == "010") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.011 : (role == "dir" && tsv == "011") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.012 : (role == "dir" && tsv == "012") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.020 : (role == "dir" && tsv == "020") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.021 : (role == "dir" && tsv == "021") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.022 : (role == "dir" && tsv == "022") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.023 : (role == "dir" && tsv == "023") ? 1 : 0 ,
			servers.relays.roleDir.total.tsv.024 : (role == "dir" && tsv == "024") ? 1 : 0 ,		
			
			servers.relays.roleDir.authorityTrue.count : (role == "dir" && flag == "Authority") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.bwa : (role == "dir" && flag == "Authority") ? this.bwa : 0 ,
			servers.relays.roleDir.authorityTrue.bwc : (role == "dir" && flag == "Authority") ? this.bwc : 0 ,
			servers.relays.roleDir.authorityTrue.osv.linux : (role == "dir" && flag == "Authority" && osv == "linux") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.osv.darwin : (role == "dir" && flag == "Authority" && osv == "darwin") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.osv.freebsd : (role == "dir" && flag == "Authority" && osv == "freebsd") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.osv.windows : (role == "dir" && flag == "Authority" && osv == "windows") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.osv.other : (role == "dir" && flag == "Authority" && osv == "other") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.010 : (role == "dir" && flag == "Authority" && tsv == "010") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.011 : (role == "dir" && flag == "Authority" && tsv == "011") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.012 : (role == "dir" && flag == "Authority" && tsv == "012") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.020 : (role == "dir" && flag == "Authority" && tsv == "020") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.021 : (role == "dir" && flag == "Authority" && tsv == "021") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.022 : (role == "dir" && flag == "Authority" && tsv == "022") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.023 : (role == "dir" && flag == "Authority" && tsv == "023") ? 1 : 0 ,
			servers.relays.roleDir.authorityTrue.tsv.024 : (role == "dir" && flag == "Authority" && tsv == "024") ? 1 : 0
		}
		emit ( date , relays );
	};
	
	//	countries 											   in 3 steps, because it has to be gathererd from 2 collections
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
	
	var mapCountries = function() {
		var countries = {
		
		}
		emit ( date , countries );
	};
	
	//	autonomous systems 									   in 3 steps, because it has to be gathererd from 2 collections
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
	
	
	var mapAutosys = function() {
		var autosys = {
		
		}
		emit ( date , autosys );
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
	var resultClients = db.clientsImport.mapReduce (			
		mapClients,
		reduceFacts,
		{ 
			out: { 
				reduce : "factsTemp", 						// the temporary fact collection, with _id:value structure
				nonAtomic : true						// prevents locking of the db during post-processing
			} ,			
			query : { "date" : myDate } ,				// limit aggregation to myDate
			// sort										   sorts the input documents for fewer reduce operations
			jsMode: true ,								// check if feasable! is faster, but needs more memory
			finalize : finalizeFacts
		}
	);
	
	// servers 											   in 3 steps, because it has to be gathererd from 2 collections 
	var resultServersRelay = db.relaysImport.mapReduce (			
		mapServersRelay,
		reduceFacts,
		{ 
			out: { 
				reduce : "serversTemp",
				nonAtomic : true
			} ,			
			query : { "date" : myDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	var resultServersBridge = db.bridgesImport.mapReduce (			
		mapServersBridge,
		reduceFacts,
		{ 
			out: { 
				reduce : "serversTemp",
				nonAtomic : true
			} ,			
			query : { "date" : myDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	var resultServers = db.serversTemp.mapReduce (			
		mapServers,
		reduceFacts,
		{ 
			out: { 
				reduce : "factsTemp",
				nonAtomic : true
			} ,			
			query : { "date" : myDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	// bridges
	var resultBridges = db.bridgesImport.mapReduce (			
		mapBridges,
		reduceFacts,
		{ 
			out: { 
				reduce : "factsTemp",
				nonAtomic : true
			} ,			
			query : { "date" : myDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	// relays
	var resultRelays = db.relaysImport.mapReduce (			
		mapBridges,
		reduceFacts,
		{ 
			out: { 
				reduce : "factsTemp",
				nonAtomic : true
			} ,			
			query : { "date" : myDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	// countries 											   in 3 steps, because it has to be gathererd from 2 collections 
	var resultCountriesClient = db.clientsImport.mapReduce (			
		mapCountriesClient,
		reduceFacts,
		{ 
			out: { 
				reduce : "countriesTemp",
				nonAtomic : true
			} ,			
			query : { "date" : myDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	var resultCountriesRelay = db.relaysImport.mapReduce (			
		mapCountriesRelay,
		reduceFacts,
		{ 
			out: { 
				reduce : "countriesTemp",
				nonAtomic : true
			} ,			
			query : { "date" : myDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	var resultCountries = db.countriesTemp.mapReduce (			
		mapCountries,
		reduceFacts,
		{ 
			out: { 
				reduce : "factsTemp",
				nonAtomic : true
			} ,			
			query : { "date" : myDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	// autonomous systems 									   in 3 steps, because it has to be gathererd from 2 collections 
	var resultAutosysClient = db.clientsImport.mapReduce (			
		mapAutosysClient,
		reduceFacts,
		{ 
			out: { 
				reduce : "autosysTemp",
				nonAtomic : true
			} ,			
			query : { "date" : myDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	var resultAutosysRelay = db.relaysImport.mapReduce (			
		mapAutosysRelay,
		reduceFacts,
		{ 
			out: { 
				reduce : "autosysTemp",
				nonAtomic : true
			} ,			
			query : { "date" : myDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
	var resultAutosys = db.autosysTemp.mapReduce (			
		mapAutosys,
		reduceFacts,
		{ 
			out: { 
				reduce : "factsTemp",
				nonAtomic : true
			} ,			
			query : { "date" : myDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
	
}



