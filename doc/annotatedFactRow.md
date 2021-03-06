﻿# annotated and drastically shortened fact document

	{
	  "_id" : "2013-04-02-01",
	  "value" : {
	    "date" : "2013-04-02T01:00:00",    //  start date
	    "span" : "h",                      //  timespan covered
	    "updt" : "2000-01-01T00:00:00.000Z", //  last updated
	    "client" : {
	      "total" : 870778,                //  total # of clients
	      "atBridge" : 4015,               //  connected through bridges
	      "atRelay" : 866763,              //  connected through relays
	      "cip4" : 3942,                   //  using IP version 4
	      "cip6" : 73,                     //  using IP version 6
	      "cptObfs2" : 37,                 //  using pluggable transport Obfs2
	      "cptObfs3" : 77,                 //  using pluggable transport Obfs3
	      "cptOR" : 3901,                  //  using normal "Onion Routing"
	      "cptUnknown" : 0                 //  using unknown pluggable transport
	    },
	    "server" : {
	      "total" : {                      //  report for all relays and bridges
	        "sum" : 4582,                  //  total # of bridges and relays
	        "bwa" : 3873887324,            //  bandwidth advertised
	        "bwc" : 2411188643,            //  bandwidth consumed
	        "osv" : {                      //  operating system version
	          "ol" : 3483,                 //  linux
	          "ow" : 783,                  //  windows
	          "od" : 104,                  //  darwin
	          "of" : 156                   //  freebsd
	        },                             //
	        "tsv" : {                      //  tor software version
	          "t23" : 3054,                //  0.23
	          "t22" : 971,                 //
	          "t25" : 27,                  //
	          "t24" : 530                  //
	        },                             //
	        "prb" : {                      //  probability of being chosen as
	          "pr" : 1.0000489999999909,   //  relay
	          "pg" : 0.9999979999999997,   //  guard
	          "pm" : 1.0000420000000017,   //  middle
	          "pe" : 1.0000280000000017    //  exit
	        },                             //
	        "exp" : {                      //  permitted exit ports
	          "e4" : 831,                  //  443
	          "e6" : 694,                  //  6667
	          "e8" : 809,                  //  80
	          "e46" : 654,                 //  443 + 6667
	          "e48" : 789,                 //  443 + 80
	          "e68" : 645,                 //  6667 + 80
	          "e468" : 641                 //  443 + 6667 + 80
	        },                             //
	        "pol" : {                      //  bridge pool
	          "bh" : 546,                  //  https
	          "bo" : 183,                  //  other
	          "be" : 573                   //  email
	        },                             //
	        "plg" : {                      //  bridge pluggable transport
	          "b2" : 203,                  //  obfs2
	          "b3" : 29,                   //  obfs3
	          "b23" : 28                   //  obfs2 + obfs3
	        },                             //
	        "hst" : {                      //  hosting service
	          "bc" : 192                   //  amazon ec2 cloud
	        }
	      },
	      "bridge" : {
	        "total" : {                    //  report for all bridges
	          "sum" : 1318,                //  total # of bridges
	          "bwa" : 199141531,           //  bandwidth advertised
	          "bwc" : 8113709,             //  bandwidth consumed
	          "osv" : {                    //  operating system version
	            "of" : 47,                 //  freebsd
	            "ol" : 993,                //  linux
	            "ow" : 259,                //  windows
	            "od" : 13                  //  dawin
	          },                           //
	          "tsv" : {                    //  tor software version
	            "t24" : 272,               //  0.24
	            "t23" : 822,               //
	            "t22" : 222,               //
	            "t25" : 2                  //
	          },                           //
	          "pol" : {                    //  bridge pool
	            "bh" : 546,                //  https
	            "bo" : 183,                //  other
	            "be" : 573                 //  email
	          },                           //
	          "plg" : {                    //  bridge pluggable transport
	            "b2" : 203,                //  obfs2
	            "b3" : 29,                 //  obfs3
	            "b23" : 28                 //  obfs2 + obfs3
	          },                           //
	          "hst" : {                    //  hosting service
	            "bc" : 192                 //  amazon ec2 cloud
	          }                            //  end bridge report
	        },
	        "pool" : {                     //  bridge pool
	          "bh" : {                     //  https
	            [...]                      //  one bridge report
	          },
	          "bo" : {                     //  other
	            [...]                      //  one bridge report
	          },
	          "be" : {                     //  email
	            [...]                      //  one bridge report
	          }
	        },
	        "plug" : {                     //  pluggable tarnsport
	          "b2" : {                     //  obfs2
	            [...]                      //  one bridge report
	          },
	          "b3" : {                     //  obfs3
	            [...]                      //  one bridge report
	          },
	          "b23" : {                    //  obfs2 + obfs3
	            [...]                      //  one bridge report
	          }
	        },
	        "host" : {                     //  hosting service
	          "bc" : {                     //  ec2
	            [...]                      //  one bridge report
	          }
	        }
	      },
	      "relay" : {
	        "total" : {                    //  report for all relays
	          "sum" : 3264,                //  total # of bridges and relays
	          "bwa" : 3674745793,          //  bandwidth advertised
	          "bwc" : 2403074934,          //  bandwidth consumed
	          "osv" : {                    //  operating system version
	            "ol" : 2490,               //  linux
	            "ow" : 524,                //  windows
	            "od" : 91,                 //  darwin
	            "of" : 109                 //  freebsd
	          },                           //
	          "tsv" : {                    //  tor software version
	            "t23" : 2232,              //  0.23
	            "t22" : 749,               //
	            "t25" : 25,                //
	            "t24" : 258                //
	          },                           //
	          "prb" : {                    //  probability of being chosen as
	            "pr" : 1.0000489999999909, //  relay
	            "pg" : 0.9999979999999997, //  guard
	            "pm" : 1.0000420000000017, //  middle
	            "pe" : 1.0000280000000017  //  exit
	          },                           //
	          "exp" : {                    //  permitted exit ports
	            "e4" : 831,                //  443
	            "e6" : 694,                //  6667
	            "e8" : 809,                //  80
	            "e46" : 654,               //  443 + 6667
	            "e48" : 789,               //  443 + 80
	            "e68" : 645,               //  6667 + 80
	            "e468" : 641               //  443 + 6667 + 80
	          }                            //  end relay report
	        },
	        "roleFlag" : {                 //  all permutations of roles and flags
	            [...]                      //    (Guard, Middle, Exit, Directory,
	            [...]                      //    fast, stable, authority)
	            [...]                      //  conjunctive
	            [...]                      //    G Gf Gs Gfs M Mf Ms Mfs E Ef Es
	            [...]                      //    Efs D Da GM GMf GMs GMfs GE GEf
	            [...]                      //    GEs GEfs GD GDf GDs GDfs GDa GDfa
	            [...]                      //    GDsa GDfsa GME GMEf GMEs GMEfs
	            [...]                      //    GMD GMDf GMDs GMDfs GMDa GMDfa
	            [...]                      //    GMDsa GMDfsa ME MEf MEs MEfs MD
	            [...]                      //    MDf MDs MDfs MDa MDfa MDsa MDfsa
	            [...]                      //    MED MEDf MEDs MEDfs MEDa MEDfa
	            [...]                      //    MEDsa MEDfsa ED EDf EDs EDfs EDa
	            [...]                      //    EDfa EDsa EDfsa
	            [...]                      //  one relay report each
	        },
	        "disRole" : {                  //  all permutations of roles
	            [...]                      //    (Guard, Middle, Exit, Directory)
	            [...]                      //  disjunctive
	            [...]                      //    none G M E D GM GE GD GME GMD
	            [...]                      //    GMED ME MD MED ED
	            [...]                      //  one relay report each
	        },
	        "disFlag" : {                  //  all permutations of flags
	            [...]                      //    (fast, stable, authority)
	            [...]                      //  disjunctive
	            [...]                      //    none f s a fs fa sa fsa
	            [...]                      //  one relay report each
	        },
	        "disRoleFlag" : {              //  all permutations of roles and flags
	            [...]                      //    (Guard, Middle, Exit, Directory,
	            [...]                      //    fast, stable, authority)
	            [...]                      //  disjunctive
	            [...]                      //    none G Gf Gs Gfs M Mf Ms Mfs E
	            [...]                      //    Ef Es Efs D Da GM GMf GMs GMfs
	            [...]                      //    GE GEf GEs GEfs GD GDf GDs GDfs
	            [...]                      //    GDa GDfa GDsa GDfsa GME GMEf
	            [...]                      //    GMEs GMEfs GMD GMDf GMDs GMDfs
	            [...]                      //    GMDa GMDfa GMDsa GMDfsa ME MEf
	            [...]                      //    MEs MEfs MD MDf MDs MDfs MDa
	            [...]                      //    MDfa MDsa MDfsa MED MEDf MEDs
	            [...]                      //    MEDfs MEDa MEDfa MEDsa MEDfsa ED
	            [...]                      //    EDf EDs EDfs EDa EDfa EDsa EDfsa
	            [...]                      //  one relay report each
	        }
	      }
	    },
	    "country" : [
	      {
	        "country" : "FR",              //  country code
	        "relay" : 166,                 //  # of relays
	        "bwa" : 204562311,             //  bandwidth advertised
	        "bwc" : 142184267,             //  bandwidth consumed
	        "role" : {                     //  roles
	          "m" : 166,                   //  middle
	          "e" : 52,                    //  exit
	          "g" : 66,                    //  guard
	          "d" : 89                     //  directory
	        },                             //
	        "flag" : {                     //  flags
	          "f" : 134,                   //  fast
	          "s" : 124                    //  stable
	        },                             //
	        "prob" : {                     //  probability of being chosen as
	          "pr" : 0.07009200000000006,  //  relay
	          "pm" : 0.06733000000000001,  //  middle
	          "pe" : 0.073062,             //  exit
	          "pg" : 0.06988799999999996   //  guard
	        },                             //
	        "osv" : {                      //  operating system version
	          "ol" : 143,                  //  linux
	          "od" : 3,                    //  darwin
	          "ow" : 13,                   //  windows
	          "of" : 3                     //  freebsd
	        },                             //
	        "tsv" : {                      //  tor software version
	          "t23" : 105,                 //  0.23
	          "t22" : 52,                  //
	          "t24" : 6,                   //
	          "t25" : 3                    //
	        },                             //
	        "autosys" : {                  //  AS used by # of relays in country
	          "AS16276" : 80,              //
	          "AS12322" : 35,              //
	          "AS29169" : 14,              //
	          "AS5410" : 3,                //
	          "AS20766" : 2,               //
	          "AS39389" : 1,               //
	          "AS50618" : 1,               //
	          "AS3215" : 6,                //
	          "AS15557" : 6,               //
	          "AS35238" : 2,               //
	          "AS35655" : 1,               //
	          "AS12626" : 1,               //
	          "AS31555" : 1,               //
	          "AS21502" : 4,               //
	          "AS13193" : 1,               //
	          "AS196689" : 2,              //
	          "AS8218" : 1,                //
	          "AS197422" : 1,              //
	          "AS41334" : 1,               //
	          "AS197922" : 1,              //
	          "AS47206" : 2                //
	        },                             //
	        "cbcc" : 122,                  //  clients connected through bridge
	        "crcc" : 61405                 //  clients connected through relay
	      },
	      {
	        "country" : "SD",              //
	        "cbcc" : 10,                   //
	        "crcc" : 552                   //
	      }
	    ],
	    "autosys" : [
	      {
	        "as" : "AS2119",               //  http://www.telenor.com
	        "relay" : 20,                  //  # of relays using this AS
	        "bwa" : 8694234,               //  bandwidth advertised
	        "bwc" : 5813479,               //  bandwidth consumed
	        "role" : {                     //  role
	          "m" : 20,                    //  middle
	          "d" : 10,                    //  directory
	          "e" : 4,                     //  exit
	          "g" : 5                      //  guard
	        },                             //
	        "flag" : {                     //  flag
	          "f" : 17,                    //  fast
	          "s" : 13                     //  stable
	        },                             //
	        "prob" : {                     //  probability of being chosen as
	          "pm" : 0.007326,             //  middle
	          "pr" : 0.0032479999999999996,//  relay
	          "pe" : 0.000461999999999995, //  exit
	          "pg" : 0.001957              //  guard
	        },
	        "country" : [                  //  relays in country using this AS
	          {
	            "cc" : "SE",               //  country code
	            "relay" : 16,              //  # of relays
	            "bwa" : 5247375,           //  bandwidth advertised
	            "bwc" : 2622539,           //  bandwidth consumed
	            "role" : {                 //  role
	              "m" : 16,                //  middle
	              "e" : 3,                 //  exit
	              "d" : 7,                 //  directory
	              "g" : 5                  //  guard
	            },                         //
	            "flag" : {                 //  flag
	              "f" : 13,                //  fast
	              "s" : 10                 //  stable
	            },                         //
	            "prob" : {                 //  probability being chosen as
	              "pm" : 0.00160400000002, //  middle
	              "pr" : 0.0013360000002,  //  relay
	              "pe" : 0.000448,         //  exit
	              "pg" : 0.001957          //  guard
	            }
	          }
	        ]
	      }
	    ]
	  }
	}
