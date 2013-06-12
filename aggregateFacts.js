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

aggregateFacts(date) {									

	var myDate = date ;
	var fact ;

	var mapFacts = function() {
		var key = myDate;
		var value = {
			// CLIENTS
			
			clients.total : this.cr + this.cb ,
			clients.atBridges : this.cb ,
			clients.atRelays : this.cr ,
			clients.cip4 : this.cip,v4 ,
			clients.cip6 : this.cip.v6 ,
			clients.cptObfs2 : this.cpt.obfs2 ,
			clients.cptObfs3 : this.cpt.obfs3 ,
			clients.cptOr : this.cpt.or ,
			clients.cptUnknown : this.cpt.unknown ,
			
			// SERVERS
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
			servers.total.tsv.024 : (tsv == "024") ? 1 : 0 ,
			
			
			// BRIDGES
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
			servers.bridges.brtObfs23.tsv.024 : (brt == [obfs23, obfs3] && tsv == "024") ? 1 : 0 ,
			
			
			// RELAYS
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
			servers.relays.roleDir.authorityTrue.tsv.024 : (role == "dir" && flag == "Authority" && tsv == "024") ? 1 : 0 ,		
			
			// COUNTRIES
			
			
			
			// AUTOSYS
			
			
			
			
		};
		emit ( key , value );
	};
	
	
	var reduceFacts = function ( key, value ) {
		fact = {										
			
		};
		
		// gerödel
		
		return fact;
	};
	
	var finalizeFacts = function ( key, fact ) {
														// e.g. some averages
	}
	
	var resultFacts = db.import.mapReduce (				// statt import eventuell relays, bridges, clients
		mapFacts,
		reduceFacts,
		{ 
			out: { merge : "facts" } ,					// oder "reduce" statt "merge"?
														/ irgendwie überschreibt merge eher
														// während reduce eher kombiniert
														// http://stackoverflow.com/questions/5681851/mongodb-combine-data-from-multiple-collections-in-to-one-how/8746805#8746805
			query : { "date" : myDate } ,				// limit aggregation to myDate
			// sort										    Optional. Sorts the input documents. This option is useful for optimization. For example, specify the sort key to be the same as the emit key so that there are fewer reduce operations.
			jsMode: true ,								// check if feasable! is faster, but needs more memory
			finalize : factsFinalize
		}
	);
	
}




**probleme**
* ich muss documente in der facts collection partiell updaten können
	1) weil manchmal daten sich ändern oder nachgeliefert werden
	2) weil sie so umfangreich sind, dass es tendenziell zu komplex und ineffizient wäre, sie in einem rutsch zu erstellen. 
	3) weil die import-daten für clients, relays und bridges in verschiedenen collections stehen
	
	(3) kann mit reduce erschlagen werden
	http://stackoverflow.com/questions/5681851/mongodb-combine-data-from-multiple-collections-in-to-one-how
	http://tebros.com/2011/07/using-mongodb-mapreduce-to-join-2-collections/
	
	(1) + (2): wahrscheinlich muss dazu erst ein neues document erzeugt und dann ein update von diesem in die facts collection
	The update() method can either replace the existing document with the new document or update specific fields in the existing document.
	If the <update> argument contains fields not currently in the document, the update() method adds the new fields to the document.
	If you set the upsert option in the <options> argument to true or 1 and no existing document match the <query> argument, the update() method can insert a new document into the collection.
	
* grössen
	ein einzelnes emit result document darf maximal 8 mb gross sein

* diese verschissene mongodb mapreduce gibt ergebnisse nicht als flaches document, sondern als
	_id:value paar zurück. 
	das erzwingt einen zusätzlichen schritt der umformung:
	http://stackoverflow.com/questions/7257989/in-mongodb-mapreduce-how-can-i-flatten-the-values-object

* wenn verschiedne collections mit unterschiedlichen feldern in eine ziel_collection aggregiert werden sollen, müssen entweder alle map-funktionen alle felder mit jeweils sinnvollen angaben enthalten (also 0 oder null o.ä. wenn die ausgangs-collection die felder nicht enthält), doer die reduce funktion muss den fall, dass ein feld in der map nicht auftaucht, sinnvoll abfangen (also 1* fragen, ob die map das feld übergibt und 2* wenn ja, dann es überehmen oder 3* wenn nein dann es anlegen (mit leerem inhalt, oder 0, oder null - je nachdem)
	
/* http://docs.mongodb.org/manual/tutorial/map-reduce-examples/ */


// define a map function
var myMap = function() {
	emit (	
		this.date,								// this always refers to the instance document 
												// the map function is currently processing
		{	
			guards: this.guards,				// gibt ein document zurück: "{guards: int}"
			some: this.else,
			and: 1
		}
	);
};

// oder auch emit als teil einer schleife
var myMap2 = function() {
	for (var idx = 0; idx < this.items.length; idx++) {
    	var key = this.items[idx].sku;
		var value = {
			count: 1,
	 		qty: this.items[idx].qty
	 	};
		emit (key, value);
	}
};



the type of the return object must be identical to the type of the value emitted by the map function to ensure that the following operations is true:
http://docs.mongodb.org/manual/reference/method/db.collection.mapReduce/#requirements-for-the-reduce-function

// define a corresponding reduce function
var myReduce = function ( key, valuesArray ) {	// key ist das erste element aus emit
												// valuesArray ein array der zweiten elemente über alle keys
  var sum = 0;
  values.forEach(function(guard) {
    sum += guards.count;						// guards.count gibt es garnicht, nur so als beispiel
  });
  return {guards: sum};
};


var myResult = db.importCollection.mapReduce ( 
	myMap, 
	myReduce, 
	{out: "facts"} 
);


/*
import collection index 
	nach zeit
	
mapreduce tage+stunden-weise anstossen
		zum einen ist das resourcenschonender
		zum anderen können dann updates leichter eingearbeitet werden
	query
		zeitabfrage
		tag und stunde,
		wenn keine stunde verfügbar (clients collection), dann nur tag
		
out : { 
		merge : collectionName ,			// 'reduce' statt 'merge' könnte zur folge haben, dass alte und   
											// neue werte aufaddiert weredn, statt dass die alten durch  
											// die neuen ersetzt werden
		nonAtomic : true					// prevents locking of the db during post-processing
}


wo immer die import daten einen array enthalten, muss ich diesen in der mapFunction durchlaufen, um emit mit den passenden key:values zu befüllen (http://docs.mongodb.org/manual/reference/method/db.collection.mapReduce/#calculate-order-and-total-quantity-with-average-quantity-per-item)

mit finalize kann man schön durchschnitte u.ä. errechnen
http://docs.mongodb.org/manual/reference/method/db.collection.mapReduce/#calculate-order-and-total-quantity-with-average-quantity-per-item

Subsequent Incremental Map-Reduce
http://docs.mongodb.org/manual/tutorial/perform-incremental-map-reduce/

*/



// http://stackoverflow.com/questions/5681851/mongodb-combine-data-from-multiple-collections-in-to-one-how/8746805#8746805
// merging 2 collections
// intercepting non-existant fields in reduce step 
var mapUsers, mapComments, reduce;
db.users_comments.remove();

// setup sample data - wouldn't actually use this in production
db.users.remove();
db.comments.remove();
db.users.save({firstName:"Rich",lastName:"S",gender:"M",country:"CA",age:"18"});
db.users.save({firstName:"Rob",lastName:"M",gender:"M",country:"US",age:"25"});
db.users.save({firstName:"Sarah",lastName:"T",gender:"F",country:"US",age:"13"});
var users = db.users.find();
db.comments.save({userId: users[0]._id, "comment": "Hey, what's up?", created: new ISODate()});
db.comments.save({userId: users[1]._id, "comment": "Not much", created: new ISODate()});
db.comments.save({userId: users[0]._id, "comment": "Cool", created: new ISODate()});
// end sample data setup

mapUsers = function() {
    var values = {
        country: this.country,
        gender: this.gender,
        age: this.age
    };
    emit(this._id, values);
};
mapComments = function() {
    var values = {
        commentId: this._id,
        comment: this.comment,
        created: this.created
    };
    emit(this.userId, values);
};
reduce = function(k, values) {
    var result = {}, 
    commentFields = {
        "commentId": '', 
        "comment": '',
        "created": ''
    };
    values.forEach(function(value) {
        var field;
        if ("comment" in value) {
            if (!("comments" in result)) {
                result.comments = [];
            }
            result.comments.push(value);
        } else if ("comments" in value) {
            if (!("comments" in result)) {
                result.comments = [];
            }
            result.comments.push.apply(result.comments, value.comments);
        }
        for (field in value) {
            if (value.hasOwnProperty(field) && !(field in commentFields)) {
                result[field] = value[field];
            }
        }
    });
    return result;
};
db.users.mapReduce(mapUsers, reduce, {"out": {"reduce": "users_comments"}});
db.comments.mapReduce(mapComments, reduce, {"out": {"reduce": "users_comments"}});
db.users_comments.find().pretty(); // see the resulting collection





// http://stackoverflow.com/questions/9696940/merging-two-collections-in-mongodb/9723549#9723549
// merging 2 collections
// adding empty fields in map step
var mapDetails = function(){
    var output = {studentid: this.studentid, classes_1: [], classes_2: [], year: this.year, overall: 0, subscore: 0}
    if (this.year == 1) {
        output.classes_1 = this.classes;
    }
    if (this.year == 2) {
        output.classes_2 = this.classes;
    }
    emit(this.studentid, output);
};

var mapGpas = function() {
    emit(this.studentid, {studentid: this.studentid, classes_1: [], classes_2: [], year: 0, overall: this.overall, subscore: this.subscore});		// interessant, dass er year hier einführt, obwohl er es nur in der anderen map benötigt und im reduce step garnicht mehr benutzt
};

var r = function(key, values) {
    var outs = { studentid: "0", classes_1: [], classes_2: [], overall: 0, subscore: 0};

    values.forEach(function(v){
        outs.studentid = v.studentid;
        v.classes_1.forEach(function(class){if(outs.classes_1.indexOf(class)==-1){outs.classes_1.push(class)}})
        v.classes_2.forEach(function(class){if(outs.classes_2.indexOf(class)==-1){outs.classes_2.push(class)}})

        if (v.year == 0) {
            outs.overall = v.overall;
            outs.subscore = v.subscore;
        }
    });
    return outs;
};

res = db.details.mapReduce(mapDetails, r, {out: {reduce: 'joined'}})
res = db.gpas.mapReduce(mapGpas, r, {out: {reduce: 'joined'}})
