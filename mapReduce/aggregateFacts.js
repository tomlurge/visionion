//	//////////////////////////////////////////////////////////////////////////////////////////////////////////	
//
//	STEP 2 : AGGREGATING ALL PRE-AGGREGATED DATA FROM tempFacts INTO THE FINAL visFacts COLLECTION
//
//	//////////////////////////////////////////////////////////////////////////////////////////////////////////	


//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
//	MAP
//	//////////////////////////////////////////////////////////////////////////////////////////////////////////

var mapFacts = function() {
	var map = {		
	
		date : theDate ,
		
		/*
		clients : {										//	no real aggregation going on with clients
			total : this.value.clients.total ,			//	since client data is already aggregated when imported - 
			atBridges : this.value.clients.atBridges ,	//	just copying values here
			atRelays : this.value.clients.atRelays ,
			cip4 : this.value.clients.cip4 ,
			cip6 : this.value.clients.cip6 ,
			cptObfs2 : this.value.clients.cptObfs2 ,
			cptObfs3 : this.value.clients.cptObfs3 ,
			cptOR : this.value.clients.cptOR ,
			cptUnknown : this.value.clients.cptUnknown
		} 
		,	
		*/
		servers : {
			total : {
				count : !(this.value.servers.total.count) ?  0 : this.value.servers.total.count ,
				bwa : this.value.servers.total.bwa ,
				bwc : this.value.servers.total.bwc ,
				osv : {
					linux : this.value.servers.total.osv.linux ,
					darwin : this.value.servers.total.osv.darwin ,
					freebsd : this.value.servers.total.osv.freebsd ,
					windows : this.value.servers.total.osv.windows ,
					other : this.value.servers.total.osv.other
				} ,
				tsv : {
					v010 : this.value.servers.total.tsv.v010 ,
					v011 : this.value.servers.total.tsv.v011 ,
					v012 : this.value.servers.total.tsv.v012 ,
					v020 : this.value.servers.total.tsv.v020 ,
					v021 : this.value.servers.total.tsv.v021 ,
					v022 : this.value.servers.total.tsv.v022 ,
					v023 : this.value.servers.total.tsv.v023 ,
					v024 : this.value.servers.total.tsv.v024
				}
			}
		} 
		/*
			 ,
			bridges : {
				total : {
					count : this.value.servers.bridges.total.count ,
					bwa : this.value.servers.bridges.total.bwa ,
					bwc : this.value.servers.bridges.total.bwc ,
					osv : {
						linux : this.value.servers.bridges.total.osv.linux ,
						darwin : this.value.servers.bridges.total.osv.darwin ,
						freebsd : this.value.servers.bridges.total.osv.freebsd ,
						windows : this.value.servers.bridges.total.osv.windows ,
						other : this.value.servers.bridges.total.osv.other
					} ,
					tsv : {
						v010 : this.value.servers.bridges.total.tsv.v010 ,
						v011 : this.value.servers.bridges.total.tsv.v011 ,
						v012 : this.value.servers.bridges.total.tsv.v012 ,
						v020 : this.value.servers.bridges.total.tsv.v020 ,
						v021 : this.value.servers.bridges.total.tsv.v021 ,
						v022 : this.value.servers.bridges.total.tsv.v022 ,
						v023 : this.value.servers.bridges.total.tsv.v023 ,
						v024 : this.value.servers.bridges.total.tsv.v024
					}
				} ,
				brpEmail : {
					count : this.value.servers.bridges.brpEmail.count ,
					bwa : this.value.servers.bridges.brpEmail.bwa ,
					bwc : this.value.servers.bridges.brpEmail.bwc ,
					osv : {
						linux : this.value.servers.bridges.brpEmail.osv.linux ,
						darwin : this.value.servers.bridges.brpEmail.osv.darwin ,
						freebsd : this.value.servers.bridges.brpEmail.osv.freebsd ,
						windows : this.value.servers.bridges.brpEmail.osv.windows ,
						other : this.value.servers.bridges.brpEmail.osv.other
					} ,
					tsv : {
						v010 : this.value.servers.bridges.brpEmail.tsv.v010 ,
						v011 : this.value.servers.bridges.brpEmail.tsv.v011 ,
						v012 : this.value.servers.bridges.brpEmail.tsv.v012 ,
						v020 : this.value.servers.bridges.brpEmail.tsv.v020 ,
						v021 : this.value.servers.bridges.brpEmail.tsv.v021 ,
						v022 : this.value.servers.bridges.brpEmail.tsv.v022 ,
						v023 : this.value.servers.bridges.brpEmail.tsv.v023 ,
						v024 : this.value.servers.bridges.brpEmail.tsv.v024
					}
				} ,
				brpHttps : {
					count : this.value.servers.bridges.brpHttps.count ,
					bwa : this.value.servers.bridges.brpHttps.bwa ,
					bwc : this.value.servers.bridges.brpHttps.bwc ,
					osv : {
						linux : this.value.servers.bridges.brpHttps.osv.linux ,
						darwin : this.value.servers.bridges.brpHttps.osv.darwin ,
						freebsd : this.value.servers.bridges.brpHttps.osv.freebsd ,
						windows : this.value.servers.bridges.brpHttps.osv.windows ,
						other : this.value.servers.bridges.brpHttps.osv.other
					} ,
					tsv : {
						v010 : this.value.servers.bridges.brpHttps.tsv.v010 ,
						v011 : this.value.servers.bridges.brpHttps.tsv.v011 ,
						v012 : this.value.servers.bridges.brpHttps.tsv.v012 ,
						v020 : this.value.servers.bridges.brpHttps.tsv.v020 ,
						v021 : this.value.servers.bridges.brpHttps.tsv.v021 ,
						v022 : this.value.servers.bridges.brpHttps.tsv.v022 ,
						v023 : this.value.servers.bridges.brpHttps.tsv.v023 ,
						v024 : this.value.servers.bridges.brpHttps.tsv.v024
					}
				} ,
				brpOther : {
					count : this.value.servers.bridges.brpOther.count ,
					bwa : this.value.servers.bridges.brpOther.bwa ,
					bwc : this.value.servers.bridges.brpOther.bwc ,
					osv : {
						linux : this.value.servers.bridges.brpOther.osv.linux ,
						darwin : this.value.servers.bridges.brpOther.osv.darwin ,
						freebsd : this.value.servers.bridges.brpOther.osv.freebsd ,
						windows : this.value.servers.bridges.brpOther.osv.windows ,
						other : this.value.servers.bridges.brpOther.osv.other
					} ,
					tsv : {
						v010 : this.value.servers.bridges.brpOther.tsv.v010 ,
						v011 : this.value.servers.bridges.brpOther.tsv.v011 ,
						v012 : this.value.servers.bridges.brpOther.tsv.v012 ,
						v020 : this.value.servers.bridges.brpOther.tsv.v020 ,
						v021 : this.value.servers.bridges.brpOther.tsv.v021 ,
						v022 : this.value.servers.bridges.brpOther.tsv.v022 ,
						v023 : this.value.servers.bridges.brpOther.tsv.v023 ,
						v024 : this.value.servers.bridges.brpOther.tsv.v024
					}
				} ,
				breTrue : {
					count : this.value.servers.bridges.breTrue.count ,
					bwa : this.value.servers.bridges.breTrue.bwa ,
					bwc : this.value.servers.bridges.breTrue.bwc ,
					osv : {
						linux : this.value.servers.bridges.breTrue.osv.linux ,
						darwin : this.value.servers.bridges.breTrue.osv.darwin ,
						freebsd : this.value.servers.bridges.breTrue.osv.freebsd ,
						windows : this.value.servers.bridges.breTrue.osv.windows ,
						other : this.value.servers.bridges.breTrue.osv.other
					} ,
					tsv : {
						v010 : this.value.servers.bridges.breTrue.tsv.v010 ,
						v011 : this.value.servers.bridges.breTrue.tsv.v011 ,
						v012 : this.value.servers.bridges.breTrue.tsv.v012 ,
						v020 : this.value.servers.bridges.breTrue.tsv.v020 ,
						v021 : this.value.servers.bridges.breTrue.tsv.v021 ,
						v022 : this.value.servers.bridges.breTrue.tsv.v022 ,
						v023 : this.value.servers.bridges.breTrue.tsv.v023 ,
						v024 : this.value.servers.bridges.breTrue.tsv.v024
					}
				} ,
				brtObfs2 : {
					count : this.value.servers.bridges.brtObfs2.count ,
					bwa : this.value.servers.bridges.brtObfs2.bwa ,
					bwc : this.value.servers.bridges.brtObfs2.bwc ,
					osv : {
						linux : this.value.servers.bridges.brtObfs2.osv.linux ,
						darwin : this.value.servers.bridges.brtObfs2.osv.darwin ,
						freebsd : this.value.servers.bridges.brtObfs2.osv.freebsd ,
						windows : this.value.servers.bridges.brtObfs2.osv.windows ,
						other : this.value.servers.bridges.brtObfs2.osv.other
					} ,
					tsv : {
						v010 : this.value.servers.bridges.brtObfs2.tsv.v010 ,
						v011 : this.value.servers.bridges.brtObfs2.tsv.v011 ,
						v012 : this.value.servers.bridges.brtObfs2.tsv.v012 ,
						v020 : this.value.servers.bridges.brtObfs2.tsv.v020 ,
						v021 : this.value.servers.bridges.brtObfs2.tsv.v021 ,
						v022 : this.value.servers.bridges.brtObfs2.tsv.v022 ,
						v023 : this.value.servers.bridges.brtObfs2.tsv.v023 ,
						v024 : this.value.servers.bridges.brtObfs2.tsv.v024
					}
				} ,
				brtObfs3 : {
					count : this.value.servers.bridges.brtObfs3.count ,
					bwa : this.value.servers.bridges.brtObfs3.bwa ,
					bwc : this.value.servers.bridges.brtObfs3.bwc ,
					osv : {
						linux : this.value.servers.bridges.brtObfs3.osv.linux ,
						darwin : this.value.servers.bridges.brtObfs3.osv.darwin ,
						freebsd : this.value.servers.bridges.brtObfs3.osv.freebsd ,
						windows : this.value.servers.bridges.brtObfs3.osv.windows ,
						other : this.value.servers.bridges.brtObfs3.osv.other
					} ,
					tsv : {
						v010 : this.value.servers.bridges.brtObfs3.tsv.v010 ,
						v011 : this.value.servers.bridges.brtObfs3.tsv.v011 ,
						v012 : this.value.servers.bridges.brtObfs3.tsv.v012 ,
						v020 : this.value.servers.bridges.brtObfs3.tsv.v020 ,
						v021 : this.value.servers.bridges.brtObfs3.tsv.v021 ,
						v022 : this.value.servers.bridges.brtObfs3.tsv.v022 ,
						v023 : this.value.servers.bridges.brtObfs3.tsv.v023 ,
						v024 : this.value.servers.bridges.brtObfs3.tsv.v024
					}
				} ,
				brtObfs23 : {
					count : this.value.servers.bridges.brtObfs23.count ,
					bwa : this.value.servers.bridges.brtObfs23.bwa ,
					bwc : this.value.servers.bridges.brtObfs23.bwc ,
					osv : {
						linux : this.value.servers.bridges.brtObfs23.osv.linux ,
						darwin : this.value.servers.bridges.brtObfs23.osv.darwin ,
						freebsd : this.value.servers.bridges.brtObfs23.osv.freebsd ,
						windows : this.value.servers.bridges.brtObfs23.osv.windows ,
						other : this.value.servers.bridges.brtObfs23.osv.other
					} ,
					tsv : {
						v010 : this.value.servers.bridges.brtObfs23.tsv.v010 ,
						v011 : this.value.servers.bridges.brtObfs23.tsv.v011 ,
						v012 : this.value.servers.bridges.brtObfs23.tsv.v012 ,
						v020 : this.value.servers.bridges.brtObfs23.tsv.v020 ,
						v021 : this.value.servers.bridges.brtObfs23.tsv.v021 ,
						v022 : this.value.servers.bridges.brtObfs23.tsv.v022 ,
						v023 : this.value.servers.bridges.brtObfs23.tsv.v023 ,
						v024 : this.value.servers.bridges.brtObfs23.tsv.v024
					}
				}
			} ,
			relays : {
				roleAll : {
					total : {
						count : this.value.servers.relays.roleAll.total.count ,
						bwa : this.value.servers.relays.roleAll.total.bwa ,
						bwc : this.value.servers.relays.roleAll.total.bwc ,
						osv : {
							linux : this.value.servers.relays.roleAll.total.osv.linux ,
							darwin : this.value.servers.relays.roleAll.total.osv.darwin ,
							freebsd : this.value.servers.relays.roleAll.total.osv.freebsd ,
							windows : this.value.servers.relays.roleAll.total.osv.windows ,
							other : this.value.servers.relays.roleAll.total.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleAll.total.tsv.v010 ,
							v011 : this.value.servers.relays.roleAll.total.tsv.v011 ,
							v012 : this.value.servers.relays.roleAll.total.tsv.v012 ,
							v020 : this.value.servers.relays.roleAll.total.tsv.v020 ,
							v021 : this.value.servers.relays.roleAll.total.tsv.v021 ,
							v022 : this.value.servers.relays.roleAll.total.tsv.v022 ,
							v023 : this.value.servers.relays.roleAll.total.tsv.v023 ,
							v024 : this.value.servers.relays.roleAll.total.tsv.v024
						} ,
						pbr : this.value.servers.relays.roleAll.total.pbr
					} ,
					flagNone : {
						count : this.value.servers.relays.roleAll.flagNone.count ,
						bwa : this.value.servers.relays.roleAll.flagNone.bwa ,
						bwc : this.value.servers.relays.roleAll.flagNone.bwc ,
						osv : {
							linux : this.value.servers.relays.roleAll.flagNone.osv.linux ,
							darwin : this.value.servers.relays.roleAll.flagNone.osv.darwin ,
							freebsd : this.value.servers.relays.roleAll.flagNone.osv.freebsd ,
							windows : this.value.servers.relays.roleAll.flagNone.osv.windows ,
							other : this.value.servers.relays.roleAll.flagNone.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleAll.flagNone.tsv.v010 ,
							v011 : this.value.servers.relays.roleAll.flagNone.tsv.v011 ,
							v012 : this.value.servers.relays.roleAll.flagNone.tsv.v012 ,
							v020 : this.value.servers.relays.roleAll.flagNone.tsv.v020 ,
							v021 : this.value.servers.relays.roleAll.flagNone.tsv.v021 ,
							v022 : this.value.servers.relays.roleAll.flagNone.tsv.v022 ,
							v023 : this.value.servers.relays.roleAll.flagNone.tsv.v023 ,
							v024 : this.value.servers.relays.roleAll.flagNone.tsv.v024
						} ,
						pbr : this.value.servers.relays.roleAll.flagNone.pbr
					} ,
					flagStable : {
						count : this.value.servers.relays.roleAll.flagStable.count ,
						bwa : this.value.servers.relays.roleAll.flagStable.bwa ,
						bwc : this.value.servers.relays.roleAll.flagStable.bwc ,
						osv : {
							linux : this.value.servers.relays.roleAll.flagStable.osv.linux ,
							darwin : this.value.servers.relays.roleAll.flagStable.osv.darwin ,
							freebsd : this.value.servers.relays.roleAll.flagStable.osv.freebsd ,
							windows : this.value.servers.relays.roleAll.flagStable.osv.windows ,
							other : this.value.servers.relays.roleAll.flagStable.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleAll.flagStable.tsv.v010 ,
							v011 : this.value.servers.relays.roleAll.flagStable.tsv.v011 ,
							v012 : this.value.servers.relays.roleAll.flagStable.tsv.v012 ,
							v020 : this.value.servers.relays.roleAll.flagStable.tsv.v020 ,
							v021 : this.value.servers.relays.roleAll.flagStable.tsv.v021 ,
							v022 : this.value.servers.relays.roleAll.flagStable.tsv.v022 ,
							v023 : this.value.servers.relays.roleAll.flagStable.tsv.v023 ,
							v024 : this.value.servers.relays.roleAll.flagStable.tsv.v024
						} ,
						pbr : this.value.servers.relays.roleAll.flagStable.pbr
					} ,
					flagFast : {
						count : this.value.servers.relays.roleAll.flagFast.count ,
						bwa : this.value.servers.relays.roleAll.flagFast.bwa ,
						bwc : this.value.servers.relays.roleAll.flagFast.bwc ,
						osv : {
							linux : this.value.servers.relays.roleAll.flagFast.osv.linux ,
							darwin : this.value.servers.relays.roleAll.flagFast.osv.darwin ,
							freebsd : this.value.servers.relays.roleAll.flagFast.osv.freebsd ,
							windows : this.value.servers.relays.roleAll.flagFast.osv.windows ,
							other : this.value.servers.relays.roleAll.flagFast.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleAll.flagFast.tsv.v010 ,
							v011 : this.value.servers.relays.roleAll.flagFast.tsv.v011 ,
							v012 : this.value.servers.relays.roleAll.flagFast.tsv.v012 ,
							v020 : this.value.servers.relays.roleAll.flagFast.tsv.v020 ,
							v021 : this.value.servers.relays.roleAll.flagFast.tsv.v021 ,
							v022 : this.value.servers.relays.roleAll.flagFast.tsv.v022 ,
							v023 : this.value.servers.relays.roleAll.flagFast.tsv.v023 ,
							v024 : this.value.servers.relays.roleAll.flagFast.tsv.v024
						} ,
						pbr : this.value.servers.relays.roleAll.flagFast.pbr
					} ,
					flagFastStable : {
						count : this.value.servers.relays.roleAll.flagFastStable.count ,
						bwa : this.value.servers.relays.roleAll.flagFastStable.bwa ,
						bwc : this.value.servers.relays.roleAll.flagFastStable.bwc ,
						osv : {
							linux : this.value.servers.relays.roleAll.flagFastStable.osv.linux ,
							darwin : this.value.servers.relays.roleAll.flagFastStable.osv.darwin ,
							freebsd : this.value.servers.relays.roleAll.flagFastStable.osv.freebsd ,
							windows : this.value.servers.relays.roleAll.flagFastStable.osv.windows ,
							other : this.value.servers.relays.roleAll.flagFastStable.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleAll.flagFastStable.tsv.v010 ,
							v011 : this.value.servers.relays.roleAll.flagFastStable.tsv.v011 ,
							v012 : this.value.servers.relays.roleAll.flagFastStable.tsv.v012 ,
							v020 : this.value.servers.relays.roleAll.flagFastStable.tsv.v020 ,
							v021 : this.value.servers.relays.roleAll.flagFastStable.tsv.v021 ,
							v022 : this.value.servers.relays.roleAll.flagFastStable.tsv.v022 ,
							v023 : this.value.servers.relays.roleAll.flagFastStable.tsv.v023 ,
							v024 : this.value.servers.relays.roleAll.flagFastStable.tsv.v024
						} ,
						pbr : this.value.servers.relays.roleAll.flagFastStable.pbr
					}
				} ,
				
				// GUARD
				roleGuard : {
					total : {
						count : this.value.servers.relays.roleGuard.total.count ,
						bwa : this.value.servers.relays.roleGuard.total.bwa ,
						bwc : this.value.servers.relays.roleGuard.total.bwc ,
						osv : {
							linux : this.value.servers.relays.roleGuard.total.osv.linux ,
							darwin : this.value.servers.relays.roleGuard.total.osv.darwin ,
							freebsd : this.value.servers.relays.roleGuard.total.osv.freebsd ,
							windows : this.value.servers.relays.roleGuard.total.osv.windows ,
							other : this.value.servers.relays.roleGuard.total.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleGuard.total.tsv.v010 ,
							v011 : this.value.servers.relays.roleGuard.total.tsv.v011 ,
							v012 : this.value.servers.relays.roleGuard.total.tsv.v012 ,
							v020 : this.value.servers.relays.roleGuard.total.tsv.v020 ,
							v021 : this.value.servers.relays.roleGuard.total.tsv.v021 ,
							v022 : this.value.servers.relays.roleGuard.total.tsv.v022 ,
							v023 : this.value.servers.relays.roleGuard.total.tsv.v023 ,
							v024 : this.value.servers.relays.roleGuard.total.tsv.v024
						} ,
						pbg : this.value.servers.relays.roleGuard.total.pbg
					} ,
					flagNone : {
						count : this.value.servers.relays.roleGuard.flagNone.count ,
						bwa : this.value.servers.relays.roleGuard.flagNone.bwa ,
						bwc : this.value.servers.relays.roleGuard.flagNone.bwc ,
						osv : {
							linux : this.value.servers.relays.roleGuard.flagNone.osv.linux ,
							darwin : this.value.servers.relays.roleGuard.flagNone.osv.darwin ,
							freebsd : this.value.servers.relays.roleGuard.flagNone.osv.freebsd ,
							windows : this.value.servers.relays.roleGuard.flagNone.osv.windows ,
							other : this.value.servers.relays.roleGuard.flagNone.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleGuard.flagNone.tsv.v010 ,
							v011 : this.value.servers.relays.roleGuard.flagNone.tsv.v011 ,
							v012 : this.value.servers.relays.roleGuard.flagNone.tsv.v012 ,
							v020 : this.value.servers.relays.roleGuard.flagNone.tsv.v020 ,
							v021 : this.value.servers.relays.roleGuard.flagNone.tsv.v021 ,
							v022 : this.value.servers.relays.roleGuard.flagNone.tsv.v022 ,
							v023 : this.value.servers.relays.roleGuard.flagNone.tsv.v023 ,
							v024 : this.value.servers.relays.roleGuard.flagNone.tsv.v024
						} ,
						pbg : this.value.servers.relays.roleGuard.flagNone.pbg
					} ,
					flagStable : {
						count : this.value.servers.relays.roleGuard.flagStable.count ,
						bwa : this.value.servers.relays.roleGuard.flagStable.bwa ,
						bwc : this.value.servers.relays.roleGuard.flagStable.bwc ,
						osv : {
							linux : this.value.servers.relays.roleGuard.flagStable.osv.linux ,
							darwin : this.value.servers.relays.roleGuard.flagStable.osv.darwin ,
							freebsd : this.value.servers.relays.roleGuard.flagStable.osv.freebsd ,
							windows : this.value.servers.relays.roleGuard.flagStable.osv.windows ,
							other : this.value.servers.relays.roleGuard.flagStable.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleGuard.flagStable.tsv.v010 ,
							v011 : this.value.servers.relays.roleGuard.flagStable.tsv.v011 ,
							v012 : this.value.servers.relays.roleGuard.flagStable.tsv.v012 ,
							v020 : this.value.servers.relays.roleGuard.flagStable.tsv.v020 ,
							v021 : this.value.servers.relays.roleGuard.flagStable.tsv.v021 ,
							v022 : this.value.servers.relays.roleGuard.flagStable.tsv.v022 ,
							v023 : this.value.servers.relays.roleGuard.flagStable.tsv.v023 ,
							v024 : this.value.servers.relays.roleGuard.flagStable.tsv.v024
						} ,
						pbg : this.value.servers.relays.roleGuard.flagStable.pbg
					} ,
					flagFast : {
						count : this.value.servers.relays.roleGuard.flagFast.count ,
						bwa : this.value.servers.relays.roleGuard.flagFast.bwa ,
						bwc : this.value.servers.relays.roleGuard.flagFast.bwc ,
						osv : {
							linux : this.value.servers.relays.roleGuard.flagFast.osv.linux ,
							darwin : this.value.servers.relays.roleGuard.flagFast.osv.darwin ,
							freebsd : this.value.servers.relays.roleGuard.flagFast.osv.freebsd ,
							windows : this.value.servers.relays.roleGuard.flagFast.osv.windows ,
							other : this.value.servers.relays.roleGuard.flagFast.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleGuard.flagFast.tsv.v010 ,
							v011 : this.value.servers.relays.roleGuard.flagFast.tsv.v011 ,
							v012 : this.value.servers.relays.roleGuard.flagFast.tsv.v012 ,
							v020 : this.value.servers.relays.roleGuard.flagFast.tsv.v020 ,
							v021 : this.value.servers.relays.roleGuard.flagFast.tsv.v021 ,
							v022 : this.value.servers.relays.roleGuard.flagFast.tsv.v022 ,
							v023 : this.value.servers.relays.roleGuard.flagFast.tsv.v023 ,
							v024 : this.value.servers.relays.roleGuard.flagFast.tsv.v024
						} ,
						pbg : this.value.servers.relays.roleGuard.flagFast.pbg
					} ,
					flagFastStable : {
						count : this.value.servers.relays.roleGuard.flagFastStable.count ,
						bwa : this.value.servers.relays.roleGuard.flagFastStable.bwa ,
						bwc : this.value.servers.relays.roleGuard.flagFastStable.bwc ,
						osv : {
							linux : this.value.servers.relays.roleGuard.flagFastStable.osv.linux ,
							darwin : this.value.servers.relays.roleGuard.flagFastStable.osv.darwin ,
							freebsd : this.value.servers.relays.roleGuard.flagFastStable.osv.freebsd ,
							windows : this.value.servers.relays.roleGuard.flagFastStable.osv.windows ,
							other : this.value.servers.relays.roleGuard.flagFastStable.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleGuard.flagFastStable.tsv.v010 ,
							v011 : this.value.servers.relays.roleGuard.flagFastStable.tsv.v011 ,
							v012 : this.value.servers.relays.roleGuard.flagFastStable.tsv.v012 ,
							v020 : this.value.servers.relays.roleGuard.flagFastStable.tsv.v020 ,
							v021 : this.value.servers.relays.roleGuard.flagFastStable.tsv.v021 ,
							v022 : this.value.servers.relays.roleGuard.flagFastStable.tsv.v022 ,
							v023 : this.value.servers.relays.roleGuard.flagFastStable.tsv.v023 ,
							v024 : this.value.servers.relays.roleGuard.flagFastStable.tsv.v024
						} ,
						pbg : this.value.servers.relays.roleGuard.flagFastStable.pbg
					}
				} ,
		
				// MIDDLE
				roleMiddle : {
					total : {
						count : this.value.servers.relays.roleMiddle.total.count ,
						bwa : this.value.servers.relays.roleMiddle.total.bwa ,
						bwc : this.value.servers.relays.roleMiddle.total.bwc ,
						osv : {
							linux : this.value.servers.relays.roleMiddle.total.osv.linux ,
							darwin : this.value.servers.relays.roleMiddle.total.osv.darwin ,
							freebsd : this.value.servers.relays.roleMiddle.total.osv.freebsd ,
							windows : this.value.servers.relays.roleMiddle.total.osv.windows ,
							other : this.value.servers.relays.roleMiddle.total.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleMiddle.total.tsv.v010 ,
							v011 : this.value.servers.relays.roleMiddle.total.tsv.v011 ,
							v012 : this.value.servers.relays.roleMiddle.total.tsv.v012 ,
							v020 : this.value.servers.relays.roleMiddle.total.tsv.v020 ,
							v021 : this.value.servers.relays.roleMiddle.total.tsv.v021 ,
							v022 : this.value.servers.relays.roleMiddle.total.tsv.v022 ,
							v023 : this.value.servers.relays.roleMiddle.total.tsv.v023 ,
							v024 : this.value.servers.relays.roleMiddle.total.tsv.v024
						} ,
						pbm : this.value.servers.relays.roleMiddle.total.pbm
					} ,
					flagNone : {
						count : this.value.servers.relays.roleMiddle.flagNone.count ,
						bwa : this.value.servers.relays.roleMiddle.flagNone.bwa ,
						bwc : this.value.servers.relays.roleMiddle.flagNone.bwc ,
						osv : {
							linux : this.value.servers.relays.roleMiddle.flagNone.osv.linux ,
							darwin : this.value.servers.relays.roleMiddle.flagNone.osv.darwin ,
							freebsd : this.value.servers.relays.roleMiddle.flagNone.osv.freebsd ,
							windows : this.value.servers.relays.roleMiddle.flagNone.osv.windows ,
							other : this.value.servers.relays.roleMiddle.flagNone.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleMiddle.flagNone.tsv.v010 ,
							v011 : this.value.servers.relays.roleMiddle.flagNone.tsv.v011 ,
							v012 : this.value.servers.relays.roleMiddle.flagNone.tsv.v012 ,
							v020 : this.value.servers.relays.roleMiddle.flagNone.tsv.v020 ,
							v021 : this.value.servers.relays.roleMiddle.flagNone.tsv.v021 ,
							v022 : this.value.servers.relays.roleMiddle.flagNone.tsv.v022 ,
							v023 : this.value.servers.relays.roleMiddle.flagNone.tsv.v023 ,
							v024 : this.value.servers.relays.roleMiddle.flagNone.tsv.v024
						} ,
						pbm : this.value.servers.relays.roleMiddle.flagNone.pbm
					} ,
					flagStable : {
						count : this.value.servers.relays.roleMiddle.flagStable.count ,
						bwa : this.value.servers.relays.roleMiddle.flagStable.bwa ,
						bwc : this.value.servers.relays.roleMiddle.flagStable.bwc ,
						osv : {
							linux : this.value.servers.relays.roleMiddle.flagStable.osv.linux ,
							darwin : this.value.servers.relays.roleMiddle.flagStable.osv.darwin ,
							freebsd : this.value.servers.relays.roleMiddle.flagStable.osv.freebsd ,
							windows : this.value.servers.relays.roleMiddle.flagStable.osv.windows ,
							other : this.value.servers.relays.roleMiddle.flagStable.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleMiddle.flagStable.tsv.v010 ,
							v011 : this.value.servers.relays.roleMiddle.flagStable.tsv.v011 ,
							v012 : this.value.servers.relays.roleMiddle.flagStable.tsv.v012 ,
							v020 : this.value.servers.relays.roleMiddle.flagStable.tsv.v020 ,
							v021 : this.value.servers.relays.roleMiddle.flagStable.tsv.v021 ,
							v022 : this.value.servers.relays.roleMiddle.flagStable.tsv.v022 ,
							v023 : this.value.servers.relays.roleMiddle.flagStable.tsv.v023 ,
							v024 : this.value.servers.relays.roleMiddle.flagStable.tsv.v024
						} ,
						pbm : this.value.servers.relays.roleMiddle.flagStable.pbm
					} ,
					flagFast : {
						count : this.value.servers.relays.roleMiddle.flagFast.count ,
						bwa : this.value.servers.relays.roleMiddle.flagFast.bwa ,
						bwc : this.value.servers.relays.roleMiddle.flagFast.bwc ,
						osv : {
							linux : this.value.servers.relays.roleMiddle.flagFast.osv.linux ,
							darwin : this.value.servers.relays.roleMiddle.flagFast.osv.darwin ,
							freebsd : this.value.servers.relays.roleMiddle.flagFast.osv.freebsd ,
							windows : this.value.servers.relays.roleMiddle.flagFast.osv.windows ,
							other : this.value.servers.relays.roleMiddle.flagFast.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleMiddle.flagFast.tsv.v010 ,
							v011 : this.value.servers.relays.roleMiddle.flagFast.tsv.v011 ,
							v012 : this.value.servers.relays.roleMiddle.flagFast.tsv.v012 ,
							v020 : this.value.servers.relays.roleMiddle.flagFast.tsv.v020 ,
							v021 : this.value.servers.relays.roleMiddle.flagFast.tsv.v021 ,
							v022 : this.value.servers.relays.roleMiddle.flagFast.tsv.v022 ,
							v023 : this.value.servers.relays.roleMiddle.flagFast.tsv.v023 ,
							v024 : this.value.servers.relays.roleMiddle.flagFast.tsv.v024
						} ,
						pbm : this.value.servers.relays.roleMiddle.flagFast.pbm
					} ,
					flagFastStable : {
						count : this.value.servers.relays.roleMiddle.flagFastStable.count ,
						bwa : this.value.servers.relays.roleMiddle.flagFastStable.bwa ,
						bwc : this.value.servers.relays.roleMiddle.flagFastStable.bwc ,
						osv : {
							linux : this.value.servers.relays.roleMiddle.flagFastStable.osv.linux ,
							darwin : this.value.servers.relays.roleMiddle.flagFastStable.osv.darwin ,
							freebsd : this.value.servers.relays.roleMiddle.flagFastStable.osv.freebsd ,
							windows : this.value.servers.relays.roleMiddle.flagFastStable.osv.windows ,
							other : this.value.servers.relays.roleMiddle.flagFastStable.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleMiddle.flagFastStable.tsv.v010 ,
							v011 : this.value.servers.relays.roleMiddle.flagFastStable.tsv.v011 ,
							v012 : this.value.servers.relays.roleMiddle.flagFastStable.tsv.v012 ,
							v020 : this.value.servers.relays.roleMiddle.flagFastStable.tsv.v020 ,
							v021 : this.value.servers.relays.roleMiddle.flagFastStable.tsv.v021 ,
							v022 : this.value.servers.relays.roleMiddle.flagFastStable.tsv.v022 ,
							v023 : this.value.servers.relays.roleMiddle.flagFastStable.tsv.v023 ,
							v024 : this.value.servers.relays.roleMiddle.flagFastStable.tsv.v024
						} ,
						pbm : this.value.servers.relays.roleMiddle.flagFastStable.pbm
					}
				} ,
		
				// EXIT
				roleExit : {
					total : {
						count : this.value.servers.relays.roleExit.total.count ,
						bwa : this.value.servers.relays.roleExit.total.bwa ,
						bwc : this.value.servers.relays.roleExit.total.bwc ,
						osv : {
							linux : this.value.servers.relays.roleExit.total.osv.linux ,
							darwin : this.value.servers.relays.roleExit.total.osv.darwin ,
							freebsd : this.value.servers.relays.roleExit.total.osv.freebsd ,
							windows : this.value.servers.relays.roleExit.total.osv.windows ,
							other : this.value.servers.relays.roleExit.total.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleExit.total.tsv.v010 ,
							v011 : this.value.servers.relays.roleExit.total.tsv.v011 ,
							v012 : this.value.servers.relays.roleExit.total.tsv.v012 ,
							v020 : this.value.servers.relays.roleExit.total.tsv.v020 ,
							v021 : this.value.servers.relays.roleExit.total.tsv.v021 ,
							v022 : this.value.servers.relays.roleExit.total.tsv.v022 ,
							v023 : this.value.servers.relays.roleExit.total.tsv.v023 ,
							v024 : this.value.servers.relays.roleExit.total.tsv.v024
						} ,
						pex : {
							p4 : this.value.servers.relays.roleExit.total.pex.p4 ,
							p6 : this.value.servers.relays.roleExit.total.pex.p6 ,
							p8 : this.value.servers.relays.roleExit.total.pex.p8 ,
							p46 : this.value.servers.relays.roleExit.total.pex.p46 ,
							p48 : this.value.servers.relays.roleExit.total.pex.p48 ,
							p68 : this.value.servers.relays.roleExit.total.pex.p68 ,
							p468 : this.value.servers.relays.roleExit.total.pex.p468
						} ,
						pbe : this.value.servers.relays.roleExit.total.pbe
					} ,
					flagNone : {
						count : this.value.servers.relays.roleExit.flagNone.count ,
						bwa : this.value.servers.relays.roleExit.flagNone.bwa ,
						bwc : this.value.servers.relays.roleExit.flagNone.bwc ,
						osv : {
							linux : this.value.servers.relays.roleExit.flagNone.osv.linux ,
							darwin : this.value.servers.relays.roleExit.flagNone.osv.darwin ,
							freebsd : this.value.servers.relays.roleExit.flagNone.osv.freebsd ,
							windows : this.value.servers.relays.roleExit.flagNone.osv.windows ,
							other : this.value.servers.relays.roleExit.flagNone.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleExit.flagNone.tsv.v010 ,
							v011 : this.value.servers.relays.roleExit.flagNone.tsv.v011 ,
							v012 : this.value.servers.relays.roleExit.flagNone.tsv.v012 ,
							v020 : this.value.servers.relays.roleExit.flagNone.tsv.v020 ,
							v021 : this.value.servers.relays.roleExit.flagNone.tsv.v021 ,
							v022 : this.value.servers.relays.roleExit.flagNone.tsv.v022 ,
							v023 : this.value.servers.relays.roleExit.flagNone.tsv.v023 ,
							v024 : this.value.servers.relays.roleExit.flagNone.tsv.v024
						} ,
						pex : {
							p4 : this.value.servers.relays.roleExit.flagNone.pex.p4 ,
							p6 : this.value.servers.relays.roleExit.flagNone.pex.p6 ,
							p8 : this.value.servers.relays.roleExit.flagNone.pex.p8 ,
							p46 : this.value.servers.relays.roleExit.flagNone.pex.p46 ,
							p48 : this.value.servers.relays.roleExit.flagNone.pex.p48 ,
							p68 : this.value.servers.relays.roleExit.flagNone.pex.p68 ,
							p468 : this.value.servers.relays.roleExit.flagNone.pex.p468
						} ,
						pbe : this.value.servers.relays.roleExit.flagNone.pbe
					} ,
					flagFast : {
						count : this.value.servers.relays.roleExit.flagFast.count ,
						bwa : this.value.servers.relays.roleExit.flagFast.bwa ,
						bwc : this.value.servers.relays.roleExit.flagFast.bwc ,
						osv : {
							linux : this.value.servers.relays.roleExit.flagFast.osv.linux ,
							darwin : this.value.servers.relays.roleExit.flagFast.osv.darwin ,
							freebsd : this.value.servers.relays.roleExit.flagFast.osv.freebsd ,
							windows : this.value.servers.relays.roleExit.flagFast.osv.windows ,
							other : this.value.servers.relays.roleExit.flagFast.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleExit.flagFast.tsv.v010 ,
							v011 : this.value.servers.relays.roleExit.flagFast.tsv.v011 ,
							v012 : this.value.servers.relays.roleExit.flagFast.tsv.v012 ,
							v020 : this.value.servers.relays.roleExit.flagFast.tsv.v020 ,
							v021 : this.value.servers.relays.roleExit.flagFast.tsv.v021 ,
							v022 : this.value.servers.relays.roleExit.flagFast.tsv.v022 ,
							v023 : this.value.servers.relays.roleExit.flagFast.tsv.v023 ,
							v024 : this.value.servers.relays.roleExit.flagFast.tsv.v024
						} ,
						pex : {
							p4 : this.value.servers.relays.roleExit.flagFast.pex.p4 ,
							p6 : this.value.servers.relays.roleExit.flagFast.pex.p6 ,
							p8 : this.value.servers.relays.roleExit.flagFast.pex.p8 ,
							p46 : this.value.servers.relays.roleExit.flagFast.pex.p46 ,
							p48 : this.value.servers.relays.roleExit.flagFast.pex.p48 ,
							p68 : this.value.servers.relays.roleExit.flagFast.pex.p68 ,
							p468 : this.value.servers.relays.roleExit.flagFast.pex.p468
						} ,
						pbe : this.value.servers.relays.roleExit.flagFast.pbe
					} ,
					flagStable : {
						count : this.value.servers.relays.roleExit.flagStable.count ,
						bwa : this.value.servers.relays.roleExit.flagStable.bwa ,
						bwc : this.value.servers.relays.roleExit.flagStable.bwc ,
						osv : {
							linux : this.value.servers.relays.roleExit.flagStable.osv.linux ,
							darwin : this.value.servers.relays.roleExit.flagStable.osv.darwin ,
							freebsd : this.value.servers.relays.roleExit.flagStable.osv.freebsd ,
							windows : this.value.servers.relays.roleExit.flagStable.osv.windows ,
							other : this.value.servers.relays.roleExit.flagStable.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleExit.flagStable.tsv.v010 ,
							v011 : this.value.servers.relays.roleExit.flagStable.tsv.v011 ,
							v012 : this.value.servers.relays.roleExit.flagStable.tsv.v012 ,
							v020 : this.value.servers.relays.roleExit.flagStable.tsv.v020 ,
							v021 : this.value.servers.relays.roleExit.flagStable.tsv.v021 ,
							v022 : this.value.servers.relays.roleExit.flagStable.tsv.v022 ,
							v023 : this.value.servers.relays.roleExit.flagStable.tsv.v023 ,
							v024 : this.value.servers.relays.roleExit.flagStable.tsv.v024
						} ,
						pex : {
							p4 : this.value.servers.relays.roleExit.flagStable.pex.p4 ,
							p6 : this.value.servers.relays.roleExit.flagStable.pex.p6 ,
							p8 : this.value.servers.relays.roleExit.flagStable.pex.p8 ,
							p46 : this.value.servers.relays.roleExit.flagStable.pex.p46 ,
							p48 : this.value.servers.relays.roleExit.flagStable.pex.p48 ,
							p68 : this.value.servers.relays.roleExit.flagStable.pex.p68 ,
							p468 : this.value.servers.relays.roleExit.flagStable.pex.p468
						} ,
						pbe : this.value.servers.relays.roleExit.flagStable.pbe
					} ,
					flagFastStable : {
						count : this.value.servers.relays.roleExit.flagFastStable.count ,
						bwa : this.value.servers.relays.roleExit.flagFastStable.bwa ,
						bwc : this.value.servers.relays.roleExit.flagFastStable.bwc ,
						osv : {
							linux : this.value.servers.relays.roleExit.flagFastStable.osv.linux ,
							darwin : this.value.servers.relays.roleExit.flagFastStable.osv.darwin ,
							freebsd : this.value.servers.relays.roleExit.flagFastStable.osv.freebsd ,
							windows : this.value.servers.relays.roleExit.flagFastStable.osv.windows ,
							other : this.value.servers.relays.roleExit.flagFastStable.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleExit.flagFastStable.tsv.v010 ,
							v011 : this.value.servers.relays.roleExit.flagFastStable.tsv.v011 ,
							v012 : this.value.servers.relays.roleExit.flagFastStable.tsv.v012 ,
							v020 : this.value.servers.relays.roleExit.flagFastStable.tsv.v020 ,
							v021 : this.value.servers.relays.roleExit.flagFastStable.tsv.v021 ,
							v022 : this.value.servers.relays.roleExit.flagFastStable.tsv.v022 ,
							v023 : this.value.servers.relays.roleExit.flagFastStable.tsv.v023 ,
							v024 : this.value.servers.relays.roleExit.flagFastStable.tsv.v024
						} ,
						pex : {
							p4 : this.value.servers.relays.roleExit.flagFastStable.pex.p4 ,
							p6 : this.value.servers.relays.roleExit.flagFastStable.pex.p6 ,
							p8 : this.value.servers.relays.roleExit.flagFastStable.pex.p8 ,
							p46 : this.value.servers.relays.roleExit.flagFastStable.pex.p46 ,
							p48 : this.value.servers.relays.roleExit.flagFastStable.pex.p48 ,
							p68 : this.value.servers.relays.roleExit.flagFastStable.pex.p68 ,
							p468 : this.value.servers.relays.roleExit.flagFastStable.pex.p468
						} ,
						pbe : this.value.servers.relays.roleExit.flagFastStable.pbe
					}
				} ,
		
				// DIR
				roleDir : {
					total : {
						count : this.value.servers.relays.roleDir.total.count ,
						bwa : this.value.servers.relays.roleDir.total.bwa ,
						bwc : this.value.servers.relays.roleDir.total.bwc ,
						osv : {
							linux : this.value.servers.relays.roleDir.total.osv.linux ,
							darwin : this.value.servers.relays.roleDir.total.osv.darwin ,
							freebsd : this.value.servers.relays.roleDir.total.osv.freebsd ,
							windows : this.value.servers.relays.roleDir.total.osv.windows ,
							other : this.value.servers.relays.roleDir.total.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleDir.total.tsv.v010 ,
							v011 : this.value.servers.relays.roleDir.total.tsv.v011 ,
							v012 : this.value.servers.relays.roleDir.total.tsv.v012 ,
							v020 : this.value.servers.relays.roleDir.total.tsv.v020 ,
							v021 : this.value.servers.relays.roleDir.total.tsv.v021 ,
							v022 : this.value.servers.relays.roleDir.total.tsv.v022 ,
							v023 : this.value.servers.relays.roleDir.total.tsv.v023 ,
							v024 : this.value.servers.relays.roleDir.total.tsv.v024
						}
					} ,
					authorityTrue : {
						count : this.value.servers.relays.roleDir.authorityTrue.count ,
						bwa : this.value.servers.relays.roleDir.authorityTrue.bwa ,
						bwc : this.value.servers.relays.roleDir.authorityTrue.bwc ,
						osv : {
							linux : this.value.servers.relays.roleDir.authorityTrue.osv.linux ,
							darwin : this.value.servers.relays.roleDir.authorityTrue.osv.darwin ,
							freebsd : this.value.servers.relays.roleDir.authorityTrue.osv.freebsd ,
							windows : this.value.servers.relays.roleDir.authorityTrue.osv.windows ,
							other : this.value.servers.relays.roleDir.authorityTrue.osv.other
						} ,
						tsv : {
							v010 : this.value.servers.relays.roleDir.authorityTrue.tsv.v010 ,
							v011 : this.value.servers.relays.roleDir.authorityTrue.tsv.v011 ,
							v012 : this.value.servers.relays.roleDir.authorityTrue.tsv.v012 ,
							v020 : this.value.servers.relays.roleDir.authorityTrue.tsv.v020 ,
							v021 : this.value.servers.relays.roleDir.authorityTrue.tsv.v021 ,
							v022 : this.value.servers.relays.roleDir.authorityTrue.tsv.v022 ,
							v023 : this.value.servers.relays.roleDir.authorityTrue.tsv.v023 ,
							v024 : this.value.servers.relays.roleDir.authorityTrue.tsv.v024
						}
					}
				}
			} 
*/
		
		/* ,
		
		countries : {
			
		} ,
		autosys : {
			
		}
		
		*/
		
	};				
	emit( theDate + "Fact  Test"  , map );
};



//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
//	REDUCE
//	//////////////////////////////////////////////////////////////////////////////////////////////////////////

var reduceFacts = function ( key, values ) {
	var fact = {
		date : "" ,

		/*	
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
		} 	
		,
		*/	

		servers : {
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
			}
		}		
		/*
			 ,
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
			} ,
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
		*/
			
		/* ,
		
		countries : {
			
		} ,
		autosys : {
			
		}
		
		*/
	} ;
	values.forEach( function(v) {
/*        print("OBJECT DUMP");
        for (var k in v) {
            print("===");
        	print(k);
        	print(v[k]);
            print("===");
        }
*/
		fact.date = v.date ;
		/*		
		fact.clients.total += v.clients.total ;
		fact.clients.atBridges += v.clients.atBridges ;
		fact.clients.atRelays += v.clients.atRelays ;
		fact.clients.cip4 += v.clients.cip4 ;
		fact.clients.cip6 += v.clients.cip6 ;
		fact.clients.cptObfs2 += v.clients.cptObfs2 ;
		fact.clients.cptObfs3 += v.clients.cptObfs3 ;
		fact.clients.cptOR += v.clients.cptOR ;
		fact.clients.cptUnknown += v.clients.cptUnknown ;
		*/	
		fact.servers.total.count += v.servers.total.count ;
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
		/*		
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
		
		fact.servers.relays.roleAll.total.count += v.servers.relays.roleAll.total.count ;
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
*/	
		/*
		
		countries
		
		autonomous systems
	
		*/

	});
	return fact;
};


//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
//	FINALIZE
//	//////////////////////////////////////////////////////////////////////////////////////////////////////////

var finalizeFacts = function ( key, fact ) {
														//	doing stuff e.g. some averages
};


//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
//	BINDING MAP AND REDUCE
//	//////////////////////////////////////////////////////////////////////////////////////////////////////////


var aggregateFacts = function(theDate) {
	db.tempFacts.mapReduce (			
		mapFacts,
		reduceFacts,
		{ 
			out: { 
				reduce : "visFacts"		 				//	the final fact collection
//				, nonAtomic : true						//	prevents locking of the db during post-processing
			}	
//			, query : { "value.date" : theDate } 		//	TODO	this maybe unnecessarily adds complexity
														//			could be skipped if we decided never to store tempFacts	
//			, sort										//  sorts the input documents for fewer reduce operations
//			, jsMode: true								//	check if feasable! is faster, but needs more memory
//			, finalize : finalizeFacts
			, scope: { theDate: theDate}		
		}
	);
};



//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
//	EXECUTE
//	//////////////////////////////////////////////////////////////////////////////////////////////////////////

var run = function(theDate) {
    db.visFacts.remove();								//	TODO 	remove only Fact+theDate
	aggregateFacts(theDate);
}("2013-04-03 22");







//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
//	SNIPPETS for a future version with more administrative features 
//	//////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

var run = function(date) {

//	housekeeping	
    db.tempServers.remove();
    db.tempCountries.remove();
    db.tempFacts.remove();

//	aggregation steps										TODO	build Node app which includes these files

	aggregateClients(date);							
	aggregateServersRelays(date);					
	aggregateServersBridges(date);					
	aggregateServers(date);							
	aggregateBridges(date);							
	aggregateRelays(date);							
	aggregateCountriesClientsCR(date);				
	aggregateCountriesClientsCB(date);				
	aggregateCountriesRelays(date);					
	aggregateCountries(date);						
	aggregateAutosys(date);							

	aggregateFacts(date);

}("2013-04-03 22");

*/
