//	MAP  /////////////////////////////////////////////////////////////////////////////////////////////////////
var mapRelays = function() {
	var mapping = {
		servers : {
			relays : {
				roleAll : {
					total : {
						count : 1 ,
						bwa : this.bwa ,
						bwc : this.bwc ,
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
						pbr : this.pbr
					} ,
					flagNone : {
						count : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1) ? 1 : 0 ,
						bwa : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1) ? this.bwa : 0 ,
						bwc : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1) ? this.bwc : 0 ,
						osv : {
							linux : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.osv == "windows") ? 1 : 0 ,
							other : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.osv == "other") ? 1 : 0 
						} ,
						tsv : {
							v010 : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "024") ? 1 : 0
						} ,
						pbr : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1) ? this.pbr : 0.0
					} ,
					flagStable : {
						count : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1) ? 1 : 0 ,
						bwa : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1) ? this.bwa : 0 ,
						bwc : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1) ? this.bwc : 0 ,
						osv : {
							linux : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.osv == "windows") ? 1 : 0 ,
							other : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "024") ? 1 : 0
						} ,
						pbr : (this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1) ? this.pbr : 0.0
					} ,
					flagFast : {
						count : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1) ? 1 : 0 ,
						bwa : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1) ? this.bwa : 0 ,
						bwc : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1) ? this.bwc : 0 ,
						osv : {
							linux : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.osv == "windows") ? 1 : 0 ,
							other : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "024") ? 1 : 0
						} ,
						pbr : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1) ? this.pbr : 0.0
					} ,
					flagFastStable : {
						count : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1) ? 1 : 0 ,
						bwa : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1) ? this.bwa : 0 ,
						bwc : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1) ? this.bwc : 0 ,
						osv : {	
							linux : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.osv == "windows") ? 1 : 0 ,
							other : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "024") ? 1 : 0
						} ,
						pbr : (this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1) ? this.pbr : 0.0
					}
				} ,
				
				// GUARD
				roleGuard : {
					total : {
						count : (this.role == "guard") ? 1 : 0 ,
						bwa : (this.role == "guard") ? this.bwa : 0 ,
						bwc : (this.role == "guard") ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "guard" && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "guard" && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "guard" && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "guard" && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "guard" && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "guard" && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "guard" && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "guard" && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "guard" && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "guard" && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "guard" && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "guard" && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "guard" && this.tsv == "024") ? 1 : 0
						} ,
						pbg : (this.role == "guard") ? this.pbg : 0.0
					} ,
					flagNone : {
						count : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1) ? 1 : 0 ,
						bwa : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1) ? this.bwa : 0 ,
						bwc : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "024") ? 1 : 0
						} ,
						pbg : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1) ? this.pbg : 0.0
					} ,
					flagStable : {
						count : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1) ? 1 : 0 ,
						bwa : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1) ? this.bwa : 0 ,
						bwc : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "024") ? 1 : 0
						} ,
						pbg : (this.role == "guard" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1) ? this.pbg : 0.0
					} ,
					flagFast : {
						count : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1) ? 1 : 0 ,
						bwa : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1) ? this.bwa : 0 ,
						bwc : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "024") ? 1 : 0
						} ,
						pbg : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1) ? this.pbg : 0.0
					} ,
					flagFastStable : {
						count : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1) ? 1 : 0 ,
						bwa : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1) ? this.bwa : 0 ,
						bwc : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "024") ? 1 : 0
						} ,
						pbg : (this.role == "guard" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1) ? this.pbg : 0.0
					}
				} ,
				
				// MIDDLE
				roleMiddle : {
					total : {
						count : (this.role == "middle") ? 1 : 0 ,
						bwa : (this.role == "middle") ? this.bwa : 0 ,
						bwc : (this.role == "middle") ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "middle" && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "middle" && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "middle" && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "middle" && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "middle" && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "middle" && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "middle" && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "middle" && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "middle" && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "middle" && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "middle" && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "middle" && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "middle" && this.tsv == "024") ? 1 : 0 
						} ,
						pbm : (this.role == "middle") ? this.pbm : 0.0
					} ,
					flagNone : {
						count : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1) ? 1 : 0 ,
						bwa : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1) ? this.bwa : 0 ,
						bwc : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "024") ? 1 : 0
						} ,
						pbm : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1) ? this.pbm : 0.0
					} ,
					flagStable : {
						count : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1) ? 1 : 0 ,
						bwa : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1) ? this.bwa : 0 ,
						bwc : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "024") ? 1 : 0
						} ,
						pbm : (this.role == "middle" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1) ? this.pbm : 0.0
					} ,
					flagFast : {
						count : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1) ? 1 : 0 ,
						bwa : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1) ? this.bwa : 0 ,
						bwc : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "024") ? 1 : 0
						} ,
						pbm : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1) ? this.pbm : 0.0
					} ,
					flagFastStable : {
						count : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1) ? 1 : 0 ,
						bwa : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1) ? this.bwa : 0 ,
						bwc : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "024") ? 1 : 0
						} ,
						pbm : (this.role == "middle" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1) ? this.pbm : 0.0
					}
				} ,
		
				// EXIT
				roleExit : {
					total : {
						count : (this.role == "exit") ? 1 : 0 ,
						bwa : (this.role == "exit") ? this.bwa : 0 ,
						bwc : (this.role == "exit") ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "exit" && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "exit" && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "exit" && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "exit" && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "exit" && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "exit" && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "exit" && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "exit" && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "exit" && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "exit" && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "exit" && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "exit" && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "exit" && this.tsv == "024") ? 1 : 0
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
						pbe : (this.role == "exit") ? this.pbe : 0.0
					} ,
					flagNone : {
						count : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1) ? 1 : 0 ,
						bwa : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1) ? this.bwa : 0 ,
						bwc : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.tsv == "024") ? 1 : 0
						} ,
						pex : {
							p4 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.pex.indexOf(443) > -1) ? 1 : 0 ,
							p6 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.pex.indexOf(6667) > -1) ? 1 : 0 ,
							p8 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.pex.indexOf(80) > -1) ? 1 : 0 ,
							p46 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1) ? 1 : 0 ,
							p48 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1) ? 1 : 0 ,
							p68 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.pex.indexOf(80) > -1 && this.pex.indexOf(6667) > -1) ? 1 : 0 ,
							p468 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1 && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1) ? 1 : 0
						} ,
						pbe : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') == -1) ? this.pbe : 0.0
					} ,
					flagFast : {
						count : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1) ? 1 : 0 ,
						bwa : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1) ? this.bwa : 0 ,
						bwc : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.tsv == "024") ? 1 : 0
						} ,
						pex : {
							p4 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.pex.indexOf(443) > -1) ? 1 : 0 ,
							p6 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.pex.indexOf(6667) > -1) ? 1 : 0 ,
							p8 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.pex.indexOf(80) > -1) ? 1 : 0 ,
							p46 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1) ? 1 : 0 ,
							p48 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1) ? 1 : 0 ,
							p68 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.pex.indexOf(80) > -1 && this.pex.indexOf(6667) > -1) ? 1 : 0 ,
							p468 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1 && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1) ? 1 : 0
						} ,
						pbe : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') == -1) ? this.pbe : 0.0
					} ,
					flagStable : {
						count : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1) ? 1 : 0 ,
						bwa : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1) ? this.bwa : 0 ,
						bwc : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.tsv == "024") ? 1 : 0
						} ,
						pex : {
							p4 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.pex.indexOf(443) > -1) ? 1 : 0 ,
							p6 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.pex.indexOf(6667) > -1) ? 1 : 0 ,
							p8 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.pex.indexOf(80) > -1) ? 1 : 0 ,
							p46 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1) ? 1 : 0 ,
							p48 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1) ? 1 : 0 ,
							p68 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.pex.indexOf(80) > -1 && this.pex.indexOf(6667) > -1) ? 1 : 0 ,
							p468 : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1 && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1) ? 1 : 0
						} ,
						pbe : (this.role == "exit" && this.flag.indexOf('fast') == -1 && this.flag.indexOf('stable') > -1) ? this.pbe : 0.0
					} ,
					flagFastStable : {
						count : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1) ? 1 : 0 ,
						bwa : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1) ? this.bwa : 0 ,
						bwc : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.tsv == "024") ? 1 : 0
						} ,
						pex : {
							p4 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.pex.indexOf(443) > -1) ? 1 : 0 ,
							p6 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.pex.indexOf(6667) > -1) ? 1 : 0 ,
							p8 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.pex.indexOf(80) > -1) ? 1 : 0 ,
							p46 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1) ? 1 : 0 ,
							p48 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1) ? 1 : 0 ,
							p68 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.pex.indexOf(80) > -1 && this.pex.indexOf(6667) > -1) ? 1 : 0 ,
							p468 : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1 && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1) ? 1 : 0
						} ,
						pbe : (this.role == "exit" && this.flag.indexOf('fast') > -1 && this.flag.indexOf('stable') > -1) ? this.pbe : 0.0	
					}
				} ,
		
				// DIR
				roleDir : {
					total : {
						count : (this.role == "dir") ? 1 : 0 ,
						bwa : (this.role == "dir") ? this.bwa : 0 ,
						bwc : (this.role == "dir") ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "dir" && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "dir" && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "dir" && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "dir" && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "dir" && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "dir" && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "dir" && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "dir" && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "dir" && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "dir" && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "dir" && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "dir" && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "dir" && this.tsv == "024") ? 1 : 0
						}		
					} ,
					authorityTrue : {
						count : (this.role == "dir" && this.flag == "Authority") ? 1 : 0 ,
						bwa : (this.role == "dir" && this.flag == "Authority") ? this.bwa : 0 ,
						bwc : (this.role == "dir" && this.flag == "Authority") ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "dir" && this.flag == "Authority" && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "dir" && this.flag == "Authority" && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "dir" && this.flag == "Authority" && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "dir" && this.flag == "Authority" && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "dir" && this.flag == "Authority" && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "dir" && this.flag == "Authority" && this.tsv == "024") ? 1 : 0
						}
					}
				}
			}
		}
	};
	emit( this.date , mapping );
};

//	REDUCE  //////////////////////////////////////////////////////////////////////////////////////////////////
var reduceRelays = function ( key, values ) {
	var fact = {
		servers : {
			relays : {
				roleAll : {
					total : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						pbr : 0
					} ,
					flagNone : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						pbr : 0
					} ,
					flagStable : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						pbr : 0
					} ,
					flagFast : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						pbr : 0
					} ,
					flagFastStable : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						pbr : 0
					}
				} ,
				
				// GUARD
				roleGuard : {
					total : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						pbg : 0
					} ,
					flagNone : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						pbg : 0
					} ,
					flagStable : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						pbg : 0
					} ,
					flagFast : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						pbg : 0
					} ,
					flagFastStable : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						pbg : 0
					}
				} ,
		
				// MIDDLE
				roleMiddle : {
					total : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						pbm : 0
					} ,
					flagNone : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						pbm : 0
					} ,
					flagStable : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						pbm : 0
					} ,
					flagFast : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						pbm : 0
					} ,
					flagFastStable : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						pbm : 0
					}
				} ,
		
				// EXIT
				roleExit : {
					total : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						pbe : 0
					} ,
					flagNone : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						pbe : 0
					} ,
					flagFast : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						pbe : 0
					} ,
					flagStable : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						pbe : 0
					} ,
					flagFastStable : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						pbe : 0
					}
				} ,
		
				// DIR
				roleDir : {
					total : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						}
					} ,
					authorityTrue : {
						count : 0 ,
						bwa : 0 ,
						bwc : 0 ,
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
						}
					}
				}
			}
		}
	};	
	values.forEach( function(v) {
        fact.servers.relays.roleAll.total.count += 1 ;
    //    fact.servers.relays.roleAll.total.count += v.servers.relays.roleAll.total.count ;
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
		fact.servers.relays.roleAll.flagFastStable.pbr += v.servers.relays.roleAll.flagFastStable.pbr ;
		
		// GUARD
		fact.servers.relays.roleGuard.total.count += v.servers.relays.roleGuard.total.count ;
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
		
		// MIDDLE
		fact.servers.relays.roleMiddle.total.count += v.servers.relays.roleMiddle.total.count ;
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
		
		// EXIT
		fact.servers.relays.roleExit.total.count += v.servers.relays.roleExit.total.count ;
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
		
		// DIR
		fact.servers.relays.roleDir.total.count += v.servers.relays.roleDir.total.count ;
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
	});
	return fact;
};

//	BINDING MAP AND REDUCE  //////////////////////////////////////////////////////////////////////////////////
var aggregateRelays = function(theDate) {
	db.importRelays.mapReduce (			
		mapRelays,
		reduceRelays,
		{ 
			out: { 
				reduce : "tempFacts" //,
			//	nonAtomic : true
			} ,			
			query : { "date" : theDate } //,
			//	jsMode: true ,
			//	finalize : finalizeFacts
		}
	);
};

//	EXECUTION  ///////////////////////////////////////////////////////////////////////////////////////////////
var date = "2013-04-03 22" ;
var run = function(date) {
/*	housekeeping	*/
    db.tempFacts.remove();
/*	aggregation	*/
	aggregateRelays(date);
};
run(date);
