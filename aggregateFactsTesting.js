//	//////////////////////////////////////////////////////////////////////////////////////////////////////////	
//
//	ENGINE ROOM
//	everything you need to aggregate facts for one date
//
//	//////////////////////////////////////////////////////////////////////////////////////////////////////////	



//	//////////////////////////////////////////////////////////////////////////////////////////////////////////	
//	MAP
//	//////////////////////////////////////////////////////////////////////////////////////////////////////////


//	clients
var mapClients = function() {
	var clients = {
		total : this.cr + this.cb ,
		atBridges : this.cb ,
		atRelays : this.cr ,
		cip4 : this.cip.v4 ,
		cip6 : this.cip.v6 ,
		cptObfs2 : this.cpt.obfs2 ,
		cptObfs3 : this.cpt.obfs3 ,
		cptOR : this.cpt.OR ,
		cptUnknown : this.cpt.Unknown
	};
	emit( this.date , clients );
};

//	servers													in 3 steps, because it has to be gathererd from 2 collections and then aggregated to a 3.		
var mapServersRelays = function() {
	var theDate = this.date;
	var ServersRelays = {
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
	};
//	emit( (theDate, "relays") , ServersRelays );   		//	combined key '{date, "relays"}'
    emit( theDate , ServersRelays );                    //  TODO    only for testing
};

var mapServersBridges = function() {
	var theDate = this.date;
	var ServersBridges = {
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
	};
//	emit( (theDate, "bridges") , ServersBridges );		//	combined key '{theDate, "bridges"}'
    emit( theDate , ServersBridges );                    //  TODO    only for testing
};

var mapServers = function() {
	var theDate = this.date;
	var servers = {
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
	};
	emit( theDate , servers );							//	ordinary key 'date'
};

//	bridges	
var mapBridges = function() {
	var theDate = this.date;
	var bridges = {
		servers : {
			bridges : {
				total : {
					count : (this.type == "bridge") ? 1 : 0 ,
					bwa : (this.type == "bridge") ? this.bwa : 0 ,
					bwc : (this.type == "bridge") ? this.bwc : 0 ,
					osv : {
						linux : (this.type == "bridge" && this.osv == "linux") ? 1 : 0 ,
						darwin : (this.type == "bridge" && this.osv == "darwin") ? 1 : 0 ,
						freebsd : (this.type == "bridge" && this.osv == "freebsd") ? 1 : 0 ,
						windows : (this.type == "bridge" && this.osv == "windows") ? 1 : 0 ,
						other : (this.type == "bridge" && this.osv == "other") ? 1 : 0
					} ,
					tsv : {
						v010 : (this.type == "bridge" && this.tsv == "010") ? 1 : 0 ,
						v011 : (this.type == "bridge" && this.tsv == "011") ? 1 : 0 ,
						v012 : (this.type == "bridge" && this.tsv == "012") ? 1 : 0 ,
						v020 : (this.type == "bridge" && this.tsv == "020") ? 1 : 0 ,
						v021 : (this.type == "bridge" && this.tsv == "021") ? 1 : 0 ,
						v022 : (this.type == "bridge" && this.tsv == "022") ? 1 : 0 ,
						v023 : (this.type == "bridge" && this.tsv == "023") ? 1 : 0 ,
						v024 : (this.type == "bridge" && this.tsv == "024") ? 1 : 0
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
				} /* ,
				brtObfs2 : {
					count : (this.brt == [obfs2]) ? 1 : 0 ,
					bwa : (this.brt == [obfs2]) ? this.bwa : 0 ,
					bwc : (this.brt == [obfs2]) ? this.bwc : 0 ,
					osv : {
						linux : (this.brt == [obfs2] && this.osv == "linux") ? 1 : 0 ,
						darwin : (this.brt == [obfs2] && this.osv == "darwin") ? 1 : 0 ,
						freebsd : (this.brt == [obfs2] && this.osv == "freebsd") ? 1 : 0 ,
						windows : (this.brt == [obfs2] && this.osv == "windows") ? 1 : 0 ,
						other : (this.brt == [obfs2] && this.osv == "other") ? 1 : 0
					} ,
					tsv : {
						v010 : (this.brt == [obfs2] && this.tsv == "010") ? 1 : 0 ,
						v011 : (this.brt == [obfs2] && this.tsv == "011") ? 1 : 0 ,
						v012 : (this.brt == [obfs2] && this.tsv == "012") ? 1 : 0 ,
						v020 : (this.brt == [obfs2] && this.tsv == "020") ? 1 : 0 ,
						v021 : (this.brt == [obfs2] && this.tsv == "021") ? 1 : 0 ,
						v022 : (this.brt == [obfs2] && this.tsv == "022") ? 1 : 0 ,
						v023 : (this.brt == [obfs2] && this.tsv == "023") ? 1 : 0 ,
						v024 : (this.brt == [obfs2] && this.tsv == "024") ? 1 : 0
					}
				} ,
				brtObfs3 : {
					count : (this.brt == [obfs3]) ? 1 : 0 ,
					bwa : (this.brt == [obfs3]) ? this.bwa : 0 ,
					bwc : (this.brt == [obfs3]) ? this.bwc : 0 ,
					osv : {
						linux : (this.brt == [obfs3] && this.osv == "linux") ? 1 : 0 ,
						darwin : (this.brt == [obfs3] && this.osv == "darwin") ? 1 : 0 ,
						freebsd : (this.brt == [obfs3] && this.osv == "freebsd") ? 1 : 0 ,
						windows : (this.brt == [obfs3] && this.osv == "windows") ? 1 : 0 ,
						other : (this.brt == [obfs3] && this.osv == "other") ? 1 : 0
					} ,
					tsv : {
						v010 : (this.brt == [obfs3] && this.tsv == "010") ? 1 : 0 ,
						v011 : (this.brt == [obfs3] && this.tsv == "011") ? 1 : 0 ,
						v012 : (this.brt == [obfs3] && this.tsv == "012") ? 1 : 0 ,
						v020 : (this.brt == [obfs3] && this.tsv == "020") ? 1 : 0 ,
						v021 : (this.brt == [obfs3] && this.tsv == "021") ? 1 : 0 ,
						v022 : (this.brt == [obfs3] && this.tsv == "022") ? 1 : 0 ,
						v023 : (this.brt == [obfs3] && this.tsv == "023") ? 1 : 0 ,
						v024 : (this.brt == [obfs3] && this.tsv == "024") ? 1 : 0
					}
				} ,
				brtObfs23 : {
					count : (this.brt == [obfs23, obfs3]) ? 1 : 0 ,
					bwa : (this.brt == [obfs23, obfs3]) ? this.bwa : 0 ,
					bwc : (this.brt == [obfs23, obfs3]) ? this.bwc : 0 ,
					osv : {
						linux : (this.brt == [obfs23, obfs3] && this.osv == "linux") ? 1 : 0 ,
						darwin : (this.brt == [obfs23, obfs3] && this.osv == "darwin") ? 1 : 0 ,
						freebsd : (this.brt == [obfs23, obfs3] && this.osv == "freebsd") ? 1 : 0 ,
						windows : (this.brt == [obfs23, obfs3] && this.osv == "windows") ? 1 : 0 ,
						other : (this.brt == [obfs23, obfs3] && this.osv == "other") ? 1 : 0
					} ,
					tsv : {
						v010 : (this.brt == [obfs23, obfs3] && this.tsv == "010") ? 1 : 0 ,
						v011 : (this.brt == [obfs23, obfs3] && this.tsv == "011") ? 1 : 0 ,
						v012 : (this.brt == [obfs23, obfs3] && this.tsv == "012") ? 1 : 0 ,
						v020 : (this.brt == [obfs23, obfs3] && this.tsv == "020") ? 1 : 0 ,
						v021 : (this.brt == [obfs23, obfs3] && this.tsv == "021") ? 1 : 0 ,
						v022 : (this.brt == [obfs23, obfs3] && this.tsv == "022") ? 1 : 0 ,
						v023 : (this.brt == [obfs23, obfs3] && this.tsv == "023") ? 1 : 0 ,
						v024 : (this.brt == [obfs23, obfs3] && this.tsv == "024") ? 1 : 0
					}
				}
				*/
			}
		}
	};
	emit( theDate , bridges );
};

//	relays
var mapRelays = function() {
	var theDate = this.date;
	var relays = {
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
						count : (!(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? 1 : 0 ,
						bwa : (!(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.bwa : 0 ,
						bwc : (!(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.bwc : 0 ,
						osv : {
							linux : (!(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "linux") ? 1 : 0 ,
							darwin : (!(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (!(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "freebsd") ? 1 : 0 ,
							windows : (!(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "windows") ? 1 : 0 ,
							other : (!(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "other") ? 1 : 0 
						} ,
						tsv : {
							v010 : (!(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "010") ? 1 : 0 ,
							v011 : (!(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "011") ? 1 : 0 ,
							v012 : (!(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "012") ? 1 : 0 ,
							v020 : (!(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "020") ? 1 : 0 ,
							v021 : (!(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "021") ? 1 : 0 ,
							v022 : (!(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "022") ? 1 : 0 ,
							v023 : (!(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "023") ? 1 : 0 ,
							v024 : (!(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "024") ? 1 : 0
						} ,
						pbr : (!(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.pbr : 0.0
					} ,
					flagStable : {
						count : (!(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? 1 : 0 ,
						bwa : (!(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.bwa : 0 ,
						bwc : (!(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.bwc : 0 ,
						osv : {
							linux : (!(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "linux") ? 1 : 0 ,
							darwin : (!(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (!(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "freebsd") ? 1 : 0 ,
							windows : (!(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "windows") ? 1 : 0 ,
							other : (!(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (!(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "010") ? 1 : 0 ,
							v011 : (!(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "011") ? 1 : 0 ,
							v012 : (!(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "012") ? 1 : 0 ,
							v020 : (!(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "020") ? 1 : 0 ,
							v021 : (!(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "021") ? 1 : 0 ,
							v022 : (!(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "022") ? 1 : 0 ,
							v023 : (!(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "023") ? 1 : 0 ,
							v024 : (!(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "024") ? 1 : 0
						} ,
						pbr : (!(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.pbr : 0.0
					} ,
					flagFast : {
						count : ((flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? 1 : 0 ,
						bwa : ((flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.bwa : 0 ,
						bwc : ((flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.bwc : 0 ,
						osv : {
							linux : ((flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "linux") ? 1 : 0 ,
							darwin : ((flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "darwin") ? 1 : 0 ,
							freebsd : ((flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "freebsd") ? 1 : 0 ,
							windows : ((flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "windows") ? 1 : 0 ,
							other : ((flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : ((flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "010") ? 1 : 0 ,
							v011 : ((flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "011") ? 1 : 0 ,
							v012 : ((flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "012") ? 1 : 0 ,
							v020 : ((flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "020") ? 1 : 0 ,
							v021 : ((flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "021") ? 1 : 0 ,
							v022 : ((flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "022") ? 1 : 0 ,
							v023 : ((flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "023") ? 1 : 0 ,
							v024 : ((flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "024") ? 1 : 0
						} ,
						pbr : ((flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.pbr : 0.0
					} ,
					flagFastStable : {
						count : ((flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? 1 : 0 ,
						bwa : ((flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.bwa : 0 ,
						bwc : ((flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.bwc : 0 ,
						osv : {	
							linux : ((flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "linux") ? 1 : 0 ,
							darwin : ((flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "darwin") ? 1 : 0 ,
							freebsd : ((flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "freebsd") ? 1 : 0 ,
							windows : ((flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "windows") ? 1 : 0 ,
							other : ((flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : ((flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "010") ? 1 : 0 ,
							v011 : ((flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "011") ? 1 : 0 ,
							v012 : ((flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "012") ? 1 : 0 ,
							v020 : ((flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "020") ? 1 : 0 ,
							v021 : ((flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "021") ? 1 : 0 ,
							v022 : ((flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "022") ? 1 : 0 ,
							v023 : ((flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "023") ? 1 : 0 ,
							v024 : ((flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "024") ? 1 : 0
						} ,
						pbr : ((flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.pbr : 0.0
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
						count : (this.role == "guard" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? 1 : 0 ,
						bwa : (this.role == "guard" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.bwa : 0 ,
						bwc : (this.role == "guard" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "guard" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "guard" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "guard" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "guard" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "guard" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "guard" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "guard" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "guard" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "guard" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "guard" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "guard" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "guard" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "guard" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "024") ? 1 : 0
						} ,
						pbg : (this.role == "guard" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.pbg : 0.0
					} ,
					flagStable : {
						count : (this.role == "guard" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? 1 : 0 ,
						bwa : (this.role == "guard" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.bwa : 0 ,
						bwc : (this.role == "guard" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "guard" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "guard" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "guard" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "guard" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "guard" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "guard" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "guard" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "guard" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "guard" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "guard" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "guard" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "guard" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "guard" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "024") ? 1 : 0
						} ,
						pbg : (this.role == "guard" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.pbg : 0.0
					} ,
					flagFast : {
						count : (this.role == "guard" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? 1 : 0 ,
						bwa : (this.role == "guard" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.bwa : 0 ,
						bwc : (this.role == "guard" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "guard" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "guard" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "guard" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "guard" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "guard" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "guard" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "guard" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "guard" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "guard" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "guard" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "guard" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "guard" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "guard" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "024") ? 1 : 0
						} ,
						pbg : (this.role == "guard" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.pbg : 0.0
					} ,
					flagFastStable : {
						count : (this.role == "guard" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? 1 : 0 ,
						bwa : (this.role == "guard" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.bwa : 0 ,
						bwc : (this.role == "guard" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "guard" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "guard" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "guard" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "guard" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "guard" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "guard" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "guard" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "guard" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "guard" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "guard" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "guard" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "guard" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "guard" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "024") ? 1 : 0
						} ,
						pbg : (this.role == "guard" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.pbg : 0.0
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
						count : (this.role == "middle" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? 1 : 0 ,
						bwa : (this.role == "middle" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.bwa : 0 ,
						bwc : (this.role == "middle" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "middle" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "middle" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "middle" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "middle" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "middle" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "middle" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "middle" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "middle" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "middle" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "middle" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "middle" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "middle" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "middle" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "024") ? 1 : 0
						} ,
						pbm : (this.role == "middle" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.pbm : 0.0
					} ,
					flagStable : {
						count : (this.role == "middle" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? 1 : 0 ,
						bwa : (this.role == "middle" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.bwa : 0 ,
						bwc : (this.role == "middle" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "middle" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "middle" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "middle" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "middle" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "middle" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "middle" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "middle" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "middle" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "middle" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "middle" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "middle" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "middle" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "middle" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "024") ? 1 : 0
						} ,
						pbm : (this.role == "middle" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.pbm : 0.0
					} ,
					flagFast : {
						count : (this.role == "middle" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? 1 : 0 ,
						bwa : (this.role == "middle" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.bwa : 0 ,
						bwc : (this.role == "middle" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "middle" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "middle" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "middle" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "middle" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "middle" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "middle" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "middle" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "middle" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "middle" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "middle" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "middle" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "middle" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "middle" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "024") ? 1 : 0
						} ,
						pbm : (this.role == "middle" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.pbm : 0.0
					} ,
					flagFastStable : {
						count : (this.role == "middle" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? 1 : 0 ,
						bwa : (this.role == "middle" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.bwa : 0 ,
						bwc : (this.role == "middle" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "middle" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "middle" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "middle" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "middle" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "middle" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "middle" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "middle" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "middle" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "middle" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "middle" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "middle" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "middle" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "middle" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "024") ? 1 : 0
						} ,
						pbm : (this.role == "middle" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.pbm : 0.0
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
							p4 : (this.role == "exit" && this.pex == [443]) ? 1 : 0 ,
							p6 : (this.role == "exit" && this.pex == [6667]) ? 1 : 0 ,
							p8 : (this.role == "exit" && this.pex == [80]) ? 1 : 0 ,
							p46 : (this.role == "exit" && this.pex == [443, 6667]) ? 1 : 0 ,
							p48 : (this.role == "exit" && this.pex == [80, 443]) ? 1 : 0 ,
							p68 : (this.role == "exit" && this.pex == [80, 6667]) ? 1 : 0 ,
							p468 : (this.role == "exit" && this.pex == [80, 443, 6667]) ? 1 : 0
						} ,
						pbe : (this.role == "exit") ? this.pbe : 0.0
					} ,
					flagNone : {
						count : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? 1 : 0 ,
						bwa : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.bwa : 0 ,
						bwc : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "024") ? 1 : 0
						} ,
						pex : {
							p4 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.pex == [443]) ? 1 : 0 ,
							p6 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.pex == [6667]) ? 1 : 0 ,
							p8 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.pex == [80]) ? 1 : 0 ,
							p46 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.pex == [443, 6667]) ? 1 : 0 ,
							p48 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.pex == [80, 443]) ? 1 : 0 ,
							p68 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.pex == [80, 6667]) ? 1 : 0 ,
							p468 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.pex == [80, 443, 6667]) ? 1 : 0
						} ,
						pbe : (this.role == "exit" && !(flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.pbe : 0.0
					} ,
					flagFast : {
						count : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? 1 : 0 ,
						bwa : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.bwa : 0 ,
						bwc : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.tsv == "024") ? 1 : 0
						} ,
						pex : {
							p4 : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.pex == [443]) ? 1 : 0 ,
							p6 : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.pex == [6667]) ? 1 : 0 ,
							p8 : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.pex == [80]) ? 1 : 0 ,
							p46 : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.pex == [443, 6667]) ? 1 : 0 ,
							p48 : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.pex == [80, 443]) ? 1 : 0 ,
							p68 : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.pex == [80, 6667]) ? 1 : 0 ,
							p468 : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1) && this.pex == [80, 443, 6667]) ? 1 : 0
						} ,
						pbe : (this.role == "exit" && (flag.indexOf('fast') > -1) && !(flag.indexOf('stable') > -1)) ? this.pbe : 0.0
					} ,
					flagStable : {
						count : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? 1 : 0 ,
						bwa : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.bwa : 0 ,
						bwc : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "024") ? 1 : 0
						} ,
						pex : {
							p4 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.pex == [443]) ? 1 : 0 ,
							p6 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.pex == [6667]) ? 1 : 0 ,
							p8 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.pex == [80]) ? 1 : 0 ,
							p46 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.pex == [443, 6667]) ? 1 : 0 ,
							p48 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.pex == [80, 443]) ? 1 : 0 ,
							p68 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.pex == [80, 6667]) ? 1 : 0 ,
							p468 : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.pex == [80, 443, 6667]) ? 1 : 0
						} ,
						pbe : (this.role == "exit" && !(flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.pbe : 0.0
					} ,
					flagFastStable : {
						count : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? 1 : 0 ,
						bwa : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.bwa : 0 ,
						bwc : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.bwc : 0 ,
						osv : {
							linux : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "linux") ? 1 : 0 ,
							darwin : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "darwin") ? 1 : 0 ,
							freebsd : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "freebsd") ? 1 : 0 ,
							windows : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "windows") ? 1 : 0 ,
							other : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.osv == "other") ? 1 : 0
						} ,
						tsv : {
							v010 : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "010") ? 1 : 0 ,
							v011 : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "011") ? 1 : 0 ,
							v012 : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "012") ? 1 : 0 ,
							v020 : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "020") ? 1 : 0 ,
							v021 : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "021") ? 1 : 0 ,
							v022 : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "022") ? 1 : 0 ,
							v023 : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "023") ? 1 : 0 ,
							v024 : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.tsv == "024") ? 1 : 0
						} ,
						pex : {
							p4 : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.pex == [443]) ? 1 : 0 ,
							p6 : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.pex == [6667]) ? 1 : 0 ,
							p8 : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.pex == [80]) ? 1 : 0 ,
							p46 : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.pex == [443, 6667]) ? 1 : 0 ,
							p48 : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.pex == [80, 443]) ? 1 : 0 ,
							p68 : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.pex == [80, 6667]) ? 1 : 0 ,
							p468 : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1) && this.pex == [80, 443, 6667]) ? 1 : 0
						} ,
						pbe : (this.role == "exit" && (flag.indexOf('fast') > -1) && (flag.indexOf('stable') > -1)) ? this.pbe : 0.0	
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
	emit( theDate , relays );
};

//	countries												in 4 steps, because it has to be gathererd from 2 collections, one of them with 2 arrays																	
/*
var mapCountriesClientsCR = function() {
	var country =  {
		cc: "" ,
		cbcc: 0 ,
		crcc: 0 ,
		relay: 0 ,
		guard: 0 ,
		middle: 0 ,
		exit: 0 ,
		dir: 0 ,
		bwa: 0 ,
		bwc: 0 ,
		pbr: 0.0 ,
		pbg: 0.0 ,
		pbm: 0.0 ,
		pbe: 0.0 ,
		fast: 0 ,
		stable: 0 ,
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
		as: "" 
	};
	for(var field in this.crcc) {
		country.cc = field;
		country.crcc = this[field];
		emit( this.cc , country );						//	emit is part of the loop - see: http://cookbook.mongodb.org/patterns/pivot/
	}
};		
																
var mapCountriesClientsCB = function() {
	var country =  {
		cc: "" ,
		cbcc: 0 ,
		crcc: 0 ,
		relay: 0 ,
		guard: 0 ,
		middle: 0 ,
		exit: 0 ,
		dir: 0 ,
		bwa: 0 ,
		bwc: 0 ,
		pbr: 0.0 ,
		pbg: 0.0 ,
		pbm: 0.0 ,
		pbe: 0.0 ,
		fast: 0 ,
		stable: 0 ,
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
		as: ""
	};
	for(field in this.cbcc) {
		country.cc = field;
		country.cbcc = this[field];
		emit( this.cc , country );						//	emit is part of the loop - see: http://cookbook.mongodb.org/patterns/pivot/
	}
};

var mapCountriesRelays = function() {
	var country = {
		cc: this.cc ,
		cbcc: 0 ,
		crcc: 0 ,
		relay: 1 ,
		guard: (this.role == "guard") ? 1 : 0 ,
		middle: (this.role == "middle") ? 1 : 0 ,
		exit: (this.role == "exit") ? 1 : 0 ,
		dir: (this.role == "dir") ? 1 : 0 ,
		bwa: this.bwa ,
		bwc: this.bwc ,
		pbr: this.pbr ,
		pbg: (this.role == "guard") ? this.pbg : 0 ,
		pbm: (this.role == "middle") ? this.pbm : 0 ,
		pbe: (this.role == "exit") ? this.pbe : 0 ,
		fast: (flag.indexOf('fast') > -1) ? 1 : 0 ,
		stable: (flag.indexOf('stable') > -1) ? 1 : 0 ,
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
		pex : {
			p4 : (this.role == "exit" && this.pex == [443]) ? 1 : 0 ,
			p6 : (this.role == "exit" && this.pex == [6667]) ? 1 : 0 ,
			p8 : (this.role == "exit" && this.pex == [80]) ? 1 : 0 ,
			p46 : (this.role == "exit" && this.pex == [443, 6667]) ? 1 : 0 ,
			p48 : (this.role == "exit" && this.pex == [80, 443]) ? 1 : 0 ,
			p68 : (this.role == "exit" && this.pex == [80, 6667]) ? 1 : 0 ,
			p468 : (this.role == "exit" && this.pex == [80, 443, 6667]) ? 1 : 0
		} ,
		as: this.as										//	walking through the import table, which contains only
														//	one as per entry
	};
	emit( this.cc , country );
};

var mapCountries = function() {							//	putting it all together
	var country = {
		cc: this.cc ,
		cbcc: this.cbcc ,
		crcc: this.crcc ,
		relay: this.relay ,
		guard: this.guard ,
		middle: this.middle ,
		exit: this.exit ,
		dir: this.dir ,
		bwa: this.bwa ,
		bwc: this.bwc ,
		pbr: this.pbr ,
		pbg: this.pbg ,
		pbm: this.pbm ,
		pbe: this.pbe ,
		fast: this.fast ,
		stable: this.stable ,
		osv : {
			linux : this.osv.linux ,
			darwin : this.osv.darwin ,
			freebsd : this.osv.freebsd ,
			windows : this.osv.windows ,
			other : this.osv.other
		} ,
		tsv : {
			v010 : this.tsv.v010 ,
			v011 : this.tsv.v011 ,
			v012 : this.tsv.v012 ,
			v020 : this.tsv.v020 ,
			v021 : this.tsv.v021 ,
			v022 : this.tsv.v022 ,
			v023 : this.tsv.v023 ,
			v024 : this.tsv.v024
		} ,
		pex : {
			p4 : this.pex.p4 ,
			p6 : this.pex.p6 ,
			p8 : this.pex.p8 ,
			p46 : this.pex.p46 ,
			p48 : this.pex.p48 ,
			p68 : this.pex.p68 ,
			p468 : this.pex.p468
		} ,
		autosys: this.autosys							//	already an array of as:#
	};
	emit( date , country );
};
*/

//	autonomous systems 					
/*
var mapAutosys = function() {
	var autosys = {
		as : this.as ,
		name : "" ,
		hone : "",
		relay : 1 ,
		bwa : this.bwa ,
		bwc : this.bwc ,
		fast : ((flag.indexOf('fast') > -1)) ? 1 : 0 ,
		stable : ((flag.indexOf('stable') > -1)) ? 1 : 0 ,
		guard : (this.role == "guard") ? 1 : 0 ,
		middle : (this.role == "middle") ? 1 : 0 ,
		exit : (this.role == "exit") ? 1 : 0 ,
		dir : (this.role == "dir") ? 1 : 0 ,
		pbr: this.pbr ,
		pbg : (this.role == "guard") ? this.pbg : 0 ,
		pbm : (this.role == "middle") ? this.pbm : 0 ,
		pbe : (this.role == "exit") ? this.pbe : 0 ,
		countries : {
			cc : this.cc ,
			relay : 1 ,
			bwa : this.bwa ,
			bwc : this.bwc ,
			pbr : this.pbr ,
			pbg : (this.role == "guard") ? this.pbg : 0 ,
			pbm : (this.role == "middle") ? this.pbm : 0 ,
			pbe : (this.role == "exit") ? this.pbe : 0
		}
	};
};

*/

//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
//	REDUCE
//	//////////////////////////////////////////////////////////////////////////////////////////////////////////

//	reduceClients
var reduceClients = function ( key, values ) {
	var fact = {	
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
	};
	values.forEach( function(v) { 
		fact.clients.total += v.clients.total;
		fact.clients.atBridges += v.clients.atBridges ;
		fact.clients.atRelays += v.clients.atRelays ;
		fact.clients.cip4 += v.clients.cip4 ;
		fact.clients.cip6 += v.clients.cip6 ;
		fact.clients.cptObfs2 += v.clients.cptObfs2 ;
		fact.clients.cptObfs3 += v.clients.cptObfs3 ;
		fact.clients.cptOR += v.clients.cptOR ;
		fact.clients.cptUnknown += v.clients.cptUnknown ;
	});
	return fact;
};


//	reduceServersRelays										reduceServersRelays and reduceServersBridges are exact duplicates and could be reduced to one
/*
var reduceServersRelays = function ( key, values ) {	
	var temp = {
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
	};
	values.forEach( function(v) {
		temp.count += 1 ;
		temp.bwa += v.bwa ;
		temp.bwc += v.bwc ;
		temp.osv.linux += v.osv.linux ;
		temp.osv.darwin += v.osv.darwin ;
		temp.osv.freebsd += v.osv.freebsd ;
		temp.osv.windows += v.osv.windows ;
		temp.osv.other += v.osv.other ;
		temp.tsv.v010 += v.tsv.v010 ;
		temp.tsv.v011 += v.tsv.v011 ;
		temp.tsv.v012 += v.tsv.v012 ;
		temp.tsv.v020 += v.tsv.v020 ;
		temp.tsv.v021 += v.tsv.v021 ;
		temp.tsv.v022 += v.tsv.v022 ;
		temp.tsv.v023 += v.tsv.v023 ;
		temp.tsv.v024 += v.tsv.v024 ;
	});
	return temp;
};
*/
//	reduceServersBridges
/*
var reduceServersBridges = function ( key, values ) {
	var temp = {	
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
	};
	values.forEach( function(v) {
		temp.count += 1 ;	
		temp.bwa += v.bwa ;
		temp.bwc += v.bwc ;
		temp.osv.linux += v.osv.linux ;
		temp.osv.darwin += v.osv.darwin ;
		temp.osv.freebsd += v.osv.freebsd ;
		temp.osv.windows += v.osv.windows ;
		temp.osv.other += v.osv.other ;
		temp.tsv.v010 += v.tsv.v010 ;
		temp.tsv.v011 += v.tsv.v011 ;
		temp.tsv.v012 += v.tsv.v012 ;
		temp.tsv.v020 += v.tsv.v020 ;
		temp.tsv.v021 += v.tsv.v021 ;
		temp.tsv.v022 += v.tsv.v022 ;
		temp.tsv.v023 += v.tsv.v023 ;
		temp.tsv.v024 += v.tsv.v024 ;
	});
	return temp;
};
*/
//	reduceServers											aggregating ServersRelays and ServersBridges into the combined servers fact
/*
var reduceServers = function ( key, values ) {
	var fact = {	
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
	};
	values.forEach( function(v) {
		fact.count += v.count ;							//	while reduceServersRelays and reduceServersBridges count the raw data 1 by 1, 
														//	this final steps adds up results
		fact.bwa += v.bwa ;
		fact.bwc += v.bwc ;
		fact.osv.linux += v.osv.linux ;
		fact.osv.darwin += v.osv.darwin ;
		fact.osv.freebsd += v.osv.freebsd ;
		fact.osv.windows += v.osv.windows ;
		fact.osv.other += v.osv.other ;
		fact.tsv.v010 += v.tsv.v010 ;
		fact.tsv.v011 += v.tsv.v011 ;
		fact.tsv.v012 += v.tsv.v012 ;
		fact.tsv.v020 += v.tsv.v020 ;
		fact.tsv.v021 += v.tsv.v021 ;
		fact.tsv.v022 += v.tsv.v022 ;
		fact.tsv.v023 += v.tsv.v023 ;
		fact.tsv.v024 += v.tsv.v024 ;
	});
	return fact;
};
*/
//	reduceBridges
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


//	reduceRelays
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
				}
			}
		}
	};	
	values.forEach( function(v) {
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


//	reduceCountriesClients
/*	
var reduceCountriesClients = function ( key, values ) {	//	same reduce function for CB and CR map functions	
	var temp = {	
		cc: "" ,
		cbcc: 0 ,
		crcc: 0 ,
		relay: 0 ,
		guard: 0 ,
		middle: 0 ,
		exit: 0 ,
		dir: 0 ,
		bwa: 0 ,
		bwc: 0 ,
		pbr: 0.0 ,
		pbg: 0.0 ,
		pbm: 0.0 ,
		pbe: 0.0 ,
		fast: 0 ,
		stable: 0 ,
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
		as: "" 				
	};
	values.forEach( function(v) {						// 	not much happening here since clients are already aggregated
		temp.cc = v.cc ;								//	getting the cc
		temp.cbcc = v.cbcc ;							//	catching the fish from mapCountriesClientsCB
		temp.crcc = v.crcc ;							//	catching the fish from mapCountriesClientsCR
		temp.relay = v.relay ;							//	only 0's from here on
		temp.guard = v.guard ;
		temp.middle = v.middle ;
		temp.exit = v.exit ;
		temp.dir = v.dir ;
		temp.bwa = v.bwa ;
		temp.bwc = v.bwc ;
		temp.pbr = v.pbr ;
		temp.pbg = v.pbg ;
		temp.pbm = v.pbm ;
		temp.pbe = v.pbe ;
		temp.fast = v.fast ;
		temp.stable = v.stable ;
		temp.osv.linux = v.osv.linux ;
		temp.osv.darwin = v.osv.darwin ;
		temp.osv.freebsd = v.osv.freebsd ;
		temp.osv.windows = v.osv.windows ;
		temp.osv.other = v.osv.other ;
		temp.tsv.v010 = v.tsv.v010 ;
		temp.tsv.v011 = v.tsv.v011 ;
		temp.tsv.v012 = v.tsv.v012 ;
		temp.tsv.v020 = v.tsv.v020 ;
		temp.tsv.v021 = v.tsv.v021 ;
		temp.tsv.v022 = v.tsv.v022 ;
		temp.tsv.v023 = v.tsv.v023 ;
		temp.tsv.v024 = v.tsv.v024 ;
		temp.pex.p4 = v.pex.p4 ;
		temp.pex.p6 = v.pex.p6 ;
		temp.pex.p8 = v.pex.p8 ;
		temp.pex.p46 = v.pex.p46 ;
		temp.pex.p48 = v.pex.p48 ;
		temp.pex.p68 = v.pex.p68 ;
		temp.pex.p468 = v.pex.p468 ;
		temp.as = v.as ;
	});
	return temp;
};
*/

//	reduceCountriesRelays
/*	
var reduceCountriesRelays = function ( key, values ) {
	var temp = {	
		cc: "" ,
		cbcc: 0 ,
		crcc: 0 ,
		relay: 0 ,
		guard: 0 ,
		middle: 0 ,
		exit: 0 ,
		dir: 0 ,
		bwa: 0 ,
		bwc: 0 ,
		pbr: 0.0 ,
		pbg: 0.0 ,
		pbm: 0.0 ,
		pbe: 0.0 ,
		fast: 0 ,
		stable: 0 ,
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
		autosys: []										//	TODO	need to declare autosys before?		
	};
	values.forEach( function(v) {						//	adding up counts (except cc, cbcc, and crcc from clients)
		temp.cc = v.cc ;
		temp.cbcc = v.cbcc ;
		temp.crcc = v.crcc ;
		temp.relay += v.relay ;
		temp.guard += v.guard ;
		temp.middle += v.middle ;
		temp.exit += v.exit ;
		temp.dir += v.dir ;
		temp.bwa += v.bwa ;
		temp.bwc += v.bwc ;
		temp.pbr += v.pbr ;
		temp.pbg += v.pbg ;
		temp.pbm += v.pbm ;
		temp.pbe += v.pbe ;
		temp.fast += v.fast ;
		temp.stable += v.stable ;
		temp.osv.linux += v.osv.linux ;
		temp.osv.darwin += v.osv.darwin ;
		temp.osv.freebsd += v.osv.freebsd ;
		temp.osv.windows += v.osv.windows ;
		temp.osv.other += v.osv.other ;
		temp.tsv.v010 += v.tsv.v010 ;
		temp.tsv.v011 += v.tsv.v011 ;
		temp.tsv.v012 += v.tsv.v012 ;
		temp.tsv.v020 += v.tsv.v020 ;
		temp.tsv.v021 += v.tsv.v021 ;
		temp.tsv.v022 += v.tsv.v022 ;
		temp.tsv.v023 += v.tsv.v023 ;
		temp.tsv.v024 += v.tsv.v024 ;
		temp.pex.p4 += v.pex.p4 ;
		temp.pex.p6 += v.pex.p6 ;
		temp.pex.p8 += v.pex.p8 ;
		temp.pex.p46 += v.pex.p46 ;
		temp.pex.p48 += v.pex.p48 ;
		temp.pex.p68 += v.pex.p68 ;
		temp.pex.p468 += v.pex.p468 ;
		if (temp.autosys.indexOf(as) == -1) {			//	TODO	will this work?	
			temp.autosys.push(as);
		};
		temp.autosys.as += 1;
	});
	return temp;
};
*/

//	reduceCountries
/*
var reduceCountries = function ( key, values ) {
	var countries = new Array();
	var fact = { countries : [] };							// TODO 	ERROR
	var country = {	
		cc: "" ,
		cbcc: 0 ,
		crcc: 0 ,
		relay: 0 ,
		guard: 0 ,
		middle: 0 ,
		exit: 0 ,
		dir: 0 ,
		bwa: 0 ,
		bwc: 0 ,
		pbr: 0.0 ,
		pbg: 0.0 ,
		pbm: 0.0 ,
		pbe: 0.0 ,
		fast: 0 ,
		stable: 0 ,
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
		as: [] 				
	};
	values.forEach( function(v) {
		country.cc = v.cc ;
		country.cbcc = v.cbcc ;
		country.crcc = v.crcc ;
		country.relay = v.relay ;
		country.guard = v.guard ;
		country.middle = v.middle ;
		country.exit = v.exit ;
		country.dir = v.dir ;
		country.bwa = v.bwa ;
		country.bwc = v.bwc ;
		country.pbr = v.pbr ;
		country.pbg = v.pbg ;
		country.pbm = v.pbm ;
		country.pbe = v.pbe ;
		country.fast = v.fast ;
		country.stable = v.stable ;
		country.osv.linux = v.osv.linux ;
		country.osv.darwin = v.osv.darwin ;
		country.osv.freebsd = v.osv.freebsd ;
		country.osv.windows = v.osv.windows ;
		country.osv.other = v.osv.other ;
		country.tsv.v010 = v.tsv.v010 ;
		country.tsv.v011 = v.tsv.v011 ;
		country.tsv.v012 = v.tsv.v012 ;
		country.tsv.v020 = v.tsv.v020 ;
		country.tsv.v021 = v.tsv.v021 ;
		country.tsv.v022 = v.tsv.v022 ;
		country.tsv.v023 = v.tsv.v023 ;
		country.tsv.v024 = v.tsv.v024 ;
		country.pex.p4 = v.pex.p4 ;
		country.pex.p6 = v.pex.p6 ;
		country.pex.p8 = v.pex.p8 ;
		country.pex.p46 = v.pex.p46 ;
		country.pex.p48 = v.pex.p48 ;
		country.pex.p68 = v.pex.p68 ;
		country.pex.p468 = v.pex.p468 ;
		country.as = v.as ;
		//	finally push 'country' object onto 'countries' array
		countries.push(country);						
	});
	return fact;
};
*/

//	reduceAutosys
/*
var reduceAutosys = function ( key, values ) {
	var autosys =new Array();
	var countries =new Array();
	var fact = autosys ;
	var asObject = {
		as : "" ,
		name : "" ,
		hone : "",
		relay : 0 ,
		bwa : 0 ,
		bwc : 0 ,
		fast : 0 ,
		stable : 0 ,
		guard : 0 ,
		middle : 0 ,
		exit : 0 ,
		dir : 0 ,
		pbr: 0 ,
		pbg : 0 ,
		pbm : 0 ,
		pbe : 0 ,
		countries : []
	};
	var ccObject = {
		cc : "" ,
		relay : 0 ,
		bwa : 0 ,
		bwc : 0 ,
		pbr : 0 ,
		pbg : 0 ,
		pbm : 0 ,
		pbe : 0
	};
	values.forEach( function(v) {
		var asAquired = false;
		var asPos = 0 ;									//	autosys.length
		var ccAquired = false;
		var ccPos = 0 ;									//	countries.length
		for ( var i = 0; i < autosys.length; i++ ) {	//	first check if the AS was already acquired
			if ( autosys[i].as == v.as) {
				asAquired = true;
				asPos = i;								//	and if yes, get it's position in the array
				break;									
			}
		}
		if (!asAquired) {								//	TODO	is this initialization really necessary?
			autosys[0] = asObject;
			autosys[0].countries[0] = ccObject;
			autosys[asPos].as = v.as;
			autosys[asPos].name = v.name;
			autosys[asPos].home = v.home;
		}
		if (asAquired) {								//	for aquired AS check if country was already aquired
			for ( var i = 0; i < autosys[asPos].countries.length; i++ ) {	
				if ( autosys[asPos].countries[i].cc == v.countries.cc) {
					ccAquired = true;
					ccPos = i;
					break;									
				}
			}
		}
		if (!ccAquired) {
			autosys[asPos].countries[ccPos].cc = v.countries.cc;
		}
		autosys[asPos].relay += 1 ,
		autosys[asPos].bwa += v.bwa ,
		autosys[asPos].bwc += v.bwc ,
		autosys[asPos].fast += v.fast ,
		autosys[asPos].stable += v.stable ,
		autosys[asPos].guard += v.guard ,
		autosys[asPos].middle += v.middle ,
		autosys[asPos].exit += v.exit ,
		autosys[asPos].dir += v.dir ,
		autosys[asPos].pbr += v.pbr ,
		autosys[asPos].pbg += v.pbg ,
		autosys[asPos].pbm += v.pbm ,
		autosys[asPos].pbe += v.pbe ,
		autosys[asPos].countries[ccPos].relay += v.relay ,
		autosys[asPos].countries[ccPos].bwa += v.countries.bwa ,
		autosys[asPos].countries[ccPos].bwc += v.countries.bwc ,
		autosys[asPos].countries[ccPos].pbr += v.countries.pbr ,
		autosys[asPos].countries[ccPos].pbg += v.countries.pbg ,
		autosys[asPos].countries[ccPos].pbm += v.countries.pbm ,
		autosys[asPos].countries[ccPos].pbe += v.countries.pbe
	});
	return fact;
};
*/

//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
//	FINALIZE
//	//////////////////////////////////////////////////////////////////////////////////////////////////////////

var finalizeFacts = function ( key, fact ) {
														//	doing stuff e.g. some averages
};


//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
//	BINDING MAPs AND REDUCEs
//	//////////////////////////////////////////////////////////////////////////////////////////////////////////

//	clients
var aggregateClients = function(theDate) {
	db.importClients.mapReduce (			
		mapClients,
		reduceClients,
		{ 
			out: { 
				reduce : "tempFacts", 					//	the temporary fact collection, with _id:value structure
				nonAtomic : true						//	prevents locking of the db during post-processing
			} ,			
			query : { "date" : theDate } ,				//	limit aggregation to date
			// sort										   	sorts the input documents for fewer reduce operations
			jsMode: true ,								//	check if feasable! is faster, but needs more memory
			finalize : finalizeFacts
		}
	);
};

//	servers 												in 3 steps, because it has to be gathererd from 2 collections 
var aggregateServersRelays = function(theDate) {
	db.importRelays.mapReduce (			
		mapServersRelays,
		reduceServers,
		{ 
			out: { 
				reduce : "tempServers",					//	reduce to intermediate collection
				nonAtomic : true
			} ,			
			query : { "date" : theDate } ,
			jsMode: true ,
		    finalize : finalizeFacts
		}
	);
};
var aggregateServersBridges = function(theDate) {
	db.importBridges.mapReduce (			
		mapServersBridges,
		reduceServers,
		{ 
			out: { 
				reduce : "tempServers",					//	reduce to intermediate collection
				nonAtomic : true
			} ,			
			query : { "date" : theDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
};
var aggregateServers = function(theDate) {
	db.tempServers.mapReduce (							//	take the intermediate collection as input
		mapServers,
		reduceServers,
		{ 
			out: { 
				reduce : "tempFacts",					//	reduce intermediates to final destination: tempFacts
				nonAtomic : true
			} ,			
			query : { "date" : theDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
};

//	bridges
var aggregateBridges = function(theDate) {
	db.importBridges.mapReduce (			
		mapBridges,
		reduceBridges,
		{ 
			out: { 
				reduce : "tempFacts",
				nonAtomic : true
			} ,			
			query : { "date" : theDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
};

//	relays
var aggregateRelays = function(theDate) {
	db.importRelays.mapReduce (			
		mapRelays,
		reduceRelays,
		{ 
			out: { 
				reduce : "tempFacts",
				nonAtomic : true
			} ,			
			query : { "date" : theDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
};

//	countries 												in 4 steps, because it has to be gathererd from 2 collections, one of them with 2 arrays
/*	
var aggregateCountriesClientsCR = function(theDate) {
	db.importClients.mapReduce (			
		mapCountriesClientsCR,
		reduceCountriesClients,
		{ 
			out: { 
				reduce : "tempCountries",
				nonAtomic : true
			} ,			
			query : { "date" : theDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
};
var aggregateCountriesClientsCB = function(theDate) {
	db.importClients.mapReduce (			
		mapCountriesClientsCB,
		reduceCountriesClients,
		{ 
			out: { 
				reduce : "tempCountries",
				nonAtomic : true
			} ,			
			query : { "date" : theDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
};
var aggregateCountriesRelays = function(theDate) {
	db.importRelays.mapReduce (			
		mapCountriesRelays,
		reduceCountriesRelays,
		{ 
			out: { 
				reduce : "tempCountries",
				nonAtomic : true
			} ,			
			query : { "date" : theDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
};
var aggregateCountries = function(theDate) {
	db.tempCountries.mapReduce (			
		mapCountries,
		reduceCountries,
		{ 
			out: { 
				reduce : "tempFacts",
				nonAtomic : true
			} ,			
			query : { "date" : theDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
};
*/

//	autonomous systems
/*
var aggregateAutosys = function(theDate) {
	db.tempAutosys.mapReduce (			
		mapAutosys,
		reduceAutosys,
		{ 
			out: { 
				reduce : "tempFacts",
				nonAtomic : true
			} ,			
			query : { "date" : theDate } ,
			jsMode: true ,
			finalize : finalizeFacts
		}
	);
};
*/



//	//////////////////////////////////////////////////////////////////////////////////////////////////////////
//	EXECUTION
//	let the damn thing run
//	//////////////////////////////////////////////////////////////////////////////////////////////////////////

//	CONFIG DATE
var date = "2013-04-03 22" ;

var run = function(date) {

    db.tempCountries.remove();
    db.tempAutosys.remove();
    db.tempFacts.remove();

	aggregateClients(date);
//	aggregateServersRelays(date);
//	aggregateServersBridges(date);
//	aggregateServers(date);
	aggregateBridges(date);
	aggregateRelays(date);
	/*
	aggregateCountriesClientsCR(date);
	aggregateCountriesClientsCB(date);
	aggregateCountriesRelays(date);
	aggregateCountries(date);
	aggregateAutosys(date);
	*/
};

run(date);
