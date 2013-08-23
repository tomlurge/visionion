//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
//	MAP
//	//////////////////////////////////////////////////////////////////////////////////////////////////////////

var mapValues = function() {

    var c = ( this.type == "c" ) ;																			//	clients
    var b = ( this.type == "b" ) ;																			//	bridges
    var r = ( this.type == "r" ) ;																			//	relays
    var s = ( this.type == "b" ||this.type == "r" ) ;														//	servers
	
	var osLinux = ( s && this.osv == "linux" ) ;
	var osDarwin = ( s && this.osv == "darwin" ) ;
	var osFreebsd = ( s && this.osv == "freebsd" ) ;
	var osWindows = ( s && this.osv == "windows" ) ;
	var osOther = ( s && this.osv == "other" ) ;
	
	var v010 = ( s && this.tsv == "010" ) ;
	var v011 = ( s && this.tsv == "011" ) ;
	var v012 = ( s && this.tsv == "012" ) ;
	var v020 = ( s && this.tsv == "020" ) ;
	var v021 = ( s && this.tsv == "021" ) ;
	var v022 = ( s && this.tsv == "022" ) ;
	var v023 = ( s && this.tsv == "023" ) ;
	var v024 = ( s && this.tsv == "024" ) ;
	
	var brpEmail = ( b && this.brp == "email" ) ;
	var brpHttps = ( b && this.brp == "https" ) ;
	var brpOther = ( b && this.brp == "other" ) ;
	
	var brtObfs2 = ( b && this.brt.indexOf('obfs2') ) ;
	var brtObfs3 = ( b && this.brt.indexOf('obfs3') ) ;
	
	var guard = ( r && this.role.indexOf("Guard") > -1 ) ;
	var middle = ( r && this.role.indexOf("Middle") > -1 ) ;
	var exit = ( r && this.role.indexOf("Exit") > -1 ) ;
	var dir = ( r && this.role.indexOf("Dir") > -1 ) ;
	
	var fast = ( r && this.flag.indexOf("Fast") > -1 ) ;
	var stable = ( r && this.flag.indexOf("Stable") > -1 ) ;
	var authority = ( r && this.flag.indexOf("Authority") > -1 ) ;
	
	
	var values = {
		date : theDate ,
		clients : {
			total : 					c ?  this.cr + this.cb  : 0,									 
			atBridges :					c ?  this.cb : 0 ,
			atRelays : 					c ?  this.cr : 0 ,
			cip4 : 						c && this.cip.v4 ? this.cip.v4 : 0 ,
			cip6 : 						c && this.cip.v6 ? this.cip.v6 : 0 ,
			cptObfs2 : 					c && this.cpt.obfs2 ? this.cpt.obfs2 : 0 ,
			cptObfs3 : 					c && this.cpt.obfs3 ? this.cpt.obfs3 : 0 ,
			cptOR : 					c && this.cpt.OR ? this.cpt.OR : 0 ,
			cptUnknown : 				c && this.cpt.unknown ? this.cpt.unknown : 0							
		/*	total : 					this.cr && this.cb ?  this.cr + this.cb  : 0,				//	TODO	ALLEN  
			atBridges :					this.cb ?  this.cb : 0 ,									//			zuweisungen
			atRelays : 					this.cr ?  this.cr : 0,										//			eine
			cip4 : 						this.cip ? this.cip.v4 : 0,									//			existenzabfrage
			cip6 : 						this.cip ? this.cip.v6 : 0 ,								//			voranstellen
			cptObfs2 : 					this.cpt ? this.cpt.obfs2 : 0 ,								//			aber das hier
			cptObfs3 : 					this.cpt ? this.cpt.obfs3 : 0 ,								//			funzt noch nicht
			cptOR : 					this.cpt ? this.cpt.OR : 0 ,								//			richtig
			cptUnknown : 				this.cpt ? this.cpt.Unknown : 0								*/
		} ,		
		servers : {	
			total : {
				count : 				s ?  1 : 0 ,
				bwa :	  				s ?  this.bwa : 0 ,
				bwc :	 				s ?  this.bwc : 0 ,
				osv : {	
					linux :				s && osLinux ? 1 : 0 ,
					darwin : 			s && osDarwin ? 1 : 0 ,
					freebsd : 			s && osFreebsd ? 1 : 0 ,
					windows : 			s && osWindows ? 1 : 0 ,
					other : 			s && osOther ? 1 : 0
				} ,
				tsv : {
					v010 :				s && v010 ? 1 : 0 ,
					v011 :				s && v011 ? 1 : 0 ,
					v012 :				s && v012 ? 1 : 0 ,
					v020 :				s && v020 ? 1 : 0 ,
					v021 :				s && v021 ? 1 : 0 ,
					v022 :				s && v022 ? 1 : 0 ,
					v023 :				s && v023 ? 1 : 0 ,
					v024 :				s && v024 ? 1 : 0
				}
			} ,
			bridges : {
				total : {
					count : 			b ?  1 : 0 ,
					bwa :				b ?  this.bwa : 0 ,
					bwc :				b ?  this.bwc : 0 ,
					osv : {
						linux : 		b && osLinux ? 1 : 0 ,
						darwin : 		b && osDarwin ? 1 : 0 ,
						freebsd : 		b && osFreebsd ? 1 : 0 ,
						windows : 		b && osWindows ? 1 : 0 ,
						other : 		b && osOther ? 1 : 0
					} ,
					tsv : {
						v010 : 			b && v010 ? 1 : 0 ,
						v011 : 			b && v011 ? 1 : 0 ,
						v012 : 			b && v012 ? 1 : 0 ,
						v020 : 			b && v020 ? 1 : 0 ,
						v021 : 			b && v021 ? 1 : 0 ,
						v022 : 			b && v022 ? 1 : 0 ,
						v023 : 			b && v023 ? 1 : 0 ,
						v024 : 			b && v024 ? 1 : 0
					}
				} ,
				brpEmail : {
					count :  			b && brpEmail ? 1 : 0 ,
					bwa :				b && brpEmail ? this.bwa : 0 ,
					bwc :				b && brpEmail ? this.bwc : 0 ,
					osv : {
						linux :  		b && brpEmail && osLinux ? 1 : 0 ,
						darwin :  		b && brpEmail && osDarwin ? 1 : 0 ,
						freebsd :		b && brpEmail && osFreebsd ? 1 : 0 ,
						windows :		b && brpEmail && osWindows ? 1 : 0 ,
						other :  		b && brpEmail && osOther ? 1 : 0
					} ,
					tsv : {
						v010 :  		b && brpEmail && v010 ? 1 : 0 ,
						v011 :  		b && brpEmail && v011 ? 1 : 0 ,
						v012 :  		b && brpEmail && v012 ? 1 : 0 ,
						v020 :  		b && brpEmail && v020 ? 1 : 0 ,
						v021 :  		b && brpEmail && v021 ? 1 : 0 ,
						v022 :  		b && brpEmail && v022 ? 1 : 0 ,
						v023 :  		b && brpEmail && v023 ? 1 : 0 ,
						v024 :  		b && brpEmail && v024 ? 1 : 0
					}
				} ,
				brpHttps : {
					count :  			b && brpHttps ? 1 : 0 ,
					bwa :				b && brpHttps ? this.bwa : 0 ,
					bwc :				b && brpHttps ? this.bwc : 0 ,
					osv : {
						linux :  		b && brpHttps && osLinux ? 1 : 0 ,
						darwin :  		b && brpHttps && osDarwin ? 1 : 0 ,
						freebsd :		b && brpHttps && osFreebsd ? 1 : 0 ,
						windows :		b && brpHttps && osWindows ? 1 : 0 ,
						other :  		b && brpHttps && osOther ? 1 : 0
					} ,
					tsv : {
						v010 :  		b && brpHttps && v010 ? 1 : 0 ,
						v011 :  		b && brpHttps && v011 ? 1 : 0 ,
						v012 :  		b && brpHttps && v012 ? 1 : 0 ,
						v020 :  		b && brpHttps && v020 ? 1 : 0 ,
						v021 :  		b && brpHttps && v021 ? 1 : 0 ,
						v022 :  		b && brpHttps && v022 ? 1 : 0 ,
						v023 :  		b && brpHttps && v023 ? 1 : 0 ,
						v024 :  		b && brpHttps && v024 ? 1 : 0
					}
				} ,
				brpOther : {
					count :  			b && brpOther ? 1 : 0 ,
					bwa :				b && brpOther ? this.bwa : 0 ,
					bwc :				b && brpOther ? this.bwc : 0 ,
					osv : {
						linux :  		b && brpOther && osLinux ? 1 : 0 ,
						darwin :  		b && brpOther && osDarwin ? 1 : 0 ,
						freebsd :		b && brpOther && osFreebsd ? 1 : 0 ,
						windows :		b && brpOther && osWindows ? 1 : 0 ,
						other :  		b && brpOther && osOther ? 1 : 0
					} ,
					tsv : {
						v010 :  		b && brpOther && v010 ? 1 : 0 ,
						v011 :  		b && brpOther && v011 ? 1 : 0 ,
						v012 :  		b && brpOther && v012 ? 1 : 0 ,
						v020 :  		b && brpOther && v020 ? 1 : 0 ,	
						v021 :  		b && brpOther && v021 ? 1 : 0 ,
						v022 :  		b && brpOther && v022 ? 1 : 0 ,
						v023 :  		b && brpOther && v023 ? 1 : 0 ,
						v024 :  		b && brpOther && v024 ? 1 : 0
					}
				} ,
				breTrue : {	
					count :  			b && this.bre ? 1 : 0 ,
					bwa :				b && this.bre ? this.bwa : 0 ,
					bwc :				b && this.bre ? this.bwc : 0 ,
					osv : {
						linux :  		b && this.bre && osLinux ? 1 : 0 ,
						darwin :  		b && this.bre && osDarwin ? 1 : 0 ,
						freebsd :		b && this.bre && osFreebsd ? 1 : 0 ,
						windows :		b && this.bre && osWindows ? 1 : 0 ,
						other :  		b && this.bre && osOther ? 1 : 0
					} ,
					tsv : {
						v010 :  		b && this.bre && v010 ? 1 : 0 ,
						v011 :  		b && this.bre && v011 ? 1 : 0 ,
						v012 :  		b && this.bre && v012 ? 1 : 0 ,
						v020 :  		b && this.bre && v020 ? 1 : 0 ,
						v021 :  		b && this.bre && v021 ? 1 : 0 ,
						v022 :  		b && this.bre && v022 ? 1 : 0 ,
						v023 :  		b && this.bre && v023 ? 1 : 0 ,
						v024 :  		b && this.bre && v024 ? 1 : 0
					}
				} ,
				brtObfs2 : {
					count :				b && brtObfs2 ? 1 : 0 ,
					bwa :				b && brtObfs2 ? this.bwa : 0 ,
					bwc :				b && brtObfs2 ? this.bwc : 0  ,
					osv : {
						linux :			b && brtObfs2 && osLinux ? 1 : 0 ,
						darwin :		b && brtObfs2 && osDarwin ? 1 : 0 ,
						freebsd :		b && brtObfs2 && osFreebsd ? 1 : 0 ,
						windows :		b && brtObfs2 && osWindows ? 1 : 0 ,
						other :			b && brtObfs2 && osOther ? 1 : 0
					} ,
					tsv : {
						v010 :			b && brtObfs2 && v010 ? 1 : 0 ,
						v011 :			b && brtObfs2 && v011 ? 1 : 0 ,
						v012 :			b && brtObfs2 && v012 ? 1 : 0 ,
						v020 :			b && brtObfs2 && v020 ? 1 : 0 ,
						v021 :			b && brtObfs2 && v021 ? 1 : 0 ,
						v022 :			b && brtObfs2 && v022 ? 1 : 0 ,
						v023 :			b && brtObfs2 && v023 ? 1 : 0 ,
						v024 :			b && brtObfs2 && v024 ? 1 : 0
					}
				} ,
				brtObfs3 : {
					count :				b && brtObfs3 ? 1 : 0 ,
					bwa :				b && brtObfs3 ? this.bwa : 0 ,
					bwc :				b && brtObfs3 ? this.bwc : 0 ,
					osv : {
						linux :			b && brtObfs3 && osLinux ? 1 : 0 ,
						darwin :		b && brtObfs3 && osDarwin ? 1 : 0 ,
						freebsd :		b && brtObfs3 && osFreebsd ? 1 : 0 ,
						windows :		b && brtObfs3 && osWindows ? 1 : 0 ,
						other :			b && brtObfs3 && osOther ? 1 : 0
					} ,
					tsv : {
						v010 :			b && brtObfs3 && v010 ? 1 : 0 ,
						v011 :			b && brtObfs3 && v011 ? 1 : 0 ,
						v012 :			b && brtObfs3 && v012 ? 1 : 0 ,
						v020 :			b && brtObfs3 && v020 ? 1 : 0 ,
						v021 :			b && brtObfs3 && v021 ? 1 : 0 ,
						v022 :			b && brtObfs3 && v022 ? 1 : 0 ,
						v023 :			b && brtObfs3 && v023 ? 1 : 0 ,
						v024 :			b && brtObfs3 && v024 ? 1 : 0
					}
				} ,
				brtObfs23 : {
					count :				b && brtObfs2 && brtObfs3 ? 1 : 0 ,
					bwa :				b && brtObfs2 && brtObfs3 ? this.bwa : 0 ,
					bwc :				b && brtObfs2 && brtObfs3 ? this.bwc : 0 ,
					osv : {
						linux :			b && brtObfs2 && brtObfs3 && osLinux ? 1 : 0 ,
						darwin :		b && brtObfs2 && brtObfs3 && osDarwin ? 1 : 0 ,
						freebsd :		b && brtObfs2 && brtObfs3 && osFreebsd ? 1 : 0 ,
						windows :		b && brtObfs2 && brtObfs3 && osWindows ? 1 : 0 ,
						other :			b && brtObfs2 && brtObfs3 && osOther ? 1 : 0
					} ,
					tsv : {
						v010 :			b && brtObfs2 && brtObfs3 && v010 ? 1 : 0 ,
						v011 :			b && brtObfs2 && brtObfs3 && v011 ? 1 : 0 ,
						v012 :			b && brtObfs2 && brtObfs3 && v012 ? 1 : 0 ,
						v020 :			b && brtObfs2 && brtObfs3 && v020 ? 1 : 0 ,
						v021 :			b && brtObfs2 && brtObfs3 && v021 ? 1 : 0 ,
						v022 :			b && brtObfs2 && brtObfs3 && v022 ? 1 : 0 ,
						v023 :			b && brtObfs2 && brtObfs3 && v023 ? 1 : 0 ,
						v024 :			b && brtObfs2 && brtObfs3 && v024 ? 1 : 0
					}
				}
			} ,
			relays : {
				roleAll : {																					//	RELAYS ALL
					total : {
						count :			r ?  1 : 0 ,
						bwa : 			r ?  this.bwa : 0  ,
						bwc :			r ?  this.bwc : 0  ,
						osv : {
							linux :		r && osLinux ? 1 : 0 ,
							darwin : 	r && osDarwin ? 1 : 0 ,
							freebsd :	r && osFreebsd ? 1 : 0 ,
							windows :	r && osWindows ? 1 : 0 ,
							other : 	r && osOther ? 1 : 0
						} ,
						tsv : {
							v010 :		r && v010 ? 1 : 0 ,
							v011 :		r && v011 ? 1 : 0 ,
							v012 :		r && v012 ? 1 : 0 ,
							v020 :		r && v020 ? 1 : 0 ,
							v021 :		r && v021 ? 1 : 0 ,
							v022 :		r && v022 ? 1 : 0 ,
							v023 :		r && v023 ? 1 : 0 ,
							v024 :		r && v024 ? 1 : 0
						} ,
						pbr : 			r ? this.pbr : 0
					} ,
					flagNone : {
						count : 		r && !fast && !stable ? 1 : 0 ,
						bwa : 			r && !fast && !stable ? this.bwa : 0 ,
						bwc : 			r && !fast && !stable ? this.bwc : 0 ,
						osv : {
							linux :		r && !fast && !stable && osLinux ? 1 : 0 ,
							darwin :	r && !fast && !stable && osDarwin ? 1 : 0 ,
							freebsd :	r && !fast && !stable && osFreebsd ? 1 : 0 ,
							windows :	r && !fast && !stable && osWindows ? 1 : 0 ,
							other :		r && !fast && !stable && osOther ? 1 : 0 
						} ,
						tsv : {
							v010 :		r && !fast && !stable && v010 ? 1 : 0 ,
							v011 :		r && !fast && !stable && v011 ? 1 : 0 ,
							v012 :		r && !fast && !stable && v012 ? 1 : 0 ,
							v020 :		r && !fast && !stable && v020 ? 1 : 0 ,
							v021 :		r && !fast && !stable && v021 ? 1 : 0 ,
							v022 :		r && !fast && !stable && v022 ? 1 : 0 ,
							v023 :		r && !fast && !stable && v023 ? 1 : 0 ,
							v024 :		r && !fast && !stable && v024 ? 1 : 0
						} ,
						pbr  : 			r && !fast && !stable ? this.pbr : 0.0
					} ,
					flagStable : {
						count :			r && !fast && stable ? 1 : 0 ,
						bwa :			r && !fast && stable ? this.bwa : 0 ,
						bwc :			r && !fast && stable ? this.bwc : 0 ,
						osv : {
							linux :		r && !fast && stable && osLinux ? 1 : 0 ,
							darwin :	r && !fast && stable && osDarwin ? 1 : 0 ,
							freebsd :	r && !fast && stable && osFreebsd ? 1 : 0 ,
							windows :	r && !fast && stable && osWindows ? 1 : 0 ,
							other :		r && !fast && stable && osOther ? 1 : 0
						} ,
						tsv : {
							v010 :		r && !fast && stable && v010 ? 1 : 0 ,
							v011 :		r && !fast && stable && v011 ? 1 : 0 ,
							v012 :		r && !fast &&	stable && v012 ? 1 : 0 ,
							v020 :		r && !fast &&	stable && v020 ? 1 : 0 ,
							v021 :		r && !fast &&	stable && v021 ? 1 : 0 ,
							v022 :		r && !fast &&	stable && v022 ? 1 : 0 ,
							v023 :		r && !fast &&	stable && v023 ? 1 : 0 ,
							v024 :		r && !fast && stable && v024 ? 1 : 0
						} ,
						pbr :			r && !fast && stable ? this.pbr : 0.0
					} ,
					flagFast : {
						count :			r && fast && !stable ? 1 : 0 ,
						bwa :			r && fast && !stable ? this.bwa : 0 ,
						bwc :			r && fast && !stable ? this.bwc : 0 ,
						osv : {
							linux :		r && fast && !stable && osLinux ? 1 : 0 ,
							darwin :	r && fast && !stable && osDarwin ? 1 : 0 ,
							freebsd :	r && fast && !stable && osFreebsd ? 1 : 0 ,
							windows :	r && fast && !stable && osWindows ? 1 : 0 ,
							other :		r && fast && !stable && osOther ? 1 : 0
						} ,
						tsv : {
							v010 : 		r && fast && !stable && v010 ? 1 : 0 ,
							v011 :		r && fast && !stable && v011 ? 1 : 0 ,
							v012 :		r && fast && !stable && v012 ? 1 : 0 ,
							v020 :		r && fast && !stable && v020 ? 1 : 0 ,
							v021 :		r && fast && !stable && v021 ? 1 : 0 ,
							v022 :		r && fast && !stable && v022 ? 1 : 0 ,
							v023 :		r && fast && !stable && v023 ? 1 : 0 ,
							v024 :		r && fast && !stable && v024 ? 1 : 0
						} ,
						pbr :			r && fast && !stable ? this.pbr : 0.0
					} ,
					flagFastStable : {
						count :			r && fast && stable ? 1 : 0 ,
						bwa :			r && fast && stable ? this.bwa : 0 ,
						bwc :			r && fast && stable ? this.bwc : 0 ,
						osv : {	
							linux :		r && fast && stable && osLinux ? 1 : 0 ,
							darwin :	r && fast && stable && osDarwin ? 1 : 0 ,
							freebsd :	r && fast && stable && osFreebsd ? 1 : 0 ,
							windows :	r && fast && stable && osWindows ? 1 : 0 ,
							other :		r && fast && stable && osOther ? 1 : 0
						} ,
						tsv : {
							v010 :		r && fast && stable && v010 ? 1 : 0 ,
							v011 :		r && fast && stable && v011 ? 1 : 0 ,
							v012 :		r && fast && stable && v012 ? 1 : 0 ,
							v020 :		r && fast && stable && v020 ? 1 : 0 ,
							v021 :		r && fast && stable && v021 ? 1 : 0 ,
							v022 :		r && fast && stable && v022 ? 1 : 0 ,
							v023 :		r && fast && stable && v023 ? 1 : 0 ,
							v024 :		r && fast && stable && v024 ? 1 : 0
						} ,
						pbr :			r && fast && stable ? this.pbr : 0.0
					}
				} ,							
				roleGuard : {																				//	RELAYS GUARD
					total : {
						count :			r && guard ? 1 : 0 ,
						bwa :			r && guard ? this.bwa : 0 ,
						bwc :			r && guard ? this.bwc : 0 ,
						osv : {
							linux :		r && guard && osLinux ? 1 : 0 ,
							darwin :	r && guard && osDarwin ? 1 : 0 ,
							freebsd :	r && guard && osFreebsd ? 1 : 0 ,
							windows :	r && guard && osWindows ? 1 : 0 ,
							other :		r && guard && osOther ? 1 : 0
						} ,
						tsv : {
							v010 :		r && guard && v010 ? 1 : 0 ,
							v011 :		r && guard && v011 ? 1 : 0 ,
							v012 :		r && guard && v012 ? 1 : 0 ,
							v020 :		r && guard && v020 ? 1 : 0 ,
							v021 :		r && guard && v021 ? 1 : 0 ,
							v022 :		r && guard && v022 ? 1 : 0 ,
							v023 :		r && guard && v023 ? 1 : 0 ,
							v024 :		r && guard && v024 ? 1 : 0
						} ,
						pbg :			r && guard ? this.pbg : 0.0
					} ,
					flagNone : {
						count :			r && guard && !fast && !stable ? 1 : 0 ,
						bwa :			r && guard && !fast && !stable ? this.bwa : 0 ,
						bwc :			r && guard && !fast && !stable ? this.bwc : 0 ,
						osv : {
							linux :		r && guard && !fast && !stable && osLinux ? 1 : 0 ,
							darwin :	r && guard && !fast && !stable && osDarwin ? 1 : 0 ,
							freebsd :	r && guard && !fast && !stable && osFreebsd ? 1 : 0 ,
							windows :	r && guard && !fast && !stable && osWindows ? 1 : 0 ,
							other :		r && guard && !fast && !stable && osOther ? 1 : 0
						} ,
						tsv : {
							v010 :		r && guard && !fast && !stable && v010 ? 1 : 0 ,
							v011 :		r && guard && !fast && !stable && v011 ? 1 : 0 ,
							v012 :		r && guard && !fast && !stable && v012 ? 1 : 0 ,
							v020 :		r && guard && !fast && !stable && v020 ? 1 : 0 ,
							v021 :		r && guard && !fast && !stable && v021 ? 1 : 0 ,
							v022 :		r && guard && !fast && !stable && v022 ? 1 : 0 ,
							v023 :		r && guard && !fast && !stable && v023 ? 1 : 0 ,
							v024 :		r && guard && !fast && !stable && v024 ? 1 : 0
						} ,
						pbg :			r && guard && !fast && !stable ? this.pbg : 0.0
					} ,
					flagStable : {
						count :			r && guard && !fast && stable ? 1 : 0 ,
						bwa :			r && guard && !fast && stable ? this.bwa : 0 ,
						bwc :			r && guard && !fast && stable ? this.bwc : 0 ,
						osv : {
							linux :		r && guard && !fast && stable && osLinux ? 1 : 0 ,
							darwin :	r && guard && !fast && stable && osDarwin ? 1 : 0 ,
							freebsd :	r && guard && !fast && stable && osFreebsd ? 1 : 0 ,
							windows :	r && guard && !fast && stable && osWindows ? 1 : 0 ,
							other :		r && guard && !fast && stable && osOther ? 1 : 0
						} ,
						tsv : {
							v010 :		r && guard && !fast && stable && v010 ? 1 : 0 ,
							v011 :		r && guard && !fast && stable && v011 ? 1 : 0 ,
							v012 :		r && guard && !fast && stable && v012 ? 1 : 0 ,
							v020 :		r && guard && !fast && stable && v020 ? 1 : 0 ,
							v021 :		r && guard && !fast && stable && v021 ? 1 : 0 ,
							v022 :		r && guard && !fast && stable && v022 ? 1 : 0 ,
							v023 :		r && guard && !fast && stable && v023 ? 1 : 0 ,
							v024 :		r && guard && !fast && stable && v024 ? 1 : 0
						} ,
						pbg :			r && guard && !fast && stable ? this.pbg : 0.0
					} ,
					flagFast : {
						count :			r && guard && fast && !stable ? 1 : 0 ,
						bwa :			r && guard && fast && !stable ? this.bwa : 0 ,
						bwc :			r && guard && fast && !stable ? this.bwc : 0 ,
						osv : {
							linux :		r && guard && fast && !stable && osLinux ? 1 : 0 ,
							darwin :	r && guard && fast && !stable && osDarwin ? 1 : 0 ,
							freebsd :	r && guard && fast && !stable && osFreebsd ? 1 : 0 ,
							windows :	r && guard && fast && !stable && osWindows ? 1 : 0 ,
							other :		r && guard && fast && !stable && osOther ? 1 : 0
						} ,
						tsv : {
							v010 :		r && guard && fast && !stable && v010 ? 1 : 0 ,
							v011 :		r && guard && fast && !stable && v011 ? 1 : 0 ,
							v012 :		r && guard && fast && !stable && v012 ? 1 : 0 ,
							v020 :		r && guard && fast && !stable && v020 ? 1 : 0 ,
							v021 :		r && guard && fast && !stable && v021 ? 1 : 0 ,
							v022 :		r && guard && fast && !stable && v022 ? 1 : 0 ,
							v023 :		r && guard && fast && !stable && v023 ? 1 : 0 ,
							v024 :		r && guard && fast && !stable && v024 ? 1 : 0
						} ,
						pbg :			r && guard && fast && !stable ? this.pbg : 0.0
					} ,
					flagFastStable : {
						count :			r && guard && fast && stable ? 1 : 0 ,
						bwa :			r && guard && fast && stable ? this.bwa : 0 ,
						bwc :			r && guard && fast && stable ? this.bwc : 0 ,
						osv : {
							linux :		r && guard && fast && stable && osLinux ? 1 : 0 ,
							darwin :	r && guard && fast && stable && osDarwin ? 1 : 0 ,
							freebsd :	r && guard && fast && stable && osFreebsd ? 1 : 0 ,
							windows :	r && guard && fast && stable && osWindows ? 1 : 0 ,
							other :		r && guard && fast && stable && osOther ? 1 : 0
						} ,
						tsv : {
							v010 :		r && guard && fast && stable && v010 ? 1 : 0 ,
							v011 :		r && guard && fast && stable && v011 ? 1 : 0 ,
							v012 :		r && guard && fast && stable && v012 ? 1 : 0 ,
							v020 :		r && guard && fast && stable && v020 ? 1 : 0 ,
							v021 :		r && guard && fast && stable && v021 ? 1 : 0 ,
							v022 :		r && guard && fast && stable && v022 ? 1 : 0 ,
							v023 :		r && guard && fast && stable && v023 ? 1 : 0 ,
							v024 :		r && guard && fast && stable && v024 ? 1 : 0
						} ,
						pbg :			r && guard && fast && stable ? this.pbg : 0.0
					}
				} ,				
				roleMiddle : {																				//	RELAYS MIDDLE
					total : {
						count :			r && middle ? 1 : 0 ,
						bwa :			r && middle ? this.bwa : 0 ,
						bwc :			r && middle ? this.bwc : 0 ,
						osv : {
							linux :		r && middle && osLinux ? 1 : 0 ,
							darwin :	r && middle && osDarwin ? 1 : 0 ,
							freebsd :	r && middle && osFreebsd ? 1 : 0 ,
							windows :	r && middle && osWindows ? 1 : 0 ,
							other :		r && middle && osOther ? 1 : 0
						} ,
						tsv : {
							v010 :		r && middle && v010 ? 1 : 0 ,
							v011 :		r && middle && v011 ? 1 : 0 ,
							v012 :		r && middle && v012 ? 1 : 0 ,
							v020 :		r && middle && v020 ? 1 : 0 ,
							v021 :		r && middle && v021 ? 1 : 0 ,
							v022 :		r && middle && v022 ? 1 : 0 ,
							v023 :		r && middle && v023 ? 1 : 0 ,
							v024 :		r && middle && v024 ? 1 : 0 
						} ,
						pbm :			r && middle ? this.pbm : 0.0
					} ,
					flagNone : {
						count :			r && middle && !fast && !stable ? 1 : 0 ,
						bwa :			r && middle && !fast && !stable ? this.bwa : 0 ,
						bwc :			r && middle && !fast && !stable ? this.bwc : 0 ,
						osv : {
							linux :		r && middle && !fast && !stable && osLinux ? 1 : 0 ,
							darwin :	r && middle && !fast && !stable && osDarwin ? 1 : 0 ,
							freebsd :	r && middle && !fast && !stable && osFreebsd ? 1 : 0 ,
							windows :	r && middle && !fast && !stable && osWindows ? 1 : 0 ,
							other :		r && middle && !fast && !stable && osOther ? 1 : 0
						} ,
						tsv : {
							v010 :		r && middle && !fast && !stable && v010 ? 1 : 0 ,
							v011 :		r && middle && !fast && !stable && v011 ? 1 : 0 ,
							v012 :		r && middle && !fast && !stable && v012 ? 1 : 0 ,
							v020 :		r && middle && !fast && !stable && v020 ? 1 : 0 ,
							v021 :		r && middle && !fast && !stable && v021 ? 1 : 0 ,
							v022 :		r && middle && !fast && !stable && v022 ? 1 : 0 ,
							v023 :		r && middle && !fast && !stable && v023 ? 1 : 0 ,
							v024 :		r && middle && !fast && !stable && v024 ? 1 : 0
						} ,
						pbm :			r && middle && !fast && !stable ? this.pbm : 0.0
					} ,
					flagStable : {
						count :			r && middle && !fast && stable ? 1 : 0 ,
						bwa :			r && middle && !fast && stable ? this.bwa : 0 ,
						bwc :			r && middle && !fast && stable ? this.bwc : 0 ,
						osv : {
							linux :		r && middle && !fast && stable && osLinux ? 1 : 0 ,
							darwin :	r && middle && !fast && stable && osDarwin ? 1 : 0 ,
							freebsd :	r && middle && !fast && stable && osFreebsd ? 1 : 0 ,
							windows :	r && middle && !fast && stable && osWindows ? 1 : 0 ,
							other :		r && middle && !fast && stable && osOther ? 1 : 0
						} ,
						tsv : {
							v010 :		r && middle && !fast && stable && v010 ? 1 : 0 ,
							v011 :		r && middle && !fast && stable && v011 ? 1 : 0 ,
							v012 :		r && middle && !fast && stable && v012 ? 1 : 0 ,
							v020 :		r && middle && !fast && stable && v020 ? 1 : 0 ,
							v021 :		r && middle && !fast && stable && v021 ? 1 : 0 ,
							v022 :		r && middle && !fast && stable && v022 ? 1 : 0 ,
							v023 :		r && middle && !fast && stable && v023 ? 1 : 0 ,
							v024 :		r && middle && !fast && stable && v024 ? 1 : 0
						} ,
						pbm :			r && middle && !fast && stable ? this.pbm : 0.0
					} ,
					flagFast : {
						count :			r && middle && fast && !stable ? 1 : 0 ,
						bwa :			r && middle && fast && !stable ? this.bwa : 0 ,
						bwc :			r && middle && fast && !stable ? this.bwc : 0 ,
						osv : {
							linux :		r && middle && fast && !stable && osLinux ? 1 : 0 ,
							darwin :	r && middle && fast && !stable && osDarwin ? 1 : 0 ,
							freebsd :	r && middle && fast && !stable && osFreebsd ? 1 : 0 ,
							windows :	r && middle && fast && !stable && osWindows ? 1 : 0 ,
							other :		r && middle && fast && !stable && osOther ? 1 : 0
						} ,
						tsv : {
							v010 :		r && middle && fast && !stable && v010 ? 1 : 0 ,
							v011 :		r && middle && fast && !stable && v011 ? 1 : 0 ,
							v012 :		r && middle && fast && !stable && v012 ? 1 : 0 ,
							v020 :		r && middle && fast && !stable && v020 ? 1 : 0 ,
							v021 :		r && middle && fast && !stable && v021 ? 1 : 0 ,
							v022 :		r && middle && fast && !stable && v022 ? 1 : 0 ,
							v023 :		r && middle && fast && !stable && v023 ? 1 : 0 ,
							v024 :		r && middle && fast && !stable && v024 ? 1 : 0
						} ,
						pbm :			r && middle && fast && !stable ? this.pbm : 0.0
					} ,
					flagFastStable : {
						count :			r && middle && fast && stable ? 1 : 0 ,
						bwa :			r && middle && fast && stable ? this.bwa : 0 ,
						bwc :			r && middle && fast && stable ? this.bwc : 0 ,
						osv : {
							linux :		r && middle && fast && stable && osLinux ? 1 : 0 ,
							darwin :	r && middle && fast && stable && osDarwin ? 1 : 0 ,
							freebsd :	r && middle && fast && stable && osFreebsd ? 1 : 0 ,
							windows :	r && middle && fast && stable && osWindows ? 1 : 0 ,
							other :		r && middle && fast && stable && osOther ? 1 : 0
						} ,
						tsv : {
							v010 :		r && middle && fast && stable && v010 ? 1 : 0 ,
							v011 :		r && middle && fast && stable && v011 ? 1 : 0 ,
							v012 :		r && middle && fast && stable && v012 ? 1 : 0 ,
							v020 :		r && middle && fast && stable && v020 ? 1 : 0 ,
							v021 :		r && middle && fast && stable && v021 ? 1 : 0 ,
							v022 :		r && middle && fast && stable && v022 ? 1 : 0 ,
							v023 :		r && middle && fast && stable && v023 ? 1 : 0 ,
							v024 :		r && middle && fast && stable && v024 ? 1 : 0
						} ,
						pbm :			r && middle && fast && stable ? this.pbm : 0.0
					}
				} ,
				roleExit : {																				//	RELAYS EXIT
					total : {
						count :			r && exit ? 1 : 0 ,
						bwa :			r && exit ? this.bwa : 0 ,
						bwc :			r && exit ? this.bwc : 0 ,
						osv : {
							linux :		r && exit && osLinux ? 1 : 0 ,
							darwin :	r && exit && osDarwin ? 1 : 0 ,
							freebsd :	r && exit && osFreebsd ? 1 : 0 ,
							windows :	r && exit && osWindows ? 1 : 0 ,
							other :		r && exit && osOther ? 1 : 0
						} ,
						tsv : {
							v010 :		r && exit && v010 ? 1 : 0 ,
							v011 :		r && exit && v011 ? 1 : 0 ,
							v012 :		r && exit && v012 ? 1 : 0 ,
							v020 :		r && exit && v020 ? 1 : 0 ,
							v021 :		r && exit && v021 ? 1 : 0 ,
							v022 :		r && exit && v022 ? 1 : 0 ,
							v023 :		r && exit && v023 ? 1 : 0 ,
							v024 :		r && exit && v024 ? 1 : 0
						} ,
						pex : {
							p4  :		r && exit && this.pex.indexOf(443) > -1 ? 1 : 0 ,
							p6  :		r && exit && this.pex.indexOf(6667) > -1 ? 1 : 0 ,
							p8  :		r && exit && this.pex.indexOf(80) > -1 ? 1 : 0 ,
							p46  :		r && exit && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1 ? 1 : 0 ,
							p48  :		r && exit && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1 ? 1 : 0 ,
							p68  :		r && exit && this.pex.indexOf(80) > -1 && this.pex.indexOf(6667) > -1 ? 1 : 0 ,
							p468  :		r && exit && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1 ? 1 : 0
						} ,
						pbe :			r && exit ? this.pbe : 0.0
					} ,
					flagNone : {
						count :			r && exit && !fast && !stable ? 1 : 0 ,
						bwa :			r && exit && !fast && !stable ? this.bwa : 0 ,
						bwc :			r && exit && !fast && !stable ? this.bwc : 0 ,
						osv : {
							linux :		r && exit && !fast && !stable && osLinux ? 1 : 0 ,
							darwin :	r && exit && !fast && !stable && osDarwin ? 1 : 0 ,
							freebsd :	r && exit && !fast && !stable && osFreebsd ? 1 : 0 ,
							windows :	r && exit && !fast && !stable && osWindows ? 1 : 0 ,
							other :		r && exit && !fast && !stable && osOther ? 1 : 0
						} ,
						tsv : {
							v010 :		r && exit && !fast && !stable && v010 ? 1 : 0 ,
							v011 :		r && exit && !fast && !stable && v011 ? 1 : 0 ,
							v012 :		r && exit && !fast && !stable && v012 ? 1 : 0 ,
							v020 :		r && exit && !fast && !stable && v020 ? 1 : 0 ,
							v021 :		r && exit && !fast && !stable && v021 ? 1 : 0 ,
							v022 :		r && exit && !fast && !stable && v022 ? 1 : 0 ,
							v023 :		r && exit && !fast && !stable && v023 ? 1 : 0 ,
							v024 :		r && exit && !fast && !stable && v024 ? 1 : 0
						} ,
						pex : {
							p4  :		r && exit && !fast && !stable && this.pex.indexOf(443) > -1 ? 1 : 0 ,
							p6  :		r && exit && !fast && !stable && this.pex.indexOf(6667) > -1 ? 1 : 0 ,
							p8  :		r && exit && !fast && !stable && this.pex.indexOf(80) > -1 ? 1 : 0 ,
							p46  :		r && exit && !fast && !stable && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1 ? 1 : 0 ,
							p48  :		r && exit && !fast && !stable && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1 ? 1 : 0 ,
							p68  :		r && exit && !fast && !stable && this.pex.indexOf(80) > -1 && this.pex.indexOf(6667) > -1 ? 1 : 0 ,
							p468  :		r && exit && !fast && !stable && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1 ? 1 : 0
						} ,
						pbe :			r && exit && !fast && !stable ? this.pbe : 0.0
					} ,
					flagFast : {
						count :			r && exit && fast && !stable ? 1 : 0 ,
						bwa :			r && exit && fast && !stable ? this.bwa : 0 ,
						bwc :			r && exit && fast && !stable ? this.bwc : 0 ,
						osv : {
							linux :		r && exit && fast && !stable && osLinux ? 1 : 0 ,
							darwin :	r && exit && fast && !stable && osDarwin ? 1 : 0 ,
							freebsd :	r && exit && fast && !stable && osFreebsd ? 1 : 0 ,
							windows :	r && exit && fast && !stable && osWindows ? 1 : 0 ,
							other :		r && exit && fast && !stable && osOther ? 1 : 0
						} ,
						tsv : {
							v010 :		r && exit && fast && !stable && v010 ? 1 : 0 ,
							v011 :		r && exit && fast && !stable && v011 ? 1 : 0 ,
							v012 :		r && exit && fast && !stable && v012 ? 1 : 0 ,
							v020 :		r && exit && fast && !stable && v020 ? 1 : 0 ,
							v021 :		r && exit && fast && !stable && v021 ? 1 : 0 ,
							v022 :		r && exit && fast && !stable && v022 ? 1 : 0 ,
							v023 :		r && exit && fast && !stable && v023 ? 1 : 0 ,
							v024 :		r && exit && fast && !stable && v024 ? 1 : 0
						} ,
						pex : {
							p4  :		r && exit && fast && !stable && this.pex.indexOf(443) > -1 ? 1 : 0 ,
							p6  :		r && exit && fast && !stable && this.pex.indexOf(6667) > -1 ? 1 : 0 ,
							p8  :		r && exit && fast && !stable && this.pex.indexOf(80) > -1 ? 1 : 0 ,
							p46  :		r && exit && fast && !stable && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1 ? 1 : 0 ,
							p48  :		r && exit && fast && !stable && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1 ? 1 : 0 ,
							p68  :		r && exit && fast && !stable && this.pex.indexOf(80) > -1 && this.pex.indexOf(6667) > -1 ? 1 : 0 ,
							p468  :		r && exit && fast && !stable && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1 ? 1 : 0
						} ,
						pbe :			r && exit && fast && !stable ? this.pbe : 0.0
					} ,
					flagStable : {
						count :			r && exit && !fast && stable ? 1 : 0 ,
						bwa :			r && exit && !fast && stable ? this.bwa : 0 ,
						bwc :			r && exit && !fast && stable ? this.bwc : 0 ,
						osv : {
							linux :		r && exit && !fast && stable && osLinux ? 1 : 0 ,
							darwin :	r && exit && !fast && stable && osDarwin ? 1 : 0 ,
							freebsd :	r && exit && !fast && stable && osFreebsd ? 1 : 0 ,
							windows :	r && exit && !fast && stable && osWindows ? 1 : 0 ,
							other :		r && exit && !fast && stable && osOther ? 1 : 0
						} ,
						tsv : {
							v010 :		r && exit && !fast && stable && v010 ? 1 : 0 ,
							v011 :		r && exit && !fast && stable && v011 ? 1 : 0 ,
							v012 :		r && exit && !fast && stable && v012 ? 1 : 0 ,
							v020 :		r && exit && !fast && stable && v020 ? 1 : 0 ,
							v021 :		r && exit && !fast && stable && v021 ? 1 : 0 ,
							v022 :		r && exit && !fast && stable && v022 ? 1 : 0 ,
							v023 :		r && exit && !fast && stable && v023 ? 1 : 0 ,
							v024 :		r && exit && !fast && stable && v024 ? 1 : 0
						} ,
						pex : {
							p4  :		r && exit && !fast && stable && this.pex.indexOf(443) > -1 ? 1 : 0 ,
							p6  :		r && exit && !fast && stable && this.pex.indexOf(6667) > -1 ? 1 : 0 ,
							p8  :		r && exit && !fast && stable && this.pex.indexOf(80) > -1 ? 1 : 0 ,
							p46  :		r && exit && !fast && stable && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1 ? 1 : 0 ,
							p48  :		r && exit && !fast && stable && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1 ? 1 : 0 ,
							p68  :		r && exit && !fast && stable && this.pex.indexOf(80) > -1 && this.pex.indexOf(6667) > -1 ? 1 : 0 ,
							p468  :		r && exit && !fast && stable && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1 ? 1 : 0
						} ,
						pbe :			r && exit && !fast && stable ? this.pbe : 0.0
					} ,
					flagFastStable : {
						count :			r && exit && fast && stable ? 1 : 0 ,
						bwa :			r && exit && fast && stable ? this.bwa : 0 ,
						bwc :			r && exit && fast && stable ? this.bwc : 0 ,
						osv : {
							linux :		r && exit && fast && stable && osLinux ? 1 : 0 ,
							darwin :	r && exit && fast && stable && osDarwin ? 1 : 0 ,
							freebsd :	r && exit && fast && stable && osFreebsd ? 1 : 0 ,
							windows :	r && exit && fast && stable && osWindows ? 1 : 0 ,
							other :		r && exit && fast && stable && osOther ? 1 : 0
						} ,
						tsv : {
							v010 :		r && exit && fast && stable && v010 ? 1 : 0 ,
							v011 :		r && exit && fast && stable && v011 ? 1 : 0 ,
							v012 :		r && exit && fast && stable && v012 ? 1 : 0 ,
							v020 :		r && exit && fast && stable && v020 ? 1 : 0 ,
							v021 :		r && exit && fast && stable && v021 ? 1 : 0 ,
							v022 :		r && exit && fast && stable && v022 ? 1 : 0 ,
							v023 :		r && exit && fast && stable && v023 ? 1 : 0 ,
							v024 :		r && exit && fast && stable && v024 ? 1 : 0
						} ,
						pex : {
							p4  :		r && exit && fast && stable && this.pex.indexOf(443) > -1 ? 1 : 0 ,
							p6  :		r && exit && fast && stable && this.pex.indexOf(6667) > -1 ? 1 : 0 ,
							p8  :		r && exit && fast && stable && this.pex.indexOf(80) > -1 ? 1 : 0 ,
							p46  :		r && exit && fast && stable && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1 ? 1 : 0 ,
							p48  :		r && exit && fast && stable && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1 ? 1 : 0 ,
							p68  :		r && exit && fast && stable && this.pex.indexOf(80) > -1 && this.pex.indexOf(6667) > -1 ? 1 : 0 ,
							p468  :		r && exit && fast && stable && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1 ? 1 : 0
						} ,
						pbe :			r && exit && fast && stable ? this.pbe : 0.0	
					}
				} ,		
				roleDir : {																					//	RELAYS DIR
					total : {
						count :			r && dir ? 1 : 0 ,
						bwa :			r && dir ? this.bwa : 0 ,
						bwc :			r && dir ? this.bwc : 0 ,
						osv : {
							linux :		r && dir && osLinux ? 1 : 0 ,
							darwin :	r && dir && osDarwin ? 1 : 0 ,
							freebsd :	r && dir && osFreebsd ? 1 : 0 ,
							windows :	r && dir && osWindows ? 1 : 0 ,
							other :		r && dir && osOther ? 1 : 0
						} ,
						tsv : {
							v010 :		r && dir && v010 ? 1 : 0 ,
							v011 :		r && dir && v011 ? 1 : 0 ,
							v012 :		r && dir && v012 ? 1 : 0 ,
							v020 :		r && dir && v020 ? 1 : 0 ,
							v021 :		r && dir && v021 ? 1 : 0 ,
							v022 :		r && dir && v022 ? 1 : 0 ,
							v023 :		r && dir && v023 ? 1 : 0 ,
							v024 :		r && dir && v024 ? 1 : 0
						}		
					} ,
					authorityTrue : {
						count :			r && dir && authority ? 1 : 0 ,
						bwa :			r && dir && authority ? this.bwa : 0 ,
						bwc :			r && dir && authority ? this.bwc : 0 ,
						osv : {
							linux :		r && dir && authority && osLinux ? 1 : 0 ,
							darwin :	r && dir && authority && osDarwin ? 1 : 0 ,
							freebsd :	r && dir && authority && osFreebsd ? 1 : 0 ,
							windows :	r && dir && authority && osWindows ? 1 : 0 ,
							other :		r && dir && authority && osOther ? 1 : 0
						} ,
						tsv : {
							v010 :		r && dir && authority && v010 ? 1 : 0 ,
							v011 :		r && dir && authority && v011 ? 1 : 0 ,
							v012 :		r && dir && authority && v012 ? 1 : 0 ,
							v020 :		r && dir && authority && v020 ? 1 : 0 ,
							v021 :		r && dir && authority && v021 ? 1 : 0 ,
							v022 :		r && dir && authority && v022 ? 1 : 0 ,
							v023 :		r && dir && authority && v023 ? 1 : 0 ,
							v024 :		r && dir && authority && v024 ? 1 : 0
						}
					}
				}
			}
		}
	};		
	emit( "Fact " + theDate , values );
};



//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
//	REDUCE
//	//////////////////////////////////////////////////////////////////////////////////////////////////////////


var reduceFact = function ( key, values ) {

	var fact = {
		date : "" ,
		clients : {																							//	CLIENTS
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
		servers : {																							//	SERVERS
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
			bridges : {																						//	BRIDGES
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
				roleAll : {																					//	RELAYS ALL
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
				roleGuard : {																				//	RELAYS GUARD
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
				roleMiddle : {																				//	RELAYS MIDDLE
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
				roleExit : {																				//	RELAYS EXIT
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
				roleDir : {																					//	RELAYS DIR
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
		fact.date = v.date ;

		fact.clients.total += v.clients.total ;																//	CLIENTS
		fact.clients.atBridges += v.clients.atBridges ;
		fact.clients.atRelays += v.clients.atRelays ;
		fact.clients.cip4 += v.clients.cip4 ;
		fact.clients.cip6 += v.clients.cip6 ;
		fact.clients.cptObfs2 += v.clients.cptObfs2 ;
		fact.clients.cptObfs3 += v.clients.cptObfs3 ;
		fact.clients.cptOR += v.clients.cptOR ;
		fact.clients.cptUnknown += v.clients.cptUnknown ;
		
		fact.servers.total.count += v.servers.total.count ;													//	SERVERS
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
		
		fact.servers.bridges.total.count += v.servers.bridges.total.count ;									//	BRIDGES
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
		
        fact.servers.relays.roleAll.total.count += v.servers.relays.roleAll.total.count ;					//	RELAYS ALL
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
	
		fact.servers.relays.roleGuard.total.count += v.servers.relays.roleGuard.total.count ;				//	RELAYS GUARD
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
		
		fact.servers.relays.roleMiddle.total.count += v.servers.relays.roleMiddle.total.count ;				//	RELAYS MIDDLE
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

		fact.servers.relays.roleExit.total.count += v.servers.relays.roleExit.total.count ;					//	RELAYS EXIT
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

		fact.servers.relays.roleDir.total.count += v.servers.relays.roleDir.total.count ;					//	RELAYS DIR
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


//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
//	FINALIZE
//	//////////////////////////////////////////////////////////////////////////////////////////////////////////

var finalizeFact = function ( key, fact ) {
	/*	
	//	do fancy stuff like averages etc.
	//	note that the fact.average field would have to be present in map and reduce too even if unused until finalize
	//	example from http://docs.mongodb.org/manual/tutorial/perform-incremental-map-reduce/
	if (fact.count > 0) fact.average = fact.total / fact.count;
	*/
	return fact ;
};


//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
//	CONFIGURE AND EXECUTE
//	//////////////////////////////////////////////////////////////////////////////////////////////////////////

var runAggregation = function(theDate) {
    db.facts.remove({ _id : "Fact " + theDate });		//	clean DB, otherwise we would add to the old values
	db.import.mapReduce (			
		mapValues,
		reduceFact,
		{ 
			out: { 
				reduce : "facts"		 				//	the final fact collection
				, nonAtomic : true						//	prevents locking of the db during post-processing
			}	
			, query : { "date" : theDate }
			, jsMode: true								//	check if feasable! is faster, but needs more memory
//			, finalize : finalizeFact
			, scope: { theDate: theDate }
		}
	);
}("2013-04-03 22");										//	TODO	remove self-call after testing
