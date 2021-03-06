﻿var node_mongo_hadoop = require('node_mongo_hadoop')

function reduceFact( key, values, callback ) {													//	was:	var reduceFact = function ( key, values ) {

	var fact = {
		date : "" ,
		span : 0 ,
		clients : {																				//	CLIENTS
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
		servers : {																				//	SERVERS
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
			},
			bridges : {																			//	BRIDGES
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
				roleAll : {																		//	RELAYS	ALL
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
				roleGuard : {																	//	RELAYS	GUARD
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
				roleMiddle : {																	//	RELAYS	MIDDLE
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
				roleExit : {																	//	RELAYS	EXIT
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
				roleDir : {																		//	RELAYS	DIR
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
	} ,
		countries : [] ,																		//	COUNTRIES
		autosys: []													        				    //	AUTOSYS
	};

	values.forEach( function(v) {
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
	callback( { "id" : "Fact " + span + " " + date , "value" : fact } )							//	was:	return fact;
};

node_mongo_hadoop.ReduceBSONStream(reduceFact);


/*

	var node_mongo_hadoop = require('node_mongo_hadoop')

	function reduceFunc(key, values, callback){
		var count = 0;
		values.forEach(function(v){
			count += v.count
		});
		callback( {'_id':key, 'count':count } );
	}

	node_mongo_hadoop.ReduceBSONStream(reduceFunc);

*/