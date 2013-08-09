//	MAP  /////////////////////////////////////////////////////////////////////////////////////////////////////
var mapBridges = function() {
/*															TODO	remove after testing
    print("XXXX");
    for (var key in this) {
       print("YYY");
       print(key);
       print(this[key]);
    }
    print(this.brt);
*/	
	var map = {
		date: this.date ,
		servers : {
			bridges : {
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
					}
				} ,
				brpEmail : {
					count : (this.brp == "email") ? 1 : 0 ,
					bwa : (this.brp == "email") ? this.bwa : 0 ,
					bwc : (this.brp == "email") ? this.bwc : 0 ,
					osv : {
						linux : (this.brp == "email" && this.osv == "linux") ? 1 : 0 ,
						darwin : (this.brp == "email" && this.osv == "darwin") ? 1 : 0 ,
						freebsd : (this.brp == "email" && this.osv == "freebsd") ? 1 : 0 ,
						windows : (this.brp == "email" && this.osv == "windows") ? 1 : 0 ,
						other : (this.brp == "email" && this.osv == "other") ? 1 : 0
					} ,
					tsv : {
						v010 : (this.brp == "email" && this.tsv == "010") ? 1 : 0 ,
						v011 : (this.brp == "email" && this.tsv == "011") ? 1 : 0 ,
						v012 : (this.brp == "email" && this.tsv == "012") ? 1 : 0 ,
						v020 : (this.brp == "email" && this.tsv == "020") ? 1 : 0 ,
						v021 : (this.brp == "email" && this.tsv == "021") ? 1 : 0 ,
						v022 : (this.brp == "email" && this.tsv == "022") ? 1 : 0 ,
						v023 : (this.brp == "email" && this.tsv == "023") ? 1 : 0 ,
						v024 : (this.brp == "email" && this.tsv == "024") ? 1 : 0
					}
				} ,
				brpHttps : {
					count : (this.brp == "https") ? 1 : 0 ,
					bwa : (this.brp == "https") ? this.bwa : 0 ,
					bwc : (this.brp == "https") ? this.bwc : 0 ,
					osv : {
						linux : (this.brp == "https" && this.osv == "linux") ? 1 : 0 ,
						darwin : (this.brp == "https" && this.osv == "darwin") ? 1 : 0 ,
						freebsd : (this.brp == "https" && this.osv == "freebsd") ? 1 : 0 ,
						windows : (this.brp == "https" && this.osv == "windows") ? 1 : 0 ,
						other : (this.brp == "https" && this.osv == "other") ? 1 : 0
					} ,
					tsv : {
						v010 : (this.brp == "https" && this.tsv == "010") ? 1 : 0 ,
						v011 : (this.brp == "https" && this.tsv == "011") ? 1 : 0 ,
						v012 : (this.brp == "https" && this.tsv == "012") ? 1 : 0 ,
						v020 : (this.brp == "https" && this.tsv == "020") ? 1 : 0 ,
						v021 : (this.brp == "https" && this.tsv == "021") ? 1 : 0 ,
						v022 : (this.brp == "https" && this.tsv == "022") ? 1 : 0 ,
						v023 : (this.brp == "https" && this.tsv == "023") ? 1 : 0 ,
						v024 : (this.brp == "https" && this.tsv == "024") ? 1 : 0
					}
				} ,
				brpOther : {
					count : (this.brp == "other") ? 1 : 0 ,
					bwa : (this.brp == "other") ? this.bwa : 0 ,
					bwc : (this.brp == "other") ? this.bwc : 0 ,
					osv : {
						linux : (this.brp == "other" && this.osv == "linux") ? 1 : 0 ,
						darwin : (this.brp == "other" && this.osv == "darwin") ? 1 : 0 ,
						freebsd : (this.brp == "other" && this.osv == "freebsd") ? 1 : 0 ,
						windows : (this.brp == "other" && this.osv == "windows") ? 1 : 0 ,
						other : (this.brp == "other" && this.osv == "other") ? 1 : 0
					} ,
					tsv : {
						v010 : (this.brp == "other" && this.tsv == "010") ? 1 : 0 ,
						v011 : (this.brp == "other" && this.tsv == "011") ? 1 : 0 ,
						v012 : (this.brp == "other" && this.tsv == "012") ? 1 : 0 ,
						v020 : (this.brp == "other" && this.tsv == "020") ? 1 : 0 ,
						v021 : (this.brp == "other" && this.tsv == "021") ? 1 : 0 ,
						v022 : (this.brp == "other" && this.tsv == "022") ? 1 : 0 ,
						v023 : (this.brp == "other" && this.tsv == "023") ? 1 : 0 ,
						v024 : (this.brp == "other" && this.tsv == "024") ? 1 : 0
					}
				} ,
				breTrue : {
					count : (this.bre == "true") ? 1 : 0 ,
					bwa : (this.bre == "true") ? this.bwa : 0 ,
					bwc : (this.bre == "true") ? this.bwc : 0 ,
					osv : {
						linux : (this.bre == "true" && this.osv == "linux") ? 1 : 0 ,
						darwin : (this.bre == "true" && this.osv == "darwin") ? 1 : 0 ,
						freebsd : (this.bre == "true" && this.osv == "freebsd") ? 1 : 0 ,
						windows : (this.bre == "true" && this.osv == "windows") ? 1 : 0 ,
						other : (this.bre == "true" && this.osv == "other") ? 1 : 0
					} ,
					tsv : {
						v010 : (this.bre == "true" && this.tsv == "010") ? 1 : 0 ,
						v011 : (this.bre == "true" && this.tsv == "011") ? 1 : 0 ,
						v012 : (this.bre == "true" && this.tsv == "012") ? 1 : 0 ,
						v020 : (this.bre == "true" && this.tsv == "020") ? 1 : 0 ,
						v021 : (this.bre == "true" && this.tsv == "021") ? 1 : 0 ,
						v022 : (this.bre == "true" && this.tsv == "022") ? 1 : 0 ,
						v023 : (this.bre == "true" && this.tsv == "023") ? 1 : 0 ,
						v024 : (this.bre == "true" && this.tsv == "024") ? 1 : 0
					}
				} ,
				brtObfs2 : {
					count : (this.brt.indexOf('obfs2') > -1) ? 1 : 0 ,
					bwa : (this.brt.indexOf('obfs2') > -1) ? this.bwa : 0 ,
					bwc : (this.brt.indexOf('obfs2') > -1) ? this.bwc : 0  ,
					osv : {
						linux : (this.brt.indexOf('obfs2') > -1 && this.osv == "linux") ? 1 : 0 ,
						darwin : (this.brt.indexOf('obfs2') > -1 && this.osv == "darwin") ? 1 : 0 ,
						freebsd : (this.brt.indexOf('obfs2') > -1 && this.osv == "freebsd") ? 1 : 0 ,
						windows : (this.brt.indexOf('obfs2') > -1 && this.osv == "windows") ? 1 : 0 ,
						other : (this.brt.indexOf('obfs2') > -1 && this.osv == "other") ? 1 : 0
					} ,
					tsv : {
						v010 : (this.brt.indexOf('obfs2') > -1 && this.tsv == "010") ? 1 : 0 ,
						v011 : (this.brt.indexOf('obfs2') > -1 && this.tsv == "011") ? 1 : 0 ,
						v012 : (this.brt.indexOf('obfs2') > -1 && this.tsv == "012") ? 1 : 0 ,
						v020 : (this.brt.indexOf('obfs2') > -1 && this.tsv == "020") ? 1 : 0 ,
						v021 : (this.brt.indexOf('obfs2') > -1 && this.tsv == "021") ? 1 : 0 ,
						v022 : (this.brt.indexOf('obfs2') > -1 && this.tsv == "022") ? 1 : 0 ,
						v023 : (this.brt.indexOf('obfs2') > -1 && this.tsv == "023") ? 1 : 0 ,
						v024 : (this.brt.indexOf('obfs2') > -1 && this.tsv == "024") ? 1 : 0
					}
				} ,
				brtObfs3 : {
					count : (this.brt.indexOf('obfs3') > -1) ? 1 : 0 ,
					bwa : (this.brt.indexOf('obfs3') > -1) ? this.bwa : 0 ,
					bwc : (this.brt.indexOf('obfs3') > -1) ? this.bwc : 0 ,
					osv : {
						linux : (this.brt.indexOf('obfs3') > -1 && this.osv == "linux") ? 1 : 0 ,
						darwin : (this.brt.indexOf('obfs3') > -1 && this.osv == "darwin") ? 1 : 0 ,
						freebsd : (this.brt.indexOf('obfs3') > -1 && this.osv == "freebsd") ? 1 : 0 ,
						windows : (this.brt.indexOf('obfs3') > -1 && this.osv == "windows") ? 1 : 0 ,
						other : (this.brt.indexOf('obfs3') > -1 && this.osv == "other") ? 1 : 0
					} ,
					tsv : {
						v010 : (this.brt.indexOf('obfs3') > -1 && this.tsv == "010") ? 1 : 0 ,
						v011 : (this.brt.indexOf('obfs3') > -1 && this.tsv == "011") ? 1 : 0 ,
						v012 : (this.brt.indexOf('obfs3') > -1 && this.tsv == "012") ? 1 : 0 ,
						v020 : (this.brt.indexOf('obfs3') > -1 && this.tsv == "020") ? 1 : 0 ,
						v021 : (this.brt.indexOf('obfs3') > -1 && this.tsv == "021") ? 1 : 0 ,
						v022 : (this.brt.indexOf('obfs3') > -1 && this.tsv == "022") ? 1 : 0 ,
						v023 : (this.brt.indexOf('obfs3') > -1 && this.tsv == "023") ? 1 : 0 ,
						v024 : (this.brt.indexOf('obfs3') > -1 && this.tsv == "024") ? 1 : 0
					}
				} ,
				brtObfs23 : {
					count : (this.brt.indexOf('obfs2') > -1 && this.brt.indexOf('obfs3') > -1) ? 1 : 0 ,
					bwa : (this.brt.indexOf('obfs2') > -1 && this.brt.indexOf('obfs3') > -1) ? this.bwa : 0 ,
					bwc : (this.brt.indexOf('obfs2') > -1 && this.brt.indexOf('obfs3') > -1) ? this.bwc : 0 ,
					osv : {
						linux : (this.brt.indexOf('obfs2') > -1 && this.brt.indexOf('obfs3') > -1 && this.osv == "linux") ? 1 : 0 ,
						darwin : (this.brt.indexOf('obfs2') > -1 && this.brt.indexOf('obfs3') > -1 && this.osv == "darwin") ? 1 : 0 ,
						freebsd : (this.brt.indexOf('obfs2') > -1 && this.brt.indexOf('obfs3') > -1 && this.osv == "freebsd") ? 1 : 0 ,
						windows : (this.brt.indexOf('obfs2') > -1 && this.brt.indexOf('obfs3') > -1 && this.osv == "windows") ? 1 : 0 ,
						other : (this.brt.indexOf('obfs2') > -1 && this.brt.indexOf('obfs3') > -1 && this.osv == "other") ? 1 : 0
					} ,
					tsv : {
						v010 : (this.brt.indexOf('obfs2') > -1 && this.brt.indexOf('obfs3') > -1 && this.tsv == "010") ? 1 : 0 ,
						v011 : (this.brt.indexOf('obfs2') > -1 && this.brt.indexOf('obfs3') > -1 && this.tsv == "011") ? 1 : 0 ,
						v012 : (this.brt.indexOf('obfs2') > -1 && this.brt.indexOf('obfs3') > -1 && this.tsv == "012") ? 1 : 0 ,
						v020 : (this.brt.indexOf('obfs2') > -1 && this.brt.indexOf('obfs3') > -1 && this.tsv == "020") ? 1 : 0 ,
						v021 : (this.brt.indexOf('obfs2') > -1 && this.brt.indexOf('obfs3') > -1 && this.tsv == "021") ? 1 : 0 ,
						v022 : (this.brt.indexOf('obfs2') > -1 && this.brt.indexOf('obfs3') > -1 && this.tsv == "022") ? 1 : 0 ,
						v023 : (this.brt.indexOf('obfs2') > -1 && this.brt.indexOf('obfs3') > -1 && this.tsv == "023") ? 1 : 0 ,
						v024 : (this.brt.indexOf('obfs2') > -1 && this.brt.indexOf('obfs3') > -1 && this.tsv == "024") ? 1 : 0
					}
				}
			}
		}
	};
	emit( this.date + " Bridges" , map );
};


//	REDUCE  //////////////////////////////////////////////////////////////////////////////////////////////////
var reduceBridges = function ( key, values ) {
	var fact = {								
		servers : {
			bridges : {
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
				brpEmail : {
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
				brpHttps : {
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
				brpOther : {
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
				breTrue : {
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
				brtObfs2 : {
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
				brtObfs3 : {
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
				brtObfs23 : {
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
	};
	
	values.forEach( function(v) {
		fact.date = v.date ;
		fact.servers.bridges.total.count += v.servers.bridges.total.count ;
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
		
	});
	return fact;
};

//	BINDING MAPs AND REDUCE  /////////////////////////////////////////////////////////////////////////////////
var aggregateBridges = function(theDate) {
	db.importBridges.mapReduce (			
		mapBridges,
		reduceBridges,
		{ 
			out: { 
				reduce : "tempFacts" 					//	the temporary fact collection
			//	, nonAtomic : true						//	prevents locking of the db during post-processing
			} ,			
			query : { "date" : theDate } 				//	limit aggregation to date
			//	, sort									//  sorts the input documents for fewer reduce operations
			//	, jsMode: true							//	check if feasable! is faster, but needs more memory
			//	, finalize : finalizeFacts
			, scope: { theDate: theDate}				//	http://stackoverflow.com/questions/2996268/mongodb-mapreduce-global-variables-within-map-function-instance
		}
	);
};

//	EXECUTION  ///////////////////////////////////////////////////////////////////////////////////////////////
var run = function(theDate) {
	db.tempFacts.remove();								//	TODO remove after testing
	aggregateBridges(theDate);
}("2013-04-03 22" );