//tl@h:~/tor$ mongo
//MongoDB shell version: 2.4.8
//connecting to: test
//> use visionion
//switched to db visionion
//> db.facts.find({"_id" : "2013-04-03 23"}).pretty()
{
	"_id" : "2013-04-03 23",
	"value" : {
		"date" : "2013-04-03 23",
		"span" : 1,
		"clients" : {
			"total" : 866088,
			"atBridges" : 3561,
			"atRelays" : 862527,
			"cip4" : 3501,
			"cip6" : 61,
			"cptObfs2" : 36,
			"cptObfs3" : 74,
			"cptOR" : 3452,
			"cptUnknown" : 0
		},
		"servers" : {
			"total" : {
				"count" : 4703,
				"bwa" : 3927898047,
				"bwc" : 2475311848,
				"osv" : {
					"linux" : 3529,
					"darwin" : 114,
					"freebsd" : 152,
					"windows" : 853,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 991,
					"v023" : 3146,
					"v024" : 539
				}
			},
			"bridges" : {
				"total" : {
					"count" : 1363,
					"bwa" : 194949378,
					"bwc" : 10114088,
					"osv" : {
						"linux" : 996,
						"darwin" : 19,
						"freebsd" : 46,
						"windows" : 295,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 226,
						"v023" : 865,
						"v024" : 270
					}
				},
				"brpEmail" : {
					"count" : 583,
					"bwa" : 79500367,
					"bwc" : 4606435,
					"osv" : {
						"linux" : 418,
						"darwin" : 9,
						"freebsd" : 15,
						"windows" : 138,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 85,
						"v023" : 387,
						"v024" : 110
					}
				},
				"brpHttps" : {
					"count" : 565,
					"bwa" : 106985720,
					"bwc" : 5281448,
					"osv" : {
						"linux" : 422,
						"darwin" : 6,
						"freebsd" : 22,
						"windows" : 111,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 96,
						"v023" : 339,
						"v024" : 129
					}
				},
				"brpOther" : {
					"count" : 189,
					"bwa" : 7468449,
					"bwc" : 212625,
					"osv" : {
						"linux" : 150,
						"darwin" : 4,
						"freebsd" : 9,
						"windows" : 26,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 43,
						"v023" : 117,
						"v024" : 29
					}
				},
				"breTrue" : {
					"count" : 185,
					"bwa" : 37463297,
					"bwc" : 1778291,
					"osv" : {
						"linux" : 185,
						"darwin" : 0,
						"freebsd" : 0,
						"windows" : 0,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 0,
						"v023" : 56,
						"v024" : 129
					}
				},
				"brtObfs2" : {
					"count" : 1193,
					"bwa" : 159856542,
					"bwc" : 8242466,
					"osv" : {
						"linux" : 831,
						"darwin" : 18,
						"freebsd" : 42,
						"windows" : 295,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 226,
						"v023" : 865,
						"v024" : 101
					}
				},
				"brtObfs3" : {
					"count" : 1336,
					"bwa" : 186214375,
					"bwc" : 9128394,
					"osv" : {
						"linux" : 971,
						"darwin" : 19,
						"freebsd" : 44,
						"windows" : 295,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 226,
						"v023" : 865,
						"v024" : 243
					}
				},
				"brtObfs23" : {
					"count" : 1166,
					"bwa" : 151121539,
					"bwc" : 7256772,
					"osv" : {
						"linux" : 806,
						"darwin" : 18,
						"freebsd" : 40,
						"windows" : 295,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 226,
						"v023" : 865,
						"v024" : 74
					}
				}
			},
			"relays" : {
				"roleAll" : {
					"total" : {
						"count" : 3340,
						"bwa" : 3732948669,
						"bwc" : 2465197760,
						"osv" : {
							"linux" : 2533,
							"darwin" : 95,
							"freebsd" : 106,
							"windows" : 558,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 765,
							"v023" : 2281,
							"v024" : 269
						},
						"pbr" : 1.000023999999991
					},
					"flagNone" : {
						"count" : 178,
						"bwa" : 4664508,
						"bwc" : 449860,
						"osv" : {
							"linux" : 107,
							"darwin" : 8,
							"freebsd" : 6,
							"windows" : 54,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 50,
							"v023" : 117,
							"v024" : 8
						},
						"pbr" : 0.000591
					},
					"flagStable" : {
						"count" : 250,
						"bwa" : 6045212,
						"bwc" : 1435156,
						"osv" : {
							"linux" : 212,
							"darwin" : 6,
							"freebsd" : 6,
							"windows" : 23,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 117,
							"v023" : 120,
							"v024" : 11
						},
						"pbr" : 0.0007489999999999989
					},
					"flagFast" : {
						"count" : 1008,
						"bwa" : 589840660,
						"bwc" : 275896221,
						"osv" : {
							"linux" : 618,
							"darwin" : 53,
							"freebsd" : 17,
							"windows" : 310,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 176,
							"v023" : 777,
							"v024" : 52
						},
						"pbr" : 0.16222800000000073
					},
					"flagFastStable" : {
						"count" : 1904,
						"bwa" : 3132398289,
						"bwc" : 2187416523,
						"osv" : {
							"linux" : 1596,
							"darwin" : 28,
							"freebsd" : 77,
							"windows" : 171,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 422,
							"v023" : 1267,
							"v024" : 198
						},
						"pbr" : 0
					}
				},
				"roleGuard" : {
					"total" : {
						"count" : 1032,
						"bwa" : 2656921979,
						"bwc" : 1897186017,
						"osv" : {
							"linux" : 893,
							"darwin" : 12,
							"freebsd" : 53,
							"windows" : 59,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 190,
							"v023" : 687,
							"v024" : 148
						},
						"pbg" : 1.0000009999999993
					},
					"flagNone" : {
						"count" : 0,
						"bwa" : 0,
						"bwc" : 0,
						"osv" : {
							"linux" : 0,
							"darwin" : 0,
							"freebsd" : 0,
							"windows" : 0,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 0,
							"v023" : 0,
							"v024" : 0
						},
						"pbg" : 0
					},
					"flagStable" : {
						"count" : 0,
						"bwa" : 0,
						"bwc" : 0,
						"osv" : {
							"linux" : 0,
							"darwin" : 0,
							"freebsd" : 0,
							"windows" : 0,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 0,
							"v023" : 0,
							"v024" : 0
						},
						"pbg" : 0
					},
					"flagFast" : {
						"count" : 27,
						"bwa" : 54478121,
						"bwc" : 28717276,
						"osv" : {
							"linux" : 21,
							"darwin" : 0,
							"freebsd" : 1,
							"windows" : 5,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 1,
							"v023" : 24,
							"v024" : 1
						},
						"pbg" : 0.029097000000000005
					},
					"flagFastStable" : {
						"count" : 1005,
						"bwa" : 2602443858,
						"bwc" : 1868468741,
						"osv" : {
							"linux" : 872,
							"darwin" : 12,
							"freebsd" : 52,
							"windows" : 54,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 189,
							"v023" : 663,
							"v024" : 147
						},
						"pbg" : 0.9709039999999995
					}
				},
				"roleMiddle" : {
					"total" : {
						"count" : 3340,
						"bwa" : 3732948669,
						"bwc" : 2465197760,
						"osv" : {
							"linux" : 2533,
							"darwin" : 95,
							"freebsd" : 106,
							"windows" : 558,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 765,
							"v023" : 2281,
							"v024" : 269
						},
						"pbm" : 1.0000520000000046
					},
					"flagNone" : {
						"count" : 178,
						"bwa" : 4664508,
						"bwc" : 449860,
						"osv" : {
							"linux" : 107,
							"darwin" : 8,
							"freebsd" : 6,
							"windows" : 54,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 50,
							"v023" : 117,
							"v024" : 8
						},
						"pbm" : 0.001454999999999996
					},
					"flagStable" : {
						"count" : 250,
						"bwa" : 6045212,
						"bwc" : 1435156,
						"osv" : {
							"linux" : 212,
							"darwin" : 6,
							"freebsd" : 6,
							"windows" : 23,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 117,
							"v023" : 120,
							"v024" : 11
						},
						"pbm" : 0.001328999999999997
					},
					"flagFast" : {
						"count" : 1008,
						"bwa" : 589840660,
						"bwc" : 275896221,
						"osv" : {
							"linux" : 618,
							"darwin" : 53,
							"freebsd" : 17,
							"windows" : 310,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 176,
							"v023" : 777,
							"v024" : 52
						},
						"pbm" : 0.32947000000000004
					},
					"flagFastStable" : {
						"count" : 1904,
						"bwa" : 3132398289,
						"bwc" : 2187416523,
						"osv" : {
							"linux" : 1596,
							"darwin" : 28,
							"freebsd" : 77,
							"windows" : 171,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 422,
							"v023" : 1267,
							"v024" : 198
						},
						"pbm" : 0.6677980000000006
					}
				},
				"roleExit" : {
					"total" : {
						"count" : 822,
						"bwa" : 1521359095,
						"bwc" : 987331327,
						"osv" : {
							"linux" : 648,
							"darwin" : 18,
							"freebsd" : 28,
							"windows" : 109,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 217,
							"v023" : 518,
							"v024" : 84
						},
						"pex" : {
							"p4" : 812,
							"p6" : 668,
							"p8" : 799,
							"p46" : 665,
							"p48" : 796,
							"p68" : 653,
							"p468" : 650
						},
						"pbe" : 1.0000190000000018
					},
					"flagNone" : {
						"count" : 37,
						"bwa" : 924130,
						"bwc" : 138164,
						"osv" : {
							"linux" : 30,
							"darwin" : 1,
							"freebsd" : 0,
							"windows" : 6,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 18,
							"v023" : 16,
							"v024" : 3
						},
						"pex" : {
							"p4" : 37,
							"p6" : 32,
							"p8" : 37,
							"p46" : 32,
							"p48" : 37,
							"p68" : 32,
							"p468" : 32
						},
						"pbe" : 0.00031500000000000007
					},
					"flagFast" : {
						"count" : 224,
						"bwa" : 147199070,
						"bwc" : 64388069,
						"osv" : {
							"linux" : 138,
							"darwin" : 10,
							"freebsd" : 7,
							"windows" : 67,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 48,
							"v023" : 165,
							"v024" : 11
						},
						"pex" : {
							"p4" : 222,
							"p6" : 184,
							"p8" : 215,
							"p46" : 183,
							"p48" : 214,
							"p68" : 176,
							"p468" : 175
						},
						"pbe" : 0.12814399999999995
					},
					"flagStable" : {
						"count" : 103,
						"bwa" : 2459589,
						"bwc" : 506089,
						"osv" : {
							"linux" : 94,
							"darwin" : 2,
							"freebsd" : 2,
							"windows" : 3,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 63,
							"v023" : 37,
							"v024" : 3
						},
						"pex" : {
							"p4" : 102,
							"p6" : 96,
							"p8" : 102,
							"p46" : 96,
							"p48" : 102,
							"p68" : 96,
							"p468" : 96
						},
						"pbe" : 0.0009220000000000002
					},
					"flagFastStable" : {
						"count" : 458,
						"bwa" : 1370776306,
						"bwc" : 922299005,
						"osv" : {
							"linux" : 386,
							"darwin" : 5,
							"freebsd" : 19,
							"windows" : 33,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 88,
							"v023" : 300,
							"v024" : 67
						},
						"pex" : {
							"p4" : 451,
							"p6" : 356,
							"p8" : 445,
							"p46" : 354,
							"p48" : 443,
							"p68" : 349,
							"p468" : 347
						},
						"pbe" : 0.870638
					}
				},
				"roleDir" : {
					"total" : {
						"count" : 1987,
						"bwa" : 2794955112,
						"bwc" : 1864610456,
						"osv" : {
							"linux" : 1355,
							"darwin" : 73,
							"freebsd" : 66,
							"windows" : 467,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 358,
							"v023" : 1432,
							"v024" : 180
						}
					},
					"authorityTrue" : {
						"count" : 10,
						"bwa" : 11949927,
						"bwc" : 5673050,
						"osv" : {
							"linux" : 7,
							"darwin" : 0,
							"freebsd" : 2,
							"windows" : 0,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 0,
							"v023" : 0,
							"v024" : 5
						}
					}
				}
			}
		},
		"countries" : [
			{
				"country" : "HU",
				"cbcc" : 15,
				"crcc" : 2477,
				"relay" : 19,
				"guard" : 7,
				"middle" : 19,
				"exit" : 4,
				"dir" : 15,
				"bwa" : 27819291,
				"bwc" : 17985246,
				"pbr" : 0.004826999999999999,
				"pbg" : 0.008239,
				"pbm" : 0.004475,
				"pbe" : 0.0017650000000000003,
				"fast" : 19,
				"stable" : 11,
				"osv" : {
					"linux" : 15,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 4,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 1,
					"v023" : 18,
					"v024" : 0
				},
				"pex" : {
					"p4" : 4,
					"p6" : 3,
					"p8" : 4,
					"p46" : 3,
					"p48" : 4,
					"p68" : 3,
					"p468" : 3
				},
				"autosys" : [
					{
						"as" : 2012,
						"count" : 1
					},
					{
						"as" : 29278,
						"count" : 1
					},
					{
						"as" : 56322,
						"count" : 3
					},
					{
						"as" : 6830,
						"count" : 5
					},
					{
						"as" : 34655,
						"count" : 1
					},
					{
						"as" : 43711,
						"count" : 1
					},
					{
						"as" : 5483,
						"count" : 5
					},
					{
						"as" : 42964,
						"count" : 1
					},
					{
						"as" : 15467,
						"count" : 1
					}
				]
			},
			{
				"country" : "FR",
				"cbcc" : 112,
				"crcc" : 60146,
				"relay" : 184,
				"guard" : 63,
				"middle" : 184,
				"exit" : 56,
				"dir" : 99,
				"bwa" : 188390421,
				"bwc" : 128755697,
				"pbr" : 0.05608100000000005,
				"pbg" : 0.052663,
				"pbm" : 0.06717999999999998,
				"pbe" : 0.04838800000000002,
				"fast" : 145,
				"stable" : 126,
				"osv" : {
					"linux" : 150,
					"darwin" : 6,
					"freebsd" : 3,
					"windows" : 21,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 54,
					"v023" : 121,
					"v024" : 6
				},
				"pex" : {
					"p4" : 55,
					"p6" : 48,
					"p8" : 55,
					"p46" : 48,
					"p48" : 55,
					"p68" : 48,
					"p468" : 48
				},
				"autosys" : [
					{
						"as" : 16276,
						"count" : 77
					},
					{
						"as" : 12322,
						"count" : 47
					},
					{
						"as" : 29169,
						"count" : 12
					},
					{
						"as" : 15557,
						"count" : 10
					},
					{
						"as" : 5410,
						"count" : 3
					},
					{
						"as" : 21502,
						"count" : 7
					},
					{
						"as" : 20766,
						"count" : 2
					},
					{
						"as" : 39389,
						"count" : 1
					},
					{
						"as" : 50618,
						"count" : 1
					},
					{
						"as" : 3215,
						"count" : 6
					},
					{
						"as" : 35238,
						"count" : 1
					},
					{
						"as" : 35655,
						"count" : 1
					},
					{
						"as" : 12626,
						"count" : 1
					},
					{
						"as" : 31555,
						"count" : 1
					},
					{
						"as" : 13193,
						"count" : 1
					},
					{
						"as" : 196689,
						"count" : 3
					},
					{
						"as" : 8228,
						"count" : 2
					},
					{
						"as" : 197422,
						"count" : 2
					},
					{
						"as" : 35632,
						"count" : 1
					},
					{
						"as" : 8218,
						"count" : 1
					},
					{
						"as" : 41334,
						"count" : 1
					},
					{
						"as" : 197922,
						"count" : 1
					},
					{
						"as" : 47206,
						"count" : 2
					}
				]
			},
			{
				"country" : "DE",
				"cbcc" : 55,
				"crcc" : 76401,
				"relay" : 637,
				"guard" : 252,
				"middle" : 637,
				"exit" : 95,
				"dir" : 359,
				"bwa" : 790173377,
				"bwc" : 538094182,
				"pbr" : 0.21823200000000054,
				"pbg" : 0.22619500000000003,
				"pbm" : 0.2645250000000002,
				"pbe" : 0.163994,
				"fast" : 574,
				"stable" : 423,
				"osv" : {
					"linux" : 559,
					"darwin" : 9,
					"freebsd" : 17,
					"windows" : 45,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 153,
					"v023" : 414,
					"v024" : 64
				},
				"pex" : {
					"p4" : 93,
					"p6" : 57,
					"p8" : 93,
					"p46" : 56,
					"p48" : 92,
					"p68" : 56,
					"p468" : 55
				},
				"autosys" : [
					{
						"as" : 6724,
						"count" : 35
					},
					{
						"as" : 6805,
						"count" : 16
					},
					{
						"as" : 13722,
						"count" : 4
					},
					{
						"as" : 24940,
						"count" : 166
					},
					{
						"as" : 8972,
						"count" : 29
					},
					{
						"as" : 3320,
						"count" : 68
					},
					{
						"as" : 34011,
						"count" : 7
					},
					{
						"as" : 20880,
						"count" : 1
					},
					{
						"as" : 31103,
						"count" : 10
					},
					{
						"as" : 20773,
						"count" : 24
					},
					{
						"as" : 29562,
						"count" : 15
					},
					{
						"as" : 31334,
						"count" : 24
					},
					{
						"as" : 13184,
						"count" : 17
					},
					{
						"as" : 42652,
						"count" : 1
					},
					{
						"as" : 198599,
						"count" : 2
					},
					{
						"as" : 24961,
						"count" : 12
					},
					{
						"as" : 12732,
						"count" : 1
					},
					{
						"as" : 16202,
						"count" : 2
					},
					{
						"as" : 16276,
						"count" : 3
					},
					{
						"as" : 12843,
						"count" : 1
					},
					{
						"as" : 24900,
						"count" : 3
					},
					{
						"as" : 29141,
						"count" : 2
					},
					{
						"as" : 680,
						"count" : 8
					},
					{
						"as" : 3209,
						"count" : 18
					},
					{
						"as" : 16265,
						"count" : 6
					},
					{
						"as" : 20825,
						"count" : 16
					},
					{
						"as" : 8767,
						"count" : 7
					},
					{
						"as" : 57668,
						"count" : 8
					},
					{
						"as" : 34240,
						"count" : 2
					},
					{
						"as" : 13237,
						"count" : 3
					},
					{
						"as" : 8560,
						"count" : 8
					},
					{
						"as" : 47447,
						"count" : 5
					},
					{
						"as" : 8422,
						"count" : 9
					},
					{
						"as" : 47692,
						"count" : 4
					},
					{
						"as" : 35366,
						"count" : 12
					},
					{
						"as" : 39138,
						"count" : 4
					},
					{
						"as" : 49855,
						"count" : 1
					},
					{
						"as" : 20676,
						"count" : 4
					},
					{
						"as" : 8881,
						"count" : 1
					},
					{
						"as" : 51167,
						"count" : 3
					},
					{
						"as" : 197540,
						"count" : 4
					},
					{
						"as" : 31100,
						"count" : 1
					},
					{
						"as" : 44066,
						"count" : 1
					},
					{
						"as" : 15943,
						"count" : 5
					},
					{
						"as" : 196714,
						"count" : 2
					},
					{
						"as" : 197071,
						"count" : 1
					},
					{
						"as" : 31333,
						"count" : 5
					},
					{
						"as" : 31078,
						"count" : 4
					},
					{
						"as" : 12312,
						"count" : 2
					},
					{
						"as" : 31400,
						"count" : 7
					},
					{
						"as" : 553,
						"count" : 2
					},
					{
						"as" : 33984,
						"count" : 2
					},
					{
						"as" : 15657,
						"count" : 2
					},
					{
						"as" : 31342,
						"count" : 7
					},
					{
						"as" : 12337,
						"count" : 1
					},
					{
						"as" : 56813,
						"count" : 1
					},
					{
						"as" : 48039,
						"count" : 1
					},
					{
						"as" : 39743,
						"count" : 2
					},
					{
						"as" : 50472,
						"count" : 1
					},
					{
						"as" : 24956,
						"count" : 1
					},
					{
						"as" : 5669,
						"count" : 1
					},
					{
						"as" : 4589,
						"count" : 1
					},
					{
						"as" : 24989,
						"count" : 2
					},
					{
						"as" : 21409,
						"count" : 1
					},
					{
						"as" : 33891,
						"count" : 1
					},
					{
						"as" : 9145,
						"count" : 1
					},
					{
						"as" : 9063,
						"count" : 1
					},
					{
						"as" : 30962,
						"count" : 3
					},
					{
						"as" : 35244,
						"count" : 1
					},
					{
						"as" : 25074,
						"count" : 1
					},
					{
						"as" : 13301,
						"count" : 1
					},
					{
						"as" : 12898,
						"count" : 1
					},
					{
						"as" : 48823,
						"count" : 2
					},
					{
						"as" : 12897,
						"count" : 1
					},
					{
						"as" : 25538,
						"count" : 1
					},
					{
						"as" : 34549,
						"count" : 1
					},
					{
						"as" : 20640,
						"count" : 1
					},
					{
						"as" : 12676,
						"count" : 1
					},
					{
						"as" : 15763,
						"count" : 1
					}
				]
			},
			{
				"country" : "SE",
				"cbcc" : 57,
				"crcc" : 6189,
				"relay" : 106,
				"guard" : 45,
				"middle" : 106,
				"exit" : 30,
				"dir" : 76,
				"bwa" : 182135006,
				"bwc" : 131113358,
				"pbr" : 0.04690700000000001,
				"pbg" : 0.055401,
				"pbm" : 0.03289300000000002,
				"pbe" : 0.05242700000000001,
				"fast" : 97,
				"stable" : 78,
				"osv" : {
					"linux" : 78,
					"darwin" : 5,
					"freebsd" : 9,
					"windows" : 13,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 21,
					"v023" : 69,
					"v024" : 15
				},
				"pex" : {
					"p4" : 29,
					"p6" : 25,
					"p8" : 29,
					"p46" : 25,
					"p48" : 29,
					"p68" : 25,
					"p468" : 25
				},
				"autosys" : [
					{
						"as" : 2119,
						"count" : 15
					},
					{
						"as" : 1653,
						"count" : 5
					},
					{
						"as" : 8473,
						"count" : 14
					},
					{
						"as" : 39651,
						"count" : 9
					},
					{
						"as" : 57858,
						"count" : 2
					},
					{
						"as" : 47155,
						"count" : 2
					},
					{
						"as" : 12597,
						"count" : 1
					},
					{
						"as" : 198093,
						"count" : 4
					},
					{
						"as" : 29518,
						"count" : 3
					},
					{
						"as" : 3301,
						"count" : 12
					},
					{
						"as" : 49770,
						"count" : 2
					},
					{
						"as" : 43326,
						"count" : 1
					},
					{
						"as" : 42695,
						"count" : 1
					},
					{
						"as" : 43948,
						"count" : 1
					},
					{
						"as" : 42708,
						"count" : 4
					},
					{
						"as" : 50821,
						"count" : 1
					},
					{
						"as" : 51815,
						"count" : 4
					},
					{
						"as" : 33885,
						"count" : 3
					},
					{
						"as" : 2840,
						"count" : 2
					},
					{
						"as" : 3292,
						"count" : 1
					},
					{
						"as" : 39369,
						"count" : 2
					},
					{
						"as" : 13189,
						"count" : 1
					},
					{
						"as" : 1257,
						"count" : 2
					},
					{
						"as" : 2603,
						"count" : 1
					},
					{
						"as" : 39351,
						"count" : 1
					},
					{
						"as" : 33837,
						"count" : 3
					},
					{
						"as" : 37560,
						"count" : 2
					},
					{
						"as" : 35041,
						"count" : 1
					},
					{
						"as" : 30880,
						"count" : 1
					},
					{
						"as" : 50066,
						"count" : 2
					},
					{
						"as" : 44581,
						"count" : 1
					},
					{
						"as" : 40475,
						"count" : 1
					},
					{
						"as" : 34610,
						"count" : 1
					}
				]
			},
			{
				"country" : "US",
				"cbcc" : 399,
				"crcc" : 144474,
				"relay" : 941,
				"guard" : 264,
				"middle" : 941,
				"exit" : 177,
				"dir" : 606,
				"bwa" : 1083438891,
				"bwc" : 701092079,
				"pbr" : 0.2841149999999998,
				"pbg" : 0.2736409999999996,
				"pbm" : 0.2567169999999998,
				"pbe" : 0.32198100000000013,
				"fast" : 853,
				"stable" : 631,
				"osv" : {
					"linux" : 661,
					"darwin" : 46,
					"freebsd" : 32,
					"windows" : 178,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 189,
					"v023" : 671,
					"v024" : 73
				},
				"pex" : {
					"p4" : 173,
					"p6" : 136,
					"p8" : 169,
					"p46" : 135,
					"p48" : 168,
					"p68" : 132,
					"p468" : 131
				},
				"autosys" : [
					{
						"as" : 53667,
						"count" : 4
					},
					{
						"as" : 7922,
						"count" : 144
					},
					{
						"as" : 40092,
						"count" : 1
					},
					{
						"as" : 7132,
						"count" : 20
					},
					{
						"as" : 7029,
						"count" : 3
					},
					{
						"as" : 8001,
						"count" : 22
					},
					{
						"as" : 6389,
						"count" : 7
					},
					{
						"as" : 29761,
						"count" : 7
					},
					{
						"as" : 13768,
						"count" : 4
					},
					{
						"as" : 18566,
						"count" : 1
					},
					{
						"as" : 7796,
						"count" : 1
					},
					{
						"as" : 209,
						"count" : 18
					},
					{
						"as" : 46841,
						"count" : 1
					},
					{
						"as" : 7018,
						"count" : 16
					},
					{
						"as" : 36351,
						"count" : 26
					},
					{
						"as" : 25795,
						"count" : 3
					},
					{
						"as" : 6939,
						"count" : 28
					},
					{
						"as" : 19262,
						"count" : 56
					},
					{
						"as" : 25780,
						"count" : 1
					},
					{
						"as" : 36024,
						"count" : 2
					},
					{
						"as" : 32875,
						"count" : 3
					},
					{
						"as" : 25653,
						"count" : 2
					},
					{
						"as" : 14,
						"count" : 3
					},
					{
						"as" : 23148,
						"count" : 3
					},
					{
						"as" : 21844,
						"count" : 7
					},
					{
						"as" : 3842,
						"count" : 8
					},
					{
						"as" : 1706,
						"count" : 1
					},
					{
						"as" : 11427,
						"count" : 18
					},
					{
						"as" : 6128,
						"count" : 10
					},
					{
						"as" : 22219,
						"count" : 8
					},
					{
						"as" : 22747,
						"count" : 1
					},
					{
						"as" : 20115,
						"count" : 24
					},
					{
						"as" : 1312,
						"count" : 3
					},
					{
						"as" : 46457,
						"count" : 8
					},
					{
						"as" : 30058,
						"count" : 9
					},
					{
						"as" : 12025,
						"count" : 1
					},
					{
						"as" : 18618,
						"count" : 1
					},
					{
						"as" : 40156,
						"count" : 2
					},
					{
						"as" : 14618,
						"count" : 12
					},
					{
						"as" : 174,
						"count" : 7
					},
					{
						"as" : 6079,
						"count" : 5
					},
					{
						"as" : 11403,
						"count" : 2
					},
					{
						"as" : 22773,
						"count" : 26
					},
					{
						"as" : 23089,
						"count" : 1
					},
					{
						"as" : 46375,
						"count" : 4
					},
					{
						"as" : 5650,
						"count" : 6
					},
					{
						"as" : 26347,
						"count" : 1
					},
					{
						"as" : 30693,
						"count" : 5
					},
					{
						"as" : 10796,
						"count" : 8
					},
					{
						"as" : 16904,
						"count" : 1
					},
					{
						"as" : 6315,
						"count" : 6
					},
					{
						"as" : 12177,
						"count" : 1
					},
					{
						"as" : 30496,
						"count" : 2
					},
					{
						"as" : 46652,
						"count" : 17
					},
					{
						"as" : 21788,
						"count" : 7
					},
					{
						"as" : 16718,
						"count" : 2
					},
					{
						"as" : 33387,
						"count" : 1
					},
					{
						"as" : 16652,
						"count" : 7
					},
					{
						"as" : 40244,
						"count" : 1
					},
					{
						"as" : 3651,
						"count" : 3
					},
					{
						"as" : 19975,
						"count" : 1
					},
					{
						"as" : 3,
						"count" : 4
					},
					{
						"as" : 16509,
						"count" : 4
					},
					{
						"as" : 20454,
						"count" : 5
					},
					{
						"as" : 13618,
						"count" : 1
					},
					{
						"as" : 36352,
						"count" : 16
					},
					{
						"as" : 3356,
						"count" : 1
					},
					{
						"as" : 30633,
						"count" : 2
					},
					{
						"as" : 1785,
						"count" : 2
					},
					{
						"as" : 29854,
						"count" : 2
					},
					{
						"as" : 32220,
						"count" : 1
					},
					{
						"as" : 6528,
						"count" : 1
					},
					{
						"as" : 17099,
						"count" : 2
					},
					{
						"as" : 32097,
						"count" : 7
					},
					{
						"as" : 20001,
						"count" : 13
					},
					{
						"as" : 11426,
						"count" : 11
					},
					{
						"as" : 17090,
						"count" : 3
					},
					{
						"as" : 53264,
						"count" : 3
					},
					{
						"as" : 14670,
						"count" : 1
					},
					{
						"as" : 46,
						"count" : 1
					},
					{
						"as" : 8100,
						"count" : 4
					},
					{
						"as" : 18712,
						"count" : 1
					},
					{
						"as" : 13647,
						"count" : 1
					},
					{
						"as" : 54856,
						"count" : 2
					},
					{
						"as" : 40475,
						"count" : 2
					},
					{
						"as" : 14987,
						"count" : 1
					},
					{
						"as" : 32748,
						"count" : 4
					},
					{
						"as" : 18779,
						"count" : 4
					},
					{
						"as" : 46925,
						"count" : 1
					},
					{
						"as" : 29169,
						"count" : 1
					},
					{
						"as" : 11878,
						"count" : 1
					},
					{
						"as" : 3595,
						"count" : 9
					},
					{
						"as" : 32475,
						"count" : 3
					},
					{
						"as" : 55045,
						"count" : 1
					},
					{
						"as" : 3722,
						"count" : 2
					},
					{
						"as" : 14901,
						"count" : 1
					},
					{
						"as" : 46664,
						"count" : 2
					},
					{
						"as" : 4385,
						"count" : 1
					},
					{
						"as" : 30266,
						"count" : 4
					},
					{
						"as" : 10913,
						"count" : 1
					},
					{
						"as" : 2044,
						"count" : 1
					},
					{
						"as" : 46475,
						"count" : 14
					},
					{
						"as" : 30083,
						"count" : 3
					},
					{
						"as" : 36492,
						"count" : 1
					},
					{
						"as" : 30036,
						"count" : 6
					},
					{
						"as" : 33440,
						"count" : 2
					},
					{
						"as" : 46193,
						"count" : 1
					},
					{
						"as" : 194,
						"count" : 2
					},
					{
						"as" : 11351,
						"count" : 7
					},
					{
						"as" : 11288,
						"count" : 2
					},
					{
						"as" : 20473,
						"count" : 1
					},
					{
						"as" : 33604,
						"count" : 1
					},
					{
						"as" : 53785,
						"count" : 1
					},
					{
						"as" : 23205,
						"count" : 1
					},
					{
						"as" : 14536,
						"count" : 2
					},
					{
						"as" : 4181,
						"count" : 3
					},
					{
						"as" : 47066,
						"count" : 2
					},
					{
						"as" : 8560,
						"count" : 2
					},
					{
						"as" : 34764,
						"count" : 1
					},
					{
						"as" : 19994,
						"count" : 8
					},
					{
						"as" : 9,
						"count" : 1
					},
					{
						"as" : 46687,
						"count" : 1
					},
					{
						"as" : 237,
						"count" : 1
					},
					{
						"as" : 35017,
						"count" : 1
					},
					{
						"as" : 53850,
						"count" : 1
					},
					{
						"as" : 19108,
						"count" : 3
					},
					{
						"as" : 17183,
						"count" : 1
					},
					{
						"as" : 7725,
						"count" : 1
					},
					{
						"as" : 11696,
						"count" : 1
					},
					{
						"as" : 7753,
						"count" : 1
					},
					{
						"as" : 31,
						"count" : 1
					},
					{
						"as" : 12180,
						"count" : 1
					},
					{
						"as" : 36012,
						"count" : 1
					},
					{
						"as" : 33070,
						"count" : 3
					},
					{
						"as" : 30176,
						"count" : 1
					},
					{
						"as" : 23028,
						"count" : 10
					},
					{
						"as" : 5760,
						"count" : 2
					},
					{
						"as" : 36223,
						"count" : 2
					},
					{
						"as" : 33588,
						"count" : 2
					},
					{
						"as" : 701,
						"count" : 1
					},
					{
						"as" : 111,
						"count" : 1
					},
					{
						"as" : 29873,
						"count" : 2
					},
					{
						"as" : 2637,
						"count" : 1
					},
					{
						"as" : 11051,
						"count" : 2
					},
					{
						"as" : 36252,
						"count" : 1
					},
					{
						"as" : 6461,
						"count" : 2
					},
					{
						"as" : 21565,
						"count" : 1
					},
					{
						"as" : 14517,
						"count" : 1
					},
					{
						"as" : 30640,
						"count" : 1
					},
					{
						"as" : 36477,
						"count" : 1
					},
					{
						"as" : 46816,
						"count" : 3
					},
					{
						"as" : 32780,
						"count" : 2
					},
					{
						"as" : 6364,
						"count" : 2
					},
					{
						"as" : 226,
						"count" : 1
					},
					{
						"as" : 33363,
						"count" : 2
					},
					{
						"as" : 19969,
						"count" : 1
					},
					{
						"as" : 33182,
						"count" : 1
					},
					{
						"as" : 7377,
						"count" : 1
					},
					{
						"as" : 13703,
						"count" : 1
					},
					{
						"as" : 14511,
						"count" : 1
					},
					{
						"as" : 15003,
						"count" : 2
					},
					{
						"as" : 8047,
						"count" : 1
					},
					{
						"as" : 14051,
						"count" : 1
					},
					{
						"as" : 4922,
						"count" : 1
					},
					{
						"as" : 54046,
						"count" : 1
					},
					{
						"as" : 53340,
						"count" : 2
					},
					{
						"as" : 15085,
						"count" : 1
					},
					{
						"as" : 19165,
						"count" : 2
					},
					{
						"as" : 4565,
						"count" : 1
					},
					{
						"as" : 30217,
						"count" : 1
					},
					{
						"as" : 10594,
						"count" : 1
					},
					{
						"as" : 30475,
						"count" : 1
					},
					{
						"as" : 33724,
						"count" : 1
					},
					{
						"as" : 11404,
						"count" : 1
					},
					{
						"as" : 7065,
						"count" : 2
					},
					{
						"as" : 12083,
						"count" : 3
					},
					{
						"as" : 12129,
						"count" : 1
					},
					{
						"as" : 26496,
						"count" : 1
					},
					{
						"as" : 17019,
						"count" : 1
					},
					{
						"as" : 18515,
						"count" : 1
					},
					{
						"as" : 12271,
						"count" : 3
					},
					{
						"as" : 46844,
						"count" : 1
					},
					{
						"as" : 33597,
						"count" : 1
					},
					{
						"as" : 27229,
						"count" : 1
					},
					{
						"as" : 26914,
						"count" : 1
					},
					{
						"as" : 10835,
						"count" : 1
					},
					{
						"as" : 16276,
						"count" : 1
					},
					{
						"as" : 36025,
						"count" : 1
					},
					{
						"as" : 20178,
						"count" : 1
					},
					{
						"as" : 19202,
						"count" : 1
					},
					{
						"as" : 103,
						"count" : 1
					},
					{
						"as" : 13977,
						"count" : 1
					},
					{
						"as" : 26934,
						"count" : 1
					},
					{
						"as" : 12035,
						"count" : 1
					},
					{
						"as" : 73,
						"count" : 1
					},
					{
						"as" : 3061,
						"count" : 1
					},
					{
						"as" : 18978,
						"count" : 2
					},
					{
						"as" : 10508,
						"count" : 1
					},
					{
						"as" : 34,
						"count" : 1
					},
					{
						"as" : 22772,
						"count" : 1
					},
					{
						"as" : 10507,
						"count" : 1
					},
					{
						"as" : 20231,
						"count" : 1
					},
					{
						"as" : 27553,
						"count" : 1
					},
					{
						"as" : 10887,
						"count" : 1
					},
					{
						"as" : 26729,
						"count" : 1
						},
					{
						"as" : 12231,
						"count" : 1
					},
					{
						"as" : 22989,
						"count" : 1
					},
					{
						"as" : 16810,
						"count" : 1
					},
					{
						"as" : 2701,
						"count" : 1
					},
					{
						"as" : 36137,
						"count" : 1
					},
					{
						"as" : 23136,
						"count" : 1
					},
					{
						"as" : 11398,
						"count" : 1
					},
					{
						"as" : 16942,
						"count" : 1
					},
					{
						"as" : 19181,
						"count" : 1
					},
					{
						"as" : 46261,
						"count" : 1
					},
					{
						"as" : 22576,
						"count" : 1
					},
					{
						"as" : 40430,
						"count" : 1
					},
					{
						"as" : 10489,
						"count" : 1
					},
					{
						"as" : 26068,
						"count" : 1
					},
					{
						"as" : 29737,
						"count" : 1
					},
					{
						"as" : 22030,
						"count" : 1
					},
					{
						"as" : 6488,
						"count" : 1
					},
					{
						"as" : 23292,
						"count" : 1
					},
					{
						"as" : 7459,
						"count" : 1
					},
					{
						"as" : 20093,
						"count" : 1
					},
					{
						"as" : 11841,
						"count" : 1
					},
					{
						"as" : 19366,
						"count" : 1
					},
					{
						"as" : 36850,
						"count" : 1
					},
					{
						"as" : 29933,
						"count" : 1
					},
					{
						"as" : 23387,
						"count" : 1
					},
					{
						"as" : 29859,
						"count" : 1
					},
					{
						"as" : 47069,
						"count" : 1
					},
					{
						"as" : 11557,
						"count" : 1
					},
					{
						"as" : 1280,
						"count" : 1
					},
					{
						"as" : 40676,
						"count" : 1
					},
					{
						"as" : 36375,
						"count" : 1
					},
					{
						"as" : 55,
						"count" : 1
					},
					{
						"as" : 167,
						"count" : 1
					}
				]
			},
			{
				"country" : "JP",
				"cbcc" : 88,
				"crcc" : 11375,
				"relay" : 43,
				"guard" : 10,
				"middle" : 43,
				"exit" : 6,
				"dir" : 26,
				"bwa" : 14791829,
				"bwc" : 6010456,
				"pbr" : 0.001012,
				"pbg" : 0.001013,
				"pbm" : 0.0009699999999999998,
				"pbe" : 0.001059,
				"fast" : 42,
				"stable" : 30,
				"osv" : {
					"linux" : 20,
					"darwin" : 1,
					"freebsd" : 2,
					"windows" : 20,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 10,
					"v023" : 31,
					"v024" : 2
				},
				"pex" : {
					"p4" : 6,
					"p6" : 6,
					"p8" : 4,
					"p46" : 6,
					"p48" : 4,
					"p68" : 4,
					"p468" : 4
				},
				"autosys" : [
					{
						"as" : 4713,
						"count" : 5
					},
					{
						"as" : 9365,
						"count" : 1
					},
					{
						"as" : 9371,
						"count" : 4
					},
					{
						"as" : 55897,
						"count" : 1
					},
					{
						"as" : 16509,
						"count" : 2
					},
					{
						"as" : 17931,
						"count" : 1
					},
					{
						"as" : 2497,
						"count" : 2
					},
					{
						"as" : 2516,
						"count" : 9
					},
					{
						"as" : 17676,
						"count" : 3
					},
					{
						"as" : 2527,
						"count" : 3
					},
					{
						"as" : 2510,
						"count" : 1
					},
					{
						"as" : 2514,
						"count" : 2
					},
					{
						"as" : 17511,
						"count" : 2
					},
					{
						"as" : 9617,
						"count" : 1
					},
					{
						"as" : 2518,
						"count" : 2
					},
					{
						"as" : 18126,
						"count" : 1
					},
					{
						"as" : 4725,
						"count" : 1
					},
					{
						"as" : 9351,
						"count" : 1
					},
					{
						"as" : 4685,
						"count" : 1
					}
				]
			},
			{
				"country" : "GB",
				"cbcc" : 123,
				"crcc" : 25275,
				"relay" : 174,
				"guard" : 37,
				"middle" : 174,
				"exit" : 32,
				"dir" : 89,
				"bwa" : 128851510,
				"bwc" : 85235410,
				"pbr" : 0.054657,
				"pbg" : 0.038349,
				"pbm" : 0.03864700000000001,
				"pbe" : 0.08696500000000003,
				"fast" : 148,
				"stable" : 104,
				"osv" : {
					"linux" : 123,
					"darwin" : 4,
					"freebsd" : 2,
					"windows" : 44,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 29,
					"v023" : 129,
					"v024" : 14
				},
				"pex" : {
					"p4" : 32,
					"p6" : 27,
					"p8" : 32,
					"p46" : 27,
					"p48" : 32,
					"p68" : 27,
					"p468" : 27
				},
				"autosys" : [
					{
						"as" : 5089,
						"count" : 34
					},
					{
						"as" : 29017,
						"count" : 1
					},
					{
						"as" : 35425,
						"count" : 6
					},
					{
						"as" : 786,
						"count" : 4
					},
					{
						"as" : 2529,
						"count" : 2
					},
					{
						"as" : 15830,
						"count" : 19
					},
					{
						"as" : 35228,
						"count" : 20
					},
					{
						"as" : 43234,
						"count" : 3
					},
					{
						"as" : 20860,
						"count" : 10
					},
					{
						"as" : 29302,
						"count" : 2
					},
					{
						"as" : 8943,
						"count" : 3
					},
					{
						"as" : 5607,
						"count" : 8
					},
					{
						"as" : 6871,
						"count" : 5
					},
					{
						"as" : 51059,
						"count" : 1
					},
					{
						"as" : 2856,
						"count" : 14
					},
					{
						"as" : 16276,
						"count" : 6
					},
					{
						"as" : 13285,
						"count" : 5
					},
					{
						"as" : 42831,
						"count" : 2
					},
					{
						"as" : 13213,
						"count" : 5
					},
					{
						"as" : 33970,
						"count" : 1
					},
					{
						"as" : 12576,
						"count" : 2
					},
					{
						"as" : 1239,
						"count" : 1
					},
					{
						"as" : 25577,
						"count" : 1
					},
					{
						"as" : 20712,
						"count" : 1
					},
					{
						"as" : 44557,
						"count" : 1
					},
					{
						"as" : 12513,
						"count" : 1
					},
					{
						"as" : 31595,
						"count" : 1
					},
					{
						"as" : 35662,
						"count" : 5
					},
					{
						"as" : 20738,
						"count" : 3
					},
					{
						"as" : 51377,
						"count" : 3
					},
					{
						"as" : 8401,
						"count" : 1
					},
					{
						"as" : 34119,
						"count" : 1
					},
					{
						"as" : 9105,
						"count" : 1
					},
					{
						"as" : 28986,
						"count" : 1
					}
				]
			},
			{
				"country" : "IL",
				"cbcc" : 41,
				"crcc" : 11912,
				"relay" : 15,
				"guard" : 7,
				"middle" : 15,
				"exit" : 1,
				"dir" : 11,
				"bwa" : 8135959,
				"bwc" : 4236522,
				"pbr" : 0.0012640000000000001,
				"pbg" : 0.002648,
				"pbm" : 0.001133,
				"pbe" : 0.000008,
				"fast" : 14,
				"stable" : 10,
				"osv" : {
					"linux" : 11,
					"darwin" : 1,
					"freebsd" : 0,
					"windows" : 3,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 8,
					"v023" : 5,
					"v024" : 2
				},
				"pex" : {
					"p4" : 1,
					"p6" : 1,
					"p8" : 1,
					"p46" : 1,
					"p48" : 1,
					"p68" : 1,
					"p468" : 1
				},
				"autosys" : [
					{
						"as" : 8551,
						"count" : 9
					},
					{
						"as" : 12400,
						"count" : 1
					},
					{
						"as" : 1680,
						"count" : 4
					},
					{
						"as" : 50463,
						"count" : 1
					}
				]
			},
			{
				"country" : "MY",
				"cbcc" : 26,
				"crcc" : 2045,
				"relay" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"bwa" : 74110,
				"bwc" : 20294,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000008,
				"pbe" : 0,
				"fast" : 1,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 2,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 1,
					"v023" : 1,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [
					{
						"as" : 4788,
						"count" : 2
					}
				]
			},
			{
				"country" : "IS",
				"cbcc" : 0,
				"crcc" : 473,
				"relay" : 14,
				"guard" : 3,
				"middle" : 14,
				"exit" : 7,
				"dir" : 7,
				"bwa" : 10419232,
				"bwc" : 6998026,
				"pbr" : 0.0028910000000000003,
				"pbg" : 0.003988,
				"pbm" : 0.00214,
				"pbe" : 0.002543,
				"fast" : 12,
				"stable" : 11,
				"osv" : {
					"linux" : 13,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 1,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 1,
					"v023" : 13,
					"v024" : 0
				},
				"pex" : {
					"p4" : 7,
					"p6" : 7,
					"p8" : 7,
					"p46" : 7,
					"p48" : 7,
					"p68" : 7,
					"p468" : 7
				},
				"autosys" : [
					{
						"as" : 51969,
						"count" : 1
					},
					{
						"as" : 50613,
						"count" : 7
					},
					{
						"as" : 44925,
						"count" : 4
					},
					{
						"as" : 48685,
						"count" : 1
					},
					{
						"as" : 44432,
						"count" : 1
					}
				]
			},
			{
				"country" : "AU",
				"cbcc" : 61,
				"crcc" : 9501,
				"relay" : 34,
				"guard" : 4,
				"middle" : 34,
				"exit" : 12,
				"dir" : 20,
				"bwa" : 6077687,
				"bwc" : 1599959,
				"pbr" : 0.0005400000000000003,
				"pbg" : 0.000249,
				"pbm" : 0.000283,
				"pbe" : 0.0010899999999999998,
				"fast" : 25,
				"stable" : 22,
				"osv" : {
					"linux" : 21,
					"darwin" : 0,
					"freebsd" : 4,
					"windows" : 9,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 8,
					"v023" : 26,
					"v024" : 0
				},
				"pex" : {
					"p4" : 12,
					"p6" : 11,
					"p8" : 12,
					"p46" : 11,
					"p48" : 12,
					"p68" : 11,
					"p468" : 11
				},
				"autosys" : [
					{
						"as" : 9482,
						"count" : 2
					},
					{
						"as" : 7545,
						"count" : 3
					},
					{
						"as" : 45570,
						"count" : 3
					},
					{
						"as" : 16509,
						"count" : 1
					},
					{
						"as" : 9822,
						"count" : 2
					},
					{
						"as" : 36352,
						"count" : 1
					},
					{
						"as" : 4739,
						"count" : 6
					},
					{
						"as" : 4802,
						"count" : 2
					},
					{
						"as" : 10143,
						"count" : 2
					},
					{
						"as" : 1221,
						"count" : 3
					},
					{
						"as" : 24238,
						"count" : 1
					},
					{
						"as" : 17486,
						"count" : 1
					},
					{
						"as" : 2764,
						"count" : 1
					},
					{
						"as" : 38285,
						"count" : 2
					},
					{
						"as" : 45454,
						"count" : 1
					},
					{
						"as" : 7600,
						"count" : 1
					},
					{
						"as" : 9556,
						"count" : 1
					},
					{
						"as" : 38657,
						"count" : 1
					}
				]
			},
			{
				"country" : "CH",
				"cbcc" : 23,
				"crcc" : 5515,
				"relay" : 41,
				"guard" : 17,
				"middle" : 41,
				"exit" : 18,
				"dir" : 27,
				"bwa" : 56552133,
				"bwc" : 42425917,
				"pbr" : 0.019194000000000003,
				"pbg" : 0.017934000000000002,
				"pbm" : 0.013316,
				"pbe" : 0.026327,
				"fast" : 40,
				"stable" : 35,
				"osv" : {
					"linux" : 33,
					"darwin" : 2,
					"freebsd" : 0,
					"windows" : 5,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 7,
					"v023" : 33,
					"v024" : 1
				},
				"pex" : {
					"p4" : 18,
					"p6" : 17,
					"p8" : 18,
					"p46" : 17,
					"p48" : 18,
					"p68" : 17,
					"p468" : 17
				},
				"autosys" : [
					{
						"as" : 41715,
						"count" : 1
					},
					{
						"as" : 29691,
						"count" : 3
					},
					{
						"as" : 6830,
						"count" : 14
					},
					{
						"as" : 13030,
						"count" : 9
					},
					{
						"as" : 1836,
						"count" : 2
					},
					{
						"as" : 6893,
						"count" : 3
					},
					{
						"as" : 9044,
						"count" : 1
					},
					{
						"as" : 21069,
						"count" : 1
					},
					{
						"as" : 3303,
						"count" : 5
					},
					{
						"as" : 15517,
						"count" : 1
					},
					{
						"as" : 31736,
						"count" : 1
					}
				]
			},
			{
				"country" : "PL",
				"cbcc" : 34,
				"crcc" : 13329,
				"relay" : 45,
				"guard" : 17,
				"middle" : 45,
				"exit" : 11,
				"dir" : 28,
				"bwa" : 35174703,
				"bwc" : 20933392,
				"pbr" : 0.006458000000000001,
				"pbg" : 0.00761,
				"pbm" : 0.0067870000000000005,
				"pbe" : 0.004978,
				"fast" : 39,
				"stable" : 30,
				"osv" : {
					"linux" : 35,
					"darwin" : 1,
					"freebsd" : 3,
					"windows" : 6,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 10,
					"v023" : 30,
					"v024" : 5
				},
				"pex" : {
					"p4" : 10,
					"p6" : 11,
					"p8" : 11,
					"p46" : 10,
					"p48" : 10,
					"p68" : 11,
					"p468" : 10
				},
				"autosys" : [
					{
						"as" : 6830,
						"count" : 16
					},
					{
						"as" : 51290,
						"count" : 4
					},
					{
						"as" : 51399,
						"count" : 1
					},
					{
						"as" : 47544,
						"count" : 1
					},
					{
						"as" : 12741,
						"count" : 4
					},
					{
						"as" : 6714,
						"count" : 1
					},
					{
						"as" : 41966,
						"count" : 1
					},
					{
						"as" : 13110,
						"count" : 1
					},
					{
						"as" : 39288,
						"count" : 2
					},
					{
						"as" : 21021,
						"count" : 1
					},
					{
						"as" : 5617,
						"count" : 3
					},
					{
						"as" : 197226,
						"count" : 1
					},
					{
						"as" : 16276,
						"count" : 1
					},
					{
						"as" : 9112,
						"count" : 1
					},
					{
						"as" : 198414,
						"count" : 2
					},
					{
						"as" : 35274,
						"count" : 1
					},
					{
						"as" : 41508,
						"count" : 1
					},
					{
						"as" : 31229,
						"count" : 1
					},
					{
						"as" : 15969,
						"count" : 1
					},
					{
						"as" : 43470,
						"count" : 1
					}
				]
			},
			{
				"country" : "RU",
				"cbcc" : 119,
				"crcc" : 30042,
				"relay" : 148,
				"guard" : 29,
				"middle" : 148,
				"exit" : 52,
				"dir" : 103,
				"bwa" : 111755317,
				"bwc" : 58652232,
				"pbr" : 0.025722,
				"pbg" : 0.017916,
				"pbm" : 0.04168100000000003,
				"pbe" : 0.01755199999999999,
				"fast" : 141,
				"stable" : 59,
				"osv" : {
					"linux" : 90,
					"darwin" : 1,
					"freebsd" : 3,
					"windows" : 51,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 35,
					"v023" : 99,
					"v024" : 12
				},
				"pex" : {
					"p4" : 51,
					"p6" : 35,
					"p8" : 50,
					"p46" : 35,
					"p48" : 50,
					"p68" : 34,
					"p468" : 34
				},
				"autosys" : [
					{
						"as" : 49335,
						"count" : 2
					},
					{
						"as" : 35411,
						"count" : 1
					},
					{
						"as" : 48361,
						"count" : 2
					},
					{
						"as" : 48416,
						"count" : 1
					},
					{
						"as" : 15756,
						"count" : 9
					},
					{
						"as" : 8359,
						"count" : 4
					},
					{
						"as" : 8331,
						"count" : 3
					},
					{
						"as" : 8402,
						"count" : 17
					},
					{
						"as" : 42610,
						"count" : 8
					},
					{
						"as" : 42893,
						"count" : 1
					},
					{
						"as" : 31364,
						"count" : 2
					},
					{
						"as" : 57378,
						"count" : 1
					},
					{
						"as" : 20597,
						"count" : 1
					},
					{
						"as" : 49120,
						"count" : 1
					},
					{
						"as" : 47165,
						"count" : 1
					},
					{
						"as" : 9082,
						"count" : 1
					},
					{
						"as" : 41691,
						"count" : 3
					},
					{
						"as" : 43362,
						"count" : 1
					},
					{
						"as" : 42575,
						"count" : 1
					},
					{
						"as" : 35415,
						"count" : 2
					},
					{
						"as" : 45051,
						"count" : 1
					},
					{
						"as" : 51032,
						"count" : 1
					},
					{
						"as" : 28745,
						"count" : 1
					},
					{
						"as" : 52201,
						"count" : 4
					},
					{
						"as" : 8334,
						"count" : 3
					},
					{
						"as" : 21127,
						"count" : 1
					},
					{
						"as" : 3226,
						"count" : 3
					},
					{
						"as" : 5563,
						"count" : 1
					},
					{
						"as" : 41440,
						"count" : 2
					},
					{
						"as" : 13304,
						"count" : 1
					},
					{
						"as" : 34232,
						"count" : 1
					},
					{
						"as" : 57668,
						"count" : 1
					},
					{
						"as" : 12714,
						"count" : 4
					},
					{
						"as" : 44724,
						"count" : 2
					},
					{
						"as" : 6828,
						"count" : 2
					},
					{
						"as" : 12608,
						"count" : 4
					},
					{
						"as" : 48781,
						"count" : 1
					},
					{
						"as" : 12768,
						"count" : 2
					},
					{
						"as" : 2578,
						"count" : 1
					},
					{
						"as" : 30881,
						"count" : 1
					},
					{
						"as" : 41727,
						"count" : 1
					},
					{
						"as" : 43146,
						"count" : 1
					},
					{
						"as" : 35807,
						"count" : 1
					},
					{
						"as" : 49776,
						"count" : 1
					},
					{
						"as" : 41704,
						"count" : 1
					},
					{
						"as" : 42322,
						"count" : 1
					},
					{
						"as" : 25408,
						"count" : 1
					},
					{
						"as" : 41786,
						"count" : 2
					},
					{
						"as" : 15682,
						"count" : 1
					},
					{
						"as" : 51953,
						"count" : 1
					},
					{
						"as" : 34757,
						"count" : 1
					},
					{
						"as" : 35271,
						"count" : 1
					},
					{
						"as" : 48209,
						"count" : 1
					},
					{
						"as" : 44734,
						"count" : 1
					},
					{
						"as" : 38951,
						"count" : 1
					},
					{
						"as" : 23242,
						"count" : 1
					},
					{
						"as" : 50716,
						"count" : 1
					},
					{
						"as" : 44604,
						"count" : 1
					},
					{
						"as" : 42682,
						"count" : 1
					},
					{
						"as" : 8997,
						"count" : 2
					},
					{
						"as" : 41733,
						"count" : 3
					},
					{
						"as" : 43317,
						"count" : 1
					},
					{
						"as" : 12668,
						"count" : 1
					},
					{
						"as" : 49170,
						"count" : 1
					},
					{
						"as" : 35018,
						"count" : 1
					},
					{
						"as" : 8615,
						"count" : 1
					},
					{
						"as" : 21378,
						"count" : 1
					},
					{
						"as" : 29182,
						"count" : 1
					},
					{
						"as" : 24955,
						"count" : 1
					},
					{
						"as" : 8342,
						"count" : 1
					},
					{
						"as" : 28719,
						"count" : 1
					},
					{
						"as" : 2683,
						"count" : 1
					},
					{
						"as" : 50465,
						"count" : 1
					},
					{
						"as" : 48780,
						"count" : 1
					},
					{
						"as" : 3216,
						"count" : 1
					},
					{
						"as" : 2854,
						"count" : 1
					},
					{
						"as" : 29194,
						"count" : 1
					},
					{
						"as" : 30936,
						"count" : 1
					},
					{
						"as" : 35475,
						"count" : 1
					},
					{
						"as" : 13118,
						"count" : 1
					},
					{
						"as" : 28812,
						"count" : 1
					},
					{
						"as" : 41661,
						"count" : 1
					},
					{
						"as" : 5495,
						"count" : 1
					},
					{
						"as" : 20807,
						"count" : 1
					},
					{
						"as" : 47241,
						"count" : 1
					}
				]
			},
			{
				"country" : "AT",
				"cbcc" : 14,
				"crcc" : 5868,
				"relay" : 50,
				"guard" : 19,
				"middle" : 50,
				"exit" : 10,
				"dir" : 33,
				"bwa" : 97852002,
				"bwc" : 81448916,
				"pbr" : 0.022725999999999996,
				"pbg" : 0.041944,
				"pbm" : 0.019159,
				"pbe" : 0.007080000000000002,
				"fast" : 48,
				"stable" : 37,
				"osv" : {
					"linux" : 45,
					"darwin" : 2,
					"freebsd" : 1,
					"windows" : 2,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 12,
					"v023" : 34,
					"v024" : 4
				},
				"pex" : {
					"p4" : 10,
					"p6" : 9,
					"p8" : 9,
					"p46" : 9,
					"p48" : 9,
					"p68" : 8,
					"p468" : 8
				},
				"autosys" : [
					{
						"as" : 3248,
						"count" : 8
					},
					{
						"as" : 8339,
						"count" : 3
					},
					{
						"as" : 8447,
						"count" : 2
					},
					{
						"as" : 6830,
						"count" : 17
					},
					{
						"as" : 12605,
						"count" : 3
					},
					{
						"as" : 679,
						"count" : 1
					},
					{
						"as" : 3330,
						"count" : 1
					},
					{
						"as" : 47692,
						"count" : 3
					},
					{
						"as" : 8437,
						"count" : 1
					},
					{
						"as" : 1853,
						"count" : 1
					},
					{
						"as" : 3265,
						"count" : 1
					},
					{
						"as" : 760,
						"count" : 1
					},
					{
						"as" : 57169,
						"count" : 2
					},
					{
						"as" : 35339,
						"count" : 1
					},
					{
						"as" : 8559,
						"count" : 1
					},
					{
						"as" : 12635,
						"count" : 1
					},
					{
						"as" : 1764,
						"count" : 1
					},
					{
						"as" : 25255,
						"count" : 1
					},
					{
						"as" : 21213,
						"count" : 1
					}
				]
			},
			{
				"country" : "ES",
				"cbcc" : 83,
				"crcc" : 62598,
				"relay" : 27,
				"guard" : 1,
				"middle" : 27,
				"exit" : 7,
				"dir" : 15,
				"bwa" : 3148681,
				"bwc" : 645993,
				"pbr" : 0.0004590000000000002,
				"pbg" : 0.000092,
				"pbm" : 0.00032399999999999996,
				"pbe" : 0.00096,
				"fast" : 19,
				"stable" : 8,
				"osv" : {
					"linux" : 21,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 6,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 7,
					"v023" : 20,
					"v024" : 0
				},
				"pex" : {
					"p4" : 7,
					"p6" : 7,
					"p8" : 6,
					"p46" : 7,
					"p48" : 6,
					"p68" : 6,
					"p468" : 6
				},
				"autosys" : [
					{
						"as" : 12715,
						"count" : 7
					},
					{
						"as" : 3352,
						"count" : 5
					},
					{
						"as" : 12357,
						"count" : 1
					},
					{
						"as" : 53264,
						"count" : 1
					},
					{
						"as" : 6739,
						"count" : 4
					},
					{
						"as" : 43988,
						"count" : 1
					},
					{
						"as" : 766,
						"count" : 3
					},
					{
						"as" : 12338,
						"count" : 1
					},
					{
						"as" : 12479,
						"count" : 2
					},
					{
						"as" : 12430,
						"count" : 1
					},
					{
						"as" : 12334,
						"count" : 1
					}
				]
			},
			{
				"country" : "CA",
				"cbcc" : 75,
				"crcc" : 15768,
				"relay" : 89,
				"guard" : 20,
				"middle" : 89,
				"exit" : 15,
				"dir" : 47,
				"bwa" : 59286998,
				"bwc" : 35633842,
				"pbr" : 0.020753999999999995,
				"pbg" : 0.017923,
				"pbm" : 0.014217000000000004,
				"pbe" : 0.030129999999999997,
				"fast" : 65,
				"stable" : 60,
				"osv" : {
					"linux" : 60,
					"darwin" : 3,
					"freebsd" : 6,
					"windows" : 18,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 24,
					"v023" : 58,
					"v024" : 6
				},
				"pex" : {
					"p4" : 15,
					"p6" : 14,
					"p8" : 15,
					"p46" : 14,
					"p48" : 15,
					"p68" : 14,
					"p468" : 14
				},
				"autosys" : [
					{
						"as" : 19662,
						"count" : 1
					},
					{
						"as" : 5769,
						"count" : 4
					},
					{
						"as" : 16276,
						"count" : 7
					},
					{
						"as" : 812,
						"count" : 3
					},
					{
						"as" : 577,
						"count" : 5
					},
					{
						"as" : 1403,
						"count" : 1
					},
					{
						"as" : 29761,
						"count" : 1
					},
					{
						"as" : 5645,
						"count" : 7
					},
					{
						"as" : 852,
						"count" : 4
					},
					{
						"as" : 20375,
						"count" : 1
					},
					{
						"as" : 6327,
						"count" : 22
					},
					{
						"as" : 12093,
						"count" : 2
					},
					{
						"as" : 10929,
						"count" : 4
					},
					{
						"as" : 35911,
						"count" : 1
					},
					{
						"as" : 7860,
						"count" : 1
					},
					{
						"as" : 32613,
						"count" : 7
					},
					{
						"as" : 36137,
						"count" : 1
					},
					{
						"as" : 393249,
						"count" : 1
					},
					{
						"as" : 7456,
						"count" : 1
					},
					{
						"as" : 25668,
						"count" : 1
					},
					{
						"as" : 11814,
						"count" : 3
					},
					{
						"as" : 39959,
						"count" : 1
					},
					{
						"as" : 13768,
						"count" : 2
					},
					{
						"as" : 33139,
						"count" : 1
					},
					{
						"as" : 30158,
						"count" : 1
					},
					{
						"as" : 40788,
						"count" : 1
					},
					{
						"as" : 803,
						"count" : 2
					},
					{
						"as" : 15290,
						"count" : 1
					},
					{
						"as" : 15003,
						"count" : 1
					},
					{
						"as" : 6539,
						"count" : 1
					}
				]
			},
			{
				"country" : "CZ",
				"cbcc" : 13,
				"crcc" : 5348,
				"relay" : 77,
				"guard" : 29,
				"middle" : 77,
				"exit" : 42,
				"dir" : 33,
				"bwa" : 94211446,
				"bwc" : 47409202,
				"pbr" : 0.03460800000000002,
				"pbg" : 0.032043999999999996,
				"pbm" : 0.05213800000000001,
				"pbe" : 0.019638,
				"fast" : 52,
				"stable" : 57,
				"osv" : {
					"linux" : 71,
					"darwin" : 1,
					"freebsd" : 1,
					"windows" : 4,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 22,
					"v023" : 46,
					"v024" : 9
				},
				"pex" : {
					"p4" : 42,
					"p6" : 37,
					"p8" : 41,
					"p46" : 37,
					"p48" : 41,
					"p68" : 36,
					"p468" : 36
				},
				"autosys" : [
					{
						"as" : 29113,
						"count" : 4
					},
					{
						"as" : 6830,
						"count" : 11
					},
					{
						"as" : 2852,
						"count" : 1
					},
					{
						"as" : 30058,
						"count" : 22
					},
					{
						"as" : 35592,
						"count" : 6
					},
					{
						"as" : 24971,
						"count" : 4
					},
					{
						"as" : 197019,
						"count" : 13
					},
					{
						"as" : 29208,
						"count" : 1
					},
					{
						"as" : 5610,
						"count" : 2
					},
					{
						"as" : 30764,
						"count" : 1
					},
					{
						"as" : 20723,
						"count" : 1
					},
					{
						"as" : 43541,
						"count" : 4
					},
					{
						"as" : 48926,
						"count" : 1
					},
					{
						"as" : 34315,
						"count" : 1
					},
					{
						"as" : 31246,
						"count" : 1
					},
					{
						"as" : 2819,
						"count" : 1
					},
					{
						"as" : 24806,
						"count" : 1
					},
					{
						"as" : 197451,
						"count" : 1
					},
					{
						"as" : 15685,
						"count" : 1
					}
				]
			},
			{
				"country" : "UA",
				"cbcc" : 35,
				"crcc" : 31421,
				"relay" : 41,
				"guard" : 9,
				"middle" : 41,
				"exit" : 18,
				"dir" : 25,
				"bwa" : 24626445,
				"bwc" : 13877081,
				"pbr" : 0.004134,
				"pbg" : 0.0023279999999999998,
				"pbm" : 0.005128000000000001,
				"pbe" : 0.00494,
				"fast" : 33,
				"stable" : 20,
				"osv" : {
					"linux" : 24,
					"darwin" : 0,
					"freebsd" : 3,
					"windows" : 13,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 16,
					"v023" : 24,
					"v024" : 1
				},
				"pex" : {
					"p4" : 18,
					"p6" : 15,
					"p8" : 18,
					"p46" : 15,
					"p48" : 18,
					"p68" : 15,
					"p468" : 15
				},
				"autosys" : [
					{
						"as" : 31148,
						"count" : 2
					},
					{
						"as" : 6849,
						"count" : 3
					},
					{
						"as" : 42352,
						"count" : 4
					},
					{
						"as" : 12530,
						"count" : 1
					},
					{
						"as" : 29685,
						"count" : 1
					},
					{
						"as" : 39608,
						"count" : 2
					},
					{
						"as" : 15626,
						"count" : 1
					},
					{
						"as" : 196705,
						"count" : 1
					},
					{
						"as" : 29632,
						"count" : 1
					},
					{
						"as" : 25229,
						"count" : 2
					},
					{
						"as" : 13188,
						"count" : 2
					},
					{
						"as" : 42336,
						"count" : 1
					},
					{
						"as" : 15895,
						"count" : 2
					},
					{
						"as" : 6876,
						"count" : 2
					},
					{
						"as" : 21261,
						"count" : 1
					},
					{
						"as" : 34743,
						"count" : 1
					},
					{
						"as" : 48683,
						"count" : 1
					},
					{
						"as" : 56423,
						"count" : 1
					},
					{
						"as" : 15497,
						"count" : 2
					},
					{
						"as" : 6703,
						"count" : 1
					},
					{
						"as" : 47678,
						"count" : 1
					},
					{
						"as" : 35533,
						"count" : 1
					},
					{
						"as" : 197145,
						"count" : 1
					},
					{
						"as" : 35816,
						"count" : 1
					},
					{
						"as" : 56950,
						"count" : 1
					},
					{
						"as" : 25071,
						"count" : 1
					},
					{
						"as" : 48031,
						"count" : 2
					},
					{
						"as" : 42239,
						"count" : 1
					}
				]
			},
			{
				"country" : "NL",
				"cbcc" : 63,
				"crcc" : 21119,
				"relay" : 196,
				"guard" : 77,
				"middle" : 196,
				"exit" : 76,
				"dir" : 98,
				"bwa" : 378885530,
				"bwc" : 282445006,
				"pbr" : 0.11391300000000007,
				"pbg" : 0.10729800000000002,
				"pbm" : 0.10260099999999998,
				"pbe" : 0.131842,
				"fast" : 164,
				"stable" : 145,
				"osv" : {
					"linux" : 166,
					"darwin" : 4,
					"freebsd" : 7,
					"windows" : 16,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 58,
					"v023" : 116,
					"v024" : 21
				},
				"pex" : {
					"p4" : 76,
					"p6" : 65,
					"p8" : 76,
					"p46" : 65,
					"p48" : 76,
					"p68" : 65,
					"p468" : 65
				},
				"autosys" : [
					{
						"as" : 16265,
						"count" : 50
					},
					{
						"as" : 9143,
						"count" : 15
					},
					{
						"as" : 3265,
						"count" : 22
					},
					{
						"as" : 39309,
						"count" : 2
					},
					{
						"as" : 8455,
						"count" : 2
					},
					{
						"as" : 13127,
						"count" : 5
					},
					{
						"as" : 1103,
						"count" : 8
					},
					{
						"as" : 5580,
						"count" : 1
					},
					{
						"as" : 49544,
						"count" : 5
					},
					{
						"as" : 48635,
						"count" : 3
					},
					{
						"as" : 42093,
						"count" : 1
					},
					{
						"as" : 8283,
						"count" : 2
					},
					{
						"as" : 16276,
						"count" : 3
					},
					{
						"as" : 47869,
						"count" : 3
					},
					{
						"as" : 43350,
						"count" : 6
					},
					{
						"as" : 29073,
						"count" : 18
					},
					{
						"as" : 20507,
						"count" : 2
					},
					{
						"as" : 61387,
						"count" : 1
					},
					{
						"as" : 29028,
						"count" : 1
					},
					{
						"as" : 50673,
						"count" : 7
					},
					{
						"as" : 20857,
						"count" : 4
					},
					{
						"as" : 15435,
						"count" : 1
					},
					{
						"as" : 49981,
						"count" : 1
					},
					{
						"as" : 46652,
						"count" : 5
					},
					{
						"as" : 31019,
						"count" : 1
					},
					{
						"as" : 5390,
						"count" : 1
					},
					{
						"as" : 57172,
						"count" : 2
					},
					{
						"as" : 8737,
						"count" : 3
					},
					{
						"as" : 5615,
						"count" : 4
					},
					{
						"as" : 50266,
						"count" : 1
					},
					{
						"as" : 6830,
						"count" : 6
					},
					{
						"as" : 1133,
						"count" : 1
					},
					{
						"as" : 36351,
						"count" : 1
					},
					{
						"as" : 20495,
						"count" : 1
					},
					{
						"as" : 35470,
						"count" : 2
					},
					{
						"as" : 41887,
						"count" : 1
					},
					{
						"as" : 12634,
						"count" : 1
					},
					{
						"as" : 28685,
						"count" : 1
					},
					{
						"as" : 12414,
						"count" : 2
					}
				]
			},
			{
				"country" : "BE",
				"cbcc" : 15,
				"crcc" : 5343,
				"relay" : 17,
				"guard" : 0,
				"middle" : 17,
				"exit" : 2,
				"dir" : 9,
				"bwa" : 2359205,
				"bwc" : 842143,
				"pbr" : 0.000248,
				"pbg" : 0,
				"pbm" : 0.0007150000000000001,
				"pbe" : 0.000032,
				"fast" : 15,
				"stable" : 6,
				"osv" : {
					"linux" : 15,
					"darwin" : 2,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 3,
					"v023" : 14,
					"v024" : 0
				},
				"pex" : {
					"p4" : 2,
					"p6" : 1,
					"p8" : 2,
					"p46" : 1,
					"p48" : 2,
					"p68" : 1,
					"p468" : 1
				},
				"autosys" : [
					{
						"as" : 9031,
						"count" : 4
					},
					{
						"as" : 6848,
						"count" : 2
					},
					{
						"as" : 5432,
						"count" : 5
					},
					{
						"as" : 16276,
						"count" : 1
					},
					{
						"as" : 29587,
						"count" : 1
					},
					{
						"as" : 12392,
						"count" : 1
					},
					{
						"as" : 42160,
						"count" : 2
					},
					{
						"as" : 31669,
						"count" : 1
					}
				]
			},
			{
				"country" : "GR",
				"cbcc" : 9,
				"crcc" : 2001,
				"relay" : 19,
				"guard" : 8,
				"middle" : 19,
				"exit" : 4,
				"dir" : 14,
				"bwa" : 23380569,
				"bwc" : 14667660,
				"pbr" : 0.0044529999999999995,
				"pbg" : 0.005557,
				"pbm" : 0.004320999999999999,
				"pbe" : 0.003478,
				"fast" : 16,
				"stable" : 10,
				"osv" : {
					"linux" : 14,
					"darwin" : 0,
					"freebsd" : 1,
					"windows" : 4,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 2,
					"v023" : 15,
					"v024" : 2
				},
				"pex" : {
					"p4" : 4,
					"p6" : 3,
					"p8" : 4,
					"p46" : 3,
					"p48" : 4,
					"p68" : 3,
					"p468" : 3
				},
				"autosys" : [
					{
						"as" : 5408,
						"count" : 13
					},
					{
						"as" : 1241,
						"count" : 2
					},
					{
						"as" : 21284,
						"count" : 1
					},
					{
						"as" : 6866,
						"count" : 1
					},
					{
						"as" : 6799,
						"count" : 2
					}
				]
			},
			{
				"country" : "LU",
				"cbcc" : 5,
				"crcc" : 960,
				"relay" : 33,
				"guard" : 9,
				"middle" : 33,
				"exit" : 20,
				"dir" : 12,
				"bwa" : 15791474,
				"bwc" : 9208229,
				"pbr" : 0.0031829999999999996,
				"pbg" : 0.004876,
				"pbm" : 0.0041459999999999995,
				"pbe" : 0.0005229999999999999,
				"fast" : 16,
				"stable" : 23,
				"osv" : {
					"linux" : 31,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 2,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 18,
					"v023" : 13,
					"v024" : 2
				},
				"pex" : {
					"p4" : 20,
					"p6" : 19,
					"p8" : 19,
					"p46" : 19,
					"p48" : 19,
					"p68" : 18,
					"p468" : 18
				},
				"autosys" : [
					{
						"as" : 5577,
						"count" : 30
					},
					{
						"as" : 6661,
						"count" : 1
					},
					{
						"as" : 9008,
						"count" : 2
					}
				]
			},
			{
				"country" : "SG",
				"cbcc" : 19,
				"crcc" : 1670,
				"relay" : 15,
				"guard" : 9,
				"middle" : 15,
				"exit" : 4,
				"dir" : 10,
				"bwa" : 7505096,
				"bwc" : 2243982,
				"pbr" : 0.000458,
				"pbg" : 0.0006140000000000001,
				"pbm" : 0.000351,
				"pbe" : 0.00041,
				"fast" : 13,
				"stable" : 13,
				"osv" : {
					"linux" : 13,
					"darwin" : 1,
					"freebsd" : 0,
					"windows" : 1,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 2,
					"v023" : 9,
					"v024" : 4
				},
				"pex" : {
					"p4" : 4,
					"p6" : 4,
					"p8" : 4,
					"p46" : 4,
					"p48" : 4,
					"p68" : 4,
					"p468" : 4
				},
				"autosys" : [
					{
						"as" : 36351,
						"count" : 4
					},
					{
						"as" : 38895,
						"count" : 4
					},
					{
						"as" : 4844,
						"count" : 1
					},
					{
						"as" : 17547,
						"count" : 1
					},
					{
						"as" : 18106,
						"count" : 2
					},
					{
						"as" : 9506,
						"count" : 1
					},
					{
						"as" : 55430,
						"count" : 1
					},
					{
						"as" : 37989,
						"count" : 1
					}
				]
			},
			{
				"country" : "DK",
				"cbcc" : 26,
				"crcc" : 2639,
				"relay" : 30,
				"guard" : 11,
				"middle" : 30,
				"exit" : 15,
				"dir" : 23,
				"bwa" : 38486839,
				"bwc" : 28761521,
				"pbr" : 0.010230999999999999,
				"pbg" : 0.008348999999999999,
				"pbm" : 0.007751,
				"pbe" : 0.014596999999999999,
				"fast" : 30,
				"stable" : 19,
				"osv" : {
					"linux" : 24,
					"darwin" : 1,
					"freebsd" : 1,
					"windows" : 4,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 6,
					"v023" : 23,
					"v024" : 1
				},
				"pex" : {
					"p4" : 15,
					"p6" : 15,
					"p8" : 14,
					"p46" : 15,
					"p48" : 14,
					"p68" : 14,
					"p468" : 14
				},
				"autosys" : [
					{
						"as" : 34823,
						"count" : 3
					},
					{
						"as" : 197301,
						"count" : 1
					},
					{
						"as" : 3292,
						"count" : 8
					},
					{
						"as" : 39554,
						"count" : 3
					},
					{
						"as" : 197288,
						"count" : 4
					},
					{
						"as" : 9158,
						"count" : 2
					},
					{
						"as" : 35376,
						"count" : 1
					},
					{
						"as" : 1835,
						"count" : 1
					},
					{
						"as" : 28717,
						"count" : 1
					},
					{
						"as" : 57735,
						"count" : 1
					},
					{
						"as" : 35637,
						"count" : 1
					},
					{
						"as" : 45032,
						"count" : 1
					},
					{
						"as" : 59469,
						"count" : 1
					},
					{
						"as" : 16245,
						"count" : 1
					},
					{
						"as" : 31661,
						"count" : 1
					}
				]
			},
			{
				"country" : "NO",
				"cbcc" : 12,
				"crcc" : 2552,
				"relay" : 33,
				"guard" : 10,
				"middle" : 33,
				"exit" : 3,
				"dir" : 17,
				"bwa" : 66259765,
				"bwc" : 51283003,
				"pbr" : 0.015080999999999999,
				"pbg" : 0.026047999999999998,
				"pbm" : 0.019129999999999998,
				"pbe" : 0.000076,
				"fast" : 33,
				"stable" : 15,
				"osv" : {
					"linux" : 29,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 4,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
						"v020" : 0,
					"v021" : 0,
					"v022" : 8,
					"v023" : 25,
					"v024" : 0
				},
				"pex" : {
					"p4" : 3,
					"p6" : 3,
					"p8" : 2,
					"p46" : 3,
					"p48" : 2,
					"p68" : 2,
					"p468" : 2
				},
				"autosys" : [
					{
						"as" : 41164,
						"count" : 5
					},
					{
						"as" : 57963,
						"count" : 4
					},
					{
						"as" : 224,
						"count" : 13
					},
					{
						"as" : 2119,
						"count" : 5
					},
					{
						"as" : 2116,
						"count" : 1
					},
					{
						"as" : 16186,
						"count" : 2
					},
					{
						"as" : 8896,
						"count" : 1
					},
					{
						"as" : 57381,
						"count" : 1
					},
					{
						"as" : 29695,
						"count" : 1
					}
				]
			},
			{
				"country" : "TR",
				"cbcc" : 40,
				"crcc" : 3458,
				"relay" : 6,
				"guard" : 2,
				"middle" : 6,
				"exit" : 5,
				"dir" : 2,
				"bwa" : 9845022,
				"bwc" : 6598569,
				"pbr" : 0.002695,
				"pbg" : 0.001493,
				"pbm" : 0.001499,
				"pbe" : 0.005093,
				"fast" : 5,
				"stable" : 5,
				"osv" : {
					"linux" : 5,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 1,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 2,
					"v023" : 4,
					"v024" : 0
				},
				"pex" : {
					"p4" : 5,
					"p6" : 5,
					"p8" : 5,
					"p46" : 5,
					"p48" : 5,
					"p68" : 5,
					"p468" : 5
				},
				"autosys" : [
					{
						"as" : 15897,
						"count" : 1
					},
					{
						"as" : 44565,
						"count" : 1
					},
					{
						"as" : 42926,
						"count" : 2
					},
					{
						"as" : 39582,
						"count" : 2
					}
				]
			},
			{
				"country" : "MX",
				"cbcc" : 28,
				"crcc" : 6380,
				"relay" : 3,
				"guard" : 0,
				"middle" : 3,
				"exit" : 1,
				"dir" : 3,
				"bwa" : 1417324,
				"bwc" : 942298,
				"pbr" : 0.00011899999999999999,
				"pbg" : 0,
				"pbm" : 0.000348,
				"pbe" : 0.000009,
				"fast" : 2,
				"stable" : 0,
				"osv" : {
					"linux" : 1,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 2,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 3,
					"v024" : 0
				},
				"pex" : {
					"p4" : 1,
					"p6" : 1,
					"p8" : 1,
					"p46" : 1,
					"p48" : 1,
					"p68" : 1,
					"p468" : 1
				},
				"autosys" : [
					{
						"as" : 8151,
						"count" : 2
					},
					{
						"as" : 6332,
						"count" : 1
					}
				]
			},
			{
				"country" : "BG",
				"cbcc" : 2,
				"crcc" : 1935,
				"relay" : 11,
				"guard" : 3,
				"middle" : 11,
				"exit" : 3,
				"dir" : 8,
				"bwa" : 4174761,
				"bwc" : 1722302,
				"pbr" : 0.000579,
				"pbg" : 0.0007469999999999999,
				"pbm" : 0.000689,
				"pbe" : 0.00030199999999999997,
				"fast" : 10,
				"stable" : 7,
				"osv" : {
					"linux" : 4,
					"darwin" : 0,
					"freebsd" : 1,
					"windows" : 6,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 5,
					"v023" : 6,
					"v024" : 0
				},
				"pex" : {
					"p4" : 3,
					"p6" : 3,
					"p8" : 3,
					"p46" : 3,
					"p48" : 3,
					"p68" : 3,
					"p468" : 3
				},
				"autosys" : [
					{
						"as" : 31250,
						"count" : 1
					},
					{
						"as" : 29084,
						"count" : 1
					},
					{
						"as" : 13124,
						"count" : 2
					},
					{
						"as" : 5421,
						"count" : 1
					},
					{
						"as" : 8877,
						"count" : 1
					},
					{
						"as" : 34224,
						"count" : 1
					},
					{
						"as" : 29580,
						"count" : 1
					},
					{
						"as" : 12436,
						"count" : 1
					},
					{
						"as" : 8866,
						"count" : 1
					},
					{
						"as" : 43561,
						"count" : 1
					}
				]
			},
			{
				"country" : "BR",
				"cbcc" : 51,
				"crcc" : 25899,
				"relay" : 22,
				"guard" : 0,
				"middle" : 22,
				"exit" : 7,
				"dir" : 17,
				"bwa" : 2216438,
				"bwc" : 352231,
				"pbr" : 0.000084,
				"pbg" : 0,
				"pbm" : 0.000179,
				"pbe" : 0.00007300000000000001,
				"fast" : 16,
				"stable" : 5,
				"osv" : {
					"linux" : 13,
					"darwin" : 0,
					"freebsd" : 1,
					"windows" : 8,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 4,
					"v023" : 18,
					"v024" : 0
				},
				"pex" : {
					"p4" : 7,
					"p6" : 7,
					"p8" : 7,
					"p46" : 7,
					"p48" : 7,
					"p68" : 7,
					"p468" : 7
				},
				"autosys" : [
					{
						"as" : 28573,
						"count" : 6
					},
					{
						"as" : 26599,
						"count" : 2
					},
					{
						"as" : 19182,
						"count" : 1
					},
					{
						"as" : 8167,
						"count" : 4
					},
					{
						"as" : 28625,
						"count" : 1
					},
					{
						"as" : 18881,
						"count" : 3
					},
					{
						"as" : 27699,
						"count" : 1
					},
					{
						"as" : 7738,
						"count" : 1
					},
					{
						"as" : 16509,
						"count" : 1
					},
					{
						"as" : 53111,
						"count" : 1
					},
					{
						"as" : 262868,
						"count" : 1
					}
				]
			},
			{
				"country" : "LT",
				"cbcc" : 7,
				"crcc" : 1434,
				"relay" : 6,
				"guard" : 3,
				"middle" : 6,
				"exit" : 2,
				"dir" : 3,
				"bwa" : 16638202,
				"bwc" : 13194714,
				"pbr" : 0.006370999999999999,
				"pbg" : 0.012815,
				"pbm" : 0.005324000000000001,
				"pbe" : 0.0009750000000000001,
				"fast" : 6,
				"stable" : 5,
				"osv" : {
					"linux" : 6,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 1,
					"v023" : 5,
					"v024" : 0
				},
				"pex" : {
					"p4" : 2,
					"p6" : 2,
					"p8" : 2,
					"p46" : 2,
					"p48" : 2,
					"p68" : 2,
					"p468" : 2
				},
				"autosys" : [
					{
						"as" : 2847,
						"count" : 1
					},
					{
						"as" : 21412,
						"count" : 1
					},
					{
						"as" : 8764,
						"count" : 2
					},
					{
						"as" : 16125,
						"count" : 1
					},
					{
						"as" : 24607,
						"count" : 1
					}
				]
			},
			{
				"country" : "IT",
				"cbcc" : 115,
				"crcc" : 91265,
				"relay" : 47,
				"guard" : 13,
				"middle" : 47,
				"exit" : 4,
				"dir" : 18,
				"bwa" : 12276441,
				"bwc" : 6848374,
				"pbr" : 0.001936,
				"pbg" : 0.001792,
				"pbm" : 0.0037809999999999996,
				"pbe" : 0.000235,
				"fast" : 32,
				"stable" : 24,
				"osv" : {
					"linux" : 39,
					"darwin" : 0,
					"freebsd" : 2,
					"windows" : 6,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 7,
					"v023" : 33,
					"v024" : 7
				},
				"pex" : {
					"p4" : 4,
					"p6" : 3,
					"p8" : 4,
					"p46" : 3,
					"p48" : 4,
					"p68" : 3,
					"p468" : 3
				},
				"autosys" : [
					{
						"as" : 137,
						"count" : 6
					},
					{
						"as" : 12874,
						"count" : 7
					},
					{
						"as" : 34971,
						"count" : 10
					},
					{
						"as" : 35612,
						"count" : 3
					},
					{
						"as" : 5602,
						"count" : 2
					},
					{
						"as" : 3269,
						"count" : 8
					},
					{
						"as" : 44957,
						"count" : 2
					},
					{
						"as" : 31103,
						"count" : 1
					},
					{
						"as" : 8928,
						"count" : 1
					},
					{
						"as" : 16232,
						"count" : 1
					},
					{
						"as" : 24940,
						"count" : 1
					},
					{
						"as" : 16276,
						"count" : 2
					},
					{
						"as" : 8612,
						"count" : 1
					},
					{
						"as" : 1267,
						"count" : 2
					}
				]
			},
			{
				"country" : "SK",
				"cbcc" : 5,
				"crcc" : 1427,
				"relay" : 15,
				"guard" : 4,
				"middle" : 15,
				"exit" : 4,
				"dir" : 9,
				"bwa" : 18600106,
				"bwc" : 11044273,
				"pbr" : 0.006911,
				"pbg" : 0.011654999999999999,
				"pbm" : 0.006027,
				"pbe" : 0.0030499999999999998,
				"fast" : 14,
				"stable" : 10,
				"osv" : {
					"linux" : 12,
					"darwin" : 0,
					"freebsd" : 1,
					"windows" : 2,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 4,
					"v023" : 10,
					"v024" : 1
				},
				"pex" : {
					"p4" : 4,
					"p6" : 4,
					"p8" : 4,
					"p46" : 4,
					"p48" : 4,
					"p68" : 4,
					"p468" : 4
				},
				"autosys" : [
					{
						"as" : 15962,
						"count" : 3
					},
					{
						"as" : 6830,
						"count" : 5
					},
					{
						"as" : 44185,
						"count" : 1
					},
					{
						"as" : 48133,
						"count" : 1
					},
					{
						"as" : 2607,
						"count" : 1
					},
					{
						"as" : 6855,
						"count" : 1
					},
					{
						"as" : 42005,
						"count" : 1
					},
					{
						"as" : 29405,
						"count" : 1
					},
					{
						"as" : 51013,
						"count" : 1
					}
				]
			},
			{
				"country" : "TW",
				"cbcc" : 18,
				"crcc" : 7313,
				"relay" : 7,
				"guard" : 0,
				"middle" : 7,
				"exit" : 3,
				"dir" : 4,
				"bwa" : 2466920,
				"bwc" : 366229,
				"pbr" : 0.000116,
				"pbg" : 0,
				"pbm" : 0.00030900000000000003,
				"pbe" : 0.000039999999999999996,
				"fast" : 5,
				"stable" : 4,
				"osv" : {
					"linux" : 1,
					"darwin" : 1,
					"freebsd" : 0,
					"windows" : 5,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 1,
					"v023" : 6,
					"v024" : 0
				},
				"pex" : {
					"p4" : 3,
					"p6" : 2,
					"p8" : 3,
					"p46" : 2,
					"p48" : 3,
					"p68" : 2,
					"p468" : 2
				},
				"autosys" : [
					{
						"as" : 3462,
						"count" : 4
					},
					{
						"as" : 18047,
						"count" : 1
					},
					{
						"as" : 9916,
						"count" : 2
					}
				]
			},
			{
				"country" : "RO",
				"cbcc" : 19,
				"crcc" : 2717,
				"relay" : 23,
				"guard" : 12,
				"middle" : 23,
				"exit" : 14,
				"dir" : 18,
				"bwa" : 143818464,
				"bwc" : 76085477,
				"pbr" : 0.017688000000000002,
				"pbg" : 0.009617000000000002,
				"pbm" : 0.008709000000000001,
				"pbe" : 0.034735,
				"fast" : 22,
				"stable" : 13,
				"osv" : {
					"linux" : 18,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 5,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 5,
					"v023" : 16,
					"v024" : 2
				},
				"pex" : {
					"p4" : 14,
					"p6" : 10,
					"p8" : 14,
					"p46" : 10,
					"p48" : 14,
					"p68" : 10,
					"p468" : 10
				},
				"autosys" : [
					{
						"as" : 39743,
						"count" : 9
					},
					{
						"as" : 57668,
						"count" : 1
					},
					{
						"as" : 41011,
						"count" : 1
					},
					{
						"as" : 34358,
						"count" : 1
					},
					{
						"as" : 8708,
						"count" : 6
					},
					{
						"as" : 6830,
						"count" : 1
					},
					{
						"as" : 9050,
						"count" : 1
					},
					{
						"as" : 38935,
						"count" : 2
					},
					{
						"as" : 6663,
						"count" : 1
					}
				]
			},
			{
				"country" : "DO",
				"cbcc" : 2,
				"crcc" : 541,
				"relay" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"bwa" : 26242,
				"bwc" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 1,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 1,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [
					{
						"as" : 12066,
						"count" : 1
					}
				]
			},
			{
				"country" : "VN",
				"cbcc" : 4,
				"crcc" : 2486,
				"relay" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"bwa" : 409600,
				"bwc" : 205765,
				"pbr" : 0.000023,
				"pbg" : 0.000013,
				"pbm" : 0.000013,
				"pbe" : 0.000043,
				"fast" : 1,
				"stable" : 1,
				"osv" : {
					"linux" : 1,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 1
				},
				"pex" : {
					"p4" : 1,
					"p6" : 0,
					"p8" : 1,
					"p46" : 0,
					"p48" : 1,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [
					{
						"as" : 38731,
						"count" : 1
					}
				]
			},
			{
				"country" : "KZ",
				"cbcc" : 12,
				"crcc" : 540,
				"relay" : 4,
				"guard" : 0,
				"middle" : 4,
				"exit" : 3,
				"dir" : 3,
				"bwa" : 297905,
				"bwc" : 41593,
				"pbr" : 0.000004,
				"pbg" : 0,
				"pbm" : 0.000007,
				"pbe" : 0.000008,
				"fast" : 4,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 3,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 3,
					"v024" : 1
				},
				"pex" : {
					"p4" : 3,
					"p6" : 3,
					"p8" : 3,
					"p46" : 3,
					"p48" : 3,
					"p68" : 3,
					"p468" : 3
				},
				"autosys" : [
					{
						"as" : 41371,
						"count" : 1
					},
					{
						"as" : 39725,
						"count" : 1
					},
					{
						"as" : 9198,
						"count" : 2
					}
				]
			},
			{
				"country" : "EG",
				"cbcc" : 69,
				"crcc" : 2742,
				"relay" : 5,
				"guard" : 1,
				"middle" : 5,
				"exit" : 1,
				"dir" : 3,
				"bwa" : 573440,
				"bwc" : 288796,
				"pbr" : 0.000039999999999999996,
				"pbg" : 0.000021,
				"pbm" : 0.00008800000000000001,
				"pbe" : 0.000009,
				"fast" : 3,
				"stable" : 3,
				"osv" : {
					"linux" : 4,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 1,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 2,
					"v023" : 3,
					"v024" : 0
				},
				"pex" : {
					"p4" : 1,
					"p6" : 1,
					"p8" : 1,
					"p46" : 1,
					"p48" : 1,
					"p68" : 1,
					"p468" : 1
				},
				"autosys" : [
					{
						"as" : 24863,
						"count" : 2
					},
					{
						"as" : 33785,
						"count" : 3
					}
				]
			},
			{
				"country" : "FI",
				"cbcc" : 12,
				"crcc" : 3584,
				"relay" : 35,
				"guard" : 9,
				"middle" : 35,
				"exit" : 7,
				"dir" : 22,
				"bwa" : 12711325,
				"bwc" : 9657558,
				"pbr" : 0.0028569999999999997,
				"pbg" : 0.002498,
				"pbm" : 0.004864,
				"pbe" : 0.001218,
				"fast" : 31,
				"stable" : 27,
				"osv" : {
					"linux" : 30,
					"darwin" : 1,
					"freebsd" : 0,
					"windows" : 4,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 9,
					"v023" : 24,
					"v024" : 2
				},
				"pex" : {
					"p4" : 7,
					"p6" : 7,
					"p8" : 6,
					"p46" : 7,
					"p48" : 6,
					"p68" : 6,
					"p468" : 6
				},
				"autosys" : [
					{
						"as" : 719,
						"count" : 7
					},
					{
						"as" : 50503,
						"count" : 1
					},
					{
						"as" : 35382,
						"count" : 1
					},
					{
						"as" : 1759,
						"count" : 5
					},
					{
						"as" : 16086,
						"count" : 11
					},
					{
						"as" : 29422,
						"count" : 3
					},
					{
						"as" : 20931,
						"count" : 1
					},
					{
						"as" : 3292,
						"count" : 1
					},
					{
						"as" : 39857,
						"count" : 2
					},
					{
						"as" : 31211,
						"count" : 1
					},
					{
						"as" : 13276,
						"count" : 1
					},
					{
						"as" : 24751,
						"count" : 1
					}
				]
			},
			{
				"country" : "ID",
				"cbcc" : 86,
				"crcc" : 2448,
				"relay" : 3,
				"guard" : 0,
				"middle" : 3,
				"exit" : 2,
				"dir" : 1,
				"bwa" : 408904,
				"bwc" : 21966,
				"pbr" : 0.000014999999999999999,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0.000036,
				"fast" : 2,
				"stable" : 1,
				"osv" : {
					"linux" : 2,
					"darwin" : 0,
					"freebsd" : 1,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 2,
					"v024" : 1
				},
				"pex" : {
					"p4" : 2,
					"p6" : 2,
					"p8" : 2,
					"p46" : 2,
					"p48" : 2,
					"p68" : 2,
					"p468" : 2
				},
				"autosys" : [
					{
						"as" : 18059,
						"count" : 1
					},
					{
						"as" : 58553,
						"count" : 1
					},
					{
						"as" : 45711,
						"count" : 1
					}
				]
			},
			{
				"country" : "IE",
				"cbcc" : 2,
				"crcc" : 2217,
				"relay" : 9,
				"guard" : 3,
				"middle" : 9,
				"exit" : 2,
				"dir" : 4,
				"bwa" : 2942788,
				"bwc" : 1317243,
				"pbr" : 0.000355,
				"pbg" : 0.000184,
				"pbm" : 0.000439,
				"pbe" : 0.000441,
				"fast" : 7,
				"stable" : 7,
				"osv" : {
					"linux" : 8,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 1,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 4,
					"v023" : 4,
					"v024" : 1
				},
				"pex" : {
					"p4" : 2,
					"p6" : 2,
					"p8" : 2,
					"p46" : 2,
					"p48" : 2,
					"p68" : 2,
					"p468" : 2
				},
				"autosys" : [
					{
						"as" : 16509,
						"count" : 4
					},
					{
						"as" : 16276,
						"count" : 4
					},
					{
						"as" : 31122,
						"count" : 1
					}
				]
			},
			{
				"country" : "MK",
				"cbcc" : 0,
				"crcc" : 289,
				"relay" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"bwa" : 153600,
				"bwc" : 17576,
				"pbr" : 0.000009,
				"pbg" : 0,
				"pbm" : 0.000028,
				"pbe" : 0,
				"fast" : 2,
				"stable" : 0,
				"osv" : {
					"linux" : 1,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 1,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 2,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [
					{
						"as" : 41557,
						"count" : 1
					},
					{
						"as" : 16333,
						"count" : 1
					}
				]
			},
			{
				"country" : "BA",
				"cbcc" : 0,
				"crcc" : 278,
				"relay" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"bwa" : 73728,
				"bwc" : 17088,
				"pbr" : 0.000009999999999999999,
				"pbg" : 0,
				"pbm" : 0.00002,
				"pbe" : 0.000009,
				"fast" : 1,
				"stable" : 1,
				"osv" : {
					"linux" : 1,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 1,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 2,
					"v024" : 0
				},
				"pex" : {
					"p4" : 1,
					"p6" : 1,
					"p8" : 1,
					"p46" : 1,
					"p48" : 1,
					"p68" : 1,
					"p468" : 1
				},
				"autosys" : [
					{
						"as" : 21107,
						"count" : 1
					},
					{
						"as" : 198252,
						"count" : 1
					}
				]
			},
			{
				"country" : "AR",
				"cbcc" : 18,
				"crcc" : 7464,
				"relay" : 9,
				"guard" : 3,
				"middle" : 9,
				"exit" : 5,
				"dir" : 3,
				"bwa" : 2114498,
				"bwc" : 1065895,
				"pbr" : 0.00038200000000000007,
				"pbg" : 0.00020899999999999998,
				"pbm" : 0.000223,
				"pbe" : 0.0007149999999999999,
				"fast" : 6,
				"stable" : 4,
				"osv" : {
					"linux" : 8,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 1,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 2,
					"v023" : 5,
					"v024" : 2
				},
				"pex" : {
					"p4" : 5,
					"p6" : 3,
					"p8" : 5,
					"p46" : 3,
					"p48" : 5,
					"p68" : 3,
					"p468" : 3
				},
				"autosys" : [
					{
						"as" : 10481,
						"count" : 2
					},
					{
						"as" : 20207,
						"count" : 1
					},
					{
						"as" : 3549,
						"count" : 1
					},
					{
						"as" : 10834,
						"count" : 1
					},
					{
						"as" : 27747,
						"count" : 1
					},
					{
						"as" : 7303,
						"count" : 1
					},
					{
						"as" : 22927,
						"count" : 1
					},
					{
						"as" : 27823,
						"count" : 1
					}
				]
			},
			{
				"country" : "JE",
				"cbcc" : 0,
				"crcc" : 53,
				"relay" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 32000,
				"bwc" : 2554,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 1,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 1,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 1,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [
					{
						"as" : 8681,
						"count" : 1
					}
				]
			},
			{
				"country" : "PT",
				"cbcc" : 9,
				"crcc" : 4703,
				"relay" : 6,
				"guard" : 1,
				"middle" : 6,
				"exit" : 3,
				"dir" : 6,
				"bwa" : 1144335,
				"bwc" : 381764,
				"pbr" : 0.000107,
				"pbg" : 0.000013,
				"pbm" : 0.000078,
				"pbe" : 0.000229,
				"fast" : 6,
				"stable" : 0,
				"osv" : {
					"linux" : 2,
					"darwin" : 1,
					"freebsd" : 0,
					"windows" : 3,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 1,
					"v023" : 5,
					"v024" : 0
				},
				"pex" : {
					"p4" : 3,
					"p6" : 3,
					"p8" : 3,
					"p46" : 3,
					"p48" : 3,
					"p68" : 3,
					"p468" : 3
				},
				"autosys" : [
					{
						"as" : 3243,
						"count" : 3
					},
					{
						"as" : 12542,
						"count" : 1
					},
					{
						"as" : 2860,
						"count" : 1
					},
					{
						"as" : 12353,
						"count" : 1
					}
				]
			},
			{
				"country" : "LV",
				"cbcc" : 3,
				"crcc" : 730,
				"relay" : 7,
				"guard" : 2,
				"middle" : 7,
				"exit" : 2,
				"dir" : 5,
				"bwa" : 3244886,
				"bwc" : 2693911,
				"pbr" : 0.0008430000000000001,
				"pbg" : 0.0006709999999999999,
				"pbm" : 0.001822,
				"pbe" : 0.000036,
				"fast" : 6,
				"stable" : 7,
				"osv" : {
					"linux" : 7,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 2,
					"v023" : 5,
					"v024" : 0
				},
				"pex" : {
					"p4" : 2,
					"p6" : 1,
					"p8" : 2,
					"p46" : 1,
					"p48" : 2,
					"p68" : 1,
					"p468" : 1
				},
				"autosys" : [
					{
						"as" : 6851,
						"count" : 1
					},
					{
						"as" : 12578,
						"count" : 2
					},
					{
						"as" : 52048,
						"count" : 2
					},
					{
						"as" : 12993,
						"count" : 1
					},
					{
						"as" : 56617,
						"count" : 1
					}
				]
			},
			{
				"country" : "KR",
				"cbcc" : 26,
				"crcc" : 12625,
				"relay" : 6,
				"guard" : 2,
				"middle" : 6,
				"exit" : 1,
				"dir" : 5,
				"bwa" : 2205485,
				"bwc" : 540892,
				"pbr" : 0.00008999999999999999,
				"pbg" : 0.000156,
				"pbm" : 0.000091,
				"pbe" : 0.000023,
				"fast" : 6,
				"stable" : 2,
				"osv" : {
					"linux" : 2,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 4,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 1,
					"v023" : 5,
					"v024" : 0
				},
				"pex" : {
					"p4" : 1,
					"p6" : 1,
					"p8" : 1,
					"p46" : 1,
					"p48" : 1,
					"p68" : 1,
					"p468" : 1
				},
				"autosys" : [
					{
						"as" : 4766,
						"count" : 3
					},
					{
						"as" : 9318,
						"count" : 2
					},
					{
						"as" : 17858,
						"count" : 1
					}
				]
			},
			{
				"country" : "PK",
				"cbcc" : 34,
				"crcc" : 2265,
				"relay" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"bwa" : 137661,
				"bwc" : 62805,
				"pbr" : 0.000009,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0.000017,
				"fast" : 1,
				"stable" : 1,
				"osv" : {
					"linux" : 1,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 1,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 1,
					"v023" : 1,
					"v024" : 0
				},
				"pex" : {
					"p4" : 1,
					"p6" : 1,
					"p8" : 1,
					"p46" : 1,
					"p48" : 1,
					"p68" : 1,
					"p468" : 1
				},
				"autosys" : [
					{
						"as" : 45595,
						"count" : 1
					},
					{
						"as" : 23674,
						"count" : 1
					}
				]
			},
			{
				"country" : "HR",
				"cbcc" : 1,
				"crcc" : 868,
				"relay" : 7,
				"guard" : 3,
				"middle" : 7,
				"exit" : 0,
				"dir" : 5,
				"bwa" : 3019679,
				"bwc" : 2347623,
				"pbr" : 0.000509,
				"pbg" : 0.0006190000000000001,
				"pbm" : 0.0009120000000000002,
				"pbe" : 0,
				"fast" : 6,
				"stable" : 3,
				"osv" : {
					"linux" : 4,
					"darwin" : 0,
					"freebsd" : 1,
					"windows" : 2,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 2,
					"v023" : 5,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [
					{
						"as" : 31012,
						"count" : 1
					},
					{
						"as" : 2108,
						"count" : 4
					},
					{
						"as" : 34594,
						"count" : 1
					},
					{
						"as" : 41454,
						"count" : 1
					}
				]
			},
			{
				"country" : "CO",
				"cbcc" : 7,
				"crcc" : 1912,
				"relay" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 2,
				"dir" : 1,
				"bwa" : 141834,
				"bwc" : 34203,
				"pbr" : 0.000007,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000022,
				"fast" : 1,
				"stable" : 1,
				"osv" : {
					"linux" : 1,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 1,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 2,
					"v024" : 0
				},
				"pex" : {
					"p4" : 2,
					"p6" : 2,
					"p8" : 2,
					"p46" : 2,
					"p48" : 2,
					"p68" : 2,
					"p468" : 2
				},
				"autosys" : [
					{
						"as" : 27992,
						"count" : 1
					},
					{
						"as" : 13489,
						"count" : 1
					}
				]
			},
			{
				"country" : "IN",
				"cbcc" : 149,
				"crcc" : 14888,
				"relay" : 10,
				"guard" : 2,
				"middle" : 10,
				"exit" : 7,
				"dir" : 6,
				"bwa" : 2780281,
				"bwc" : 714542,
				"pbr" : 0.00011100000000000001,
				"pbg" : 0.000183,
				"pbm" : 0.000081,
				"pbe" : 0.000067,
				"fast" : 9,
				"stable" : 3,
				"osv" : {
					"linux" : 4,
					"darwin" : 0,
					"freebsd" : 1,
					"windows" : 5,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 9,
					"v024" : 1
				},
				"pex" : {
					"p4" : 7,
					"p6" : 6,
					"p8" : 7,
					"p46" : 6,
					"p48" : 7,
					"p68" : 6,
					"p468" : 6
				},
				"autosys" : [
					{
						"as" : 17813,
						"count" : 6
					},
					{
						"as" : 33480,
						"count" : 1
					},
					{
						"as" : 24560,
						"count" : 1
					},
					{
						"as" : 55470,
						"count" : 1
					},
					{
						"as" : 24309,
						"count" : 1
					}
				]
			},
			{
				"country" : "NZ",
				"cbcc" : 16,
				"crcc" : 1422,
				"relay" : 10,
				"guard" : 1,
				"middle" : 10,
				"exit" : 0,
				"dir" : 4,
				"bwa" : 1572272,
				"bwc" : 461560,
				"pbr" : 0.000058999999999999984,
				"pbg" : 0.000094,
				"pbm" : 0.00007999999999999999,
				"pbe" : 0,
				"fast" : 9,
				"stable" : 6,
				"osv" : {
					"linux" : 6,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 4,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 1,
					"v023" : 8,
					"v024" : 1
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [
					{
						"as" : 24466,
						"count" : 1
					},
					{
						"as" : 9790,
						"count" : 3
					},
					{
						"as" : 7657,
						"count" : 1
					},
					{
						"as" : 9433,
						"count" : 1
					},
					{
						"as" : 17746,
						"count" : 1
					},
					{
						"as" : 23655,
						"count" : 1
					},
					{
						"as" : 45230,
						"count" : 1
					},
					{
						"as" : 4771,
						"count" : 1
					}
				]
			},
			{
				"country" : "RS",
				"cbcc" : 5,
				"crcc" : 919,
				"relay" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"bwa" : 237816,
				"bwc" : 50791,
				"pbr" : 0.000012,
				"pbg" : 0,
				"pbm" : 0.000036,
				"pbe" : 0,
				"fast" : 2,
				"stable" : 0,
				"osv" : {
					"linux" : 1,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 1,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 2,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [
					{
						"as" : 31042,
						"count" : 2
					}
				]
			},
			{
				"country" : "MD",
				"cbcc" : 6,
				"crcc" : 6967,
				"relay" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 2,
				"dir" : 2,
				"bwa" : 3831694,
				"bwc" : 2712418,
				"pbr" : 0.000794,
				"pbg" : 0.000128,
				"pbm" : 0.000128,
				"pbe" : 0.002127,
				"fast" : 2,
				"stable" : 2,
				"osv" : {
					"linux" : 2,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 1,
					"v024" : 1
				},
				"pex" : {
					"p4" : 2,
					"p6" : 2,
					"p8" : 2,
					"p46" : 2,
					"p48" : 2,
					"p68" : 2,
					"p468" : 2
				},
				"autosys" : [
					{
						"as" : 43289,
						"count" : 2
					}
				]
			},
			{
				"country" : "BY",
				"cbcc" : 31,
				"crcc" : 2285,
				"relay" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"bwa" : 45056,
				"bwc" : 631,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000001,
				"fast" : 1,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 1,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 1,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 1,
					"p6" : 1,
					"p8" : 1,
					"p46" : 1,
					"p48" : 1,
					"p68" : 1,
					"p468" : 1
				},
				"autosys" : [
					{
						"as" : 6697,
						"count" : 1
					}
				]
			},
			{
				"country" : "ZA",
				"cbcc" : 13,
				"crcc" : 1458,
				"relay" : 5,
				"guard" : 0,
				"middle" : 5,
				"exit" : 3,
				"dir" : 2,
				"bwa" : 277616,
				"bwc" : 35651,
				"pbr" : 0.000018,
				"pbg" : 0,
				"pbm" : 0.000018,
				"pbe" : 0.000036,
				"fast" : 3,
				"stable" : 1,
				"osv" : {
					"linux" : 3,
					"darwin" : 1,
					"freebsd" : 0,
					"windows" : 1,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 5,
					"v024" : 0
				},
				"pex" : {
					"p4" : 3,
					"p6" : 3,
					"p8" : 3,
					"p46" : 3,
					"p48" : 3,
					"p68" : 3,
					"p468" : 3
				},
				"autosys" : [
					{
						"as" : 16637,
						"count" : 4
					},
					{
						"as" : 5713,
						"count" : 1
					}
				]
			},
			{
				"country" : "EE",
				"cbcc" : 1,
				"crcc" : 798,
				"relay" : 4,
				"guard" : 1,
				"middle" : 4,
				"exit" : 2,
				"dir" : 3,
				"bwa" : 7573854,
				"bwc" : 4271686,
				"pbr" : 0.000927,
				"pbg" : 0.00195,
				"pbm" : 0.000792,
				"pbe" : 0.000039,
				"fast" : 4,
				"stable" : 4,
				"osv" : {
					"linux" : 2,
					"darwin" : 0,
					"freebsd" : 2,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 3,
					"v024" : 0
				},
				"pex" : {
					"p4" : 2,
					"p6" : 1,
					"p8" : 2,
					"p46" : 1,
					"p48" : 2,
					"p68" : 1,
					"p468" : 1
				},
				"autosys" : [
					{
						"as" : 2586,
						"count" : 2
					},
					{
						"as" : 39301,
						"count" : 1
					},
					{
						"as" : 34702,
						"count" : 1
					}
				]
			},
			{
				"country" : "IM",
				"cbcc" : 0,
				"crcc" : 90,
				"relay" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 409600,
				"bwc" : 269439,
				"pbr" : 0.000035,
				"pbg" : 0,
				"pbm" : 0.000105,
				"pbe" : 0,
				"fast" : 1,
				"stable" : 0,
				"osv" : {
					"linux" : 1,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 1,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [
					{
						"as" : 42455,
						"count" : 1
					}
				]
			},
			{
				"country" : "HK",
				"cbcc" : 2,
				"crcc" : 1310,
				"relay" : 9,
				"guard" : 4,
				"middle" : 9,
				"exit" : 4,
				"dir" : 5,
				"bwa" : 2267826,
				"bwc" : 442670,
				"pbr" : 0.00016,
				"pbg" : 0.00014000000000000001,
				"pbm" : 0.000121,
				"pbe" : 0.00022099999999999998,
				"fast" : 8,
				"stable" : 7,
				"osv" : {
					"linux" : 6,
					"darwin" : 1,
					"freebsd" : 0,
					"windows" : 2,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 1,
					"v023" : 7,
					"v024" : 1
				},
				"pex" : {
					"p4" : 4,
					"p6" : 4,
					"p8" : 4,
					"p46" : 4,
					"p48" : 4,
					"p68" : 4,
					"p468" : 4
				},
				"autosys" : [
					{
						"as" : 4658,
						"count" : 1
					},
					{
						"as" : 24544,
						"count" : 1
					},
					{
						"as" : 4760,
						"count" : 1
					},
					{
						"as" : 10103,
						"count" : 1
					},
					{
						"as" : 38478,
						"count" : 1
					},
					{
						"as" : 36236,
						"count" : 1
					},
					{
						"as" : 9269,
						"count" : 1
					},
					{
						"as" : 45753,
						"count" : 1
					},
					{
						"as" : 9304,
						"count" : 1
					}
				]
			},
			{
				"country" : "MN",
				"cbcc" : 1,
				"crcc" : 128,
				"relay" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"bwa" : 4694913,
				"bwc" : 3577815,
				"pbr" : 0.000325,
				"pbg" : 0.000182,
				"pbm" : 0.000182,
				"pbe" : 0.000611,
				"fast" : 1,
				"stable" : 1,
				"osv" : {
					"linux" : 1,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 1,
					"v024" : 0
				},
				"pex" : {
					"p4" : 1,
					"p6" : 1,
					"p8" : 1,
					"p46" : 1,
					"p48" : 1,
					"p68" : 1,
					"p468" : 1
				},
				"autosys" : [
					{
						"as" : 45204,
						"count" : 1
					}
				]
			},
			{
				"country" : "CN",
				"cbcc" : 52,
				"crcc" : 1042,
				"relay" : 4,
				"guard" : 0,
				"middle" : 4,
				"exit" : 3,
				"dir" : 1,
				"bwa" : 440320,
				"bwc" : 178311,
				"pbr" : 0.000049,
				"pbg" : 0,
				"pbm" : 0.000023,
				"pbe" : 0.000124,
				"fast" : 4,
				"stable" : 4,
				"osv" : {
					"linux" : 4,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 3,
					"v024" : 1
				},
				"pex" : {
					"p4" : 3,
					"p6" : 3,
					"p8" : 3,
					"p46" : 3,
					"p48" : 3,
					"p68" : 3,
					"p468" : 3
				},
				"autosys" : [
					{
						"as" : 2516,
						"count" : 4
					}
				]
			},
			{
				"country" : "TH",
				"cbcc" : 31,
				"crcc" : 3191,
				"relay" : 3,
				"guard" : 0,
				"middle" : 3,
				"exit" : 0,
				"dir" : 2,
				"bwa" : 182227,
				"bwc" : 35635,
				"pbr" : 0.000004,
				"pbg" : 0,
				"pbm" : 0.000012,
				"pbe" : 0,
				"fast" : 3,
				"stable" : 1,
				"osv" : {
					"linux" : 1,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 2,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 3,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [
					{
						"as" : 9737,
						"count" : 1
					},
					{
						"as" : 45758,
						"count" : 1
					},
					{
						"as" : 4765,
						"count" : 1
					}
				]
			},
			{
				"country" : "SI",
				"cbcc" : 4,
				"crcc" : 1387,
				"relay" : 3,
				"guard" : 0,
				"middle" : 3,
				"exit" : 2,
				"dir" : 3,
				"bwa" : 1370457,
				"bwc" : 623366,
				"pbr" : 0.000193,
				"pbg" : 0,
				"pbm" : 0.000327,
				"pbe" : 0.000252,
				"fast" : 3,
				"stable" : 1,
				"osv" : {
					"linux" : 2,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 1,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 3,
					"v024" : 0
				},
				"pex" : {
					"p4" : 2,
					"p6" : 2,
					"p8" : 2,
					"p46" : 2,
					"p48" : 2,
					"p68" : 2,
					"p468" : 2
				},
				"autosys" : [
					{
						"as" : 34779,
						"count" : 1
					},
					{
						"as" : 2107,
						"count" : 1
					},
					{
						"as" : 5603,
						"count" : 1
					}
				]
			},
			{
				"country" : "SA",
				"cbcc" : 63,
				"crcc" : 12249,
				"relay" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"bwa" : 43320,
				"bwc" : 0,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000004,
				"pbe" : 0,
				"fast" : 1,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 1,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 1,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [
					{
						"as" : 25019,
						"count" : 1
					}
				]
			},
			{
				"country" : "TN",
				"cbcc" : 7,
				"crcc" : 1008,
				"relay" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 51200,
				"bwc" : 649,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0.000001,
				"pbe" : 0,
				"fast" : 1,
				"stable" : 0,
				"osv" : {
					"linux" : 1,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 1,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [
					{
						"as" : 2609,
						"count" : 1
					}
				]
			},
			{
				"country" : "MT",
				"cbcc" : 0,
				"crcc" : 219,
				"relay" : 2,
				"guard" : 2,
				"middle" : 2,
				"exit" : 2,
				"dir" : 2,
				"bwa" : 9118654,
				"bwc" : 3802511,
				"pbr" : 0.003343,
				"pbg" : 0.001873,
				"pbm" : 0.001873,
				"pbe" : 0.006282,
				"fast" : 2,
				"stable" : 2,
				"osv" : {
					"linux" : 2,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 1,
					"v023" : 1,
					"v024" : 0
				},
				"pex" : {
					"p4" : 2,
					"p6" : 1,
					"p8" : 2,
					"p46" : 1,
					"p48" : 2,
					"p68" : 1,
					"p468" : 1
				},
				"autosys" : [
					{
						"as" : 20521,
						"count" : 1
					},
					{
						"as" : 61391,
						"count" : 1
					}
				]
			},
			{
				"country" : "PA",
				"cbcc" : 1,
				"crcc" : 390,
				"relay" : 6,
				"guard" : 0,
				"middle" : 6,
				"exit" : 1,
				"dir" : 4,
				"bwa" : 452490,
				"bwc" : 129892,
				"pbr" : 0.000013,
				"pbg" : 0,
				"pbm" : 0.000018,
				"pbe" : 0.000024,
				"fast" : 6,
				"stable" : 4,
				"osv" : {
					"linux" : 2,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 4,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 2,
					"v023" : 4,
					"v024" : 0
				},
				"pex" : {
					"p4" : 1,
					"p6" : 1,
					"p8" : 1,
					"p46" : 1,
					"p48" : 1,
					"p68" : 1,
					"p468" : 1
				},
				"autosys" : [
					{
						"as" : 18809,
						"count" : 4
					},
					{
						"as" : 21599,
						"count" : 1
					},
					{
						"as" : 52284,
						"count" : 1
					}
				]
			},
			{
				"country" : "CR",
				"cbcc" : 1,
				"crcc" : 504,
				"relay" : 1,
				"guard" : 0,
					"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"bwa" : 102400,
				"bwc" : 26012,
				"pbr" : 0.000011,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000032,
				"fast" : 1,
				"stable" : 1,
				"osv" : {
					"linux" : 1,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 1,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 1,
					"p6" : 1,
					"p8" : 1,
					"p46" : 1,
					"p48" : 1,
					"p68" : 1,
					"p468" : 1
				},
				"autosys" : [
					{
						"as" : 3790,
						"count" : 1
					}
				]
			},
			{
				"country" : "EU",
				"cbcc" : 7,
				"crcc" : 775,
				"relay" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"bwa" : 83113,
				"bwc" : 13845,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000004,
				"fast" : 1,
				"stable" : 1,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 1,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 1
				},
				"pex" : {
					"p4" : 1,
					"p6" : 1,
					"p8" : 1,
					"p46" : 1,
					"p48" : 1,
					"p68" : 1,
					"p468" : 1
				},
				"autosys" : [
					{
						"as" : 250,
						"count" : 1
					}
				]
			},
			{
				"country" : "KH",
				"cbcc" : 0,
				"crcc" : 208,
				"relay" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"bwa" : 738456,
				"bwc" : 379289,
				"pbr" : 0.000052,
				"pbg" : 0.000029,
				"pbm" : 0.000029,
				"pbe" : 0.000098,
				"fast" : 1,
				"stable" : 1,
				"osv" : {
					"linux" : 1,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 1
				},
				"pex" : {
					"p4" : 1,
					"p6" : 1,
					"p8" : 1,
					"p46" : 1,
					"p48" : 1,
					"p68" : 1,
					"p468" : 1
				},
				"autosys" : [
					{
						"as" : 55329,
						"count" : 1
					}
				]
			},
			{
				"country" : "??",
				"cbcc" : 242,
				"crcc" : 13765,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "A1",
				"cbcc" : 39,
				"crcc" : 968,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "AE",
				"cbcc" : 42,
				"crcc" : 2911,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "AF",
				"cbcc" : 2,
				"crcc" : 366,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "AN",
				"cbcc" : 1,
				"crcc" : 106,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "AZ",
				"cbcc" : 37,
				"crcc" : 603,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "BD",
				"cbcc" : 4,
				"crcc" : 1015,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "BH",
				"cbcc" : 2,
				"crcc" : 541,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "BN",
				"cbcc" : 1,
				"crcc" : 122,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "BO",
				"cbcc" : 1,
				"crcc" : 364,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "CG",
				"cbcc" : 2,
				"crcc" : 39,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "CI",
				"cbcc" : 8,
				"crcc" : 708,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "CL",
				"cbcc" : 1,
				"crcc" : 2433,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "CU",
				"cbcc" : 2,
				"crcc" : 148,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "CY",
				"cbcc" : 7,
				"crcc" : 277,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "DZ",
				"cbcc" : 32,
				"crcc" : 1450,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "EC",
				"cbcc" : 2,
				"crcc" : 706,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "GE",
				"cbcc" : 1,
				"crcc" : 2097,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "GG",
				"cbcc" : 1,
				"crcc" : 49,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "GT",
				"cbcc" : 1,
				"crcc" : 313,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "GU",
				"cbcc" : 2,
				"crcc" : 61,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "IQ",
				"cbcc" : 10,
				"crcc" : 547,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "IR",
				"cbcc" : 327,
				"crcc" : 6913,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "JO",
				"cbcc" : 24,
				"crcc" : 824,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "KE",
				"cbcc" : 2,
				"crcc" : 419,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "KW",
				"cbcc" : 10,
				"crcc" : 988,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "LB",
				"cbcc" : 16,
				"crcc" : 1170,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "LK",
				"cbcc" : 2,
				"crcc" : 245,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "MA",
				"cbcc" : 18,
				"crcc" : 1372,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "MG",
				"cbcc" : 2,
				"crcc" : 168,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "MM",
				"cbcc" : 1,
				"crcc" : 277,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "MO",
				"cbcc" : 1,
				"crcc" : 107,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "MR",
				"cbcc" : 6,
				"crcc" : 53,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "MW",
				"cbcc" : 2,
				"crcc" : 32,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "NG",
				"cbcc" : 8,
				"crcc" : 924,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "NI",
				"cbcc" : 1,
				"crcc" : 161,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "OM",
				"cbcc" : 1,
				"crcc" : 284,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "PE",
				"cbcc" : 5,
				"crcc" : 1119,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "PH",
				"cbcc" : 27,
				"crcc" : 3104,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "PR",
				"cbcc" : 7,
				"crcc" : 292,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "PS",
				"cbcc" : 9,
				"crcc" : 293,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "PY",
				"cbcc" : 2,
				"crcc" : 278,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "QA",
				"cbcc" : 1,
				"crcc" : 680,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "SC",
				"cbcc" : 2,
				"crcc" : 197,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "SD",
				"cbcc" : 10,
				"crcc" : 525,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "SV",
				"cbcc" : 1,
				"crcc" : 278,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "SY",
				"cbcc" : 127,
				"crcc" : 3416,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "UZ",
				"cbcc" : 1,
				"crcc" : 491,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "VE",
				"cbcc" : 7,
				"crcc" : 1925,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "YE",
				"cbcc" : 17,
				"crcc" : 322,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "A2",
				"crcc" : 187,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "AD",
				"crcc" : 178,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "AG",
				"crcc" : 23,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "AI",
				"crcc" : 4,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "AL",
				"crcc" : 278,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "AM",
				"crcc" : 299,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "AO",
				"crcc" : 103,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "AP",
				"crcc" : 90,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "AS",
				"crcc" : 18,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "AW",
				"crcc" : 74,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
						"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "AX",
				"crcc" : 32,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "BB",
				"crcc" : 91,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "BF",
				"crcc" : 118,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "BI",
				"crcc" : 4,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "BJ",
				"crcc" : 651,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "BM",
				"crcc" : 45,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "BQ",
				"crcc" : 6,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "BS",
				"crcc" : 123,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "BT",
				"crcc" : 56,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "BW",
				"crcc" : 30,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "BZ",
				"crcc" : 115,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "CD",
				"crcc" : 33,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "CK",
				"crcc" : 7,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "CM",
				"crcc" : 228,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "CS",
				"crcc" : 3,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "CV",
				"crcc" : 25,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "CW",
				"crcc" : 27,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "DJ",
				"crcc" : 63,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "DM",
				"crcc" : 21,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "ER",
				"crcc" : 4,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "ET",
				"crcc" : 529,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "FJ",
				"crcc" : 50,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "FK",
				"crcc" : 5,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "FM",
				"crcc" : 11,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "FO",
				"crcc" : 20,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "GA",
				"crcc" : 120,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "GD",
				"crcc" : 47,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "GF",
				"crcc" : 59,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "GH",
				"crcc" : 440,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "GI",
				"crcc" : 67,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "GL",
				"crcc" : 31,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "GM",
				"crcc" : 34,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "GN",
				"crcc" : 7,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "GP",
				"crcc" : 108,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "GQ",
				"crcc" : 4,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "GY",
				"crcc" : 60,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "HN",
				"crcc" : 181,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "HT",
				"crcc" : 61,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "JM",
				"crcc" : 169,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "KG",
				"crcc" : 147,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "KM",
				"crcc" : 8,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "KN",
				"crcc" : 14,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "KP",
				"crcc" : 88,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "KY",
				"crcc" : 48,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "LA",
				"crcc" : 125,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "LC",
				"crcc" : 36,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "LI",
				"crcc" : 90,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "LR",
				"crcc" : 24,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "LS",
				"crcc" : 18,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "LY",
				"crcc" : 252,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "MC",
				"crcc" : 117,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "ME",
				"crcc" : 104,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "MF",
				"crcc" : 2,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "MH",
				"crcc" : 5,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "ML",
				"crcc" : 79,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "MP",
				"crcc" : 21,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "MQ",
				"crcc" : 190,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "MU",
				"crcc" : 150,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "MV",
				"crcc" : 121,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "MZ",
				"crcc" : 126,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "NA",
				"crcc" : 102,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "NC",
				"crcc" : 194,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "NE",
				"crcc" : 54,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
					},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "NP",
				"crcc" : 197,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "PF",
				"crcc" : 176,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "PG",
				"crcc" : 29,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "PM",
				"crcc" : 33,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "PW",
				"crcc" : 8,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "RE",
				"crcc" : 109,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "RW",
				"crcc" : 106,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "SB",
				"crcc" : 24,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "SH",
				"crcc" : 1,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "SL",
				"crcc" : 2,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "SM",
				"crcc" : 121,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "SN",
				"crcc" : 578,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "SO",
				"crcc" : 21,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "SR",
				"crcc" : 109,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "ST",
				"crcc" : 4,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "SZ",
				"crcc" : 9,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "TD",
				"crcc" : 7,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "TG",
				"crcc" : 145,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "TJ",
				"crcc" : 89,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "TL",
				"crcc" : 65,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "TM",
				"crcc" : 562,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "TO",
				"crcc" : 17,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "TT",
				"crcc" : 166,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "TV",
				"crcc" : 4,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "TZ",
				"crcc" : 98,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "UG",
				"crcc" : 168,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "UY",
				"crcc" : 612,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "VA",
				"crcc" : 19,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "VC",
				"crcc" : 12,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "VG",
				"crcc" : 32,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "VI",
				"crcc" : 70,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "VU",
				"crcc" : 17,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "WS",
				"crcc" : 2,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "YT",
				"crcc" : 13,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "ZM",
				"crcc" : 73,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			},
			{
				"country" : "ZW",
				"crcc" : 90,
				"cbcc" : 0,
				"relay" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"fast" : 0,
				"stable" : 0,
				"osv" : {
					"linux" : 0,
					"darwin" : 0,
					"freebsd" : 0,
					"windows" : 0,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 0,
					"v023" : 0,
					"v024" : 0
				},
				"pex" : {
					"p4" : 0,
					"p6" : 0,
					"p8" : 0,
					"p46" : 0,
					"p48" : 0,
					"p68" : 0,
					"p468" : 0
				},
				"autosys" : [ ]
			}
		],
		"autosys" : [
			{
				"as" : 2012,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 156064,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000048,
				"pbg" : 0.000103,
				"pbm" : 0.000041,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "HU",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 156064,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000048,
						"pbg" : 0.000103,
						"pbm" : 0.000041,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 16276,
				"relay" : 105,
				"bwa" : 188296350,
				"bwc" : 125684324,
				"fast" : 92,
				"stable" : 85,
				"guard" : 58,
				"middle" : 105,
				"exit" : 31,
				"dir" : 61,
				"pbr" : 0.05648200000000002,
				"pbg" : 0.052883000000000006,
				"pbm" : 0.064944,
				"pbe" : 0.05161800000000002,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 77,
						"bwa" : 148638529,
						"bwc" : 100879821,
						"fast" : 64,
						"stable" : 67,
						"guard" : 42,
						"middle" : 77,
						"exit" : 25,
						"dir" : 41,
						"pbr" : 0.04718700000000002,
						"pbg" : 0.04228200000000001,
						"pbm" : 0.05647200000000001,
						"pbe" : 0.042802
					},
					{
						"cc" : "CA",
						"relay" : 7,
						"bwa" : 10946635,
						"bwc" : 7204441,
						"fast" : 7,
						"stable" : 4,
						"guard" : 6,
						"middle" : 7,
						"exit" : 2,
						"dir" : 6,
						"pbr" : 0.003994,
						"pbg" : 0.0035220000000000004,
						"pbm" : 0.001949,
						"pbe" : 0.006513
					},
					{
						"cc" : "DE",
						"relay" : 3,
						"bwa" : 4546560,
						"bwc" : 4289355,
						"fast" : 3,
						"stable" : 3,
						"guard" : 1,
						"middle" : 3,
						"exit" : 0,
						"dir" : 3,
						"pbr" : 0.001027,
						"pbg" : 0.002156,
						"pbm" : 0.000925,
						"pbe" : 0
					},
					{
						"cc" : "NL",
						"relay" : 3,
						"bwa" : 3334144,
						"bwc" : 3110322,
						"fast" : 3,
						"stable" : 3,
						"guard" : 3,
						"middle" : 3,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000848,
						"pbg" : 0.001729,
						"pbm" : 0.0007030000000000001,
						"pbe" : 0.000112
					},
					{
						"cc" : "GB",
						"relay" : 6,
						"bwa" : 11929162,
						"bwc" : 6615521,
						"fast" : 6,
						"stable" : 4,
						"guard" : 3,
						"middle" : 6,
						"exit" : 2,
						"dir" : 3,
						"pbr" : 0.0018130000000000002,
						"pbg" : 0.001395,
						"pbm" : 0.002159,
						"pbe" : 0.001885
					},
					{
						"cc" : "IE",
						"relay" : 4,
						"bwa" : 1947460,
						"bwc" : 582508,
						"fast" : 4,
						"stable" : 2,
						"guard" : 1,
						"middle" : 4,
						"exit" : 1,
						"dir" : 3,
						"pbr" : 0.00024700000000000004,
						"pbg" : 0.000091,
						"pbm" : 0.000344,
						"pbe" : 0.000306
					},
					{
						"cc" : "BE",
						"relay" : 1,
						"bwa" : 250604,
						"bwc" : 1396,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					},
					{
						"cc" : "IT",
						"relay" : 2,
						"bwa" : 1843200,
						"bwc" : 930067,
						"fast" : 2,
						"stable" : 1,
						"guard" : 1,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000482,
						"pbg" : 0.000166,
						"pbm" : 0.0012820000000000002,
						"pbe" : 0
					},
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1714328,
						"bwc" : 532526,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000164,
						"pbg" : 0,
						"pbm" : 0.000492,
						"pbe" : 0
					},
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 3145728,
						"bwc" : 1538367,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000717,
						"pbg" : 0.001542,
						"pbm" : 0.000609,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 6724,
				"relay" : 35,
				"bwa" : 39099108,
				"bwc" : 25276275,
				"fast" : 35,
				"stable" : 30,
				"guard" : 20,
				"middle" : 35,
				"exit" : 4,
				"dir" : 21,
				"pbr" : 0.011789999999999995,
				"pbg" : 0.014807,
				"pbm" : 0.018075999999999995,
				"pbe" : 0.0024909999999999997,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 35,
						"bwa" : 39099108,
						"bwc" : 25276275,
						"fast" : 35,
						"stable" : 30,
						"guard" : 20,
						"middle" : 35,
						"exit" : 4,
						"dir" : 21,
						"pbr" : 0.011789999999999995,
						"pbg" : 0.014807,
						"pbm" : 0.018075999999999995,
						"pbe" : 0.0024909999999999997
					}
				]
			},
			{
				"as" : "",
				"relay" : 0,
				"bwa" : 0,
				"bwc" : 0,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 0,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "",
						"relay" : 0,
						"bwa" : 0,
						"bwc" : 0,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 0,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 6805,
				"relay" : 16,
				"bwa" : 3268922,
				"bwc" : 2262615,
				"fast" : 12,
				"stable" : 1,
				"guard" : 1,
				"middle" : 16,
				"exit" : 2,
				"dir" : 8,
				"pbr" : 0.0006069999999999999,
				"pbg" : 0.001027,
				"pbm" : 0.0007699999999999999,
				"pbe" : 0.000025,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 16,
						"bwa" : 3268922,
						"bwc" : 2262615,
						"fast" : 12,
						"stable" : 1,
						"guard" : 1,
						"middle" : 16,
						"exit" : 2,
						"dir" : 8,
						"pbr" : 0.0006069999999999999,
						"pbg" : 0.001027,
						"pbm" : 0.0007699999999999999,
						"pbe" : 0.000025
					}
				]
			},
			{
				"as" : 2119,
				"relay" : 20,
				"bwa" : 7713597,
				"bwc" : 5433833,
				"fast" : 18,
				"stable" : 11,
				"guard" : 4,
				"middle" : 20,
				"exit" : 4,
				"dir" : 11,
				"pbr" : 0.002061,
				"pbg" : 0.001099,
				"pbm" : 0.004788000000000001,
				"pbe" : 0.000297,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 15,
						"bwa" : 4206799,
						"bwc" : 2252819,
						"fast" : 13,
						"stable" : 9,
						"guard" : 4,
						"middle" : 15,
						"exit" : 3,
						"dir" : 7,
						"pbr" : 0.0007379999999999999,
						"pbg" : 0.001099,
						"pbm" : 0.000833,
						"pbe" : 0.000281
					},
					{
						"cc" : "NO",
						"relay" : 5,
						"bwa" : 3506798,
						"bwc" : 3181014,
						"fast" : 5,
						"stable" : 2,
						"guard" : 0,
						"middle" : 5,
						"exit" : 1,
						"dir" : 4,
						"pbr" : 0.001323,
						"pbg" : 0,
						"pbm" : 0.003955,
						"pbe" : 0.000016
					}
				]
			},
			{
				"as" : 53667,
				"relay" : 4,
				"bwa" : 4827722,
				"bwc" : 3135084,
				"fast" : 4,
				"stable" : 3,
				"guard" : 2,
				"middle" : 4,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.001691,
				"pbg" : 0.000342,
				"pbm" : 0.003933,
				"pbe" : 0.000797,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 4827722,
						"bwc" : 3135084,
						"fast" : 4,
						"stable" : 3,
						"guard" : 2,
						"middle" : 4,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.001691,
						"pbg" : 0.000342,
						"pbm" : 0.003933,
						"pbe" : 0.000797
					}
				]
			},
			{
				"as" : 7922,
				"relay" : 144,
				"bwa" : 31616667,
				"bwc" : 11389301,
				"fast" : 129,
				"stable" : 85,
				"guard" : 20,
				"middle" : 144,
				"exit" : 22,
				"dir" : 96,
				"pbr" : 0.003532000000000001,
				"pbg" : 0.003141,
				"pbm" : 0.006244,
				"pbe" : 0.0012139999999999998,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 144,
						"bwa" : 31616667,
						"bwc" : 11389301,
						"fast" : 129,
						"stable" : 85,
						"guard" : 20,
						"middle" : 144,
						"exit" : 22,
						"dir" : 96,
						"pbr" : 0.003532000000000001,
						"pbg" : 0.003141,
						"pbm" : 0.006244,
						"pbe" : 0.0012139999999999998
					}
				]
			},
			{
				"as" : 40092,
				"relay" : 1,
				"bwa" : 131072,
				"bwc" : 34176,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000011,
				"pbg" : 0,
				"pbm" : 0.000032,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 131072,
						"bwc" : 34176,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000011,
						"pbg" : 0,
						"pbm" : 0.000032,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 7132,
				"relay" : 20,
				"bwa" : 1948875,
				"bwc" : 498278,
				"fast" : 15,
				"stable" : 10,
				"guard" : 2,
				"middle" : 20,
				"exit" : 2,
				"dir" : 9,
				"pbr" : 0.000144,
				"pbg" : 0.000167,
				"pbm" : 0.00025800000000000004,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 20,
						"bwa" : 1948875,
						"bwc" : 498278,
						"fast" : 15,
						"stable" : 10,
						"guard" : 2,
						"middle" : 20,
						"exit" : 2,
						"dir" : 9,
						"pbr" : 0.000144,
						"pbg" : 0.000167,
						"pbm" : 0.00025800000000000004,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 4713,
				"relay" : 5,
				"bwa" : 633340,
				"bwc" : 90427,
				"fast" : 4,
				"stable" : 1,
				"guard" : 0,
				"middle" : 5,
				"exit" : 0,
				"dir" : 4,
				"pbr" : 0.000022,
				"pbg" : 0,
				"pbm" : 0.000066,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 5,
						"bwa" : 633340,
						"bwc" : 90427,
						"fast" : 4,
						"stable" : 1,
						"guard" : 0,
						"middle" : 5,
						"exit" : 0,
						"dir" : 4,
						"pbr" : 0.000022,
						"pbg" : 0,
						"pbm" : 0.000066,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 7029,
				"relay" : 3,
				"bwa" : 614740,
				"bwc" : 505145,
				"fast" : 3,
				"stable" : 2,
				"guard" : 1,
				"middle" : 3,
				"exit" : 1,
				"dir" : 3,
				"pbr" : 0.000146,
				"pbg" : 0.000309,
				"pbm" : 0.000125,
				"pbe" : 0.000004,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 3,
						"bwa" : 614740,
						"bwc" : 505145,
						"fast" : 3,
						"stable" : 2,
						"guard" : 1,
						"middle" : 3,
						"exit" : 1,
						"dir" : 3,
						"pbr" : 0.000146,
						"pbg" : 0.000309,
						"pbm" : 0.000125,
						"pbe" : 0.000004
					}
				]
			},
			{
				"as" : 13722,
				"relay" : 4,
				"bwa" : 26169165,
				"bwc" : 15750587,
				"fast" : 4,
				"stable" : 4,
				"guard" : 3,
				"middle" : 4,
				"exit" : 4,
				"dir" : 4,
				"pbr" : 0.01262,
				"pbg" : 0.006856,
				"pbm" : 0.006855,
				"pbe" : 0.024146,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 26169165,
						"bwc" : 15750587,
						"fast" : 4,
						"stable" : 4,
						"guard" : 3,
						"middle" : 4,
						"exit" : 4,
						"dir" : 4,
						"pbr" : 0.01262,
						"pbg" : 0.006856,
						"pbm" : 0.006855,
						"pbe" : 0.024146
					}
				]
			},
			{
				"as" : 5089,
				"relay" : 34,
				"bwa" : 5422672,
				"bwc" : 1545405,
				"fast" : 26,
				"stable" : 20,
				"guard" : 4,
				"middle" : 34,
				"exit" : 0,
				"dir" : 17,
				"pbr" : 0.000598,
				"pbg" : 0.000669,
				"pbm" : 0.00112,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 34,
						"bwa" : 5422672,
						"bwc" : 1545405,
						"fast" : 26,
						"stable" : 20,
						"guard" : 4,
						"middle" : 34,
						"exit" : 0,
						"dir" : 17,
						"pbr" : 0.000598,
						"pbg" : 0.000669,
						"pbm" : 0.00112,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8551,
				"relay" : 9,
				"bwa" : 7586961,
				"bwc" : 4112537,
				"fast" : 9,
				"stable" : 8,
				"guard" : 7,
				"middle" : 9,
				"exit" : 0,
				"dir" : 8,
				"pbr" : 0.0012370000000000003,
				"pbg" : 0.002648,
				"pbm" : 0.00106,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "IL",
						"relay" : 9,
						"bwa" : 7586961,
						"bwc" : 4112537,
						"fast" : 9,
						"stable" : 8,
						"guard" : 7,
						"middle" : 9,
						"exit" : 0,
						"dir" : 8,
						"pbr" : 0.0012370000000000003,
						"pbg" : 0.002648,
						"pbm" : 0.00106,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 4788,
				"relay" : 2,
				"bwa" : 74110,
				"bwc" : 20294,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000008,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "MY",
						"relay" : 2,
						"bwa" : 74110,
						"bwc" : 20294,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000008,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 1653,
				"relay" : 5,
				"bwa" : 13382698,
				"bwc" : 11216013,
				"fast" : 5,
				"stable" : 4,
				"guard" : 4,
				"middle" : 5,
				"exit" : 0,
				"dir" : 3,
				"pbr" : 0.005484,
				"pbg" : 0.011779999999999999,
				"pbm" : 0.004668,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 5,
						"bwa" : 13382698,
						"bwc" : 11216013,
						"fast" : 5,
						"stable" : 4,
						"guard" : 4,
						"middle" : 5,
						"exit" : 0,
						"dir" : 3,
						"pbr" : 0.005484,
						"pbg" : 0.011779999999999999,
						"pbm" : 0.004668,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8001,
				"relay" : 22,
				"bwa" : 18314499,
				"bwc" : 10630626,
				"fast" : 22,
				"stable" : 16,
				"guard" : 7,
				"middle" : 22,
				"exit" : 2,
				"dir" : 7,
				"pbr" : 0.00541,
				"pbg" : 0.002627,
				"pbm" : 0.004358999999999999,
				"pbe" : 0.009242,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 22,
						"bwa" : 18314499,
						"bwc" : 10630626,
						"fast" : 22,
						"stable" : 16,
						"guard" : 7,
						"middle" : 22,
						"exit" : 2,
						"dir" : 7,
						"pbr" : 0.00541,
						"pbg" : 0.002627,
						"pbm" : 0.004358999999999999,
						"pbe" : 0.009242
					}
				]
			},
			{
				"as" : 6389,
				"relay" : 7,
				"bwa" : 201656,
				"bwc" : 32864,
				"fast" : 2,
				"stable" : 6,
				"guard" : 0,
				"middle" : 7,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000014,
				"pbg" : 0,
				"pbm" : 0.000043,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 7,
						"bwa" : 201656,
						"bwc" : 32864,
						"fast" : 2,
						"stable" : 6,
						"guard" : 0,
						"middle" : 7,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000014,
						"pbg" : 0,
						"pbm" : 0.000043,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 29761,
				"relay" : 8,
				"bwa" : 92232219,
				"bwc" : 69501343,
				"fast" : 7,
				"stable" : 8,
				"guard" : 7,
				"middle" : 8,
				"exit" : 5,
				"dir" : 7,
				"pbr" : 0.036993,
				"pbg" : 0.020810000000000002,
				"pbm" : 0.020751,
				"pbe" : 0.069408,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 7,
						"bwa" : 92210296,
						"bwc" : 69500643,
						"fast" : 7,
						"stable" : 7,
						"guard" : 7,
						"middle" : 7,
						"exit" : 5,
						"dir" : 7,
						"pbr" : 0.03699,
						"pbg" : 0.020810000000000002,
						"pbm" : 0.020742,
						"pbe" : 0.069408
					},
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 21923,
						"bwc" : 700,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 51969,
				"relay" : 1,
				"bwa" : 2356414,
				"bwc" : 691758,
				"fast" : 1,
				"stable" : 0,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.001108,
				"pbg" : 0.000621,
				"pbm" : 0.000621,
				"pbe" : 0.002081,
				"countries" : [
					{
						"cc" : "IS",
						"relay" : 1,
						"bwa" : 2356414,
						"bwc" : 691758,
						"fast" : 1,
						"stable" : 0,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.001108,
						"pbg" : 0.000621,
						"pbm" : 0.000621,
						"pbe" : 0.002081
					}
				]
			},
			{
				"as" : 9482,
				"relay" : 2,
				"bwa" : 936752,
				"bwc" : 85978,
				"fast" : 2,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 2,
				"dir" : 2,
				"pbr" : 0.000062,
				"pbg" : 0.000032,
				"pbm" : 0.000032,
				"pbe" : 0.000125,
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 2,
						"bwa" : 936752,
						"bwc" : 85978,
						"fast" : 2,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 2,
						"dir" : 2,
						"pbr" : 0.000062,
						"pbg" : 0.000032,
						"pbm" : 0.000032,
						"pbe" : 0.000125
					}
				]
			},
			{
				"as" : 41715,
				"relay" : 1,
				"bwa" : 27613,
				"bwc" : 2188,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 1,
						"bwa" : 27613,
						"bwc" : 2188,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 6830,
				"relay" : 75,
				"bwa" : 30109274,
				"bwc" : 20985192,
				"fast" : 68,
				"stable" : 54,
				"guard" : 12,
				"middle" : 75,
				"exit" : 10,
				"dir" : 46,
				"pbr" : 0.005102000000000001,
				"pbg" : 0.007134000000000001,
				"pbm" : 0.005795999999999999,
				"pbe" : 0.0023759999999999996,
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 16,
						"bwa" : 3012483,
						"bwc" : 1408121,
						"fast" : 13,
						"stable" : 12,
						"guard" : 3,
						"middle" : 16,
						"exit" : 2,
						"dir" : 10,
						"pbr" : 0.00035600000000000003,
						"pbg" : 0.00029299999999999997,
						"pbm" : 0.000483,
						"pbe" : 0.000289
					},
					{
						"cc" : "CH",
						"relay" : 14,
						"bwa" : 2798143,
						"bwc" : 1474534,
						"fast" : 14,
						"stable" : 12,
						"guard" : 4,
						"middle" : 14,
						"exit" : 2,
						"dir" : 10,
						"pbr" : 0.0006600000000000002,
						"pbg" : 0.000285,
						"pbm" : 0.00064,
						"pbe" : 0.001058
					},
					{
						"cc" : "CZ",
						"relay" : 11,
						"bwa" : 1590340,
						"bwc" : 802653,
						"fast" : 7,
						"stable" : 9,
						"guard" : 1,
						"middle" : 11,
						"exit" : 1,
						"dir" : 6,
						"pbr" : 0.000291,
						"pbg" : 0.000133,
						"pbm" : 0.000345,
						"pbe" : 0.000396
					},
					{
						"cc" : "AT",
						"relay" : 17,
						"bwa" : 18609869,
						"bwc" : 15026928,
						"fast" : 17,
						"stable" : 13,
						"guard" : 3,
						"middle" : 17,
						"exit" : 4,
						"dir" : 11,
						"pbr" : 0.0031689999999999986,
							"pbg" : 0.006130000000000001,
						"pbm" : 0.0027689999999999993,
						"pbe" : 0.000609
					},
					{
						"cc" : "SK",
						"relay" : 5,
						"bwa" : 1169408,
						"bwc" : 783860,
						"fast" : 5,
						"stable" : 3,
						"guard" : 0,
						"middle" : 5,
						"exit" : 1,
						"dir" : 3,
						"pbr" : 0.00018800000000000002,
						"pbg" : 0,
						"pbm" : 0.0005369999999999999,
						"pbe" : 0.000024
					},
					{
						"cc" : "HU",
						"relay" : 5,
						"bwa" : 1363968,
						"bwc" : 859176,
						"fast" : 5,
						"stable" : 2,
						"guard" : 0,
						"middle" : 5,
						"exit" : 0,
						"dir" : 3,
						"pbr" : 0.00023,
						"pbg" : 0,
						"pbm" : 0.0006900000000000001,
						"pbe" : 0
					},
					{
						"cc" : "RO",
						"relay" : 1,
						"bwa" : 542206,
						"bwc" : 317533,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000136,
						"pbg" : 0.000293,
						"pbm" : 0.000116,
						"pbe" : 0
					},
					{
						"cc" : "NL",
						"relay" : 6,
						"bwa" : 1022857,
						"bwc" : 312387,
						"fast" : 6,
						"stable" : 2,
						"guard" : 0,
						"middle" : 6,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000072,
						"pbg" : 0,
						"pbm" : 0.00021600000000000002,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 49335,
				"relay" : 2,
				"bwa" : 307200,
				"bwc" : 291918,
				"fast" : 2,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 2,
				"dir" : 0,
				"pbr" : 0.000041,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000123,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 307200,
						"bwc" : 291918,
						"fast" : 2,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 2,
						"dir" : 0,
						"pbr" : 0.000041,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000123
					}
				]
			},
			{
				"as" : 3248,
				"relay" : 8,
				"bwa" : 53462189,
				"bwc" : 45868314,
				"fast" : 7,
				"stable" : 8,
				"guard" : 6,
				"middle" : 8,
				"exit" : 0,
				"dir" : 8,
				"pbr" : 0.011329,
				"pbg" : 0.024336000000000003,
				"pbm" : 0.009656,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 8,
						"bwa" : 53462189,
						"bwc" : 45868314,
						"fast" : 7,
						"stable" : 8,
						"guard" : 6,
						"middle" : 8,
						"exit" : 0,
						"dir" : 8,
						"pbr" : 0.011329,
						"pbg" : 0.024336000000000003,
						"pbm" : 0.009656,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12715,
				"relay" : 7,
				"bwa" : 795981,
				"bwc" : 131117,
				"fast" : 5,
				"stable" : 0,
				"guard" : 0,
				"middle" : 7,
				"exit" : 2,
				"dir" : 6,
				"pbr" : 0.000042,
				"pbg" : 0,
				"pbm" : 0.00010999999999999999,
				"pbe" : 0.000018,
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 7,
						"bwa" : 795981,
						"bwc" : 131117,
						"fast" : 5,
						"stable" : 0,
						"guard" : 0,
						"middle" : 7,
						"exit" : 2,
						"dir" : 6,
						"pbr" : 0.000042,
						"pbg" : 0,
						"pbm" : 0.00010999999999999999,
						"pbe" : 0.000018
					}
				]
			},
			{
				"as" : 35411,
				"relay" : 1,
				"bwa" : 4610,
				"bwc" : 60,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000021,
				"pbg" : 0,
				"pbm" : 0.000062,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 4610,
						"bwc" : 60,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000021,
						"pbg" : 0,
						"pbm" : 0.000062,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 24940,
				"relay" : 167,
				"bwa" : 232163946,
				"bwc" : 182540722,
				"fast" : 162,
				"stable" : 147,
				"guard" : 111,
				"middle" : 167,
				"exit" : 21,
				"dir" : 93,
				"pbr" : 0.05866700000000003,
				"pbg" : 0.06884100000000001,
				"pbm" : 0.09649900000000006,
				"pbe" : 0.010684,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 166,
						"bwa" : 231106965,
						"bwc" : 182009684,
						"fast" : 161,
						"stable" : 146,
						"guard" : 110,
						"middle" : 166,
						"exit" : 20,
						"dir" : 92,
						"pbr" : 0.05855300000000003,
						"pbg" : 0.06877700000000002,
						"pbm" : 0.09643500000000005,
						"pbe" : 0.010469000000000001
					},
					{
						"cc" : "IT",
						"relay" : 1,
						"bwa" : 1056981,
						"bwc" : 531038,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000114,
						"pbg" : 0.000064,
						"pbm" : 0.000064,
						"pbe" : 0.000215
					}
				]
			},
			{
				"as" : 48361,
				"relay" : 2,
				"bwa" : 2007884,
				"bwc" : 401004,
				"fast" : 2,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000203,
				"pbg" : 0,
				"pbm" : 0.000213,
				"pbe" : 0.000396,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 2007884,
						"bwc" : 401004,
						"fast" : 2,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000203,
						"pbg" : 0,
						"pbm" : 0.000213,
						"pbe" : 0.000396
					}
				]
			},
			{
				"as" : 13768,
				"relay" : 6,
				"bwa" : 1308672,
				"bwc" : 843344,
				"fast" : 6,
				"stable" : 5,
				"guard" : 2,
				"middle" : 6,
				"exit" : 1,
				"dir" : 3,
				"pbr" : 0.00016900000000000002,
				"pbg" : 0.000286,
				"pbm" : 0.000187,
				"pbe" : 0.000035,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 1155072,
						"bwc" : 825142,
						"fast" : 4,
						"stable" : 4,
						"guard" : 2,
						"middle" : 4,
						"exit" : 1,
						"dir" : 3,
						"pbr" : 0.00015800000000000002,
						"pbg" : 0.000286,
						"pbm" : 0.000153,
						"pbe" : 0.000035
					},
					{
						"cc" : "CA",
						"relay" : 2,
						"bwa" : 153600,
						"bwc" : 18202,
						"fast" : 2,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000011,
						"pbg" : 0,
						"pbm" : 0.000034,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 18566,
				"relay" : 1,
				"bwa" : 40960,
				"bwc" : 685,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000003,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 40960,
						"bwc" : 685,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000003,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 7545,
				"relay" : 3,
				"bwa" : 129291,
				"bwc" : 7072,
				"fast" : 2,
				"stable" : 2,
				"guard" : 0,
				"middle" : 3,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000004,
				"pbe" : 0.000003,
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 3,
						"bwa" : 129291,
						"bwc" : 7072,
						"fast" : 2,
						"stable" : 2,
						"guard" : 0,
						"middle" : 3,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000004,
						"pbe" : 0.000003
					}
				]
			},
			{
				"as" : 7796,
				"relay" : 1,
				"bwa" : 256000,
				"bwc" : 68728,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.00006,
				"pbg" : 0.000034,
				"pbm" : 0.000034,
				"pbe" : 0.000114,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 256000,
						"bwc" : 68728,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.00006,
						"pbg" : 0.000034,
						"pbm" : 0.000034,
						"pbe" : 0.000114
					}
				]
			},
			{
				"as" : 19662,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 9575,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000006,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 9575,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000006,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 29113,
				"relay" : 4,
				"bwa" : 4481963,
				"bwc" : 2183656,
				"fast" : 4,
				"stable" : 4,
				"guard" : 3,
				"middle" : 4,
				"exit" : 3,
				"dir" : 1,
				"pbr" : 0.0010680000000000002,
				"pbg" : 0.001134,
				"pbm" : 0.000692,
				"pbe" : 0.001378,
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 4,
						"bwa" : 4481963,
						"bwc" : 2183656,
						"fast" : 4,
						"stable" : 4,
						"guard" : 3,
						"middle" : 4,
						"exit" : 3,
						"dir" : 1,
						"pbr" : 0.0010680000000000002,
						"pbg" : 0.001134,
						"pbm" : 0.000692,
						"pbe" : 0.001378
					}
				]
			},
			{
				"as" : 209,
				"relay" : 18,
				"bwa" : 1726347,
				"bwc" : 524135,
				"fast" : 15,
				"stable" : 6,
				"guard" : 0,
				"middle" : 18,
				"exit" : 1,
				"dir" : 10,
				"pbr" : 0.00012200000000000001,
				"pbg" : 0,
				"pbm" : 0.00028700000000000004,
				"pbe" : 0.000077,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 18,
						"bwa" : 1726347,
						"bwc" : 524135,
						"fast" : 15,
						"stable" : 6,
						"guard" : 0,
						"middle" : 18,
						"exit" : 1,
						"dir" : 10,
						"pbr" : 0.00012200000000000001,
						"pbg" : 0,
						"pbm" : 0.00028700000000000004,
						"pbe" : 0.000077
					}
				]
			},
			{
				"as" : 31148,
				"relay" : 2,
				"bwa" : 237568,
				"bwc" : 109834,
				"fast" : 1,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 2,
				"dir" : 1,
				"pbr" : 0.000036,
				"pbg" : 0.000018,
				"pbm" : 0.000018,
				"pbe" : 0.00007,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 2,
						"bwa" : 237568,
						"bwc" : 109834,
						"fast" : 1,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 2,
						"dir" : 1,
						"pbr" : 0.000036,
						"pbg" : 0.000018,
						"pbm" : 0.000018,
						"pbe" : 0.00007
					}
				]
			},
			{
				"as" : 46841,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 951334,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000299,
				"pbg" : 0.000642,
				"pbm" : 0.000254,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 951334,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000299,
						"pbg" : 0.000642,
						"pbm" : 0.000254,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 7018,
				"relay" : 16,
				"bwa" : 1481733,
				"bwc" : 258801,
				"fast" : 14,
				"stable" : 7,
				"guard" : 1,
				"middle" : 16,
				"exit" : 3,
				"dir" : 12,
				"pbr" : 0.000094,
				"pbg" : 0.000014,
				"pbm" : 0.000193,
				"pbe" : 0.000075,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 16,
						"bwa" : 1481733,
						"bwc" : 258801,
						"fast" : 14,
						"stable" : 7,
						"guard" : 1,
						"middle" : 16,
						"exit" : 3,
						"dir" : 12,
						"pbr" : 0.000094,
						"pbg" : 0.000014,
						"pbm" : 0.000193,
						"pbe" : 0.000075
					}
				]
			},
			{
				"as" : 48416,
				"relay" : 1,
				"bwa" : 196608,
				"bwc" : 58501,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000029,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000086,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 196608,
						"bwc" : 58501,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000029,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000086
					}
				]
			},
			{
				"as" : 8972,
				"relay" : 29,
				"bwa" : 62393844,
				"bwc" : 49778211,
				"fast" : 29,
				"stable" : 27,
				"guard" : 19,
				"middle" : 29,
				"exit" : 4,
				"dir" : 22,
				"pbr" : 0.014517000000000006,
				"pbg" : 0.022073000000000002,
				"pbm" : 0.017676,
				"pbe" : 0.0037990000000000003,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 29,
						"bwa" : 62393844,
						"bwc" : 49778211,
						"fast" : 29,
						"stable" : 27,
						"guard" : 19,
						"middle" : 29,
						"exit" : 4,
						"dir" : 22,
						"pbr" : 0.014517000000000006,
						"pbg" : 0.022073000000000002,
						"pbm" : 0.017676,
						"pbe" : 0.0037990000000000003
					}
				]
			},
			{
				"as" : 16265,
				"relay" : 56,
				"bwa" : 116774706,
				"bwc" : 83903695,
				"fast" : 43,
				"stable" : 51,
				"guard" : 30,
				"middle" : 56,
				"exit" : 30,
				"dir" : 27,
				"pbr" : 0.041060000000000006,
				"pbg" : 0.041269,
				"pbm" : 0.028106000000000003,
				"pbe" : 0.053803,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 50,
						"bwa" : 85619221,
						"bwc" : 61028975,
						"fast" : 37,
						"stable" : 45,
						"guard" : 25,
						"middle" : 50,
						"exit" : 28,
						"dir" : 23,
						"pbr" : 0.032475000000000004,
						"pbg" : 0.027232000000000003,
						"pbm" : 0.021623,
						"pbe" : 0.048564
					},
					{
						"cc" : "DE",
						"relay" : 6,
						"bwa" : 31155485,
						"bwc" : 22874720,
						"fast" : 6,
						"stable" : 6,
						"guard" : 5,
						"middle" : 6,
						"exit" : 2,
						"dir" : 4,
						"pbr" : 0.008584999999999999,
						"pbg" : 0.014037,
						"pbm" : 0.006483,
						"pbe" : 0.005239
					}
				]
			},
			{
				"as" : 3352,
				"relay" : 5,
				"bwa" : 525884,
				"bwc" : 76770,
				"fast" : 3,
				"stable" : 1,
				"guard" : 1,
				"middle" : 5,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000052000000000000004,
				"pbg" : 0.000092,
				"pbm" : 0.000056,
				"pbe" : 0.000005,
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 5,
						"bwa" : 525884,
						"bwc" : 76770,
						"fast" : 3,
						"stable" : 1,
						"guard" : 1,
						"middle" : 5,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000052000000000000004,
						"pbg" : 0.000092,
						"pbm" : 0.000056,
						"pbe" : 0.000005
					}
				]
			},
			{
				"as" : 3320,
				"relay" : 68,
				"bwa" : 13377976,
				"bwc" : 5599292,
				"fast" : 53,
				"stable" : 5,
				"guard" : 0,
				"middle" : 68,
				"exit" : 3,
				"dir" : 37,
				"pbr" : 0.002343,
				"pbg" : 0,
				"pbm" : 0.006604999999999999,
				"pbe" : 0.00042599999999999995,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 68,
						"bwa" : 13377976,
						"bwc" : 5599292,
						"fast" : 53,
						"stable" : 5,
						"guard" : 0,
						"middle" : 68,
						"exit" : 3,
						"dir" : 37,
						"pbr" : 0.002343,
						"pbg" : 0,
						"pbm" : 0.006604999999999999,
						"pbe" : 0.00042599999999999995
					}
				]
			},
			{
				"as" : 9031,
				"relay" : 4,
				"bwa" : 255411,
				"bwc" : 54082,
				"fast" : 2,
				"stable" : 1,
				"guard" : 0,
				"middle" : 4,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000046,
				"pbg" : 0,
				"pbm" : 0.00013,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "BE",
						"relay" : 4,
						"bwa" : 255411,
						"bwc" : 54082,
						"fast" : 2,
						"stable" : 1,
						"guard" : 0,
						"middle" : 4,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000046,
						"pbg" : 0,
						"pbm" : 0.00013,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 12322,
				"relay" : 47,
				"bwa" : 10713336,
				"bwc" : 6301108,
				"fast" : 30,
				"stable" : 26,
				"guard" : 2,
				"middle" : 47,
				"exit" : 15,
				"dir" : 19,
				"pbr" : 0.002014,
				"pbg" : 0.003824,
				"pbm" : 0.0020570000000000002,
				"pbe" : 0.00015800000000000002,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 47,
						"bwa" : 10713336,
						"bwc" : 6301108,
						"fast" : 30,
						"stable" : 26,
						"guard" : 2,
						"middle" : 47,
						"exit" : 15,
						"dir" : 19,
						"pbr" : 0.002014,
						"pbg" : 0.003824,
						"pbm" : 0.0020570000000000002,
						"pbe" : 0.00015800000000000002
					}
				]
			},
			{
				"as" : 9365,
				"relay" : 1,
				"bwa" : 409600,
				"bwc" : 141784,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.00003,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.00009,
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 409600,
						"bwc" : 141784,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.00003,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.00009
					}
				]
			},
			{
				"as" : 34011,
				"relay" : 7,
				"bwa" : 14948334,
				"bwc" : 6687622,
				"fast" : 7,
				"stable" : 5,
				"guard" : 5,
				"middle" : 7,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.007698,
				"pbg" : 0.009539,
				"pbm" : 0.013555000000000001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 7,
						"bwa" : 14948334,
						"bwc" : 6687622,
						"fast" : 7,
						"stable" : 5,
						"guard" : 5,
						"middle" : 7,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.007698,
						"pbg" : 0.009539,
						"pbm" : 0.013555000000000001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 29691,
				"relay" : 3,
				"bwa" : 2609152,
				"bwc" : 1743540,
				"fast" : 3,
				"stable" : 2,
				"guard" : 1,
				"middle" : 3,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.00043900000000000005,
				"pbg" : 0.000189,
				"pbm" : 0.0011279999999999999,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 3,
						"bwa" : 2609152,
						"bwc" : 1743540,
						"fast" : 3,
						"stable" : 2,
						"guard" : 1,
						"middle" : 3,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.00043900000000000005,
						"pbg" : 0.000189,
						"pbm" : 0.0011279999999999999,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 36351,
				"relay" : 31,
				"bwa" : 27405168,
				"bwc" : 16325980,
				"fast" : 31,
				"stable" : 27,
				"guard" : 17,
				"middle" : 31,
				"exit" : 4,
				"dir" : 19,
				"pbr" : 0.006912,
				"pbg" : 0.010448999999999998,
				"pbm" : 0.006691,
				"pbe" : 0.0035960000000000002,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 26,
						"bwa" : 21808282,
						"bwc" : 13954613,
						"fast" : 26,
						"stable" : 22,
						"guard" : 12,
						"middle" : 26,
						"exit" : 4,
						"dir" : 14,
						"pbr" : 0.006272,
						"pbg" : 0.009074,
						"pbm" : 0.006148,
						"pbe" : 0.0035960000000000002
					},
					{
						"cc" : "SG",
						"relay" : 4,
						"bwa" : 4286166,
						"bwc" : 1424981,
						"fast" : 4,
						"stable" : 4,
						"guard" : 4,
						"middle" : 4,
						"exit" : 0,
						"dir" : 4,
						"pbr" : 0.000195,
						"pbg" : 0.000418,
						"pbm" : 0.000165,
						"pbe" : 0
					},
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 1310720,
						"bwc" : 946386,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000445,
						"pbg" : 0.000957,
						"pbm" : 0.000378,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 9143,
				"relay" : 15,
				"bwa" : 2985860,
				"bwc" : 1384809,
				"fast" : 15,
				"stable" : 8,
				"guard" : 4,
				"middle" : 15,
				"exit" : 3,
				"dir" : 11,
				"pbr" : 0.000433,
				"pbg" : 0.0005239999999999999,
				"pbm" : 0.000665,
				"pbe" : 0.000108,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 15,
						"bwa" : 2985860,
						"bwc" : 1384809,
						"fast" : 15,
						"stable" : 8,
						"guard" : 4,
						"middle" : 15,
						"exit" : 3,
						"dir" : 11,
						"pbr" : 0.000433,
						"pbg" : 0.0005239999999999999,
						"pbm" : 0.000665,
						"pbe" : 0.000108
					}
				]
			},
			{
				"as" : 20880,
				"relay" : 1,
				"bwa" : 132583,
				"bwc" : 17428,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.00001,
				"pbg" : 0,
				"pbm" : 0.000029,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 132583,
						"bwc" : 17428,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.00001,
						"pbg" : 0,
						"pbm" : 0.000029,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 25795,
				"relay" : 3,
				"bwa" : 563200,
				"bwc" : 213415,
				"fast" : 3,
				"stable" : 3,
				"guard" : 1,
				"middle" : 3,
				"exit" : 1,
				"dir" : 3,
				"pbr" : 0.000077,
				"pbg" : 0.000068,
				"pbm" : 0.00006199999999999999,
				"pbe" : 0.000099,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 3,
						"bwa" : 563200,
						"bwc" : 213415,
						"fast" : 3,
						"stable" : 3,
						"guard" : 1,
						"middle" : 3,
						"exit" : 1,
						"dir" : 3,
						"pbr" : 0.000077,
						"pbg" : 0.000068,
						"pbm" : 0.00006199999999999999,
						"pbe" : 0.000099
					}
				]
			},
			{
				"as" : 6939,
				"relay" : 28,
				"bwa" : 30935823,
				"bwc" : 21092507,
				"fast" : 28,
				"stable" : 21,
				"guard" : 11,
				"middle" : 28,
				"exit" : 4,
				"dir" : 14,
				"pbr" : 0.008320999999999999,
				"pbg" : 0.0064199999999999995,
				"pbm" : 0.010387,
				"pbe" : 0.008152,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 28,
						"bwa" : 30935823,
						"bwc" : 21092507,
						"fast" : 28,
						"stable" : 21,
						"guard" : 11,
						"middle" : 28,
						"exit" : 4,
						"dir" : 14,
						"pbr" : 0.008320999999999999,
						"pbg" : 0.0064199999999999995,
						"pbm" : 0.010387,
						"pbe" : 0.008152
					}
				]
			},
			{
				"as" : 31103,
				"relay" : 11,
				"bwa" : 31037440,
				"bwc" : 22014547,
				"fast" : 11,
				"stable" : 10,
				"guard" : 9,
				"middle" : 11,
				"exit" : 4,
				"dir" : 7,
				"pbr" : 0.007383,
				"pbg" : 0.011465999999999999,
				"pbm" : 0.004849999999999999,
				"pbe" : 0.005828,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 10,
						"bwa" : 30935040,
						"bwc" : 21966075,
						"fast" : 10,
						"stable" : 9,
						"guard" : 9,
						"middle" : 10,
						"exit" : 4,
						"dir" : 6,
						"pbr" : 0.0073750000000000005,
						"pbg" : 0.011465999999999999,
						"pbm" : 0.0048259999999999996,
						"pbe" : 0.005828
					},
					{
						"cc" : "IT",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 48472,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 19262,
				"relay" : 56,
				"bwa" : 50315402,
				"bwc" : 33858126,
				"fast" : 54,
				"stable" : 34,
				"guard" : 16,
				"middle" : 56,
				"exit" : 4,
				"dir" : 48,
				"pbr" : 0.011604999999999999,
				"pbg" : 0.014811000000000001,
				"pbm" : 0.019461999999999993,
				"pbe" : 0.000552,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 56,
						"bwa" : 50315402,
						"bwc" : 33858126,
						"fast" : 54,
						"stable" : 34,
						"guard" : 16,
						"middle" : 56,
						"exit" : 4,
						"dir" : 48,
						"pbr" : 0.011604999999999999,
						"pbg" : 0.014811000000000001,
						"pbm" : 0.019461999999999993,
						"pbe" : 0.000552
					}
				]
			},
			{
				"as" : 5408,
				"relay" : 13,
				"bwa" : 23046745,
				"bwc" : 14614145,
				"fast" : 12,
				"stable" : 9,
				"guard" : 8,
				"middle" : 13,
				"exit" : 3,
				"dir" : 11,
				"pbr" : 0.004436,
				"pbg" : 0.005557,
				"pbm" : 0.00428,
				"pbe" : 0.003469,
				"countries" : [
					{
						"cc" : "GR",
						"relay" : 13,
						"bwa" : 23046745,
						"bwc" : 14614145,
						"fast" : 12,
						"stable" : 9,
						"guard" : 8,
						"middle" : 13,
						"exit" : 3,
						"dir" : 11,
						"pbr" : 0.004436,
						"pbg" : 0.005557,
						"pbm" : 0.00428,
						"pbe" : 0.003469
					}
				]
			},
			{
				"as" : 25780,
				"relay" : 1,
				"bwa" : 56320,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 56320,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 5577,
				"relay" : 30,
				"bwa" : 13202432,
				"bwc" : 8500376,
				"fast" : 14,
				"stable" : 23,
				"guard" : 8,
				"middle" : 30,
				"exit" : 18,
				"dir" : 10,
				"pbr" : 0.0030699999999999994,
				"pbg" : 0.004818,
				"pbm" : 0.004071,
				"pbe" : 0.00031900000000000006,
				"countries" : [
					{
						"cc" : "LU",
						"relay" : 30,
						"bwa" : 13202432,
						"bwc" : 8500376,
						"fast" : 14,
						"stable" : 23,
						"guard" : 8,
						"middle" : 30,
						"exit" : 18,
						"dir" : 10,
						"pbr" : 0.0030699999999999994,
						"pbg" : 0.004818,
						"pbm" : 0.004071,
						"pbe" : 0.00031900000000000006
					}
				]
			},
			{
				"as" : 20773,
				"relay" : 24,
				"bwa" : 33510973,
				"bwc" : 23111480,
				"fast" : 21,
				"stable" : 22,
				"guard" : 9,
				"middle" : 24,
				"exit" : 4,
				"dir" : 5,
				"pbr" : 0.012267,
				"pbg" : 0.0051,
				"pbm" : 0.01513,
				"pbe" : 0.016577,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 24,
						"bwa" : 33510973,
						"bwc" : 23111480,
						"fast" : 21,
						"stable" : 22,
						"guard" : 9,
						"middle" : 24,
						"exit" : 4,
						"dir" : 5,
						"pbr" : 0.012267,
						"pbg" : 0.0051,
						"pbm" : 0.01513,
						"pbe" : 0.016577
					}
				]
			},
			{
				"as" : 29562,
				"relay" : 15,
				"bwa" : 2469871,
				"bwc" : 826065,
				"fast" : 14,
				"stable" : 8,
				"guard" : 1,
				"middle" : 15,
				"exit" : 2,
				"dir" : 11,
				"pbr" : 0.00019500000000000005,
				"pbg" : 0.000035,
				"pbm" : 0.000511,
				"pbe" : 0.000044999999999999996,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 15,
						"bwa" : 2469871,
						"bwc" : 826065,
						"fast" : 14,
						"stable" : 8,
						"guard" : 1,
						"middle" : 15,
						"exit" : 2,
						"dir" : 11,
						"pbr" : 0.00019500000000000005,
						"pbg" : 0.000035,
						"pbm" : 0.000511,
						"pbe" : 0.000044999999999999996
					}
				]
			},
			{
				"as" : 36024,
				"relay" : 2,
				"bwa" : 46080,
				"bwc" : 17465,
				"fast" : 0,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 2,
				"dir" : 0,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000018,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 46080,
						"bwc" : 17465,
						"fast" : 0,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 2,
						"dir" : 0,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000018
					}
				]
			},
			{
				"as" : 31334,
				"relay" : 24,
				"bwa" : 3633046,
				"bwc" : 1040893,
				"fast" : 20,
				"stable" : 9,
				"guard" : 3,
				"middle" : 24,
				"exit" : 1,
				"dir" : 14,
				"pbr" : 0.000458,
				"pbg" : 0.000609,
				"pbm" : 0.000747,
				"pbe" : 0.00002,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 24,
						"bwa" : 3633046,
						"bwc" : 1040893,
						"fast" : 20,
						"stable" : 9,
						"guard" : 3,
						"middle" : 24,
						"exit" : 1,
						"dir" : 14,
						"pbr" : 0.000458,
						"pbg" : 0.000609,
						"pbm" : 0.000747,
						"pbe" : 0.00002
					}
				]
			},
			{
				"as" : 13184,
				"relay" : 17,
				"bwa" : 1985910,
				"bwc" : 754227,
				"fast" : 14,
				"stable" : 1,
				"guard" : 0,
				"middle" : 17,
				"exit" : 3,
				"dir" : 11,
				"pbr" : 0.00021099999999999998,
				"pbg" : 0,
				"pbm" : 0.0005820000000000003,
				"pbe" : 0.000049,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 17,
						"bwa" : 1985910,
						"bwc" : 754227,
						"fast" : 14,
						"stable" : 1,
						"guard" : 0,
						"middle" : 17,
						"exit" : 3,
						"dir" : 11,
						"pbr" : 0.00021099999999999998,
						"pbg" : 0,
						"pbm" : 0.0005820000000000003,
						"pbe" : 0.000049
					}
				]
			},
			{
				"as" : 32875,
				"relay" : 3,
				"bwa" : 182272,
				"bwc" : 56992,
				"fast" : 3,
				"stable" : 1,
				"guard" : 0,
				"middle" : 3,
				"exit" : 0,
				"dir" : 3,
				"pbr" : 0.000014999999999999999,
				"pbg" : 0,
				"pbm" : 0.000044,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 3,
						"bwa" : 182272,
						"bwc" : 56992,
						"fast" : 3,
						"stable" : 1,
						"guard" : 0,
						"middle" : 3,
						"exit" : 0,
						"dir" : 3,
						"pbr" : 0.000014999999999999999,
						"pbg" : 0,
						"pbm" : 0.000044,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 25653,
				"relay" : 2,
				"bwa" : 1159168,
				"bwc" : 571568,
				"fast" : 1,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000146,
				"pbg" : 0.00008,
				"pbm" : 0.00008900000000000001,
				"pbe" : 0.000269,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 1159168,
						"bwc" : 571568,
						"fast" : 1,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000146,
						"pbg" : 0.00008,
						"pbm" : 0.00008900000000000001,
						"pbe" : 0.000269
					}
				]
			},
			{
				"as" : 14,
				"relay" : 3,
				"bwa" : 699835,
				"bwc" : 189958,
				"fast" : 3,
				"stable" : 2,
				"guard" : 1,
				"middle" : 3,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000028000000000000003,
				"pbg" : 0.000023,
				"pbm" : 0.00006,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 3,
						"bwa" : 699835,
						"bwc" : 189958,
						"fast" : 3,
						"stable" : 2,
						"guard" : 1,
						"middle" : 3,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000028000000000000003,
						"pbg" : 0.000023,
						"pbm" : 0.00006,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 23148,
				"relay" : 3,
				"bwa" : 672838,
				"bwc" : 68043,
				"fast" : 3,
				"stable" : 3,
				"guard" : 1,
				"middle" : 3,
				"exit" : 3,
				"dir" : 3,
				"pbr" : 0.000021000000000000002,
				"pbg" : 0.000007,
				"pbm" : 0.000007,
				"pbe" : 0.000049999999999999996,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 3,
						"bwa" : 672838,
						"bwc" : 68043,
						"fast" : 3,
						"stable" : 3,
						"guard" : 1,
						"middle" : 3,
						"exit" : 3,
						"dir" : 3,
						"pbr" : 0.000021000000000000002,
						"pbg" : 0.000007,
						"pbm" : 0.000007,
						"pbe" : 0.000049999999999999996
					}
				]
			},
			{
				"as" : 9371,
				"relay" : 4,
				"bwa" : 3421426,
				"bwc" : 863207,
				"fast" : 4,
				"stable" : 4,
				"guard" : 3,
				"middle" : 4,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000208,
				"pbg" : 0.00043400000000000003,
				"pbm" : 0.000191,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 4,
						"bwa" : 3421426,
						"bwc" : 863207,
						"fast" : 4,
						"stable" : 4,
						"guard" : 3,
						"middle" : 4,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000208,
						"pbg" : 0.00043400000000000003,
						"pbm" : 0.000191,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 15756,
				"relay" : 9,
				"bwa" : 460800,
				"bwc" : 5097,
				"fast" : 9,
				"stable" : 0,
				"guard" : 0,
				"middle" : 9,
				"exit" : 9,
				"dir" : 0,
				"pbr" : 0.000032999999999999996,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000096,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 9,
						"bwa" : 460800,
						"bwc" : 5097,
						"fast" : 9,
						"stable" : 0,
						"guard" : 0,
						"middle" : 9,
						"exit" : 9,
						"dir" : 0,
						"pbr" : 0.000032999999999999996,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000096
					}
				]
			},
			{
				"as" : 42652,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 97559,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000014,
				"pbg" : 0,
				"pbm" : 0.000043,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 97559,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000014,
						"pbg" : 0,
						"pbm" : 0.000043,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 21844,
				"relay" : 7,
				"bwa" : 2415732,
				"bwc" : 741012,
				"fast" : 7,
				"stable" : 3,
				"guard" : 0,
				"middle" : 7,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.00023500000000000002,
				"pbg" : 0,
				"pbm" : 0.00037999999999999997,
				"pbe" : 0.000323,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 7,
						"bwa" : 2415732,
						"bwc" : 741012,
						"fast" : 7,
						"stable" : 3,
						"guard" : 0,
						"middle" : 7,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.00023500000000000002,
						"pbg" : 0,
						"pbm" : 0.00037999999999999997,
						"pbe" : 0.000323
					}
				]
			},
			{
				"as" : 34823,
				"relay" : 3,
				"bwa" : 6590271,
				"bwc" : 3765842,
				"fast" : 3,
				"stable" : 2,
				"guard" : 2,
				"middle" : 3,
				"exit" : 3,
				"dir" : 3,
				"pbr" : 0.001283,
				"pbg" : 0.00054,
				"pbm" : 0.00054,
				"pbe" : 0.00277,
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 3,
						"bwa" : 6590271,
						"bwc" : 3765842,
						"fast" : 3,
						"stable" : 2,
						"guard" : 2,
						"middle" : 3,
						"exit" : 3,
						"dir" : 3,
						"pbr" : 0.001283,
						"pbg" : 0.00054,
						"pbm" : 0.00054,
						"pbe" : 0.00277
					}
				]
			},
			{
				"as" : 41164,
				"relay" : 5,
				"bwa" : 1974272,
				"bwc" : 777549,
				"fast" : 5,
				"stable" : 2,
				"guard" : 2,
				"middle" : 5,
				"exit" : 1,
				"dir" : 3,
				"pbr" : 0.000301,
				"pbg" : 0.000584,
				"pbm" : 0.00028599999999999996,
				"pbe" : 0.000034,
				"countries" : [
					{
						"cc" : "NO",
						"relay" : 5,
						"bwa" : 1974272,
						"bwc" : 777549,
						"fast" : 5,
						"stable" : 2,
						"guard" : 2,
						"middle" : 5,
						"exit" : 1,
						"dir" : 3,
						"pbr" : 0.000301,
						"pbg" : 0.000584,
						"pbm" : 0.00028599999999999996,
						"pbe" : 0.000034
					}
				]
			},
			{
				"as" : 3842,
				"relay" : 8,
				"bwa" : 3134948,
				"bwc" : 1651559,
				"fast" : 8,
				"stable" : 7,
				"guard" : 2,
				"middle" : 8,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.00038700000000000003,
				"pbg" : 0.000125,
				"pbm" : 0.001038,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 3134948,
						"bwc" : 1651559,
						"fast" : 8,
						"stable" : 7,
						"guard" : 2,
						"middle" : 8,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.00038700000000000003,
						"pbg" : 0.000125,
						"pbm" : 0.001038,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 15897,
				"relay" : 1,
				"bwa" : 14012,
				"bwc" : 1255,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000006,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "TR",
						"relay" : 1,
						"bwa" : 14012,
						"bwc" : 1255,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000006,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 5769,
				"relay" : 4,
				"bwa" : 303104,
				"bwc" : 32065,
				"fast" : 2,
				"stable" : 3,
				"guard" : 0,
				"middle" : 4,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000017,
				"pbg" : 0,
				"pbm" : 0.000042000000000000004,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 4,
						"bwa" : 303104,
						"bwc" : 32065,
						"fast" : 2,
						"stable" : 3,
						"guard" : 0,
						"middle" : 4,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000017,
						"pbg" : 0,
						"pbm" : 0.000042000000000000004,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 8151,
				"relay" : 2,
				"bwa" : 75068,
				"bwc" : 3649,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "MX",
						"relay" : 2,
						"bwa" : 75068,
						"bwc" : 3649,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 1706,
				"relay" : 1,
				"bwa" : 655360,
				"bwc" : 493618,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000142,
				"pbg" : 0.000306,
				"pbm" : 0.000121,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 655360,
						"bwc" : 493618,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000142,
						"pbg" : 0.000306,
						"pbm" : 0.000121,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 29169,
				"relay" : 13,
				"bwa" : 14474640,
				"bwc" : 12303681,
				"fast" : 12,
				"stable" : 13,
				"guard" : 11,
				"middle" : 13,
				"exit" : 4,
				"dir" : 9,
				"pbr" : 0.0031860000000000005,
				"pbg" : 0.005209999999999999,
				"pbm" : 0.002445,
				"pbe" : 0.001901,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 12,
						"bwa" : 13809040,
						"bwc" : 11656919,
						"fast" : 11,
						"stable" : 12,
						"guard" : 10,
						"middle" : 12,
						"exit" : 4,
						"dir" : 8,
						"pbr" : 0.003105,
						"pbg" : 0.005036,
						"pbm" : 0.002376,
						"pbe" : 0.001901
					},
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 665600,
						"bwc" : 646762,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000081,
						"pbg" : 0.000174,
						"pbm" : 0.000069,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 3265,
				"relay" : 23,
				"bwa" : 43818719,
				"bwc" : 33622197,
				"fast" : 18,
				"stable" : 17,
				"guard" : 10,
				"middle" : 23,
				"exit" : 3,
				"dir" : 12,
				"pbr" : 0.009632999999999996,
				"pbg" : 0.020592,
				"pbm" : 0.008272000000000003,
				"pbe" : 0.000039,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 22,
						"bwa" : 38575839,
						"bwc" : 28802462,
						"fast" : 17,
						"stable" : 16,
						"guard" : 9,
						"middle" : 22,
						"exit" : 3,
						"dir" : 11,
						"pbr" : 0.008371999999999996,
						"pbg" : 0.017879,
						"pbm" : 0.0072000000000000015,
						"pbe" : 0.000039
					},
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 5242880,
						"bwc" : 4819735,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.001261,
						"pbg" : 0.002713,
						"pbm" : 0.001072,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8359,
				"relay" : 4,
				"bwa" : 190440,
				"bwc" : 49799,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 4,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000009999999999999999,
				"pbg" : 0,
				"pbm" : 0.000027,
				"pbe" : 0.000003,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 4,
						"bwa" : 190440,
						"bwc" : 49799,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 4,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000009999999999999999,
						"pbg" : 0,
						"pbm" : 0.000027,
						"pbe" : 0.000003
					}
				]
			},
			{
				"as" : 29017,
				"relay" : 1,
				"bwa" : 153600,
				"bwc" : 93093,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000032,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000096,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 153600,
						"bwc" : 93093,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000032,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000096
					}
				]
			},
			{
				"as" : 39309,
				"relay" : 2,
				"bwa" : 1310720,
				"bwc" : 780749,
				"fast" : 2,
				"stable" : 2,
				"guard" : 2,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000102,
				"pbg" : 0.000219,
				"pbm" : 0.000086,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 1310720,
						"bwc" : 780749,
						"fast" : 2,
						"stable" : 2,
						"guard" : 2,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000102,
						"pbg" : 0.000219,
						"pbm" : 0.000086,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 812,
				"relay" : 3,
				"bwa" : 130526,
				"bwc" : 28808,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 3,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000012,
				"pbg" : 0,
				"pbm" : 0.000035,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 3,
						"bwa" : 130526,
						"bwc" : 28808,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 3,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000012,
						"pbg" : 0,
						"pbm" : 0.000035,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8455,
				"relay" : 2,
				"bwa" : 512000,
				"bwc" : 340125,
				"fast" : 2,
				"stable" : 2,
				"guard" : 2,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000081,
				"pbg" : 0.000174,
				"pbm" : 0.000069,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 512000,
						"bwc" : 340125,
						"fast" : 2,
						"stable" : 2,
						"guard" : 2,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000081,
						"pbg" : 0.000174,
						"pbm" : 0.000069,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 31250,
				"relay" : 1,
				"bwa" : 444617,
				"bwc" : 111677,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000029,
				"pbg" : 0,
				"pbm" : 0.000087,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "BG",
						"relay" : 1,
						"bwa" : 444617,
						"bwc" : 111677,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000029,
						"pbg" : 0,
						"pbm" : 0.000087,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 57963,
				"relay" : 4,
				"bwa" : 3339772,
				"bwc" : 2086384,
				"fast" : 4,
				"stable" : 2,
				"guard" : 1,
				"middle" : 4,
				"exit" : 0,
				"dir" : 3,
				"pbr" : 0.000433,
				"pbg" : 0.000658,
				"pbm" : 0.0006439999999999999,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NO",
						"relay" : 4,
						"bwa" : 3339772,
						"bwc" : 2086384,
						"fast" : 4,
						"stable" : 2,
						"guard" : 1,
						"middle" : 4,
						"exit" : 0,
						"dir" : 3,
						"pbr" : 0.000433,
						"pbg" : 0.000658,
						"pbm" : 0.0006439999999999999,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 577,
				"relay" : 5,
				"bwa" : 547449,
				"bwc" : 83937,
				"fast" : 2,
				"stable" : 2,
				"guard" : 0,
				"middle" : 5,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000052000000000000004,
				"pbg" : 0,
				"pbm" : 0.000148,
				"pbe" : 0.000008,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 5,
						"bwa" : 547449,
						"bwc" : 83937,
						"fast" : 2,
						"stable" : 2,
						"guard" : 0,
						"middle" : 5,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000052000000000000004,
						"pbg" : 0,
						"pbm" : 0.000148,
						"pbe" : 0.000008
					}
				]
			},
			{
				"as" : 11427,
				"relay" : 18,
				"bwa" : 3241850,
				"bwc" : 908611,
				"fast" : 15,
				"stable" : 5,
				"guard" : 2,
				"middle" : 18,
				"exit" : 2,
				"dir" : 14,
				"pbr" : 0.00032700000000000003,
				"pbg" : 0.000315,
				"pbm" : 0.000623,
				"pbe" : 0.000046,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 18,
						"bwa" : 3241850,
						"bwc" : 908611,
						"fast" : 15,
						"stable" : 5,
						"guard" : 2,
						"middle" : 18,
						"exit" : 2,
						"dir" : 14,
						"pbr" : 0.00032700000000000003,
						"pbg" : 0.000315,
						"pbm" : 0.000623,
						"pbe" : 0.000046
					}
				]
			},
			{
				"as" : 198599,
				"relay" : 2,
				"bwa" : 872321,
				"bwc" : 738355,
				"fast" : 2,
				"stable" : 1,
				"guard" : 1,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000126,
				"pbg" : 0.000265,
				"pbm" : 0.000114,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 872321,
						"bwc" : 738355,
						"fast" : 2,
						"stable" : 1,
						"guard" : 1,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000126,
						"pbg" : 0.000265,
						"pbm" : 0.000114,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 6128,
				"relay" : 10,
				"bwa" : 2238996,
				"bwc" : 1064724,
				"fast" : 10,
				"stable" : 8,
				"guard" : 3,
				"middle" : 10,
				"exit" : 0,
				"dir" : 6,
				"pbr" : 0.00047400000000000003,
				"pbg" : 0.000914,
				"pbm" : 0.000511,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 10,
						"bwa" : 2238996,
						"bwc" : 1064724,
						"fast" : 10,
						"stable" : 8,
						"guard" : 3,
						"middle" : 10,
						"exit" : 0,
						"dir" : 6,
						"pbr" : 0.00047400000000000003,
						"pbg" : 0.000914,
						"pbm" : 0.000511,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 24961,
				"relay" : 12,
				"bwa" : 10998430,
				"bwc" : 7489900,
				"fast" : 12,
				"stable" : 11,
				"guard" : 6,
				"middle" : 12,
				"exit" : 1,
				"dir" : 7,
				"pbr" : 0.005098,
				"pbg" : 0.010476,
				"pbm" : 0.004368,
				"pbe" : 0.000453,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 12,
						"bwa" : 10998430,
						"bwc" : 7489900,
						"fast" : 12,
						"stable" : 11,
						"guard" : 6,
						"middle" : 12,
						"exit" : 1,
						"dir" : 7,
						"pbr" : 0.005098,
						"pbg" : 0.010476,
						"pbm" : 0.004368,
						"pbe" : 0.000453
					}
				]
			},
			{
				"as" : 22219,
				"relay" : 8,
				"bwa" : 66112614,
				"bwc" : 46614971,
				"fast" : 8,
				"stable" : 8,
				"guard" : 8,
				"middle" : 8,
				"exit" : 8,
				"dir" : 8,
				"pbr" : 0.023691,
				"pbg" : 0.013277999999999998,
				"pbm" : 0.013276000000000003,
				"pbe" : 0.044511999999999996,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 66112614,
						"bwc" : 46614971,
						"fast" : 8,
						"stable" : 8,
						"guard" : 8,
						"middle" : 8,
						"exit" : 8,
						"dir" : 8,
						"pbr" : 0.023691,
						"pbg" : 0.013277999999999998,
						"pbm" : 0.013276000000000003,
						"pbe" : 0.044511999999999996
					}
				]
			},
			{
				"as" : 35425,
				"relay" : 6,
				"bwa" : 6348733,
				"bwc" : 5297917,
				"fast" : 4,
				"stable" : 3,
				"guard" : 1,
				"middle" : 6,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.0016690000000000001,
				"pbg" : 0.003403,
				"pbm" : 0.0016049999999999999,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 6,
						"bwa" : 6348733,
						"bwc" : 5297917,
						"fast" : 4,
						"stable" : 3,
						"guard" : 1,
						"middle" : 6,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.0016690000000000001,
						"pbg" : 0.003403,
						"pbm" : 0.0016049999999999999,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 28573,
				"relay" : 6,
				"bwa" : 427951,
				"bwc" : 70039,
				"fast" : 5,
				"stable" : 1,
				"guard" : 0,
				"middle" : 6,
				"exit" : 0,
				"dir" : 5,
				"pbr" : 0.000014,
				"pbg" : 0,
				"pbm" : 0.000042,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 6,
						"bwa" : 427951,
						"bwc" : 70039,
						"fast" : 5,
						"stable" : 1,
						"guard" : 0,
						"middle" : 6,
						"exit" : 0,
						"dir" : 5,
						"pbr" : 0.000014,
						"pbg" : 0,
						"pbm" : 0.000042,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8331,
				"relay" : 3,
				"bwa" : 5403951,
				"bwc" : 5060717,
				"fast" : 3,
				"stable" : 1,
				"guard" : 1,
				"middle" : 3,
				"exit" : 0,
				"dir" : 3,
				"pbr" : 0.004091999999999999,
				"pbg" : 0.008778,
				"pbm" : 0.003497,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 3,
						"bwa" : 5403951,
						"bwc" : 5060717,
						"fast" : 3,
						"stable" : 1,
						"guard" : 1,
						"middle" : 3,
						"exit" : 0,
						"dir" : 3,
						"pbr" : 0.004091999999999999,
						"pbg" : 0.008778,
						"pbm" : 0.003497,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12732,
				"relay" : 1,
				"bwa" : 14048271,
				"bwc" : 11177189,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.00383,
				"pbg" : 0.002147,
				"pbm" : 0.002146,
				"pbe" : 0.007196,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 14048271,
						"bwc" : 11177189,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.00383,
						"pbg" : 0.002147,
						"pbm" : 0.002146,
						"pbe" : 0.007196
					}
				]
			},
			{
				"as" : 8402,
				"relay" : 17,
				"bwa" : 11947127,
				"bwc" : 4894782,
				"fast" : 17,
				"stable" : 5,
				"guard" : 4,
				"middle" : 17,
				"exit" : 2,
				"dir" : 14,
				"pbr" : 0.0029740000000000005,
				"pbg" : 0.0014100000000000002,
				"pbm" : 0.007470000000000001,
				"pbe" : 0.000039,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 17,
						"bwa" : 11947127,
						"bwc" : 4894782,
						"fast" : 17,
						"stable" : 5,
						"guard" : 4,
						"middle" : 17,
						"exit" : 2,
						"dir" : 14,
						"pbr" : 0.0029740000000000005,
						"pbg" : 0.0014100000000000002,
						"pbm" : 0.007470000000000001,
						"pbe" : 0.000039
					}
				]
			},
			{
				"as" : 8473,
				"relay" : 14,
				"bwa" : 20215973,
				"bwc" : 14375936,
				"fast" : 13,
				"stable" : 13,
				"guard" : 6,
				"middle" : 14,
				"exit" : 6,
				"dir" : 11,
				"pbr" : 0.004088,
				"pbg" : 0.0013390000000000001,
				"pbm" : 0.0017590000000000001,
				"pbe" : 0.009172,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 14,
						"bwa" : 20215973,
						"bwc" : 14375936,
						"fast" : 13,
						"stable" : 13,
						"guard" : 6,
						"middle" : 14,
						"exit" : 6,
						"dir" : 11,
						"pbr" : 0.004088,
						"pbg" : 0.0013390000000000001,
						"pbm" : 0.0017590000000000001,
						"pbe" : 0.009172
					}
				]
			},
			{
				"as" : 1403,
				"relay" : 1,
				"bwa" : 76800,
				"bwc" : 51789,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000005,
				"pbg" : 0,
				"pbm" : 0.000014,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 76800,
						"bwc" : 51789,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000005,
						"pbg" : 0,
						"pbm" : 0.000014,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 16202,
				"relay" : 2,
				"bwa" : 513348,
				"bwc" : 102358,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000039,
				"pbg" : 0,
				"pbm" : 0.000038,
				"pbe" : 0.000077,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 513348,
						"bwc" : 102358,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000039,
						"pbg" : 0,
						"pbm" : 0.000038,
						"pbe" : 0.000077
					}
				]
			},
			{
				"as" : 55897,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 1395435,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000098,
				"pbg" : 0.00021,
				"pbm" : 0.000083,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 1395435,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000098,
						"pbg" : 0.00021,
						"pbm" : 0.000083,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 50613,
				"relay" : 7,
				"bwa" : 6102882,
				"bwc" : 5002605,
				"fast" : 6,
				"stable" : 7,
				"guard" : 1,
				"middle" : 7,
				"exit" : 3,
				"dir" : 4,
				"pbr" : 0.0014179999999999998,
				"pbg" : 0.002795,
				"pbm" : 0.0012649999999999998,
				"pbe" : 0.00019099999999999998,
				"countries" : [
					{
						"cc" : "IS",
						"relay" : 7,
						"bwa" : 6102882,
						"bwc" : 5002605,
						"fast" : 6,
						"stable" : 7,
						"guard" : 1,
						"middle" : 7,
						"exit" : 3,
						"dir" : 4,
						"pbr" : 0.0014179999999999998,
						"pbg" : 0.002795,
						"pbm" : 0.0012649999999999998,
						"pbe" : 0.00019099999999999998
					}
				]
			},
			{
				"as" : 22747,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 198,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 198,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 39651,
				"relay" : 9,
				"bwa" : 3727772,
				"bwc" : 1620955,
				"fast" : 8,
				"stable" : 6,
				"guard" : 3,
				"middle" : 9,
				"exit" : 4,
				"dir" : 7,
				"pbr" : 0.000687,
				"pbg" : 0.000266,
				"pbm" : 0.0005520000000000001,
				"pbe" : 0.001243,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 9,
						"bwa" : 3727772,
						"bwc" : 1620955,
						"fast" : 8,
						"stable" : 6,
						"guard" : 3,
						"middle" : 9,
						"exit" : 4,
						"dir" : 7,
						"pbr" : 0.000687,
						"pbg" : 0.000266,
						"pbm" : 0.0005520000000000001,
						"pbe" : 0.001243
					}
				]
			},
			{
				"as" : 20115,
				"relay" : 24,
				"bwa" : 4817220,
				"bwc" : 1227245,
				"fast" : 22,
				"stable" : 14,
				"guard" : 3,
				"middle" : 24,
				"exit" : 1,
				"dir" : 16,
				"pbr" : 0.00046900000000000007,
				"pbg" : 0.000451,
				"pbm" : 0.000951,
				"pbe" : 0.00001,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 24,
						"bwa" : 4817220,
						"bwc" : 1227245,
						"fast" : 22,
						"stable" : 14,
						"guard" : 3,
						"middle" : 24,
						"exit" : 1,
						"dir" : 16,
						"pbr" : 0.00046900000000000007,
						"pbg" : 0.000451,
						"pbm" : 0.000951,
						"pbe" : 0.00001
					}
				]
			},
			{
				"as" : 1312,
				"relay" : 3,
				"bwa" : 10158080,
				"bwc" : 9370091,
				"fast" : 3,
				"stable" : 3,
				"guard" : 3,
				"middle" : 3,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.003517,
				"pbg" : 0.007565,
				"pbm" : 0.002989,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 3,
						"bwa" : 10158080,
						"bwc" : 9370091,
						"fast" : 3,
						"stable" : 3,
						"guard" : 3,
						"middle" : 3,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.003517,
						"pbg" : 0.007565,
						"pbm" : 0.002989,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 46457,
				"relay" : 8,
				"bwa" : 9031936,
				"bwc" : 5038653,
				"fast" : 8,
				"stable" : 8,
				"guard" : 3,
				"middle" : 8,
				"exit" : 8,
				"dir" : 4,
				"pbr" : 0.0022459999999999997,
				"pbg" : 0.000732,
				"pbm" : 0.000732,
				"pbe" : 0.0052720000000000015,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 9031936,
						"bwc" : 5038653,
						"fast" : 8,
						"stable" : 8,
						"guard" : 3,
						"middle" : 8,
						"exit" : 8,
						"dir" : 4,
						"pbr" : 0.0022459999999999997,
						"pbg" : 0.000732,
						"pbm" : 0.000732,
						"pbe" : 0.0052720000000000015
					}
				]
			},
			{
				"as" : 2847,
				"relay" : 1,
				"bwa" : 6291456,
				"bwc" : 6234298,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.002913,
				"pbg" : 0.006265,
				"pbm" : 0.002475,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "LT",
						"relay" : 1,
						"bwa" : 6291456,
						"bwc" : 6234298,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.002913,
						"pbg" : 0.006265,
						"pbm" : 0.002475,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12843,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 478088,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000088,
				"pbg" : 0.000189,
				"pbm" : 0.000075,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 478088,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000088,
						"pbg" : 0.000189,
						"pbm" : 0.000075,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 45570,
				"relay" : 3,
				"bwa" : 2975867,
				"bwc" : 1226733,
				"fast" : 3,
				"stable" : 2,
				"guard" : 2,
				"middle" : 3,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.00039,
				"pbg" : 0.00020800000000000001,
				"pbm" : 0.000082,
				"pbe" : 0.000878,
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 3,
						"bwa" : 2975867,
						"bwc" : 1226733,
						"fast" : 3,
						"stable" : 2,
						"guard" : 2,
						"middle" : 3,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.00039,
						"pbg" : 0.00020800000000000001,
						"pbm" : 0.000082,
						"pbe" : 0.000878
					}
				]
			},
			{
				"as" : 42610,
				"relay" : 8,
				"bwa" : 3050052,
				"bwc" : 1448323,
				"fast" : 8,
				"stable" : 4,
				"guard" : 2,
				"middle" : 8,
				"exit" : 2,
				"dir" : 7,
				"pbr" : 0.000369,
				"pbg" : 0.000089,
				"pbm" : 0.0006580000000000001,
				"pbe" : 0.00035800000000000003,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 8,
						"bwa" : 3050052,
						"bwc" : 1448323,
						"fast" : 8,
						"stable" : 4,
						"guard" : 2,
						"middle" : 8,
						"exit" : 2,
						"dir" : 7,
						"pbr" : 0.000369,
						"pbg" : 0.000089,
						"pbm" : 0.0006580000000000001,
						"pbe" : 0.00035800000000000003
					}
				]
			},
			{
				"as" : 5645,
				"relay" : 7,
				"bwa" : 368515,
				"bwc" : 59137,
				"fast" : 4,
				"stable" : 5,
				"guard" : 0,
				"middle" : 7,
				"exit" : 0,
				"dir" : 4,
				"pbr" : 0.000022999999999999997,
				"pbg" : 0,
				"pbm" : 0.000067,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 7,
						"bwa" : 368515,
						"bwc" : 59137,
						"fast" : 4,
						"stable" : 5,
						"guard" : 0,
						"middle" : 7,
						"exit" : 0,
						"dir" : 4,
						"pbr" : 0.000022999999999999997,
						"pbg" : 0,
						"pbm" : 0.000067,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 30058,
				"relay" : 31,
				"bwa" : 17470198,
				"bwc" : 11761630,
				"fast" : 10,
				"stable" : 18,
				"guard" : 5,
				"middle" : 31,
				"exit" : 20,
				"dir" : 7,
				"pbr" : 0.004761999999999999,
				"pbg" : 0.010020000000000001,
				"pbm" : 0.004091000000000001,
				"pbe" : 0.00018,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 9,
						"bwa" : 8753222,
						"bwc" : 5907068,
						"fast" : 8,
						"stable" : 6,
						"guard" : 3,
						"middle" : 9,
						"exit" : 0,
						"dir" : 6,
						"pbr" : 0.0031939999999999994,
						"pbg" : 0.006776,
						"pbm" : 0.002809,
						"pbe" : 0
					},
					{
						"cc" : "CZ",
						"relay" : 22,
						"bwa" : 8716976,
						"bwc" : 5854562,
						"fast" : 2,
						"stable" : 12,
						"guard" : 2,
						"middle" : 22,
						"exit" : 20,
						"dir" : 1,
						"pbr" : 0.0015679999999999995,
						"pbg" : 0.0032439999999999995,
						"pbm" : 0.001282,
						"pbe" : 0.00018
					}
				]
			},
			{
				"as" : 137,
				"relay" : 6,
				"bwa" : 1218560,
				"bwc" : 915243,
				"fast" : 6,
				"stable" : 6,
				"guard" : 4,
				"middle" : 6,
				"exit" : 0,
				"dir" : 5,
				"pbr" : 0.000201,
				"pbg" : 0.00039900000000000005,
				"pbm" : 0.00020199999999999998,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 6,
						"bwa" : 1218560,
						"bwc" : 915243,
						"fast" : 6,
						"stable" : 6,
						"guard" : 4,
						"middle" : 6,
						"exit" : 0,
						"dir" : 5,
						"pbr" : 0.000201,
						"pbg" : 0.00039900000000000005,
						"pbm" : 0.00020199999999999998,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12025,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 10343,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000007,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 10343,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000007,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 18618,
				"relay" : 1,
				"bwa" : 31900,
				"bwc" : 2966,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 31900,
						"bwc" : 2966,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 40156,
				"relay" : 2,
				"bwa" : 1191936,
				"bwc" : 744582,
				"fast" : 2,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 2,
				"dir" : 2,
				"pbr" : 0.00033999999999999997,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.001021,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 1191936,
						"bwc" : 744582,
						"fast" : 2,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 2,
						"dir" : 2,
						"pbr" : 0.00033999999999999997,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.001021
					}
				]
			},
			{
				"as" : 12874,
				"relay" : 7,
				"bwa" : 1900636,
				"bwc" : 390811,
				"fast" : 5,
				"stable" : 1,
				"guard" : 1,
				"middle" : 7,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000347,
				"pbg" : 0.000185,
				"pbm" : 0.000851,
				"pbe" : 0.000006,
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 7,
						"bwa" : 1900636,
						"bwc" : 390811,
						"fast" : 5,
						"stable" : 1,
						"guard" : 1,
						"middle" : 7,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000347,
						"pbg" : 0.000185,
						"pbm" : 0.000851,
						"pbe" : 0.000006
					}
				]
			},
			{
				"as" : 14618,
				"relay" : 12,
				"bwa" : 4244845,
				"bwc" : 1369419,
				"fast" : 11,
				"stable" : 8,
				"guard" : 4,
				"middle" : 12,
				"exit" : 1,
				"dir" : 5,
				"pbr" : 0.00028300000000000005,
				"pbg" : 0.00043599999999999997,
				"pbm" : 0.00036300000000000004,
				"pbe" : 0.000055,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 12,
						"bwa" : 4244845,
						"bwc" : 1369419,
						"fast" : 11,
						"stable" : 8,
						"guard" : 4,
						"middle" : 12,
						"exit" : 1,
						"dir" : 5,
						"pbr" : 0.00028300000000000005,
						"pbg" : 0.00043599999999999997,
						"pbm" : 0.00036300000000000004,
						"pbe" : 0.000055
					}
				]
			},
			{
				"as" : 174,
				"relay" : 7,
				"bwa" : 37517812,
				"bwc" : 26849975,
				"fast" : 7,
				"stable" : 6,
				"guard" : 6,
				"middle" : 7,
				"exit" : 2,
				"dir" : 5,
				"pbr" : 0.009496000000000001,
				"pbg" : 0.019952,
				"pbm" : 0.007956000000000001,
				"pbe" : 0.0005819999999999999,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 7,
						"bwa" : 37517812,
						"bwc" : 26849975,
						"fast" : 7,
						"stable" : 6,
						"guard" : 6,
						"middle" : 7,
						"exit" : 2,
						"dir" : 5,
						"pbr" : 0.009496000000000001,
						"pbg" : 0.019952,
						"pbm" : 0.007956000000000001,
						"pbe" : 0.0005819999999999999
					}
				]
			},
			{
				"as" : 6079,
				"relay" : 5,
				"bwa" : 718470,
				"bwc" : 293435,
				"fast" : 5,
				"stable" : 3,
				"guard" : 0,
				"middle" : 5,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.00008999999999999999,
				"pbg" : 0,
				"pbm" : 0.000269,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 5,
						"bwa" : 718470,
						"bwc" : 293435,
						"fast" : 5,
						"stable" : 3,
						"guard" : 0,
						"middle" : 5,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.00008999999999999999,
						"pbg" : 0,
						"pbm" : 0.000269,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 24900,
				"relay" : 3,
				"bwa" : 1126400,
				"bwc" : 1268219,
				"fast" : 2,
				"stable" : 3,
				"guard" : 2,
				"middle" : 3,
				"exit" : 0,
				"dir" : 3,
				"pbr" : 0.000394,
				"pbg" : 0.000839,
				"pbm" : 0.000341,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 3,
						"bwa" : 1126400,
						"bwc" : 1268219,
						"fast" : 2,
						"stable" : 3,
						"guard" : 2,
						"middle" : 3,
						"exit" : 0,
						"dir" : 3,
						"pbr" : 0.000394,
						"pbg" : 0.000839,
						"pbm" : 0.000341,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 42893,
				"relay" : 1,
				"bwa" : 7105464,
				"bwc" : 3829644,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.001789,
				"pbg" : 0,
				"pbm" : 0.005368,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 7105464,
						"bwc" : 3829644,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.001789,
						"pbg" : 0,
						"pbm" : 0.005368,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 11403,
				"relay" : 2,
				"bwa" : 2048000,
				"bwc" : 1444712,
				"fast" : 2,
				"stable" : 2,
				"guard" : 2,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000459,
				"pbg" : 0.000986,
				"pbm" : 0.00039000000000000005,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 2048000,
						"bwc" : 1444712,
						"fast" : 2,
						"stable" : 2,
						"guard" : 2,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000459,
						"pbg" : 0.000986,
						"pbm" : 0.00039000000000000005,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 22773,
				"relay" : 26,
				"bwa" : 6347084,
				"bwc" : 2191324,
				"fast" : 24,
				"stable" : 17,
				"guard" : 2,
				"middle" : 26,
				"exit" : 4,
				"dir" : 18,
				"pbr" : 0.00065,
				"pbg" : 0.000395,
				"pbm" : 0.001345,
				"pbe" : 0.00021099999999999998,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 26,
						"bwa" : 6347084,
						"bwc" : 2191324,
						"fast" : 24,
						"stable" : 17,
						"guard" : 2,
						"middle" : 26,
						"exit" : 4,
						"dir" : 18,
						"pbr" : 0.00065,
						"pbg" : 0.000395,
						"pbm" : 0.001345,
						"pbe" : 0.00021099999999999998
					}
				]
			},
			{
				"as" : 23089,
				"relay" : 1,
				"bwa" : 129214,
				"bwc" : 37375,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000005,
				"pbg" : 0,
				"pbm" : 0.000016,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 129214,
						"bwc" : 37375,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000005,
						"pbg" : 0,
						"pbm" : 0.000016,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 51290,
				"relay" : 4,
				"bwa" : 13793280,
				"bwc" : 8623974,
				"fast" : 4,
				"stable" : 3,
				"guard" : 3,
				"middle" : 4,
				"exit" : 3,
				"dir" : 2,
				"pbr" : 0.002682,
				"pbg" : 0.002888,
				"pbm" : 0.0017439999999999999,
				"pbe" : 0.0034149999999999996,
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 4,
						"bwa" : 13793280,
						"bwc" : 8623974,
						"fast" : 4,
						"stable" : 3,
						"guard" : 3,
						"middle" : 4,
						"exit" : 3,
						"dir" : 2,
						"pbr" : 0.002682,
						"pbg" : 0.002888,
						"pbm" : 0.0017439999999999999,
						"pbe" : 0.0034149999999999996
					}
				]
			},
			{
				"as" : 15962,
				"relay" : 3,
				"bwa" : 1331038,
				"bwc" : 577584,
				"fast" : 3,
				"stable" : 2,
				"guard" : 1,
				"middle" : 3,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.00026199999999999997,
				"pbg" : 0.000385,
				"pbm" : 0.00030199999999999997,
				"pbe" : 0.0001,
				"countries" : [
					{
						"cc" : "SK",
						"relay" : 3,
						"bwa" : 1331038,
						"bwc" : 577584,
						"fast" : 3,
						"stable" : 2,
						"guard" : 1,
						"middle" : 3,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.00026199999999999997,
						"pbg" : 0.000385,
						"pbm" : 0.00030199999999999997,
						"pbe" : 0.0001
					}
				]
			},
			{
				"as" : 38895,
				"relay" : 4,
				"bwa" : 334206,
				"bwc" : 84592,
				"fast" : 2,
				"stable" : 4,
				"guard" : 0,
				"middle" : 4,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000019999999999999998,
				"pbg" : 0,
				"pbm" : 0.000036,
				"pbe" : 0.000023,
				"countries" : [
					{
						"cc" : "SG",
						"relay" : 4,
						"bwa" : 334206,
						"bwc" : 84592,
						"fast" : 2,
						"stable" : 4,
						"guard" : 0,
						"middle" : 4,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000019999999999999998,
						"pbg" : 0,
						"pbm" : 0.000036,
						"pbe" : 0.000023
					}
				]
			},
			{
				"as" : 13127,
				"relay" : 5,
				"bwa" : 503546,
				"bwc" : 169490,
				"fast" : 4,
				"stable" : 2,
				"guard" : 0,
				"middle" : 5,
				"exit" : 0,
				"dir" : 5,
				"pbr" : 0.000034,
				"pbg" : 0,
				"pbm" : 0.00010200000000000001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 5,
						"bwa" : 503546,
						"bwc" : 169490,
						"fast" : 4,
						"stable" : 2,
						"guard" : 0,
						"middle" : 5,
						"exit" : 0,
						"dir" : 5,
						"pbr" : 0.000034,
						"pbg" : 0,
						"pbm" : 0.00010200000000000001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 3462,
				"relay" : 4,
				"bwa" : 789463,
				"bwc" : 106806,
				"fast" : 3,
				"stable" : 1,
				"guard" : 0,
				"middle" : 4,
				"exit" : 3,
				"dir" : 2,
				"pbr" : 0.000043,
				"pbg" : 0,
				"pbm" : 0.00009,
				"pbe" : 0.000039999999999999996,
				"countries" : [
					{
						"cc" : "TW",
						"relay" : 4,
						"bwa" : 789463,
						"bwc" : 106806,
						"fast" : 3,
						"stable" : 1,
						"guard" : 0,
						"middle" : 4,
						"exit" : 3,
						"dir" : 2,
						"pbr" : 0.000043,
						"pbg" : 0,
						"pbm" : 0.00009,
						"pbe" : 0.000039999999999999996
					}
				]
			},
			{
				"as" : 15557,
				"relay" : 10,
				"bwa" : 2548462,
				"bwc" : 1131966,
				"fast" : 7,
				"stable" : 2,
				"guard" : 1,
				"middle" : 10,
				"exit" : 3,
				"dir" : 7,
				"pbr" : 0.00031299999999999996,
				"pbg" : 0.000116,
				"pbm" : 0.00041999999999999996,
				"pbe" : 0.00040100000000000004,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 10,
						"bwa" : 2548462,
						"bwc" : 1131966,
						"fast" : 7,
						"stable" : 2,
						"guard" : 1,
						"middle" : 10,
						"exit" : 3,
						"dir" : 7,
						"pbr" : 0.00031299999999999996,
						"pbg" : 0.000116,
						"pbm" : 0.00041999999999999996,
						"pbe" : 0.00040100000000000004
					}
				]
			},
			{
				"as" : 1103,
				"relay" : 8,
				"bwa" : 17765950,
				"bwc" : 16132459,
				"fast" : 8,
				"stable" : 3,
				"guard" : 2,
				"middle" : 8,
				"exit" : 0,
				"dir" : 5,
				"pbr" : 0.005107,
				"pbg" : 0.009246,
				"pbm" : 0.006074,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 8,
						"bwa" : 17765950,
						"bwc" : 16132459,
						"fast" : 8,
						"stable" : 3,
						"guard" : 2,
						"middle" : 8,
						"exit" : 0,
						"dir" : 5,
						"pbr" : 0.005107,
						"pbg" : 0.009246,
						"pbm" : 0.006074,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 786,
				"relay" : 4,
				"bwa" : 1538585,
				"bwc" : 624462,
				"fast" : 4,
				"stable" : 2,
				"guard" : 1,
				"middle" : 4,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000278,
				"pbg" : 0.00048,
				"pbm" : 0.000353,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 4,
						"bwa" : 1538585,
						"bwc" : 624462,
						"fast" : 4,
						"stable" : 2,
						"guard" : 1,
						"middle" : 4,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000278,
						"pbg" : 0.00048,
						"pbm" : 0.000353,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 46375,
				"relay" : 4,
				"bwa" : 445148,
				"bwc" : 95670,
				"fast" : 4,
				"stable" : 3,
				"guard" : 0,
				"middle" : 4,
				"exit" : 1,
				"dir" : 4,
				"pbr" : 0.000017,
				"pbg" : 0,
				"pbm" : 0.000031,
				"pbe" : 0.000019,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 445148,
						"bwc" : 95670,
						"fast" : 4,
						"stable" : 3,
						"guard" : 0,
						"middle" : 4,
						"exit" : 1,
						"dir" : 4,
						"pbr" : 0.000017,
						"pbg" : 0,
						"pbm" : 0.000031,
						"pbe" : 0.000019
					}
				]
			},
			{
				"as" : 2852,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 462642,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000106,
				"pbg" : 0,
				"pbm" : 0.000319,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 462642,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000106,
						"pbg" : 0,
						"pbm" : 0.000319,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 5650,
				"relay" : 6,
				"bwa" : 2121562,
				"bwc" : 1142182,
				"fast" : 4,
				"stable" : 3,
				"guard" : 1,
				"middle" : 6,
				"exit" : 1,
				"dir" : 4,
				"pbr" : 0.000344,
				"pbg" : 0.000071,
				"pbm" : 0.000721,
				"pbe" : 0.000239,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 6,
						"bwa" : 2121562,
						"bwc" : 1142182,
						"fast" : 4,
						"stable" : 3,
						"guard" : 1,
						"middle" : 6,
						"exit" : 1,
						"dir" : 4,
						"pbr" : 0.000344,
						"pbg" : 0.000071,
						"pbm" : 0.000721,
						"pbe" : 0.000239
					}
				]
			},
			{
				"as" : 29141,
				"relay" : 2,
				"bwa" : 2271232,
				"bwc" : 874586,
				"fast" : 2,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000727,
				"pbg" : 0,
				"pbm" : 0.000106,
				"pbe" : 0.002076,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 2271232,
						"bwc" : 874586,
						"fast" : 2,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000727,
						"pbg" : 0,
						"pbm" : 0.000106,
						"pbe" : 0.002076
					}
				]
			},
			{
				"as" : 5580,
				"relay" : 1,
				"bwa" : 4219684,
				"bwc" : 3799831,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000541,
				"pbg" : 0.001164,
				"pbm" : 0.00046,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 4219684,
						"bwc" : 3799831,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000541,
						"pbg" : 0.001164,
						"pbm" : 0.00046,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 26347,
				"relay" : 1,
				"bwa" : 1572864,
				"bwc" : 1007681,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000518,
				"pbg" : 0.001113,
				"pbm" : 0.00044,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1572864,
						"bwc" : 1007681,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000518,
						"pbg" : 0.001113,
						"pbm" : 0.00044,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 57858,
				"relay" : 2,
				"bwa" : 2297420,
				"bwc" : 1629134,
				"fast" : 2,
				"stable" : 1,
				"guard" : 1,
				"middle" : 2,
				"exit" : 2,
				"dir" : 2,
				"pbr" : 0.000328,
				"pbg" : 0.000137,
				"pbm" : 0.000137,
				"pbe" : 0.000711,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 2,
						"bwa" : 2297420,
						"bwc" : 1629134,
						"fast" : 2,
						"stable" : 1,
						"guard" : 1,
						"middle" : 2,
						"exit" : 2,
						"dir" : 2,
						"pbr" : 0.000328,
						"pbg" : 0.000137,
						"pbm" : 0.000137,
						"pbe" : 0.000711
					}
				]
			},
			{
				"as" : 39743,
				"relay" : 11,
				"bwa" : 140067113,
				"bwc" : 75093059,
				"fast" : 11,
				"stable" : 8,
				"guard" : 8,
				"middle" : 11,
				"exit" : 9,
				"dir" : 9,
				"pbr" : 0.017315,
				"pbg" : 0.011359000000000001,
				"pbm" : 0.008853,
				"pbe" : 0.031735000000000006,
				"countries" : [
					{
						"cc" : "RO",
						"relay" : 9,
						"bwa" : 129581353,
						"bwc" : 69796641,
						"fast" : 9,
						"stable" : 6,
						"guard" : 6,
						"middle" : 9,
						"exit" : 8,
						"dir" : 7,
						"pbr" : 0.015507,
						"pbg" : 0.007712,
						"pbm" : 0.007361,
						"pbe" : 0.031449000000000005
					},
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 10485760,
						"bwc" : 5296418,
						"fast" : 2,
						"stable" : 2,
						"guard" : 2,
						"middle" : 2,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.001808,
						"pbg" : 0.003647,
						"pbm" : 0.001492,
						"pbe" : 0.000286
					}
				]
			},
			{
				"as" : 12066,
				"relay" : 1,
				"bwa" : 26242,
				"bwc" : 0,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DO",
						"relay" : 1,
						"bwa" : 26242,
						"bwc" : 0,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 680,
				"relay" : 8,
				"bwa" : 10106104,
				"bwc" : 6074238,
				"fast" : 8,
				"stable" : 8,
				"guard" : 4,
				"middle" : 8,
				"exit" : 1,
				"dir" : 6,
				"pbr" : 0.0014550000000000001,
				"pbg" : 0.002424,
				"pbm" : 0.001277,
				"pbe" : 0.000665,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 10106104,
						"bwc" : 6074238,
						"fast" : 8,
						"stable" : 8,
						"guard" : 4,
						"middle" : 8,
						"exit" : 1,
						"dir" : 6,
						"pbr" : 0.0014550000000000001,
						"pbg" : 0.002424,
						"pbm" : 0.001277,
						"pbe" : 0.000665
					}
				]
			},
			{
				"as" : 6849,
				"relay" : 3,
				"bwa" : 281917,
				"bwc" : 18218,
				"fast" : 2,
				"stable" : 1,
				"guard" : 0,
				"middle" : 3,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000021000000000000002,
				"pbg" : 0,
				"pbm" : 0.000016,
				"pbe" : 0.000047,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 3,
						"bwa" : 281917,
						"bwc" : 18218,
						"fast" : 2,
						"stable" : 1,
						"guard" : 0,
						"middle" : 3,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000021000000000000002,
						"pbg" : 0,
						"pbm" : 0.000016,
						"pbe" : 0.000047
					}
				]
			},
			{
				"as" : 31364,
				"relay" : 2,
				"bwa" : 655157,
				"bwc" : 132768,
				"fast" : 2,
				"stable" : 1,
				"guard" : 1,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000024,
				"pbg" : 0.000035,
				"pbm" : 0.000038,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 655157,
						"bwc" : 132768,
						"fast" : 2,
						"stable" : 1,
						"guard" : 1,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000024,
						"pbg" : 0.000035,
						"pbm" : 0.000038,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 16509,
				"relay" : 12,
				"bwa" : 1514496,
				"bwc" : 853408,
				"fast" : 9,
				"stable" : 11,
				"guard" : 2,
				"middle" : 12,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.00009500000000000002,
				"pbg" : 0.000062,
				"pbm" : 0.00019999999999999998,
				"pbe" : 0.000024,
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 1,
						"bwa" : 131072,
						"bwc" : 14925,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000005,
						"pbg" : 0,
						"pbm" : 0.000015,
						"pbe" : 0
					},
					{
						"cc" : "JP",
						"relay" : 2,
						"bwa" : 438272,
						"bwc" : 388984,
						"fast" : 2,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000014000000000000001,
						"pbg" : 0.000009,
						"pbm" : 0.000035000000000000004,
						"pbe" : 0
					},
					{
						"cc" : "IE",
						"relay" : 4,
						"bwa" : 483328,
						"bwc" : 284720,
						"fast" : 2,
						"stable" : 4,
						"guard" : 1,
						"middle" : 4,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000036,
						"pbg" : 0.000053,
						"pbm" : 0.000054999999999999995,
						"pbe" : 0
					},
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 441344,
						"bwc" : 164070,
						"fast" : 4,
						"stable" : 3,
						"guard" : 0,
						"middle" : 4,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000037,
						"pbg" : 0,
						"pbm" : 0.000086,
						"pbe" : 0.000024
					},
					{
						"cc" : "BR",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 709,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 38731,
				"relay" : 1,
				"bwa" : 409600,
				"bwc" : 205765,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000023,
				"pbg" : 0.000013,
				"pbm" : 0.000013,
				"pbe" : 0.000043,
				"countries" : [
					{
						"cc" : "VN",
						"relay" : 1,
						"bwa" : 409600,
						"bwc" : 205765,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000023,
						"pbg" : 0.000013,
						"pbm" : 0.000013,
						"pbe" : 0.000043
					}
				]
			},
			{
				"as" : 30693,
				"relay" : 5,
				"bwa" : 36602146,
				"bwc" : 24444049,
				"fast" : 5,
				"stable" : 5,
				"guard" : 4,
				"middle" : 5,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.007997,
				"pbg" : 0.012557,
				"pbm" : 0.011437,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 5,
						"bwa" : 36602146,
						"bwc" : 24444049,
						"fast" : 5,
						"stable" : 5,
						"guard" : 4,
						"middle" : 5,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.007997,
						"pbg" : 0.012557,
						"pbm" : 0.011437,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 2529,
				"relay" : 2,
				"bwa" : 92160,
				"bwc" : 15788,
				"fast" : 1,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.0000049999999999999996,
				"pbg" : 0,
				"pbm" : 0.000012,
				"pbe" : 0.000002,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 2,
						"bwa" : 92160,
						"bwc" : 15788,
						"fast" : 1,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.0000049999999999999996,
						"pbg" : 0,
						"pbm" : 0.000012,
						"pbe" : 0.000002
					}
				]
			},
			{
				"as" : 15830,
				"relay" : 19,
				"bwa" : 10215571,
				"bwc" : 6222050,
				"fast" : 19,
				"stable" : 12,
				"guard" : 4,
				"middle" : 19,
				"exit" : 2,
				"dir" : 7,
				"pbr" : 0.002008,
				"pbg" : 0.0017170000000000002,
				"pbm" : 0.004186,
				"pbe" : 0.000119,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 19,
						"bwa" : 10215571,
						"bwc" : 6222050,
						"fast" : 19,
						"stable" : 12,
						"guard" : 4,
						"middle" : 19,
						"exit" : 2,
						"dir" : 7,
						"pbr" : 0.002008,
						"pbg" : 0.0017170000000000002,
						"pbm" : 0.004186,
						"pbe" : 0.000119
					}
				]
			},
			{
				"as" : 49544,
				"relay" : 5,
				"bwa" : 19310624,
				"bwc" : 14830026,
				"fast" : 5,
				"stable" : 4,
				"guard" : 2,
				"middle" : 5,
				"exit" : 2,
				"dir" : 4,
				"pbr" : 0.005164,
				"pbg" : 0.00657,
				"pbm" : 0.008806000000000001,
				"pbe" : 0.000119,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 5,
						"bwa" : 19310624,
						"bwc" : 14830026,
						"fast" : 5,
						"stable" : 4,
						"guard" : 2,
						"middle" : 5,
						"exit" : 2,
						"dir" : 4,
						"pbr" : 0.005164,
						"pbg" : 0.00657,
						"pbm" : 0.008806000000000001,
						"pbe" : 0.000119
					}
				]
			},
			{
				"as" : 57378,
				"relay" : 1,
				"bwa" : 178227,
				"bwc" : 51002,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.00002,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000059,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 178227,
						"bwc" : 51002,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.00002,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000059
					}
				]
			},
			{
				"as" : 35228,
				"relay" : 20,
				"bwa" : 1316770,
				"bwc" : 348772,
				"fast" : 15,
				"stable" : 12,
				"guard" : 0,
				"middle" : 20,
				"exit" : 5,
				"dir" : 13,
				"pbr" : 0.00007900000000000001,
				"pbg" : 0,
				"pbm" : 0.00017999999999999998,
				"pbe" : 0.000059000000000000004,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 20,
						"bwa" : 1316770,
						"bwc" : 348772,
						"fast" : 15,
						"stable" : 12,
						"guard" : 0,
						"middle" : 20,
						"exit" : 5,
						"dir" : 13,
						"pbr" : 0.00007900000000000001,
						"pbg" : 0,
						"pbm" : 0.00017999999999999998,
						"pbe" : 0.000059000000000000004
					}
				]
			},
			{
				"as" : 8339,
				"relay" : 3,
				"bwa" : 419840,
				"bwc" : 156781,
				"fast" : 3,
				"stable" : 3,
				"guard" : 1,
				"middle" : 3,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000049,
				"pbg" : 0.000036,
				"pbm" : 0.000109,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 3,
						"bwa" : 419840,
						"bwc" : 156781,
						"fast" : 3,
						"stable" : 3,
						"guard" : 1,
						"middle" : 3,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000049,
						"pbg" : 0.000036,
						"pbm" : 0.000109,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 21412,
				"relay" : 1,
				"bwa" : 153600,
				"bwc" : 43739,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000015,
				"pbg" : 0,
				"pbm" : 0.000044,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "LT",
						"relay" : 1,
						"bwa" : 153600,
						"bwc" : 43739,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000015,
						"pbg" : 0,
						"pbm" : 0.000044,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 48635,
				"relay" : 3,
				"bwa" : 1565438,
				"bwc" : 714136,
				"fast" : 3,
				"stable" : 1,
				"guard" : 0,
				"middle" : 3,
				"exit" : 2,
				"dir" : 1,
				"pbr" : 0.00034100000000000005,
				"pbg" : 0,
				"pbm" : 0.000135,
				"pbe" : 0.000888,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 3,
						"bwa" : 1565438,
						"bwc" : 714136,
						"fast" : 3,
						"stable" : 1,
						"guard" : 0,
						"middle" : 3,
						"exit" : 2,
						"dir" : 1,
						"pbr" : 0.00034100000000000005,
						"pbg" : 0,
						"pbm" : 0.000135,
						"pbe" : 0.000888
					}
				]
			},
			{
				"as" : 43234,
				"relay" : 3,
				"bwa" : 316874,
				"bwc" : 48466,
				"fast" : 3,
				"stable" : 1,
				"guard" : 0,
				"middle" : 3,
				"exit" : 1,
				"dir" : 3,
				"pbr" : 0.000017,
				"pbg" : 0,
				"pbm" : 0.000031,
				"pbe" : 0.000019,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 3,
						"bwa" : 316874,
						"bwc" : 48466,
						"fast" : 3,
						"stable" : 1,
						"guard" : 0,
						"middle" : 3,
						"exit" : 1,
						"dir" : 3,
						"pbr" : 0.000017,
						"pbg" : 0,
						"pbm" : 0.000031,
						"pbe" : 0.000019
					}
				]
			},
			{
				"as" : 3209,
				"relay" : 18,
				"bwa" : 1387723,
				"bwc" : 254851,
				"fast" : 15,
				"stable" : 3,
				"guard" : 0,
				"middle" : 18,
				"exit" : 0,
				"dir" : 9,
				"pbr" : 0.000091,
				"pbg" : 0,
				"pbm" : 0.000275,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 18,
						"bwa" : 1387723,
						"bwc" : 254851,
						"fast" : 15,
						"stable" : 3,
						"guard" : 0,
						"middle" : 18,
						"exit" : 0,
						"dir" : 9,
						"pbr" : 0.000091,
						"pbg" : 0,
						"pbm" : 0.000275,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 13030,
				"relay" : 9,
				"bwa" : 32703286,
				"bwc" : 25423541,
				"fast" : 9,
				"stable" : 9,
				"guard" : 8,
				"middle" : 9,
				"exit" : 8,
				"dir" : 8,
				"pbr" : 0.011413999999999999,
				"pbg" : 0.006392999999999999,
				"pbm" : 0.006416,
				"pbe" : 0.021431,
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 9,
							"bwa" : 32703286,
						"bwc" : 25423541,
						"fast" : 9,
						"stable" : 9,
						"guard" : 8,
						"middle" : 9,
						"exit" : 8,
						"dir" : 8,
						"pbr" : 0.011413999999999999,
						"pbg" : 0.006392999999999999,
						"pbm" : 0.006416,
						"pbe" : 0.021431
					}
				]
			},
			{
				"as" : 6848,
				"relay" : 2,
				"bwa" : 196608,
				"bwc" : 32180,
				"fast" : 2,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000018,
				"pbg" : 0,
				"pbm" : 0.000055,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "BE",
						"relay" : 2,
						"bwa" : 196608,
						"bwc" : 32180,
						"fast" : 2,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000018,
						"pbg" : 0,
						"pbm" : 0.000055,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 20597,
				"relay" : 1,
				"bwa" : 2432836,
				"bwc" : 1133679,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000565,
				"pbg" : 0.001215,
				"pbm" : 0.00048,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 2432836,
						"bwc" : 1133679,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000565,
						"pbg" : 0.001215,
						"pbm" : 0.00048,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 26599,
				"relay" : 2,
				"bwa" : 40960,
				"bwc" : 65,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0.000018,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 2,
						"bwa" : 40960,
						"bwc" : 65,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0.000018,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 29278,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 86581,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000049,
				"pbg" : 0.000106,
				"pbm" : 0.000042,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "HU",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 86581,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000049,
						"pbg" : 0.000106,
						"pbm" : 0.000042,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12357,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 416,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 416,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 49120,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 860885,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000214,
				"pbg" : 0.000461,
				"pbm" : 0.000182,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 860885,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000214,
						"pbg" : 0.000461,
						"pbm" : 0.000182,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 20825,
				"relay" : 16,
				"bwa" : 3595097,
				"bwc" : 1598186,
				"fast" : 15,
				"stable" : 10,
				"guard" : 3,
				"middle" : 16,
				"exit" : 1,
				"dir" : 14,
				"pbr" : 0.000634,
				"pbg" : 0.000291,
				"pbm" : 0.000935,
				"pbe" : 0.000674,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 16,
						"bwa" : 3595097,
						"bwc" : 1598186,
						"fast" : 15,
						"stable" : 10,
						"guard" : 3,
						"middle" : 16,
						"exit" : 1,
						"dir" : 14,
						"pbr" : 0.000634,
						"pbg" : 0.000291,
						"pbm" : 0.000935,
						"pbe" : 0.000674
					}
				]
			},
			{
				"as" : 852,
				"relay" : 4,
				"bwa" : 203870,
				"bwc" : 47544,
				"fast" : 2,
				"stable" : 3,
				"guard" : 0,
				"middle" : 4,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000007,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0.000013,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 4,
						"bwa" : 203870,
						"bwc" : 47544,
						"fast" : 2,
						"stable" : 3,
						"guard" : 0,
						"middle" : 4,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000007,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0.000013
					}
				]
			},
			{
				"as" : 41371,
				"relay" : 1,
				"bwa" : 80674,
				"bwc" : 711,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000004,
				"countries" : [
					{
						"cc" : "KZ",
						"relay" : 1,
						"bwa" : 80674,
						"bwc" : 711,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000004
					}
				]
			},
			{
				"as" : 42093,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 21585,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0.000024,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 21585,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 10796,
				"relay" : 8,
				"bwa" : 1324122,
				"bwc" : 576805,
				"fast" : 6,
				"stable" : 3,
				"guard" : 0,
				"middle" : 8,
				"exit" : 3,
				"dir" : 4,
				"pbr" : 0.00014700000000000002,
				"pbg" : 0,
				"pbm" : 0.000375,
				"pbe" : 0.00006599999999999999,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 1324122,
						"bwc" : 576805,
						"fast" : 6,
						"stable" : 3,
						"guard" : 0,
						"middle" : 8,
						"exit" : 3,
						"dir" : 4,
						"pbr" : 0.00014700000000000002,
						"pbg" : 0,
						"pbm" : 0.000375,
						"pbe" : 0.00006599999999999999
					}
				]
			},
			{
				"as" : 51399,
				"relay" : 1,
				"bwa" : 2048000,
				"bwc" : 1533393,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.00011,
				"pbg" : 0.000238,
				"pbm" : 0.000094,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 2048000,
						"bwc" : 1533393,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.00011,
						"pbg" : 0.000238,
						"pbm" : 0.000094,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 53264,
				"relay" : 4,
				"bwa" : 1853440,
				"bwc" : 1346740,
				"fast" : 4,
				"stable" : 4,
				"guard" : 2,
				"middle" : 4,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000436,
				"pbg" : 0.000918,
				"pbm" : 0.000389,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 1,
						"bwa" : 72704,
						"bwc" : 13266,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000004,
						"pbg" : 0,
						"pbm" : 0.000011,
						"pbe" : 0
					},
					{
						"cc" : "US",
						"relay" : 3,
						"bwa" : 1780736,
						"bwc" : 1333474,
						"fast" : 3,
						"stable" : 3,
						"guard" : 2,
						"middle" : 3,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.00043200000000000004,
						"pbg" : 0.000918,
						"pbm" : 0.000378,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 42352,
				"relay" : 4,
				"bwa" : 81920,
				"bwc" : 28230,
				"fast" : 0,
				"stable" : 4,
				"guard" : 0,
				"middle" : 4,
				"exit" : 4,
				"dir" : 0,
				"pbr" : 0.000012,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000036,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 4,
						"bwa" : 81920,
						"bwc" : 28230,
						"fast" : 0,
						"stable" : 4,
						"guard" : 0,
						"middle" : 4,
						"exit" : 4,
						"dir" : 0,
						"pbr" : 0.000012,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000036
					}
				]
			},
			{
				"as" : 24863,
				"relay" : 2,
				"bwa" : 56320,
				"bwc" : 19550,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "EG",
						"relay" : 2,
						"bwa" : 56320,
						"bwc" : 19550,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 8447,
				"relay" : 2,
				"bwa" : 167936,
				"bwc" : 10236,
				"fast" : 2,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000007,
				"pbg" : 0,
				"pbm" : 0.000019999999999999998,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 2,
						"bwa" : 167936,
						"bwc" : 10236,
						"fast" : 2,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000007,
						"pbg" : 0,
						"pbm" : 0.000019999999999999998,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 16904,
				"relay" : 1,
				"bwa" : 64153,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 64153,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 34971,
				"relay" : 10,
				"bwa" : 3584000,
				"bwc" : 2960742,
				"fast" : 10,
				"stable" : 8,
				"guard" : 5,
				"middle" : 10,
				"exit" : 0,
				"dir" : 4,
				"pbr" : 0.0006529999999999999,
				"pbg" : 0.000847,
				"pbm" : 0.0011129999999999998,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 10,
						"bwa" : 3584000,
						"bwc" : 2960742,
						"fast" : 10,
						"stable" : 8,
						"guard" : 5,
						"middle" : 10,
						"exit" : 0,
						"dir" : 4,
						"pbr" : 0.0006529999999999999,
						"pbg" : 0.000847,
						"pbm" : 0.0011129999999999998,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12530,
				"relay" : 1,
				"bwa" : 548964,
				"bwc" : 108500,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000043,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000128,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 548964,
						"bwc" : 108500,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000043,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000128
					}
				]
			},
			{
				"as" : 17931,
				"relay" : 1,
				"bwa" : 92284,
				"bwc" : 10632,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 92284,
						"bwc" : 10632,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 18047,
				"relay" : 1,
				"bwa" : 30720,
				"bwc" : 909,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "TW",
						"relay" : 1,
						"bwa" : 30720,
						"bwc" : 909,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 47165,
				"relay" : 1,
				"bwa" : 1092608,
				"bwc" : 27,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000147,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000442,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1092608,
						"bwc" : 27,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000147,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000442
					}
				]
			},
			{
				"as" : 8283,
				"relay" : 2,
				"bwa" : 844800,
				"bwc" : 603264,
				"fast" : 2,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000248,
				"pbg" : 0,
				"pbm" : 0.000594,
				"pbe" : 0.00015,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 844800,
						"bwc" : 603264,
						"fast" : 2,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000248,
						"pbg" : 0,
						"pbm" : 0.000594,
						"pbe" : 0.00015
					}
				]
			},
			{
				"as" : 8764,
				"relay" : 2,
				"bwa" : 184320,
				"bwc" : 77010,
				"fast" : 2,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000021000000000000002,
				"pbg" : 0,
				"pbm" : 0.000045,
				"pbe" : 0.000019,
				"countries" : [
					{
						"cc" : "LT",
						"relay" : 2,
						"bwa" : 184320,
						"bwc" : 77010,
						"fast" : 2,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000021000000000000002,
						"pbg" : 0,
						"pbm" : 0.000045,
						"pbe" : 0.000019
					}
				]
			},
			{
				"as" : 8767,
				"relay" : 7,
				"bwa" : 440320,
				"bwc" : 121220,
				"fast" : 5,
				"stable" : 3,
				"guard" : 0,
				"middle" : 7,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000029,
				"pbg" : 0,
				"pbm" : 0.00008,
				"pbe" : 0.000012,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 7,
						"bwa" : 440320,
						"bwc" : 121220,
						"fast" : 5,
						"stable" : 3,
						"guard" : 0,
						"middle" : 7,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000029,
						"pbg" : 0,
						"pbm" : 0.00008,
						"pbe" : 0.000012
					}
				]
			},
			{
				"as" : 35592,
				"relay" : 6,
				"bwa" : 14012570,
				"bwc" : 8344206,
				"fast" : 6,
				"stable" : 5,
				"guard" : 5,
				"middle" : 6,
				"exit" : 6,
				"dir" : 5,
				"pbr" : 0.0035139999999999998,
				"pbg" : 0.001925,
				"pbm" : 0.001925,
				"pbe" : 0.006690999999999999,
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 6,
						"bwa" : 14012570,
						"bwc" : 8344206,
						"fast" : 6,
						"stable" : 5,
						"guard" : 5,
						"middle" : 6,
						"exit" : 6,
						"dir" : 5,
						"pbr" : 0.0035139999999999998,
						"pbg" : 0.001925,
						"pbm" : 0.001925,
						"pbe" : 0.006690999999999999
					}
				]
			},
			{
				"as" : 20375,
				"relay" : 1,
				"bwa" : 245000,
				"bwc" : 174231,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000021,
				"pbg" : 0.000045,
				"pbm" : 0.000018,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 245000,
						"bwc" : 174231,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000021,
						"pbg" : 0.000045,
						"pbm" : 0.000018,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 6315,
				"relay" : 6,
				"bwa" : 21793180,
				"bwc" : 15371806,
				"fast" : 5,
				"stable" : 5,
				"guard" : 3,
				"middle" : 6,
				"exit" : 4,
				"dir" : 5,
				"pbr" : 0.0064600000000000005,
				"pbg" : 0.0033889999999999997,
				"pbm" : 0.0046229999999999995,
				"pbe" : 0.011367,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 6,
						"bwa" : 21793180,
						"bwc" : 15371806,
						"fast" : 5,
						"stable" : 5,
						"guard" : 3,
						"middle" : 6,
						"exit" : 4,
						"dir" : 5,
						"pbr" : 0.0064600000000000005,
						"pbg" : 0.0033889999999999997,
						"pbm" : 0.0046229999999999995,
						"pbe" : 0.011367
					}
				]
			},
			{
				"as" : 197301,
				"relay" : 1,
				"bwa" : 153600,
				"bwc" : 50634,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000025,
				"pbg" : 0,
				"pbm" : 0.000076,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 153600,
						"bwc" : 50634,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000025,
						"pbg" : 0,
						"pbm" : 0.000076,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 24971,
				"relay" : 4,
				"bwa" : 1324032,
				"bwc" : 680577,
				"fast" : 4,
				"stable" : 4,
				"guard" : 1,
				"middle" : 4,
				"exit" : 2,
				"dir" : 2,
				"pbr" : 0.000432,
				"pbg" : 0.000079,
				"pbm" : 0.00010899999999999999,
				"pbe" : 0.0011049999999999999,
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 4,
						"bwa" : 1324032,
						"bwc" : 680577,
						"fast" : 4,
						"stable" : 4,
						"guard" : 1,
						"middle" : 4,
						"exit" : 2,
						"dir" : 2,
						"pbr" : 0.000432,
						"pbg" : 0.000079,
						"pbm" : 0.00010899999999999999,
						"pbe" : 0.0011049999999999999
					}
				]
			},
			{
				"as" : 5410,
				"relay" : 3,
				"bwa" : 202202,
				"bwc" : 52454,
				"fast" : 3,
				"stable" : 2,
				"guard" : 0,
				"middle" : 3,
				"exit" : 1,
				"dir" : 3,
				"pbr" : 0.000006999999999999999,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0.000012,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 3,
						"bwa" : 202202,
						"bwc" : 52454,
						"fast" : 3,
						"stable" : 2,
						"guard" : 0,
						"middle" : 3,
						"exit" : 1,
						"dir" : 3,
						"pbr" : 0.000006999999999999999,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0.000012
					}
				]
			},
			{
				"as" : 1836,
				"relay" : 2,
				"bwa" : 837452,
				"bwc" : 305112,
				"fast" : 2,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000095,
				"pbg" : 0.000157,
				"pbm" : 0.000062,
				"pbe" : 0.000065,
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 2,
						"bwa" : 837452,
						"bwc" : 305112,
						"fast" : 2,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000095,
						"pbg" : 0.000157,
						"pbm" : 0.000062,
						"pbe" : 0.000065
					}
				]
			},
			{
				"as" : 29685,
				"relay" : 1,
				"bwa" : 266240,
				"bwc" : 182036,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000063,
				"pbg" : 0.000135,
				"pbm" : 0.000053,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 266240,
						"bwc" : 182036,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000063,
						"pbg" : 0.000135,
						"pbm" : 0.000053,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 719,
				"relay" : 7,
				"bwa" : 1345863,
				"bwc" : 670610,
				"fast" : 5,
				"stable" : 6,
				"guard" : 1,
				"middle" : 7,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.00015099999999999998,
				"pbg" : 0.000083,
				"pbm" : 0.000343,
				"pbe" : 0.000027,
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 7,
						"bwa" : 1345863,
						"bwc" : 670610,
						"fast" : 5,
						"stable" : 6,
						"guard" : 1,
						"middle" : 7,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.00015099999999999998,
						"pbg" : 0.000083,
						"pbm" : 0.000343,
						"pbe" : 0.000027
					}
				]
			},
			{
				"as" : 9082,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 357070,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000095,
				"pbg" : 0.000053,
				"pbm" : 0.000053,
				"pbe" : 0.000179,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 357070,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000095,
						"pbg" : 0.000053,
						"pbm" : 0.000053,
						"pbe" : 0.000179
					}
				]
			},
			{
				"as" : 12177,
				"relay" : 1,
				"bwa" : 67192,
				"bwc" : 16494,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000006,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 67192,
						"bwc" : 16494,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000006,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 30496,
				"relay" : 2,
				"bwa" : 1867166,
				"bwc" : 1013427,
				"fast" : 2,
				"stable" : 2,
				"guard" : 2,
				"middle" : 2,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000419,
				"pbg" : 0.000747,
				"pbm" : 0.000328,
				"pbe" : 0.000182,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 1867166,
						"bwc" : 1013427,
						"fast" : 2,
						"stable" : 2,
						"guard" : 2,
						"middle" : 2,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000419,
						"pbg" : 0.000747,
						"pbm" : 0.000328,
						"pbe" : 0.000182
					}
				]
			},
			{
				"as" : 46652,
				"relay" : 22,
				"bwa" : 38624621,
				"bwc" : 25738738,
				"fast" : 21,
				"stable" : 17,
				"guard" : 13,
				"middle" : 22,
				"exit" : 3,
				"dir" : 15,
				"pbr" : 0.009226,
				"pbg" : 0.010696,
				"pbm" : 0.013217999999999999,
				"pbe" : 0.003764,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 17,
						"bwa" : 22766639,
						"bwc" : 14016204,
						"fast" : 16,
						"stable" : 13,
						"guard" : 9,
						"middle" : 17,
						"exit" : 3,
						"dir" : 14,
						"pbr" : 0.005808,
						"pbg" : 0.003471,
						"pbm" : 0.01019,
						"pbe" : 0.003764
					},
					{
						"cc" : "NL",
						"relay" : 5,
						"bwa" : 15857982,
						"bwc" : 11722534,
						"fast" : 5,
						"stable" : 4,
						"guard" : 4,
						"middle" : 5,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.003418,
						"pbg" : 0.0072250000000000005,
						"pbm" : 0.003028,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 197019,
				"relay" : 13,
				"bwa" : 50182607,
				"bwc" : 18928580,
				"fast" : 13,
				"stable" : 8,
				"guard" : 8,
				"middle" : 13,
				"exit" : 1,
				"dir" : 6,
				"pbr" : 0.023295,
				"pbg" : 0.023355,
				"pbm" : 0.045702,
				"pbe" : 0.00083,
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 13,
						"bwa" : 50182607,
						"bwc" : 18928580,
						"fast" : 13,
						"stable" : 8,
						"guard" : 8,
						"middle" : 13,
						"exit" : 1,
						"dir" : 6,
						"pbr" : 0.023295,
						"pbg" : 0.023355,
						"pbm" : 0.045702,
						"pbe" : 0.00083
					}
				]
			},
			{
				"as" : 20860,
				"relay" : 10,
				"bwa" : 4942400,
				"bwc" : 2870897,
				"fast" : 9,
				"stable" : 7,
				"guard" : 5,
				"middle" : 10,
				"exit" : 3,
				"dir" : 5,
				"pbr" : 0.0008039999999999999,
				"pbg" : 0.000786,
				"pbm" : 0.001344,
				"pbe" : 0.000277,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 10,
						"bwa" : 4942400,
						"bwc" : 2870897,
						"fast" : 9,
						"stable" : 7,
						"guard" : 5,
						"middle" : 10,
						"exit" : 3,
						"dir" : 5,
						"pbr" : 0.0008039999999999999,
						"pbg" : 0.000786,
						"pbm" : 0.001344,
						"pbe" : 0.000277
					}
				]
			},
			{
				"as" : 3292,
				"relay" : 10,
				"bwa" : 7990624,
				"bwc" : 5707426,
				"fast" : 9,
				"stable" : 7,
				"guard" : 4,
				"middle" : 10,
				"exit" : 4,
				"dir" : 7,
				"pbr" : 0.0017289999999999999,
				"pbg" : 0.003358,
				"pbm" : 0.001663,
				"pbe" : 0.000166,
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 8,
						"bwa" : 7904608,
						"bwc" : 5702703,
						"fast" : 8,
						"stable" : 5,
						"guard" : 4,
						"middle" : 8,
						"exit" : 4,
						"dir" : 6,
						"pbr" : 0.0017219999999999998,
						"pbg" : 0.003358,
						"pbm" : 0.0016409999999999999,
						"pbe" : 0.000166
					},
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 543,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					},
					{
						"cc" : "FI",
						"relay" : 1,
						"bwa" : 65536,
						"bwc" : 4180,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000004,
						"pbg" : 0,
						"pbm" : 0.000013,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 29302,
				"relay" : 2,
				"bwa" : 563200,
				"bwc" : 173895,
				"fast" : 2,
				"stable" : 1,
				"guard" : 1,
				"middle" : 2,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000092,
				"pbg" : 0.000124,
				"pbm" : 0.00015099999999999998,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 2,
						"bwa" : 563200,
						"bwc" : 173895,
						"fast" : 2,
						"stable" : 1,
						"guard" : 1,
						"middle" : 2,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000092,
						"pbg" : 0.000124,
						"pbm" : 0.00015099999999999998,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8943,
				"relay" : 3,
				"bwa" : 1186839,
				"bwc" : 1265955,
				"fast" : 3,
				"stable" : 1,
				"guard" : 0,
				"middle" : 3,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000468,
				"pbg" : 0,
				"pbm" : 0.0014039999999999999,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 3,
						"bwa" : 1186839,
						"bwc" : 1265955,
						"fast" : 3,
						"stable" : 1,
						"guard" : 0,
						"middle" : 3,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000468,
						"pbg" : 0,
						"pbm" : 0.0014039999999999999,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 57668,
				"relay" : 10,
				"bwa" : 29584338,
				"bwc" : 6641201,
				"fast" : 4,
				"stable" : 10,
				"guard" : 2,
				"middle" : 10,
				"exit" : 8,
				"dir" : 2,
				"pbr" : 0.006346000000000002,
				"pbg" : 0.005786,
				"pbm" : 0.009079,
				"pbe" : 0.004170000000000002,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 19098578,
						"bwc" : 68182,
						"fast" : 2,
						"stable" : 8,
						"guard" : 1,
						"middle" : 8,
						"exit" : 6,
						"dir" : 0,
						"pbr" : 0.004233,
						"pbg" : 0.004675,
						"pbm" : 0.007969,
						"pbe" : 0.000054000000000000005
					},
					{
						"cc" : "RO",
						"relay" : 1,
						"bwa" : 5242880,
						"bwc" : 1807472,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000131,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000393
					},
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 5242880,
						"bwc" : 4765547,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.001982,
						"pbg" : 0.001111,
						"pbm" : 0.00111,
						"pbe" : 0.003723
					}
				]
			},
			{
				"as" : 34240,
				"relay" : 2,
				"bwa" : 235520,
				"bwc" : 186993,
				"fast" : 2,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000037000000000000005,
				"pbg" : 0,
				"pbm" : 0.00011200000000000001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 235520,
						"bwc" : 186993,
						"fast" : 2,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000037000000000000005,
						"pbg" : 0,
						"pbm" : 0.00011200000000000001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 18059,
				"relay" : 1,
				"bwa" : 23999,
				"bwc" : 354,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "ID",
						"relay" : 1,
						"bwa" : 23999,
						"bwc" : 354,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12605,
				"relay" : 3,
				"bwa" : 521216,
				"bwc" : 149993,
				"fast" : 3,
				"stable" : 3,
				"guard" : 2,
				"middle" : 3,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000071,
				"pbg" : 0.000104,
				"pbm" : 0.000072,
				"pbe" : 0.000037,
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 3,
						"bwa" : 521216,
						"bwc" : 149993,
						"fast" : 3,
						"stable" : 3,
						"guard" : 2,
						"middle" : 3,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000071,
						"pbg" : 0.000104,
						"pbm" : 0.000072,
						"pbe" : 0.000037
					}
				]
			},
			{
				"as" : 21788,
				"relay" : 7,
				"bwa" : 2301484,
				"bwc" : 1422132,
				"fast" : 7,
				"stable" : 7,
				"guard" : 2,
				"middle" : 7,
				"exit" : 3,
				"dir" : 7,
				"pbr" : 0.000383,
				"pbg" : 0.000147,
				"pbm" : 0.000139,
				"pbe" : 0.000859,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 7,
						"bwa" : 2301484,
						"bwc" : 1422132,
						"fast" : 7,
						"stable" : 7,
						"guard" : 2,
						"middle" : 7,
						"exit" : 3,
						"dir" : 7,
						"pbr" : 0.000383,
						"pbg" : 0.000147,
						"pbm" : 0.000139,
						"pbe" : 0.000859
					}
				]
			},
			{
				"as" : 5607,
				"relay" : 8,
				"bwa" : 2753655,
				"bwc" : 1086839,
				"fast" : 7,
				"stable" : 1,
				"guard" : 1,
				"middle" : 8,
				"exit" : 2,
				"dir" : 5,
				"pbr" : 0.0005149999999999998,
				"pbg" : 0.000046,
				"pbm" : 0.000063,
				"pbe" : 0.001439,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 8,
						"bwa" : 2753655,
						"bwc" : 1086839,
						"fast" : 7,
						"stable" : 1,
						"guard" : 1,
						"middle" : 8,
						"exit" : 2,
						"dir" : 5,
						"pbr" : 0.0005149999999999998,
						"pbg" : 0.000046,
						"pbm" : 0.000063,
						"pbe" : 0.001439
					}
				]
			},
			{
				"as" : 47869,
				"relay" : 3,
				"bwa" : 5790720,
				"bwc" : 4154133,
				"fast" : 3,
				"stable" : 3,
				"guard" : 3,
				"middle" : 3,
				"exit" : 2,
				"dir" : 1,
				"pbr" : 0.001962,
				"pbg" : 0.0011350000000000002,
				"pbm" : 0.001106,
				"pbe" : 0.0036460000000000004,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 3,
						"bwa" : 5790720,
						"bwc" : 4154133,
						"fast" : 3,
						"stable" : 3,
						"guard" : 3,
						"middle" : 3,
						"exit" : 2,
						"dir" : 1,
						"pbr" : 0.001962,
						"pbg" : 0.0011350000000000002,
						"pbm" : 0.001106,
						"pbe" : 0.0036460000000000004
					}
				]
			},
			{
				"as" : 6327,
				"relay" : 22,
				"bwa" : 3471130,
				"bwc" : 1074199,
				"fast" : 14,
				"stable" : 16,
				"guard" : 3,
				"middle" : 22,
				"exit" : 3,
				"dir" : 11,
				"pbr" : 0.00045000000000000004,
				"pbg" : 0.000302,
				"pbm" : 0.000452,
				"pbe" : 0.000601,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 22,
						"bwa" : 3471130,
						"bwc" : 1074199,
						"fast" : 14,
						"stable" : 16,
						"guard" : 3,
						"middle" : 22,
						"exit" : 3,
						"dir" : 11,
						"pbr" : 0.00045000000000000004,
						"pbg" : 0.000302,
						"pbm" : 0.000452,
						"pbe" : 0.000601
					}
				]
			},
			{
				"as" : 224,
				"relay" : 13,
				"bwa" : 51792999,
				"bwc" : 42340144,
				"fast" : 13,
				"stable" : 5,
				"guard" : 5,
				"middle" : 13,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.012301999999999999,
				"pbg" : 0.023580999999999998,
				"pbm" : 0.013329999999999998,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NO",
						"relay" : 13,
						"bwa" : 51792999,
						"bwc" : 42340144,
						"fast" : 13,
						"stable" : 5,
						"guard" : 5,
						"middle" : 13,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.012301999999999999,
						"pbg" : 0.023580999999999998,
						"pbm" : 0.013329999999999998,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 16718,
				"relay" : 2,
				"bwa" : 174080,
				"bwc" : 3421,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000007,
				"pbg" : 0,
				"pbm" : 0.000019999999999999998,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 174080,
						"bwc" : 3421,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000007,
						"pbg" : 0,
						"pbm" : 0.000019999999999999998,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 6871,
				"relay" : 5,
				"bwa" : 308019,
				"bwc" : 60412,
				"fast" : 3,
				"stable" : 4,
				"guard" : 0,
				"middle" : 5,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000023,
				"pbg" : 0,
				"pbm" : 0.000068,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 5,
						"bwa" : 308019,
						"bwc" : 60412,
						"fast" : 3,
						"stable" : 4,
						"guard" : 0,
						"middle" : 5,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000023,
						"pbg" : 0,
						"pbm" : 0.000068,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 50503,
				"relay" : 1,
				"bwa" : 66546,
				"bwc" : 5817,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000007,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 1,
						"bwa" : 66546,
						"bwc" : 5817,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000007,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 41691,
				"relay" : 3,
				"bwa" : 985801,
				"bwc" : 331266,
				"fast" : 3,
				"stable" : 1,
				"guard" : 0,
				"middle" : 3,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000069,
				"pbg" : 0,
				"pbm" : 0.000208,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 3,
						"bwa" : 985801,
						"bwc" : 331266,
						"fast" : 3,
						"stable" : 1,
						"guard" : 0,
						"middle" : 3,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000069,
						"pbg" : 0,
						"pbm" : 0.000208,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 13237,
				"relay" : 3,
				"bwa" : 5963776,
				"bwc" : 7150614,
				"fast" : 3,
				"stable" : 2,
				"guard" : 2,
				"middle" : 3,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.002325,
				"pbg" : 0.0036260000000000003,
				"pbm" : 0.00335,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 3,
						"bwa" : 5963776,
						"bwc" : 7150614,
						"fast" : 3,
						"stable" : 2,
						"guard" : 2,
						"middle" : 3,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.002325,
						"pbg" : 0.0036260000000000003,
						"pbm" : 0.00335,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 47155,
				"relay" : 2,
				"bwa" : 430364,
				"bwc" : 42102,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000029,
				"pbg" : 0,
				"pbm" : 0.000001,
				"pbe" : 0.000088,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 2,
						"bwa" : 430364,
						"bwc" : 42102,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000029,
						"pbg" : 0,
						"pbm" : 0.000001,
						"pbe" : 0.000088
					}
				]
			},
			{
				"as" : 33387,
				"relay" : 1,
				"bwa" : 2405592,
				"bwc" : 1380620,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000868,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.002604,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 2405592,
						"bwc" : 1380620,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000868,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.002604
					}
				]
			},
			{
				"as" : 16652,
				"relay" : 7,
				"bwa" : 4849664,
				"bwc" : 4310729,
				"fast" : 7,
				"stable" : 7,
				"guard" : 7,
				"middle" : 7,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.001434,
				"pbg" : 0.001161,
				"pbm" : 0.00087,
				"pbe" : 0.002276,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 7,
						"bwa" : 4849664,
						"bwc" : 4310729,
						"fast" : 7,
						"stable" : 7,
						"guard" : 7,
						"middle" : 7,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.001434,
						"pbg" : 0.001161,
						"pbm" : 0.00087,
						"pbe" : 0.002276
					}
				]
			},
			{
				"as" : 40244,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 202927,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000019,
				"pbg" : 0.000041,
				"pbm" : 0.000016,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 202927,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000019,
						"pbg" : 0.000041,
						"pbm" : 0.000016,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 679,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 43218,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.00001,
				"pbg" : 0,
				"pbm" : 0.00003,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 43218,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.00001,
						"pbg" : 0,
						"pbm" : 0.00003,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 3651,
				"relay" : 3,
				"bwa" : 93184,
				"bwc" : 331,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 3,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000009,
				"pbg" : 0,
				"pbm" : 0.000027,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 3,
						"bwa" : 93184,
						"bwc" : 331,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 3,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000009,
						"pbg" : 0,
						"pbm" : 0.000027,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8560,
				"relay" : 10,
				"bwa" : 4670867,
				"bwc" : 1326512,
				"fast" : 9,
				"stable" : 9,
				"guard" : 5,
				"middle" : 10,
				"exit" : 0,
				"dir" : 6,
				"pbr" : 0.000992,
				"pbg" : 0.000373,
				"pbm" : 0.0026030000000000003,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 1945002,
						"bwc" : 1287816,
						"fast" : 7,
						"stable" : 8,
						"guard" : 5,
						"middle" : 8,
						"exit" : 0,
						"dir" : 5,
						"pbr" : 0.00018099999999999998,
						"pbg" : 0.000373,
						"pbm" : 0.00016900000000000002,
						"pbe" : 0
					},
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 2725865,
						"bwc" : 38696,
						"fast" : 2,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000811,
						"pbg" : 0,
						"pbm" : 0.0024340000000000004,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 6739,
				"relay" : 4,
				"bwa" : 604160,
				"bwc" : 278754,
				"fast" : 4,
				"stable" : 2,
				"guard" : 0,
				"middle" : 4,
				"exit" : 2,
				"dir" : 3,
				"pbr" : 0.000048,
				"pbg" : 0,
				"pbm" : 0.000049999999999999996,
				"pbe" : 0.000095,
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 4,
						"bwa" : 604160,
						"bwc" : 278754,
						"fast" : 4,
						"stable" : 2,
						"guard" : 0,
						"middle" : 4,
						"exit" : 2,
						"dir" : 3,
						"pbr" : 0.000048,
						"pbg" : 0,
						"pbm" : 0.000049999999999999996,
						"pbe" : 0.000095
					}
				]
			},
			{
				"as" : 19975,
				"relay" : 1,
				"bwa" : 524288,
				"bwc" : 351110,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000077,
				"pbg" : 0.000043,
				"pbm" : 0.000043,
				"pbe" : 0.000145,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 524288,
						"bwc" : 351110,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000077,
						"pbg" : 0.000043,
						"pbm" : 0.000043,
						"pbe" : 0.000145
					}
				]
			},
			{
				"as" : 51059,
				"relay" : 1,
				"bwa" : 81920,
				"bwc" : 13326,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000007,
				"pbg" : 0,
				"pbm" : 0.00002,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 81920,
						"bwc" : 13326,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000007,
						"pbg" : 0,
						"pbm" : 0.00002,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 3,
				"relay" : 4,
				"bwa" : 9850880,
				"bwc" : 6793228,
				"fast" : 4,
				"stable" : 4,
				"guard" : 3,
				"middle" : 4,
				"exit" : 1,
				"dir" : 3,
				"pbr" : 0.003128,
				"pbg" : 0.00175,
				"pbm" : 0.003771,
				"pbe" : 0.003862,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 9850880,
						"bwc" : 6793228,
						"fast" : 4,
						"stable" : 4,
						"guard" : 3,
						"middle" : 4,
						"exit" : 1,
						"dir" : 3,
						"pbr" : 0.003128,
						"pbg" : 0.00175,
						"pbm" : 0.003771,
						"pbe" : 0.003862
					}
				]
			},
			{
				"as" : 20454,
				"relay" : 5,
				"bwa" : 2825585,
				"bwc" : 1816808,
				"fast" : 5,
				"stable" : 4,
				"guard" : 4,
				"middle" : 5,
				"exit" : 0,
				"dir" : 3,
				"pbr" : 0.0006789999999999999,
				"pbg" : 0.001451,
				"pbm" : 0.000583,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 5,
						"bwa" : 2825585,
						"bwc" : 1816808,
						"fast" : 5,
						"stable" : 4,
						"guard" : 4,
						"middle" : 5,
						"exit" : 0,
						"dir" : 3,
						"pbr" : 0.0006789999999999999,
						"pbg" : 0.001451,
						"pbm" : 0.000583,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 29208,
				"relay" : 1,
				"bwa" : 5120000,
				"bwc" : 5120000,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.001967,
				"pbg" : 0.001102,
				"pbm" : 0.001102,
				"pbe" : 0.003695,
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 5120000,
						"bwc" : 5120000,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.001967,
						"pbg" : 0.001102,
						"pbm" : 0.001102,
						"pbe" : 0.003695
					}
				]
			},
			{
				"as" : 9822,
				"relay" : 2,
				"bwa" : 225280,
				"bwc" : 74211,
				"fast" : 1,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 2,
				"dir" : 1,
				"pbr" : 0.000019,
				"pbg" : 0.000009,
				"pbm" : 0.000009,
				"pbe" : 0.000038,
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 2,
						"bwa" : 225280,
							"bwc" : 74211,
						"fast" : 1,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 2,
						"dir" : 1,
						"pbr" : 0.000019,
						"pbg" : 0.000009,
						"pbm" : 0.000009,
						"pbe" : 0.000038
					}
				]
			},
			{
				"as" : 41557,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 17576,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0.000024,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "MK",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 17576,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 13618,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 804170,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000186,
				"pbg" : 0,
				"pbm" : 0.000559,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 804170,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000186,
						"pbg" : 0,
						"pbm" : 0.000559,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 36352,
				"relay" : 17,
				"bwa" : 13039614,
				"bwc" : 6448186,
				"fast" : 17,
				"stable" : 8,
				"guard" : 4,
				"middle" : 17,
				"exit" : 0,
				"dir" : 7,
				"pbr" : 0.0032990000000000003,
				"pbg" : 0.000686,
				"pbm" : 0.00921,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 16,
						"bwa" : 12855294,
						"bwc" : 6433712,
						"fast" : 16,
						"stable" : 7,
						"guard" : 4,
						"middle" : 16,
						"exit" : 0,
						"dir" : 7,
						"pbr" : 0.003288,
						"pbg" : 0.000686,
						"pbm" : 0.009176,
						"pbe" : 0
					},
					{
						"cc" : "AU",
						"relay" : 1,
						"bwa" : 184320,
						"bwc" : 14474,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000011,
						"pbg" : 0,
						"pbm" : 0.000034,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12093,
				"relay" : 2,
				"bwa" : 12634112,
				"bwc" : 12607142,
				"fast" : 2,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.007285000000000001,
				"pbg" : 0.004078,
				"pbm" : 0.004104,
				"pbe" : 0.013671,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 2,
						"bwa" : 12634112,
						"bwc" : 12607142,
						"fast" : 2,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.007285000000000001,
						"pbg" : 0.004078,
						"pbm" : 0.004104,
						"pbe" : 0.013671
					}
				]
			},
			{
				"as" : 39554,
				"relay" : 3,
				"bwa" : 1042432,
				"bwc" : 353444,
				"fast" : 3,
				"stable" : 2,
				"guard" : 1,
				"middle" : 3,
				"exit" : 2,
				"dir" : 2,
				"pbr" : 0.000128,
				"pbg" : 0.000056,
				"pbm" : 0.000022,
				"pbe" : 0.000306,
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 3,
						"bwa" : 1042432,
						"bwc" : 353444,
						"fast" : 3,
						"stable" : 2,
						"guard" : 1,
						"middle" : 3,
						"exit" : 2,
						"dir" : 2,
						"pbr" : 0.000128,
						"pbg" : 0.000056,
						"pbm" : 0.000022,
						"pbe" : 0.000306
					}
				]
			},
			{
				"as" : 21502,
				"relay" : 7,
				"bwa" : 1197040,
				"bwc" : 589248,
				"fast" : 7,
				"stable" : 3,
				"guard" : 1,
				"middle" : 7,
				"exit" : 1,
				"dir" : 3,
				"pbr" : 0.000151,
				"pbg" : 0.000098,
				"pbm" : 0.000107,
				"pbe" : 0.000245,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 7,
						"bwa" : 1197040,
						"bwc" : 589248,
						"fast" : 7,
						"stable" : 3,
						"guard" : 1,
						"middle" : 7,
						"exit" : 1,
						"dir" : 3,
						"pbr" : 0.000151,
						"pbg" : 0.000098,
						"pbm" : 0.000107,
						"pbe" : 0.000245
					}
				]
			},
			{
				"as" : 56322,
				"relay" : 3,
				"bwa" : 13762560,
				"bwc" : 7043675,
				"fast" : 3,
				"stable" : 3,
				"guard" : 3,
				"middle" : 3,
				"exit" : 1,
				"dir" : 3,
				"pbr" : 0.0014299999999999998,
				"pbg" : 0.0026539999999999997,
				"pbm" : 0.0011380000000000001,
				"pbe" : 0.000497,
				"countries" : [
					{
						"cc" : "HU",
						"relay" : 3,
						"bwa" : 13762560,
						"bwc" : 7043675,
						"fast" : 3,
						"stable" : 3,
						"guard" : 3,
						"middle" : 3,
						"exit" : 1,
						"dir" : 3,
						"pbr" : 0.0014299999999999998,
						"pbg" : 0.0026539999999999997,
						"pbm" : 0.0011380000000000001,
						"pbe" : 0.000497
					}
				]
			},
			{
				"as" : 43362,
				"relay" : 1,
				"bwa" : 232499,
				"bwc" : 6014,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 232499,
						"bwc" : 6014,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 12597,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 67427,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000009,
				"pbg" : 0,
				"pbm" : 0.000027,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 67427,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000009,
						"pbg" : 0,
						"pbm" : 0.000027,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 198093,
				"relay" : 4,
				"bwa" : 41963520,
				"bwc" : 29178317,
				"fast" : 3,
				"stable" : 4,
				"guard" : 3,
				"middle" : 4,
				"exit" : 3,
				"dir" : 4,
				"pbr" : 0.007064,
				"pbg" : 0.003956,
				"pbm" : 0.003965,
				"pbe" : 0.013264999999999999,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 4,
						"bwa" : 41963520,
						"bwc" : 29178317,
						"fast" : 3,
						"stable" : 4,
						"guard" : 3,
						"middle" : 4,
						"exit" : 3,
						"dir" : 4,
						"pbr" : 0.007064,
						"pbg" : 0.003956,
						"pbm" : 0.003965,
						"pbe" : 0.013264999999999999
					}
				]
			},
			{
				"as" : 42575,
				"relay" : 1,
				"bwa" : 98304,
				"bwc" : 31068,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000011,
				"pbg" : 0,
				"pbm" : 0.000033,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 98304,
						"bwc" : 31068,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000011,
						"pbg" : 0,
						"pbm" : 0.000033,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 47447,
				"relay" : 5,
				"bwa" : 20451740,
				"bwc" : 13668118,
				"fast" : 5,
				"stable" : 4,
				"guard" : 3,
				"middle" : 5,
				"exit" : 0,
				"dir" : 3,
				"pbr" : 0.003594,
				"pbg" : 0.002641,
				"pbm" : 0.008141,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 5,
						"bwa" : 20451740,
						"bwc" : 13668118,
						"fast" : 5,
						"stable" : 4,
						"guard" : 3,
						"middle" : 5,
						"exit" : 0,
						"dir" : 3,
						"pbr" : 0.003594,
						"pbg" : 0.002641,
						"pbm" : 0.008141,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 44925,
				"relay" : 4,
				"bwa" : 901120,
				"bwc" : 585242,
				"fast" : 4,
				"stable" : 2,
				"guard" : 0,
				"middle" : 4,
				"exit" : 3,
				"dir" : 0,
				"pbr" : 0.00009800000000000001,
				"pbg" : 0,
				"pbm" : 0.000024,
				"pbe" : 0.000271,
				"countries" : [
					{
						"cc" : "IS",
						"relay" : 4,
						"bwa" : 901120,
						"bwc" : 585242,
						"fast" : 4,
						"stable" : 2,
						"guard" : 0,
						"middle" : 4,
						"exit" : 3,
						"dir" : 0,
						"pbr" : 0.00009800000000000001,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0.000271
					}
				]
			},
			{
				"as" : 21107,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 5380,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "BA",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 5380,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 43350,
				"relay" : 6,
				"bwa" : 86371053,
				"bwc" : 67626536,
				"fast" : 6,
				"stable" : 5,
				"guard" : 5,
				"middle" : 6,
				"exit" : 5,
				"dir" : 4,
				"pbr" : 0.030623000000000004,
				"pbg" : 0.017169,
				"pbm" : 0.01705,
				"pbe" : 0.057646,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 6,
						"bwa" : 86371053,
						"bwc" : 67626536,
						"fast" : 6,
						"stable" : 5,
						"guard" : 5,
						"middle" : 6,
						"exit" : 5,
						"dir" : 4,
						"pbr" : 0.030623000000000004,
						"pbg" : 0.017169,
						"pbm" : 0.01705,
						"pbe" : 0.057646
					}
				]
			},
			{
				"as" : 29518,
				"relay" : 3,
				"bwa" : 1937408,
				"bwc" : 1426544,
				"fast" : 3,
				"stable" : 2,
				"guard" : 1,
				"middle" : 3,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000488,
				"pbg" : 0.000814,
				"pbm" : 0.0006490000000000001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 3,
						"bwa" : 1937408,
						"bwc" : 1426544,
						"fast" : 3,
						"stable" : 2,
						"guard" : 1,
						"middle" : 3,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000488,
						"pbg" : 0.000814,
						"pbm" : 0.0006490000000000001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 20766,
				"relay" : 2,
				"bwa" : 364544,
				"bwc" : 185520,
				"fast" : 2,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000023,
				"pbg" : 0.000031,
				"pbm" : 0.000012,
				"pbe" : 0.000024,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 2,
						"bwa" : 364544,
						"bwc" : 185520,
						"fast" : 2,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000023,
						"pbg" : 0.000031,
						"pbm" : 0.000012,
						"pbe" : 0.000024
					}
				]
			},
			{
				"as" : 3356,
				"relay" : 1,
				"bwa" : 119622,
				"bwc" : 17722,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000019,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000058,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 119622,
						"bwc" : 17722,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000019,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000058
					}
				]
			},
			{
				"as" : 30633,
				"relay" : 2,
				"bwa" : 3174400,
				"bwc" : 2208113,
				"fast" : 2,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.00046899999999999996,
				"pbg" : 0,
				"pbm" : 0.000024,
				"pbe" : 0.001384,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 3174400,
						"bwc" : 2208113,
						"fast" : 2,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.00046899999999999996,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0.001384
					}
				]
			},
			{
				"as" : 1785,
				"relay" : 2,
				"bwa" : 359493,
				"bwc" : 61857,
				"fast" : 1,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000027,
				"pbg" : 0,
				"pbm" : 0.00008,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 359493,
						"bwc" : 61857,
						"fast" : 1,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000027,
						"pbg" : 0,
						"pbm" : 0.00008,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 29854,
				"relay" : 2,
				"bwa" : 34440246,
				"bwc" : 26380848,
				"fast" : 2,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.012185,
				"pbg" : 0.011831,
				"pbm" : 0.024727000000000002,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 34440246,
						"bwc" : 26380848,
						"fast" : 2,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.012185,
						"pbg" : 0.011831,
						"pbm" : 0.024727000000000002,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 32220,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 401,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 401,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 6528,
				"relay" : 1,
				"bwa" : 153600,
				"bwc" : 75152,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000009,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000027,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 153600,
						"bwc" : 75152,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000009,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000027
					}
				]
			},
			{
				"as" : 10481,
				"relay" : 2,
				"bwa" : 208896,
				"bwc" : 17803,
				"fast" : 2,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000005,
				"countries" : [
					{
						"cc" : "AR",
						"relay" : 2,
						"bwa" : 208896,
						"bwc" : 17803,
						"fast" : 2,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000005
					}
				]
			},
			{
				"as" : 29073,
				"relay" : 18,
				"bwa" : 21464431,
				"bwc" : 15807425,
				"fast" : 6,
				"stable" : 15,
				"guard" : 3,
				"middle" : 18,
				"exit" : 16,
				"dir" : 4,
				"pbr" : 0.009250999999999995,
				"pbg" : 0.002786,
				"pbm" : 0.014728,
				"pbe" : 0.010238000000000004,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 18,
						"bwa" : 21464431,
						"bwc" : 15807425,
						"fast" : 6,
						"stable" : 15,
						"guard" : 3,
						"middle" : 18,
						"exit" : 16,
						"dir" : 4,
						"pbr" : 0.009250999999999995,
						"pbg" : 0.002786,
						"pbm" : 0.014728,
						"pbe" : 0.010238000000000004
					}
				]
			},
			{
				"as" : 17099,
				"relay" : 2,
				"bwa" : 256000,
				"bwc" : 4941,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000028000000000000003,
				"pbg" : 0,
				"pbm" : 0.000083,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 256000,
						"bwc" : 4941,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000028000000000000003,
						"pbg" : 0,
						"pbm" : 0.000083,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 32097,
				"relay" : 7,
				"bwa" : 12318653,
				"bwc" : 11161443,
				"fast" : 7,
				"stable" : 7,
				"guard" : 5,
				"middle" : 7,
				"exit" : 1,
				"dir" : 6,
				"pbr" : 0.002495,
				"pbg" : 0.004486,
				"pbm" : 0.002072,
				"pbe" : 0.000927,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 7,
						"bwa" : 12318653,
						"bwc" : 11161443,
						"fast" : 7,
						"stable" : 7,
						"guard" : 5,
						"middle" : 7,
						"exit" : 1,
						"dir" : 6,
						"pbr" : 0.002495,
						"pbg" : 0.004486,
						"pbm" : 0.002072,
						"pbe" : 0.000927
					}
				]
			},
			{
				"as" : 8681,
				"relay" : 1,
				"bwa" : 32000,
				"bwc" : 2554,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "JE",
						"relay" : 1,
						"bwa" : 32000,
						"bwc" : 2554,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 47544,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 249680,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000076,
				"pbg" : 0.000163,
				"pbm" : 0.000065,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 249680,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000076,
						"pbg" : 0.000163,
						"pbm" : 0.000065,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 44185,
				"relay" : 1,
				"bwa" : 256000,
				"bwc" : 236235,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.00005,
				"pbg" : 0,
				"pbm" : 0.000151,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SK",
						"relay" : 1,
						"bwa" : 256000,
						"bwc" : 236235,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.00005,
						"pbg" : 0,
						"pbm" : 0.000151,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 20507,
				"relay" : 2,
				"bwa" : 1114112,
				"bwc" : 646634,
				"fast" : 2,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.00016,
				"pbg" : 0.000334,
				"pbm" : 0.00014800000000000002,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 1114112,
						"bwc" : 646634,
						"fast" : 2,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.00016,
						"pbg" : 0.000334,
						"pbm" : 0.00014800000000000002,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 41011,
				"relay" : 1,
				"bwa" : 3617844,
				"bwc" : 1635238,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000972,
				"pbg" : 0.000545,
				"pbm" : 0.000544,
				"pbe" : 0.001826,
				"countries" : [
					{
						"cc" : "RO",
						"relay" : 1,
						"bwa" : 3617844,
						"bwc" : 1635238,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000972,
						"pbg" : 0.000545,
						"pbm" : 0.000544,
						"pbe" : 0.001826
					}
				]
			},
			{
				"as" : 2856,
				"relay" : 14,
				"bwa" : 4132625,
				"bwc" : 1582833,
				"fast" : 12,
				"stable" : 6,
				"guard" : 2,
				"middle" : 14,
				"exit" : 2,
				"dir" : 9,
				"pbr" : 0.0005279999999999999,
				"pbg" : 0.000263,
				"pbm" : 0.00106,
				"pbe" : 0.000265,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 14,
						"bwa" : 4132625,
						"bwc" : 1582833,
						"fast" : 12,
						"stable" : 6,
						"guard" : 2,
						"middle" : 14,
						"exit" : 2,
						"dir" : 9,
						"pbr" : 0.0005279999999999999,
						"pbg" : 0.000263,
						"pbm" : 0.00106,
						"pbe" : 0.000265
					}
				]
			},
			{
				"as" : 12741,
				"relay" : 4,
				"bwa" : 856064,
				"bwc" : 465134,
				"fast" : 3,
				"stable" : 1,
				"guard" : 1,
				"middle" : 4,
				"exit" : 2,
				"dir" : 4,
				"pbr" : 0.000105,
				"pbg" : 0.00019,
				"pbm" : 0.000083,
				"pbe" : 0.000043,
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 4,
						"bwa" : 856064,
						"bwc" : 465134,
						"fast" : 3,
						"stable" : 1,
						"guard" : 1,
						"middle" : 4,
						"exit" : 2,
						"dir" : 4,
						"pbr" : 0.000105,
						"pbg" : 0.00019,
						"pbm" : 0.000083,
						"pbe" : 0.000043
					}
				]
			},
			{
				"as" : 35612,
				"relay" : 3,
				"bwa" : 61440,
				"bwc" : 744,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 3,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000009,
				"pbg" : 0,
				"pbm" : 0.000027,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 3,
						"bwa" : 61440,
						"bwc" : 744,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 3,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000009,
						"pbg" : 0,
						"pbm" : 0.000027,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 20001,
				"relay" : 13,
				"bwa" : 1719818,
				"bwc" : 289771,
				"fast" : 11,
				"stable" : 5,
				"guard" : 1,
				"middle" : 13,
				"exit" : 4,
				"dir" : 9,
				"pbr" : 0.00010000000000000002,
				"pbg" : 0.000027,
				"pbm" : 0.000211,
				"pbe" : 0.000056000000000000006,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 13,
						"bwa" : 1719818,
						"bwc" : 289771,
						"fast" : 11,
						"stable" : 5,
						"guard" : 1,
						"middle" : 13,
						"exit" : 4,
						"dir" : 9,
						"pbr" : 0.00010000000000000002,
						"pbg" : 0.000027,
						"pbm" : 0.000211,
						"pbe" : 0.000056000000000000006
					}
				]
			},
			{
				"as" : 19182,
				"relay" : 1,
				"bwa" : 30720,
				"bwc" : 4353,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 1,
						"bwa" : 30720,
						"bwc" : 4353,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 3330,
				"relay" : 1,
				"bwa" : 122880,
				"bwc" : 59494,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000016,
				"pbg" : 0,
				"pbm" : 0.000047,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 122880,
						"bwc" : 59494,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000016,
						"pbg" : 0,
						"pbm" : 0.000047,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 11426,
				"relay" : 11,
				"bwa" : 1542745,
				"bwc" : 326538,
				"fast" : 9,
				"stable" : 5,
				"guard" : 1,
				"middle" : 11,
				"exit" : 2,
				"dir" : 9,
				"pbr" : 0.00011399999999999999,
				"pbg" : 0.000032,
				"pbm" : 0.000279,
				"pbe" : 0.000032000000000000005,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 11,
						"bwa" : 1542745,
						"bwc" : 326538,
						"fast" : 9,
						"stable" : 5,
						"guard" : 1,
						"middle" : 11,
						"exit" : 2,
						"dir" : 9,
						"pbr" : 0.00011399999999999999,
						"pbg" : 0.000032,
						"pbm" : 0.000279,
						"pbe" : 0.000032000000000000005
					}
				]
			},
			{
				"as" : 3243,
				"relay" : 3,
				"bwa" : 663453,
				"bwc" : 329857,
				"fast" : 3,
				"stable" : 0,
				"guard" : 1,
				"middle" : 3,
				"exit" : 3,
				"dir" : 3,
				"pbr" : 0.000085,
				"pbg" : 0.000013,
				"pbm" : 0.000013,
				"pbe" : 0.000229,
				"countries" : [
					{
						"cc" : "PT",
						"relay" : 3,
						"bwa" : 663453,
						"bwc" : 329857,
						"fast" : 3,
						"stable" : 0,
						"guard" : 1,
						"middle" : 3,
						"exit" : 3,
						"dir" : 3,
						"pbr" : 0.000085,
						"pbg" : 0.000013,
						"pbm" : 0.000013,
						"pbe" : 0.000229
					}
				]
			},
			{
				"as" : 35415,
				"relay" : 2,
				"bwa" : 3072000,
				"bwc" : 2698077,
				"fast" : 2,
				"stable" : 2,
				"guard" : 2,
				"middle" : 2,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000701,
				"pbg" : 0.001507,
				"pbm" : 0.000596,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 3072000,
						"bwc" : 2698077,
						"fast" : 2,
						"stable" : 2,
						"guard" : 2,
						"middle" : 2,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000701,
						"pbg" : 0.001507,
						"pbm" : 0.000596,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 197288,
				"relay" : 4,
				"bwa" : 501010,
				"bwc" : 84859,
				"fast" : 4,
				"stable" : 4,
				"guard" : 1,
				"middle" : 4,
				"exit" : 0,
				"dir" : 3,
				"pbr" : 0.000038,
				"pbg" : 0.00005,
				"pbm" : 0.00006599999999999999,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 4,
						"bwa" : 501010,
						"bwc" : 84859,
						"fast" : 4,
						"stable" : 4,
						"guard" : 1,
						"middle" : 4,
						"exit" : 0,
						"dir" : 3,
						"pbr" : 0.000038,
						"pbg" : 0.00005,
						"pbm" : 0.00006599999999999999,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8422,
				"relay" : 9,
				"bwa" : 1257616,
				"bwc" : 257718,
				"fast" : 6,
				"stable" : 3,
				"guard" : 0,
				"middle" : 9,
				"exit" : 0,
				"dir" : 3,
				"pbr" : 0.000086,
				"pbg" : 0,
				"pbm" : 0.00025399999999999994,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 9,
						"bwa" : 1257616,
						"bwc" : 257718,
						"fast" : 6,
						"stable" : 3,
						"guard" : 0,
						"middle" : 9,
						"exit" : 0,
						"dir" : 3,
						"pbr" : 0.000086,
						"pbg" : 0,
						"pbm" : 0.00025399999999999994,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 43988,
				"relay" : 1,
				"bwa" : 524288,
				"bwc" : 39780,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000272,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000816,
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 1,
						"bwa" : 524288,
						"bwc" : 39780,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000272,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000816
					}
				]
			},
			{
				"as" : 4844,
				"relay" : 1,
				"bwa" : 160311,
				"bwc" : 5198,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "SG",
						"relay" : 1,
						"bwa" : 160311,
						"bwc" : 5198,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 47692,
				"relay" : 7,
				"bwa" : 27136365,
				"bwc" : 18350643,
				"fast" : 7,
				"stable" : 6,
				"guard" : 4,
				"middle" : 7,
				"exit" : 5,
				"dir" : 7,
				"pbr" : 0.008238,
				"pbg" : 0.005177,
				"pbm" : 0.004153,
				"pbe" : 0.015381000000000002,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 17695085,
						"bwc" : 9615526,
						"fast" : 4,
						"stable" : 4,
						"guard" : 2,
						"middle" : 4,
						"exit" : 4,
						"dir" : 4,
						"pbr" : 0.004098,
						"pbg" : 0.001568,
						"pbm" : 0.001568,
						"pbe" : 0.009156999999999998
					},
					{
						"cc" : "AT",
						"relay" : 3,
						"bwa" : 9441280,
						"bwc" : 8735117,
						"fast" : 3,
						"stable" : 2,
						"guard" : 2,
						"middle" : 3,
						"exit" : 1,
						"dir" : 3,
						"pbr" : 0.00414,
						"pbg" : 0.0036090000000000002,
						"pbm" : 0.002585,
						"pbe" : 0.006224
					}
				]
			},
			{
				"as" : 6661,
				"relay" : 1,
				"bwa" : 200506,
				"bwc" : 10962,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0.000017,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "LU",
						"relay" : 1,
						"bwa" : 200506,
						"bwc" : 10962,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0.000017,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 17090,
				"relay" : 3,
				"bwa" : 10250572,
				"bwc" : 8296056,
				"fast" : 3,
				"stable" : 2,
				"guard" : 2,
				"middle" : 3,
				"exit" : 0,
				"dir" : 3,
				"pbr" : 0.003772,
				"pbg" : 0.007824000000000001,
				"pbm" : 0.003492,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 3,
						"bwa" : 10250572,
						"bwc" : 8296056,
						"fast" : 3,
						"stable" : 2,
						"guard" : 2,
						"middle" : 3,
						"exit" : 0,
						"dir" : 3,
						"pbr" : 0.003772,
						"pbg" : 0.007824000000000001,
						"pbm" : 0.003492,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8167,
				"relay" : 4,
				"bwa" : 211963,
				"bwc" : 30800,
				"fast" : 3,
				"stable" : 0,
				"guard" : 0,
				"middle" : 4,
				"exit" : 2,
				"dir" : 4,
				"pbr" : 0.000007,
				"pbg" : 0,
				"pbm" : 0.000002,
				"pbe" : 0.000017,
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 4,
						"bwa" : 211963,
						"bwc" : 30800,
						"fast" : 3,
						"stable" : 0,
						"guard" : 0,
						"middle" : 4,
						"exit" : 2,
						"dir" : 4,
						"pbr" : 0.000007,
						"pbg" : 0,
						"pbm" : 0.000002,
						"pbe" : 0.000017
					}
				]
			},
			{
				"as" : 39389,
				"relay" : 1,
				"bwa" : 640000,
				"bwc" : 634104,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000488,
				"pbg" : 0.000274,
				"pbm" : 0.000273,
				"pbe" : 0.000917,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 640000,
						"bwc" : 634104,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000488,
						"pbg" : 0.000274,
						"pbm" : 0.000273,
						"pbe" : 0.000917
					}
				]
			},
			{
				"as" : 14670,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 75997,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000013,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.00004,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 75997,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000013,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.00004
					}
				]
			},
			{
				"as" : 46,
				"relay" : 1,
				"bwa" : 3145728,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000776,
				"pbg" : 0.000435,
				"pbm" : 0.000435,
				"pbe" : 0.001459,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 3145728,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000776,
						"pbg" : 0.000435,
						"pbm" : 0.000435,
						"pbe" : 0.001459
					}
				]
			},
			{
				"as" : 61387,
				"relay" : 1,
				"bwa" : 40960,
				"bwc" : 60767,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000007,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000022,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 40960,
						"bwc" : 60767,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000007,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000022
					}
				]
			},
			{
				"as" : 29028,
				"relay" : 1,
				"bwa" : 82225,
				"bwc" : 35728,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000018,
				"pbg" : 0,
				"pbm" : 0.000055,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 82225,
						"bwc" : 35728,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000018,
						"pbg" : 0,
						"pbm" : 0.000055,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 35366,
				"relay" : 12,
				"bwa" : 12666293,
				"bwc" : 9514169,
				"fast" : 12,
				"stable" : 8,
				"guard" : 7,
				"middle" : 12,
				"exit" : 4,
				"dir" : 6,
				"pbr" : 0.002329,
				"pbg" : 0.001869,
				"pbm" : 0.00383,
				"pbe" : 0.00129,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 12,
						"bwa" : 12666293,
						"bwc" : 9514169,
						"fast" : 12,
						"stable" : 8,
						"guard" : 7,
						"middle" : 12,
						"exit" : 4,
						"dir" : 6,
						"pbr" : 0.002329,
						"pbg" : 0.001869,
						"pbm" : 0.00383,
						"pbe" : 0.00129
					}
				]
			},
			{
				"as" : 3301,
				"relay" : 12,
				"bwa" : 4746773,
				"bwc" : 1850417,
				"fast" : 11,
				"stable" : 9,
				"guard" : 3,
				"middle" : 12,
				"exit" : 3,
				"dir" : 9,
				"pbr" : 0.00044900000000000007,
				"pbg" : 0.000541,
				"pbm" : 0.0007120000000000001,
				"pbe" : 0.00009400000000000001,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 12,
						"bwa" : 4746773,
						"bwc" : 1850417,
						"fast" : 11,
						"stable" : 9,
						"guard" : 3,
						"middle" : 12,
						"exit" : 3,
						"dir" : 9,
						"pbr" : 0.00044900000000000007,
						"pbg" : 0.000541,
						"pbm" : 0.0007120000000000001,
						"pbe" : 0.00009400000000000001
					}
				]
			},
			{
				"as" : 8100,
				"relay" : 4,
				"bwa" : 118678901,
				"bwc" : 73219781,
				"fast" : 4,
				"stable" : 4,
				"guard" : 1,
				"middle" : 4,
				"exit" : 3,
				"dir" : 3,
				"pbr" : 0.015811,
				"pbg" : 0.001154,
				"pbm" : 0.000456,
				"pbe" : 0.045825000000000005,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 118678901,
						"bwc" : 73219781,
						"fast" : 4,
						"stable" : 4,
						"guard" : 1,
						"middle" : 4,
						"exit" : 3,
						"dir" : 3,
						"pbr" : 0.015811,
						"pbg" : 0.001154,
						"pbm" : 0.000456,
						"pbe" : 0.045825000000000005
					}
				]
			},
			{
				"as" : 35382,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 93490,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.00001,
				"pbg" : 0.000022,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 93490,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.00001,
						"pbg" : 0.000022,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 18712,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 61904,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0.000024,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 61904,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 45051,
				"relay" : 1,
				"bwa" : 1039664,
				"bwc" : 398537,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000138,
				"pbg" : 0.000077,
				"pbm" : 0.000077,
				"pbe" : 0.000259,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1039664,
						"bwc" : 398537,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000138,
						"pbg" : 0.000077,
						"pbm" : 0.000077,
						"pbe" : 0.000259
					}
				]
			},
			{
				"as" : 6851,
				"relay" : 1,
				"bwa" : 1221515,
				"bwc" : 341336,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000152,
				"pbg" : 0.000328,
				"pbm" : 0.000129,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "LV",
						"relay" : 1,
						"bwa" : 1221515,
						"bwc" : 341336,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000152,
						"pbg" : 0.000328,
						"pbm" : 0.000129,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 13647,
				"relay" : 1,
				"bwa" : 40960,
				"bwc" : 7937,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000009,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000026,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 40960,
						"bwc" : 7937,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000009,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000026
					}
				]
			},
			{
				"as" : 51032,
				"relay" : 1,
				"bwa" : 1115136,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000117,
				"pbg" : 0,
				"pbm" : 0.00035,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1115136,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000117,
						"pbg" : 0,
						"pbm" : 0.00035,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 50673,
				"relay" : 7,
				"bwa" : 8962653,
				"bwc" : 6959888,
				"fast" : 7,
				"stable" : 5,
				"guard" : 3,
				"middle" : 7,
				"exit" : 3,
				"dir" : 4,
				"pbr" : 0.001977,
				"pbg" : 0.0005610000000000001,
				"pbm" : 0.004548000000000001,
				"pbe" : 0.0008250000000000001,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 7,
						"bwa" : 8962653,
						"bwc" : 6959888,
						"fast" : 7,
						"stable" : 5,
						"guard" : 3,
						"middle" : 7,
						"exit" : 3,
						"dir" : 4,
						"pbr" : 0.001977,
						"pbg" : 0.0005610000000000001,
						"pbm" : 0.004548000000000001,
						"pbe" : 0.0008250000000000001
					}
				]
			},
			{
				"as" : 39608,
				"relay" : 2,
				"bwa" : 2592664,
				"bwc" : 1936957,
				"fast" : 2,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.0008349999999999999,
				"pbg" : 0.000464,
				"pbm" : 0.000485,
				"pbe" : 0.001556,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 2,
						"bwa" : 2592664,
						"bwc" : 1936957,
						"fast" : 2,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.0008349999999999999,
						"pbg" : 0.000464,
						"pbm" : 0.000485,
						"pbe" : 0.001556
					}
				]
			},
			{
				"as" : 20857,
				"relay" : 4,
				"bwa" : 3276800,
				"bwc" : 330332,
				"fast" : 4,
				"stable" : 1,
				"guard" : 0,
				"middle" : 4,
				"exit" : 2,
				"dir" : 0,
				"pbr" : 0.000606,
				"pbg" : 0,
				"pbm" : 0.001383,
				"pbe" : 0.000436,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 4,
						"bwa" : 3276800,
						"bwc" : 330332,
						"fast" : 4,
						"stable" : 1,
						"guard" : 0,
						"middle" : 4,
						"exit" : 2,
						"dir" : 0,
						"pbr" : 0.000606,
						"pbg" : 0,
						"pbm" : 0.001383,
						"pbe" : 0.000436
					}
				]
			},
			{
				"as" : 10929,
				"relay" : 4,
				"bwa" : 5974540,
				"bwc" : 2284850,
				"fast" : 4,
				"stable" : 3,
				"guard" : 2,
				"middle" : 4,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000574,
				"pbg" : 0.000331,
				"pbm" : 0.001391,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 4,
						"bwa" : 5974540,
						"bwc" : 2284850,
						"fast" : 4,
						"stable" : 3,
						"guard" : 2,
						"middle" : 4,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000574,
						"pbg" : 0.000331,
						"pbm" : 0.001391,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 54856,
				"relay" : 2,
				"bwa" : 167936,
				"bwc" : 47517,
				"fast" : 2,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000018,
				"pbg" : 0,
				"pbm" : 0.000053,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 167936,
						"bwc" : 47517,
						"fast" : 2,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000018,
						"pbg" : 0,
						"pbm" : 0.000053,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 9158,
				"relay" : 2,
				"bwa" : 131072,
				"bwc" : 2463,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000008000000000000001,
				"pbg" : 0,
				"pbm" : 0.00001,
				"pbe" : 0.000016,
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 2,
						"bwa" : 131072,
						"bwc" : 2463,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000008000000000000001,
						"pbg" : 0,
						"pbm" : 0.00001,
						"pbe" : 0.000016
					}
				]
			},
			{
				"as" : 50618,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 40504,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000011,
				"pbg" : 0,
				"pbm" : 0.000033,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 40504,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000011,
						"pbg" : 0,
						"pbm" : 0.000033,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 5602,
				"relay" : 2,
				"bwa" : 1955423,
				"bwc" : 1044045,
				"fast" : 2,
				"stable" : 1,
				"guard" : 1,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000084,
				"pbg" : 0.000131,
				"pbm" : 0.00011999999999999999,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 2,
						"bwa" : 1955423,
						"bwc" : 1044045,
						"fast" : 2,
						"stable" : 1,
						"guard" : 1,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000084,
						"pbg" : 0.000131,
						"pbm" : 0.00011999999999999999,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 2116,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 8236,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000007,
				"pbg" : 0,
				"pbm" : 0.000022,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NO",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 8236,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000007,
						"pbg" : 0,
						"pbm" : 0.000022,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 5610,
				"relay" : 2,
				"bwa" : 572636,
				"bwc" : 333210,
				"fast" : 2,
				"stable" : 1,
				"guard" : 1,
				"middle" : 2,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.00014199999999999998,
				"pbg" : 0.000301,
				"pbm" : 0.000119,
				"pbe" : 0.000006,
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 2,
						"bwa" : 572636,
						"bwc" : 333210,
						"fast" : 2,
						"stable" : 1,
						"guard" : 1,
						"middle" : 2,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.00014199999999999998,
						"pbg" : 0.000301,
						"pbm" : 0.000119,
						"pbe" : 0.000006
					}
				]
			},
			{
				"as" : 2497,
				"relay" : 2,
				"bwa" : 167936,
				"bwc" : 24088,
				"fast" : 2,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000008000000000000001,
				"pbg" : 0,
				"pbm" : 0.000024,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 2,
						"bwa" : 167936,
						"bwc" : 24088,
						"fast" : 2,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000008000000000000001,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 40475,
				"relay" : 3,
				"bwa" : 44414,
				"bwc" : 155151,
				"fast" : 0,
				"stable" : 2,
				"guard" : 0,
				"middle" : 3,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000004,
				"pbg" : 0,
				"pbm" : 0.000014000000000000001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 40960,
						"bwc" : 154994,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000004,
						"pbg" : 0,
						"pbm" : 0.000013000000000000001,
						"pbe" : 0
					},
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 3454,
						"bwc" : 157,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0,
						"pbg" : 0,
						"pbm" : 0.000001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 29084,
				"relay" : 1,
				"bwa" : 451731,
				"bwc" : 115278,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000033,
				"pbg" : 0,
				"pbm" : 0.000099,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "BG",
						"relay" : 1,
						"bwa" : 451731,
						"bwc" : 115278,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000033,
						"pbg" : 0,
						"pbm" : 0.000099,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 33785,
				"relay" : 3,
				"bwa" : 517120,
				"bwc" : 269246,
				"fast" : 3,
				"stable" : 3,
				"guard" : 1,
				"middle" : 3,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000034,
				"pbg" : 0.000021,
				"pbm" : 0.00007900000000000001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "EG",
						"relay" : 3,
						"bwa" : 517120,
						"bwc" : 269246,
						"fast" : 3,
						"stable" : 3,
						"guard" : 1,
						"middle" : 3,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000034,
						"pbg" : 0.000021,
						"pbm" : 0.00007900000000000001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 34358,
				"relay" : 1,
				"bwa" : 1504458,
				"bwc" : 892750,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000359,
				"pbg" : 0.000201,
				"pbm" : 0.000201,
				"pbe" : 0.000675,
				"countries" : [
					{
						"cc" : "RO",
						"relay" : 1,
						"bwa" : 1504458,
						"bwc" : 892750,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000359,
						"pbg" : 0.000201,
						"pbm" : 0.000201,
						"pbe" : 0.000675
					}
				]
			},
			{
				"as" : 30764,
				"relay" : 1,
				"bwa" : 131072,
				"bwc" : 84012,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000024,
				"pbg" : 0,
				"pbm" : 0.000071,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 131072,
						"bwc" : 84012,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000024,
						"pbg" : 0,
						"pbm" : 0.000071,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 28745,
				"relay" : 1,
				"bwa" : 1090212,
				"bwc" : 506839,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000114,
				"pbg" : 0,
				"pbm" : 0.000341,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1090212,
						"bwc" : 506839,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000114,
						"pbg" : 0,
						"pbm" : 0.000341,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 48133,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 27750,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000007,
				"pbg" : 0,
				"pbm" : 0.00002,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SK",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 27750,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000007,
						"pbg" : 0,
						"pbm" : 0.00002,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 39138,
				"relay" : 4,
				"bwa" : 109715327,
				"bwc" : 74040133,
				"fast" : 4,
				"stable" : 4,
				"guard" : 4,
				"middle" : 4,
				"exit" : 4,
				"dir" : 4,
				"pbr" : 0.037339000000000004,
				"pbg" : 0.020927,
				"pbm" : 0.020926,
				"pbe" : 0.070159,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 109715327,
						"bwc" : 74040133,
						"fast" : 4,
						"stable" : 4,
						"guard" : 4,
						"middle" : 4,
						"exit" : 4,
						"dir" : 4,
						"pbr" : 0.037339000000000004,
						"pbg" : 0.020927,
						"pbm" : 0.020926,
						"pbe" : 0.070159
					}
				]
			},
			{
				"as" : 14987,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 395516,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0.000006,
				"pbm" : 0.000003,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 395516,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0.000006,
						"pbm" : 0.000003,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 49855,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 80029,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000013,
				"pbg" : 0.000007,
				"pbm" : 0.000007,
				"pbe" : 0.000024,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 80029,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000013,
						"pbg" : 0.000007,
						"pbm" : 0.000007,
						"pbe" : 0.000024
					}
				]
			},
			{
				"as" : 32748,
				"relay" : 4,
				"bwa" : 1577789,
				"bwc" : 1139832,
				"fast" : 4,
				"stable" : 3,
				"guard" : 0,
				"middle" : 4,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000361,
				"pbg" : 0,
				"pbm" : 0.001086,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 1577789,
						"bwc" : 1139832,
						"fast" : 4,
						"stable" : 3,
						"guard" : 0,
						"middle" : 4,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000361,
						"pbg" : 0,
						"pbm" : 0.001086,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 52201,
				"relay" : 4,
				"bwa" : 2486272,
				"bwc" : 990265,
				"fast" : 4,
				"stable" : 4,
				"guard" : 2,
				"middle" : 4,
				"exit" : 3,
				"dir" : 3,
				"pbr" : 0.000313,
				"pbg" : 0.000162,
				"pbm" : 0.000193,
				"pbe" : 0.000584,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 4,
						"bwa" : 2486272,
						"bwc" : 990265,
						"fast" : 4,
						"stable" : 4,
						"guard" : 2,
						"middle" : 4,
						"exit" : 3,
						"dir" : 3,
						"pbr" : 0.000313,
						"pbg" : 0.000162,
						"pbm" : 0.000193,
						"pbe" : 0.000584
					}
				]
			},
			{
				"as" : 4766,
				"relay" : 3,
				"bwa" : 657724,
				"bwc" : 86329,
				"fast" : 3,
				"stable" : 1,
				"guard" : 1,
				"middle" : 3,
				"exit" : 0,
				"dir" : 3,
				"pbr" : 0.000033,
				"pbg" : 0.000057,
				"pbm" : 0.000043,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "KR",
						"relay" : 3,
						"bwa" : 657724,
						"bwc" : 86329,
						"fast" : 3,
						"stable" : 1,
						"guard" : 1,
						"middle" : 3,
						"exit" : 0,
						"dir" : 3,
						"pbr" : 0.000033,
						"pbg" : 0.000057,
						"pbm" : 0.000043,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 49770,
				"relay" : 2,
				"bwa" : 1354413,
				"bwc" : 672035,
				"fast" : 2,
				"stable" : 2,
				"guard" : 2,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000152,
				"pbg" : 0.00032700000000000003,
				"pbm" : 0.000129,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 2,
						"bwa" : 1354413,
						"bwc" : 672035,
						"fast" : 2,
						"stable" : 2,
						"guard" : 2,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000152,
						"pbg" : 0.00032700000000000003,
						"pbm" : 0.000129,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 43326,
				"relay" : 1,
				"bwa" : 2097152,
				"bwc" : 2022082,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.00135,
				"pbg" : 0.002904,
				"pbm" : 0.001147,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 2097152,
						"bwc" : 2022082,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.00135,
						"pbg" : 0.002904,
						"pbm" : 0.001147,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 17547,
				"relay" : 1,
				"bwa" : 587195,
				"bwc" : 188775,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000071,
				"pbg" : 0.00004,
				"pbm" : 0.00004,
				"pbe" : 0.000133,
				"countries" : [
					{
						"cc" : "SG",
						"relay" : 1,
						"bwa" : 587195,
						"bwc" : 188775,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000071,
						"pbg" : 0.00004,
						"pbm" : 0.00004,
						"pbe" : 0.000133
					}
				]
			},
			{
				"as" : 35911,
				"relay" : 1,
				"bwa" : 65536,
				"bwc" : 443,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 65536,
						"bwc" : 443,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 20676,
				"relay" : 4,
				"bwa" : 383054,
				"bwc" : 108430,
				"fast" : 4,
				"stable" : 2,
				"guard" : 0,
				"middle" : 4,
				"exit" : 1,
				"dir" : 4,
				"pbr" : 0.000027999999999999996,
				"pbg" : 0,
				"pbm" : 0.000061000000000000005,
				"pbe" : 0.000022,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 383054,
						"bwc" : 108430,
						"fast" : 4,
						"stable" : 2,
						"guard" : 0,
						"middle" : 4,
						"exit" : 1,
						"dir" : 4,
						"pbr" : 0.000027999999999999996,
						"pbg" : 0,
						"pbm" : 0.000061000000000000005,
						"pbe" : 0.000022
					}
				]
			},
			{
				"as" : 8881,
				"relay" : 1,
				"bwa" : 71680,
				"bwc" : 17346,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.00001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 71680,
						"bwc" : 17346,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.00001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 6714,
				"relay" : 1,
				"bwa" : 34901,
				"bwc" : 2660,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 34901,
						"bwc" : 2660,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 18779,
				"relay" : 4,
				"bwa" : 10968743,
				"bwc" : 6169900,
				"fast" : 4,
				"stable" : 4,
				"guard" : 2,
				"middle" : 4,
				"exit" : 3,
				"dir" : 1,
				"pbr" : 0.002994,
				"pbg" : 0.000647,
				"pbm" : 0.002586,
				"pbe" : 0.00575,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 10968743,
						"bwc" : 6169900,
						"fast" : 4,
						"stable" : 4,
						"guard" : 2,
						"middle" : 4,
						"exit" : 3,
						"dir" : 1,
						"pbr" : 0.002994,
						"pbg" : 0.000647,
						"pbm" : 0.002586,
						"pbe" : 0.00575
					}
				]
			},
			{
				"as" : 20723,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 458,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 458,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 43541,
				"relay" : 4,
				"bwa" : 1765376,
				"bwc" : 1496027,
				"fast" : 4,
				"stable" : 4,
				"guard" : 4,
				"middle" : 4,
				"exit" : 2,
				"dir" : 4,
				"pbr" : 0.000496,
				"pbg" : 0.00051,
				"pbm" : 0.000319,
				"pbe" : 0.000655,
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 4,
						"bwa" : 1765376,
						"bwc" : 1496027,
						"fast" : 4,
						"stable" : 4,
						"guard" : 4,
						"middle" : 4,
						"exit" : 2,
						"dir" : 4,
						"pbr" : 0.000496,
						"pbg" : 0.00051,
						"pbm" : 0.000319,
						"pbe" : 0.000655
					}
				]
			},
			{
				"as" : 15435,
				"relay" : 1,
				"bwa" : 196608,
				"bwc" : 175094,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000386,
				"pbg" : 0,
				"pbm" : 0.001158,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 196608,
						"bwc" : 175094,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000386,
						"pbg" : 0,
						"pbm" : 0.001158,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 15626,
				"relay" : 1,
				"bwa" : 470392,
				"bwc" : 61323,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000025,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 470392,
						"bwc" : 61323,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000025
					}
				]
			},
			{
				"as" : 28625,
				"relay" : 1,
				"bwa" : 98377,
				"bwc" : 26310,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000006,
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 1,
						"bwa" : 98377,
						"bwc" : 26310,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000006
					}
				]
			},
			{
				"as" : 12578,
				"relay" : 2,
				"bwa" : 140235,
				"bwc" : 57816,
				"fast" : 1,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000011,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000032,
				"countries" : [
					{
						"cc" : "LV",
						"relay" : 2,
						"bwa" : 140235,
						"bwc" : 57816,
						"fast" : 1,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000011,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000032
					}
				]
			},
			{
				"as" : 46925,
				"relay" : 1,
				"bwa" : 32768,
				"bwc" : 128,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 32768,
						"bwc" : 128,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 11878,
				"relay" : 1,
				"bwa" : 947563,
				"bwc" : 412629,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.0001,
				"pbg" : 0,
				"pbm" : 0.000299,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 947563,
						"bwc" : 412629,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.0001,
						"pbg" : 0,
						"pbm" : 0.000299,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 3215,
				"relay" : 6,
				"bwa" : 4615317,
				"bwc" : 4114831,
				"fast" : 4,
				"stable" : 1,
				"guard" : 0,
				"middle" : 6,
				"exit" : 0,
				"dir" : 3,
				"pbr" : 0.00157,
				"pbg" : 0,
				"pbm" : 0.004713000000000001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 6,
						"bwa" : 4615317,
						"bwc" : 4114831,
						"fast" : 4,
						"stable" : 1,
						"guard" : 0,
						"middle" : 6,
						"exit" : 0,
						"dir" : 3,
						"pbr" : 0.00157,
						"pbg" : 0,
						"pbm" : 0.004713000000000001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 3595,
				"relay" : 9,
				"bwa" : 1706190,
				"bwc" : 674491,
				"fast" : 9,
				"stable" : 8,
				"guard" : 1,
				"middle" : 9,
				"exit" : 0,
				"dir" : 7,
				"pbr" : 0.000184,
				"pbg" : 0.000203,
				"pbm" : 0.000351,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 9,
						"bwa" : 1706190,
						"bwc" : 674491,
						"fast" : 9,
						"stable" : 8,
						"guard" : 1,
						"middle" : 9,
						"exit" : 0,
						"dir" : 7,
						"pbr" : 0.000184,
						"pbg" : 0.000203,
						"pbm" : 0.000351,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 32475,
				"relay" : 3,
				"bwa" : 1136640,
				"bwc" : 780814,
				"fast" : 3,
				"stable" : 3,
				"guard" : 1,
				"middle" : 3,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000181,
				"pbg" : 0.000315,
				"pbm" : 0.000229,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 3,
						"bwa" : 1136640,
						"bwc" : 780814,
						"fast" : 3,
						"stable" : 3,
						"guard" : 1,
						"middle" : 3,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000181,
						"pbg" : 0.000315,
						"pbm" : 0.000229,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 13285,
				"relay" : 5,
				"bwa" : 390093,
				"bwc" : 57713,
				"fast" : 4,
				"stable" : 1,
				"guard" : 0,
				"middle" : 5,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000023,
				"pbg" : 0,
				"pbm" : 0.000054000000000000005,
				"pbe" : 0.000015,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 5,
						"bwa" : 390093,
						"bwc" : 57713,
						"fast" : 4,
						"stable" : 1,
						"guard" : 0,
						"middle" : 5,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000023,
						"pbg" : 0,
						"pbm" : 0.000054000000000000005,
						"pbe" : 0.000015
					}
				]
			},
			{
				"as" : 6893,
				"relay" : 3,
				"bwa" : 16439354,
				"bwc" : 12984632,
				"fast" : 3,
				"stable" : 3,
				"guard" : 2,
				"middle" : 3,
				"exit" : 2,
				"dir" : 2,
				"pbr" : 0.006517,
				"pbg" : 0.010896000000000001,
				"pbm" : 0.0049510000000000005,
				"pbe" : 0.0037,
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 3,
						"bwa" : 16439354,
						"bwc" : 12984632,
						"fast" : 3,
						"stable" : 3,
						"guard" : 2,
						"middle" : 3,
						"exit" : 2,
						"dir" : 2,
						"pbr" : 0.006517,
						"pbg" : 0.010896000000000001,
						"pbm" : 0.0049510000000000005,
						"pbe" : 0.0037
					}
				]
			},
			{
				"as" : 51167,
				"relay" : 3,
				"bwa" : 5278368,
				"bwc" : 2845540,
				"fast" : 3,
				"stable" : 2,
				"guard" : 3,
				"middle" : 3,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.001401,
				"pbg" : 0.003012,
				"pbm" : 0.001189,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 3,
						"bwa" : 5278368,
						"bwc" : 2845540,
						"fast" : 3,
						"stable" : 2,
						"guard" : 3,
						"middle" : 3,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.001401,
						"pbg" : 0.003012,
						"pbm" : 0.001189,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 45595,
				"relay" : 1,
				"bwa" : 35261,
				"bwc" : 3124,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "PK",
						"relay" : 1,
						"bwa" : 35261,
						"bwc" : 3124,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 3269,
				"relay" : 8,
				"bwa" : 282511,
				"bwc" : 12142,
				"fast" : 2,
				"stable" : 3,
				"guard" : 0,
				"middle" : 8,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000022999999999999997,
				"pbg" : 0,
				"pbm" : 0.00006900000000000001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 8,
						"bwa" : 282511,
						"bwc" : 12142,
						"fast" : 2,
						"stable" : 3,
						"guard" : 0,
						"middle" : 8,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000022999999999999997,
						"pbg" : 0,
						"pbm" : 0.00006900000000000001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 55045,
				"relay" : 1,
				"bwa" : 437925,
				"bwc" : 99312,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000033,
				"pbg" : 0,
				"pbm" : 0.0001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 437925,
						"bwc" : 99312,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000033,
						"pbg" : 0,
						"pbm" : 0.0001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 3722,
				"relay" : 2,
				"bwa" : 532121,
				"bwc" : 84165,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000051000000000000006,
				"pbg" : 0,
				"pbm" : 0.000153,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 532121,
						"bwc" : 84165,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000051000000000000006,
						"pbg" : 0,
						"pbm" : 0.000153,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 44957,
				"relay" : 2,
				"bwa" : 71680,
				"bwc" : 11017,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000004,
				"pbe" : 0.000005,
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 2,
						"bwa" : 71680,
						"bwc" : 11017,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000004,
						"pbe" : 0.000005
					}
				]
			},
			{
				"as" : 14901,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 18049,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000009,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000028,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 18049,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000009,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000028
					}
				]
			},
			{
				"as" : 42695,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 22754,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0.000024,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 22754,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 197540,
				"relay" : 4,
				"bwa" : 1474263,
				"bwc" : 1136201,
				"fast" : 4,
				"stable" : 4,
				"guard" : 2,
				"middle" : 4,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000265,
				"pbg" : 0.0005110000000000001,
				"pbm" : 0.000281,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 1474263,
						"bwc" : 1136201,
						"fast" : 4,
						"stable" : 4,
						"guard" : 2,
						"middle" : 4,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000265,
						"pbg" : 0.0005110000000000001,
						"pbm" : 0.000281,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 46664,
				"relay" : 2,
				"bwa" : 1626956,
				"bwc" : 1568838,
				"fast" : 2,
				"stable" : 1,
				"guard" : 1,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000282,
				"pbg" : 0.000601,
				"pbm" : 0.00024599999999999996,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 1626956,
						"bwc" : 1568838,
						"fast" : 2,
						"stable" : 1,
						"guard" : 1,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000282,
						"pbg" : 0.000601,
						"pbm" : 0.00024599999999999996,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 48926,
				"relay" : 1,
				"bwa" : 2526193,
				"bwc" : 1741862,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000871,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.002613,
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 2526193,
						"bwc" : 1741862,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000871,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.002613
					}
				]
			},
			{
				"as" : 31100,
				"relay" : 1,
				"bwa" : 262144,
				"bwc" : 30359,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000024,
				"pbg" : 0.000052,
				"pbm" : 0.00002,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 262144,
						"bwc" : 30359,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000024,
						"pbg" : 0.000052,
						"pbm" : 0.00002,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 9044,
				"relay" : 1,
				"bwa" : 81920,
				"bwc" : 8381,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000007,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.00002,
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 1,
						"bwa" : 81920,
						"bwc" : 8381,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000007,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.00002
					}
				]
			},
			{
				"as" : 4385,
				"relay" : 1,
				"bwa" : 208896,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000007,
				"pbg" : 0,
				"pbm" : 0.00002,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 208896,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000007,
						"pbg" : 0,
						"pbm" : 0.00002,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 31012,
				"relay" : 1,
				"bwa" : 65536,
				"bwc" : 4629,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.00001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "HR",
						"relay" : 1,
						"bwa" : 65536,
						"bwc" : 4629,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.00001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 43948,
				"relay" : 1,
				"bwa" : 10273,
				"bwc" : 389,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000004,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 10273,
						"bwc" : 389,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000004,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 52048,
				"relay" : 2,
				"bwa" : 793600,
				"bwc" : 1826338,
				"fast" : 2,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000519,
				"pbg" : 0,
				"pbm" : 0.001557,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "LV",
						"relay" : 2,
						"bwa" : 793600,
						"bwc" : 1826338,
						"fast" : 2,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000519,
						"pbg" : 0,
						"pbm" : 0.001557,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8334,
				"relay" : 3,
				"bwa" : 6856704,
				"bwc" : 6186289,
				"fast" : 3,
				"stable" : 1,
				"guard" : 0,
				"middle" : 3,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.001616,
				"pbg" : 0,
				"pbm" : 0.0048449999999999995,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 3,
						"bwa" : 6856704,
						"bwc" : 6186289,
						"fast" : 3,
						"stable" : 1,
						"guard" : 0,
						"middle" : 3,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.001616,
						"pbg" : 0,
						"pbm" : 0.0048449999999999995,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 42831,
				"relay" : 2,
				"bwa" : 977920,
				"bwc" : 778132,
				"fast" : 2,
				"stable" : 2,
				"guard" : 2,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.00021,
				"pbg" : 0.000452,
				"pbm" : 0.00017900000000000001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 2,
						"bwa" : 977920,
						"bwc" : 778132,
						"fast" : 2,
						"stable" : 2,
						"guard" : 2,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.00021,
						"pbg" : 0.000452,
						"pbm" : 0.00017900000000000001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 27992,
				"relay" : 1,
				"bwa" : 121354,
				"bwc" : 28269,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000004,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000013,
				"countries" : [
					{
						"cc" : "CO",
						"relay" : 1,
						"bwa" : 121354,
						"bwc" : 28269,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000004,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000013
					}
				]
			},
			{
				"as" : 44066,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 33550,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000122,
				"pbg" : 0,
				"pbm" : 0.000365,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 33550,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000122,
						"pbg" : 0,
						"pbm" : 0.000365,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 16125,
				"relay" : 1,
				"bwa" : 3717370,
				"bwc" : 1134981,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000509,
				"pbg" : 0.000285,
				"pbm" : 0.000285,
				"pbe" : 0.000956,
				"countries" : [
					{
						"cc" : "LT",
						"relay" : 1,
						"bwa" : 3717370,
						"bwc" : 1134981,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000509,
						"pbg" : 0.000285,
						"pbm" : 0.000285,
						"pbe" : 0.000956
					}
				]
			},
			{
				"as" : 17813,
				"relay" : 6,
				"bwa" : 364853,
				"bwc" : 39151,
				"fast" : 6,
				"stable" : 1,
				"guard" : 0,
				"middle" : 6,
				"exit" : 6,
				"dir" : 5,
				"pbr" : 0.000018,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.00005300000000000001,
				"countries" : [
					{
						"cc" : "IN",
						"relay" : 6,
						"bwa" : 364853,
						"bwc" : 39151,
						"fast" : 6,
						"stable" : 1,
						"guard" : 0,
						"middle" : 6,
						"exit" : 6,
						"dir" : 5,
						"pbr" : 0.000018,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.00005300000000000001
					}
				]
			},
			{
				"as" : 30266,
				"relay" : 4,
				"bwa" : 8932881,
				"bwc" : 7053580,
				"fast" : 4,
				"stable" : 3,
				"guard" : 3,
				"middle" : 4,
				"exit" : 0,
				"dir" : 3,
				"pbr" : 0.002139,
				"pbg" : 0.004582,
				"pbm" : 0.0018349999999999998,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 8932881,
						"bwc" : 7053580,
						"fast" : 4,
						"stable" : 3,
						"guard" : 3,
						"middle" : 4,
						"exit" : 0,
						"dir" : 3,
						"pbr" : 0.002139,
						"pbg" : 0.004582,
						"pbm" : 0.0018349999999999998,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 10913,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 688121,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000461,
				"pbg" : 0.000992,
				"pbm" : 0.000392,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 688121,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000461,
						"pbg" : 0.000992,
						"pbm" : 0.000392,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 35376,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 2053476,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000645,
				"pbg" : 0,
				"pbm" : 0.001934,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 2053476,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000645,
						"pbg" : 0,
						"pbm" : 0.001934,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 2044,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 88672,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000007,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000021,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 88672,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000007,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000021
					}
				]
			},
			{
				"as" : 13124,
				"relay" : 2,
				"bwa" : 139264,
				"bwc" : 12651,
				"fast" : 1,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.0000049999999999999996,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0.000007,
				"countries" : [
					{
						"cc" : "BG",
						"relay" : 2,
						"bwa" : 139264,
						"bwc" : 12651,
						"fast" : 1,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.0000049999999999999996,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0.000007
					}
				]
			},
			{
				"as" : 16186,
				"relay" : 2,
				"bwa" : 2705023,
				"bwc" : 1434134,
				"fast" : 2,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000286,
				"pbg" : 0.000595,
				"pbm" : 0.000235,
				"pbe" : 0.000026,
				"countries" : [
					{
						"cc" : "NO",
						"relay" : 2,
						"bwa" : 2705023,
						"bwc" : 1434134,
						"fast" : 2,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000286,
						"pbg" : 0.000595,
						"pbm" : 0.000235,
						"pbe" : 0.000026
					}
				]
			},
			{
				"as" : 49981,
				"relay" : 1,
				"bwa" : 4334820,
				"bwc" : 4010461,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.001387,
				"pbg" : 0,
				"pbm" : 0.004161,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 4334820,
						"bwc" : 4010461,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.001387,
						"pbg" : 0,
						"pbm" : 0.004161,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 24466,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 2808,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000006,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NZ",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 2808,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000006,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 7860,
				"relay" : 1,
				"bwa" : 65816,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 65816,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 18881,
				"relay" : 3,
				"bwa" : 199683,
				"bwc" : 55105,
				"fast" : 3,
				"stable" : 0,
				"guard" : 0,
				"middle" : 3,
				"exit" : 3,
				"dir" : 3,
				"pbr" : 0.000013000000000000001,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000041,
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 3,
						"bwa" : 199683,
						"bwc" : 55105,
						"fast" : 3,
						"stable" : 0,
						"guard" : 0,
						"middle" : 3,
						"exit" : 3,
						"dir" : 3,
						"pbr" : 0.000013000000000000001,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000041
					}
				]
			},
			{
				"as" : 13213,
				"relay" : 5,
				"bwa" : 56010502,
				"bwc" : 44206719,
				"fast" : 5,
				"stable" : 4,
				"guard" : 4,
				"middle" : 5,
				"exit" : 4,
				"dir" : 4,
				"pbr" : 0.040702,
				"pbg" : 0.022292,
				"pbm" : 0.021448000000000002,
				"pbe" : 0.07836000000000001,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 5,
						"bwa" : 56010502,
						"bwc" : 44206719,
						"fast" : 5,
						"stable" : 4,
						"guard" : 4,
						"middle" : 5,
						"exit" : 4,
						"dir" : 4,
						"pbr" : 0.040702,
						"pbg" : 0.022292,
						"pbm" : 0.021448000000000002,
						"pbe" : 0.07836000000000001
					}
				]
			},
			{
				"as" : 46475,
				"relay" : 14,
				"bwa" : 4902627,
				"bwc" : 1725720,
				"fast" : 14,
				"stable" : 12,
				"guard" : 5,
				"middle" : 14,
				"exit" : 7,
				"dir" : 8,
				"pbr" : 0.000854,
				"pbg" : 0.000945,
				"pbm" : 0.0005610000000000001,
				"pbe" : 0.001052,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 14,
						"bwa" : 4902627,
						"bwc" : 1725720,
						"fast" : 14,
						"stable" : 12,
						"guard" : 5,
						"middle" : 14,
						"exit" : 7,
						"dir" : 8,
						"pbr" : 0.000854,
						"pbg" : 0.000945,
						"pbm" : 0.0005610000000000001,
						"pbe" : 0.001052
					}
				]
			},
			{
				"as" : 41966,
				"relay" : 1,
				"bwa" : 402007,
				"bwc" : 301313,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.00009,
				"pbg" : 0,
				"pbm" : 0.00027,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 402007,
						"bwc" : 301313,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.00009,
						"pbg" : 0,
						"pbm" : 0.00027,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 30083,
				"relay" : 3,
				"bwa" : 972800,
				"bwc" : 1094705,
				"fast" : 3,
				"stable" : 3,
				"guard" : 3,
				"middle" : 3,
				"exit" : 0,
				"dir" : 3,
				"pbr" : 0.00021700000000000002,
				"pbg" : 0.00046699999999999997,
				"pbm" : 0.000184,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 3,
						"bwa" : 972800,
						"bwc" : 1094705,
						"fast" : 3,
						"stable" : 3,
						"guard" : 3,
						"middle" : 3,
						"exit" : 0,
						"dir" : 3,
						"pbr" : 0.00021700000000000002,
						"pbg" : 0.00046699999999999997,
						"pbm" : 0.000184,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 15943,
				"relay" : 5,
				"bwa" : 3496317,
				"bwc" : 933470,
				"fast" : 5,
				"stable" : 1,
				"guard" : 0,
				"middle" : 5,
				"exit" : 0,
				"dir" : 4,
				"pbr" : 0.00042500000000000003,
				"pbg" : 0,
				"pbm" : 0.001275,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 5,
						"bwa" : 3496317,
						"bwc" : 933470,
						"fast" : 5,
						"stable" : 1,
						"guard" : 0,
						"middle" : 5,
						"exit" : 0,
						"dir" : 4,
						"pbr" : 0.00042500000000000003,
						"pbg" : 0,
						"pbm" : 0.001275,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 21069,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 49893,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000009,
				"pbg" : 0,
				"pbm" : 0.000028,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 49893,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000009,
						"pbg" : 0,
						"pbm" : 0.000028,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 31019,
				"relay" : 1,
				"bwa" : 741008,
				"bwc" : 302263,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000105,
				"pbg" : 0,
				"pbm" : 0.000316,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 741008,
						"bwc" : 302263,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000105,
						"pbg" : 0,
						"pbm" : 0.000316,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 2516,
				"relay" : 13,
				"bwa" : 5223831,
				"bwc" : 2510888,
				"fast" : 13,
				"stable" : 10,
				"guard" : 3,
				"middle" : 13,
				"exit" : 5,
				"dir" : 5,
				"pbr" : 0.0005110000000000001,
				"pbg" : 0.000194,
				"pbm" : 0.000274,
				"pbe" : 0.0010649999999999998,
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 9,
						"bwa" : 4783511,
						"bwc" : 2332577,
						"fast" : 9,
						"stable" : 6,
						"guard" : 3,
						"middle" : 9,
						"exit" : 2,
						"dir" : 4,
						"pbr" : 0.00046200000000000006,
						"pbg" : 0.000194,
						"pbm" : 0.000251,
						"pbe" : 0.000941
					},
					{
						"cc" : "CN",
						"relay" : 4,
						"bwa" : 440320,
						"bwc" : 178311,
						"fast" : 4,
						"stable" : 4,
						"guard" : 0,
						"middle" : 4,
						"exit" : 3,
						"dir" : 1,
						"pbr" : 0.000049,
						"pbg" : 0,
						"pbm" : 0.000023,
						"pbe" : 0.000124
					}
				]
			},
			{
				"as" : 21127,
				"relay" : 1,
				"bwa" : 131072,
				"bwc" : 24579,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000023,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 131072,
						"bwc" : 24579,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000023
					}
				]
			},
			{
				"as" : 36492,
				"relay" : 1,
				"bwa" : 1280000,
				"bwc" : 675151,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000277,
				"pbg" : 0.000595,
				"pbm" : 0.000235,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1280000,
						"bwc" : 675151,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000277,
						"pbg" : 0.000595,
						"pbm" : 0.000235,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 30036,
				"relay" : 6,
				"bwa" : 882743,
				"bwc" : 296276,
				"fast" : 6,
				"stable" : 4,
				"guard" : 2,
				"middle" : 6,
				"exit" : 0,
				"dir" : 5,
				"pbr" : 0.000096,
				"pbg" : 0.000067,
				"pbm" : 0.000224,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 6,
						"bwa" : 882743,
						"bwc" : 296276,
						"fast" : 6,
						"stable" : 4,
						"guard" : 2,
						"middle" : 6,
						"exit" : 0,
						"dir" : 5,
						"pbr" : 0.000096,
						"pbg" : 0.000067,
						"pbm" : 0.000224,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 33440,
				"relay" : 2,
				"bwa" : 600487,
				"bwc" : 68077,
				"fast" : 2,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000044,
				"pbg" : 0,
				"pbm" : 0.000078,
				"pbe" : 0.000053,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 600487,
						"bwc" : 68077,
						"fast" : 2,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000044,
						"pbg" : 0,
						"pbm" : 0.000078,
						"pbe" : 0.000053
					}
				]
			},
			{
				"as" : 196714,
				"relay" : 2,
				"bwa" : 375808,
				"bwc" : 303173,
				"fast" : 2,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000052000000000000004,
				"pbg" : 0.000071,
				"pbm" : 0.000085,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 375808,
						"bwc" : 303173,
						"fast" : 2,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000052000000000000004,
						"pbg" : 0.000071,
						"pbm" : 0.000085,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 35238,
				"relay" : 1,
				"bwa" : 100352,
				"bwc" : 2425,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000017,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 100352,
						"bwc" : 2425,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000017
					}
				]
			},
			{
				"as" : 766,
				"relay" : 3,
				"bwa" : 225280,
				"bwc" : 28130,
				"fast" : 2,
				"stable" : 2,
				"guard" : 0,
				"middle" : 3,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000011,
				"pbg" : 0,
				"pbm" : 0.000034,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 3,
						"bwa" : 225280,
						"bwc" : 28130,
						"fast" : 2,
						"stable" : 2,
						"guard" : 0,
						"middle" : 3,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000011,
						"pbg" : 0,
						"pbm" : 0.000034,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 46193,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 11675,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000007,
				"pbg" : 0,
				"pbm" : 0.00002,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 11675,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000007,
						"pbg" : 0,
						"pbm" : 0.00002,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 197071,
				"relay" : 1,
				"bwa" : 158720,
				"bwc" : 22605,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000015,
				"pbg" : 0,
				"pbm" : 0.000044,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 158720,
						"bwc" : 22605,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000015,
						"pbg" : 0,
						"pbm" : 0.000044,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8708,
				"relay" : 6,
				"bwa" : 2402930,
				"bwc" : 1283015,
				"fast" : 5,
				"stable" : 1,
				"guard" : 1,
				"middle" : 6,
				"exit" : 2,
				"dir" : 5,
				"pbr" : 0.000437,
				"pbg" : 0.000722,
				"pbm" : 0.00042500000000000003,
				"pbe" : 0.000162,
				"countries" : [
					{
						"cc" : "RO",
						"relay" : 6,
						"bwa" : 2402930,
						"bwc" : 1283015,
						"fast" : 5,
						"stable" : 1,
						"guard" : 1,
						"middle" : 6,
						"exit" : 2,
						"dir" : 5,
						"pbr" : 0.000437,
						"pbg" : 0.000722,
						"pbm" : 0.00042500000000000003,
						"pbe" : 0.000162
					}
				]
			},
			{
				"as" : 33970,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 108,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 108,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 35655,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 98675,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000399,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.001198,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 98675,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000399,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.001198
					}
				]
			},
			{
				"as" : 194,
				"relay" : 2,
				"bwa" : 14155776,
				"bwc" : 14676330,
				"fast" : 2,
				"stable" : 2,
				"guard" : 2,
				"middle" : 2,
				"exit" : 2,
				"dir" : 2,
				"pbr" : 0.005619000000000001,
				"pbg" : 0.00315,
				"pbm" : 0.00315,
				"pbe" : 0.010558999999999999,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 14155776,
						"bwc" : 14676330,
						"fast" : 2,
						"stable" : 2,
						"guard" : 2,
						"middle" : 2,
						"exit" : 2,
						"dir" : 2,
						"pbr" : 0.005619000000000001,
						"pbg" : 0.00315,
						"pbm" : 0.00315,
						"pbe" : 0.010558999999999999
					}
				]
			},
			{
				"as" : 12576,
				"relay" : 2,
				"bwa" : 85194,
				"bwc" : 58946,
				"fast" : 1,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0.00002,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 2,
						"bwa" : 85194,
						"bwc" : 58946,
						"fast" : 1,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0.00002,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 3226,
				"relay" : 3,
				"bwa" : 526900,
				"bwc" : 118929,
				"fast" : 3,
				"stable" : 2,
				"guard" : 0,
				"middle" : 3,
				"exit" : 2,
				"dir" : 1,
				"pbr" : 0.000037000000000000005,
				"pbg" : 0,
				"pbm" : 0.000028,
				"pbe" : 0.000084,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 3,
						"bwa" : 526900,
						"bwc" : 118929,
						"fast" : 3,
						"stable" : 2,
						"guard" : 0,
						"middle" : 3,
						"exit" : 2,
						"dir" : 1,
						"pbr" : 0.000037000000000000005,
						"pbg" : 0,
						"pbm" : 0.000028,
						"pbe" : 0.000084
					}
				]
			},
			{
				"as" : 58553,
				"relay" : 1,
				"bwa" : 283993,
				"bwc" : 15075,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000024,
				"countries" : [
					{
						"cc" : "ID",
						"relay" : 1,
						"bwa" : 283993,
						"bwc" : 15075,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000024
					}
				]
			},
			{
				"as" : 5563,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 12585,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0.000024,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 12585,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12626,
				"relay" : 1,
				"bwa" : 97094,
				"bwc" : 6639,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0.000019,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 97094,
						"bwc" : 6639,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0.000019,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 11351,
				"relay" : 7,
				"bwa" : 1564930,
				"bwc" : 213557,
				"fast" : 6,
				"stable" : 3,
				"guard" : 1,
				"middle" : 7,
				"exit" : 0,
				"dir" : 4,
				"pbr" : 0.000174,
				"pbg" : 0.00026,
				"pbm" : 0.000263,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 7,
						"bwa" : 1564930,
						"bwc" : 213557,
						"fast" : 6,
						"stable" : 3,
						"guard" : 1,
						"middle" : 7,
						"exit" : 0,
						"dir" : 4,
						"pbr" : 0.000174,
						"pbg" : 0.00026,
						"pbm" : 0.000263,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 11288,
				"relay" : 2,
				"bwa" : 1477961,
				"bwc" : 858690,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000272,
				"pbg" : 0,
				"pbm" : 0.000816,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 1477961,
						"bwc" : 858690,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000272,
						"pbg" : 0,
						"pbm" : 0.000816,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 41440,
				"relay" : 2,
				"bwa" : 402432,
				"bwc" : 16175,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000017,
				"pbg" : 0,
				"pbm" : 0.000029,
				"pbe" : 0.00002,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 402432,
						"bwc" : 16175,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000017,
						"pbg" : 0,
						"pbm" : 0.000029,
						"pbe" : 0.00002
					}
				]
			},
			{
				"as" : 31333,
				"relay" : 5,
				"bwa" : 1756160,
				"bwc" : 911547,
				"fast" : 4,
				"stable" : 5,
				"guard" : 1,
				"middle" : 5,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.00024700000000000004,
				"pbg" : 0.000092,
				"pbm" : 0.000649,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 5,
						"bwa" : 1756160,
						"bwc" : 911547,
						"fast" : 4,
						"stable" : 5,
						"guard" : 1,
						"middle" : 5,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.00024700000000000004,
						"pbg" : 0.000092,
						"pbm" : 0.000649,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 20473,
				"relay" : 1,
				"bwa" : 10780902,
				"bwc" : 8013013,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.003283,
				"pbg" : 0.00706,
				"pbm" : 0.002789,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 10780902,
						"bwc" : 8013013,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.003283,
						"pbg" : 0.00706,
						"pbm" : 0.002789,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 33604,
				"relay" : 1,
				"bwa" : 2237560,
				"bwc" : 1600835,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000454,
				"pbg" : 0.000254,
				"pbm" : 0.000254,
				"pbe" : 0.000853,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 2237560,
						"bwc" : 1600835,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000454,
						"pbg" : 0.000254,
						"pbm" : 0.000254,
						"pbe" : 0.000853
					}
				]
			},
			{
				"as" : 53785,
				"relay" : 1,
				"bwa" : 524288,
				"bwc" : 320947,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000191,
				"pbg" : 0.00041,
				"pbm" : 0.000162,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 524288,
						"bwc" : 320947,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000191,
						"pbg" : 0.00041,
						"pbm" : 0.000162,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 23205,
				"relay" : 1,
				"bwa" : 329874,
				"bwc" : 104143,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000026,
				"pbg" : 0,
				"pbm" : 0.000077,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 329874,
						"bwc" : 104143,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000026,
						"pbg" : 0,
						"pbm" : 0.000077,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 14536,
				"relay" : 2,
				"bwa" : 8788128,
				"bwc" : 2659724,
				"fast" : 2,
				"stable" : 2,
				"guard" : 2,
				"middle" : 2,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.001979,
				"pbg" : 0.00181,
				"pbm" : 0.0012360000000000001,
				"pbe" : 0.00289,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 8788128,
						"bwc" : 2659724,
						"fast" : 2,
						"stable" : 2,
						"guard" : 2,
						"middle" : 2,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.001979,
						"pbg" : 0.00181,
						"pbm" : 0.0012360000000000001,
						"pbe" : 0.00289
					}
				]
			},
			{
				"as" : 4181,
				"relay" : 3,
				"bwa" : 746496,
				"bwc" : 257398,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 3,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000162,
				"pbg" : 0,
				"pbm" : 0.000486,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 3,
						"bwa" : 746496,
						"bwc" : 257398,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 3,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000162,
						"pbg" : 0,
						"pbm" : 0.000486,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 1239,
				"relay" : 1,
				"bwa" : 798516,
				"bwc" : 235818,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000037,
				"pbg" : 0.00008,
				"pbm" : 0.000032,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 798516,
						"bwc" : 235818,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000037,
						"pbg" : 0.00008,
						"pbm" : 0.000032,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 13304,
				"relay" : 1,
				"bwa" : 3333120,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000917,
				"pbg" : 0,
				"pbm" : 0.002751,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 3333120,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000917,
						"pbg" : 0,
						"pbm" : 0.002751,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 31042,
				"relay" : 2,
				"bwa" : 237816,
				"bwc" : 50791,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000012,
				"pbg" : 0,
				"pbm" : 0.000036,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RS",
						"relay" : 2,
						"bwa" : 237816,
						"bwc" : 50791,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000012,
						"pbg" : 0,
						"pbm" : 0.000036,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 25577,
				"relay" : 1,
				"bwa" : 5242880,
				"bwc" : 4883340,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.001804,
				"pbg" : 0.00388,
				"pbm" : 0.001533,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 5242880,
						"bwc" : 4883340,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.001804,
						"pbg" : 0.00388,
						"pbm" : 0.001533,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 34315,
				"relay" : 1,
				"bwa" : 431009,
				"bwc" : 103775,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000119,
				"pbg" : 0.000067,
				"pbm" : 0.000067,
				"pbe" : 0.000223,
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 431009,
						"bwc" : 103775,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000119,
						"pbg" : 0.000067,
						"pbm" : 0.000067,
						"pbe" : 0.000223
					}
				]
			},
			{
				"as" : 31555,
				"relay" : 1,
				"bwa" : 256000,
				"bwc" : 255066,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000014,
				"pbg" : 0.00003,
				"pbm" : 0.000012,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 256000,
						"bwc" : 255066,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000014,
						"pbg" : 0.00003,
						"pbm" : 0.000012,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 5390,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0.000024,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 24607,
				"relay" : 1,
				"bwa" : 6291456,
				"bwc" : 5704686,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.002913,
				"pbg" : 0.006265,
				"pbm" : 0.002475,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "LT",
						"relay" : 1,
						"bwa" : 6291456,
						"bwc" : 5704686,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.002913,
						"pbg" : 0.006265,
						"pbm" : 0.002475,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 4739,
				"relay" : 6,
				"bwa" : 424960,
				"bwc" : 34888,
				"fast" : 4,
				"stable" : 6,
				"guard" : 0,
				"middle" : 6,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000016,
				"pbg" : 0,
				"pbm" : 0.000039,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 6,
						"bwa" : 424960,
						"bwc" : 34888,
						"fast" : 4,
						"stable" : 6,
						"guard" : 0,
						"middle" : 6,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000016,
						"pbg" : 0,
						"pbm" : 0.000039,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 3303,
				"relay" : 5,
				"bwa" : 808133,
				"bwc" : 383506,
				"fast" : 5,
				"stable" : 4,
				"guard" : 1,
				"middle" : 5,
				"exit" : 2,
				"dir" : 2,
				"pbr" : 0.000037999999999999995,
				"pbg" : 0.000014,
				"pbm" : 0.000067,
				"pbe" : 0.000032,
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 5,
						"bwa" : 808133,
						"bwc" : 383506,
						"fast" : 5,
						"stable" : 4,
						"guard" : 1,
						"middle" : 5,
						"exit" : 2,
						"dir" : 2,
						"pbr" : 0.000037999999999999995,
						"pbg" : 0.000014,
						"pbm" : 0.000067,
						"pbe" : 0.000032
					}
				]
			},
			{
				"as" : 47066,
				"relay" : 2,
				"bwa" : 456424,
				"bwc" : 9943,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000007000000000000001,
				"pbg" : 0,
				"pbm" : 0.000019,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 456424,
						"bwc" : 9943,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000007000000000000001,
						"pbg" : 0,
						"pbm" : 0.000019,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 43289,
				"relay" : 2,
				"bwa" : 3831694,
				"bwc" : 2712418,
				"fast" : 2,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 2,
				"dir" : 2,
				"pbr" : 0.000794,
				"pbg" : 0.000128,
				"pbm" : 0.000128,
				"pbe" : 0.002127,
				"countries" : [
					{
						"cc" : "MD",
						"relay" : 2,
						"bwa" : 3831694,
						"bwc" : 2712418,
						"fast" : 2,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 2,
						"dir" : 2,
						"pbr" : 0.000794,
						"pbg" : 0.000128,
						"pbm" : 0.000128,
						"pbe" : 0.002127
					}
				]
			},
			{
				"as" : 32613,
				"relay" : 7,
				"bwa" : 7503538,
				"bwc" : 5899327,
				"fast" : 7,
				"stable" : 6,
				"guard" : 3,
				"middle" : 7,
				"exit" : 2,
				"dir" : 5,
				"pbr" : 0.0021479999999999997,
				"pbg" : 0.002806,
				"pbm" : 0.0017929999999999999,
				"pbe" : 0.001848,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 7,
						"bwa" : 7503538,
						"bwc" : 5899327,
						"fast" : 7,
						"stable" : 6,
						"guard" : 3,
						"middle" : 7,
						"exit" : 2,
						"dir" : 5,
						"pbr" : 0.0021479999999999997,
						"pbg" : 0.002806,
						"pbm" : 0.0017929999999999999,
						"pbe" : 0.001848
					}
				]
			},
			{
				"as" : 5432,
				"relay" : 5,
				"bwa" : 1102013,
				"bwc" : 483422,
				"fast" : 5,
				"stable" : 0,
				"guard" : 0,
				"middle" : 5,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000134,
				"pbg" : 0,
				"pbm" : 0.000403,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "BE",
						"relay" : 5,
						"bwa" : 1102013,
						"bwc" : 483422,
						"fast" : 5,
						"stable" : 0,
						"guard" : 0,
						"middle" : 5,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000134,
						"pbg" : 0,
						"pbm" : 0.000403,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 34232,
				"relay" : 1,
				"bwa" : 3174400,
				"bwc" : 2395022,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000701,
				"pbg" : 0,
				"pbm" : 0.002103,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 3174400,
						"bwc" : 2395022,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000701,
						"pbg" : 0,
						"pbm" : 0.002103,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 20712,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 15999,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000004,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 15999,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000004,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 1759,
				"relay" : 5,
				"bwa" : 701440,
				"bwc" : 481110,
				"fast" : 4,
				"stable" : 3,
				"guard" : 1,
				"middle" : 5,
				"exit" : 2,
				"dir" : 4,
				"pbr" : 0.00010200000000000001,
				"pbg" : 0.000023,
				"pbm" : 0.000068,
				"pbe" : 0.000216,
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 5,
						"bwa" : 701440,
						"bwc" : 481110,
						"fast" : 4,
						"stable" : 3,
						"guard" : 1,
						"middle" : 5,
						"exit" : 2,
						"dir" : 4,
						"pbr" : 0.00010200000000000001,
						"pbg" : 0.000023,
						"pbm" : 0.000068,
						"pbe" : 0.000216
					}
				]
			},
			{
				"as" : 196705,
				"relay" : 1,
				"bwa" : 262144,
				"bwc" : 250720,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.00006,
				"pbg" : 0,
				"pbm" : 0.000179,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 262144,
						"bwc" : 250720,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.00006,
						"pbg" : 0,
						"pbm" : 0.000179,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 31078,
				"relay" : 4,
				"bwa" : 523286,
				"bwc" : 28312,
				"fast" : 4,
				"stable" : 4,
				"guard" : 0,
				"middle" : 4,
				"exit" : 4,
				"dir" : 4,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000005999999999999999,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 523286,
						"bwc" : 28312,
						"fast" : 4,
						"stable" : 4,
						"guard" : 0,
						"middle" : 4,
						"exit" : 4,
						"dir" : 4,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000005999999999999999
					}
				]
			},
			{
				"as" : 39725,
				"relay" : 1,
				"bwa" : 65536,
				"bwc" : 8792,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000004,
				"countries" : [
					{
						"cc" : "KZ",
						"relay" : 1,
						"bwa" : 65536,
						"bwc" : 8792,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000004
					}
				]
			},
			{
				"as" : 12714,
				"relay" : 4,
				"bwa" : 13406776,
				"bwc" : 5969711,
				"fast" : 4,
				"stable" : 0,
				"guard" : 0,
				"middle" : 4,
				"exit" : 2,
				"dir" : 4,
				"pbr" : 0.0027340000000000003,
				"pbg" : 0,
				"pbm" : 0.002766,
				"pbe" : 0.005435,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 4,
						"bwa" : 13406776,
						"bwc" : 5969711,
						"fast" : 4,
						"stable" : 0,
						"guard" : 0,
						"middle" : 4,
						"exit" : 2,
						"dir" : 4,
						"pbr" : 0.0027340000000000003,
						"pbg" : 0,
						"pbm" : 0.002766,
						"pbe" : 0.005435
					}
				]
			},
			{
				"as" : 34764,
				"relay" : 1,
				"bwa" : 2097152,
				"bwc" : 994689,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000111,
				"pbg" : 0.000239,
				"pbm" : 0.000094,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 2097152,
						"bwc" : 994689,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000111,
						"pbg" : 0.000239,
						"pbm" : 0.000094,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 4802,
				"relay" : 2,
				"bwa" : 129290,
				"bwc" : 1508,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000004,
				"pbg" : 0,
				"pbm" : 0.000004,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 2,
						"bwa" : 129290,
						"bwc" : 1508,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000004,
						"pbg" : 0,
						"pbm" : 0.000004,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 34655,
				"relay" : 1,
				"bwa" : 153600,
				"bwc" : 28103,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0.000019,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "HU",
						"relay" : 1,
						"bwa" : 153600,
						"bwc" : 28103,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0.000019,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 48685,
				"relay" : 1,
				"bwa" : 10240,
				"bwc" : 101840,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000004,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "IS",
						"relay" : 1,
						"bwa" : 10240,
						"bwc" : 101840,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000004,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 19994,
				"relay" : 8,
				"bwa" : 1748970,
				"bwc" : 914527,
				"fast" : 3,
				"stable" : 6,
				"guard" : 1,
				"middle" : 8,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.0005659999999999999,
				"pbg" : 0.001027,
				"pbm" : 0.000582,
				"pbe" : 0.000088,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 1748970,
						"bwc" : 914527,
						"fast" : 3,
						"stable" : 6,
						"guard" : 1,
						"middle" : 8,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.0005659999999999999,
						"pbg" : 0.001027,
						"pbm" : 0.000582,
						"pbe" : 0.000088
					}
				]
			},
			{
				"as" : 10143,
				"relay" : 2,
				"bwa" : 112640,
				"bwc" : 14894,
				"fast" : 2,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 2,
				"dir" : 2,
				"pbr" : 0.000004,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000009999999999999999,
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 2,
						"bwa" : 112640,
						"bwc" : 14894,
						"fast" : 2,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 2,
						"dir" : 2,
						"pbr" : 0.000004,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000009999999999999999
					}
				]
			},
			{
				"as" : 57172,
				"relay" : 2,
				"bwa" : 4491264,
				"bwc" : 5142231,
				"fast" : 2,
				"stable" : 2,
				"guard" : 2,
				"middle" : 2,
				"exit" : 2,
				"dir" : 1,
				"pbr" : 0.003355,
				"pbg" : 0.0018800000000000002,
				"pbm" : 0.0018800000000000002,
				"pbe" : 0.006303,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 4491264,
						"bwc" : 5142231,
						"fast" : 2,
						"stable" : 2,
						"guard" : 2,
						"middle" : 2,
						"exit" : 2,
						"dir" : 1,
						"pbr" : 0.003355,
						"pbg" : 0.0018800000000000002,
						"pbm" : 0.0018800000000000002,
						"pbe" : 0.006303
					}
				]
			},
			{
				"as" : 16333,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000004,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "MK",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000004,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 16086,
				"relay" : 11,
				"bwa" : 3357696,
				"bwc" : 4082634,
				"fast" : 11,
				"stable" : 9,
				"guard" : 1,
				"middle" : 11,
				"exit" : 3,
				"dir" : 9,
				"pbr" : 0.00092,
				"pbg" : 0.000052,
				"pbm" : 0.0025190000000000004,
				"pbe" : 0.000191,
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 11,
						"bwa" : 3357696,
						"bwc" : 4082634,
						"fast" : 11,
						"stable" : 9,
						"guard" : 1,
						"middle" : 11,
						"exit" : 3,
						"dir" : 9,
						"pbr" : 0.00092,
						"pbg" : 0.000052,
						"pbm" : 0.0025190000000000004,
						"pbe" : 0.000191
					}
				]
			},
			{
				"as" : 9,
				"relay" : 1,
				"bwa" : 3200000,
				"bwc" : 2776564,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.001908,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.005723,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 3200000,
						"bwc" : 2776564,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.001908,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.005723
					}
				]
			},
			{
				"as" : 46687,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 6576,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.00001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 6576,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.00001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 44724,
				"relay" : 2,
				"bwa" : 1323398,
				"bwc" : 233042,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000071,
				"pbg" : 0,
				"pbm" : 0.000213,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 1323398,
						"bwc" : 233042,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000071,
						"pbg" : 0,
						"pbm" : 0.000213,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 36137,
				"relay" : 2,
				"bwa" : 5966449,
				"bwc" : 5103515,
				"fast" : 2,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.001895,
				"pbg" : 0,
				"pbm" : 0.005546,
				"pbe" : 0.000139,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 846449,
						"bwc" : 50504,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000046,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000139
					},
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 5120000,
						"bwc" : 5053011,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.001849,
						"pbg" : 0,
						"pbm" : 0.005546,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 6828,
				"relay" : 2,
				"bwa" : 102400,
				"bwc" : 95272,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000013,
				"pbg" : 0,
				"pbm" : 0.000038,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 102400,
						"bwc" : 95272,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000013,
						"pbg" : 0,
						"pbm" : 0.000038,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 43711,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 474861,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000113,
				"pbg" : 0,
				"pbm" : 0.000338,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "HU",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 474861,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000113,
						"pbg" : 0,
						"pbm" : 0.000338,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 237,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 611050,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000274,
				"pbg" : 0.000588,
				"pbm" : 0.000232,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 611050,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000274,
						"pbg" : 0.000588,
						"pbm" : 0.000232,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 35017,
				"relay" : 1,
				"bwa" : 2445092,
				"bwc" : 1704994,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000484,
				"pbg" : 0,
				"pbm" : 0.001451,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 2445092,
						"bwc" : 1704994,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000484,
						"pbg" : 0,
						"pbm" : 0.001451,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 53850,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 2252,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000008,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 2252,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000008,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 13110,
				"relay" : 1,
				"bwa" : 77564,
				"bwc" : 3112,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 77564,
						"bwc" : 3112,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 29632,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 15225,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000016,
				"pbg" : 0.000035,
				"pbm" : 0.000014,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 15225,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000016,
						"pbg" : 0.000035,
						"pbm" : 0.000014,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 6697,
				"relay" : 1,
				"bwa" : 45056,
				"bwc" : 631,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000001,
				"countries" : [
					{
						"cc" : "BY",
						"relay" : 1,
						"bwa" : 45056,
						"bwc" : 631,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000001
					}
				]
			},
			{
				"as" : 19108,
				"relay" : 3,
				"bwa" : 909843,
				"bwc" : 264328,
				"fast" : 3,
				"stable" : 1,
				"guard" : 0,
				"middle" : 3,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000064,
				"pbg" : 0,
				"pbm" : 0.00006,
				"pbe" : 0.000132,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 3,
						"bwa" : 909843,
						"bwc" : 264328,
						"fast" : 3,
						"stable" : 1,
						"guard" : 0,
						"middle" : 3,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000064,
						"pbg" : 0,
						"pbm" : 0.00006,
						"pbe" : 0.000132
					}
				]
			},
			{
				"as" : 1221,
				"relay" : 3,
				"bwa" : 247532,
				"bwc" : 23249,
				"fast" : 2,
				"stable" : 2,
				"guard" : 0,
				"middle" : 3,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000009999999999999999,
				"pbg" : 0,
				"pbm" : 0.000022,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 3,
						"bwa" : 247532,
						"bwc" : 23249,
						"fast" : 2,
						"stable" : 2,
						"guard" : 0,
						"middle" : 3,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000009999999999999999,
						"pbg" : 0,
						"pbm" : 0.000022,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 17183,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 18580,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 18580,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12608,
				"relay" : 4,
				"bwa" : 2048000,
				"bwc" : 1302459,
				"fast" : 4,
				"stable" : 4,
				"guard" : 2,
				"middle" : 4,
				"exit" : 2,
				"dir" : 4,
				"pbr" : 0.000253,
				"pbg" : 0.000132,
				"pbm" : 0.000183,
				"pbe" : 0.00044399999999999995,
				"countries" : [
					{
							"cc" : "RU",
						"relay" : 4,
						"bwa" : 2048000,
						"bwc" : 1302459,
						"fast" : 4,
						"stable" : 4,
						"guard" : 2,
						"middle" : 4,
						"exit" : 2,
						"dir" : 4,
						"pbr" : 0.000253,
						"pbg" : 0.000132,
						"pbm" : 0.000183,
						"pbe" : 0.00044399999999999995
					}
				]
			},
			{
				"as" : 16637,
				"relay" : 4,
				"bwa" : 257136,
				"bwc" : 35621,
				"fast" : 3,
				"stable" : 1,
				"guard" : 0,
				"middle" : 4,
				"exit" : 3,
				"dir" : 2,
				"pbr" : 0.000015,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0.000036,
				"countries" : [
					{
						"cc" : "ZA",
						"relay" : 4,
						"bwa" : 257136,
						"bwc" : 35621,
						"fast" : 3,
						"stable" : 1,
						"guard" : 0,
						"middle" : 4,
						"exit" : 3,
						"dir" : 2,
						"pbr" : 0.000015,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0.000036
					}
				]
			},
			{
				"as" : 6332,
				"relay" : 1,
				"bwa" : 1342256,
				"bwc" : 938649,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000113,
				"pbg" : 0,
				"pbm" : 0.000339,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "MX",
						"relay" : 1,
						"bwa" : 1342256,
						"bwc" : 938649,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000113,
						"pbg" : 0,
						"pbm" : 0.000339,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12312,
				"relay" : 2,
				"bwa" : 369371,
				"bwc" : 50184,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000028000000000000003,
				"pbg" : 0,
				"pbm" : 0.000082,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 369371,
						"bwc" : 50184,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000028000000000000003,
						"pbg" : 0,
						"pbm" : 0.000082,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 1835,
				"relay" : 1,
				"bwa" : 3145728,
				"bwc" : 1426966,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000562,
				"pbg" : 0.001209,
				"pbm" : 0.000477,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 3145728,
						"bwc" : 1426966,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000562,
						"pbg" : 0.001209,
						"pbm" : 0.000477,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 393249,
				"relay" : 1,
				"bwa" : 153600,
				"bwc" : 44727,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000018,
				"pbg" : 0,
				"pbm" : 0.000055,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 153600,
						"bwc" : 44727,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000018,
						"pbg" : 0,
						"pbm" : 0.000055,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 9790,
				"relay" : 3,
				"bwa" : 238875,
				"bwc" : 12072,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 3,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0.000022,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NZ",
						"relay" : 3,
						"bwa" : 238875,
						"bwc" : 12072,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 3,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0.000022,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 7725,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 3100,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000005,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 3100,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000005,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 2586,
				"relay" : 2,
				"bwa" : 183296,
				"bwc" : 46345,
				"fast" : 2,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 2,
				"dir" : 2,
				"pbr" : 0.000013000000000000001,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000039,
				"countries" : [
					{
						"cc" : "EE",
						"relay" : 2,
						"bwa" : 183296,
						"bwc" : 46345,
						"fast" : 2,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 2,
						"dir" : 2,
						"pbr" : 0.000013000000000000001,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000039
					}
				]
			},
			{
				"as" : 1241,
				"relay" : 2,
				"bwa" : 165888,
				"bwc" : 47326,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000004,
				"pbg" : 0,
				"pbm" : 0.000012,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "GR",
						"relay" : 2,
						"bwa" : 165888,
						"bwc" : 47326,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000004,
						"pbg" : 0,
						"pbm" : 0.000012,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 39288,
				"relay" : 2,
				"bwa" : 786432,
				"bwc" : 890788,
				"fast" : 2,
				"stable" : 2,
				"guard" : 2,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000216,
				"pbg" : 0.00046499999999999997,
				"pbm" : 0.000184,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 2,
						"bwa" : 786432,
						"bwc" : 890788,
						"fast" : 2,
						"stable" : 2,
						"guard" : 2,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000216,
						"pbg" : 0.00046499999999999997,
						"pbm" : 0.000184,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 42708,
				"relay" : 4,
				"bwa" : 782336,
				"bwc" : 279792,
				"fast" : 4,
				"stable" : 2,
				"guard" : 0,
				"middle" : 4,
				"exit" : 2,
				"dir" : 3,
				"pbr" : 0.000056,
				"pbg" : 0,
				"pbm" : 0.000066,
				"pbe" : 0.000103,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 4,
						"bwa" : 782336,
						"bwc" : 279792,
						"fast" : 4,
						"stable" : 2,
						"guard" : 0,
						"middle" : 4,
						"exit" : 2,
						"dir" : 3,
						"pbr" : 0.000056,
						"pbg" : 0,
						"pbm" : 0.000066,
						"pbe" : 0.000103
					}
				]
			},
			{
				"as" : 11696,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 28200,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000004,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000012,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 28200,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000004,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000012
					}
				]
			},
			{
				"as" : 28717,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 439560,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000125,
				"pbg" : 0.000268,
				"pbm" : 0.000106,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 439560,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000125,
						"pbg" : 0.000268,
						"pbm" : 0.000106,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8737,
				"relay" : 3,
				"bwa" : 1819860,
				"bwc" : 624560,
				"fast" : 3,
				"stable" : 3,
				"guard" : 1,
				"middle" : 3,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000343,
				"pbg" : 0.000442,
				"pbm" : 0.000588,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 3,
						"bwa" : 1819860,
						"bwc" : 624560,
						"fast" : 3,
						"stable" : 3,
						"guard" : 1,
						"middle" : 3,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000343,
						"pbg" : 0.000442,
						"pbm" : 0.000588,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 48781,
				"relay" : 1,
				"bwa" : 128000,
				"bwc" : 20244,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000014,
				"pbg" : 0,
				"pbm" : 0.000043,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 128000,
						"bwc" : 20244,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000014,
						"pbg" : 0,
						"pbm" : 0.000043,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 7753,
				"relay" : 1,
				"bwa" : 640000,
				"bwc" : 354279,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.00013,
				"pbg" : 0.00028,
				"pbm" : 0.00011,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 640000,
						"bwc" : 354279,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.00013,
						"pbg" : 0.00028,
						"pbm" : 0.00011,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 31,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 39809,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0.000024,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 39809,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 29422,
				"relay" : 3,
				"bwa" : 378880,
				"bwc" : 278637,
				"fast" : 2,
				"stable" : 3,
				"guard" : 1,
				"middle" : 3,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000019999999999999998,
				"pbg" : 0.000031,
				"pbm" : 0.000031,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 3,
						"bwa" : 378880,
						"bwc" : 278637,
						"fast" : 2,
						"stable" : 3,
						"guard" : 1,
						"middle" : 3,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000019999999999999998,
						"pbg" : 0.000031,
						"pbm" : 0.000031,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12768,
				"relay" : 2,
				"bwa" : 440880,
				"bwc" : 18969,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0.00001,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 440880,
						"bwc" : 18969,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0.00001,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 8928,
				"relay" : 1,
				"bwa" : 68698,
				"bwc" : 2089,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000008,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 1,
						"bwa" : 68698,
						"bwc" : 2089,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000008,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12180,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 50958,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0.000024,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 50958,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 36012,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 91447,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000013,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000038,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 91447,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000013,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000038
					}
				]
			},
			{
				"as" : 2578,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 50448,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000009,
				"pbg" : 0,
				"pbm" : 0.000027,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 50448,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000009,
						"pbg" : 0,
						"pbm" : 0.000027,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 33070,
				"relay" : 3,
				"bwa" : 563200,
				"bwc" : 137217,
				"fast" : 3,
				"stable" : 3,
				"guard" : 1,
				"middle" : 3,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000111,
				"pbg" : 0.000148,
				"pbm" : 0.000084,
				"pbe" : 0.000099,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 3,
						"bwa" : 563200,
						"bwc" : 137217,
						"fast" : 3,
						"stable" : 3,
						"guard" : 1,
						"middle" : 3,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000111,
						"pbg" : 0.000148,
						"pbm" : 0.000084,
						"pbe" : 0.000099
					}
				]
			},
			{
				"as" : 31400,
				"relay" : 7,
				"bwa" : 3030016,
				"bwc" : 2042271,
				"fast" : 6,
				"stable" : 2,
				"guard" : 0,
				"middle" : 7,
				"exit" : 2,
				"dir" : 2,
				"pbr" : 0.000804,
				"pbg" : 0,
				"pbm" : 0.0013440000000000001,
				"pbe" : 0.0010680000000000002,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 7,
						"bwa" : 3030016,
						"bwc" : 2042271,
						"fast" : 6,
						"stable" : 2,
						"guard" : 0,
						"middle" : 7,
						"exit" : 2,
						"dir" : 2,
						"pbr" : 0.000804,
						"pbg" : 0,
						"pbm" : 0.0013440000000000001,
						"pbe" : 0.0010680000000000002
					}
				]
			},
			{
				"as" : 30176,
				"relay" : 1,
				"bwa" : 22814995,
				"bwc" : 17386988,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.01745,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.052351,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 22814995,
						"bwc" : 17386988,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.01745,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.052351
					}
				]
			},
			{
				"as" : 30881,
				"relay" : 1,
				"bwa" : 98304,
				"bwc" : 25946,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0.000018,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 98304,
						"bwc" : 25946,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0.000018,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 16232,
				"relay" : 1,
				"bwa" : 39829,
				"bwc" : 204,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 1,
						"bwa" : 39829,
						"bwc" : 204,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 553,
				"relay" : 2,
				"bwa" : 1280000,
				"bwc" : 687340,
				"fast" : 2,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000142,
				"pbg" : 0,
				"pbm" : 0.000425,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 1280000,
						"bwc" : 687340,
						"fast" : 2,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000142,
						"pbg" : 0,
						"pbm" : 0.000425,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 42455,
				"relay" : 1,
				"bwa" : 409600,
				"bwc" : 269439,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000035,
				"pbg" : 0,
				"pbm" : 0.000105,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "IM",
						"relay" : 1,
						"bwa" : 409600,
						"bwc" : 269439,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000035,
						"pbg" : 0,
						"pbm" : 0.000105,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 41727,
				"relay" : 1,
				"bwa" : 131072,
				"bwc" : 252,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000012,
				"pbg" : 0,
				"pbm" : 0.000037,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 131072,
						"bwc" : 252,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000012,
						"pbg" : 0,
						"pbm" : 0.000037,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 21284,
				"relay" : 1,
				"bwa" : 32768,
				"bwc" : 152,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "GR",
						"relay" : 1,
						"bwa" : 32768,
						"bwc" : 152,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 43146,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 12628,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000014,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000043,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 12628,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000014,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000043
					}
				]
			},
			{
				"as" : 35807,
				"relay" : 1,
				"bwa" : 1936442,
				"bwc" : 485985,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000532,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.001597,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1936442,
						"bwc" : 485985,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000532,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.001597
					}
				]
			},
			{
				"as" : 23028,
				"relay" : 10,
				"bwa" : 112699310,
				"bwc" : 76673998,
				"fast" : 10,
				"stable" : 9,
				"guard" : 9,
				"middle" : 10,
				"exit" : 0,
				"dir" : 9,
				"pbr" : 0.026095,
				"pbg" : 0.05394200000000001,
				"pbm" : 0.024352999999999996,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 10,
						"bwa" : 112699310,
						"bwc" : 76673998,
						"fast" : 10,
						"stable" : 9,
						"guard" : 9,
						"middle" : 10,
						"exit" : 0,
						"dir" : 9,
						"pbr" : 0.026095,
						"pbg" : 0.05394200000000001,
						"pbm" : 0.024352999999999996,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 5760,
				"relay" : 2,
				"bwa" : 133120,
				"bwc" : 13479,
				"fast" : 2,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0.000024,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 133120,
						"bwc" : 13479,
						"fast" : 2,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 36223,
				"relay" : 2,
				"bwa" : 1024000,
				"bwc" : 521177,
				"fast" : 2,
				"stable" : 2,
				"guard" : 2,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000164,
				"pbg" : 0.000352,
				"pbm" : 0.000139,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 1024000,
						"bwc" : 521177,
						"fast" : 2,
						"stable" : 2,
						"guard" : 2,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000164,
						"pbg" : 0.000352,
						"pbm" : 0.000139,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 33588,
				"relay" : 2,
				"bwa" : 179200,
				"bwc" : 38747,
				"fast" : 2,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000014,
				"pbg" : 0,
				"pbm" : 0.000018,
				"pbe" : 0.000024,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 179200,
						"bwc" : 38747,
						"fast" : 2,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000014,
						"pbg" : 0,
						"pbm" : 0.000018,
						"pbe" : 0.000024
					}
				]
			},
			{
				"as" : 701,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 154,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 154,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 5615,
				"relay" : 4,
				"bwa" : 527360,
				"bwc" : 95496,
				"fast" : 4,
				"stable" : 2,
				"guard" : 0,
				"middle" : 4,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.00004,
				"pbg" : 0,
				"pbm" : 0.00007999999999999999,
				"pbe" : 0.000043,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 4,
						"bwa" : 527360,
						"bwc" : 95496,
						"fast" : 4,
						"stable" : 2,
						"guard" : 0,
						"middle" : 4,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.00004,
						"pbg" : 0,
						"pbm" : 0.00007999999999999999,
						"pbe" : 0.000043
					}
				]
			},
			{
				"as" : 111,
				"relay" : 1,
				"bwa" : 11838456,
				"bwc" : 6300614,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000935,
				"pbg" : 0.000524,
				"pbm" : 0.000524,
				"pbe" : 0.001756,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 11838456,
						"bwc" : 6300614,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000935,
						"pbg" : 0.000524,
						"pbm" : 0.000524,
						"pbe" : 0.001756
					}
				]
			},
			{
				"as" : 29873,
				"relay" : 2,
				"bwa" : 300748,
				"bwc" : 26883,
				"fast" : 2,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000004,
				"pbg" : 0,
				"pbm" : 0.000012,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 300748,
						"bwc" : 26883,
						"fast" : 2,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000004,
						"pbg" : 0,
						"pbm" : 0.000012,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 50821,
				"relay" : 1,
				"bwa" : 614400,
				"bwc" : 443136,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000131,
				"pbg" : 0.000282,
				"pbm" : 0.000112,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 614400,
						"bwc" : 443136,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000131,
						"pbg" : 0.000282,
						"pbm" : 0.000112,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12542,
				"relay" : 1,
				"bwa" : 228352,
				"bwc" : 45816,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000017,
				"pbg" : 0,
				"pbm" : 0.000051,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "PT",
						"relay" : 1,
						"bwa" : 228352,
						"bwc" : 45816,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000017,
						"pbg" : 0,
						"pbm" : 0.000051,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 2637,
				"relay" : 1,
				"bwa" : 272105,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000015,
				"pbg" : 0,
				"pbm" : 0.000044,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 272105,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000015,
						"pbg" : 0,
						"pbm" : 0.000044,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 33984,
				"relay" : 2,
				"bwa" : 716800,
				"bwc" : 345076,
				"fast" : 2,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000063,
				"pbg" : 0.000033,
				"pbm" : 0.000158,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 716800,
						"bwc" : 345076,
						"fast" : 2,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000063,
						"pbg" : 0.000033,
						"pbm" : 0.000158,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 11051,
				"relay" : 2,
				"bwa" : 2591634,
				"bwc" : 1816405,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.001093,
				"pbg" : 0.000611,
				"pbm" : 0.00062,
				"pbe" : 0.002048,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 2591634,
						"bwc" : 1816405,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.001093,
						"pbg" : 0.000611,
						"pbm" : 0.00062,
						"pbe" : 0.002048
					}
				]
			},
			{
				"as" : 36252,
				"relay" : 1,
				"bwa" : 256000,
				"bwc" : 97710,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000017,
				"pbg" : 0.000037,
				"pbm" : 0.000015,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 256000,
						"bwc" : 97710,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000017,
						"pbg" : 0.000037,
						"pbm" : 0.000015,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 20931,
				"relay" : 1,
				"bwa" : 983040,
				"bwc" : 777879,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000197,
				"pbg" : 0.000423,
				"pbm" : 0.000167,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 1,
						"bwa" : 983040,
						"bwc" : 777879,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000197,
						"pbg" : 0.000423,
						"pbm" : 0.000167,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 6461,
				"relay" : 2,
				"bwa" : 481383,
				"bwc" : 36428,
				"fast" : 2,
				"stable" : 0,
				"guard" : 2,
				"middle" : 2,
				"exit" : 2,
				"dir" : 2,
				"pbr" : 0.000107,
				"pbg" : 0.00006,
				"pbm" : 0.00006,
				"pbe" : 0.000201,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 481383,
						"bwc" : 36428,
						"fast" : 2,
						"stable" : 0,
						"guard" : 2,
						"middle" : 2,
						"exit" : 2,
						"dir" : 2,
						"pbr" : 0.000107,
						"pbg" : 0.00006,
						"pbm" : 0.00006,
						"pbe" : 0.000201
					}
				]
			},
			{
				"as" : 49776,
				"relay" : 1,
				"bwa" : 614400,
				"bwc" : 187764,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000188,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000563,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 614400,
						"bwc" : 187764,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000188,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000563
					}
				]
			},
			{
				"as" : 12338,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000009,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000026,
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000009,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000026
					}
				]
			},
			{
				"as" : 13193,
				"relay" : 1,
				"bwa" : 128000,
				"bwc" : 30812,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000011,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000032,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 128000,
						"bwc" : 30812,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000011,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000032
					}
				]
			},
			{
				"as" : 25229,
				"relay" : 2,
				"bwa" : 304128,
				"bwc" : 23382,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000015,
				"pbg" : 0,
				"pbm" : 0.000044,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 2,
						"bwa" : 304128,
						"bwc" : 23382,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000015,
						"pbg" : 0,
						"pbm" : 0.000044,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 21565,
				"relay" : 1,
				"bwa" : 291840,
				"bwc" : 64035,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000025,
				"pbg" : 0,
				"pbm" : 0.000075,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 291840,
						"bwc" : 64035,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000025,
						"pbg" : 0,
						"pbm" : 0.000075,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 14517,
				"relay" : 1,
				"bwa" : 79168,
				"bwc" : 8686,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.00001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 79168,
						"bwc" : 8686,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.00001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8437,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 32480,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000007,
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 32480,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000007
					}
				]
			},
			{
				"as" : 30640,
				"relay" : 1,
				"bwa" : 66560,
				"bwc" : 25020,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 66560,
						"bwc" : 25020,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12400,
				"relay" : 1,
				"bwa" : 141324,
				"bwc" : 45538,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0.000018,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "IL",
						"relay" : 1,
						"bwa" : 141324,
						"bwc" : 45538,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0.000018,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 51815,
				"relay" : 4,
				"bwa" : 19602100,
				"bwc" : 16157405,
				"fast" : 4,
				"stable" : 2,
				"guard" : 2,
				"middle" : 4,
				"exit" : 2,
				"dir" : 3,
				"pbr" : 0.0075970000000000005,
				"pbg" : 0.005782,
				"pbm" : 0.004567,
				"pbe" : 0.012442,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 4,
						"bwa" : 19602100,
						"bwc" : 16157405,
						"fast" : 4,
						"stable" : 2,
						"guard" : 2,
						"middle" : 4,
						"exit" : 2,
						"dir" : 3,
						"pbr" : 0.0075970000000000005,
						"pbg" : 0.005782,
						"pbm" : 0.004567,
						"pbe" : 0.012442
					}
				]
			},
			{
				"as" : 41704,
				"relay" : 1,
				"bwa" : 154660,
				"bwc" : 65704,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000012,
				"pbg" : 0,
				"pbm" : 0.000035,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 154660,
						"bwc" : 65704,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000012,
						"pbg" : 0,
						"pbm" : 0.000035,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 24238,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 17103,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000008,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 17103,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000008,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 39301,
				"relay" : 1,
				"bwa" : 7298398,
				"bwc" : 4192367,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000907,
				"pbg" : 0.00195,
				"pbm" : 0.00077,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "EE",
						"relay" : 1,
						"bwa" : 7298398,
						"bwc" : 4192367,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000907,
						"pbg" : 0.00195,
						"pbm" : 0.00077,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 15657,
				"relay" : 2,
				"bwa" : 1715200,
				"bwc" : 1167040,
				"fast" : 2,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000496,
				"pbg" : 0.000276,
				"pbm" : 0.000288,
				"pbe" : 0.000925,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 1715200,
						"bwc" : 1167040,
						"fast" : 2,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000496,
						"pbg" : 0.000276,
						"pbm" : 0.000288,
						"pbe" : 0.000925
					}
				]
			},
			{
				"as" : 17676,
				"relay" : 3,
				"bwa" : 289399,
				"bwc" : 168101,
				"fast" : 3,
				"stable" : 1,
				"guard" : 0,
				"middle" : 3,
				"exit" : 2,
				"dir" : 3,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000006,
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 3,
						"bwa" : 289399,
						"bwc" : 168101,
						"fast" : 3,
						"stable" : 1,
						"guard" : 0,
						"middle" : 3,
						"exit" : 2,
						"dir" : 3,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000006
					}
				]
			},
			{
				"as" : 31342,
				"relay" : 7,
				"bwa" : 3619507,
				"bwc" : 2334234,
				"fast" : 5,
				"stable" : 6,
				"guard" : 3,
				"middle" : 7,
				"exit" : 1,
				"dir" : 3,
				"pbr" : 0.0005819999999999999,
				"pbg" : 0.00041799999999999997,
				"pbm" : 0.0013149999999999998,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 7,
						"bwa" : 3619507,
						"bwc" : 2334234,
						"fast" : 5,
						"stable" : 6,
						"guard" : 3,
						"middle" : 7,
						"exit" : 1,
						"dir" : 3,
						"pbr" : 0.0005819999999999999,
						"pbg" : 0.00041799999999999997,
						"pbm" : 0.0013149999999999998,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 31246,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 564648,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000377,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.001131,
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 564648,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000377,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.001131
					}
				]
			},
			{
				"as" : 2607,
				"relay" : 1,
				"bwa" : 8351042,
				"bwc" : 5349067,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.003253,
				"pbg" : 0.006997,
				"pbm" : 0.002764,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SK",
						"relay" : 1,
						"bwa" : 8351042,
						"bwc" : 5349067,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.003253,
						"pbg" : 0.006997,
						"pbm" : 0.002764,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 36477,
				"relay" : 1,
				"bwa" : 393216,
				"bwc" : 92458,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000092,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000275,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 393216,
						"bwc" : 92458,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000092,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000275
					}
				]
			},
			{
				"as" : 196689,
				"relay" : 3,
				"bwa" : 2252800,
				"bwc" : 1526876,
				"fast" : 3,
				"stable" : 3,
				"guard" : 2,
				"middle" : 3,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000409,
				"pbg" : 0.000553,
				"pbm" : 0.000319,
				"pbe" : 0.000353,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 3,
						"bwa" : 2252800,
						"bwc" : 1526876,
						"fast" : 3,
						"stable" : 3,
						"guard" : 2,
						"middle" : 3,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000409,
						"pbg" : 0.000553,
						"pbm" : 0.000319,
						"pbe" : 0.000353
					}
				]
			},
			{
				"as" : 13188,
				"relay" : 2,
				"bwa" : 530906,
				"bwc" : 68947,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 2,
						"bwa" : 530906,
						"bwc" : 68947,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 4658,
				"relay" : 1,
				"bwa" : 196608,
				"bwc" : 7145,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000009,
				"pbg" : 0,
				"pbm" : 0.000028,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "HK",
						"relay" : 1,
						"bwa" : 196608,
						"bwc" : 7145,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000009,
						"pbg" : 0,
						"pbm" : 0.000028,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 9050,
				"relay" : 1,
				"bwa" : 107593,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000005,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RO",
						"relay" : 1,
						"bwa" : 107593,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000005,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 27699,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 14093,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000004,
				"pbg" : 0,
				"pbm" : 0.000013,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 14093,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000004,
						"pbg" : 0,
						"pbm" : 0.000013,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 21021,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 139,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 139,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 46816,
				"relay" : 3,
				"bwa" : 1496448,
				"bwc" : 793187,
				"fast" : 3,
				"stable" : 2,
				"guard" : 2,
				"middle" : 3,
				"exit" : 2,
				"dir" : 0,
				"pbr" : 0.00025299999999999997,
				"pbg" : 0.000089,
				"pbm" : 0.000373,
				"pbe" : 0.00029600000000000004,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 3,
						"bwa" : 1496448,
						"bwc" : 793187,
						"fast" : 3,
						"stable" : 2,
						"guard" : 2,
						"middle" : 3,
						"exit" : 2,
						"dir" : 0,
						"pbr" : 0.00025299999999999997,
						"pbg" : 0.000089,
						"pbm" : 0.000373,
						"pbe" : 0.00029600000000000004
					}
				]
			},
			{
				"as" : 42336,
				"relay" : 1,
				"bwa" : 262144,
				"bwc" : 144173,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000022,
				"pbg" : 0.000046,
				"pbm" : 0.000018,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 262144,
						"bwc" : 144173,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000022,
						"pbg" : 0.000046,
						"pbm" : 0.000018,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 32780,
				"relay" : 2,
				"bwa" : 390144,
				"bwc" : 270890,
				"fast" : 2,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000097,
				"pbg" : 0.000037,
				"pbm" : 0.000127,
				"pbe" : 0.000125,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 390144,
						"bwc" : 270890,
						"fast" : 2,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000097,
						"pbg" : 0.000037,
						"pbm" : 0.000127,
						"pbe" : 0.000125
					}
				]
			},
			{
				"as" : 6364,
				"relay" : 2,
				"bwa" : 167936,
				"bwc" : 11297,
				"fast" : 2,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000013000000000000001,
				"pbg" : 0,
				"pbm" : 0.000039,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 167936,
						"bwc" : 11297,
						"fast" : 2,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000013000000000000001,
						"pbg" : 0,
						"pbm" : 0.000039,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 226,
				"relay" : 1,
				"bwa" : 5242880,
				"bwc" : 3767212,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.001553,
				"pbg" : 0.003339,
				"pbm" : 0.001319,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 5242880,
						"bwc" : 3767212,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.001553,
						"pbg" : 0.003339,
						"pbm" : 0.001319,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 2527,
				"relay" : 3,
				"bwa" : 775442,
				"bwc" : 210150,
				"fast" : 3,
				"stable" : 3,
				"guard" : 1,
				"middle" : 3,
				"exit" : 0,
				"dir" : 3,
				"pbr" : 0.000051000000000000006,
				"pbg" : 0.000088,
				"pbm" : 0.000064,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 3,
						"bwa" : 775442,
						"bwc" : 210150,
						"fast" : 3,
						"stable" : 3,
						"guard" : 1,
						"middle" : 3,
						"exit" : 0,
						"dir" : 3,
						"pbr" : 0.000051000000000000006,
						"pbg" : 0.000088,
						"pbm" : 0.000064,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 1853,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 36810,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 36810,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 44557,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 1023873,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000091,
				"pbg" : 0.000051,
				"pbm" : 0.000051,
				"pbe" : 0.000172,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 1023873,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000091,
						"pbg" : 0.000051,
						"pbm" : 0.000051,
						"pbe" : 0.000172
					}
				]
			},
			{
				"as" : 57735,
				"relay" : 1,
				"bwa" : 746250,
				"bwc" : 749913,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000248,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000745,
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 746250,
						"bwc" : 749913,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000248,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000745
					}
				]
			},
			{
				"as" : 15895,
				"relay" : 2,
				"bwa" : 201544,
				"bwc" : 156777,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000048,
				"pbg" : 0,
				"pbm" : 0.000069,
				"pbe" : 0.000074,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 2,
						"bwa" : 201544,
						"bwc" : 156777,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000048,
						"pbg" : 0,
						"pbm" : 0.000069,
						"pbe" : 0.000074
					}
				]
			},
			{
				"as" : 33363,
				"relay" : 2,
				"bwa" : 353280,
				"bwc" : 58506,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000014000000000000001,
				"pbg" : 0,
				"pbm" : 0.000039999999999999996,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 353280,
						"bwc" : 58506,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000014000000000000001,
						"pbg" : 0,
						"pbm" : 0.000039999999999999996,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 35637,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 30562,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000004,
				"pbg" : 0,
				"pbm" : 0.000012,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 30562,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000004,
						"pbg" : 0,
						"pbm" : 0.000012,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 19969,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 29331,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000012,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000037,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 29331,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000012,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000037
					}
				]
			},
			{
				"as" : 33182,
				"relay" : 1,
				"bwa" : 3145728,
				"bwc" : 2325561,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000841,
				"pbg" : 0,
				"pbm" : 0.002524,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 3145728,
						"bwc" : 2325561,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000841,
						"pbg" : 0,
						"pbm" : 0.002524,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 7377,
				"relay" : 1,
				"bwa" : 420864,
				"bwc" : 91664,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000021,
				"pbg" : 0,
				"pbm" : 0.000064,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 420864,
						"bwc" : 91664,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000021,
						"pbg" : 0,
						"pbm" : 0.000064,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 42322,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 13362,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0.000024,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 13362,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 50266,
				"relay" : 1,
				"bwa" : 37298247,
				"bwc" : 28022394,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.0042,
				"pbg" : 0.009032,
				"pbm" : 0.003568,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 37298247,
						"bwc" : 28022394,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.0042,
						"pbg" : 0.009032,
						"pbm" : 0.003568,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 33885,
				"relay" : 3,
				"bwa" : 2277376,
				"bwc" : 2071000,
				"fast" : 3,
				"stable" : 3,
				"guard" : 3,
				"middle" : 3,
				"exit" : 1,
				"dir" : 3,
				"pbr" : 0.000387,
				"pbg" : 0.000661,
				"pbm" : 0.000298,
				"pbe" : 0.000203,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 3,
						"bwa" : 2277376,
						"bwc" : 2071000,
						"fast" : 3,
						"stable" : 3,
						"guard" : 3,
						"middle" : 3,
						"exit" : 1,
						"dir" : 3,
						"pbr" : 0.000387,
						"pbg" : 0.000661,
						"pbm" : 0.000298,
						"pbe" : 0.000203
					}
				]
			},
			{
				"as" : 13703,
				"relay" : 1,
				"bwa" : 819200,
				"bwc" : 657596,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000126,
				"pbg" : 0.000272,
				"pbm" : 0.000107,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 819200,
						"bwc" : 657596,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000126,
						"pbg" : 0.000272,
						"pbm" : 0.000107,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 7657,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 2079,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000004,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NZ",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 2079,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000004,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 14511,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 872,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000005,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 872,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000005,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 2840,
				"relay" : 2,
				"bwa" : 1515520,
				"bwc" : 1264245,
				"fast" : 2,
				"stable" : 1,
				"guard" : 1,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000393,
				"pbg" : 0.000824,
				"pbm" : 0.000356,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 2,
						"bwa" : 1515520,
						"bwc" : 1264245,
						"fast" : 2,
						"stable" : 1,
						"guard" : 1,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000393,
						"pbg" : 0.000824,
						"pbm" : 0.000356,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 6876,
				"relay" : 2,
				"bwa" : 221184,
				"bwc" : 7630,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000016,
				"pbg" : 0,
				"pbm" : 0.000048,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 2,
						"bwa" : 221184,
						"bwc" : 7630,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000016,
						"pbg" : 0,
						"pbm" : 0.000048,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12337,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 30772,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000004,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000012,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 30772,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000004,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000012
					}
				]
			},
			{
				"as" : 9433,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 424080,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000044,
				"pbg" : 0.000094,
				"pbm" : 0.000037,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NZ",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 424080,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000044,
						"pbg" : 0.000094,
						"pbm" : 0.000037,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 56813,
				"relay" : 1,
				"bwa" : 5242880,
				"bwc" : 5222747,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.003727,
				"pbg" : 0.008014,
				"pbm" : 0.003166,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 5242880,
						"bwc" : 5222747,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.003727,
						"pbg" : 0.008014,
						"pbm" : 0.003166,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 45204,
				"relay" : 1,
				"bwa" : 4694913,
				"bwc" : 3577815,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000325,
				"pbg" : 0.000182,
				"pbm" : 0.000182,
				"pbe" : 0.000611,
				"countries" : [
					{
						"cc" : "MN",
						"relay" : 1,
						"bwa" : 4694913,
						"bwc" : 3577815,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000325,
						"pbg" : 0.000182,
						"pbm" : 0.000182,
						"pbe" : 0.000611
					}
				]
			},
			{
				"as" : 48039,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 49841,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000043,
				"pbg" : 0.000092,
				"pbm" : 0.000036,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 49841,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000043,
						"pbg" : 0.000092,
						"pbm" : 0.000036,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 5421,
				"relay" : 1,
				"bwa" : 380738,
				"bwc" : 52562,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000049,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000146,
				"countries" : [
					{
						"cc" : "BG",
						"relay" : 1,
						"bwa" : 380738,
						"bwc" : 52562,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000049,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000146
					}
				]
			},
			{
				"as" : 1680,
				"relay" : 4,
				"bwa" : 376954,
				"bwc" : 78279,
				"fast" : 4,
				"stable" : 2,
				"guard" : 0,
				"middle" : 4,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000017999999999999997,
				"pbg" : 0,
				"pbm" : 0.00004600000000000001,
				"pbe" : 0.000008,
				"countries" : [
					{
						"cc" : "IL",
						"relay" : 4,
						"bwa" : 376954,
						"bwc" : 78279,
						"fast" : 4,
						"stable" : 2,
						"guard" : 0,
						"middle" : 4,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000017999999999999997,
						"pbg" : 0,
						"pbm" : 0.00004600000000000001,
						"pbe" : 0.000008
					}
				]
			},
			{
				"as" : 20207,
				"relay" : 1,
				"bwa" : 237568,
				"bwc" : 125185,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000018,
				"pbg" : 0.00001,
				"pbm" : 0.00001,
				"pbe" : 0.000035,
				"countries" : [
					{
						"cc" : "AR",
						"relay" : 1,
						"bwa" : 237568,
						"bwc" : 125185,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000018,
						"pbg" : 0.00001,
						"pbm" : 0.00001,
						"pbe" : 0.000035
					}
				]
			},
			{
				"as" : 15003,
				"relay" : 3,
				"bwa" : 4872192,
				"bwc" : 4433016,
				"fast" : 3,
				"stable" : 3,
				"guard" : 2,
				"middle" : 3,
				"exit" : 2,
				"dir" : 3,
				"pbr" : 0.003154,
				"pbg" : 0.001761,
				"pbm" : 0.0017959999999999999,
				"pbe" : 0.0059039999999999995,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 677888,
						"bwc" : 278041,
						"fast" : 2,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000108,
						"pbg" : 0.000054,
						"pbm" : 0.000089,
						"pbe" : 0.00018
					},
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 4194304,
						"bwc" : 4154975,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.003046,
						"pbg" : 0.001707,
						"pbm" : 0.001707,
						"pbe" : 0.005724
					}
				]
			},
			{
				"as" : 8228,
				"relay" : 2,
				"bwa" : 47104,
				"bwc" : 36873,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0.000018,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 2,
						"bwa" : 47104,
						"bwc" : 36873,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0.000018,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8047,
				"relay" : 1,
				"bwa" : 76488,
				"bwc" : 7319,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000007,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 76488,
						"bwc" : 7319,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000007,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 2510,
				"relay" : 1,
				"bwa" : 65536,
				"bwc" : 3170,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 65536,
						"bwc" : 3170,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 29587,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 56941,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0.000024,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "BE",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 56941,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 6855,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 2454,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "SK",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 2454,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 14051,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 188575,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000034,
				"pbg" : 0,
				"pbm" : 0.000101,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 188575,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000034,
						"pbg" : 0,
						"pbm" : 0.000101,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 4922,
				"relay" : 1,
				"bwa" : 32768,
				"bwc" : 0,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 32768,
						"bwc" : 0,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 25408,
				"relay" : 1,
				"bwa" : 1374208,
				"bwc" : 1142742,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000676,
				"pbg" : 0,
				"pbm" : 0.002027,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1374208,
						"bwc" : 1142742,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000676,
						"pbg" : 0,
						"pbm" : 0.002027,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 760,
				"relay" : 1,
				"bwa" : 58368,
				"bwc" : 26118,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000004,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 58368,
						"bwc" : 26118,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000004,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 54046,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 69179,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0.000023,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 69179,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0.000023,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 33480,
				"relay" : 1,
				"bwa" : 393339,
				"bwc" : 151377,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000005,
				"pbg" : 0.00001,
				"pbm" : 0.000004,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "IN",
						"relay" : 1,
						"bwa" : 393339,
						"bwc" : 151377,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000005,
						"pbg" : 0.00001,
						"pbm" : 0.000004,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 17486,
				"relay" : 1,
				"bwa" : 15113,
				"bwc" : 919,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000007,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 1,
						"bwa" : 15113,
						"bwc" : 919,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000007,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 38935,
				"relay" : 2,
				"bwa" : 512000,
				"bwc" : 249286,
				"fast" : 2,
				"stable" : 2,
				"guard" : 2,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000067,
				"pbg" : 0.000144,
				"pbm" : 0.000057,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RO",
						"relay" : 2,
						"bwa" : 512000,
						"bwc" : 249286,
						"fast" : 2,
						"stable" : 2,
						"guard" : 2,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000067,
						"pbg" : 0.000144,
						"pbm" : 0.000057,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 9318,
				"relay" : 2,
				"bwa" : 1358946,
				"bwc" : 436381,
				"fast" : 2,
				"stable" : 1,
				"guard" : 1,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000049,
				"pbg" : 0.000099,
				"pbm" : 0.000048,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "KR",
						"relay" : 2,
						"bwa" : 1358946,
						"bwc" : 436381,
						"fast" : 2,
						"stable" : 1,
						"guard" : 1,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000049,
						"pbg" : 0.000099,
						"pbm" : 0.000048,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 39369,
				"relay" : 2,
				"bwa" : 13362930,
				"bwc" : 12033991,
				"fast" : 2,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.003584,
				"pbg" : 0.007696,
				"pbm" : 0.003056,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 2,
						"bwa" : 13362930,
						"bwc" : 12033991,
						"fast" : 2,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.003584,
						"pbg" : 0.007696,
						"pbm" : 0.003056,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 7456,
				"relay" : 1,
				"bwa" : 256000,
				"bwc" : 53655,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000054,
				"pbg" : 0,
				"pbm" : 0.000163,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 256000,
						"bwc" : 53655,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000054,
						"pbg" : 0,
						"pbm" : 0.000163,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 2514,
				"relay" : 2,
				"bwa" : 235563,
				"bwc" : 13321,
				"fast" : 2,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000011,
				"pbg" : 0,
				"pbm" : 0.000034,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 2,
						"bwa" : 235563,
						"bwc" : 13321,
						"fast" : 2,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000011,
						"pbg" : 0,
						"pbm" : 0.000034,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8612,
				"relay" : 1,
				"bwa" : 63648,
				"bwc" : 1200,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000005,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 1,
						"bwa" : 63648,
						"bwc" : 1200,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000005,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12479,
				"relay" : 2,
				"bwa" : 121856,
				"bwc" : 43689,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0.000019,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 2,
						"bwa" : 121856,
						"bwc" : 43689,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0.000019,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 15517,
				"relay" : 1,
				"bwa" : 93480,
				"bwc" : 1050,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0.000024,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 1,
						"bwa" : 93480,
						"bwc" : 1050,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 50472,
				"relay" : 1,
				"bwa" : 4798066,
				"bwc" : 1708201,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0.000006,
				"pbm" : 0.000003,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 4798066,
						"bwc" : 1708201,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0.000006,
						"pbm" : 0.000003,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8877,
				"relay" : 1,
				"bwa" : 240640,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000023,
				"pbg" : 0,
				"pbm" : 0.000068,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "BG",
						"relay" : 1,
						"bwa" : 240640,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000023,
						"pbg" : 0,
						"pbm" : 0.000068,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 41786,
				"relay" : 2,
				"bwa" : 425916,
				"bwc" : 33297,
				"fast" : 2,
				"stable" : 0,
				"guard" : 1,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000019999999999999998,
				"pbg" : 0.000029,
				"pbm" : 0.000031,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 425916,
						"bwc" : 33297,
						"fast" : 2,
						"stable" : 0,
						"guard" : 1,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000019999999999999998,
						"pbg" : 0.000029,
						"pbm" : 0.000031,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 15682,
				"relay" : 1,
				"bwa" : 307200,
				"bwc" : 198786,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000046,
				"pbg" : 0.000099,
				"pbm" : 0.000039,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 307200,
						"bwc" : 198786,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000046,
						"pbg" : 0.000099,
						"pbm" : 0.000039,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 53340,
				"relay" : 2,
				"bwa" : 135168,
				"bwc" : 42389,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000016,
				"pbg" : 0,
				"pbm" : 0.000048,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 135168,
						"bwc" : 42389,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000016,
						"pbg" : 0,
						"pbm" : 0.000048,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 18106,
				"relay" : 2,
				"bwa" : 672282,
				"bwc" : 87517,
				"fast" : 2,
				"stable" : 2,
				"guard" : 2,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000029999999999999997,
				"pbg" : 0.000066,
				"pbm" : 0.000026000000000000002,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SG",
						"relay" : 2,
						"bwa" : 672282,
						"bwc" : 87517,
						"fast" : 2,
						"stable" : 2,
						"guard" : 2,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000029999999999999997,
						"pbg" : 0.000066,
						"pbm" : 0.000026000000000000002,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12993,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 467196,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.00016,
				"pbg" : 0.000343,
				"pbm" : 0.000136,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "LV",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 467196,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.00016,
						"pbg" : 0.000343,
						"pbm" : 0.000136,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 15085,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 10445,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0.000024,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 10445,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 3549,
				"relay" : 1,
				"bwa" : 1112044,
				"bwc" : 737122,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.00026,
				"pbg" : 0.000146,
				"pbm" : 0.000146,
				"pbe" : 0.000489,
				"countries" : [
					{
						"cc" : "AR",
						"relay" : 1,
						"bwa" : 1112044,
						"bwc" : 737122,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.00026,
						"pbg" : 0.000146,
						"pbm" : 0.000146,
						"pbe" : 0.000489
					}
				]
			},
			{
				"as" : 5483,
				"relay" : 5,
				"bwa" : 1508104,
				"bwc" : 199489,
				"fast" : 5,
				"stable" : 0,
				"guard" : 0,
				"middle" : 5,
				"exit" : 2,
				"dir" : 4,
				"pbr" : 0.000365,
				"pbg" : 0,
				"pbm" : 0.000044,
				"pbe" : 0.0010500000000000002,
				"countries" : [
					{
						"cc" : "HU",
						"relay" : 5,
						"bwa" : 1508104,
						"bwc" : 199489,
						"fast" : 5,
						"stable" : 0,
						"guard" : 0,
						"middle" : 5,
						"exit" : 2,
						"dir" : 4,
						"pbr" : 0.000365,
						"pbg" : 0,
						"pbm" : 0.000044,
						"pbe" : 0.0010500000000000002
					}
				]
			},
			{
				"as" : 19165,
				"relay" : 2,
				"bwa" : 544768,
				"bwc" : 247795,
				"fast" : 1,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000066,
				"pbg" : 0.000135,
				"pbm" : 0.000062,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 544768,
						"bwc" : 247795,
						"fast" : 1,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000066,
						"pbg" : 0.000135,
						"pbm" : 0.000062,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12513,
				"relay" : 1,
				"bwa" : 35696,
				"bwc" : 1862,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 35696,
						"bwc" : 1862,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 21261,
				"relay" : 1,
				"bwa" : 4096000,
				"bwc" : 3970656,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.001329,
				"pbg" : 0.000745,
				"pbm" : 0.000745,
				"pbe" : 0.002498,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 4096000,
						"bwc" : 3970656,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.001329,
						"pbg" : 0.000745,
						"pbm" : 0.000745,
						"pbe" : 0.002498
					}
				]
			},
			{
				"as" : 24956,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 804,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 804,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 5617,
				"relay" : 3,
				"bwa" : 767310,
				"bwc" : 528985,
				"fast" : 3,
				"stable" : 0,
				"guard" : 0,
				"middle" : 3,
				"exit" : 2,
				"dir" : 1,
				"pbr" : 0.000144,
				"pbg" : 0,
				"pbm" : 0.000425,
				"pbe" : 0.000008,
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 3,
						"bwa" : 767310,
						"bwc" : 528985,
						"fast" : 3,
						"stable" : 0,
						"guard" : 0,
						"middle" : 3,
						"exit" : 2,
						"dir" : 1,
						"pbr" : 0.000144,
						"pbg" : 0,
						"pbm" : 0.000425,
						"pbe" : 0.000008
					}
				]
			},
			{
				"as" : 13189,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 294888,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000788,
				"pbg" : 0.001695,
				"pbm" : 0.00067,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 294888,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000788,
						"pbg" : 0.001695,
						"pbm" : 0.00067,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 2860,
				"relay" : 1,
				"bwa" : 55922,
				"bwc" : 5111,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000005,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "PT",
						"relay" : 1,
						"bwa" : 55922,
						"bwc" : 5111,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000005,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 57169,
				"relay" : 2,
				"bwa" : 1744442,
				"bwc" : 1644504,
				"fast" : 2,
				"stable" : 1,
				"guard" : 1,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.00014199999999999998,
				"pbg" : 0.000298,
				"pbm" : 0.000118,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 2,
						"bwa" : 1744442,
						"bwc" : 1644504,
						"fast" : 2,
						"stable" : 1,
						"guard" : 1,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.00014199999999999998,
						"pbg" : 0.000298,
						"pbm" : 0.000118,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 4565,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 3306,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000008,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 3306,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000008,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 1133,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 33666,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000009,
				"pbg" : 0,
				"pbm" : 0.000027,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 33666,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000009,
						"pbg" : 0,
						"pbm" : 0.000027,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 34743,
				"relay" : 1,
				"bwa" : 98304,
				"bwc" : 1089,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000007,
				"pbg" : 0,
				"pbm" : 0.000022,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 98304,
						"bwc" : 1089,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000007,
						"pbg" : 0,
						"pbm" : 0.000022,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 34224,
				"relay" : 1,
				"bwa" : 604939,
				"bwc" : 212677,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000026,
				"pbg" : 0.000056,
				"pbm" : 0.000022,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "BG",
						"relay" : 1,
						"bwa" : 604939,
						"bwc" : 212677,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000026,
						"pbg" : 0.000056,
						"pbm" : 0.000022,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 25668,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 36457,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0.000018,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 36457,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0.000018,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 1267,
				"relay" : 2,
				"bwa" : 27435,
				"bwc" : 560,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000004,
				"pbg" : 0,
				"pbm" : 0.000012,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 2,
						"bwa" : 27435,
						"bwc" : 560,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000004,
						"pbg" : 0,
						"pbm" : 0.000012,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 51953,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 386632,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000106,
				"pbg" : 0,
				"pbm" : 0.000319,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 386632,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000106,
						"pbg" : 0,
						"pbm" : 0.000319,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 9506,
				"relay" : 1,
				"bwa" : 79714,
				"bwc" : 20035,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000004,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SG",
						"relay" : 1,
						"bwa" : 79714,
						"bwc" : 20035,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000004,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 30217,
				"relay" : 1,
				"bwa" : 5242880,
				"bwc" : 2626538,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.001582,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.004747,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 5242880,
						"bwc" : 2626538,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.001582,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.004747
					}
				]
			},
			{
				"as" : 10594,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 0,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 0,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 31595,
				"relay" : 1,
				"bwa" : 61440,
				"bwc" : 12612,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000005,
				"pbg" : 0,
				"pbm" : 0.000014,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 61440,
						"bwc" : 12612,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000005,
						"pbg" : 0,
						"pbm" : 0.000014,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 45032,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 3215,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000014,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000043,
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 3215,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000014,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000043
					}
				]
			},
			{
				"as" : 17511,
				"relay" : 2,
				"bwa" : 1067665,
				"bwc" : 98929,
				"fast" : 2,
				"stable" : 1,
				"guard" : 1,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000047000000000000004,
				"pbg" : 0.000078,
				"pbm" : 0.00006500000000000001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 2,
						"bwa" : 1067665,
						"bwc" : 98929,
						"fast" : 2,
						"stable" : 1,
						"guard" : 1,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000047000000000000004,
						"pbg" : 0.000078,
						"pbm" : 0.00006500000000000001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 35339,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 3539,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 3539,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 197226,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 307959,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000188,
				"pbg" : 0.000404,
				"pbm" : 0.00016,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 307959,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000188,
						"pbg" : 0.000404,
						"pbm" : 0.00016,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8559,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 963049,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000408,
				"pbg" : 0.000878,
				"pbm" : 0.000347,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 963049,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000408,
						"pbg" : 0.000878,
						"pbm" : 0.000347,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 24560,
				"relay" : 1,
				"bwa" : 25600,
				"bwc" : 93,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "IN",
						"relay" : 1,
						"bwa" : 25600,
						"bwc" : 93,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12635,
				"relay" : 1,
				"bwa" : 71968,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000004,
				"pbg" : 0,
				"pbm" : 0.000012,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 71968,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000004,
						"pbg" : 0,
						"pbm" : 0.000012,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 2819,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 119500,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000046,
				"pbg" : 0.000099,
				"pbm" : 0.000039,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 119500,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000046,
						"pbg" : 0.000099,
						"pbm" : 0.000039,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 30475,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 50570,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.00001,
				"pbg" : 0,
				"pbm" : 0.000029,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 50570,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.00001,
						"pbg" : 0,
						"pbm" : 0.000029,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 9008,
				"relay" : 2,
				"bwa" : 2388536,
				"bwc" : 696891,
				"fast" : 1,
				"stable" : 0,
				"guard" : 1,
				"middle" : 2,
				"exit" : 2,
				"dir" : 1,
				"pbr" : 0.000107,
				"pbg" : 0.000058,
				"pbm" : 0.000058,
				"pbe" : 0.000204,
				"countries" : [
					{
						"cc" : "LU",
						"relay" : 2,
						"bwa" : 2388536,
						"bwc" : 696891,
						"fast" : 1,
						"stable" : 0,
						"guard" : 1,
						"middle" : 2,
						"exit" : 2,
						"dir" : 1,
						"pbr" : 0.000107,
						"pbg" : 0.000058,
						"pbm" : 0.000058,
						"pbe" : 0.000204
					}
				]
			},
			{
				"as" : 33724,
				"relay" : 1,
				"bwa" : 66560,
				"bwc" : 4230,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000005,
				"pbg" : 0,
				"pbm" : 0.000015,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 66560,
						"bwc" : 4230,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000005,
						"pbg" : 0,
						"pbm" : 0.000015,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 35662,
				"relay" : 5,
				"bwa" : 4838573,
				"bwc" : 2607336,
				"fast" : 5,
				"stable" : 3,
				"guard" : 2,
				"middle" : 5,
				"exit" : 3,
				"dir" : 2,
				"pbr" : 0.001134,
				"pbg" : 0.000888,
				"pbm" : 0.000351,
				"pbe" : 0.002162,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 5,
						"bwa" : 4838573,
						"bwc" : 2607336,
						"fast" : 5,
						"stable" : 3,
						"guard" : 2,
						"middle" : 5,
						"exit" : 3,
						"dir" : 2,
						"pbr" : 0.001134,
						"pbg" : 0.000888,
						"pbm" : 0.000351,
						"pbe" : 0.002162
					}
				]
			},
			{
				"as" : 11404,
				"relay" : 1,
				"bwa" : 5887373,
				"bwc" : 3823106,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.001908,
				"pbg" : 0.001069,
				"pbm" : 0.001069,
				"pbe" : 0.003584,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 5887373,
						"bwc" : 3823106,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.001908,
						"pbg" : 0.001069,
						"pbm" : 0.001069,
						"pbe" : 0.003584
					}
				]
			},
			{
				"as" : 17858,
				"relay" : 1,
				"bwa" : 188815,
				"bwc" : 18182,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000023,
				"countries" : [
					{
						"cc" : "KR",
						"relay" : 1,
						"bwa" : 188815,
						"bwc" : 18182,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000023
					}
				]
			},
			{
				"as" : 34757,
				"relay" : 1,
				"bwa" : 179794,
				"bwc" : 1477,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 179794,
						"bwc" : 1477,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 197422,
				"relay" : 2,
				"bwa" : 225280,
				"bwc" : 54819,
				"fast" : 2,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000019999999999999998,
				"pbg" : 0,
				"pbm" : 0.000059999999999999995,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 2,
						"bwa" : 225280,
						"bwc" : 54819,
						"fast" : 2,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000019999999999999998,
						"pbg" : 0,
						"pbm" : 0.000059999999999999995,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 48683,
				"relay" : 1,
				"bwa" : 136192,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000009,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000026,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 136192,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000009,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000026
					}
				]
			},
			{
				"as" : 9737,
				"relay" : 1,
				"bwa" : 50342,
				"bwc" : 14489,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "TH",
						"relay" : 1,
						"bwa" : 50342,
						"bwc" : 14489,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 31122,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 450015,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000072,
				"pbg" : 0.00004,
				"pbm" : 0.00004,
				"pbe" : 0.000135,
				"countries" : [
					{
						"cc" : "IE",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 450015,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000072,
						"pbg" : 0.00004,
						"pbm" : 0.00004,
						"pbe" : 0.000135
					}
				]
			},
			{
				"as" : 9198,
				"relay" : 2,
				"bwa" : 151695,
				"bwc" : 32090,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000007,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "KZ",
						"relay" : 2,
						"bwa" : 151695,
						"bwc" : 32090,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000007,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 20495,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 58582,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000009,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000027,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 58582,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000009,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000027
					}
				]
			},
			{
				"as" : 45758,
				"relay" : 1,
				"bwa" : 45000,
				"bwc" : 371,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000002,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "TH",
						"relay" : 1,
						"bwa" : 45000,
						"bwc" : 371,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000002,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 13489,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 5934,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "CO",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 5934,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 35632,
				"relay" : 1,
				"bwa" : 44314,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 44314,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 5669,
				"relay" : 1,
				"bwa" : 24576,
				"bwc" : 548,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 24576,
						"bwc" : 548,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 34779,
				"relay" : 1,
				"bwa" : 246733,
				"bwc" : 13128,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000054,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000161,
				"countries" : [
					{
						"cc" : "SI",
						"relay" : 1,
						"bwa" : 246733,
						"bwc" : 13128,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000054,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000161
					}
				]
			},
			{
				"as" : 7065,
				"relay" : 2,
				"bwa" : 4643840,
				"bwc" : 4448974,
				"fast" : 1,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.001526,
				"pbg" : 0.000854,
				"pbm" : 0.000863,
				"pbe" : 0.002862,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 4643840,
						"bwc" : 4448974,
						"fast" : 1,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.001526,
						"pbg" : 0.000854,
						"pbm" : 0.000863,
						"pbe" : 0.002862
					}
				]
			},
			{
				"as" : 24544,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 59843,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000024,
				"countries" : [
					{
						"cc" : "HK",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 59843,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000024
					}
				]
			},
			{
				"as" : 20738,
				"relay" : 3,
				"bwa" : 2300908,
				"bwc" : 1084035,
				"fast" : 3,
				"stable" : 2,
				"guard" : 2,
				"middle" : 3,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000567,
				"pbg" : 0.001203,
				"pbm" : 0.000498,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 3,
						"bwa" : 2300908,
						"bwc" : 1084035,
						"fast" : 3,
						"stable" : 2,
						"guard" : 2,
						"middle" : 3,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000567,
						"pbg" : 0.001203,
						"pbm" : 0.000498,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 4760,
				"relay" : 1,
				"bwa" : 516402,
				"bwc" : 55306,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000023,
				"pbg" : 0.00005,
				"pbm" : 0.00002,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "HK",
						"relay" : 1,
						"bwa" : 516402,
						"bwc" : 55306,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000023,
						"pbg" : 0.00005,
						"pbm" : 0.00002,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 56423,
				"relay" : 1,
				"bwa" : 295166,
				"bwc" : 5371,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000014,
				"pbg" : 0,
				"pbm" : 0.000041,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 295166,
						"bwc" : 5371,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000014,
						"pbg" : 0,
						"pbm" : 0.000041,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 10834,
				"relay" : 1,
				"bwa" : 32768,
				"bwc" : 202,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "AR",
						"relay" : 1,
						"bwa" : 32768,
						"bwc" : 202,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 35271,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 1020299,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000247,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000741,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 1020299,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000247,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000741
					}
				]
			},
			{
				"as" : 48209,
				"relay" : 1,
				"bwa" : 65536,
				"bwc" : 33339,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000005,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000015,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 65536,
						"bwc" : 33339,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000005,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000015
					}
				]
			},
			{
				"as" : 1257,
				"relay" : 2,
				"bwa" : 401408,
				"bwc" : 269180,
				"fast" : 2,
				"stable" : 1,
				"guard" : 1,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000061000000000000005,
				"pbg" : 0.000044,
				"pbm" : 0.000136,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 2,
						"bwa" : 401408,
						"bwc" : 269180,
						"fast" : 2,
						"stable" : 1,
						"guard" : 1,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000061000000000000005,
						"pbg" : 0.000044,
						"pbm" : 0.000136,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12083,
				"relay" : 3,
				"bwa" : 391168,
				"bwc" : 93562,
				"fast" : 3,
				"stable" : 0,
				"guard" : 0,
				"middle" : 3,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000023000000000000003,
				"pbg" : 0,
				"pbm" : 0.000053,
				"pbe" : 0.000016,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 3,
						"bwa" : 391168,
						"bwc" : 93562,
						"fast" : 3,
						"stable" : 0,
						"guard" : 0,
						"middle" : 3,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000023000000000000003,
						"pbg" : 0,
						"pbm" : 0.000053,
						"pbe" : 0.000016
					}
				]
			},
			{
				"as" : 44565,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 26716,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000024,
				"countries" : [
					{
						"cc" : "TR",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 26716,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000024
					}
				]
			},
			{
				"as" : 2603,
				"relay" : 1,
				"bwa" : 27025916,
				"bwc" : 16461406,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.004451,
				"pbg" : 0.009573,
				"pbm" : 0.003782,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 27025916,
						"bwc" : 16461406,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.004451,
						"pbg" : 0.009573,
						"pbm" : 0.003782,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 44734,
				"relay" : 1,
				"bwa" : 229760,
				"bwc" : 32877,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000016,
				"pbg" : 0.000009,
				"pbm" : 0.000009,
				"pbe" : 0.00003,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 229760,
						"bwc" : 32877,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000016,
						"pbg" : 0.000009,
						"pbm" : 0.000009,
						"pbe" : 0.00003
					}
				]
			},
			{
				"as" : 24806,
				"relay" : 1,
				"bwa" : 819200,
				"bwc" : 505022,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.00022,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000661,
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 819200,
						"bwc" : 505022,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.00022,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000661
					}
				]
			},
			{
				"as" : 15497,
				"relay" : 2,
				"bwa" : 358400,
				"bwc" : 170959,
				"fast" : 2,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000067,
				"pbg" : 0.000032,
				"pbm" : 0.000059999999999999995,
				"pbe" : 0.000109,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 2,
						"bwa" : 358400,
						"bwc" : 170959,
						"fast" : 2,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000067,
						"pbg" : 0.000032,
						"pbm" : 0.000059999999999999995,
						"pbe" : 0.000109
					}
				]
			},
			{
				"as" : 12129,
				"relay" : 1,
				"bwa" : 524288,
				"bwc" : 551285,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000147,
				"pbg" : 0.000315,
				"pbm" : 0.000125,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 524288,
						"bwc" : 551285,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000147,
						"pbg" : 0.000315,
						"pbm" : 0.000125,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8218,
				"relay" : 1,
				"bwa" : 614400,
				"bwc" : 613142,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000149,
				"pbg" : 0.000321,
				"pbm" : 0.000127,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 614400,
						"bwc" : 613142,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000149,
						"pbg" : 0.000321,
						"pbm" : 0.000127,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 26496,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 19816,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0.000024,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 19816,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 197451,
				"relay" : 1,
				"bwa" : 520192,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000025,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000074,
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 520192,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000025,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000074
					}
				]
			},
			{
				"as" : 2108,
				"relay" : 4,
				"bwa" : 2114463,
				"bwc" : 1565096,
				"fast" : 4,
				"stable" : 2,
				"guard" : 2,
				"middle" : 4,
				"exit" : 0,
				"dir" : 4,
				"pbr" : 0.000475,
				"pbg" : 0.000559,
				"pbm" : 0.0008690000000000001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "HR",
						"relay" : 4,
						"bwa" : 2114463,
						"bwc" : 1565096,
						"fast" : 4,
						"stable" : 2,
						"guard" : 2,
						"middle" : 4,
						"exit" : 0,
						"dir" : 4,
						"pbr" : 0.000475,
						"pbg" : 0.000559,
						"pbm" : 0.0008690000000000001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 39351,
				"relay" : 1,
				"bwa" : 2560000,
				"bwc" : 2551930,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.001627,
				"pbg" : 0.000912,
				"pbm" : 0.000912,
				"pbe" : 0.003056,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 2560000,
						"bwc" : 2551930,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.001627,
						"pbg" : 0.000912,
						"pbm" : 0.000912,
						"pbe" : 0.003056
					}
				]
			},
			{
				"as" : 27747,
				"relay" : 1,
				"bwa" : 31702,
				"bwc" : 111,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000002,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "AR",
						"relay" : 1,
						"bwa" : 31702,
						"bwc" : 111,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000002,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 17019,
				"relay" : 1,
				"bwa" : 3426819,
				"bwc" : 2784629,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.00104,
				"pbg" : 0.002236,
				"pbm" : 0.000883,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 3426819,
						"bwc" : 2784629,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.00104,
						"pbg" : 0.002236,
						"pbm" : 0.000883,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 18515,
				"relay" : 1,
				"bwa" : 153600,
				"bwc" : 38552,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000023,
				"pbg" : 0,
				"pbm" : 0.000068,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 153600,
						"bwc" : 38552,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000023,
						"pbg" : 0,
						"pbm" : 0.000068,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 4589,
				"relay" : 1,
				"bwa" : 122880,
				"bwc" : 22609,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000016,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000048,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 122880,
						"bwc" : 22609,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000016,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000048
					}
				]
			},
			{
				"as" : 12271,
				"relay" : 3,
				"bwa" : 647168,
				"bwc" : 237833,
				"fast" : 2,
				"stable" : 3,
				"guard" : 1,
				"middle" : 3,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000134,
				"pbg" : 0.000265,
				"pbm" : 0.000137,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 3,
						"bwa" : 647168,
						"bwc" : 237833,
						"fast" : 2,
						"stable" : 3,
						"guard" : 1,
						"middle" : 3,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000134,
						"pbg" : 0.000265,
						"pbm" : 0.000137,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 51377,
				"relay" : 3,
				"bwa" : 4541454,
				"bwc" : 1576048,
				"fast" : 3,
				"stable" : 3,
				"guard" : 1,
				"middle" : 3,
				"exit" : 1,
				"dir" : 3,
				"pbr" : 0.000847,
				"pbg" : 0.000465,
				"pbm" : 0.0005160000000000001,
				"pbe" : 0.001559,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 3,
						"bwa" : 4541454,
						"bwc" : 1576048,
						"fast" : 3,
						"stable" : 3,
						"guard" : 1,
						"middle" : 3,
						"exit" : 1,
						"dir" : 3,
						"pbr" : 0.000847,
						"pbg" : 0.000465,
						"pbm" : 0.0005160000000000001,
						"pbe" : 0.001559
					}
				]
			},
			{
				"as" : 11814,
				"relay" : 3,
				"bwa" : 202752,
				"bwc" : 52225,
				"fast" : 2,
				"stable" : 1,
				"guard" : 0,
				"middle" : 3,
				"exit" : 0,
				"dir" : 3,
				"pbr" : 0.000016,
				"pbg" : 0,
				"pbm" : 0.000047000000000000004,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 3,
						"bwa" : 202752,
						"bwc" : 52225,
						"fast" : 2,
						"stable" : 1,
						"guard" : 0,
						"middle" : 3,
						"exit" : 0,
						"dir" : 3,
						"pbr" : 0.000016,
						"pbg" : 0,
						"pbm" : 0.000047000000000000004,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 24989,
				"relay" : 2,
				"bwa" : 757760,
				"bwc" : 576201,
				"fast" : 1,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000147,
				"pbg" : 0.000313,
				"pbm" : 0.000131,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 757760,
						"bwc" : 576201,
						"fast" : 1,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000147,
						"pbg" : 0.000313,
						"pbm" : 0.000131,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8401,
				"relay" : 1,
				"bwa" : 50671,
				"bwc" : 3921,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000005,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 50671,
						"bwc" : 3921,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000005,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 25019,
				"relay" : 1,
				"bwa" : 43320,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000004,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SA",
						"relay" : 1,
						"bwa" : 43320,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000004,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 38951,
				"relay" : 1,
				"bwa" : 153600,
				"bwc" : 23743,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000016,
				"pbg" : 0,
				"pbm" : 0.000048,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 153600,
						"bwc" : 23743,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000016,
						"pbg" : 0,
						"pbm" : 0.000048,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 21409,
				"relay" : 1,
				"bwa" : 2854613,
				"bwc" : 27610,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.001671,
				"pbg" : 0,
				"pbm" : 0.005013,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 2854613,
						"bwc" : 27610,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.001671,
						"pbg" : 0,
						"pbm" : 0.005013,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 10103,
				"relay" : 1,
				"bwa" : 627258,
				"bwc" : 119783,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000072,
				"pbg" : 0.00004,
				"pbm" : 0.00004,
				"pbe" : 0.000136,
				"countries" : [
					{
						"cc" : "HK",
						"relay" : 1,
						"bwa" : 627258,
						"bwc" : 119783,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000072,
						"pbg" : 0.00004,
						"pbm" : 0.00004,
						"pbe" : 0.000136
					}
				]
			},
			{
				"as" : 46844,
				"relay" : 1,
				"bwa" : 3651563,
				"bwc" : 2114889,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.001291,
				"pbg" : 0.002776,
				"pbm" : 0.001097,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 3651563,
						"bwc" : 2114889,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.001291,
						"pbg" : 0.002776,
						"pbm" : 0.001097,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 33597,
				"relay" : 1,
				"bwa" : 4389,
				"bwc" : 124,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000005,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 4389,
						"bwc" : 124,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000005,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 27229,
				"relay" : 1,
				"bwa" : 50000,
				"bwc" : 1287,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000004,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 50000,
						"bwc" : 1287,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000004,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 38478,
				"relay" : 1,
				"bwa" : 353403,
				"bwc" : 153175,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000023,
				"pbg" : 0.000013,
				"pbm" : 0.000013,
				"pbe" : 0.000044,
				"countries" : [
					{
						"cc" : "HK",
						"relay" : 1,
						"bwa" : 353403,
						"bwc" : 153175,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000023,
						"pbg" : 0.000013,
						"pbm" : 0.000013,
						"pbe" : 0.000044
					}
				]
			},
			{
				"as" : 26914,
				"relay" : 1,
				"bwa" : 1280000,
				"bwc" : 1218167,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.00035,
				"pbg" : 0.000754,
				"pbm" : 0.000298,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1280000,
						"bwc" : 1218167,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.00035,
						"pbg" : 0.000754,
						"pbm" : 0.000298,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 23242,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 16577,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000017,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 16577,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000017
					}
				]
			},
			{
				"as" : 10835,
				"relay" : 1,
				"bwa" : 81920,
				"bwc" : 27062,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0.000017,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 81920,
						"bwc" : 27062,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0.000017,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 50716,
				"relay" : 1,
				"bwa" : 3617792,
				"bwc" : 2299451,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000722,
				"pbg" : 0,
				"pbm" : 0.002165,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 3617792,
						"bwc" : 2299451,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000722,
						"pbg" : 0,
						"pbm" : 0.002165,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 6703,
				"relay" : 1,
				"bwa" : 75298,
				"bwc" : 19747,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000004,
				"pbg" : 0,
				"pbm" : 0.000012,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 75298,
						"bwc" : 19747,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000004,
						"pbg" : 0,
						"pbm" : 0.000012,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 44604,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 1044435,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.00033,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000989,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 1044435,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.00033,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000989
					}
				]
			},
			{
				"as" : 2107,
				"relay" : 1,
				"bwa" : 406924,
				"bwc" : 54577,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.00003,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000091,
				"countries" : [
					{
						"cc" : "SI",
						"relay" : 1,
						"bwa" : 406924,
						"bwc" : 54577,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.00003,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000091
					}
				]
			},
			{
				"as" : 42682,
				"relay" : 1,
				"bwa" : 30007,
				"bwc" : 165,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 30007,
						"bwc" : 165,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 2609,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 649,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0.000001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "TN",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 649,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0,
						"pbg" : 0,
						"pbm" : 0.000001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 33891,
				"relay" : 1,
				"bwa" : 491520,
				"bwc" : 144139,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000054,
				"pbg" : 0.00003,
				"pbm" : 0.00003,
				"pbe" : 0.000101,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 491520,
						"bwc" : 144139,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000054,
						"pbg" : 0.00003,
						"pbm" : 0.00003,
						"pbe" : 0.000101
					}
				]
			},
			{
				"as" : 1764,
				"relay" : 1,
				"bwa" : 5252194,
				"bwc" : 3264711,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.00176,
				"pbg" : 0.003785,
				"pbm" : 0.001495,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 5252194,
						"bwc" : 3264711,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.00176,
						"pbg" : 0.003785,
						"pbm" : 0.001495,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 36236,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 11960,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000017,
				"pbg" : 0.000037,
				"pbm" : 0.000014,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "HK",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 11960,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000017,
						"pbg" : 0.000037,
						"pbm" : 0.000014,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 47678,
				"relay" : 1,
				"bwa" : 1140736,
				"bwc" : 998852,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000362,
				"pbg" : 0,
				"pbm" : 0.001087,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 1140736,
						"bwc" : 998852,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000362,
						"pbg" : 0,
						"pbm" : 0.001087,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 39959,
				"relay" : 1,
				"bwa" : 7942691,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 0,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.002277,
				"pbg" : 0.004898,
				"pbm" : 0.001935,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 7942691,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 0,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.002277,
						"pbg" : 0.004898,
						"pbm" : 0.001935,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 36025,
				"relay" : 1,
				"bwa" : 1808513,
				"bwc" : 837661,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000383,
				"pbg" : 0.000824,
				"pbm" : 0.000325,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1808513,
						"bwc" : 837661,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000383,
						"pbg" : 0.000824,
						"pbm" : 0.000325,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 2764,
				"relay" : 1,
				"bwa" : 61609,
				"bwc" : 20561,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000003,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 1,
						"bwa" : 61609,
						"bwc" : 20561,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000003,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 39857,
				"relay" : 2,
				"bwa" : 1634304,
				"bwc" : 610628,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000276,
				"pbg" : 0,
				"pbm" : 0.0008290000000000001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 2,
						"bwa" : 1634304,
						"bwc" : 610628,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000276,
						"pbg" : 0,
						"pbm" : 0.0008290000000000001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8997,
				"relay" : 2,
				"bwa" : 805304,
				"bwc" : 80329,
				"fast" : 2,
				"stable" : 0,
				"guard" : 1,
				"middle" : 2,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000078,
				"pbg" : 0.000016,
				"pbm" : 0.000162,
				"pbe" : 0.000055,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 805304,
						"bwc" : 80329,
						"fast" : 2,
						"stable" : 0,
						"guard" : 1,
						"middle" : 2,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000078,
						"pbg" : 0.000016,
						"pbm" : 0.000162,
						"pbe" : 0.000055
					}
				]
			},
			{
				"as" : 20521,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000238,
				"pbg" : 0.000133,
				"pbm" : 0.000133,
				"pbe" : 0.000447,
				"countries" : [
					{
						"cc" : "MT",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000238,
						"pbg" : 0.000133,
						"pbm" : 0.000133,
						"pbe" : 0.000447
					}
				]
			},
			{
				"as" : 35533,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 4960,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000012,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000035,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 4960,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000012,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000035
					}
				]
			},
			{
				"as" : 20178,
				"relay" : 1,
				"bwa" : 61440,
				"bwc" : 13062,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000004,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 61440,
						"bwc" : 13062,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000004,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 42005,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 50975,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000013,
				"pbg" : 0,
				"pbm" : 0.000039,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SK",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 50975,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000013,
						"pbg" : 0,
						"pbm" : 0.000039,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 33837,
				"relay" : 3,
				"bwa" : 498285,
				"bwc" : 186470,
				"fast" : 3,
				"stable" : 1,
				"guard" : 1,
				"middle" : 3,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000074,
				"pbg" : 0.000101,
				"pbm" : 0.000078,
				"pbe" : 0.000043,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 3,
						"bwa" : 498285,
						"bwc" : 186470,
						"fast" : 3,
						"stable" : 1,
						"guard" : 1,
						"middle" : 3,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000074,
						"pbg" : 0.000101,
						"pbm" : 0.000078,
						"pbe" : 0.000043
					}
				]
			},
			{
				"as" : 34119,
				"relay" : 1,
				"bwa" : 61440,
				"bwc" : 14628,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000005,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000016,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 61440,
						"bwc" : 14628,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000005,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000016
					}
				]
			},
			{
				"as" : 19202,
				"relay" : 1,
				"bwa" : 153600,
				"bwc" : 110881,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000017,
				"pbg" : 0,
				"pbm" : 0.00005,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 153600,
						"bwc" : 110881,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000017,
						"pbg" : 0,
						"pbm" : 0.00005,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 9617,
				"relay" : 1,
				"bwa" : 88553,
				"bwc" : 1418,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000006,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 88553,
						"bwc" : 1418,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000006,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 103,
				"relay" : 1,
				"bwa" : 1667627,
				"bwc" : 496958,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000374,
				"pbg" : 0,
				"pbm" : 0.001122,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1667627,
						"bwc" : 496958,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000374,
						"pbg" : 0,
						"pbm" : 0.001122,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 41733,
				"relay" : 3,
				"bwa" : 2039869,
				"bwc" : 310284,
				"fast" : 3,
				"stable" : 1,
				"guard" : 1,
				"middle" : 3,
				"exit" : 1,
				"dir" : 3,
				"pbr" : 0.000088,
				"pbg" : 0.000129,
				"pbm" : 0.000069,
				"pbe" : 0.000067,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 3,
						"bwa" : 2039869,
						"bwc" : 310284,
						"fast" : 3,
						"stable" : 1,
						"guard" : 1,
						"middle" : 3,
						"exit" : 1,
						"dir" : 3,
						"pbr" : 0.000088,
						"pbg" : 0.000129,
						"pbm" : 0.000069,
						"pbe" : 0.000067
					}
				]
			},
			{
				"as" : 29405,
				"relay" : 1,
				"bwa" : 3145728,
				"bwc" : 1076657,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.001553,
				"pbg" : 0.00087,
				"pbm" : 0.00087,
				"pbe" : 0.002917,
				"countries" : [
					{
						"cc" : "SK",
						"relay" : 1,
						"bwa" : 3145728,
						"bwc" : 1076657,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.001553,
						"pbg" : 0.00087,
						"pbm" : 0.00087,
						"pbe" : 0.002917
					}
				]
			},
			{
				"as" : 13977,
				"relay" : 1,
				"bwa" : 58368,
				"bwc" : 492,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 58368,
						"bwc" : 492,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 9112,
				"relay" : 1,
				"bwa" : 215040,
				"bwc" : 68262,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000019,
				"pbg" : 0.00004,
				"pbm" : 0.000016,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 215040,
						"bwc" : 68262,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000019,
						"pbg" : 0.00004,
						"pbm" : 0.000016,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 9145,
				"relay" : 1,
				"bwa" : 56320,
				"bwc" : 36,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000005,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 56320,
						"bwc" : 36,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000005,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 51013,
				"relay" : 1,
				"bwa" : 4121610,
				"bwc" : 2939691,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.001582,
				"pbg" : 0.003403,
				"pbm" : 0.001344,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SK",
						"relay" : 1,
						"bwa" : 4121610,
						"bwc" : 2939691,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.001582,
						"pbg" : 0.003403,
						"pbm" : 0.001344,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 7738,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 1255,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000003,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 1255,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000003,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 26934,
				"relay" : 1,
				"bwa" : 1695486,
				"bwc" : 1117609,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.00034,
				"pbg" : 0.000731,
				"pbm" : 0.000289,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1695486,
						"bwc" : 1117609,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.00034,
						"pbg" : 0.000731,
						"pbm" : 0.000289,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 43317,
				"relay" : 1,
				"bwa" : 301199,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000026,
				"pbg" : 0.000055,
				"pbm" : 0.000022,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 301199,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000026,
						"pbg" : 0.000055,
						"pbm" : 0.000022,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12668,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 150804,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000087,
				"pbg" : 0.000187,
				"pbm" : 0.000074,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 150804,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000087,
						"pbg" : 0.000187,
						"pbm" : 0.000074,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 9916,
				"relay" : 2,
				"bwa" : 1646737,
				"bwc" : 258514,
				"fast" : 2,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.00007,
				"pbg" : 0,
				"pbm" : 0.00021,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "TW",
						"relay" : 2,
						"bwa" : 1646737,
						"bwc" : 258514,
						"fast" : 2,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.00007,
						"pbg" : 0,
						"pbm" : 0.00021,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 18809,
				"relay" : 4,
				"bwa" : 284554,
				"bwc" : 90098,
				"fast" : 4,
				"stable" : 3,
				"guard" : 0,
				"middle" : 4,
				"exit" : 0,
				"dir" : 4,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000008,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "PA",
						"relay" : 4,
						"bwa" : 284554,
						"bwc" : 90098,
						"fast" : 4,
						"stable" : 3,
						"guard" : 0,
						"middle" : 4,
						"exit" : 0,
						"dir" : 4,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000008,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 31211,
				"relay" : 1,
				"bwa" : 2723940,
				"bwc" : 1565352,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000751,
				"pbg" : 0.001616,
				"pbm" : 0.000638,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 1,
						"bwa" : 2723940,
						"bwc" : 1565352,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000751,
						"pbg" : 0.001616,
						"pbm" : 0.000638,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 2518,
				"relay" : 2,
				"bwa" : 235344,
				"bwc" : 48526,
				"fast" : 2,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000011,
				"pbg" : 0,
				"pbm" : 0.000012,
				"pbe" : 0.000022,
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 2,
						"bwa" : 235344,
						"bwc" : 48526,
						"fast" : 2,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000011,
						"pbg" : 0,
						"pbm" : 0.000012,
						"pbe" : 0.000022
					}
				]
			},
			{
				"as" : 31736,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 49540,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000004,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000012,
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 49540,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000004,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000012
					}
				]
			},
			{
				"as" : 198252,
				"relay" : 1,
				"bwa" : 53248,
				"bwc" : 11708,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000007,
				"pbg" : 0,
				"pbm" : 0.00002,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "BA",
						"relay" : 1,
						"bwa" : 53248,
						"bwc" : 11708,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000007,
						"pbg" : 0,
						"pbm" : 0.00002,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 38285,
				"relay" : 2,
				"bwa" : 127749,
				"bwc" : 8615,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 2,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 2,
						"bwa" : 127749,
						"bwc" : 8615,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 2,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 55470,
				"relay" : 1,
				"bwa" : 1901167,
				"bwc" : 473899,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.00008,
				"pbg" : 0.000173,
				"pbm" : 0.000068,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "IN",
						"relay" : 1,
						"bwa" : 1901167,
						"bwc" : 473899,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.00008,
						"pbg" : 0.000173,
						"pbm" : 0.000068,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 198414,
				"relay" : 2,
				"bwa" : 2199552,
				"bwc" : 596270,
				"fast" : 2,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.0006529999999999999,
				"pbg" : 0.000362,
				"pbm" : 0.000382,
				"pbe" : 0.001214,
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 2,
						"bwa" : 2199552,
						"bwc" : 596270,
						"fast" : 2,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.0006529999999999999,
						"pbg" : 0.000362,
						"pbm" : 0.000382,
						"pbe" : 0.001214
					}
				]
			},
			{
				"as" : 42964,
				"relay" : 1,
				"bwa" : 1405459,
				"bwc" : 983577,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000116,
				"pbg" : 0.000065,
				"pbm" : 0.000065,
				"pbe" : 0.000218,
				"countries" : [
					{
						"cc" : "HU",
						"relay" : 1,
						"bwa" : 1405459,
						"bwc" : 983577,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000116,
						"pbg" : 0.000065,
						"pbm" : 0.000065,
						"pbe" : 0.000218
					}
				]
			},
			{
				"as" : 12035,
				"relay" : 1,
				"bwa" : 98304,
				"bwc" : 12900,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000013,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000039,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 98304,
						"bwc" : 12900,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000013,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000039
					}
				]
			},
			{
				"as" : 24309,
				"relay" : 1,
				"bwa" : 95322,
				"bwc" : 50022,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000005,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000014,
				"countries" : [
					{
						"cc" : "IN",
						"relay" : 1,
						"bwa" : 95322,
						"bwc" : 50022,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000005,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000014
					}
				]
			},
			{
				"as" : 6663,
				"relay" : 1,
				"bwa" : 307200,
				"bwc" : 103542,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000077,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.00023,
				"countries" : [
					{
						"cc" : "RO",
						"relay" : 1,
						"bwa" : 307200,
						"bwc" : 103542,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000077,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.00023
					}
				]
			},
			{
				"as" : 49170,
				"relay" : 1,
				"bwa" : 98304,
				"bwc" : 8247,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0.000018,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 98304,
						"bwc" : 8247,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0.000018,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 9269,
				"relay" : 1,
				"bwa" : 141843,
				"bwc" : 22338,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000017,
				"countries" : [
					{
						"cc" : "HK",
						"relay" : 1,
						"bwa" : 141843,
						"bwc" : 22338,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000017
					}
				]
			},
			{
				"as" : 73,
				"relay" : 1,
				"bwa" : 4864070,
				"bwc" : 3750066,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.001878,
				"pbg" : 0.004039,
				"pbm" : 0.001596,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 4864070,
						"bwc" : 3750066,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.001878,
						"pbg" : 0.004039,
						"pbm" : 0.001596,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 3061,
				"relay" : 1,
				"bwa" : 195280,
				"bwc" : 172696,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000031,
				"pbg" : 0,
				"pbm" : 0.000094,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 195280,
						"bwc" : 172696,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000031,
						"pbg" : 0,
						"pbm" : 0.000094,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 56617,
				"relay" : 1,
				"bwa" : 65536,
				"bwc" : 1225,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000004,
				"countries" : [
					{
						"cc" : "LV",
						"relay" : 1,
						"bwa" : 65536,
						"bwc" : 1225,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000004
					}
				]
			},
			{
				"as" : 45753,
				"relay" : 1,
				"bwa" : 88205,
				"bwc" : 12930,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000004,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "HK",
						"relay" : 1,
						"bwa" : 88205,
						"bwc" : 12930,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000004,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 34702,
				"relay" : 1,
				"bwa" : 92160,
				"bwc" : 32974,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000007,
				"pbg" : 0,
				"pbm" : 0.000022,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "EE",
						"relay" : 1,
						"bwa" : 92160,
						"bwc" : 32974,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000007,
						"pbg" : 0,
						"pbm" : 0.000022,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 9063,
				"relay" : 1,
				"bwa" : 197064,
				"bwc" : 58795,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000012,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000035,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 197064,
						"bwc" : 58795,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000012,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000035
					}
				]
			},
			{
				"as" : 35018,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 2866,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.00001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 2866,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.00001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 18978,
				"relay" : 2,
				"bwa" : 122880,
				"bwc" : 43159,
				"fast" : 1,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000011,
				"pbg" : 0,
				"pbm" : 0.000024,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 122880,
						"bwc" : 43159,
						"fast" : 1,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000011,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 10508,
				"relay" : 1,
				"bwa" : 196608,
				"bwc" : 34238,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000019,
				"pbg" : 0.000041,
				"pbm" : 0.000016,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 196608,
						"bwc" : 34238,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000019,
						"pbg" : 0.000041,
						"pbm" : 0.000016,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 18126,
				"relay" : 1,
				"bwa" : 536683,
				"bwc" : 34552,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000011,
				"pbg" : 0,
				"pbm" : 0.000034,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 536683,
						"bwc" : 34552,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000011,
						"pbg" : 0,
						"pbm" : 0.000034,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 34594,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 332,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "HR",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 332,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 3790,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 26012,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000011,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000032,
				"countries" : [
					{
						"cc" : "CR",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 26012,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000011,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000032
					}
				]
			},
			{
				"as" : 8896,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 823433,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000293,
				"pbg" : 0.00063,
				"pbm" : 0.000249,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NO",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 823433,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000293,
						"pbg" : 0.00063,
						"pbm" : 0.000249,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 17746,
				"relay" : 1,
				"bwa" : 44653,
				"bwc" : 1012,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000002,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NZ",
						"relay" : 1,
						"bwa" : 44653,
						"bwc" : 1012,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000002,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 9105,
				"relay" : 1,
				"bwa" : 140254,
				"bwc" : 19459,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000007,
				"pbg" : 0,
				"pbm" : 0.000022,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 140254,
						"bwc" : 19459,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000007,
						"pbg" : 0,
						"pbm" : 0.000022,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 34,
				"relay" : 1,
				"bwa" : 593792,
				"bwc" : 92104,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000028,
				"pbg" : 0,
				"pbm" : 0.000083,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 593792,
						"bwc" : 92104,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000028,
						"pbg" : 0,
						"pbm" : 0.000083,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 33139,
				"relay" : 1,
				"bwa" : 25600,
				"bwc" : 133,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 25600,
						"bwc" : 133,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 30962,
				"relay" : 3,
				"bwa" : 1967063,
				"bwc" : 1230616,
				"fast" : 3,
				"stable" : 3,
				"guard" : 0,
				"middle" : 3,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000258,
				"pbg" : 0,
				"pbm" : 0.000773,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 3,
						"bwa" : 1967063,
						"bwc" : 1230616,
						"fast" : 3,
						"stable" : 3,
						"guard" : 0,
						"middle" : 3,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000258,
						"pbg" : 0,
						"pbm" : 0.000773,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 35244,
				"relay" : 1,
				"bwa" : 196608,
				"bwc" : 166266,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000041,
				"pbg" : 0,
				"pbm" : 0.000123,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 196608,
						"bwc" : 166266,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000041,
						"pbg" : 0,
						"pbm" : 0.000123,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 6866,
				"relay" : 1,
				"bwa" : 63488,
				"bwc" : 3143,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000004,
				"pbg" : 0,
				"pbm" : 0.000012,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "GR",
						"relay" : 1,
						"bwa" : 63488,
						"bwc" : 3143,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000004,
						"pbg" : 0,
						"pbm" : 0.000012,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 59469,
				"relay" : 1,
				"bwa" : 15406716,
				"bwc" : 12947137,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.005117,
				"pbg" : 0.002868,
				"pbm" : 0.002867,
				"pbe" : 0.009614,
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 15406716,
						"bwc" : 12947137,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.005117,
						"pbg" : 0.002868,
						"pbm" : 0.002867,
						"pbe" : 0.009614
					}
				]
			},
			{
				"as" : 22772,
				"relay" : 1,
				"bwa" : 655360,
				"bwc" : 161333,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000088,
				"pbg" : 0.000189,
				"pbm" : 0.000075,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 655360,
						"bwc" : 161333,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000088,
						"pbg" : 0.000189,
						"pbm" : 0.000075,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 10507,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 39,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 39,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 30158,
				"relay" : 1,
				"bwa" : 5181,
				"bwc" : 72,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000002,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 5181,
						"bwc" : 72,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000002,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 37560,
				"relay" : 2,
				"bwa" : 484813,
				"bwc" : 106875,
				"fast" : 2,
				"stable" : 0,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 2,
				"pbr" : 0.000031,
				"pbg" : 0,
				"pbm" : 0.000092,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 2,
						"bwa" : 484813,
						"bwc" : 106875,
						"fast" : 2,
						"stable" : 0,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 2,
						"pbr" : 0.000031,
						"pbg" : 0,
						"pbm" : 0.000092,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8615,
				"relay" : 1,
				"bwa" : 786432,
				"bwc" : 630707,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000269,
				"pbg" : 0.000579,
				"pbm" : 0.000229,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 786432,
						"bwc" : 630707,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000269,
						"pbg" : 0.000579,
						"pbm" : 0.000229,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12392,
				"relay" : 1,
				"bwa" : 196169,
				"bwc" : 91748,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000018,
				"pbg" : 0,
				"pbm" : 0.000054,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "BE",
						"relay" : 1,
						"bwa" : 196169,
						"bwc" : 91748,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000018,
						"pbg" : 0,
						"pbm" : 0.000054,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 250,
				"relay" : 1,
				"bwa" : 83113,
				"bwc" : 13845,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000004,
				"countries" : [
					{
						"cc" : "EU",
						"relay" : 1,
						"bwa" : 83113,
						"bwc" : 13845,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000004
					}
				]
			},
			{
				"as" : 20231,
				"relay" : 1,
				"bwa" : 171009,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0.000024,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 171009,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 21378,
				"relay" : 1,
				"bwa" : 61344,
				"bwc" : 1134,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000004,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 61344,
						"bwc" : 1134,
						"fast" : 1,
						"stable" : 0,
							"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000004,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 45454,
				"relay" : 1,
				"bwa" : 84191,
				"bwc" : 23582,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000006,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 1,
						"bwa" : 84191,
						"bwc" : 23582,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000006,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 21599,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 11719,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000024,
				"countries" : [
					{
						"cc" : "PA",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 11719,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000024
					}
				]
			},
			{
				"as" : 35274,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 7815,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000008,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 7815,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000008,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 197145,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 840606,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000356,
				"pbg" : 0.000766,
				"pbm" : 0.000303,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 840606,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000356,
						"pbg" : 0.000766,
						"pbm" : 0.000303,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 27553,
				"relay" : 1,
				"bwa" : 100599,
				"bwc" : 33228,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000005,
				"pbg" : 0,
				"pbm" : 0.000015,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 100599,
						"bwc" : 33228,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000005,
						"pbg" : 0,
						"pbm" : 0.000015,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 29182,
				"relay" : 1,
				"bwa" : 1290240,
				"bwc" : 1193979,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000433,
				"pbg" : 0,
				"pbm" : 0.0013,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1290240,
						"bwc" : 1193979,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000433,
						"pbg" : 0,
						"pbm" : 0.0013,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12430,
				"relay" : 1,
				"bwa" : 7168,
				"bwc" : 0,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000003,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 1,
						"bwa" : 7168,
						"bwc" : 0,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000003,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 28986,
				"relay" : 1,
				"bwa" : 917504,
				"bwc" : 789230,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000277,
				"pbg" : 0.000155,
				"pbm" : 0.000155,
				"pbe" : 0.00052,
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 917504,
						"bwc" : 789230,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000277,
						"pbg" : 0.000155,
						"pbm" : 0.000155,
						"pbe" : 0.00052
					}
				]
			},
			{
				"as" : 25074,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 537715,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000266,
				"pbg" : 0.000572,
				"pbm" : 0.000226,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 537715,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000266,
						"pbg" : 0.000572,
						"pbm" : 0.000226,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 10887,
				"relay" : 1,
				"bwa" : 61440,
				"bwc" : 28213,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000004,
				"pbg" : 0,
				"pbm" : 0.000012,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 61440,
						"bwc" : 28213,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000004,
						"pbg" : 0,
						"pbm" : 0.000012,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 26729,
				"relay" : 1,
				"bwa" : 35540,
				"bwc" : 6758,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000002,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 35540,
						"bwc" : 6758,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000002
					}
				]
			},
			{
				"as" : 7600,
				"relay" : 1,
				"bwa" : 62121,
				"bwc" : 2070,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000004,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 1,
						"bwa" : 62121,
						"bwc" : 2070,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000004,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 24955,
				"relay" : 1,
				"bwa" : 128000,
				"bwc" : 36577,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.00001,
				"pbg" : 0,
				"pbm" : 0.00003,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 128000,
						"bwc" : 36577,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.00001,
						"pbg" : 0,
						"pbm" : 0.00003,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 29580,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 946264,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.0003,
				"pbg" : 0.000646,
				"pbm" : 0.000255,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "BG",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 946264,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.0003,
						"pbg" : 0.000646,
						"pbm" : 0.000255,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 45711,
				"relay" : 1,
				"bwa" : 100912,
				"bwc" : 6537,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000004,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000012,
				"countries" : [
					{
						"cc" : "ID",
						"relay" : 1,
						"bwa" : 100912,
						"bwc" : 6537,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000004,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000012
					}
				]
			},
			{
				"as" : 12231,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 26156,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000008,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 26156,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000008,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 41508,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 23904,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000011,
				"pbg" : 0,
				"pbm" : 0.000032,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 23904,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000011,
						"pbg" : 0,
						"pbm" : 0.000032,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 22989,
				"relay" : 1,
				"bwa" : 3712952,
				"bwc" : 2283376,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.00051,
				"pbg" : 0.001097,
				"pbm" : 0.000433,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 3712952,
						"bwc" : 2283376,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.00051,
						"pbg" : 0.001097,
						"pbm" : 0.000433,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 42160,
				"relay" : 2,
				"bwa" : 153600,
				"bwc" : 21446,
				"fast" : 2,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000013000000000000001,
				"pbg" : 0,
				"pbm" : 0.000039999999999999996,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "BE",
						"relay" : 2,
						"bwa" : 153600,
						"bwc" : 21446,
						"fast" : 2,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000013000000000000001,
						"pbg" : 0,
						"pbm" : 0.000039999999999999996,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 16810,
				"relay" : 1,
				"bwa" : 91136,
				"bwc" : 17677,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000005,
				"pbg" : 0,
				"pbm" : 0.000014,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 91136,
						"bwc" : 17677,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000005,
						"pbg" : 0,
						"pbm" : 0.000014,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 2701,
				"relay" : 1,
				"bwa" : 81920,
				"bwc" : 29793,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000013,
				"pbg" : 0,
				"pbm" : 0.000038,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 81920,
						"bwc" : 29793,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000013,
						"pbg" : 0,
						"pbm" : 0.000038,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 35816,
				"relay" : 1,
				"bwa" : 303369,
				"bwc" : 76242,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.00001,
				"pbg" : 0,
				"pbm" : 0.000029,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 303369,
						"bwc" : 76242,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.00001,
						"pbg" : 0,
						"pbm" : 0.000029,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 13301,
				"relay" : 1,
				"bwa" : 1112922,
				"bwc" : 825634,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000278,
				"pbg" : 0.000156,
				"pbm" : 0.000156,
				"pbe" : 0.000522,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 1112922,
						"bwc" : 825634,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000278,
						"pbg" : 0.000156,
						"pbm" : 0.000156,
						"pbe" : 0.000522
					}
				]
			},
			{
				"as" : 23136,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 41955,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000009,
				"pbg" : 0,
				"pbm" : 0.000027,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 41955,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000009,
						"pbg" : 0,
						"pbm" : 0.000027,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8342,
				"relay" : 1,
				"bwa" : 32768,
				"bwc" : 10150,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 32768,
						"bwc" : 10150,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 11398,
				"relay" : 1,
				"bwa" : 73426,
				"bwc" : 4880,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000005,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000016,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 73426,
						"bwc" : 4880,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000005,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000016
					}
				]
			},
			{
				"as" : 35041,
				"relay" : 1,
				"bwa" : 2097152,
				"bwc" : 2081629,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000444,
				"pbg" : 0.000954,
				"pbm" : 0.000377,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 2097152,
						"bwc" : 2081629,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000444,
						"pbg" : 0.000954,
						"pbm" : 0.000377,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 30880,
				"relay" : 1,
				"bwa" : 12388351,
				"bwc" : 10149555,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.006241,
				"pbg" : 0.003498,
				"pbm" : 0.003497,
				"pbe" : 0.011726,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 12388351,
						"bwc" : 10149555,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.006241,
						"pbg" : 0.003498,
						"pbm" : 0.003497,
						"pbe" : 0.011726
					}
				]
			},
			{
				"as" : 35470,
				"relay" : 2,
				"bwa" : 358400,
				"bwc" : 128499,
				"fast" : 2,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000053,
				"pbg" : 0,
				"pbm" : 0.000043,
				"pbe" : 0.000116,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 358400,
						"bwc" : 128499,
						"fast" : 2,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000053,
						"pbg" : 0,
						"pbm" : 0.000043,
						"pbe" : 0.000116
					}
				]
			},
			{
				"as" : 50463,
				"relay" : 1,
				"bwa" : 30720,
				"bwc" : 168,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "IL",
						"relay" : 1,
						"bwa" : 30720,
						"bwc" : 168,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 55430,
				"relay" : 1,
				"bwa" : 196608,
				"bwc" : 9312,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000008,
				"pbg" : 0.000017,
				"pbm" : 0.000007,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SG",
						"relay" : 1,
						"bwa" : 196608,
						"bwc" : 9312,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000008,
						"pbg" : 0.000017,
						"pbm" : 0.000007,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 57381,
				"relay" : 1,
				"bwa" : 1552357,
				"bwc" : 614031,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000133,
				"pbg" : 0,
				"pbm" : 0.0004,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NO",
						"relay" : 1,
						"bwa" : 1552357,
						"bwc" : 614031,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000133,
						"pbg" : 0,
						"pbm" : 0.0004,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 41334,
				"relay" : 1,
				"bwa" : 39023,
				"bwc" : 0,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000002,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 39023,
						"bwc" : 0,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000002,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 16942,
				"relay" : 1,
				"bwa" : 65536,
				"bwc" : 54774,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000005,
				"pbg" : 0,
				"pbm" : 0.000016,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 65536,
						"bwc" : 54774,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000005,
						"pbg" : 0,
						"pbm" : 0.000016,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 28719,
				"relay" : 1,
				"bwa" : 957863,
				"bwc" : 503748,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000069,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000207,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 957863,
						"bwc" : 503748,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000069,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000207
					}
				]
			},
			{
				"as" : 2683,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 2891,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000008,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 2891,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000008,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 31229,
				"relay" : 1,
				"bwa" : 3584000,
				"bwc" : 3339799,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000359,
				"pbg" : 0.000773,
				"pbm" : 0.000305,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 3584000,
						"bwc" : 3339799,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000359,
						"pbg" : 0.000773,
						"pbm" : 0.000305,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 41887,
				"relay" : 1,
				"bwa" : 1624073,
				"bwc" : 300627,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000226,
				"pbg" : 0,
				"pbm" : 0.000679,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 1624073,
						"bwc" : 300627,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000226,
						"pbg" : 0,
						"pbm" : 0.000679,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 55329,
				"relay" : 1,
				"bwa" : 738456,
				"bwc" : 379289,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000052,
				"pbg" : 0.000029,
				"pbm" : 0.000029,
				"pbe" : 0.000098,
				"countries" : [
					{
						"cc" : "KH",
						"relay" : 1,
						"bwa" : 738456,
						"bwc" : 379289,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000052,
						"pbg" : 0.000029,
						"pbm" : 0.000029,
						"pbe" : 0.000098
					}
				]
			},
			{
				"as" : 19181,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 58354,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000053,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000158,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 58354,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000053,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000158
					}
				]
			},
			{
				"as" : 4725,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 9409,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000005,
				"pbg" : 0,
				"pbm" : 0.000015,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 9409,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000005,
						"pbg" : 0,
						"pbm" : 0.000015,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 16245,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 102171,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000009,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000028,
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 102171,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000009,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000028
					}
				]
			},
			{
				"as" : 50465,
				"relay" : 1,
				"bwa" : 3327125,
				"bwc" : 1587032,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000793,
				"pbg" : 0.001705,
				"pbm" : 0.000673,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 3327125,
						"bwc" : 1587032,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000793,
						"pbg" : 0.001705,
						"pbm" : 0.000673,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 7303,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 11502,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000003,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "AR",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 11502,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000003,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 46261,
				"relay" : 1,
				"bwa" : 5242880,
				"bwc" : 3640354,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.001479,
				"pbg" : 0.000829,
				"pbm" : 0.000829,
				"pbe" : 0.002779,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 5242880,
						"bwc" : 3640354,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.001479,
						"pbg" : 0.000829,
						"pbm" : 0.000829,
						"pbe" : 0.002779
					}
				]
			},
			{
				"as" : 22576,
				"relay" : 1,
				"bwa" : 1126400,
				"bwc" : 359735,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000146,
				"pbg" : 0.000082,
				"pbm" : 0.000082,
				"pbe" : 0.000275,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1126400,
						"bwc" : 359735,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000146,
						"pbg" : 0.000082,
						"pbm" : 0.000082,
						"pbe" : 0.000275
					}
				]
			},
			{
				"as" : 48780,
				"relay" : 1,
				"bwa" : 98304,
				"bwc" : 31994,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000009,
				"pbg" : 0,
				"pbm" : 0.000028,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 98304,
						"bwc" : 31994,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000009,
						"pbg" : 0,
						"pbm" : 0.000028,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 9351,
				"relay" : 1,
				"bwa" : 93099,
				"bwc" : 1842,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 93099,
						"bwc" : 1842,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 3216,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 1042155,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000167,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000501,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 1042155,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000167,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000501
					}
				]
			},
			{
				"as" : 40788,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 4426,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000007,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 4426,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000007,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 23655,
				"relay" : 1,
				"bwa" : 59944,
				"bwc" : 445,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000003,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NZ",
						"relay" : 1,
						"bwa" : 59944,
						"bwc" : 445,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000003,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 23674,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 59681,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000017,
				"countries" : [
					{
						"cc" : "PK",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 59681,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000017
					}
				]
			},
			{
				"as" : 13276,
				"relay" : 1,
				"bwa" : 225280,
				"bwc" : 63221,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000007,
				"pbg" : 0.000014,
				"pbm" : 0.000006,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 1,
						"bwa" : 225280,
						"bwc" : 63221,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000007,
						"pbg" : 0.000014,
						"pbm" : 0.000006,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 53111,
				"relay" : 1,
				"bwa" : 987648,
				"bwc" : 144926,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000028,
				"pbg" : 0,
				"pbm" : 0.000083,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 1,
						"bwa" : 987648,
						"bwc" : 144926,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000028,
						"pbg" : 0,
						"pbm" : 0.000083,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 15467,
				"relay" : 1,
				"bwa" : 8192000,
				"bwc" : 8153720,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.00247,
				"pbg" : 0.005311,
				"pbm" : 0.002098,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "HU",
						"relay" : 1,
						"bwa" : 8192000,
						"bwc" : 8153720,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.00247,
						"pbg" : 0.005311,
						"pbm" : 0.002098,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 9304,
				"relay" : 1,
				"bwa" : 36907,
				"bwc" : 190,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000002,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "HK",
						"relay" : 1,
						"bwa" : 36907,
						"bwc" : 190,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000002,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 42926,
				"relay" : 2,
				"bwa" : 9523810,
				"bwc" : 6428859,
				"fast" : 2,
				"stable" : 2,
				"guard" : 2,
				"middle" : 2,
				"exit" : 2,
				"dir" : 1,
				"pbr" : 0.002664,
				"pbg" : 0.001493,
				"pbm" : 0.001493,
				"pbe" : 0.005004,
				"countries" : [
					{
						"cc" : "TR",
						"relay" : 2,
						"bwa" : 9523810,
						"bwc" : 6428859,
						"fast" : 2,
						"stable" : 2,
						"guard" : 2,
						"middle" : 2,
						"exit" : 2,
						"dir" : 1,
						"pbr" : 0.002664,
						"pbg" : 0.001493,
						"pbm" : 0.001493,
						"pbe" : 0.005004
					}
				]
			},
			{
				"as" : 50066,
				"relay" : 2,
				"bwa" : 409600,
				"bwc" : 167445,
				"fast" : 2,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000064,
				"pbg" : 0,
				"pbm" : 0.000192,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 2,
						"bwa" : 409600,
						"bwc" : 167445,
						"fast" : 2,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000064,
						"pbg" : 0,
						"pbm" : 0.000192,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 5713,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 30,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "ZA",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 30,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 40430,
				"relay" : 1,
				"bwa" : 1310720,
				"bwc" : 240277,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000203,
				"pbg" : 0.000114,
				"pbm" : 0.000114,
				"pbe" : 0.000381,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1310720,
						"bwc" : 240277,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000203,
						"pbg" : 0.000114,
						"pbm" : 0.000114,
						"pbe" : 0.000381
					}
				]
			},
			{
				"as" : 29695,
				"relay" : 1,
				"bwa" : 237568,
				"bwc" : 18078,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NO",
						"relay" : 1,
						"bwa" : 237568,
						"bwc" : 18078,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 10489,
				"relay" : 1,
				"bwa" : 131072,
				"bwc" : 49733,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.00001,
				"pbg" : 0,
				"pbm" : 0.00003,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 131072,
						"bwc" : 49733,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.00001,
						"pbg" : 0,
						"pbm" : 0.00003,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 9556,
				"relay" : 1,
				"bwa" : 29196,
				"bwc" : 438,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000002,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 1,
						"bwa" : 29196,
						"bwc" : 438,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000002,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12334,
				"relay" : 1,
				"bwa" : 148480,
				"bwc" : 34071,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000011,
				"pbg" : 0,
				"pbm" : 0.000032,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 1,
						"bwa" : 148480,
						"bwc" : 34071,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000011,
						"pbg" : 0,
						"pbm" : 0.000032,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 2854,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 14747,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 14747,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 26068,
				"relay" : 1,
				"bwa" : 524288,
				"bwc" : 232882,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000154,
				"pbg" : 0.000086,
				"pbm" : 0.000086,
				"pbe" : 0.000289,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 524288,
						"bwc" : 232882,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000154,
						"pbg" : 0.000086,
						"pbm" : 0.000086,
						"pbe" : 0.000289
					}
				]
			},
			{
				"as" : 803,
				"relay" : 2,
				"bwa" : 1569110,
				"bwc" : 1123677,
				"fast" : 2,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.00042500000000000003,
				"pbg" : 0.000096,
				"pbm" : 0.000038,
				"pbe" : 0.00114,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 2,
						"bwa" : 1569110,
						"bwc" : 1123677,
						"fast" : 2,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.00042500000000000003,
						"pbg" : 0.000096,
						"pbm" : 0.000038,
						"pbe" : 0.00114
					}
				]
			},
			{
				"as" : 197922,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 487173,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000174,
				"pbg" : 0.000098,
				"pbm" : 0.000098,
				"pbe" : 0.000328,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 487173,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000174,
						"pbg" : 0.000098,
						"pbm" : 0.000098,
						"pbe" : 0.000328
					}
				]
			},
			{
				"as" : 262868,
				"relay" : 1,
				"bwa" : 45056,
				"bwc" : 4576,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 1,
						"bwa" : 45056,
						"bwc" : 4576,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 29737,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 46089,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000049,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000146,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 46089,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000049,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000146
					}
				]
			},
			{
				"as" : 29194,
				"relay" : 1,
				"bwa" : 196608,
				"bwc" : 59268,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000015,
				"pbg" : 0,
				"pbm" : 0.000045,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 196608,
						"bwc" : 59268,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000015,
						"pbg" : 0,
						"pbm" : 0.000045,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 22030,
				"relay" : 1,
				"bwa" : 25600,
				"bwc" : 421,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 25600,
						"bwc" : 421,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12898,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 2385,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.00001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 2385,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.00001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 39582,
				"relay" : 2,
				"bwa" : 204800,
				"bwc" : 141739,
				"fast" : 2,
				"stable" : 2,
				"guard" : 0,
				"middle" : 2,
				"exit" : 2,
				"dir" : 0,
				"pbr" : 0.000021000000000000002,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000065,
				"countries" : [
					{
						"cc" : "TR",
						"relay" : 2,
						"bwa" : 204800,
						"bwc" : 141739,
						"fast" : 2,
						"stable" : 2,
						"guard" : 0,
						"middle" : 2,
						"exit" : 2,
						"dir" : 0,
						"pbr" : 0.000021000000000000002,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000065
					}
				]
			},
			{
				"as" : 48823,
				"relay" : 2,
				"bwa" : 225280,
				"bwc" : 194341,
				"fast" : 1,
				"stable" : 2,
				"guard" : 1,
				"middle" : 2,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000049999999999999996,
				"pbg" : 0.000101,
				"pbm" : 0.000049000000000000005,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 225280,
						"bwc" : 194341,
						"fast" : 1,
						"stable" : 2,
						"guard" : 1,
						"middle" : 2,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000049999999999999996,
						"pbg" : 0.000101,
						"pbm" : 0.000049000000000000005,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 37989,
				"relay" : 1,
				"bwa" : 1188614,
				"bwc" : 423572,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.00013,
				"pbg" : 0.000073,
				"pbm" : 0.000073,
				"pbe" : 0.000245,
				"countries" : [
					{
						"cc" : "SG",
							"relay" : 1,
						"bwa" : 1188614,
						"bwc" : 423572,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.00013,
						"pbg" : 0.000073,
						"pbm" : 0.000073,
						"pbe" : 0.000245
					}
				]
			},
			{
				"as" : 6488,
				"relay" : 1,
				"bwa" : 829325,
				"bwc" : 133643,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000122,
				"pbg" : 0,
				"pbm" : 0.000365,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 829325,
						"bwc" : 133643,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000122,
						"pbg" : 0,
						"pbm" : 0.000365,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12634,
				"relay" : 1,
				"bwa" : 81920,
				"bwc" : 9171,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0.000024,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 81920,
						"bwc" : 9171,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 22927,
				"relay" : 1,
				"bwa" : 30720,
				"bwc" : 0,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "AR",
						"relay" : 1,
						"bwa" : 30720,
						"bwc" : 0,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 44581,
				"relay" : 1,
				"bwa" : 262144,
				"bwc" : 175329,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000067,
				"pbg" : 0.000144,
				"pbm" : 0.000057,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 262144,
						"bwc" : 175329,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000067,
						"pbg" : 0.000144,
						"pbm" : 0.000057,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 30936,
				"relay" : 1,
				"bwa" : 211968,
				"bwc" : 47566,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000009,
				"pbg" : 0,
				"pbm" : 0.000027,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 211968,
						"bwc" : 47566,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000009,
						"pbg" : 0,
						"pbm" : 0.000027,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 31669,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 100928,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000023,
				"countries" : [
					{
						"cc" : "BE",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 100928,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000023
					}
				]
			},
			{
				"as" : 15290,
				"relay" : 1,
				"bwa" : 94763,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 94763,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12897,
				"relay" : 1,
				"bwa" : 815569,
				"bwc" : 574827,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000114,
				"pbg" : 0,
				"pbm" : 0.000342,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 815569,
						"bwc" : 574827,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000114,
						"pbg" : 0,
						"pbm" : 0.000342,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 23292,
				"relay" : 1,
				"bwa" : 53489,
				"bwc" : 1533,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 53489,
						"bwc" : 1533,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 7459,
				"relay" : 1,
				"bwa" : 236378,
				"bwc" : 34922,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000013,
				"pbg" : 0,
				"pbm" : 0.000039,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 236378,
						"bwc" : 34922,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000013,
						"pbg" : 0,
						"pbm" : 0.000039,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 20093,
				"relay" : 1,
				"bwa" : 326446,
				"bwc" : 21884,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000017,
				"pbg" : 0,
				"pbm" : 0.000051,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 326446,
						"bwc" : 21884,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000017,
						"pbg" : 0,
						"pbm" : 0.000051,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 11841,
				"relay" : 1,
				"bwa" : 98304,
				"bwc" : 38561,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0.000018,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 98304,
						"bwc" : 38561,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0.000018,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 24751,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 1024000,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000417,
				"pbg" : 0.000234,
				"pbm" : 0.000234,
				"pbe" : 0.000784,
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 1024000,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000417,
						"pbg" : 0.000234,
						"pbm" : 0.000234,
						"pbe" : 0.000784
					}
				]
			},
			{
				"as" : 15685,
				"relay" : 1,
				"bwa" : 256000,
				"bwc" : 83812,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000044,
				"pbg" : 0.000095,
				"pbm" : 0.000038,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 256000,
						"bwc" : 83812,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000044,
						"pbg" : 0.000095,
						"pbm" : 0.000038,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 35475,
				"relay" : 1,
				"bwa" : 532512,
				"bwc" : 187055,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000033,
				"pbg" : 0,
				"pbm" : 0.000099,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 532512,
						"bwc" : 187055,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000033,
						"pbg" : 0,
						"pbm" : 0.000099,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 25538,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 900,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 900,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 19366,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 14643,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000004,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000011,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 14643,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000004,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000011
					}
				]
			},
			{
				"as" : 36850,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 13768,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.00001,
				"pbg" : 0,
				"pbm" : 0.000029,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 13768,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.00001,
						"pbg" : 0,
						"pbm" : 0.000029,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 29933,
				"relay" : 1,
				"bwa" : 196227,
				"bwc" : 31011,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 196227,
						"bwc" : 31011,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 23387,
				"relay" : 1,
				"bwa" : 27114,
				"bwc" : 282,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 27114,
						"bwc" : 282,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 6539,
				"relay" : 1,
				"bwa" : 1079654,
				"bwc" : 536601,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000247,
				"pbg" : 0.000138,
				"pbm" : 0.000138,
				"pbe" : 0.000464,
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 1079654,
						"bwc" : 536601,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000247,
						"pbg" : 0.000138,
						"pbm" : 0.000138,
						"pbe" : 0.000464
					}
				]
			},
			{
				"as" : 29859,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 165,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 165,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 56950,
				"relay" : 1,
				"bwa" : 3145728,
				"bwc" : 2395921,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000587,
				"pbg" : 0,
				"pbm" : 0.001761,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 3145728,
						"bwc" : 2395921,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000587,
						"pbg" : 0,
						"pbm" : 0.001761,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 13118,
				"relay" : 1,
				"bwa" : 196608,
				"bwc" : 10542,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000015,
				"pbg" : 0,
				"pbm" : 0.000046,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 196608,
						"bwc" : 10542,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000015,
						"pbg" : 0,
						"pbm" : 0.000046,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 34549,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 17675,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000004,
				"pbg" : 0,
				"pbm" : 0.000012,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 17675,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000004,
						"pbg" : 0,
						"pbm" : 0.000012,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 28812,
				"relay" : 1,
				"bwa" : 256028,
				"bwc" : 40370,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000007,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.00002,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 256028,
						"bwc" : 40370,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000007,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.00002
					}
				]
			},
			{
				"as" : 12353,
				"relay" : 1,
				"bwa" : 196608,
				"bwc" : 980,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "PT",
						"relay" : 1,
						"bwa" : 196608,
						"bwc" : 980,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 25255,
				"relay" : 1,
				"bwa" : 1007526,
				"bwc" : 470606,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000253,
				"pbg" : 0,
				"pbm" : 0.000759,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 1007526,
						"bwc" : 470606,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000253,
						"pbg" : 0,
						"pbm" : 0.000759,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 28685,
				"relay" : 1,
				"bwa" : 2097152,
				"bwc" : 1699742,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000571,
				"pbg" : 0.00032,
				"pbm" : 0.00032,
				"pbe" : 0.001073,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 2097152,
						"bwc" : 1699742,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000571,
						"pbg" : 0.00032,
						"pbm" : 0.00032,
						"pbe" : 0.001073
					}
				]
			},
			{
				"as" : 47069,
				"relay" : 1,
				"bwa" : 590943,
				"bwc" : 0,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000052,
				"pbg" : 0,
				"pbm" : 0.000157,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 590943,
						"bwc" : 0,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000052,
						"pbg" : 0,
						"pbm" : 0.000157,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 52284,
				"relay" : 1,
				"bwa" : 65536,
				"bwc" : 28075,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.00001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "PA",
						"relay" : 1,
						"bwa" : 65536,
						"bwc" : 28075,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.00001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12436,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 49574,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000008,
				"pbg" : 0,
				"pbm" : 0.000024,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "BG",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 49574,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000008,
						"pbg" : 0,
						"pbm" : 0.000024,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 25071,
				"relay" : 1,
				"bwa" : 218924,
				"bwc" : 71869,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000009,
				"pbg" : 0,
				"pbm" : 0.000028,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 218924,
						"bwc" : 71869,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000009,
						"pbg" : 0,
						"pbm" : 0.000028,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 20640,
				"relay" : 1,
				"bwa" : 48157,
				"bwc" : 1301,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000005,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 48157,
						"bwc" : 1301,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000005,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12676,
				"relay" : 1,
				"bwa" : 30720,
				"bwc" : 16435,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 30720,
						"bwc" : 16435,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 15969,
				"relay" : 1,
				"bwa" : 614400,
				"bwc" : 395673,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000117,
				"pbg" : 0.000252,
				"pbm" : 0.000099,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 614400,
						"bwc" : 395673,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000117,
						"pbg" : 0.000252,
						"pbm" : 0.000099,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 4685,
				"relay" : 1,
				"bwa" : 307200,
				"bwc" : 173904,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000024,
				"pbg" : 0,
				"pbm" : 0.000072,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 307200,
						"bwc" : 173904,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000024,
						"pbg" : 0,
						"pbm" : 0.000072,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 47206,
				"relay" : 2,
				"bwa" : 219184,
				"bwc" : 56722,
				"fast" : 2,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000014000000000000001,
				"pbg" : 0,
				"pbm" : 0.000044,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 2,
						"bwa" : 219184,
						"bwc" : 56722,
						"fast" : 2,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000014000000000000001,
						"pbg" : 0,
						"pbm" : 0.000044,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 4765,
				"relay" : 1,
				"bwa" : 86885,
				"bwc" : 20775,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0.000001,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "TH",
						"relay" : 1,
						"bwa" : 86885,
						"bwc" : 20775,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0,
						"pbg" : 0,
						"pbm" : 0.000001,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 41661,
				"relay" : 1,
				"bwa" : 40960,
				"bwc" : 14442,
				"fast" : 0,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000003,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 40960,
						"bwc" : 14442,
						"fast" : 0,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000003,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 48031,
				"relay" : 2,
				"bwa" : 7140837,
				"bwc" : 2208857,
				"fast" : 2,
				"stable" : 1,
				"guard" : 1,
				"middle" : 2,
				"exit" : 2,
				"dir" : 2,
				"pbr" : 0.000167,
				"pbg" : 0.000087,
				"pbm" : 0.000087,
				"pbe" : 0.000327,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 2,
						"bwa" : 7140837,
						"bwc" : 2208857,
						"fast" : 2,
						"stable" : 1,
						"guard" : 1,
						"middle" : 2,
						"exit" : 2,
						"dir" : 2,
						"pbr" : 0.000167,
						"pbg" : 0.000087,
						"pbm" : 0.000087,
						"pbe" : 0.000327
					}
				]
			},
			{
				"as" : 6799,
				"relay" : 2,
				"bwa" : 71680,
				"bwc" : 2894,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0.000008,
				"pbe" : 0.000009,
				"countries" : [
					{
						"cc" : "GR",
						"relay" : 2,
						"bwa" : 71680,
						"bwc" : 2894,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0.000008,
						"pbe" : 0.000009
					}
				]
			},
			{
				"as" : 27823,
				"relay" : 1,
				"bwa" : 409600,
				"bwc" : 173970,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000094,
				"pbg" : 0.000053,
				"pbm" : 0.000053,
				"pbe" : 0.000177,
				"countries" : [
					{
						"cc" : "AR",
						"relay" : 1,
						"bwa" : 409600,
						"bwc" : 173970,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000094,
						"pbg" : 0.000053,
						"pbm" : 0.000053,
						"pbe" : 0.000177
					}
				]
			},
			{
				"as" : 31661,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 1048576,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000303,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000909,
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 1048576,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000303,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000909
					}
				]
			},
			{
				"as" : 11557,
				"relay" : 1,
				"bwa" : 10093050,
				"bwc" : 5415230,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.001922,
				"pbg" : 0.004134,
				"pbm" : 0.001633,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 10093050,
						"bwc" : 5415230,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.001922,
						"pbg" : 0.004134,
						"pbm" : 0.001633,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 5603,
				"relay" : 1,
				"bwa" : 716800,
				"bwc" : 555661,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000109,
				"pbg" : 0,
				"pbm" : 0.000327,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SI",
						"relay" : 1,
						"bwa" : 716800,
						"bwc" : 555661,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000109,
						"pbg" : 0,
						"pbm" : 0.000327,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 5495,
				"relay" : 1,
				"bwa" : 71680,
				"bwc" : 38294,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000006,
				"pbg" : 0,
				"pbm" : 0.000017,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 71680,
						"bwc" : 38294,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000006,
						"pbg" : 0,
						"pbm" : 0.000017,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 1280,
				"relay" : 1,
				"bwa" : 6553600,
				"bwc" : 4839002,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.002041,
				"pbg" : 0.004389,
				"pbm" : 0.001734,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 6553600,
						"bwc" : 4839002,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.002041,
						"pbg" : 0.004389,
						"pbm" : 0.001734,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 40676,
				"relay" : 1,
				"bwa" : 1508717,
				"bwc" : 590235,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 0,
				"pbr" : 0.000358,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.001074,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1508717,
						"bwc" : 590235,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 0,
						"pbr" : 0.000358,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.001074
					}
				]
			},
			{
				"as" : 36375,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 119314,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000043,
				"pbg" : 0.000092,
				"pbm" : 0.000036,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 119314,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000043,
						"pbg" : 0.000092,
						"pbm" : 0.000036,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 15763,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 2112,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000002,
				"pbg" : 0,
				"pbm" : 0.000006,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 2112,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000002,
						"pbg" : 0,
						"pbm" : 0.000006,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 12414,
				"relay" : 2,
				"bwa" : 3062879,
				"bwc" : 1521237,
				"fast" : 2,
				"stable" : 2,
				"guard" : 2,
				"middle" : 2,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.00092,
				"pbg" : 0.0007199999999999999,
				"pbm" : 0.000552,
				"pbe" : 0.001487,
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 3062879,
						"bwc" : 1521237,
						"fast" : 2,
						"stable" : 2,
						"guard" : 2,
						"middle" : 2,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.00092,
						"pbg" : 0.0007199999999999999,
						"pbm" : 0.000552,
						"pbe" : 0.001487
					}
				]
			},
			{
				"as" : 42239,
				"relay" : 1,
				"bwa" : 0,
				"bwc" : 0,
				"fast" : 0,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 0,
						"bwc" : 0,
						"fast" : 0,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 20807,
				"relay" : 1,
				"bwa" : 655360,
				"bwc" : 189085,
				"fast" : 1,
				"stable" : 0,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000036,
				"pbg" : 0.000078,
				"pbm" : 0.000031,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 655360,
						"bwc" : 189085,
						"fast" : 1,
						"stable" : 0,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000036,
						"pbg" : 0.000078,
						"pbm" : 0.000031,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 43470,
				"relay" : 1,
				"bwa" : 1903286,
				"bwc" : 648044,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000603,
				"pbg" : 0,
				"pbm" : 0.00181,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 1903286,
						"bwc" : 648044,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000603,
						"pbg" : 0,
						"pbm" : 0.00181,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 45230,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 1422,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000004,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NZ",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 1422,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000004,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 47241,
				"relay" : 1,
				"bwa" : 1219584,
				"bwc" : 685892,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000106,
				"pbg" : 0,
				"pbm" : 0,
				"pbe" : 0.000318,
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1219584,
						"bwc" : 685892,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000106,
						"pbg" : 0,
						"pbm" : 0,
						"pbe" : 0.000318
					}
				]
			},
			{
				"as" : 44432,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 616581,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000266,
				"pbg" : 0.000572,
				"pbm" : 0.000226,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "IS",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 616581,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000266,
						"pbg" : 0.000572,
						"pbm" : 0.000226,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 55,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 12934,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000003,
				"pbg" : 0,
				"pbm" : 0.000009,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 12934,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000003,
						"pbg" : 0,
						"pbm" : 0.000009,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 8866,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 123541,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000079,
				"pbg" : 0.000045,
				"pbm" : 0.000045,
				"pbe" : 0.000149,
				"countries" : [
					{
						"cc" : "BG",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 123541,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000079,
						"pbg" : 0.000045,
						"pbm" : 0.000045,
						"pbe" : 0.000149
					}
				]
			},
			{
				"as" : 38657,
				"relay" : 1,
				"bwa" : 98304,
				"bwc" : 28739,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000003,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 1,
						"bwa" : 98304,
						"bwc" : 28739,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000003,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 41454,
				"relay" : 1,
				"bwa" : 819200,
				"bwc" : 777566,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000028,
				"pbg" : 0.00006,
				"pbm" : 0.000024,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "HR",
						"relay" : 1,
						"bwa" : 819200,
						"bwc" : 777566,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000028,
						"pbg" : 0.00006,
						"pbm" : 0.000024,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 34610,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 41458,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000033,
				"pbg" : 0.000072,
				"pbm" : 0.000028,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 41458,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000033,
						"pbg" : 0.000072,
						"pbm" : 0.000028,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 167,
				"relay" : 1,
				"bwa" : 256000,
				"bwc" : 369200,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000016,
				"pbg" : 0.000033,
				"pbm" : 0.000013,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 256000,
						"bwc" : 369200,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000016,
						"pbg" : 0.000033,
						"pbm" : 0.000013,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 61391,
				"relay" : 1,
				"bwa" : 8094654,
				"bwc" : 3802511,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.003105,
				"pbg" : 0.00174,
				"pbm" : 0.00174,
				"pbe" : 0.005835,
				"countries" : [
					{
						"cc" : "MT",
						"relay" : 1,
						"bwa" : 8094654,
						"bwc" : 3802511,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.003105,
						"pbg" : 0.00174,
						"pbm" : 0.00174,
						"pbe" : 0.005835
					}
				]
			},
			{
				"as" : 21213,
				"relay" : 1,
				"bwa" : 404358,
				"bwc" : 137283,
				"fast" : 1,
				"stable" : 1,
				"guard" : 1,
				"middle" : 1,
				"exit" : 1,
				"dir" : 1,
				"pbr" : 0.000098,
				"pbg" : 0.000055,
				"pbm" : 0.000055,
				"pbe" : 0.000185,
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 404358,
						"bwc" : 137283,
						"fast" : 1,
						"stable" : 1,
						"guard" : 1,
						"middle" : 1,
						"exit" : 1,
						"dir" : 1,
						"pbr" : 0.000098,
						"pbg" : 0.000055,
						"pbm" : 0.000055,
						"pbe" : 0.000185
					}
				]
			},
			{
				"as" : 4771,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 17642,
				"fast" : 1,
				"stable" : 1,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 0,
				"pbr" : 0.000001,
				"pbg" : 0,
				"pbm" : 0.000002,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "NZ",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 17642,
						"fast" : 1,
						"stable" : 1,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 0,
						"pbr" : 0.000001,
						"pbg" : 0,
						"pbm" : 0.000002,
						"pbe" : 0
					}
				]
			},
			{
				"as" : 43561,
				"relay" : 1,
				"bwa" : 325632,
				"bwc" : 98078,
				"fast" : 1,
				"stable" : 0,
				"guard" : 0,
				"middle" : 1,
				"exit" : 0,
				"dir" : 1,
				"pbr" : 0.000027,
				"pbg" : 0,
				"pbm" : 0.00008,
				"pbe" : 0,
				"countries" : [
					{
						"cc" : "BG",
						"relay" : 1,
						"bwa" : 325632,
						"bwc" : 98078,
						"fast" : 1,
						"stable" : 0,
						"guard" : 0,
						"middle" : 1,
						"exit" : 0,
						"dir" : 1,
						"pbr" : 0.000027,
						"pbg" : 0,
						"pbm" : 0.00008,
						"pbe" : 0
					}
				]
			}
		]
	}
}
