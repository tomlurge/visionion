# visionion

### a fact for 2013-04-03 22 aggregated by mapreduce_v1


This is an example how the aggregated data for a 1 hour timespan (the default and smallest value) can look:

	
	{
		"_id" : "Fact 2013-04-03 22",
		"value" : {
			"date" : "2013-04-03 22",
			"clients" : {
				"total" : 866088,
				"atBridges" : 3561,
				"atRelays" : 862527,
				"cip4" : 145,
				"cip6" : 2,
				"cptObfs2" : 1,
				"cptObfs3" : 3,
				"cptOR" : 143,
				"cptUnknown" : 0
			},
			"servers" : {
				"total" : {
					"count" : 4763,
					"bwa" : 3858634458,
					"bwc" : 2495997502,
					"osv" : {
						"linux" : 3513,
						"darwin" : 119,
						"freebsd" : 155,
						"windows" : 920,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 1008,
						"v023" : 3192,
						"v024" : 536
					}
				},
				"bridges" : {
					"total" : {
						"count" : 1399,
						"bwa" : 197143669,
						"bwc" : 9756969,
						"osv" : {
							"linux" : 999,
							"darwin" : 20,
							"freebsd" : 47,
							"windows" : 326,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 236,
							"v023" : 888,
							"v024" : 273
						}
					},
					"brpEmail" : {
						"count" : 589,
						"bwa" : 80803609,
						"bwc" : 3863711,
						"osv" : {
							"linux" : 420,
							"darwin" : 10,
							"freebsd" : 15,
							"windows" : 141,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 85,
							"v023" : 392,
							"v024" : 111
						}
					},
					"brpHttps" : {
						"count" : 581,
						"bwa" : 107712613,
						"bwc" : 5731064,
						"osv" : {
							"linux" : 421,
							"darwin" : 6,
							"freebsd" : 22,
							"windows" : 128,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 101,
							"v023" : 348,
							"v024" : 131
						}
					},
					"brpOther" : {
						"count" : 196,
						"bwa" : 7575547,
						"bwc" : 145037,
						"osv" : {
							"linux" : 154,
							"darwin" : 4,
							"freebsd" : 10,
							"windows" : 28,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 43,
							"v023" : 123,
							"v024" : 30
						}
					},
					"breTrue" : {
						"count" : 185,
						"bwa" : 38140381,
						"bwc" : 1366713,
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
						"count" : 1230,
						"bwa" : 161696661,
						"bwc" : 7844894,
						"osv" : {
							"linux" : 835,
							"darwin" : 19,
							"freebsd" : 43,
							"windows" : 326,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 236,
							"v023" : 888,
							"v024" : 105
						}
					},
					"brtObfs3" : {
						"count" : 1372,
						"bwa" : 187892841,
						"bwc" : 8950552,
						"osv" : {
							"linux" : 974,
							"darwin" : 20,
							"freebsd" : 45,
							"windows" : 326,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 236,
							"v023" : 888,
							"v024" : 246
						}
					},
					"brtObfs23" : {
						"count" : 1203,
						"bwa" : 152445833,
						"bwc" : 7038477,
						"osv" : {
							"linux" : 810,
							"darwin" : 19,
							"freebsd" : 41,
							"windows" : 326,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 236,
							"v023" : 888,
							"v024" : 78
						}
					}
				},
				"relays" : {
					"roleAll" : {
						"total" : {
							"count" : 3364,
							"bwa" : 3661490789,
							"bwc" : 2486240533,
							"osv" : {
								"linux" : 2514,
								"darwin" : 99,
								"freebsd" : 108,
								"windows" : 594,
								"other" : 0
							},
							"tsv" : {
								"v010" : 0,
								"v011" : 0,
								"v012" : 0,
								"v020" : 0,
								"v021" : 0,
								"v022" : 772,
								"v023" : 2304,
								"v024" : 263
							},
							"pbr" : 0.9999499999999848
						},
						"flagNone" : {
							"count" : 179,
							"bwa" : 4642890,
							"bwc" : 453335,
							"osv" : {
								"linux" : 107,
								"darwin" : 7,
								"freebsd" : 6,
								"windows" : 56,
								"other" : 0
							},
							"tsv" : {
								"v010" : 0,
								"v011" : 0,
								"v012" : 0,
								"v020" : 0,
								"v021" : 0,
								"v022" : 53,
								"v023" : 116,
								"v024" : 8
							},
							"pbr" : 0.000608
						},
						"flagStable" : {
							"count" : 226,
							"bwa" : 5134809,
							"bwc" : 1309510,
							"osv" : {
								"linux" : 192,
								"darwin" : 6,
								"freebsd" : 4,
								"windows" : 22,
								"other" : 0
							},
							"tsv" : {
								"v010" : 0,
								"v011" : 0,
								"v012" : 0,
								"v020" : 0,
								"v021" : 0,
								"v022" : 113,
								"v023" : 103,
								"v024" : 8
							},
							"pbr" : 0.000698999999999999
						},
						"flagFast" : {
							"count" : 1036,
							"bwa" : 545386311,
							"bwc" : 274597307,
							"osv" : {
								"linux" : 604,
								"darwin" : 58,
								"freebsd" : 18,
								"windows" : 345,
								"other" : 0
							},
							"tsv" : {
								"v010" : 0,
								"v011" : 0,
								"v012" : 0,
								"v020" : 0,
								"v021" : 0,
								"v022" : 181,
								"v023" : 803,
								"v024" : 48
							},
							"pbr" : 0.14232700000000073
						},
						"flagFastStable" : {
							"count" : 1923,
							"bwa" : 3106326779,
							"bwc" : 2209880381,
							"osv" : {
								"linux" : 1611,
								"darwin" : 28,
								"freebsd" : 80,
								"windows" : 171,
								"other" : 0
							},
							"tsv" : {
								"v010" : 0,
								"v011" : 0,
								"v012" : 0,
								"v020" : 0,
								"v021" : 0,
								"v022" : 425,
								"v023" : 1282,
								"v024" : 199
							},
							"pbr" : 0
						}
					},
					"roleGuard" : {
						"total" : {
							"count" : 1043,
							"bwa" : 2644651265,
							"bwc" : 1926097835,
							"osv" : {
								"linux" : 901,
								"darwin" : 12,
								"freebsd" : 53,
								"windows" : 61,
								"other" : 0
							},
							"tsv" : {
								"v010" : 0,
								"v011" : 0,
								"v012" : 0,
								"v020" : 0,
								"v021" : 0,
								"v022" : 196,
								"v023" : 694,
								"v024" : 146
							},
							"pbg" : 1
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
							"count" : 26,
							"bwa" : 54954758,
							"bwc" : 29769646,
							"osv" : {
								"linux" : 21,
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
								"v022" : 1,
								"v023" : 23,
								"v024" : 1
							},
							"pbg" : 0.030253000000000006
						},
						"flagFastStable" : {
							"count" : 1017,
							"bwa" : 2589696507,
							"bwc" : 1896328189,
							"osv" : {
								"linux" : 880,
								"darwin" : 12,
								"freebsd" : 52,
								"windows" : 57,
								"other" : 0
							},
							"tsv" : {
								"v010" : 0,
								"v011" : 0,
								"v012" : 0,
								"v020" : 0,
								"v021" : 0,
								"v022" : 195,
								"v023" : 671,
								"v024" : 145
							},
							"pbg" : 0.9697469999999998
						}
					},
					"roleMiddle" : {
						"total" : {
							"count" : 3364,
							"bwa" : 3661490789,
							"bwc" : 2486240533,
							"osv" : {
								"linux" : 2514,
								"darwin" : 99,
								"freebsd" : 108,
								"windows" : 594,
								"other" : 0
							},
							"tsv" : {
								"v010" : 0,
								"v011" : 0,
								"v012" : 0,
								"v020" : 0,
								"v021" : 0,
								"v022" : 772,
								"v023" : 2304,
								"v024" : 263
							},
							"pbm" : 0.9999480000000047
						},
						"flagNone" : {
							"count" : 179,
							"bwa" : 4642890,
							"bwc" : 453335,
							"osv" : {
								"linux" : 107,
								"darwin" : 7,
								"freebsd" : 6,
								"windows" : 56,
								"other" : 0
							},
							"tsv" : {
								"v010" : 0,
								"v011" : 0,
								"v012" : 0,
								"v020" : 0,
								"v021" : 0,
								"v022" : 53,
								"v023" : 116,
								"v024" : 8
							},
							"pbm" : 0.0014749999999999958
						},
						"flagStable" : {
							"count" : 226,
							"bwa" : 5134809,
							"bwc" : 1309510,
							"osv" : {
								"linux" : 192,
								"darwin" : 6,
								"freebsd" : 4,
								"windows" : 22,
								"other" : 0
							},
							"tsv" : {
								"v010" : 0,
								"v011" : 0,
								"v012" : 0,
								"v020" : 0,
								"v021" : 0,
								"v022" : 113,
								"v023" : 103,
								"v024" : 8
							},
							"pbm" : 0.0012459999999999982
						},
						"flagFast" : {
							"count" : 1036,
							"bwa" : 545386311,
							"bwc" : 274597307,
							"osv" : {
								"linux" : 604,
								"darwin" : 58,
								"freebsd" : 18,
								"windows" : 345,
								"other" : 0
							},
							"tsv" : {
								"v010" : 0,
								"v011" : 0,
								"v012" : 0,
								"v020" : 0,
								"v021" : 0,
								"v022" : 181,
								"v023" : 803,
								"v024" : 48
							},
							"pbm" : 0.27409699999999976
						},
						"flagFastStable" : {
							"count" : 1923,
							"bwa" : 3106326779,
							"bwc" : 2209880381,
							"osv" : {
								"linux" : 1611,
								"darwin" : 28,
								"freebsd" : 80,
								"windows" : 171,
								"other" : 0
							},
							"tsv" : {
								"v010" : 0,
								"v011" : 0,
								"v012" : 0,
								"v020" : 0,
								"v021" : 0,
								"v022" : 425,
								"v023" : 1282,
								"v024" : 199
							},
							"pbm" : 0.7231300000000012
						}
					},
					"roleExit" : {
						"total" : {
							"count" : 825,
							"bwa" : 1504349680,
							"bwc" : 997822110,
							"osv" : {
								"linux" : 643,
								"darwin" : 18,
								"freebsd" : 29,
								"windows" : 116,
								"other" : 0
							},
							"tsv" : {
								"v010" : 0,
								"v011" : 0,
								"v012" : 0,
								"v020" : 0,
								"v021" : 0,
								"v022" : 215,
								"v023" : 523,
								"v024" : 84
							},
							"pex" : {
								"p4" : 815,
								"p6" : 669,
								"p8" : 803,
								"p46" : 666,
								"p48" : 800,
								"p68" : 655,
								"p468" : 652
							},
							"pbe" : 0.9999630000000027
						},
						"flagNone" : {
							"count" : 41,
							"bwa" : 1017599,
							"bwc" : 152416,
							"osv" : {
								"linux" : 31,
								"darwin" : 1,
								"freebsd" : 0,
								"windows" : 9,
								"other" : 0
							},
							"tsv" : {
								"v010" : 0,
								"v011" : 0,
								"v012" : 0,
								"v020" : 0,
								"v021" : 0,
								"v022" : 18,
								"v023" : 20,
								"v024" : 3
							},
							"pex" : {
								"p4" : 41,
								"p6" : 36,
								"p8" : 40,
								"p46" : 36,
								"p48" : 40,
								"p68" : 35,
								"p468" : 35
							},
							"pbe" : 0.0003510000000000001
						},
						"flagFast" : {
							"count" : 222,
							"bwa" : 137169526,
							"bwc" : 64488353,
							"osv" : {
								"linux" : 132,
								"darwin" : 10,
								"freebsd" : 7,
								"windows" : 71,
								"other" : 0
							},
							"tsv" : {
								"v010" : 0,
								"v011" : 0,
								"v012" : 0,
								"v020" : 0,
								"v021" : 0,
								"v022" : 46,
								"v023" : 165,
								"v024" : 11
							},
							"pex" : {
								"p4" : 220,
								"p6" : 181,
								"p8" : 215,
								"p46" : 180,
								"p48" : 214,
								"p68" : 175,
								"p468" : 174
							},
							"pbe" : 0.12261399999999993
						},
						"flagStable" : {
							"count" : 96,
							"bwa" : 2172869,
							"bwc" : 379400,
							"osv" : {
								"linux" : 90,
								"darwin" : 2,
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
								"v022" : 61,
								"v023" : 33,
								"v024" : 2
							},
							"pex" : {
								"p4" : 96,
								"p6" : 91,
								"p8" : 96,
								"p46" : 91,
								"p48" : 96,
								"p68" : 91,
								"p468" : 91
							},
							"pbe" : 0.0008520000000000001
						},
						"flagFastStable" : {
							"count" : 466,
							"bwa" : 1363989686,
							"bwc" : 932801941,
							"osv" : {
								"linux" : 390,
								"darwin" : 5,
								"freebsd" : 22,
								"windows" : 33,
								"other" : 0
							},
							"tsv" : {
								"v010" : 0,
								"v011" : 0,
								"v012" : 0,
								"v020" : 0,
								"v021" : 0,
								"v022" : 90,
								"v023" : 305,
								"v024" : 68
							},
							"pex" : {
								"p4" : 458,
								"p6" : 361,
								"p8" : 452,
								"p46" : 359,
								"p48" : 450,
								"p68" : 354,
								"p468" : 352
							},
							"pbe" : 0.8761459999999996
						}
					},
					"roleDir" : {
						"total" : {
							"count" : 2022,
							"bwa" : 2797856988,
							"bwc" : 1897522059,
							"osv" : {
								"linux" : 1359,
								"darwin" : 77,
								"freebsd" : 67,
								"windows" : 492,
								"other" : 0
							},
							"tsv" : {
								"v010" : 0,
								"v011" : 0,
								"v012" : 0,
								"v020" : 0,
								"v021" : 0,
								"v022" : 363,
								"v023" : 1461,
								"v024" : 181
							}
						},
						"authorityTrue" : {
							"count" : 10,
							"bwa" : 11381410,
							"bwc" : 5723449,
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
					"country" : "US",
					"cbcc" : 16,
					"crcc" : 6019,
					"relay" : 936,
					"guard" : 267,
					"middle" : 936,
					"exit" : 176,
					"dir" : 599,
					"bwa" : 1073557116,
					"bwc" : 708115143,
					"pbr" : 0.29235299999999975,
					"pbg" : 0.27813400000000016,
					"pbm" : 0.27916599999999986,
					"pbe" : 0.31978399999999996,
					"fast" : 853,
					"stable" : 630,
					"osv" : {
						"linux" : 659,
						"darwin" : 46,
						"freebsd" : 33,
						"windows" : 174,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 186,
						"v023" : 669,
						"v024" : 73
					},
					"pex" : {
						"p4" : 172,
						"p6" : 134,
						"p8" : 169,
						"p46" : 133,
						"p48" : 168,
						"p68" : 131,
						"p468" : 130
					},
					"autosys" : [
						{
							"as" : 7922,
							"count" : 147
						},
						{
							"as" : 30633,
							"count" : 2
						},
						{
							"as" : 30083,
							"count" : 3
						},
						{
							"as" : 167,
							"count" : 1
						},
						{
							"as" : 3595,
							"count" : 9
						},
						{
							"as" : 14618,
							"count" : 12
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
							"as" : 20115,
							"count" : 24
						},
						{
							"as" : 30036,
							"count" : 5
						},
						{
							"as" : 18779,
							"count" : 4
						},
						{
							"as" : 7132,
							"count" : 19
						},
						{
							"as" : 25653,
							"count" : 2
						},
						{
							"as" : 21844,
							"count" : 8
						},
						{
							"as" : 53340,
							"count" : 2
						},
						{
							"as" : 20454,
							"count" : 5
						},
						{
							"as" : 36352,
							"count" : 15
						},
						{
							"as" : 5650,
							"count" : 6
						},
						{
							"as" : 29859,
							"count" : 1
						},
						{
							"as" : 11426,
							"count" : 11
						},
						{
							"as" : 23387,
							"count" : 1
						},
						{
							"as" : 7018,
							"count" : 17
						},
						{
							"as" : 29933,
							"count" : 1
						},
						{
							"as" : 30058,
							"count" : 9
						},
						{
							"as" : 36850,
							"count" : 1
						},
						{
							"as" : 19366,
							"count" : 1
						},
						{
							"as" : 6128,
							"count" : 10
						},
						{
							"as" : 11841,
							"count" : 1
						},
						{
							"as" : 20093,
							"count" : 1
						},
						{
							"as" : 7459,
							"count" : 1
						},
						{
							"as" : 46652,
							"count" : 17
						},
						{
							"as" : 23292,
							"count" : 1
						},
						{
							"as" : 209,
							"count" : 18
						},
						{
							"as" : 32875,
							"count" : 3
						},
						{
							"as" : 6079,
							"count" : 5
						},
						{
							"as" : 30693,
							"count" : 5
						},
						{
							"as" : 11351,
							"count" : 7
						},
						{
							"as" : 7065,
							"count" : 2
						},
						{
							"as" : 22773,
							"count" : 25
						},
						{
							"as" : 7029,
							"count" : 3
						},
						{
							"as" : 11427,
							"count" : 15
						},
						{
							"as" : 22576,
							"count" : 1
						},
						{
							"as" : 46261,
							"count" : 1
						},
						{
							"as" : 53264,
							"count" : 3
						},
						{
							"as" : 19181,
							"count" : 1
						},
						{
							"as" : 16652,
							"count" : 7
						},
						{
							"as" : 14536,
							"count" : 2
						},
						{
							"as" : 46816,
							"count" : 3
						},
						{
							"as" : 16942,
							"count" : 1
						},
						{
							"as" : 46457,
							"count" : 8
						},
						{
							"as" : 36351,
							"count" : 26
						},
						{
							"as" : 46475,
							"count" : 14
						},
						{
							"as" : 11398,
							"count" : 1
						},
						{
							"as" : 1312,
							"count" : 4
						},
						{
							"as" : 23136,
							"count" : 1
						},
						{
							"as" : 36137,
							"count" : 1
						},
						{
							"as" : 32475,
							"count" : 3
						},
						{
							"as" : 2701,
							"count" : 1
						},
						{
							"as" : 16810,
							"count" : 1
						},
						{
							"as" : 22989,
							"count" : 1
						},
						{
							"as" : 12231,
							"count" : 1
						},
						{
							"as" : 26729,
							"count" : 1
						},
						{
							"as" : 174,
							"count" : 7
						},
						{
							"as" : 10887,
							"count" : 1
						},
						{
							"as" : 18978,
							"count" : 2
						},
						{
							"as" : 12271,
							"count" : 4
						},
						{
							"as" : 3722,
							"count" : 2
						},
						{
							"as" : 29873,
							"count" : 2
						},
						{
							"as" : 27553,
							"count" : 1
						},
						{
							"as" : 20231,
							"count" : 1
						},
						{
							"as" : 8001,
							"count" : 22
						},
						{
							"as" : 6461,
							"count" : 2
						},
						{
							"as" : 20001,
							"count" : 12
						},
						{
							"as" : 29761,
							"count" : 7
						},
						{
							"as" : 10507,
							"count" : 1
						},
						{
							"as" : 33070,
							"count" : 3
						},
						{
							"as" : 19994,
							"count" : 8
						},
						{
							"as" : 22772,
							"count" : 1
						},
						{
							"as" : 33588,
							"count" : 2
						},
						{
							"as" : 3842,
							"count" : 8
						},
						{
							"as" : 3651,
							"count" : 3
						},
						{
							"as" : 46664,
							"count" : 2
						},
						{
							"as" : 34,
							"count" : 1
						},
						{
							"as" : 25795,
							"count" : 4
						},
						{
							"as" : 10508,
							"count" : 1
						},
						{
							"as" : 12083,
							"count" : 3
						},
						{
							"as" : 3061,
							"count" : 1
						},
						{
							"as" : 73,
							"count" : 1
						},
						{
							"as" : 30266,
							"count" : 4
						},
						{
							"as" : 12035,
							"count" : 1
						},
						{
							"as" : 6315,
							"count" : 6
						},
						{
							"as" : 26934,
							"count" : 1
						},
						{
							"as" : 8560,
							"count" : 2
						},
						{
							"as" : 23148,
							"count" : 3
						},
						{
							"as" : 13977,
							"count" : 1
						},
						{
							"as" : 103,
							"count" : 1
						},
						{
							"as" : 4181,
							"count" : 3
						},
						{
							"as" : 8100,
							"count" : 4
						},
						{
							"as" : 19202,
							"count" : 1
						},
						{
							"as" : 20178,
							"count" : 1
						},
						{
							"as" : 32097,
							"count" : 7
						},
						{
							"as" : 36025,
							"count" : 1
						},
						{
							"as" : 16276,
							"count" : 1
						},
						{
							"as" : 33440,
							"count" : 2
						},
						{
							"as" : 16509,
							"count" : 3
						},
						{
							"as" : 22219,
							"count" : 8
						},
						{
							"as" : 10796,
							"count" : 7
						},
						{
							"as" : 46375,
							"count" : 4
						},
						{
							"as" : 10835,
							"count" : 1
						},
						{
							"as" : 53667,
							"count" : 4
						},
						{
							"as" : 26914,
							"count" : 1
						},
						{
							"as" : 27229,
							"count" : 1
						},
						{
							"as" : 33597,
							"count" : 1
						},
						{
							"as" : 46844,
							"count" : 1
						},
						{
							"as" : 30496,
							"count" : 2
						},
						{
							"as" : 23028,
							"count" : 10
						},
						{
							"as" : 32748,
							"count" : 4
						},
						{
							"as" : 18515,
							"count" : 1
						},
						{
							"as" : 17019,
							"count" : 1
						},
						{
							"as" : 6389,
							"count" : 7
						},
						{
							"as" : 26496,
							"count" : 1
						},
						{
							"as" : 12129,
							"count" : 1
						},
						{
							"as" : 11288,
							"count" : 2
						},
						{
							"as" : 29854,
							"count" : 2
						},
						{
							"as" : 11404,
							"count" : 1
						},
						{
							"as" : 33724,
							"count" : 1
						},
						{
							"as" : 30475,
							"count" : 1
						},
						{
							"as" : 19165,
							"count" : 2
						},
						{
							"as" : 15003,
							"count" : 2
						},
						{
							"as" : 3,
							"count" : 3
						},
						{
							"as" : 10594,
							"count" : 1
						},
						{
							"as" : 30217,
							"count" : 1
						},
						{
							"as" : 4565,
							"count" : 1
						},
						{
							"as" : 21788,
							"count" : 7
						},
						{
							"as" : 15085,
							"count" : 1
						},
						{
							"as" : 194,
							"count" : 2
						},
						{
							"as" : 54046,
							"count" : 1
						},
						{
							"as" : 6364,
							"count" : 2
						},
						{
							"as" : 4922,
							"count" : 1
						},
						{
							"as" : 11240,
							"count" : 1
						},
						{
							"as" : 14051,
							"count" : 1
						},
						{
							"as" : 33363,
							"count" : 2
						},
						{
							"as" : 11051,
							"count" : 2
						},
						{
							"as" : 1785,
							"count" : 2
						},
						{
							"as" : 14,
							"count" : 3
						},
						{
							"as" : 8047,
							"count" : 1
						},
						{
							"as" : 14511,
							"count" : 1
						},
						{
							"as" : 11403,
							"count" : 2
						},
						{
							"as" : 54856,
							"count" : 2
						},
						{
							"as" : 13703,
							"count" : 1
						},
						{
							"as" : 7377,
							"count" : 1
						},
						{
							"as" : 33182,
							"count" : 1
						},
						{
							"as" : 19969,
							"count" : 1
						},
						{
							"as" : 13768,
							"count" : 4
						},
						{
							"as" : 226,
							"count" : 1
						},
						{
							"as" : 32780,
							"count" : 2
						},
						{
							"as" : 36477,
							"count" : 1
						},
						{
							"as" : 30640,
							"count" : 1
						},
						{
							"as" : 14517,
							"count" : 1
						},
						{
							"as" : 21565,
							"count" : 1
						},
						{
							"as" : 36252,
							"count" : 1
						},
						{
							"as" : 2637,
							"count" : 1
						},
						{
							"as" : 111,
							"count" : 1
						},
						{
							"as" : 701,
							"count" : 1
						},
						{
							"as" : 36223,
							"count" : 2
						},
						{
							"as" : 5760,
							"count" : 2
						},
						{
							"as" : 47066,
							"count" : 2
						},
						{
							"as" : 6488,
							"count" : 1
						},
						{
							"as" : 22030,
							"count" : 1
						},
						{
							"as" : 29737,
							"count" : 1
						},
						{
							"as" : 26068,
							"count" : 1
						},
						{
							"as" : 10489,
							"count" : 1
						},
						{
							"as" : 40430,
							"count" : 1
						},
						{
							"as" : 30176,
							"count" : 1
						},
						{
							"as" : 36012,
							"count" : 1
						},
						{
							"as" : 12180,
							"count" : 1
						},
						{
							"as" : 31,
							"count" : 1
						},
						{
							"as" : 7753,
							"count" : 1
						},
						{
							"as" : 11696,
							"count" : 1
						},
						{
							"as" : 17090,
							"count" : 3
						},
						{
							"as" : 7725,
							"count" : 1
						},
						{
							"as" : 17183,
							"count" : 1
						},
						{
							"as" : 53850,
							"count" : 1
						},
						{
							"as" : 35017,
							"count" : 1
						},
						{
							"as" : 237,
							"count" : 1
						},
						{
							"as" : 46687,
							"count" : 1
						},
						{
							"as" : 9,
							"count" : 1
						},
						{
							"as" : 34764,
							"count" : 1
						},
						{
							"as" : 23205,
							"count" : 1
						},
						{
							"as" : 53785,
							"count" : 1
						},
						{
							"as" : 33604,
							"count" : 1
						},
						{
							"as" : 20473,
							"count" : 1
						},
						{
							"as" : 46193,
							"count" : 1
						},
						{
							"as" : 40156,
							"count" : 2
						},
						{
							"as" : 36492,
							"count" : 1
						},
						{
							"as" : 2044,
							"count" : 1
						},
						{
							"as" : 10913,
							"count" : 1
						},
						{
							"as" : 4385,
							"count" : 1
						},
						{
							"as" : 14901,
							"count" : 1
						},
						{
							"as" : 55045,
							"count" : 1
						},
						{
							"as" : 11878,
							"count" : 1
						},
						{
							"as" : 29169,
							"count" : 1
						},
						{
							"as" : 46925,
							"count" : 1
						},
						{
							"as" : 16718,
							"count" : 2
						},
						{
							"as" : 14987,
							"count" : 1
						},
						{
							"as" : 40475,
							"count" : 2
						},
						{
							"as" : 13647,
							"count" : 1
						},
						{
							"as" : 18712,
							"count" : 1
						},
						{
							"as" : 46,
							"count" : 1
						},
						{
							"as" : 14670,
							"count" : 1
						},
						{
							"as" : 6528,
							"count" : 1
						},
						{
							"as" : 32220,
							"count" : 1
						},
						{
							"as" : 3356,
							"count" : 1
						},
						{
							"as" : 13618,
							"count" : 1
						},
						{
							"as" : 19975,
							"count" : 1
						},
						{
							"as" : 40244,
							"count" : 1
						},
						{
							"as" : 33387,
							"count" : 1
						},
						{
							"as" : 12177,
							"count" : 1
						},
						{
							"as" : 16904,
							"count" : 1
						},
						{
							"as" : 26347,
							"count" : 1
						},
						{
							"as" : 23089,
							"count" : 1
						},
						{
							"as" : 16586,
							"count" : 1
						},
						{
							"as" : 18618,
							"count" : 1
						},
						{
							"as" : 12025,
							"count" : 1
						},
						{
							"as" : 22747,
							"count" : 1
						},
						{
							"as" : 1706,
							"count" : 1
						},
						{
							"as" : 36024,
							"count" : 2
						},
						{
							"as" : 46841,
							"count" : 1
						},
						{
							"as" : 7796,
							"count" : 1
						},
						{
							"as" : 18566,
							"count" : 1
						},
						{
							"as" : 40092,
							"count" : 1
						},
						{
							"as" : 36375,
							"count" : 1
						},
						{
							"as" : 40676,
							"count" : 1
						},
						{
							"as" : 1280,
							"count" : 1
						},
						{
							"as" : 11557,
							"count" : 1
						},
						{
							"as" : 19108,
							"count" : 2
						},
						{
							"as" : 47069,
							"count" : 1
						},
						{
							"as" : 55,
							"count" : 1
						}
					]
				},
				{
					"country" : "DE",
					"cbcc" : 2,
					"crcc" : 3183,
					"relay" : 637,
					"guard" : 255,
					"middle" : 637,
					"exit" : 93,
					"dir" : 368,
					"bwa" : 776742364,
					"bwc" : 550815933,
					"pbr" : 0.21967900000000043,
					"pbg" : 0.22514600000000004,
					"pbm" : 0.27054400000000006,
					"pbe" : 0.16333899999999998,
					"fast" : 581,
					"stable" : 422,
					"osv" : {
						"linux" : 555,
						"darwin" : 9,
						"freebsd" : 17,
						"windows" : 48,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 150,
						"v023" : 417,
						"v024" : 64
					},
					"pex" : {
						"p4" : 91,
						"p6" : 56,
						"p8" : 91,
						"p46" : 55,
						"p48" : 90,
						"p68" : 55,
						"p468" : 54
					},
					"autosys" : [
						{
							"as" : 24940,
							"count" : 163
						},
						{
							"as" : 35366,
							"count" : 12
						},
						{
							"as" : 3209,
							"count" : 19
						},
						{
							"as" : 31334,
							"count" : 25
						},
						{
							"as" : 15657,
							"count" : 2
						},
						{
							"as" : 20773,
							"count" : 24
						},
						{
							"as" : 31333,
							"count" : 5
						},
						{
							"as" : 20825,
							"count" : 16
						},
						{
							"as" : 13184,
							"count" : 19
						},
						{
							"as" : 33984,
							"count" : 2
						},
						{
							"as" : 3320,
							"count" : 68
						},
						{
							"as" : 6724,
							"count" : 34
						},
						{
							"as" : 15943,
							"count" : 5
						},
						{
							"as" : 48823,
							"count" : 2
						},
						{
							"as" : 29562,
							"count" : 16
						},
						{
							"as" : 31103,
							"count" : 9
						},
						{
							"as" : 8972,
							"count" : 29
						},
						{
							"as" : 25538,
							"count" : 1
						},
						{
							"as" : 57668,
							"count" : 8
						},
						{
							"as" : 30962,
							"count" : 3
						},
						{
							"as" : 24961,
							"count" : 12
						},
						{
							"as" : 12897,
							"count" : 1
						},
						{
							"as" : 31400,
							"count" : 6
						},
						{
							"as" : 8422,
							"count" : 8
						},
						{
							"as" : 8560,
							"count" : 8
						},
						{
							"as" : 16265,
							"count" : 6
						},
						{
							"as" : 34011,
							"count" : 6
						},
						{
							"as" : 12312,
							"count" : 2
						},
						{
							"as" : 8767,
							"count" : 7
						},
						{
							"as" : 13301,
							"count" : 1
						},
						{
							"as" : 24989,
							"count" : 2
						},
						{
							"as" : 25074,
							"count" : 1
						},
						{
							"as" : 6805,
							"count" : 19
						},
						{
							"as" : 35244,
							"count" : 1
						},
						{
							"as" : 47692,
							"count" : 4
						},
						{
							"as" : 680,
							"count" : 9
						},
						{
							"as" : 13722,
							"count" : 4
						},
						{
							"as" : 9063,
							"count" : 1
						},
						{
							"as" : 16276,
							"count" : 3
						},
						{
							"as" : 31342,
							"count" : 7
						},
						{
							"as" : 51167,
							"count" : 3
						},
						{
							"as" : 9145,
							"count" : 1
						},
						{
							"as" : 33891,
							"count" : 1
						},
						{
							"as" : 21409,
							"count" : 1
						},
						{
							"as" : 31078,
							"count" : 4
						},
						{
							"as" : 16202,
							"count" : 2
						},
						{
							"as" : 4589,
							"count" : 1
						},
						{
							"as" : 198599,
							"count" : 2
						},
						{
							"as" : 20676,
							"count" : 4
						},
						{
							"as" : 5669,
							"count" : 1
						},
						{
							"as" : 47447,
							"count" : 5
						},
						{
							"as" : 34240,
							"count" : 2
						},
						{
							"as" : 24956,
							"count" : 1
						},
						{
							"as" : 50472,
							"count" : 1
						},
						{
							"as" : 39743,
							"count" : 2
						},
						{
							"as" : 48039,
							"count" : 1
						},
						{
							"as" : 56813,
							"count" : 1
						},
						{
							"as" : 12337,
							"count" : 1
						},
						{
							"as" : 553,
							"count" : 2
						},
						{
							"as" : 29141,
							"count" : 2
						},
						{
							"as" : 13237,
							"count" : 2
						},
						{
							"as" : 197540,
							"count" : 4
						},
						{
							"as" : 12898,
							"count" : 1
						},
						{
							"as" : 39138,
							"count" : 4
						},
						{
							"as" : 197071,
							"count" : 1
						},
						{
							"as" : 196714,
							"count" : 2
						},
						{
							"as" : 24900,
							"count" : 3
						},
						{
							"as" : 31100,
							"count" : 1
						},
						{
							"as" : 8881,
							"count" : 1
						},
						{
							"as" : 49855,
							"count" : 1
						},
						{
							"as" : 12355,
							"count" : 1
						},
						{
							"as" : 12843,
							"count" : 1
						},
						{
							"as" : 12732,
							"count" : 1
						},
						{
							"as" : 42652,
							"count" : 1
						},
						{
							"as" : 20880,
							"count" : 1
						},
						{
							"as" : 15763,
							"count" : 1
						},
						{
							"as" : 12676,
							"count" : 1
						},
						{
							"as" : 20640,
							"count" : 1
						},
						{
							"as" : 34549,
							"count" : 1
						}
					]
				},
				{
					"country" : "GB",
					"cbcc" : 5,
					"crcc" : 1053,
					"relay" : 176,
					"guard" : 37,
					"middle" : 176,
					"exit" : 34,
					"dir" : 93,
					"bwa" : 129482005,
					"bwc" : 85320005,
					"pbr" : 0.056941000000000026,
					"pbg" : 0.03937599999999999,
					"pbm" : 0.04128700000000003,
					"pbe" : 0.090156,
					"fast" : 152,
					"stable" : 103,
					"osv" : {
						"linux" : 124,
						"darwin" : 4,
						"freebsd" : 2,
						"windows" : 45,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 30,
						"v023" : 131,
						"v024" : 13
					},
					"pex" : {
						"p4" : 34,
						"p6" : 29,
						"p8" : 34,
						"p46" : 29,
						"p48" : 34,
						"p68" : 29,
						"p468" : 29
					},
					"autosys" : [
						{
							"as" : 35228,
							"count" : 21
						},
						{
							"as" : 5089,
							"count" : 36
						},
						{
							"as" : 16276,
							"count" : 6
						},
						{
							"as" : 13285,
							"count" : 4
						},
						{
							"as" : 35425,
							"count" : 6
						},
						{
							"as" : 15830,
							"count" : 18
						},
						{
							"as" : 786,
							"count" : 4
						},
						{
							"as" : 2856,
							"count" : 15
						},
						{
							"as" : 6871,
							"count" : 5
						},
						{
							"as" : 13213,
							"count" : 5
						},
						{
							"as" : 42831,
							"count" : 2
						},
						{
							"as" : 35662,
							"count" : 5
						},
						{
							"as" : 5607,
							"count" : 8
						},
						{
							"as" : 51377,
							"count" : 3
						},
						{
							"as" : 28986,
							"count" : 1
						},
						{
							"as" : 12576,
							"count" : 2
						},
						{
							"as" : 9105,
							"count" : 1
						},
						{
							"as" : 20860,
							"count" : 10
						},
						{
							"as" : 34119,
							"count" : 1
						},
						{
							"as" : 8401,
							"count" : 1
						},
						{
							"as" : 43234,
							"count" : 3
						},
						{
							"as" : 20738,
							"count" : 3
						},
						{
							"as" : 31595,
							"count" : 1
						},
						{
							"as" : 12513,
							"count" : 1
						},
						{
							"as" : 44557,
							"count" : 1
						},
						{
							"as" : 8943,
							"count" : 3
						},
						{
							"as" : 20712,
							"count" : 1
						},
						{
							"as" : 25577,
							"count" : 1
						},
						{
							"as" : 1239,
							"count" : 1
						},
						{
							"as" : 29302,
							"count" : 2
						},
						{
							"as" : 33970,
							"count" : 1
						},
						{
							"as" : 51059,
							"count" : 1
						},
						{
							"as" : 2529,
							"count" : 2
						},
						{
							"as" : 29017,
							"count" : 1
						}
					]
				},
				{
					"country" : "FR",
					"cbcc" : 4,
					"crcc" : 2506,
					"relay" : 188,
					"guard" : 63,
					"middle" : 188,
					"exit" : 55,
					"dir" : 105,
					"bwa" : 176583299,
					"bwc" : 128142080,
					"pbr" : 0.050317000000000035,
					"pbg" : 0.05248600000000002,
					"pbm" : 0.05370700000000002,
					"pbe" : 0.044782,
					"fast" : 152,
					"stable" : 126,
					"osv" : {
						"linux" : 146,
						"darwin" : 9,
						"freebsd" : 3,
						"windows" : 26,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 57,
						"v023" : 122,
						"v024" : 6
					},
					"pex" : {
						"p4" : 54,
						"p6" : 46,
						"p8" : 54,
						"p46" : 46,
						"p48" : 54,
						"p68" : 46,
						"p468" : 46
					},
					"autosys" : [
						{
							"as" : 15557,
							"count" : 13
						},
						{
							"as" : 12322,
							"count" : 52
						},
						{
							"as" : 16276,
							"count" : 74
						},
						{
							"as" : 196689,
							"count" : 3
						},
						{
							"as" : 3215,
							"count" : 8
						},
						{
							"as" : 29169,
							"count" : 12
						},
						{
							"as" : 21502,
							"count" : 7
						},
						{
							"as" : 197422,
							"count" : 2
						},
						{
							"as" : 8218,
							"count" : 1
						},
						{
							"as" : 5410,
							"count" : 4
							},
						{
							"as" : 8228,
							"count" : 2
						},
						{
							"as" : 13193,
							"count" : 1
						},
						{
							"as" : 197922,
							"count" : 1
						},
						{
							"as" : 31555,
							"count" : 1
						},
						{
							"as" : 12626,
							"count" : 1
						},
						{
							"as" : 20766,
							"count" : 2
						},
						{
							"as" : 50618,
							"count" : 1
						},
						{
							"as" : 39389,
							"count" : 1
						},
						{
							"as" : 47206,
							"count" : 2
						}
					]
				},
				{
					"country" : "AT",
					"cbcc" : 0,
					"crcc" : 244,
					"relay" : 50,
					"guard" : 19,
					"middle" : 50,
					"exit" : 10,
					"dir" : 32,
					"bwa" : 97742002,
					"bwc" : 81015879,
					"pbr" : 0.023463999999999992,
					"pbg" : 0.041645,
					"pbm" : 0.021515,
					"pbe" : 0.007239,
					"fast" : 47,
					"stable" : 37,
					"osv" : {
						"linux" : 44,
						"darwin" : 2,
						"freebsd" : 1,
						"windows" : 3,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 13,
						"v023" : 33,
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
							"as" : 21213,
							"count" : 1
						},
						{
							"as" : 6830,
							"count" : 16
						},
						{
							"as" : 47692,
							"count" : 3
						},
						{
							"as" : 12635,
							"count" : 2
						},
						{
							"as" : 12605,
							"count" : 3
						},
						{
							"as" : 1764,
							"count" : 1
						},
						{
							"as" : 8559,
							"count" : 1
						},
						{
							"as" : 35339,
							"count" : 1
						},
						{
							"as" : 57169,
							"count" : 2
						},
						{
							"as" : 760,
							"count" : 1
						},
						{
							"as" : 3265,
							"count" : 1
						},
						{
							"as" : 8447,
							"count" : 2
						},
						{
							"as" : 1853,
							"count" : 1
						},
						{
							"as" : 8339,
							"count" : 3
						},
						{
							"as" : 8437,
							"count" : 1
						},
						{
							"as" : 3330,
							"count" : 1
						},
						{
							"as" : 679,
							"count" : 1
						},
						{
							"as" : 25255,
							"count" : 1
						}
					]
				},
				{
					"country" : "BG",
					"cbcc" : 0,
					"crcc" : 80,
					"relay" : 12,
					"guard" : 3,
					"middle" : 12,
					"exit" : 3,
					"dir" : 9,
					"bwa" : 4291157,
					"bwc" : 2042926,
					"pbr" : 0.0006119999999999999,
					"pbg" : 0.000779,
					"pbm" : 0.0007810000000000001,
					"pbe" : 0.000277,
					"fast" : 12,
					"stable" : 7,
					"osv" : {
						"linux" : 4,
						"darwin" : 0,
						"freebsd" : 1,
						"windows" : 7,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 5,
						"v023" : 7,
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
							"as" : 43561,
							"count" : 1
						},
						{
							"as" : 29580,
							"count" : 1
						},
						{
							"as" : 13124,
							"count" : 3
						},
						{
							"as" : 34224,
							"count" : 1
						},
						{
							"as" : 8877,
							"count" : 1
						},
						{
							"as" : 5421,
							"count" : 1
						},
						{
							"as" : 29084,
							"count" : 1
						},
						{
							"as" : 31250,
							"count" : 1
						},
						{
							"as" : 12436,
							"count" : 1
						},
						{
							"as" : 8866,
							"count" : 1
						}
					]
				},
				{
					"country" : "NZ",
					"cbcc" : 0,
					"crcc" : 59,
					"relay" : 11,
					"guard" : 1,
					"middle" : 11,
					"exit" : 0,
					"dir" : 5,
					"bwa" : 1672624,
					"bwc" : 561187,
					"pbr" : 0.000063,
					"pbg" : 0.000094,
					"pbm" : 0.000092,
					"pbe" : 0,
					"fast" : 11,
					"stable" : 6,
					"osv" : {
						"linux" : 6,
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
						"v022" : 1,
						"v023" : 9,
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
							"as" : 4771,
							"count" : 1
						},
						{
							"as" : 45230,
							"count" : 1
						},
						{
							"as" : 23655,
							"count" : 1
						},
						{
							"as" : 17746,
							"count" : 1
						},
						{
							"as" : 9790,
							"count" : 4
						},
						{
							"as" : 9433,
							"count" : 1
						},
						{
							"as" : 7657,
							"count" : 1
						},
						{
							"as" : 24466,
							"count" : 1
						}
					]
				},
				{
					"country" : "NL",
					"cbcc" : 2,
					"crcc" : 880,
					"relay" : 192,
					"guard" : 79,
					"middle" : 192,
					"exit" : 74,
					"dir" : 99,
					"bwa" : 378253746,
					"bwc" : 286934507,
					"pbr" : 0.11891100000000007,
					"pbg" : 0.11208400000000002,
					"pbm" : 0.11025399999999995,
					"pbe" : 0.13439899999999996,
					"fast" : 162,
					"stable" : 144,
					"osv" : {
						"linux" : 161,
						"darwin" : 4,
						"freebsd" : 7,
						"windows" : 17,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 57,
						"v023" : 113,
						"v024" : 21
					},
					"pex" : {
						"p4" : 74,
						"p6" : 63,
						"p8" : 74,
						"p46" : 63,
						"p48" : 74,
						"p68" : 63,
						"p468" : 63
					},
					"autosys" : [
						{
							"as" : 8283,
							"count" : 2
						},
						{
							"as" : 16265,
							"count" : 50
						},
						{
							"as" : 39309,
							"count" : 2
						},
						{
							"as" : 12414,
							"count" : 2
						},
						{
							"as" : 1103,
							"count" : 8
						},
						{
							"as" : 5615,
							"count" : 4
						},
						{
							"as" : 43350,
							"count" : 6
						},
						{
							"as" : 9143,
							"count" : 15
						},
						{
							"as" : 6830,
							"count" : 5
						},
						{
							"as" : 46652,
							"count" : 5
						},
						{
							"as" : 20857,
							"count" : 3
						},
						{
							"as" : 16276,
							"count" : 3
						},
						{
							"as" : 41887,
							"count" : 1
						},
						{
							"as" : 35470,
							"count" : 1
						},
						{
							"as" : 3265,
							"count" : 22
						},
						{
							"as" : 49544,
							"count" : 5
						},
						{
							"as" : 50673,
							"count" : 7
						},
						{
							"as" : 29073,
							"count" : 18
						},
						{
							"as" : 47869,
							"count" : 3
						},
						{
							"as" : 13127,
							"count" : 6
						},
						{
							"as" : 20495,
							"count" : 1
						},
						{
							"as" : 36351,
							"count" : 1
						},
						{
							"as" : 8737,
							"count" : 3
						},
						{
							"as" : 1133,
							"count" : 1
						},
						{
							"as" : 50266,
							"count" : 1
						},
						{
							"as" : 57172,
							"count" : 2
						},
						{
							"as" : 12634,
							"count" : 1
						},
						{
							"as" : 5390,
							"count" : 1
						},
						{
							"as" : 31019,
							"count" : 1
						},
						{
							"as" : 49981,
							"count" : 1
						},
						{
							"as" : 20507,
							"count" : 2
						},
						{
							"as" : 15435,
							"count" : 1
						},
						{
							"as" : 29028,
							"count" : 1
						},
						{
							"as" : 61387,
							"count" : 1
						},
						{
							"as" : 42093,
							"count" : 1
						},
						{
							"as" : 48635,
							"count" : 1
						},
						{
							"as" : 8455,
							"count" : 2
						},
						{
							"as" : 5580,
							"count" : 1
						},
						{
							"as" : 28685,
							"count" : 1
						}
					]
				},
				{
					"country" : "CA",
					"cbcc" : 3,
					"crcc" : 657,
					"relay" : 87,
					"guard" : 20,
					"middle" : 87,
					"exit" : 15,
					"dir" : 46,
					"bwa" : 59044730,
					"bwc" : 36043302,
					"pbr" : 0.021167000000000005,
					"pbg" : 0.018178,
					"pbm" : 0.015222000000000005,
					"pbe" : 0.030107,
					"fast" : 65,
					"stable" : 59,
					"osv" : {
						"linux" : 59,
						"darwin" : 3,
						"freebsd" : 6,
						"windows" : 17,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 24,
						"v023" : 56,
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
							"as" : 5769,
							"count" : 4
						},
						{
							"as" : 6327,
							"count" : 20
						},
						{
							"as" : 16276,
							"count" : 7
						},
						{
							"as" : 6539,
							"count" : 1
						},
						{
							"as" : 5645,
							"count" : 7
						},
						{
							"as" : 15003,
							"count" : 1
						},
						{
							"as" : 15290,
							"count" : 1
						},
						{
							"as" : 13768,
							"count" : 2
						},
						{
							"as" : 10929,
							"count" : 4
						},
						{
							"as" : 11814,
							"count" : 3
						},
						{
							"as" : 40788,
							"count" : 1
						},
						{
							"as" : 852,
							"count" : 4
						},
						{
							"as" : 30158,
							"count" : 1
						},
						{
							"as" : 33139,
							"count" : 1
						},
						{
							"as" : 32613,
							"count" : 7
						},
						{
							"as" : 812,
							"count" : 3
						},
						{
							"as" : 39959,
							"count" : 1
						},
						{
							"as" : 25668,
							"count" : 1
						},
						{
							"as" : 7456,
							"count" : 1
						},
						{
							"as" : 577,
							"count" : 5
						},
						{
							"as" : 12093,
							"count" : 2
						},
						{
							"as" : 803,
							"count" : 2
						},
						{
							"as" : 393249,
							"count" : 1
						},
						{
							"as" : 36137,
							"count" : 1
						},
						{
							"as" : 7860,
							"count" : 1
						},
						{
							"as" : 35911,
							"count" : 1
						},
						{
							"as" : 20375,
							"count" : 1
						},
						{
							"as" : 29761,
							"count" : 1
						},
						{
							"as" : 1403,
							"count" : 1
						},
						{
							"as" : 19662,
							"count" : 1
						}
					]
				},
				{
					"country" : "MT",
					"cbcc" : 0,
					"crcc" : 9,
					"relay" : 2,
					"guard" : 2,
					"middle" : 2,
					"exit" : 2,
					"dir" : 2,
					"bwa" : 9118654,
					"bwc" : 4178733,
					"pbr" : 0.0034779999999999998,
					"pbg" : 0.00201,
					"pbm" : 0.00201,
					"pbe" : 0.006413,
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
							"as" : 61391,
							"count" : 1
						},
						{
							"as" : 20521,
							"count" : 1
						}
					]
				},
				{
					"country" : "SE",
					"cbcc" : 2,
					"crcc" : 257,
					"relay" : 111,
					"guard" : 45,
					"middle" : 111,
					"exit" : 29,
					"dir" : 78,
					"bwa" : 182120460,
					"bwc" : 132343608,
					"pbr" : 0.04851800000000003,
					"pbg" : 0.05626999999999999,
					"pbm" : 0.036481999999999994,
					"pbe" : 0.052823,
					"fast" : 103,
					"stable" : 78,
					"osv" : {
						"linux" : 79,
						"darwin" : 5,
						"freebsd" : 9,
						"windows" : 17,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 24,
						"v023" : 71,
						"v024" : 15
					},
					"pex" : {
						"p4" : 28,
						"p6" : 24,
						"p8" : 28,
						"p46" : 24,
						"p48" : 28,
						"p68" : 24,
						"p468" : 24
					},
					"autosys" : [
						{
							"as" : 34610,
							"count" : 1
						},
						{
							"as" : 39651,
							"count" : 9
						},
						{
							"as" : 3301,
							"count" : 14
						},
						{
							"as" : 40475,
							"count" : 1
						},
						{
							"as" : 29518,
							"count" : 3
						},
						{
							"as" : 1257,
							"count" : 4
						},
						{
							"as" : 2119,
							"count" : 15
						},
						{
							"as" : 33837,
							"count" : 3
						},
						{
							"as" : 50066,
							"count" : 2
						},
						{
							"as" : 37560,
							"count" : 2
						},
						{
							"as" : 8473,
							"count" : 14
						},
						{
							"as" : 30880,
							"count" : 1
						},
						{
							"as" : 35041,
							"count" : 1
						},
						{
							"as" : 42708,
							"count" : 5
						},
						{
							"as" : 39369,
							"count" : 2
						},
						{
							"as" : 51815,
							"count" : 4
						},
						{
							"as" : 198093,
							"count" : 4
						},
						{
							"as" : 2840,
							"count" : 2
						},
						{
							"as" : 1653,
							"count" : 5
						},
						{
							"as" : 39351,
							"count" : 1
						},
						{
							"as" : 2603,
							"count" : 1
						},
						{
							"as" : 13189,
							"count" : 1
						},
						{
							"as" : 33885,
							"count" : 4
						},
						{
							"as" : 3292,
							"count" : 1
						},
						{
							"as" : 50821,
							"count" : 1
						},
						{
							"as" : 44581,
							"count" : 1
						},
						{
							"as" : 49770,
							"count" : 2
						},
						{
							"as" : 43948,
							"count" : 1
						},
						{
							"as" : 42695,
							"count" : 1
						},
						{
							"as" : 43326,
							"count" : 1
						},
						{
							"as" : 12597,
							"count" : 1
						},
						{
							"as" : 57858,
							"count" : 2
						},
						{
							"as" : 47155,
							"count" : 1
						}
					]
				},
				{
					"country" : "GR",
					"cbcc" : 0,
					"crcc" : 83,
					"relay" : 20,
					"guard" : 9,
					"middle" : 20,
					"exit" : 5,
					"dir" : 15,
					"bwa" : 23275311,
					"bwc" : 14747940,
					"pbr" : 0.005065,
					"pbg" : 0.007091000000000001,
					"pbm" : 0.004547999999999999,
					"pbe" : 0.003555,
					"fast" : 16,
					"stable" : 10,
					"osv" : {
						"linux" : 15,
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
						"v023" : 16,
						"v024" : 2
					},
					"pex" : {
						"p4" : 5,
						"p6" : 4,
						"p8" : 5,
						"p46" : 4,
						"p48" : 5,
						"p68" : 4,
						"p468" : 4
					},
					"autosys" : [
						{
							"as" : 6799,
							"count" : 2
						},
						{
							"as" : 5408,
							"count" : 13
						},
						{
							"as" : 1241,
							"count" : 3
						},
						{
							"as" : 6866,
							"count" : 1
						},
						{
							"as" : 21284,
							"count" : 1
						}
					]
				},
				{
					"country" : "HR",
					"cbcc" : 0,
					"crcc" : 36,
					"relay" : 10,
					"guard" : 3,
					"middle" : 10,
					"exit" : 0,
					"dir" : 6,
					"bwa" : 3077023,
					"bwc" : 2719671,
					"pbr" : 0.0005349999999999999,
					"pbg" : 0.0006140000000000001,
					"pbm" : 0.00099,
					"pbe" : 0,
					"fast" : 6,
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
						"v022" : 2,
						"v023" : 8,
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
							"as" : 41454,
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
							"as" : 29485,
							"count" : 1
						},
						{
							"as" : 34362,
							"count" : 1
						},
						{
							"as" : 31012,
							"count" : 1
						},
						{
							"as" : 12810,
							"count" : 1
						}
					]
				},
				{
					"country" : "RU",
					"cbcc" : 5,
					"crcc" : 1251,
					"relay" : 154,
					"guard" : 29,
					"middle" : 154,
					"exit" : 54,
					"dir" : 108,
					"bwa" : 113310973,
					"bwc" : 61602002,
					"pbr" : 0.026734000000000008,
					"pbg" : 0.017979,
					"pbm" : 0.04346400000000001,
					"pbe" : 0.018757999999999993,
					"fast" : 149,
					"stable" : 59,
					"osv" : {
						"linux" : 89,
						"darwin" : 2,
						"freebsd" : 3,
						"windows" : 57,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 37,
						"v023" : 103,
						"v024" : 12
					},
					"pex" : {
						"p4" : 53,
						"p6" : 36,
						"p8" : 52,
						"p46" : 36,
						"p48" : 52,
						"p68" : 35,
						"p468" : 35
					},
					"autosys" : [
						{
							"as" : 35415,
							"count" : 2
						},
						{
							"as" : 20807,
							"count" : 1
						},
						{
							"as" : 8334,
							"count" : 3
						},
						{
							"as" : 35475,
							"count" : 1
						},
						{
							"as" : 31364,
							"count" : 2
						},
						{
							"as" : 8402,
							"count" : 17
						},
						{
							"as" : 44724,
							"count" : 2
						},
						{
							"as" : 3216,
							"count" : 1
						},
						{
							"as" : 48780,
							"count" : 1
						},
						{
							"as" : 42610,
							"count" : 9
						},
						{
							"as" : 50465,
							"count" : 1
						},
						{
							"as" : 41733,
							"count" : 3
						},
						{
							"as" : 2683,
							"count" : 1
						},
						{
							"as" : 28719,
							"count" : 1
						},
						{
							"as" : 8342,
							"count" : 1
						},
						{
							"as" : 24955,
							"count" : 1
						},
						{
							"as" : 29182,
							"count" : 1
						},
						{
							"as" : 21378,
							"count" : 1
						},
						{
							"as" : 12608,
							"count" : 4
						},
						{
							"as" : 8615,
							"count" : 1
						},
						{
							"as" : 52201,
							"count" : 4
						},
						{
							"as" : 35018,
							"count" : 1
						},
						{
							"as" : 49170,
							"count" : 1
						},
						{
							"as" : 12668,
							"count" : 1
						},
						{
							"as" : 43317,
							"count" : 1
						},
						{
							"as" : 15756,
							"count" : 9
						},
						{
							"as" : 41854,
							"count" : 1
						},
						{
							"as" : 8359,
							"count" : 4
						},
						{
							"as" : 8997,
							"count" : 1
						},
						{
							"as" : 41786,
							"count" : 2
						},
						{
							"as" : 42682,
							"count" : 1
						},
						{
							"as" : 44604,
							"count" : 1
						},
						{
							"as" : 50716,
							"count" : 1
						},
						{
							"as" : 23242,
							"count" : 1
						},
						{
							"as" : 38951,
							"count" : 1
						},
						{
							"as" : 41691,
							"count" : 3
						},
						{
							"as" : 44734,
							"count" : 1
						},
						{
							"as" : 48209,
							"count" : 1
						},
						{
							"as" : 35271,
							"count" : 1
						},
						{
							"as" : 28968,
							"count" : 1
						},
						{
							"as" : 34757,
							"count" : 1
						},
						{
							"as" : 49335,
							"count" : 2
						},
						{
							"as" : 8331,
							"count" : 3
						},
						{
							"as" : 51953,
							"count" : 1
						},
						{
							"as" : 12714,
							"count" : 4
						},
						{
							"as" : 3226,
							"count" : 3
						},
						{
							"as" : 42116,
							"count" : 1
						},
						{
							"as" : 15682,
							"count" : 1
						},
						{
							"as" : 12768,
							"count" : 2
						},
						{
							"as" : 25408,
							"count" : 1
						},
						{
							"as" : 41440,
							"count" : 2
						},
						{
							"as" : 42322,
							"count" : 1
						},
						{
							"as" : 41704,
							"count" : 1
						},
						{
							"as" : 49776,
							"count" : 1
						},
						{
							"as" : 50543,
							"count" : 1
						},
						{
							"as" : 35807,
							"count" : 1
						},
						{
							"as" : 30936,
							"count" : 1
						},
						{
							"as" : 29194,
							"count" : 1
						},
						{
							"as" : 2854,
							"count" : 1
						},
						{
							"as" : 43146,
							"count" : 1
						},
						{
							"as" : 41727,
							"count" : 1
						},
						{
							"as" : 30881,
							"count" : 1
						},
						{
							"as" : 2578,
							"count" : 1
						},
						{
							"as" : 48781,
							"count" : 1
						},
						{
							"as" : 6828,
							"count" : 1
						},
						{
							"as" : 57668,
							"count" : 1
						},
						{
							"as" : 34232,
							"count" : 1
						},
						{
							"as" : 13304,
							"count" : 1
						},
						{
							"as" : 5563,
							"count" : 1
						},
						{
							"as" : 21127,
							"count" : 1
						},
						{
							"as" : 31214,
							"count" : 1
						},
						{
							"as" : 28745,
							"count" : 1
						},
						{
							"as" : 51032,
							"count" : 1
						},
						{
							"as" : 45051,
							"count" : 1
						},
						{
							"as" : 42575,
							"count" : 1
						},
						{
							"as" : 43362,
							"count" : 1
						},
						{
							"as" : 9082,
							"count" : 1
						},
						{
							"as" : 47165,
							"count" : 1
						},
						{
							"as" : 49120,
							"count" : 1
						},
						{
							"as" : 20597,
							"count" : 1
						},
						{
							"as" : 57378,
							"count" : 1
						},
						{
							"as" : 48361,
							"count" : 2
						},
						{
							"as" : 42893,
							"count" : 1
						},
						{
							"as" : 48416,
							"count" : 1
						},
						{
							"as" : 35411,
							"count" : 1
						},
						{
							"as" : 28917,
							"count" : 1
						},
						{
							"as" : 5495,
							"count" : 1
						},
						{
							"as" : 41661,
							"count" : 1
						},
						{
							"as" : 25405,
							"count" : 1
						},
						{
							"as" : 28812,
							"count" : 1
						},
						{
							"as" : 13118,
							"count" : 1
						},
						{
							"as" : 47241,
							"count" : 1
						}
					]
				},
				{
					"country" : "RO",
					"cbcc" : 0,
					"crcc" : 113,
					"relay" : 25,
					"guard" : 12,
					"middle" : 25,
					"exit" : 14,
					"dir" : 20,
					"bwa" : 144105512,
					"bwc" : 75604536,
					"pbr" : 0.018380000000000007,
					"pbg" : 0.010021,
					"pbm" : 0.009335000000000001,
					"pbe" : 0.03578300000000001,
					"fast" : 24,
					"stable" : 13,
					"osv" : {
						"linux" : 19,
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
						"v022" : 5,
						"v023" : 18,
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
							"as" : 8708,
							"count" : 7
						},
						{
							"as" : 39743,
							"count" : 9
						},
						{
							"as" : 6663,
							"count" : 1
						},
						{
							"as" : 38935,
							"count" : 2
						},
						{
							"as" : 9050,
							"count" : 1
						},
						{
							"as" : 6830,
							"count" : 2
						},
						{
							"as" : 34358,
							"count" : 1
						},
						{
							"as" : 41011,
							"count" : 1
						},
						{
							"as" : 57668,
							"count" : 1
						}
					]
				},
				{
					"country" : "KZ",
					"cbcc" : 0,
					"crcc" : 22,
					"relay" : 4,
					"guard" : 0,
					"middle" : 4,
					"exit" : 3,
					"dir" : 3,
					"bwa" : 285617,
					"bwc" : 38768,
					"pbr" : 0.0000049999999999999996,
					"pbg" : 0,
					"pbm" : 0.000007,
					"pbe" : 0.000009,
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
							"as" : 9198,
							"count" : 2
						},
						{
							"as" : 39725,
							"count" : 1
						},
						{
							"as" : 41371,
							"count" : 1
						}
					]
				},
				{
					"country" : "FI",
					"cbcc" : 0,
					"crcc" : 149,
					"relay" : 36,
					"guard" : 9,
					"middle" : 36,
					"exit" : 7,
					"dir" : 22,
					"bwa" : 12531118,
					"bwc" : 9631467,
					"pbr" : 0.0030279999999999994,
					"pbg" : 0.00256,
					"pbm" : 0.005206,
					"pbe" : 0.0013260000000000001,
					"fast" : 33,
					"stable" : 27,
					"osv" : {
						"linux" : 31,
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
						"v023" : 25,
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
							"as" : 29422,
							"count" : 4
						},
						{
							"as" : 16086,
							"count" : 11
						},
						{
							"as" : 24751,
							"count" : 1
						},
						{
							"as" : 719,
							"count" : 7
						},
						{
							"as" : 13276,
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
							"as" : 1759,
							"count" : 5
						},
						{
							"as" : 3292,
							"count" : 1
						},
						{
							"as" : 20931,
							"count" : 1
						},
						{
							"as" : 35382,
							"count" : 1
						},
						{
							"as" : 50503,
							"count" : 1
						}
					]
				},
				{
					"country" : "NO",
					"cbcc" : 0,
					"crcc" : 106,
					"relay" : 32,
					"guard" : 10,
					"middle" : 32,
					"exit" : 3,
					"dir" : 16,
					"bwa" : 66205895,
					"bwc" : 52027049,
					"pbr" : 0.015657,
					"pbg" : 0.025952999999999997,
					"pbm" : 0.020930999999999998,
					"pbe" : 0.000079,
					"fast" : 32,
					"stable" : 15,
					"osv" : {
						"linux" : 28,
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
						"v023" : 24,
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
							"as" : 2119,
							"count" : 4
						},
						{
							"as" : 57381,
							"count" : 1
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
							"as" : 8896,
							"count" : 1
						},
						{
							"as" : 16186,
							"count" : 2
						},
						{
							"as" : 29695,
							"count" : 1
						},
						{
							"as" : 2116,
							"count" : 1
						}
					]
				},
				{
					"country" : "TR",
					"cbcc" : 1,
					"crcc" : 144,
					"relay" : 5,
					"guard" : 2,
					"middle" : 5,
					"exit" : 5,
					"dir" : 1,
					"bwa" : 9831010,
					"bwc" : 6790678,
					"pbr" : 0.0022890000000000002,
					"pbg" : 0.0013059999999999999,
					"pbm" : 0.0013059999999999999,
					"pbe" : 0.0042569999999999995,
					"fast" : 5,
					"stable" : 5,
					"osv" : {
						"linux" : 5,
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
						"v023" : 3,
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
							"as" : 42926,
							"count" : 2
						},
						{
							"as" : 39582,
							"count" : 2
						},
						{
							"as" : 44565,
							"count" : 1
						}
					]
				},
				{
					"country" : "ES",
					"cbcc" : 3,
					"crcc" : 2608,
					"relay" : 27,
					"guard" : 2,
					"middle" : 27,
					"exit" : 7,
					"dir" : 16,
					"bwa" : 3263369,
					"bwc" : 948878,
					"pbr" : 0.0005039999999999999,
					"pbg" : 0.000129,
					"pbm" : 0.00038400000000000006,
					"pbe" : 0.000998,
					"fast" : 21,
					"stable" : 8,
					"osv" : {
						"linux" : 20,
						"darwin" : 0,
						"freebsd" : 0,
						"windows" : 7,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 8,
						"v023" : 19,
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
							"as" : 12479,
							"count" : 2
						},
						{
							"as" : 6739,
							"count" : 4
						},
						{
							"as" : 766,
							"count" : 3
						},
						{
							"as" : 3352,
							"count" : 6
						},
						{
							"as" : 12338,
							"count" : 1
						},
						{
							"as" : 12334,
							"count" : 1
						},
						{
							"as" : 43988,
							"count" : 1
						},
						{
							"as" : 53264,
							"count" : 1
						},
						{
							"as" : 12357,
							"count" : 1
						}
					]
				},
				{
					"country" : "SG",
					"cbcc" : 0,
					"crcc" : 69,
					"relay" : 15,
					"guard" : 9,
					"middle" : 15,
					"exit" : 4,
					"dir" : 10,
					"bwa" : 7378031,
					"bwc" : 2133099,
					"pbr" : 0.000467,
					"pbg" : 0.000616,
					"pbm" : 0.00038399999999999996,
					"pbe" : 0.000403,
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
							"as" : 38895,
							"count" : 4
						},
						{
							"as" : 55430,
							"count" : 1
						},
						{
							"as" : 18106,
							"count" : 2
						},
						{
							"as" : 36351,
							"count" : 4
						},
						{
							"as" : 9506,
							"count" : 1
						},
						{
							"as" : 37989,
							"count" : 1
						},
						{
							"as" : 17547,
							"count" : 1
						},
						{
							"as" : 4844,
							"count" : 1
						}
					]
				},
				{
					"country" : "JP",
					"cbcc" : 3,
					"crcc" : 474,
					"relay" : 42,
					"guard" : 10,
					"middle" : 42,
					"exit" : 6,
					"dir" : 25,
					"bwa" : 14583657,
					"bwc" : 5485615,
					"pbr" : 0.0010469999999999998,
					"pbg" : 0.00101,
					"pbm" : 0.001035,
					"pbe" : 0.001101,
					"fast" : 41,
					"stable" : 30,
					"osv" : {
						"linux" : 20,
						"darwin" : 1,
						"freebsd" : 2,
						"windows" : 19,
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
							"as" : 17511,
							"count" : 2
						},
						{
							"as" : 2527,
							"count" : 3
						},
						{
							"as" : 2516,
							"count" : 8
						},
						{
							"as" : 9351,
							"count" : 1
						},
						{
							"as" : 4725,
							"count" : 1
						},
						{
							"as" : 2497,
							"count" : 2
						},
						{
							"as" : 18126,
							"count" : 1
						},
						{
							"as" : 17676,
							"count" : 3
						},
						{
							"as" : 2518,
							"count" : 2
						},
						{
							"as" : 16509,
							"count" : 2
						},
						{
							"as" : 9617,
							"count" : 1
						},
						{
							"as" : 9371,
							"count" : 4
						},
						{
							"as" : 2514,
							"count" : 2
						},
						{
							"as" : 2510,
							"count" : 1
						},
						{
							"as" : 17931,
							"count" : 1
						},
						{
							"as" : 55897,
							"count" : 1
						},
						{
							"as" : 9365,
							"count" : 1
						},
						{
							"as" : 4685,
							"count" : 1
						}
					]
				},
				{
					"country" : "PL",
					"cbcc" : 1,
					"crcc" : 555,
					"relay" : 43,
					"guard" : 16,
					"middle" : 43,
					"exit" : 10,
					"dir" : 26,
					"bwa" : 33074074,
					"bwc" : 19954033,
					"pbr" : 0.006049000000000001,
					"pbg" : 0.007487000000000001,
					"pbm" : 0.0056110000000000005,
					"pbe" : 0.005046,
					"fast" : 38,
					"stable" : 30,
					"osv" : {
						"linux" : 33,
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
						"v022" : 9,
						"v023" : 29,
						"v024" : 5
					},
					"pex" : {
						"p4" : 9,
						"p6" : 10,
						"p8" : 10,
						"p46" : 9,
						"p48" : 9,
						"p68" : 10,
						"p468" : 9
					},
					"autosys" : [
						{
							"as" : 6830,
							"count" : 16
						},
						{
							"as" : 31229,
							"count" : 1
						},
						{
							"as" : 41508,
							"count" : 1
						},
						{
							"as" : 35274,
							"count" : 1
						},
						{
							"as" : 12741,
							"count" : 3
						},
						{
							"as" : 198414,
							"count" : 2
						},
						{
							"as" : 9112,
							"count" : 1
						},
						{
							"as" : 16276,
							"count" : 1
						},
						{
							"as" : 51290,
							"count" : 4
						},
						{
							"as" : 197226,
							"count" : 1
						},
						{
							"as" : 5617,
							"count" : 3
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
							"as" : 13110,
							"count" : 1
						},
						{
							"as" : 41966,
							"count" : 1
						},
						{
							"as" : 6714,
							"count" : 1
						},
						{
							"as" : 47544,
							"count" : 1
						},
						{
							"as" : 51399,
							"count" : 1
						},
						{
							"as" : 15969,
							"count" : 1
						}
					]
				},
				{
					"country" : "UA",
					"cbcc" : 1,
					"crcc" : 1309,
					"relay" : 41,
					"guard" : 10,
					"middle" : 41,
					"exit" : 18,
					"dir" : 24,
					"bwa" : 24717936,
					"bwc" : 13375978,
					"pbr" : 0.004201000000000001,
					"pbg" : 0.0024360000000000002,
					"pbm" : 0.0051280000000000015,
					"pbe" : 0.005043,
					"fast" : 33,
					"stable" : 21,
					"osv" : {
						"linux" : 23,
						"darwin" : 0,
						"freebsd" : 3,
						"windows" : 14,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 16,
						"v023" : 25,
						"v024" : 0
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
							"as" : 56950,
							"count" : 1
						},
						{
							"as" : 42352,
							"count" : 4
						},
						{
							"as" : 15497,
							"count" : 2
						},
						{
							"as" : 35816,
							"count" : 1
						},
						{
							"as" : 197145,
							"count" : 1
						},
						{
							"as" : 25229,
							"count" : 2
						},
						{
							"as" : 31343,
							"count" : 1
						},
						{
							"as" : 6849,
							"count" : 3
						},
						{
							"as" : 47678,
							"count" : 1
						},
						{
							"as" : 6703,
							"count" : 1
						},
						{
							"as" : 48683,
							"count" : 1
						},
						{
							"as" : 34743,
							"count" : 1
						},
						{
							"as" : 13188,
							"count" : 2
						},
						{
							"as" : 21261,
							"count" : 1
						},
						{
							"as" : 6876,
							"count" : 2
						},
						{
							"as" : 15895,
							"count" : 1
						},
						{
							"as" : 42336,
							"count" : 1
						},
						{
							"as" : 41665,
							"count" : 1
						},
						{
							"as" : 29632,
							"count" : 1
						},
						{
							"as" : 39608,
							"count" : 2
						},
						{
							"as" : 196705,
							"count" : 1
						},
						{
							"as" : 15626,
							"count" : 1
						},
						{
							"as" : 197015,
							"count" : 1
						},
						{
							"as" : 21310,
							"count" : 1
						},
						{
							"as" : 29685,
							"count" : 1
						},
						{
							"as" : 12530,
							"count" : 1
						},
						{
							"as" : 31148,
							"count" : 2
						},
						{
							"as" : 48031,
							"count" : 2
						},
						{
							"as" : 25071,
							"count" : 1
						}
					]
				},
				{
					"country" : "CZ",
					"cbcc" : 0,
					"crcc" : 222,
					"relay" : 75,
					"guard" : 27,
					"middle" : 75,
					"exit" : 43,
					"dir" : 36,
					"bwa" : 61036303,
					"bwc" : 41502304,
					"pbr" : 0.017281,
					"pbg" : 0.020027,
					"pbm" : 0.012184000000000006,
					"pbe" : 0.019628,
					"fast" : 51,
					"stable" : 55,
					"osv" : {
						"linux" : 67,
						"darwin" : 1,
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
						"v022" : 23,
						"v023" : 48,
						"v024" : 4
					},
					"pex" : {
						"p4" : 43,
						"p6" : 38,
						"p8" : 42,
						"p46" : 38,
						"p48" : 42,
						"p68" : 37,
						"p468" : 37
					},
					"autosys" : [
						{
							"as" : 30058,
							"count" : 22
						},
						{
							"as" : 6830,
							"count" : 12
						},
						{
							"as" : 15685,
							"count" : 1
						},
						{
							"as" : 35592,
							"count" : 6
						},
						{
							"as" : 29113,
							"count" : 4
						},
						{
							"as" : 24971,
							"count" : 4
						},
						{
							"as" : 5610,
							"count" : 3
						},
						{
							"as" : 2852,
							"count" : 2
						},
						{
							"as" : 197019,
							"count" : 8
						},
						{
							"as" : 197451,
							"count" : 1
						},
						{
							"as" : 24806,
							"count" : 1
						},
						{
							"as" : 2819,
							"count" : 1
						},
						{
							"as" : 43541,
							"count" : 4
						},
						{
							"as" : 31246,
							"count" : 1
						},
						{
							"as" : 34315,
							"count" : 1
						},
						{
							"as" : 48926,
							"count" : 1
						},
						{
							"as" : 20723,
							"count" : 1
						},
						{
							"as" : 30764,
							"count" : 1
						},
						{
							"as" : 29208,
							"count" : 1
						}
					]
				},
				{
					"country" : "IT",
					"cbcc" : 4,
					"crcc" : 3802,
					"relay" : 51,
					"guard" : 13,
					"middle" : 51,
					"exit" : 5,
					"dir" : 20,
					"bwa" : 10900201,
					"bwc" : 6981974,
					"pbr" : 0.0016179999999999999,
					"pbg" : 0.0018250000000000002,
					"pbm" : 0.002781999999999999,
					"pbe" : 0.00024300000000000002,
					"fast" : 33,
					"stable" : 24,
					"osv" : {
						"linux" : 40,
						"darwin" : 0,
						"freebsd" : 2,
						"windows" : 9,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 9,
						"v023" : 35,
						"v024" : 7
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
							"as" : 34971,
							"count" : 10
						},
						{
							"as" : 3269,
							"count" : 11
						},
						{
							"as" : 1267,
							"count" : 3
						},
						{
							"as" : 137,
							"count" : 6
						},
						{
							"as" : 35612,
							"count" : 3
						},
						{
							"as" : 8612,
							"count" : 3
						},
						{
							"as" : 12874,
							"count" : 7
							},
						{
							"as" : 16276,
							"count" : 1
						},
						{
							"as" : 5602,
							"count" : 2
						},
						{
							"as" : 24940,
							"count" : 1
						},
						{
							"as" : 8928,
							"count" : 1
						},
						{
							"as" : 44957,
							"count" : 2
						},
						{
							"as" : 31103,
							"count" : 1
						}
					]
				},
				{
					"country" : "CH",
					"cbcc" : 1,
					"crcc" : 229,
					"relay" : 42,
					"guard" : 17,
					"middle" : 42,
					"exit" : 18,
					"dir" : 28,
					"bwa" : 56644803,
					"bwc" : 41367506,
					"pbr" : 0.020025,
					"pbg" : 0.018376,
					"pbm" : 0.015084000000000004,
					"pbe" : 0.026625999999999997,
					"fast" : 41,
					"stable" : 35,
					"osv" : {
						"linux" : 34,
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
						"v023" : 34,
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
							"as" : 13030,
							"count" : 9
						},
						{
							"as" : 3303,
							"count" : 5
						},
						{
							"as" : 6893,
							"count" : 3
						},
						{
							"as" : 6830,
							"count" : 15
						},
						{
							"as" : 31736,
							"count" : 1
						},
						{
							"as" : 1836,
							"count" : 2
						},
						{
							"as" : 29691,
							"count" : 3
						},
						{
							"as" : 15517,
							"count" : 1
						},
						{
							"as" : 21069,
							"count" : 1
						},
						{
							"as" : 9044,
							"count" : 1
						},
						{
							"as" : 41715,
							"count" : 1
						}
					]
				},
				{
					"country" : "PA",
					"cbcc" : 0,
					"crcc" : 16,
					"relay" : 6,
					"guard" : 0,
					"middle" : 6,
					"exit" : 1,
					"dir" : 4,
					"bwa" : 452490,
					"bwc" : 166127,
					"pbr" : 0.000014000000000000001,
					"pbg" : 0,
					"pbm" : 0.000019,
					"pbe" : 0.000025,
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
					"country" : "LU",
					"cbcc" : 0,
					"crcc" : 40,
					"relay" : 32,
					"guard" : 9,
					"middle" : 32,
					"exit" : 20,
					"dir" : 12,
					"bwa" : 15381874,
					"bwc" : 9505512,
					"pbr" : 0.0032119999999999996,
					"pbg" : 0.004849000000000001,
					"pbm" : 0.004248,
					"pbe" : 0.000535,
					"fast" : 15,
					"stable" : 23,
					"osv" : {
						"linux" : 30,
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
						"v022" : 17,
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
							"count" : 29
						},
						{
							"as" : 9008,
							"count" : 2
						},
						{
							"as" : 6661,
							"count" : 1
						}
					]
				},
				{
					"country" : "DK",
					"cbcc" : 1,
					"crcc" : 110,
					"relay" : 30,
					"guard" : 11,
					"middle" : 30,
					"exit" : 14,
					"dir" : 24,
					"bwa" : 38469431,
					"bwc" : 27673966,
					"pbr" : 0.010594999999999997,
					"pbg" : 0.008582,
					"pbm" : 0.008366000000000002,
					"pbe" : 0.014835999999999998,
					"fast" : 30,
					"stable" : 19,
					"osv" : {
						"linux" : 23,
						"darwin" : 1,
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
						"v022" : 5,
						"v023" : 24,
						"v024" : 1
					},
					"pex" : {
						"p4" : 14,
						"p6" : 14,
						"p8" : 13,
						"p46" : 14,
						"p48" : 13,
						"p68" : 13,
						"p468" : 13
					},
					"autosys" : [
						{
							"as" : 34823,
							"count" : 3
						},
						{
							"as" : 3292,
							"count" : 8
						},
						{
							"as" : 16245,
							"count" : 1
						},
						{
							"as" : 39554,
							"count" : 3
						},
						{
							"as" : 59469,
							"count" : 1
						},
						{
							"as" : 9158,
							"count" : 3
						},
						{
							"as" : 35637,
							"count" : 1
						},
						{
							"as" : 57735,
							"count" : 1
						},
						{
							"as" : 197288,
							"count" : 4
						},
						{
							"as" : 28717,
							"count" : 1
						},
						{
							"as" : 1835,
							"count" : 1
						},
						{
							"as" : 35376,
							"count" : 1
						},
						{
							"as" : 197301,
							"count" : 1
						},
						{
							"as" : 31661,
							"count" : 1
						}
					]
				},
				{
					"country" : "BE",
					"cbcc" : 0,
					"crcc" : 222,
					"relay" : 18,
					"guard" : 0,
					"middle" : 18,
					"exit" : 2,
					"dir" : 8,
					"bwa" : 2216121,
					"bwc" : 880690,
					"pbr" : 0.000262,
					"pbg" : 0,
					"pbm" : 0.000753,
					"pbe" : 0.000034,
					"fast" : 16,
					"stable" : 6,
					"osv" : {
						"linux" : 16,
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
						"v023" : 15,
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
							"as" : 5432,
							"count" : 6
						},
						{
							"as" : 9031,
							"count" : 4
						},
						{
							"as" : 42160,
							"count" : 2
						},
						{
							"as" : 12392,
							"count" : 1
						},
						{
							"as" : 29587,
							"count" : 1
						},
						{
							"as" : 16276,
							"count" : 1
						},
						{
							"as" : 31669,
							"count" : 1
						},
						{
							"as" : 6848,
							"count" : 2
						}
					]
				},
				{
					"country" : "SK",
					"cbcc" : 0,
					"crcc" : 59,
					"relay" : 16,
					"guard" : 4,
					"middle" : 16,
					"exit" : 4,
					"dir" : 10,
					"bwa" : 18843818,
					"bwc" : 11738204,
					"pbr" : 0.006088,
					"pbg" : 0.011009000000000001,
					"pbm" : 0.006111999999999999,
					"pbe" : 0.0011429999999999997,
					"fast" : 15,
					"stable" : 10,
					"osv" : {
						"linux" : 12,
						"darwin" : 0,
						"freebsd" : 1,
						"windows" : 3,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 4,
						"v023" : 11,
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
							"as" : 6830,
							"count" : 5
						},
						{
							"as" : 6855,
							"count" : 2
						},
						{
							"as" : 51013,
							"count" : 1
						},
						{
							"as" : 29405,
							"count" : 1
						},
						{
							"as" : 42005,
							"count" : 1
						},
						{
							"as" : 15962,
							"count" : 3
						},
						{
							"as" : 2607,
							"count" : 1
						},
						{
							"as" : 48133,
							"count" : 1
						},
						{
							"as" : 44185,
							"count" : 1
						}
					]
				},
				{
					"country" : "ZA",
					"cbcc" : 0,
					"crcc" : 60,
					"relay" : 5,
					"guard" : 0,
					"middle" : 5,
					"exit" : 3,
					"dir" : 2,
					"bwa" : 277616,
					"bwc" : 27877,
					"pbr" : 0.000017999999999999997,
					"pbg" : 0,
					"pbm" : 0.000018,
					"pbe" : 0.000037000000000000005,
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
							"as" : 5713,
							"count" : 1
						},
						{
							"as" : 16637,
							"count" : 4
						}
					]
				},
				{
					"country" : "AU",
					"cbcc" : 2,
					"crcc" : 395,
					"relay" : 36,
					"guard" : 5,
					"middle" : 36,
					"exit" : 14,
					"dir" : 22,
					"bwa" : 6195003,
					"bwc" : 978585,
					"pbr" : 0.0005679999999999999,
					"pbg" : 0.000274,
					"pbm" : 0.00027900000000000006,
					"pbe" : 0.001144,
					"fast" : 27,
					"stable" : 23,
					"osv" : {
						"linux" : 21,
						"darwin" : 0,
						"freebsd" : 5,
						"windows" : 10,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 8,
						"v023" : 28,
						"v024" : 0
					},
					"pex" : {
						"p4" : 14,
						"p6" : 13,
						"p8" : 14,
						"p46" : 13,
						"p48" : 14,
						"p68" : 13,
						"p468" : 13
					},
					"autosys" : [
						{
							"as" : 10143,
							"count" : 2
						},
						{
							"as" : 38285,
							"count" : 2
						},
						{
							"as" : 4802,
							"count" : 2
						},
						{
							"as" : 7545,
							"count" : 3
						},
						{
							"as" : 7600,
							"count" : 1
						},
						{
							"as" : 45454,
							"count" : 1
						},
						{
							"as" : 45570,
							"count" : 3
						},
						{
							"as" : 4739,
							"count" : 7
						},
						{
							"as" : 9482,
							"count" : 2
						},
						{
							"as" : 2764,
							"count" : 1
						},
						{
							"as" : 1221,
							"count" : 4
						},
						{
							"as" : 17486,
							"count" : 1
						},
						{
							"as" : 9822,
							"count" : 2
						},
						{
							"as" : 24238,
							"count" : 1
						},
						{
							"as" : 9556,
							"count" : 1
						},
						{
							"as" : 36352,
							"count" : 1
						},
						{
							"as" : 16509,
							"count" : 1
						},
						{
							"as" : 38657,
							"count" : 1
						}
					]
				},
				{
					"country" : "HU",
					"cbcc" : 0,
					"crcc" : 103,
					"relay" : 19,
					"guard" : 7,
					"middle" : 19,
					"exit" : 3,
					"dir" : 16,
					"bwa" : 26859803,
					"bwc" : 18230946,
					"pbr" : 0.004698999999999999,
					"pbg" : 0.008245,
					"pbm" : 0.0050279999999999995,
					"pbe" : 0.000822,
					"fast" : 19,
					"stable" : 11,
					"osv" : {
						"linux" : 14,
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
						"v022" : 1,
						"v023" : 18,
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
							"as" : 5483,
							"count" : 4
						},
						{
							"as" : 15467,
							"count" : 1
						},
						{
							"as" : 6830,
							"count" : 6
						},
						{
							"as" : 42964,
							"count" : 1
						},
						{
							"as" : 56322,
							"count" : 3
						},
						{
							"as" : 43711,
							"count" : 1
						},
						{
							"as" : 34655,
							"count" : 1
						},
						{
							"as" : 29278,
							"count" : 1
						},
						{
							"as" : 2012,
							"count" : 1
						}
					]
				},
				{
					"country" : "HK",
					"cbcc" : 0,
					"crcc" : 54,
					"relay" : 9,
					"guard" : 4,
					"middle" : 9,
					"exit" : 4,
					"dir" : 5,
					"bwa" : 2267826,
					"bwc" : 493262,
					"pbr" : 0.000167,
					"pbg" : 0.000142,
					"pbm" : 0.00013199999999999998,
					"pbe" : 0.00022600000000000002,
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
							"as" : 9304,
							"count" : 1
						},
						{
							"as" : 45753,
							"count" : 1
						},
						{
							"as" : 9269,
							"count" : 1
						},
						{
							"as" : 36236,
							"count" : 1
						},
						{
							"as" : 38478,
							"count" : 1
						},
						{
							"as" : 10103,
							"count" : 1
						},
						{
							"as" : 4760,
							"count" : 1
						},
						{
							"as" : 24544,
							"count" : 1
						},
						{
							"as" : 4658,
							"count" : 1
						}
					]
				},
				{
					"country" : "BR",
					"cbcc" : 2,
					"crcc" : 1079,
					"relay" : 23,
					"guard" : 0,
					"middle" : 23,
					"exit" : 8,
					"dir" : 19,
					"bwa" : 2366966,
					"bwc" : 265562,
					"pbr" : 0.00010100000000000002,
					"pbg" : 0,
					"pbm" : 0.00021199999999999998,
					"pbe" : 0.000091,
					"fast" : 17,
					"stable" : 5,
					"osv" : {
						"linux" : 13,
						"darwin" : 0,
						"freebsd" : 1,
						"windows" : 9,
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
						"v024" : 1
					},
					"pex" : {
						"p4" : 8,
						"p6" : 8,
						"p8" : 8,
						"p46" : 8,
						"p48" : 8,
						"p68" : 8,
						"p468" : 8
					},
					"autosys" : [
						{
							"as" : 53111,
							"count" : 1
						},
						{
							"as" : 16509,
							"count" : 1
						},
						{
							"as" : 26599,
							"count" : 3
						},
						{
							"as" : 7738,
							"count" : 1
						},
						{
							"as" : 28573,
							"count" : 6
						},
						{
							"as" : 8167,
							"count" : 4
						},
						{
							"as" : 27699,
							"count" : 1
						},
						{
							"as" : 262868,
							"count" : 1
						},
						{
							"as" : 18881,
							"count" : 3
						},
						{
							"as" : 28625,
							"count" : 1
						},
						{
							"as" : 19182,
							"count" : 1
						}
					]
				},
				{
					"country" : "PK",
					"cbcc" : 1,
					"crcc" : 94,
					"relay" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1,
					"bwa" : 137661,
					"bwc" : 78114,
					"pbr" : 0.000009,
					"pbg" : 0,
					"pbm" : 0.000009,
					"pbe" : 0.000018,
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
							"as" : 23674,
							"count" : 1
						},
						{
							"as" : 45595,
							"count" : 1
						}
					]
				},
				{
					"country" : "CN",
					"cbcc" : 2,
					"crcc" : 43,
					"relay" : 4,
					"guard" : 0,
					"middle" : 4,
					"exit" : 3,
					"dir" : 1,
					"bwa" : 440320,
					"bwc" : 164738,
					"pbr" : 0.000052,
					"pbg" : 0,
					"pbm" : 0.000024,
					"pbe" : 0.000129,
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
					"country" : "IS",
					"cbcc" : 0,
					"crcc" : 19,
					"relay" : 14,
					"guard" : 3,
					"middle" : 14,
					"exit" : 7,
					"dir" : 7,
					"bwa" : 10419232,
					"bwc" : 7543439,
					"pbr" : 0.003002,
					"pbg" : 0.004016,
					"pbm" : 0.002385,
					"pbe" : 0.002605,
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
							"as" : 51969,
							"count" : 1
						},
						{
							"as" : 44432,
							"count" : 1
						}
					]
				},
				{
					"country" : "AR",
					"cbcc" : 0,
					"crcc" : 311,
					"relay" : 9,
					"guard" : 3,
					"middle" : 9,
					"exit" : 5,
					"dir" : 3,
					"bwa" : 2114498,
					"bwc" : 1153006,
					"pbr" : 0.00039799999999999997,
					"pbg" : 0.000225,
					"pbm" : 0.000238,
					"pbe" : 0.000729,
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
							"as" : 7303,
							"count" : 1
						},
						{
							"as" : 27747,
							"count" : 1
						},
						{
							"as" : 10834,
							"count" : 1
						},
						{
							"as" : 3549,
							"count" : 1
						},
						{
							"as" : 10481,
							"count" : 2
						},
						{
							"as" : 20207,
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
					"country" : "EG",
					"cbcc" : 2,
					"crcc" : 114,
					"relay" : 4,
					"guard" : 2,
					"middle" : 4,
					"exit" : 1,
					"dir" : 2,
					"bwa" : 537600,
					"bwc" : 269062,
					"pbr" : 0.000037000000000000005,
					"pbg" : 0.000051,
					"pbm" : 0.000054,
					"pbe" : 0.000009,
					"fast" : 3,
					"stable" : 3,
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
						"v022" : 2,
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
							"as" : 33785,
							"count" : 3
						},
						{
							"as" : 24863,
							"count" : 1
						}
					]
				},
				{
					"country" : "KH",
					"cbcc" : 0,
					"crcc" : 8,
					"relay" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"bwa" : 667724,
					"bwc" : 386488,
					"pbr" : 0.000054,
					"pbg" : 0.000031,
					"pbm" : 0.000031,
					"pbe" : 0.0001,
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
					"country" : "IL",
					"cbcc" : 1,
					"crcc" : 496,
					"relay" : 17,
					"guard" : 8,
					"middle" : 17,
					"exit" : 2,
					"dir" : 12,
					"bwa" : 8207639,
					"bwc" : 4758803,
					"pbr" : 0.001335,
					"pbg" : 0.0026939999999999998,
					"pbm" : 0.001298,
					"pbe" : 0.000016,
					"fast" : 15,
					"stable" : 10,
					"osv" : {
						"linux" : 13,
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
						"v022" : 9,
						"v023" : 6,
						"v024" : 2
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
							"as" : 8551,
							"count" : 9
						},
						{
							"as" : 50463,
							"count" : 1
						},
						{
							"as" : 1680,
							"count" : 6
						},
						{
							"as" : 12400,
							"count" : 1
						}
					]
				},
				{
					"country" : "TW",
					"cbcc" : 0,
					"crcc" : 304,
					"relay" : 7,
					"guard" : 0,
					"middle" : 7,
					"exit" : 3,
					"dir" : 4,
					"bwa" : 2466920,
					"bwc" : 248033,
					"pbr" : 0.00012000000000000002,
					"pbg" : 0,
					"pbm" : 0.00031999999999999997,
					"pbe" : 0.000041,
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
							"as" : 9916,
							"count" : 2
						},
						{
							"as" : 3462,
							"count" : 4
						},
						{
							"as" : 18047,
							"count" : 1
						}
					]
				},
				{
					"country" : "ID",
					"cbcc" : 3,
					"crcc" : 102,
					"relay" : 3,
					"guard" : 0,
					"middle" : 3,
					"exit" : 2,
					"dir" : 1,
					"bwa" : 408904,
					"bwc" : 24365,
					"pbr" : 0.000015,
					"pbg" : 0,
					"pbm" : 0.000009,
					"pbe" : 0.000038,
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
							"as" : 45711,
							"count" : 1
						},
						{
							"as" : 58553,
							"count" : 1
						},
						{
							"as" : 18059,
							"count" : 1
						}
					]
				},
				{
					"country" : "BY",
					"cbcc" : 1,
					"crcc" : 95,
					"relay" : 3,
					"guard" : 0,
					"middle" : 3,
					"exit" : 1,
					"dir" : 2,
					"bwa" : 368640,
					"bwc" : 928,
					"pbr" : 0.00001,
					"pbg" : 0,
					"pbm" : 0.000029,
					"pbe" : 0.000001,
					"fast" : 3,
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
						"v022" : 1,
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
							"as" : 12406,
							"count" : 1
						},
						{
							"as" : 12358,
							"count" : 1
						},
						{
							"as" : 6697,
							"count" : 1
						}
					]
				},
				{
					"country" : "LV",
					"cbcc" : 0,
					"crcc" : 30,
					"relay" : 8,
					"guard" : 2,
					"middle" : 8,
					"exit" : 3,
					"dir" : 6,
					"bwa" : 3215313,
					"bwc" : 2906128,
					"pbr" : 0.0008790000000000001,
					"pbg" : 0.0006640000000000001,
					"pbm" : 0.00192,
					"pbe" : 0.000049999999999999996,
					"fast" : 7,
					"stable" : 7,
					"osv" : {
						"linux" : 7,
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
						"v022" : 3,
						"v023" : 5,
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
							"as" : 12578,
							"count" : 2
						},
						{
							"as" : 56617,
							"count" : 1
						},
						{
							"as" : 12993,
							"count" : 1
						},
						{
							"as" : 52048,
							"count" : 2
						},
						{
							"as" : 20910,
							"count" : 1
						},
						{
							"as" : 6851,
							"count" : 1
						}
					]
				},
				{
					"country" : "EU",
					"cbcc" : 0,
					"crcc" : 32,
					"relay" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"bwa" : 83113,
					"bwc" : 7826,
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
					"country" : "CR",
					"cbcc" : 0,
					"crcc" : 21,
					"relay" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"bwa" : 102400,
					"bwc" : 73265,
					"pbr" : 0.000011,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000033,
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
					"country" : "EE",
					"cbcc" : 0,
					"crcc" : 33,
					"relay" : 4,
					"guard" : 1,
					"middle" : 4,
					"exit" : 2,
					"dir" : 3,
					"bwa" : 7573854,
					"bwc" : 5152488,
					"pbr" : 0.000965,
					"pbg" : 0.001945,
					"pbm" : 0.000907,
					"pbe" : 0.000041,
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
							"as" : 34702,
							"count" : 1
						},
						{
							"as" : 39301,
							"count" : 1
						},
						{
							"as" : 2586,
							"count" : 2
						}
					]
				},
				{
					"country" : "IN",
					"cbcc" : 6,
					"crcc" : 620,
					"relay" : 11,
					"guard" : 2,
					"middle" : 11,
					"exit" : 7,
					"dir" : 7,
					"bwa" : 2829643,
					"bwc" : 781731,
					"pbr" : 0.00011800000000000004,
					"pbg" : 0.000183,
					"pbm" : 0.0001,
					"pbe" : 0.000068,
					"fast" : 10,
					"stable" : 3,
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
						"v022" : 0,
						"v023" : 10,
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
							"as" : 24309,
							"count" : 1
						},
						{
							"as" : 55470,
							"count" : 1
						},
						{
							"as" : 17813,
							"count" : 6
						},
						{
							"as" : 24560,
							"count" : 1
						},
						{
							"as" : 55740,
							"count" : 1
						},
						{
							"as" : 33480,
							"count" : 1
						}
					]
				},
				{
					"country" : "BA",
					"cbcc" : 0,
					"crcc" : 11,
					"relay" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1,
					"bwa" : 73728,
					"bwc" : 5819,
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
							"as" : 198252,
							"count" : 1
						},
						{
							"as" : 21107,
							"count" : 1
						}
					]
				},
				{
					"country" : "KR",
					"cbcc" : 1,
					"crcc" : 526,
					"relay" : 6,
					"guard" : 2,
					"middle" : 6,
					"exit" : 1,
					"dir" : 5,
					"bwa" : 2027309,
					"bwc" : 510505,
					"pbr" : 0.000095,
					"pbg" : 0.000156,
					"pbm" : 0.00010199999999999999,
					"pbe" : 0.000024,
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
							"as" : 17858,
							"count" : 1
						},
						{
							"as" : 9318,
							"count" : 2
						}
					]
				},
				{
					"country" : "IE",
					"cbcc" : 0,
					"crcc" : 92,
					"relay" : 9,
					"guard" : 3,
					"middle" : 9,
					"exit" : 2,
					"dir" : 4,
					"bwa" : 2942788,
					"bwc" : 1240323,
					"pbr" : 0.000281,
					"pbg" : 0.000143,
					"pbm" : 0.00041099999999999996,
					"pbe" : 0.000287,
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
							"as" : 16276,
							"count" : 4
						},
						{
							"as" : 31122,
							"count" : 1
						},
						{
							"as" : 16509,
							"count" : 4
						}
					]
				},
				{
					"country" : "SA",
					"cbcc" : 2,
					"crcc" : 510,
					"relay" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"bwa" : 97592,
					"bwc" : 7362,
					"pbr" : 0.000004,
					"pbg" : 0,
					"pbm" : 0.000013000000000000001,
					"pbe" : 0,
					"fast" : 2,
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
							"as" : 35819,
							"count" : 1
						},
						{
							"as" : 25019,
							"count" : 1
						}
					]
				},
				{
					"country" : "TN",
					"cbcc" : 0,
					"crcc" : 42,
					"relay" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"bwa" : 51200,
					"bwc" : 178,
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
					"country" : "SI",
					"cbcc" : 0,
					"crcc" : 57,
					"relay" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 1,
					"dir" : 2,
					"bwa" : 1123724,
					"bwc" : 433515,
					"pbr" : 0.000145,
					"pbg" : 0,
					"pbm" : 0.00034,
					"pbe" : 0.000095,
					"fast" : 2,
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
					"country" : "CO",
					"cbcc" : 0,
					"crcc" : 79,
					"relay" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 2,
					"dir" : 1,
					"bwa" : 141834,
					"bwc" : 33654,
					"pbr" : 0.000008000000000000001,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000023,
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
							"as" : 13489,
							"count" : 1
						},
						{
							"as" : 27992,
							"count" : 1
						}
					]
				},
				{
					"country" : "TH",
					"cbcc" : 1,
					"crcc" : 133,
					"relay" : 3,
					"guard" : 0,
					"middle" : 3,
					"exit" : 0,
					"dir" : 2,
					"bwa" : 182227,
					"bwc" : 38809,
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
							"as" : 45758,
							"count" : 1
						},
						{
							"as" : 9737,
							"count" : 1
						},
						{
							"as" : 4765,
							"count" : 1
						}
					]
				},
				{
					"country" : "PT",
					"cbcc" : 0,
					"crcc" : 196,
					"relay" : 7,
					"guard" : 1,
					"middle" : 7,
					"exit" : 4,
					"dir" : 6,
					"bwa" : 1177103,
					"bwc" : 390782,
					"pbr" : 0.000115,
					"pbg" : 0.000014,
					"pbm" : 0.000082,
					"pbe" : 0.000248,
					"fast" : 6,
					"stable" : 0,
					"osv" : {
						"linux" : 2,
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
						"v022" : 1,
						"v023" : 6,
						"v024" : 0
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
							"as" : 3243,
							"count" : 4
						},
						{
							"as" : 2860,
							"count" : 1
						},
						{
							"as" : 12542,
							"count" : 1
						},
						{
							"as" : 12353,
							"count" : 1
						}
					]
				},
				{
					"country" : "MD",
					"cbcc" : 0,
					"crcc" : 290,
					"relay" : 3,
					"guard" : 1,
					"middle" : 3,
					"exit" : 2,
					"dir" : 3,
					"bwa" : 3831694,
					"bwc" : 2649061,
					"pbr" : 0.0008810000000000001,
					"pbg" : 0.000137,
					"pbm" : 0.000137,
					"pbe" : 0.002371,
					"fast" : 2,
					"stable" : 2,
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
						"v022" : 1,
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
						},
						{
							"as" : 8926,
							"count" : 1
						}
					]
				},
				{
					"country" : "EC",
					"cbcc" : 0,
					"crcc" : 29,
					"relay" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"bwa" : 53248,
					"bwc" : 0,
					"pbr" : 0.000003,
					"pbg" : 0,
					"pbm" : 0.000009,
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
							"as" : 14522,
							"count" : 1
						}
					]
				},
				{
					"country" : "RS",
					"cbcc" : 0,
					"crcc" : 38,
					"relay" : 3,
					"guard" : 0,
					"middle" : 3,
					"exit" : 1,
					"dir" : 2,
					"bwa" : 258296,
					"bwc" : 39560,
					"pbr" : 0.000016,
					"pbg" : 0,
					"pbm" : 0.000037,
					"pbe" : 0.000009,
					"fast" : 2,
					"stable" : 0,
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
							"as" : 31042,
							"count" : 3
						}
					]
				},
				{
					"country" : "MN",
					"cbcc" : 0,
					"crcc" : 5,
					"relay" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"bwa" : 4694913,
					"bwc" : 3204994,
					"pbr" : 0.000488,
					"pbg" : 0.000282,
					"pbm" : 0.000282,
					"pbe" : 0.000899,
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
					"country" : "IM",
					"cbcc" : 0,
					"crcc" : 3,
					"relay" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"bwa" : 409600,
					"bwc" : 241788,
					"pbr" : 0.000042,
					"pbg" : 0,
					"pbm" : 0.000125,
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
					"country" : "LT",
					"cbcc" : 0,
					"crcc" : 59,
					"relay" : 6,
					"guard" : 3,
					"middle" : 6,
					"exit" : 2,
					"dir" : 3,
					"bwa" : 16638202,
					"bwc" : 12527390,
					"pbr" : 0.006581,
					"pbg" : 0.012712,
					"pbm" : 0.006033999999999999,
					"pbe" : 0.000996,
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
							"as" : 8764,
							"count" : 2
						},
						{
							"as" : 24607,
							"count" : 1
						},
						{
							"as" : 16125,
							"count" : 1
						},
						{
							"as" : 21412,
							"count" : 1
						},
						{
							"as" : 2847,
							"count" : 1
						}
					]
				},
				{
					"country" : "MX",
					"cbcc" : 1,
					"crcc" : 265,
					"relay" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 1,
					"dir" : 2,
					"bwa" : 1384622,
					"bwc" : 770063,
					"pbr" : 0.00012,
					"pbg" : 0,
					"pbm" : 0.000352,
					"pbe" : 0.000009,
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
							"as" : 6332,
							"count" : 1
						},
						{
							"as" : 8151,
							"count" : 1
						}
					]
				},
				{
					"country" : "MK",
					"cbcc" : 0,
					"crcc" : 12,
					"relay" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"bwa" : 153600,
					"bwc" : 18631,
					"pbr" : 0.000009,
					"pbg" : 0,
					"pbm" : 0.000029,
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
							"as" : 16333,
							"count" : 1
						},
						{
							"as" : 41557,
							"count" : 1
						}
					]
				},
				{
					"country" : "JE",
					"cbcc" : 0,
					"crcc" : 2,
					"relay" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"bwa" : 32000,
					"bwc" : 3539,
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
					"country" : "MY",
					"cbcc" : 1,
					"crcc" : 85,
					"relay" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"bwa" : 74110,
					"bwc" : 15856,
					"pbr" : 0.000003,
					"pbg" : 0,
					"pbm" : 0.000009,
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
					"country" : "VN",
					"cbcc" : 0,
					"crcc" : 103,
					"relay" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"bwa" : 409600,
					"bwc" : 174758,
					"pbr" : 0.000024,
					"pbg" : 0.000014,
					"pbm" : 0.000014,
					"pbe" : 0.000044,
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
					"country" : "??",
					"cbcc" : 10,
					"crcc" : 573,
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
					"cbcc" : 1,
					"crcc" : 40,
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
					"cbcc" : 1,
					"crcc" : 121,
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
					"cbcc" : 1,
					"crcc" : 25,
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
					"cbcc" : 1,
					"crcc" : 60,
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
					"cbcc" : 13,
					"crcc" : 288,
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
					"cbcc" : 1,
					"crcc" : 34,
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
					"cbcc" : 1,
					"crcc" : 129,
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
					"cbcc" : 5,
					"crcc" : 142,
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
					"country" : "AD",
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
					"country" : "AF",
					"crcc" : 15,
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
					"country" : "AL",
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
					"country" : "AM",
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
					"country" : "AN",
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
					"country" : "AO",
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
					"country" : "AP",
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
					"country" : "AW",
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
					"country" : "AX",
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
					"country" : "BB",
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
					"country" : "BD",
					"crcc" : 42,
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
					"country" : "BH",
					"crcc" : 22,
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
					"country" : "BM",
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
					"country" : "BN",
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
					"country" : "BO",
					"crcc" : 15,
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
					"country" : "BT",
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
					"country" : "BW",
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
					"country" : "BZ",
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
					"country" : "CD",
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
					"country" : "CG",
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
					"country" : "CI",
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
					"country" : "CL",
					"crcc" : 101,
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
					"country" : "CU",
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
					"country" : "CV",
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
					"country" : "CW",
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
					"country" : "CY",
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
					"country" : "DJ",
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
					"country" : "DO",
					"crcc" : 22,
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
					"crcc" : 22,
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
					"country" : "GA",
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
					"country" : "GD",
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
					"country" : "GE",
					"crcc" : 87,
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
					"country" : "GG",
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
					"country" : "GH",
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
					"country" : "GI",
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
					"country" : "GL",
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
					"country" : "GM",
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
					"country" : "GP",
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
					"country" : "GT",
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
					"country" : "GU",
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
					"country" : "GY",
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
					"country" : "HN",
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
					"country" : "HT",
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
					"country" : "IQ",
					"crcc" : 22,
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
					"country" : "KE",
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
					"country" : "KG",
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
					"country" : "KP",
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
					"country" : "KW",
					"crcc" : 41,
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
					"country" : "LA",
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
					"country" : "LB",
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
					"country" : "LC",
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
					"country" : "LI",
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
					"country" : "LK",
					"crcc" : 10,
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
					"country" : "LY",
					"crcc" : 10,
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
					"country" : "MA",
					"crcc" : 57,
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
					"country" : "ME",
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
					"country" : "MG",
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
					"country" : "ML",
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
					"country" : "MM",
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
					"country" : "MO",
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
					"country" : "MQ",
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
					"country" : "MR",
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
					"country" : "MU",
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
					"country" : "MV",
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
					"country" : "MW",
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
					"country" : "MZ",
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
					"country" : "NA",
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
					"country" : "NC",
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
					"country" : "NE",
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
					"country" : "NG",
					"crcc" : 38,
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
					"country" : "NI",
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
					"country" : "NP",
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
					"country" : "OM",
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
					"country" : "PE",
					"crcc" : 46,
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
					"country" : "PG",
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
					"country" : "PM",
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
					"country" : "PR",
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
					"country" : "PS",
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
					"country" : "PY",
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
					"country" : "QA",
					"crcc" : 28,
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
					"country" : "RW",
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
					"country" : "SB",
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
					"country" : "SC",
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
					"country" : "SD",
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
					"country" : "SM",
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
					"country" : "SN",
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
					"country" : "SR",
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
					"country" : "SV",
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
					"country" : "TG",
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
					"country" : "TJ",
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
					"country" : "TL",
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
					"country" : "TM",
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
					"country" : "TT",
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
					"country" : "TZ",
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
					"country" : "UG",
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
					"country" : "UY",
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
					"country" : "UZ",
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
					"country" : "VE",
					"crcc" : 80,
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
					"country" : "VI",
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
					"country" : "YE",
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
					"country" : "ZW",
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
				}
			],
			"autosys" : [
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
					"as" : 7922,
					"relay" : 147,
					"bwa" : 32445342,
					"bwc" : 11361057,
					"fast" : 134,
					"stable" : 86,
					"guard" : 21,
					"middle" : 147,
					"exit" : 22,
					"dir" : 98,
					"pbr" : 0.004371000000000001,
					"pbg" : 0.0037900000000000004,
					"pbm" : 0.008038000000000007,
					"pbe" : 0.0012879999999999999,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 147,
							"bwa" : 32445342,
							"bwc" : 11361057,
							"fast" : 134,
							"stable" : 86,
							"guard" : 21,
							"middle" : 147,
							"exit" : 22,
							"dir" : 98,
							"pbr" : 0.004371000000000001,
							"pbg" : 0.0037900000000000004,
							"pbm" : 0.008038000000000007,
							"pbe" : 0.0012879999999999999
						}
					]
				},
				{
					"as" : 24940,
					"relay" : 164,
					"bwa" : 231537525,
					"bwc" : 187146790,
					"fast" : 160,
					"stable" : 146,
					"guard" : 110,
					"middle" : 164,
					"exit" : 21,
					"dir" : 93,
					"pbr" : 0.06191200000000003,
					"pbg" : 0.06985399999999999,
					"pbm" : 0.10492000000000001,
					"pbe" : 0.01095,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 163,
							"bwa" : 230480544,
							"bwc" : 186652820,
							"fast" : 159,
							"stable" : 145,
							"guard" : 109,
							"middle" : 163,
							"exit" : 20,
							"dir" : 92,
							"pbr" : 0.06179300000000003,
							"pbg" : 0.069785,
							"pbm" : 0.10485100000000001,
							"pbe" : 0.010731000000000001
						},
						{
							"cc" : "IT",
							"relay" : 1,
							"bwa" : 1056981,
							"bwc" : 493970,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000119,
							"pbg" : 0.000069,
							"pbm" : 0.000069,
							"pbe" : 0.000219
						}
					]
				},
				{
					"as" : 35366,
					"relay" : 12,
					"bwa" : 12666293,
					"bwc" : 9634459,
					"fast" : 12,
					"stable" : 8,
					"guard" : 7,
					"middle" : 12,
					"exit" : 4,
					"dir" : 6,
					"pbr" : 0.0023959999999999997,
					"pbg" : 0.0020540000000000003,
					"pbm" : 0.0037070000000000002,
					"pbe" : 0.001427,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 12,
							"bwa" : 12666293,
							"bwc" : 9634459,
							"fast" : 12,
							"stable" : 8,
							"guard" : 7,
							"middle" : 12,
							"exit" : 4,
							"dir" : 6,
							"pbr" : 0.0023959999999999997,
							"pbg" : 0.0020540000000000003,
							"pbm" : 0.0037070000000000002,
							"pbe" : 0.001427
						}
					]
				},
				{
					"as" : 35228,
					"relay" : 21,
					"bwa" : 1477120,
					"bwc" : 333898,
					"fast" : 16,
					"stable" : 12,
					"guard" : 0,
					"middle" : 21,
					"exit" : 6,
					"dir" : 14,
					"pbr" : 0.00008800000000000002,
					"pbg" : 0,
					"pbm" : 0.00019599999999999997,
					"pbe" : 0.000069,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 21,
							"bwa" : 1477120,
							"bwc" : 333898,
							"fast" : 16,
							"stable" : 12,
							"guard" : 0,
							"middle" : 21,
							"exit" : 6,
							"dir" : 14,
							"pbr" : 0.00008800000000000002,
							"pbg" : 0,
							"pbm" : 0.00019599999999999997,
							"pbe" : 0.000069
						}
					]
				},
				{
					"as" : 3209,
					"relay" : 19,
					"bwa" : 1465547,
					"bwc" : 273729,
					"fast" : 16,
					"stable" : 3,
					"guard" : 0,
					"middle" : 19,
					"exit" : 0,
					"dir" : 10,
					"pbr" : 0.000098,
					"pbg" : 0,
					"pbm" : 0.000299,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 19,
							"bwa" : 1465547,
							"bwc" : 273729,
							"fast" : 16,
							"stable" : 3,
							"guard" : 0,
							"middle" : 19,
							"exit" : 0,
							"dir" : 10,
							"pbr" : 0.000098,
							"pbg" : 0,
							"pbm" : 0.000299,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 15557,
					"relay" : 13,
					"bwa" : 2764428,
					"bwc" : 1088235,
					"fast" : 11,
					"stable" : 2,
					"guard" : 1,
					"middle" : 13,
					"exit" : 3,
					"dir" : 11,
					"pbr" : 0.000323,
					"pbg" : 0.000124,
					"pbm" : 0.0004360000000000001,
					"pbe" : 0.00041,
					"countries" : [
						{
							"cc" : "FR",
							"relay" : 13,
							"bwa" : 2764428,
							"bwc" : 1088235,
							"fast" : 11,
							"stable" : 2,
							"guard" : 1,
							"middle" : 13,
							"exit" : 3,
							"dir" : 11,
							"pbr" : 0.000323,
							"pbg" : 0.000124,
							"pbm" : 0.0004360000000000001,
							"pbe" : 0.00041
						}
					]
				},
				{
					"as" : 3248,
					"relay" : 8,
					"bwa" : 53462189,
					"bwc" : 45966418,
					"fast" : 7,
					"stable" : 8,
					"guard" : 6,
					"middle" : 8,
					"exit" : 0,
					"dir" : 8,
					"pbr" : 0.011658000000000002,
					"pbg" : 0.024019000000000002,
					"pbm" : 0.010955,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "AT",
							"relay" : 8,
							"bwa" : 53462189,
							"bwc" : 45966418,
							"fast" : 7,
							"stable" : 8,
							"guard" : 6,
							"middle" : 8,
							"exit" : 0,
							"dir" : 8,
							"pbr" : 0.011658000000000002,
							"pbg" : 0.024019000000000002,
							"pbm" : 0.010955,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 43561,
					"relay" : 1,
					"bwa" : 325632,
					"bwc" : 177184,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000028,
					"pbg" : 0,
					"pbm" : 0.000084,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "BG",
							"relay" : 1,
							"bwa" : 325632,
							"bwc" : 177184,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000028,
							"pbg" : 0,
							"pbm" : 0.000084,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 4771,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 8022,
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
							"bwc" : 8022,
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
					"as" : 30633,
					"relay" : 2,
					"bwa" : 3174400,
					"bwc" : 2102234,
					"fast" : 2,
					"stable" : 1,
					"guard" : 0,
					"middle" : 2,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000488,
					"pbg" : 0,
					"pbm" : 0.000024,
					"pbe" : 0.00144,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 3174400,
							"bwc" : 2102234,
							"fast" : 2,
							"stable" : 1,
							"guard" : 0,
							"middle" : 2,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000488,
							"pbg" : 0,
							"pbm" : 0.000024,
							"pbe" : 0.00144
						}
					]
				},
				{
					"as" : 30083,
					"relay" : 3,
					"bwa" : 972800,
					"bwc" : 940946,
					"fast" : 3,
					"stable" : 3,
					"guard" : 3,
					"middle" : 3,
					"exit" : 0,
					"dir" : 3,
					"pbr" : 0.000235,
					"pbg" : 0.000484,
					"pbm" : 0.00021999999999999998,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 3,
							"bwa" : 972800,
							"bwc" : 940946,
							"fast" : 3,
							"stable" : 3,
							"guard" : 3,
							"middle" : 3,
							"exit" : 0,
							"dir" : 3,
							"pbr" : 0.000235,
							"pbg" : 0.000484,
							"pbm" : 0.00021999999999999998,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 8283,
					"relay" : 2,
					"bwa" : 844800,
					"bwc" : 696244,
					"fast" : 2,
					"stable" : 1,
					"guard" : 0,
					"middle" : 2,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000258,
					"pbg" : 0,
					"pbm" : 0.000618,
					"pbe" : 0.000156,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 2,
							"bwa" : 844800,
							"bwc" : 696244,
							"fast" : 2,
							"stable" : 1,
							"guard" : 0,
							"middle" : 2,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000258,
							"pbg" : 0,
							"pbm" : 0.000618,
							"pbe" : 0.000156
						}
					]
				},
				{
					"as" : 21213,
					"relay" : 1,
					"bwa" : 404358,
					"bwc" : 150020,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000102,
					"pbg" : 0.000059,
					"pbm" : 0.000059,
					"pbe" : 0.000189,
					"countries" : [
						{
							"cc" : "AT",
							"relay" : 1,
							"bwa" : 404358,
							"bwc" : 150020,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000102,
							"pbg" : 0.000059,
							"pbm" : 0.000059,
							"pbe" : 0.000189
						}
					]
				},
				{
					"as" : 5089,
					"relay" : 36,
					"bwa" : 6963605,
					"bwc" : 1820855,
					"fast" : 28,
					"stable" : 19,
					"guard" : 4,
					"middle" : 36,
					"exit" : 1,
					"dir" : 20,
					"pbr" : 0.0010199999999999996,
					"pbg" : 0.000666,
					"pbm" : 0.0012679999999999994,
					"pbe" : 0.001121,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 36,
							"bwa" : 6963605,
							"bwc" : 1820855,
							"fast" : 28,
							"stable" : 19,
							"guard" : 4,
							"middle" : 36,
							"exit" : 1,
							"dir" : 20,
							"pbr" : 0.0010199999999999996,
							"pbg" : 0.000666,
							"pbm" : 0.0012679999999999994,
							"pbe" : 0.001121
						}
					]
				},
				{
					"as" : 5769,
					"relay" : 4,
					"bwa" : 303104,
					"bwc" : 41833,
					"fast" : 2,
					"stable" : 3,
					"guard" : 0,
					"middle" : 4,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.000017999999999999997,
					"pbg" : 0,
					"pbm" : 0.000043,
					"pbe" : 0.000009,
					"countries" : [
						{
							"cc" : "CA",
							"relay" : 4,
							"bwa" : 303104,
							"bwc" : 41833,
							"fast" : 2,
							"stable" : 3,
							"guard" : 0,
							"middle" : 4,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.000017999999999999997,
							"pbg" : 0,
							"pbm" : 0.000043,
							"pbe" : 0.000009
						}
					]
				},
				{
					"as" : 61391,
					"relay" : 1,
					"bwa" : 8094654,
					"bwc" : 3629233,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.00323,
					"pbg" : 0.001867,
					"pbm" : 0.001867,
					"pbe" : 0.005956,
					"countries" : [
						{
							"cc" : "MT",
							"relay" : 1,
							"bwa" : 8094654,
							"bwc" : 3629233,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.00323,
							"pbg" : 0.001867,
							"pbm" : 0.001867,
							"pbe" : 0.005956
						}
					]
				},
				{
					"as" : 31334,
					"relay" : 25,
					"bwa" : 3911170,
					"bwc" : 1182290,
					"fast" : 21,
					"stable" : 9,
					"guard" : 3,
					"middle" : 25,
					"exit" : 1,
					"dir" : 15,
					"pbr" : 0.000562,
					"pbg" : 0.0006050000000000001,
					"pbm" : 0.001062,
					"pbe" : 0.00002,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 25,
							"bwa" : 3911170,
							"bwc" : 1182290,
							"fast" : 21,
							"stable" : 9,
							"guard" : 3,
							"middle" : 25,
							"exit" : 1,
							"dir" : 15,
							"pbr" : 0.000562,
							"pbg" : 0.0006050000000000001,
							"pbm" : 0.001062,
							"pbe" : 0.00002
						}
					]
				},
				{
					"as" : 167,
					"relay" : 1,
					"bwa" : 256000,
					"bwc" : 393978,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000016,
					"pbg" : 0.000033,
					"pbm" : 0.000015,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 256000,
							"bwc" : 393978,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000016,
							"pbg" : 0.000033,
							"pbm" : 0.000015,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 16265,
					"relay" : 56,
					"bwa" : 117618482,
					"bwc" : 86468324,
					"fast" : 43,
					"stable" : 51,
					"guard" : 30,
					"middle" : 56,
					"exit" : 29,
					"dir" : 28,
					"pbr" : 0.041785000000000024,
					"pbg" : 0.040106,
					"pbm" : 0.030045000000000006,
					"pbe" : 0.055209000000000015,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 50,
							"bwa" : 86462997,
							"bwc" : 63795896,
							"fast" : 37,
							"stable" : 45,
							"guard" : 25,
							"middle" : 50,
							"exit" : 27,
							"dir" : 24,
							"pbr" : 0.03393900000000002,
							"pbg" : 0.028220000000000002,
							"pbm" : 0.023739000000000003,
							"pbe" : 0.04986100000000001
						},
						{
							"cc" : "DE",
							"relay" : 6,
							"bwa" : 31155485,
							"bwc" : 22672428,
							"fast" : 6,
							"stable" : 6,
							"guard" : 5,
							"middle" : 6,
							"exit" : 2,
							"dir" : 4,
							"pbr" : 0.007846,
							"pbg" : 0.011885999999999999,
							"pbm" : 0.006306000000000001,
							"pbe" : 0.0053479999999999995
						}
					]
				},
				{
					"as" : 12322,
					"relay" : 52,
					"bwa" : 11045864,
					"bwc" : 6324186,
					"fast" : 37,
					"stable" : 26,
					"guard" : 2,
					"middle" : 52,
					"exit" : 17,
					"dir" : 23,
					"pbr" : 0.0021040000000000004,
					"pbg" : 0.003815,
					"pbm" : 0.0023089999999999994,
					"pbe" : 0.00019600000000000002,
					"countries" : [
						{
							"cc" : "FR",
							"relay" : 52,
							"bwa" : 11045864,
							"bwc" : 6324186,
							"fast" : 37,
							"stable" : 26,
							"guard" : 2,
							"middle" : 52,
							"exit" : 17,
							"dir" : 23,
							"pbr" : 0.0021040000000000004,
							"pbg" : 0.003815,
							"pbm" : 0.0023089999999999994,
							"pbe" : 0.00019600000000000002
						}
					]
				},
				{
					"as" : 15657,
					"relay" : 2,
					"bwa" : 1715200,
					"bwc" : 1359914,
					"fast" : 2,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000516,
					"pbg" : 0.000296,
					"pbm" : 0.000308,
					"pbe" : 0.000944,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 2,
							"bwa" : 1715200,
							"bwc" : 1359914,
							"fast" : 2,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000516,
							"pbg" : 0.000296,
							"pbm" : 0.000308,
							"pbe" : 0.000944
						}
					]
				},
				{
					"as" : 3595,
					"relay" : 9,
					"bwa" : 1706190,
					"bwc" : 530488,
					"fast" : 9,
					"stable" : 8,
					"guard" : 1,
					"middle" : 9,
					"exit" : 0,
					"dir" : 7,
					"pbr" : 0.00019100000000000003,
					"pbg" : 0.000203,
					"pbm" : 0.000373,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 9,
							"bwa" : 1706190,
							"bwc" : 530488,
							"fast" : 9,
							"stable" : 8,
							"guard" : 1,
							"middle" : 9,
							"exit" : 0,
							"dir" : 7,
							"pbr" : 0.00019100000000000003,
							"pbg" : 0.000203,
							"pbm" : 0.000373,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 39309,
					"relay" : 2,
					"bwa" : 1310720,
					"bwc" : 1086784,
					"fast" : 2,
					"stable" : 2,
					"guard" : 2,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000124,
					"pbg" : 0.000255,
					"pbm" : 0.000116,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 2,
							"bwa" : 1310720,
							"bwc" : 1086784,
							"fast" : 2,
							"stable" : 2,
							"guard" : 2,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000124,
							"pbg" : 0.000255,
							"pbm" : 0.000116,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 14618,
					"relay" : 12,
					"bwa" : 4244845,
					"bwc" : 1381483,
					"fast" : 11,
					"stable" : 8,
					"guard" : 4,
					"middle" : 12,
					"exit" : 1,
					"dir" : 5,
					"pbr" : 0.00029599999999999993,
					"pbg" : 0.000434,
					"pbm" : 0.00039500000000000006,
					"pbe" : 0.000056,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 12,
							"bwa" : 4244845,
							"bwc" : 1381483,
							"fast" : 11,
							"stable" : 8,
							"guard" : 4,
							"middle" : 12,
							"exit" : 1,
							"dir" : 5,
							"pbr" : 0.00029599999999999993,
							"pbg" : 0.000434,
							"pbm" : 0.00039500000000000006,
							"pbe" : 0.000056
						}
					]
				},
				{
					"as" : 34610,
					"relay" : 1,
					"bwa" : 204800,
					"bwc" : 36195,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000028,
					"pbg" : 0.000059,
					"pbm" : 0.000027,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 1,
							"bwa" : 204800,
							"bwc" : 36195,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000028,
							"pbg" : 0.000059,
							"pbm" : 0.000027,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 6939,
					"relay" : 28,
					"bwa" : 30935823,
					"bwc" : 21808473,
					"fast" : 28,
					"stable" : 21,
					"guard" : 11,
					"middle" : 28,
					"exit" : 4,
					"dir" : 14,
					"pbr" : 0.008655000000000001,
					"pbg" : 0.006444,
					"pbm" : 0.011069,
					"pbe" : 0.008458,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 28,
							"bwa" : 30935823,
							"bwc" : 21808473,
							"fast" : 28,
							"stable" : 21,
							"guard" : 11,
							"middle" : 28,
							"exit" : 4,
							"dir" : 14,
							"pbr" : 0.008655000000000001,
							"pbg" : 0.006444,
							"pbm" : 0.011069,
							"pbe" : 0.008458
						}
					]
				},
				{
					"as" : 16276,
					"relay" : 101,
					"bwa" : 174232606,
					"bwc" : 126016856,
					"fast" : 88,
					"stable" : 85,
					"guard" : 58,
					"middle" : 101,
					"exit" : 30,
					"dir" : 60,
					"pbr" : 0.050738,
					"pbg" : 0.052800000000000014,
					"pbm" : 0.05031300000000001,
					"pbe" : 0.049107,
					"countries" : [
						{
							"cc" : "FR",
							"relay" : 74,
							"bwa" : 135793069,
							"bwc" : 100455218,
							"fast" : 61,
							"stable" : 67,
							"guard" : 42,
							"middle" : 74,
							"exit" : 24,
							"dir" : 41,
							"pbr" : 0.04138499999999999,
							"pbg" : 0.041852000000000014,
							"pbm" : 0.04209900000000001,
							"pbe" : 0.040205000000000005
						},
						{
							"cc" : "CA",
							"relay" : 7,
							"bwa" : 10946635,
							"bwc" : 7623925,
							"fast" : 7,
							"stable" : 4,
							"guard" : 6,
							"middle" : 7,
							"exit" : 2,
							"dir" : 6,
							"pbr" : 0.004162,
							"pbg" : 0.003599,
							"pbm" : 0.002175,
							"pbe" : 0.0067150000000000005
						},
						{
							"cc" : "GB",
							"relay" : 6,
							"bwa" : 11929162,
							"bwc" : 6883090,
							"fast" : 6,
							"stable" : 4,
							"guard" : 3,
							"middle" : 6,
							"exit" : 2,
							"dir" : 3,
							"pbr" : 0.0019349999999999999,
							"pbg" : 0.001434,
							"pbm" : 0.002447,
							"pbe" : 0.0019240000000000001
						},
						{
							"cc" : "NL",
							"relay" : 3,
							"bwa" : 3334144,
							"bwc" : 3123932,
							"fast" : 3,
							"stable" : 3,
							"guard" : 3,
							"middle" : 3,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000875,
							"pbg" : 0.001714,
							"pbm" : 0.000798,
							"pbe" : 0.000114
						},
						{
							"cc" : "DE",
							"relay" : 3,
							"bwa" : 4546560,
							"bwc" : 4404538,
							"fast" : 3,
							"stable" : 3,
							"guard" : 1,
							"middle" : 3,
							"exit" : 0,
							"dir" : 3,
							"pbr" : 0.001215,
							"pbg" : 0.002453,
							"pbm" : 0.001191,
							"pbe" : 0
						},
						{
							"cc" : "IE",
							"relay" : 4,
							"bwa" : 1947460,
							"bwc" : 439025,
							"fast" : 4,
							"stable" : 2,
							"guard" : 1,
							"middle" : 4,
							"exit" : 1,
							"dir" : 3,
							"pbr" : 0.00016800000000000002,
							"pbg" : 0.000047,
							"pbm" : 0.00030900000000000003,
							"pbe" : 0.000149
						},
						{
							"cc" : "PL",
							"relay" : 1,
							"bwa" : 3145728,
							"bwc" : 1706664,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000744,
							"pbg" : 0.001536,
							"pbm" : 0.000698,
							"pbe" : 0
						},
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 1714328,
							"bwc" : 533635,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000171,
							"pbg" : 0,
							"pbm" : 0.000512,
							"pbe" : 0
						},
						{
							"cc" : "IT",
							"relay" : 1,
							"bwa" : 819200,
							"bwc" : 819200,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.00008,
							"pbg" : 0.000165,
							"pbm" : 0.000075,
							"pbe" : 0
						},
						{
							"cc" : "BE",
							"relay" : 1,
							"bwa" : 56320,
							"bwc" : 27629,
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
					"as" : 6799,
					"relay" : 2,
					"bwa" : 71680,
					"bwc" : 9604,
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
							"bwc" : 9604,
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
					"as" : 41454,
					"relay" : 1,
					"bwa" : 819200,
					"bwc" : 783198,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000029,
					"pbg" : 0.00006,
					"pbm" : 0.000027,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "HR",
							"relay" : 1,
							"bwa" : 819200,
							"bwc" : 783198,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000029,
							"pbg" : 0.00006,
							"pbm" : 0.000027,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 12414,
					"relay" : 2,
					"bwa" : 3062879,
					"bwc" : 1429910,
					"fast" : 2,
					"stable" : 2,
					"guard" : 2,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000682,
					"pbg" : 0.0005909999999999999,
					"pbm" : 0.000441,
					"pbe" : 0.001013,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 2,
							"bwa" : 3062879,
							"bwc" : 1429910,
							"fast" : 2,
							"stable" : 2,
							"guard" : 2,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000682,
							"pbg" : 0.0005909999999999999,
							"pbm" : 0.000441,
							"pbe" : 0.001013
						}
					]
				},
				{
					"as" : 35415,
					"relay" : 2,
					"bwa" : 3072000,
					"bwc" : 2599604,
					"fast" : 2,
					"stable" : 2,
					"guard" : 2,
					"middle" : 2,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000729,
					"pbg" : 0.001504,
					"pbm" : 0.000683,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 2,
							"bwa" : 3072000,
							"bwc" : 2599604,
							"fast" : 2,
							"stable" : 2,
							"guard" : 2,
							"middle" : 2,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000729,
							"pbg" : 0.001504,
							"pbm" : 0.000683,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 20773,
					"relay" : 24,
					"bwa" : 33510973,
					"bwc" : 22379445,
					"fast" : 21,
					"stable" : 22,
					"guard" : 10,
					"middle" : 24,
					"exit" : 4,
					"dir" : 5,
					"pbr" : 0.012670999999999997,
					"pbg" : 0.005435000000000001,
					"pbm" : 0.015916000000000003,
					"pbe" : 0.016656,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 24,
							"bwa" : 33510973,
							"bwc" : 22379445,
							"fast" : 21,
							"stable" : 22,
							"guard" : 10,
							"middle" : 24,
							"exit" : 4,
							"dir" : 5,
							"pbr" : 0.012670999999999997,
							"pbg" : 0.005435000000000001,
							"pbm" : 0.015916000000000003,
							"pbe" : 0.016656
						}
					]
				},
				{
					"as" : 8708,
					"relay" : 7,
					"bwa" : 2517560,
					"bwc" : 1369099,
					"fast" : 6,
					"stable" : 1,
					"guard" : 1,
					"middle" : 7,
					"exit" : 2,
					"dir" : 6,
					"pbr" : 0.000452,
					"pbg" : 0.000711,
					"pbm" : 0.000477,
					"pbe" : 0.00016800000000000002,
					"countries" : [
						{
							"cc" : "RO",
							"relay" : 7,
							"bwa" : 2517560,
							"bwc" : 1369099,
							"fast" : 6,
							"stable" : 1,
							"guard" : 1,
							"middle" : 7,
							"exit" : 2,
							"dir" : 6,
							"pbr" : 0.000452,
							"pbg" : 0.000711,
							"pbm" : 0.000477,
							"pbe" : 0.00016800000000000002
						}
					]
				},
				{
					"as" : 19262,
					"relay" : 56,
					"bwa" : 51146407,
					"bwc" : 35801019,
					"fast" : 53,
					"stable" : 34,
					"guard" : 16,
					"middle" : 56,
					"exit" : 4,
					"dir" : 48,
					"pbr" : 0.012651999999999995,
					"pbg" : 0.015163000000000001,
					"pbm" : 0.022233000000000003,
					"pbe" : 0.00056,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 56,
							"bwa" : 51146407,
							"bwc" : 35801019,
							"fast" : 53,
							"stable" : 34,
							"guard" : 16,
							"middle" : 56,
							"exit" : 4,
							"dir" : 48,
							"pbr" : 0.012651999999999995,
							"pbg" : 0.015163000000000001,
							"pbm" : 0.022233000000000003,
							"pbe" : 0.00056
						}
					]
				},
				{
					"as" : 20115,
					"relay" : 24,
					"bwa" : 4817220,
					"bwc" : 1325809,
					"fast" : 22,
					"stable" : 14,
					"guard" : 3,
					"middle" : 24,
					"exit" : 1,
					"dir" : 16,
					"pbr" : 0.00049,
					"pbg" : 0.000449,
					"pbm" : 0.0010119999999999997,
					"pbe" : 0.00001,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 24,
							"bwa" : 4817220,
							"bwc" : 1325809,
							"fast" : 22,
							"stable" : 14,
							"guard" : 3,
							"middle" : 24,
							"exit" : 1,
							"dir" : 16,
							"pbr" : 0.00049,
							"pbg" : 0.000449,
							"pbm" : 0.0010119999999999997,
							"pbe" : 0.00001
						}
					]
				},
				{
					"as" : 9198,
					"relay" : 2,
					"bwa" : 151695,
					"bwc" : 30020,
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
							"bwc" : 30020,
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
					"as" : 29422,
					"relay" : 4,
					"bwa" : 440320,
					"bwc" : 295929,
					"fast" : 3,
					"stable" : 3,
					"guard" : 1,
					"middle" : 4,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000026000000000000002,
					"pbg" : 0.000031,
					"pbm" : 0.000049,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "FI",
							"relay" : 4,
							"bwa" : 440320,
							"bwc" : 295929,
							"fast" : 3,
							"stable" : 3,
							"guard" : 1,
							"middle" : 4,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000026000000000000002,
							"pbg" : 0.000031,
							"pbm" : 0.000049,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 41164,
					"relay" : 5,
					"bwa" : 1974272,
					"bwc" : 776522,
					"fast" : 5,
					"stable" : 2,
					"guard" : 2,
					"middle" : 5,
					"exit" : 1,
					"dir" : 3,
					"pbr" : 0.00025,
					"pbg" : 0.000459,
					"pbm" : 0.000256,
					"pbe" : 0.000035,
					"countries" : [
						{
							"cc" : "NO",
							"relay" : 5,
							"bwa" : 1974272,
							"bwc" : 776522,
							"fast" : 5,
							"stable" : 2,
							"guard" : 2,
							"middle" : 5,
							"exit" : 1,
							"dir" : 3,
							"pbr" : 0.00025,
							"pbg" : 0.000459,
							"pbm" : 0.000256,
							"pbe" : 0.000035
						}
					]
				},
				{
					"as" : 30036,
					"relay" : 5,
					"bwa" : 799799,
					"bwc" : 225057,
					"fast" : 5,
					"stable" : 4,
					"guard" : 2,
					"middle" : 5,
					"exit" : 0,
					"dir" : 4,
					"pbr" : 0.000082,
					"pbg" : 0.000067,
					"pbm" : 0.00017700000000000002,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 5,
							"bwa" : 799799,
							"bwc" : 225057,
							"fast" : 5,
							"stable" : 4,
							"guard" : 2,
							"middle" : 5,
							"exit" : 0,
							"dir" : 4,
							"pbr" : 0.000082,
							"pbg" : 0.000067,
							"pbm" : 0.00017700000000000002,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 42926,
					"relay" : 2,
					"bwa" : 9523810,
					"bwc" : 6698961,
					"fast" : 2,
					"stable" : 2,
					"guard" : 2,
					"middle" : 2,
					"exit" : 2,
					"dir" : 1,
					"pbr" : 0.0022589999999999997,
					"pbg" : 0.0013059999999999999,
					"pbm" : 0.0013059999999999999,
					"pbe" : 0.0041659999999999996,
					"countries" : [
						{
							"cc" : "TR",
							"relay" : 2,
							"bwa" : 9523810,
							"bwc" : 6698961,
							"fast" : 2,
							"stable" : 2,
							"guard" : 2,
							"middle" : 2,
							"exit" : 2,
							"dir" : 1,
							"pbr" : 0.0022589999999999997,
							"pbg" : 0.0013059999999999999,
							"pbm" : 0.0013059999999999999,
							"pbe" : 0.0041659999999999996
						}
					]
				},
				{
					"as" : 18779,
					"relay" : 4,
					"bwa" : 10968743,
					"bwc" : 6468755,
					"fast" : 4,
					"stable" : 4,
					"guard" : 2,
					"middle" : 4,
					"exit" : 3,
					"dir" : 1,
					"pbr" : 0.00294,
					"pbg" : 0.0006940000000000001,
					"pbm" : 0.002184,
					"pbe" : 0.005939,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 4,
							"bwa" : 10968743,
							"bwc" : 6468755,
							"fast" : 4,
							"stable" : 4,
							"guard" : 2,
							"middle" : 4,
							"exit" : 3,
							"dir" : 1,
							"pbr" : 0.00294,
							"pbg" : 0.0006940000000000001,
							"pbm" : 0.002184,
							"pbe" : 0.005939
						}
					]
				},
				{
					"as" : 5408,
					"relay" : 13,
					"bwa" : 22904114,
					"bwc" : 14710323,
					"fast" : 12,
					"stable" : 9,
					"guard" : 9,
					"middle" : 13,
					"exit" : 3,
					"dir" : 11,
					"pbr" : 0.005045000000000001,
					"pbg" : 0.007091000000000001,
					"pbm" : 0.004506,
					"pbe" : 0.003541,
					"countries" : [
						{
							"cc" : "GR",
							"relay" : 13,
							"bwa" : 22904114,
							"bwc" : 14710323,
							"fast" : 12,
							"stable" : 9,
							"guard" : 9,
							"middle" : 13,
							"exit" : 3,
							"dir" : 11,
							"pbr" : 0.005045000000000001,
							"pbg" : 0.007091000000000001,
							"pbm" : 0.004506,
							"pbe" : 0.003541
						}
					]
				},
				{
					"as" : 6327,
					"relay" : 20,
					"bwa" : 3249946,
					"bwc" : 1220570,
					"fast" : 14,
					"stable" : 15,
					"guard" : 3,
					"middle" : 20,
					"exit" : 3,
					"dir" : 10,
					"pbr" : 0.000423,
					"pbg" : 0.00029299999999999997,
					"pbm" : 0.00043099999999999996,
					"pbe" : 0.000543,
					"countries" : [
						{
							"cc" : "CA",
							"relay" : 20,
							"bwa" : 3249946,
							"bwc" : 1220570,
							"fast" : 14,
							"stable" : 15,
							"guard" : 3,
							"middle" : 20,
							"exit" : 3,
							"dir" : 10,
							"pbr" : 0.000423,
							"pbg" : 0.00029299999999999997,
							"pbm" : 0.00043099999999999996,
							"pbe" : 0.000543
						}
					]
				},
				{
					"as" : 31333,
					"relay" : 5,
					"bwa" : 1756160,
					"bwc" : 1033782,
					"fast" : 5,
					"stable" : 5,
					"guard" : 1,
					"middle" : 5,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.00025600000000000004,
					"pbg" : 0.000091,
					"pbm" : 0.000679,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 5,
							"bwa" : 1756160,
							"bwc" : 1033782,
							"fast" : 5,
							"stable" : 5,
							"guard" : 1,
							"middle" : 5,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.00025600000000000004,
							"pbg" : 0.000091,
							"pbm" : 0.000679,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 20825,
					"relay" : 16,
					"bwa" : 3553418,
					"bwc" : 1988105,
					"fast" : 15,
					"stable" : 10,
					"guard" : 3,
					"middle" : 16,
					"exit" : 1,
					"dir" : 14,
					"pbr" : 0.0006619999999999999,
					"pbg" : 0.000289,
					"pbm" : 0.0009939999999999999,
					"pbe" : 0.000701,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 16,
							"bwa" : 3553418,
							"bwc" : 1988105,
							"fast" : 15,
							"stable" : 10,
							"guard" : 3,
							"middle" : 16,
							"exit" : 1,
							"dir" : 14,
							"pbr" : 0.0006619999999999999,
							"pbg" : 0.000289,
							"pbm" : 0.0009939999999999999,
							"pbe" : 0.000701
						}
					]
				},
				{
					"as" : 1241,
					"relay" : 3,
					"bwa" : 203261,
					"bwc" : 27343,
					"fast" : 2,
					"stable" : 0,
					"guard" : 0,
					"middle" : 3,
					"exit" : 1,
					"dir" : 3,
					"pbr" : 0.000007,
					"pbg" : 0,
					"pbm" : 0.000013,
					"pbe" : 0.000005,
					"countries" : [
						{
							"cc" : "GR",
							"relay" : 3,
							"bwa" : 203261,
							"bwc" : 27343,
							"fast" : 2,
							"stable" : 0,
							"guard" : 0,
							"middle" : 3,
							"exit" : 1,
							"dir" : 3,
							"pbr" : 0.000007,
							"pbg" : 0,
							"pbm" : 0.000013,
							"pbe" : 0.000005
						}
					]
				},
				{
					"as" : 7132,
					"relay" : 19,
					"bwa" : 1948875,
					"bwc" : 495183,
					"fast" : 15,
					"stable" : 10,
					"guard" : 2,
					"middle" : 19,
					"exit" : 2,
					"dir" : 9,
					"pbr" : 0.000149,
					"pbg" : 0.00016600000000000002,
					"pbm" : 0.000272,
					"pbe" : 0.000009,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 19,
							"bwa" : 1948875,
							"bwc" : 495183,
							"fast" : 15,
							"stable" : 10,
							"guard" : 2,
							"middle" : 19,
							"exit" : 2,
							"dir" : 9,
							"pbr" : 0.000149,
							"pbg" : 0.00016600000000000002,
							"pbm" : 0.000272,
							"pbe" : 0.000009
						}
					]
				},
				{
					"as" : 39651,
					"relay" : 9,
					"bwa" : 3727772,
					"bwc" : 1900013,
					"fast" : 8,
					"stable" : 6,
					"guard" : 3,
					"middle" : 9,
					"exit" : 4,
					"dir" : 7,
					"pbr" : 0.0006939999999999998,
					"pbg" : 0.00027,
					"pbm" : 0.000521,
					"pbe" : 0.0012879999999999999,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 9,
							"bwa" : 3727772,
							"bwc" : 1900013,
							"fast" : 8,
							"stable" : 6,
							"guard" : 3,
							"middle" : 9,
							"exit" : 4,
							"dir" : 7,
							"pbr" : 0.0006939999999999998,
							"pbg" : 0.00027,
							"pbm" : 0.000521,
							"pbe" : 0.0012879999999999999
						}
					]
				},
				{
					"as" : 45230,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 647,
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
							"cc" : "NZ",
							"relay" : 1,
							"bwa" : 51200,
							"bwc" : 647,
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
					"as" : 25653,
					"relay" : 2,
					"bwa" : 1159168,
					"bwc" : 701924,
					"fast" : 1,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.00015199999999999998,
					"pbg" : 0.000086,
					"pbm" : 0.000095,
					"pbe" : 0.000275,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 1159168,
							"bwc" : 701924,
							"fast" : 1,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.00015199999999999998,
							"pbg" : 0.000086,
							"pbm" : 0.000095,
							"pbe" : 0.000275
						}
					]
				},
				{
					"as" : 196689,
					"relay" : 3,
					"bwa" : 2252800,
					"bwc" : 1703006,
					"fast" : 3,
					"stable" : 3,
					"guard" : 2,
					"middle" : 3,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.000516,
					"pbg" : 0.0007480000000000001,
					"pbm" : 0.000439,
					"pbe" : 0.00036,
					"countries" : [
						{
							"cc" : "FR",
							"relay" : 3,
							"bwa" : 2252800,
							"bwc" : 1703006,
							"fast" : 3,
							"stable" : 3,
							"guard" : 2,
							"middle" : 3,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.000516,
							"pbg" : 0.0007480000000000001,
							"pbm" : 0.000439,
							"pbe" : 0.00036
						}
					]
				},
				{
					"as" : 13184,
					"relay" : 19,
					"bwa" : 2095478,
					"bwc" : 726665,
					"fast" : 16,
					"stable" : 1,
					"guard" : 0,
					"middle" : 19,
					"exit" : 3,
					"dir" : 13,
					"pbr" : 0.00022399999999999997,
					"pbg" : 0,
					"pbm" : 0.0006190000000000002,
					"pbe" : 0.00005,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 19,
							"bwa" : 2095478,
							"bwc" : 726665,
							"fast" : 16,
							"stable" : 1,
							"guard" : 0,
							"middle" : 19,
							"exit" : 3,
							"dir" : 13,
							"pbr" : 0.00022399999999999997,
							"pbg" : 0,
							"pbm" : 0.0006190000000000002,
							"pbe" : 0.00005
						}
					]
				},
				{
					"as" : 21844,
					"relay" : 8,
					"bwa" : 3590459,
					"bwc" : 758696,
					"fast" : 8,
					"stable" : 3,
					"guard" : 0,
					"middle" : 8,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.0005979999999999999,
					"pbg" : 0,
					"pbm" : 0.0014600000000000001,
					"pbe" : 0.000336,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 8,
							"bwa" : 3590459,
							"bwc" : 758696,
							"fast" : 8,
							"stable" : 3,
							"guard" : 0,
							"middle" : 8,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.0005979999999999999,
							"pbg" : 0,
							"pbm" : 0.0014600000000000001,
							"pbe" : 0.000336
						}
					]
				},
				{
					"as" : 12715,
					"relay" : 7,
					"bwa" : 795981,
					"bwc" : 225358,
					"fast" : 6,
					"stable" : 0,
					"guard" : 0,
					"middle" : 7,
					"exit" : 2,
					"dir" : 6,
					"pbr" : 0.000042999999999999995,
					"pbg" : 0,
					"pbm" : 0.000114,
					"pbe" : 0.000017,
					"countries" : [
						{
							"cc" : "ES",
							"relay" : 7,
							"bwa" : 795981,
							"bwc" : 225358,
							"fast" : 6,
							"stable" : 0,
							"guard" : 0,
							"middle" : 7,
							"exit" : 2,
							"dir" : 6,
							"pbr" : 0.000042999999999999995,
							"pbg" : 0,
							"pbm" : 0.000114,
							"pbe" : 0.000017
						}
					]
				},
				{
					"as" : 38895,
					"relay" : 4,
					"bwa" : 334206,
					"bwc" : 117953,
					"fast" : 2,
					"stable" : 4,
					"guard" : 0,
					"middle" : 4,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000019999999999999998,
					"pbg" : 0,
					"pbm" : 0.000036,
					"pbe" : 0.000024,
					"countries" : [
						{
							"cc" : "SG",
							"relay" : 4,
							"bwa" : 334206,
							"bwc" : 117953,
							"fast" : 2,
							"stable" : 4,
							"guard" : 0,
							"middle" : 4,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000019999999999999998,
							"pbg" : 0,
							"pbm" : 0.000036,
							"pbe" : 0.000024
						}
					]
				},
				{
					"as" : 20807,
					"relay" : 1,
					"bwa" : 655360,
					"bwc" : 173482,
					"fast" : 1,
					"stable" : 0,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000037,
					"pbg" : 0.000076,
					"pbm" : 0.000035,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 655360,
							"bwc" : 173482,
							"fast" : 1,
							"stable" : 0,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000037,
							"pbg" : 0.000076,
							"pbm" : 0.000035,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 4713,
					"relay" : 5,
					"bwa" : 634160,
					"bwc" : 76043,
					"fast" : 4,
					"stable" : 1,
					"guard" : 0,
					"middle" : 5,
					"exit" : 0,
					"dir" : 4,
					"pbr" : 0.000023,
					"pbg" : 0,
					"pbm" : 0.00006800000000000001,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "JP",
							"relay" : 5,
							"bwa" : 634160,
							"bwc" : 76043,
							"fast" : 4,
							"stable" : 1,
							"guard" : 0,
							"middle" : 5,
							"exit" : 0,
							"dir" : 4,
							"pbr" : 0.000023,
							"pbg" : 0,
							"pbm" : 0.00006800000000000001,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 33984,
					"relay" : 2,
					"bwa" : 716800,
					"bwc" : 451539,
					"fast" : 2,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000066,
					"pbg" : 0.000033,
					"pbm" : 0.000165,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 2,
							"bwa" : 716800,
							"bwc" : 451539,
							"fast" : 2,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000066,
							"pbg" : 0.000033,
							"pbm" : 0.000165,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 3320,
					"relay" : 68,
					"bwa" : 12985032,
					"bwc" : 6005934,
					"fast" : 52,
					"stable" : 5,
					"guard" : 0,
					"middle" : 68,
					"exit" : 2,
					"dir" : 37,
					"pbr" : 0.0022769999999999995,
					"pbg" : 0,
					"pbm" : 0.006791000000000001,
					"pbe" : 0.000039999999999999996,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 68,
							"bwa" : 12985032,
							"bwc" : 6005934,
							"fast" : 52,
							"stable" : 5,
							"guard" : 0,
							"middle" : 68,
							"exit" : 2,
							"dir" : 37,
							"pbr" : 0.0022769999999999995,
							"pbg" : 0,
							"pbm" : 0.006791000000000001,
							"pbe" : 0.000039999999999999996
						}
					]
				},
				{
					"as" : 53340,
					"relay" : 2,
					"bwa" : 135168,
					"bwc" : 59475,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000017,
					"pbg" : 0,
					"pbm" : 0.000049999999999999996,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 135168,
							"bwc" : 59475,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000017,
							"pbg" : 0,
							"pbm" : 0.000049999999999999996,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 1103,
					"relay" : 8,
					"bwa" : 17765950,
					"bwc" : 15627826,
					"fast" : 8,
					"stable" : 3,
					"guard" : 2,
					"middle" : 8,
					"exit" : 0,
					"dir" : 5,
					"pbr" : 0.005262,
					"pbg" : 0.009126,
					"pbm" : 0.0066630000000000005,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 8,
							"bwa" : 17765950,
							"bwc" : 15627826,
							"fast" : 8,
							"stable" : 3,
							"guard" : 2,
							"middle" : 8,
							"exit" : 0,
							"dir" : 5,
							"pbr" : 0.005262,
							"pbg" : 0.009126,
							"pbm" : 0.0066630000000000005,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 6724,
					"relay" : 34,
					"bwa" : 38875720,
					"bwc" : 23757561,
					"fast" : 34,
					"stable" : 30,
					"guard" : 20,
					"middle" : 34,
					"exit" : 4,
					"dir" : 21,
					"pbr" : 0.012181999999999997,
					"pbg" : 0.014779,
					"pbm" : 0.019243,
					"pbe" : 0.002529,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 34,
							"bwa" : 38875720,
							"bwc" : 23757561,
							"fast" : 34,
							"stable" : 30,
							"guard" : 20,
							"middle" : 34,
							"exit" : 4,
							"dir" : 21,
							"pbr" : 0.012181999999999997,
							"pbg" : 0.014779,
							"pbm" : 0.019243,
							"pbe" : 0.002529
						}
					]
				},
				{
					"as" : 2119,
					"relay" : 19,
					"bwa" : 7659727,
					"bwc" : 5351509,
					"fast" : 18,
					"stable" : 11,
					"guard" : 4,
					"middle" : 19,
					"exit" : 4,
					"dir" : 10,
					"pbr" : 0.0022220000000000005,
					"pbg" : 0.001293,
					"pbm" : 0.005070999999999999,
					"pbe" : 0.000304,
					"countries" : [
						{
							"cc" : "NO",
							"relay" : 4,
							"bwa" : 3452928,
							"bwc" : 3164822,
							"fast" : 4,
							"stable" : 2,
							"guard" : 0,
							"middle" : 4,
							"exit" : 1,
							"dir" : 3,
							"pbr" : 0.001364,
							"pbg" : 0,
							"pbm" : 0.0040739999999999995,
							"pbe" : 0.000017
						},
						{
							"cc" : "SE",
							"relay" : 15,
							"bwa" : 4206799,
							"bwc" : 2186687,
							"fast" : 14,
							"stable" : 9,
							"guard" : 4,
							"middle" : 15,
							"exit" : 3,
							"dir" : 7,
							"pbr" : 0.0008580000000000001,
							"pbg" : 0.001293,
							"pbm" : 0.000997,
							"pbe" : 0.000287
						}
					]
				},
				{
					"as" : 15943,
					"relay" : 5,
					"bwa" : 3496317,
					"bwc" : 1285966,
					"fast" : 5,
					"stable" : 1,
					"guard" : 0,
					"middle" : 5,
					"exit" : 0,
					"dir" : 4,
					"pbr" : 0.00044300000000000003,
					"pbg" : 0,
					"pbm" : 0.001326,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 5,
							"bwa" : 3496317,
							"bwc" : 1285966,
							"fast" : 5,
							"stable" : 1,
							"guard" : 0,
							"middle" : 5,
							"exit" : 0,
							"dir" : 4,
							"pbr" : 0.00044300000000000003,
							"pbg" : 0,
							"pbm" : 0.001326,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 20454,
					"relay" : 5,
					"bwa" : 2825585,
					"bwc" : 1721034,
					"fast" : 5,
					"stable" : 4,
					"guard" : 4,
					"middle" : 5,
					"exit" : 0,
					"dir" : 3,
					"pbr" : 0.0007040000000000001,
					"pbg" : 0.001445,
					"pbm" : 0.000665,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 5,
							"bwa" : 2825585,
							"bwc" : 1721034,
							"fast" : 5,
							"stable" : 4,
							"guard" : 4,
							"middle" : 5,
							"exit" : 0,
							"dir" : 3,
							"pbr" : 0.0007040000000000001,
							"pbg" : 0.001445,
							"pbm" : 0.000665,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 3301,
					"relay" : 14,
					"bwa" : 4315067,
					"bwc" : 1702237,
					"fast" : 13,
					"stable" : 9,
					"guard" : 3,
					"middle" : 14,
					"exit" : 3,
					"dir" : 10,
					"pbr" : 0.00046100000000000004,
					"pbg" : 0.000517,
					"pbm" : 0.00078,
					"pbe" : 0.00009200000000000001,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 14,
							"bwa" : 4315067,
							"bwc" : 1702237,
							"fast" : 13,
							"stable" : 9,
							"guard" : 3,
							"middle" : 14,
							"exit" : 3,
							"dir" : 10,
							"pbr" : 0.00046100000000000004,
							"pbg" : 0.000517,
							"pbm" : 0.00078,
							"pbe" : 0.00009200000000000001
						}
					]
				},
				{
					"as" : 36352,
					"relay" : 16,
					"bwa" : 12834814,
					"bwc" : 7312938,
					"fast" : 16,
					"stable" : 8,
					"guard" : 5,
					"middle" : 16,
					"exit" : 0,
					"dir" : 6,
					"pbr" : 0.003389999999999999,
					"pbg" : 0.0007049999999999999,
					"pbm" : 0.009462,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 15,
							"bwa" : 12650494,
							"bwc" : 7299125,
							"fast" : 15,
							"stable" : 7,
							"guard" : 4,
							"middle" : 15,
							"exit" : 0,
							"dir" : 6,
							"pbr" : 0.003377999999999999,
							"pbg" : 0.0006809999999999999,
							"pbm" : 0.009451,
							"pbe" : 0
						},
						{
							"cc" : "AU",
							"relay" : 1,
							"bwa" : 184320,
							"bwc" : 13813,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000012,
							"pbg" : 0.000024,
							"pbm" : 0.000011,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 48823,
					"relay" : 2,
					"bwa" : 225280,
					"bwc" : 176554,
					"fast" : 1,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000052,
					"pbg" : 0.000101,
					"pbm" : 0.000055,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 2,
							"bwa" : 225280,
							"bwc" : 176554,
							"fast" : 1,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000052,
							"pbg" : 0.000101,
							"pbm" : 0.000055,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 2108,
					"relay" : 4,
					"bwa" : 2114463,
					"bwc" : 1924750,
					"fast" : 4,
					"stable" : 2,
					"guard" : 2,
					"middle" : 4,
					"exit" : 0,
					"dir" : 4,
					"pbr" : 0.000493,
					"pbg" : 0.000554,
					"pbm" : 0.000925,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "HR",
							"relay" : 4,
							"bwa" : 2114463,
							"bwc" : 1924750,
							"fast" : 4,
							"stable" : 2,
							"guard" : 2,
							"middle" : 4,
							"exit" : 0,
							"dir" : 4,
							"pbr" : 0.000493,
							"pbg" : 0.000554,
							"pbm" : 0.000925,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 5650,
					"relay" : 6,
					"bwa" : 2139499,
					"bwc" : 1204056,
					"fast" : 5,
					"stable" : 3,
					"guard" : 1,
					"middle" : 6,
					"exit" : 1,
					"dir" : 4,
					"pbr" : 0.00036,
					"pbg" : 0.000076,
					"pbm" : 0.000757,
					"pbe" : 0.000244,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 6,
							"bwa" : 2139499,
							"bwc" : 1204056,
							"fast" : 5,
							"stable" : 3,
							"guard" : 1,
							"middle" : 6,
							"exit" : 1,
							"dir" : 4,
							"pbr" : 0.00036,
							"pbg" : 0.000076,
							"pbm" : 0.000757,
							"pbe" : 0.000244
						}
					]
				},
				{
					"as" : 29562,
					"relay" : 16,
					"bwa" : 2303518,
					"bwc" : 793823,
					"fast" : 16,
					"stable" : 8,
					"guard" : 1,
					"middle" : 16,
					"exit" : 2,
					"dir" : 11,
					"pbr" : 0.00021700000000000002,
					"pbg" : 0.000035,
					"pbm" : 0.000572,
					"pbe" : 0.000047000000000000004,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 16,
							"bwa" : 2303518,
							"bwc" : 793823,
							"fast" : 16,
							"stable" : 8,
							"guard" : 1,
							"middle" : 16,
							"exit" : 2,
							"dir" : 11,
							"pbr" : 0.00021700000000000002,
							"pbg" : 0.000035,
							"pbm" : 0.000572,
							"pbe" : 0.000047000000000000004
						}
					]
				},
				{
					"as" : 6830,
					"relay" : 77,
					"bwa" : 30313803,
					"bwc" : 20064139,
					"fast" : 72,
					"stable" : 54,
					"guard" : 11,
					"middle" : 77,
					"exit" : 10,
					"dir" : 50,
					"pbr" : 0.0052910000000000006,
					"pbg" : 0.0069310000000000005,
					"pbm" : 0.0064800000000000005,
					"pbe" : 0.00247,
					"countries" : [
						{
							"cc" : "PL",
							"relay" : 16,
							"bwa" : 2952356,
							"bwc" : 1416441,
							"fast" : 14,
							"stable" : 12,
							"guard" : 2,
							"middle" : 16,
							"exit" : 2,
							"dir" : 10,
							"pbr" : 0.0003689999999999999,
							"pbg" : 0.000142,
							"pbm" : 0.0006670000000000001,
							"pbe" : 0.000294
						},
						{
							"cc" : "CZ",
							"relay" : 12,
							"bwa" : 1655876,
							"bwc" : 730363,
							"fast" : 9,
							"stable" : 9,
							"guard" : 1,
							"middle" : 12,
							"exit" : 1,
							"dir" : 7,
							"pbr" : 0.00029700000000000006,
							"pbg" : 0.000131,
							"pbm" : 0.000352,
							"pbe" : 0.000412
						},
						{
							"cc" : "SK",
							"relay" : 5,
							"bwa" : 1169408,
							"bwc" : 748395,
							"fast" : 5,
							"stable" : 3,
							"guard" : 0,
							"middle" : 5,
							"exit" : 1,
							"dir" : 3,
							"pbr" : 0.000197,
							"pbg" : 0,
							"pbm" : 0.000558,
							"pbe" : 0.000032
						},
						{
							"cc" : "NL",
							"relay" : 5,
							"bwa" : 957321,
							"bwc" : 258794,
							"fast" : 5,
							"stable" : 2,
							"guard" : 0,
							"middle" : 5,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.00007999999999999999,
							"pbg" : 0,
							"pbm" : 0.000239,
							"pbe" : 0
						},
						{
							"cc" : "AT",
							"relay" : 16,
							"bwa" : 18544925,
							"bwc" : 14265442,
							"fast" : 16,
							"stable" : 13,
							"guard" : 3,
							"middle" : 16,
							"exit" : 4,
							"dir" : 11,
							"pbr" : 0.003275,
							"pbg" : 0.006083000000000001,
							"pbm" : 0.003108,
							"pbe" : 0.000633
						},
						{
							"cc" : "HU",
							"relay" : 6,
							"bwa" : 1428480,
							"bwc" : 804247,
							"fast" : 6,
							"stable" : 2,
							"guard" : 0,
							"middle" : 6,
							"exit" : 0,
							"dir" : 4,
							"pbr" : 0.000244,
							"pbg" : 0,
							"pbm" : 0.000732,
							"pbe" : 0
						},
						{
							"cc" : "CH",
							"relay" : 15,
							"bwa" : 2890813,
							"bwc" : 1526268,
							"fast" : 15,
							"stable" : 12,
							"guard" : 4,
							"middle" : 15,
							"exit" : 2,
							"dir" : 11,
							"pbr" : 0.000685,
							"pbg" : 0.00028599999999999996,
							"pbm" : 0.00068,
							"pbe" : 0.001099
						},
						{
							"cc" : "RO",
							"relay" : 2,
							"bwa" : 714624,
							"bwc" : 314189,
							"fast" : 2,
							"stable" : 1,
							"guard" : 1,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.00014399999999999998,
							"pbg" : 0.000289,
							"pbm" : 0.000144,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 17511,
					"relay" : 2,
					"bwa" : 934448,
					"bwc" : 149960,
					"fast" : 2,
					"stable" : 1,
					"guard" : 1,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.00005,
					"pbg" : 0.000078,
					"pbm" : 0.00007099999999999999,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "JP",
							"relay" : 2,
							"bwa" : 934448,
							"bwc" : 149960,
							"fast" : 2,
							"stable" : 1,
							"guard" : 1,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.00005,
							"pbg" : 0.000078,
							"pbm" : 0.00007099999999999999,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 8334,
					"relay" : 3,
					"bwa" : 6856704,
					"bwc" : 6118213,
					"fast" : 3,
					"stable" : 1,
					"guard" : 0,
					"middle" : 3,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.001679,
					"pbg" : 0,
					"pbm" : 0.005038,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 3,
							"bwa" : 6856704,
							"bwc" : 6118213,
							"fast" : 3,
							"stable" : 1,
							"guard" : 0,
							"middle" : 3,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.001679,
							"pbg" : 0,
							"pbm" : 0.005038,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 3215,
					"relay" : 8,
					"bwa" : 4619413,
					"bwc" : 4116614,
					"fast" : 5,
					"stable" : 1,
					"guard" : 0,
					"middle" : 8,
					"exit" : 0,
					"dir" : 3,
					"pbr" : 0.001614,
					"pbg" : 0,
					"pbm" : 0.004842000000000001,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "FR",
							"relay" : 8,
							"bwa" : 4619413,
							"bwc" : 4116614,
							"fast" : 5,
							"stable" : 1,
							"guard" : 0,
							"middle" : 8,
							"exit" : 0,
							"dir" : 3,
							"pbr" : 0.001614,
							"pbg" : 0,
							"pbm" : 0.004842000000000001,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 56950,
					"relay" : 1,
					"bwa" : 3145728,
					"bwc" : 2083933,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000528,
					"pbg" : 0,
					"pbm" : 0.001582,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "UA",
							"relay" : 1,
							"bwa" : 3145728,
							"bwc" : 2083933,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000528,
							"pbg" : 0,
							"pbm" : 0.001582,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 13285,
					"relay" : 4,
					"bwa" : 297732,
					"bwc" : 24699,
					"fast" : 3,
					"stable" : 1,
					"guard" : 0,
					"middle" : 4,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000019,
					"pbg" : 0,
					"pbm" : 0.000043,
					"pbe" : 0.000016,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 4,
							"bwa" : 297732,
							"bwc" : 24699,
							"fast" : 3,
							"stable" : 1,
							"guard" : 0,
							"middle" : 4,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000019,
							"pbg" : 0,
							"pbm" : 0.000043,
							"pbe" : 0.000016
						}
					]
				},
				{
					"as" : 2527,
					"relay" : 3,
					"bwa" : 764767,
					"bwc" : 254345,
					"fast" : 3,
					"stable" : 3,
					"guard" : 1,
					"middle" : 3,
					"exit" : 0,
					"dir" : 3,
					"pbr" : 0.000052000000000000004,
					"pbg" : 0.000088,
					"pbm" : 0.00007000000000000001,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "JP",
							"relay" : 3,
							"bwa" : 764767,
							"bwc" : 254345,
							"fast" : 3,
							"stable" : 3,
							"guard" : 1,
							"middle" : 3,
							"exit" : 0,
							"dir" : 3,
							"pbr" : 0.000052000000000000004,
							"pbg" : 0.000088,
							"pbm" : 0.00007000000000000001,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 31103,
					"relay" : 10,
					"bwa" : 25794560,
					"bwc" : 21533299,
					"fast" : 10,
					"stable" : 10,
					"guard" : 9,
					"middle" : 10,
					"exit" : 3,
					"dir" : 7,
					"pbr" : 0.006213,
					"pbg" : 0.011451,
					"pbm" : 0.0055119999999999995,
					"pbe" : 0.001679,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 9,
							"bwa" : 25692160,
							"bwc" : 21504948,
							"fast" : 9,
							"stable" : 9,
							"guard" : 9,
							"middle" : 9,
							"exit" : 3,
							"dir" : 6,
							"pbr" : 0.0062050000000000004,
							"pbg" : 0.011451,
							"pbm" : 0.005487999999999999,
							"pbe" : 0.001679
						},
						{
							"cc" : "IT",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 28351,
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
					"as" : 40475,
					"relay" : 3,
					"bwa" : 44414,
					"bwc" : 153500,
					"fast" : 0,
					"stable" : 2,
					"guard" : 0,
					"middle" : 3,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.0000049999999999999996,
					"pbg" : 0,
					"pbm" : 0.000015000000000000002,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 1,
							"bwa" : 3454,
							"bwc" : 138,
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
						},
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 40960,
							"bwc" : 153362,
							"fast" : 0,
							"stable" : 1,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.0000049999999999999996,
							"pbg" : 0,
							"pbm" : 0.000014000000000000001,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 29859,
					"relay" : 1,
					"bwa" : 20480,
					"bwc" : 164,
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
							"bwc" : 164,
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
					"as" : 30058,
					"relay" : 31,
					"bwa" : 17470198,
					"bwc" : 12706492,
					"fast" : 10,
					"stable" : 18,
					"guard" : 5,
					"middle" : 31,
					"exit" : 20,
					"dir" : 7,
					"pbr" : 0.004930000000000004,
					"pbg" : 0.00995,
					"pbm" : 0.00466,
					"pbe" : 0.00018,
					"countries" : [
						{
							"cc" : "CZ",
							"relay" : 22,
							"bwa" : 8716976,
							"bwc" : 6435405,
							"fast" : 2,
							"stable" : 12,
							"guard" : 2,
							"middle" : 22,
							"exit" : 20,
							"dir" : 1,
							"pbr" : 0.0016259999999999992,
							"pbg" : 0.0032300000000000002,
							"pbm" : 0.0014680000000000001,
							"pbe" : 0.00018
						},
						{
							"cc" : "US",
							"relay" : 9,
							"bwa" : 8753222,
							"bwc" : 6271087,
							"fast" : 8,
							"stable" : 6,
							"guard" : 3,
							"middle" : 9,
							"exit" : 0,
							"dir" : 6,
							"pbr" : 0.003304,
							"pbg" : 0.00672,
							"pbm" : 0.0031919999999999995,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 34971,
					"relay" : 10,
					"bwa" : 3584000,
					"bwc" : 2956419,
					"fast" : 10,
					"stable" : 8,
					"guard" : 5,
					"middle" : 10,
					"exit" : 0,
					"dir" : 4,
					"pbr" : 0.0006810000000000001,
					"pbg" : 0.0008449999999999999,
					"pbm" : 0.001197,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "IT",
							"relay" : 10,
							"bwa" : 3584000,
							"bwc" : 2956419,
							"fast" : 10,
							"stable" : 8,
							"guard" : 5,
							"middle" : 10,
							"exit" : 0,
							"dir" : 4,
							"pbr" : 0.0006810000000000001,
							"pbg" : 0.0008449999999999999,
							"pbm" : 0.001197,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 11426,
					"relay" : 11,
					"bwa" : 1616359,
					"bwc" : 357227,
					"fast" : 9,
					"stable" : 5,
					"guard" : 1,
					"middle" : 11,
					"exit" : 2,
					"dir" : 9,
					"pbr" : 0.000123,
					"pbg" : 0.000032,
					"pbm" : 0.00030400000000000007,
					"pbe" : 0.000032000000000000005,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 11,
							"bwa" : 1616359,
							"bwc" : 357227,
							"fast" : 9,
							"stable" : 5,
							"guard" : 1,
							"middle" : 11,
							"exit" : 2,
							"dir" : 9,
							"pbr" : 0.000123,
							"pbg" : 0.000032,
							"pbm" : 0.00030400000000000007,
							"pbe" : 0.000032000000000000005
						}
					]
				},
				{
					"as" : 6539,
					"relay" : 1,
					"bwa" : 1079654,
					"bwc" : 581473,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000257,
					"pbg" : 0.000148,
					"pbm" : 0.000148,
					"pbe" : 0.000474,
					"countries" : [
						{
							"cc" : "CA",
							"relay" : 1,
							"bwa" : 1079654,
							"bwc" : 581473,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000257,
							"pbg" : 0.000148,
							"pbm" : 0.000148,
							"pbe" : 0.000474
						}
					]
				},
				{
					"as" : 29518,
					"relay" : 3,
					"bwa" : 1937408,
					"bwc" : 1220808,
					"fast" : 3,
					"stable" : 2,
					"guard" : 1,
					"middle" : 3,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000513,
					"pbg" : 0.000812,
					"pbm" : 0.0007250000000000001,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 3,
							"bwa" : 1937408,
							"bwc" : 1220808,
							"fast" : 3,
							"stable" : 2,
							"guard" : 1,
							"middle" : 3,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000513,
							"pbg" : 0.000812,
							"pbm" : 0.0007250000000000001,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 23387,
					"relay" : 1,
					"bwa" : 27114,
					"bwc" : 308,
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
							"bwc" : 308,
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
					"as" : 7018,
					"relay" : 17,
					"bwa" : 1510017,
					"bwc" : 353521,
					"fast" : 14,
					"stable" : 7,
					"guard" : 1,
					"middle" : 17,
					"exit" : 3,
					"dir" : 13,
					"pbr" : 0.0001,
					"pbg" : 0.000014,
					"pbm" : 0.00020800000000000001,
					"pbe" : 0.000078,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 17,
							"bwa" : 1510017,
							"bwc" : 353521,
							"fast" : 14,
							"stable" : 7,
							"guard" : 1,
							"middle" : 17,
							"exit" : 3,
							"dir" : 13,
							"pbr" : 0.0001,
							"pbg" : 0.000014,
							"pbm" : 0.00020800000000000001,
							"pbe" : 0.000078
						}
					]
				},
				{
					"as" : 8972,
					"relay" : 29,
					"bwa" : 62393844,
					"bwc" : 50904685,
					"fast" : 29,
					"stable" : 27,
					"guard" : 19,
					"middle" : 29,
					"exit" : 4,
					"dir" : 22,
					"pbr" : 0.015146000000000003,
					"pbg" : 0.022213999999999998,
					"pbm" : 0.019339,
					"pbe" : 0.003878,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 29,
							"bwa" : 62393844,
							"bwc" : 50904685,
							"fast" : 29,
							"stable" : 27,
							"guard" : 19,
							"middle" : 29,
							"exit" : 4,
							"dir" : 22,
							"pbr" : 0.015146000000000003,
							"pbg" : 0.022213999999999998,
							"pbm" : 0.019339,
							"pbe" : 0.003878
						}
					]
				},
				{
					"as" : 1257,
					"relay" : 4,
					"bwa" : 976264,
					"bwc" : 239067,
					"fast" : 4,
					"stable" : 1,
					"guard" : 1,
					"middle" : 4,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000077,
					"pbg" : 0.000044,
					"pbm" : 0.00019100000000000003,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 4,
							"bwa" : 976264,
							"bwc" : 239067,
							"fast" : 4,
							"stable" : 1,
							"guard" : 1,
							"middle" : 4,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000077,
							"pbg" : 0.000044,
							"pbm" : 0.00019100000000000003,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 29933,
					"relay" : 1,
					"bwa" : 196227,
					"bwc" : 72803,
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
							"bwc" : 72803,
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
					"as" : 39582,
					"relay" : 2,
					"bwa" : 204800,
					"bwc" : 54738,
					"fast" : 2,
					"stable" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 2,
					"dir" : 0,
					"pbr" : 0.000022,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000066,
					"countries" : [
						{
							"cc" : "TR",
							"relay" : 2,
							"bwa" : 204800,
							"bwc" : 54738,
							"fast" : 2,
							"stable" : 2,
							"guard" : 0,
							"middle" : 2,
							"exit" : 2,
							"dir" : 0,
							"pbr" : 0.000022,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000066
						}
					]
				},
				{
					"as" : 36850,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 32119,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.00001,
					"pbg" : 0,
					"pbm" : 0.00003,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 32119,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.00001,
							"pbg" : 0,
							"pbm" : 0.00003,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 13030,
					"relay" : 9,
					"bwa" : 32703286,
					"bwc" : 24855859,
					"fast" : 9,
					"stable" : 9,
					"guard" : 8,
					"middle" : 9,
					"exit" : 8,
					"dir" : 8,
					"pbr" : 0.011723,
					"pbg" : 0.006773,
					"pbm" : 0.006797,
					"pbe" : 0.021605,
					"countries" : [
						{
							"cc" : "CH",
							"relay" : 9,
							"bwa" : 32703286,
							"bwc" : 24855859,
							"fast" : 9,
							"stable" : 9,
							"guard" : 8,
							"middle" : 9,
							"exit" : 8,
							"dir" : 8,
							"pbr" : 0.011723,
							"pbg" : 0.006773,
							"pbm" : 0.006797,
							"pbe" : 0.021605
						}
					]
				},
				{
					"as" : 5645,
					"relay" : 7,
					"bwa" : 368515,
					"bwc" : 90972,
					"fast" : 4,
					"stable" : 5,
					"guard" : 0,
					"middle" : 7,
					"exit" : 0,
					"dir" : 4,
					"pbr" : 0.000022999999999999997,
					"pbg" : 0,
					"pbm" : 0.000069,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "CA",
							"relay" : 7,
							"bwa" : 368515,
							"bwc" : 90972,
							"fast" : 4,
							"stable" : 5,
							"guard" : 0,
							"middle" : 7,
							"exit" : 0,
							"dir" : 4,
							"pbr" : 0.000022999999999999997,
							"pbg" : 0,
							"pbm" : 0.000069,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 19366,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 15532,
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
							"bwc" : 15532,
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
					"as" : 6128,
					"relay" : 10,
					"bwa" : 2238996,
					"bwc" : 1115460,
					"fast" : 10,
					"stable" : 8,
					"guard" : 3,
					"middle" : 10,
					"exit" : 0,
					"dir" : 6,
					"pbr" : 0.00049,
					"pbg" : 0.000907,
					"pbm" : 0.0005670000000000001,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 10,
							"bwa" : 2238996,
							"bwc" : 1115460,
							"fast" : 10,
							"stable" : 8,
							"guard" : 3,
							"middle" : 10,
							"exit" : 0,
							"dir" : 6,
							"pbr" : 0.00049,
							"pbg" : 0.000907,
							"pbm" : 0.0005670000000000001,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 35425,
					"relay" : 6,
					"bwa" : 6348733,
					"bwc" : 5428795,
					"fast" : 4,
					"stable" : 3,
					"guard" : 1,
					"middle" : 6,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.001736,
					"pbg" : 0.003395,
					"pbm" : 0.0018119999999999998,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 6,
							"bwa" : 6348733,
							"bwc" : 5428795,
							"fast" : 4,
							"stable" : 3,
							"guard" : 1,
							"middle" : 6,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.001736,
							"pbg" : 0.003395,
							"pbm" : 0.0018119999999999998,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 18809,
					"relay" : 4,
					"bwa" : 284554,
					"bwc" : 96208,
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
							"bwc" : 96208,
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
					"as" : 25538,
					"relay" : 1,
					"bwa" : 20480,
					"bwc" : 1225,
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
							"bwc" : 1225,
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
					"as" : 35475,
					"relay" : 1,
					"bwa" : 532512,
					"bwc" : 357199,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000034,
					"pbg" : 0,
					"pbm" : 0.000103,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 532512,
							"bwc" : 357199,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000034,
							"pbg" : 0,
							"pbm" : 0.000103,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 15685,
					"relay" : 1,
					"bwa" : 256000,
					"bwc" : 85493,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000046,
					"pbg" : 0.000094,
					"pbm" : 0.000043,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "CZ",
							"relay" : 1,
							"bwa" : 256000,
							"bwc" : 85493,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000046,
							"pbg" : 0.000094,
							"pbm" : 0.000043,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 16086,
					"relay" : 11,
					"bwa" : 3357696,
					"bwc" : 3776509,
					"fast" : 11,
					"stable" : 9,
					"guard" : 1,
					"middle" : 11,
					"exit" : 3,
					"dir" : 9,
					"pbr" : 0.001,
					"pbg" : 0.000081,
					"pbm" : 0.0026449999999999998,
					"pbe" : 0.000276,
					"countries" : [
						{
							"cc" : "FI",
							"relay" : 11,
							"bwa" : 3357696,
							"bwc" : 3776509,
							"fast" : 11,
							"stable" : 9,
							"guard" : 1,
							"middle" : 11,
							"exit" : 3,
							"dir" : 9,
							"pbr" : 0.001,
							"pbg" : 0.000081,
							"pbm" : 0.0026449999999999998,
							"pbe" : 0.000276
						}
					]
				},
				{
					"as" : 5577,
					"relay" : 29,
					"bwa" : 12792832,
					"bwc" : 8956877,
					"fast" : 13,
					"stable" : 23,
					"guard" : 8,
					"middle" : 29,
					"exit" : 18,
					"dir" : 10,
					"pbr" : 0.0030949999999999997,
					"pbg" : 0.0047870000000000005,
					"pbm" : 0.004168,
					"pbe" : 0.00032700000000000003,
					"countries" : [
						{
							"cc" : "LU",
							"relay" : 29,
							"bwa" : 12792832,
							"bwc" : 8956877,
							"fast" : 13,
							"stable" : 23,
							"guard" : 8,
							"middle" : 29,
							"exit" : 18,
							"dir" : 10,
							"pbr" : 0.0030949999999999997,
							"pbg" : 0.0047870000000000005,
							"pbm" : 0.004168,
							"pbe" : 0.00032700000000000003
						}
					]
				},
				{
					"as" : 34823,
					"relay" : 3,
					"bwa" : 6590271,
					"bwc" : 3431769,
					"fast" : 3,
					"stable" : 2,
					"guard" : 2,
					"middle" : 3,
					"exit" : 3,
					"dir" : 3,
					"pbr" : 0.001335,
					"pbg" : 0.000579,
					"pbm" : 0.000579,
					"pbe" : 0.0028469999999999997,
					"countries" : [
						{
							"cc" : "DK",
							"relay" : 3,
							"bwa" : 6590271,
							"bwc" : 3431769,
							"fast" : 3,
							"stable" : 2,
							"guard" : 2,
							"middle" : 3,
							"exit" : 3,
							"dir" : 3,
							"pbr" : 0.001335,
							"pbg" : 0.000579,
							"pbm" : 0.000579,
							"pbe" : 0.0028469999999999997
						}
					]
				},
				{
					"as" : 57668,
					"relay" : 10,
					"bwa" : 29584338,
					"bwc" : 7095990,
					"fast" : 4,
					"stable" : 10,
					"guard" : 2,
					"middle" : 10,
					"exit" : 8,
					"dir" : 2,
					"pbr" : 0.006658,
					"pbg" : 0.005856,
					"pbm" : 0.009677,
					"pbe" : 0.0044410000000000005,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 8,
							"bwa" : 19098578,
							"bwc" : 211889,
							"fast" : 2,
							"stable" : 8,
							"guard" : 1,
							"middle" : 8,
							"exit" : 6,
							"dir" : 0,
							"pbr" : 0.0044020000000000005,
							"pbg" : 0.004664,
							"pbm" : 0.008486,
							"pbe" : 0.000054000000000000005
						},
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 5242880,
							"bwc" : 4625424,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.002061,
							"pbg" : 0.001192,
							"pbm" : 0.001191,
							"pbe" : 0.003801
						},
						{
							"cc" : "RO",
							"relay" : 1,
							"bwa" : 5242880,
							"bwc" : 2258677,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000195,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000586
						}
					]
				},
				{
					"as" : 24751,
					"relay" : 1,
					"bwa" : 1024000,
					"bwc" : 1023680,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000434,
					"pbg" : 0.000251,
					"pbm" : 0.000251,
					"pbe" : 0.0008,
					"countries" : [
						{
							"cc" : "FI",
							"relay" : 1,
							"bwa" : 1024000,
							"bwc" : 1023680,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000434,
							"pbg" : 0.000251,
							"pbm" : 0.000251,
							"pbe" : 0.0008
						}
					]
				},
				{
					"as" : 35592,
					"relay" : 6,
					"bwa" : 14012570,
					"bwc" : 8011191,
					"fast" : 6,
					"stable" : 5,
					"guard" : 5,
					"middle" : 6,
					"exit" : 6,
					"dir" : 5,
					"pbr" : 0.003649,
					"pbg" : 0.0020629999999999997,
					"pbm" : 0.002061,
					"pbe" : 0.006823,
					"countries" : [
						{
							"cc" : "CZ",
							"relay" : 6,
							"bwa" : 14012570,
							"bwc" : 8011191,
							"fast" : 6,
							"stable" : 5,
							"guard" : 5,
							"middle" : 6,
							"exit" : 6,
							"dir" : 5,
							"pbr" : 0.003649,
							"pbg" : 0.0020629999999999997,
							"pbm" : 0.002061,
							"pbe" : 0.006823
						}
					]
				},
				{
					"as" : 11841,
					"relay" : 1,
					"bwa" : 98304,
					"bwc" : 32698,
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
							"cc" : "US",
							"relay" : 1,
							"bwa" : 98304,
							"bwc" : 32698,
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
					"as" : 3269,
					"relay" : 11,
					"bwa" : 377749,
					"bwc" : 27311,
					"fast" : 4,
					"stable" : 3,
					"guard" : 0,
					"middle" : 11,
					"exit" : 1,
					"dir" : 4,
					"pbr" : 0.000024,
					"pbg" : 0,
					"pbm" : 0.00007,
					"pbe" : 0.000003,
					"countries" : [
						{
							"cc" : "IT",
							"relay" : 11,
							"bwa" : 377749,
							"bwc" : 27311,
							"fast" : 4,
							"stable" : 3,
							"guard" : 0,
							"middle" : 11,
							"exit" : 1,
							"dir" : 4,
							"pbr" : 0.000024,
							"pbg" : 0,
							"pbm" : 0.00007,
							"pbe" : 0.000003
						}
					]
				},
				{
					"as" : 20093,
					"relay" : 1,
					"bwa" : 326446,
					"bwc" : 51284,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000018,
					"pbg" : 0,
					"pbm" : 0.000053,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 326446,
							"bwc" : 51284,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
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
					"as" : 7459,
					"relay" : 1,
					"bwa" : 236378,
					"bwc" : 54480,
					"fast" : 1,
					"stable" : 1,
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
							"cc" : "US",
							"relay" : 1,
							"bwa" : 236378,
							"bwc" : 54480,
							"fast" : 1,
							"stable" : 1,
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
					"as" : 15830,
					"relay" : 18,
					"bwa" : 8409673,
					"bwc" : 6375998,
					"fast" : 18,
					"stable" : 12,
					"guard" : 4,
					"middle" : 18,
					"exit" : 2,
					"dir" : 7,
					"pbr" : 0.002094,
					"pbg" : 0.001964,
					"pbm" : 0.0041919999999999995,
					"pbe" : 0.000124,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 18,
							"bwa" : 8409673,
							"bwc" : 6375998,
							"fast" : 18,
							"stable" : 12,
							"guard" : 4,
							"middle" : 18,
							"exit" : 2,
							"dir" : 7,
							"pbr" : 0.002094,
							"pbg" : 0.001964,
							"pbm" : 0.0041919999999999995,
							"pbe" : 0.000124
						}
					]
				},
				{
					"as" : 15003,
					"relay" : 3,
					"bwa" : 4872192,
					"bwc" : 4691394,
					"fast" : 3,
					"stable" : 3,
					"guard" : 2,
					"middle" : 3,
					"exit" : 2,
					"dir" : 3,
					"pbr" : 0.0032799999999999995,
					"pbg" : 0.0018900000000000002,
					"pbm" : 0.0019259999999999998,
					"pbe" : 0.006027,
					"countries" : [
						{
							"cc" : "CA",
							"relay" : 1,
							"bwa" : 4194304,
							"bwc" : 4179689,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.003168,
							"pbg" : 0.001832,
							"pbm" : 0.001831,
							"pbe" : 0.005843
						},
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 677888,
							"bwc" : 511705,
							"fast" : 2,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.00011200000000000001,
							"pbg" : 0.000058,
							"pbm" : 0.000095,
							"pbe" : 0.000184
						}
					]
				},
				{
					"as" : 786,
					"relay" : 4,
					"bwa" : 1538585,
					"bwc" : 551071,
					"fast" : 4,
					"stable" : 2,
					"guard" : 1,
					"middle" : 4,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000289,
					"pbg" : 0.000479,
					"pbm" : 0.00038700000000000003,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 4,
							"bwa" : 1538585,
							"bwc" : 551071,
							"fast" : 4,
							"stable" : 2,
							"guard" : 1,
							"middle" : 4,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000289,
							"pbg" : 0.000479,
							"pbm" : 0.00038700000000000003,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 719,
					"relay" : 7,
					"bwa" : 1345863,
					"bwc" : 570247,
					"fast" : 6,
					"stable" : 6,
					"guard" : 1,
					"middle" : 7,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.000155,
					"pbg" : 0.000083,
					"pbm" : 0.00035800000000000003,
					"pbe" : 0.000028,
					"countries" : [
						{
							"cc" : "FI",
							"relay" : 7,
							"bwa" : 1345863,
							"bwc" : 570247,
							"fast" : 6,
							"stable" : 6,
							"guard" : 1,
							"middle" : 7,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.000155,
							"pbg" : 0.000083,
							"pbm" : 0.00035800000000000003,
							"pbe" : 0.000028
						}
					]
				},
				{
					"as" : 31364,
					"relay" : 2,
					"bwa" : 655157,
					"bwc" : 155732,
					"fast" : 2,
					"stable" : 1,
					"guard" : 1,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000024999999999999998,
					"pbg" : 0.000035,
					"pbm" : 0.000041,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 2,
							"bwa" : 655157,
							"bwc" : 155732,
							"fast" : 2,
							"stable" : 1,
							"guard" : 1,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000024999999999999998,
							"pbg" : 0.000035,
							"pbm" : 0.000041,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 8402,
					"relay" : 17,
					"bwa" : 11886791,
					"bwc" : 6394288,
					"fast" : 17,
					"stable" : 5,
					"guard" : 4,
					"middle" : 17,
					"exit" : 2,
					"dir" : 14,
					"pbr" : 0.0031329999999999995,
					"pbg" : 0.0015170000000000001,
					"pbm" : 0.007838,
					"pbe" : 0.000040999999999999994,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 17,
							"bwa" : 11886791,
							"bwc" : 6394288,
							"fast" : 17,
							"stable" : 5,
							"guard" : 4,
							"middle" : 17,
							"exit" : 2,
							"dir" : 14,
							"pbr" : 0.0031329999999999995,
							"pbg" : 0.0015170000000000001,
							"pbm" : 0.007838,
							"pbe" : 0.000040999999999999994
						}
					]
				},
				{
					"as" : 5615,
					"relay" : 4,
					"bwa" : 527360,
					"bwc" : 132166,
					"fast" : 4,
					"stable" : 2,
					"guard" : 1,
					"middle" : 4,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000043,
					"pbg" : 0.000033,
					"pbm" : 0.00005,
					"pbe" : 0.000044,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 4,
							"bwa" : 527360,
							"bwc" : 132166,
							"fast" : 4,
							"stable" : 2,
							"guard" : 1,
							"middle" : 4,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000043,
							"pbg" : 0.000033,
							"pbm" : 0.00005,
							"pbe" : 0.000044
						}
					]
				},
				{
					"as" : 5432,
					"relay" : 6,
					"bwa" : 1153213,
					"bwc" : 450801,
					"fast" : 6,
					"stable" : 0,
					"guard" : 0,
					"middle" : 6,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.00014399999999999998,
					"pbg" : 0,
					"pbm" : 0.000431,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "BE",
							"relay" : 6,
							"bwa" : 1153213,
							"bwc" : 450801,
							"fast" : 6,
							"stable" : 0,
							"guard" : 0,
							"middle" : 6,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.00014399999999999998,
							"pbg" : 0,
							"pbm" : 0.000431,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 30962,
					"relay" : 3,
					"bwa" : 1967063,
					"bwc" : 1089230,
					"fast" : 3,
					"stable" : 3,
					"guard" : 0,
					"middle" : 3,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.00025,
					"pbg" : 0,
					"pbm" : 0.0007499999999999999,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 3,
							"bwa" : 1967063,
							"bwc" : 1089230,
							"fast" : 3,
							"stable" : 3,
							"guard" : 0,
							"middle" : 3,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.00025,
							"pbg" : 0,
							"pbm" : 0.0007499999999999999,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 46652,
					"relay" : 22,
					"bwa" : 38624621,
					"bwc" : 27608926,
					"fast" : 21,
					"stable" : 17,
					"guard" : 13,
					"middle" : 22,
					"exit" : 3,
					"dir" : 15,
					"pbr" : 0.009960999999999998,
					"pbg" : 0.011178999999999998,
					"pbm" : 0.014790000000000003,
					"pbe" : 0.003915,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 17,
							"bwa" : 22766639,
							"bwc" : 16528968,
							"fast" : 16,
							"stable" : 13,
							"guard" : 9,
							"middle" : 17,
							"exit" : 3,
							"dir" : 14,
							"pbr" : 0.006207000000000001,
							"pbg" : 0.0035580000000000004,
							"pbm" : 0.011149000000000001,
							"pbe" : 0.003915
						},
						{
							"cc" : "NL",
							"relay" : 5,
							"bwa" : 15857982,
							"bwc" : 11079958,
							"fast" : 5,
							"stable" : 4,
							"guard" : 4,
							"middle" : 5,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.003754,
							"pbg" : 0.007621,
							"pbm" : 0.003641,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 23292,
					"relay" : 1,
					"bwa" : 53489,
					"bwc" : 4841,
					"fast" : 1,
					"stable" : 0,
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
							"bwa" : 53489,
							"bwc" : 4841,
							"fast" : 1,
							"stable" : 0,
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
					"as" : 24961,
					"relay" : 12,
					"bwa" : 10998430,
					"bwc" : 7471610,
					"fast" : 12,
					"stable" : 11,
					"guard" : 6,
					"middle" : 12,
					"exit" : 1,
					"dir" : 7,
					"pbr" : 0.005302,
					"pbg" : 0.010460999999999998,
					"pbm" : 0.004985,
					"pbe" : 0.000462,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 12,
							"bwa" : 10998430,
							"bwc" : 7471610,
							"fast" : 12,
							"stable" : 11,
							"guard" : 6,
							"middle" : 12,
							"exit" : 1,
							"dir" : 7,
							"pbr" : 0.005302,
							"pbg" : 0.010460999999999998,
							"pbm" : 0.004985,
							"pbe" : 0.000462
						}
					]
				},
				{
					"as" : 2856,
					"relay" : 15,
					"bwa" : 4961041,
					"bwc" : 1745401,
					"fast" : 13,
					"stable" : 6,
					"guard" : 2,
					"middle" : 15,
					"exit" : 2,
					"dir" : 10,
					"pbr" : 0.000559,
					"pbg" : 0.000234,
					"pbm" : 0.0011690000000000001,
					"pbe" : 0.000275,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 15,
							"bwa" : 4961041,
							"bwc" : 1745401,
							"fast" : 13,
							"stable" : 6,
							"guard" : 2,
							"middle" : 15,
							"exit" : 2,
							"dir" : 10,
							"pbr" : 0.000559,
							"pbg" : 0.000234,
							"pbm" : 0.0011690000000000001,
							"pbe" : 0.000275
						}
					]
				},
				{
					"as" : 12897,
					"relay" : 1,
					"bwa" : 815569,
					"bwc" : 376601,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000118,
					"pbg" : 0,
					"pbm" : 0.000355,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 1,
							"bwa" : 815569,
							"bwc" : 376601,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000118,
							"pbg" : 0,
							"pbm" : 0.000355,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 15290,
					"relay" : 1,
					"bwa" : 55977,
					"bwc" : 10448,
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
							"bwa" : 55977,
							"bwc" : 10448,
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
					"as" : 13768,
					"relay" : 6,
					"bwa" : 1308672,
					"bwc" : 862169,
					"fast" : 6,
					"stable" : 5,
					"guard" : 2,
					"middle" : 6,
					"exit" : 1,
					"dir" : 3,
					"pbr" : 0.000174,
					"pbg" : 0.000282,
					"pbm" : 0.000207,
					"pbe" : 0.000034,
					"countries" : [
						{
							"cc" : "CA",
							"relay" : 2,
							"bwa" : 153600,
							"bwc" : 20628,
							"fast" : 2,
							"stable" : 1,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000012,
							"pbg" : 0,
							"pbm" : 0.000036,
							"pbe" : 0
						},
						{
							"cc" : "US",
							"relay" : 4,
							"bwa" : 1155072,
							"bwc" : 841541,
							"fast" : 4,
							"stable" : 4,
							"guard" : 2,
							"middle" : 4,
							"exit" : 1,
							"dir" : 3,
							"pbr" : 0.000162,
							"pbg" : 0.000282,
							"pbm" : 0.000171,
							"pbe" : 0.000034
						}
					]
				},
				{
					"as" : 10929,
					"relay" : 4,
					"bwa" : 5974540,
					"bwc" : 2151649,
					"fast" : 4,
					"stable" : 3,
					"guard" : 2,
					"middle" : 4,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000595,
					"pbg" : 0.000329,
					"pbm" : 0.001458,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "CA",
							"relay" : 4,
							"bwa" : 5974540,
							"bwc" : 2151649,
							"fast" : 4,
							"stable" : 3,
							"guard" : 2,
							"middle" : 4,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000595,
							"pbg" : 0.000329,
							"pbm" : 0.001458,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 5713,
					"relay" : 1,
					"bwa" : 20480,
					"bwc" : 67,
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
							"bwc" : 67,
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
					"as" : 33837,
					"relay" : 3,
					"bwa" : 498285,
					"bwc" : 190493,
					"fast" : 3,
					"stable" : 1,
					"guard" : 1,
					"middle" : 3,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.000076,
					"pbg" : 0.0001,
					"pbm" : 0.00008400000000000001,
					"pbe" : 0.000044,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 3,
							"bwa" : 498285,
							"bwc" : 190493,
							"fast" : 3,
							"stable" : 1,
							"guard" : 1,
							"middle" : 3,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.000076,
							"pbg" : 0.0001,
							"pbm" : 0.00008400000000000001,
							"pbe" : 0.000044
						}
					]
				},
				{
					"as" : 50066,
					"relay" : 2,
					"bwa" : 409600,
					"bwc" : 263303,
					"fast" : 2,
					"stable" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000066,
					"pbg" : 0,
					"pbm" : 0.0002,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 2,
							"bwa" : 409600,
							"bwc" : 263303,
							"fast" : 2,
							"stable" : 2,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000066,
							"pbg" : 0,
							"pbm" : 0.0002,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 10143,
					"relay" : 2,
					"bwa" : 112640,
					"bwc" : 14804,
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
							"bwc" : 14804,
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
					"as" : 5483,
					"relay" : 4,
					"bwa" : 484104,
					"bwc" : 110938,
					"fast" : 4,
					"stable" : 0,
					"guard" : 0,
					"middle" : 4,
					"exit" : 1,
					"dir" : 4,
					"pbr" : 0.000031,
					"pbg" : 0,
					"pbm" : 0.000047000000000000004,
					"pbe" : 0.000044,
					"countries" : [
						{
							"cc" : "HU",
							"relay" : 4,
							"bwa" : 484104,
							"bwc" : 110938,
							"fast" : 4,
							"stable" : 0,
							"guard" : 0,
							"middle" : 4,
							"exit" : 1,
							"dir" : 4,
							"pbr" : 0.000031,
							"pbg" : 0,
							"pbm" : 0.000047000000000000004,
							"pbe" : 0.000044
						}
					]
				},
				{
					"as" : 209,
					"relay" : 18,
					"bwa" : 1726347,
					"bwc" : 470994,
					"fast" : 16,
					"stable" : 6,
					"guard" : 0,
					"middle" : 18,
					"exit" : 1,
					"dir" : 10,
					"pbr" : 0.000128,
					"pbg" : 0,
					"pbm" : 0.000302,
					"pbe" : 0.00008,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 18,
							"bwa" : 1726347,
							"bwc" : 470994,
							"fast" : 16,
							"stable" : 6,
							"guard" : 0,
							"middle" : 18,
							"exit" : 1,
							"dir" : 10,
							"pbr" : 0.000128,
							"pbg" : 0,
							"pbm" : 0.000302,
							"pbe" : 0.00008
						}
					]
				},
				{
					"as" : 37560,
					"relay" : 2,
					"bwa" : 484813,
					"bwc" : 94315,
					"fast" : 2,
					"stable" : 0,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000032,
					"pbg" : 0,
					"pbm" : 0.000096,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 2,
							"bwa" : 484813,
							"bwc" : 94315,
							"fast" : 2,
							"stable" : 0,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000032,
							"pbg" : 0,
							"pbm" : 0.000096,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 9304,
					"relay" : 1,
					"bwa" : 36907,
					"bwc" : 202,
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
							"bwc" : 202,
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
					"as" : 32875,
					"relay" : 3,
					"bwa" : 182272,
					"bwc" : 107295,
					"fast" : 3,
					"stable" : 1,
					"guard" : 0,
					"middle" : 3,
					"exit" : 0,
					"dir" : 3,
					"pbr" : 0.000016,
					"pbg" : 0,
					"pbm" : 0.00004599999999999999,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 3,
							"bwa" : 182272,
							"bwc" : 107295,
							"fast" : 3,
							"stable" : 1,
							"guard" : 0,
							"middle" : 3,
							"exit" : 0,
							"dir" : 3,
							"pbr" : 0.000016,
							"pbg" : 0,
							"pbm" : 0.00004599999999999999,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 44724,
					"relay" : 2,
					"bwa" : 1323398,
					"bwc" : 284431,
					"fast" : 2,
					"stable" : 0,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000074,
					"pbg" : 0,
					"pbm" : 0.000222,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 2,
							"bwa" : 1323398,
							"bwc" : 284431,
							"fast" : 2,
							"stable" : 0,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000074,
							"pbg" : 0,
							"pbm" : 0.000222,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 2516,
					"relay" : 12,
					"bwa" : 5158295,
					"bwc" : 2211895,
					"fast" : 12,
					"stable" : 10,
					"guard" : 3,
					"middle" : 12,
					"exit" : 5,
					"dir" : 4,
					"pbr" : 0.000527,
					"pbg" : 0.000194,
					"pbm" : 0.00028099999999999995,
					"pbe" : 0.0011070000000000001,
					"countries" : [
						{
							"cc" : "JP",
							"relay" : 8,
							"bwa" : 4717975,
							"bwc" : 2047157,
							"fast" : 8,
							"stable" : 6,
							"guard" : 3,
							"middle" : 8,
							"exit" : 2,
							"dir" : 3,
							"pbr" : 0.000475,
							"pbg" : 0.000194,
							"pbm" : 0.00025699999999999996,
							"pbe" : 0.000978
						},
						{
							"cc" : "CN",
							"relay" : 4,
							"bwa" : 440320,
							"bwc" : 164738,
							"fast" : 4,
							"stable" : 4,
							"guard" : 0,
							"middle" : 4,
							"exit" : 3,
							"dir" : 1,
							"pbr" : 0.000052,
							"pbg" : 0,
							"pbm" : 0.000024,
							"pbe" : 0.000129
						}
					]
				},
				{
					"as" : 15467,
					"relay" : 1,
					"bwa" : 8192000,
					"bwc" : 8001629,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.002569,
					"pbg" : 0.005299,
					"pbm" : 0.002407,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "HU",
							"relay" : 1,
							"bwa" : 8192000,
							"bwc" : 8001629,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.002569,
							"pbg" : 0.005299,
							"pbm" : 0.002407,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 11814,
					"relay" : 3,
					"bwa" : 202752,
					"bwc" : 63209,
					"fast" : 2,
					"stable" : 1,
					"guard" : 0,
					"middle" : 3,
					"exit" : 0,
					"dir" : 3,
					"pbr" : 0.000016000000000000003,
					"pbg" : 0,
					"pbm" : 0.000049,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "CA",
							"relay" : 3,
							"bwa" : 202752,
							"bwc" : 63209,
							"fast" : 2,
							"stable" : 1,
							"guard" : 0,
							"middle" : 3,
							"exit" : 0,
							"dir" : 3,
							"pbr" : 0.000016000000000000003,
							"pbg" : 0,
							"pbm" : 0.000049,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 6079,
					"relay" : 5,
					"bwa" : 718470,
					"bwc" : 276100,
					"fast" : 5,
					"stable" : 3,
					"guard" : 0,
					"middle" : 5,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000092,
					"pbg" : 0,
					"pbm" : 0.00027800000000000004,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 5,
							"bwa" : 718470,
							"bwc" : 276100,
							"fast" : 5,
							"stable" : 3,
							"guard" : 0,
							"middle" : 5,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000092,
							"pbg" : 0,
							"pbm" : 0.00027800000000000004,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 30693,
					"relay" : 5,
					"bwa" : 36602146,
					"bwc" : 23486024,
					"fast" : 5,
					"stable" : 5,
					"guard" : 4,
					"middle" : 5,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.008275,
					"pbg" : 0.012437999999999998,
					"pbm" : 0.012386,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 5,
							"bwa" : 36602146,
							"bwc" : 23486024,
							"fast" : 5,
							"stable" : 5,
							"guard" : 4,
							"middle" : 5,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.008275,
							"pbg" : 0.012437999999999998,
							"pbm" : 0.012386,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 3292,
					"relay" : 10,
					"bwa" : 7990624,
					"bwc" : 5488630,
					"fast" : 9,
					"stable" : 7,
					"guard" : 4,
					"middle" : 10,
					"exit" : 4,
					"dir" : 7,
					"pbr" : 0.001799,
					"pbg" : 0.0033529999999999996,
					"pbm" : 0.001872,
					"pbe" : 0.000171,
					"countries" : [
						{
							"cc" : "DK",
							"relay" : 8,
							"bwa" : 7904608,
							"bwc" : 5476029,
							"fast" : 8,
							"stable" : 5,
							"guard" : 4,
							"middle" : 8,
							"exit" : 4,
							"dir" : 6,
							"pbr" : 0.001791,
							"pbg" : 0.0033529999999999996,
							"pbm" : 0.001849,
							"pbe" : 0.000171
						},
						{
							"cc" : "FI",
							"relay" : 1,
							"bwa" : 65536,
							"bwc" : 12311,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000005,
							"pbg" : 0,
							"pbm" : 0.000014,
							"pbe" : 0
						},
						{
							"cc" : "SE",
							"relay" : 1,
							"bwa" : 20480,
							"bwc" : 290,
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
					"as" : 11351,
					"relay" : 7,
					"bwa" : 1564930,
					"bwc" : 240338,
					"fast" : 6,
					"stable" : 3,
					"guard" : 1,
					"middle" : 7,
					"exit" : 0,
					"dir" : 4,
					"pbr" : 0.00018,
					"pbg" : 0.000258,
					"pbm" : 0.000283,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 7,
							"bwa" : 1564930,
							"bwc" : 240338,
							"fast" : 6,
							"stable" : 3,
							"guard" : 1,
							"middle" : 7,
							"exit" : 0,
							"dir" : 4,
							"pbr" : 0.00018,
							"pbg" : 0.000258,
							"pbm" : 0.000283,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 53111,
					"relay" : 1,
					"bwa" : 987648,
					"bwc" : 104922,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000038,
					"pbg" : 0,
					"pbm" : 0.000115,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "BR",
							"relay" : 1,
							"bwa" : 987648,
							"bwc" : 104922,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000038,
							"pbg" : 0,
							"pbm" : 0.000115,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 13276,
					"relay" : 1,
					"bwa" : 225280,
					"bwc" : 135938,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000028,
					"pbg" : 0.000058,
					"pbm" : 0.000026,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "FI",
							"relay" : 1,
							"bwa" : 225280,
							"bwc" : 135938,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000028,
							"pbg" : 0.000058,
							"pbm" : 0.000026,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 7065,
					"relay" : 2,
					"bwa" : 4643840,
					"bwc" : 4580029,
					"fast" : 1,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.0015869999999999999,
					"pbg" : 0.000916,
					"pbm" : 0.000925,
					"pbe" : 0.002921,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 4643840,
							"bwc" : 4580029,
							"fast" : 1,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.0015869999999999999,
							"pbg" : 0.000916,
							"pbm" : 0.000925,
							"pbe" : 0.002921
						}
					]
				},
				{
					"as" : 12479,
					"relay" : 2,
					"bwa" : 121856,
					"bwc" : 43628,
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
							"bwc" : 43628,
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
					"as" : 23674,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 73195,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000006,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000018,
					"countries" : [
						{
							"cc" : "PK",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 73195,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000006,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000018
						}
					]
				},
				{
					"as" : 23655,
					"relay" : 1,
					"bwa" : 59944,
					"bwc" : 811,
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
							"bwc" : 811,
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
					"as" : 40788,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 5194,
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
							"bwc" : 5194,
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
					"as" : 22773,
					"relay" : 25,
					"bwa" : 6246702,
					"bwc" : 1968659,
					"fast" : 23,
					"stable" : 16,
					"guard" : 3,
					"middle" : 25,
					"exit" : 4,
					"dir" : 17,
					"pbr" : 0.0006010000000000001,
					"pbg" : 0.00041299999999999996,
					"pbm" : 0.0011939999999999997,
					"pbe" : 0.000205,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 25,
							"bwa" : 6246702,
							"bwc" : 1968659,
							"fast" : 23,
							"stable" : 16,
							"guard" : 3,
							"middle" : 25,
							"exit" : 4,
							"dir" : 17,
							"pbr" : 0.0006010000000000001,
							"pbg" : 0.00041299999999999996,
							"pbm" : 0.0011939999999999997,
							"pbe" : 0.000205
						}
					]
				},
				{
					"as" : 3216,
					"relay" : 1,
					"bwa" : 1048576,
					"bwc" : 1048576,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000286,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000858,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 1048576,
							"bwc" : 1048576,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000286,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000858
						}
					]
				},
				{
					"as" : 43350,
					"relay" : 6,
					"bwa" : 86371053,
					"bwc" : 65954612,
					"fast" : 6,
					"stable" : 5,
					"guard" : 5,
					"middle" : 6,
					"exit" : 5,
					"dir" : 4,
					"pbr" : 0.031853,
					"pbg" : 0.018407,
					"pbm" : 0.018297,
					"pbe" : 0.058857999999999994,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 6,
							"bwa" : 86371053,
							"bwc" : 65954612,
							"fast" : 6,
							"stable" : 5,
							"guard" : 5,
							"middle" : 6,
							"exit" : 5,
							"dir" : 4,
							"pbr" : 0.031853,
							"pbg" : 0.018407,
							"pbm" : 0.018297,
							"pbe" : 0.058857999999999994
						}
					]
				},
				{
					"as" : 3303,
					"relay" : 5,
					"bwa" : 808133,
					"bwc" : 332514,
					"fast" : 5,
					"stable" : 4,
					"guard" : 1,
					"middle" : 5,
					"exit" : 2,
					"dir" : 2,
					"pbr" : 0.000039,
					"pbg" : 0.000014,
					"pbm" : 0.000069,
					"pbe" : 0.000033,
					"countries" : [
						{
							"cc" : "CH",
							"relay" : 5,
							"bwa" : 808133,
							"bwc" : 332514,
							"fast" : 5,
							"stable" : 4,
							"guard" : 1,
							"middle" : 5,
							"exit" : 2,
							"dir" : 2,
							"pbr" : 0.000039,
							"pbg" : 0.000014,
							"pbm" : 0.000069,
							"pbe" : 0.000033
						}
					]
				},
				{
					"as" : 7029,
					"relay" : 3,
					"bwa" : 614740,
					"bwc" : 501368,
					"fast" : 3,
					"stable" : 2,
					"guard" : 1,
					"middle" : 3,
					"exit" : 1,
					"dir" : 3,
					"pbr" : 0.00015099999999999998,
					"pbg" : 0.000308,
					"pbm" : 0.00014299999999999998,
					"pbe" : 0.000004,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 3,
							"bwa" : 614740,
							"bwc" : 501368,
							"fast" : 3,
							"stable" : 2,
							"guard" : 1,
							"middle" : 3,
							"exit" : 1,
							"dir" : 3,
							"pbr" : 0.00015099999999999998,
							"pbg" : 0.000308,
							"pbm" : 0.00014299999999999998,
							"pbe" : 0.000004
						}
					]
				},
				{
					"as" : 9351,
					"relay" : 1,
					"bwa" : 93099,
					"bwc" : 2980,
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
							"cc" : "JP",
							"relay" : 1,
							"bwa" : 93099,
							"bwc" : 2980,
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
					"as" : 11427,
					"relay" : 15,
					"bwa" : 2983802,
					"bwc" : 995046,
					"fast" : 13,
					"stable" : 5,
					"guard" : 2,
					"middle" : 15,
					"exit" : 1,
					"dir" : 13,
					"pbr" : 0.00032700000000000003,
					"pbg" : 0.000312,
					"pbm" : 0.000636,
					"pbe" : 0.000032,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 15,
							"bwa" : 2983802,
							"bwc" : 995046,
							"fast" : 13,
							"stable" : 5,
							"guard" : 2,
							"middle" : 15,
							"exit" : 1,
							"dir" : 13,
							"pbr" : 0.00032700000000000003,
							"pbg" : 0.000312,
							"pbm" : 0.000636,
							"pbe" : 0.000032
						}
					]
				},
				{
					"as" : 31400,
					"relay" : 6,
					"bwa" : 2927616,
					"bwc" : 2104663,
					"fast" : 6,
					"stable" : 2,
					"guard" : 0,
					"middle" : 6,
					"exit" : 2,
					"dir" : 2,
					"pbr" : 0.0008240000000000002,
					"pbg" : 0,
					"pbm" : 0.001363,
					"pbe" : 0.001111,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 6,
							"bwa" : 2927616,
							"bwc" : 2104663,
							"fast" : 6,
							"stable" : 2,
							"guard" : 0,
							"middle" : 6,
							"exit" : 2,
							"dir" : 2,
							"pbr" : 0.0008240000000000002,
							"pbg" : 0,
							"pbm" : 0.001363,
							"pbe" : 0.001111
						}
					]
				},
				{
					"as" : 48780,
					"relay" : 1,
					"bwa" : 98304,
					"bwc" : 18562,
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
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 98304,
							"bwc" : 18562,
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
					"as" : 6855,
					"relay" : 2,
					"bwa" : 264192,
					"bwc" : 3078,
					"fast" : 1,
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
							"cc" : "SK",
							"relay" : 2,
							"bwa" : 264192,
							"bwc" : 3078,
							"fast" : 1,
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
					"as" : 9143,
					"relay" : 15,
					"bwa" : 2985860,
					"bwc" : 1437329,
					"fast" : 15,
					"stable" : 8,
					"guard" : 4,
					"middle" : 15,
					"exit" : 3,
					"dir" : 11,
					"pbr" : 0.000447,
					"pbg" : 0.000522,
					"pbm" : 0.0007109999999999999,
					"pbe" : 0.00010999999999999999,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 15,
							"bwa" : 2985860,
							"bwc" : 1437329,
							"fast" : 15,
							"stable" : 8,
							"guard" : 4,
							"middle" : 15,
							"exit" : 3,
							"dir" : 11,
							"pbr" : 0.000447,
							"pbg" : 0.000522,
							"pbm" : 0.0007109999999999999,
							"pbe" : 0.00010999999999999999
						}
					]
				},
				{
					"as" : 22576,
					"relay" : 1,
					"bwa" : 1126400,
					"bwc" : 274122,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000152,
					"pbg" : 0.000088,
					"pbm" : 0.000088,
					"pbe" : 0.000281,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 1126400,
							"bwc" : 274122,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000152,
							"pbg" : 0.000088,
							"pbm" : 0.000088,
							"pbe" : 0.000281
						}
					]
				},
				{
					"as" : 39743,
					"relay" : 11,
					"bwa" : 140067113,
					"bwc" : 74175080,
					"fast" : 11,
					"stable" : 8,
					"guard" : 8,
					"middle" : 11,
					"exit" : 9,
					"dir" : 9,
					"pbr" : 0.01794,
					"pbg" : 0.011726999999999998,
					"pbm" : 0.009552999999999999,
					"pbe" : 0.032540000000000006,
					"countries" : [
						{
							"cc" : "RO",
							"relay" : 9,
							"bwa" : 129581353,
							"bwc" : 68545849,
							"fast" : 9,
							"stable" : 6,
							"guard" : 6,
							"middle" : 9,
							"exit" : 8,
							"dir" : 7,
							"pbr" : 0.016059000000000004,
							"pbg" : 0.008081,
							"pbm" : 0.007847,
							"pbe" : 0.032248000000000006
						},
						{
							"cc" : "DE",
							"relay" : 2,
							"bwa" : 10485760,
							"bwc" : 5629231,
							"fast" : 2,
							"stable" : 2,
							"guard" : 2,
							"middle" : 2,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.0018809999999999999,
							"pbg" : 0.003646,
							"pbm" : 0.001706,
							"pbe" : 0.000292
						}
					]
				},
				{
					"as" : 8473,
					"relay" : 14,
					"bwa" : 20215973,
					"bwc" : 13875871,
					"fast" : 13,
					"stable" : 13,
					"guard" : 6,
					"middle" : 14,
					"exit" : 6,
					"dir" : 11,
					"pbr" : 0.004027,
					"pbg" : 0.001434,
					"pbm" : 0.0019099999999999998,
					"pbe" : 0.008735999999999999,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 14,
							"bwa" : 20215973,
							"bwc" : 13875871,
							"fast" : 13,
							"stable" : 13,
							"guard" : 6,
							"middle" : 14,
							"exit" : 6,
							"dir" : 11,
							"pbr" : 0.004027,
							"pbg" : 0.001434,
							"pbm" : 0.0019099999999999998,
							"pbe" : 0.008735999999999999
						}
					]
				},
				{
					"as" : 50613,
					"relay" : 7,
					"bwa" : 6102882,
					"bwc" : 5310027,
					"fast" : 6,
					"stable" : 7,
					"guard" : 1,
					"middle" : 7,
					"exit" : 3,
					"dir" : 4,
					"pbr" : 0.001469,
					"pbg" : 0.002779,
					"pbm" : 0.001431,
					"pbe" : 0.000198,
					"countries" : [
						{
							"cc" : "IS",
							"relay" : 7,
							"bwa" : 6102882,
							"bwc" : 5310027,
							"fast" : 6,
							"stable" : 7,
							"guard" : 1,
							"middle" : 7,
							"exit" : 3,
							"dir" : 4,
							"pbr" : 0.001469,
							"pbg" : 0.002779,
							"pbm" : 0.001431,
							"pbe" : 0.000198
						}
					]
				},
				{
					"as" : 42610,
					"relay" : 9,
					"bwa" : 3289780,
					"bwc" : 1506943,
					"fast" : 9,
					"stable" : 4,
					"guard" : 2,
					"middle" : 9,
					"exit" : 3,
					"dir" : 8,
					"pbr" : 0.00038599999999999995,
					"pbg" : 0.000088,
					"pbm" : 0.000687,
					"pbe" : 0.00038,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 9,
							"bwa" : 3289780,
							"bwc" : 1506943,
							"fast" : 9,
							"stable" : 4,
							"guard" : 2,
							"middle" : 9,
							"exit" : 3,
							"dir" : 8,
							"pbr" : 0.00038599999999999995,
							"pbg" : 0.000088,
							"pbm" : 0.000687,
							"pbe" : 0.00038
						}
					]
				},
				{
					"as" : 46261,
					"relay" : 1,
					"bwa" : 5242880,
					"bwc" : 4669172,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.001538,
					"pbg" : 0.000889,
					"pbm" : 0.000889,
					"pbe" : 0.002836,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 5242880,
							"bwc" : 4669172,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.001538,
							"pbg" : 0.000889,
							"pbm" : 0.000889,
							"pbe" : 0.002836
						}
					]
				},
				{
					"as" : 39857,
					"relay" : 2,
					"bwa" : 1634304,
					"bwc" : 694835,
					"fast" : 2,
					"stable" : 0,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000287,
					"pbg" : 0,
					"pbm" : 0.000862,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "FI",
							"relay" : 2,
							"bwa" : 1634304,
							"bwc" : 694835,
							"fast" : 2,
							"stable" : 0,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000287,
							"pbg" : 0,
							"pbm" : 0.000862,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 7303,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 8784,
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
							"bwc" : 8784,
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
					"as" : 20857,
					"relay" : 3,
					"bwa" : 2252800,
					"bwc" : 214047,
					"fast" : 3,
					"stable" : 1,
					"guard" : 0,
					"middle" : 3,
					"exit" : 2,
					"dir" : 0,
					"pbr" : 0.000165,
					"pbg" : 0,
					"pbm" : 0.000041,
					"pbe" : 0.000453,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 3,
							"bwa" : 2252800,
							"bwc" : 214047,
							"fast" : 3,
							"stable" : 1,
							"guard" : 0,
							"middle" : 3,
							"exit" : 2,
							"dir" : 0,
							"pbr" : 0.000165,
							"pbg" : 0,
							"pbm" : 0.000041,
							"pbe" : 0.000453
						}
					]
				},
				{
					"as" : 50465,
					"relay" : 1,
					"bwa" : 3327125,
					"bwc" : 1686155,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000824,
					"pbg" : 0.001701,
					"pbm" : 0.000773,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 3327125,
							"bwc" : 1686155,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000824,
							"pbg" : 0.001701,
							"pbm" : 0.000773,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 6871,
					"relay" : 5,
					"bwa" : 308019,
					"bwc" : 54449,
					"fast" : 3,
					"stable" : 4,
					"guard" : 0,
					"middle" : 5,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000023,
					"pbg" : 0,
					"pbm" : 0.000069,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 5,
							"bwa" : 308019,
							"bwc" : 54449,
							"fast" : 3,
							"stable" : 4,
							"guard" : 0,
							"middle" : 5,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000023,
							"pbg" : 0,
							"pbm" : 0.000069,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 53264,
					"relay" : 4,
					"bwa" : 1853440,
					"bwc" : 1314215,
					"fast" : 4,
					"stable" : 4,
					"guard" : 2,
					"middle" : 4,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000388,
					"pbg" : 0.000779,
					"pbm" : 0.00038199999999999996,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 3,
							"bwa" : 1780736,
							"bwc" : 1289488,
							"fast" : 3,
							"stable" : 3,
							"guard" : 2,
							"middle" : 3,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000384,
							"pbg" : 0.000779,
							"pbm" : 0.00037099999999999996,
							"pbe" : 0
						},
						{
							"cc" : "ES",
							"relay" : 1,
							"bwa" : 72704,
							"bwc" : 24727,
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
						}
					]
				},
				{
					"as" : 41733,
					"relay" : 3,
					"bwa" : 2039869,
					"bwc" : 279951,
					"fast" : 3,
					"stable" : 1,
					"guard" : 1,
					"middle" : 3,
					"exit" : 1,
					"dir" : 3,
					"pbr" : 0.000091,
					"pbg" : 0.000128,
					"pbm" : 0.000076,
					"pbe" : 0.00007,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 3,
							"bwa" : 2039869,
							"bwc" : 279951,
							"fast" : 3,
							"stable" : 1,
							"guard" : 1,
							"middle" : 3,
							"exit" : 1,
							"dir" : 3,
							"pbr" : 0.000091,
							"pbg" : 0.000128,
							"pbm" : 0.000076,
							"pbe" : 0.00007
						}
					]
				},
				{
					"as" : 33785,
					"relay" : 3,
					"bwa" : 517120,
					"bwc" : 252825,
					"fast" : 3,
					"stable" : 3,
					"guard" : 2,
					"middle" : 3,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000034,
					"pbg" : 0.000051,
					"pbm" : 0.000054,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "EG",
							"relay" : 3,
							"bwa" : 517120,
							"bwc" : 252825,
							"fast" : 3,
							"stable" : 3,
							"guard" : 2,
							"middle" : 3,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000034,
							"pbg" : 0.000051,
							"pbm" : 0.000054,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 38285,
					"relay" : 2,
					"bwa" : 127749,
					"bwc" : 9742,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 2,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.000006,
					"pbg" : 0,
					"pbm" : 0.000009,
					"pbe" : 0.000008,
					"countries" : [
						{
							"cc" : "AU",
							"relay" : 2,
							"bwa" : 127749,
							"bwc" : 9742,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 2,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.000006,
							"pbg" : 0,
							"pbm" : 0.000009,
							"pbe" : 0.000008
						}
					]
				},
				{
					"as" : 16245,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 59300,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000013,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.00004,
					"countries" : [
						{
							"cc" : "DK",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 59300,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000013,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.00004
						}
					]
				},
				{
					"as" : 4725,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 5018,
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
							"bwc" : 5018,
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
					"as" : 19181,
					"relay" : 1,
					"bwa" : 204800,
					"bwc" : 50834,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000047,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.00014,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 204800,
							"bwc" : 50834,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000047,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.00014
						}
					]
				},
				{
					"as" : 16652,
					"relay" : 7,
					"bwa" : 4849664,
					"bwc" : 4127440,
					"fast" : 7,
					"stable" : 7,
					"guard" : 7,
					"middle" : 7,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.001494,
					"pbg" : 0.001208,
					"pbm" : 0.000947,
					"pbe" : 0.002323,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 7,
							"bwa" : 4849664,
							"bwc" : 4127440,
							"fast" : 7,
							"stable" : 7,
							"guard" : 7,
							"middle" : 7,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.001494,
							"pbg" : 0.001208,
							"pbm" : 0.000947,
							"pbe" : 0.002323
						}
					]
				},
				{
					"as" : 13213,
					"relay" : 5,
					"bwa" : 56010502,
					"bwc" : 43336614,
					"fast" : 5,
					"stable" : 4,
					"guard" : 4,
					"middle" : 5,
					"exit" : 4,
					"dir" : 4,
					"pbr" : 0.042332999999999996,
					"pbg" : 0.023808999999999997,
					"pbm" : 0.023047999999999996,
					"pbe" : 0.08014900000000001,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 5,
							"bwa" : 56010502,
							"bwc" : 43336614,
							"fast" : 5,
							"stable" : 4,
							"guard" : 4,
							"middle" : 5,
							"exit" : 4,
							"dir" : 4,
							"pbr" : 0.042332999999999996,
							"pbg" : 0.023808999999999997,
							"pbm" : 0.023047999999999996,
							"pbe" : 0.08014900000000001
						}
					]
				},
				{
					"as" : 4802,
					"relay" : 2,
					"bwa" : 129290,
					"bwc" : 5755,
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
							"bwc" : 5755,
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
					"as" : 8422,
					"relay" : 8,
					"bwa" : 1175696,
					"bwc" : 208521,
					"fast" : 5,
					"stable" : 3,
					"guard" : 0,
					"middle" : 8,
					"exit" : 0,
					"dir" : 3,
					"pbr" : 0.00008199999999999999,
					"pbg" : 0,
					"pbm" : 0.000246,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 8,
							"bwa" : 1175696,
							"bwc" : 208521,
							"fast" : 5,
							"stable" : 3,
							"guard" : 0,
							"middle" : 8,
							"exit" : 0,
							"dir" : 3,
							"pbr" : 0.00008199999999999999,
							"pbg" : 0,
							"pbm" : 0.000246,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 14536,
					"relay" : 2,
					"bwa" : 8788128,
					"bwc" : 5480647,
					"fast" : 2,
					"stable" : 2,
					"guard" : 2,
					"middle" : 2,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.002058,
					"pbg" : 0.001871,
					"pbm" : 0.001355,
					"pbe" : 0.00295,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 8788128,
							"bwc" : 5480647,
							"fast" : 2,
							"stable" : 2,
							"guard" : 2,
							"middle" : 2,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.002058,
							"pbg" : 0.001871,
							"pbm" : 0.001355,
							"pbe" : 0.00295
						}
					]
				},
				{
					"as" : 9031,
					"relay" : 4,
					"bwa" : 255411,
					"bwc" : 97129,
					"fast" : 2,
					"stable" : 1,
					"guard" : 0,
					"middle" : 4,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.000047000000000000004,
					"pbg" : 0,
					"pbm" : 0.000134,
					"pbe" : 0.00001,
					"countries" : [
						{
							"cc" : "BE",
							"relay" : 4,
							"bwa" : 255411,
							"bwc" : 97129,
							"fast" : 2,
							"stable" : 1,
							"guard" : 0,
							"middle" : 4,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.000047000000000000004,
							"pbg" : 0,
							"pbm" : 0.000134,
							"pbe" : 0.00001
						}
					]
				},
				{
					"as" : 55329,
					"relay" : 1,
					"bwa" : 667724,
					"bwc" : 386488,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000054,
					"pbg" : 0.000031,
					"pbm" : 0.000031,
					"pbe" : 0.0001,
					"countries" : [
						{
							"cc" : "KH",
							"relay" : 1,
							"bwa" : 667724,
							"bwc" : 386488,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000054,
							"pbg" : 0.000031,
							"pbm" : 0.000031,
							"pbe" : 0.0001
						}
					]
				},
				{
					"as" : 41887,
					"relay" : 1,
					"bwa" : 1624073,
					"bwc" : 701871,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000235,
					"pbg" : 0,
					"pbm" : 0.000706,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 1,
							"bwa" : 1624073,
							"bwc" : 701871,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000235,
							"pbg" : 0,
							"pbm" : 0.000706,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 46816,
					"relay" : 3,
					"bwa" : 1496448,
					"bwc" : 788457,
					"fast" : 3,
					"stable" : 2,
					"guard" : 2,
					"middle" : 3,
					"exit" : 2,
					"dir" : 0,
					"pbr" : 0.00026199999999999997,
					"pbg" : 0.000095,
					"pbm" : 0.00039,
					"pbe" : 0.000303,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 3,
							"bwa" : 1496448,
							"bwc" : 788457,
							"fast" : 3,
							"stable" : 2,
							"guard" : 2,
							"middle" : 3,
							"exit" : 2,
							"dir" : 0,
							"pbr" : 0.00026199999999999997,
							"pbg" : 0.000095,
							"pbm" : 0.00039,
							"pbe" : 0.000303
						}
					]
				},
				{
					"as" : 8560,
					"relay" : 10,
					"bwa" : 4672197,
					"bwc" : 1346359,
					"fast" : 9,
					"stable" : 9,
					"guard" : 5,
					"middle" : 10,
					"exit" : 0,
					"dir" : 6,
					"pbr" : 0.001031,
					"pbg" : 0.000371,
					"pbm" : 0.0027240000000000003,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 8,
							"bwa" : 1946332,
							"bwc" : 1311149,
							"fast" : 7,
							"stable" : 8,
							"guard" : 5,
							"middle" : 8,
							"exit" : 0,
							"dir" : 5,
							"pbr" : 0.00018699999999999996,
							"pbg" : 0.000371,
							"pbm" : 0.000192,
							"pbe" : 0
						},
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 2725865,
							"bwc" : 35210,
							"fast" : 2,
							"stable" : 1,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.0008439999999999999,
							"pbg" : 0,
							"pbm" : 0.002532,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 31229,
					"relay" : 1,
					"bwa" : 3584000,
					"bwc" : 3204075,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000374,
					"pbg" : 0.000771,
					"pbm" : 0.00035,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "PL",
							"relay" : 1,
							"bwa" : 3584000,
							"bwc" : 3204075,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000374,
							"pbg" : 0.000771,
							"pbm" : 0.00035,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 2683,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 2623,
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
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 51200,
							"bwc" : 2623,
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
					"as" : 42352,
					"relay" : 4,
					"bwa" : 81920,
					"bwc" : 14553,
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
							"bwc" : 14553,
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
					"as" : 28719,
					"relay" : 1,
					"bwa" : 957863,
					"bwc" : 538769,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000072,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000216,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 957863,
							"bwc" : 538769,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000072,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000216
						}
					]
				},
				{
					"as" : 16942,
					"relay" : 1,
					"bwa" : 65536,
					"bwc" : 26604,
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
							"bwc" : 26604,
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
					"as" : 42831,
					"relay" : 2,
					"bwa" : 977920,
					"bwc" : 726826,
					"fast" : 2,
					"stable" : 2,
					"guard" : 2,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000217,
					"pbg" : 0.000447,
					"pbm" : 0.000203,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 2,
							"bwa" : 977920,
							"bwc" : 726826,
							"fast" : 2,
							"stable" : 2,
							"guard" : 2,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000217,
							"pbg" : 0.000447,
							"pbm" : 0.000203,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 34011,
					"relay" : 6,
					"bwa" : 9705454,
					"bwc" : 5724736,
					"fast" : 6,
					"stable" : 5,
					"guard" : 5,
					"middle" : 6,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.002477,
					"pbg" : 0.005091,
					"pbm" : 0.002339,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 6,
							"bwa" : 9705454,
							"bwc" : 5724736,
							"fast" : 6,
							"stable" : 5,
							"guard" : 5,
							"middle" : 6,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.002477,
							"pbg" : 0.005091,
							"pbm" : 0.002339,
							"pbe" : 0
						}
					]
				},
				{
						"as" : 57381,
					"relay" : 1,
					"bwa" : 1552357,
					"bwc" : 660615,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000139,
					"pbg" : 0,
					"pbm" : 0.000416,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NO",
							"relay" : 1,
							"bwa" : 1552357,
							"bwc" : 660615,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000139,
							"pbg" : 0,
							"pbm" : 0.000416,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 8551,
					"relay" : 9,
					"bwa" : 7586961,
					"bwc" : 4626850,
					"fast" : 9,
					"stable" : 8,
					"guard" : 7,
					"middle" : 9,
					"exit" : 0,
					"dir" : 8,
					"pbr" : 0.001301,
					"pbg" : 0.002676,
					"pbm" : 0.001231,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "IL",
							"relay" : 9,
							"bwa" : 7586961,
							"bwc" : 4626850,
							"fast" : 9,
							"stable" : 8,
							"guard" : 7,
							"middle" : 9,
							"exit" : 0,
							"dir" : 8,
							"pbr" : 0.001301,
							"pbg" : 0.002676,
							"pbm" : 0.001231,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 1267,
					"relay" : 3,
					"bwa" : 60203,
					"bwc" : 530,
					"fast" : 0,
					"stable" : 1,
					"guard" : 0,
					"middle" : 3,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000007,
					"pbg" : 0,
					"pbm" : 0.000021000000000000002,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "IT",
							"relay" : 3,
							"bwa" : 60203,
							"bwc" : 530,
							"fast" : 0,
							"stable" : 1,
							"guard" : 0,
							"middle" : 3,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000007,
							"pbg" : 0,
							"pbm" : 0.000021000000000000002,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 24863,
					"relay" : 1,
					"bwa" : 20480,
					"bwc" : 16237,
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
							"cc" : "EG",
							"relay" : 1,
							"bwa" : 20480,
							"bwc" : 16237,
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
					"as" : 46457,
					"relay" : 8,
					"bwa" : 9077422,
					"bwc" : 5135632,
					"fast" : 8,
					"stable" : 8,
					"guard" : 3,
					"middle" : 8,
					"exit" : 8,
					"dir" : 4,
					"pbr" : 0.002328,
					"pbg" : 0.000786,
					"pbm" : 0.000785,
					"pbe" : 0.005412999999999999,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 8,
							"bwa" : 9077422,
							"bwc" : 5135632,
							"fast" : 8,
							"stable" : 8,
							"guard" : 3,
							"middle" : 8,
							"exit" : 8,
							"dir" : 4,
							"pbr" : 0.002328,
							"pbg" : 0.000786,
							"pbm" : 0.000785,
							"pbe" : 0.005412999999999999
						}
					]
				},
				{
					"as" : 12312,
					"relay" : 2,
					"bwa" : 369371,
					"bwc" : 9851,
					"fast" : 2,
					"stable" : 0,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000029,
					"pbg" : 0,
					"pbm" : 0.000086,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 2,
							"bwa" : 369371,
							"bwc" : 9851,
							"fast" : 2,
							"stable" : 0,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000029,
							"pbg" : 0,
							"pbm" : 0.000086,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 55430,
					"relay" : 1,
					"bwa" : 196608,
					"bwc" : 7909,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000008,
					"pbg" : 0.000017,
					"pbm" : 0.000008,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SG",
							"relay" : 1,
							"bwa" : 196608,
							"bwc" : 7909,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000008,
							"pbg" : 0.000017,
							"pbm" : 0.000008,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 50463,
					"relay" : 1,
					"bwa" : 30720,
					"bwc" : 59,
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
							"bwc" : 59,
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
					"as" : 15497,
					"relay" : 2,
					"bwa" : 358400,
					"bwc" : 84866,
					"fast" : 2,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.00007000000000000001,
					"pbg" : 0.000035,
					"pbm" : 0.000064,
					"pbe" : 0.000111,
					"countries" : [
						{
							"cc" : "UA",
							"relay" : 2,
							"bwa" : 358400,
							"bwc" : 84866,
							"fast" : 2,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.00007000000000000001,
							"pbg" : 0.000035,
							"pbm" : 0.000064,
							"pbe" : 0.000111
						}
					]
				},
				{
					"as" : 36351,
					"relay" : 31,
					"bwa" : 27278103,
					"bwc" : 15973183,
					"fast" : 31,
					"stable" : 27,
					"guard" : 17,
					"middle" : 31,
					"exit" : 4,
					"dir" : 19,
					"pbr" : 0.007358999999999998,
					"pbg" : 0.010767999999999998,
					"pbm" : 0.007566999999999999,
					"pbe" : 0.00374,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 26,
							"bwa" : 21808282,
							"bwc" : 13564371,
							"fast" : 26,
							"stable" : 22,
							"guard" : 12,
							"middle" : 26,
							"exit" : 4,
							"dir" : 14,
							"pbr" : 0.006695999999999999,
							"pbg" : 0.009399000000000001,
							"pbm" : 0.006944999999999999,
							"pbe" : 0.00374
						},
						{
							"cc" : "SG",
							"relay" : 4,
							"bwa" : 4159101,
							"bwc" : 1560529,
							"fast" : 4,
							"stable" : 4,
							"guard" : 4,
							"middle" : 4,
							"exit" : 0,
							"dir" : 4,
							"pbr" : 0.000202,
							"pbg" : 0.000417,
							"pbm" : 0.00019,
							"pbe" : 0
						},
						{
							"cc" : "NL",
							"relay" : 1,
							"bwa" : 1310720,
							"bwc" : 848283,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000461,
							"pbg" : 0.000952,
							"pbm" : 0.000432,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 29113,
					"relay" : 4,
					"bwa" : 4481963,
					"bwc" : 2053219,
					"fast" : 4,
					"stable" : 4,
					"guard" : 3,
					"middle" : 4,
					"exit" : 3,
					"dir" : 1,
					"pbr" : 0.0009720000000000001,
					"pbg" : 0.001082,
					"pbm" : 0.000683,
					"pbe" : 0.0011510000000000001,
					"countries" : [
						{
							"cc" : "CZ",
							"relay" : 4,
							"bwa" : 4481963,
							"bwc" : 2053219,
							"fast" : 4,
							"stable" : 4,
							"guard" : 3,
							"middle" : 4,
							"exit" : 3,
							"dir" : 1,
							"pbr" : 0.0009720000000000001,
							"pbg" : 0.001082,
							"pbm" : 0.000683,
							"pbe" : 0.0011510000000000001
						}
					]
				},
				{
					"as" : 46475,
					"relay" : 14,
					"bwa" : 4902627,
					"bwc" : 1837565,
					"fast" : 14,
					"stable" : 12,
					"guard" : 5,
					"middle" : 14,
					"exit" : 7,
					"dir" : 8,
					"pbr" : 0.0008849999999999999,
					"pbg" : 0.000944,
					"pbm" : 0.000621,
					"pbe" : 0.001088,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 14,
							"bwa" : 4902627,
							"bwc" : 1837565,
							"fast" : 14,
							"stable" : 12,
							"guard" : 5,
							"middle" : 14,
							"exit" : 7,
							"dir" : 8,
							"pbr" : 0.0008849999999999999,
							"pbg" : 0.000944,
							"pbm" : 0.000621,
							"pbe" : 0.001088
						}
					]
				},
				{
					"as" : 44925,
					"relay" : 4,
					"bwa" : 901120,
					"bwc" : 614171,
					"fast" : 4,
					"stable" : 2,
					"guard" : 0,
					"middle" : 4,
					"exit" : 3,
					"dir" : 0,
					"pbr" : 0.000102,
					"pbg" : 0,
					"pbm" : 0.000024,
					"pbe" : 0.000283,
					"countries" : [
						{
							"cc" : "IS",
							"relay" : 4,
							"bwa" : 901120,
							"bwc" : 614171,
							"fast" : 4,
							"stable" : 2,
							"guard" : 0,
							"middle" : 4,
							"exit" : 3,
							"dir" : 0,
							"pbr" : 0.000102,
							"pbg" : 0,
							"pbm" : 0.000024,
							"pbe" : 0.000283
						}
					]
				},
				{
					"as" : 35470,
					"relay" : 1,
					"bwa" : 204800,
					"bwc" : 68020,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.00004,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.00012,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 1,
							"bwa" : 204800,
							"bwc" : 68020,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.00004,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.00012
						}
					]
				},
				{
					"as" : 6739,
					"relay" : 4,
					"bwa" : 604160,
					"bwc" : 379845,
					"fast" : 4,
					"stable" : 2,
					"guard" : 1,
					"middle" : 4,
					"exit" : 2,
					"dir" : 3,
					"pbr" : 0.000053,
					"pbg" : 0.000039,
					"pbm" : 0.000021000000000000002,
					"pbe" : 0.00009900000000000001,
					"countries" : [
						{
							"cc" : "ES",
							"relay" : 4,
							"bwa" : 604160,
							"bwc" : 379845,
							"fast" : 4,
							"stable" : 2,
							"guard" : 1,
							"middle" : 4,
							"exit" : 2,
							"dir" : 3,
							"pbr" : 0.000053,
							"pbg" : 0.000039,
							"pbm" : 0.000021000000000000002,
							"pbe" : 0.00009900000000000001
						}
					]
				},
				{
					"as" : 3265,
					"relay" : 23,
					"bwa" : 43818719,
					"bwc" : 34100216,
					"fast" : 19,
					"stable" : 16,
					"guard" : 10,
					"middle" : 23,
					"exit" : 3,
					"dir" : 11,
					"pbr" : 0.009989,
					"pbg" : 0.020484,
					"pbm" : 0.009444000000000003,
					"pbe" : 0.00004,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 22,
							"bwa" : 38575839,
							"bwc" : 29378363,
							"fast" : 18,
							"stable" : 15,
							"guard" : 9,
							"middle" : 22,
							"exit" : 3,
							"dir" : 10,
							"pbr" : 0.008679000000000001,
							"pbg" : 0.017780999999999998,
							"pbm" : 0.008216000000000001,
							"pbe" : 0.00004
						},
						{
							"cc" : "AT",
							"relay" : 1,
							"bwa" : 5242880,
							"bwc" : 4721853,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.00131,
							"pbg" : 0.002703,
							"pbm" : 0.001228,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 30880,
					"relay" : 1,
					"bwa" : 12388351,
					"bwc" : 10051639,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.006491,
					"pbg" : 0.003752,
					"pbm" : 0.003752,
					"pbe" : 0.011969,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 1,
							"bwa" : 12388351,
							"bwc" : 10051639,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.006491,
							"pbg" : 0.003752,
							"pbm" : 0.003752,
							"pbe" : 0.011969
						}
					]
				},
				{
					"as" : 7545,
					"relay" : 3,
					"bwa" : 129291,
					"bwc" : 3972,
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
							"bwc" : 3972,
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
					"as" : 8767,
					"relay" : 7,
					"bwa" : 440320,
					"bwc" : 123692,
					"fast" : 6,
					"stable" : 3,
					"guard" : 0,
					"middle" : 7,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000031,
					"pbg" : 0,
					"pbm" : 0.000082,
					"pbe" : 0.000012,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 7,
							"bwa" : 440320,
							"bwc" : 123692,
							"fast" : 6,
							"stable" : 3,
							"guard" : 0,
							"middle" : 7,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000031,
							"pbg" : 0,
							"pbm" : 0.000082,
							"pbe" : 0.000012
						}
					]
				},
				{
					"as" : 35041,
					"relay" : 1,
					"bwa" : 2097152,
					"bwc" : 2094240,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000458,
					"pbg" : 0.000946,
					"pbm" : 0.00043,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 1,
							"bwa" : 2097152,
							"bwc" : 2094240,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000458,
							"pbg" : 0.000946,
							"pbm" : 0.00043,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 6893,
					"relay" : 3,
					"bwa" : 16439354,
					"bwc" : 12399837,
					"fast" : 3,
					"stable" : 3,
					"guard" : 2,
					"middle" : 3,
					"exit" : 2,
					"dir" : 2,
					"pbr" : 0.006777,
					"pbg" : 0.010951,
					"pbm" : 0.005601,
					"pbe" : 0.00378,
					"countries" : [
						{
							"cc" : "CH",
							"relay" : 3,
							"bwa" : 16439354,
							"bwc" : 12399837,
							"fast" : 3,
							"stable" : 3,
							"guard" : 2,
							"middle" : 3,
							"exit" : 2,
							"dir" : 2,
							"pbr" : 0.006777,
							"pbg" : 0.010951,
							"pbm" : 0.005601,
							"pbe" : 0.00378
						}
					]
				},
				{
					"as" : 35662,
					"relay" : 5,
					"bwa" : 4838573,
					"bwc" : 2489482,
					"fast" : 5,
					"stable" : 3,
					"guard" : 2,
					"middle" : 5,
					"exit" : 3,
					"dir" : 2,
					"pbr" : 0.0011749999999999998,
					"pbg" : 0.0008759999999999999,
					"pbm" : 0.000398,
					"pbe" : 0.002249,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 5,
							"bwa" : 4838573,
							"bwc" : 2489482,
							"fast" : 5,
							"stable" : 3,
							"guard" : 2,
							"middle" : 5,
							"exit" : 3,
							"dir" : 2,
							"pbr" : 0.0011749999999999998,
							"pbg" : 0.0008759999999999999,
							"pbm" : 0.000398,
							"pbe" : 0.002249
						}
					]
				},
				{
					"as" : 57963,
					"relay" : 4,
					"bwa" : 3339772,
					"bwc" : 2467036,
					"fast" : 4,
					"stable" : 2,
					"guard" : 1,
					"middle" : 4,
					"exit" : 0,
					"dir" : 3,
					"pbr" : 0.000527,
					"pbg" : 0.000815,
					"pbm" : 0.0007689999999999999,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NO",
							"relay" : 4,
							"bwa" : 3339772,
							"bwc" : 2467036,
							"fast" : 4,
							"stable" : 2,
							"guard" : 1,
							"middle" : 4,
							"exit" : 0,
							"dir" : 3,
							"pbr" : 0.000527,
							"pbg" : 0.000815,
							"pbm" : 0.0007689999999999999,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 11398,
					"relay" : 1,
					"bwa" : 73426,
					"bwc" : 3749,
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
							"cc" : "US",
							"relay" : 1,
							"bwa" : 73426,
							"bwc" : 3749,
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
					"as" : 1312,
					"relay" : 4,
					"bwa" : 10178560,
					"bwc" : 9782860,
					"fast" : 3,
					"stable" : 3,
					"guard" : 3,
					"middle" : 4,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.0037890000000000003,
					"pbg" : 0.007812,
					"pbm" : 0.003557,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 4,
							"bwa" : 10178560,
							"bwc" : 9782860,
							"fast" : 3,
							"stable" : 3,
							"guard" : 3,
							"middle" : 4,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.0037890000000000003,
							"pbg" : 0.007812,
							"pbm" : 0.003557,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 5607,
					"relay" : 8,
					"bwa" : 2752710,
					"bwc" : 1298427,
					"fast" : 7,
					"stable" : 1,
					"guard" : 1,
					"middle" : 8,
					"exit" : 2,
					"dir" : 5,
					"pbr" : 0.0005540000000000001,
					"pbg" : 0.00008,
					"pbm" : 0.000083,
					"pbe" : 0.001497,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 8,
							"bwa" : 2752710,
							"bwc" : 1298427,
							"fast" : 7,
							"stable" : 1,
							"guard" : 1,
							"middle" : 8,
							"exit" : 2,
							"dir" : 5,
							"pbr" : 0.0005540000000000001,
							"pbg" : 0.00008,
							"pbm" : 0.000083,
							"pbe" : 0.001497
						}
					]
				},
				{
					"as" : 8342,
					"relay" : 1,
					"bwa" : 32768,
					"bwc" : 7551,
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
							"bwc" : 7551,
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
					"as" : 23136,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 61810,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000012,
					"pbg" : 0,
					"pbm" : 0.000035,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 61810,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
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
					"as" : 852,
					"relay" : 4,
					"bwa" : 221572,
					"bwc" : 34639,
					"fast" : 2,
					"stable" : 3,
					"guard" : 0,
					"middle" : 4,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.000009999999999999999,
					"pbg" : 0,
					"pbm" : 0.000017,
					"pbe" : 0.000013,
					"countries" : [
						{
							"cc" : "CA",
							"relay" : 4,
							"bwa" : 221572,
							"bwc" : 34639,
							"fast" : 2,
							"stable" : 3,
							"guard" : 0,
							"middle" : 4,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.000009999999999999999,
							"pbg" : 0,
							"pbm" : 0.000017,
							"pbe" : 0.000013
						}
					]
				},
				{
					"as" : 2497,
					"relay" : 2,
					"bwa" : 167936,
					"bwc" : 35987,
					"fast" : 2,
					"stable" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000009,
					"pbg" : 0,
					"pbm" : 0.000024999999999999998,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "JP",
							"relay" : 2,
							"bwa" : 167936,
							"bwc" : 35987,
							"fast" : 2,
							"stable" : 2,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000009,
							"pbg" : 0,
							"pbm" : 0.000024999999999999998,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 36137,
					"relay" : 2,
					"bwa" : 5966449,
					"bwc" : 5152052,
					"fast" : 2,
					"stable" : 1,
					"guard" : 0,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.001971,
					"pbg" : 0,
					"pbm" : 0.005767,
					"pbe" : 0.000144,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 5120000,
							"bwc" : 5098828,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.001923,
							"pbg" : 0,
							"pbm" : 0.005767,
							"pbe" : 0
						},
						{
							"cc" : "CA",
							"relay" : 1,
							"bwa" : 846449,
							"bwc" : 53224,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000048,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000144
						}
					]
				},
				{
					"as" : 13301,
					"relay" : 1,
					"bwa" : 1112922,
					"bwc" : 831068,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000289,
					"pbg" : 0.000167,
					"pbm" : 0.000167,
					"pbe" : 0.000533,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 1,
							"bwa" : 1112922,
							"bwc" : 831068,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000289,
							"pbg" : 0.000167,
							"pbm" : 0.000167,
							"pbe" : 0.000533
						}
					]
				},
				{
					"as" : 32475,
					"relay" : 3,
					"bwa" : 1136640,
					"bwc" : 656212,
					"fast" : 3,
					"stable" : 3,
					"guard" : 1,
					"middle" : 3,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000189,
					"pbg" : 0.000314,
					"pbm" : 0.000252,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 3,
							"bwa" : 1136640,
							"bwc" : 656212,
							"fast" : 3,
							"stable" : 3,
							"guard" : 1,
							"middle" : 3,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000189,
							"pbg" : 0.000314,
							"pbm" : 0.000252,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 35816,
					"relay" : 1,
					"bwa" : 303369,
					"bwc" : 60791,
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
							"cc" : "UA",
							"relay" : 1,
							"bwa" : 303369,
							"bwc" : 60791,
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
					"as" : 9916,
					"relay" : 2,
					"bwa" : 1646737,
					"bwc" : 216509,
					"fast" : 2,
					"stable" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000072,
					"pbg" : 0,
					"pbm" : 0.00021799999999999999,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "TW",
							"relay" : 2,
							"bwa" : 1646737,
							"bwc" : 216509,
							"fast" : 2,
							"stable" : 2,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000072,
							"pbg" : 0,
							"pbm" : 0.00021799999999999999,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 2701,
					"relay" : 1,
					"bwa" : 81920,
					"bwc" : 40480,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000013,
					"pbg" : 0,
					"pbm" : 0.00004,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 81920,
							"bwc" : 40480,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000013,
							"pbg" : 0,
							"pbm" : 0.00004,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 16509,
					"relay" : 11,
					"bwa" : 1437696,
					"bwc" : 863195,
					"fast" : 8,
					"stable" : 11,
					"guard" : 2,
					"middle" : 11,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000092,
					"pbg" : 0.000062,
					"pbm" : 0.00019000000000000004,
					"pbe" : 0.000025,
					"countries" : [
						{
							"cc" : "BR",
							"relay" : 1,
							"bwa" : 20480,
							"bwc" : 534,
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
							"cc" : "JP",
							"relay" : 2,
							"bwa" : 438272,
							"bwc" : 355053,
							"fast" : 2,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000014999999999999999,
							"pbg" : 0.000009,
							"pbm" : 0.000036,
							"pbe" : 0
						},
						{
							"cc" : "US",
							"relay" : 3,
							"bwa" : 364544,
							"bwc" : 182738,
							"fast" : 3,
							"stable" : 3,
							"guard" : 0,
							"middle" : 3,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000031,
							"pbg" : 0,
							"pbm" : 0.00007,
							"pbe" : 0.000025
						},
						{
							"cc" : "IE",
							"relay" : 4,
							"bwa" : 483328,
							"bwc" : 305915,
							"fast" : 2,
							"stable" : 4,
							"guard" : 1,
							"middle" : 4,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000038,
							"pbg" : 0.000053,
							"pbm" : 0.000059000000000000004,
							"pbe" : 0
						},
						{
							"cc" : "AU",
							"relay" : 1,
							"bwa" : 131072,
							"bwc" : 18955,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000005,
							"pbg" : 0,
							"pbm" : 0.000016,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 16810,
					"relay" : 1,
					"bwa" : 91136,
					"bwc" : 6705,
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
							"bwa" : 91136,
							"bwc" : 6705,
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
					"as" : 42160,
					"relay" : 2,
					"bwa" : 153600,
					"bwc" : 35527,
					"fast" : 2,
					"stable" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000014000000000000001,
					"pbg" : 0,
					"pbm" : 0.000041,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "BE",
							"relay" : 2,
							"bwa" : 153600,
							"bwc" : 35527,
							"fast" : 2,
							"stable" : 2,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000014000000000000001,
							"pbg" : 0,
							"pbm" : 0.000041,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 26599,
					"relay" : 3,
					"bwa" : 89088,
					"bwc" : 10,
					"fast" : 0,
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
							"cc" : "BR",
							"relay" : 3,
							"bwa" : 89088,
							"bwc" : 10,
							"fast" : 0,
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
					"as" : 22989,
					"relay" : 1,
					"bwa" : 3712952,
					"bwc" : 2008340,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000472,
					"pbg" : 0.000974,
					"pbm" : 0.000442,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 3712952,
							"bwc" : 2008340,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000472,
							"pbg" : 0.000974,
							"pbm" : 0.000442,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 41508,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 39515,
					"fast" : 1,
					"stable" : 1,
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
							"cc" : "PL",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 39515,
							"fast" : 1,
							"stable" : 1,
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
					"as" : 12231,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 25553,
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
							"bwc" : 25553,
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
					"as" : 45711,
					"relay" : 1,
					"bwa" : 100912,
					"bwc" : 10207,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000004,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000013,
					"countries" : [
						{
							"cc" : "ID",
							"relay" : 1,
							"bwa" : 100912,
							"bwc" : 10207,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000004,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000013
						}
					]
				},
				{
					"as" : 29580,
					"relay" : 1,
					"bwa" : 1024000,
					"bwc" : 1003217,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000311,
					"pbg" : 0.000641,
					"pbm" : 0.000291,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "BG",
							"relay" : 1,
							"bwa" : 1024000,
							"bwc" : 1003217,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000311,
							"pbg" : 0.000641,
							"pbm" : 0.000291,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 12406,
					"relay" : 1,
					"bwa" : 67584,
					"bwc" : 0,
					"fast" : 1,
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
							"cc" : "BY",
							"relay" : 1,
							"bwa" : 67584,
							"bwc" : 0,
							"fast" : 1,
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
					"as" : 24955,
					"relay" : 1,
					"bwa" : 128000,
					"bwc" : 21710,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.00001,
					"pbg" : 0,
					"pbm" : 0.000031,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 128000,
							"bwc" : 21710,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.00001,
							"pbg" : 0,
							"pbm" : 0.000031,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 7600,
					"relay" : 1,
					"bwa" : 62121,
					"bwc" : 1538,
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
							"bwc" : 1538,
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
					"as" : 12578,
					"relay" : 2,
					"bwa" : 140235,
					"bwc" : 68467,
					"fast" : 1,
					"stable" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.000005,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000014,
					"countries" : [
						{
							"cc" : "LV",
							"relay" : 2,
							"bwa" : 140235,
							"bwc" : 68467,
							"fast" : 1,
							"stable" : 2,
							"guard" : 0,
							"middle" : 2,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.000005,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000014
						}
					]
				},
				{
					"as" : 24989,
					"relay" : 2,
					"bwa" : 757760,
					"bwc" : 521812,
					"fast" : 2,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000153,
					"pbg" : 0.000312,
					"pbm" : 0.00014900000000000002,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 2,
							"bwa" : 757760,
							"bwc" : 521812,
							"fast" : 2,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000153,
							"pbg" : 0.000312,
							"pbm" : 0.00014900000000000002,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 26729,
					"relay" : 1,
					"bwa" : 35540,
					"bwc" : 10071,
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
							"bwc" : 10071,
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
					"as" : 51377,
					"relay" : 3,
					"bwa" : 4541454,
					"bwc" : 1441636,
					"fast" : 3,
					"stable" : 3,
					"guard" : 1,
					"middle" : 3,
					"exit" : 1,
					"dir" : 3,
					"pbr" : 0.0008810000000000001,
					"pbg" : 0.000499,
					"pbm" : 0.000552,
					"pbe" : 0.001591,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 3,
							"bwa" : 4541454,
							"bwc" : 1441636,
							"fast" : 3,
							"stable" : 3,
							"guard" : 1,
							"middle" : 3,
							"exit" : 1,
							"dir" : 3,
							"pbr" : 0.0008810000000000001,
							"pbg" : 0.000499,
							"pbm" : 0.000552,
							"pbe" : 0.001591
						}
					]
				},
				{
					"as" : 39554,
					"relay" : 3,
					"bwa" : 1042432,
					"bwc" : 377526,
					"fast" : 3,
					"stable" : 2,
					"guard" : 1,
					"middle" : 3,
					"exit" : 2,
					"dir" : 2,
					"pbr" : 0.00010300000000000001,
					"pbg" : 0.000056,
					"pbm" : 0.000025,
					"pbe" : 0.000227,
					"countries" : [
						{
							"cc" : "DK",
							"relay" : 3,
							"bwa" : 1042432,
							"bwc" : 377526,
							"fast" : 3,
							"stable" : 2,
							"guard" : 1,
							"middle" : 3,
							"exit" : 2,
							"dir" : 2,
							"pbr" : 0.00010300000000000001,
							"pbg" : 0.000056,
							"pbm" : 0.000025,
							"pbe" : 0.000227
						}
					]
				},
				{
					"as" : 174,
					"relay" : 7,
					"bwa" : 37517812,
					"bwc" : 27322249,
					"fast" : 7,
					"stable" : 6,
					"guard" : 6,
					"middle" : 7,
					"exit" : 2,
					"dir" : 5,
					"pbr" : 0.009871000000000001,
					"pbg" : 0.019905,
					"pbm" : 0.009114,
					"pbe" : 0.000597,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 7,
							"bwa" : 37517812,
							"bwc" : 27322249,
							"fast" : 7,
							"stable" : 6,
							"guard" : 6,
							"middle" : 7,
							"exit" : 2,
							"dir" : 5,
							"pbr" : 0.009871000000000001,
							"pbg" : 0.019905,
							"pbm" : 0.009114,
							"pbe" : 0.000597
						}
					]
				},
				{
					"as" : 10887,
					"relay" : 1,
					"bwa" : 61440,
					"bwc" : 14423,
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
							"bwc" : 14423,
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
					"as" : 25074,
					"relay" : 1,
					"bwa" : 1024000,
					"bwc" : 447437,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000277,
					"pbg" : 0.000571,
					"pbm" : 0.000259,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 1,
							"bwa" : 1024000,
							"bwc" : 447437,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000277,
							"pbg" : 0.000571,
							"pbm" : 0.000259,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 18978,
					"relay" : 2,
					"bwa" : 122880,
					"bwc" : 16395,
					"fast" : 1,
					"stable" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000011,
					"pbg" : 0,
					"pbm" : 0.000025,
					"pbe" : 0.000009,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 122880,
							"bwc" : 16395,
							"fast" : 1,
							"stable" : 2,
							"guard" : 0,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000011,
							"pbg" : 0,
							"pbm" : 0.000025,
							"pbe" : 0.000009
						}
					]
				},
				{
					"as" : 12271,
					"relay" : 4,
					"bwa" : 734208,
					"bwc" : 279774,
					"fast" : 3,
					"stable" : 3,
					"guard" : 1,
					"middle" : 4,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.00014199999999999998,
					"pbg" : 0.000264,
					"pbm" : 0.00016199999999999998,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 4,
							"bwa" : 734208,
							"bwc" : 279774,
							"fast" : 3,
							"stable" : 3,
							"guard" : 1,
							"middle" : 4,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.00014199999999999998,
							"pbg" : 0.000264,
							"pbm" : 0.00016199999999999998,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 28986,
					"relay" : 1,
					"bwa" : 917504,
					"bwc" : 706001,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000288,
					"pbg" : 0.000166,
					"pbm" : 0.000166,
					"pbe" : 0.00053,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 1,
							"bwa" : 917504,
							"bwc" : 706001,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000288,
							"pbg" : 0.000166,
							"pbm" : 0.000166,
							"pbe" : 0.00053
						}
					]
				},
				{
					"as" : 3722,
					"relay" : 2,
					"bwa" : 532121,
					"bwc" : 129110,
					"fast" : 2,
					"stable" : 0,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000052,
					"pbg" : 0,
					"pbm" : 0.000155,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 532121,
							"bwc" : 129110,
							"fast" : 2,
							"stable" : 0,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000052,
							"pbg" : 0,
							"pbm" : 0.000155,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 137,
					"relay" : 6,
					"bwa" : 1218560,
					"bwc" : 768625,
					"fast" : 6,
					"stable" : 6,
					"guard" : 4,
					"middle" : 6,
					"exit" : 0,
					"dir" : 5,
					"pbr" : 0.000207,
					"pbg" : 0.000397,
					"pbm" : 0.00022600000000000002,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "IT",
							"relay" : 6,
							"bwa" : 1218560,
							"bwc" : 768625,
							"fast" : 6,
							"stable" : 6,
							"guard" : 4,
							"middle" : 6,
							"exit" : 0,
							"dir" : 5,
							"pbr" : 0.000207,
							"pbg" : 0.000397,
							"pbm" : 0.00022600000000000002,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 29873,
					"relay" : 2,
					"bwa" : 191076,
					"bwc" : 31263,
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
							"bwa" : 191076,
							"bwc" : 31263,
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
					"as" : 6805,
					"relay" : 19,
					"bwa" : 3494172,
					"bwc" : 2342612,
					"fast" : 16,
					"stable" : 1,
					"guard" : 1,
					"middle" : 19,
					"exit" : 2,
					"dir" : 11,
					"pbr" : 0.000637,
					"pbg" : 0.001012,
					"pbm" : 0.0008770000000000001,
					"pbe" : 0.000026000000000000002,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 19,
							"bwa" : 3494172,
							"bwc" : 2342612,
							"fast" : 16,
							"stable" : 1,
							"guard" : 1,
							"middle" : 19,
							"exit" : 2,
							"dir" : 11,
							"pbr" : 0.000637,
							"pbg" : 0.001012,
							"pbm" : 0.0008770000000000001,
							"pbe" : 0.000026000000000000002
						}
					]
				},
				{
					"as" : 29182,
					"relay" : 1,
					"bwa" : 1290240,
					"bwc" : 1205099,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000357,
					"pbg" : 0,
					"pbm" : 0.00107,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 1290240,
							"bwc" : 1205099,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000357,
							"pbg" : 0,
							"pbm" : 0.00107,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 27553,
					"relay" : 1,
					"bwa" : 100599,
					"bwc" : 27184,
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
							"bwc" : 27184,
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
					"as" : 197145,
					"relay" : 1,
					"bwa" : 1048576,
					"bwc" : 747596,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000366,
					"pbg" : 0.000755,
					"pbm" : 0.000343,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "UA",
							"relay" : 1,
							"bwa" : 1048576,
							"bwc" : 747596,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000366,
							"pbg" : 0.000755,
							"pbm" : 0.000343,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 35274,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 23200,
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
							"bwc" : 23200,
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
					"as" : 21599,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 41928,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000025,
					"countries" : [
						{
							"cc" : "PA",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 41928,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000025
						}
					]
				},
				{
					"as" : 12576,
					"relay" : 2,
					"bwa" : 85194,
					"bwc" : 58906,
					"fast" : 1,
					"stable" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000007,
					"pbg" : 0,
					"pbm" : 0.000021000000000000002,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 2,
							"bwa" : 85194,
							"bwc" : 58906,
							"fast" : 1,
							"stable" : 2,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000007,
							"pbg" : 0,
							"pbm" : 0.000021000000000000002,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 45454,
					"relay" : 1,
					"bwa" : 84191,
					"bwc" : 24737,
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
							"cc" : "AU",
							"relay" : 1,
							"bwa" : 84191,
							"bwc" : 24737,
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
					"as" : 21378,
					"relay" : 1,
					"bwa" : 61344,
					"bwc" : 1292,
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
							"bwc" : 1292,
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
					"as" : 12608,
					"relay" : 4,
					"bwa" : 2048000,
					"bwc" : 1174190,
					"fast" : 4,
					"stable" : 4,
					"guard" : 2,
					"middle" : 4,
					"exit" : 2,
					"dir" : 4,
					"pbr" : 0.000264,
					"pbg" : 0.000142,
					"pbm" : 0.00019500000000000002,
					"pbe" : 0.000453,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 4,
							"bwa" : 2048000,
							"bwc" : 1174190,
							"fast" : 4,
							"stable" : 4,
							"guard" : 2,
							"middle" : 4,
							"exit" : 2,
							"dir" : 4,
							"pbr" : 0.000264,
							"pbg" : 0.000142,
							"pbm" : 0.00019500000000000002,
							"pbe" : 0.000453
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
					"pbm" : 0.000025,
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
							"pbm" : 0.000025,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 18106,
					"relay" : 2,
					"bwa" : 672282,
					"bwc" : 64693,
					"fast" : 2,
					"stable" : 2,
					"guard" : 2,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000032,
					"pbg" : 0.000066,
					"pbm" : 0.000029999999999999997,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SG",
							"relay" : 2,
							"bwa" : 672282,
							"bwc" : 64693,
							"fast" : 2,
							"stable" : 2,
							"guard" : 2,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000032,
							"pbg" : 0.000066,
							"pbm" : 0.000029999999999999997,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 8001,
					"relay" : 22,
					"bwa" : 18314499,
					"bwc" : 11494444,
					"fast" : 22,
					"stable" : 16,
					"guard" : 7,
					"middle" : 22,
					"exit" : 2,
					"dir" : 7,
					"pbr" : 0.0056240000000000005,
					"pbg" : 0.002615,
					"pbm" : 0.004640999999999999,
					"pbe" : 0.009613,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 22,
							"bwa" : 18314499,
							"bwc" : 11494444,
							"fast" : 22,
							"stable" : 16,
							"guard" : 7,
							"middle" : 22,
							"exit" : 2,
							"dir" : 7,
							"pbr" : 0.0056240000000000005,
							"pbg" : 0.002615,
							"pbm" : 0.004640999999999999,
							"pbe" : 0.009613
						}
					]
				},
				{
					"as" : 224,
					"relay" : 13,
					"bwa" : 51792999,
					"bwc" : 42582344,
					"fast" : 13,
					"stable" : 5,
					"guard" : 5,
					"middle" : 13,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.012766999999999999,
					"pbg" : 0.023464,
					"pbm" : 0.014831999999999998,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NO",
							"relay" : 13,
							"bwa" : 51792999,
							"bwc" : 42582344,
							"fast" : 13,
							"stable" : 5,
							"guard" : 5,
							"middle" : 13,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.012766999999999999,
							"pbg" : 0.023464,
							"pbm" : 0.014831999999999998,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 6461,
					"relay" : 2,
					"bwa" : 481383,
					"bwc" : 39804,
					"fast" : 2,
					"stable" : 0,
					"guard" : 2,
					"middle" : 2,
					"exit" : 2,
					"dir" : 2,
					"pbr" : 0.000111,
					"pbg" : 0.00006500000000000001,
					"pbm" : 0.00006500000000000001,
					"pbe" : 0.000205,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 481383,
							"bwc" : 39804,
							"fast" : 2,
							"stable" : 0,
							"guard" : 2,
							"middle" : 2,
							"exit" : 2,
							"dir" : 2,
							"pbr" : 0.000111,
							"pbg" : 0.00006500000000000001,
							"pbm" : 0.00006500000000000001,
							"pbe" : 0.000205
						}
					]
				},
				{
					"as" : 45570,
					"relay" : 3,
					"bwa" : 2975867,
					"bwc" : 564876,
					"fast" : 3,
					"stable" : 2,
					"guard" : 2,
					"middle" : 3,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000406,
					"pbg" : 0.000207,
					"pbm" : 0.00009400000000000001,
					"pbe" : 0.000914,
					"countries" : [
						{
							"cc" : "AU",
							"relay" : 3,
							"bwa" : 2975867,
							"bwc" : 564876,
							"fast" : 3,
							"stable" : 2,
							"guard" : 2,
							"middle" : 3,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000406,
							"pbg" : 0.000207,
							"pbm" : 0.00009400000000000001,
							"pbe" : 0.000914
						}
					]
				},
				{
					"as" : 250,
					"relay" : 1,
					"bwa" : 83113,
					"bwc" : 7826,
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
							"bwc" : 7826,
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
					"as" : 766,
					"relay" : 3,
					"bwa" : 225280,
					"bwc" : 70040,
					"fast" : 2,
					"stable" : 2,
					"guard" : 0,
					"middle" : 3,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000012,
					"pbg" : 0,
					"pbm" : 0.000035,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "ES",
							"relay" : 3,
							"bwa" : 225280,
							"bwc" : 70040,
							"fast" : 2,
							"stable" : 2,
							"guard" : 0,
							"middle" : 3,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000012,
							"pbg" : 0,
							"pbm" : 0.000035,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 24971,
					"relay" : 4,
					"bwa" : 1324032,
					"bwc" : 657123,
					"fast" : 4,
					"stable" : 4,
					"guard" : 1,
					"middle" : 4,
					"exit" : 2,
					"dir" : 2,
					"pbr" : 0.00045000000000000004,
					"pbg" : 0.000082,
					"pbm" : 0.000118,
					"pbe" : 0.00115,
					"countries" : [
						{
							"cc" : "CZ",
							"relay" : 4,
							"bwa" : 1324032,
							"bwc" : 657123,
							"fast" : 4,
							"stable" : 4,
							"guard" : 1,
							"middle" : 4,
							"exit" : 2,
							"dir" : 2,
							"pbr" : 0.00045000000000000004,
							"pbg" : 0.000082,
							"pbm" : 0.000118,
							"pbe" : 0.00115
						}
					]
				},
				{
					"as" : 20001,
					"relay" : 12,
					"bwa" : 1658646,
					"bwc" : 336820,
					"fast" : 10,
					"stable" : 5,
					"guard" : 1,
					"middle" : 12,
					"exit" : 4,
					"dir" : 8,
					"pbr" : 0.00009800000000000001,
					"pbg" : 0.000027,
					"pbm" : 0.00020899999999999998,
					"pbe" : 0.000057,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 12,
							"bwa" : 1658646,
							"bwc" : 336820,
							"fast" : 10,
							"stable" : 5,
							"guard" : 1,
							"middle" : 12,
							"exit" : 4,
							"dir" : 8,
							"pbr" : 0.00009800000000000001,
							"pbg" : 0.000027,
							"pbm" : 0.00020899999999999998,
							"pbe" : 0.000057
						}
					]
				},
				{
					"as" : 12392,
					"relay" : 1,
					"bwa" : 196169,
					"bwc" : 72736,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000019,
					"pbg" : 0,
					"pbm" : 0.000056,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "BE",
							"relay" : 1,
							"bwa" : 196169,
							"bwc" : 72736,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000019,
							"pbg" : 0,
							"pbm" : 0.000056,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 29761,
					"relay" : 8,
					"bwa" : 92232219,
					"bwc" : 70193105,
					"fast" : 7,
					"stable" : 8,
					"guard" : 7,
					"middle" : 8,
					"exit" : 5,
					"dir" : 7,
					"pbr" : 0.038076,
					"pbg" : 0.022085999999999998,
					"pbm" : 0.022033999999999998,
					"pbe" : 0.070112,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 7,
							"bwa" : 92210296,
							"bwc" : 70192182,
							"fast" : 7,
							"stable" : 7,
							"guard" : 7,
							"middle" : 7,
							"exit" : 5,
							"dir" : 7,
							"pbr" : 0.038072999999999996,
							"pbg" : 0.022085999999999998,
							"pbm" : 0.022025,
							"pbe" : 0.070112
						},
						{
							"cc" : "CA",
							"relay" : 1,
							"bwa" : 21923,
							"bwc" : 923,
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
					"as" : 8615,
					"relay" : 1,
					"bwa" : 786432,
					"bwc" : 749301,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.00028,
					"pbg" : 0.000577,
					"pbm" : 0.000262,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 786432,
							"bwc" : 749301,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.00028,
							"pbg" : 0.000577,
							"pbm" : 0.000262,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 35612,
					"relay" : 3,
					"bwa" : 61440,
					"bwc" : 501,
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
							"bwc" : 501,
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
					"as" : 30158,
					"relay" : 1,
					"bwa" : 5181,
					"bwc" : 203,
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
							"bwc" : 203,
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
					"as" : 10507,
					"relay" : 1,
					"bwa" : 20480,
					"bwc" : 79,
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
							"bwc" : 79,
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
					"as" : 8612,
					"relay" : 3,
					"bwa" : 101536,
					"bwc" : 1755,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 3,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0.000014,
					"pbe" : 0.000009,
					"countries" : [
						{
							"cc" : "IT",
							"relay" : 3,
							"bwa" : 101536,
							"bwc" : 1755,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 3,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0.000014,
							"pbe" : 0.000009
						}
					]
				},
				{
					"as" : 33070,
					"relay" : 3,
					"bwa" : 563200,
					"bwc" : 186737,
					"fast" : 3,
					"stable" : 3,
					"guard" : 1,
					"middle" : 3,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000114,
					"pbg" : 0.000147,
					"pbm" : 0.00009400000000000001,
					"pbe" : 0.000103,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 3,
							"bwa" : 563200,
							"bwc" : 186737,
							"fast" : 3,
							"stable" : 3,
							"guard" : 1,
							"middle" : 3,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000114,
							"pbg" : 0.000147,
							"pbm" : 0.00009400000000000001,
							"pbe" : 0.000103
						}
					]
				},
				{
					"as" : 49544,
					"relay" : 5,
					"bwa" : 19310624,
					"bwc" : 14467009,
					"fast" : 5,
					"stable" : 4,
					"guard" : 2,
					"middle" : 5,
					"exit" : 2,
					"dir" : 4,
					"pbr" : 0.005777,
					"pbg" : 0.007387,
					"pbm" : 0.009814,
					"pbe" : 0.000127,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 5,
							"bwa" : 19310624,
							"bwc" : 14467009,
							"fast" : 5,
							"stable" : 4,
							"guard" : 2,
							"middle" : 5,
							"exit" : 2,
							"dir" : 4,
							"pbr" : 0.005777,
							"pbg" : 0.007387,
							"pbm" : 0.009814,
							"pbe" : 0.000127
						}
					]
				},
				{
					"as" : 19994,
					"relay" : 8,
					"bwa" : 1748970,
					"bwc" : 1066750,
					"fast" : 3,
					"stable" : 6,
					"guard" : 1,
					"middle" : 8,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.0005819999999999999,
					"pbg" : 0.001012,
					"pbm" : 0.000642,
					"pbe" : 0.000091,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 8,
							"bwa" : 1748970,
							"bwc" : 1066750,
							"fast" : 3,
							"stable" : 6,
							"guard" : 1,
							"middle" : 8,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.0005819999999999999,
							"pbg" : 0.001012,
							"pbm" : 0.000642,
							"pbe" : 0.000091
						}
					]
				},
				{
					"as" : 22772,
					"relay" : 1,
					"bwa" : 655360,
					"bwc" : 185011,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000091,
					"pbg" : 0.000187,
					"pbm" : 0.000085,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 655360,
							"bwc" : 185011,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000091,
							"pbg" : 0.000187,
							"pbm" : 0.000085,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 9008,
					"relay" : 2,
					"bwa" : 2388536,
					"bwc" : 507419,
					"fast" : 1,
					"stable" : 0,
					"guard" : 1,
					"middle" : 2,
					"exit" : 2,
					"dir" : 1,
					"pbr" : 0.000111,
					"pbg" : 0.000062,
					"pbm" : 0.000062,
					"pbe" : 0.00020800000000000001,
					"countries" : [
						{
							"cc" : "LU",
							"relay" : 2,
							"bwa" : 2388536,
							"bwc" : 507419,
							"fast" : 1,
							"stable" : 0,
							"guard" : 1,
							"middle" : 2,
							"exit" : 2,
							"dir" : 1,
							"pbr" : 0.000111,
							"pbg" : 0.000062,
							"pbm" : 0.000062,
							"pbe" : 0.00020800000000000001
						}
					]
				},
				{
					"as" : 3462,
					"relay" : 4,
					"bwa" : 789463,
					"bwc" : 30451,
					"fast" : 3,
					"stable" : 1,
					"guard" : 0,
					"middle" : 4,
					"exit" : 3,
					"dir" : 2,
					"pbr" : 0.000045,
					"pbg" : 0,
					"pbm" : 0.000093,
					"pbe" : 0.000041,
					"countries" : [
						{
							"cc" : "TW",
							"relay" : 4,
							"bwa" : 789463,
							"bwc" : 30451,
							"fast" : 3,
							"stable" : 1,
							"guard" : 0,
							"middle" : 4,
							"exit" : 3,
							"dir" : 2,
							"pbr" : 0.000045,
							"pbg" : 0,
							"pbm" : 0.000093,
							"pbe" : 0.000041
						}
					]
				},
				{
					"as" : 59469,
					"relay" : 1,
					"bwa" : 15406716,
					"bwc" : 12617999,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.005322,
					"pbg" : 0.003077,
					"pbm" : 0.003076,
					"pbe" : 0.009814,
					"countries" : [
						{
							"cc" : "DK",
							"relay" : 1,
							"bwa" : 15406716,
							"bwc" : 12617999,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.005322,
							"pbg" : 0.003077,
							"pbm" : 0.003076,
							"pbe" : 0.009814
						}
					]
				},
				{
					"as" : 50673,
					"relay" : 7,
					"bwa" : 8962653,
					"bwc" : 6665634,
					"fast" : 7,
					"stable" : 5,
					"guard" : 3,
					"middle" : 7,
					"exit" : 3,
					"dir" : 4,
					"pbr" : 0.002057,
					"pbg" : 0.000566,
					"pbm" : 0.004751,
					"pbe" : 0.000852,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 7,
							"bwa" : 8962653,
							"bwc" : 6665634,
							"fast" : 7,
							"stable" : 5,
							"guard" : 3,
							"middle" : 7,
							"exit" : 3,
							"dir" : 4,
							"pbr" : 0.002057,
							"pbg" : 0.000566,
							"pbm" : 0.004751,
							"pbe" : 0.000852
						}
					]
				},
				{
					"as" : 5610,
					"relay" : 3,
					"bwa" : 780851,
					"bwc" : 355941,
					"fast" : 3,
					"stable" : 1,
					"guard" : 1,
					"middle" : 3,
					"exit" : 2,
					"dir" : 3,
					"pbr" : 0.00015,
					"pbg" : 0.0003,
					"pbm" : 0.000136,
					"pbe" : 0.000015,
					"countries" : [
						{
							"cc" : "CZ",
							"relay" : 3,
							"bwa" : 780851,
							"bwc" : 355941,
							"fast" : 3,
							"stable" : 1,
							"guard" : 1,
							"middle" : 3,
							"exit" : 2,
							"dir" : 3,
							"pbr" : 0.00015,
							"pbg" : 0.0003,
							"pbm" : 0.000136,
							"pbe" : 0.000015
						}
					]
				},
				{
					"as" : 29073,
					"relay" : 18,
					"bwa" : 21464431,
					"bwc" : 16330829,
					"fast" : 6,
					"stable" : 15,
					"guard" : 3,
					"middle" : 18,
					"exit" : 16,
					"dir" : 4,
					"pbr" : 0.00962,
					"pbg" : 0.0029890000000000003,
					"pbm" : 0.015409,
					"pbe" : 0.010462000000000003,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 18,
							"bwa" : 21464431,
							"bwc" : 16330829,
							"fast" : 6,
							"stable" : 15,
							"guard" : 3,
							"middle" : 18,
							"exit" : 16,
							"dir" : 4,
							"pbr" : 0.00962,
							"pbg" : 0.0029890000000000003,
							"pbm" : 0.015409,
							"pbe" : 0.010462000000000003
						}
					]
				},
				{
					"as" : 42708,
					"relay" : 5,
					"bwa" : 833536,
					"bwc" : 353101,
					"fast" : 5,
					"stable" : 2,
					"guard" : 0,
					"middle" : 5,
					"exit" : 2,
					"dir" : 4,
					"pbr" : 0.000059,
					"pbg" : 0,
					"pbm" : 0.00007,
					"pbe" : 0.000107,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 5,
							"bwa" : 833536,
							"bwc" : 353101,
							"fast" : 5,
							"stable" : 2,
							"guard" : 0,
							"middle" : 5,
							"exit" : 2,
							"dir" : 4,
							"pbr" : 0.000059,
							"pbg" : 0,
							"pbm" : 0.00007,
							"pbe" : 0.000107
						}
					]
				},
				{
					"as" : 6866,
					"relay" : 1,
					"bwa" : 63488,
					"bwc" : 527,
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
							"bwc" : 527,
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
					"as" : 33588,
					"relay" : 2,
					"bwa" : 179200,
					"bwc" : 30656,
					"fast" : 2,
					"stable" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000014,
					"pbg" : 0,
					"pbm" : 0.000018,
					"pbe" : 0.000025,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 179200,
							"bwc" : 30656,
							"fast" : 2,
							"stable" : 2,
							"guard" : 0,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000014,
							"pbg" : 0,
							"pbm" : 0.000018,
							"pbe" : 0.000025
						}
					]
				},
				{
					"as" : 3842,
					"relay" : 8,
					"bwa" : 3134948,
					"bwc" : 1854218,
					"fast" : 8,
					"stable" : 7,
					"guard" : 2,
					"middle" : 8,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000404,
					"pbg" : 0.000123,
					"pbm" : 0.001087,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 8,
							"bwa" : 3134948,
							"bwc" : 1854218,
							"fast" : 8,
							"stable" : 7,
							"guard" : 2,
							"middle" : 8,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000404,
							"pbg" : 0.000123,
							"pbm" : 0.001087,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 29169,
					"relay" : 13,
					"bwa" : 14474640,
					"bwc" : 12001742,
					"fast" : 12,
					"stable" : 13,
					"guard" : 11,
					"middle" : 13,
					"exit" : 4,
					"dir" : 9,
					"pbr" : 0.003341,
					"pbg" : 0.005242000000000001,
					"pbm" : 0.00277,
					"pbe" : 0.002016,
					"countries" : [
						{
							"cc" : "FR",
							"relay" : 12,
							"bwa" : 13809040,
							"bwc" : 11572848,
							"fast" : 11,
							"stable" : 12,
							"guard" : 10,
							"middle" : 12,
							"exit" : 4,
							"dir" : 8,
							"pbr" : 0.003257,
							"pbg" : 0.005070000000000001,
							"pbm" : 0.002692,
							"pbe" : 0.002016
						},
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 665600,
							"bwc" : 428894,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000084,
							"pbg" : 0.000172,
							"pbm" : 0.000078,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 35244,
					"relay" : 1,
					"bwa" : 196608,
					"bwc" : 177950,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000043,
					"pbg" : 0,
					"pbm" : 0.000128,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 1,
							"bwa" : 196608,
							"bwc" : 177950,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000043,
							"pbg" : 0,
							"pbm" : 0.000128,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 47692,
					"relay" : 7,
					"bwa" : 27136365,
					"bwc" : 19691479,
					"fast" : 7,
					"stable" : 6,
					"guard" : 4,
					"middle" : 7,
					"exit" : 5,
					"dir" : 7,
					"pbr" : 0.008563000000000001,
					"pbg" : 0.005412999999999999,
					"pbm" : 0.004502,
					"pbe" : 0.015776000000000002,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 4,
							"bwa" : 17695085,
							"bwc" : 10440066,
							"fast" : 4,
							"stable" : 4,
							"guard" : 2,
							"middle" : 4,
							"exit" : 4,
							"dir" : 4,
							"pbr" : 0.004262,
							"pbg" : 0.001682,
							"pbm" : 0.001682,
							"pbe" : 0.009423
						},
						{
							"cc" : "AT",
							"relay" : 3,
							"bwa" : 9441280,
							"bwc" : 9251413,
							"fast" : 3,
							"stable" : 2,
							"guard" : 2,
							"middle" : 3,
							"exit" : 1,
							"dir" : 3,
							"pbr" : 0.004301,
							"pbg" : 0.003731,
							"pbm" : 0.00282,
							"pbe" : 0.006353
						}
					]
				},
				{
					"as" : 12741,
					"relay" : 3,
					"bwa" : 718848,
					"bwc" : 468151,
					"fast" : 2,
					"stable" : 1,
					"guard" : 1,
					"middle" : 3,
					"exit" : 1,
					"dir" : 3,
					"pbr" : 0.00009800000000000001,
					"pbg" : 0.00019,
					"pbm" : 0.00009400000000000001,
					"pbe" : 0.000009,
					"countries" : [
						{
							"cc" : "PL",
							"relay" : 3,
							"bwa" : 718848,
							"bwc" : 468151,
							"fast" : 2,
							"stable" : 1,
							"guard" : 1,
							"middle" : 3,
							"exit" : 1,
							"dir" : 3,
							"pbr" : 0.00009800000000000001,
							"pbg" : 0.00019,
							"pbm" : 0.00009400000000000001,
							"pbe" : 0.000009
						}
					]
				},
				{
					"as" : 3651,
					"relay" : 3,
					"bwa" : 93184,
					"bwc" : 1708,
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
							"bwc" : 1708,
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
					"as" : 12874,
					"relay" : 7,
					"bwa" : 1909852,
					"bwc" : 729383,
					"fast" : 5,
					"stable" : 1,
					"guard" : 1,
					"middle" : 7,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.000364,
					"pbg" : 0.000185,
					"pbm" : 0.0009000000000000001,
					"pbe" : 0.000006,
					"countries" : [
						{
							"cc" : "IT",
							"relay" : 7,
							"bwa" : 1909852,
							"bwc" : 729383,
							"fast" : 5,
							"stable" : 1,
							"guard" : 1,
							"middle" : 7,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.000364,
							"pbg" : 0.000185,
							"pbm" : 0.0009000000000000001,
							"pbe" : 0.000006
						}
					]
				},
				{
					"as" : 33139,
					"relay" : 1,
					"bwa" : 25600,
					"bwc" : 113,
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
							"bwc" : 113,
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
					"as" : 52201,
					"relay" : 4,
					"bwa" : 2486272,
					"bwc" : 978916,
					"fast" : 4,
					"stable" : 4,
					"guard" : 2,
					"middle" : 4,
					"exit" : 3,
					"dir" : 3,
					"pbr" : 0.000325,
					"pbg" : 0.000174,
					"pbm" : 0.00020599999999999997,
					"pbe" : 0.000596,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 4,
							"bwa" : 2486272,
							"bwc" : 978916,
							"fast" : 4,
							"stable" : 4,
							"guard" : 2,
							"middle" : 4,
							"exit" : 3,
							"dir" : 3,
							"pbr" : 0.000325,
							"pbg" : 0.000174,
							"pbm" : 0.00020599999999999997,
							"pbe" : 0.000596
						}
					]
				},
				{
					"as" : 46664,
					"relay" : 2,
					"bwa" : 1626956,
					"bwc" : 1512777,
					"fast" : 2,
					"stable" : 1,
					"guard" : 1,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.00029400000000000004,
					"pbg" : 0.0006,
					"pbm" : 0.000281,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 1626956,
							"bwc" : 1512777,
							"fast" : 2,
							"stable" : 1,
							"guard" : 1,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.00029400000000000004,
							"pbg" : 0.0006,
							"pbm" : 0.000281,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 680,
					"relay" : 9,
					"bwa" : 10173561,
					"bwc" : 6682106,
					"fast" : 9,
					"stable" : 8,
					"guard" : 4,
					"middle" : 9,
					"exit" : 1,
					"dir" : 7,
					"pbr" : 0.0015170000000000001,
					"pbg" : 0.002424,
					"pbm" : 0.0014329999999999998,
					"pbe" : 0.000692,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 9,
							"bwa" : 10173561,
							"bwc" : 6682106,
							"fast" : 9,
							"stable" : 8,
							"guard" : 4,
							"middle" : 9,
							"exit" : 1,
							"dir" : 7,
							"pbr" : 0.0015170000000000001,
							"pbg" : 0.002424,
							"pbm" : 0.0014329999999999998,
							"pbe" : 0.000692
						}
					]
				},
				{
					"as" : 9158,
					"relay" : 3,
					"bwa" : 216064,
					"bwc" : 10722,
					"fast" : 3,
					"stable" : 0,
					"guard" : 0,
					"middle" : 3,
					"exit" : 1,
					"dir" : 3,
					"pbr" : 0.000012,
					"pbg" : 0,
					"pbm" : 0.000019,
					"pbe" : 0.000016,
					"countries" : [
						{
							"cc" : "DK",
							"relay" : 3,
							"bwa" : 216064,
							"bwc" : 10722,
							"fast" : 3,
							"stable" : 0,
							"guard" : 0,
							"middle" : 3,
							"exit" : 1,
							"dir" : 3,
							"pbr" : 0.000012,
							"pbg" : 0,
							"pbm" : 0.000019,
							"pbe" : 0.000016
						}
					]
				},
				{
					"as" : 25229,
					"relay" : 2,
					"bwa" : 252928,
					"bwc" : 18623,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000015,
					"pbg" : 0,
					"pbm" : 0.000046,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "UA",
							"relay" : 2,
							"bwa" : 252928,
							"bwc" : 18623,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 2,
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
					"as" : 34,
					"relay" : 1,
					"bwa" : 483173,
					"bwc" : 167210,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000029,
					"pbg" : 0,
					"pbm" : 0.000086,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 483173,
							"bwc" : 167210,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000029,
							"pbg" : 0,
							"pbm" : 0.000086,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 21502,
					"relay" : 7,
					"bwa" : 1242234,
					"bwc" : 596365,
					"fast" : 7,
					"stable" : 3,
					"guard" : 1,
					"middle" : 7,
					"exit" : 1,
					"dir" : 3,
					"pbr" : 0.00015500000000000003,
					"pbg" : 0.000098,
					"pbm" : 0.000115,
					"pbe" : 0.000255,
					"countries" : [
						{
							"cc" : "FR",
							"relay" : 7,
							"bwa" : 1242234,
							"bwc" : 596365,
							"fast" : 7,
							"stable" : 3,
							"guard" : 1,
							"middle" : 7,
							"exit" : 1,
							"dir" : 3,
							"pbr" : 0.00015500000000000003,
							"pbg" : 0.000098,
							"pbm" : 0.000115,
							"pbe" : 0.000255
						}
					]
				},
				{
					"as" : 9105,
					"relay" : 1,
					"bwa" : 140254,
					"bwc" : 34213,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0.000023,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 1,
							"bwa" : 140254,
							"bwc" : 34213,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0.000023,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 17746,
					"relay" : 1,
					"bwa" : 44653,
					"bwc" : 1159,
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
							"bwc" : 1159,
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
					"as" : 8896,
					"relay" : 1,
					"bwa" : 1048576,
					"bwc" : 858308,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000305,
					"pbg" : 0.000628,
					"pbm" : 0.000285,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NO",
							"relay" : 1,
							"bwa" : 1048576,
							"bwc" : 858308,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000305,
							"pbg" : 0.000628,
							"pbm" : 0.000285,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 3790,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 73265,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000011,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000033,
					"countries" : [
						{
							"cc" : "CR",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 73265,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000011,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000033
						}
					]
				},
				{
					"as" : 13722,
					"relay" : 4,
					"bwa" : 26169165,
					"bwc" : 16447561,
					"fast" : 4,
					"stable" : 4,
					"guard" : 3,
					"middle" : 4,
					"exit" : 4,
					"dir" : 4,
					"pbr" : 0.013170999999999999,
					"pbg" : 0.007356,
					"pbm" : 0.007352999999999999,
					"pbe" : 0.024804000000000003,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 4,
							"bwa" : 26169165,
							"bwc" : 16447561,
							"fast" : 4,
							"stable" : 4,
							"guard" : 3,
							"middle" : 4,
							"exit" : 4,
							"dir" : 4,
							"pbr" : 0.013170999999999999,
							"pbg" : 0.007356,
							"pbm" : 0.007352999999999999,
							"pbe" : 0.024804000000000003
						}
					]
				},
				{
					"as" : 25795,
					"relay" : 4,
					"bwa" : 665600,
					"bwc" : 253281,
					"fast" : 4,
					"stable" : 3,
					"guard" : 1,
					"middle" : 4,
					"exit" : 1,
					"dir" : 3,
					"pbr" : 0.000089,
					"pbg" : 0.000068,
					"pbm" : 0.000099,
					"pbe" : 0.000103,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 4,
							"bwa" : 665600,
							"bwc" : 253281,
							"fast" : 4,
							"stable" : 3,
							"guard" : 1,
							"middle" : 4,
							"exit" : 1,
							"dir" : 3,
							"pbr" : 0.000089,
							"pbg" : 0.000068,
							"pbm" : 0.000099,
							"pbe" : 0.000103
						}
					]
				},
				{
					"as" : 34594,
					"relay" : 1,
					"bwa" : 20480,
					"bwc" : 424,
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
							"bwc" : 424,
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
					"as" : 18126,
					"relay" : 1,
					"bwa" : 536683,
					"bwc" : 36363,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000012,
					"pbg" : 0,
					"pbm" : 0.000036,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "JP",
							"relay" : 1,
							"bwa" : 536683,
							"bwc" : 36363,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000012,
							"pbg" : 0,
							"pbm" : 0.000036,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 4739,
					"relay" : 7,
					"bwa" : 486400,
					"bwc" : 38304,
					"fast" : 5,
					"stable" : 7,
					"guard" : 0,
					"middle" : 7,
					"exit" : 2,
					"dir" : 3,
					"pbr" : 0.000019,
					"pbg" : 0,
					"pbm" : 0.000041,
					"pbe" : 0.000015,
					"countries" : [
						{
							"cc" : "AU",
							"relay" : 7,
							"bwa" : 486400,
							"bwc" : 38304,
							"fast" : 5,
							"stable" : 7,
							"guard" : 0,
							"middle" : 7,
							"exit" : 2,
							"dir" : 3,
							"pbr" : 0.000019,
							"pbg" : 0,
							"pbm" : 0.000041,
							"pbe" : 0.000015
						}
					]
				},
				{
					"as" : 10508,
					"relay" : 1,
					"bwa" : 196608,
					"bwc" : 50206,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.00002,
					"pbg" : 0.000041,
					"pbm" : 0.000018,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 196608,
							"bwc" : 50206,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.00002,
							"pbg" : 0.000041,
							"pbm" : 0.000018,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 12083,
					"relay" : 3,
					"bwa" : 391168,
					"bwc" : 75535,
					"fast" : 3,
					"stable" : 0,
					"guard" : 0,
					"middle" : 3,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.000024,
					"pbg" : 0,
					"pbm" : 0.000055,
					"pbe" : 0.000017,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 3,
							"bwa" : 391168,
							"bwc" : 75535,
							"fast" : 3,
							"stable" : 0,
							"guard" : 0,
							"middle" : 3,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.000024,
							"pbg" : 0,
							"pbm" : 0.000055,
							"pbe" : 0.000017
						}
					]
				},
				{
					"as" : 35018,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 8488,
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
							"bwc" : 8488,
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
					"as" : 9063,
					"relay" : 1,
					"bwa" : 197064,
					"bwc" : 65196,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000012,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000036,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 1,
							"bwa" : 197064,
							"bwc" : 65196,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000012,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000036
						}
					]
				},
				{
					"as" : 17676,
					"relay" : 3,
					"bwa" : 289399,
					"bwc" : 125596,
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
							"bwc" : 125596,
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
					"as" : 34702,
					"relay" : 1,
					"bwa" : 92160,
					"bwc" : 33062,
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
							"cc" : "EE",
							"relay" : 1,
							"bwa" : 92160,
							"bwc" : 33062,
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
					"as" : 45753,
					"relay" : 1,
					"bwa" : 88205,
					"bwc" : 3568,
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
							"bwc" : 3568,
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
					"as" : 56617,
					"relay" : 1,
					"bwa" : 65536,
					"bwc" : 1814,
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
							"bwc" : 1814,
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
					"as" : 13124,
					"relay" : 3,
					"bwa" : 255660,
					"bwc" : 18954,
					"fast" : 3,
					"stable" : 2,
					"guard" : 0,
					"middle" : 3,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.000009,
					"pbg" : 0,
					"pbm" : 0.000021000000000000002,
					"pbe" : 0.000007,
					"countries" : [
						{
							"cc" : "BG",
							"relay" : 3,
							"bwa" : 255660,
							"bwc" : 18954,
							"fast" : 3,
							"stable" : 2,
							"guard" : 0,
							"middle" : 3,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.000009,
							"pbg" : 0,
							"pbm" : 0.000021000000000000002,
							"pbe" : 0.000007
						}
					]
				},
				{
					"as" : 3061,
					"relay" : 1,
					"bwa" : 195280,
					"bwc" : 97088,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000033,
					"pbg" : 0,
					"pbm" : 0.000098,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 195280,
							"bwc" : 97088,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000033,
							"pbg" : 0,
							"pbm" : 0.000098,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 73,
					"relay" : 1,
					"bwa" : 4864070,
					"bwc" : 3865408,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.001953,
					"pbg" : 0.00403,
					"pbm" : 0.00183,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 4864070,
							"bwc" : 3865408,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.001953,
							"pbg" : 0.00403,
							"pbm" : 0.00183,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 9269,
					"relay" : 1,
					"bwa" : 141843,
					"bwc" : 25831,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000006,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000018,
					"countries" : [
						{
							"cc" : "HK",
							"relay" : 1,
							"bwa" : 141843,
							"bwc" : 25831,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000006,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000018
						}
					]
				},
				{
					"as" : 49170,
					"relay" : 1,
					"bwa" : 98304,
					"bwc" : 5089,
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
							"bwc" : 5089,
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
					"as" : 30266,
					"relay" : 4,
					"bwa" : 8932881,
					"bwc" : 6853394,
					"fast" : 4,
					"stable" : 3,
					"guard" : 3,
					"middle" : 4,
					"exit" : 0,
					"dir" : 3,
					"pbr" : 0.002252,
					"pbg" : 0.004629,
					"pbm" : 0.002128,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 4,
							"bwa" : 8932881,
							"bwc" : 6853394,
							"fast" : 4,
							"stable" : 3,
							"guard" : 3,
							"middle" : 4,
							"exit" : 0,
							"dir" : 3,
							"pbr" : 0.002252,
							"pbg" : 0.004629,
							"pbm" : 0.002128,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 6663,
					"relay" : 1,
					"bwa" : 307200,
					"bwc" : 121527,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.00008,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.00024,
					"countries" : [
						{
							"cc" : "RO",
							"relay" : 1,
							"bwa" : 307200,
							"bwc" : 121527,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.00008,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.00024
						}
					]
				},
				{
					"as" : 24309,
					"relay" : 1,
					"bwa" : 95322,
					"bwc" : 47979,
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
							"bwc" : 47979,
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
					"as" : 12035,
					"relay" : 1,
					"bwa" : 98304,
					"bwc" : 57774,
					"fast" : 1,
					"stable" : 0,
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
							"bwa" : 98304,
							"bwc" : 57774,
							"fast" : 1,
							"stable" : 0,
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
					"as" : 6315,
					"relay" : 6,
					"bwa" : 21793180,
					"bwc" : 15939024,
					"fast" : 6,
					"stable" : 5,
					"guard" : 3,
					"middle" : 6,
					"exit" : 4,
					"dir" : 5,
					"pbr" : 0.006840000000000001,
					"pbg" : 0.003637,
					"pbm" : 0.005282,
					"pbe" : 0.011603,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 6,
							"bwa" : 21793180,
							"bwc" : 15939024,
							"fast" : 6,
							"stable" : 5,
							"guard" : 3,
							"middle" : 6,
							"exit" : 4,
							"dir" : 5,
							"pbr" : 0.006840000000000001,
							"pbg" : 0.003637,
							"pbm" : 0.005282,
							"pbe" : 0.011603
						}
					]
				},
				{
					"as" : 42964,
					"relay" : 1,
					"bwa" : 1405459,
					"bwc" : 880327,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000146,
					"pbg" : 0.000085,
					"pbm" : 0.000085,
					"pbe" : 0.00027,
					"countries" : [
						{
							"cc" : "HU",
							"relay" : 1,
							"bwa" : 1405459,
							"bwc" : 880327,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000146,
							"pbg" : 0.000085,
							"pbm" : 0.000085,
							"pbe" : 0.00027
						}
					]
				},
				{
					"as" : 198414,
					"relay" : 2,
					"bwa" : 2199552,
					"bwc" : 581472,
					"fast" : 2,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.0006789999999999999,
					"pbg" : 0.000389,
					"pbm" : 0.00041000000000000005,
					"pbe" : 0.001239,
					"countries" : [
						{
							"cc" : "PL",
							"relay" : 2,
							"bwa" : 2199552,
							"bwc" : 581472,
							"fast" : 2,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.0006789999999999999,
							"pbg" : 0.000389,
							"pbm" : 0.00041000000000000005,
							"pbe" : 0.001239
						}
					]
				},
				{
					"as" : 55470,
					"relay" : 1,
					"bwa" : 1901167,
					"bwc" : 492708,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000084,
					"pbg" : 0.000173,
					"pbm" : 0.000078,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "IN",
							"relay" : 1,
							"bwa" : 1901167,
							"bwc" : 492708,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000084,
							"pbg" : 0.000173,
							"pbm" : 0.000078,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 39369,
					"relay" : 2,
					"bwa" : 13362930,
					"bwc" : 11229327,
					"fast" : 2,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.0037119999999999996,
					"pbg" : 0.007647,
					"pbm" : 0.003489,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 2,
							"bwa" : 13362930,
							"bwc" : 11229327,
							"fast" : 2,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.0037119999999999996,
							"pbg" : 0.007647,
							"pbm" : 0.003489,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 198252,
					"relay" : 1,
					"bwa" : 53248,
					"bwc" : 2519,
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
							"bwc" : 2519,
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
					"as" : 31736,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 49996,
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
							"bwc" : 49996,
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
					"as" : 51815,
					"relay" : 4,
					"bwa" : 19602100,
					"bwc" : 16617415,
					"fast" : 4,
					"stable" : 2,
					"guard" : 2,
					"middle" : 4,
					"exit" : 2,
					"dir" : 3,
					"pbr" : 0.007892999999999999,
					"pbg" : 0.006028,
					"pbm" : 0.004952,
					"pbe" : 0.012701,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 4,
							"bwa" : 19602100,
							"bwc" : 16617415,
							"fast" : 4,
							"stable" : 2,
							"guard" : 2,
							"middle" : 4,
							"exit" : 2,
							"dir" : 3,
							"pbr" : 0.007892999999999999,
							"pbg" : 0.006028,
							"pbm" : 0.004952,
							"pbe" : 0.012701
						}
					]
				},
				{
					"as" : 2518,
					"relay" : 2,
					"bwa" : 235344,
					"bwc" : 63036,
					"fast" : 2,
					"stable" : 1,
					"guard" : 0,
					"middle" : 2,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.000012,
					"pbg" : 0,
					"pbm" : 0.000012,
					"pbe" : 0.000023,
					"countries" : [
						{
							"cc" : "JP",
							"relay" : 2,
							"bwa" : 235344,
							"bwc" : 63036,
							"fast" : 2,
							"stable" : 1,
							"guard" : 0,
							"middle" : 2,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.000012,
							"pbg" : 0,
							"pbm" : 0.000012,
							"pbe" : 0.000023
						}
					]
				},
				{
					"as" : 9482,
					"relay" : 2,
					"bwa" : 936752,
					"bwc" : 106421,
					"fast" : 2,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 2,
					"dir" : 2,
					"pbr" : 0.00006599999999999999,
					"pbg" : 0.000034,
					"pbm" : 0.000034,
					"pbe" : 0.000128,
					"countries" : [
						{
							"cc" : "AU",
							"relay" : 2,
							"bwa" : 936752,
							"bwc" : 106421,
							"fast" : 2,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 2,
							"dir" : 2,
							"pbr" : 0.00006599999999999999,
							"pbg" : 0.000034,
							"pbm" : 0.000034,
							"pbe" : 0.000128
						}
					]
				},
				{
					"as" : 31211,
					"relay" : 1,
					"bwa" : 2482293,
					"bwc" : 1835783,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000771,
					"pbg" : 0.00159,
					"pbm" : 0.000722,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "FI",
							"relay" : 1,
							"bwa" : 2482293,
							"bwc" : 1835783,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000771,
							"pbg" : 0.00159,
							"pbm" : 0.000722,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 12668,
					"relay" : 1,
					"bwa" : 512000,
					"bwc" : 236321,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.00009,
					"pbg" : 0.000187,
					"pbm" : 0.000085,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 512000,
							"bwc" : 236321,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.00009,
							"pbg" : 0.000187,
							"pbm" : 0.000085,
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
					"pbg" : 0.000054,
					"pbm" : 0.000025,
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
							"pbg" : 0.000054,
							"pbm" : 0.000025,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 32613,
					"relay" : 7,
					"bwa" : 7503538,
					"bwc" : 5733494,
					"fast" : 7,
					"stable" : 6,
					"guard" : 3,
					"middle" : 7,
					"exit" : 2,
					"dir" : 5,
					"pbr" : 0.0018620000000000002,
					"pbg" : 0.0026079999999999996,
					"pbm" : 0.001759,
					"pbe" : 0.001218,
					"countries" : [
						{
							"cc" : "CA",
							"relay" : 7,
							"bwa" : 7503538,
							"bwc" : 5733494,
							"fast" : 7,
							"stable" : 6,
							"guard" : 3,
							"middle" : 7,
							"exit" : 2,
							"dir" : 5,
							"pbr" : 0.0018620000000000002,
							"pbg" : 0.0026079999999999996,
							"pbm" : 0.001759,
							"pbe" : 0.001218
						}
					]
				},
				{
					"as" : 4766,
					"relay" : 3,
					"bwa" : 657724,
					"bwc" : 42812,
					"fast" : 3,
					"stable" : 1,
					"guard" : 1,
					"middle" : 3,
					"exit" : 0,
					"dir" : 3,
					"pbr" : 0.000036,
					"pbg" : 0.000057,
					"pbm" : 0.000048,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "KR",
							"relay" : 3,
							"bwa" : 657724,
							"bwc" : 42812,
							"fast" : 3,
							"stable" : 1,
							"guard" : 1,
							"middle" : 3,
							"exit" : 0,
							"dir" : 3,
							"pbr" : 0.000036,
							"pbg" : 0.000057,
							"pbm" : 0.000048,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 26934,
					"relay" : 1,
					"bwa" : 1695486,
					"bwc" : 1189230,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000352,
					"pbg" : 0.000727,
					"pbm" : 0.00033,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 1695486,
							"bwc" : 1189230,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000352,
							"pbg" : 0.000727,
							"pbm" : 0.00033,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 31342,
					"relay" : 7,
					"bwa" : 3619507,
					"bwc" : 2299693,
					"fast" : 5,
					"stable" : 6,
					"guard" : 3,
					"middle" : 7,
					"exit" : 1,
					"dir" : 3,
					"pbr" : 0.000603,
					"pbg" : 0.00041600000000000003,
					"pbm" : 0.0013830000000000001,
					"pbe" : 0.000009,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 7,
							"bwa" : 3619507,
							"bwc" : 2299693,
							"fast" : 5,
							"stable" : 6,
							"guard" : 3,
							"middle" : 7,
							"exit" : 1,
							"dir" : 3,
							"pbr" : 0.000603,
							"pbg" : 0.00041600000000000003,
							"pbm" : 0.0013830000000000001,
							"pbe" : 0.000009
						}
					]
				},
				{
					"as" : 20860,
					"relay" : 10,
					"bwa" : 4942400,
					"bwc" : 2932890,
					"fast" : 10,
					"stable" : 7,
					"guard" : 5,
					"middle" : 10,
					"exit" : 3,
					"dir" : 5,
					"pbr" : 0.0008380000000000001,
					"pbg" : 0.0007880000000000001,
					"pbm" : 0.0014309999999999998,
					"pbe" : 0.000298,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 10,
							"bwa" : 4942400,
							"bwc" : 2932890,
							"fast" : 10,
							"stable" : 7,
							"guard" : 5,
							"middle" : 10,
							"exit" : 3,
							"dir" : 5,
							"pbr" : 0.0008380000000000001,
							"pbg" : 0.0007880000000000001,
							"pbm" : 0.0014309999999999998,
							"pbe" : 0.000298
						}
					]
				},
				{
					"as" : 197422,
					"relay" : 2,
					"bwa" : 225280,
					"bwc" : 86609,
					"fast" : 2,
					"stable" : 1,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000022,
					"pbg" : 0,
					"pbm" : 0.000068,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "FR",
							"relay" : 2,
							"bwa" : 225280,
							"bwc" : 86609,
							"fast" : 2,
							"stable" : 1,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000022,
							"pbg" : 0,
							"pbm" : 0.000068,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 7738,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 376,
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
							"bwc" : 376,
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
					"as" : 812,
					"relay" : 3,
					"bwa" : 130526,
					"bwc" : 21652,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 3,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000012,
					"pbg" : 0,
					"pbm" : 0.000036,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "CA",
							"relay" : 3,
							"bwa" : 130526,
							"bwc" : 21652,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 3,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000012,
							"pbg" : 0,
							"pbm" : 0.000036,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 51167,
					"relay" : 3,
					"bwa" : 5278368,
					"bwc" : 3207244,
					"fast" : 3,
					"stable" : 2,
					"guard" : 3,
					"middle" : 3,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.00174,
					"pbg" : 0.003588,
					"pbm" : 0.00163,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 3,
							"bwa" : 5278368,
							"bwc" : 3207244,
							"fast" : 3,
							"stable" : 2,
							"guard" : 3,
							"middle" : 3,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.00174,
							"pbg" : 0.003588,
							"pbm" : 0.00163,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 51013,
					"relay" : 1,
					"bwa" : 4121610,
					"bwc" : 3055771,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.00163,
					"pbg" : 0.003363,
					"pbm" : 0.001528,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SK",
							"relay" : 1,
							"bwa" : 4121610,
							"bwc" : 3055771,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.00163,
							"pbg" : 0.003363,
							"pbm" : 0.001528,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 9145,
					"relay" : 1,
					"bwa" : 56320,
					"bwc" : 1351,
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
							"cc" : "DE",
							"relay" : 1,
							"bwa" : 56320,
							"bwc" : 1351,
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
					"as" : 9112,
					"relay" : 1,
					"bwa" : 215040,
					"bwc" : 151086,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000019,
					"pbg" : 0.00004,
					"pbm" : 0.000018,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "PL",
							"relay" : 1,
							"bwa" : 215040,
							"bwc" : 151086,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000019,
							"pbg" : 0.00004,
							"pbm" : 0.000018,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 198093,
					"relay" : 4,
					"bwa" : 41963520,
					"bwc" : 30918293,
					"fast" : 3,
					"stable" : 4,
					"guard" : 3,
					"middle" : 4,
					"exit" : 3,
					"dir" : 4,
					"pbr" : 0.007346000000000001,
					"pbg" : 0.0042450000000000005,
					"pbm" : 0.004253,
					"pbe" : 0.013541,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 4,
							"bwa" : 41963520,
							"bwc" : 30918293,
							"fast" : 3,
							"stable" : 4,
							"guard" : 3,
							"middle" : 4,
							"exit" : 3,
							"dir" : 4,
							"pbr" : 0.007346000000000001,
							"pbg" : 0.0042450000000000005,
							"pbm" : 0.004253,
							"pbe" : 0.013541
						}
					]
				},
				{
					"as" : 12635,
					"relay" : 2,
					"bwa" : 85280,
					"bwc" : 12308,
					"fast" : 1,
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
							"cc" : "AT",
							"relay" : 2,
							"bwa" : 85280,
							"bwc" : 12308,
							"fast" : 1,
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
					"as" : 15756,
					"relay" : 9,
					"bwa" : 460800,
					"bwc" : 11423,
					"fast" : 9,
					"stable" : 0,
					"guard" : 0,
					"middle" : 9,
					"exit" : 9,
					"dir" : 0,
					"pbr" : 0.000032999999999999996,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000097,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 9,
							"bwa" : 460800,
							"bwc" : 11423,
							"fast" : 9,
							"stable" : 0,
							"guard" : 0,
							"middle" : 9,
							"exit" : 9,
							"dir" : 0,
							"pbr" : 0.000032999999999999996,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000097
						}
					]
				},
				{
					"as" : 23148,
					"relay" : 3,
					"bwa" : 667726,
					"bwc" : 79085,
					"fast" : 3,
					"stable" : 3,
					"guard" : 2,
					"middle" : 3,
					"exit" : 3,
					"dir" : 3,
					"pbr" : 0.000022,
					"pbg" : 0.000009,
					"pbm" : 0.000009,
					"pbe" : 0.000046,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 3,
							"bwa" : 667726,
							"bwc" : 79085,
							"fast" : 3,
							"stable" : 3,
							"guard" : 2,
							"middle" : 3,
							"exit" : 3,
							"dir" : 3,
							"pbr" : 0.000022,
							"pbg" : 0.000009,
							"pbm" : 0.000009,
							"pbe" : 0.000046
						}
					]
				},
				{
					"as" : 35819,
					"relay" : 1,
					"bwa" : 54272,
					"bwc" : 684,
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
							"cc" : "SA",
							"relay" : 1,
							"bwa" : 54272,
							"bwc" : 684,
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
					"as" : 31343,
					"relay" : 1,
					"bwa" : 0,
					"bwc" : 0,
					"fast" : 0,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
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
							"dir" : 0,
							"pbr" : 0,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 13977,
					"relay" : 1,
					"bwa" : 58368,
					"bwc" : 12803,
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
							"bwc" : 12803,
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
					"as" : 6849,
					"relay" : 3,
					"bwa" : 281917,
					"bwc" : 18773,
					"fast" : 2,
					"stable" : 1,
					"guard" : 1,
					"middle" : 3,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000021,
					"pbg" : 0.000009,
					"pbm" : 0.000024999999999999998,
					"pbe" : 0.00003,
					"countries" : [
						{
							"cc" : "UA",
							"relay" : 3,
							"bwa" : 281917,
							"bwc" : 18773,
							"fast" : 2,
							"stable" : 1,
							"guard" : 1,
							"middle" : 3,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000021,
							"pbg" : 0.000009,
							"pbm" : 0.000024999999999999998,
							"pbe" : 0.00003
						}
					]
				},
				{
					"as" : 29405,
					"relay" : 1,
					"bwa" : 3145728,
					"bwc" : 1448924,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000541,
					"pbg" : 0.000313,
					"pbm" : 0.000313,
					"pbe" : 0.000998,
					"countries" : [
						{
							"cc" : "SK",
							"relay" : 1,
							"bwa" : 3145728,
							"bwc" : 1448924,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000541,
							"pbg" : 0.000313,
							"pbm" : 0.000313,
							"pbe" : 0.000998
						}
					]
				},
				{
					"as" : 12358,
					"relay" : 1,
					"bwa" : 256000,
					"bwc" : 0,
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
							"cc" : "BY",
							"relay" : 1,
							"bwa" : 256000,
							"bwc" : 0,
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
					"as" : 41854,
					"relay" : 1,
					"bwa" : 224568,
					"bwc" : 4962,
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
							"bwa" : 224568,
							"bwc" : 4962,
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
					"as" : 103,
					"relay" : 1,
					"bwa" : 1667627,
					"bwc" : 928460,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000389,
					"pbg" : 0,
					"pbm" : 0.001167,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 1667627,
							"bwc" : 928460,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000389,
							"pbg" : 0,
							"pbm" : 0.001167,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 2852,
					"relay" : 2,
					"bwa" : 1216717,
					"bwc" : 519459,
					"fast" : 2,
					"stable" : 1,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000162,
					"pbg" : 0,
					"pbm" : 0.00048499999999999997,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "CZ",
							"relay" : 2,
							"bwa" : 1216717,
							"bwc" : 519459,
							"fast" : 2,
							"stable" : 1,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000162,
							"pbg" : 0,
							"pbm" : 0.00048499999999999997,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 12605,
					"relay" : 3,
					"bwa" : 521216,
					"bwc" : 160727,
					"fast" : 3,
					"stable" : 3,
					"guard" : 2,
					"middle" : 3,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.00007300000000000001,
					"pbg" : 0.00010400000000000001,
					"pbm" : 0.000079,
					"pbe" : 0.000038,
					"countries" : [
						{
							"cc" : "AT",
							"relay" : 3,
							"bwa" : 521216,
							"bwc" : 160727,
							"fast" : 3,
							"stable" : 3,
							"guard" : 2,
							"middle" : 3,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.00007300000000000001,
							"pbg" : 0.00010400000000000001,
							"pbm" : 0.000079,
							"pbe" : 0.000038
						}
					]
				},
				{
					"as" : 9617,
					"relay" : 1,
					"bwa" : 88553,
					"bwc" : 640,
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
							"bwc" : 640,
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
					"as" : 4181,
					"relay" : 3,
					"bwa" : 746496,
					"bwc" : 397349,
					"fast" : 2,
					"stable" : 0,
					"guard" : 0,
					"middle" : 3,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000169,
					"pbg" : 0,
					"pbm" : 0.000504,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 3,
							"bwa" : 746496,
							"bwc" : 397349,
							"fast" : 2,
							"stable" : 0,
							"guard" : 0,
							"middle" : 3,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000169,
							"pbg" : 0,
							"pbm" : 0.000504,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 8100,
					"relay" : 4,
					"bwa" : 110150941,
					"bwc" : 65247856,
					"fast" : 4,
					"stable" : 4,
					"guard" : 1,
					"middle" : 4,
					"exit" : 3,
					"dir" : 3,
					"pbr" : 0.012816999999999999,
					"pbg" : 0.001409,
					"pbm" : 0.00064,
					"pbe" : 0.036406,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 4,
							"bwa" : 110150941,
							"bwc" : 65247856,
							"fast" : 4,
							"stable" : 4,
							"guard" : 1,
							"middle" : 4,
							"exit" : 3,
							"dir" : 3,
							"pbr" : 0.012816999999999999,
							"pbg" : 0.001409,
							"pbm" : 0.00064,
							"pbe" : 0.036406
						}
					]
				},
				{
					"as" : 19202,
					"relay" : 1,
					"bwa" : 153600,
					"bwc" : 85534,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000017,
					"pbg" : 0,
					"pbm" : 0.000052,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 153600,
							"bwc" : 85534,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000017,
							"pbg" : 0,
							"pbm" : 0.000052,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 34119,
					"relay" : 1,
					"bwa" : 61440,
					"bwc" : 18270,
					"fast" : 1,
					"stable" : 0,
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
							"cc" : "GB",
							"relay" : 1,
							"bwa" : 61440,
							"bwc" : 18270,
							"fast" : 1,
							"stable" : 0,
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
					"as" : 42005,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 56709,
					"fast" : 1,
					"stable" : 1,
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
							"cc" : "SK",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 56709,
							"fast" : 1,
							"stable" : 1,
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
					"as" : 20178,
					"relay" : 1,
					"bwa" : 61440,
					"bwc" : 18630,
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
							"bwa" : 61440,
							"bwc" : 18630,
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
					"as" : 8359,
					"relay" : 4,
					"bwa" : 190440,
					"bwc" : 28441,
					"fast" : 2,
					"stable" : 0,
					"guard" : 0,
					"middle" : 4,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.00001,
					"pbg" : 0,
					"pbm" : 0.000027,
					"pbe" : 0.000003,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 4,
							"bwa" : 190440,
							"bwc" : 28441,
							"fast" : 2,
							"stable" : 0,
							"guard" : 0,
							"middle" : 4,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.00001,
							"pbg" : 0,
							"pbm" : 0.000027,
							"pbe" : 0.000003
						}
					]
				},
				{
					"as" : 32097,
					"relay" : 7,
					"bwa" : 12318653,
					"bwc" : 11027911,
					"fast" : 7,
					"stable" : 7,
					"guard" : 5,
					"middle" : 7,
					"exit" : 1,
					"dir" : 6,
					"pbr" : 0.0029300000000000003,
					"pbg" : 0.005169,
					"pbm" : 0.002659,
					"pbe" : 0.000965,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 7,
							"bwa" : 12318653,
							"bwc" : 11027911,
							"fast" : 7,
							"stable" : 7,
							"guard" : 5,
							"middle" : 7,
							"exit" : 1,
							"dir" : 6,
							"pbr" : 0.0029300000000000003,
							"pbg" : 0.005169,
							"pbm" : 0.002659,
							"pbe" : 0.000965
						}
					]
				},
				{
					"as" : 20521,
					"relay" : 1,
					"bwa" : 1024000,
					"bwc" : 549500,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000248,
					"pbg" : 0.000143,
					"pbm" : 0.000143,
					"pbe" : 0.000457,
					"countries" : [
						{
							"cc" : "MT",
							"relay" : 1,
							"bwa" : 1024000,
							"bwc" : 549500,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000248,
							"pbg" : 0.000143,
							"pbm" : 0.000143,
							"pbe" : 0.000457
						}
					]
				},
				{
					"as" : 8997,
					"relay" : 1,
					"bwa" : 204800,
					"bwc" : 66645,
					"fast" : 1,
					"stable" : 0,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.00003,
					"pbg" : 0.000018,
					"pbm" : 0.000018,
					"pbe" : 0.000056,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 204800,
							"bwc" : 66645,
							"fast" : 1,
							"stable" : 0,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.00003,
							"pbg" : 0.000018,
							"pbm" : 0.000018,
							"pbe" : 0.000056
						}
					]
				},
				{
					"as" : 2764,
					"relay" : 1,
					"bwa" : 61609,
					"bwc" : 20388,
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
							"bwc" : 20388,
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
					"as" : 2840,
					"relay" : 2,
					"bwa" : 1515520,
					"bwc" : 1330359,
					"fast" : 2,
					"stable" : 1,
					"guard" : 1,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000406,
					"pbg" : 0.000815,
					"pbm" : 0.000402,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 2,
							"bwa" : 1515520,
							"bwc" : 1330359,
							"fast" : 2,
							"stable" : 1,
							"guard" : 1,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000406,
							"pbg" : 0.000815,
							"pbm" : 0.000402,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 41786,
					"relay" : 2,
					"bwa" : 425916,
					"bwc" : 65002,
					"fast" : 2,
					"stable" : 0,
					"guard" : 1,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000021,
					"pbg" : 0.000029,
					"pbm" : 0.000034,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 2,
							"bwa" : 425916,
							"bwc" : 65002,
							"fast" : 2,
							"stable" : 0,
							"guard" : 1,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000021,
							"pbg" : 0.000029,
							"pbm" : 0.000034,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 36025,
					"relay" : 1,
					"bwa" : 1808513,
					"bwc" : 744838,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000397,
					"pbg" : 0.000819,
					"pbm" : 0.000372,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 1808513,
							"bwc" : 744838,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000397,
							"pbg" : 0.000819,
							"pbm" : 0.000372,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 197019,
					"relay" : 8,
					"bwa" : 16028996,
					"bwc" : 12589940,
					"fast" : 8,
					"stable" : 6,
					"guard" : 6,
					"middle" : 8,
					"exit" : 1,
					"dir" : 6,
					"pbr" : 0.005692,
					"pbg" : 0.011215,
					"pbm" : 0.005149999999999999,
					"pbe" : 0.000711,
					"countries" : [
						{
							"cc" : "CZ",
							"relay" : 8,
							"bwa" : 16028996,
							"bwc" : 12589940,
							"fast" : 8,
							"stable" : 6,
							"guard" : 6,
							"middle" : 8,
							"exit" : 1,
							"dir" : 6,
							"pbr" : 0.005692,
							"pbg" : 0.011215,
							"pbm" : 0.005149999999999999,
							"pbe" : 0.000711
						}
					]
				},
				{
					"as" : 33440,
					"relay" : 2,
					"bwa" : 600487,
					"bwc" : 71588,
					"fast" : 2,
					"stable" : 1,
					"guard" : 0,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000044999999999999996,
					"pbg" : 0,
					"pbm" : 0.000081,
					"pbe" : 0.000055,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 600487,
							"bwc" : 71588,
							"fast" : 2,
							"stable" : 1,
							"guard" : 0,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000044999999999999996,
							"pbg" : 0,
							"pbm" : 0.000081,
							"pbe" : 0.000055
						}
					]
				},
				{
					"as" : 17813,
					"relay" : 6,
					"bwa" : 364853,
					"bwc" : 56561,
					"fast" : 6,
					"stable" : 1,
					"guard" : 0,
					"middle" : 6,
					"exit" : 6,
					"dir" : 5,
					"pbr" : 0.000018,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000054000000000000005,
					"countries" : [
						{
							"cc" : "IN",
							"relay" : 6,
							"bwa" : 364853,
							"bwc" : 56561,
							"fast" : 6,
							"stable" : 1,
							"guard" : 0,
							"middle" : 6,
							"exit" : 6,
							"dir" : 5,
							"pbr" : 0.000018,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000054000000000000005
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
					"pbr" : 0.002353,
					"pbg" : 0.004855,
					"pbm" : 0.002205,
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
							"pbr" : 0.002353,
							"pbg" : 0.004855,
							"pbm" : 0.002205,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 47678,
					"relay" : 1,
					"bwa" : 1140736,
					"bwc" : 973126,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000377,
					"pbg" : 0,
					"pbm" : 0.00113,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "UA",
							"relay" : 1,
							"bwa" : 1140736,
							"bwc" : 973126,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000377,
							"pbg" : 0,
							"pbm" : 0.00113,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 36236,
					"relay" : 1,
					"bwa" : 204800,
					"bwc" : 24030,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000018,
					"pbg" : 0.000036,
					"pbm" : 0.000017,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "HK",
							"relay" : 1,
							"bwa" : 204800,
							"bwc" : 24030,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000018,
							"pbg" : 0.000036,
							"pbm" : 0.000017,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 1764,
					"relay" : 1,
					"bwa" : 5252194,
					"bwc" : 3301690,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.001815,
					"pbg" : 0.003744,
					"pbm" : 0.001701,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "AT",
							"relay" : 1,
							"bwa" : 5252194,
							"bwc" : 3301690,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.001815,
							"pbg" : 0.003744,
							"pbm" : 0.001701,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 22219,
					"relay" : 8,
					"bwa" : 66112614,
					"bwc" : 46462081,
					"fast" : 8,
					"stable" : 8,
					"guard" : 8,
					"middle" : 8,
					"exit" : 8,
					"dir" : 8,
					"pbr" : 0.024641000000000003,
					"pbg" : 0.014244,
					"pbm" : 0.014241999999999998,
					"pbe" : 0.045437,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 8,
							"bwa" : 66112614,
							"bwc" : 46462081,
							"fast" : 8,
							"stable" : 8,
							"guard" : 8,
							"middle" : 8,
							"exit" : 8,
							"dir" : 8,
							"pbr" : 0.024641000000000003,
							"pbg" : 0.014244,
							"pbm" : 0.014241999999999998,
							"pbe" : 0.045437
						}
					]
				},
				{
					"as" : 10796,
					"relay" : 7,
					"bwa" : 1200968,
					"bwc" : 549247,
					"fast" : 6,
					"stable" : 3,
					"guard" : 0,
					"middle" : 7,
					"exit" : 3,
					"dir" : 4,
					"pbr" : 0.00015100000000000004,
					"pbg" : 0,
					"pbm" : 0.00038500000000000003,
					"pbe" : 0.000068,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 7,
							"bwa" : 1200968,
							"bwc" : 549247,
							"fast" : 6,
							"stable" : 3,
							"guard" : 0,
							"middle" : 7,
							"exit" : 3,
							"dir" : 4,
							"pbr" : 0.00015100000000000004,
							"pbg" : 0,
							"pbm" : 0.00038500000000000003,
							"pbe" : 0.000068
						}
					]
				},
				{
					"as" : 33891,
					"relay" : 1,
					"bwa" : 491520,
					"bwc" : 107488,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000049,
					"pbg" : 0.000028,
					"pbm" : 0.000028,
					"pbe" : 0.00009,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 1,
							"bwa" : 491520,
							"bwc" : 107488,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000049,
							"pbg" : 0.000028,
							"pbm" : 0.000028,
							"pbe" : 0.00009
						}
					]
				},
				{
					"as" : 2609,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 178,
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
							"bwc" : 178,
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
					"as" : 42682,
					"relay" : 1,
					"bwa" : 30007,
					"bwc" : 22,
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
							"bwc" : 22,
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
					"as" : 2107,
					"relay" : 1,
					"bwa" : 406924,
					"bwc" : 22951,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000032,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000095,
					"countries" : [
						{
							"cc" : "SI",
							"relay" : 1,
							"bwa" : 406924,
							"bwc" : 22951,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000032,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000095
						}
					]
				},
				{
					"as" : 44604,
					"relay" : 1,
					"bwa" : 1048576,
					"bwc" : 997617,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000343,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.001029,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 1048576,
							"bwc" : 997617,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000343,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.001029
						}
					]
				},
				{
					"as" : 6703,
					"relay" : 1,
					"bwa" : 75298,
					"bwc" : 3342,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000004,
					"pbg" : 0,
					"pbm" : 0.000013,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "UA",
							"relay" : 1,
							"bwa" : 75298,
							"bwc" : 3342,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000004,
							"pbg" : 0,
							"pbm" : 0.000013,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 46375,
					"relay" : 4,
					"bwa" : 393219,
					"bwc" : 111233,
					"fast" : 4,
					"stable" : 3,
					"guard" : 0,
					"middle" : 4,
					"exit" : 1,
					"dir" : 4,
					"pbr" : 0.000017999999999999997,
					"pbg" : 0,
					"pbm" : 0.000033,
					"pbe" : 0.00002,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 4,
							"bwa" : 393219,
							"bwc" : 111233,
							"fast" : 4,
							"stable" : 3,
							"guard" : 0,
							"middle" : 4,
							"exit" : 1,
							"dir" : 4,
							"pbr" : 0.000017999999999999997,
							"pbg" : 0,
							"pbm" : 0.000033,
							"pbe" : 0.00002
						}
					]
				},
				{
					"as" : 50716,
					"relay" : 1,
					"bwa" : 3617792,
					"bwc" : 2436864,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000751,
					"pbg" : 0,
					"pbm" : 0.002251,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 3617792,
							"bwc" : 2436864,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000751,
							"pbg" : 0,
							"pbm" : 0.002251,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 10835,
					"relay" : 1,
					"bwa" : 81920,
					"bwc" : 7224,
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
							"cc" : "US",
							"relay" : 1,
							"bwa" : 81920,
							"bwc" : 7224,
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
					"as" : 53667,
					"relay" : 4,
					"bwa" : 4827722,
					"bwc" : 1958448,
					"fast" : 4,
					"stable" : 3,
					"guard" : 2,
					"middle" : 4,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.001758,
					"pbg" : 0.000359,
					"pbm" : 0.004103,
					"pbe" : 0.000814,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 4,
							"bwa" : 4827722,
							"bwc" : 1958448,
							"fast" : 4,
							"stable" : 3,
							"guard" : 2,
							"middle" : 4,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.001758,
							"pbg" : 0.000359,
							"pbm" : 0.004103,
							"pbe" : 0.000814
						}
					]
				},
				{
					"as" : 23242,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 19705,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000006,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000018,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 19705,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000006,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000018
						}
					]
				},
				{
					"as" : 26914,
					"relay" : 1,
					"bwa" : 1280000,
					"bwc" : 1258835,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000365,
					"pbg" : 0.000752,
					"pbm" : 0.000342,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 1280000,
							"bwc" : 1258835,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000365,
							"pbg" : 0.000752,
							"pbm" : 0.000342,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 38478,
					"relay" : 1,
					"bwa" : 353403,
					"bwc" : 122915,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000024,
					"pbg" : 0.000014,
					"pbm" : 0.000014,
					"pbe" : 0.000045,
					"countries" : [
						{
							"cc" : "HK",
							"relay" : 1,
							"bwa" : 353403,
							"bwc" : 122915,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000024,
							"pbg" : 0.000014,
							"pbm" : 0.000014,
							"pbe" : 0.000045
						}
					]
				},
				{
					"as" : 1680,
					"relay" : 6,
					"bwa" : 448634,
					"bwc" : 102053,
					"fast" : 5,
					"stable" : 2,
					"guard" : 1,
					"middle" : 6,
					"exit" : 2,
						"dir" : 3,
					"pbr" : 0.000024999999999999998,
					"pbg" : 0.000018,
					"pbm" : 0.00004,
					"pbe" : 0.000016,
					"countries" : [
						{
							"cc" : "IL",
							"relay" : 6,
							"bwa" : 448634,
							"bwc" : 102053,
							"fast" : 5,
							"stable" : 2,
							"guard" : 1,
							"middle" : 6,
							"exit" : 2,
							"dir" : 3,
							"pbr" : 0.000024999999999999998,
							"pbg" : 0.000018,
							"pbm" : 0.00004,
							"pbe" : 0.000016
						}
					]
				},
				{
					"as" : 27229,
					"relay" : 1,
					"bwa" : 50000,
					"bwc" : 906,
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
							"bwc" : 906,
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
					"as" : 51290,
					"relay" : 4,
					"bwa" : 13793280,
					"bwc" : 7820432,
					"fast" : 4,
					"stable" : 3,
					"guard" : 3,
					"middle" : 4,
					"exit" : 3,
					"dir" : 2,
					"pbr" : 0.0027860000000000003,
					"pbg" : 0.002946,
					"pbm" : 0.001921,
					"pbe" : 0.0034870000000000005,
					"countries" : [
						{
							"cc" : "PL",
							"relay" : 4,
							"bwa" : 13793280,
							"bwc" : 7820432,
							"fast" : 4,
							"stable" : 3,
							"guard" : 3,
							"middle" : 4,
							"exit" : 3,
							"dir" : 2,
							"pbr" : 0.0027860000000000003,
							"pbg" : 0.002946,
							"pbm" : 0.001921,
							"pbe" : 0.0034870000000000005
						}
					]
				},
				{
					"as" : 33597,
					"relay" : 1,
					"bwa" : 4389,
					"bwc" : 80,
					"fast" : 0,
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
							"cc" : "US",
							"relay" : 1,
							"bwa" : 4389,
							"bwc" : 80,
							"fast" : 0,
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
					"as" : 46844,
					"relay" : 1,
					"bwa" : 3651563,
					"bwc" : 2438129,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.001337,
					"pbg" : 0.002757,
					"pbm" : 0.001252,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 3651563,
							"bwc" : 2438129,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.001337,
							"pbg" : 0.002757,
							"pbm" : 0.001252,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 1836,
					"relay" : 2,
					"bwa" : 837452,
					"bwc" : 260436,
					"fast" : 2,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.00010300000000000001,
					"pbg" : 0.000164,
					"pbm" : 0.000075,
					"pbe" : 0.000068,
					"countries" : [
						{
							"cc" : "CH",
							"relay" : 2,
							"bwa" : 837452,
							"bwc" : 260436,
							"fast" : 2,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.00010300000000000001,
							"pbg" : 0.000164,
							"pbm" : 0.000075,
							"pbe" : 0.000068
						}
					]
				},
				{
					"as" : 30496,
					"relay" : 2,
					"bwa" : 1867166,
					"bwc" : 983059,
					"fast" : 2,
					"stable" : 2,
					"guard" : 2,
					"middle" : 2,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.000436,
					"pbg" : 0.00075,
					"pbm" : 0.000372,
					"pbe" : 0.000186,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 1867166,
							"bwc" : 983059,
							"fast" : 2,
							"stable" : 2,
							"guard" : 2,
							"middle" : 2,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.000436,
							"pbg" : 0.00075,
							"pbm" : 0.000372,
							"pbe" : 0.000186
						}
					]
				},
				{
					"as" : 10103,
					"relay" : 1,
					"bwa" : 627258,
					"bwc" : 156032,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000075,
					"pbg" : 0.000043,
					"pbm" : 0.000043,
					"pbe" : 0.000138,
					"countries" : [
						{
							"cc" : "HK",
							"relay" : 1,
							"bwa" : 627258,
							"bwc" : 156032,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000075,
							"pbg" : 0.000043,
							"pbm" : 0.000043,
							"pbe" : 0.000138
						}
					]
				},
				{
					"as" : 21409,
					"relay" : 1,
					"bwa" : 2854613,
					"bwc" : 1706035,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.001738,
					"pbg" : 0,
					"pbm" : 0.005213,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 1,
							"bwa" : 2854613,
							"bwc" : 1706035,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.001738,
							"pbg" : 0,
							"pbm" : 0.005213,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 38951,
					"relay" : 1,
					"bwa" : 153600,
					"bwc" : 42417,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000017,
					"pbg" : 0,
					"pbm" : 0.00005,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 153600,
							"bwc" : 42417,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000017,
							"pbg" : 0,
							"pbm" : 0.00005,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 25019,
					"relay" : 1,
					"bwa" : 43320,
					"bwc" : 6678,
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
							"bwc" : 6678,
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
					"as" : 8401,
					"relay" : 1,
					"bwa" : 50671,
					"bwc" : 2788,
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
							"bwc" : 2788,
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
					"as" : 23028,
					"relay" : 10,
					"bwa" : 112699310,
					"bwc" : 78176508,
					"fast" : 10,
					"stable" : 9,
					"guard" : 9,
					"middle" : 10,
					"exit" : 0,
					"dir" : 9,
					"pbr" : 0.026691999999999997,
					"pbg" : 0.05289,
					"pbm" : 0.02719,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 10,
							"bwa" : 112699310,
							"bwc" : 78176508,
							"fast" : 10,
							"stable" : 9,
							"guard" : 9,
							"middle" : 10,
							"exit" : 0,
							"dir" : 9,
							"pbr" : 0.026691999999999997,
							"pbg" : 0.05289,
							"pbm" : 0.02719,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 31078,
					"relay" : 4,
					"bwa" : 523286,
					"bwc" : 28242,
					"fast" : 4,
					"stable" : 4,
					"guard" : 0,
					"middle" : 4,
					"exit" : 4,
					"dir" : 4,
					"pbr" : 0.000002,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000006,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 4,
							"bwa" : 523286,
							"bwc" : 28242,
							"fast" : 4,
							"stable" : 4,
							"guard" : 0,
							"middle" : 4,
							"exit" : 4,
							"dir" : 4,
							"pbr" : 0.000002,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000006
						}
					]
				},
				{
					"as" : 1653,
					"relay" : 5,
					"bwa" : 13382698,
					"bwc" : 11208545,
					"fast" : 5,
					"stable" : 4,
					"guard" : 4,
					"middle" : 5,
					"exit" : 0,
					"dir" : 3,
					"pbr" : 0.005735,
					"pbg" : 0.011821000000000002,
					"pbm" : 0.005385,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 5,
							"bwa" : 13382698,
							"bwc" : 11208545,
							"fast" : 5,
							"stable" : 4,
							"guard" : 4,
							"middle" : 5,
							"exit" : 0,
							"dir" : 3,
							"pbr" : 0.005735,
							"pbg" : 0.011821000000000002,
							"pbm" : 0.005385,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 41691,
					"relay" : 3,
					"bwa" : 985801,
					"bwc" : 337246,
					"fast" : 3,
					"stable" : 1,
					"guard" : 0,
					"middle" : 3,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000072,
					"pbg" : 0,
					"pbm" : 0.000216,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 3,
							"bwa" : 985801,
							"bwc" : 337246,
							"fast" : 3,
							"stable" : 1,
							"guard" : 0,
							"middle" : 3,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000072,
							"pbg" : 0,
							"pbm" : 0.000216,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 43234,
					"relay" : 3,
					"bwa" : 316874,
					"bwc" : 54209,
					"fast" : 3,
					"stable" : 1,
					"guard" : 0,
					"middle" : 3,
					"exit" : 1,
					"dir" : 3,
					"pbr" : 0.000017,
					"pbg" : 0,
					"pbm" : 0.000032,
					"pbe" : 0.000019,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 3,
							"bwa" : 316874,
							"bwc" : 54209,
							"fast" : 3,
							"stable" : 1,
							"guard" : 0,
							"middle" : 3,
							"exit" : 1,
							"dir" : 3,
							"pbr" : 0.000017,
							"pbg" : 0,
							"pbm" : 0.000032,
							"pbe" : 0.000019
						}
					]
				},
				{
					"as" : 47869,
					"relay" : 3,
					"bwa" : 5790720,
					"bwc" : 5030873,
					"fast" : 3,
					"stable" : 3,
					"guard" : 3,
					"middle" : 3,
					"exit" : 2,
					"dir" : 1,
					"pbr" : 0.0020410000000000003,
					"pbg" : 0.001215,
					"pbm" : 0.001188,
					"pbe" : 0.003722,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 3,
							"bwa" : 5790720,
							"bwc" : 5030873,
							"fast" : 3,
							"stable" : 3,
							"guard" : 3,
							"middle" : 3,
							"exit" : 2,
							"dir" : 1,
							"pbr" : 0.0020410000000000003,
							"pbg" : 0.001215,
							"pbm" : 0.001188,
							"pbe" : 0.003722
						}
					]
				},
				{
					"as" : 32748,
					"relay" : 4,
					"bwa" : 1577789,
					"bwc" : 1145217,
					"fast" : 4,
					"stable" : 3,
					"guard" : 0,
					"middle" : 4,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000375,
					"pbg" : 0,
					"pbm" : 0.0011279999999999999,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 4,
							"bwa" : 1577789,
							"bwc" : 1145217,
							"fast" : 4,
							"stable" : 3,
							"guard" : 0,
							"middle" : 4,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000375,
							"pbg" : 0,
							"pbm" : 0.0011279999999999999,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 13127,
					"relay" : 6,
					"bwa" : 538362,
					"bwc" : 138449,
					"fast" : 5,
					"stable" : 2,
					"guard" : 0,
					"middle" : 6,
					"exit" : 0,
					"dir" : 6,
					"pbr" : 0.000036,
					"pbg" : 0,
					"pbm" : 0.000108,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 6,
							"bwa" : 538362,
							"bwc" : 138449,
							"fast" : 5,
							"stable" : 2,
							"guard" : 0,
							"middle" : 6,
							"exit" : 0,
							"dir" : 6,
							"pbr" : 0.000036,
							"pbg" : 0,
							"pbm" : 0.000108,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 16202,
					"relay" : 2,
					"bwa" : 513348,
					"bwc" : 95477,
					"fast" : 2,
					"stable" : 0,
					"guard" : 0,
					"middle" : 2,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.000038,
					"pbg" : 0,
					"pbm" : 0.000039,
					"pbe" : 0.000075,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 2,
							"bwa" : 513348,
							"bwc" : 95477,
							"fast" : 2,
							"stable" : 0,
							"guard" : 0,
							"middle" : 2,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.000038,
							"pbg" : 0,
							"pbm" : 0.000039,
							"pbe" : 0.000075
						}
					]
				},
				{
					"as" : 4589,
					"relay" : 1,
					"bwa" : 122880,
					"bwc" : 23739,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000017,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.00005,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 1,
							"bwa" : 122880,
							"bwc" : 23739,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000017,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.00005
						}
					]
				},
				{
					"as" : 198599,
					"relay" : 2,
					"bwa" : 872321,
					"bwc" : 569371,
					"fast" : 2,
					"stable" : 1,
					"guard" : 1,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.00013099999999999999,
					"pbg" : 0.000264,
					"pbm" : 0.000129,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 2,
							"bwa" : 872321,
							"bwc" : 569371,
							"fast" : 2,
							"stable" : 1,
							"guard" : 1,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.00013099999999999999,
							"pbg" : 0.000264,
							"pbm" : 0.000129,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 18515,
					"relay" : 1,
					"bwa" : 153600,
					"bwc" : 36736,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000017,
					"pbg" : 0,
					"pbm" : 0.00005,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 153600,
							"bwc" : 36736,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000017,
							"pbg" : 0,
							"pbm" : 0.00005,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 29691,
					"relay" : 3,
					"bwa" : 2609152,
					"bwc" : 1855811,
					"fast" : 3,
					"stable" : 2,
					"guard" : 1,
					"middle" : 3,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000666,
					"pbg" : 0.000188,
					"pbm" : 0.0018080000000000001,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "CH",
							"relay" : 3,
							"bwa" : 2609152,
							"bwc" : 1855811,
							"fast" : 3,
							"stable" : 2,
							"guard" : 1,
							"middle" : 3,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000666,
							"pbg" : 0.000188,
							"pbm" : 0.0018080000000000001,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 17019,
					"relay" : 1,
					"bwa" : 3426819,
					"bwc" : 2747055,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.00108,
					"pbg" : 0.002227,
					"pbm" : 0.001012,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 3426819,
							"bwc" : 2747055,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.00108,
							"pbg" : 0.002227,
							"pbm" : 0.001012,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 27747,
					"relay" : 1,
					"bwa" : 31702,
					"bwc" : 142,
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
							"bwc" : 142,
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
					"as" : 39351,
					"relay" : 1,
					"bwa" : 2560000,
					"bwc" : 2556336,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.001692,
					"pbg" : 0.000978,
					"pbm" : 0.000978,
					"pbe" : 0.00312,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 1,
							"bwa" : 2560000,
							"bwc" : 2556336,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.001692,
							"pbg" : 0.000978,
							"pbm" : 0.000978,
							"pbe" : 0.00312
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
					"pbr" : 0.000026,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000077,
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
							"pbr" : 0.000026,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000077
						}
					]
				},
				{
					"as" : 6389,
					"relay" : 7,
					"bwa" : 183205,
					"bwc" : 28573,
					"fast" : 2,
					"stable" : 6,
					"guard" : 0,
					"middle" : 7,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000012,
					"pbg" : 0,
					"pbm" : 0.000037,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 7,
							"bwa" : 183205,
							"bwc" : 28573,
							"fast" : 2,
							"stable" : 6,
							"guard" : 0,
							"middle" : 7,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000012,
							"pbg" : 0,
							"pbm" : 0.000037,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 26496,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 18924,
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
							"bwc" : 18924,
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
					"as" : 8218,
					"relay" : 1,
					"bwa" : 614400,
					"bwc" : 604912,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000155,
					"pbg" : 0.00032,
					"pbm" : 0.000146,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "FR",
							"relay" : 1,
							"bwa" : 614400,
							"bwc" : 604912,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000155,
							"pbg" : 0.00032,
							"pbm" : 0.000146,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 12129,
					"relay" : 1,
					"bwa" : 524288,
					"bwc" : 741571,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000152,
					"pbg" : 0.000314,
					"pbm" : 0.000143,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 524288,
							"bwc" : 741571,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000152,
							"pbg" : 0.000314,
							"pbm" : 0.000143,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 24806,
					"relay" : 1,
					"bwa" : 819200,
					"bwc" : 613064,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000229,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000688,
					"countries" : [
						{
							"cc" : "CZ",
							"relay" : 1,
							"bwa" : 819200,
							"bwc" : 613064,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000229,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000688
						}
					]
				},
				{
					"as" : 44734,
					"relay" : 1,
					"bwa" : 229760,
					"bwc" : 67633,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000016,
					"pbg" : 0.00001,
					"pbm" : 0.00001,
					"pbe" : 0.00003,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 229760,
							"bwc" : 67633,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000016,
							"pbg" : 0.00001,
							"pbm" : 0.00001,
							"pbe" : 0.00003
						}
					]
				},
				{
					"as" : 2603,
					"relay" : 1,
					"bwa" : 27025916,
					"bwc" : 16422176,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.004568,
					"pbg" : 0.009424,
					"pbm" : 0.004281,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 1,
							"bwa" : 27025916,
							"bwc" : 16422176,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.004568,
							"pbg" : 0.009424,
							"pbm" : 0.004281,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 44565,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 36979,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000025,
					"countries" : [
						{
							"cc" : "TR",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 36979,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000025
						}
					]
				},
				{
					"as" : 11288,
					"relay" : 2,
					"bwa" : 1477961,
					"bwc" : 981403,
					"fast" : 2,
					"stable" : 0,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000283,
					"pbg" : 0,
					"pbm" : 0.000848,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 1477961,
							"bwc" : 981403,
							"fast" : 2,
							"stable" : 0,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000283,
							"pbg" : 0,
							"pbm" : 0.000848,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 1759,
					"relay" : 5,
					"bwa" : 701440,
					"bwc" : 479014,
					"fast" : 4,
					"stable" : 3,
					"guard" : 1,
					"middle" : 5,
					"exit" : 2,
					"dir" : 4,
					"pbr" : 0.000106,
					"pbg" : 0.000025,
					"pbm" : 0.000072,
					"pbe" : 0.000222,
					"countries" : [
						{
							"cc" : "FI",
							"relay" : 5,
							"bwa" : 701440,
							"bwc" : 479014,
							"fast" : 4,
							"stable" : 3,
							"guard" : 1,
							"middle" : 5,
							"exit" : 2,
							"dir" : 4,
							"pbr" : 0.000106,
							"pbg" : 0.000025,
							"pbm" : 0.000072,
							"pbe" : 0.000222
						}
					]
				},
				{
					"as" : 20676,
					"relay" : 4,
					"bwa" : 383054,
					"bwc" : 110936,
					"fast" : 4,
					"stable" : 2,
					"guard" : 0,
					"middle" : 4,
					"exit" : 1,
					"dir" : 4,
					"pbr" : 0.000029,
					"pbg" : 0,
					"pbm" : 0.000063,
					"pbe" : 0.000023,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 4,
							"bwa" : 383054,
							"bwc" : 110936,
							"fast" : 4,
							"stable" : 2,
							"guard" : 0,
							"middle" : 4,
							"exit" : 1,
							"dir" : 4,
							"pbr" : 0.000029,
							"pbg" : 0,
							"pbm" : 0.000063,
							"pbe" : 0.000023
						}
					]
				},
				{
					"as" : 48209,
					"relay" : 1,
					"bwa" : 65536,
					"bwc" : 29610,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000005,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000016,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 65536,
							"bwc" : 29610,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000005,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000016
						}
					]
				},
				{
					"as" : 35271,
					"relay" : 1,
					"bwa" : 1024000,
					"bwc" : 969581,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000257,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000771,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 1024000,
							"bwc" : 969581,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000257,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000771
						}
					]
				},
				{
					"as" : 10834,
					"relay" : 1,
					"bwa" : 32768,
					"bwc" : 543,
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
							"bwc" : 543,
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
					"as" : 9371,
					"relay" : 4,
					"bwa" : 3421426,
					"bwc" : 1021213,
					"fast" : 4,
					"stable" : 4,
					"guard" : 3,
					"middle" : 4,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.00021700000000000002,
					"pbg" : 0.000433,
					"pbm" : 0.00021700000000000002,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "JP",
							"relay" : 4,
							"bwa" : 3421426,
							"bwc" : 1021213,
							"fast" : 4,
							"stable" : 4,
							"guard" : 3,
							"middle" : 4,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.00021700000000000002,
							"pbg" : 0.000433,
							"pbm" : 0.00021700000000000002,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 4760,
					"relay" : 1,
					"bwa" : 516402,
					"bwc" : 68908,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000024,
					"pbg" : 0.000049,
					"pbm" : 0.000022,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "HK",
							"relay" : 1,
							"bwa" : 516402,
							"bwc" : 68908,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000024,
							"pbg" : 0.000049,
							"pbm" : 0.000022,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 20738,
					"relay" : 3,
					"bwa" : 2300908,
					"bwc" : 1155866,
					"fast" : 3,
					"stable" : 2,
					"guard" : 2,
					"middle" : 3,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000637,
					"pbg" : 0.0012980000000000001,
					"pbm" : 0.000613,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 3,
							"bwa" : 2300908,
							"bwc" : 1155866,
							"fast" : 3,
							"stable" : 2,
							"guard" : 2,
							"middle" : 3,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000637,
							"pbg" : 0.0012980000000000001,
							"pbm" : 0.000613,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 24544,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 79033,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000025,
					"countries" : [
						{
							"cc" : "HK",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 79033,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000025
						}
					]
				},
				{
					"as" : 29854,
					"relay" : 2,
					"bwa" : 34440246,
					"bwc" : 25011825,
					"fast" : 2,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.012657999999999999,
					"pbg" : 0.011772,
					"pbm" : 0.0262,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 34440246,
							"bwc" : 25011825,
							"fast" : 2,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.012657999999999999,
							"pbg" : 0.011772,
							"pbm" : 0.0262,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 3352,
					"relay" : 6,
					"bwa" : 647740,
					"bwc" : 68059,
					"fast" : 4,
					"stable" : 1,
					"guard" : 1,
					"middle" : 6,
					"exit" : 1,
					"dir" : 3,
					"pbr" : 0.00008,
					"pbg" : 0.00009,
					"pbm" : 0.000141,
					"pbe" : 0.000006,
					"countries" : [
						{
							"cc" : "ES",
							"relay" : 6,
							"bwa" : 647740,
							"bwc" : 68059,
							"fast" : 4,
							"stable" : 1,
							"guard" : 1,
							"middle" : 6,
							"exit" : 1,
							"dir" : 3,
							"pbr" : 0.00008,
							"pbg" : 0.00009,
							"pbm" : 0.000141,
							"pbe" : 0.000006
						}
					]
				},
				{
					"as" : 28573,
					"relay" : 6,
					"bwa" : 530351,
					"bwc" : 36390,
					"fast" : 6,
					"stable" : 1,
					"guard" : 0,
					"middle" : 6,
					"exit" : 1,
					"dir" : 6,
					"pbr" : 0.000016000000000000003,
					"pbg" : 0,
					"pbm" : 0.000032999999999999996,
					"pbe" : 0.000016,
					"countries" : [
						{
							"cc" : "BR",
							"relay" : 6,
							"bwa" : 530351,
							"bwc" : 36390,
							"fast" : 6,
							"stable" : 1,
							"guard" : 0,
							"middle" : 6,
							"exit" : 1,
							"dir" : 6,
							"pbr" : 0.000016000000000000003,
							"pbg" : 0,
							"pbm" : 0.000032999999999999996,
							"pbe" : 0.000016
						}
					]
				},
				{
					"as" : 5669,
					"relay" : 1,
					"bwa" : 24576,
					"bwc" : 351,
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
							"bwc" : 351,
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
					"as" : 28968,
					"relay" : 1,
					"bwa" : 76800,
					"bwc" : 343,
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
							"bwa" : 76800,
							"bwc" : 343,
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
					"as" : 13489,
					"relay" : 1,
					"bwa" : 20480,
					"bwc" : 9073,
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
							"bwc" : 9073,
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
					"as" : 45758,
					"relay" : 1,
					"bwa" : 45000,
					"bwc" : 301,
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
							"bwc" : 301,
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
					"as" : 20495,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 61838,
					"fast" : 1,
					"stable" : 1,
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
							"cc" : "NL",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 61838,
							"fast" : 1,
							"stable" : 1,
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
					"as" : 5410,
					"relay" : 4,
					"bwa" : 322143,
					"bwc" : 54920,
					"fast" : 4,
					"stable" : 2,
					"guard" : 0,
					"middle" : 4,
					"exit" : 1,
					"dir" : 4,
					"pbr" : 0.000009999999999999999,
					"pbg" : 0,
					"pbm" : 0.000018,
					"pbe" : 0.000012,
					"countries" : [
						{
							"cc" : "FR",
							"relay" : 4,
							"bwa" : 322143,
							"bwc" : 54920,
							"fast" : 4,
							"stable" : 2,
							"guard" : 0,
							"middle" : 4,
							"exit" : 1,
							"dir" : 4,
							"pbr" : 0.000009999999999999999,
							"pbg" : 0,
							"pbm" : 0.000018,
							"pbe" : 0.000012
						}
					]
				},
				{
					"as" : 31122,
					"relay" : 1,
					"bwa" : 512000,
					"bwc" : 495383,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000075,
					"pbg" : 0.000043,
					"pbm" : 0.000043,
					"pbe" : 0.000138,
					"countries" : [
						{
							"cc" : "IE",
							"relay" : 1,
							"bwa" : 512000,
							"bwc" : 495383,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000075,
							"pbg" : 0.000043,
							"pbm" : 0.000043,
							"pbe" : 0.000138
						}
					]
				},
				{
					"as" : 9737,
					"relay" : 1,
					"bwa" : 50342,
					"bwc" : 16939,
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
							"bwc" : 16939,
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
					"as" : 48683,
					"relay" : 1,
					"bwa" : 320512,
					"bwc" : 5,
					"fast" : 1,
					"stable" : 0,
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
							"cc" : "UA",
							"relay" : 1,
							"bwa" : 320512,
							"bwc" : 5,
							"fast" : 1,
							"stable" : 0,
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
					"as" : 34757,
					"relay" : 1,
					"bwa" : 179794,
					"bwc" : 1425,
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
							"bwc" : 1425,
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
					"as" : 17858,
					"relay" : 1,
					"bwa" : 188815,
					"bwc" : 24377,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000024,
					"countries" : [
						{
							"cc" : "KR",
							"relay" : 1,
							"bwa" : 188815,
							"bwc" : 24377,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000024
						}
					]
				},
				{
					"as" : 11404,
					"relay" : 1,
					"bwa" : 5887373,
					"bwc" : 3911516,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.001984,
					"pbg" : 0.001147,
					"pbm" : 0.001147,
					"pbe" : 0.003659,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 5887373,
							"bwc" : 3911516,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.001984,
							"pbg" : 0.001147,
							"pbm" : 0.001147,
							"pbe" : 0.003659
						}
					]
				},
				{
					"as" : 47447,
					"relay" : 5,
					"bwa" : 20451740,
					"bwc" : 14432927,
					"fast" : 5,
					"stable" : 4,
					"guard" : 3,
					"middle" : 5,
					"exit" : 0,
					"dir" : 3,
					"pbr" : 0.004078,
					"pbg" : 0.003334,
					"pbm" : 0.008896000000000001,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 5,
							"bwa" : 20451740,
							"bwc" : 14432927,
							"fast" : 5,
							"stable" : 4,
							"guard" : 3,
							"middle" : 5,
							"exit" : 0,
							"dir" : 3,
							"pbr" : 0.004078,
							"pbg" : 0.003334,
							"pbm" : 0.008896000000000001,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 33724,
					"relay" : 1,
					"bwa" : 66560,
					"bwc" : 14051,
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
							"bwa" : 66560,
							"bwc" : 14051,
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
					"as" : 49335,
					"relay" : 2,
					"bwa" : 307200,
					"bwc" : 230803,
					"fast" : 2,
					"stable" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 2,
					"dir" : 0,
					"pbr" : 0.000043,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000129,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 2,
							"bwa" : 307200,
							"bwc" : 230803,
							"fast" : 2,
							"stable" : 2,
							"guard" : 0,
							"middle" : 2,
							"exit" : 2,
							"dir" : 0,
							"pbr" : 0.000043,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000129
						}
					]
				},
				{
					"as" : 30475,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 70797,
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
							"cc" : "US",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 70797,
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
					"as" : 19165,
					"relay" : 2,
					"bwa" : 544768,
					"bwc" : 311593,
					"fast" : 1,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000068,
					"pbg" : 0.000134,
					"pbm" : 0.00007,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 544768,
							"bwc" : 311593,
							"fast" : 1,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000068,
							"pbg" : 0.000134,
							"pbm" : 0.00007,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 2819,
					"relay" : 1,
					"bwa" : 204800,
					"bwc" : 58615,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000047,
					"pbg" : 0.000097,
					"pbm" : 0.000044,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "CZ",
							"relay" : 1,
							"bwa" : 204800,
							"bwc" : 58615,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000047,
							"pbg" : 0.000097,
							"pbm" : 0.000044,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 34240,
					"relay" : 2,
					"bwa" : 235520,
					"bwc" : 196460,
					"fast" : 2,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000039,
					"pbg" : 0.000072,
					"pbm" : 0.000045,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 2,
							"bwa" : 235520,
							"bwc" : 196460,
							"fast" : 2,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000039,
							"pbg" : 0.000072,
							"pbm" : 0.000045,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 1221,
					"relay" : 4,
					"bwa" : 272251,
					"bwc" : 34405,
					"fast" : 2,
					"stable" : 2,
					"guard" : 0,
					"middle" : 4,
					"exit" : 2,
					"dir" : 3,
					"pbr" : 0.000014,
					"pbg" : 0,
					"pbm" : 0.000023,
					"pbe" : 0.000018,
					"countries" : [
						{
							"cc" : "AU",
							"relay" : 4,
							"bwa" : 272251,
							"bwc" : 34405,
							"fast" : 2,
							"stable" : 2,
							"guard" : 0,
							"middle" : 4,
							"exit" : 2,
							"dir" : 3,
							"pbr" : 0.000014,
							"pbg" : 0,
							"pbm" : 0.000023,
							"pbe" : 0.000018
						}
					]
				},
				{
					"as" : 24560,
					"relay" : 1,
					"bwa" : 25600,
					"bwc" : 48,
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
							"bwc" : 48,
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
					"as" : 8559,
					"relay" : 1,
					"bwa" : 1048576,
					"bwc" : 888817,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000421,
					"pbg" : 0.000869,
					"pbm" : 0.000395,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "AT",
							"relay" : 1,
							"bwa" : 1048576,
							"bwc" : 888817,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000421,
							"pbg" : 0.000869,
							"pbm" : 0.000395,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 197226,
					"relay" : 1,
					"bwa" : 1048576,
					"bwc" : 442646,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000195,
					"pbg" : 0.000403,
					"pbm" : 0.000183,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "PL",
							"relay" : 1,
							"bwa" : 1048576,
							"bwc" : 442646,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000195,
							"pbg" : 0.000403,
							"pbm" : 0.000183,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 35339,
					"relay" : 1,
					"bwa" : 20480,
					"bwc" : 4779,
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
							"bwc" : 4779,
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
					"as" : 8331,
					"relay" : 3,
					"bwa" : 5273585,
					"bwc" : 5081336,
					"fast" : 3,
					"stable" : 1,
					"guard" : 1,
					"middle" : 3,
					"exit" : 0,
					"dir" : 3,
					"pbr" : 0.004240000000000001,
					"pbg" : 0.008726,
					"pbm" : 0.003994,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 3,
							"bwa" : 5273585,
							"bwc" : 5081336,
							"fast" : 3,
							"stable" : 1,
							"guard" : 1,
							"middle" : 3,
							"exit" : 0,
							"dir" : 3,
							"pbr" : 0.004240000000000001,
							"pbg" : 0.008726,
							"pbm" : 0.003994,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 3243,
					"relay" : 4,
					"bwa" : 696221,
					"bwc" : 328893,
					"fast" : 3,
					"stable" : 0,
					"guard" : 1,
					"middle" : 4,
					"exit" : 4,
					"dir" : 3,
					"pbr" : 0.000092,
					"pbg" : 0.000014,
					"pbm" : 0.000014,
					"pbe" : 0.000248,
					"countries" : [
						{
							"cc" : "PT",
							"relay" : 4,
							"bwa" : 696221,
							"bwc" : 328893,
							"fast" : 3,
							"stable" : 0,
							"guard" : 1,
							"middle" : 4,
							"exit" : 4,
							"dir" : 3,
							"pbr" : 0.000092,
							"pbg" : 0.000014,
							"pbm" : 0.000014,
							"pbe" : 0.000248
						}
					]
				},
				{
					"as" : 55740,
					"relay" : 1,
					"bwa" : 49362,
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
							"cc" : "IN",
							"relay" : 1,
							"bwa" : 49362,
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
					"as" : 31595,
					"relay" : 1,
					"bwa" : 61440,
					"bwc" : 10375,
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
							"cc" : "GB",
							"relay" : 1,
							"bwa" : 61440,
							"bwc" : 10375,
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
					"as" : 56322,
					"relay" : 3,
					"bwa" : 13762560,
					"bwc" : 7632134,
					"fast" : 3,
					"stable" : 3,
					"guard" : 3,
					"middle" : 3,
					"exit" : 1,
					"dir" : 3,
					"pbr" : 0.001484,
					"pbg" : 0.002653,
					"pbm" : 0.001292,
					"pbe" : 0.000508,
					"countries" : [
						{
							"cc" : "HU",
							"relay" : 3,
							"bwa" : 13762560,
							"bwc" : 7632134,
							"fast" : 3,
							"stable" : 3,
							"guard" : 3,
							"middle" : 3,
							"exit" : 1,
							"dir" : 3,
							"pbr" : 0.001484,
							"pbg" : 0.002653,
							"pbm" : 0.001292,
							"pbe" : 0.000508
						}
					]
				},
				{
					"as" : 3,
					"relay" : 3,
					"bwa" : 6778880,
					"bwc" : 6714048,
					"fast" : 3,
					"stable" : 3,
					"guard" : 3,
					"middle" : 3,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.002426,
					"pbg" : 0.001829,
					"pbm" : 0.001506,
					"pbe" : 0.003942,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 3,
							"bwa" : 6778880,
							"bwc" : 6714048,
							"fast" : 3,
							"stable" : 3,
							"guard" : 3,
							"middle" : 3,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.002426,
							"pbg" : 0.001829,
							"pbm" : 0.001506,
							"pbe" : 0.003942
						}
					]
				},
				{
					"as" : 43289,
					"relay" : 2,
					"bwa" : 3831694,
					"bwc" : 2649061,
					"fast" : 2,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 2,
					"dir" : 2,
					"pbr" : 0.0008810000000000001,
					"pbg" : 0.000137,
					"pbm" : 0.000137,
					"pbe" : 0.002371,
					"countries" : [
						{
							"cc" : "MD",
							"relay" : 2,
							"bwa" : 3831694,
							"bwc" : 2649061,
							"fast" : 2,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 2,
							"dir" : 2,
							"pbr" : 0.0008810000000000001,
							"pbg" : 0.000137,
							"pbm" : 0.000137,
							"pbe" : 0.002371
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
					"as" : 30217,
					"relay" : 1,
					"bwa" : 5242880,
					"bwc" : 2785710,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.001646,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.004938,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 5242880,
							"bwc" : 2785710,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.001646,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.004938
						}
					]
				},
				{
					"as" : 9506,
					"relay" : 1,
					"bwa" : 79714,
					"bwc" : 18203,
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
							"bwc" : 18203,
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
					"as" : 51953,
					"relay" : 1,
					"bwa" : 1024000,
					"bwc" : 520891,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000111,
					"pbg" : 0,
					"pbm" : 0.000332,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 1024000,
							"bwc" : 520891,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000111,
							"pbg" : 0,
							"pbm" : 0.000332,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 25668,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 42733,
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
							"bwc" : 42733,
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
					"as" : 8737,
					"relay" : 3,
					"bwa" : 1819860,
					"bwc" : 599584,
					"fast" : 3,
					"stable" : 3,
					"guard" : 2,
					"middle" : 3,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.00035400000000000004,
					"pbg" : 0.000459,
					"pbm" : 0.000602,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 3,
							"bwa" : 1819860,
							"bwc" : 599584,
							"fast" : 3,
							"stable" : 3,
							"guard" : 2,
							"middle" : 3,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.00035400000000000004,
							"pbg" : 0.000459,
							"pbm" : 0.000602,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 34224,
					"relay" : 1,
					"bwa" : 604939,
					"bwc" : 242676,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000044,
					"pbg" : 0.00009,
					"pbm" : 0.000041,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "BG",
							"relay" : 1,
							"bwa" : 604939,
							"bwc" : 242676,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000044,
							"pbg" : 0.00009,
							"pbm" : 0.000041,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 34743,
					"relay" : 1,
					"bwa" : 98304,
					"bwc" : 11879,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0.000023,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "UA",
							"relay" : 1,
							"bwa" : 98304,
							"bwc" : 11879,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0.000023,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 1133,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 32861,
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
							"cc" : "NL",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 32861,
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
					"as" : 4565,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 6032,
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
							"bwa" : 51200,
							"bwc" : 6032,
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
					"as" : 16637,
					"relay" : 4,
					"bwa" : 257136,
					"bwc" : 27810,
					"fast" : 3,
					"stable" : 1,
					"guard" : 0,
					"middle" : 4,
					"exit" : 3,
					"dir" : 2,
					"pbr" : 0.000014999999999999999,
					"pbg" : 0,
					"pbm" : 0.000009,
					"pbe" : 0.000037000000000000005,
					"countries" : [
						{
							"cc" : "ZA",
							"relay" : 4,
							"bwa" : 257136,
							"bwc" : 27810,
							"fast" : 3,
							"stable" : 1,
							"guard" : 0,
							"middle" : 4,
							"exit" : 3,
							"dir" : 2,
							"pbr" : 0.000014999999999999999,
							"pbg" : 0,
							"pbm" : 0.000009,
							"pbe" : 0.000037000000000000005
						}
					]
				},
				{
					"as" : 57169,
					"relay" : 2,
					"bwa" : 1744442,
					"bwc" : 1571571,
					"fast" : 2,
					"stable" : 1,
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000147,
					"pbg" : 0.000297,
					"pbm" : 0.000135,
					"pbe" : 0.000009,
					"countries" : [
						{
							"cc" : "AT",
							"relay" : 2,
							"bwa" : 1744442,
							"bwc" : 1571571,
							"fast" : 2,
							"stable" : 1,
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000147,
							"pbg" : 0.000297,
							"pbm" : 0.000135,
							"pbe" : 0.000009
						}
					]
				},
				{
					"as" : 13188,
					"relay" : 2,
					"bwa" : 530906,
					"bwc" : 52905,
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
							"bwc" : 52905,
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
					"as" : 43541,
					"relay" : 4,
					"bwa" : 1765376,
					"bwc" : 1545639,
					"fast" : 4,
					"stable" : 4,
					"guard" : 4,
					"middle" : 4,
					"exit" : 2,
					"dir" : 4,
					"pbr" : 0.00043899999999999994,
					"pbg" : 0.00047900000000000004,
					"pbm" : 0.000308,
					"pbe" : 0.000526,
					"countries" : [
						{
							"cc" : "CZ",
							"relay" : 4,
							"bwa" : 1765376,
							"bwc" : 1545639,
							"fast" : 4,
							"stable" : 4,
							"guard" : 4,
							"middle" : 4,
							"exit" : 2,
							"dir" : 4,
							"pbr" : 0.00043899999999999994,
							"pbg" : 0.00047900000000000004,
							"pbm" : 0.000308,
							"pbe" : 0.000526
						}
					]
				},
				{
					"as" : 2860,
					"relay" : 1,
					"bwa" : 55922,
					"bwc" : 5393,
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
							"cc" : "PT",
							"relay" : 1,
							"bwa" : 55922,
							"bwc" : 5393,
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
					"as" : 13189,
					"relay" : 1,
					"bwa" : 1048576,
					"bwc" : 731724,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000811,
					"pbg" : 0.001672,
					"pbm" : 0.00076,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 1,
							"bwa" : 1048576,
							"bwc" : 731724,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000811,
							"pbg" : 0.001672,
							"pbm" : 0.00076,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 21788,
					"relay" : 7,
					"bwa" : 2301484,
					"bwc" : 1154142,
					"fast" : 7,
					"stable" : 7,
					"guard" : 2,
					"middle" : 7,
					"exit" : 3,
					"dir" : 7,
					"pbr" : 0.00039500000000000006,
					"pbg" : 0.000146,
					"pbm" : 0.00015000000000000001,
					"pbe" : 0.000888,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 7,
							"bwa" : 2301484,
							"bwc" : 1154142,
							"fast" : 7,
							"stable" : 7,
							"guard" : 2,
							"middle" : 7,
							"exit" : 3,
							"dir" : 7,
							"pbr" : 0.00039500000000000006,
							"pbg" : 0.000146,
							"pbm" : 0.00015000000000000001,
							"pbe" : 0.000888
						}
					]
				},
				{
					"as" : 5617,
					"relay" : 3,
					"bwa" : 767310,
					"bwc" : 497914,
					"fast" : 3,
					"stable" : 0,
					"guard" : 0,
					"middle" : 3,
					"exit" : 2,
					"dir" : 1,
					"pbr" : 0.00015,
					"pbg" : 0,
					"pbm" : 0.000442,
					"pbe" : 0.000008,
					"countries" : [
						{
							"cc" : "PL",
							"relay" : 3,
							"bwa" : 767310,
							"bwc" : 497914,
							"fast" : 3,
							"stable" : 0,
							"guard" : 0,
							"middle" : 3,
							"exit" : 2,
							"dir" : 1,
							"pbr" : 0.00015,
							"pbg" : 0,
							"pbm" : 0.000442,
							"pbe" : 0.000008
						}
					]
				},
				{
					"as" : 24956,
					"relay" : 1,
					"bwa" : 20480,
					"bwc" : 873,
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
							"bwc" : 873,
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
					"as" : 21261,
					"relay" : 1,
					"bwa" : 4096000,
					"bwc" : 3800688,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.001383,
					"pbg" : 0.000799,
					"pbm" : 0.000799,
					"pbe" : 0.00255,
					"countries" : [
						{
							"cc" : "UA",
							"relay" : 1,
							"bwa" : 4096000,
							"bwc" : 3800688,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.001383,
							"pbg" : 0.000799,
							"pbm" : 0.000799,
							"pbe" : 0.00255
						}
					]
				},
				{
					"as" : 12513,
					"relay" : 1,
					"bwa" : 35696,
					"bwc" : 2258,
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
							"bwc" : 2258,
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
					"as" : 12714,
					"relay" : 4,
					"bwa" : 13406776,
					"bwc" : 6526937,
					"fast" : 4,
					"stable" : 0,
					"guard" : 0,
					"middle" : 4,
					"exit" : 2,
					"dir" : 4,
					"pbr" : 0.002838,
					"pbg" : 0,
					"pbm" : 0.00286,
					"pbe" : 0.005653,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 4,
							"bwa" : 13406776,
							"bwc" : 6526937,
							"fast" : 4,
							"stable" : 0,
							"guard" : 0,
							"middle" : 4,
							"exit" : 2,
							"dir" : 4,
							"pbr" : 0.002838,
							"pbg" : 0,
							"pbm" : 0.00286,
							"pbe" : 0.005653
						}
					]
				},
				{
					"as" : 3226,
					"relay" : 3,
					"bwa" : 526900,
					"bwc" : 83232,
					"fast" : 3,
					"stable" : 2,
					"guard" : 0,
					"middle" : 3,
					"exit" : 2,
					"dir" : 1,
					"pbr" : 0.000039999999999999996,
					"pbg" : 0,
					"pbm" : 0.000029,
					"pbe" : 0.000088,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 3,
							"bwa" : 526900,
							"bwc" : 83232,
							"fast" : 3,
							"stable" : 2,
							"guard" : 0,
							"middle" : 3,
							"exit" : 2,
							"dir" : 1,
							"pbr" : 0.000039999999999999996,
							"pbg" : 0,
							"pbm" : 0.000029,
							"pbe" : 0.000088
						}
					]
				},
				{
					"as" : 33885,
					"relay" : 4,
					"bwa" : 2370560,
					"bwc" : 2038594,
					"fast" : 4,
					"stable" : 3,
					"guard" : 3,
					"middle" : 4,
					"exit" : 1,
					"dir" : 4,
					"pbr" : 0.00040300000000000004,
					"pbg" : 0.000658,
					"pbm" : 0.000343,
					"pbe" : 0.000207,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 4,
							"bwa" : 2370560,
							"bwc" : 2038594,
							"fast" : 4,
							"stable" : 3,
							"guard" : 3,
							"middle" : 4,
							"exit" : 1,
							"dir" : 4,
							"pbr" : 0.00040300000000000004,
							"pbg" : 0.000658,
							"pbm" : 0.000343,
							"pbe" : 0.000207
						}
					]
				},
				{
					"as" : 9790,
					"relay" : 4,
					"bwa" : 339227,
					"bwc" : 16600,
					"fast" : 4,
					"stable" : 0,
					"guard" : 0,
					"middle" : 4,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0.000024000000000000004,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NZ",
							"relay" : 4,
							"bwa" : 339227,
							"bwc" : 16600,
							"fast" : 4,
							"stable" : 0,
							"guard" : 0,
							"middle" : 4,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0.000024000000000000004,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 29485,
					"relay" : 1,
					"bwa" : 24576,
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
							"cc" : "HR",
							"relay" : 1,
							"bwa" : 24576,
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
					"as" : 3549,
					"relay" : 1,
					"bwa" : 1112044,
					"bwc" : 706435,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000271,
					"pbg" : 0.000157,
					"pbm" : 0.000156,
					"pbe" : 0.000499,
					"countries" : [
						{
							"cc" : "AR",
							"relay" : 1,
							"bwa" : 1112044,
							"bwc" : 706435,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000271,
							"pbg" : 0.000157,
							"pbm" : 0.000156,
							"pbe" : 0.000499
						}
					]
				},
				{
					"as" : 15085,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 19997,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0.000025,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 19997,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0.000025,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 12993,
					"relay" : 1,
					"bwa" : 1024000,
					"bwc" : 759302,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000165,
					"pbg" : 0.00034,
					"pbm" : 0.000154,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "LV",
							"relay" : 1,
							"bwa" : 1024000,
							"bwc" : 759302,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000165,
							"pbg" : 0.00034,
							"pbm" : 0.000154,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 42116,
					"relay" : 1,
					"bwa" : 59984,
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
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 59984,
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
					"as" : 8167,
					"relay" : 4,
					"bwa" : 211963,
					"bwc" : 24932,
					"fast" : 3,
					"stable" : 0,
					"guard" : 0,
					"middle" : 4,
					"exit" : 2,
					"dir" : 4,
					"pbr" : 0.000007,
					"pbg" : 0,
					"pbm" : 0.000002,
					"pbe" : 0.000018,
					"countries" : [
						{
							"cc" : "BR",
							"relay" : 4,
							"bwa" : 211963,
							"bwc" : 24932,
							"fast" : 3,
							"stable" : 0,
							"guard" : 0,
							"middle" : 4,
							"exit" : 2,
							"dir" : 4,
							"pbr" : 0.000007,
							"pbg" : 0,
							"pbm" : 0.000002,
							"pbe" : 0.000018
						}
					]
				},
				{
					"as" : 15682,
					"relay" : 1,
					"bwa" : 307200,
					"bwc" : 202089,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000048,
					"pbg" : 0.000098,
					"pbm" : 0.000045,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 307200,
							"bwc" : 202089,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000048,
							"pbg" : 0.000098,
							"pbm" : 0.000045,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 8877,
					"relay" : 1,
					"bwa" : 240640,
					"bwc" : 8624,
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
							"cc" : "BG",
							"relay" : 1,
							"bwa" : 240640,
							"bwc" : 8624,
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
					"as" : 50472,
					"relay" : 1,
					"bwa" : 4229549,
					"bwc" : 1671514,
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
							"bwa" : 4229549,
							"bwc" : 1671514,
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
					"as" : 15517,
					"relay" : 1,
					"bwa" : 93480,
					"bwc" : 1110,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0.000025,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "CH",
							"relay" : 1,
							"bwa" : 93480,
							"bwc" : 1110,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0.000025,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 2514,
					"relay" : 2,
					"bwa" : 235563,
					"bwc" : 36708,
					"fast" : 2,
					"stable" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000011,
					"pbg" : 0,
					"pbm" : 0.000035,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "JP",
							"relay" : 2,
							"bwa" : 235563,
							"bwc" : 36708,
							"fast" : 2,
							"stable" : 2,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000011,
							"pbg" : 0,
							"pbm" : 0.000035,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 10481,
					"relay" : 2,
					"bwa" : 208896,
					"bwc" : 21058,
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
							"bwc" : 21058,
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
					"as" : 7456,
					"relay" : 1,
					"bwa" : 256000,
					"bwc" : 69644,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.00007,
					"pbg" : 0,
					"pbm" : 0.00021,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "CA",
							"relay" : 1,
							"bwa" : 256000,
							"bwc" : 69644,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.00007,
							"pbg" : 0,
							"pbm" : 0.00021,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 194,
					"relay" : 2,
					"bwa" : 14155776,
					"bwc" : 13702334,
					"fast" : 2,
					"stable" : 2,
					"guard" : 2,
					"middle" : 2,
					"exit" : 2,
					"dir" : 2,
					"pbr" : 0.0058449999999999995,
					"pbg" : 0.003379,
					"pbm" : 0.003378,
					"pbe" : 0.010778,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 14155776,
							"bwc" : 13702334,
							"fast" : 2,
							"stable" : 2,
							"guard" : 2,
							"middle" : 2,
							"exit" : 2,
							"dir" : 2,
							"pbr" : 0.0058449999999999995,
							"pbg" : 0.003379,
							"pbm" : 0.003378,
							"pbe" : 0.010778
						}
					]
				},
				{
					"as" : 9318,
					"relay" : 2,
					"bwa" : 1180770,
					"bwc" : 443316,
					"fast" : 2,
					"stable" : 1,
					"guard" : 1,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000051,
					"pbg" : 0.000099,
					"pbm" : 0.000054000000000000005,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "KR",
							"relay" : 2,
							"bwa" : 1180770,
							"bwc" : 443316,
							"fast" : 2,
							"stable" : 1,
							"guard" : 1,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000051,
							"pbg" : 0.000099,
							"pbm" : 0.000054000000000000005,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 38935,
					"relay" : 2,
					"bwa" : 512000,
					"bwc" : 248399,
					"fast" : 2,
					"stable" : 2,
					"guard" : 2,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.00007,
					"pbg" : 0.000143,
					"pbm" : 0.00006500000000000001,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RO",
							"relay" : 2,
							"bwa" : 512000,
							"bwc" : 248399,
							"fast" : 2,
							"stable" : 2,
							"guard" : 2,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.00007,
							"pbg" : 0.000143,
							"pbm" : 0.00006500000000000001,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 17486,
					"relay" : 1,
					"bwa" : 15113,
					"bwc" : 297,
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
							"bwc" : 297,
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
					"as" : 33480,
					"relay" : 1,
					"bwa" : 393339,
					"bwc" : 184435,
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
							"bwc" : 184435,
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
					"as" : 54046,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 49093,
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
							"bwc" : 49093,
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
					"as" : 12768,
					"relay" : 2,
					"bwa" : 440880,
					"bwc" : 21316,
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
							"bwc" : 21316,
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
					"as" : 760,
					"relay" : 1,
					"bwa" : 58368,
					"bwc" : 21945,
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
							"bwc" : 21945,
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
					"as" : 6364,
					"relay" : 2,
					"bwa" : 167936,
					"bwc" : 39977,
					"fast" : 2,
					"stable" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000013000000000000001,
					"pbg" : 0,
					"pbm" : 0.000041,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 167936,
							"bwc" : 39977,
							"fast" : 2,
							"stable" : 2,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000013000000000000001,
							"pbg" : 0,
							"pbm" : 0.000041,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 25408,
					"relay" : 1,
					"bwa" : 1374208,
					"bwc" : 1135358,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000703,
					"pbg" : 0,
					"pbm" : 0.002108,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 1374208,
							"bwc" : 1135358,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000703,
							"pbg" : 0,
							"pbm" : 0.002108,
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
					"as" : 11240,
					"relay" : 1,
					"bwa" : 53402,
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
							"bwa" : 53402,
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
					"as" : 14051,
					"relay" : 1,
					"bwa" : 512000,
					"bwc" : 121757,
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
							"cc" : "US",
							"relay" : 1,
							"bwa" : 512000,
							"bwc" : 121757,
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
					"as" : 29587,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 51114,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0.000025,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "BE",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 51114,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0.000025,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 33363,
					"relay" : 2,
					"bwa" : 353280,
					"bwc" : 58005,
					"fast" : 2,
					"stable" : 0,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000014000000000000001,
					"pbg" : 0,
					"pbm" : 0.000042000000000000004,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 353280,
							"bwc" : 58005,
							"fast" : 2,
							"stable" : 0,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000014000000000000001,
							"pbg" : 0,
							"pbm" : 0.000042000000000000004,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 11051,
					"relay" : 2,
					"bwa" : 2591634,
					"bwc" : 2136071,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.001137,
					"pbg" : 0.000655,
					"pbm" : 0.000664,
					"pbe" : 0.00209,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 2591634,
							"bwc" : 2136071,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.001137,
							"pbg" : 0.000655,
							"pbm" : 0.000664,
							"pbe" : 0.00209
						}
					]
				},
				{
					"as" : 1785,
					"relay" : 2,
					"bwa" : 359493,
					"bwc" : 72881,
					"fast" : 1,
					"stable" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000027,
					"pbg" : 0,
					"pbm" : 0.000082,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 359493,
							"bwc" : 72881,
							"fast" : 1,
							"stable" : 2,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000027,
							"pbg" : 0,
							"pbm" : 0.000082,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 14,
					"relay" : 3,
					"bwa" : 699835,
					"bwc" : 230575,
					"fast" : 3,
					"stable" : 2,
					"guard" : 1,
					"middle" : 3,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000027999999999999996,
					"pbg" : 0.000023,
					"pbm" : 0.000063,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 3,
							"bwa" : 699835,
							"bwc" : 230575,
							"fast" : 3,
							"stable" : 2,
							"guard" : 1,
							"middle" : 3,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000027999999999999996,
							"pbg" : 0.000023,
							"pbm" : 0.000063,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 14522,
					"relay" : 1,
					"bwa" : 53248,
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
							"cc" : "EC",
							"relay" : 1,
							"bwa" : 53248,
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
					"as" : 15962,
					"relay" : 3,
					"bwa" : 1331038,
					"bwc" : 495272,
					"fast" : 3,
					"stable" : 2,
					"guard" : 1,
					"middle" : 3,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.00027299999999999997,
					"pbg" : 0.000384,
					"pbm" : 0.00033,
					"pbe" : 0.000104,
					"countries" : [
						{
							"cc" : "SK",
							"relay" : 3,
							"bwa" : 1331038,
							"bwc" : 495272,
							"fast" : 3,
							"stable" : 2,
							"guard" : 1,
							"middle" : 3,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.00027299999999999997,
							"pbg" : 0.000384,
							"pbm" : 0.00033,
							"pbe" : 0.000104
						}
					]
				},
				{
					"as" : 2510,
					"relay" : 1,
					"bwa" : 65536,
					"bwc" : 3598,
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
							"bwc" : 3598,
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
					"as" : 8047,
					"relay" : 1,
					"bwa" : 76488,
					"bwc" : 4352,
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
							"bwc" : 4352,
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
					"as" : 8228,
					"relay" : 2,
					"bwa" : 47104,
					"bwc" : 37110,
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
							"bwc" : 37110,
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
					"as" : 39288,
					"relay" : 2,
					"bwa" : 786432,
					"bwc" : 1119999,
					"fast" : 2,
					"stable" : 2,
					"guard" : 2,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000221,
					"pbg" : 0.000457,
					"pbm" : 0.000208,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "PL",
							"relay" : 2,
							"bwa" : 786432,
							"bwc" : 1119999,
							"fast" : 2,
							"stable" : 2,
							"guard" : 2,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000221,
							"pbg" : 0.000457,
							"pbm" : 0.000208,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 20207,
					"relay" : 1,
					"bwa" : 237568,
					"bwc" : 169549,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000019,
					"pbg" : 0.000011,
					"pbm" : 0.000011,
					"pbe" : 0.000035,
					"countries" : [
						{
							"cc" : "AR",
							"relay" : 1,
							"bwa" : 237568,
							"bwc" : 169549,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000019,
							"pbg" : 0.000011,
							"pbm" : 0.000011,
							"pbe" : 0.000035
						}
					]
				},
				{
					"as" : 31042,
					"relay" : 3,
					"bwa" : 258296,
					"bwc" : 39560,
					"fast" : 2,
					"stable" : 0,
					"guard" : 0,
					"middle" : 3,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.000016,
					"pbg" : 0,
					"pbm" : 0.000037,
					"pbe" : 0.000009,
					"countries" : [
						{
							"cc" : "RS",
							"relay" : 3,
							"bwa" : 258296,
							"bwc" : 39560,
							"fast" : 2,
							"stable" : 0,
							"guard" : 0,
							"middle" : 3,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.000016,
							"pbg" : 0,
							"pbm" : 0.000037,
							"pbe" : 0.000009
						}
					]
				},
				{
					"as" : 5421,
					"relay" : 1,
					"bwa" : 380738,
					"bwc" : 41781,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000039,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000118,
					"countries" : [
						{
							"cc" : "BG",
							"relay" : 1,
							"bwa" : 380738,
							"bwc" : 41781,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000039,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000118
						}
					]
				},
				{
					"as" : 41440,
					"relay" : 2,
					"bwa" : 402432,
					"bwc" : 15838,
					"fast" : 2,
					"stable" : 0,
					"guard" : 0,
					"middle" : 2,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.000017,
					"pbg" : 0,
					"pbm" : 0.00003,
					"pbe" : 0.000021,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 2,
							"bwa" : 402432,
							"bwc" : 15838,
							"fast" : 2,
							"stable" : 0,
							"guard" : 0,
							"middle" : 2,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.000017,
							"pbg" : 0,
							"pbm" : 0.00003,
							"pbe" : 0.000021
						}
					]
				},
				{
					"as" : 48039,
					"relay" : 1,
					"bwa" : 512000,
					"bwc" : 187105,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000044,
					"pbg" : 0.000092,
					"pbm" : 0.000042,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 1,
							"bwa" : 512000,
							"bwc" : 187105,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000044,
							"pbg" : 0.000092,
							"pbm" : 0.000042,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 45204,
					"relay" : 1,
					"bwa" : 4694913,
					"bwc" : 3204994,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000488,
					"pbg" : 0.000282,
					"pbm" : 0.000282,
					"pbe" : 0.000899,
					"countries" : [
						{
							"cc" : "MN",
							"relay" : 1,
							"bwa" : 4694913,
							"bwc" : 3204994,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000488,
							"pbg" : 0.000282,
							"pbm" : 0.000282,
							"pbe" : 0.000899
						}
					]
				},
				{
					"as" : 56813,
					"relay" : 1,
					"bwa" : 5242880,
					"bwc" : 5236764,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.003861,
					"pbg" : 0.007964,
					"pbm" : 0.003618,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 1,
							"bwa" : 5242880,
							"bwc" : 5236764,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.003861,
							"pbg" : 0.007964,
							"pbm" : 0.003618,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 9433,
					"relay" : 1,
					"bwa" : 1024000,
					"bwc" : 529602,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000046,
					"pbg" : 0.000094,
					"pbm" : 0.000043,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NZ",
							"relay" : 1,
							"bwa" : 1024000,
							"bwc" : 529602,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000046,
							"pbg" : 0.000094,
							"pbm" : 0.000043,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 12337,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 13721,
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
							"bwc" : 13721,
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
					"as" : 6876,
					"relay" : 2,
					"bwa" : 221184,
					"bwc" : 18924,
					"fast" : 2,
					"stable" : 0,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000016,
					"pbg" : 0,
					"pbm" : 0.00005,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "UA",
							"relay" : 2,
							"bwa" : 221184,
							"bwc" : 18924,
							"fast" : 2,
							"stable" : 0,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000016,
							"pbg" : 0,
							"pbm" : 0.00005,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 14511,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 1864,
					"fast" : 1,
					"stable" : 0,
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
							"bwa" : 51200,
							"bwc" : 1864,
							"fast" : 1,
							"stable" : 0,
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
					"as" : 11403,
					"relay" : 2,
					"bwa" : 2048000,
					"bwc" : 1406011,
					"fast" : 2,
					"stable" : 2,
					"guard" : 2,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000549,
					"pbg" : 0.001133,
					"pbm" : 0.000515,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 2048000,
							"bwc" : 1406011,
							"fast" : 2,
							"stable" : 2,
							"guard" : 2,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000549,
							"pbg" : 0.001133,
							"pbm" : 0.000515,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 7657,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 1727,
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
							"cc" : "NZ",
							"relay" : 1,
							"bwa" : 51200,
							"bwc" : 1727,
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
					"as" : 54856,
					"relay" : 2,
					"bwa" : 167936,
					"bwc" : 44629,
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
							"bwc" : 44629,
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
					"as" : 13703,
					"relay" : 1,
					"bwa" : 819200,
					"bwc" : 389573,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.00013,
					"pbg" : 0.000268,
					"pbm" : 0.000122,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 819200,
							"bwc" : 389573,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.00013,
							"pbg" : 0.000268,
							"pbm" : 0.000122,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 5602,
					"relay" : 2,
					"bwa" : 1467902,
					"bwc" : 1131586,
					"fast" : 2,
					"stable" : 1,
					"guard" : 1,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.00010400000000000001,
					"pbg" : 0.000164,
					"pbm" : 0.000146,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "IT",
							"relay" : 2,
							"bwa" : 1467902,
							"bwc" : 1131586,
							"fast" : 2,
							"stable" : 1,
							"guard" : 1,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.00010400000000000001,
							"pbg" : 0.000164,
							"pbm" : 0.000146,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 50266,
					"relay" : 1,
					"bwa" : 37298247,
					"bwc" : 30876338,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.004368,
					"pbg" : 0.009011,
					"pbm" : 0.004093,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 1,
							"bwa" : 37298247,
							"bwc" : 30876338,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.004368,
							"pbg" : 0.009011,
							"pbm" : 0.004093,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 42322,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 38834,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0.000025,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 38834,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0.000025,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 7377,
					"relay" : 1,
					"bwa" : 420864,
					"bwc" : 70679,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000022,
					"pbg" : 0,
					"pbm" : 0.000066,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 420864,
							"bwc" : 70679,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000022,
							"pbg" : 0,
							"pbm" : 0.000066,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 33182,
					"relay" : 1,
					"bwa" : 3145728,
					"bwc" : 2481988,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000875,
					"pbg" : 0,
					"pbm" : 0.002625,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 3145728,
							"bwc" : 2481988,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000875,
							"pbg" : 0,
							"pbm" : 0.002625,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 19969,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 42547,
					"fast" : 1,
					"stable" : 1,
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
							"bwa" : 102400,
							"bwc" : 42547,
							"fast" : 1,
							"stable" : 1,
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
					"as" : 8447,
					"relay" : 2,
					"bwa" : 109568,
					"bwc" : 7037,
					"fast" : 2,
					"stable" : 1,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000007,
					"pbg" : 0,
					"pbm" : 0.000021,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "AT",
							"relay" : 2,
							"bwa" : 109568,
							"bwc" : 7037,
							"fast" : 2,
							"stable" : 1,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000007,
							"pbg" : 0,
							"pbm" : 0.000021,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 35637,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 14654,
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
							"bwc" : 14654,
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
					"as" : 553,
					"relay" : 2,
					"bwa" : 1280000,
					"bwc" : 824239,
					"fast" : 2,
					"stable" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000147,
					"pbg" : 0,
					"pbm" : 0.000442,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 2,
							"bwa" : 1280000,
							"bwc" : 824239,
							"fast" : 2,
							"stable" : 2,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000147,
							"pbg" : 0,
							"pbm" : 0.000442,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 15895,
					"relay" : 1,
					"bwa" : 54697,
					"bwc" : 29401,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000026,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000077,
					"countries" : [
						{
							"cc" : "UA",
							"relay" : 1,
							"bwa" : 54697,
							"bwc" : 29401,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000026,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000077
						}
					]
				},
				{
					"as" : 57735,
					"relay" : 1,
					"bwa" : 746250,
					"bwc" : 800221,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000258,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000775,
					"countries" : [
						{
							"cc" : "DK",
							"relay" : 1,
							"bwa" : 746250,
							"bwc" : 800221,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000258,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000775
						}
					]
				},
				{
					"as" : 197288,
					"relay" : 4,
					"bwa" : 501010,
					"bwc" : 148005,
					"fast" : 4,
					"stable" : 4,
					"guard" : 1,
					"middle" : 4,
					"exit" : 0,
					"dir" : 3,
					"pbr" : 0.000039999999999999996,
					"pbg" : 0.000049,
					"pbm" : 0.00007,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DK",
							"relay" : 4,
							"bwa" : 501010,
							"bwc" : 148005,
							"fast" : 4,
							"stable" : 4,
							"guard" : 1,
							"middle" : 4,
							"exit" : 0,
							"dir" : 3,
							"pbr" : 0.000039999999999999996,
							"pbg" : 0.000049,
							"pbm" : 0.00007,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 577,
					"relay" : 5,
					"bwa" : 547449,
					"bwc" : 120364,
					"fast" : 2,
					"stable" : 2,
					"guard" : 0,
					"middle" : 5,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.000054,
					"pbg" : 0,
					"pbm" : 0.000153,
					"pbe" : 0.000008,
					"countries" : [
						{
							"cc" : "CA",
							"relay" : 5,
							"bwa" : 547449,
							"bwc" : 120364,
							"fast" : 2,
							"stable" : 2,
							"guard" : 0,
							"middle" : 5,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.000054,
							"pbg" : 0,
							"pbm" : 0.000153,
							"pbe" : 0.000008
						}
					]
				},
				{
					"as" : 44557,
					"relay" : 1,
					"bwa" : 1024000,
					"bwc" : 1024000,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000095,
					"pbg" : 0.000055,
					"pbm" : 0.000055,
					"pbe" : 0.000175,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 1,
							"bwa" : 1024000,
							"bwc" : 1024000,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000095,
							"pbg" : 0.000055,
							"pbm" : 0.000055,
							"pbe" : 0.000175
						}
					]
				},
				{
					"as" : 52048,
					"relay" : 2,
					"bwa" : 793600,
					"bwc" : 1778340,
					"fast" : 2,
					"stable" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.00054,
					"pbg" : 0,
					"pbm" : 0.001619,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "LV",
							"relay" : 2,
							"bwa" : 793600,
							"bwc" : 1778340,
							"fast" : 2,
							"stable" : 2,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.00054,
							"pbg" : 0,
							"pbm" : 0.001619,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 1853,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 60528,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000003,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.00001,
					"countries" : [
						{
							"cc" : "AT",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 60528,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000003,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.00001
						}
					]
				},
				{
					"as" : 226,
					"relay" : 1,
					"bwa" : 5242880,
					"bwc" : 4009170,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.0016,
					"pbg" : 0.0033,
					"pbm" : 0.001499,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 5242880,
							"bwc" : 4009170,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.0016,
							"pbg" : 0.0033,
							"pbm" : 0.001499,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 9822,
					"relay" : 2,
					"bwa" : 225280,
					"bwc" : 73896,
					"fast" : 1,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 2,
					"dir" : 1,
					"pbr" : 0.000019,
					"pbg" : 0.000009,
					"pbm" : 0.000009,
					"pbe" : 0.000039,
					"countries" : [
						{
							"cc" : "AU",
							"relay" : 2,
							"bwa" : 225280,
							"bwc" : 73896,
							"fast" : 1,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 2,
							"dir" : 1,
							"pbr" : 0.000019,
							"pbg" : 0.000009,
							"pbm" : 0.000009,
							"pbe" : 0.000039
						}
					]
				},
				{
					"as" : 32780,
					"relay" : 2,
					"bwa" : 390144,
					"bwc" : 266838,
					"fast" : 2,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.00009999999999999999,
					"pbg" : 0.00004,
					"pbm" : 0.000134,
					"pbe" : 0.000128,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 390144,
							"bwc" : 266838,
							"fast" : 2,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.00009999999999999999,
							"pbg" : 0.00004,
							"pbm" : 0.000134,
							"pbe" : 0.000128
						}
					]
				},
				{
					"as" : 42336,
					"relay" : 1,
					"bwa" : 262144,
					"bwc" : 61527,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000022,
					"pbg" : 0.000046,
					"pbm" : 0.000021,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "UA",
							"relay" : 1,
							"bwa" : 262144,
							"bwc" : 61527,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000022,
							"pbg" : 0.000046,
							"pbm" : 0.000021,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 8339,
					"relay" : 3,
					"bwa" : 419840,
					"bwc" : 110903,
					"fast" : 3,
					"stable" : 3,
					"guard" : 1,
					"middle" : 3,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000051,
					"pbg" : 0.000036,
					"pbm" : 0.00011499999999999999,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "AT",
							"relay" : 3,
							"bwa" : 419840,
							"bwc" : 110903,
							"fast" : 3,
							"stable" : 3,
							"guard" : 1,
							"middle" : 3,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000051,
							"pbg" : 0.000036,
							"pbm" : 0.00011499999999999999,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 21021,
					"relay" : 1,
					"bwa" : 20480,
					"bwc" : 159,
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
							"bwc" : 159,
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
					"as" : 27699,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 23900,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000005,
					"pbg" : 0,
					"pbm" : 0.000014,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "BR",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 23900,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000005,
							"pbg" : 0,
							"pbm" : 0.000014,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 57172,
					"relay" : 2,
					"bwa" : 4491264,
					"bwc" : 5257767,
					"fast" : 2,
					"stable" : 2,
					"guard" : 2,
					"middle" : 2,
					"exit" : 2,
					"dir" : 1,
					"pbr" : 0.00349,
					"pbg" : 0.002017,
					"pbm" : 0.002017,
					"pbe" : 0.006435,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 2,
							"bwa" : 4491264,
							"bwc" : 5257767,
							"fast" : 2,
							"stable" : 2,
							"guard" : 2,
							"middle" : 2,
							"exit" : 2,
							"dir" : 1,
							"pbr" : 0.00349,
							"pbg" : 0.002017,
							"pbm" : 0.002017,
							"pbe" : 0.006435
						}
					]
				},
				{
					"as" : 29141,
					"relay" : 2,
					"bwa" : 2271232,
					"bwc" : 1337428,
					"fast" : 2,
					"stable" : 1,
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000898,
					"pbg" : 0.000076,
					"pbm" : 0.000034,
					"pbe" : 0.002584,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 2,
							"bwa" : 2271232,
							"bwc" : 1337428,
							"fast" : 2,
							"stable" : 1,
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000898,
							"pbg" : 0.000076,
							"pbm" : 0.000034,
							"pbe" : 0.002584
						}
					]
				},
				{
					"as" : 9050,
					"relay" : 1,
					"bwa" : 107593,
					"bwc" : 916,
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
							"bwc" : 916,
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
					"as" : 4658,
					"relay" : 1,
					"bwa" : 196608,
					"bwc" : 12743,
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
							"cc" : "HK",
							"relay" : 1,
							"bwa" : 196608,
							"bwc" : 12743,
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
					"as" : 12093,
					"relay" : 2,
					"bwa" : 12634112,
					"bwc" : 12608490,
					"fast" : 2,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.007572,
					"pbg" : 0.004375,
					"pbm" : 0.004390000000000001,
					"pbe" : 0.013954,
					"countries" : [
						{
							"cc" : "CA",
							"relay" : 2,
							"bwa" : 12634112,
							"bwc" : 12608490,
							"fast" : 2,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.007572,
							"pbg" : 0.004375,
							"pbm" : 0.004390000000000001,
							"pbe" : 0.013954
						}
					]
				},
				{
					"as" : 36477,
					"relay" : 1,
					"bwa" : 393216,
					"bwc" : 97763,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000095,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000286,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 393216,
							"bwc" : 97763,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000095,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000286
						}
					]
				},
				{
					"as" : 13237,
					"relay" : 2,
					"bwa" : 4915200,
					"bwc" : 6595703,
					"fast" : 2,
					"stable" : 2,
					"guard" : 2,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.0017369999999999998,
					"pbg" : 0.003584,
					"pbm" : 0.001629,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 2,
							"bwa" : 4915200,
							"bwc" : 6595703,
							"fast" : 2,
							"stable" : 2,
							"guard" : 2,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.0017369999999999998,
							"pbg" : 0.003584,
							"pbm" : 0.001629,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 2607,
					"relay" : 1,
					"bwa" : 8351042,
					"bwc" : 5627822,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.003368,
					"pbg" : 0.006949,
					"pbm" : 0.003156,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SK",
							"relay" : 1,
							"bwa" : 8351042,
							"bwc" : 5627822,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.003368,
							"pbg" : 0.006949,
							"pbm" : 0.003156,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 31246,
					"relay" : 1,
					"bwa" : 1024000,
					"bwc" : 758031,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000392,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.001177,
					"countries" : [
						{
							"cc" : "CZ",
							"relay" : 1,
							"bwa" : 1024000,
							"bwc" : 758031,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000392,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.001177
						}
					]
				},
				{
					"as" : 39301,
					"relay" : 1,
					"bwa" : 7298398,
					"bwc" : 5072729,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000943,
					"pbg" : 0.001945,
					"pbm" : 0.000884,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "EE",
							"relay" : 1,
							"bwa" : 7298398,
							"bwc" : 5072729,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000943,
							"pbg" : 0.001945,
							"pbm" : 0.000884,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 24238,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 19344,
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
							"bwc" : 19344,
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
					"as" : 41704,
					"relay" : 1,
					"bwa" : 154660,
					"bwc" : 52278,
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
							"bwa" : 154660,
							"bwc" : 52278,
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
					"as" : 16186,
					"relay" : 2,
					"bwa" : 2705023,
					"bwc" : 1485536,
					"fast" : 2,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.000294,
					"pbg" : 0.000587,
					"pbm" : 0.000267,
					"pbe" : 0.000027,
					"countries" : [
						{
							"cc" : "NO",
							"relay" : 2,
							"bwa" : 2705023,
							"bwc" : 1485536,
							"fast" : 2,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.000294,
							"pbg" : 0.000587,
							"pbm" : 0.000267,
							"pbe" : 0.000027
						}
					]
				},
				{
					"as" : 12400,
					"relay" : 1,
					"bwa" : 141324,
					"bwc" : 29841,
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
							"bwc" : 29841,
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
					"as" : 30640,
					"relay" : 1,
					"bwa" : 66560,
					"bwc" : 8536,
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
							"bwa" : 66560,
							"bwc" : 8536,
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
					"bwc" : 6879,
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
							"bwc" : 6879,
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
					"as" : 197540,
					"relay" : 4,
					"bwa" : 1474263,
					"bwc" : 1174905,
					"fast" : 4,
					"stable" : 4,
					"guard" : 3,
					"middle" : 4,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000274,
					"pbg" : 0.000556,
					"pbm" : 0.000264,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 4,
							"bwa" : 1474263,
							"bwc" : 1174905,
							"fast" : 4,
							"stable" : 4,
							"guard" : 3,
							"middle" : 4,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000274,
							"pbg" : 0.000556,
							"pbm" : 0.000264,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 14517,
					"relay" : 1,
					"bwa" : 79168,
					"bwc" : 5723,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000004,
					"pbg" : 0,
					"pbm" : 0.000011,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 79168,
							"bwc" : 5723,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000004,
							"pbg" : 0,
							"pbm" : 0.000011,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 21565,
					"relay" : 1,
					"bwa" : 291840,
					"bwc" : 65430,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000026,
					"pbg" : 0,
					"pbm" : 0.000078,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 291840,
							"bwc" : 65430,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000026,
							"pbg" : 0,
							"pbm" : 0.000078,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 13193,
					"relay" : 1,
					"bwa" : 128000,
					"bwc" : 31805,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000011,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000033,
					"countries" : [
						{
							"cc" : "FR",
							"relay" : 1,
							"bwa" : 128000,
							"bwc" : 31805,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000011,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000033
						}
					]
				},
				{
					"as" : 12338,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 43003,
					"fast" : 1,
					"stable" : 0,
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
							"cc" : "ES",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 43003,
							"fast" : 1,
							"stable" : 0,
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
					"as" : 49776,
					"relay" : 1,
					"bwa" : 614400,
					"bwc" : 294171,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000165,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000494,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 614400,
							"bwc" : 294171,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000165,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000494
						}
					]
				},
				{
					"as" : 20931,
					"relay" : 1,
					"bwa" : 983040,
					"bwc" : 731343,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000203,
					"pbg" : 0.000419,
					"pbm" : 0.00019,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "FI",
							"relay" : 1,
							"bwa" : 983040,
							"bwc" : 731343,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000203,
							"pbg" : 0.000419,
							"pbm" : 0.00019,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 36252,
					"relay" : 1,
					"bwa" : 256000,
					"bwc" : 86560,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000018,
					"pbg" : 0.000037,
					"pbm" : 0.000017,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 256000,
							"bwc" : 86560,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000018,
							"pbg" : 0.000037,
							"pbm" : 0.000017,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 2637,
					"relay" : 1,
					"bwa" : 272105,
					"bwc" : 0,
					"fast" : 0,
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
							"cc" : "US",
							"relay" : 1,
							"bwa" : 272105,
							"bwc" : 0,
							"fast" : 0,
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
					"as" : 12542,
					"relay" : 1,
					"bwa" : 228352,
					"bwc" : 51391,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000018,
					"pbg" : 0,
					"pbm" : 0.000053,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "PT",
							"relay" : 1,
							"bwa" : 228352,
							"bwc" : 51391,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
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
					"as" : 50821,
					"relay" : 1,
					"bwa" : 614400,
					"bwc" : 389008,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000136,
					"pbg" : 0.000281,
					"pbm" : 0.000128,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 1,
							"bwa" : 614400,
							"bwc" : 389008,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000136,
							"pbg" : 0.000281,
							"pbm" : 0.000128,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 50543,
					"relay" : 1,
					"bwa" : 173942,
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
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 173942,
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
					"as" : 111,
					"relay" : 1,
					"bwa" : 11838456,
					"bwc" : 7052546,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000972,
					"pbg" : 0.000562,
					"pbm" : 0.000562,
					"pbe" : 0.001793,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 11838456,
							"bwc" : 7052546,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000972,
							"pbg" : 0.000562,
							"pbm" : 0.000562,
							"pbe" : 0.001793
						}
					]
				},
				{
					"as" : 701,
					"relay" : 1,
					"bwa" : 20480,
					"bwc" : 119,
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
							"bwc" : 119,
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
					"as" : 36223,
					"relay" : 2,
					"bwa" : 1024000,
					"bwc" : 378513,
					"fast" : 2,
					"stable" : 2,
					"guard" : 2,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000169,
					"pbg" : 0.000349,
					"pbm" : 0.00015900000000000002,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 1024000,
							"bwc" : 378513,
							"fast" : 2,
							"stable" : 2,
							"guard" : 2,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000169,
							"pbg" : 0.000349,
							"pbm" : 0.00015900000000000002,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 5760,
					"relay" : 2,
					"bwa" : 133120,
					"bwc" : 41382,
					"fast" : 2,
					"stable" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0.000025,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 133120,
							"bwc" : 41382,
							"fast" : 2,
							"stable" : 2,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0.000025,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 35807,
					"relay" : 1,
					"bwa" : 1936442,
					"bwc" : 555154,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000554,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.001661,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 1936442,
							"bwc" : 555154,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000554,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.001661
						}
					]
				},
				{
					"as" : 47066,
					"relay" : 2,
					"bwa" : 474517,
					"bwc" : 5004,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000008000000000000001,
					"pbg" : 0,
					"pbm" : 0.000023,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 474517,
							"bwc" : 5004,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000008000000000000001,
							"pbg" : 0,
							"pbm" : 0.000023,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 8943,
					"relay" : 3,
					"bwa" : 1186839,
					"bwc" : 1239274,
					"fast" : 3,
					"stable" : 1,
					"guard" : 0,
					"middle" : 3,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000486,
					"pbg" : 0,
					"pbm" : 0.0014600000000000001,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 3,
							"bwa" : 1186839,
							"bwc" : 1239274,
							"fast" : 3,
							"stable" : 1,
							"guard" : 0,
							"middle" : 3,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000486,
							"pbg" : 0,
							"pbm" : 0.0014600000000000001,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 31669,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 99198,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000024,
					"countries" : [
						{
							"cc" : "BE",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 99198,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000024
						}
					]
				},
				{
					"as" : 2586,
					"relay" : 2,
					"bwa" : 183296,
					"bwc" : 46697,
					"fast" : 2,
					"stable" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 2,
					"dir" : 2,
					"pbr" : 0.000014000000000000001,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000041,
					"countries" : [
						{
							"cc" : "EE",
							"relay" : 2,
							"bwa" : 183296,
							"bwc" : 46697,
							"fast" : 2,
							"stable" : 2,
							"guard" : 0,
							"middle" : 2,
							"exit" : 2,
							"dir" : 2,
							"pbr" : 0.000014000000000000001,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000041
						}
					]
				},
				{
					"as" : 30936,
					"relay" : 1,
					"bwa" : 211968,
					"bwc" : 59432,
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
							"bwa" : 211968,
							"bwc" : 59432,
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
					"as" : 44581,
					"relay" : 1,
					"bwa" : 262144,
					"bwc" : 122173,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000069,
					"pbg" : 0.000143,
					"pbm" : 0.000065,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 1,
							"bwa" : 262144,
							"bwc" : 122173,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000069,
							"pbg" : 0.000143,
							"pbm" : 0.000065,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 22927,
					"relay" : 1,
					"bwa" : 30720,
					"bwc" : 91,
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
							"bwc" : 91,
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
					"as" : 12634,
					"relay" : 1,
					"bwa" : 81920,
					"bwc" : 21093,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0.000025,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 1,
							"bwa" : 81920,
							"bwc" : 21093,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0.000025,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 6488,
					"relay" : 1,
					"bwa" : 829325,
					"bwc" : 180758,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000126,
					"pbg" : 0,
					"pbm" : 0.000379,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 829325,
							"bwc" : 180758,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000126,
							"pbg" : 0,
							"pbm" : 0.000379,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 37989,
					"relay" : 1,
					"bwa" : 1188614,
					"bwc" : 227360,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000127,
					"pbg" : 0.000073,
					"pbm" : 0.000073,
					"pbe" : 0.000234,
					"countries" : [
						{
							"cc" : "SG",
							"relay" : 1,
							"bwa" : 1188614,
							"bwc" : 227360,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000127,
							"pbg" : 0.000073,
							"pbm" : 0.000073,
							"pbe" : 0.000234
						}
					]
				},
				{
					"as" : 12898,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 6113,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000004,
					"pbg" : 0,
					"pbm" : 0.000011,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 1,
							"bwa" : 51200,
							"bwc" : 6113,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000004,
							"pbg" : 0,
							"pbm" : 0.000011,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 22030,
					"relay" : 1,
					"bwa" : 25600,
					"bwc" : 479,
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
							"bwc" : 479,
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
					"as" : 29194,
					"relay" : 1,
					"bwa" : 196608,
					"bwc" : 59253,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000016,
					"pbg" : 0,
					"pbm" : 0.000047,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 196608,
							"bwc" : 59253,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000016,
								"pbg" : 0,
							"pbm" : 0.000047,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 29737,
					"relay" : 1,
					"bwa" : 204800,
					"bwc" : 37896,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.00005,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000151,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 204800,
							"bwc" : 37896,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.00005,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000151
						}
					]
				},
				{
					"as" : 262868,
					"relay" : 1,
					"bwa" : 45056,
					"bwc" : 225,
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
							"bwc" : 225,
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
					"as" : 41665,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 92,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0.000025,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "UA",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 92,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0.000025,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 197922,
					"relay" : 1,
					"bwa" : 512000,
					"bwc" : 340525,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000181,
					"pbg" : 0.000105,
					"pbm" : 0.000105,
					"pbe" : 0.000335,
					"countries" : [
						{
							"cc" : "FR",
							"relay" : 1,
							"bwa" : 512000,
							"bwc" : 340525,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000181,
							"pbg" : 0.000105,
							"pbm" : 0.000105,
							"pbe" : 0.000335
						}
					]
				},
				{
					"as" : 803,
					"relay" : 2,
					"bwa" : 1569110,
					"bwc" : 1119931,
					"fast" : 2,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000441,
					"pbg" : 0.000095,
					"pbm" : 0.000043,
					"pbe" : 0.001186,
					"countries" : [
						{
							"cc" : "CA",
							"relay" : 2,
							"bwa" : 1569110,
							"bwc" : 1119931,
							"fast" : 2,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000441,
							"pbg" : 0.000095,
							"pbm" : 0.000043,
							"pbe" : 0.001186
						}
					]
				},
				{
					"as" : 26068,
					"relay" : 1,
					"bwa" : 524288,
					"bwc" : 201571,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.00016,
					"pbg" : 0.000092,
					"pbm" : 0.000092,
					"pbe" : 0.000295,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 524288,
							"bwc" : 201571,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.00016,
							"pbg" : 0.000092,
							"pbm" : 0.000092,
							"pbe" : 0.000295
						}
					]
				},
				{
					"as" : 2854,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 13673,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000003,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.00001,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 51200,
							"bwc" : 13673,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000003,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.00001
						}
					]
				},
				{
					"as" : 12334,
					"relay" : 1,
					"bwa" : 148480,
					"bwc" : 42618,
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
							"cc" : "ES",
							"relay" : 1,
							"bwa" : 148480,
							"bwc" : 42618,
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
					"as" : 9556,
					"relay" : 1,
					"bwa" : 60353,
					"bwc" : 632,
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
							"cc" : "AU",
							"relay" : 1,
							"bwa" : 60353,
							"bwc" : 632,
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
					"as" : 10489,
					"relay" : 1,
					"bwa" : 131072,
					"bwc" : 37488,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.00001,
					"pbg" : 0,
					"pbm" : 0.000031,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 131072,
							"bwc" : 37488,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.00001,
							"pbg" : 0,
							"pbm" : 0.000031,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 29695,
					"relay" : 1,
					"bwa" : 237568,
					"bwc" : 13490,
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
							"bwc" : 13490,
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
					"as" : 40430,
					"relay" : 1,
					"bwa" : 1310720,
					"bwc" : 250993,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000211,
					"pbg" : 0.000122,
					"pbm" : 0.000122,
					"pbe" : 0.000389,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 1310720,
							"bwc" : 250993,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000211,
							"pbg" : 0.000122,
							"pbm" : 0.000122,
							"pbe" : 0.000389
						}
					]
				},
				{
					"as" : 43146,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 6547,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000015,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000045,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 6547,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000015,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000045
						}
					]
				},
				{
					"as" : 21284,
					"relay" : 1,
					"bwa" : 32768,
					"bwc" : 143,
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
							"bwc" : 143,
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
					"as" : 41727,
					"relay" : 1,
					"bwa" : 131072,
					"bwc" : 3,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000014,
					"pbg" : 0,
					"pbm" : 0.000041,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 131072,
							"bwc" : 3,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000014,
							"pbg" : 0,
							"pbm" : 0.000041,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 42455,
					"relay" : 1,
					"bwa" : 409600,
					"bwc" : 241788,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000042,
					"pbg" : 0,
					"pbm" : 0.000125,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "IM",
							"relay" : 1,
							"bwa" : 409600,
							"bwc" : 241788,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000042,
							"pbg" : 0,
							"pbm" : 0.000125,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 8764,
					"relay" : 2,
					"bwa" : 184320,
					"bwc" : 123121,
					"fast" : 2,
					"stable" : 1,
					"guard" : 0,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000023,
					"pbg" : 0,
					"pbm" : 0.000047,
					"pbe" : 0.00002,
					"countries" : [
						{
							"cc" : "LT",
							"relay" : 2,
							"bwa" : 184320,
							"bwc" : 123121,
							"fast" : 2,
							"stable" : 1,
							"guard" : 0,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000023,
							"pbg" : 0,
							"pbm" : 0.000047,
							"pbe" : 0.00002
						}
					]
				},
				{
					"as" : 30881,
					"relay" : 1,
					"bwa" : 98304,
					"bwc" : 8712,
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
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 98304,
							"bwc" : 8712,
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
					"as" : 30176,
					"relay" : 1,
					"bwa" : 22814995,
					"bwc" : 19806720,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.01815,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.054455,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 22814995,
							"bwc" : 19806720,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.01815,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.054455
						}
					]
				},
				{
					"as" : 2578,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 34863,
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
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 34863,
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
					"as" : 36012,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 62165,
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
							"bwc" : 62165,
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
					"as" : 12180,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 6030,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0.000025,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 6030,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0.000025,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 8928,
					"relay" : 1,
					"bwa" : 68698,
					"bwc" : 13932,
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
							"bwc" : 13932,
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
					"as" : 31,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 39949,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0.000025,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 39949,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0.000025,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 7753,
					"relay" : 1,
					"bwa" : 640000,
					"bwc" : 491205,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000135,
					"pbg" : 0.000278,
					"pbm" : 0.000126,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 640000,
							"bwc" : 491205,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000135,
							"pbg" : 0.000278,
							"pbm" : 0.000126,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 48781,
					"relay" : 1,
					"bwa" : 128000,
					"bwc" : 14702,
					"fast" : 1,
					"stable" : 1,
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
							"bwa" : 128000,
							"bwc" : 14702,
							"fast" : 1,
							"stable" : 1,
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
					"as" : 28717,
					"relay" : 1,
					"bwa" : 512000,
					"bwc" : 325548,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000129,
					"pbg" : 0.000265,
					"pbm" : 0.00012,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DK",
							"relay" : 1,
							"bwa" : 512000,
							"bwc" : 325548,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000129,
							"pbg" : 0.000265,
							"pbm" : 0.00012,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 20910,
					"relay" : 1,
					"bwa" : 281600,
					"bwc" : 0,
					"fast" : 1,
					"stable" : 0,
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
							"cc" : "LV",
							"relay" : 1,
							"bwa" : 281600,
							"bwc" : 0,
							"fast" : 1,
							"stable" : 0,
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
					"as" : 11696,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 27616,
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
							"bwc" : 27616,
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
					"as" : 39138,
					"relay" : 4,
					"bwa" : 109715327,
					"bwc" : 78096180,
					"fast" : 4,
					"stable" : 4,
					"guard" : 4,
					"middle" : 4,
					"exit" : 4,
					"dir" : 4,
					"pbr" : 0.038837,
					"pbg" : 0.022452,
					"pbm" : 0.022447,
					"pbe" : 0.071616,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 4,
							"bwa" : 109715327,
							"bwc" : 78096180,
							"fast" : 4,
							"stable" : 4,
							"guard" : 4,
							"middle" : 4,
							"exit" : 4,
							"dir" : 4,
							"pbr" : 0.038837,
							"pbg" : 0.022452,
							"pbm" : 0.022447,
							"pbe" : 0.071616
						}
					]
				},
				{
					"as" : 17090,
					"relay" : 3,
					"bwa" : 10250572,
					"bwc" : 8301291,
					"fast" : 3,
					"stable" : 2,
					"guard" : 2,
					"middle" : 3,
					"exit" : 0,
					"dir" : 3,
					"pbr" : 0.003907,
					"pbg" : 0.007771,
					"pbm" : 0.003948,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 3,
							"bwa" : 10250572,
							"bwc" : 8301291,
							"fast" : 3,
							"stable" : 2,
							"guard" : 2,
							"middle" : 3,
							"exit" : 0,
							"dir" : 3,
							"pbr" : 0.003907,
							"pbg" : 0.007771,
							"pbm" : 0.003948,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 7725,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 4344,
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
							"cc" : "US",
							"relay" : 1,
							"bwa" : 51200,
							"bwc" : 4344,
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
					"as" : 393249,
					"relay" : 1,
					"bwa" : 153600,
					"bwc" : 113735,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000019,
					"pbg" : 0,
					"pbm" : 0.000057,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "CA",
							"relay" : 1,
							"bwa" : 153600,
							"bwc" : 113735,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000019,
							"pbg" : 0,
							"pbm" : 0.000057,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 49770,
					"relay" : 2,
					"bwa" : 1354413,
					"bwc" : 746659,
					"fast" : 2,
					"stable" : 2,
					"guard" : 2,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000156,
					"pbg" : 0.000322,
					"pbm" : 0.000147,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 2,
							"bwa" : 1354413,
							"bwc" : 746659,
							"fast" : 2,
							"stable" : 2,
							"guard" : 2,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000156,
							"pbg" : 0.000322,
							"pbm" : 0.000147,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 1835,
					"relay" : 1,
					"bwa" : 3145728,
					"bwc" : 1712940,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000583,
					"pbg" : 0.001203,
					"pbm" : 0.000546,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DK",
							"relay" : 1,
							"bwa" : 3145728,
							"bwc" : 1712940,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000583,
							"pbg" : 0.001203,
							"pbm" : 0.000546,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 6332,
					"relay" : 1,
					"bwa" : 1342256,
					"bwc" : 767124,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000117,
					"pbg" : 0,
					"pbm" : 0.000352,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "MX",
							"relay" : 1,
							"bwa" : 1342256,
							"bwc" : 767124,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000117,
							"pbg" : 0,
							"pbm" : 0.000352,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 17183,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 4569,
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
							"bwc" : 4569,
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
					"as" : 6697,
					"relay" : 1,
					"bwa" : 45056,
					"bwc" : 928,
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
							"bwc" : 928,
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
					"as" : 29632,
					"relay" : 1,
					"bwa" : 204800,
					"bwc" : 27491,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000017,
					"pbg" : 0.000035,
					"pbm" : 0.000016,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "UA",
							"relay" : 1,
							"bwa" : 204800,
							"bwc" : 27491,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000017,
							"pbg" : 0.000035,
							"pbm" : 0.000016,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 13110,
					"relay" : 1,
					"bwa" : 77564,
					"bwc" : 13905,
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
							"bwc" : 13905,
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
					"as" : 53850,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 1954,
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
							"bwc" : 1954,
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
					"as" : 35017,
					"relay" : 1,
					"bwa" : 2445092,
					"bwc" : 1577727,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000503,
					"pbg" : 0,
					"pbm" : 0.001509,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 2445092,
							"bwc" : 1577727,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000503,
							"pbg" : 0,
							"pbm" : 0.001509,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 237,
					"relay" : 1,
					"bwa" : 1024000,
					"bwc" : 889278,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000281,
					"pbg" : 0.000581,
					"pbm" : 0.000264,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 1024000,
							"bwc" : 889278,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000281,
							"pbg" : 0.000581,
							"pbm" : 0.000264,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 43711,
					"relay" : 1,
					"bwa" : 1024000,
					"bwc" : 508721,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000117,
					"pbg" : 0,
					"pbm" : 0.000351,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "HU",
							"relay" : 1,
							"bwa" : 1024000,
							"bwc" : 508721,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000117,
							"pbg" : 0,
							"pbm" : 0.000351,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 39608,
					"relay" : 2,
					"bwa" : 2592664,
					"bwc" : 2156285,
					"fast" : 2,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000868,
					"pbg" : 0.000498,
					"pbm" : 0.00052,
					"pbe" : 0.001588,
					"countries" : [
						{
							"cc" : "UA",
							"relay" : 2,
							"bwa" : 2592664,
							"bwc" : 2156285,
							"fast" : 2,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000868,
							"pbg" : 0.000498,
							"pbm" : 0.00052,
							"pbe" : 0.001588
						}
					]
				},
				{
					"as" : 6828,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 99702,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000013,
					"pbg" : 0,
					"pbm" : 0.00004,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 99702,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000013,
							"pbg" : 0,
							"pbm" : 0.00004,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 46687,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 6075,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000004,
					"pbg" : 0,
					"pbm" : 0.000011,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 6075,
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
						}
					]
				},
				{
					"as" : 9,
					"relay" : 1,
					"bwa" : 3200000,
					"bwc" : 2754680,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.001984,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.005953,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 3200000,
							"bwc" : 2754680,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.001984,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.005953
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
					"as" : 48685,
					"relay" : 1,
					"bwa" : 10240,
					"bwc" : 99377,
					"fast" : 0,
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
							"cc" : "IS",
							"relay" : 1,
							"bwa" : 10240,
							"bwc" : 99377,
							"fast" : 0,
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
					"as" : 34655,
					"relay" : 1,
					"bwa" : 153600,
					"bwc" : 8576,
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
							"cc" : "HU",
							"relay" : 1,
							"bwa" : 153600,
							"bwc" : 8576,
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
					"as" : 34764,
					"relay" : 1,
					"bwa" : 2097152,
					"bwc" : 819486,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000115,
					"pbg" : 0.000238,
					"pbm" : 0.000108,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 2097152,
							"bwc" : 819486,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000115,
							"pbg" : 0.000238,
							"pbm" : 0.000108,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 39725,
					"relay" : 1,
					"bwa" : 53248,
					"bwc" : 7881,
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
							"bwa" : 53248,
							"bwc" : 7881,
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
					"as" : 196705,
					"relay" : 1,
					"bwa" : 262144,
					"bwc" : 206041,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000062,
					"pbg" : 0,
					"pbm" : 0.000186,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "UA",
							"relay" : 1,
							"bwa" : 262144,
							"bwc" : 206041,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000062,
							"pbg" : 0,
							"pbm" : 0.000186,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 20712,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 10793,
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
							"bwc" : 10793,
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
					"as" : 34232,
					"relay" : 1,
					"bwa" : 3174400,
					"bwc" : 2529363,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000729,
					"pbg" : 0,
					"pbm" : 0.002187,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 3174400,
							"bwc" : 2529363,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000729,
							"pbg" : 0,
							"pbm" : 0.002187,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 44957,
					"relay" : 2,
					"bwa" : 71680,
					"bwc" : 10411,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000004,
					"pbg" : 0,
					"pbm" : 0.000005,
					"pbe" : 0.000006,
					"countries" : [
						{
							"cc" : "IT",
							"relay" : 2,
							"bwa" : 71680,
							"bwc" : 10411,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000004,
							"pbg" : 0,
							"pbm" : 0.000005,
							"pbe" : 0.000006
						}
					]
				},
				{
					"as" : 24607,
					"relay" : 1,
					"bwa" : 6291456,
					"bwc" : 4983171,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.002999,
					"pbg" : 0.006187,
					"pbm" : 0.00281,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "LT",
							"relay" : 1,
							"bwa" : 6291456,
							"bwc" : 4983171,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.002999,
							"pbg" : 0.006187,
							"pbm" : 0.00281,
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
					"as" : 31555,
					"relay" : 1,
					"bwa" : 256000,
					"bwc" : 250036,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000014,
					"pbg" : 0.00003,
					"pbm" : 0.000013,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "FR",
							"relay" : 1,
							"bwa" : 256000,
							"bwc" : 250036,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000014,
							"pbg" : 0.00003,
							"pbm" : 0.000013,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 34315,
					"relay" : 1,
					"bwa" : 431009,
					"bwc" : 143243,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000124,
					"pbg" : 0.000071,
					"pbm" : 0.000071,
					"pbe" : 0.000228,
					"countries" : [
						{
							"cc" : "CZ",
							"relay" : 1,
							"bwa" : 431009,
							"bwc" : 143243,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000124,
							"pbg" : 0.000071,
							"pbm" : 0.000071,
							"pbe" : 0.000228
						}
					]
				},
				{
					"as" : 25577,
					"relay" : 1,
					"bwa" : 5242880,
					"bwc" : 4834787,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.001446,
					"pbg" : 0.002983,
					"pbm" : 0.001355,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 1,
							"bwa" : 5242880,
							"bwc" : 4834787,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.001446,
							"pbg" : 0.002983,
							"pbm" : 0.001355,
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
					"pbr" : 0.000892,
					"pbg" : 0,
					"pbm" : 0.002676,
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
							"pbr" : 0.000892,
							"pbg" : 0,
							"pbm" : 0.002676,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 1239,
					"relay" : 1,
					"bwa" : 798516,
					"bwc" : 335815,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000039,
					"pbg" : 0.00008,
					"pbm" : 0.000036,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 1,
							"bwa" : 798516,
							"bwc" : 335815,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000039,
							"pbg" : 0.00008,
							"pbm" : 0.000036,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 23205,
					"relay" : 1,
					"bwa" : 329874,
					"bwc" : 89888,
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
							"cc" : "US",
							"relay" : 1,
							"bwa" : 329874,
							"bwc" : 89888,
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
				},
				{
					"as" : 18881,
					"relay" : 3,
					"bwa" : 199683,
					"bwc" : 46351,
					"fast" : 3,
					"stable" : 0,
					"guard" : 0,
					"middle" : 3,
					"exit" : 3,
					"dir" : 3,
					"pbr" : 0.000013999999999999998,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000042000000000000004,
					"countries" : [
						{
							"cc" : "BR",
							"relay" : 3,
							"bwa" : 199683,
							"bwc" : 46351,
							"fast" : 3,
							"stable" : 0,
							"guard" : 0,
							"middle" : 3,
							"exit" : 3,
							"dir" : 3,
							"pbr" : 0.000013999999999999998,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000042000000000000004
						}
					]
				},
				{
					"as" : 53785,
					"relay" : 1,
					"bwa" : 524288,
					"bwc" : 489023,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000195,
					"pbg" : 0.000403,
					"pbm" : 0.000183,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 524288,
							"bwc" : 489023,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000195,
							"pbg" : 0.000403,
							"pbm" : 0.000183,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 33604,
					"relay" : 1,
					"bwa" : 2237560,
					"bwc" : 1585902,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000603,
					"pbg" : 0.000349,
					"pbm" : 0.000349,
					"pbe" : 0.001112,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 2237560,
							"bwc" : 1585902,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000603,
							"pbg" : 0.000349,
							"pbm" : 0.000349,
							"pbe" : 0.001112
						}
					]
				},
				{
					"as" : 20473,
					"relay" : 1,
					"bwa" : 10780902,
					"bwc" : 7789432,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.003415,
					"pbg" : 0.007044,
					"pbm" : 0.0032,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 10780902,
							"bwc" : 7789432,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.003415,
							"pbg" : 0.007044,
							"pbm" : 0.0032,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 29302,
					"relay" : 2,
					"bwa" : 563200,
					"bwc" : 295119,
					"fast" : 2,
					"stable" : 1,
					"guard" : 1,
					"middle" : 2,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000095,
					"pbg" : 0.000123,
					"pbm" : 0.000162,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 2,
							"bwa" : 563200,
							"bwc" : 295119,
							"fast" : 2,
							"stable" : 1,
							"guard" : 1,
							"middle" : 2,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000095,
							"pbg" : 0.000123,
							"pbm" : 0.000162,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 12626,
					"relay" : 1,
					"bwa" : 97094,
					"bwc" : 16452,
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
							"bwc" : 16452,
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
					"as" : 5563,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 8384,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0.000025,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 8384,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0.000025,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 58553,
					"relay" : 1,
					"bwa" : 283993,
					"bwc" : 13911,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000025,
					"countries" : [
						{
							"cc" : "ID",
							"relay" : 1,
							"bwa" : 283993,
							"bwc" : 13911,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000025
						}
					]
				},
				{
					"as" : 33970,
					"relay" : 1,
					"bwa" : 20480,
					"bwc" : 59,
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
							"bwc" : 59,
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
					"as" : 197071,
					"relay" : 1,
					"bwa" : 158720,
					"bwc" : 8156,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000015,
					"pbg" : 0,
					"pbm" : 0.000046,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 1,
							"bwa" : 158720,
							"bwc" : 8156,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000015,
							"pbg" : 0,
							"pbm" : 0.000046,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 46193,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 20541,
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
							"bwc" : 20541,
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
					"as" : 40156,
					"relay" : 2,
					"bwa" : 1191936,
					"bwc" : 538008,
					"fast" : 2,
					"stable" : 2,
					"guard" : 0,
					"middle" : 2,
					"exit" : 2,
					"dir" : 2,
					"pbr" : 0.000354,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.001061,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 1191936,
							"bwc" : 538008,
							"fast" : 2,
							"stable" : 2,
							"guard" : 0,
							"middle" : 2,
							"exit" : 2,
							"dir" : 2,
							"pbr" : 0.000354,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.001061
						}
					]
				},
				{
					"as" : 34362,
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
							"cc" : "HR",
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
					"as" : 196714,
					"relay" : 2,
					"bwa" : 375808,
					"bwc" : 281308,
					"fast" : 2,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000054,
					"pbg" : 0.000071,
					"pbm" : 0.00009099999999999999,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 2,
							"bwa" : 375808,
							"bwc" : 281308,
							"fast" : 2,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000054,
							"pbg" : 0.000071,
							"pbm" : 0.00009099999999999999,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 36492,
					"relay" : 1,
					"bwa" : 1280000,
					"bwc" : 509636,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000286,
					"pbg" : 0.00059,
					"pbm" : 0.000268,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 1280000,
							"bwc" : 509636,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000286,
							"pbg" : 0.00059,
							"pbm" : 0.000268,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 21127,
					"relay" : 1,
					"bwa" : 131072,
					"bwc" : 21041,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000024,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 131072,
							"bwc" : 21041,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000024
						}
					]
				},
				{
					"as" : 24900,
					"relay" : 3,
					"bwa" : 1126400,
					"bwc" : 1192696,
					"fast" : 2,
					"stable" : 3,
					"guard" : 2,
					"middle" : 3,
					"exit" : 0,
					"dir" : 3,
					"pbr" : 0.00040500000000000003,
					"pbg" : 0.000829,
					"pbm" : 0.000386,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 3,
							"bwa" : 1126400,
							"bwc" : 1192696,
							"fast" : 2,
							"stable" : 3,
							"guard" : 2,
							"middle" : 3,
							"exit" : 0,
							"dir" : 3,
							"pbr" : 0.00040500000000000003,
							"pbg" : 0.000829,
							"pbm" : 0.000386,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 6848,
					"relay" : 2,
					"bwa" : 196608,
					"bwc" : 46556,
					"fast" : 2,
					"stable" : 1,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000019,
					"pbg" : 0,
					"pbm" : 0.000057,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "BE",
							"relay" : 2,
							"bwa" : 196608,
							"bwc" : 46556,
							"fast" : 2,
							"stable" : 1,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000019,
							"pbg" : 0,
							"pbm" : 0.000057,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 31019,
					"relay" : 1,
					"bwa" : 741008,
					"bwc" : 288813,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.00011,
					"pbg" : 0,
					"pbm" : 0.000328,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 1,
							"bwa" : 741008,
							"bwc" : 288813,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.00011,
							"pbg" : 0,
							"pbm" : 0.000328,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 21069,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 68887,
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
							"cc" : "CH",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 68887,
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
					"as" : 41966,
					"relay" : 1,
					"bwa" : 402007,
					"bwc" : 264018,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000094,
					"pbg" : 0,
					"pbm" : 0.000281,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "PL",
							"relay" : 1,
							"bwa" : 402007,
							"bwc" : 264018,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000094,
							"pbg" : 0,
							"pbm" : 0.000281,
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
					"as" : 24466,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 2619,
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
							"bwc" : 2619,
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
					"as" : 49981,
					"relay" : 1,
					"bwa" : 4334820,
					"bwc" : 3708267,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.001209,
					"pbg" : 0,
					"pbm" : 0.003626,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 1,
							"bwa" : 4334820,
							"bwc" : 3708267,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.001209,
							"pbg" : 0,
							"pbm" : 0.003626,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 2044,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 94093,
					"fast" : 1,
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
							"cc" : "US",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 94093,
							"fast" : 1,
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
					"as" : 35376,
					"relay" : 1,
					"bwa" : 1048576,
					"bwc" : 1571190,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000671,
					"pbg" : 0,
					"pbm" : 0.002012,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DK",
							"relay" : 1,
							"bwa" : 1048576,
							"bwc" : 1571190,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000671,
							"pbg" : 0,
							"pbm" : 0.002012,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 10913,
					"relay" : 1,
					"bwa" : 1024000,
					"bwc" : 680659,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000478,
					"pbg" : 0.000987,
					"pbm" : 0.000448,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 1024000,
							"bwc" : 680659,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000478,
							"pbg" : 0.000987,
							"pbm" : 0.000448,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 31214,
					"relay" : 1,
					"bwa" : 98304,
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
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 98304,
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
					"as" : 20766,
					"relay" : 2,
					"bwa" : 364544,
					"bwc" : 130536,
					"fast" : 2,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 2,
					"pbr" : 0.000023,
					"pbg" : 0.000031,
					"pbm" : 0.000014,
					"pbe" : 0.000024,
					"countries" : [
						{
							"cc" : "FR",
							"relay" : 2,
							"bwa" : 364544,
							"bwc" : 130536,
							"fast" : 2,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 2,
							"pbr" : 0.000023,
							"pbg" : 0.000031,
							"pbm" : 0.000014,
							"pbe" : 0.000024
						}
					]
				},
				{
					"as" : 16125,
					"relay" : 1,
					"bwa" : 3717370,
					"bwc" : 1341063,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000529,
					"pbg" : 0.000306,
					"pbm" : 0.000306,
					"pbe" : 0.000976,
					"countries" : [
						{
							"cc" : "LT",
							"relay" : 1,
							"bwa" : 3717370,
							"bwc" : 1341063,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000529,
							"pbg" : 0.000306,
							"pbm" : 0.000306,
							"pbe" : 0.000976
						}
					]
				},
				{
					"as" : 27992,
					"relay" : 1,
					"bwa" : 121354,
					"bwc" : 24581,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000005,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000014,
					"countries" : [
						{
							"cc" : "CO",
							"relay" : 1,
							"bwa" : 121354,
							"bwc" : 24581,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000005,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000014
						}
					]
				},
				{
					"as" : 43948,
					"relay" : 1,
					"bwa" : 10273,
					"bwc" : 218,
					"fast" : 0,
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
							"cc" : "SE",
							"relay" : 1,
							"bwa" : 10273,
							"bwc" : 218,
							"fast" : 0,
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
					"as" : 31012,
					"relay" : 1,
					"bwa" : 65536,
					"bwc" : 10165,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000004,
					"pbg" : 0,
					"pbm" : 0.000011,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "HR",
							"relay" : 1,
							"bwa" : 65536,
							"bwc" : 10165,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000004,
							"pbg" : 0,
							"pbm" : 0.000011,
							"pbe" : 0
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
					"pbm" : 0.000021,
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
							"pbm" : 0.000021,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 20507,
					"relay" : 2,
					"bwa" : 1114112,
					"bwc" : 445788,
					"fast" : 2,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.00016700000000000002,
					"pbg" : 0.000333,
					"pbm" : 0.00016700000000000002,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 2,
							"bwa" : 1114112,
							"bwc" : 445788,
							"fast" : 2,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.00016700000000000002,
							"pbg" : 0.000333,
							"pbm" : 0.00016700000000000002,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 9044,
					"relay" : 1,
					"bwa" : 81920,
					"bwc" : 14473,
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
							"bwc" : 14473,
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
					"as" : 31100,
					"relay" : 1,
					"bwa" : 262144,
					"bwc" : 63043,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000025,
					"pbg" : 0.000051,
					"pbm" : 0.000023,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 1,
							"bwa" : 262144,
							"bwc" : 63043,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000025,
							"pbg" : 0.000051,
							"pbm" : 0.000023,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 48926,
					"relay" : 1,
					"bwa" : 2526193,
					"bwc" : 1767885,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000906,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.002718,
					"countries" : [
						{
							"cc" : "CZ",
							"relay" : 1,
							"bwa" : 2526193,
							"bwc" : 1767885,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000906,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.002718
						}
					]
				},
				{
					"as" : 42695,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 35937,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0.000025,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 35937,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0.000025,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 14901,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 12077,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.00001,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000029,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 51200,
							"bwc" : 12077,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.00001,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000029
						}
					]
				},
				{
					"as" : 55045,
					"relay" : 1,
					"bwa" : 437925,
					"bwc" : 130194,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000035,
					"pbg" : 0,
					"pbm" : 0.000104,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 437925,
							"bwc" : 130194,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000035,
							"pbg" : 0,
							"pbm" : 0.000104,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 45595,
					"relay" : 1,
					"bwa" : 35261,
					"bwc" : 4919,
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
							"bwc" : 4919,
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
					"as" : 11878,
					"relay" : 1,
					"bwa" : 947563,
					"bwc" : 448528,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000104,
					"pbg" : 0,
					"pbm" : 0.00031,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 947563,
							"bwc" : 448528,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000104,
							"pbg" : 0,
							"pbm" : 0.00031,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 46925,
					"relay" : 1,
					"bwa" : 32768,
					"bwc" : 161,
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
							"bwc" : 161,
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
					"as" : 28625,
					"relay" : 1,
					"bwa" : 98377,
					"bwc" : 17698,
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
							"bwc" : 17698,
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
					"as" : 15626,
					"relay" : 1,
					"bwa" : 470392,
					"bwc" : 141181,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000009,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000026,
					"countries" : [
						{
							"cc" : "UA",
							"relay" : 1,
							"bwa" : 470392,
							"bwc" : 141181,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000009,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000026
						}
					]
				},
				{
					"as" : 15435,
					"relay" : 1,
					"bwa" : 196608,
					"bwc" : 172175,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000595,
					"pbg" : 0,
					"pbm" : 0.001785,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 1,
							"bwa" : 196608,
							"bwc" : 172175,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000595,
							"pbg" : 0,
							"pbm" : 0.001785,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 20723,
					"relay" : 1,
					"bwa" : 20480,
					"bwc" : 326,
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
							"bwc" : 326,
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
					"as" : 8151,
					"relay" : 1,
					"bwa" : 42366,
					"bwc" : 2939,
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
							"cc" : "MX",
							"relay" : 1,
							"bwa" : 42366,
							"bwc" : 2939,
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
					"as" : 6714,
					"relay" : 1,
					"bwa" : 34901,
					"bwc" : 2313,
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
							"bwc" : 2313,
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
					"as" : 8881,
					"relay" : 1,
					"bwa" : 71680,
					"bwc" : 23426,
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
							"bwc" : 23426,
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
					"as" : 35911,
					"relay" : 1,
					"bwa" : 65536,
					"bwc" : 718,
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
							"bwc" : 718,
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
					"as" : 17547,
					"relay" : 1,
					"bwa" : 587195,
					"bwc" : 125355,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000074,
					"pbg" : 0.000043,
					"pbm" : 0.000043,
					"pbe" : 0.000136,
					"countries" : [
						{
							"cc" : "SG",
							"relay" : 1,
							"bwa" : 587195,
							"bwc" : 125355,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000074,
							"pbg" : 0.000043,
							"pbm" : 0.000043,
							"pbe" : 0.000136
						}
					]
				},
				{
					"as" : 43326,
					"relay" : 1,
					"bwa" : 2097152,
					"bwc" : 2074666,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.001387,
					"pbg" : 0.002862,
					"pbm" : 0.0013,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 1,
							"bwa" : 2097152,
							"bwc" : 2074666,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.001387,
							"pbg" : 0.002862,
							"pbm" : 0.0013,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 16718,
					"relay" : 2,
					"bwa" : 174080,
					"bwc" : 9152,
					"fast" : 2,
					"stable" : 0,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000006,
					"pbg" : 0,
					"pbm" : 0.000019,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 174080,
							"bwc" : 9152,
							"fast" : 2,
							"stable" : 0,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000006,
							"pbg" : 0,
							"pbm" : 0.000019,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 49855,
					"relay" : 1,
					"bwa" : 204800,
					"bwc" : 27847,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000013,
					"pbg" : 0.000008,
					"pbm" : 0.000008,
					"pbe" : 0.000024,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 1,
							"bwa" : 204800,
							"bwc" : 27847,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000013,
							"pbg" : 0.000008,
							"pbm" : 0.000008,
							"pbe" : 0.000024
						}
					]
				},
				{
					"as" : 14987,
					"relay" : 1,
					"bwa" : 512000,
					"bwc" : 400065,
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
							"bwc" : 400065,
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
					"as" : 197015,
					"relay" : 1,
					"bwa" : 185344,
					"bwc" : 0,
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
							"cc" : "UA",
							"relay" : 1,
							"bwa" : 185344,
							"bwc" : 0,
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
					"as" : 48133,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 53317,
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
							"bwc" : 53317,
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
					"as" : 21310,
					"relay" : 1,
					"bwa" : 215040,
					"bwc" : 0,
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
							"bwa" : 215040,
							"bwc" : 0,
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
					"as" : 28745,
					"relay" : 1,
					"bwa" : 1090212,
					"bwc" : 467964,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000118,
					"pbg" : 0,
					"pbm" : 0.000354,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 1090212,
							"bwc" : 467964,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000118,
							"pbg" : 0,
							"pbm" : 0.000354,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 30764,
					"relay" : 1,
					"bwa" : 131072,
					"bwc" : 57367,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000025,
					"pbg" : 0,
					"pbm" : 0.000074,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "CZ",
							"relay" : 1,
							"bwa" : 131072,
							"bwc" : 57367,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000025,
							"pbg" : 0,
							"pbm" : 0.000074,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 34358,
					"relay" : 1,
					"bwa" : 1504458,
					"bwc" : 903334,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000374,
					"pbg" : 0.000216,
					"pbm" : 0.000216,
					"pbe" : 0.000689,
					"countries" : [
						{
							"cc" : "RO",
							"relay" : 1,
							"bwa" : 1504458,
							"bwc" : 903334,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000374,
							"pbg" : 0.000216,
							"pbm" : 0.000216,
							"pbe" : 0.000689
						}
					]
				},
				{
					"as" : 29084,
					"relay" : 1,
					"bwa" : 451731,
					"bwc" : 176796,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000034,
					"pbg" : 0,
					"pbm" : 0.000103,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "BG",
							"relay" : 1,
							"bwa" : 451731,
							"bwc" : 176796,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000034,
							"pbg" : 0,
							"pbm" : 0.000103,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 2116,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 18376,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0.000023,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NO",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 18376,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0.000023,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 50618,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 51202,
					"fast" : 1,
					"stable" : 1,
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
							"cc" : "FR",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 51202,
							"fast" : 1,
							"stable" : 1,
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
					"pbr" : 0.000121,
					"pbg" : 0,
					"pbm" : 0.000364,
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
							"pbr" : 0.000121,
							"pbg" : 0,
							"pbm" : 0.000364,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 13647,
					"relay" : 1,
					"bwa" : 40960,
					"bwc" : 3852,
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
							"cc" : "US",
							"relay" : 1,
							"bwa" : 40960,
							"bwc" : 3852,
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
					"as" : 6851,
					"relay" : 1,
					"bwa" : 910342,
					"bwc" : 298205,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000157,
					"pbg" : 0.000324,
					"pbm" : 0.000147,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "LV",
							"relay" : 1,
							"bwa" : 910342,
							"bwc" : 298205,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000157,
							"pbg" : 0.000324,
							"pbm" : 0.000147,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 45051,
					"relay" : 1,
					"bwa" : 1039664,
					"bwc" : 363975,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000143,
					"pbg" : 0.000083,
					"pbm" : 0.000083,
					"pbe" : 0.000264,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 1039664,
							"bwc" : 363975,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000143,
							"pbg" : 0.000083,
							"pbm" : 0.000083,
							"pbe" : 0.000264
						}
					]
				},
				{
					"as" : 18712,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 59700,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0.000025,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 59700,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0.000025,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 35382,
					"relay" : 1,
					"bwa" : 204800,
					"bwc" : 74060,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000011,
					"pbg" : 0.000022,
					"pbm" : 0.00001,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "FI",
							"relay" : 1,
							"bwa" : 204800,
							"bwc" : 74060,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000011,
							"pbg" : 0.000022,
							"pbm" : 0.00001,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 29028,
					"relay" : 1,
					"bwa" : 82225,
					"bwc" : 67029,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000019,
					"pbg" : 0,
					"pbm" : 0.000058,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 1,
							"bwa" : 82225,
							"bwc" : 67029,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000019,
							"pbg" : 0,
							"pbm" : 0.000058,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 12810,
					"relay" : 1,
					"bwa" : 0,
					"bwc" : 1134,
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
							"cc" : "HR",
							"relay" : 1,
							"bwa" : 0,
							"bwc" : 1134,
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
					"as" : 61387,
					"relay" : 1,
					"bwa" : 40960,
					"bwc" : 56258,
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
							"cc" : "NL",
							"relay" : 1,
							"bwa" : 40960,
							"bwc" : 56258,
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
					"pbr" : 0.000808,
					"pbg" : 0.000467,
					"pbm" : 0.000467,
					"pbe" : 0.001489,
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
							"pbr" : 0.000808,
							"pbg" : 0.000467,
							"pbm" : 0.000467,
							"pbe" : 0.001489
						}
					]
				},
				{
					"as" : 14670,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 42165,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000012,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000036,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 42165,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000012,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000036
						}
					]
				},
				{
					"as" : 39389,
					"relay" : 1,
					"bwa" : 2168302,
					"bwc" : 633713,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000508,
					"pbg" : 0.000293,
					"pbm" : 0.000293,
					"pbe" : 0.000936,
					"countries" : [
						{
							"cc" : "FR",
							"relay" : 1,
							"bwa" : 2168302,
							"bwc" : 633713,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000508,
							"pbg" : 0.000293,
							"pbm" : 0.000293,
							"pbe" : 0.000936
						}
					]
				},
				{
					"as" : 6661,
					"relay" : 1,
					"bwa" : 200506,
					"bwc" : 41216,
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
							"cc" : "LU",
							"relay" : 1,
							"bwa" : 200506,
							"bwc" : 41216,
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
					"as" : 4844,
					"relay" : 1,
					"bwa" : 160311,
					"bwc" : 11097,
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
							"bwc" : 11097,
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
					"as" : 43988,
					"relay" : 1,
					"bwa" : 524288,
					"bwc" : 51204,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000283,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000849,
					"countries" : [
						{
							"cc" : "ES",
							"relay" : 1,
							"bwa" : 524288,
							"bwc" : 51204,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000283,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000849
						}
					]
				},
				{
					"as" : 3330,
					"relay" : 1,
					"bwa" : 122880,
					"bwc" : 26116,
					"fast" : 1,
					"stable" : 0,
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
							"cc" : "AT",
							"relay" : 1,
							"bwa" : 122880,
							"bwc" : 26116,
							"fast" : 1,
							"stable" : 0,
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
					"as" : 19182,
					"relay" : 1,
					"bwa" : 30720,
					"bwc" : 10224,
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
							"bwc" : 10224,
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
					"as" : 41011,
					"relay" : 1,
					"bwa" : 3617844,
					"bwc" : 1842546,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.001004,
					"pbg" : 0.000581,
					"pbm" : 0.000581,
					"pbe" : 0.001852,
					"countries" : [
						{
							"cc" : "RO",
							"relay" : 1,
							"bwa" : 3617844,
							"bwc" : 1842546,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.001004,
							"pbg" : 0.000581,
							"pbm" : 0.000581,
							"pbe" : 0.001852
						}
					]
				},
				{
					"as" : 44185,
					"relay" : 1,
					"bwa" : 256000,
					"bwc" : 248916,
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
							"cc" : "SK",
							"relay" : 1,
							"bwa" : 256000,
							"bwc" : 248916,
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
					"as" : 47544,
					"relay" : 1,
					"bwa" : 512000,
					"bwc" : 231216,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000061,
					"pbg" : 0.000126,
					"pbm" : 0.000057,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "PL",
							"relay" : 1,
							"bwa" : 512000,
							"bwc" : 231216,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000061,
							"pbg" : 0.000126,
							"pbm" : 0.000057,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 8681,
					"relay" : 1,
					"bwa" : 32000,
					"bwc" : 3539,
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
							"bwc" : 3539,
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
					"as" : 12355,
					"relay" : 1,
					"bwa" : 59392,
					"bwc" : 31,
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
							"cc" : "DE",
							"relay" : 1,
							"bwa" : 59392,
							"bwc" : 31,
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
					"as" : 6528,
					"relay" : 1,
					"bwa" : 153600,
					"bwc" : 70019,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000016,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000047,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 153600,
							"bwc" : 70019,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000016,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000047
						}
					]
				},
				{
					"as" : 32220,
					"relay" : 1,
					"bwa" : 20480,
					"bwc" : 285,
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
							"bwc" : 285,
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
					"as" : 3356,
					"relay" : 1,
					"bwa" : 119622,
					"bwc" : 12989,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.00002,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.00006,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 119622,
							"bwc" : 12989,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.00002,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.00006
						}
					]
				},
				{
					"as" : 21107,
					"relay" : 1,
					"bwa" : 20480,
					"bwc" : 3300,
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
							"bwc" : 3300,
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
					"as" : 42575,
					"relay" : 1,
					"bwa" : 98304,
					"bwc" : 28405,
					"fast" : 1,
					"stable" : 1,
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
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 98304,
							"bwc" : 28405,
							"fast" : 1,
							"stable" : 1,
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
					"as" : 12597,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 47440,
					"fast" : 1,
					"stable" : 1,
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
							"cc" : "SE",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 47440,
							"fast" : 1,
							"stable" : 1,
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
					"as" : 43362,
					"relay" : 1,
					"bwa" : 232499,
					"bwc" : 1651,
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
							"bwc" : 1651,
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
					"as" : 57858,
					"relay" : 2,
					"bwa" : 2297420,
					"bwc" : 1558667,
					"fast" : 2,
					"stable" : 1,
					"guard" : 1,
					"middle" : 2,
					"exit" : 2,
					"dir" : 2,
					"pbr" : 0.00034199999999999996,
					"pbg" : 0.000147,
					"pbm" : 0.000147,
					"pbe" : 0.000731,
					"countries" : [
						{
							"cc" : "SE",
							"relay" : 2,
							"bwa" : 2297420,
							"bwc" : 1558667,
							"fast" : 2,
							"stable" : 1,
							"guard" : 1,
							"middle" : 2,
							"exit" : 2,
							"dir" : 2,
							"pbr" : 0.00034199999999999996,
							"pbg" : 0.000147,
							"pbm" : 0.000147,
							"pbe" : 0.000731
						}
					]
				},
				{
					"as" : 13618,
					"relay" : 1,
					"bwa" : 1024000,
					"bwc" : 813369,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000194,
					"pbg" : 0,
					"pbm" : 0.000581,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 1024000,
							"bwc" : 813369,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000194,
							"pbg" : 0,
							"pbm" : 0.000581,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 41557,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 18631,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0.000025,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "MK",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 18631,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0.000025,
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
					"pbr" : 0.002046,
					"pbg" : 0.001183,
					"pbm" : 0.001182,
					"pbe" : 0.003772,
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
							"pbr" : 0.002046,
							"pbg" : 0.001183,
							"pbm" : 0.001182,
							"pbe" : 0.003772
						}
					]
				},
				{
					"as" : 51059,
					"relay" : 1,
					"bwa" : 81920,
					"bwc" : 16300,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000007,
					"pbg" : 0,
					"pbm" : 0.000021,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 1,
							"bwa" : 81920,
							"bwc" : 16300,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000007,
							"pbg" : 0,
							"pbm" : 0.000021,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 19975,
					"relay" : 1,
					"bwa" : 524288,
					"bwc" : 431336,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.00008,
					"pbg" : 0.000047,
					"pbm" : 0.000046,
					"pbe" : 0.000148,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 524288,
							"bwc" : 431336,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.00008,
							"pbg" : 0.000047,
							"pbm" : 0.000046,
							"pbe" : 0.000148
						}
					]
				},
				{
					"as" : 679,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 25392,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.00001,
					"pbg" : 0,
					"pbm" : 0.000031,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "AT",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 25392,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.00001,
							"pbg" : 0,
							"pbm" : 0.000031,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 40244,
					"relay" : 1,
					"bwa" : 204800,
					"bwc" : 178890,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.00002,
					"pbg" : 0.000041,
					"pbm" : 0.000019,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 204800,
							"bwc" : 178890,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.00002,
							"pbg" : 0.000041,
							"pbm" : 0.000019,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 33387,
					"relay" : 1,
					"bwa" : 2405592,
					"bwc" : 1001405,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000903,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.002709,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 2405592,
							"bwc" : 1001405,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000903,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.002709
						}
					]
				},
				{
					"as" : 47155,
					"relay" : 1,
					"bwa" : 128284,
					"bwc" : 107674,
					"fast" : 1,
					"stable" : 0,
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
							"cc" : "SE",
							"relay" : 1,
							"bwa" : 128284,
							"bwc" : 107674,
							"fast" : 1,
							"stable" : 0,
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
					"as" : 50503,
					"relay" : 1,
					"bwa" : 66546,
					"bwc" : 1818,
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
							"bwc" : 1818,
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
					"as" : 18059,
					"relay" : 1,
					"bwa" : 23999,
					"bwc" : 247,
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
							"bwc" : 247,
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
					"as" : 12177,
					"relay" : 1,
					"bwa" : 67132,
					"bwc" : 14653,
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
							"bwa" : 67132,
							"bwc" : 14653,
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
					"as" : 9082,
					"relay" : 1,
					"bwa" : 512000,
					"bwc" : 432029,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000099,
					"pbg" : 0.000057,
					"pbm" : 0.000057,
					"pbe" : 0.000183,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 512000,
							"bwc" : 432029,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000099,
							"pbg" : 0.000057,
							"pbm" : 0.000057,
							"pbe" : 0.000183
						}
					]
				},
				{
					"as" : 29685,
					"relay" : 1,
					"bwa" : 266240,
					"bwc" : 194973,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000065,
					"pbg" : 0.000133,
					"pbm" : 0.000061,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "UA",
							"relay" : 1,
							"bwa" : 266240,
							"bwc" : 194973,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000065,
							"pbg" : 0.000133,
							"pbm" : 0.000061,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 2529,
					"relay" : 2,
					"bwa" : 92160,
					"bwc" : 15780,
					"fast" : 2,
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
							"bwc" : 15780,
							"fast" : 2,
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
					"as" : 197301,
					"relay" : 1,
					"bwa" : 153600,
					"bwc" : 79487,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000019,
					"pbg" : 0,
					"pbm" : 0.000058,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DK",
							"relay" : 1,
							"bwa" : 153600,
							"bwc" : 79487,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000019,
							"pbg" : 0,
							"pbm" : 0.000058,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 20375,
					"relay" : 1,
					"bwa" : 245000,
					"bwc" : 98739,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000021,
					"pbg" : 0.000044,
					"pbm" : 0.00002,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "CA",
							"relay" : 1,
							"bwa" : 245000,
							"bwc" : 98739,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000021,
							"pbg" : 0.000044,
							"pbm" : 0.00002,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 47165,
					"relay" : 1,
					"bwa" : 1092608,
					"bwc" : 0,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000153,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.00046,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 1092608,
							"bwc" : 0,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000153,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.00046
						}
					]
				},
				{
					"as" : 18047,
					"relay" : 1,
					"bwa" : 30720,
					"bwc" : 1073,
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
							"bwc" : 1073,
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
					"as" : 17931,
					"relay" : 1,
					"bwa" : 92720,
					"bwc" : 9754,
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
							"cc" : "JP",
							"relay" : 1,
							"bwa" : 92720,
							"bwc" : 9754,
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
					"as" : 12530,
					"relay" : 1,
					"bwa" : 548964,
					"bwc" : 192050,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000044,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000133,
					"countries" : [
						{
							"cc" : "UA",
							"relay" : 1,
							"bwa" : 548964,
							"bwc" : 192050,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000044,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000133
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
					"as" : 51399,
					"relay" : 1,
					"bwa" : 2048000,
					"bwc" : 1540315,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000115,
					"pbg" : 0.000237,
					"pbm" : 0.000108,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "PL",
							"relay" : 1,
							"bwa" : 2048000,
							"bwc" : 1540315,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000115,
							"pbg" : 0.000237,
							"pbm" : 0.000108,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 42093,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 20796,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000008,
					"pbg" : 0,
					"pbm" : 0.000025,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 20796,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000008,
							"pbg" : 0,
							"pbm" : 0.000025,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 41371,
					"relay" : 1,
					"bwa" : 80674,
					"bwc" : 867,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000002,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000005,
					"countries" : [
						{
							"cc" : "KZ",
							"relay" : 1,
							"bwa" : 80674,
							"bwc" : 867,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
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
					"as" : 49120,
					"relay" : 1,
					"bwa" : 1024000,
					"bwc" : 758885,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000223,
					"pbg" : 0.00046,
					"pbm" : 0.000209,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 1024000,
							"bwc" : 758885,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000223,
							"pbg" : 0.00046,
							"pbm" : 0.000209,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 12357,
					"relay" : 1,
					"bwa" : 20480,
					"bwc" : 396,
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
							"bwc" : 396,
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
					"as" : 29278,
					"relay" : 1,
					"bwa" : 204800,
					"bwc" : 81999,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000051,
					"pbg" : 0.000106,
					"pbm" : 0.000048,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "HU",
							"relay" : 1,
							"bwa" : 204800,
							"bwc" : 81999,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000051,
							"pbg" : 0.000106,
							"pbm" : 0.000048,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 20597,
					"relay" : 1,
					"bwa" : 2432836,
					"bwc" : 1156703,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000544,
					"pbg" : 0.001123,
					"pbm" : 0.00051,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 2432836,
							"bwc" : 1156703,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000544,
							"pbg" : 0.001123,
							"pbm" : 0.00051,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 4788,
					"relay" : 2,
					"bwa" : 74110,
					"bwc" : 15856,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000003,
					"pbg" : 0,
					"pbm" : 0.000009,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "MY",
							"relay" : 2,
							"bwa" : 74110,
							"bwc" : 15856,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 2,
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
					"as" : 48635,
					"relay" : 1,
					"bwa" : 1298198,
					"bwc" : 773569,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000295,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000886,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 1,
							"bwa" : 1298198,
							"bwc" : 773569,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000295,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000886
						}
					]
				},
				{
					"as" : 21412,
					"relay" : 1,
					"bwa" : 153600,
					"bwc" : 45853,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000015,
					"pbg" : 0,
					"pbm" : 0.000046,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "LT",
							"relay" : 1,
							"bwa" : 153600,
							"bwc" : 45853,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000015,
							"pbg" : 0,
							"pbm" : 0.000046,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 8455,
					"relay" : 2,
					"bwa" : 512000,
					"bwc" : 396484,
					"fast" : 2,
					"stable" : 2,
					"guard" : 2,
					"middle" : 2,
					"exit" : 0,
					"dir" : 2,
					"pbr" : 0.000083,
					"pbg" : 0.000172,
					"pbm" : 0.000078,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 2,
							"bwa" : 512000,
							"bwc" : 396484,
							"fast" : 2,
							"stable" : 2,
							"guard" : 2,
							"middle" : 2,
							"exit" : 0,
							"dir" : 2,
							"pbr" : 0.000083,
							"pbg" : 0.000172,
							"pbm" : 0.000078,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 31148,
					"relay" : 2,
					"bwa" : 237568,
					"bwc" : 45963,
					"fast" : 1,
					"stable" : 2,
					"guard" : 1,
					"middle" : 2,
					"exit" : 2,
					"dir" : 1,
					"pbr" : 0.000037,
					"pbg" : 0.00002,
					"pbm" : 0.00002,
					"pbe" : 0.000072,
					"countries" : [
						{
							"cc" : "UA",
							"relay" : 2,
							"bwa" : 237568,
							"bwc" : 45963,
							"fast" : 1,
							"stable" : 2,
							"guard" : 1,
							"middle" : 2,
							"exit" : 2,
							"dir" : 1,
							"pbr" : 0.000037,
							"pbg" : 0.00002,
							"pbm" : 0.00002,
							"pbe" : 0.000072
						}
					]
				},
				{
					"as" : 57378,
					"relay" : 1,
					"bwa" : 178227,
					"bwc" : 89774,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000022,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000067,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 178227,
							"bwc" : 89774,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000022,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000067
						}
					]
				},
				{
					"as" : 48361,
					"relay" : 2,
					"bwa" : 2007884,
					"bwc" : 351479,
					"fast" : 2,
					"stable" : 1,
					"guard" : 0,
					"middle" : 2,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.00014,
					"pbg" : 0,
					"pbm" : 0.000221,
					"pbe" : 0.000197,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 2,
							"bwa" : 2007884,
							"bwc" : 351479,
							"fast" : 2,
							"stable" : 1,
							"guard" : 0,
							"middle" : 2,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.00014,
							"pbg" : 0,
							"pbm" : 0.000221,
							"pbe" : 0.000197
						}
					]
				},
				{
					"as" : 38731,
					"relay" : 1,
					"bwa" : 409600,
					"bwc" : 174758,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000024,
					"pbg" : 0.000014,
					"pbm" : 0.000014,
					"pbe" : 0.000044,
					"countries" : [
						{
							"cc" : "VN",
							"relay" : 1,
							"bwa" : 409600,
							"bwc" : 174758,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000024,
							"pbg" : 0.000014,
							"pbm" : 0.000014,
							"pbe" : 0.000044
						}
					]
				},
				{
					"as" : 26347,
					"relay" : 1,
					"bwa" : 1572864,
					"bwc" : 939130,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000571,
					"pbg" : 0.001177,
					"pbm" : 0.000535,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 1572864,
							"bwc" : 939130,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000571,
							"pbg" : 0.001177,
							"pbm" : 0.000535,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 5580,
					"relay" : 1,
					"bwa" : 4219684,
					"bwc" : 3795665,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.001149,
					"pbg" : 0.00237,
					"pbm" : 0.001077,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 1,
							"bwa" : 4219684,
							"bwc" : 3795665,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.001149,
							"pbg" : 0.00237,
							"pbm" : 0.001077,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 23089,
					"relay" : 1,
					"bwa" : 129214,
					"bwc" : 39616,
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
							"cc" : "US",
							"relay" : 1,
							"bwa" : 129214,
							"bwc" : 39616,
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
					"as" : 42893,
					"relay" : 1,
					"bwa" : 7105464,
					"bwc" : 4135415,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.001861,
					"pbg" : 0,
					"pbm" : 0.005582,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 7105464,
							"bwc" : 4135415,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.001861,
							"pbg" : 0,
							"pbm" : 0.005582,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 16586,
					"relay" : 1,
					"bwa" : 6341,
					"bwc" : 149,
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
							"cc" : "US",
							"relay" : 1,
							"bwa" : 6341,
							"bwc" : 149,
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
					"as" : 18618,
					"relay" : 1,
					"bwa" : 32336,
					"bwc" : 2944,
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
							"bwa" : 32336,
							"bwc" : 2944,
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
					"as" : 12025,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 12290,
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
							"bwc" : 12290,
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
					"as" : 12843,
					"relay" : 1,
					"bwa" : 512000,
					"bwc" : 494463,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000091,
					"pbg" : 0.000188,
					"pbm" : 0.000086,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 1,
							"bwa" : 512000,
							"bwc" : 494463,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000091,
							"pbg" : 0.000188,
							"pbm" : 0.000086,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 2847,
					"relay" : 1,
					"bwa" : 6291456,
					"bwc" : 6034182,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.003015,
					"pbg" : 0.006219,
					"pbm" : 0.002825,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "LT",
							"relay" : 1,
							"bwa" : 6291456,
							"bwc" : 6034182,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.003015,
							"pbg" : 0.006219,
							"pbm" : 0.002825,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 22747,
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
					"as" : 55897,
					"relay" : 1,
					"bwa" : 1048576,
					"bwc" : 876530,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000101,
					"pbg" : 0.000208,
					"pbm" : 0.000095,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "JP",
							"relay" : 1,
							"bwa" : 1048576,
							"bwc" : 876530,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000101,
							"pbg" : 0.000208,
							"pbm" : 0.000095,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 1403,
					"relay" : 1,
					"bwa" : 76800,
					"bwc" : 10788,
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
							"bwc" : 10788,
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
					"as" : 12732,
					"relay" : 1,
					"bwa" : 14048271,
					"bwc" : 11294089,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.003984,
					"pbg" : 0.002303,
					"pbm" : 0.002303,
					"pbe" : 0.007346,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 1,
							"bwa" : 14048271,
							"bwc" : 11294089,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.003984,
							"pbg" : 0.002303,
							"pbm" : 0.002303,
							"pbe" : 0.007346
						}
					]
				},
				{
					"as" : 31250,
					"relay" : 1,
					"bwa" : 444617,
					"bwc" : 109024,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000031,
					"pbg" : 0,
					"pbm" : 0.000094,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "BG",
							"relay" : 1,
							"bwa" : 444617,
							"bwc" : 109024,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000031,
							"pbg" : 0,
							"pbm" : 0.000094,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 29017,
					"relay" : 1,
					"bwa" : 153600,
					"bwc" : 61061,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000033,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.0001,
					"countries" : [
						{
							"cc" : "GB",
							"relay" : 1,
							"bwa" : 153600,
							"bwc" : 61061,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000033,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.0001
						}
					]
				},
				{
					"as" : 1706,
					"relay" : 1,
					"bwa" : 655360,
					"bwc" : 442169,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000147,
					"pbg" : 0.000304,
					"pbm" : 0.000138,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 655360,
							"bwc" : 442169,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000147,
							"pbg" : 0.000304,
							"pbm" : 0.000138,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 42652,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 22788,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.00001,
					"pbg" : 0,
					"pbm" : 0.000031,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "DE",
							"relay" : 1,
							"bwa" : 102400,
							"bwc" : 22788,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.00001,
							"pbg" : 0,
							"pbm" : 0.000031,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 36024,
					"relay" : 2,
					"bwa" : 46080,
					"bwc" : 12166,
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
							"bwc" : 12166,
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
					"as" : 20880,
					"relay" : 1,
					"bwa" : 132583,
					"bwc" : 29215,
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
							"bwc" : 29215,
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
					"as" : 9365,
					"relay" : 1,
					"bwa" : 409600,
					"bwc" : 168611,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000031,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000094,
					"countries" : [
						{
							"cc" : "JP",
							"relay" : 1,
							"bwa" : 409600,
							"bwc" : 168611,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000031,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000094
						}
					]
				},
				{
					"as" : 48416,
					"relay" : 1,
					"bwa" : 196608,
					"bwc" : 107046,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.00003,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000089,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 196608,
							"bwc" : 107046,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.00003,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000089
						}
					]
				},
				{
					"as" : 46841,
					"relay" : 1,
					"bwa" : 1048576,
					"bwc" : 993120,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000311,
					"pbg" : 0.000641,
					"pbm" : 0.000291,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 1048576,
							"bwc" : 993120,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000311,
							"pbg" : 0.000641,
							"pbm" : 0.000291,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 19662,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 24322,
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
							"bwc" : 24322,
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
					"as" : 7796,
					"relay" : 1,
					"bwa" : 256000,
					"bwc" : 140348,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000063,
					"pbg" : 0.000036,
					"pbm" : 0.000036,
					"pbe" : 0.000116,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 256000,
							"bwc" : 140348,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000063,
							"pbg" : 0.000036,
							"pbm" : 0.000036,
							"pbe" : 0.000116
						}
					]
				},
				{
					"as" : 18566,
					"relay" : 1,
					"bwa" : 40960,
					"bwc" : 515,
					"fast" : 1,
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
							"bwc" : 515,
							"fast" : 1,
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
					"as" : 35411,
					"relay" : 1,
					"bwa" : 4610,
					"bwc" : 674,
					"fast" : 0,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000022,
					"pbg" : 0,
					"pbm" : 0.000065,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 4610,
							"bwc" : 674,
							"fast" : 0,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000022,
							"pbg" : 0,
							"pbm" : 0.000065,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 41715,
					"relay" : 1,
					"bwa" : 27613,
					"bwc" : 2315,
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
							"bwc" : 2315,
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
					"as" : 51969,
					"relay" : 1,
					"bwa" : 2356414,
					"bwc" : 732052,
					"fast" : 1,
					"stable" : 0,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.001152,
					"pbg" : 0.000666,
					"pbm" : 0.000666,
					"pbe" : 0.002124,
					"countries" : [
						{
							"cc" : "IS",
							"relay" : 1,
							"bwa" : 2356414,
							"bwc" : 732052,
							"fast" : 1,
							"stable" : 0,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.001152,
							"pbg" : 0.000666,
							"pbm" : 0.000666,
							"pbe" : 0.002124
						}
					]
				},
				{
					"as" : 28917,
					"relay" : 1,
					"bwa" : 1408000,
					"bwc" : 0,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000157,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000471,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 1408000,
							"bwc" : 0,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000157,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000471
						}
					]
				},
				{
					"as" : 40092,
					"relay" : 1,
					"bwa" : 131072,
					"bwc" : 25901,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000011,
					"pbg" : 0,
					"pbm" : 0.000034,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 131072,
								"bwc" : 25901,
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
					"as" : 2012,
					"relay" : 1,
					"bwa" : 204800,
					"bwc" : 202375,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.00005,
					"pbg" : 0.000102,
					"pbm" : 0.000046,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "HU",
							"relay" : 1,
							"bwa" : 204800,
							"bwc" : 202375,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.00005,
							"pbg" : 0.000102,
							"pbm" : 0.000046,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 15763,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 1236,
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
							"bwc" : 1236,
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
					"as" : 36375,
					"relay" : 1,
					"bwa" : 204800,
					"bwc" : 174784,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000044,
					"pbg" : 0.00009,
					"pbm" : 0.000041,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 204800,
							"bwc" : 174784,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000044,
							"pbg" : 0.00009,
							"pbm" : 0.000041,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 40676,
					"relay" : 1,
					"bwa" : 1508717,
					"bwc" : 795232,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000372,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.001117,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 1508717,
							"bwc" : 795232,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000372,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.001117
						}
					]
				},
				{
					"as" : 1280,
					"relay" : 1,
					"bwa" : 6553600,
					"bwc" : 5734989,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.002123,
					"pbg" : 0.004379,
					"pbm" : 0.001989,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 6553600,
							"bwc" : 5734989,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.002123,
							"pbg" : 0.004379,
							"pbm" : 0.001989,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 5495,
					"relay" : 1,
					"bwa" : 71680,
					"bwc" : 32662,
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
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 71680,
							"bwc" : 32662,
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
					"as" : 8926,
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
							"cc" : "MD",
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
					"as" : 5603,
					"relay" : 1,
					"bwa" : 716800,
					"bwc" : 410564,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000113,
					"pbg" : 0,
					"pbm" : 0.00034,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "SI",
							"relay" : 1,
							"bwa" : 716800,
							"bwc" : 410564,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000113,
							"pbg" : 0,
							"pbm" : 0.00034,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 11557,
					"relay" : 1,
					"bwa" : 10093050,
					"bwc" : 5595541,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.001984,
					"pbg" : 0.004093,
					"pbm" : 0.001859,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 1,
							"bwa" : 10093050,
							"bwc" : 5595541,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.001984,
							"pbg" : 0.004093,
							"pbm" : 0.001859,
							"pbe" : 0
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
					"pbr" : 0.000315,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000946,
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
							"pbr" : 0.000315,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000946
						}
					]
				},
				{
					"as" : 27823,
					"relay" : 1,
					"bwa" : 409600,
					"bwc" : 246404,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 0,
					"pbr" : 0.000098,
					"pbg" : 0.000057,
					"pbm" : 0.000057,
					"pbe" : 0.000181,
					"countries" : [
						{
							"cc" : "AR",
							"relay" : 1,
							"bwa" : 409600,
							"bwc" : 246404,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 0,
							"pbr" : 0.000098,
							"pbg" : 0.000057,
							"pbm" : 0.000057,
							"pbe" : 0.000181
						}
					]
				},
				{
					"as" : 19108,
					"relay" : 2,
					"bwa" : 855571,
					"bwc" : 149218,
					"fast" : 2,
					"stable" : 1,
					"guard" : 0,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000064,
					"pbg" : 0,
					"pbm" : 0.000053,
					"pbe" : 0.000138,
					"countries" : [
						{
							"cc" : "US",
							"relay" : 2,
							"bwa" : 855571,
							"bwc" : 149218,
							"fast" : 2,
							"stable" : 1,
							"guard" : 0,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000064,
							"pbg" : 0,
							"pbm" : 0.000053,
							"pbe" : 0.000138
						}
					]
				},
				{
					"as" : 48031,
					"relay" : 2,
					"bwa" : 7140837,
					"bwc" : 2367237,
					"fast" : 2,
					"stable" : 1,
					"guard" : 1,
					"middle" : 2,
					"exit" : 2,
					"dir" : 2,
					"pbr" : 0.000195,
					"pbg" : 0.000106,
					"pbm" : 0.000106,
					"pbe" : 0.00037499999999999995,
					"countries" : [
						{
							"cc" : "UA",
							"relay" : 2,
							"bwa" : 7140837,
							"bwc" : 2367237,
							"fast" : 2,
							"stable" : 1,
							"guard" : 1,
							"middle" : 2,
							"exit" : 2,
							"dir" : 2,
							"pbr" : 0.000195,
							"pbg" : 0.000106,
							"pbm" : 0.000106,
							"pbe" : 0.00037499999999999995
						}
					]
				},
				{
					"as" : 41661,
					"relay" : 1,
					"bwa" : 40960,
					"bwc" : 483,
					"fast" : 1,
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
							"bwc" : 483,
							"fast" : 1,
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
					"as" : 4765,
					"relay" : 1,
					"bwa" : 86885,
					"bwc" : 21569,
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
							"bwc" : 21569,
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
					"as" : 47206,
					"relay" : 2,
					"bwa" : 219184,
					"bwc" : 47788,
					"fast" : 2,
					"stable" : 1,
					"guard" : 0,
					"middle" : 2,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000016000000000000003,
					"pbg" : 0,
					"pbm" : 0.000047000000000000004,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "FR",
							"relay" : 2,
							"bwa" : 219184,
							"bwc" : 47788,
							"fast" : 2,
							"stable" : 1,
							"guard" : 0,
							"middle" : 2,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000016000000000000003,
							"pbg" : 0,
							"pbm" : 0.000047000000000000004,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 4685,
					"relay" : 1,
					"bwa" : 307200,
					"bwc" : 217023,
					"fast" : 1,
					"stable" : 1,
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
							"cc" : "JP",
							"relay" : 1,
							"bwa" : 307200,
							"bwc" : 217023,
							"fast" : 1,
							"stable" : 1,
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
					"as" : 15969,
					"relay" : 1,
					"bwa" : 614400,
					"bwc" : 430512,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000121,
					"pbg" : 0.00025,
					"pbm" : 0.000114,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "PL",
							"relay" : 1,
							"bwa" : 614400,
							"bwc" : 430512,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000121,
							"pbg" : 0.00025,
							"pbm" : 0.000114,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 12676,
					"relay" : 1,
					"bwa" : 30720,
					"bwc" : 14770,
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
							"bwc" : 14770,
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
					"as" : 20640,
					"relay" : 1,
					"bwa" : 48157,
					"bwc" : 3986,
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
							"cc" : "DE",
							"relay" : 1,
							"bwa" : 48157,
							"bwc" : 3986,
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
					"as" : 25071,
					"relay" : 1,
					"bwa" : 218924,
					"bwc" : 63733,
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
							"cc" : "UA",
							"relay" : 1,
							"bwa" : 218924,
							"bwc" : 63733,
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
					"as" : 12436,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 50142,
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
							"bwc" : 50142,
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
					"as" : 52284,
					"relay" : 1,
					"bwa" : 65536,
					"bwc" : 27991,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000004,
					"pbg" : 0,
					"pbm" : 0.000011,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "PA",
							"relay" : 1,
							"bwa" : 65536,
							"bwc" : 27991,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000004,
							"pbg" : 0,
							"pbm" : 0.000011,
							"pbe" : 0
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
					"pbr" : 0.000055,
					"pbg" : 0,
					"pbm" : 0.000164,
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
							"pbr" : 0.000055,
							"pbg" : 0,
							"pbm" : 0.000164,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 28685,
					"relay" : 1,
					"bwa" : 2097152,
					"bwc" : 1893353,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000594,
					"pbg" : 0.000343,
					"pbm" : 0.000343,
					"pbe" : 0.001095,
					"countries" : [
						{
							"cc" : "NL",
							"relay" : 1,
							"bwa" : 2097152,
							"bwc" : 1893353,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000594,
							"pbg" : 0.000343,
							"pbm" : 0.000343,
							"pbe" : 0.001095
						}
					]
				},
				{
					"as" : 25405,
					"relay" : 1,
					"bwa" : 65536,
					"bwc" : 0,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000004,
					"pbg" : 0,
					"pbm" : 0.000011,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 65536,
							"bwc" : 0,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000004,
							"pbg" : 0,
							"pbm" : 0.000011,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 25255,
					"relay" : 1,
					"bwa" : 1007526,
					"bwc" : 462041,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 0,
					"pbr" : 0.000263,
					"pbg" : 0,
					"pbm" : 0.000789,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "AT",
							"relay" : 1,
							"bwa" : 1007526,
							"bwc" : 462041,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
							"exit" : 0,
							"dir" : 0,
							"pbr" : 0.000263,
							"pbg" : 0,
							"pbm" : 0.000789,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 12353,
					"relay" : 1,
					"bwa" : 196608,
					"bwc" : 5105,
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
							"bwc" : 5105,
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
					"as" : 28812,
					"relay" : 1,
					"bwa" : 256028,
					"bwc" : 35304,
					"fast" : 1,
					"stable" : 0,
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
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 256028,
							"bwc" : 35304,
							"fast" : 1,
							"stable" : 0,
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
					"as" : 34549,
					"relay" : 1,
					"bwa" : 51200,
					"bwc" : 27629,
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
							"bwc" : 27629,
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
					"as" : 13118,
					"relay" : 1,
					"bwa" : 196608,
					"bwc" : 41343,
					"fast" : 1,
					"stable" : 0,
					"guard" : 0,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000016,
					"pbg" : 0,
					"pbm" : 0.000048,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 196608,
							"bwc" : 41343,
							"fast" : 1,
							"stable" : 0,
							"guard" : 0,
							"middle" : 1,
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
					"as" : 38657,
					"relay" : 1,
					"bwa" : 98304,
					"bwc" : 26706,
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
							"bwc" : 26706,
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
					"as" : 8866,
					"relay" : 1,
					"bwa" : 512000,
					"bwc" : 214528,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.000083,
					"pbg" : 0.000048,
					"pbm" : 0.000048,
					"pbe" : 0.000152,
					"countries" : [
						{
							"cc" : "BG",
							"relay" : 1,
							"bwa" : 512000,
							"bwc" : 214528,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.000083,
							"pbg" : 0.000048,
							"pbm" : 0.000048,
							"pbe" : 0.000152
						}
					]
				},
				{
					"as" : 55,
					"relay" : 1,
					"bwa" : 102400,
					"bwc" : 8760,
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
							"bwc" : 8760,
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
					"as" : 44432,
					"relay" : 1,
					"bwa" : 1048576,
					"bwc" : 787812,
					"fast" : 1,
					"stable" : 1,
					"guard" : 1,
					"middle" : 1,
					"exit" : 0,
					"dir" : 1,
					"pbr" : 0.000277,
					"pbg" : 0.000571,
					"pbm" : 0.000259,
					"pbe" : 0,
					"countries" : [
						{
							"cc" : "IS",
							"relay" : 1,
							"bwa" : 1048576,
							"bwc" : 787812,
							"fast" : 1,
							"stable" : 1,
							"guard" : 1,
							"middle" : 1,
							"exit" : 0,
							"dir" : 1,
							"pbr" : 0.000277,
							"pbg" : 0.000571,
							"pbm" : 0.000259,
							"pbe" : 0
						}
					]
				},
				{
					"as" : 47241,
					"relay" : 1,
					"bwa" : 1219584,
					"bwc" : 727453,
					"fast" : 1,
					"stable" : 1,
					"guard" : 0,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1,
					"pbr" : 0.00014,
					"pbg" : 0,
					"pbm" : 0,
					"pbe" : 0.000419,
					"countries" : [
						{
							"cc" : "RU",
							"relay" : 1,
							"bwa" : 1219584,
							"bwc" : 727453,
							"fast" : 1,
							"stable" : 1,
							"guard" : 0,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1,
							"pbr" : 0.00014,
							"pbg" : 0,
							"pbm" : 0,
							"pbe" : 0.000419
						}
					]
				}
			]
		}
	}