function mapValues(doc,callback) {																//	was: 	var mapValues = function() {
																			                    //  defining some variables to ease mapping

    var c = ( this.type == "c" ) ;																//	clients
    var b = ( this.type == "b" ) ;																//	bridges
    var r = ( this.type == "r" ) ;																//	relays
    var s = ( this.type == "b" || this.type == "r" ) ;											//	servers
	
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
	
	
	var value = {
		date : this.date ,																		//	was:	theDate
		span : 1 ,																				// 	was:	theSpan
		clients : {                                                                             //  CLIENTS
			total : 					c ?  this.cr + this.cb  : 0,
			atBridges :					c ?  this.cb : 0 ,
			atRelays : 					c ?  this.cr : 0,
			cip4 : 						c && this.cip && this.cip.v4 ? this.cip.v4 : 0,			// line 55 to 60 this.cip + this.cpt tests to account fpr missing values in import data
			cip6 : 						c && this.cip && this.cip.v6 ? this.cip.v6 : 0 ,
			cptObfs2 : 					c && this.cpt && this.cpt.obfs2 ? this.cpt.obfs2 : 0 ,
			cptObfs3 : 					c && this.cpt && this.cpt.obfs3 ? this.cpt.obfs3 : 0 ,
			cptOR : 					c && this.cpt && this.cpt.OR ? this.cpt.OR : 0 ,
			cptUnknown :				c && this.cpt && this.cpt.unknown ? this.cpt.unknown : 0
		} ,		                                                                                //  SERVERS
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
				roleAll : {																		//	RELAYS	ALL
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
							v012 :		r && !fast && stable && v012 ? 1 : 0 ,
							v020 :		r && !fast && stable && v020 ? 1 : 0 ,
							v021 :		r && !fast && stable && v021 ? 1 : 0 ,
							v022 :		r && !fast && stable && v022 ? 1 : 0 ,
							v023 :		r && !fast && stable && v023 ? 1 : 0 ,
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
				roleGuard : {																	//	RELAYS	GUARD
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
				roleMiddle : {																	//	RELAYS	MIDDLE
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
				roleExit : {																	//	RELAYS	EXIT
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
				roleDir : {																		//	RELAYS	DIR
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
		} ,
		countries :	[] ,                                                                        //  COUNTRIES   more below
		autosys : [                                                                             //  AUTOSYS
			{
				as :                    r && this.as ? this.as : "" ,
				//  name :              r && this.as ? function(as) { return name; } : "" ;	    //	TODO	lookup name for AS
				//  home :              r && this.as ? function(as) { return home; } : "" ;		//	TODO	lookup home country for AS
				relay :                 r && this.as ? 1 : 0 ,
				bwa :                   r && this.as && this.bwa ? this.bwa : 0 ,
				bwc :                   r && this.as && this.bwc ? this.bwc : 0 ,
				fast :                  this.as && fast ? 1 : 0 ,
				stable :                this.as && stable ? 1 : 0 ,
				guard :                 this.as && guard ? 1 : 0 ,
				middle :                this.as && middle ? 1 : 0 ,
				exit :                  this.as && exit ? 1 : 0 ,
				dir :                   this.as && dir ? 1 : 0 ,
				pbr:                    r && this.as && this.pbr ? this.pbr : 0,
				pbg :                   r && this.as && this.pbg ? this.pbg : 0 ,
				pbm :                   r && this.as && this.pbm ? this.pbm : 0 ,
				pbe :                   r && this.as && this.pbe ? this.pbe : 0 ,
				countries : [
					{
						cc :            r && this.as && this.cc ? this.cc : "" ,
						relay :         r && this.as && this.cc ? 1 : 0 ,
						bwa :           r && this.as && this.cc && this.bwa ? this.bwa : 0 ,
						bwc :           r && this.as && this.cc && this.bwc ? this.bwc : 0 ,
						fast :          this.as && fast ? 1 : 0 ,
						stable :        this.as && stable ? 1 : 0 ,
						guard :         this.as && guard ? 1 : 0 ,
						middle :        this.as && middle ? 1 : 0 ,
						exit :          this.as && exit ? 1 : 0 ,
						dir :           this.as && dir ? 1 : 0 ,
						pbr:            r && this.as && this.cc && this.pbr ? this.pbr : 0 ,
						pbg :           r && this.as && this.cc && this.pbg ? this.pbg : 0 ,
						pbm :           r && this.as && this.cc && this.pbm ? this.pbm : 0 ,
						pbe :           r && this.as && this.cc && this.pbe ? this.pbe : 0
					}
				]
			}
		]
	};				
	
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
		country: 			"" ,
		cbcc:				0 ,
		crcc:				0 ,
		relay: 				0 ,
		guard: 				0 ,
		middle: 			0 ,
		exit:  				0 ,
		dir: 				0 ,
		bwa: 				0 ,
		bwc: 				0 ,
		pbr: 				0 ,
		pbg: 				0 ,
		pbm: 				0 ,
		pbe: 				0 ,
		fast: 				0 ,
		stable: 			0 ,
		osv : {
			linux : 		0 ,
			darwin : 		0 ,
			freebsd :		0 ,
			windows :		0 ,
			other : 		0
		} ,
		tsv : {				
			v010 : 			0 ,
			v011 : 			0 ,
			v012 : 			0 ,
			v020 : 			0 ,
			v021 : 			0 ,
			v022 : 			0 ,
			v023 : 			0 ,
			v024 : 			0
		} ,					
		pex : {				
			p4 :			0 ,
			p6 :			0 ,
			p8 :			0 ,
			p46 :			0 ,
			p48 :			0 ,
			p68 :			0 ,
			p468 :			0
		} ,					
		autosys :			[]
	} ;

	if (c) {																					//	if input document is of type "c" (client) just add client information,
		for(var cb in this.cbcc) {
			if (this.cbcc.hasOwnProperty(cb)) {
                var cbccCountryObject = new CountryObject();
                cbccCountryObject.country = cb ;
                cbccCountryObject.cbcc = this.cbcc[cb] ;
                cbccCountryObject.crcc = 0 ;
                cbccCountryObject.relay = 0 ;
                cbccCountryObject.guard = 0 ;
                cbccCountryObject.middle = 0 ;
                cbccCountryObject.exit =  0 ;
                cbccCountryObject.dir =  0 ;
                cbccCountryObject.bwa = 0 ;
                cbccCountryObject.bwc = 0 ;
                cbccCountryObject.pbr = 0 ;
                cbccCountryObject.pbg =	0 ;
                cbccCountryObject.pbm = 0 ;
                cbccCountryObject.pbe = 0 ;
                cbccCountryObject.fast =0 ;
                cbccCountryObject.stable = 0 ;
                cbccCountryObject.osv = {} ;                                                    //  TODO    unclear why this (and similarly below) is necessary
                cbccCountryObject.osv.linux = 0 ;
                cbccCountryObject.osv.darwin = 0 ;
                cbccCountryObject.osv.freebsd = 0 ;
                cbccCountryObject.osv.windows = 0 ;
                cbccCountryObject.osv.other = 0 ;
                cbccCountryObject.tsv = {} ;
                cbccCountryObject.tsv.v010 = 0 ;
                cbccCountryObject.tsv.v011 = 0 ;
                cbccCountryObject.tsv.v012 = 0 ;
                cbccCountryObject.tsv.v020 = 0 ;
                cbccCountryObject.tsv.v021 = 0 ;
                cbccCountryObject.tsv.v022 = 0 ;
                cbccCountryObject.tsv.v023 = 0 ;
                cbccCountryObject.tsv.v024 = 0 ;
                cbccCountryObject.pex = {} ;
                cbccCountryObject.pex.p4 = 0 ;
                cbccCountryObject.pex.p6 = 0 ;
                cbccCountryObject.pex.p8 = 0 ;
                cbccCountryObject.pex.p46 = 0 ;
                cbccCountryObject.pex.p48 = 0 ;
                cbccCountryObject.pex.p68 = 0 ;
                cbccCountryObject.pex.p468 = 0 ;
                cbccCountryObject.autosys = [] ;
                value.countries.push(cbccCountryObject) ;
            }
		}
		for(var cr in this.crcc) {
			if (this.crcc.hasOwnProperty(cr)) {
                var crccCountryObject = new CountryObject();
                crccCountryObject.country = cr ;
                crccCountryObject.crcc = this.crcc[cr] ;
                crccCountryObject.cbcc = 0 ;											        //	reset cbcc to 0, otherwise it will still hold the value from the last cbcc run
                crccCountryObject.relay = 0 ;
                crccCountryObject.guard = 0 ;
                crccCountryObject.middle = 0 ;
                crccCountryObject.exit =  0 ;
                crccCountryObject.dir =  0 ;
                crccCountryObject.bwa = 0 ;
                crccCountryObject.bwc = 0 ;
                crccCountryObject.pbr = 0 ;
                crccCountryObject.pbg =	0 ;
                crccCountryObject.pbm = 0 ;
                crccCountryObject.pbe = 0 ;
                crccCountryObject.fast =0 ;
                crccCountryObject.stable = 0 ;
                crccCountryObject.osv = {} ;
                crccCountryObject.osv.linux = 0 ;
                crccCountryObject.osv.darwin = 0 ;
                crccCountryObject.osv.freebsd = 0 ;
                crccCountryObject.osv.windows = 0 ;
                crccCountryObject.osv.other = 0 ;
                crccCountryObject.tsv = {} ;
                crccCountryObject.tsv.v010 = 0 ;
                crccCountryObject.tsv.v011 = 0 ;
                crccCountryObject.tsv.v012 = 0 ;
                crccCountryObject.tsv.v020 = 0 ;
                crccCountryObject.tsv.v021 = 0 ;
                crccCountryObject.tsv.v022 = 0 ;
                crccCountryObject.tsv.v023 = 0 ;
                crccCountryObject.tsv.v024 = 0 ;
                crccCountryObject.pex = {} ;
                crccCountryObject.pex.p4 = 0 ;
                crccCountryObject.pex.p6 = 0 ;
                crccCountryObject.pex.p8 = 0 ;
                crccCountryObject.pex.p46 = 0 ;
                crccCountryObject.pex.p48 = 0 ;
                crccCountryObject.pex.p68 = 0 ;
                crccCountryObject.pex.p468 = 0 ;
                crccCountryObject.autosys = [] ;
                value.countries.push(crccCountryObject);
			}
		}
	}
	else if (r && this.cc) {                                                                    //	if it's a relay and cc field is not empty
        var rCountryObject = new CountryObject();
		rCountryObject.country = this.cc ;
		rCountryObject.cbcc = 0 ;
		rCountryObject.crcc = 0 ;
		rCountryObject.relay = 1 ;
		guard ? rCountryObject.guard = 1 : rCountryObject.guard = 0 ;
		middle ? rCountryObject.middle = 1 : rCountryObject.middle = 0 ;
		exit ? rCountryObject.exit = 1 : rCountryObject.exit =  0 ;
		dir ? rCountryObject.dir = 1 : rCountryObject.dir =  0 ;
		this.bwa ? rCountryObject.bwa = this.bwa : rCountryObject.bwa = 0 ;                     //  this.   is needed here because bwa is not defined as as a variable above
		this.bwc ? rCountryObject.bwc = this.bwc : rCountryObject.bwc = 0 ;                     //          same here and in the next few lines
		this.pbr ? rCountryObject.pbr = this.pbr : rCountryObject.pbr = 0 ;
		guard ? rCountryObject.pbg = this.pbg : rCountryObject.pbg = 0 ;
		middle ? rCountryObject.pbm = this.pbm : rCountryObject.pbm = 0 ;
		exit ? rCountryObject.pbe = this.pbe : rCountryObject.pbe = 0 ;
		fast ? rCountryObject.fast =1 : rCountryObject.fast = 0 ;
		stable ? rCountryObject.stable =1 : rCountryObject.stable = 0 ;
        rCountryObject.osv = {} ;                                                               //  reduce otherwise skips osv{} for relays
		osLinux ? rCountryObject.osv.linux = 1 : rCountryObject.osv.linux = 0 ;
		osDarwin ? rCountryObject.osv.darwin = 1 : rCountryObject.osv.darwin = 0 ;
		osFreebsd ? rCountryObject.osv.freebsd = 1 : rCountryObject.osv.freebsd = 0 ;
		osWindows ? rCountryObject.osv.windows = 1 : rCountryObject.osv.windows = 0 ;
		osOther ? rCountryObject.osv.other = 1 : rCountryObject.osv.other = 0 ;
        rCountryObject.tsv = {} ;                                                               //  reduce otherwise skips tsv{} for relays
		v010 ? rCountryObject.tsv.v010 = 1 : rCountryObject.tsv.v010 = 0 ;
		v011 ? rCountryObject.tsv.v011 = 1 : rCountryObject.tsv.v011 = 0 ;
		v012 ? rCountryObject.tsv.v012 = 1 : rCountryObject.tsv.v012 = 0 ;
		v020 ? rCountryObject.tsv.v020 = 1 : rCountryObject.tsv.v020 = 0 ;
		v021 ? rCountryObject.tsv.v021 = 1 : rCountryObject.tsv.v021 = 0 ;
		v022 ? rCountryObject.tsv.v022 = 1 : rCountryObject.tsv.v022 = 0 ;
		v023 ? rCountryObject.tsv.v023 = 1 : rCountryObject.tsv.v023 = 0 ;
		v024 ? rCountryObject.tsv.v024 = 1 : rCountryObject.tsv.v024 = 0 ;
        rCountryObject.pex = {} ;                                                               //  reduce otherwise skips pex{} for relays
		exit && this.pex.indexOf(443) > -1 ? rCountryObject.pex.p4 = 1 : rCountryObject.pex.p4 = 0 ;
		exit && this.pex.indexOf(6667) > -1 ? rCountryObject.pex.p6 = 1 : rCountryObject.pex.p6 = 0 ;
		exit && this.pex.indexOf(80) > -1 ? rCountryObject.pex.p8 = 1 : rCountryObject.pex.p8 = 0 ;
		exit && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1 ? rCountryObject.pex.p46 = 1 : rCountryObject.pex.p46 = 0 ;
		exit && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1 ? rCountryObject.pex.p48 = 1 : rCountryObject.pex.p48 = 0 ;
		exit && this.pex.indexOf(80) > -1 && this.pex.indexOf(6667) > -1 ? rCountryObject.pex.p68 = 1 : rCountryObject.pex.p68 = 0 ;
		exit && this.pex.indexOf(80) > -1 && this.pex.indexOf(443) > -1 && this.pex.indexOf(6667) > -1 ? rCountryObject.pex.p468 = 1 : rCountryObject.pex.p468 = 0 ;
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

	callback( this.date, value )																//	was:	emit( theDate , value );
};

node_mongo_hadoop.MapBSONStream(mapValues);


/*

	// example from https://github.com/mongodb/mongo-hadoop/blob/master/streaming/README.md

	function mapFunc(doc, callback){
		if(doc.headers && doc.headers.From && doc.headers.To){
			var from_field = doc['headers']['From']
			var to_field = doc['headers']['To']
			var recips = []
			to_field.split(',').forEach(function(to){
			  callback( {'_id': {'f':from_field, 't':trimString(to)}, 'count': 1} )
			});
		}
	}
	node_mongo_hadoop.MapBSONStream(mapFunc);

*/