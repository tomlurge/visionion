//tl@h:~/tor$ mongo
//MongoDB shell version: 2.4.8
//connecting to: test
//> use visionion
//switched to db visionion
//> db.facts.findOne({"_id":"2013-04-03 23"})

{
	"_id" : "2013-04-03 23",
	"value" : {
		"date" : "2013-04-03 23",
		"span" : "1",
		"updt" : "2013-08-14T09:23:45.302Z",
		"countries" : [
			{
				"country" : "HU",
				"relay" : 19,
				"bwa" : 27819291,
				"bwc" : 17985246,
				"roles" : {
					"guard" : 7,
					"middle" : 19,
					"dir" : 15,
					"exit" : 4
				},
				"flags" : {
					"fastStable" : 11,
					"fast" : 8
				},
				"probs" : {
					"pbr" : 0.004826999999999999,
					"pbg" : 0.008239,
					"pbm" : 0.004475,
					"pbe" : 0.0017650000000000003
				},
				"osv" : {
					"linux" : 15,
					"windows" : 4
				},
				"tsv" : {
					"v023" : 18,
					"v022" : 1
				},
				"autosys" : [
					{
						"as" : 2012,
						"cuont" : 1
					},
					{
						"as" : 29278,
						"cuont" : 1
					},
					{
						"as" : 56322,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6830,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 34655,
						"cuont" : 1
					},
					{
						"as" : 43711,
						"cuont" : 1
					},
					{
						"as" : 5483,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 42964,
						"cuont" : 1
					},
					{
						"as" : 15467,
						"cuont" : 1
					}
				],
				"cbcc" : 15,
				"crcc" : 2477
			},
			{
				"country" : "FR",
				"relay" : 184,
				"bwa" : 188390421,
				"bwc" : 128755697,
				"roles" : {
					"guard" : 63,
					"middle" : 184,
					"exit" : 56,
					"dir" : 99
				},
				"flags" : {
					"fastStable" : 100,
					"stable" : 26,
					"notFastStable" : 13,
					"fast" : 45
				},
				"probs" : {
					"pbr" : 0.05608100000000005,
					"pbg" : 0.052663,
					"pbm" : 0.06717999999999998,
					"pbe" : 0.04838800000000002
				},
				"osv" : {
					"linux" : 150,
					"darwin" : 6,
					"windows" : 21,
					"freebsd" : 3
				},
				"tsv" : {
					"v023" : 121,
					"v022" : 54,
					"v024" : 6,
					"v025" : 3
				},
				"autosys" : [
					{
						"as" : 16276,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12322,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 29169,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 15557,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 5410,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 21502,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 20766,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 39389,
						"cuont" : 1
					},
					{
						"as" : 50618,
						"cuont" : 1
					},
					{
						"as" : 3215,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 35238,
						"cuont" : 1
					},
					{
						"as" : 35655,
						"cuont" : 1
					},
					{
						"as" : 12626,
						"cuont" : 1
					},
					{
						"as" : 31555,
						"cuont" : 1
					},
					{
						"as" : 13193,
						"cuont" : 1
					},
					{
						"as" : 196689,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8228,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 197422,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 35632,
						"cuont" : 1
					},
					{
						"as" : 8218,
						"cuont" : 1
					},
					{
						"as" : 41334,
						"cuont" : 1
					},
					{
						"as" : 197922,
						"cuont" : 1
					},
					{
						"as" : 47206,
						"cuont" : 1,
						"count" : NaN
					}
				],
				"cbcc" : 112,
				"crcc" : 60146
			},
			{
				"country" : "DE",
				"relay" : 637,
				"bwa" : 790173377,
				"bwc" : 538094182,
				"roles" : {
					"guard" : 252,
					"middle" : 637,
					"exit" : 95,
					"dir" : 359
				},
				"flags" : {
					"fastStable" : 390,
					"fast" : 184,
					"stable" : 33,
					"notFastStable" : 30,
					"authority" : 2
				},
				"probs" : {
					"pbr" : 0.21823200000000054,
					"pbg" : 0.22619500000000003,
					"pbm" : 0.2645250000000002,
					"pbe" : 0.163994
				},
				"osv" : {
					"linux" : 559,
					"windows" : 45,
					"darwin" : 9,
					"freebsd" : 17
				},
				"tsv" : {
					"v023" : 414,
					"v024" : 64,
					"v022" : 153,
					"v025" : 6
				},
				"autosys" : [
					{
						"as" : 6724,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6805,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 13722,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 24940,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8972,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 3320,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 34011,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 20880,
						"cuont" : 1
					},
					{
						"as" : 31103,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 20773,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 29562,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 31334,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 13184,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 42652,
						"cuont" : 1
					},
					{
						"as" : 198599,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 24961,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12732,
						"cuont" : 1
					},
					{
						"as" : 16202,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 16276,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12843,
						"cuont" : 1
					},
					{
						"as" : 24900,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 29141,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 680,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 3209,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 16265,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 20825,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8767,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 57668,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 34240,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 13237,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8560,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 47447,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8422,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 47692,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 35366,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 39138,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 49855,
						"cuont" : 1
					},
					{
						"as" : 20676,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8881,
						"cuont" : 1
					},
					{
						"as" : 51167,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 197540,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 31100,
						"cuont" : 1
					},
					{
						"as" : 44066,
						"cuont" : 1
					},
					{
						"as" : 15943,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 196714,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 197071,
						"cuont" : 1
					},
					{
						"as" : 31333,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 31078,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12312,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 31400,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 553,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 33984,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 15657,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 31342,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12337,
						"cuont" : 1
					},
					{
						"as" : 56813,
						"cuont" : 1
					},
					{
						"as" : 48039,
						"cuont" : 1
					},
					{
						"as" : 39743,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 50472,
						"cuont" : 1
					},
					{
						"as" : 24956,
						"cuont" : 1
					},
					{
						"as" : 5669,
						"cuont" : 1
					},
					{
						"as" : 4589,
						"cuont" : 1
					},
					{
						"as" : 24989,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 21409,
						"cuont" : 1
					},
					{
						"as" : 33891,
						"cuont" : 1
					},
					{
						"as" : 9145,
						"cuont" : 1
					},
					{
						"as" : 9063,
						"cuont" : 1
					},
					{
						"as" : 30962,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 35244,
						"cuont" : 1
					},
					{
						"as" : 25074,
						"cuont" : 1
					},
					{
						"as" : 13301,
						"cuont" : 1
					},
					{
						"as" : 12898,
						"cuont" : 1
					},
					{
						"as" : 48823,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12897,
						"cuont" : 1
					},
					{
						"as" : 25538,
						"cuont" : 1
					},
					{
						"as" : 34549,
						"cuont" : 1
					},
					{
						"as" : 20640,
						"cuont" : 1
					},
					{
						"as" : 12676,
						"cuont" : 1
					},
					{
						"as" : 15763,
						"cuont" : 1
					}
				],
				"cbcc" : 55,
				"crcc" : 76401
			},
			{
				"country" : "SE",
				"relay" : 106,
				"bwa" : 182135006,
				"bwc" : 131113358,
				"roles" : {
					"middle" : 106,
					"exit" : 30,
					"dir" : 76,
					"guard" : 45
				},
				"flags" : {
					"notFastStable" : 2,
					"fastStable" : 71,
					"fast" : 26,
					"stable" : 7,
					"authority" : 1
				},
				"probs" : {
					"pbm" : 0.03289300000000002,
					"pbr" : 0.04690700000000001,
					"pbe" : 0.05242700000000001,
					"pbg" : 0.055401
				},
				"osv" : {
					"linux" : 78,
					"darwin" : 5,
					"windows" : 13,
					"freebsd" : 9
				},
				"tsv" : {
					"v025" : 1,
					"v022" : 21,
					"v023" : 69,
					"v024" : 15
				},
				"autosys" : [
					{
						"as" : 2119,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 1653,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8473,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 39651,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 57858,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 47155,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12597,
						"cuont" : 1
					},
					{
						"as" : 198093,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 29518,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 3301,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 49770,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 43326,
						"cuont" : 1
					},
					{
						"as" : 42695,
						"cuont" : 1
					},
					{
						"as" : 43948,
						"cuont" : 1
					},
					{
						"as" : 42708,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 50821,
						"cuont" : 1
					},
					{
						"as" : 51815,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 33885,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 2840,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 3292,
						"cuont" : 1
					},
					{
						"as" : 39369,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 13189,
						"cuont" : 1
					},
					{
						"as" : 1257,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 2603,
						"cuont" : 1
					},
					{
						"as" : 39351,
						"cuont" : 1
					},
					{
						"as" : 33837,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 37560,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 35041,
						"cuont" : 1
					},
					{
						"as" : 30880,
						"cuont" : 1
					},
					{
						"as" : 50066,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 44581,
						"cuont" : 1
					},
					{
						"as" : 40475,
						"cuont" : 1
					},
					{
						"as" : 34610,
						"cuont" : 1
					}
				],
				"cbcc" : 57,
				"crcc" : 6189
			},
			{
				"country" : "US",
				"relay" : 941,
				"bwa" : 1083438891,
				"bwc" : 701092079,
				"roles" : {
					"guard" : 264,
					"middle" : 941,
					"exit" : 177,
					"dir" : 606
				},
				"flags" : {
					"fastStable" : 580,
					"fast" : 273,
					"stable" : 51,
					"notFastStable" : 37,
					"authority" : 4
				},
				"probs" : {
					"pbr" : 0.2841149999999998,
					"pbg" : 0.2736409999999996,
					"pbm" : 0.2567169999999998,
					"pbe" : 0.32198100000000013
				},
				"osv" : {
					"linux" : 661,
					"windows" : 178,
					"freebsd" : 32,
					"darwin" : 46
				},
				"tsv" : {
					"v022" : 189,
					"v024" : 73,
					"v023" : 671,
					"v025" : 8
				},
				"autosys" : [
					{
						"as" : 53667,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 7922,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 40092,
						"cuont" : 1
					},
					{
						"as" : 7132,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 7029,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8001,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6389,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 29761,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 13768,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 18566,
						"cuont" : 1
					},
					{
						"as" : 7796,
						"cuont" : 1
					},
					{
						"as" : 209,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 46841,
						"cuont" : 1
					},
					{
						"as" : 7018,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 36351,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 25795,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6939,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 19262,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 25780,
						"cuont" : 1
					},
					{
						"as" : 36024,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 32875,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 25653,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 14,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 23148,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 21844,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 3842,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 1706,
						"cuont" : 1
					},
					{
						"as" : 11427,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6128,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 22219,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 22747,
						"cuont" : 1
					},
					{
						"as" : 20115,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 1312,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 46457,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 30058,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12025,
						"cuont" : 1
					},
					{
						"as" : 18618,
						"cuont" : 1
					},
					{
						"as" : 40156,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 14618,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 174,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6079,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 11403,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 22773,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 23089,
						"cuont" : 1
					},
					{
						"as" : 46375,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 5650,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 26347,
						"cuont" : 1
					},
					{
						"as" : 30693,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 10796,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 16904,
						"cuont" : 1
					},
					{
						"as" : 6315,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12177,
						"cuont" : 1
					},
					{
						"as" : 30496,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 46652,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 21788,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 16718,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 33387,
						"cuont" : 1
					},
					{
						"as" : 16652,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 40244,
						"cuont" : 1
					},
					{
						"as" : 3651,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 19975,
						"cuont" : 1
					},
					{
						"as" : 3,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 16509,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 20454,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 13618,
						"cuont" : 1
					},
					{
						"as" : 36352,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 3356,
						"cuont" : 1
					},
					{
						"as" : 30633,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 1785,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 29854,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 32220,
						"cuont" : 1
					},
					{
						"as" : 6528,
						"cuont" : 1
					},
					{
						"as" : 17099,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 32097,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 20001,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 11426,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 17090,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 53264,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 14670,
						"cuont" : 1
					},
					{
						"as" : 46,
						"cuont" : 1
					},
					{
						"as" : 8100,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 18712,
						"cuont" : 1
					},
					{
						"as" : 13647,
						"cuont" : 1
					},
					{
						"as" : 54856,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 40475,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 14987,
						"cuont" : 1
					},
					{
						"as" : 32748,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 18779,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 46925,
						"cuont" : 1
					},
					{
						"as" : 29169,
						"cuont" : 1
					},
					{
						"as" : 11878,
						"cuont" : 1
					},
					{
						"as" : 3595,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 32475,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 55045,
						"cuont" : 1
					},
					{
						"as" : 3722,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 14901,
						"cuont" : 1
					},
					{
						"as" : 46664,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 4385,
						"cuont" : 1
					},
					{
						"as" : 30266,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 10913,
						"cuont" : 1
					},
					{
						"as" : 2044,
						"cuont" : 1
					},
					{
						"as" : 46475,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 30083,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 36492,
						"cuont" : 1
					},
					{
						"as" : 30036,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 33440,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 46193,
						"cuont" : 1
					},
					{
						"as" : 194,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 11351,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 11288,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 20473,
						"cuont" : 1
					},
					{
						"as" : 33604,
						"cuont" : 1
					},
					{
						"as" : 53785,
						"cuont" : 1
					},
					{
						"as" : 23205,
						"cuont" : 1
					},
					{
						"as" : 14536,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 4181,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 47066,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8560,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 34764,
						"cuont" : 1
					},
					{
						"as" : 19994,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 9,
						"cuont" : 1
					},
					{
						"as" : 46687,
						"cuont" : 1
					},
					{
						"as" : 237,
						"cuont" : 1
					},
					{
						"as" : 35017,
						"cuont" : 1
					},
					{
						"as" : 53850,
						"cuont" : 1
					},
					{
						"as" : 19108,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 17183,
						"cuont" : 1
					},
					{
						"as" : 7725,
						"cuont" : 1
					},
					{
						"as" : 11696,
						"cuont" : 1
					},
					{
						"as" : 7753,
						"cuont" : 1
					},
					{
						"as" : 31,
						"cuont" : 1
					},
					{
						"as" : 12180,
						"cuont" : 1
					},
					{
						"as" : 36012,
						"cuont" : 1
					},
					{
						"as" : 33070,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 30176,
						"cuont" : 1
					},
					{
						"as" : 23028,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 5760,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 36223,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 33588,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 701,
						"cuont" : 1
					},
					{
						"as" : 111,
						"cuont" : 1
					},
					{
						"as" : 29873,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 2637,
						"cuont" : 1
					},
					{
						"as" : 11051,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 36252,
						"cuont" : 1
					},
					{
						"as" : 6461,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 21565,
						"cuont" : 1
					},
					{
						"as" : 14517,
						"cuont" : 1
					},
					{
						"as" : 30640,
						"cuont" : 1
					},
					{
						"as" : 36477,
						"cuont" : 1
					},
					{
						"as" : 46816,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 32780,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6364,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 226,
						"cuont" : 1
					},
					{
						"as" : 33363,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 19969,
						"cuont" : 1
					},
					{
						"as" : 33182,
						"cuont" : 1
					},
					{
						"as" : 7377,
						"cuont" : 1
					},
					{
						"as" : 13703,
						"cuont" : 1
					},
					{
						"as" : 14511,
						"cuont" : 1
					},
					{
						"as" : 15003,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8047,
						"cuont" : 1
					},
					{
						"as" : 14051,
						"cuont" : 1
					},
					{
						"as" : 4922,
						"cuont" : 1
					},
					{
						"as" : 54046,
						"cuont" : 1
					},
					{
						"as" : 53340,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 15085,
						"cuont" : 1
					},
					{
						"as" : 19165,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 4565,
						"cuont" : 1
					},
					{
						"as" : 30217,
						"cuont" : 1
					},
					{
						"as" : 10594,
						"cuont" : 1
					},
					{
						"as" : 30475,
						"cuont" : 1
					},
					{
						"as" : 33724,
						"cuont" : 1
					},
					{
						"as" : 11404,
						"cuont" : 1
					},
					{
						"as" : 7065,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12083,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12129,
						"cuont" : 1
					},
					{
						"as" : 26496,
						"cuont" : 1
					},
					{
						"as" : 17019,
						"cuont" : 1
					},
					{
						"as" : 18515,
						"cuont" : 1
					},
					{
						"as" : 12271,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 46844,
						"cuont" : 1
					},
					{
						"as" : 33597,
						"cuont" : 1
					},
					{
						"as" : 27229,
						"cuont" : 1
					},
					{
						"as" : 26914,
						"cuont" : 1
					},
					{
						"as" : 10835,
						"cuont" : 1
					},
					{
						"as" : 16276,
						"cuont" : 1
					},
					{
						"as" : 36025,
						"cuont" : 1
					},
					{
						"as" : 20178,
						"cuont" : 1
					},
					{
						"as" : 19202,
						"cuont" : 1
					},
					{
						"as" : 103,
						"cuont" : 1
					},
					{
						"as" : 13977,
						"cuont" : 1
					},
					{
						"as" : 26934,
						"cuont" : 1
					},
					{
						"as" : 12035,
						"cuont" : 1
					},
					{
						"as" : 73,
						"cuont" : 1
					},
					{
						"as" : 3061,
						"cuont" : 1
					},
					{
						"as" : 18978,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 10508,
						"cuont" : 1
					},
					{
						"as" : 34,
						"cuont" : 1
					},
					{
						"as" : 22772,
						"cuont" : 1
					},
					{
						"as" : 10507,
						"cuont" : 1
					},
					{
						"as" : 20231,
						"cuont" : 1
					},
					{
						"as" : 27553,
						"cuont" : 1
					},
					{
						"as" : 10887,
						"cuont" : 1
					},
					{
						"as" : 26729,
						"cuont" : 1
					},
					{
						"as" : 12231,
						"cuont" : 1
					},
					{
						"as" : 22989,
						"cuont" : 1
					},
					{
						"as" : 16810,
						"cuont" : 1
					},
					{
						"as" : 2701,
						"cuont" : 1
					},
					{
						"as" : 36137,
						"cuont" : 1
					},
					{
						"as" : 23136,
						"cuont" : 1
					},
					{
						"as" : 11398,
						"cuont" : 1
					},
					{
						"as" : 16942,
						"cuont" : 1
					},
					{
						"as" : 19181,
						"cuont" : 1
					},
					{
						"as" : 46261,
						"cuont" : 1
					},
					{
						"as" : 22576,
						"cuont" : 1
					},
					{
						"as" : 40430,
						"cuont" : 1
					},
					{
						"as" : 10489,
						"cuont" : 1
					},
					{
						"as" : 26068,
						"cuont" : 1
					},
					{
						"as" : 29737,
						"cuont" : 1
					},
					{
						"as" : 22030,
						"cuont" : 1
					},
					{
						"as" : 6488,
						"cuont" : 1
					},
					{
						"as" : 23292,
						"cuont" : 1
					},
					{
						"as" : 7459,
						"cuont" : 1
					},
					{
						"as" : 20093,
						"cuont" : 1
					},
					{
						"as" : 11841,
						"cuont" : 1
					},
					{
						"as" : 19366,
						"cuont" : 1
					},
					{
						"as" : 36850,
						"cuont" : 1
					},
					{
						"as" : 29933,
						"cuont" : 1
					},
					{
						"as" : 23387,
						"cuont" : 1
					},
					{
						"as" : 29859,
						"cuont" : 1
					},
					{
						"as" : 47069,
						"cuont" : 1
					},
					{
						"as" : 11557,
						"cuont" : 1
					},
					{
						"as" : 1280,
						"cuont" : 1
					},
					{
						"as" : 40676,
						"cuont" : 1
					},
					{
						"as" : 36375,
						"cuont" : 1
					},
					{
						"as" : 55,
						"cuont" : 1
					},
					{
						"as" : 167,
						"cuont" : 1
					}
				],
				"cbcc" : 399,
				"crcc" : 144474
			},
			{
				"country" : "JP",
				"relay" : 43,
				"bwa" : 14791829,
				"bwc" : 6010456,
				"roles" : {
					"middle" : 43,
					"dir" : 26,
					"exit" : 6,
					"guard" : 10
				},
				"flags" : {
					"fastStable" : 30,
					"notFastStable" : 1,
					"fast" : 12
				},
				"probs" : {
					"pbr" : 0.001012,
					"pbm" : 0.0009699999999999998,
					"pbe" : 0.001059,
					"pbg" : 0.001013
				},
				"osv" : {
					"windows" : 20,
					"linux" : 20,
					"freebsd" : 2,
					"darwin" : 1
				},
				"tsv" : {
					"v022" : 10,
					"v023" : 31,
					"v024" : 2
				},
				"autosys" : [
					{
						"as" : 4713,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 9365,
						"cuont" : 1
					},
					{
						"as" : 9371,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 55897,
						"cuont" : 1
					},
					{
						"as" : 16509,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 17931,
						"cuont" : 1
					},
					{
						"as" : 2497,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 2516,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 17676,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 2527,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 2510,
						"cuont" : 1
					},
					{
						"as" : 2514,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 17511,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 9617,
						"cuont" : 1
					},
					{
						"as" : 2518,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 18126,
						"cuont" : 1
					},
					{
						"as" : 4725,
						"cuont" : 1
					},
					{
						"as" : 9351,
						"cuont" : 1
					},
					{
						"as" : 4685,
						"cuont" : 1
					}
				],
				"cbcc" : 88,
				"crcc" : 11375
			},
			{
				"country" : "GB",
				"relay" : 174,
				"bwa" : 128851510,
				"bwc" : 85235410,
				"roles" : {
					"middle" : 174,
					"dir" : 89,
					"exit" : 32,
					"guard" : 37
				},
				"flags" : {
					"fast" : 63,
					"notFastStable" : 7,
					"fastStable" : 85,
					"stable" : 19
				},
				"probs" : {
					"pbr" : 0.054657,
					"pbm" : 0.03864700000000001,
					"pbe" : 0.08696500000000003,
					"pbg" : 0.038349
				},
				"osv" : {
					"linux" : 123,
					"windows" : 44,
					"freebsd" : 2,
					"darwin" : 4
				},
				"tsv" : {
					"v024" : 14,
					"v023" : 129,
					"v022" : 29,
					"v025" : 2
				},
				"autosys" : [
					{
						"as" : 5089,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 29017,
						"cuont" : 1
					},
					{
						"as" : 35425,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 786,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 2529,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 15830,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 35228,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 43234,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 20860,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 29302,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8943,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 5607,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6871,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 51059,
						"cuont" : 1
					},
					{
						"as" : 2856,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 16276,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 13285,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 42831,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 13213,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 33970,
						"cuont" : 1
					},
					{
						"as" : 12576,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 1239,
						"cuont" : 1
					},
					{
						"as" : 25577,
						"cuont" : 1
					},
					{
						"as" : 20712,
						"cuont" : 1
					},
					{
						"as" : 44557,
						"cuont" : 1
					},
					{
						"as" : 12513,
						"cuont" : 1
					},
					{
						"as" : 31595,
						"cuont" : 1
					},
					{
						"as" : 35662,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 20738,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 51377,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8401,
						"cuont" : 1
					},
					{
						"as" : 34119,
						"cuont" : 1
					},
					{
						"as" : 9105,
						"cuont" : 1
					},
					{
						"as" : 28986,
						"cuont" : 1
					}
				],
				"cbcc" : 123,
				"crcc" : 25275
			},
			{
				"country" : "IL",
				"relay" : 15,
				"bwa" : 8135959,
				"bwc" : 4236522,
				"roles" : {
					"guard" : 7,
					"middle" : 15,
					"dir" : 11,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 10,
					"fast" : 4,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.0012640000000000001,
					"pbg" : 0.002648,
					"pbm" : 0.001133,
					"pbe" : 0.000008
				},
				"osv" : {
					"linux" : 11,
					"windows" : 3,
					"darwin" : 1
				},
				"tsv" : {
					"v022" : 8,
					"v023" : 5,
					"v024" : 2
				},
				"autosys" : [
					{
						"as" : 8551,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12400,
						"cuont" : 1
					},
					{
						"as" : 1680,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 50463,
						"cuont" : 1
					}
				],
				"cbcc" : 41,
				"crcc" : 11912
			},
			{
				"country" : "MY",
				"relay" : 2,
				"bwa" : 74110,
				"bwc" : 20294,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000008
				},
				"osv" : {
					"windows" : 2
				},
				"tsv" : {
					"v023" : 1,
					"v022" : 1
				},
				"autosys" : [
					{
						"as" : 4788,
						"cuont" : 1,
						"count" : NaN
					}
				],
				"cbcc" : 26,
				"crcc" : 2045
			},
			{
				"country" : "IS",
				"relay" : 14,
				"bwa" : 10419232,
				"bwc" : 6998026,
				"roles" : {
					"guard" : 3,
					"middle" : 14,
					"exit" : 7,
					"dir" : 7
				},
				"flags" : {
					"fast" : 3,
					"fastStable" : 9,
					"stable" : 2
				},
				"probs" : {
					"pbr" : 0.0028910000000000003,
					"pbg" : 0.003988,
					"pbm" : 0.00214,
					"pbe" : 0.002543
				},
				"osv" : {
					"linux" : 13,
					"windows" : 1
				},
				"tsv" : {
					"v023" : 13,
					"v022" : 1
				},
				"autosys" : [
					{
						"as" : 51969,
						"cuont" : 1
					},
					{
						"as" : 50613,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 44925,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 48685,
						"cuont" : 1
					},
					{
						"as" : 44432,
						"cuont" : 1
					}
				],
				"crcc" : 473
			},
			{
				"country" : "AU",
				"relay" : 34,
				"bwa" : 6077687,
				"bwc" : 1599959,
				"roles" : {
					"middle" : 34,
					"exit" : 12,
					"dir" : 20,
					"guard" : 4
				},
				"flags" : {
					"fastStable" : 18,
					"fast" : 7,
					"stable" : 4,
					"notFastStable" : 5
				},
				"probs" : {
					"pbr" : 0.0005400000000000003,
					"pbe" : 0.0010899999999999998,
					"pbm" : 0.000283,
					"pbg" : 0.000249
				},
				"osv" : {
					"linux" : 21,
					"windows" : 9,
					"freebsd" : 4
				},
				"tsv" : {
					"v023" : 26,
					"v022" : 8
				},
				"autosys" : [
					{
						"as" : 9482,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 7545,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 45570,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 16509,
						"cuont" : 1
					},
					{
						"as" : 9822,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 36352,
						"cuont" : 1
					},
					{
						"as" : 4739,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 4802,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 10143,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 1221,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 24238,
						"cuont" : 1
					},
					{
						"as" : 17486,
						"cuont" : 1
					},
					{
						"as" : 2764,
						"cuont" : 1
					},
					{
						"as" : 38285,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 45454,
						"cuont" : 1
					},
					{
						"as" : 7600,
						"cuont" : 1
					},
					{
						"as" : 9556,
						"cuont" : 1
					},
					{
						"as" : 38657,
						"cuont" : 1
					}
				],
				"cbcc" : 61,
				"crcc" : 9501
			},
			{
				"country" : "CH",
				"relay" : 41,
				"bwa" : 56552133,
				"bwc" : 42425917,
				"roles" : {
					"middle" : 41,
					"exit" : 18,
					"dir" : 27,
					"guard" : 17
				},
				"flags" : {
					"notFastStable" : 1,
					"fastStable" : 35,
					"fast" : 5
				},
				"probs" : {
					"pbr" : 0.019194000000000003,
					"pbe" : 0.026327,
					"pbm" : 0.013316,
						"pbg" : 0.017934000000000002
				},
				"osv" : {
					"linux" : 33,
					"windows" : 5,
					"darwin" : 2
				},
				"tsv" : {
					"v023" : 33,
					"v022" : 7,
					"v024" : 1
				},
				"autosys" : [
					{
						"as" : 41715,
						"cuont" : 1
					},
					{
						"as" : 29691,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6830,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 13030,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 1836,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6893,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 9044,
						"cuont" : 1
					},
					{
						"as" : 21069,
						"cuont" : 1
					},
					{
						"as" : 3303,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 15517,
						"cuont" : 1
					},
					{
						"as" : 31736,
						"cuont" : 1
					}
				],
				"cbcc" : 23,
				"crcc" : 5515
			},
			{
				"country" : "PL",
				"relay" : 45,
				"bwa" : 35174703,
				"bwc" : 20933392,
				"roles" : {
					"middle" : 45,
					"dir" : 28,
					"exit" : 11,
					"guard" : 17
				},
				"flags" : {
					"fastStable" : 26,
					"fast" : 13,
					"stable" : 4,
					"notFastStable" : 2
				},
				"probs" : {
					"pbr" : 0.006458000000000001,
					"pbm" : 0.0067870000000000005,
					"pbe" : 0.004978,
					"pbg" : 0.00761
				},
				"osv" : {
					"linux" : 35,
					"windows" : 6,
					"darwin" : 1,
					"freebsd" : 3
				},
				"tsv" : {
					"v023" : 30,
					"v022" : 10,
					"v024" : 5
				},
				"autosys" : [
					{
						"as" : 6830,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 51290,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 51399,
						"cuont" : 1
					},
					{
						"as" : 47544,
						"cuont" : 1
					},
					{
						"as" : 12741,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6714,
						"cuont" : 1
					},
					{
						"as" : 41966,
						"cuont" : 1
					},
					{
						"as" : 13110,
						"cuont" : 1
					},
					{
						"as" : 39288,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 21021,
						"cuont" : 1
					},
					{
						"as" : 5617,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 197226,
						"cuont" : 1
					},
					{
						"as" : 16276,
						"cuont" : 1
					},
					{
						"as" : 9112,
						"cuont" : 1
					},
					{
						"as" : 198414,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 35274,
						"cuont" : 1
					},
					{
						"as" : 41508,
						"cuont" : 1
					},
					{
						"as" : 31229,
						"cuont" : 1
					},
					{
						"as" : 15969,
						"cuont" : 1
					},
					{
						"as" : 43470,
						"cuont" : 1
					}
				],
				"cbcc" : 34,
				"crcc" : 13329
			},
			{
				"country" : "RU",
				"relay" : 148,
				"bwa" : 111755317,
				"bwc" : 58652232,
				"roles" : {
					"middle" : 148,
					"exit" : 52,
					"dir" : 103,
					"guard" : 29
				},
				"flags" : {
					"fastStable" : 57,
					"notFastStable" : 5,
					"fast" : 84,
					"stable" : 2
				},
				"probs" : {
					"pbr" : 0.025722,
					"pbe" : 0.01755199999999999,
					"pbm" : 0.04168100000000003,
					"pbg" : 0.017916
				},
				"osv" : {
					"linux" : 90,
					"windows" : 51,
					"freebsd" : 3,
					"darwin" : 1
				},
				"tsv" : {
					"v022" : 35,
					"v023" : 99,
					"v025" : 2,
					"v024" : 12
				},
				"autosys" : [
					{
						"as" : 49335,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 35411,
						"cuont" : 1
					},
					{
						"as" : 48361,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 48416,
						"cuont" : 1
					},
					{
						"as" : 15756,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8359,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8331,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8402,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 42610,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 42893,
						"cuont" : 1
					},
					{
						"as" : 31364,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 57378,
						"cuont" : 1
					},
					{
						"as" : 20597,
						"cuont" : 1
					},
					{
						"as" : 49120,
						"cuont" : 1
					},
					{
						"as" : 47165,
						"cuont" : 1
					},
					{
						"as" : 9082,
						"cuont" : 1
					},
					{
						"as" : 41691,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 43362,
						"cuont" : 1
					},
					{
						"as" : 42575,
						"cuont" : 1
					},
					{
						"as" : 35415,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 45051,
						"cuont" : 1
					},
					{
						"as" : 51032,
						"cuont" : 1
					},
					{
						"as" : 28745,
						"cuont" : 1
					},
					{
						"as" : 52201,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8334,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 21127,
						"cuont" : 1
					},
					{
						"as" : 3226,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 5563,
						"cuont" : 1
					},
					{
						"as" : 41440,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 13304,
						"cuont" : 1
					},
					{
						"as" : 34232,
						"cuont" : 1
					},
					{
						"as" : 57668,
						"cuont" : 1
					},
					{
						"as" : 12714,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 44724,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6828,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12608,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 48781,
						"cuont" : 1
					},
					{
						"as" : 12768,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 2578,
						"cuont" : 1
					},
					{
						"as" : 30881,
						"cuont" : 1
					},
					{
						"as" : 41727,
						"cuont" : 1
					},
					{
						"as" : 43146,
						"cuont" : 1
					},
					{
						"as" : 35807,
						"cuont" : 1
					},
					{
						"as" : 49776,
						"cuont" : 1
					},
					{
						"as" : 41704,
						"cuont" : 1
					},
					{
						"as" : 42322,
						"cuont" : 1
					},
					{
						"as" : 25408,
						"cuont" : 1
					},
					{
						"as" : 41786,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 15682,
						"cuont" : 1
					},
					{
						"as" : 51953,
						"cuont" : 1
					},
					{
						"as" : 34757,
						"cuont" : 1
					},
					{
						"as" : 35271,
						"cuont" : 1
					},
					{
						"as" : 48209,
						"cuont" : 1
					},
					{
						"as" : 44734,
						"cuont" : 1
					},
					{
						"as" : 38951,
						"cuont" : 1
					},
					{
						"as" : 23242,
						"cuont" : 1
					},
					{
						"as" : 50716,
						"cuont" : 1
					},
					{
						"as" : 44604,
						"cuont" : 1
					},
					{
						"as" : 42682,
						"cuont" : 1
					},
					{
						"as" : 8997,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 41733,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 43317,
						"cuont" : 1
					},
					{
						"as" : 12668,
						"cuont" : 1
					},
					{
						"as" : 49170,
						"cuont" : 1
					},
					{
						"as" : 35018,
						"cuont" : 1
					},
					{
						"as" : 8615,
						"cuont" : 1
					},
					{
						"as" : 21378,
						"cuont" : 1
					},
					{
						"as" : 29182,
						"cuont" : 1
					},
					{
						"as" : 24955,
						"cuont" : 1
					},
					{
						"as" : 8342,
						"cuont" : 1
					},
					{
						"as" : 28719,
						"cuont" : 1
					},
					{
						"as" : 2683,
						"cuont" : 1
					},
					{
						"as" : 50465,
						"cuont" : 1
					},
					{
						"as" : 48780,
						"cuont" : 1
					},
					{
						"as" : 3216,
						"cuont" : 1
					},
					{
						"as" : 2854,
						"cuont" : 1
					},
					{
						"as" : 29194,
						"cuont" : 1
					},
					{
						"as" : 30936,
						"cuont" : 1
					},
					{
						"as" : 35475,
						"cuont" : 1
					},
					{
						"as" : 13118,
						"cuont" : 1
					},
					{
						"as" : 28812,
						"cuont" : 1
					},
					{
						"as" : 41661,
						"cuont" : 1
					},
					{
						"as" : 5495,
						"cuont" : 1
					},
					{
						"as" : 20807,
						"cuont" : 1
					},
					{
						"as" : 47241,
						"cuont" : 1
					}
				],
				"cbcc" : 119,
				"crcc" : 30042
			},
			{
				"country" : "AT",
				"relay" : 50,
				"bwa" : 97852002,
				"bwc" : 81448916,
				"roles" : {
					"middle" : 50,
					"dir" : 33,
					"guard" : 19,
					"exit" : 10
				},
				"flags" : {
					"fastStable" : 36,
					"fast" : 12,
					"stable" : 1,
					"authority" : 1,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.022725999999999996,
					"pbm" : 0.019159,
					"pbg" : 0.041944,
					"pbe" : 0.007080000000000002
				},
				"osv" : {
					"linux" : 45,
					"windows" : 2,
					"freebsd" : 1,
					"darwin" : 2
				},
				"tsv" : {
					"v022" : 12,
					"v023" : 34,
					"v024" : 4
				},
				"autosys" : [
					{
						"as" : 3248,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8339,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8447,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6830,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12605,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 679,
						"cuont" : 1
					},
					{
						"as" : 3330,
						"cuont" : 1
					},
					{
						"as" : 47692,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8437,
						"cuont" : 1
					},
					{
						"as" : 1853,
						"cuont" : 1
					},
					{
						"as" : 3265,
						"cuont" : 1
					},
					{
						"as" : 760,
						"cuont" : 1
					},
					{
						"as" : 57169,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 35339,
						"cuont" : 1
					},
					{
						"as" : 8559,
						"cuont" : 1
					},
					{
						"as" : 12635,
						"cuont" : 1
					},
					{
						"as" : 1764,
						"cuont" : 1
					},
					{
						"as" : 25255,
						"cuont" : 1
					},
					{
						"as" : 21213,
						"cuont" : 1
					}
				],
				"cbcc" : 14,
				"crcc" : 5868
			},
			{
				"country" : "ES",
				"relay" : 27,
				"bwa" : 3148681,
				"bwc" : 645993,
				"roles" : {
					"middle" : 27,
					"exit" : 7,
					"dir" : 15,
					"guard" : 1
				},
				"flags" : {
					"fast" : 12,
					"notFastStable" : 7,
					"stable" : 1,
					"fastStable" : 7
				},
				"probs" : {
					"pbr" : 0.0004590000000000002,
					"pbe" : 0.00096,
					"pbm" : 0.00032399999999999996,
					"pbg" : 0.000092
				},
				"osv" : {
					"windows" : 6,
					"linux" : 21
				},
				"tsv" : {
					"v023" : 20,
					"v022" : 7
				},
				"autosys" : [
					{
						"as" : 12715,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 3352,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12357,
						"cuont" : 1
					},
					{
						"as" : 53264,
						"cuont" : 1
					},
					{
						"as" : 6739,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 43988,
						"cuont" : 1
					},
					{
						"as" : 766,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12338,
						"cuont" : 1
					},
					{
						"as" : 12479,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12430,
						"cuont" : 1
					},
					{
						"as" : 12334,
						"cuont" : 1
					}
				],
				"cbcc" : 83,
				"crcc" : 62598
			},
			{
				"country" : "CA",
				"relay" : 89,
				"bwa" : 59286998,
				"bwc" : 35633842,
				"roles" : {
					"middle" : 89,
					"dir" : 47,
					"guard" : 20,
					"exit" : 15
				},
				"flags" : {
					"fastStable" : 41,
					"fast" : 24,
					"notFastStable" : 5,
					"stable" : 19
				},
				"probs" : {
					"pbr" : 0.020753999999999995,
					"pbm" : 0.014217000000000004,
					"pbg" : 0.017923,
					"pbe" : 0.030129999999999997
				},
				"osv" : {
					"linux" : 60,
					"windows" : 18,
					"darwin" : 3,
					"freebsd" : 6
				},
				"tsv" : {
					"v023" : 58,
					"v022" : 24,
					"v025" : 1,
					"v024" : 6
				},
				"autosys" : [
					{
						"as" : 19662,
						"cuont" : 1
					},
					{
						"as" : 5769,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 16276,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 812,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 577,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 1403,
						"cuont" : 1
					},
					{
						"as" : 29761,
						"cuont" : 1
					},
					{
						"as" : 5645,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 852,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 20375,
						"cuont" : 1
					},
					{
						"as" : 6327,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12093,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 10929,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 35911,
						"cuont" : 1
					},
					{
						"as" : 7860,
						"cuont" : 1
					},
					{
						"as" : 32613,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 36137,
						"cuont" : 1
					},
					{
						"as" : 393249,
						"cuont" : 1
					},
					{
						"as" : 7456,
						"cuont" : 1
					},
					{
						"as" : 25668,
						"cuont" : 1
					},
					{
						"as" : 11814,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 39959,
						"cuont" : 1
					},
					{
						"as" : 13768,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 33139,
						"cuont" : 1
					},
					{
						"as" : 30158,
						"cuont" : 1
					},
					{
						"as" : 40788,
						"cuont" : 1
					},
					{
						"as" : 803,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 15290,
						"cuont" : 1
					},
					{
						"as" : 15003,
						"cuont" : 1
					},
					{
						"as" : 6539,
						"cuont" : 1
					}
				],
				"cbcc" : 75,
				"crcc" : 15768
			},
			{
				"country" : "CZ",
				"relay" : 77,
				"bwa" : 94211446,
				"bwc" : 47409202,
				"roles" : {
					"middle" : 77,
					"exit" : 42,
					"dir" : 33,
					"guard" : 29
				},
				"flags" : {
					"fastStable" : 44,
					"notFastStable" : 12,
					"fast" : 8,
					"stable" : 13
				},
				"probs" : {
					"pbr" : 0.03460800000000002,
					"pbe" : 0.019638,
					"pbm" : 0.05213800000000001,
					"pbg" : 0.032043999999999996
				},
				"osv" : {
					"linux" : 71,
					"windows" : 4,
					"darwin" : 1,
					"freebsd" : 1
				},
				"tsv" : {
					"v023" : 46,
					"v022" : 22,
					"v024" : 9
				},
				"autosys" : [
					{
						"as" : 29113,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6830,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 2852,
						"cuont" : 1
					},
					{
						"as" : 30058,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 35592,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 24971,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 197019,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 29208,
						"cuont" : 1
					},
					{
						"as" : 5610,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 30764,
						"cuont" : 1
					},
					{
						"as" : 20723,
						"cuont" : 1
					},
					{
						"as" : 43541,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 48926,
						"cuont" : 1
					},
					{
						"as" : 34315,
						"cuont" : 1
					},
					{
						"as" : 31246,
						"cuont" : 1
					},
					{
						"as" : 2819,
						"cuont" : 1
					},
					{
						"as" : 24806,
						"cuont" : 1
					},
					{
						"as" : 197451,
						"cuont" : 1
					},
					{
						"as" : 15685,
						"cuont" : 1
					}
				],
				"cbcc" : 13,
				"crcc" : 5348
			},
			{
				"country" : "UA",
				"relay" : 41,
				"bwa" : 24626445,
				"bwc" : 13877081,
				"roles" : {
					"middle" : 41,
					"exit" : 18,
					"dir" : 25,
					"guard" : 9
				},
				"flags" : {
					"stable" : 6,
					"fastStable" : 14,
					"fast" : 19,
					"notFastStable" : 2
				},
				"probs" : {
					"pbr" : 0.004134,
					"pbe" : 0.00494,
					"pbg" : 0.0023279999999999998,
					"pbm" : 0.005128000000000001
				},
				"osv" : {
					"linux" : 24,
					"windows" : 13,
					"freebsd" : 3
				},
				"tsv" : {
					"v022" : 16,
					"v023" : 24,
					"v024" : 1
				},
				"autosys" : [
					{
						"as" : 31148,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6849,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 42352,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12530,
						"cuont" : 1
					},
					{
						"as" : 29685,
						"cuont" : 1
					},
					{
						"as" : 39608,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 15626,
						"cuont" : 1
					},
					{
						"as" : 196705,
						"cuont" : 1
					},
					{
						"as" : 29632,
						"cuont" : 1
					},
					{
						"as" : 25229,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 13188,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 42336,
						"cuont" : 1
					},
					{
						"as" : 15895,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6876,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 21261,
						"cuont" : 1
					},
					{
						"as" : 34743,
						"cuont" : 1
					},
					{
						"as" : 48683,
						"cuont" : 1
					},
					{
						"as" : 56423,
						"cuont" : 1
					},
					{
						"as" : 15497,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6703,
						"cuont" : 1
					},
					{
						"as" : 47678,
						"cuont" : 1
					},
					{
						"as" : 35533,
						"cuont" : 1
					},
					{
						"as" : 197145,
						"cuont" : 1
					},
					{
						"as" : 35816,
						"cuont" : 1
					},
					{
						"as" : 56950,
						"cuont" : 1
					},
					{
						"as" : 25071,
						"cuont" : 1
					},
					{
						"as" : 48031,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 42239,
						"cuont" : 1
					}
				],
				"cbcc" : 35,
				"crcc" : 31421
			},
			{
				"country" : "NL",
				"relay" : 196,
				"bwa" : 378885530,
				"bwc" : 282445006,
				"roles" : {
					"middle" : 196,
					"exit" : 76,
					"dir" : 98,
					"guard" : 77
				},
				"flags" : {
					"fast" : 48,
					"fastStable" : 116,
					"stable" : 29,
					"notFastStable" : 3,
					"authority" : 2
				},
				"probs" : {
					"pbr" : 0.11391300000000007,
					"pbe" : 0.131842,
					"pbm" : 0.10260099999999998,
					"pbg" : 0.10729800000000002
				},
				"osv" : {
					"linux" : 166,
					"darwin" : 4,
					"freebsd" : 7,
					"windows" : 16
				},
				"tsv" : {
					"v023" : 116,
					"v022" : 58,
					"v024" : 21,
					"v025" : 1
				},
				"autosys" : [
					{
						"as" : 16265,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 9143,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 3265,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 39309,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8455,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 13127,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 1103,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 5580,
						"cuont" : 1
					},
					{
						"as" : 49544,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 48635,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 42093,
						"cuont" : 1
					},
					{
						"as" : 8283,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 16276,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 47869,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 43350,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 29073,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 20507,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 61387,
						"cuont" : 1
					},
					{
						"as" : 29028,
						"cuont" : 1
					},
					{
						"as" : 50673,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 20857,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 15435,
						"cuont" : 1
					},
					{
						"as" : 49981,
						"cuont" : 1
					},
					{
						"as" : 46652,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 31019,
						"cuont" : 1
					},
					{
						"as" : 5390,
						"cuont" : 1
					},
					{
						"as" : 57172,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8737,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 5615,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 50266,
						"cuont" : 1
					},
					{
						"as" : 6830,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 1133,
						"cuont" : 1
					},
					{
						"as" : 36351,
						"cuont" : 1
					},
					{
						"as" : 20495,
						"cuont" : 1
					},
					{
						"as" : 35470,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 41887,
						"cuont" : 1
					},
					{
						"as" : 12634,
						"cuont" : 1
					},
					{
						"as" : 28685,
						"cuont" : 1
					},
					{
						"as" : 12414,
						"cuont" : 1,
						"count" : NaN
					}
				],
				"cbcc" : 63,
				"crcc" : 21119
			},
			{
				"country" : "BE",
				"relay" : 17,
				"bwa" : 2359205,
				"bwc" : 842143,
				"roles" : {
					"middle" : 17,
					"dir" : 9,
					"exit" : 2
				},
				"flags" : {
					"notFastStable" : 1,
					"fast" : 10,
					"fastStable" : 5,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000248,
					"pbm" : 0.0007150000000000001,
					"pbe" : 0.000032
				},
				"osv" : {
					"linux" : 15,
					"darwin" : 2
				},
				"tsv" : {
					"v023" : 14,
					"v022" : 3
				},
				"autosys" : [
					{
						"as" : 9031,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6848,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 5432,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 16276,
						"cuont" : 1
					},
					{
						"as" : 29587,
						"cuont" : 1
					},
					{
						"as" : 12392,
						"cuont" : 1
					},
					{
						"as" : 42160,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 31669,
						"cuont" : 1
					}
				],
				"cbcc" : 15,
				"crcc" : 5343
			},
			{
				"country" : "GR",
				"relay" : 19,
				"bwa" : 23380569,
				"bwc" : 14667660,
				"roles" : {
					"guard" : 8,
					"middle" : 19,
					"dir" : 14,
					"exit" : 4
				},
				"flags" : {
					"fastStable" : 8,
					"fast" : 8,
					"stable" : 2,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.0044529999999999995,
					"pbg" : 0.005557,
					"pbm" : 0.004320999999999999,
					"pbe" : 0.003478
				},
				"osv" : {
					"linux" : 14,
					"windows" : 4,
					"freebsd" : 1
				},
				"tsv" : {
					"v023" : 15,
					"v024" : 2,
					"v022" : 2
				},
				"autosys" : [
					{
						"as" : 5408,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 1241,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 21284,
						"cuont" : 1
					},
					{
						"as" : 6866,
						"cuont" : 1
					},
					{
						"as" : 6799,
						"cuont" : 1,
						"count" : NaN
					}
				],
				"cbcc" : 9,
				"crcc" : 2001
			},
			{
				"country" : "LU",
				"relay" : 33,
				"bwa" : 15791474,
				"bwc" : 9208229,
				"roles" : {
					"middle" : 33,
					"exit" : 20,
					"guard" : 9,
					"dir" : 12
				},
				"flags" : {
					"notFastStable" : 6,
					"stable" : 11,
					"fastStable" : 12,
					"fast" : 4
				},
				"probs" : {
					"pbr" : 0.0031829999999999996,
					"pbe" : 0.0005229999999999999,
					"pbg" : 0.004876,
					"pbm" : 0.0041459999999999995
				},
				"osv" : {
					"linux" : 31,
					"windows" : 2
				},
				"tsv" : {
					"v022" : 18,
					"v023" : 13,
					"v024" : 2
				},
				"autosys" : [
					{
						"as" : 5577,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6661,
						"cuont" : 1
					},
					{
						"as" : 9008,
						"cuont" : 1,
						"count" : NaN
					}
				],
				"cbcc" : 5,
				"crcc" : 960
			},
			{
				"country" : "SG",
				"relay" : 15,
				"bwa" : 7505096,
				"bwc" : 2243982,
				"roles" : {
					"guard" : 9,
					"middle" : 15,
					"dir" : 10,
					"exit" : 4
				},
				"flags" : {
					"fastStable" : 11,
					"fast" : 2,
					"stable" : 2
				},
				"probs" : {
					"pbr" : 0.000458,
					"pbg" : 0.0006140000000000001,
					"pbm" : 0.000351,
					"pbe" : 0.00041
				},
				"osv" : {
					"linux" : 13,
					"windows" : 1,
					"darwin" : 1
				},
				"tsv" : {
					"v024" : 4,
					"v023" : 9,
					"v022" : 2
				},
				"autosys" : [
					{
						"as" : 36351,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 38895,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 4844,
						"cuont" : 1
					},
					{
						"as" : 17547,
						"cuont" : 1
					},
					{
						"as" : 18106,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 9506,
						"cuont" : 1
					},
					{
						"as" : 55430,
						"cuont" : 1
					},
					{
						"as" : 37989,
						"cuont" : 1
					}
				],
				"cbcc" : 19,
				"crcc" : 1670
			},
			{
				"country" : "DK",
				"relay" : 30,
				"bwa" : 38486839,
				"bwc" : 28761521,
				"roles" : {
					"guard" : 11,
					"middle" : 30,
					"exit" : 15,
					"dir" : 23
				},
				"flags" : {
					"fastStable" : 19,
					"fast" : 11
				},
				"probs" : {
					"pbr" : 0.010230999999999999,
					"pbg" : 0.008348999999999999,
					"pbm" : 0.007751,
					"pbe" : 0.014596999999999999
				},
				"osv" : {
					"linux" : 24,
					"windows" : 4,
					"freebsd" : 1,
					"darwin" : 1
				},
				"tsv" : {
					"v023" : 23,
					"v022" : 6,
					"v024" : 1
				},
				"autosys" : [
					{
						"as" : 34823,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 197301,
						"cuont" : 1
					},
					{
						"as" : 3292,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 39554,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 197288,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 9158,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 35376,
						"cuont" : 1
					},
					{
						"as" : 1835,
						"cuont" : 1
					},
					{
						"as" : 28717,
						"cuont" : 1
					},
					{
						"as" : 57735,
						"cuont" : 1
					},
					{
						"as" : 35637,
						"cuont" : 1
					},
					{
						"as" : 45032,
						"cuont" : 1
					},
					{
						"as" : 59469,
						"cuont" : 1
					},
					{
						"as" : 16245,
						"cuont" : 1
					},
					{
						"as" : 31661,
						"cuont" : 1
					}
				],
				"cbcc" : 26,
				"crcc" : 2639
			},
			{
				"country" : "NO",
				"relay" : 33,
				"bwa" : 66259765,
				"bwc" : 51283003,
				"roles" : {
					"middle" : 33,
					"guard" : 10,
					"dir" : 17,
					"exit" : 3
				},
				"flags" : {
					"fast" : 18,
					"fastStable" : 15
				},
				"probs" : {
					"pbr" : 0.015080999999999999,
					"pbm" : 0.019129999999999998,
					"pbg" : 0.026047999999999998,
					"pbe" : 0.000076
				},
				"osv" : {
					"linux" : 29,
					"windows" : 4
				},
				"tsv" : {
					"v023" : 25,
					"v022" : 8
				},
				"autosys" : [
					{
						"as" : 41164,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 57963,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 224,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 2119,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 2116,
						"cuont" : 1
					},
					{
						"as" : 16186,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8896,
						"cuont" : 1
					},
					{
						"as" : 57381,
						"cuont" : 1
					},
					{
						"as" : 29695,
						"cuont" : 1
					}
				],
				"cbcc" : 12,
				"crcc" : 2552
			},
			{
				"country" : "TR",
				"relay" : 6,
				"bwa" : 9845022,
				"bwc" : 6598569,
				"roles" : {
					"middle" : 6,
					"dir" : 2,
					"exit" : 5,
					"guard" : 2
				},
				"flags" : {
					"notFastStable" : 1,
					"fastStable" : 5
				},
				"probs" : {
					"pbr" : 0.002695,
					"pbm" : 0.001499,
					"pbe" : 0.005093,
					"pbg" : 0.001493
				},
				"osv" : {
					"windows" : 1,
					"linux" : 5
				},
				"tsv" : {
					"v023" : 4,
					"v022" : 2
				},
				"autosys" : [
					{
						"as" : 15897,
						"cuont" : 1
					},
					{
						"as" : 44565,
						"cuont" : 1
					},
					{
						"as" : 42926,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 39582,
						"cuont" : 1,
						"count" : NaN
					}
				],
				"cbcc" : 40,
				"crcc" : 3458
			},
			{
				"country" : "MX",
				"relay" : 3,
				"bwa" : 1417324,
				"bwc" : 942298,
				"roles" : {
					"middle" : 3,
					"dir" : 3,
					"exit" : 1
				},
				"flags" : {
					"notFastStable" : 1,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.00011899999999999999,
					"pbm" : 0.000348,
					"pbe" : 0.000009
				},
				"osv" : {
					"windows" : 2,
					"linux" : 1
				},
				"tsv" : {
					"v023" : 3
				},
				"autosys" : [
					{
						"as" : 8151,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6332,
						"cuont" : 1
					}
				],
				"cbcc" : 28,
				"crcc" : 6380
			},
			{
				"country" : "BG",
				"relay" : 11,
				"bwa" : 4174761,
				"bwc" : 1722302,
				"roles" : {
					"middle" : 11,
					"dir" : 8,
					"exit" : 3,
					"guard" : 3
				},
				"flags" : {
					"fast" : 4,
					"fastStable" : 6,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000579,
					"pbm" : 0.000689,
					"pbe" : 0.00030199999999999997,
					"pbg" : 0.0007469999999999999
				},
				"osv" : {
					"windows" : 6,
					"linux" : 4,
					"freebsd" : 1
				},
				"tsv" : {
					"v023" : 6,
					"v022" : 5
				},
				"autosys" : [
					{
						"as" : 31250,
						"cuont" : 1
					},
					{
						"as" : 29084,
						"cuont" : 1
					},
					{
						"as" : 13124,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 5421,
						"cuont" : 1
					},
					{
						"as" : 8877,
						"cuont" : 1
					},
					{
						"as" : 34224,
						"cuont" : 1
					},
					{
						"as" : 29580,
						"cuont" : 1
					},
					{
						"as" : 12436,
						"cuont" : 1
					},
					{
						"as" : 8866,
						"cuont" : 1
					},
					{
						"as" : 43561,
						"cuont" : 1
					}
				],
				"cbcc" : 2,
				"crcc" : 1935
			},
			{
				"country" : "BR",
				"relay" : 22,
				"bwa" : 2216438,
				"bwc" : 352231,
				"roles" : {
					"middle" : 22,
					"dir" : 17,
					"exit" : 7
				},
				"flags" : {
					"fast" : 12,
					"notFastStable" : 5,
					"fastStable" : 4,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000084,
					"pbm" : 0.000179,
					"pbe" : 0.00007300000000000001
				},
				"osv" : {
					"windows" : 8,
					"linux" : 13,
					"freebsd" : 1
				},
				"tsv" : {
					"v023" : 18,
					"v022" : 4
				},
				"autosys" : [
					{
						"as" : 28573,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 26599,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 19182,
						"cuont" : 1
					},
					{
						"as" : 8167,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 28625,
						"cuont" : 1
					},
					{
						"as" : 18881,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 27699,
						"cuont" : 1
					},
					{
						"as" : 7738,
						"cuont" : 1
					},
					{
						"as" : 16509,
						"cuont" : 1
					},
					{
						"as" : 53111,
						"cuont" : 1
					},
					{
						"as" : 262868,
						"cuont" : 1
					}
				],
				"cbcc" : 51,
				"crcc" : 25899
			},
			{
				"country" : "LT",
				"relay" : 6,
				"bwa" : 16638202,
				"bwc" : 13194714,
				"roles" : {
					"guard" : 3,
					"middle" : 6,
					"dir" : 3,
					"exit" : 2
				},
				"flags" : {
					"fastStable" : 5,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.006370999999999999,
					"pbg" : 0.012815,
					"pbm" : 0.005324000000000001,
					"pbe" : 0.0009750000000000001
				},
				"osv" : {
					"linux" : 6
				},
				"tsv" : {
					"v023" : 5,
					"v022" : 1
				},
				"autosys" : [
					{
						"as" : 2847,
						"cuont" : 1
					},
					{
						"as" : 21412,
						"cuont" : 1
					},
					{
						"as" : 8764,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 16125,
						"cuont" : 1
					},
					{
						"as" : 24607,
						"cuont" : 1
					}
				],
				"cbcc" : 7,
				"crcc" : 1434
			},
			{
				"country" : "IT",
				"relay" : 47,
				"bwa" : 12276441,
				"bwc" : 6848374,
				"roles" : {
					"guard" : 13,
					"middle" : 47,
					"dir" : 18,
					"exit" : 4
				},
				"flags" : {
					"fastStable" : 21,
					"fast" : 11,
					"notFastStable" : 12,
					"stable" : 3
				},
				"probs" : {
					"pbr" : 0.001936,
					"pbg" : 0.001792,
					"pbm" : 0.0037809999999999996,
					"pbe" : 0.000235
				},
				"osv" : {
					"linux" : 39,
					"windows" : 6,
					"freebsd" : 2
				},
				"tsv" : {
					"v024" : 7,
					"v023" : 33,
					"v022" : 7
				},
				"autosys" : [
					{
						"as" : 137,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12874,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 34971,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 35612,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 5602,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 3269,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 44957,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 31103,
						"cuont" : 1
					},
					{
						"as" : 8928,
						"cuont" : 1
					},
					{
						"as" : 16232,
						"cuont" : 1
					},
					{
						"as" : 24940,
						"cuont" : 1
					},
					{
						"as" : 16276,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 8612,
						"cuont" : 1
					},
					{
						"as" : 1267,
						"cuont" : 1,
						"count" : NaN
					}
				],
				"cbcc" : 115,
				"crcc" : 91265
			},
			{
				"country" : "SK",
				"relay" : 15,
				"bwa" : 18600106,
				"bwc" : 11044273,
				"roles" : {
					"middle" : 15,
					"exit" : 4,
					"dir" : 9,
					"guard" : 4
				},
				"flags" : {
					"fastStable" : 10,
					"fast" : 4,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.006911,
					"pbe" : 0.0030499999999999998,
					"pbm" : 0.006027,
					"pbg" : 0.011654999999999999
				},
				"osv" : {
					"linux" : 12,
					"windows" : 2,
					"freebsd" : 1
				},
				"tsv" : {
					"v022" : 4,
					"v023" : 10,
					"v024" : 1
				},
				"autosys" : [
					{
						"as" : 15962,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6830,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 44185,
						"cuont" : 1
					},
					{
						"as" : 48133,
						"cuont" : 1
					},
					{
						"as" : 2607,
						"cuont" : 1
					},
					{
						"as" : 6855,
						"cuont" : 1
					},
					{
						"as" : 42005,
						"cuont" : 1
					},
					{
						"as" : 29405,
						"cuont" : 1
					},
					{
						"as" : 51013,
						"cuont" : 1
					}
				],
				"cbcc" : 5,
				"crcc" : 1427
			},
			{
				"country" : "TW",
				"relay" : 7,
				"bwa" : 2466920,
				"bwc" : 366229,
				"roles" : {
					"middle" : 7,
					"exit" : 3,
					"dir" : 4
				},
				"flags" : {
					"fast" : 3,
					"stable" : 2,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000116,
					"pbe" : 0.000039999999999999996,
					"pbm" : 0.00030900000000000003
				},
				"osv" : {
					"windows" : 5,
					"darwin" : 1,
					"linux" : 1
				},
				"tsv" : {
					"v023" : 6,
					"v022" : 1
				},
				"autosys" : [
					{
						"as" : 3462,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 18047,
						"cuont" : 1
					},
					{
						"as" : 9916,
						"cuont" : 1,
						"count" : NaN
					}
				],
				"cbcc" : 18,
				"crcc" : 7313
			},
			{
				"country" : "RO",
				"relay" : 23,
				"bwa" : 143818464,
				"bwc" : 76085477,
				"roles" : {
					"guard" : 12,
					"middle" : 23,
					"dir" : 18,
					"exit" : 14
				},
				"flags" : {
					"fastStable" : 13,
					"fast" : 9,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.017688000000000002,
					"pbg" : 0.009617000000000002,
					"pbm" : 0.008709000000000001,
					"pbe" : 0.034735
				},
				"osv" : {
					"linux" : 18,
					"windows" : 5
				},
				"tsv" : {
					"v022" : 5,
					"v023" : 16,
					"v024" : 2
				},
				"autosys" : [
					{
						"as" : 39743,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 57668,
						"cuont" : 1
					},
					{
						"as" : 41011,
						"cuont" : 1
					},
					{
						"as" : 34358,
						"cuont" : 1
					},
					{
						"as" : 8708,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6830,
						"cuont" : 1
					},
					{
						"as" : 9050,
						"cuont" : 1
					},
					{
						"as" : 38935,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 6663,
						"cuont" : 1
					}
				],
				"cbcc" : 19,
				"crcc" : 2717
			},
			{
				"country" : "DO",
				"relay" : 1,
				"bwa" : 26242,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"osv" : {
					"windows" : 1
				},
				"tsv" : {
					"v023" : 1
				},
				"autosys" : [
					{
						"as" : 12066,
						"cuont" : 1
					}
				],
				"cbcc" : 2,
				"crcc" : 541
			},
			{
				"country" : "VN",
				"relay" : 1,
				"bwa" : 409600,
				"bwc" : 205765,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000023,
					"pbg" : 0.000013,
					"pbm" : 0.000013,
					"pbe" : 0.000043
				},
				"osv" : {
					"linux" : 1
				},
				"tsv" : {
					"v024" : 1
				},
				"autosys" : [
					{
						"as" : 38731,
						"cuont" : 1
					}
					],
				"cbcc" : 4,
				"crcc" : 2486
			},
			{
				"country" : "KZ",
				"relay" : 4,
				"bwa" : 297905,
				"bwc" : 41593,
				"roles" : {
					"middle" : 4,
					"exit" : 3,
					"dir" : 3
				},
				"flags" : {
					"fast" : 4
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbe" : 0.000008,
					"pbm" : 0.000007
				},
				"osv" : {
					"windows" : 3
				},
				"tsv" : {
					"v023" : 3,
					"v024" : 1
				},
				"autosys" : [
					{
						"as" : 41371,
						"cuont" : 1
					},
					{
						"as" : 39725,
						"cuont" : 1
					},
					{
						"as" : 9198,
						"cuont" : 1,
						"count" : NaN
					}
				],
				"cbcc" : 12,
				"crcc" : 540
			},
			{
				"country" : "EG",
				"relay" : 5,
				"bwa" : 573440,
				"bwc" : 288796,
				"roles" : {
					"middle" : 5,
					"dir" : 3,
					"exit" : 1,
					"guard" : 1
				},
				"flags" : {
					"notFastStable" : 2,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.000039999999999999996,
					"pbm" : 0.00008800000000000001,
					"pbe" : 0.000009,
					"pbg" : 0.000021
				},
				"osv" : {
					"windows" : 1,
					"linux" : 4
				},
				"tsv" : {
					"v023" : 3,
					"v022" : 2
				},
				"autosys" : [
					{
						"as" : 24863,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 33785,
						"cuont" : 1,
						"count" : NaN
					}
				],
				"cbcc" : 69,
				"crcc" : 2742
			},
			{
				"country" : "FI",
				"relay" : 35,
				"bwa" : 12711325,
				"bwc" : 9657558,
				"roles" : {
					"middle" : 35,
					"dir" : 22,
					"guard" : 9,
					"exit" : 7
				},
				"flags" : {
					"fastStable" : 23,
					"fast" : 8,
					"stable" : 4
				},
				"probs" : {
					"pbr" : 0.0028569999999999997,
					"pbm" : 0.004864,
					"pbg" : 0.002498,
					"pbe" : 0.001218
				},
				"osv" : {
					"linux" : 30,
					"windows" : 4,
					"darwin" : 1
				},
				"tsv" : {
					"v023" : 24,
					"v022" : 9,
					"v024" : 2
				},
				"autosys" : [
					{
						"as" : 719,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 50503,
						"cuont" : 1
					},
					{
						"as" : 35382,
						"cuont" : 1
					},
					{
						"as" : 1759,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 16086,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 29422,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 20931,
						"cuont" : 1
					},
					{
						"as" : 3292,
						"cuont" : 1
					},
					{
						"as" : 39857,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 31211,
						"cuont" : 1
					},
					{
						"as" : 13276,
						"cuont" : 1
					},
					{
						"as" : 24751,
						"cuont" : 1
					}
				],
				"cbcc" : 12,
				"crcc" : 3584
			},
			{
				"country" : "ID",
				"relay" : 3,
				"bwa" : 408904,
				"bwc" : 21966,
				"roles" : {
					"middle" : 3,
					"dir" : 1,
					"exit" : 2
				},
				"flags" : {
					"notFastStable" : 1,
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000014999999999999999,
					"pbm" : 0.000009,
					"pbe" : 0.000036
				},
				"osv" : {
					"linux" : 2,
					"freebsd" : 1
				},
				"tsv" : {
					"v023" : 2,
					"v024" : 1
				},
				"autosys" : [
					{
						"as" : 18059,
						"cuont" : 1
					},
					{
						"as" : 58553,
						"cuont" : 1
					},
					{
						"as" : 45711,
						"cuont" : 1
					}
				],
				"cbcc" : 86,
				"crcc" : 2448
			},
			{
				"country" : "IE",
				"relay" : 9,
				"bwa" : 2942788,
				"bwc" : 1317243,
				"roles" : {
					"guard" : 3,
					"middle" : 9,
					"exit" : 2,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 5,
					"stable" : 2,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000355,
					"pbg" : 0.000184,
					"pbm" : 0.000439,
					"pbe" : 0.000441
				},
				"osv" : {
					"linux" : 8,
					"windows" : 1
				},
				"tsv" : {
					"v024" : 1,
					"v022" : 4,
					"v023" : 4
				},
				"autosys" : [
					{
						"as" : 16509,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 16276,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 31122,
						"cuont" : 1
					}
				],
				"cbcc" : 2,
				"crcc" : 2217
			},
			{
				"country" : "MK",
				"relay" : 2,
				"bwa" : 153600,
				"bwc" : 17576,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbm" : 0.000028
				},
				"osv" : {
					"linux" : 1,
					"windows" : 1
				},
				"tsv" : {
					"v023" : 2
				},
				"autosys" : [
					{
						"as" : 41557,
						"cuont" : 1
					},
					{
						"as" : 16333,
						"cuont" : 1
					}
				],
				"crcc" : 289
			},
			{
				"country" : "BA",
				"relay" : 2,
				"bwa" : 73728,
				"bwc" : 17088,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"stable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000009999999999999999,
					"pbe" : 0.000009,
					"pbm" : 0.00002
				},
				"osv" : {
					"linux" : 1,
					"windows" : 1
				},
				"tsv" : {
					"v023" : 2
				},
				"autosys" : [
					{
						"as" : 21107,
						"cuont" : 1
					},
					{
						"as" : 198252,
						"cuont" : 1
					}
				],
				"crcc" : 278
			},
			{
				"country" : "AR",
				"relay" : 9,
				"bwa" : 2114498,
				"bwc" : 1065895,
				"roles" : {
					"middle" : 9,
					"guard" : 3,
					"exit" : 5,
					"dir" : 3
				},
				"flags" : {
					"fastStable" : 4,
					"fast" : 2,
					"notFastStable" : 3
				},
				"probs" : {
					"pbr" : 0.00038200000000000007,
					"pbg" : 0.00020899999999999998,
					"pbm" : 0.000223,
					"pbe" : 0.0007149999999999999
				},
				"osv" : {
					"linux" : 8,
					"windows" : 1
				},
				"tsv" : {
					"v024" : 2,
					"v023" : 5,
					"v022" : 2
				},
				"autosys" : [
					{
						"as" : 10481,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 20207,
						"cuont" : 1
					},
					{
						"as" : 3549,
						"cuont" : 1
					},
					{
						"as" : 10834,
						"cuont" : 1
					},
					{
						"as" : 27747,
						"cuont" : 1
					},
					{
						"as" : 7303,
						"cuont" : 1
					},
					{
						"as" : 22927,
						"cuont" : 1
					},
					{
						"as" : 27823,
						"cuont" : 1
					}
				],
				"cbcc" : 18,
				"crcc" : 7464
			},
			{
				"country" : "JE",
				"relay" : 1,
				"bwa" : 32000,
				"bwc" : 2554,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"osv" : {
					"windows" : 1
				},
				"tsv" : {
					"v023" : 1
				},
				"autosys" : [
					{
						"as" : 8681,
						"cuont" : 1
					}
				],
				"crcc" : 53
			},
			{
				"country" : "PT",
				"relay" : 6,
				"bwa" : 1144335,
				"bwc" : 381764,
				"roles" : {
					"middle" : 6,
					"exit" : 3,
					"dir" : 6,
					"guard" : 1
				},
				"flags" : {
					"fast" : 6
				},
				"probs" : {
					"pbr" : 0.000107,
					"pbe" : 0.000229,
					"pbm" : 0.000078,
					"pbg" : 0.000013
				},
				"osv" : {
					"linux" : 2,
					"windows" : 3,
					"darwin" : 1
				},
				"tsv" : {
					"v023" : 5,
					"v022" : 1
				},
				"autosys" : [
					{
						"as" : 3243,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12542,
						"cuont" : 1
					},
					{
						"as" : 2860,
						"cuont" : 1
					},
					{
						"as" : 12353,
						"cuont" : 1
					}
				],
				"cbcc" : 9,
				"crcc" : 4703
			},
			{
				"country" : "LV",
				"relay" : 7,
				"bwa" : 3244886,
				"bwc" : 2693911,
				"roles" : {
					"guard" : 2,
					"middle" : 7,
					"dir" : 5,
					"exit" : 2
				},
				"flags" : {
					"fastStable" : 6,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.0008430000000000001,
					"pbg" : 0.0006709999999999999,
					"pbm" : 0.001822,
					"pbe" : 0.000036
				},
				"osv" : {
					"linux" : 7
				},
				"tsv" : {
					"v023" : 5,
					"v022" : 2
				},
				"autosys" : [
					{
						"as" : 6851,
						"cuont" : 1
					},
					{
						"as" : 12578,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 52048,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 12993,
						"cuont" : 1
					},
					{
						"as" : 56617,
						"cuont" : 1
					}
				],
				"cbcc" : 3,
				"crcc" : 730
			},
			{
				"country" : "KR",
				"relay" : 6,
				"bwa" : 2205485,
				"bwc" : 540892,
				"roles" : {
					"middle" : 6,
					"dir" : 5,
					"exit" : 1,
					"guard" : 2
				},
				"flags" : {
					"fast" : 4,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.00008999999999999999,
					"pbm" : 0.000091,
					"pbe" : 0.000023,
					"pbg" : 0.000156
				},
				"osv" : {
					"windows" : 4,
					"linux" : 2
				},
				"tsv" : {
					"v023" : 5,
					"v022" : 1
				},
				"autosys" : [
					{
						"as" : 4766,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 9318,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 17858,
						"cuont" : 1
					}
				],
				"cbcc" : 26,
				"crcc" : 12625
			},
			{
				"country" : "PK",
				"relay" : 2,
				"bwa" : 137661,
				"bwc" : 62805,
				"roles" : {
					"middle" : 2,
					"dir" : 1,
					"exit" : 1
				},
				"flags" : {
					"notFastStable" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbm" : 0.000009,
					"pbe" : 0.000017
				},
				"osv" : {
					"windows" : 1,
					"linux" : 1
				},
				"tsv" : {
					"v022" : 1,
					"v023" : 1
				},
				"autosys" : [
					{
						"as" : 45595,
						"cuont" : 1
					},
					{
						"as" : 23674,
						"cuont" : 1
					}
				],
				"cbcc" : 34,
				"crcc" : 2265
			},
			{
				"country" : "HR",
				"relay" : 7,
				"bwa" : 3019679,
				"bwc" : 2347623,
				"roles" : {
					"middle" : 7,
					"dir" : 5,
					"guard" : 3
				},
				"flags" : {
					"fast" : 3,
					"fastStable" : 3,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000509,
					"pbm" : 0.0009120000000000002,
					"pbg" : 0.0006190000000000001
				},
				"osv" : {
					"windows" : 2,
					"linux" : 4,
					"freebsd" : 1
				},
				"tsv" : {
					"v023" : 5,
					"v022" : 2
				},
				"autosys" : [
					{
						"as" : 31012,
						"cuont" : 1
					},
					{
						"as" : 2108,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 34594,
						"cuont" : 1
					},
					{
						"as" : 41454,
						"cuont" : 1
					}
				],
				"cbcc" : 1,
				"crcc" : 868
			},
			{
				"country" : "CO",
				"relay" : 2,
				"bwa" : 141834,
				"bwc" : 34203,
				"roles" : {
					"middle" : 2,
					"exit" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000007,
					"pbe" : 0.000022
				},
				"osv" : {
					"windows" : 1,
					"linux" : 1
				},
				"tsv" : {
					"v023" : 2
				},
				"autosys" : [
					{
						"as" : 27992,
						"cuont" : 1
					},
					{
						"as" : 13489,
						"cuont" : 1
					}
				],
				"cbcc" : 7,
				"crcc" : 1912
			},
			{
				"country" : "IN",
				"relay" : 10,
				"bwa" : 2780281,
				"bwc" : 714542,
				"roles" : {
					"middle" : 10,
					"exit" : 7,
					"dir" : 6,
					"guard" : 2
				},
				"flags" : {
					"fast" : 6,
					"fastStable" : 3,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00011100000000000001,
					"pbe" : 0.000067,
					"pbg" : 0.000183,
					"pbm" : 0.000081
				},
				"osv" : {
					"windows" : 5,
					"linux" : 4,
					"freebsd" : 1
				},
				"tsv" : {
					"v023" : 9,
					"v024" : 1
				},
				"autosys" : [
					{
						"as" : 17813,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 33480,
						"cuont" : 1
					},
					{
						"as" : 24560,
						"cuont" : 1
					},
					{
						"as" : 55470,
						"cuont" : 1
					},
					{
						"as" : 24309,
						"cuont" : 1
					}
				],
				"cbcc" : 149,
				"crcc" : 14888
			},
			{
				"country" : "NZ",
				"relay" : 10,
				"bwa" : 1572272,
				"bwc" : 461560,
				"roles" : {
					"middle" : 10,
					"dir" : 4,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 6,
					"fast" : 3,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000058999999999999984,
					"pbm" : 0.00007999999999999999,
					"pbg" : 0.000094
				},
				"osv" : {
					"linux" : 6,
					"windows" : 4
				},
				"tsv" : {
					"v024" : 1,
					"v023" : 8,
					"v022" : 1
				},
				"autosys" : [
					{
						"as" : 24466,
						"cuont" : 1
					},
					{
						"as" : 9790,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 7657,
						"cuont" : 1
					},
					{
						"as" : 9433,
						"cuont" : 1
					},
					{
						"as" : 17746,
						"cuont" : 1
					},
					{
						"as" : 23655,
						"cuont" : 1
					},
					{
						"as" : 45230,
						"cuont" : 1
					},
					{
						"as" : 4771,
						"cuont" : 1
					}
				],
				"cbcc" : 16,
				"crcc" : 1422
			},
			{
				"country" : "RS",
				"relay" : 2,
				"bwa" : 237816,
				"bwc" : 50791,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000012,
					"pbm" : 0.000036
				},
				"osv" : {
					"windows" : 1,
					"linux" : 1
				},
				"tsv" : {
					"v023" : 2
				},
				"autosys" : [
					{
						"as" : 31042,
						"cuont" : 1,
						"count" : NaN
					}
				],
				"cbcc" : 5,
				"crcc" : 919
			},
			{
				"country" : "MD",
				"relay" : 2,
				"bwa" : 3831694,
				"bwc" : 2712418,
				"roles" : {
					"middle" : 2,
					"exit" : 2,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000794,
					"pbe" : 0.002127,
					"pbg" : 0.000128,
					"pbm" : 0.000128
				},
				"osv" : {
					"linux" : 2
				},
				"tsv" : {
					"v024" : 1,
					"v023" : 1
				},
				"autosys" : [
					{
						"as" : 43289,
						"cuont" : 1,
						"count" : NaN
					}
				],
				"cbcc" : 6,
				"crcc" : 6967
			},
			{
				"country" : "BY",
				"relay" : 1,
				"bwa" : 45056,
				"bwc" : 631,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbe" : 0.000001
				},
				"osv" : {
					"windows" : 1
				},
				"tsv" : {
					"v022" : 1
				},
				"autosys" : [
					{
						"as" : 6697,
						"cuont" : 1
					}
				],
				"cbcc" : 31,
				"crcc" : 2285
			},
			{
				"country" : "ZA",
				"relay" : 5,
				"bwa" : 277616,
				"bwc" : 35651,
				"roles" : {
					"middle" : 5,
					"exit" : 3,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 2,
					"notFastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000018,
					"pbe" : 0.000036,
					"pbm" : 0.000018
				},
				"osv" : {
					"linux" : 3,
					"windows" : 1,
					"darwin" : 1
				},
				"tsv" : {
					"v023" : 5
				},
				"autosys" : [
					{
						"as" : 16637,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 5713,
						"cuont" : 1
					}
				],
				"cbcc" : 13,
				"crcc" : 1458
			},
			{
				"country" : "EE",
				"relay" : 4,
				"bwa" : 7573854,
				"bwc" : 4271686,
				"roles" : {
					"middle" : 4,
					"exit" : 2,
					"dir" : 3,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000927,
					"pbe" : 0.000039,
					"pbg" : 0.00195,
					"pbm" : 0.000792
				},
				"osv" : {
					"freebsd" : 2,
					"linux" : 2
				},
				"tsv" : {
					"v025" : 1,
					"v023" : 3
				},
				"autosys" : [
					{
						"as" : 2586,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 39301,
						"cuont" : 1
					},
					{
						"as" : 34702,
						"cuont" : 1
					}
				],
				"cbcc" : 1,
				"crcc" : 798
			},
			{
				"country" : "IM",
				"relay" : 1,
				"bwa" : 409600,
				"bwc" : 269439,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000035,
					"pbm" : 0.000105
				},
				"osv" : {
					"linux" : 1
				},
				"tsv" : {
					"v023" : 1
				},
				"autosys" : [
					{
						"as" : 42455,
						"cuont" : 1
					}
				],
				"crcc" : 90
			},
			{
				"country" : "HK",
				"relay" : 9,
				"bwa" : 2267826,
				"bwc" : 442670,
				"roles" : {
					"middle" : 9,
					"dir" : 5,
					"exit" : 4,
					"guard" : 4
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 6,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.00016,
					"pbm" : 0.000121,
					"pbe" : 0.00022099999999999998,
					"pbg" : 0.00014000000000000001
				},
				"osv" : {
					"darwin" : 1,
					"linux" : 6,
					"windows" : 2
				},
				"tsv" : {
					"v023" : 7,
					"v022" : 1,
					"v024" : 1
				},
				"autosys" : [
					{
						"as" : 4658,
						"cuont" : 1
					},
					{
						"as" : 24544,
						"cuont" : 1
					},
					{
						"as" : 4760,
						"cuont" : 1
					},
					{
						"as" : 10103,
						"cuont" : 1
					},
					{
						"as" : 38478,
						"cuont" : 1
					},
					{
						"as" : 36236,
						"cuont" : 1
					},
					{
						"as" : 9269,
						"cuont" : 1
					},
					{
						"as" : 45753,
						"cuont" : 1
					},
					{
						"as" : 9304,
						"cuont" : 1
					}
				],
				"cbcc" : 2,
				"crcc" : 1310
			},
			{
				"country" : "MN",
				"relay" : 1,
				"bwa" : 4694913,
				"bwc" : 3577815,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000325,
					"pbg" : 0.000182,
					"pbm" : 0.000182,
					"pbe" : 0.000611
				},
				"osv" : {
					"linux" : 1
				},
				"tsv" : {
					"v023" : 1
				},
				"autosys" : [
					{
						"as" : 45204,
						"cuont" : 1
					}
				],
				"cbcc" : 1,
				"crcc" : 128
			},
			{
				"country" : "CN",
				"relay" : 4,
				"bwa" : 440320,
				"bwc" : 178311,
				"roles" : {
					"middle" : 4,
					"exit" : 3,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000049,
					"pbe" : 0.000124,
					"pbm" : 0.000023
				},
				"osv" : {
					"linux" : 4
				},
				"tsv" : {
					"v023" : 3,
					"v024" : 1
				},
				"autosys" : [
					{
						"as" : 2516,
						"cuont" : 1,
						"count" : NaN
					}
				],
				"cbcc" : 52,
				"crcc" : 1042
			},
			{
				"country" : "TH",
				"relay" : 3,
				"bwa" : 182227,
				"bwc" : 35635,
				"roles" : {
					"middle" : 3,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbm" : 0.000012
				},
				"osv" : {
					"windows" : 2,
					"linux" : 1
				},
				"tsv" : {
					"v023" : 3
				},
				"autosys" : [
					{
						"as" : 9737,
						"cuont" : 1
					},
					{
						"as" : 45758,
						"cuont" : 1
					},
					{
						"as" : 4765,
						"cuont" : 1
					}
				],
				"cbcc" : 31,
				"crcc" : 3191
			},
			{
				"country" : "SI",
				"relay" : 3,
				"bwa" : 1370457,
				"bwc" : 623366,
				"roles" : {
					"middle" : 3,
					"exit" : 2,
					"dir" : 3
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000193,
					"pbe" : 0.000252,
					"pbm" : 0.000327
				},
				"osv" : {
					"linux" : 2,
					"windows" : 1
				},
				"tsv" : {
					"v023" : 3
				},
				"autosys" : [
					{
						"as" : 34779,
						"cuont" : 1
					},
					{
						"as" : 2107,
						"cuont" : 1
					},
					{
						"as" : 5603,
						"cuont" : 1
					}
				],
				"cbcc" : 4,
				"crcc" : 1387
			},
			{
				"country" : "SA",
				"relay" : 1,
				"bwa" : 43320,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000004
				},
				"osv" : {
					"windows" : 1
				},
				"tsv" : {
					"v023" : 1
				},
				"autosys" : [
					{
						"as" : 25019,
						"cuont" : 1
					}
				],
				"cbcc" : 63,
				"crcc" : 12249
			},
			{
				"country" : "TN",
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 649,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbm" : 0.000001
				},
				"osv" : {
					"linux" : 1
				},
				"tsv" : {
					"v023" : 1
				},
				"autosys" : [
					{
						"as" : 2609,
						"cuont" : 1
					}
				],
				"cbcc" : 7,
				"crcc" : 1008
			},
			{
				"country" : "MT",
				"relay" : 2,
				"bwa" : 9118654,
				"bwc" : 3802511,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"exit" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.003343,
					"pbg" : 0.001873,
					"pbm" : 0.001873,
					"pbe" : 0.006282
				},
				"osv" : {
					"linux" : 2
				},
				"tsv" : {
					"v022" : 1,
					"v023" : 1
				},
				"autosys" : [
					{
						"as" : 20521,
						"cuont" : 1
					},
					{
						"as" : 61391,
						"cuont" : 1
					}
				],
				"crcc" : 219
			},
			{
				"country" : "PA",
				"relay" : 6,
				"bwa" : 452490,
				"bwc" : 129892,
				"roles" : {
					"middle" : 6,
					"dir" : 4,
					"exit" : 1
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000013,
					"pbm" : 0.000018,
					"pbe" : 0.000024
				},
				"osv" : {
					"windows" : 4,
					"linux" : 2
				},
				"tsv" : {
					"v023" : 4,
					"v022" : 2
				},
				"autosys" : [
					{
						"as" : 18809,
						"cuont" : 1,
						"count" : NaN
					},
					{
						"as" : 21599,
						"cuont" : 1
					},
					{
						"as" : 52284,
						"cuont" : 1
					}
				],
				"cbcc" : 1,
				"crcc" : 390
			},
			{
				"country" : "CR",
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 26012,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000011,
					"pbe" : 0.000032
				},
				"osv" : {
					"linux" : 1
				},
				"tsv" : {
					"v022" : 1
				},
				"autosys" : [
					{
						"as" : 3790,
						"cuont" : 1
					}
				],
				"cbcc" : 1,
				"crcc" : 504
			},
			{
				"country" : "EU",
				"relay" : 1,
				"bwa" : 83113,
				"bwc" : 13845,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbe" : 0.000004
				},
				"osv" : {
					"freebsd" : 1
				},
				"tsv" : {
					"v024" : 1
				},
				"autosys" : [
					{
						"as" : 250,
						"cuont" : 1
					}
				],
				"cbcc" : 7,
				"crcc" : 775
			},
			{
				"country" : "KH",
				"relay" : 1,
				"bwa" : 738456,
				"bwc" : 379289,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000052,
					"pbg" : 0.000029,
					"pbm" : 0.000029,
					"pbe" : 0.000098
				},
				"osv" : {
					"linux" : 1
				},
				"tsv" : {
					"v024" : 1
				},
				"autosys" : [
					{
						"as" : 55329,
						"cuont" : 1
					}
				],
				"crcc" : 208
			},
			{
				"country" : "??",
				"cbcc" : 242,
				"crcc" : 13765
			},
			{
				"country" : "A1",
				"cbcc" : 39,
				"crcc" : 968
			},
			{
				"country" : "AE",
				"cbcc" : 42,
				"crcc" : 2911
			},
			{
				"country" : "AF",
				"cbcc" : 2,
				"crcc" : 366
			},
			{
				"country" : "AN",
				"cbcc" : 1,
				"crcc" : 106
			},
			{
				"country" : "AZ",
				"cbcc" : 37,
				"crcc" : 603
			},
			{
				"country" : "BD",
				"cbcc" : 4,
				"crcc" : 1015
			},
			{
				"country" : "BH",
				"cbcc" : 2,
				"crcc" : 541
			},
			{
				"country" : "BN",
				"cbcc" : 1,
				"crcc" : 122
			},
			{
				"country" : "BO",
				"cbcc" : 1,
				"crcc" : 364
			},
			{
				"country" : "CG",
				"cbcc" : 2,
				"crcc" : 39
			},
			{
				"country" : "CI",
				"cbcc" : 8,
				"crcc" : 708
			},
			{
				"country" : "CL",
				"cbcc" : 1,
				"crcc" : 2433
			},
			{
				"country" : "CU",
				"cbcc" : 2,
				"crcc" : 148
			},
			{
				"country" : "CY",
				"cbcc" : 7,
				"crcc" : 277
			},
			{
				"country" : "DZ",
				"cbcc" : 32,
				"crcc" : 1450
			},
			{
				"country" : "EC",
				"cbcc" : 2,
				"crcc" : 706
			},
			{
				"country" : "GE",
				"cbcc" : 1,
				"crcc" : 2097
			},
			{
				"country" : "GG",
				"cbcc" : 1,
				"crcc" : 49
			},
			{
				"country" : "GT",
				"cbcc" : 1,
				"crcc" : 313
			},
			{
				"country" : "GU",
				"cbcc" : 2,
				"crcc" : 61
			},
			{
				"country" : "IQ",
				"cbcc" : 10,
				"crcc" : 547
			},
			{
				"country" : "IR",
				"cbcc" : 327,
				"crcc" : 6913
			},
			{
				"country" : "JO",
				"cbcc" : 24,
				"crcc" : 824
			},
			{
				"country" : "KE",
				"cbcc" : 2,
				"crcc" : 419
			},
			{
				"country" : "KW",
				"cbcc" : 10,
				"crcc" : 988
			},
			{
				"country" : "LB",
				"cbcc" : 16,
				"crcc" : 1170
			},
			{
				"country" : "LK",
				"cbcc" : 2,
				"crcc" : 245
			},
			{
				"country" : "MA",
				"cbcc" : 18,
				"crcc" : 1372
			},
			{
				"country" : "MG",
				"cbcc" : 2,
				"crcc" : 168
			},
			{
				"country" : "MM",
				"cbcc" : 1,
				"crcc" : 277
			},
			{
				"country" : "MO",
				"cbcc" : 1,
				"crcc" : 107
			},
			{
				"country" : "MR",
				"cbcc" : 6,
				"crcc" : 53
			},
			{
				"country" : "MW",
				"cbcc" : 2,
				"crcc" : 32
			},
			{
				"country" : "NG",
				"cbcc" : 8,
				"crcc" : 924
			},
			{
				"country" : "NI",
				"cbcc" : 1,
				"crcc" : 161
			},
			{
				"country" : "OM",
				"cbcc" : 1,
				"crcc" : 284
			},
			{
				"country" : "PE",
				"cbcc" : 5,
				"crcc" : 1119
			},
			{
				"country" : "PH",
				"cbcc" : 27,
				"crcc" : 3104
			},
			{
				"country" : "PR",
				"cbcc" : 7,
				"crcc" : 292
			},
			{
				"country" : "PS",
				"cbcc" : 9,
				"crcc" : 293
			},
			{
				"country" : "PY",
				"cbcc" : 2,
				"crcc" : 278
			},
			{
				"country" : "QA",
				"cbcc" : 1,
				"crcc" : 680
			},
			{
				"country" : "SC",
				"cbcc" : 2,
				"crcc" : 197
			},
			{
				"country" : "SD",
				"cbcc" : 10,
				"crcc" : 525
			},
			{
				"country" : "SV",
				"cbcc" : 1,
				"crcc" : 278
			},
			{
				"country" : "SY",
				"cbcc" : 127,
				"crcc" : 3416
			},
			{
				"country" : "UZ",
				"cbcc" : 1,
				"crcc" : 491
			},
			{
				"country" : "VE",
				"cbcc" : 7,
				"crcc" : 1925
			},
			{
				"country" : "YE",
				"cbcc" : 17,
				"crcc" : 322
			},
			{
				"country" : "A2",
				"crcc" : 187
			},
			{
				"country" : "AD",
				"crcc" : 178
			},
			{
				"country" : "AG",
				"crcc" : 23
			},
			{
				"country" : "AI",
				"crcc" : 4
			},
			{
				"country" : "AL",
				"crcc" : 278
			},
			{
				"country" : "AM",
				"crcc" : 299
			},
			{
				"country" : "AO",
				"crcc" : 103
			},
			{
				"country" : "AP",
				"crcc" : 90
			},
			{
				"country" : "AS",
				"crcc" : 18
			},
			{
				"country" : "AW",
				"crcc" : 74
			},
			{
				"country" : "AX",
				"crcc" : 32
			},
			{
				"country" : "BB",
				"crcc" : 91
			},
			{
				"country" : "BF",
				"crcc" : 118
			},
			{
				"country" : "BI",
				"crcc" : 4
			},
			{
				"country" : "BJ",
				"crcc" : 651
			},
			{
				"country" : "BM",
				"crcc" : 45
			},
			{
				"country" : "BQ",
				"crcc" : 6
			},
			{
				"country" : "BS",
				"crcc" : 123
			},
			{
				"country" : "BT",
				"crcc" : 56
			},
			{
				"country" : "BW",
				"crcc" : 30
			},
			{
				"country" : "BZ",
				"crcc" : 115
			},
			{
				"country" : "CD",
				"crcc" : 33
			},
			{
				"country" : "CK",
				"crcc" : 7
			},
			{
				"country" : "CM",
				"crcc" : 228
			},
			{
				"country" : "CS",
				"crcc" : 3
			},
			{
				"country" : "CV",
				"crcc" : 25
			},
			{
				"country" : "CW",
				"crcc" : 27
			},
			{
				"country" : "DJ",
				"crcc" : 63
			},
			{
				"country" : "DM",
				"crcc" : 21
			},
			{
				"country" : "ER",
				"crcc" : 4
			},
			{
				"country" : "ET",
				"crcc" : 529
			},
			{
				"country" : "FJ",
				"crcc" : 50
			},
			{
				"country" : "FK",
				"crcc" : 5
			},
			{
				"country" : "FM",
				"crcc" : 11
			},
			{
				"country" : "FO",
				"crcc" : 20
			},
			{
				"country" : "GA",
				"crcc" : 120
			},
			{
				"country" : "GD",
				"crcc" : 47
			},
			{
				"country" : "GF",
				"crcc" : 59
			},
			{
				"country" : "GH",
				"crcc" : 440
			},
			{
				"country" : "GI",
				"crcc" : 67
			},
			{
				"country" : "GL",
				"crcc" : 31
			},
			{
				"country" : "GM",
				"crcc" : 34
			},
			{
				"country" : "GN",
				"crcc" : 7
			},
			{
				"country" : "GP",
				"crcc" : 108
			},
			{
				"country" : "GQ",
				"crcc" : 4
			},
			{
				"country" : "GY",
				"crcc" : 60
			},
			{
				"country" : "HN",
				"crcc" : 181
			},
			{
				"country" : "HT",
				"crcc" : 61
			},
			{
				"country" : "JM",
				"crcc" : 169
			},
			{
				"country" : "KG",
				"crcc" : 147
			},
			{
				"country" : "KM",
				"crcc" : 8
			},
			{
				"country" : "KN",
				"crcc" : 14
			},
			{
				"country" : "KP",
				"crcc" : 88
			},
			{
				"country" : "KY",
				"crcc" : 48
			},
			{
				"country" : "LA",
				"crcc" : 125
			},
			{
				"country" : "LC",
				"crcc" : 36
			},
			{
				"country" : "LI",
				"crcc" : 90
			},
			{
				"country" : "LR",
				"crcc" : 24
			},
			{
				"country" : "LS",
				"crcc" : 18
			},
			{
				"country" : "LY",
				"crcc" : 252
			},
			{
				"country" : "MC",
				"crcc" : 117
			},
			{
				"country" : "ME",
				"crcc" : 104
			},
			{
				"country" : "MF",
				"crcc" : 2
			},
			{
				"country" : "MH",
				"crcc" : 5
			},
			{
				"country" : "ML",
				"crcc" : 79
			},
			{
				"country" : "MP",
				"crcc" : 21
			},
			{
				"country" : "MQ",
				"crcc" : 190
			},
			{
				"country" : "MU",
				"crcc" : 150
			},
			{
				"country" : "MV",
				"crcc" : 121
			},
			{
				"country" : "MZ",
				"crcc" : 126
			},
			{
				"country" : "NA",
				"crcc" : 102
			},
			{
				"country" : "NC",
				"crcc" : 194
			},
			{
				"country" : "NE",
				"crcc" : 54
			},
			{
				"country" : "NP",
				"crcc" : 197
			},
			{
				"country" : "PF",
				"crcc" : 176
			},
			{
				"country" : "PG",
				"crcc" : 29
			},
			{
				"country" : "PM",
				"crcc" : 33
			},
			{
				"country" : "PW",
				"crcc" : 8
			},
			{
				"country" : "RE",
				"crcc" : 109
			},
			{
				"country" : "RW",
				"crcc" : 106
			},
			{
				"country" : "SB",
				"crcc" : 24
			},
			{
				"country" : "SH",
				"crcc" : 1
			},
			{
				"country" : "SL",
				"crcc" : 2
			},
			{
				"country" : "SM",
				"crcc" : 121
			},
			{
				"country" : "SN",
				"crcc" : 578
			},
			{
				"country" : "SO",
				"crcc" : 21
			},
			{
				"country" : "SR",
				"crcc" : 109
			},
			{
				"country" : "ST",
				"crcc" : 4
			},
			{
				"country" : "SZ",
				"crcc" : 9
			},
			{
				"country" : "TD",
				"crcc" : 7
			},
			{
				"country" : "TG",
				"crcc" : 145
			},
			{
				"country" : "TJ",
				"crcc" : 89
			},
			{
				"country" : "TL",
				"crcc" : 65
			},
			{
				"country" : "TM",
				"crcc" : 562
			},
			{
				"country" : "TO",
				"crcc" : 17
			},
			{
				"country" : "TT",
				"crcc" : 166
			},
			{
				"country" : "TV",
				"crcc" : 4
			},
			{
				"country" : "TZ",
				"crcc" : 98
			},
			{
				"country" : "UG",
				"crcc" : 168
			},
			{
				"country" : "UY",
				"crcc" : 612
			},
			{
				"country" : "VA",
				"crcc" : 19
			},
			{
				"country" : "VC",
				"crcc" : 12
			},
			{
				"country" : "VG",
				"crcc" : 32
			},
			{
				"country" : "VI",
				"crcc" : 70
			},
			{
				"country" : "VU",
				"crcc" : 17
			},
			{
				"country" : "WS",
				"crcc" : 2
			},
			{
				"country" : "YT",
				"crcc" : 13
			},
			{
				"country" : "ZM",
				"crcc" : 73
			},
			{
				"country" : "ZW",
				"crcc" : 90
			}
		],
		"autosys" : [
			{
				"as" : 2012,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 156064,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000048,
					"pbg" : 0.000103,
					"pbm" : 0.000041
				},
				"countries" : [
					{
						"cc" : "HU",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 156064,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000048,
							"pbg" : 0.000103,
							"pbm" : 0.000041
						}
					}
				]
			},
			{
				"as" : 520832,
				"relay" : 32,
				"bwa" : 56371493,
				"bwc" : 40830163,
				"roles" : {
					"guard" : 21,
					"middle" : 32,
					"exit" : 10,
					"dir" : 20
				},
				"flags" : {
					"fastStable" : 22,
					"stable" : 2,
					"fast" : 8
				},
				"probs" : {
					"pbr" : 0.017782000000000003,
					"pbg" : 0.015751,
					"pbm" : 0.018814,
					"pbe" : 0.018787
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 20,
						"bwa" : 37423225,
						"bwc" : 29148717,
						"roles" : {
							"guard" : 12,
							"middle" : 20,
							"exit" : 5,
							"dir" : 11
						},
						"flags" : {
							"fastStable" : 14,
							"stable" : 2,
							"fast" : 4
						},
						"probs" : {
							"pbr" : 0.012347,
							"pbg" : 0.011113999999999999,
							"pbm" : 0.015953,
							"pbe" : 0.009978
						}
					},
					{
						"cc" : "CA",
						"relay" : 5,
						"bwa" : 10070091,
						"bwc" : 6859573,
						"roles" : {
							"guard" : 4,
							"middle" : 5,
							"dir" : 5,
							"exit" : 2
						},
						"flags" : {
							"fastStable" : 2,
							"fast" : 3
						},
						"probs" : {
							"pbr" : 0.0038060000000000004,
							"pbg" : 0.003118,
							"pbm" : 0.001789,
							"pbe" : 0.006513
						}
					},
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 122880,
						"bwc" : 9931,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbm" : 0.000034
						}
					},
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 262144,
						"bwc" : 198547,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000059,
							"pbg" : 0.000033,
							"pbm" : 0.000033,
							"pbe" : 0.000112
						}
					},
					{
						"cc" : "GB",
						"relay" : 3,
						"bwa" : 7596032,
						"bwc" : 4302704,
						"roles" : {
							"guard" : 3,
							"middle" : 3,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.001388,
							"pbg" : 0.001395,
							"pbm" : 0.00089,
							"pbe" : 0.001878
						}
					},
					{
						"cc" : "IE",
						"relay" : 2,
						"bwa" : 897121,
						"bwc" : 310691,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000171,
							"pbg" : 0.000091,
							"pbm" : 0.000115,
							"pbe" : 0.000306
						}
					}
				]
			},
			{
				"as" : 107584,
				"relay" : 16,
				"bwa" : 27955393,
				"bwc" : 18257381,
				"roles" : {
					"guard" : 12,
					"middle" : 16,
					"exit" : 2,
					"dir" : 8
				},
				"flags" : {
					"fastStable" : 14,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.007729,
					"pbg" : 0.012952,
					"pbm" : 0.008043,
					"pbe" : 0.0021959999999999996
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 16,
						"bwa" : 27955393,
						"bwc" : 18257381,
						"roles" : {
							"guard" : 12,
							"middle" : 16,
							"exit" : 2,
							"dir" : 8
						},
						"flags" : {
							"fastStable" : 14,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.007729,
							"pbg" : 0.012952,
							"pbm" : 0.008043,
							"pbe" : 0.0021959999999999996
						}
					}
				]
			},
			{
				"as" : 54440,
				"relay" : 8,
				"bwa" : 2669804,
				"bwc" : 2125755,
				"roles" : {
					"middle" : 8,
					"dir" : 4,
					"guard" : 1
				},
				"flags" : {
					"fast" : 5,
					"fastStable" : 1,
					"notFastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000565,
					"pbm" : 0.000668,
					"pbg" : 0.001027
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 2669804,
						"bwc" : 2125755,
						"roles" : {
							"middle" : 8,
							"dir" : 4,
							"guard" : 1
						},
						"flags" : {
							"fast" : 5,
							"fastStable" : 1,
							"notFastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000565,
							"pbm" : 0.000668,
							"pbg" : 0.001027
						}
					}
				]
			},
			{
				"as" : 16952,
				"relay" : 8,
				"bwa" : 1147685,
				"bwc" : 693946,
				"roles" : {
					"middle" : 8,
					"dir" : 3,
					"exit" : 2,
					"guard" : 1
				},
				"flags" : {
					"notFastStable" : 1,
					"fastStable" : 3,
					"fast" : 3,
					"stable" : 1
				},
				"probs" : {
					"pbm" : 0.000279,
					"pbr" : 0.000183,
					"pbe" : 0.000212,
					"pbg" : 0.000057
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 6,
						"bwa" : 889015,
						"bwc" : 598569,
						"roles" : {
							"middle" : 6,
							"exit" : 2,
							"dir" : 1,
							"guard" : 1
						},
						"flags" : {
							"notFastStable" : 1,
							"fastStable" : 2,
							"fast" : 2,
							"stable" : 1
						},
						"probs" : {
							"pbm" : 0.00017800000000000002,
							"pbr" : 0.000149,
							"pbe" : 0.000212,
							"pbg" : 0.000057
						}
					},
					{
						"cc" : "NO",
						"relay" : 2,
						"bwa" : 258670,
						"bwc" : 95377,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000034,
							"pbm" : 0.000101
						}
					}
				]
			},
			{
				"as" : 214668,
				"relay" : 4,
				"bwa" : 4827722,
				"bwc" : 3135084,
				"roles" : {
					"guard" : 2,
					"middle" : 4,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.001691,
					"pbg" : 0.000342,
					"pbm" : 0.003933,
					"pbe" : 0.000797
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 4827722,
						"bwc" : 3135084,
						"roles" : {
							"guard" : 2,
							"middle" : 4,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.001691,
							"pbg" : 0.000342,
							"pbm" : 0.003933,
							"pbe" : 0.000797
						}
					}
				]
			},
			{
				"as" : 253504,
				"relay" : 32,
				"bwa" : 7936265,
				"bwc" : 2753851,
				"roles" : {
					"guard" : 5,
					"middle" : 32,
					"dir" : 21,
					"exit" : 4
				},
				"flags" : {
					"fastStable" : 16,
					"fast" : 10,
					"stable" : 5,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000892,
					"pbg" : 0.0011970000000000001,
					"pbm" : 0.001336,
					"pbe" : 0.000141
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 32,
						"bwa" : 7936265,
						"bwc" : 2753851,
						"roles" : {
							"guard" : 5,
							"middle" : 32,
							"dir" : 21,
							"exit" : 4
						},
						"flags" : {
							"fastStable" : 16,
							"fast" : 10,
							"stable" : 5,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000892,
							"pbg" : 0.0011970000000000001,
							"pbm" : 0.001336,
							"pbe" : 0.000141
						}
					}
				]
			},
			{
				"as" : 40092,
				"relay" : 1,
				"bwa" : 131072,
				"bwc" : 34176,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000011,
					"pbm" : 0.000032
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 131072,
						"bwc" : 34176,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbm" : 0.000032
						}
					}
				]
			},
			{
				"as" : 57056,
				"relay" : 8,
				"bwa" : 1011148,
				"bwc" : 276675,
				"roles" : {
					"middle" : 8,
					"dir" : 5,
					"guard" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 6,
					"stable" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00007500000000000001,
					"pbm" : 0.00013299999999999998,
					"pbg" : 0.000086,
					"pbe" : 0.000006
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 1011148,
						"bwc" : 276675,
						"roles" : {
							"middle" : 8,
							"dir" : 5,
							"guard" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 6,
							"stable" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00007500000000000001,
							"pbm" : 0.00013299999999999998,
							"pbg" : 0.000086,
							"pbe" : 0.000006
						}
					}
				]
			},
			{
				"as" : 18852,
				"relay" : 4,
				"bwa" : 573993,
				"bwc" : 89805,
				"roles" : {
					"middle" : 4,
					"dir" : 3
				},
				"flags" : {
					"fastStable" : 1,
					"notFastStable" : 1,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000019999999999999998,
					"pbm" : 0.000061
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 4,
						"bwa" : 573993,
						"bwc" : 89805,
						"roles" : {
							"middle" : 4,
							"dir" : 3
						},
						"flags" : {
							"fastStable" : 1,
							"notFastStable" : 1,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000019999999999999998,
							"pbm" : 0.000061
						}
					}
				]
			},
			{
				"as" : 14058,
				"relay" : 2,
				"bwa" : 563200,
				"bwc" : 504095,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
						"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000145,
					"pbe" : 0.000004,
					"pbg" : 0.000309,
					"pbm" : 0.000122
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 563200,
						"bwc" : 504095,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000145,
							"pbe" : 0.000004,
							"pbg" : 0.000309,
							"pbm" : 0.000122
						}
					}
				]
			},
			{
				"as" : 54888,
				"relay" : 4,
				"bwa" : 26169165,
				"bwc" : 15750587,
				"roles" : {
					"guard" : 3,
					"middle" : 4,
					"exit" : 4,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.01262,
					"pbg" : 0.006856,
					"pbm" : 0.006855,
					"pbe" : 0.024146
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 26169165,
						"bwc" : 15750587,
						"roles" : {
							"guard" : 3,
							"middle" : 4,
							"exit" : 4,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.01262,
							"pbg" : 0.006856,
							"pbm" : 0.006855,
							"pbe" : 0.024146
						}
					}
				]
			},
			{
				"as" : 81424,
				"relay" : 16,
				"bwa" : 2888244,
				"bwc" : 906783,
				"roles" : {
					"middle" : 16,
					"dir" : 9,
					"guard" : 3
				},
				"flags" : {
					"fast" : 7,
					"notFastStable" : 2,
					"fastStable" : 6,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.00037999999999999997,
					"pbm" : 0.000537,
					"pbg" : 0.000601
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 16,
						"bwa" : 2888244,
						"bwc" : 906783,
						"roles" : {
							"middle" : 16,
							"dir" : 9,
							"guard" : 3
						},
						"flags" : {
							"fast" : 7,
							"notFastStable" : 2,
							"fastStable" : 6,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.00037999999999999997,
							"pbm" : 0.000537,
							"pbg" : 0.000601
						}
					}
				]
			},
			{
				"as" : 68408,
				"relay" : 8,
				"bwa" : 7492404,
				"bwc" : 4110664,
				"roles" : {
					"guard" : 7,
					"middle" : 8,
					"dir" : 7
				},
				"flags" : {
					"fastStable" : 7,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.0012360000000000001,
					"pbg" : 0.002648,
					"pbm" : 0.001058
				},
				"countries" : [
					{
						"cc" : "IL",
						"relay" : 8,
						"bwa" : 7492404,
						"bwc" : 4110664,
						"roles" : {
							"guard" : 7,
							"middle" : 8,
							"dir" : 7
						},
						"flags" : {
							"fastStable" : 7,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.0012360000000000001,
							"pbg" : 0.002648,
							"pbm" : 0.001058
						}
					}
				]
			},
			{
				"as" : 9576,
				"relay" : 2,
				"bwa" : 74110,
				"bwc" : 20294,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000008
				},
				"countries" : [
					{
						"cc" : "MY",
						"relay" : 2,
						"bwa" : 74110,
						"bwc" : 20294,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000008
						}
					}
				]
			},
			{
				"as" : 6612,
				"relay" : 4,
				"bwa" : 8262698,
				"bwc" : 6173508,
				"roles" : {
					"middle" : 4,
					"guard" : 3,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.004144,
					"pbm" : 0.00353,
					"pbg" : 0.008898999999999999
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 4,
						"bwa" : 8262698,
						"bwc" : 6173508,
						"roles" : {
							"middle" : 4,
							"guard" : 3,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.004144,
							"pbm" : 0.00353,
							"pbg" : 0.008898999999999999
						}
					}
				]
			},
			{
				"as" : 64008,
				"relay" : 8,
				"bwa" : 9405872,
				"bwc" : 5325371,
				"roles" : {
					"guard" : 3,
					"middle" : 8,
					"dir" : 2,
					"exit" : 2
				},
				"flags" : {
					"fastStable" : 5,
					"fast" : 3
				},
				"probs" : {
					"pbr" : 0.0035849999999999996,
					"pbg" : 0.000966,
					"pbm" : 0.000547,
					"pbe" : 0.009242
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 9405872,
						"bwc" : 5325371,
						"roles" : {
							"guard" : 3,
							"middle" : 8,
							"dir" : 2,
							"exit" : 2
						},
						"flags" : {
							"fastStable" : 5,
							"fast" : 3
						},
						"probs" : {
							"pbr" : 0.0035849999999999996,
							"pbg" : 0.000966,
							"pbm" : 0.000547,
							"pbe" : 0.009242
						}
					}
				]
			},
			{
				"as" : 25556,
				"relay" : 4,
				"bwa" : 104335,
				"bwc" : 11487,
				"roles" : {
					"middle" : 4,
					"dir" : 1
				},
				"flags" : {
					"stable" : 2,
					"notFastStable" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbm" : 0.000025,
					"pbr" : 0.000008
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 104335,
						"bwc" : 11487,
						"roles" : {
							"middle" : 4,
							"dir" : 1
						},
						"flags" : {
							"stable" : 2,
							"notFastStable" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbm" : 0.000025,
							"pbr" : 0.000008
						}
					}
				]
			},
			{
				"as" : 238088,
				"relay" : 8,
				"bwa" : 92232219,
				"bwc" : 69501343,
				"roles" : {
					"guard" : 7,
					"middle" : 8,
					"exit" : 5,
					"dir" : 7
				},
				"flags" : {
					"fastStable" : 7,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.036993,
					"pbg" : 0.02081,
					"pbm" : 0.020751,
					"pbe" : 0.069408
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 7,
						"bwa" : 92210296,
						"bwc" : 69500643,
						"roles" : {
							"guard" : 7,
							"middle" : 7,
							"exit" : 5,
							"dir" : 7
						},
						"flags" : {
							"fastStable" : 7
						},
						"probs" : {
							"pbr" : 0.03699,
							"pbg" : 0.02081,
							"pbm" : 0.020742,
							"pbe" : 0.069408
						}
					},
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 21923,
						"bwc" : 700,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 51969,
				"relay" : 1,
				"bwa" : 2356414,
				"bwc" : 691758,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.001108,
					"pbg" : 0.000621,
					"pbm" : 0.000621,
					"pbe" : 0.002081
				},
				"countries" : [
					{
						"cc" : "IS",
						"relay" : 1,
						"bwa" : 2356414,
						"bwc" : 691758,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.001108,
							"pbg" : 0.000621,
							"pbm" : 0.000621,
							"pbe" : 0.002081
						}
					}
				]
			},
			{
				"as" : 18964,
				"relay" : 2,
				"bwa" : 936752,
				"bwc" : 85978,
				"roles" : {
					"middle" : 2,
					"exit" : 2,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000062,
					"pbe" : 0.000125,
					"pbg" : 0.000032,
					"pbm" : 0.000032
				},
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 2,
						"bwa" : 936752,
						"bwc" : 85978,
						"roles" : {
							"middle" : 2,
							"exit" : 2,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000062,
							"pbe" : 0.000125,
							"pbg" : 0.000032,
							"pbm" : 0.000032
						}
					}
				]
			},
			{
				"as" : 41715,
				"relay" : 1,
				"bwa" : 27613,
				"bwc" : 2188,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 1,
						"bwa" : 27613,
						"bwc" : 2188,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 109280,
				"relay" : 16,
				"bwa" : 18716356,
				"bwc" : 15559133,
				"roles" : {
					"middle" : 16,
					"dir" : 12,
					"guard" : 5,
					"exit" : 2
				},
				"flags" : {
					"fastStable" : 13,
					"fast" : 3
				},
				"probs" : {
					"pbr" : 0.003363,
					"pbm" : 0.002894,
					"pbg" : 0.006137,
					"pbe" : 0.001058
				},
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 3,
						"bwa" : 247808,
						"bwc" : 41385,
						"roles" : {
							"middle" : 3,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000022999999999999997,
							"pbm" : 0.000068
						}
					},
					{
						"cc" : "CH",
						"relay" : 6,
						"bwa" : 1299443,
						"bwc" : 807443,
						"roles" : {
							"middle" : 6,
							"dir" : 5,
							"guard" : 2,
							"exit" : 2
						},
						"flags" : {
							"fastStable" : 5,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00044199999999999996,
							"pbm" : 0.00016600000000000002,
							"pbg" : 0.000105,
							"pbe" : 0.001058
						}
					},
					{
						"cc" : "CZ",
						"relay" : 3,
						"bwa" : 466944,
						"bwc" : 250273,
						"roles" : {
							"middle" : 3,
							"dir" : 3,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.000078,
							"pbm" : 0.00009999999999999999,
							"pbg" : 0.000133
						}
					},
					{
						"cc" : "AT",
						"relay" : 3,
						"bwa" : 16446161,
						"bwc" : 14226460,
						"roles" : {
							"guard" : 2,
							"middle" : 3,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00277,
							"pbg" : 0.005899000000000001,
							"pbm" : 0.002411
						}
					},
					{
						"cc" : "SK",
						"relay" : 1,
						"bwa" : 256000,
						"bwc" : 233572,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00005,
							"pbm" : 0.000149
						}
					}
				]
			},
			{
				"as" : 98670,
				"relay" : 2,
				"bwa" : 307200,
				"bwc" : 291918,
				"roles" : {
					"middle" : 2,
					"exit" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000041,
					"pbe" : 0.000123
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 307200,
						"bwc" : 291918,
						"roles" : {
							"middle" : 2,
							"exit" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000041,
							"pbe" : 0.000123
						}
					}
				]
			},
			{
				"as" : 12992,
				"relay" : 4,
				"bwa" : 1433600,
				"bwc" : 1732875,
				"roles" : {
					"middle" : 4,
					"dir" : 4,
					"guard" : 2
				},
				"flags" : {
					"fastStable" : 3,
					"stable" : 1,
					"authority" : 1
				},
				"probs" : {
					"pbr" : 0.000595,
					"pbm" : 0.000536,
					"pbg" : 0.001251
				},
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 4,
						"bwa" : 1433600,
						"bwc" : 1732875,
						"roles" : {
							"middle" : 4,
							"dir" : 4,
							"guard" : 2
						},
						"flags" : {
							"fastStable" : 3,
							"stable" : 1,
							"authority" : 1
						},
						"probs" : {
							"pbr" : 0.000595,
							"pbm" : 0.000536,
							"pbg" : 0.001251
						}
					}
				]
			},
			{
				"as" : 50860,
				"relay" : 4,
				"bwa" : 375867,
				"bwc" : 46791,
				"roles" : {
					"middle" : 4,
					"exit" : 2,
					"dir" : 4
				},
				"flags" : {
					"fast" : 3,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000013000000000000001,
					"pbe" : 0.000018,
					"pbm" : 0.000022
				},
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 4,
						"bwa" : 375867,
						"bwc" : 46791,
						"roles" : {
							"middle" : 4,
							"exit" : 2,
							"dir" : 4
						},
						"flags" : {
							"fast" : 3,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000013000000000000001,
							"pbe" : 0.000018,
							"pbm" : 0.000022
						}
					}
				]
			},
			{
				"as" : 35411,
				"relay" : 1,
				"bwa" : 4610,
				"bwc" : 60,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000021,
					"pbm" : 0.000062
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 4610,
						"bwc" : 60,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000021,
							"pbm" : 0.000062
						}
					}
				]
			},
			{
				"as" : 798080,
				"relay" : 32,
				"bwa" : 35436920,
				"bwc" : 26425918,
				"roles" : {
					"guard" : 23,
					"middle" : 32,
					"dir" : 15,
					"exit" : 5
				},
				"flags" : {
					"fastStable" : 28,
					"fast" : 4
				},
				"probs" : {
					"pbr" : 0.009517000000000001,
					"pbg" : 0.015213999999999998,
					"pbm" : 0.012268,
					"pbe" : 0.001077
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 32,
						"bwa" : 35436920,
						"bwc" : 26425918,
						"roles" : {
							"guard" : 23,
							"middle" : 32,
							"dir" : 15,
							"exit" : 5
						},
						"flags" : {
							"fastStable" : 28,
							"fast" : 4
						},
						"probs" : {
							"pbr" : 0.009517000000000001,
							"pbg" : 0.015213999999999998,
							"pbm" : 0.012268,
							"pbe" : 0.001077
						}
					}
				]
			},
			{
				"as" : 96722,
				"relay" : 2,
				"bwa" : 2007884,
				"bwc" : 401004,
				"roles" : {
					"middle" : 2,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000203,
					"pbe" : 0.000396,
					"pbm" : 0.000213
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 2007884,
						"bwc" : 401004,
						"roles" : {
							"middle" : 2,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000203,
							"pbe" : 0.000396,
							"pbm" : 0.000213
						}
					}
				]
			},
			{
				"as" : 55072,
				"relay" : 4,
				"bwa" : 1155072,
				"bwc" : 825142,
				"roles" : {
					"guard" : 2,
					"middle" : 4,
					"dir" : 3,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000158,
					"pbg" : 0.000286,
					"pbm" : 0.000153,
					"pbe" : 0.000035
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 1155072,
						"bwc" : 825142,
						"roles" : {
							"guard" : 2,
							"middle" : 4,
							"dir" : 3,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.000158,
							"pbg" : 0.000286,
							"pbm" : 0.000153,
							"pbe" : 0.000035
						}
					}
				]
			},
			{
				"as" : 18566,
				"relay" : 1,
				"bwa" : 40960,
				"bwc" : 685,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000003
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 40960,
						"bwc" : 685,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000003
						}
					}
				]
			},
			{
				"as" : 15090,
				"relay" : 2,
				"bwa" : 101027,
				"bwc" : 6873,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbm" : 0.000001,
					"pbr" : 0.000001,
					"pbe" : 0.000003
				},
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 2,
						"bwa" : 101027,
						"bwc" : 6873,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbm" : 0.000001,
							"pbr" : 0.000001,
							"pbe" : 0.000003
						}
					}
				]
			},
			{
				"as" : 7796,
				"relay" : 1,
				"bwa" : 256000,
				"bwc" : 68728,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00006,
					"pbg" : 0.000034,
					"pbm" : 0.000034,
					"pbe" : 0.000114
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 256000,
						"bwc" : 68728,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00006,
							"pbg" : 0.000034,
							"pbm" : 0.000034,
							"pbe" : 0.000114
						}
					}
				]
			},
			{
				"as" : 19662,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 9575,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000006
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 9575,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000006
						}
					}
				]
			},
			{
				"as" : 116452,
				"relay" : 4,
				"bwa" : 4481963,
				"bwc" : 2183656,
				"roles" : {
					"middle" : 4,
					"exit" : 3,
					"guard" : 3,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.0010680000000000002,
					"pbe" : 0.001378,
					"pbg" : 0.001134,
					"pbm" : 0.000692
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 4,
						"bwa" : 4481963,
						"bwc" : 2183656,
						"roles" : {
							"middle" : 4,
							"exit" : 3,
							"guard" : 3,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.0010680000000000002,
							"pbe" : 0.001378,
							"pbg" : 0.001134,
							"pbm" : 0.000692
						}
					}
				]
			},
			{
				"as" : 1672,
				"relay" : 8,
				"bwa" : 969846,
				"bwc" : 338648,
				"roles" : {
					"middle" : 8,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 4,
					"fast" : 4
				},
				"probs" : {
					"pbr" : 0.000068,
					"pbm" : 0.00020200000000000003
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 969846,
						"bwc" : 338648,
						"roles" : {
							"middle" : 8,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 4,
							"fast" : 4
						},
						"probs" : {
							"pbr" : 0.000068,
							"pbm" : 0.00020200000000000003
						}
					}
				]
			},
			{
				"as" : 62296,
				"relay" : 2,
				"bwa" : 237568,
				"bwc" : 109834,
				"roles" : {
					"middle" : 2,
					"exit" : 2,
					"guard" : 1,
					"dir" : 1
				},
				"flags" : {
					"stable" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000036,
					"pbe" : 0.00007,
					"pbg" : 0.000018,
					"pbm" : 0.000018
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 2,
						"bwa" : 237568,
						"bwc" : 109834,
						"roles" : {
							"middle" : 2,
							"exit" : 2,
							"guard" : 1,
							"dir" : 1
						},
						"flags" : {
							"stable" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000036,
							"pbe" : 0.00007,
							"pbg" : 0.000018,
							"pbm" : 0.000018
						}
					}
				]
			},
			{
				"as" : 46841,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 951334,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000299,
					"pbg" : 0.000642,
					"pbm" : 0.000254
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 951334,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000299,
							"pbg" : 0.000642,
							"pbm" : 0.000254
						}
					}
				]
			},
			{
				"as" : 56144,
				"relay" : 8,
				"bwa" : 517336,
				"bwc" : 92796,
				"roles" : {
					"middle" : 8,
					"dir" : 4,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 4,
					"stable" : 1,
					"fast" : 2,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000036,
					"pbm" : 0.000095,
					"pbe" : 0.000014
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 517336,
						"bwc" : 92796,
						"roles" : {
							"middle" : 8,
							"dir" : 4,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 4,
							"stable" : 1,
							"fast" : 2,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000036,
							"pbm" : 0.000095,
							"pbe" : 0.000014
						}
					}
				]
			},
			{
				"as" : 48416,
				"relay" : 1,
				"bwa" : 196608,
				"bwc" : 58501,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000029,
					"pbe" : 0.000086
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 196608,
						"bwc" : 58501,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000029,
							"pbe" : 0.000086
						}
					}
				]
			},
			{
				"as" : 143552,
				"relay" : 16,
				"bwa" : 41624905,
				"bwc" : 32027626,
				"roles" : {
					"guard" : 13,
					"middle" : 16,
					"dir" : 11,
					"exit" : 3
				},
				"flags" : {
					"fastStable" : 15,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.008124,
					"pbg" : 0.012488,
					"pbm" : 0.008094,
					"pbe" : 0.003787
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 16,
						"bwa" : 41624905,
						"bwc" : 32027626,
						"roles" : {
							"guard" : 13,
							"middle" : 16,
							"dir" : 11,
							"exit" : 3
						},
						"flags" : {
							"fastStable" : 15,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.008124,
							"pbg" : 0.012488,
							"pbm" : 0.008094,
							"pbe" : 0.003787
						}
					}
				]
			},
			{
				"as" : 260240,
				"relay" : 16,
				"bwa" : 28777848,
				"bwc" : 16650676,
				"roles" : {
					"middle" : 16,
					"exit" : 10,
					"guard" : 8,
					"dir" : 6
				},
				"flags" : {
					"fast" : 3,
					"stable" : 5,
					"fastStable" : 8
				},
				"probs" : {
					"pbr" : 0.006352,
					"pbe" : 0.010041,
					"pbg" : 0.005861,
					"pbm" : 0.003155
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 14,
						"bwa" : 22932828,
						"bwc" : 12000380,
						"roles" : {
							"middle" : 14,
							"exit" : 10,
							"guard" : 6,
							"dir" : 6
						},
						"flags" : {
							"fast" : 3,
							"stable" : 5,
							"fastStable" : 6
						},
						"probs" : {
							"pbr" : 0.005101,
							"pbe" : 0.010041,
							"pbg" : 0.00317,
							"pbm" : 0.002092
						}
					},
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 5845020,
						"bwc" : 4650296,
						"roles" : {
							"guard" : 2,
							"middle" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.001251,
							"pbg" : 0.002691,
							"pbm" : 0.001063
						}
					}
				]
			},
			{
				"as" : 13408,
				"relay" : 4,
				"bwa" : 193084,
				"bwc" : 23996,
				"roles" : {
					"middle" : 4,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"notFastStable" : 2,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbm" : 0.000019999999999999998,
					"pbe" : 0.000005
				},
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 4,
						"bwa" : 193084,
						"bwc" : 23996,
						"roles" : {
							"middle" : 4,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"notFastStable" : 2,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbm" : 0.000019999999999999998,
							"pbe" : 0.000005
						}
					}
				]
			},
			{
				"as" : 53120,
				"relay" : 16,
				"bwa" : 3449406,
				"bwc" : 1014420,
				"roles" : {
					"middle" : 16,
					"dir" : 8
				},
				"flags" : {
					"fast" : 12,
					"notFastStable" : 4
				},
				"probs" : {
					"pbr" : 0.00045599999999999997,
					"pbm" : 0.0013700000000000001
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 16,
						"bwa" : 3449406,
						"bwc" : 1014420,
						"roles" : {
							"middle" : 16,
							"dir" : 8
						},
						"flags" : {
							"fast" : 12,
							"notFastStable" : 4
						},
						"probs" : {
							"pbr" : 0.00045599999999999997,
							"pbm" : 0.0013700000000000001
						}
					}
				]
			},
			{
				"as" : 36124,
				"relay" : 4,
				"bwa" : 255411,
				"bwc" : 54082,
				"roles" : {
					"middle" : 4,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"notFastStable" : 1,
					"fast" : 2,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000046,
					"pbm" : 0.00013,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "BE",
						"relay" : 4,
						"bwa" : 255411,
						"bwc" : 54082,
						"roles" : {
							"middle" : 4,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"notFastStable" : 1,
							"fast" : 2,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000046,
							"pbm" : 0.00013,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 197152,
				"relay" : 16,
				"bwa" : 1005244,
				"bwc" : 209469,
				"roles" : {
					"middle" : 16,
					"exit" : 7,
					"dir" : 6
				},
				"flags" : {
					"notFastStable" : 2,
					"stable" : 6,
					"fastStable" : 2,
					"fast" : 6
				},
				"probs" : {
					"pbr" : 0.000064,
					"pbe" : 0.00007400000000000001,
					"pbm" : 0.00011800000000000002
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 16,
						"bwa" : 1005244,
						"bwc" : 209469,
						"roles" : {
							"middle" : 16,
							"exit" : 7,
							"dir" : 6
						},
						"flags" : {
							"notFastStable" : 2,
							"stable" : 6,
							"fastStable" : 2,
							"fast" : 6
						},
						"probs" : {
							"pbr" : 0.000064,
							"pbe" : 0.00007400000000000001,
							"pbm" : 0.00011800000000000002
						}
					}
				]
			},
			{
				"as" : 9365,
				"relay" : 1,
				"bwa" : 409600,
				"bwc" : 141784,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00003,
					"pbe" : 0.00009
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 409600,
						"bwc" : 141784,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00003,
							"pbe" : 0.00009
						}
					}
				]
			},
			{
				"as" : 136044,
				"relay" : 4,
				"bwa" : 13924334,
				"bwc" : 5873438,
				"roles" : {
					"middle" : 4,
					"guard" : 3,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.007506,
					"pbm" : 0.013374,
					"pbg" : 0.009147
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 13924334,
						"bwc" : 5873438,
						"roles" : {
							"middle" : 4,
							"guard" : 3,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.007506,
							"pbm" : 0.013374,
							"pbg" : 0.009147
						}
					}
				]
			},
			{
				"as" : 59382,
				"relay" : 2,
				"bwa" : 2097152,
				"bwc" : 1411519,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000351,
					"pbm" : 0.001053
				},
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 2,
						"bwa" : 2097152,
						"bwc" : 1411519,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000351,
							"pbm" : 0.001053
						}
					}
				]
			},
			{
				"as" : 581616,
				"relay" : 16,
				"bwa" : 15551061,
				"bwc" : 9900151,
				"roles" : {
					"guard" : 10,
					"middle" : 16,
					"dir" : 9,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 15,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.003055,
					"pbg" : 0.005039,
					"pbm" : 0.004103000000000001,
					"pbe" : 0.000024
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 14,
						"bwa" : 13153066,
						"bwc" : 8794608,
						"roles" : {
							"guard" : 8,
							"middle" : 14,
							"dir" : 7,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 13,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.002963,
							"pbg" : 0.004842000000000001,
							"pbm" : 0.004025000000000001,
							"pbe" : 0.000024
						}
					},
					{
						"cc" : "SG",
						"relay" : 2,
						"bwa" : 2397995,
						"bwc" : 1105543,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000092,
							"pbg" : 0.00019700000000000002,
							"pbm" : 0.000078
						}
					}
				]
			},
			{
				"as" : 73144,
				"relay" : 8,
				"bwa" : 1871748,
				"bwc" : 861905,
				"roles" : {
					"middle" : 8,
					"dir" : 7,
					"guard" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 5
				},
				"probs" : {
					"pbr" : 0.000215,
					"pbm" : 0.000446,
					"pbg" : 0.000145,
					"pbe" : 0.000053
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 8,
						"bwa" : 1871748,
						"bwc" : 861905,
						"roles" : {
							"middle" : 8,
							"dir" : 7,
							"guard" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 5
						},
						"probs" : {
							"pbr" : 0.000215,
							"pbm" : 0.000446,
							"pbg" : 0.000145,
							"pbe" : 0.000053
						}
					}
				]
			},
			{
				"as" : 20880,
				"relay" : 1,
				"bwa" : 132583,
				"bwc" : 17428,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00001,
					"pbm" : 0.000029
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 132583,
						"bwc" : 17428,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00001,
							"pbm" : 0.000029
						}
					}
				]
			},
			{
				"as" : 51590,
				"relay" : 2,
				"bwa" : 409600,
				"bwc" : 108426,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.00006500000000000001,
					"pbe" : 0.000099,
					"pbg" : 0.000068,
					"pbm" : 0.000027
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 409600,
						"bwc" : 108426,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.00006500000000000001,
							"pbe" : 0.000099,
							"pbg" : 0.000068,
							"pbm" : 0.000027
						}
					}
				]
			},
			{
				"as" : 55512,
				"relay" : 8,
				"bwa" : 1711791,
				"bwc" : 500756,
				"roles" : {
					"middle" : 8,
					"dir" : 4,
					"guard" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 5,
					"fast" : 3
				},
				"probs" : {
					"pbr" : 0.000149,
					"pbm" : 0.000342,
					"pbg" : 0.000045,
					"pbe" : 0.000058
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 1711791,
						"bwc" : 500756,
						"roles" : {
							"middle" : 8,
							"dir" : 4,
							"guard" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 5,
							"fast" : 3
						},
						"probs" : {
							"pbr" : 0.000149,
							"pbm" : 0.000342,
							"pbg" : 0.000045,
							"pbe" : 0.000058
						}
					}
				]
			},
			{
				"as" : 248824,
				"relay" : 8,
				"bwa" : 28067840,
				"bwc" : 19667431,
				"roles" : {
					"guard" : 6,
					"middle" : 8,
					"dir" : 4,
					"exit" : 2
				},
				"flags" : {
					"fastStable" : 7,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.006496,
					"pbg" : 0.010917999999999999,
					"pbm" : 0.004343999999999999,
					"pbe" : 0.004221
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 7,
						"bwa" : 27965440,
						"bwc" : 19618959,
						"roles" : {
							"guard" : 6,
							"middle" : 7,
							"dir" : 3,
							"exit" : 2
						},
						"flags" : {
							"fastStable" : 6,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.006488,
							"pbg" : 0.010917999999999999,
							"pbm" : 0.004319999999999999,
							"pbe" : 0.004221
						}
					},
					{
						"cc" : "IT",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 48472,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 308192,
				"relay" : 16,
				"bwa" : 6934897,
				"bwc" : 3284503,
				"roles" : {
					"middle" : 16,
					"dir" : 14,
					"exit" : 2,
					"guard" : 4
				},
				"flags" : {
					"fastStable" : 9,
					"fast" : 6,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.001124,
					"pbm" : 0.002184,
					"pbe" : 0.000314,
					"pbg" : 0.000878
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 16,
						"bwa" : 6934897,
						"bwc" : 3284503,
						"roles" : {
							"middle" : 16,
							"dir" : 14,
							"exit" : 2,
							"guard" : 4
						},
						"flags" : {
							"fastStable" : 9,
							"fast" : 6,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001124,
							"pbm" : 0.002184,
							"pbe" : 0.000314,
							"pbg" : 0.000878
						}
					}
				]
			},
			{
				"as" : 43264,
				"relay" : 8,
				"bwa" : 14553676,
				"bwc" : 8710610,
				"roles" : {
					"guard" : 4,
					"middle" : 8,
					"dir" : 6,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 4,
					"fast" : 3,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.002189,
					"pbg" : 0.003636,
					"pbm" : 0.0028740000000000003,
					"pbe" : 0.000056
				},
				"countries" : [
					{
						"cc" : "GR",
						"relay" : 8,
						"bwa" : 14553676,
						"bwc" : 8710610,
						"roles" : {
							"guard" : 4,
							"middle" : 8,
							"dir" : 6,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 4,
							"fast" : 3,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.002189,
							"pbg" : 0.003636,
							"pbm" : 0.0028740000000000003,
							"pbe" : 0.000056
						}
					}
				]
			},
			{
				"as" : 25780,
				"relay" : 1,
				"bwa" : 56320,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 56320,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 89232,
				"relay" : 16,
				"bwa" : 7777280,
				"bwc" : 4829835,
				"roles" : {
					"middle" : 16,
					"exit" : 11,
					"guard" : 3,
					"dir" : 4
				},
				"flags" : {
					"notFastStable" : 3,
					"stable" : 8,
					"fastStable" : 5
				},
				"probs" : {
					"pbr" : 0.001607,
					"pbe" : 0.000099,
					"pbg" : 0.003045,
					"pbm" : 0.001678
				},
				"countries" : [
					{
						"cc" : "LU",
						"relay" : 16,
						"bwa" : 7777280,
						"bwc" : 4829835,
						"roles" : {
							"middle" : 16,
							"exit" : 11,
							"guard" : 3,
							"dir" : 4
						},
						"flags" : {
							"notFastStable" : 3,
							"stable" : 8,
							"fastStable" : 5
						},
						"probs" : {
							"pbr" : 0.001607,
							"pbe" : 0.000099,
							"pbg" : 0.003045,
							"pbm" : 0.001678
						}
					}
				]
			},
			{
				"as" : 166184,
				"relay" : 8,
				"bwa" : 1679042,
				"bwc" : 1013379,
				"roles" : {
					"middle" : 8,
					"dir" : 1,
					"guard" : 2
				},
				"flags" : {
					"fastStable" : 5,
					"fast" : 1,
					"stable" : 2
				},
				"probs" : {
					"pbr" : 0.00038300000000000004,
					"pbm" : 0.001035,
					"pbg" : 0.000116
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 1679042,
						"bwc" : 1013379,
						"roles" : {
							"middle" : 8,
							"dir" : 1,
							"guard" : 2
						},
						"flags" : {
							"fastStable" : 5,
							"fast" : 1,
							"stable" : 2
						},
						"probs" : {
							"pbr" : 0.00038300000000000004,
							"pbm" : 0.001035,
							"pbg" : 0.000116
						}
					}
				]
			},
			{
				"as" : 236496,
				"relay" : 8,
				"bwa" : 1272160,
				"bwc" : 399803,
				"roles" : {
					"middle" : 8,
					"dir" : 7,
					"exit" : 1,
					"guard" : 1
				},
				"flags" : {
					"stable" : 1,
					"fastStable" : 4,
					"fast" : 3
				},
				"probs" : {
					"pbr" : 0.00010599999999999999,
					"pbm" : 0.000259,
					"pbe" : 0.000029,
					"pbg" : 0.000035
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 1272160,
						"bwc" : 399803,
						"roles" : {
							"middle" : 8,
							"dir" : 7,
							"exit" : 1,
							"guard" : 1
						},
						"flags" : {
							"stable" : 1,
							"fastStable" : 4,
							"fast" : 3
						},
						"probs" : {
							"pbr" : 0.00010599999999999999,
							"pbm" : 0.000259,
							"pbe" : 0.000029,
							"pbg" : 0.000035
						}
					}
				]
			},
			{
				"as" : 72048,
				"relay" : 2,
				"bwa" : 46080,
				"bwc" : 17465,
				"roles" : {
					"middle" : 2,
					"exit" : 2
				},
				"flags" : {
					"stable" : 2
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbe" : 0.000018
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 46080,
						"bwc" : 17465,
						"roles" : {
							"middle" : 2,
							"exit" : 2
						},
						"flags" : {
							"stable" : 2
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbe" : 0.000018
						}
					}
				]
			},
			{
				"as" : 250672,
				"relay" : 8,
				"bwa" : 1413167,
				"bwc" : 358200,
				"roles" : {
					"middle" : 8,
					"dir" : 6,
					"guard" : 2
				},
				"flags" : {
					"fastStable" : 3,
					"stable" : 1,
					"fast" : 4
				},
				"probs" : {
					"pbr" : 0.00018299999999999998,
					"pbm" : 0.000268,
					"pbg" : 0.000281
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 1413167,
						"bwc" : 358200,
						"roles" : {
							"middle" : 8,
							"dir" : 6,
							"guard" : 2
						},
						"flags" : {
							"fastStable" : 3,
							"stable" : 1,
							"fast" : 4
						},
						"probs" : {
							"pbr" : 0.00018299999999999998,
							"pbm" : 0.000268,
							"pbg" : 0.000281
						}
					}
				]
			},
			{
				"as" : 105472,
				"relay" : 8,
				"bwa" : 1363233,
				"bwc" : 623241,
				"roles" : {
					"middle" : 8,
					"dir" : 4,
					"exit" : 1
				},
				"flags" : {
					"notFastStable" : 2,
					"fast" : 5,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00016299999999999998,
					"pbm" : 0.00047500000000000005,
					"pbe" : 0.000015
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 1363233,
						"bwc" : 623241,
						"roles" : {
							"middle" : 8,
							"dir" : 4,
							"exit" : 1
						},
						"flags" : {
							"notFastStable" : 2,
							"fast" : 5,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00016299999999999998,
							"pbm" : 0.00047500000000000005,
							"pbe" : 0.000015
						}
					}
				]
			},
			{
					"as" : 65750,
				"relay" : 2,
				"bwa" : 116736,
				"bwc" : 14389,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000009999999999999999,
					"pbm" : 0.000028000000000000003
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 116736,
						"bwc" : 14389,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000009999999999999999,
							"pbm" : 0.000028000000000000003
						}
					}
				]
			},
			{
				"as" : 51306,
				"relay" : 2,
				"bwa" : 1159168,
				"bwc" : 571568,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000146,
					"pbg" : 0.00008,
					"pbm" : 0.00008900000000000001,
					"pbe" : 0.000269
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 1159168,
						"bwc" : 571568,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000146,
							"pbg" : 0.00008,
							"pbm" : 0.00008900000000000001,
							"pbe" : 0.000269
						}
					}
				]
			},
			{
				"as" : 28,
				"relay" : 2,
				"bwa" : 597435,
				"bwc" : 178350,
				"roles" : {
					"middle" : 2,
					"dir" : 1,
					"guard" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000019,
					"pbm" : 0.000033,
					"pbg" : 0.000023
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 597435,
						"bwc" : 178350,
						"roles" : {
							"middle" : 2,
							"dir" : 1,
							"guard" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000019,
							"pbm" : 0.000033,
							"pbg" : 0.000023
						}
					}
				]
			},
			{
				"as" : 46296,
				"relay" : 2,
				"bwa" : 336694,
				"bwc" : 41726,
				"roles" : {
					"middle" : 2,
					"exit" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbe" : 0.000027
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 336694,
						"bwc" : 41726,
						"roles" : {
							"middle" : 2,
							"exit" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbe" : 0.000027
						}
					}
				]
			},
			{
				"as" : 37484,
				"relay" : 4,
				"bwa" : 3421426,
				"bwc" : 863207,
				"roles" : {
					"guard" : 3,
					"middle" : 4,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000208,
					"pbg" : 0.00043400000000000003,
					"pbm" : 0.000191
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 4,
						"bwa" : 3421426,
						"bwc" : 863207,
						"roles" : {
							"guard" : 3,
							"middle" : 4,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.000208,
							"pbg" : 0.00043400000000000003,
							"pbm" : 0.000191
						}
					}
				]
			},
			{
				"as" : 126048,
				"relay" : 8,
				"bwa" : 409600,
				"bwc" : 5097,
				"roles" : {
					"middle" : 8,
					"exit" : 8
				},
				"flags" : {
					"fast" : 8
				},
				"probs" : {
					"pbr" : 0.000029,
					"pbe" : 0.000085
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 8,
						"bwa" : 409600,
						"bwc" : 5097,
						"roles" : {
							"middle" : 8,
							"exit" : 8
						},
						"flags" : {
							"fast" : 8
						},
						"probs" : {
							"pbr" : 0.000029,
							"pbe" : 0.000085
						}
					}
				]
			},
			{
				"as" : 42652,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 97559,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000014,
					"pbm" : 0.000043
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 97559,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000014,
							"pbm" : 0.000043
						}
					}
				]
			},
			{
				"as" : 87376,
				"relay" : 4,
				"bwa" : 1488086,
				"bwc" : 579127,
				"roles" : {
					"middle" : 4,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.000173,
					"pbm" : 0.000193,
					"pbe" : 0.000323
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 1488086,
						"bwc" : 579127,
						"roles" : {
							"middle" : 4,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.000173,
							"pbm" : 0.000193,
							"pbe" : 0.000323
						}
					}
				]
			},
			{
				"as" : 69646,
				"relay" : 2,
				"bwa" : 4578315,
				"bwc" : 2666468,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"exit" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000964,
					"pbg" : 0.00054,
					"pbm" : 0.00054,
					"pbe" : 0.0018119999999999998
				},
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 2,
						"bwa" : 4578315,
						"bwc" : 2666468,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"exit" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000964,
							"pbg" : 0.00054,
							"pbm" : 0.00054,
							"pbe" : 0.0018119999999999998
						}
					}
				]
			},
			{
				"as" : 164656,
				"relay" : 4,
				"bwa" : 1830912,
				"bwc" : 739260,
				"roles" : {
					"middle" : 4,
					"guard" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.00029,
					"pbm" : 0.000286,
					"pbg" : 0.000584
				},
				"countries" : [
					{
						"cc" : "NO",
						"relay" : 4,
						"bwa" : 1830912,
						"bwc" : 739260,
						"roles" : {
							"middle" : 4,
							"guard" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.00029,
							"pbm" : 0.000286,
							"pbg" : 0.000584
						}
					}
				]
			},
			{
				"as" : 30736,
				"relay" : 8,
				"bwa" : 3134948,
				"bwc" : 1651559,
				"roles" : {
					"middle" : 8,
					"guard" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 7,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00038700000000000003,
					"pbm" : 0.001038,
					"pbg" : 0.000125
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 3134948,
						"bwc" : 1651559,
						"roles" : {
							"middle" : 8,
							"guard" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 7,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00038700000000000003,
							"pbm" : 0.001038,
							"pbg" : 0.000125
						}
					}
				]
			},
			{
				"as" : 15897,
				"relay" : 1,
				"bwa" : 14012,
				"bwc" : 1255,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000006
				},
				"countries" : [
					{
						"cc" : "TR",
						"relay" : 1,
						"bwa" : 14012,
						"bwc" : 1255,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000006
						}
					}
				]
			},
			{
				"as" : 23076,
				"relay" : 4,
				"bwa" : 303104,
				"bwc" : 32065,
				"roles" : {
					"middle" : 4,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1,
					"stable" : 2,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000017,
					"pbm" : 0.000042000000000000004,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 4,
						"bwa" : 303104,
						"bwc" : 32065,
						"roles" : {
							"middle" : 4,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1,
							"stable" : 2,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000017,
							"pbm" : 0.000042000000000000004,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 16302,
				"relay" : 2,
				"bwa" : 75068,
				"bwc" : 3649,
				"roles" : {
					"middle" : 2,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"notFastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000009,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "MX",
						"relay" : 2,
						"bwa" : 75068,
						"bwc" : 3649,
						"roles" : {
							"middle" : 2,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"notFastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000009,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 1706,
				"relay" : 1,
				"bwa" : 655360,
				"bwc" : 493618,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000142,
					"pbg" : 0.000306,
					"pbm" : 0.000121
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 655360,
						"bwc" : 493618,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000142,
							"pbg" : 0.000306,
							"pbm" : 0.000121
						}
					}
				]
			},
			{
				"as" : 233352,
				"relay" : 8,
				"bwa" : 11331579,
				"bwc" : 9888821,
				"roles" : {
					"middle" : 8,
					"guard" : 7,
					"dir" : 6,
					"exit" : 2
				},
				"flags" : {
					"fastStable" : 8
				},
				"probs" : {
					"pbr" : 0.002568,
					"pbm" : 0.00202,
					"pbg" : 0.004474,
					"pbe" : 0.0012079999999999999
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 7,
						"bwa" : 10665979,
						"bwc" : 9242059,
						"roles" : {
							"middle" : 7,
							"guard" : 6,
							"exit" : 2,
							"dir" : 5
						},
						"flags" : {
							"fastStable" : 7
						},
						"probs" : {
							"pbr" : 0.002487,
							"pbm" : 0.001951,
							"pbg" : 0.0043,
							"pbe" : 0.0012079999999999999
						}
					},
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 665600,
						"bwc" : 646762,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000081,
							"pbg" : 0.000174,
							"pbm" : 0.000069
						}
					}
				]
			},
			{
				"as" : 52240,
				"relay" : 16,
				"bwa" : 38267691,
				"bwc" : 31404850,
				"roles" : {
					"guard" : 8,
					"middle" : 16,
					"dir" : 8,
					"exit" : 2
				},
				"flags" : {
					"fastStable" : 10,
					"notFastStable" : 2,
					"fast" : 3,
					"authority" : 1,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.00959,
					"pbg" : 0.020553000000000002,
					"pbm" : 0.008204,
					"pbe" : 0.000015
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 15,
						"bwa" : 33024811,
						"bwc" : 26585115,
						"roles" : {
							"guard" : 7,
							"middle" : 15,
							"dir" : 7,
							"exit" : 2
						},
						"flags" : {
							"fastStable" : 9,
							"notFastStable" : 2,
							"fast" : 3,
							"authority" : 1,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.008329,
							"pbg" : 0.01784,
							"pbm" : 0.007132,
							"pbe" : 0.000015
						}
					},
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 5242880,
						"bwc" : 4819735,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001261,
							"pbg" : 0.002713,
							"pbm" : 0.001072
						}
					}
				]
			},
			{
				"as" : 66872,
				"relay" : 6,
				"bwa" : 364520,
				"bwc" : 53220,
				"roles" : {
					"middle" : 6,
					"exit" : 1,
					"dir" : 4
				},
				"flags" : {
					"fast" : 4,
					"notFastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000017,
					"pbe" : 0.000003,
					"pbm" : 0.000047
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 4,
						"bwa" : 190440,
						"bwc" : 49799,
						"roles" : {
							"middle" : 4,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2,
							"notFastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000009999999999999999,
							"pbe" : 0.000003,
							"pbm" : 0.000027
						}
					},
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 174080,
						"bwc" : 3421,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000007,
							"pbm" : 0.000019999999999999998
						}
					}
				]
			},
			{
				"as" : 29017,
				"relay" : 1,
				"bwa" : 153600,
				"bwc" : 93093,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000032,
					"pbe" : 0.000096
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 153600,
						"bwc" : 93093,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000032,
							"pbe" : 0.000096
						}
					}
				]
			},
			{
				"as" : 78618,
				"relay" : 2,
				"bwa" : 1310720,
				"bwc" : 780749,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000102,
					"pbg" : 0.000219,
					"pbm" : 0.000086
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 1310720,
						"bwc" : 780749,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000102,
							"pbg" : 0.000219,
							"pbm" : 0.000086
						}
					}
				]
			},
			{
				"as" : 1624,
				"relay" : 2,
				"bwa" : 28126,
				"bwc" : 131,
				"roles" : {
					"middle" : 2
				},
				"flags" : {
					"notFastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbm" : 0.000012
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 2,
						"bwa" : 28126,
						"bwc" : 131,
						"roles" : {
							"middle" : 2
						},
						"flags" : {
							"notFastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000012
						}
					}
				]
			},
			{
				"as" : 16910,
				"relay" : 2,
				"bwa" : 512000,
				"bwc" : 340125,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000081,
					"pbg" : 0.000174,
					"pbm" : 0.000069
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 512000,
						"bwc" : 340125,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000081,
							"pbg" : 0.000174,
							"pbm" : 0.000069
						}
					}
				]
			},
			{
				"as" : 31250,
				"relay" : 1,
				"bwa" : 444617,
				"bwc" : 111677,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000029,
					"pbm" : 0.000087
				},
				"countries" : [
					{
						"cc" : "BG",
						"relay" : 1,
						"bwa" : 444617,
						"bwc" : 111677,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000029,
							"pbm" : 0.000087
						}
					}
				]
			},
			{
				"as" : 231852,
				"relay" : 4,
				"bwa" : 3339772,
				"bwc" : 2086384,
				"roles" : {
					"guard" : 1,
					"middle" : 4,
					"dir" : 3
				},
				"flags" : {
					"fastStable" : 2,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000433,
					"pbg" : 0.000658,
					"pbm" : 0.000644
				},
				"countries" : [
					{
						"cc" : "NO",
						"relay" : 4,
						"bwa" : 3339772,
						"bwc" : 2086384,
						"roles" : {
							"guard" : 1,
							"middle" : 4,
							"dir" : 3
						},
						"flags" : {
							"fastStable" : 2,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000433,
							"pbg" : 0.000658,
							"pbm" : 0.000644
						}
					}
				]
			},
			{
				"as" : 2308,
				"relay" : 4,
				"bwa" : 526969,
				"bwc" : 83347,
				"roles" : {
					"middle" : 4,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"stable" : 1,
					"fast" : 2,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000049,
					"pbm" : 0.000139,
					"pbe" : 0.000008
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 4,
						"bwa" : 526969,
						"bwc" : 83347,
						"roles" : {
							"middle" : 4,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"stable" : 1,
							"fast" : 2,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000049,
							"pbm" : 0.000139,
							"pbe" : 0.000008
						}
					}
				]
			},
			{
				"as" : 91416,
				"relay" : 8,
				"bwa" : 1621281,
				"bwc" : 359834,
				"roles" : {
					"middle" : 8,
					"dir" : 6,
					"exit" : 1
				},
				"flags" : {
					"notFastStable" : 1,
					"fast" : 7
				},
				"probs" : {
					"pbr" : 0.00014099999999999998,
					"pbm" : 0.00039399999999999993,
					"pbe" : 0.000031
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 1621281,
						"bwc" : 359834,
						"roles" : {
							"middle" : 8,
							"dir" : 6,
							"exit" : 1
						},
						"flags" : {
							"notFastStable" : 1,
							"fast" : 7
						},
						"probs" : {
							"pbr" : 0.00014099999999999998,
							"pbm" : 0.00039399999999999993,
							"pbe" : 0.000031
						}
					}
				]
			},
			{
				"as" : 397198,
				"relay" : 2,
				"bwa" : 872321,
				"bwc" : 738355,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000126,
					"pbg" : 0.000265,
					"pbm" : 0.000114
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 872321,
						"bwc" : 738355,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000126,
							"pbg" : 0.000265,
							"pbm" : 0.000114
						}
					}
				]
			},
			{
				"as" : 49024,
				"relay" : 8,
				"bwa" : 1900544,
				"bwc" : 977526,
				"roles" : {
					"middle" : 8,
					"guard" : 2,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 7,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000451,
					"pbm" : 0.00048499999999999997,
					"pbg" : 0.00087
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 1900544,
						"bwc" : 977526,
						"roles" : {
							"middle" : 8,
							"guard" : 2,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 7,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000451,
							"pbm" : 0.00048499999999999997,
							"pbg" : 0.00087
						}
					}
				]
			},
			{
				"as" : 199688,
				"relay" : 8,
				"bwa" : 5540510,
				"bwc" : 3484897,
				"roles" : {
					"guard" : 5,
					"middle" : 8,
					"dir" : 5,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 8
				},
				"probs" : {
					"pbr" : 0.0015760000000000001,
					"pbg" : 0.002939,
					"pbm" : 0.001338,
					"pbe" : 0.000453
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 5540510,
						"bwc" : 3484897,
						"roles" : {
							"guard" : 5,
							"middle" : 8,
							"dir" : 5,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 8
						},
						"probs" : {
							"pbr" : 0.0015760000000000001,
							"pbg" : 0.002939,
							"pbm" : 0.001338,
							"pbe" : 0.000453
						}
					}
				]
			},
			{
				"as" : 177752,
				"relay" : 8,
				"bwa" : 66112614,
				"bwc" : 46614971,
				"roles" : {
					"guard" : 8,
					"middle" : 8,
					"exit" : 8,
					"dir" : 8
				},
				"flags" : {
					"fastStable" : 8
				},
				"probs" : {
					"pbr" : 0.023691,
					"pbg" : 0.013278,
					"pbm" : 0.013276,
					"pbe" : 0.044512
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 66112614,
						"bwc" : 46614971,
						"roles" : {
							"guard" : 8,
							"middle" : 8,
							"exit" : 8,
							"dir" : 8
						},
						"flags" : {
							"fastStable" : 8
						},
						"probs" : {
							"pbr" : 0.023691,
							"pbg" : 0.013278,
							"pbm" : 0.013276,
							"pbe" : 0.044512
						}
					}
				]
			},
			{
				"as" : 141700,
				"relay" : 4,
				"bwa" : 1075133,
				"bwc" : 234164,
				"roles" : {
					"middle" : 4
				},
				"flags" : {
					"fast" : 3,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.00008400000000000001,
					"pbm" : 0.000252
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 4,
						"bwa" : 1075133,
						"bwc" : 234164,
						"roles" : {
							"middle" : 4
						},
						"flags" : {
							"fast" : 3,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.00008400000000000001,
							"pbm" : 0.000252
						}
					}
				]
			},
			{
				"as" : 114292,
				"relay" : 4,
				"bwa" : 292783,
				"bwc" : 57782,
				"roles" : {
					"middle" : 4,
					"dir" : 4
				},
				"flags" : {
					"fast" : 4
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000025
				},
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 4,
						"bwa" : 292783,
						"bwc" : 57782,
						"roles" : {
							"middle" : 4,
							"dir" : 4
						},
						"flags" : {
							"fast" : 4
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000025
						}
					}
				]
			},
			{
				"as" : 16662,
				"relay" : 2,
				"bwa" : 283951,
				"bwc" : 9945,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000009999999999999999,
					"pbm" : 0.000029
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 283951,
						"bwc" : 9945,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000009999999999999999,
							"pbm" : 0.000029
						}
					}
				]
			},
			{
				"as" : 12732,
				"relay" : 1,
				"bwa" : 14048271,
				"bwc" : 11177189,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00383,
					"pbg" : 0.002147,
					"pbm" : 0.002146,
					"pbe" : 0.007196
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 14048271,
						"bwc" : 11177189,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00383,
							"pbg" : 0.002147,
							"pbm" : 0.002146,
							"pbe" : 0.007196
						}
					}
				]
			},
			{
				"as" : 67216,
				"relay" : 8,
				"bwa" : 4919896,
				"bwc" : 2755103,
				"roles" : {
					"middle" : 8,
					"dir" : 7,
					"guard" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 6,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.0010900000000000003,
					"pbm" : 0.002941,
					"pbg" : 0.000324,
					"pbe" : 0.000005
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 8,
						"bwa" : 4919896,
						"bwc" : 2755103,
						"roles" : {
							"middle" : 8,
							"dir" : 7,
							"guard" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 6,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.0010900000000000003,
							"pbm" : 0.002941,
							"pbg" : 0.000324,
							"pbe" : 0.000005
						}
					}
				]
			},
			{
				"as" : 67784,
				"relay" : 8,
				"bwa" : 8415908,
				"bwc" : 3913941,
				"roles" : {
					"middle" : 8,
					"exit" : 4,
					"dir" : 5,
					"guard" : 3
				},
				"flags" : {
					"fastStable" : 6,
					"fast" : 1,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.001721,
					"pbe" : 0.0039,
					"pbm" : 0.0004969999999999999,
					"pbg" : 0.000768
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 8,
						"bwa" : 8415908,
						"bwc" : 3913941,
						"roles" : {
							"middle" : 8,
							"exit" : 4,
							"dir" : 5,
							"guard" : 3
						},
						"flags" : {
							"fastStable" : 6,
							"fast" : 1,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.001721,
							"pbe" : 0.0039,
							"pbm" : 0.0004969999999999999,
							"pbg" : 0.000768
						}
					}
				]
			},
			{
				"as" : 1403,
				"relay" : 1,
				"bwa" : 76800,
				"bwc" : 51789,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000005,
					"pbm" : 0.000014
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 76800,
						"bwc" : 51789,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000005,
							"pbm" : 0.000014
						}
					}
				]
			},
			{
				"as" : 32404,
				"relay" : 2,
				"bwa" : 513348,
				"bwc" : 102358,
				"roles" : {
					"middle" : 2,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000039,
					"pbm" : 0.000038,
					"pbe" : 0.000077
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 513348,
						"bwc" : 102358,
						"roles" : {
							"middle" : 2,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000039,
							"pbm" : 0.000038,
							"pbe" : 0.000077
						}
					}
				]
			},
			{
				"as" : 55897,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 1395435,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000098,
					"pbg" : 0.00021,
					"pbm" : 0.000083
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 1395435,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000098,
							"pbg" : 0.00021,
							"pbm" : 0.000083
						}
					}
				]
			},
			{
				"as" : 202452,
				"relay" : 4,
				"bwa" : 5856098,
				"bwc" : 4726345,
				"roles" : {
					"middle" : 4,
					"dir" : 3,
					"guard" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.001343,
					"pbm" : 0.001138,
					"pbg" : 0.002795,
					"pbe" : 0.000092
				},
				"countries" : [
					{
						"cc" : "IS",
						"relay" : 4,
						"bwa" : 5856098,
						"bwc" : 4726345,
						"roles" : {
							"middle" : 4,
							"dir" : 3,
							"guard" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.001343,
							"pbm" : 0.001138,
							"pbg" : 0.002795,
							"pbe" : 0.000092
						}
					}
				]
			},
			{
				"as" : 22747,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 198,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 198,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 158604,
				"relay" : 4,
				"bwa" : 1599488,
				"bwc" : 419159,
				"roles" : {
					"middle" : 4,
					"dir" : 4,
					"guard" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.000132,
					"pbm" : 0.000294,
					"pbg" : 0.000091,
					"pbe" : 0.000011
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 4,
						"bwa" : 1599488,
						"bwc" : 419159,
						"roles" : {
							"middle" : 4,
							"dir" : 4,
							"guard" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.000132,
							"pbm" : 0.000294,
							"pbg" : 0.000091,
							"pbe" : 0.000011
						}
					}
				]
			},
			{
				"as" : 160920,
				"relay" : 8,
				"bwa" : 1409238,
				"bwc" : 301877,
				"roles" : {
					"middle" : 8,
					"dir" : 6,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 3,
					"notFastStable" : 1,
					"fast" : 4
				},
				"probs" : {
					"pbr" : 0.000085,
					"pbm" : 0.000243,
					"pbe" : 0.00001
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 1409238,
						"bwc" : 301877,
						"roles" : {
							"middle" : 8,
							"dir" : 6,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 3,
							"notFastStable" : 1,
							"fast" : 4
						},
						"probs" : {
							"pbr" : 0.000085,
							"pbm" : 0.000243,
							"pbe" : 0.00001
						}
					}
				]
			},
			{
				"as" : 2624,
				"relay" : 2,
				"bwa" : 8314880,
				"bwc" : 7533316,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.0029820000000000003,
					"pbg" : 0.0064139999999999996,
					"pbm" : 0.002534
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 8314880,
						"bwc" : 7533316,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.0029820000000000003,
							"pbg" : 0.0064139999999999996,
							"pbm" : 0.002534
						}
					}
				]
			},
			{
				"as" : 371656,
				"relay" : 8,
				"bwa" : 9031936,
				"bwc" : 5038653,
				"roles" : {
					"guard" : 3,
					"middle" : 8,
					"exit" : 8,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 8
				},
				"probs" : {
					"pbr" : 0.0022459999999999997,
					"pbg" : 0.000732,
					"pbm" : 0.000732,
					"pbe" : 0.005272000000000001
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 9031936,
						"bwc" : 5038653,
						"roles" : {
							"guard" : 3,
							"middle" : 8,
							"exit" : 8,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 8
						},
						"probs" : {
							"pbr" : 0.0022459999999999997,
							"pbg" : 0.000732,
							"pbm" : 0.000732,
							"pbe" : 0.005272000000000001
						}
					}
				]
			},
			{
				"as" : 2847,
				"relay" : 1,
				"bwa" : 6291456,
				"bwc" : 6234298,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.002913,
					"pbg" : 0.006265,
					"pbm" : 0.002475
				},
				"countries" : [
					{
						"cc" : "LT",
						"relay" : 1,
						"bwa" : 6291456,
						"bwc" : 6234298,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.002913,
							"pbg" : 0.006265,
							"pbm" : 0.002475
						}
					}
				]
			},
			{
				"as" : 12843,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 478088,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000088,
					"pbg" : 0.000189,
					"pbm" : 0.000075
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 478088,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000088,
							"pbg" : 0.000189,
							"pbm" : 0.000075
						}
					}
				]
			},
			{
				"as" : 91140,
				"relay" : 2,
				"bwa" : 1916382,
				"bwc" : 973055,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"guard" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000335,
					"pbe" : 0.000878,
					"pbg" : 0.00009,
					"pbm" : 0.000036
				},
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 2,
						"bwa" : 1916382,
						"bwc" : 973055,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"guard" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000335,
							"pbe" : 0.000878,
							"pbg" : 0.00009,
							"pbm" : 0.000036
						}
					}
				]
			},
			{
				"as" : 170440,
				"relay" : 4,
				"bwa" : 1603584,
				"bwc" : 819635,
				"roles" : {
					"middle" : 4,
					"exit" : 1,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 2,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.00018400000000000003,
					"pbe" : 0.00032,
					"pbm" : 0.00023
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 4,
						"bwa" : 1603584,
						"bwc" : 819635,
						"roles" : {
							"middle" : 4,
							"exit" : 1,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 2,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.00018400000000000003,
							"pbe" : 0.00032,
							"pbm" : 0.00023
						}
					}
				]
			},
			{
				"as" : 22580,
				"relay" : 4,
				"bwa" : 145283,
				"bwc" : 30065,
				"roles" : {
					"middle" : 4,
					"dir" : 2
				},
				"flags" : {
					"stable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000009999999999999999,
					"pbm" : 0.000029
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 4,
						"bwa" : 145283,
						"bwc" : 30065,
						"roles" : {
							"middle" : 4,
							"dir" : 2
						},
						"flags" : {
							"stable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000009999999999999999,
							"pbm" : 0.000029
						}
					}
				]
			},
			{
				"as" : 480928,
				"relay" : 16,
				"bwa" : 9585573,
				"bwc" : 6697555,
				"roles" : {
					"middle" : 16,
					"dir" : 4,
					"exit" : 10,
					"guard" : 3
				},
				"flags" : {
					"stable" : 5,
					"authority" : 1,
					"notFastStable" : 6,
					"fastStable" : 4,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.0035589999999999992,
					"pbm" : 0.003026,
					"pbe" : 0.00008999999999999999,
					"pbg" : 0.007563
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 5,
						"bwa" : 7003096,
						"bwc" : 4687913,
						"roles" : {
							"middle" : 5,
							"dir" : 3,
							"guard" : 2
						},
						"flags" : {
							"stable" : 1,
							"authority" : 1,
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.0030399999999999997,
							"pbm" : 0.00261,
							"pbg" : 0.00651
						}
					},
					{
						"cc" : "CZ",
						"relay" : 11,
						"bwa" : 2582477,
						"bwc" : 2009642,
						"roles" : {
							"middle" : 11,
							"exit" : 10,
							"guard" : 1,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 6,
							"stable" : 4,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.0005189999999999999,
							"pbe" : 0.00008999999999999999,
							"pbg" : 0.001053,
							"pbm" : 0.000416
						}
					}
				]
			},
			{
				"as" : 548,
				"relay" : 4,
				"bwa" : 1024000,
				"bwc" : 898919,
				"roles" : {
					"guard" : 4,
					"middle" : 4,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000186,
					"pbg" : 0.00039900000000000005,
					"pbm" : 0.000157
				},
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 4,
						"bwa" : 1024000,
						"bwc" : 898919,
						"roles" : {
							"guard" : 4,
							"middle" : 4,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.000186,
							"pbg" : 0.00039900000000000005,
							"pbm" : 0.000157
						}
					}
				]
			},
			{
				"as" : 12025,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 10343,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000007
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 10343,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000007
						}
					}
				]
			},
			{
				"as" : 18618,
				"relay" : 1,
				"bwa" : 31900,
				"bwc" : 2966,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 31900,
						"bwc" : 2966,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 80312,
				"relay" : 2,
				"bwa" : 1191936,
				"bwc" : 744582,
				"roles" : {
					"middle" : 2,
					"exit" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.00033999999999999997,
					"pbe" : 0.001021
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 1191936,
						"bwc" : 744582,
						"roles" : {
							"middle" : 2,
							"exit" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.00033999999999999997,
							"pbe" : 0.001021
						}
					}
				]
			},
			{
				"as" : 51496,
				"relay" : 4,
				"bwa" : 598016,
				"bwc" : 379852,
				"roles" : {
					"middle" : 4,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 1,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000102,
					"pbm" : 0.000123,
					"pbg" : 0.000185
				},
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 4,
						"bwa" : 598016,
						"bwc" : 379852,
						"roles" : {
							"middle" : 4,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 1,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000102,
							"pbm" : 0.000123,
							"pbg" : 0.000185
						}
					}
				]
			},
			{
				"as" : 116944,
				"relay" : 8,
				"bwa" : 1254974,
				"bwc" : 387025,
				"roles" : {
					"middle" : 8,
					"guard" : 3,
					"dir" : 3,
					"exit" : 1
				},
				"flags" : {
					"fast" : 4,
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000155,
					"pbm" : 0.00020800000000000001,
					"pbg" : 0.000207,
					"pbe" : 0.000055
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 1254974,
						"bwc" : 387025,
						"roles" : {
							"middle" : 8,
							"guard" : 3,
							"dir" : 3,
							"exit" : 1
						},
						"flags" : {
							"fast" : 4,
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.000155,
							"pbm" : 0.00020800000000000001,
							"pbg" : 0.000207,
							"pbe" : 0.000055
						}
					}
				]
			},
			{
				"as" : 696,
				"relay" : 4,
				"bwa" : 19489854,
				"bwc" : 13262617,
				"roles" : {
					"guard" : 3,
					"middle" : 4,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.004869,
					"pbg" : 0.010352,
					"pbm" : 0.004089000000000001,
					"pbe" : 0.000168
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 19489854,
						"bwc" : 13262617,
						"roles" : {
							"guard" : 3,
							"middle" : 4,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.004869,
							"pbg" : 0.010352,
							"pbm" : 0.004089000000000001,
							"pbe" : 0.000168
						}
					}
				]
			},
			{
				"as" : 24316,
				"relay" : 4,
				"bwa" : 435200,
				"bwc" : 181329,
				"roles" : {
					"middle" : 4,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000046,
					"pbm" : 0.000137
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 435200,
						"bwc" : 181329,
						"roles" : {
							"middle" : 4,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000046,
							"pbm" : 0.000137
						}
					}
				]
			},
			{
				"as" : 49800,
				"relay" : 2,
				"bwa" : 409600,
				"bwc" : 556239,
				"roles" : {
					"middle" : 2,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"stable" : 1,
					"authority" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00008900000000000001,
					"pbm" : 0.000082,
					"pbg" : 0.000184
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 409600,
						"bwc" : 556239,
						"roles" : {
							"middle" : 2,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"stable" : 1,
							"authority" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00008900000000000001,
							"pbm" : 0.000082,
							"pbg" : 0.000184
						}
					}
				]
			},
			{
				"as" : 42893,
				"relay" : 1,
				"bwa" : 7105464,
				"bwc" : 3829644,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.001789,
					"pbm" : 0.005368
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 7105464,
						"bwc" : 3829644,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.001789,
							"pbm" : 0.005368
						}
					}
				]
			},
			{
				"as" : 22806,
				"relay" : 2,
				"bwa" : 2048000,
				"bwc" : 1444712,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000459,
					"pbg" : 0.000986,
					"pbm" : 0.00039000000000000005
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 2048000,
						"bwc" : 1444712,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000459,
							"pbg" : 0.000986,
							"pbm" : 0.00039000000000000005
						}
					}
				]
			},
			{
				"as" : 364368,
				"relay" : 16,
				"bwa" : 4981423,
				"bwc" : 1599946,
				"roles" : {
					"middle" : 16,
					"exit" : 3,
					"dir" : 11,
					"guard" : 2
				},
				"flags" : {
					"stable" : 2,
					"fast" : 6,
					"fastStable" : 8
				},
				"probs" : {
					"pbr" : 0.000512,
					"pbe" : 0.000147,
					"pbm" : 0.000994,
					"pbg" : 0.000395
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 16,
						"bwa" : 4981423,
						"bwc" : 1599946,
						"roles" : {
							"middle" : 16,
							"exit" : 3,
							"dir" : 11,
							"guard" : 2
						},
						"flags" : {
							"stable" : 2,
							"fast" : 6,
							"fastStable" : 8
						},
						"probs" : {
							"pbr" : 0.000512,
							"pbe" : 0.000147,
							"pbm" : 0.000994,
							"pbg" : 0.000395
						}
					}
				]
			},
			{
				"as" : 23089,
				"relay" : 1,
				"bwa" : 129214,
				"bwc" : 37375,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000005,
					"pbm" : 0.000016
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 129214,
						"bwc" : 37375,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000005,
							"pbm" : 0.000016
						}
					}
				]
			},
			{
				"as" : 205160,
				"relay" : 4,
				"bwa" : 13793280,
				"bwc" : 8623974,
				"roles" : {
					"middle" : 4,
					"exit" : 3,
					"guard" : 3,
					"dir" : 2
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.002682,
					"pbe" : 0.0034149999999999996,
					"pbg" : 0.002888,
					"pbm" : 0.0017439999999999999
				},
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 4,
						"bwa" : 13793280,
						"bwc" : 8623974,
						"roles" : {
							"middle" : 4,
							"exit" : 3,
							"guard" : 3,
							"dir" : 2
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.002682,
							"pbe" : 0.0034149999999999996,
							"pbg" : 0.002888,
							"pbm" : 0.0017439999999999999
						}
					}
				]
			},
			{
				"as" : 31924,
				"relay" : 2,
				"bwa" : 665438,
				"bwc" : 254100,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00008300000000000001,
					"pbe" : 0.0001,
					"pbm" : 0.00015
				},
				"countries" : [
					{
						"cc" : "SK",
						"relay" : 2,
						"bwa" : 665438,
						"bwc" : 254100,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00008300000000000001,
							"pbe" : 0.0001,
							"pbm" : 0.00015
						}
					}
				]
			},
			{
				"as" : 155580,
				"relay" : 4,
				"bwa" : 334206,
				"bwc" : 84592,
				"roles" : {
					"middle" : 4,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2,
					"stable" : 2
				},
				"probs" : {
					"pbr" : 0.000019999999999999998,
					"pbm" : 0.000036,
					"pbe" : 0.000023
				},
				"countries" : [
					{
						"cc" : "SG",
						"relay" : 4,
						"bwa" : 334206,
						"bwc" : 84592,
						"roles" : {
							"middle" : 4,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2,
							"stable" : 2
						},
						"probs" : {
							"pbr" : 0.000019999999999999998,
							"pbm" : 0.000036,
							"pbe" : 0.000023
						}
					}
				]
			},
			{
				"as" : 52508,
				"relay" : 4,
				"bwa" : 433914,
				"bwc" : 169370,
				"roles" : {
					"middle" : 4,
					"dir" : 4
				},
				"flags" : {
					"fast" : 1,
					"notFastStable" : 1,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000031,
					"pbm" : 0.00009300000000000001
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 4,
						"bwa" : 433914,
						"bwc" : 169370,
						"roles" : {
							"middle" : 4,
							"dir" : 4
						},
						"flags" : {
							"fast" : 1,
							"notFastStable" : 1,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000031,
							"pbm" : 0.00009300000000000001
						}
					}
				]
			},
			{
				"as" : 13848,
				"relay" : 4,
				"bwa" : 789463,
				"bwc" : 106806,
				"roles" : {
					"middle" : 4,
					"exit" : 3,
					"dir" : 2
				},
				"flags" : {
					"fast" : 3,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000043,
					"pbe" : 0.000039999999999999996,
					"pbm" : 0.00009
				},
				"countries" : [
					{
						"cc" : "TW",
						"relay" : 4,
						"bwa" : 789463,
						"bwc" : 106806,
						"roles" : {
							"middle" : 4,
							"exit" : 3,
							"dir" : 2
						},
						"flags" : {
							"fast" : 3,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000043,
							"pbe" : 0.000039999999999999996,
							"pbm" : 0.00009
						}
					}
				]
			},
			{
				"as" : 124456,
				"relay" : 8,
				"bwa" : 2373055,
				"bwc" : 1111355,
				"roles" : {
					"middle" : 8,
					"dir" : 6,
					"exit" : 2,
					"guard" : 1
				},
				"flags" : {
					"notFastStable" : 3,
					"fast" : 4,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000303,
					"pbm" : 0.000397,
					"pbe" : 0.00039400000000000004,
					"pbg" : 0.000116
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 8,
						"bwa" : 2373055,
						"bwc" : 1111355,
						"roles" : {
							"middle" : 8,
							"dir" : 6,
							"exit" : 2,
							"guard" : 1
						},
						"flags" : {
							"notFastStable" : 3,
							"fast" : 4,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000303,
							"pbm" : 0.000397,
							"pbe" : 0.00039400000000000004,
							"pbg" : 0.000116
						}
					}
				]
			},
			{
				"as" : 4412,
				"relay" : 4,
				"bwa" : 14533328,
				"bwc" : 13301920,
				"roles" : {
					"middle" : 4,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.004502,
					"pbm" : 0.005363,
					"pbg" : 0.008142
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 4,
						"bwa" : 14533328,
						"bwc" : 13301920,
						"roles" : {
							"middle" : 4,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.004502,
							"pbm" : 0.005363,
							"pbg" : 0.008142
						}
					}
				]
			},
			{
				"as" : 3144,
				"relay" : 4,
				"bwa" : 1538585,
				"bwc" : 624462,
				"roles" : {
					"middle" : 4,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000278,
					"pbm" : 0.000353,
					"pbg" : 0.00048
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 4,
						"bwa" : 1538585,
						"bwc" : 624462,
						"roles" : {
							"middle" : 4,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000278,
							"pbm" : 0.000353,
							"pbg" : 0.00048
						}
					}
				]
			},
			{
				"as" : 185500,
				"relay" : 4,
				"bwa" : 445148,
				"bwc" : 95670,
				"roles" : {
					"middle" : 4,
					"dir" : 4,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000017,
					"pbm" : 0.000031,
					"pbe" : 0.000019
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 445148,
						"bwc" : 95670,
						"roles" : {
							"middle" : 4,
							"dir" : 4,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000017,
							"pbm" : 0.000031,
							"pbe" : 0.000019
						}
					}
				]
			},
			{
				"as" : 2852,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 462642,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000106,
					"pbm" : 0.000319
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 462642,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000106,
							"pbm" : 0.000319
						}
					}
				]
			},
			{
				"as" : 22600,
				"relay" : 4,
				"bwa" : 1474326,
				"bwc" : 876295,
				"roles" : {
					"middle" : 4,
					"dir" : 3
				},
				"flags" : {
					"stable" : 1,
					"fast" : 2,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00021600000000000002,
					"pbm" : 0.000647
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 1474326,
						"bwc" : 876295,
						"roles" : {
							"middle" : 4,
							"dir" : 3
						},
						"flags" : {
							"stable" : 1,
							"fast" : 2,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00021600000000000002,
							"pbm" : 0.000647
						}
					}
				]
			},
			{
				"as" : 58282,
				"relay" : 2,
				"bwa" : 2271232,
				"bwc" : 874586,
				"roles" : {
					"middle" : 2,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000727,
					"pbe" : 0.002076,
					"pbm" : 0.000106
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 2271232,
						"bwc" : 874586,
						"roles" : {
							"middle" : 2,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000727,
							"pbe" : 0.002076,
							"pbm" : 0.000106
						}
					}
				]
			},
			{
				"as" : 5580,
				"relay" : 1,
				"bwa" : 4219684,
				"bwc" : 3799831,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000541,
					"pbg" : 0.001164,
					"pbm" : 0.00046
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 4219684,
						"bwc" : 3799831,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000541,
							"pbg" : 0.001164,
							"pbm" : 0.00046
						}
					}
				]
			},
			{
				"as" : 26347,
				"relay" : 1,
				"bwa" : 1572864,
				"bwc" : 1007681,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000518,
					"pbg" : 0.001113,
					"pbm" : 0.00044
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1572864,
						"bwc" : 1007681,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000518,
							"pbg" : 0.001113,
							"pbm" : 0.00044
						}
					}
				]
			},
			{
				"as" : 115716,
				"relay" : 2,
				"bwa" : 2297420,
				"bwc" : 1629134,
				"roles" : {
					"middle" : 2,
					"exit" : 2,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000328,
					"pbe" : 0.000711,
					"pbg" : 0.000137,
					"pbm" : 0.000137
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 2,
						"bwa" : 2297420,
						"bwc" : 1629134,
						"roles" : {
							"middle" : 2,
							"exit" : 2,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000328,
							"pbe" : 0.000711,
							"pbg" : 0.000137,
							"pbm" : 0.000137
						}
					}
				]
			},
			{
				"as" : 317944,
				"relay" : 8,
				"bwa" : 89011576,
				"bwc" : 60503838,
				"roles" : {
					"guard" : 6,
					"middle" : 8,
					"dir" : 7,
					"exit" : 6
				},
				"flags" : {
					"fastStable" : 5,
					"fast" : 3
				},
				"probs" : {
					"pbr" : 0.016444,
					"pbg" : 0.010873,
					"pbm" : 0.008367,
					"pbe" : 0.030094000000000003
				},
				"countries" : [
					{
						"cc" : "RO",
						"relay" : 7,
						"bwa" : 83768696,
						"bwc" : 56295389,
						"roles" : {
							"guard" : 5,
							"middle" : 7,
							"dir" : 6,
							"exit" : 6
						},
						"flags" : {
							"fastStable" : 4,
							"fast" : 3
						},
						"probs" : {
							"pbr" : 0.014787999999999999,
							"pbg" : 0.007311,
							"pbm" : 0.00696,
							"pbe" : 0.030094000000000003
						}
					},
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 5242880,
						"bwc" : 4208449,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001656,
							"pbg" : 0.003562,
							"pbm" : 0.001407
						}
					}
				]
			},
			{
				"as" : 12066,
				"relay" : 1,
				"bwa" : 26242,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "DO",
						"relay" : 1,
						"bwa" : 26242,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 5440,
				"relay" : 8,
				"bwa" : 10106104,
				"bwc" : 6074238,
				"roles" : {
					"guard" : 4,
					"middle" : 8,
					"dir" : 6,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 8
				},
				"probs" : {
					"pbr" : 0.001455,
					"pbg" : 0.0024240000000000004,
					"pbm" : 0.001277,
					"pbe" : 0.000665
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 10106104,
						"bwc" : 6074238,
						"roles" : {
							"guard" : 4,
							"middle" : 8,
							"dir" : 6,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 8
						},
						"probs" : {
							"pbr" : 0.001455,
							"pbg" : 0.0024240000000000004,
							"pbm" : 0.001277,
							"pbe" : 0.000665
						}
					}
				]
			},
			{
				"as" : 13698,
				"relay" : 2,
				"bwa" : 251197,
				"bwc" : 18115,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000018,
					"pbe" : 0.000047,
					"pbm" : 0.000007
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 2,
						"bwa" : 251197,
						"bwc" : 18115,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000018,
							"pbe" : 0.000047,
							"pbm" : 0.000007
						}
					}
				]
			},
			{
				"as" : 62728,
				"relay" : 2,
				"bwa" : 655157,
				"bwc" : 132768,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000024,
					"pbg" : 0.000035,
					"pbm" : 0.000038
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 655157,
						"bwc" : 132768,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000024,
							"pbg" : 0.000035,
							"pbm" : 0.000038
						}
					}
				]
			},
			{
				"as" : 132072,
				"relay" : 8,
				"bwa" : 953344,
				"bwc" : 449390,
				"roles" : {
					"middle" : 8,
					"guard" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 5,
					"fast" : 1,
					"stable" : 2
				},
				"probs" : {
					"pbr" : 0.000066,
					"pbm" : 0.000145,
					"pbg" : 0.000053
				},
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 1,
						"bwa" : 131072,
						"bwc" : 14925,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000005,
							"pbm" : 0.000015
						}
					},
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 131072,
						"bwc" : 112389,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00001,
							"pbm" : 0.000031
						}
					},
					{
						"cc" : "IE",
						"relay" : 4,
						"bwa" : 483328,
						"bwc" : 284720,
						"roles" : {
							"guard" : 1,
							"middle" : 4
						},
						"flags" : {
							"fastStable" : 2,
							"stable" : 2
						},
						"probs" : {
							"pbr" : 0.000036,
							"pbg" : 0.000053,
							"pbm" : 0.000054999999999999995
						}
					},
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 207872,
						"bwc" : 37356,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000015,
							"pbm" : 0.000044
						}
					}
				]
			},
			{
				"as" : 38731,
				"relay" : 1,
				"bwa" : 409600,
				"bwc" : 205765,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000023,
					"pbg" : 0.000013,
					"pbm" : 0.000013,
					"pbe" : 0.000043
				},
				"countries" : [
					{
						"cc" : "VN",
						"relay" : 1,
						"bwa" : 409600,
						"bwc" : 205765,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000023,
							"pbg" : 0.000013,
							"pbm" : 0.000013,
							"pbe" : 0.000043
						}
					}
				]
			},
			{
				"as" : 122772,
				"relay" : 4,
				"bwa" : 27220378,
				"bwc" : 18079157,
				"roles" : {
					"guard" : 4,
					"middle" : 4,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.005838,
					"pbg" : 0.012557,
					"pbm" : 0.00496
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 27220378,
						"bwc" : 18079157,
						"roles" : {
							"guard" : 4,
							"middle" : 4,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.005838,
							"pbg" : 0.012557,
							"pbm" : 0.00496
						}
					}
				]
			},
			{
				"as" : 5058,
				"relay" : 2,
				"bwa" : 92160,
				"bwc" : 15788,
				"roles" : {
					"middle" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.0000049999999999999996,
					"pbm" : 0.000012,
					"pbe" : 0.000002
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 2,
						"bwa" : 92160,
						"bwc" : 15788,
						"roles" : {
							"middle" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.0000049999999999999996,
							"pbm" : 0.000012,
							"pbe" : 0.000002
						}
					}
				]
			},
			{
				"as" : 126640,
				"relay" : 8,
				"bwa" : 5432467,
				"bwc" : 3465561,
				"roles" : {
					"guard" : 2,
					"middle" : 8,
					"dir" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 6,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000985,
					"pbg" : 0.0012690000000000002,
					"pbm" : 0.001605,
					"pbe" : 0.000081
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 8,
						"bwa" : 5432467,
						"bwc" : 3465561,
						"roles" : {
							"guard" : 2,
							"middle" : 8,
							"dir" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 6,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000985,
							"pbg" : 0.0012690000000000002,
							"pbm" : 0.001605,
							"pbe" : 0.000081
						}
					}
				]
			},
			{
				"as" : 198176,
				"relay" : 4,
				"bwa" : 10085443,
				"bwc" : 7809168,
				"roles" : {
					"middle" : 4,
					"exit" : 2,
					"dir" : 3,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.002325,
					"pbe" : 0.000119,
					"pbm" : 0.006394,
					"pbg" : 0.000464
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 4,
						"bwa" : 10085443,
						"bwc" : 7809168,
						"roles" : {
							"middle" : 4,
							"exit" : 2,
							"dir" : 3,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.002325,
							"pbe" : 0.000119,
							"pbm" : 0.006394,
							"pbg" : 0.000464
						}
					}
				]
			},
			{
				"as" : 57378,
				"relay" : 1,
				"bwa" : 178227,
				"bwc" : 51002,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00002,
					"pbe" : 0.000059
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 178227,
						"bwc" : 51002,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00002,
							"pbe" : 0.000059
						}
					}
				]
			},
			{
				"as" : 281824,
				"relay" : 8,
				"bwa" : 412672,
				"bwc" : 105044,
				"roles" : {
					"middle" : 8,
					"exit" : 5,
					"dir" : 4
				},
				"flags" : {
					"notFastStable" : 1,
					"stable" : 3,
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000031,
					"pbm" : 0.000037,
					"pbe" : 0.000059000000000000004
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 8,
						"bwa" : 412672,
						"bwc" : 105044,
						"roles" : {
							"middle" : 8,
							"exit" : 5,
							"dir" : 4
						},
						"flags" : {
							"notFastStable" : 1,
							"stable" : 3,
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000031,
							"pbm" : 0.000037,
							"pbe" : 0.000059000000000000004
						}
					}
				]
			},
			{
				"as" : 16678,
				"relay" : 2,
				"bwa" : 215040,
				"bwc" : 139252,
				"roles" : {
					"middle" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000032,
					"pbm" : 0.000095
				},
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 2,
						"bwa" : 215040,
						"bwc" : 139252,
						"roles" : {
							"middle" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000032,
							"pbm" : 0.000095
						}
					}
				]
			},
			{
				"as" : 21412,
				"relay" : 1,
				"bwa" : 153600,
				"bwc" : 43739,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000015,
					"pbm" : 0.000044
				},
				"countries" : [
					{
						"cc" : "LT",
						"relay" : 1,
						"bwa" : 153600,
						"bwc" : 43739,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000015,
							"pbm" : 0.000044
						}
					}
				]
			},
			{
				"as" : 97270,
				"relay" : 2,
				"bwa" : 1309438,
				"bwc" : 704258,
				"roles" : {
					"middle" : 2,
					"exit" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00029600000000000004,
					"pbe" : 0.000888
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 1309438,
						"bwc" : 704258,
						"roles" : {
							"middle" : 2,
							"exit" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00029600000000000004,
							"pbe" : 0.000888
						}
					}
				]
			},
			{
				"as" : 86468,
				"relay" : 2,
				"bwa" : 240565,
				"bwc" : 45034,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000013000000000000001,
					"pbe" : 0.000019,
					"pbm" : 0.00002
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 2,
						"bwa" : 240565,
						"bwc" : 45034,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000013000000000000001,
							"pbe" : 0.000019,
							"pbm" : 0.00002
						}
					}
				]
			},
			{
				"as" : 25672,
				"relay" : 8,
				"bwa" : 692782,
				"bwc" : 126137,
				"roles" : {
					"middle" : 8,
					"dir" : 3
				},
				"flags" : {
					"fast" : 5,
					"fastStable" : 2,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000047000000000000004,
					"pbm" : 0.00014
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 692782,
						"bwc" : 126137,
						"roles" : {
							"middle" : 8,
							"dir" : 3
						},
						"flags" : {
							"fast" : 5,
							"fastStable" : 2,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000047000000000000004,
							"pbm" : 0.00014
						}
					}
				]
			},
			{
				"as" : 52120,
				"relay" : 4,
				"bwa" : 14655488,
				"bwc" : 12006714,
				"roles" : {
					"guard" : 4,
					"middle" : 4,
					"exit" : 4,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.0051,
					"pbg" : 0.0028580000000000003,
					"pbm" : 0.002857,
					"pbe" : 0.009583000000000001
				},
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 4,
						"bwa" : 14655488,
						"bwc" : 12006714,
						"roles" : {
							"guard" : 4,
							"middle" : 4,
							"exit" : 4,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.0051,
							"pbg" : 0.0028580000000000003,
							"pbm" : 0.002857,
							"pbe" : 0.009583000000000001
						}
					}
				]
			},
			{
				"as" : 13696,
				"relay" : 2,
				"bwa" : 196608,
				"bwc" : 32180,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000018,
					"pbm" : 0.000055
				},
				"countries" : [
					{
						"cc" : "BE",
						"relay" : 2,
						"bwa" : 196608,
						"bwc" : 32180,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000018,
							"pbm" : 0.000055
						}
					}
				]
			},
			{
				"as" : 20597,
				"relay" : 1,
				"bwa" : 2432836,
				"bwc" : 1133679,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000565,
					"pbg" : 0.001215,
					"pbm" : 0.00048
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 2432836,
						"bwc" : 1133679,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000565,
							"pbg" : 0.001215,
							"pbm" : 0.00048
						}
					}
				]
			},
			{
				"as" : 53198,
				"relay" : 2,
				"bwa" : 40960,
				"bwc" : 65,
				"roles" : {
					"middle" : 2
				},
				"flags" : {
					"notFastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000018
				},
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 2,
						"bwa" : 40960,
						"bwc" : 65,
						"roles" : {
							"middle" : 2
						},
						"flags" : {
							"notFastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000018
						}
					}
				]
			},
			{
				"as" : 29278,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 86581,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000049,
					"pbg" : 0.000106,
					"pbm" : 0.000042
				},
				"countries" : [
					{
						"cc" : "HU",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 86581,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000049,
							"pbg" : 0.000106,
							"pbm" : 0.000042
						}
					}
				]
			},
			{
				"as" : 12357,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 416,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 416,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 49120,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 860885,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000214,
					"pbg" : 0.000461,
					"pbm" : 0.000182
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 860885,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000214,
							"pbg" : 0.000461,
							"pbm" : 0.000182
						}
					}
				]
			},
			{
				"as" : 166600,
				"relay" : 8,
				"bwa" : 1702260,
				"bwc" : 647095,
				"roles" : {
					"middle" : 8,
					"dir" : 6,
					"guard" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 5,
					"notFastStable" : 1,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.00030900000000000003,
					"pbm" : 0.000225,
					"pbg" : 0.000026,
					"pbe" : 0.000674
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 1702260,
						"bwc" : 647095,
						"roles" : {
							"middle" : 8,
							"dir" : 6,
							"guard" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 5,
							"notFastStable" : 1,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.00030900000000000003,
							"pbm" : 0.000225,
							"pbg" : 0.000026,
							"pbe" : 0.000674
						}
					}
				]
			},
			{
				"as" : 3408,
				"relay" : 4,
				"bwa" : 203870,
				"bwc" : 47544,
				"roles" : {
					"middle" : 4,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"fast" : 1,
					"stable" : 2,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000007,
					"pbe" : 0.000013,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 4,
						"bwa" : 203870,
						"bwc" : 47544,
						"roles" : {
							"middle" : 4,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"fast" : 1,
							"stable" : 2,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000007,
							"pbe" : 0.000013,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 41371,
				"relay" : 1,
				"bwa" : 80674,
				"bwc" : 711,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbe" : 0.000004
				},
				"countries" : [
					{
						"cc" : "KZ",
						"relay" : 1,
						"bwa" : 80674,
						"bwc" : 711,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbe" : 0.000004
						}
					}
				]
			},
			{
				"as" : 42093,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 21585,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 21585,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 43184,
				"relay" : 4,
				"bwa" : 273423,
				"bwc" : 51729,
				"roles" : {
					"middle" : 4,
					"exit" : 2,
					"dir" : 3
				},
				"flags" : {
					"notFastStable" : 1,
					"fast" : 1,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000019,
					"pbm" : 0.000017,
					"pbe" : 0.000039999999999999996
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 273423,
						"bwc" : 51729,
						"roles" : {
							"middle" : 4,
							"exit" : 2,
							"dir" : 3
						},
						"flags" : {
							"notFastStable" : 1,
							"fast" : 1,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000019,
							"pbm" : 0.000017,
							"pbe" : 0.000039999999999999996
						}
					}
				]
			},
			{
				"as" : 51399,
				"relay" : 1,
				"bwa" : 2048000,
				"bwc" : 1533393,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00011,
					"pbg" : 0.000238,
					"pbm" : 0.000094
				},
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 2048000,
						"bwc" : 1533393,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00011,
							"pbg" : 0.000238,
							"pbm" : 0.000094
						}
					}
				]
			},
			{
				"as" : 213056,
				"relay" : 4,
				"bwa" : 1853440,
				"bwc" : 1346740,
				"roles" : {
					"middle" : 4,
					"guard" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000436,
					"pbm" : 0.000389,
					"pbg" : 0.000918
				},
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 1,
						"bwa" : 72704,
						"bwc" : 13266,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000011
						}
					},
					{
						"cc" : "US",
						"relay" : 3,
						"bwa" : 1780736,
						"bwc" : 1333474,
						"roles" : {
							"guard" : 2,
							"middle" : 3,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.00043200000000000004,
							"pbg" : 0.000918,
							"pbm" : 0.000378
						}
					}
				]
			},
			{
				"as" : 169408,
				"relay" : 4,
				"bwa" : 81920,
				"bwc" : 28230,
				"roles" : {
					"middle" : 4,
					"exit" : 4
				},
				"flags" : {
					"stable" : 4
				},
				"probs" : {
					"pbr" : 0.000012,
					"pbe" : 0.000036
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 4,
						"bwa" : 81920,
						"bwc" : 28230,
						"roles" : {
							"middle" : 4,
							"exit" : 4
						},
						"flags" : {
							"stable" : 4
						},
						"probs" : {
							"pbr" : 0.000012,
							"pbe" : 0.000036
						}
					}
				]
			},
			{
				"as" : 49726,
				"relay" : 2,
				"bwa" : 56320,
				"bwc" : 19550,
				"roles" : {
					"middle" : 2,
					"dir" : 1,
					"exit" : 1
				},
				"flags" : {
					"notFastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000009,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "EG",
						"relay" : 2,
						"bwa" : 56320,
						"bwc" : 19550,
						"roles" : {
							"middle" : 2,
							"dir" : 1,
							"exit" : 1
						},
						"flags" : {
							"notFastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000009,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 16894,
				"relay" : 2,
				"bwa" : 167936,
				"bwc" : 10236,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000007,
					"pbm" : 0.000019999999999999998
				},
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 2,
						"bwa" : 167936,
						"bwc" : 10236,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000007,
							"pbm" : 0.000019999999999999998
						}
					}
				]
			},
			{
				"as" : 16904,
				"relay" : 1,
				"bwa" : 64153,
				"bwc" : 0,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 64153,
						"bwc" : 0,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 279768,
				"relay" : 8,
				"bwa" : 3174400,
				"bwc" : 2612088,
				"roles" : {
					"guard" : 4,
					"middle" : 8,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 6,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000572,
					"pbg" : 0.000687,
					"pbm" : 0.001029
				},
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 8,
						"bwa" : 3174400,
						"bwc" : 2612088,
						"roles" : {
							"guard" : 4,
							"middle" : 8,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 6,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000572,
							"pbg" : 0.000687,
							"pbm" : 0.001029
						}
					}
				]
			},
			{
				"as" : 12530,
				"relay" : 1,
				"bwa" : 548964,
				"bwc" : 108500,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
						"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000043,
					"pbe" : 0.000128
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 548964,
						"bwc" : 108500,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000043,
							"pbe" : 0.000128
						}
					}
				]
			},
			{
				"as" : 17931,
				"relay" : 1,
				"bwa" : 92284,
				"bwc" : 10632,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 92284,
						"bwc" : 10632,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 18047,
				"relay" : 1,
				"bwa" : 30720,
				"bwc" : 909,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "TW",
						"relay" : 1,
						"bwa" : 30720,
						"bwc" : 909,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 47165,
				"relay" : 1,
				"bwa" : 1092608,
				"bwc" : 27,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000147,
					"pbe" : 0.000442
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1092608,
						"bwc" : 27,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000147,
							"pbe" : 0.000442
						}
					}
				]
			},
			{
				"as" : 16566,
				"relay" : 2,
				"bwa" : 844800,
				"bwc" : 603264,
				"roles" : {
					"middle" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000248,
					"pbe" : 0.00015,
					"pbm" : 0.000594
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 844800,
						"bwc" : 603264,
						"roles" : {
							"middle" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000248,
							"pbe" : 0.00015,
							"pbm" : 0.000594
						}
					}
				]
			},
			{
				"as" : 17528,
				"relay" : 2,
				"bwa" : 184320,
				"bwc" : 77010,
				"roles" : {
					"middle" : 2,
					"dir" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000021000000000000002,
					"pbm" : 0.000045,
					"pbe" : 0.000019
				},
				"countries" : [
					{
						"cc" : "LT",
						"relay" : 2,
						"bwa" : 184320,
						"bwc" : 77010,
						"roles" : {
							"middle" : 2,
							"dir" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000021000000000000002,
							"pbm" : 0.000045,
							"pbe" : 0.000019
						}
					}
				]
			},
			{
				"as" : 35068,
				"relay" : 4,
				"bwa" : 276480,
				"bwc" : 65751,
				"roles" : {
					"middle" : 4,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 2,
					"notFastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000022,
					"pbe" : 0.000012,
					"pbm" : 0.000056
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 276480,
						"bwc" : 65751,
						"roles" : {
							"middle" : 4,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 2,
							"notFastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000022,
							"pbe" : 0.000012,
							"pbm" : 0.000056
						}
					}
				]
			},
			{
				"as" : 142368,
				"relay" : 4,
				"bwa" : 6926490,
				"bwc" : 2663413,
				"roles" : {
					"guard" : 3,
					"middle" : 4,
					"exit" : 4,
					"dir" : 3
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.001365,
					"pbg" : 0.000721,
					"pbm" : 0.000721,
					"pbe" : 0.002654
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 4,
						"bwa" : 6926490,
						"bwc" : 2663413,
						"roles" : {
							"guard" : 3,
							"middle" : 4,
							"exit" : 4,
							"dir" : 3
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.001365,
							"pbg" : 0.000721,
							"pbm" : 0.000721,
							"pbe" : 0.002654
						}
					}
				]
			},
			{
				"as" : 20375,
				"relay" : 1,
				"bwa" : 245000,
				"bwc" : 174231,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000021,
					"pbg" : 0.000045,
					"pbm" : 0.000018
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 245000,
						"bwc" : 174231,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000021,
							"pbg" : 0.000045,
							"pbm" : 0.000018
						}
					}
				]
			},
			{
				"as" : 25260,
				"relay" : 4,
				"bwa" : 15534870,
				"bwc" : 11822541,
				"roles" : {
					"middle" : 4,
					"dir" : 3,
					"guard" : 2,
					"exit" : 3
				},
				"flags" : {
					"fastStable" : 3,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.004403000000000001,
					"pbm" : 0.003394,
					"pbg" : 0.002254,
					"pbe" : 0.007560000000000001
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 15534870,
						"bwc" : 11822541,
						"roles" : {
							"middle" : 4,
							"dir" : 3,
							"guard" : 2,
							"exit" : 3
						},
						"flags" : {
							"fastStable" : 3,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.004403000000000001,
							"pbm" : 0.003394,
							"pbg" : 0.002254,
							"pbe" : 0.007560000000000001
						}
					}
				]
			},
			{
				"as" : 197301,
				"relay" : 1,
				"bwa" : 153600,
				"bwc" : 50634,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000025,
					"pbm" : 0.000076
				},
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 153600,
						"bwc" : 50634,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000025,
							"pbm" : 0.000076
						}
					}
				]
			},
			{
				"as" : 99884,
				"relay" : 4,
				"bwa" : 1324032,
				"bwc" : 680577,
				"roles" : {
					"middle" : 4,
					"exit" : 2,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000432,
					"pbm" : 0.00010899999999999999,
					"pbe" : 0.0011049999999999999,
					"pbg" : 0.000079
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 4,
						"bwa" : 1324032,
						"bwc" : 680577,
						"roles" : {
							"middle" : 4,
							"exit" : 2,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.000432,
							"pbm" : 0.00010899999999999999,
							"pbe" : 0.0011049999999999999,
							"pbg" : 0.000079
						}
					}
				]
			},
			{
				"as" : 10820,
				"relay" : 2,
				"bwa" : 139885,
				"bwc" : 29086,
				"roles" : {
					"middle" : 2,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.0000049999999999999996,
					"pbm" : 0.000004,
					"pbe" : 0.000012
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 2,
						"bwa" : 139885,
						"bwc" : 29086,
						"roles" : {
							"middle" : 2,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.0000049999999999999996,
							"pbm" : 0.000004,
							"pbe" : 0.000012
						}
					}
				]
			},
			{
				"as" : 3672,
				"relay" : 2,
				"bwa" : 837452,
				"bwc" : 305112,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000095,
					"pbe" : 0.000065,
					"pbg" : 0.000157,
					"pbm" : 0.000062
				},
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 2,
						"bwa" : 837452,
						"bwc" : 305112,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000095,
							"pbe" : 0.000065,
							"pbg" : 0.000157,
							"pbm" : 0.000062
						}
					}
				]
			},
			{
				"as" : 29685,
				"relay" : 1,
				"bwa" : 266240,
				"bwc" : 182036,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000063,
					"pbg" : 0.000135,
					"pbm" : 0.000053
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 266240,
						"bwc" : 182036,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000063,
							"pbg" : 0.000135,
							"pbm" : 0.000053
						}
					}
				]
			},
			{
				"as" : 2876,
				"relay" : 4,
				"bwa" : 384953,
				"bwc" : 121880,
				"roles" : {
					"middle" : 4,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 2,
					"stable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000053,
					"pbm" : 0.00007500000000000001,
					"pbg" : 0.000083
				},
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 4,
						"bwa" : 384953,
						"bwc" : 121880,
						"roles" : {
							"middle" : 4,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 2,
							"stable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000053,
							"pbm" : 0.00007500000000000001,
							"pbg" : 0.000083
						}
					}
				]
			},
			{
				"as" : 9082,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 357070,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000095,
					"pbg" : 0.000053,
					"pbm" : 0.000053,
					"pbe" : 0.000179
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 357070,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000095,
							"pbg" : 0.000053,
							"pbm" : 0.000053,
							"pbe" : 0.000179
						}
					}
				]
			},
			{
				"as" : 12177,
				"relay" : 1,
				"bwa" : 67192,
				"bwc" : 16494,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000006
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 67192,
						"bwc" : 16494,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000006
						}
					}
				]
			},
			{
				"as" : 60992,
				"relay" : 2,
				"bwa" : 1867166,
				"bwc" : 1013427,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000419,
					"pbg" : 0.000747,
					"pbm" : 0.000328,
					"pbe" : 0.000182
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 1867166,
						"bwc" : 1013427,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000419,
							"pbg" : 0.000747,
							"pbm" : 0.000328,
							"pbe" : 0.000182
						}
					}
				]
			},
			{
				"as" : 373216,
				"relay" : 8,
				"bwa" : 9730366,
				"bwc" : 6486848,
				"roles" : {
					"guard" : 6,
					"middle" : 8,
					"dir" : 5,
					"exit" : 2
				},
				"flags" : {
					"fastStable" : 6,
					"stable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.001592,
					"pbg" : 0.003287,
					"pbm" : 0.0012989999999999998,
					"pbe" : 0.000193
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 6,
						"bwa" : 3616768,
						"bwc" : 2270807,
						"roles" : {
							"guard" : 4,
							"middle" : 6,
							"dir" : 5,
							"exit" : 2
						},
						"flags" : {
							"fastStable" : 4,
							"stable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000621,
							"pbg" : 0.001198,
							"pbm" : 0.000473,
							"pbe" : 0.000193
						}
					},
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 6113598,
						"bwc" : 4216041,
						"roles" : {
							"guard" : 2,
							"middle" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000971,
							"pbg" : 0.002089,
							"pbm" : 0.0008259999999999999
						}
					}
				]
			},
			{
				"as" : 1576152,
				"relay" : 8,
				"bwa" : 17494676,
				"bwc" : 6711231,
				"roles" : {
					"guard" : 5,
					"middle" : 8,
					"dir" : 6,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 5,
					"fast" : 3
				},
				"probs" : {
					"pbr" : 0.00478,
					"pbg" : 0.002174,
					"pbm" : 0.011337,
					"pbe" : 0.00083
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 8,
						"bwa" : 17494676,
						"bwc" : 6711231,
						"roles" : {
							"guard" : 5,
							"middle" : 8,
							"dir" : 6,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 5,
							"fast" : 3
						},
						"probs" : {
							"pbr" : 0.00478,
							"pbg" : 0.002174,
							"pbm" : 0.011337,
							"pbe" : 0.00083
						}
					}
				]
			},
			{
				"as" : 166880,
				"relay" : 8,
				"bwa" : 4532800,
				"bwc" : 2643147,
				"roles" : {
					"middle" : 8,
					"guard" : 4,
					"exit" : 2,
					"dir" : 4
				},
				"flags" : {
					"fast" : 3,
					"fastStable" : 5
				},
				"probs" : {
					"pbr" : 0.0007160000000000001,
					"pbm" : 0.0012860000000000003,
					"pbg" : 0.000739,
					"pbe" : 0.000119
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 8,
						"bwa" : 4532800,
						"bwc" : 2643147,
						"roles" : {
							"middle" : 8,
							"guard" : 4,
							"exit" : 2,
							"dir" : 4
						},
						"flags" : {
							"fast" : 3,
							"fastStable" : 5
						},
						"probs" : {
							"pbr" : 0.0007160000000000001,
							"pbm" : 0.0012860000000000003,
							"pbg" : 0.000739,
							"pbe" : 0.000119
						}
					}
				]
			},
			{
				"as" : 26336,
				"relay" : 8,
				"bwa" : 7236654,
				"bwc" : 5150499,
				"roles" : {
					"guard" : 4,
					"middle" : 8,
					"exit" : 4,
					"dir" : 6
				},
				"flags" : {
					"fastStable" : 5,
					"stable" : 1,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.0016309999999999999,
					"pbg" : 0.003358,
					"pbm" : 0.001369,
					"pbe" : 0.000166
				},
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 6,
						"bwa" : 7150638,
						"bwc" : 5145776,
						"roles" : {
							"guard" : 4,
							"middle" : 6,
							"exit" : 4,
							"dir" : 5
						},
						"flags" : {
							"fastStable" : 4,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.0016239999999999998,
							"pbg" : 0.003358,
							"pbm" : 0.0013469999999999999,
							"pbe" : 0.000166
						}
					},
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 543,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					},
					{
						"cc" : "FI",
						"relay" : 1,
						"bwa" : 65536,
						"bwc" : 4180,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000013
						}
					}
				]
			},
			{
				"as" : 58604,
				"relay" : 2,
				"bwa" : 563200,
				"bwc" : 173895,
				"roles" : {
					"middle" : 2,
					"guard" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000092,
					"pbm" : 0.00015099999999999998,
					"pbg" : 0.000124
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 2,
						"bwa" : 563200,
						"bwc" : 173895,
						"roles" : {
							"middle" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000092,
							"pbm" : 0.00015099999999999998,
							"pbg" : 0.000124
						}
					}
				]
			},
			{
				"as" : 17886,
				"relay" : 2,
				"bwa" : 307200,
				"bwc" : 219137,
				"roles" : {
					"middle" : 2
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000049,
					"pbm" : 0.00014800000000000002
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 2,
						"bwa" : 307200,
						"bwc" : 219137,
						"roles" : {
							"middle" : 2
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000049,
							"pbm" : 0.00014800000000000002
						}
					}
				]
			},
			{
				"as" : 461344,
				"relay" : 8,
				"bwa" : 19078098,
				"bwc" : 6640506,
				"roles" : {
					"middle" : 8,
					"exit" : 7,
					"dir" : 2,
					"guard" : 2
				},
				"flags" : {
					"stable" : 5,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.004302,
					"pbe" : 0.004161000000000001,
					"pbg" : 0.005786,
					"pbm" : 0.002957
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 6,
						"bwa" : 8592338,
						"bwc" : 67487,
						"roles" : {
							"middle" : 6,
							"exit" : 5,
							"guard" : 1
						},
						"flags" : {
							"stable" : 5,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.002189,
							"pbe" : 0.000044999999999999996,
							"pbg" : 0.004675,
							"pbm" : 0.001847
						}
					},
					{
						"cc" : "RO",
						"relay" : 1,
						"bwa" : 5242880,
						"bwc" : 1807472,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000131,
							"pbe" : 0.000393
						}
					},
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 5242880,
						"bwc" : 4765547,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001982,
							"pbg" : 0.001111,
							"pbm" : 0.00111,
							"pbe" : 0.003723
						}
					}
				]
			},
			{
				"as" : 68480,
				"relay" : 2,
				"bwa" : 235520,
				"bwc" : 186993,
				"roles" : {
					"middle" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000037000000000000005,
					"pbm" : 0.00011200000000000001
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 235520,
						"bwc" : 186993,
						"roles" : {
							"middle" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000037000000000000005,
							"pbm" : 0.00011200000000000001
						}
					}
				]
			},
			{
				"as" : 18059,
				"relay" : 1,
				"bwa" : 23999,
				"bwc" : 354,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "ID",
						"relay" : 1,
						"bwa" : 23999,
						"bwc" : 354,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 25210,
				"relay" : 2,
				"bwa" : 418816,
				"bwc" : 138021,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000063,
					"pbg" : 0.000104,
					"pbm" : 0.000048,
					"pbe" : 0.000037
				},
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 2,
						"bwa" : 418816,
						"bwc" : 138021,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000063,
							"pbg" : 0.000104,
							"pbm" : 0.000048,
							"pbe" : 0.000037
						}
					}
				]
			},
			{
				"as" : 87152,
				"relay" : 4,
				"bwa" : 816684,
				"bwc" : 311863,
				"roles" : {
					"middle" : 4,
					"dir" : 4,
					"exit" : 2,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000058,
					"pbm" : 0.00008999999999999999,
					"pbe" : 0.000038,
					"pbg" : 0.000044
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 816684,
						"bwc" : 311863,
						"roles" : {
							"middle" : 4,
							"dir" : 4,
							"exit" : 2,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.000058,
							"pbm" : 0.00008999999999999999,
							"pbe" : 0.000038,
							"pbg" : 0.000044
						}
					}
				]
			},
			{
				"as" : 44856,
				"relay" : 8,
				"bwa" : 2753655,
				"bwc" : 1086839,
				"roles" : {
					"middle" : 8,
					"exit" : 2,
					"dir" : 5,
					"guard" : 1
				},
				"flags" : {
					"notFastStable" : 1,
					"fast" : 6,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.0005149999999999999,
					"pbm" : 0.000063,
					"pbe" : 0.001439,
					"pbg" : 0.000046
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 8,
						"bwa" : 2753655,
						"bwc" : 1086839,
						"roles" : {
							"middle" : 8,
							"exit" : 2,
							"dir" : 5,
							"guard" : 1
						},
						"flags" : {
							"notFastStable" : 1,
							"fast" : 6,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.0005149999999999999,
							"pbm" : 0.000063,
							"pbe" : 0.001439,
							"pbg" : 0.000046
						}
					}
				]
			},
			{
				"as" : 95738,
				"relay" : 2,
				"bwa" : 5509120,
				"bwc" : 4013333,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.0018850000000000002,
					"pbg" : 0.001092,
					"pbm" : 0.001063,
					"pbe" : 0.003501
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 5509120,
						"bwc" : 4013333,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.0018850000000000002,
							"pbg" : 0.001092,
							"pbm" : 0.001063,
							"pbe" : 0.003501
						}
					}
				]
			},
			{
				"as" : 50616,
				"relay" : 8,
				"bwa" : 771560,
				"bwc" : 46210,
				"roles" : {
					"middle" : 8,
					"dir" : 4,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 2,
					"stable" : 3,
					"fast" : 3
				},
				"probs" : {
					"pbr" : 0.000034,
					"pbm" : 0.000092,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 8,
						"bwa" : 771560,
						"bwc" : 46210,
						"roles" : {
							"middle" : 8,
							"dir" : 4,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 2,
							"stable" : 3,
							"fast" : 3
						},
						"probs" : {
							"pbr" : 0.000034,
							"pbm" : 0.000092,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 1792,
				"relay" : 8,
				"bwa" : 28311552,
				"bwc" : 24383305,
				"roles" : {
					"middle" : 8,
					"guard" : 2
				},
				"flags" : {
					"fast" : 6,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.006423,
					"pbm" : 0.007538,
					"pbg" : 0.011734999999999999
				},
				"countries" : [
					{
						"cc" : "NO",
						"relay" : 8,
						"bwa" : 28311552,
						"bwc" : 24383305,
						"roles" : {
							"middle" : 8,
							"guard" : 2
						},
						"flags" : {
							"fast" : 6,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.006423,
							"pbm" : 0.007538,
							"pbg" : 0.011734999999999999
						}
					}
				]
			},
			{
				"as" : 27484,
				"relay" : 4,
				"bwa" : 225474,
				"bwc" : 50179,
				"roles" : {
					"middle" : 4,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2,
					"stable" : 2
				},
				"probs" : {
					"pbr" : 0.000019,
					"pbm" : 0.000056999999999999996
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 4,
						"bwa" : 225474,
						"bwc" : 50179,
						"roles" : {
							"middle" : 4,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2,
							"stable" : 2
						},
						"probs" : {
							"pbr" : 0.000019,
							"pbm" : 0.000056999999999999996
						}
					}
				]
			},
			{
				"as" : 50503,
				"relay" : 1,
				"bwa" : 66546,
				"bwc" : 5817,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000007
				},
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 1,
						"bwa" : 66546,
						"bwc" : 5817,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000007
						}
					}
				]
			},
			{
				"as" : 83382,
				"relay" : 2,
				"bwa" : 423913,
				"bwc" : 53545,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000019999999999999998,
					"pbm" : 0.00006
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 423913,
						"bwc" : 53545,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000019999999999999998,
							"pbm" : 0.00006
						}
					}
				]
			},
			{
				"as" : 26474,
				"relay" : 2,
				"bwa" : 4915200,
				"bwc" : 6944905,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.001686,
					"pbg" : 0.0036260000000000003,
					"pbm" : 0.001433
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 4915200,
						"bwc" : 6944905,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.001686,
							"pbg" : 0.0036260000000000003,
							"pbm" : 0.001433
						}
					}
				]
			},
			{
				"as" : 94310,
				"relay" : 2,
				"bwa" : 430364,
				"bwc" : 42102,
				"roles" : {
					"middle" : 2,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbm" : 0.000001,
					"pbr" : 0.000029,
					"pbe" : 0.000088
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 2,
						"bwa" : 430364,
						"bwc" : 42102,
						"roles" : {
							"middle" : 2,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbm" : 0.000001,
							"pbr" : 0.000029,
							"pbe" : 0.000088
						}
					}
				]
			},
			{
				"as" : 33387,
				"relay" : 1,
				"bwa" : 2405592,
				"bwc" : 1380620,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000868,
					"pbe" : 0.002604
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 2405592,
						"bwc" : 1380620,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000868,
							"pbe" : 0.002604
						}
					}
				]
			},
			{
				"as" : 66608,
				"relay" : 4,
				"bwa" : 4063232,
				"bwc" : 3861143,
				"roles" : {
					"guard" : 4,
					"middle" : 4,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.001311,
					"pbg" : 0.000895,
					"pbm" : 0.000764,
					"pbe" : 0.002276
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 4063232,
						"bwc" : 3861143,
						"roles" : {
							"guard" : 4,
							"middle" : 4,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.001311,
							"pbg" : 0.000895,
							"pbm" : 0.000764,
							"pbe" : 0.002276
						}
					}
				]
			},
			{
				"as" : 40244,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 202927,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000019,
					"pbg" : 0.000041,
					"pbm" : 0.000016
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 202927,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000019,
							"pbg" : 0.000041,
							"pbm" : 0.000016
						}
					}
				]
			},
			{
				"as" : 679,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 43218,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00001,
					"pbm" : 0.00003
				},
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 43218,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00001,
							"pbm" : 0.00003
						}
					}
				]
			},
			{
				"as" : 7302,
				"relay" : 2,
				"bwa" : 72704,
				"bwc" : 208,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000018
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 72704,
						"bwc" : 208,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000018
						}
					}
				]
			},
			{
				"as" : 68480,
				"relay" : 8,
				"bwa" : 4031159,
				"bwc" : 892648,
				"roles" : {
					"guard" : 4,
					"middle" : 8,
					"dir" : 5
				},
				"flags" : {
					"fastStable" : 6,
					"stable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000916,
					"pbg" : 0.00021700000000000002,
					"pbm" : 0.002533
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 6,
						"bwa" : 1305294,
						"bwc" : 853952,
						"roles" : {
							"guard" : 4,
							"middle" : 6,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 5,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.00010499999999999999,
							"pbg" : 0.00021700000000000002,
							"pbm" : 0.000099
						}
					},
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 2725865,
						"bwc" : 38696,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000811,
							"pbm" : 0.0024340000000000004
						}
					}
				]
			},
			{
				"as" : 26956,
				"relay" : 4,
				"bwa" : 604160,
				"bwc" : 278754,
				"roles" : {
					"middle" : 4,
					"dir" : 3,
					"exit" : 2
				},
				"flags" : {
					"fastStable" : 2,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000048,
					"pbm" : 0.000049999999999999996,
					"pbe" : 0.000095
				},
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 4,
						"bwa" : 604160,
						"bwc" : 278754,
						"roles" : {
							"middle" : 4,
							"dir" : 3,
							"exit" : 2
						},
						"flags" : {
							"fastStable" : 2,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000048,
							"pbm" : 0.000049999999999999996,
							"pbe" : 0.000095
						}
					}
				]
			},
			{
				"as" : 19975,
				"relay" : 1,
				"bwa" : 524288,
				"bwc" : 351110,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000077,
					"pbg" : 0.000043,
					"pbm" : 0.000043,
					"pbe" : 0.000145
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 524288,
						"bwc" : 351110,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000077,
							"pbg" : 0.000043,
							"pbm" : 0.000043,
							"pbe" : 0.000145
						}
					}
				]
			},
			{
				"as" : 51059,
				"relay" : 1,
				"bwa" : 81920,
				"bwc" : 13326,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000007,
					"pbm" : 0.00002
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 81920,
						"bwc" : 13326,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000007,
							"pbm" : 0.00002
						}
					}
				]
			},
			{
				"as" : 12,
				"relay" : 4,
				"bwa" : 9850880,
				"bwc" : 6793228,
				"roles" : {
					"guard" : 3,
					"middle" : 4,
					"dir" : 3,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 4,
					"authority" : 1
				},
				"probs" : {
					"pbr" : 0.003128,
					"pbg" : 0.00175,
					"pbm" : 0.0037709999999999996,
					"pbe" : 0.003862
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 9850880,
						"bwc" : 6793228,
						"roles" : {
							"guard" : 3,
							"middle" : 4,
							"dir" : 3,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 4,
							"authority" : 1
						},
						"probs" : {
							"pbr" : 0.003128,
							"pbg" : 0.00175,
							"pbm" : 0.0037709999999999996,
							"pbe" : 0.003862
						}
					}
				]
			},
			{
				"as" : 81816,
				"relay" : 4,
				"bwa" : 2714624,
				"bwc" : 1782444,
				"roles" : {
					"guard" : 4,
					"middle" : 4,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000676,
					"pbg" : 0.001451,
					"pbm" : 0.000574
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 2714624,
						"bwc" : 1782444,
						"roles" : {
							"guard" : 4,
							"middle" : 4,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.000676,
							"pbg" : 0.001451,
							"pbm" : 0.000574
						}
					}
				]
			},
			{
				"as" : 29208,
				"relay" : 1,
				"bwa" : 5120000,
				"bwc" : 5120000,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.001967,
					"pbg" : 0.001102,
					"pbm" : 0.001102,
					"pbe" : 0.003695
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 5120000,
						"bwc" : 5120000,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001967,
							"pbg" : 0.001102,
							"pbm" : 0.001102,
							"pbe" : 0.003695
						}
					}
				]
			},
			{
				"as" : 19644,
				"relay" : 2,
				"bwa" : 225280,
				"bwc" : 74211,
				"roles" : {
					"middle" : 2,
					"exit" : 2,
					"guard" : 1,
					"dir" : 1
				},
				"flags" : {
					"stable" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000019,
					"pbe" : 0.000038,
					"pbg" : 0.000009,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 2,
						"bwa" : 225280,
						"bwc" : 74211,
						"roles" : {
							"middle" : 2,
							"exit" : 2,
							"guard" : 1,
							"dir" : 1
						},
						"flags" : {
							"stable" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000019,
							"pbe" : 0.000038,
							"pbg" : 0.000009,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 41557,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 17576,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "MK",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 17576,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 13618,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 804170,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000186,
					"pbm" : 0.000559
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 804170,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000186,
							"pbm" : 0.000559
						}
					}
				]
			},
			{
				"as" : 290816,
				"relay" : 8,
				"bwa" : 4873362,
				"bwc" : 2115132,
				"roles" : {
					"middle" : 8,
					"dir" : 4,
					"guard" : 2
				},
				"flags" : {
					"fast" : 5,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.00052,
					"pbm" : 0.001183,
					"pbg" : 0.00037799999999999997
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 7,
						"bwa" : 4689042,
						"bwc" : 2100658,
						"roles" : {
							"middle" : 7,
							"dir" : 4,
							"guard" : 2
						},
						"flags" : {
							"fast" : 5,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.0005089999999999999,
							"pbm" : 0.001149,
							"pbg" : 0.00037799999999999997
						}
					},
					{
						"cc" : "AU",
						"relay" : 1,
						"bwa" : 184320,
						"bwc" : 14474,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbm" : 0.000034
						}
					}
				]
			},
			{
				"as" : 24186,
				"relay" : 2,
				"bwa" : 12634112,
				"bwc" : 12607142,
				"roles" : {
					"middle" : 2,
					"guard" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.007285000000000001,
					"pbm" : 0.004104,
					"pbg" : 0.004078,
					"pbe" : 0.013671
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 2,
						"bwa" : 12634112,
						"bwc" : 12607142,
						"roles" : {
							"middle" : 2,
							"guard" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.007285000000000001,
							"pbm" : 0.004104,
							"pbg" : 0.004078,
							"pbe" : 0.013671
						}
					}
				]
			},
			{
				"as" : 79108,
				"relay" : 2,
				"bwa" : 430080,
				"bwc" : 143088,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"dir" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000036,
					"pbg" : 0.000056,
					"pbm" : 0.000022,
					"pbe" : 0.000029
				},
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 2,
						"bwa" : 430080,
						"bwc" : 143088,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"dir" : 1,
							"exit" : 1
						},
						"flags" : {
								"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000036,
							"pbg" : 0.000056,
							"pbm" : 0.000022,
							"pbe" : 0.000029
						}
					}
				]
			},
			{
				"as" : 86008,
				"relay" : 4,
				"bwa" : 627347,
				"bwc" : 324142,
				"roles" : {
					"middle" : 4,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"fast" : 3,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000096,
					"pbe" : 0.000245,
					"pbm" : 0.000041
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 4,
						"bwa" : 627347,
						"bwc" : 324142,
						"roles" : {
							"middle" : 4,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"fast" : 3,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000096,
							"pbe" : 0.000245,
							"pbm" : 0.000041
						}
					}
				]
			},
			{
				"as" : 112644,
				"relay" : 2,
				"bwa" : 8519680,
				"bwc" : 4722838,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.001001,
					"pbg" : 0.0017319999999999998,
					"pbm" : 0.0007740000000000001,
					"pbe" : 0.000497
				},
				"countries" : [
					{
						"cc" : "HU",
						"relay" : 2,
						"bwa" : 8519680,
						"bwc" : 4722838,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.001001,
							"pbg" : 0.0017319999999999998,
							"pbm" : 0.0007740000000000001,
							"pbe" : 0.000497
						}
					}
				]
			},
			{
				"as" : 43362,
				"relay" : 1,
				"bwa" : 232499,
				"bwc" : 6014,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 232499,
						"bwc" : 6014,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 12597,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 67427,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbm" : 0.000027
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 67427,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbm" : 0.000027
						}
					}
				]
			},
			{
				"as" : 792372,
				"relay" : 4,
				"bwa" : 41963520,
				"bwc" : 29178317,
				"roles" : {
					"guard" : 3,
					"middle" : 4,
					"exit" : 3,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 3,
					"stable" : 1,
					"authority" : 1
				},
				"probs" : {
					"pbr" : 0.007064000000000001,
					"pbg" : 0.003956,
					"pbm" : 0.003965,
					"pbe" : 0.013265
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 4,
						"bwa" : 41963520,
						"bwc" : 29178317,
						"roles" : {
							"guard" : 3,
							"middle" : 4,
							"exit" : 3,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 3,
							"stable" : 1,
							"authority" : 1
						},
						"probs" : {
							"pbr" : 0.007064000000000001,
							"pbg" : 0.003956,
							"pbm" : 0.003965,
							"pbe" : 0.013265
						}
					}
				]
			},
			{
				"as" : 126752,
				"relay" : 16,
				"bwa" : 2469331,
				"bwc" : 795867,
				"roles" : {
					"guard" : 4,
					"middle" : 16,
					"dir" : 8,
					"exit" : 4
				},
				"flags" : {
					"fastStable" : 7,
					"fast" : 6,
					"stable" : 3
				},
				"probs" : {
					"pbr" : 0.00021899999999999998,
					"pbg" : 0.000199,
					"pbm" : 0.00030000000000000003,
					"pbe" : 0.00016
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 16,
						"bwa" : 2469331,
						"bwc" : 795867,
						"roles" : {
							"guard" : 4,
							"middle" : 16,
							"dir" : 8,
							"exit" : 4
						},
						"flags" : {
							"fastStable" : 7,
							"fast" : 6,
							"stable" : 3
						},
						"probs" : {
							"pbr" : 0.00021899999999999998,
							"pbg" : 0.000199,
							"pbm" : 0.00030000000000000003,
							"pbe" : 0.00016
						}
					}
				]
			},
			{
				"as" : 42575,
				"relay" : 1,
				"bwa" : 98304,
				"bwc" : 31068,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000011,
					"pbm" : 0.000033
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 98304,
						"bwc" : 31068,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbm" : 0.000033
						}
					}
				]
			},
			{
				"as" : 189788,
				"relay" : 4,
				"bwa" : 17830300,
				"bwc" : 11572177,
				"roles" : {
					"guard" : 2,
					"middle" : 4,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.003261,
					"pbg" : 0.001925,
					"pbm" : 0.007858
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 17830300,
						"bwc" : 11572177,
						"roles" : {
							"guard" : 2,
							"middle" : 4,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.003261,
							"pbg" : 0.001925,
							"pbm" : 0.007858
						}
					}
				]
			},
			{
				"as" : 179700,
				"relay" : 4,
				"bwa" : 901120,
				"bwc" : 585242,
				"roles" : {
					"middle" : 4,
					"exit" : 3
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000098,
					"pbe" : 0.000271,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "IS",
						"relay" : 4,
						"bwa" : 901120,
						"bwc" : 585242,
						"roles" : {
							"middle" : 4,
							"exit" : 3
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000098,
							"pbe" : 0.000271,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 21107,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 5380,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "BA",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 5380,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 173400,
				"relay" : 4,
				"bwa" : 63885750,
				"bwc" : 50720456,
				"roles" : {
					"guard" : 3,
					"middle" : 4,
					"exit" : 4,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.020358,
					"pbg" : 0.011271,
					"pbm" : 0.011271,
					"pbe" : 0.038529
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 4,
						"bwa" : 63885750,
						"bwc" : 50720456,
						"roles" : {
							"guard" : 3,
							"middle" : 4,
							"exit" : 4,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.020358,
							"pbg" : 0.011271,
							"pbm" : 0.011271,
							"pbe" : 0.038529
						}
					}
				]
			},
			{
				"as" : 59036,
				"relay" : 2,
				"bwa" : 888832,
				"bwc" : 528154,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000109,
					"pbm" : 0.000327
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 2,
						"bwa" : 888832,
						"bwc" : 528154,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000109,
							"pbm" : 0.000327
						}
					}
				]
			},
			{
				"as" : 41532,
				"relay" : 2,
				"bwa" : 364544,
				"bwc" : 185520,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000023,
					"pbe" : 0.000024,
					"pbg" : 0.000031,
					"pbm" : 0.000012
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 2,
						"bwa" : 364544,
						"bwc" : 185520,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000023,
							"pbe" : 0.000024,
							"pbg" : 0.000031,
							"pbm" : 0.000012
						}
					}
				]
			},
			{
				"as" : 3356,
				"relay" : 1,
				"bwa" : 119622,
				"bwc" : 17722,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000019,
					"pbe" : 0.000058
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 119622,
						"bwc" : 17722,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000019,
							"pbe" : 0.000058
						}
					}
				]
			},
			{
				"as" : 61266,
				"relay" : 2,
				"bwa" : 3174400,
				"bwc" : 2208113,
				"roles" : {
					"middle" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00046899999999999996,
					"pbm" : 0.000024,
					"pbe" : 0.001384
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 3174400,
						"bwc" : 2208113,
						"roles" : {
							"middle" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00046899999999999996,
							"pbm" : 0.000024,
							"pbe" : 0.001384
						}
					}
				]
			},
			{
				"as" : 3570,
				"relay" : 2,
				"bwa" : 359493,
				"bwc" : 61857,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"stable" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000027,
					"pbm" : 0.00008
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 359493,
						"bwc" : 61857,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"stable" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000027,
							"pbm" : 0.00008
						}
					}
				]
			},
			{
				"as" : 59708,
				"relay" : 2,
				"bwa" : 34440246,
				"bwc" : 26380848,
				"roles" : {
					"middle" : 2,
					"guard" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.012185,
					"pbm" : 0.024727000000000002,
					"pbg" : 0.011831
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 34440246,
						"bwc" : 26380848,
						"roles" : {
							"middle" : 2,
							"guard" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.012185,
							"pbm" : 0.024727000000000002,
							"pbg" : 0.011831
						}
					}
				]
			},
			{
				"as" : 32220,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 401,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 401,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 6528,
				"relay" : 1,
				"bwa" : 153600,
				"bwc" : 75152,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbe" : 0.000027
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 153600,
						"bwc" : 75152,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbe" : 0.000027
						}
					}
				]
			},
			{
				"as" : 20962,
				"relay" : 2,
				"bwa" : 208896,
				"bwc" : 17803,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbe" : 0.000005
				},
				"countries" : [
					{
						"cc" : "AR",
						"relay" : 2,
						"bwa" : 208896,
						"bwc" : 17803,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbe" : 0.000005
						}
					}
				]
			},
			{
				"as" : 232584,
				"relay" : 8,
				"bwa" : 20736083,
				"bwc" : 15588682,
				"roles" : {
					"middle" : 8,
					"dir" : 2,
					"guard" : 2,
					"exit" : 7
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 2,
					"stable" : 4
				},
				"probs" : {
					"pbr" : 0.009172,
					"pbm" : 0.01469,
					"pbg" : 0.002757,
					"pbe" : 0.010069000000000002
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 8,
						"bwa" : 20736083,
						"bwc" : 15588682,
						"roles" : {
							"middle" : 8,
							"dir" : 2,
							"guard" : 2,
							"exit" : 7
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 2,
							"stable" : 4
						},
						"probs" : {
							"pbr" : 0.009172,
							"pbm" : 0.01469,
							"pbg" : 0.002757,
							"pbe" : 0.010069000000000002
						}
					}
				]
			},
			{
				"as" : 34198,
				"relay" : 2,
				"bwa" : 256000,
				"bwc" : 4941,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000028000000000000003,
					"pbm" : 0.000083
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 256000,
						"bwc" : 4941,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000028000000000000003,
							"pbm" : 0.000083
						}
					}
				]
			},
			{
				"as" : 128388,
				"relay" : 4,
				"bwa" : 8616960,
				"bwc" : 8277954,
				"roles" : {
					"guard" : 3,
					"middle" : 4,
					"dir" : 4,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.00177,
					"pbg" : 0.0031430000000000004,
					"pbm" : 0.001242,
					"pbe" : 0.000927
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 8616960,
						"bwc" : 8277954,
						"roles" : {
							"guard" : 3,
							"middle" : 4,
							"dir" : 4,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.00177,
							"pbg" : 0.0031430000000000004,
							"pbm" : 0.001242,
							"pbe" : 0.000927
						}
					}
				]
			},
			{
				"as" : 8681,
				"relay" : 1,
				"bwa" : 32000,
				"bwc" : 2554,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "JE",
						"relay" : 1,
						"bwa" : 32000,
						"bwc" : 2554,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 47544,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 249680,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000076,
					"pbg" : 0.000163,
					"pbm" : 0.000065
				},
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 249680,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000076,
							"pbg" : 0.000163,
							"pbm" : 0.000065
						}
					}
				]
			},
			{
				"as" : 44185,
				"relay" : 1,
				"bwa" : 256000,
				"bwc" : 236235,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00005,
					"pbm" : 0.000151
				},
				"countries" : [
					{
						"cc" : "SK",
						"relay" : 1,
						"bwa" : 256000,
						"bwc" : 236235,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00005,
							"pbm" : 0.000151
						}
					}
				]
			},
			{
				"as" : 41014,
				"relay" : 2,
				"bwa" : 1114112,
				"bwc" : 646634,
				"roles" : {
					"middle" : 2,
					"guard" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.00016,
					"pbm" : 0.00014800000000000002,
					"pbg" : 0.000334
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 1114112,
						"bwc" : 646634,
						"roles" : {
							"middle" : 2,
							"guard" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.00016,
							"pbm" : 0.00014800000000000002,
							"pbg" : 0.000334
						}
					}
				]
			},
			{
				"as" : 41011,
				"relay" : 1,
				"bwa" : 3617844,
				"bwc" : 1635238,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000972,
					"pbg" : 0.000545,
					"pbm" : 0.000544,
					"pbe" : 0.001826
				},
				"countries" : [
					{
						"cc" : "RO",
						"relay" : 1,
						"bwa" : 3617844,
						"bwc" : 1635238,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000972,
							"pbg" : 0.000545,
							"pbm" : 0.000544,
							"pbe" : 0.001826
						}
					}
				]
			},
			{
				"as" : 22848,
				"relay" : 8,
				"bwa" : 2035473,
				"bwc" : 559151,
				"roles" : {
					"middle" : 8,
					"dir" : 5,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 6,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000344,
					"pbm" : 0.000777,
					"pbe" : 0.000256
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 8,
						"bwa" : 2035473,
						"bwc" : 559151,
						"roles" : {
							"middle" : 8,
							"dir" : 5,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 6,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000344,
							"pbm" : 0.000777,
							"pbe" : 0.000256
						}
					}
				]
			},
			{
				"as" : 50964,
				"relay" : 4,
				"bwa" : 856064,
				"bwc" : 465134,
				"roles" : {
					"middle" : 4,
					"dir" : 4,
					"exit" : 2,
					"guard" : 1
				},
				"flags" : {
					"fast" : 2,
					"notFastStable" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000105,
					"pbm" : 0.000083,
					"pbe" : 0.000043,
					"pbg" : 0.00019
				},
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 4,
						"bwa" : 856064,
						"bwc" : 465134,
						"roles" : {
							"middle" : 4,
							"dir" : 4,
							"exit" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 2,
							"notFastStable" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000105,
							"pbm" : 0.000083,
							"pbe" : 0.000043,
							"pbg" : 0.00019
						}
					}
				]
			},
			{
				"as" : 71224,
				"relay" : 2,
				"bwa" : 40960,
				"bwc" : 695,
				"roles" : {
					"middle" : 2
				},
				"flags" : {
					"notFastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000018
				},
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 2,
						"bwa" : 40960,
						"bwc" : 695,
						"roles" : {
							"middle" : 2
						},
						"flags" : {
							"notFastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000018
						}
					}
				]
			},
			{
				"as" : 160008,
				"relay" : 8,
				"bwa" : 659459,
				"bwc" : 100943,
				"roles" : {
					"middle" : 8,
					"exit" : 3,
					"dir" : 4,
					"guard" : 1
				},
				"flags" : {
					"fast" : 4,
					"fastStable" : 2,
					"stable" : 1,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000039999999999999996,
					"pbe" : 0.000033,
					"pbm" : 0.000057,
					"pbg" : 0.000027
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 659459,
						"bwc" : 100943,
						"roles" : {
							"middle" : 8,
							"exit" : 3,
							"dir" : 4,
							"guard" : 1
						},
						"flags" : {
							"fast" : 4,
							"fastStable" : 2,
							"stable" : 1,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000039999999999999996,
							"pbe" : 0.000033,
							"pbm" : 0.000057,
							"pbg" : 0.000027
						}
					}
				]
			},
			{
				"as" : 19182,
				"relay" : 1,
				"bwa" : 30720,
				"bwc" : 4353,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 1,
						"bwa" : 30720,
						"bwc" : 4353,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 3330,
				"relay" : 1,
				"bwa" : 122880,
				"bwc" : 59494,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000016,
					"pbm" : 0.000047
				},
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 122880,
						"bwc" : 59494,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000016,
							"pbm" : 0.000047
						}
					}
				]
			},
			{
				"as" : 91408,
				"relay" : 8,
				"bwa" : 1001296,
				"bwc" : 130873,
				"roles" : {
					"middle" : 8,
					"exit" : 1,
					"dir" : 6,
					"guard" : 1
				},
				"flags" : {
					"fast" : 4,
					"stable" : 1,
					"fastStable" : 2,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000043,
					"pbe" : 0.000012,
					"pbm" : 0.000086,
					"pbg" : 0.000032
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 1001296,
						"bwc" : 130873,
						"roles" : {
							"middle" : 8,
							"exit" : 1,
							"dir" : 6,
							"guard" : 1
						},
						"flags" : {
							"fast" : 4,
							"stable" : 1,
							"fastStable" : 2,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000043,
							"pbe" : 0.000012,
							"pbm" : 0.000086,
							"pbg" : 0.000032
						}
					}
				]
			},
			{
				"as" : 6486,
				"relay" : 2,
				"bwa" : 614400,
				"bwc" : 329857,
				"roles" : {
					"middle" : 2,
					"exit" : 2,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.00008400000000000001,
					"pbe" : 0.00022500000000000002,
					"pbg" : 0.000013,
					"pbm" : 0.000013
				},
				"countries" : [
					{
						"cc" : "PT",
						"relay" : 2,
						"bwa" : 614400,
						"bwc" : 329857,
						"roles" : {
							"middle" : 2,
							"exit" : 2,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.00008400000000000001,
							"pbe" : 0.00022500000000000002,
							"pbg" : 0.000013,
							"pbm" : 0.000013
						}
					}
				]
			},
			{
				"as" : 70830,
				"relay" : 2,
				"bwa" : 3072000,
				"bwc" : 2698077,
				"roles" : {
					"guard" : 2,
					"middle" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000701,
					"pbg" : 0.001507,
					"pbm" : 0.000596
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 3072000,
						"bwc" : 2698077,
						"roles" : {
							"guard" : 2,
							"middle" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000701,
							"pbg" : 0.001507,
							"pbm" : 0.000596
						}
					}
				]
			},
			{
				"as" : 789152,
				"relay" : 4,
				"bwa" : 501010,
				"bwc" : 84859,
				"roles" : {
					"middle" : 4,
					"dir" : 3,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000038,
					"pbm" : 0.000066,
					"pbg" : 0.00005
				},
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 4,
						"bwa" : 501010,
						"bwc" : 84859,
						"roles" : {
							"middle" : 4,
							"dir" : 3,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.000038,
							"pbm" : 0.000066,
							"pbg" : 0.00005
						}
					}
				]
			},
			{
				"as" : 67376,
				"relay" : 8,
				"bwa" : 1224848,
				"bwc" : 257040,
				"roles" : {
					"middle" : 8,
					"dir" : 3
				},
				"flags" : {
					"fast" : 5,
					"stable" : 2,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00008300000000000001,
					"pbm" : 0.000245
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 1224848,
						"bwc" : 257040,
						"roles" : {
							"middle" : 8,
							"dir" : 3
						},
						"flags" : {
							"fast" : 5,
							"stable" : 2,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00008300000000000001,
							"pbm" : 0.000245
						}
					}
				]
			},
			{
				"as" : 43988,
				"relay" : 1,
				"bwa" : 524288,
				"bwc" : 39780,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000272,
					"pbe" : 0.000816
				},
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 1,
						"bwa" : 524288,
						"bwc" : 39780,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000272,
							"pbe" : 0.000816
						}
					}
				]
			},
			{
				"as" : 4844,
				"relay" : 1,
				"bwa" : 160311,
				"bwc" : 5198,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "SG",
						"relay" : 1,
						"bwa" : 160311,
						"bwc" : 5198,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 190768,
				"relay" : 4,
				"bwa" : 17660424,
				"bwc" : 13208161,
				"roles" : {
					"middle" : 4,
					"exit" : 3,
					"dir" : 4,
					"guard" : 3
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.005954,
					"pbe" : 0.010148,
					"pbg" : 0.004386,
					"pbm" : 0.003325
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 8321544,
						"bwc" : 4508669,
						"roles" : {
							"middle" : 2,
							"exit" : 2,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.001826,
							"pbe" : 0.0039239999999999995,
							"pbg" : 0.000777,
							"pbm" : 0.000777
						}
					},
					{
						"cc" : "AT",
						"relay" : 2,
						"bwa" : 9338880,
						"bwc" : 8699492,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.004128,
							"pbg" : 0.0036090000000000002,
							"pbm" : 0.002548,
							"pbe" : 0.006224
						}
					}
				]
			},
			{
				"as" : 6661,
				"relay" : 1,
				"bwa" : 200506,
				"bwc" : 10962,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000017
				},
				"countries" : [
					{
						"cc" : "LU",
						"relay" : 1,
						"bwa" : 200506,
						"bwc" : 10962,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000017
						}
					}
				]
			},
			{
				"as" : 34180,
				"relay" : 2,
				"bwa" : 9201996,
				"bwc" : 8147081,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.003638,
					"pbg" : 0.007824000000000001,
					"pbm" : 0.00309
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 9201996,
						"bwc" : 8147081,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.003638,
							"pbg" : 0.007824000000000001,
							"pbm" : 0.00309
						}
					}
				]
			},
			{
				"as" : 32668,
				"relay" : 4,
				"bwa" : 211963,
				"bwc" : 30800,
				"roles" : {
					"middle" : 4,
					"exit" : 2,
					"dir" : 4
				},
				"flags" : {
					"notFastStable" : 1,
					"fast" : 3
				},
				"probs" : {
					"pbr" : 0.000007,
					"pbe" : 0.000017,
					"pbm" : 0.000002
				},
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 4,
						"bwa" : 211963,
						"bwc" : 30800,
						"roles" : {
							"middle" : 4,
							"exit" : 2,
							"dir" : 4
						},
						"flags" : {
							"notFastStable" : 1,
							"fast" : 3
						},
						"probs" : {
							"pbr" : 0.000007,
							"pbe" : 0.000017,
							"pbm" : 0.000002
						}
					}
				]
			},
			{
				"as" : 39389,
				"relay" : 1,
				"bwa" : 640000,
				"bwc" : 634104,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000488,
					"pbg" : 0.000274,
					"pbm" : 0.000273,
					"pbe" : 0.000917
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 640000,
						"bwc" : 634104,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000488,
							"pbg" : 0.000274,
							"pbm" : 0.000273,
							"pbe" : 0.000917
						}
					}
				]
			},
			{
				"as" : 14670,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 75997,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000013,
					"pbe" : 0.00004
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 75997,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000013,
							"pbe" : 0.00004
						}
					}
				]
			},
			{
				"as" : 46,
				"relay" : 1,
				"bwa" : 3145728,
				"bwc" : 0,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000776,
					"pbg" : 0.000435,
					"pbm" : 0.000435,
					"pbe" : 0.001459
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 3145728,
						"bwc" : 0,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000776,
							"pbg" : 0.000435,
							"pbm" : 0.000435,
							"pbe" : 0.001459
						}
					}
				]
			},
			{
				"as" : 61387,
				"relay" : 1,
				"bwa" : 40960,
				"bwc" : 60767,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000007,
					"pbe" : 0.000022
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 40960,
						"bwc" : 60767,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000007,
							"pbe" : 0.000022
						}
					}
				]
			},
			{
				"as" : 29028,
				"relay" : 1,
				"bwa" : 82225,
				"bwc" : 35728,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000018,
					"pbm" : 0.000055
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 82225,
						"bwc" : 35728,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000018,
							"pbm" : 0.000055
						}
					}
				]
			},
			{
				"as" : 282928,
				"relay" : 8,
				"bwa" : 8611768,
				"bwc" : 5819564,
				"roles" : {
					"guard" : 5,
					"middle" : 8,
					"exit" : 3,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 5,
					"fast" : 3
				},
				"probs" : {
					"pbr" : 0.001277,
					"pbg" : 0.0011929999999999998,
					"pbm" : 0.002221,
					"pbe" : 0.00041999999999999996
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 8611768,
						"bwc" : 5819564,
						"roles" : {
							"guard" : 5,
							"middle" : 8,
							"exit" : 3,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 5,
							"fast" : 3
						},
						"probs" : {
							"pbr" : 0.001277,
							"pbg" : 0.0011929999999999998,
							"pbm" : 0.002221,
							"pbe" : 0.00041999999999999996
						}
					}
				]
			},
			{
				"as" : 26408,
				"relay" : 8,
				"bwa" : 2967469,
				"bwc" : 1113904,
				"roles" : {
					"middle" : 8,
					"exit" : 2,
					"dir" : 5,
					"guard" : 2
				},
				"flags" : {
					"fastStable" : 5,
					"notFastStable" : 1,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.00028900000000000003,
					"pbe" : 0.000057,
					"pbg" : 0.000487,
					"pbm" : 0.000322
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 8,
						"bwa" : 2967469,
						"bwc" : 1113904,
						"roles" : {
							"middle" : 8,
							"exit" : 2,
							"dir" : 5,
							"guard" : 2
						},
						"flags" : {
							"fastStable" : 5,
							"notFastStable" : 1,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.00028900000000000003,
							"pbe" : 0.000057,
							"pbg" : 0.000487,
							"pbm" : 0.000322
						}
					}
				]
			},
			{
				"as" : 32400,
				"relay" : 4,
				"bwa" : 118678901,
				"bwc" : 73219781,
				"roles" : {
					"guard" : 1,
					"middle" : 4,
					"dir" : 3,
					"exit" : 3
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.015811,
					"pbg" : 0.001154,
					"pbm" : 0.000456,
					"pbe" : 0.045825000000000005
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 118678901,
						"bwc" : 73219781,
						"roles" : {
							"guard" : 1,
							"middle" : 4,
							"dir" : 3,
							"exit" : 3
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.015811,
							"pbg" : 0.001154,
							"pbm" : 0.000456,
							"pbe" : 0.045825000000000005
						}
					}
				]
			},
			{
				"as" : 35382,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 93490,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00001,
					"pbg" : 0.000022,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 93490,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00001,
							"pbg" : 0.000022,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 18712,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 61904,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 61904,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 45051,
				"relay" : 1,
				"bwa" : 1039664,
				"bwc" : 398537,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000138,
					"pbg" : 0.000077,
					"pbm" : 0.000077,
					"pbe" : 0.000259
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1039664,
						"bwc" : 398537,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000138,
							"pbg" : 0.000077,
							"pbm" : 0.000077,
							"pbe" : 0.000259
						}
					}
				]
			},
			{
				"as" : 6851,
				"relay" : 1,
				"bwa" : 1221515,
				"bwc" : 341336,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000152,
					"pbg" : 0.000328,
					"pbm" : 0.000129
				},
				"countries" : [
					{
						"cc" : "LV",
						"relay" : 1,
						"bwa" : 1221515,
						"bwc" : 341336,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000152,
							"pbg" : 0.000328,
							"pbm" : 0.000129
						}
					}
				]
			},
			{
				"as" : 25748,
				"relay" : 2,
				"bwa" : 83036,
				"bwc" : 10959,
				"roles" : {
					"middle" : 2,
					"exit" : 1
				},
				"flags" : {
					"notFastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.0000049999999999999996,
					"pbm" : 0.000009,
					"pbe" : 0.000006
				},
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 2,
						"bwa" : 83036,
						"bwc" : 10959,
						"roles" : {
							"middle" : 2,
							"exit" : 1
						},
						"flags" : {
							"notFastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.0000049999999999999996,
							"pbm" : 0.000009,
							"pbe" : 0.000006
						}
					}
				]
			},
			{
				"as" : 13647,
				"relay" : 1,
				"bwa" : 40960,
				"bwc" : 7937,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbe" : 0.000026
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 40960,
						"bwc" : 7937,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbe" : 0.000026
						}
					}
				]
			},
			{
				"as" : 51032,
				"relay" : 1,
				"bwa" : 1115136,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000117,
					"pbm" : 0.00035
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1115136,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000117,
							"pbm" : 0.00035
						}
					}
				]
			},
			{
				"as" : 202692,
				"relay" : 4,
				"bwa" : 7836253,
				"bwc" : 6113683,
				"roles" : {
					"middle" : 4,
					"guard" : 2,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.001645,
					"pbm" : 0.004272,
					"pbg" : 0.000515,
					"pbe" : 0.000148
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 4,
						"bwa" : 7836253,
						"bwc" : 6113683,
						"roles" : {
							"middle" : 4,
							"guard" : 2,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.001645,
							"pbm" : 0.004272,
							"pbg" : 0.000515,
							"pbe" : 0.000148
						}
					}
				]
			},
			{
				"as" : 79216,
				"relay" : 2,
				"bwa" : 2592664,
				"bwc" : 1936957,
				"roles" : {
					"middle" : 2,
					"guard" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.0008349999999999999,
					"pbm" : 0.000485,
					"pbg" : 0.000464,
					"pbe" : 0.001556
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 2,
						"bwa" : 2592664,
						"bwc" : 1936957,
						"roles" : {
							"middle" : 2,
							"guard" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.0008349999999999999,
							"pbm" : 0.000485,
							"pbg" : 0.000464,
							"pbe" : 0.001556
						}
					}
				]
			},
			{
				"as" : 83428,
				"relay" : 4,
				"bwa" : 3276800,
				"bwc" : 330332,
				"roles" : {
					"middle" : 4,
					"exit" : 2
				},
				"flags" : {
					"fast" : 3,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000606,
					"pbe" : 0.000436,
					"pbm" : 0.001383
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 4,
						"bwa" : 3276800,
						"bwc" : 330332,
						"roles" : {
							"middle" : 4,
							"exit" : 2
						},
						"flags" : {
							"fast" : 3,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000606,
							"pbe" : 0.000436,
							"pbm" : 0.001383
						}
					}
				]
			},
			{
				"as" : 43716,
				"relay" : 4,
				"bwa" : 5974540,
				"bwc" : 2284850,
				"roles" : {
					"guard" : 2,
					"middle" : 4,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000574,
					"pbg" : 0.000331,
					"pbm" : 0.001391
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 4,
						"bwa" : 5974540,
						"bwc" : 2284850,
						"roles" : {
							"guard" : 2,
							"middle" : 4,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000574,
							"pbg" : 0.000331,
							"pbm" : 0.001391
						}
					}
				]
			},
			{
				"as" : 109712,
				"relay" : 2,
				"bwa" : 167936,
				"bwc" : 47517,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000018,
					"pbm" : 0.000053
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 167936,
						"bwc" : 47517,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000018,
							"pbm" : 0.000053
						}
					}
				]
			},
			{
				"as" : 109280,
				"relay" : 16,
				"bwa" : 2954750,
				"bwc" : 1588388,
				"roles" : {
					"middle" : 16,
					"dir" : 11,
					"exit" : 1,
					"guard" : 2
				},
				"flags" : {
					"fastStable" : 12,
					"fast" : 3,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000504,
					"pbm" : 0.00107,
					"pbe" : 0.000009,
					"pbg" : 0.00043000000000000004
				},
				"countries" : [
					{
						"cc" : "HU",
						"relay" : 2,
						"bwa" : 819200,
						"bwc" : 577954,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00015800000000000002,
							"pbm" : 0.000473
						}
					},
					{
						"cc" : "AT",
						"relay" : 4,
						"bwa" : 321536,
						"bwc" : 100351,
						"roles" : {
							"middle" : 4,
							"dir" : 3,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000034,
							"pbm" : 0.000092,
							"pbe" : 0.000009
						}
					},
					{
						"cc" : "CH",
						"relay" : 3,
						"bwa" : 634880,
						"bwc" : 278784,
						"roles" : {
							"middle" : 3,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.000109,
							"pbm" : 0.000189,
							"pbg" : 0.000137
						}
					},
					{
						"cc" : "CZ",
						"relay" : 2,
						"bwa" : 182272,
						"bwc" : 107312,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000019999999999999998,
							"pbm" : 0.00006
						}
					},
					{
						"cc" : "SK",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 34139,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbm" : 0.000032
						}
					},
					{
						"cc" : "PL",
						"relay" : 3,
						"bwa" : 352256,
						"bwc" : 172315,
						"roles" : {
							"middle" : 3,
							"dir" : 1
						},
						"flags" : {
							"stable" : 1,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000036,
							"pbm" : 0.000108
						}
					},
					{
						"cc" : "RO",
						"relay" : 1,
						"bwa" : 542206,
						"bwc" : 317533,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000136,
							"pbg" : 0.000293,
							"pbm" : 0.000116
						}
					}
				]
			},
			{
				"as" : 18316,
				"relay" : 2,
				"bwa" : 131072,
				"bwc" : 2463,
				"roles" : {
					"middle" : 2,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000008000000000000001,
					"pbm" : 0.00001,
					"pbe" : 0.000016
				},
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 2,
						"bwa" : 131072,
						"bwc" : 2463,
						"roles" : {
							"middle" : 2,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000008000000000000001,
							"pbm" : 0.00001,
							"pbe" : 0.000016
						}
					}
				]
			},
			{
				"as" : 50618,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 40504,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000011,
					"pbm" : 0.000033
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 40504,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbm" : 0.000033
						}
					}
				]
			},
			{
				"as" : 11204,
				"relay" : 2,
				"bwa" : 1955423,
				"bwc" : 1044045,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000084,
					"pbg" : 0.000131,
					"pbm" : 0.00011999999999999999
				},
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 2,
						"bwa" : 1955423,
						"bwc" : 1044045,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000084,
							"pbg" : 0.000131,
							"pbm" : 0.00011999999999999999
						}
					}
				]
			},
			{
				"as" : 2116,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 8236,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000007,
					"pbm" : 0.000022
				},
				"countries" : [
					{
						"cc" : "NO",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 8236,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000007,
							"pbm" : 0.000022
						}
					}
				]
			},
			{
				"as" : 11220,
				"relay" : 2,
				"bwa" : 572636,
				"bwc" : 333210,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00014199999999999998,
					"pbe" : 0.000006,
					"pbg" : 0.000301,
					"pbm" : 0.000119
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 2,
						"bwa" : 572636,
						"bwc" : 333210,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00014199999999999998,
							"pbe" : 0.000006,
							"pbg" : 0.000301,
							"pbm" : 0.000119
						}
					}
				]
			},
			{
				"as" : 4994,
				"relay" : 2,
				"bwa" : 167936,
				"bwc" : 24088,
				"roles" : {
					"middle" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000008000000000000001,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 2,
						"bwa" : 167936,
						"bwc" : 24088,
						"roles" : {
							"middle" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000008000000000000001,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 80950,
				"relay" : 2,
				"bwa" : 34174,
				"bwc" : 628,
				"roles" : {
					"middle" : 2
				},
				"flags" : {
					"stable" : 2
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.00001
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 30720,
						"bwc" : 471,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					},
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 3454,
						"bwc" : 157,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbm" : 0.000001
						}
					}
				]
			},
			{
				"as" : 29084,
				"relay" : 1,
				"bwa" : 451731,
				"bwc" : 115278,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000033,
					"pbm" : 0.000099
				},
				"countries" : [
					{
						"cc" : "BG",
						"relay" : 1,
						"bwa" : 451731,
						"bwc" : 115278,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000033,
							"pbm" : 0.000099
						}
					}
				]
			},
			{
				"as" : 67570,
				"relay" : 2,
				"bwa" : 312320,
				"bwc" : 77429,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000024,
					"pbm" : 0.000071
				},
				"countries" : [
					{
						"cc" : "EG",
						"relay" : 2,
						"bwa" : 312320,
						"bwc" : 77429,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000024,
							"pbm" : 0.000071
						}
					}
				]
			},
			{
				"as" : 34358,
				"relay" : 1,
				"bwa" : 1504458,
				"bwc" : 892750,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000359,
					"pbg" : 0.000201,
					"pbm" : 0.000201,
					"pbe" : 0.000675
				},
				"countries" : [
					{
						"cc" : "RO",
						"relay" : 1,
						"bwa" : 1504458,
						"bwc" : 892750,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000359,
							"pbg" : 0.000201,
							"pbm" : 0.000201,
							"pbe" : 0.000675
						}
					}
				]
			},
			{
				"as" : 30764,
				"relay" : 1,
				"bwa" : 131072,
				"bwc" : 84012,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000024,
					"pbm" : 0.000071
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 131072,
						"bwc" : 84012,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000024,
							"pbm" : 0.000071
						}
					}
				]
			},
			{
				"as" : 28745,
				"relay" : 1,
				"bwa" : 1090212,
				"bwc" : 506839,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000114,
					"pbm" : 0.000341
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1090212,
						"bwc" : 506839,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000114,
							"pbm" : 0.000341
						}
					}
				]
			},
			{
				"as" : 48133,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 27750,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000007,
					"pbm" : 0.00002
				},
				"countries" : [
					{
						"cc" : "SK",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 27750,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000007,
							"pbm" : 0.00002
						}
					}
				]
			},
			{
				"as" : 156552,
				"relay" : 4,
				"bwa" : 109715327,
				"bwc" : 74040133,
				"roles" : {
					"guard" : 4,
					"middle" : 4,
					"exit" : 4,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.037339,
					"pbg" : 0.020927,
					"pbm" : 0.020926,
					"pbe" : 0.070159
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 109715327,
						"bwc" : 74040133,
						"roles" : {
							"guard" : 4,
							"middle" : 4,
							"exit" : 4,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.037339,
							"pbg" : 0.020927,
							"pbm" : 0.020926,
							"pbe" : 0.070159
						}
					}
				]
			},
			{
				"as" : 14987,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 395516,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"authority" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbg" : 0.000006,
					"pbm" : 0.000003
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 395516,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"authority" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbg" : 0.000006,
							"pbm" : 0.000003
						}
					}
				]
			},
			{
				"as" : 49855,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 80029,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000013,
					"pbg" : 0.000007,
					"pbm" : 0.000007,
					"pbe" : 0.000024
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 80029,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000013,
							"pbg" : 0.000007,
							"pbm" : 0.000007,
							"pbe" : 0.000024
						}
					}
				]
			},
			{
				"as" : 130992,
				"relay" : 4,
				"bwa" : 1577789,
				"bwc" : 1139832,
				"roles" : {
					"middle" : 4,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000361,
					"pbm" : 0.0010860000000000002
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 1577789,
						"bwc" : 1139832,
						"roles" : {
							"middle" : 4,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000361,
							"pbm" : 0.0010860000000000002
						}
					}
				]
			},
			{
				"as" : 208804,
				"relay" : 4,
				"bwa" : 2486272,
				"bwc" : 990265,
				"roles" : {
					"middle" : 4,
					"exit" : 3,
					"guard" : 2,
					"dir" : 3
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000313,
					"pbe" : 0.000584,
					"pbg" : 0.000162,
					"pbm" : 0.00019300000000000003
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 4,
						"bwa" : 2486272,
						"bwc" : 990265,
						"roles" : {
							"middle" : 4,
							"exit" : 3,
							"guard" : 2,
							"dir" : 3
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.000313,
							"pbe" : 0.000584,
							"pbg" : 0.000162,
							"pbm" : 0.00019300000000000003
						}
					}
				]
			},
			{
				"as" : 9532,
				"relay" : 2,
				"bwa" : 559420,
				"bwc" : 86329,
				"roles" : {
					"middle" : 2,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000029,
					"pbm" : 0.000032,
					"pbg" : 0.000057
				},
				"countries" : [
					{
						"cc" : "KR",
						"relay" : 2,
						"bwa" : 559420,
						"bwc" : 86329,
						"roles" : {
							"middle" : 2,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000029,
							"pbm" : 0.000032,
							"pbg" : 0.000057
						}
					}
				]
			},
			{
				"as" : 99540,
				"relay" : 2,
				"bwa" : 1354413,
				"bwc" : 672035,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000152,
					"pbg" : 0.00032700000000000003,
					"pbm" : 0.000129
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 2,
						"bwa" : 1354413,
						"bwc" : 672035,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000152,
							"pbg" : 0.00032700000000000003,
							"pbm" : 0.000129
						}
					}
				]
			},
			{
				"as" : 43326,
				"relay" : 1,
				"bwa" : 2097152,
				"bwc" : 2022082,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00135,
					"pbg" : 0.002904,
					"pbm" : 0.001147
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 2097152,
						"bwc" : 2022082,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00135,
							"pbg" : 0.002904,
							"pbm" : 0.001147
						}
					}
				]
			},
			{
				"as" : 17547,
				"relay" : 1,
				"bwa" : 587195,
				"bwc" : 188775,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000071,
					"pbg" : 0.00004,
					"pbm" : 0.00004,
					"pbe" : 0.000133
				},
				"countries" : [
					{
						"cc" : "SG",
						"relay" : 1,
						"bwa" : 587195,
						"bwc" : 188775,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000071,
							"pbg" : 0.00004,
							"pbm" : 0.00004,
							"pbe" : 0.000133
						}
					}
				]
			},
			{
				"as" : 35911,
				"relay" : 1,
				"bwa" : 65536,
				"bwc" : 443,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 65536,
						"bwc" : 443,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 82704,
				"relay" : 4,
				"bwa" : 383054,
				"bwc" : 108430,
				"roles" : {
					"middle" : 4,
					"dir" : 4,
					"exit" : 1
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000028,
					"pbm" : 0.000061,
					"pbe" : 0.000022
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 383054,
						"bwc" : 108430,
						"roles" : {
							"middle" : 4,
							"dir" : 4,
							"exit" : 1
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000028,
							"pbm" : 0.000061,
							"pbe" : 0.000022
						}
					}
				]
			},
			{
				"as" : 8881,
				"relay" : 1,
				"bwa" : 71680,
				"bwc" : 17346,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.00001
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 71680,
						"bwc" : 17346,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.00001
						}
					}
				]
			},
			{
				"as" : 6714,
				"relay" : 1,
				"bwa" : 34901,
				"bwc" : 2660,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 34901,
						"bwc" : 2660,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 75116,
				"relay" : 4,
				"bwa" : 10968743,
				"bwc" : 6169900,
				"roles" : {
					"guard" : 2,
					"middle" : 4,
					"exit" : 3,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.0029939999999999997,
					"pbg" : 0.000647,
					"pbm" : 0.002586,
					"pbe" : 0.00575
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 10968743,
						"bwc" : 6169900,
						"roles" : {
							"guard" : 2,
							"middle" : 4,
							"exit" : 3,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.0029939999999999997,
							"pbg" : 0.000647,
							"pbm" : 0.002586,
							"pbe" : 0.00575
						}
					}
				]
			},
			{
				"as" : 20723,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 458,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 458,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 174164,
				"relay" : 4,
				"bwa" : 1765376,
				"bwc" : 1496027,
				"roles" : {
					"guard" : 4,
					"middle" : 4,
					"exit" : 2,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000496,
					"pbg" : 0.00051,
					"pbm" : 0.00031899999999999995,
					"pbe" : 0.000655
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 4,
						"bwa" : 1765376,
						"bwc" : 1496027,
						"roles" : {
							"guard" : 4,
							"middle" : 4,
							"exit" : 2,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.000496,
							"pbg" : 0.00051,
							"pbm" : 0.00031899999999999995,
							"pbe" : 0.000655
						}
					}
				]
			},
			{
				"as" : 15435,
				"relay" : 1,
				"bwa" : 196608,
				"bwc" : 175094,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000386,
					"pbm" : 0.001158
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 196608,
						"bwc" : 175094,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000386,
							"pbm" : 0.001158
						}
					}
				]
			},
			{
				"as" : 15626,
				"relay" : 1,
				"bwa" : 470392,
				"bwc" : 61323,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbe" : 0.000025
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 470392,
						"bwc" : 61323,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbe" : 0.000025
						}
					}
				]
			},
			{
				"as" : 28625,
				"relay" : 1,
				"bwa" : 98377,
				"bwc" : 26310,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbe" : 0.000006
				},
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 1,
						"bwa" : 98377,
						"bwc" : 26310,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbe" : 0.000006
						}
					}
				]
			},
			{
				"as" : 25156,
				"relay" : 2,
				"bwa" : 140235,
				"bwc" : 57816,
				"roles" : {
					"middle" : 2,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"stable" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000011,
					"pbe" : 0.000032
				},
				"countries" : [
					{
						"cc" : "LV",
						"relay" : 2,
						"bwa" : 140235,
						"bwc" : 57816,
						"roles" : {
							"middle" : 2,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"stable" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbe" : 0.000032
						}
					}
				]
			},
			{
				"as" : 46925,
				"relay" : 1,
				"bwa" : 32768,
				"bwc" : 128,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 32768,
						"bwc" : 128,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 11878,
				"relay" : 1,
				"bwa" : 947563,
				"bwc" : 412629,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.0001,
					"pbm" : 0.000299
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 947563,
						"bwc" : 412629,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.0001,
							"pbm" : 0.000299
						}
					}
				]
			},
			{
				"as" : 399040,
				"relay" : 16,
				"bwa" : 40188537,
				"bwc" : 31709563,
				"roles" : {
					"guard" : 13,
					"middle" : 16,
					"dir" : 8
				},
				"flags" : {
					"fastStable" : 13,
					"fast" : 2,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.011255999999999999,
					"pbg" : 0.008922,
					"pbm" : 0.024851000000000005
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 16,
						"bwa" : 40188537,
						"bwc" : 31709563,
						"roles" : {
							"guard" : 13,
							"middle" : 16,
							"dir" : 8
						},
						"flags" : {
							"fastStable" : 13,
							"fast" : 2,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.011255999999999999,
							"pbg" : 0.008922,
							"pbm" : 0.024851000000000005
						}
					}
				]
			},
			{
				"as" : 12860,
				"relay" : 4,
				"bwa" : 4527903,
				"bwc" : 4114721,
				"roles" : {
					"middle" : 4,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 1,
					"notFastStable" : 1,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.0015639999999999999,
					"pbm" : 0.004695
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 4,
						"bwa" : 4527903,
						"bwc" : 4114721,
						"roles" : {
							"middle" : 4,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 1,
							"notFastStable" : 1,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.0015639999999999999,
							"pbm" : 0.004695
						}
					}
				]
			},
			{
				"as" : 14380,
				"relay" : 4,
				"bwa" : 527360,
				"bwc" : 191751,
				"roles" : {
					"middle" : 4,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000058,
					"pbm" : 0.000176
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 527360,
						"bwc" : 191751,
						"roles" : {
							"middle" : 4,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.000058,
							"pbm" : 0.000176
						}
					}
				]
			},
			{
				"as" : 64950,
				"relay" : 2,
				"bwa" : 215040,
				"bwc" : 115777,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000034,
					"pbm" : 0.00010400000000000001
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 215040,
						"bwc" : 115777,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000034,
							"pbm" : 0.00010400000000000001
						}
					}
				]
			},
			{
				"as" : 53140,
				"relay" : 4,
				"bwa" : 324557,
				"bwc" : 40295,
				"roles" : {
					"middle" : 4,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"notFastStable" : 1,
					"fast" : 2,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000018,
					"pbm" : 0.00004,
					"pbe" : 0.000015
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 4,
						"bwa" : 324557,
						"bwc" : 40295,
						"roles" : {
							"middle" : 4,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"notFastStable" : 1,
							"fast" : 2,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000018,
							"pbm" : 0.00004,
							"pbe" : 0.000015
						}
					}
				]
			},
			{
				"as" : 13786,
				"relay" : 2,
				"bwa" : 5447680,
				"bwc" : 5178039,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"exit" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.001947,
					"pbg" : 0.001069,
					"pbm" : 0.001069,
					"pbe" : 0.0037
				},
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 2,
						"bwa" : 5447680,
						"bwc" : 5178039,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"exit" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.001947,
							"pbg" : 0.001069,
							"pbm" : 0.001069,
							"pbe" : 0.0037
						}
					}
				]
			},
			{
				"as" : 102334,
				"relay" : 2,
				"bwa" : 3181216,
				"bwc" : 802564,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000787,
					"pbg" : 0.001692,
					"pbm" : 0.000668
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 3181216,
						"bwc" : 802564,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000787,
							"pbg" : 0.001692,
							"pbm" : 0.000668
						}
					}
				]
			},
			{
				"as" : 45595,
				"relay" : 1,
				"bwa" : 35261,
				"bwc" : 3124,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "PK",
						"relay" : 1,
						"bwa" : 35261,
						"bwc" : 3124,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 13076,
				"relay" : 4,
				"bwa" : 112849,
				"bwc" : 4600,
				"roles" : {
					"middle" : 4
				},
				"flags" : {
					"notFastStable" : 2,
					"stable" : 2
				},
				"probs" : {
					"pbr" : 0.000009999999999999999,
					"pbm" : 0.00003
				},
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 4,
						"bwa" : 112849,
						"bwc" : 4600,
						"roles" : {
							"middle" : 4
						},
						"flags" : {
							"notFastStable" : 2,
							"stable" : 2
						},
						"probs" : {
							"pbr" : 0.000009999999999999999,
							"pbm" : 0.00003
						}
					}
				]
			},
			{
				"as" : 55045,
				"relay" : 1,
				"bwa" : 437925,
				"bwc" : 99312,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000033,
					"pbm" : 0.0001
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 437925,
						"bwc" : 99312,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000033,
							"pbm" : 0.0001
						}
					}
				]
			},
			{
				"as" : 7444,
				"relay" : 2,
				"bwa" : 532121,
				"bwc" : 84165,
				"roles" : {
					"middle" : 2
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000051000000000000006,
					"pbm" : 0.000153
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 532121,
						"bwc" : 84165,
						"roles" : {
							"middle" : 2
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000051000000000000006,
							"pbm" : 0.000153
						}
					}
				]
			},
			{
				"as" : 89914,
				"relay" : 2,
				"bwa" : 71680,
				"bwc" : 11017,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbe" : 0.000005,
					"pbm" : 0.000004
				},
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 2,
						"bwa" : 71680,
						"bwc" : 11017,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbe" : 0.000005,
							"pbm" : 0.000004
						}
					}
				]
			},
			{
				"as" : 14901,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 18049,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbe" : 0.000028
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 18049,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbe" : 0.000028
						}
					}
				]
			},
			{
				"as" : 42695,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 22754,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 22754,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 790160,
				"relay" : 4,
				"bwa" : 1474263,
				"bwc" : 1136201,
				"roles" : {
					"middle" : 4,
					"dir" : 2,
					"guard" : 2
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000265,
					"pbm" : 0.000281,
					"pbg" : 0.0005110000000000001
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 1474263,
						"bwc" : 1136201,
						"roles" : {
							"middle" : 4,
							"dir" : 2,
							"guard" : 2
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.000265,
							"pbm" : 0.000281,
							"pbg" : 0.0005110000000000001
						}
					}
				]
			},
			{
				"as" : 93328,
				"relay" : 2,
				"bwa" : 1626956,
				"bwc" : 1568838,
				"roles" : {
					"middle" : 2,
					"guard" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000282,
					"pbm" : 0.00024599999999999996,
					"pbg" : 0.000601
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 1626956,
						"bwc" : 1568838,
						"roles" : {
							"middle" : 2,
							"guard" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000282,
							"pbm" : 0.00024599999999999996,
							"pbg" : 0.000601
						}
					}
				]
			},
			{
				"as" : 48926,
				"relay" : 1,
				"bwa" : 2526193,
				"bwc" : 1741862,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000871,
					"pbe" : 0.002613
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 2526193,
						"bwc" : 1741862,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000871,
							"pbe" : 0.002613
						}
					}
				]
			},
			{
				"as" : 31100,
				"relay" : 1,
				"bwa" : 262144,
				"bwc" : 30359,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000024,
					"pbg" : 0.000052,
					"pbm" : 0.00002
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 262144,
						"bwc" : 30359,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000024,
							"pbg" : 0.000052,
							"pbm" : 0.00002
						}
					}
				]
			},
			{
				"as" : 9044,
				"relay" : 1,
				"bwa" : 81920,
				"bwc" : 8381,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000007,
					"pbe" : 0.00002
				},
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 1,
						"bwa" : 81920,
						"bwc" : 8381,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000007,
							"pbe" : 0.00002
						}
					}
				]
			},
			{
				"as" : 4385,
				"relay" : 1,
				"bwa" : 208896,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
					"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000007,
					"pbm" : 0.00002
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 208896,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000007,
							"pbm" : 0.00002
						}
					}
				]
			},
			{
				"as" : 31012,
				"relay" : 1,
				"bwa" : 65536,
				"bwc" : 4629,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.00001
				},
				"countries" : [
					{
						"cc" : "HR",
						"relay" : 1,
						"bwa" : 65536,
						"bwc" : 4629,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.00001
						}
					}
				]
			},
			{
				"as" : 43948,
				"relay" : 1,
				"bwa" : 10273,
				"bwc" : 389,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000004
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 10273,
						"bwc" : 389,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000004
						}
					}
				]
			},
			{
				"as" : 104096,
				"relay" : 2,
				"bwa" : 793600,
				"bwc" : 1826338,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000519,
					"pbm" : 0.001557
				},
				"countries" : [
					{
						"cc" : "LV",
						"relay" : 2,
						"bwa" : 793600,
						"bwc" : 1826338,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000519,
							"pbm" : 0.001557
						}
					}
				]
			},
			{
				"as" : 16668,
				"relay" : 2,
				"bwa" : 6651904,
				"bwc" : 6065589,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.001576,
					"pbm" : 0.004725999999999999
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 6651904,
						"bwc" : 6065589,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.001576,
							"pbm" : 0.004725999999999999
						}
					}
				]
			},
			{
				"as" : 85662,
				"relay" : 2,
				"bwa" : 977920,
				"bwc" : 778132,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.00021,
					"pbg" : 0.000452,
					"pbm" : 0.00017900000000000001
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 2,
						"bwa" : 977920,
						"bwc" : 778132,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.00021,
							"pbg" : 0.000452,
							"pbm" : 0.00017900000000000001
						}
					}
				]
			},
			{
				"as" : 27992,
				"relay" : 1,
				"bwa" : 121354,
				"bwc" : 28269,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbe" : 0.000013
				},
				"countries" : [
					{
						"cc" : "CO",
						"relay" : 1,
						"bwa" : 121354,
						"bwc" : 28269,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbe" : 0.000013
						}
					}
				]
			},
			{
				"as" : 44066,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 33550,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000122,
					"pbm" : 0.000365
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 33550,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000122,
							"pbm" : 0.000365
						}
					}
				]
			},
			{
				"as" : 16125,
				"relay" : 1,
				"bwa" : 3717370,
				"bwc" : 1134981,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000509,
					"pbg" : 0.000285,
					"pbm" : 0.000285,
					"pbe" : 0.000956
				},
				"countries" : [
					{
						"cc" : "LT",
						"relay" : 1,
						"bwa" : 3717370,
						"bwc" : 1134981,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000509,
							"pbg" : 0.000285,
							"pbm" : 0.000285,
							"pbe" : 0.000956
						}
					}
				]
			},
			{
				"as" : 71252,
				"relay" : 4,
				"bwa" : 245968,
				"bwc" : 15612,
				"roles" : {
					"middle" : 4,
					"exit" : 4,
					"dir" : 3
				},
				"flags" : {
					"fast" : 3,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000012,
					"pbe" : 0.000035
				},
				"countries" : [
					{
						"cc" : "IN",
						"relay" : 4,
						"bwa" : 245968,
						"bwc" : 15612,
						"roles" : {
							"middle" : 4,
							"exit" : 4,
							"dir" : 3
						},
						"flags" : {
							"fast" : 3,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000012,
							"pbe" : 0.000035
						}
					}
				]
			},
			{
				"as" : 121064,
				"relay" : 4,
				"bwa" : 8932881,
				"bwc" : 7053580,
				"roles" : {
					"middle" : 4,
					"guard" : 3,
					"dir" : 3
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.0021390000000000003,
					"pbm" : 0.0018349999999999998,
					"pbg" : 0.004582
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 8932881,
						"bwc" : 7053580,
						"roles" : {
							"middle" : 4,
							"guard" : 3,
							"dir" : 3
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.0021390000000000003,
							"pbm" : 0.0018349999999999998,
							"pbg" : 0.004582
						}
					}
				]
			},
			{
				"as" : 10913,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 688121,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000461,
					"pbg" : 0.000992,
					"pbm" : 0.000392
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 688121,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000461,
							"pbg" : 0.000992,
							"pbm" : 0.000392
						}
					}
				]
			},
			{
				"as" : 35376,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 2053476,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000645,
					"pbm" : 0.001934
				},
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 2053476,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000645,
							"pbm" : 0.001934
						}
					}
				]
			},
			{
				"as" : 2044,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 88672,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000007,
					"pbe" : 0.000021
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 88672,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000007,
							"pbe" : 0.000021
						}
					}
				]
			},
			{
				"as" : 26248,
				"relay" : 2,
				"bwa" : 139264,
				"bwc" : 12651,
				"roles" : {
					"middle" : 2,
					"dir" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.0000049999999999999996,
					"pbm" : 0.000009,
					"pbe" : 0.000007
				},
				"countries" : [
					{
						"cc" : "BG",
						"relay" : 2,
						"bwa" : 139264,
						"bwc" : 12651,
						"roles" : {
							"middle" : 2,
							"dir" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.0000049999999999999996,
							"pbm" : 0.000009,
							"pbe" : 0.000007
						}
					}
				]
			},
			{
				"as" : 32372,
				"relay" : 2,
				"bwa" : 2705023,
				"bwc" : 1434134,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000286,
					"pbg" : 0.000595,
					"pbm" : 0.000235,
					"pbe" : 0.000026
				},
				"countries" : [
					{
						"cc" : "NO",
						"relay" : 2,
						"bwa" : 2705023,
						"bwc" : 1434134,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000286,
							"pbg" : 0.000595,
							"pbm" : 0.000235,
							"pbe" : 0.000026
						}
					}
				]
			},
			{
				"as" : 49981,
				"relay" : 1,
				"bwa" : 4334820,
				"bwc" : 4010461,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.001387,
					"pbm" : 0.004161
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 4334820,
						"bwc" : 4010461,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.001387,
							"pbm" : 0.004161
						}
					}
				]
			},
			{
				"as" : 24466,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 2808,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000006
				},
				"countries" : [
					{
						"cc" : "NZ",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 2808,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000006
						}
					}
				]
			},
			{
				"as" : 7860,
				"relay" : 1,
				"bwa" : 65816,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 65816,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 37762,
				"relay" : 2,
				"bwa" : 97283,
				"bwc" : 23515,
				"roles" : {
					"middle" : 2,
					"exit" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbe" : 0.000019
				},
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 2,
						"bwa" : 97283,
						"bwc" : 23515,
						"roles" : {
							"middle" : 2,
							"exit" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbe" : 0.000019
						}
					}
				]
			},
			{
				"as" : 52852,
				"relay" : 4,
				"bwa" : 54366948,
				"bwc" : 43742679,
				"roles" : {
					"guard" : 4,
					"middle" : 4,
					"exit" : 3,
					"dir" : 3
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.037937000000000005,
					"pbg" : 0.022292,
					"pbm" : 0.021448000000000002,
					"pbe" : 0.07006400000000002
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 4,
						"bwa" : 54366948,
						"bwc" : 43742679,
						"roles" : {
							"guard" : 4,
							"middle" : 4,
							"exit" : 3,
							"dir" : 3
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.037937000000000005,
							"pbg" : 0.022292,
							"pbm" : 0.021448000000000002,
							"pbe" : 0.07006400000000002
						}
					}
				]
			},
			{
				"as" : 371800,
				"relay" : 8,
				"bwa" : 2634001,
				"bwc" : 1334455,
				"roles" : {
					"middle" : 8,
					"dir" : 6,
					"guard" : 4,
					"exit" : 4
				},
				"flags" : {
					"fastStable" : 8
				},
				"probs" : {
					"pbr" : 0.0006219999999999999,
					"pbm" : 0.00045700000000000005,
					"pbg" : 0.000924,
					"pbe" : 0.000482
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 2634001,
						"bwc" : 1334455,
						"roles" : {
							"middle" : 8,
							"dir" : 6,
							"guard" : 4,
							"exit" : 4
						},
						"flags" : {
							"fastStable" : 8
						},
						"probs" : {
							"pbr" : 0.0006219999999999999,
							"pbm" : 0.00045700000000000005,
							"pbg" : 0.000924,
							"pbe" : 0.000482
						}
					}
				]
			},
			{
				"as" : 41966,
				"relay" : 1,
				"bwa" : 402007,
				"bwc" : 301313,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00009,
					"pbm" : 0.00027
				},
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 402007,
						"bwc" : 301313,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00009,
							"pbm" : 0.00027
						}
					}
				]
			},
			{
				"as" : 60166,
				"relay" : 2,
				"bwa" : 716800,
				"bwc" : 528149,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.00013000000000000002,
					"pbg" : 0.000281,
					"pbm" : 0.00011
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 716800,
						"bwc" : 528149,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.00013000000000000002,
							"pbg" : 0.000281,
							"pbm" : 0.00011
						}
					}
				]
			},
			{
				"as" : 63772,
				"relay" : 4,
				"bwa" : 2767167,
				"bwc" : 917976,
				"roles" : {
					"middle" : 4,
					"dir" : 3
				},
				"flags" : {
					"fast" : 3,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000337,
					"pbm" : 0.001011
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 2767167,
						"bwc" : 917976,
						"roles" : {
							"middle" : 4,
							"dir" : 3
						},
						"flags" : {
							"fast" : 3,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000337,
							"pbm" : 0.001011
						}
					}
				]
			},
			{
				"as" : 21069,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 49893,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbm" : 0.000028
				},
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 49893,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbm" : 0.000028
						}
					}
				]
			},
			{
				"as" : 31019,
				"relay" : 1,
				"bwa" : 741008,
				"bwc" : 302263,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000105,
					"pbm" : 0.000316
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 741008,
						"bwc" : 302263,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000105,
							"pbm" : 0.000316
						}
					}
				]
			},
			{
				"as" : 20128,
				"relay" : 8,
				"bwa" : 4165114,
				"bwc" : 2326639,
				"roles" : {
					"guard" : 2,
					"middle" : 8,
					"dir" : 3,
					"exit" : 2
				},
				"flags" : {
					"fastStable" : 6,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.00044800000000000005,
					"pbg" : 0.000117,
					"pbm" : 0.00023899999999999998,
					"pbe" : 0.000986
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 6,
						"bwa" : 3929594,
						"bwc" : 2251115,
						"roles" : {
							"guard" : 2,
							"middle" : 6,
							"dir" : 3,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 4,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000422,
							"pbg" : 0.000117,
							"pbm" : 0.000216,
							"pbe" : 0.000932
						}
					},
					{
						"cc" : "CN",
						"relay" : 2,
						"bwa" : 235520,
						"bwc" : 75524,
						"roles" : {
							"middle" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000026000000000000002,
							"pbe" : 0.000054,
							"pbm" : 0.000023
						}
					}
				]
			},
			{
				"as" : 24900,
				"relay" : 1,
				"bwa" : 716800,
				"bwc" : 711980,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000305,
					"pbg" : 0.000655,
					"pbm" : 0.000259
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 716800,
						"bwc" : 711980,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000305,
							"pbg" : 0.000655,
							"pbm" : 0.000259
						}
					}
				]
			},
			{
				"as" : 21127,
				"relay" : 1,
				"bwa" : 131072,
				"bwc" : 24579,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbe" : 0.000023
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 131072,
						"bwc" : 24579,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbe" : 0.000023
						}
					}
				]
			},
			{
				"as" : 36492,
				"relay" : 1,
				"bwa" : 1280000,
				"bwc" : 675151,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000277,
					"pbg" : 0.000595,
					"pbm" : 0.000235
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1280000,
						"bwc" : 675151,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000277,
							"pbg" : 0.000595,
							"pbm" : 0.000235
						}
					}
				]
			},
			{
				"as" : 120144,
				"relay" : 4,
				"bwa" : 481276,
				"bwc" : 120721,
				"roles" : {
					"middle" : 4,
					"dir" : 4,
					"guard" : 1
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000047000000000000004,
					"pbm" : 0.0001,
					"pbg" : 0.000043
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 481276,
						"bwc" : 120721,
						"roles" : {
							"middle" : 4,
							"dir" : 4,
							"guard" : 1
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000047000000000000004,
							"pbm" : 0.0001,
							"pbg" : 0.000043
						}
					}
				]
			},
			{
				"as" : 66880,
				"relay" : 2,
				"bwa" : 600487,
				"bwc" : 68077,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000044,
					"pbe" : 0.000053,
					"pbm" : 0.000078
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 600487,
						"bwc" : 68077,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000044,
							"pbe" : 0.000053,
							"pbm" : 0.000078
						}
					}
				]
			},
			{
				"as" : 393428,
				"relay" : 2,
				"bwa" : 375808,
				"bwc" : 303173,
				"roles" : {
					"middle" : 2,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000052000000000000004,
					"pbm" : 0.000085,
					"pbg" : 0.000071
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 375808,
						"bwc" : 303173,
						"roles" : {
							"middle" : 2,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000052000000000000004,
							"pbm" : 0.000085,
							"pbg" : 0.000071
						}
					}
				]
			},
			{
				"as" : 35238,
				"relay" : 1,
				"bwa" : 100352,
				"bwc" : 2425,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbe" : 0.000017
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 100352,
						"bwc" : 2425,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbe" : 0.000017
						}
					}
				]
			},
			{
				"as" : 1532,
				"relay" : 2,
				"bwa" : 71680,
				"bwc" : 1703,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000006
				},
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 2,
						"bwa" : 71680,
						"bwc" : 1703,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000006
						}
					}
				]
			},
			{
				"as" : 53120,
				"relay" : 16,
				"bwa" : 1696561,
				"bwc" : 642900,
				"roles" : {
					"middle" : 16,
					"dir" : 9,
					"exit" : 1
				},
				"flags" : {
					"notFastStable" : 4,
					"fast" : 10,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.00018800000000000002,
					"pbm" : 0.000545,
					"pbe" : 0.00002
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 16,
						"bwa" : 1696561,
						"bwc" : 642900,
						"roles" : {
							"middle" : 16,
							"dir" : 9,
							"exit" : 1
						},
						"flags" : {
							"notFastStable" : 4,
							"fast" : 10,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.00018800000000000002,
							"pbm" : 0.000545,
							"pbe" : 0.00002
						}
					}
				]
			},
			{
				"as" : 46193,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 11675,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000007,
					"pbm" : 0.00002
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 11675,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000007,
							"pbm" : 0.00002
						}
					}
				]
			},
			{
				"as" : 197071,
				"relay" : 1,
				"bwa" : 158720,
				"bwc" : 22605,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000015,
					"pbm" : 0.000044
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 158720,
						"bwc" : 22605,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000015,
							"pbm" : 0.000044
						}
					}
				]
			},
			{
				"as" : 34832,
				"relay" : 4,
				"bwa" : 770286,
				"bwc" : 154123,
				"roles" : {
					"middle" : 4,
					"dir" : 3,
					"exit" : 2
				},
				"flags" : {
					"fast" : 3,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000059,
					"pbm" : 0.000015,
					"pbe" : 0.000162
				},
				"countries" : [
					{
						"cc" : "RO",
						"relay" : 4,
						"bwa" : 770286,
						"bwc" : 154123,
						"roles" : {
							"middle" : 4,
							"dir" : 3,
							"exit" : 2
						},
						"flags" : {
							"fast" : 3,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000059,
							"pbm" : 0.000015,
							"pbe" : 0.000162
						}
					}
				]
			},
			{
				"as" : 33970,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 108,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 108,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 35655,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 98675,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000399,
					"pbe" : 0.001198
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 98675,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000399,
							"pbe" : 0.001198
						}
					}
				]
			},
			{
				"as" : 388,
				"relay" : 2,
				"bwa" : 14155776,
				"bwc" : 14676330,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"exit" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.005619000000000001,
					"pbg" : 0.00315,
					"pbm" : 0.00315,
					"pbe" : 0.010558999999999999
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 14155776,
						"bwc" : 14676330,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"exit" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.005619000000000001,
							"pbg" : 0.00315,
							"pbm" : 0.00315,
							"pbe" : 0.010558999999999999
						}
					}
				]
			},
			{
				"as" : 25152,
				"relay" : 2,
				"bwa" : 85194,
				"bwc" : 58946,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.00002
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 2,
						"bwa" : 85194,
						"bwc" : 58946,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.00002
						}
					}
				]
			},
			{
				"as" : 6452,
				"relay" : 2,
				"bwa" : 223232,
				"bwc" : 38161,
				"roles" : {
					"middle" : 2,
					"dir" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000012,
					"pbm" : 0.000028,
					"pbe" : 0.00001
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 223232,
						"bwc" : 38161,
						"roles" : {
							"middle" : 2,
							"dir" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000012,
							"pbm" : 0.000028,
							"pbe" : 0.00001
						}
					}
				]
			},
			{
				"as" : 58553,
				"relay" : 1,
				"bwa" : 283993,
				"bwc" : 15075,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbe" : 0.000024
				},
				"countries" : [
					{
						"cc" : "ID",
						"relay" : 1,
						"bwa" : 283993,
						"bwc" : 15075,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbe" : 0.000024
						}
					}
				]
			},
			{
				"as" : 5563,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 12585,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 12585,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 12626,
				"relay" : 1,
				"bwa" : 97094,
				"bwc" : 6639,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000019
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 97094,
						"bwc" : 6639,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000019
						}
					}
				]
			},
			{
				"as" : 45404,
				"relay" : 4,
				"bwa" : 1137368,
				"bwc" : 207473,
				"roles" : {
					"guard" : 1,
					"middle" : 4,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 2,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000149,
					"pbg" : 0.00026,
					"pbm" : 0.00018899999999999999
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 1137368,
						"bwc" : 207473,
						"roles" : {
							"guard" : 1,
							"middle" : 4,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 2,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000149,
							"pbg" : 0.00026,
							"pbm" : 0.00018899999999999999
						}
					}
				]
			},
			{
				"as" : 45152,
				"relay" : 3,
				"bwa" : 2604361,
				"bwc" : 1218425,
				"roles" : {
					"middle" : 3,
					"dir" : 3,
					"guard" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00041799999999999997,
					"pbm" : 0.000898,
					"pbg" : 0.000082,
					"pbe" : 0.000275
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 3,
						"bwa" : 2604361,
						"bwc" : 1218425,
						"roles" : {
							"middle" : 3,
							"dir" : 3,
							"guard" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00041799999999999997,
							"pbm" : 0.000898,
							"pbg" : 0.000082,
							"pbe" : 0.000275
						}
					}
				]
			},
			{
				"as" : 82880,
				"relay" : 2,
				"bwa" : 402432,
				"bwc" : 16175,
				"roles" : {
					"middle" : 2,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000017,
					"pbm" : 0.000029,
					"pbe" : 0.00002
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 402432,
						"bwc" : 16175,
						"roles" : {
							"middle" : 2,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000017,
							"pbm" : 0.000029,
							"pbe" : 0.00002
						}
					}
				]
			},
			{
				"as" : 125332,
				"relay" : 4,
				"bwa" : 1244160,
				"bwc" : 601652,
				"roles" : {
					"middle" : 4,
					"guard" : 1,
					"dir" : 1
				},
				"flags" : {
					"stable" : 1,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.00017999999999999998,
					"pbm" : 0.00044899999999999996,
					"pbg" : 0.000092
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 1244160,
						"bwc" : 601652,
						"roles" : {
							"middle" : 4,
							"guard" : 1,
							"dir" : 1
						},
						"flags" : {
							"stable" : 1,
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.00017999999999999998,
							"pbm" : 0.00044899999999999996,
							"pbg" : 0.000092
						}
					}
				]
			},
			{
				"as" : 20473,
				"relay" : 1,
				"bwa" : 10780902,
				"bwc" : 8013013,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.003283,
					"pbg" : 0.00706,
					"pbm" : 0.002789
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 10780902,
						"bwc" : 8013013,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.003283,
							"pbg" : 0.00706,
							"pbm" : 0.002789
						}
					}
				]
			},
			{
				"as" : 33604,
				"relay" : 1,
				"bwa" : 2237560,
				"bwc" : 1600835,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000454,
					"pbg" : 0.000254,
					"pbm" : 0.000254,
					"pbe" : 0.000853
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 2237560,
						"bwc" : 1600835,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000454,
							"pbg" : 0.000254,
							"pbm" : 0.000254,
							"pbe" : 0.000853
						}
					}
				]
			},
			{
				"as" : 53785,
				"relay" : 1,
				"bwa" : 524288,
				"bwc" : 320947,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000191,
					"pbg" : 0.00041,
					"pbm" : 0.000162
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 524288,
						"bwc" : 320947,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000191,
							"pbg" : 0.00041,
							"pbm" : 0.000162
						}
					}
				]
			},
			{
				"as" : 18881,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 31590,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000007,
					"pbe" : 0.000022
				},
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 31590,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000007,
							"pbe" : 0.000022
						}
					}
				]
			},
			{
				"as" : 281824,
				"relay" : 8,
				"bwa" : 657123,
				"bwc" : 208827,
				"roles" : {
					"middle" : 8,
					"dir" : 7
				},
				"flags" : {
					"fast" : 4,
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000034,
					"pbm" : 0.00010200000000000001
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 8,
						"bwa" : 657123,
						"bwc" : 208827,
						"roles" : {
							"middle" : 8,
							"dir" : 7
						},
						"flags" : {
							"fast" : 4,
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.000034,
							"pbm" : 0.00010200000000000001
						}
					}
				]
			},
			{
				"as" : 23205,
				"relay" : 1,
				"bwa" : 329874,
				"bwc" : 104143,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000026,
					"pbm" : 0.000077
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 329874,
						"bwc" : 104143,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000026,
							"pbm" : 0.000077
						}
					}
				]
			},
			{
				"as" : 12630,
				"relay" : 2,
				"bwa" : 6258310,
				"bwc" : 3549265,
				"roles" : {
					"middle" : 2,
					"dir" : 2,
					"guard" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.0020570000000000002,
					"pbm" : 0.0012289999999999998,
					"pbg" : 0.001135,
					"pbe" : 0.003807
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 6258310,
						"bwc" : 3549265,
						"roles" : {
							"middle" : 2,
							"dir" : 2,
							"guard" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.0020570000000000002,
							"pbm" : 0.0012289999999999998,
							"pbg" : 0.001135,
							"pbe" : 0.003807
						}
					}
				]
			},
			{
				"as" : 29072,
				"relay" : 2,
				"bwa" : 8788128,
				"bwc" : 2659724,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.001979,
					"pbg" : 0.00181,
					"pbm" : 0.0012360000000000001,
					"pbe" : 0.00289
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 8788128,
						"bwc" : 2659724,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.001979,
							"pbg" : 0.00181,
							"pbm" : 0.0012360000000000001,
							"pbe" : 0.00289
						}
					}
				]
			},
			{
				"as" : 8362,
				"relay" : 2,
				"bwa" : 91136,
				"bwc" : 17602,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000007,
					"pbm" : 0.000019999999999999998
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 91136,
						"bwc" : 17602,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000007,
							"pbm" : 0.000019999999999999998
						}
					}
				]
			},
			{
				"as" : 1239,
				"relay" : 1,
				"bwa" : 798516,
				"bwc" : 235818,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000037,
					"pbg" : 0.00008,
					"pbm" : 0.000032
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 798516,
						"bwc" : 235818,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000037,
							"pbg" : 0.00008,
							"pbm" : 0.000032
						}
					}
				]
			},
			{
				"as" : 126752,
				"relay" : 16,
				"bwa" : 2616774,
				"bwc" : 654110,
				"roles" : {
					"middle" : 16,
					"dir" : 14,
					"guard" : 2,
					"exit" : 2
				},
				"flags" : {
					"fastStable" : 9,
					"fast" : 7
				},
				"probs" : {
					"pbr" : 0.00027100000000000003,
					"pbm" : 0.00037799999999999997,
					"pbg" : 0.000116,
					"pbe" : 0.000321
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 16,
						"bwa" : 2616774,
						"bwc" : 654110,
						"roles" : {
							"middle" : 16,
							"dir" : 14,
							"guard" : 2,
							"exit" : 2
						},
						"flags" : {
							"fastStable" : 9,
							"fast" : 7
						},
						"probs" : {
							"pbr" : 0.00027100000000000003,
							"pbm" : 0.00037799999999999997,
							"pbg" : 0.000116,
							"pbe" : 0.000321
						}
					}
				]
			},
			{
				"as" : 130120,
				"relay" : 8,
				"bwa" : 12427345,
				"bwc" : 10199388,
				"roles" : {
					"guard" : 4,
					"middle" : 8,
					"dir" : 4,
					"exit" : 3
				},
				"flags" : {
					"fastStable" : 6,
					"stable" : 2
				},
				"probs" : {
					"pbr" : 0.002772,
					"pbg" : 0.003156,
					"pbm" : 0.0049960000000000004,
					"pbe" : 0.000162
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 8,
						"bwa" : 12427345,
						"bwc" : 10199388,
						"roles" : {
							"guard" : 4,
							"middle" : 8,
							"dir" : 4,
							"exit" : 3
						},
						"flags" : {
							"fastStable" : 6,
							"stable" : 2
						},
						"probs" : {
							"pbr" : 0.002772,
							"pbg" : 0.003156,
							"pbm" : 0.0049960000000000004,
							"pbe" : 0.000162
						}
					}
				]
			},
			{
				"as" : 13304,
				"relay" : 1,
				"bwa" : 3333120,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000917,
					"pbm" : 0.002751
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 3333120,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000917,
							"pbm" : 0.002751
						}
					}
				]
			},
			{
				"as" : 62084,
				"relay" : 2,
				"bwa" : 237816,
				"bwc" : 50791,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000012,
					"pbm" : 0.000036
				},
				"countries" : [
					{
						"cc" : "RS",
						"relay" : 2,
						"bwa" : 237816,
						"bwc" : 50791,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000012,
							"pbm" : 0.000036
						}
					}
				]
			},
			{
				"as" : 25577,
				"relay" : 1,
				"bwa" : 5242880,
				"bwc" : 4883340,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.001804,
					"pbg" : 0.00388,
					"pbm" : 0.001533
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 5242880,
						"bwc" : 4883340,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001804,
							"pbg" : 0.00388,
							"pbm" : 0.001533
						}
					}
				]
			},
			{
				"as" : 34315,
				"relay" : 1,
				"bwa" : 431009,
				"bwc" : 103775,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000119,
					"pbg" : 0.000067,
					"pbm" : 0.000067,
					"pbe" : 0.000223
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 431009,
						"bwc" : 103775,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000119,
							"pbg" : 0.000067,
							"pbm" : 0.000067,
							"pbe" : 0.000223
						}
					}
				]
			},
			{
				"as" : 31555,
				"relay" : 1,
				"bwa" : 256000,
				"bwc" : 255066,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000014,
					"pbg" : 0.00003,
					"pbm" : 0.000012
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 256000,
						"bwc" : 255066,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000014,
							"pbg" : 0.00003,
							"pbm" : 0.000012
						}
					}
				]
			},
			{
				"as" : 5390,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 24607,
				"relay" : 1,
				"bwa" : 6291456,
				"bwc" : 5704686,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.002913,
					"pbg" : 0.006265,
					"pbm" : 0.002475
				},
				"countries" : [
					{
						"cc" : "LT",
						"relay" : 1,
						"bwa" : 6291456,
						"bwc" : 5704686,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.002913,
							"pbg" : 0.006265,
							"pbm" : 0.002475
						}
					}
				]
			},
			{
				"as" : 18956,
				"relay" : 4,
				"bwa" : 291840,
				"bwc" : 12379,
				"roles" : {
					"middle" : 4,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2,
					"stable" : 2
				},
				"probs" : {
					"pbr" : 0.000013000000000000001,
					"pbm" : 0.000029999999999999997,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 4,
						"bwa" : 291840,
						"bwc" : 12379,
						"roles" : {
							"middle" : 4,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2,
							"stable" : 2
						},
						"probs" : {
							"pbr" : 0.000013000000000000001,
							"pbm" : 0.000029999999999999997,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 13212,
				"relay" : 4,
				"bwa" : 680133,
				"bwc" : 336218,
				"roles" : {
					"middle" : 4,
					"exit" : 2,
					"guard" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.000026,
					"pbe" : 0.000032,
					"pbg" : 0.000014,
					"pbm" : 0.00003
				},
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 4,
						"bwa" : 680133,
						"bwc" : 336218,
						"roles" : {
							"middle" : 4,
							"exit" : 2,
							"guard" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.000026,
							"pbe" : 0.000032,
							"pbg" : 0.000014,
							"pbm" : 0.00003
						}
					}
				]
			},
			{
				"as" : 94132,
				"relay" : 2,
				"bwa" : 456424,
				"bwc" : 9943,
				"roles" : {
					"middle" : 2
				},
				"flags" : {
					"stable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000007000000000000001,
					"pbm" : 0.000019
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 456424,
						"bwc" : 9943,
						"roles" : {
							"middle" : 2
						},
						"flags" : {
							"stable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000007000000000000001,
							"pbm" : 0.000019
						}
					}
				]
			},
			{
				"as" : 86578,
				"relay" : 2,
				"bwa" : 3831694,
				"bwc" : 2712418,
				"roles" : {
					"middle" : 2,
					"exit" : 2,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000794,
					"pbe" : 0.002127,
					"pbg" : 0.000128,
					"pbm" : 0.000128
				},
				"countries" : [
					{
						"cc" : "MD",
						"relay" : 2,
						"bwa" : 3831694,
						"bwc" : 2712418,
						"roles" : {
							"middle" : 2,
							"exit" : 2,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000794,
							"pbe" : 0.002127,
							"pbg" : 0.000128,
							"pbm" : 0.000128
						}
					}
				]
			},
			{
				"as" : 130452,
				"relay" : 4,
				"bwa" : 2176000,
				"bwc" : 1883873,
				"roles" : {
					"middle" : 4,
					"dir" : 2,
					"exit" : 1,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000372,
					"pbm" : 0.00035000000000000005,
					"pbe" : 0.000042,
					"pbg" : 0.000725
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 4,
						"bwa" : 2176000,
						"bwc" : 1883873,
						"roles" : {
							"middle" : 4,
							"dir" : 2,
							"exit" : 1,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.000372,
							"pbm" : 0.00035000000000000005,
							"pbe" : 0.000042,
							"pbg" : 0.000725
						}
					}
				]
			},
			{
				"as" : 21728,
				"relay" : 4,
				"bwa" : 999613,
				"bwc" : 439853,
				"roles" : {
					"middle" : 4,
					"dir" : 2
				},
				"flags" : {
					"fast" : 4
				},
				"probs" : {
					"pbr" : 0.000125,
					"pbm" : 0.00037500000000000006
				},
				"countries" : [
					{
						"cc" : "BE",
						"relay" : 4,
						"bwa" : 999613,
						"bwc" : 439853,
						"roles" : {
							"middle" : 4,
							"dir" : 2
						},
						"flags" : {
							"fast" : 4
						},
						"probs" : {
							"pbr" : 0.000125,
							"pbm" : 0.00037500000000000006
						}
					}
				]
			},
			{
				"as" : 34232,
				"relay" : 1,
				"bwa" : 3174400,
				"bwc" : 2395022,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000701,
					"pbm" : 0.002103
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 3174400,
						"bwc" : 2395022,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000701,
							"pbm" : 0.002103
						}
					}
				]
			},
			{
				"as" : 20712,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 15999,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000004
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 15999,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000004
						}
					}
				]
			},
			{
				"as" : 7036,
				"relay" : 4,
				"bwa" : 599040,
				"bwc" : 447180,
				"roles" : {
					"guard" : 1,
					"middle" : 4,
					"exit" : 2,
					"dir" : 3
				},
				"flags" : {
					"fastStable" : 2,
					"stable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00009400000000000001,
					"pbg" : 0.000023,
					"pbm" : 0.000044,
					"pbe" : 0.000216
				},
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 4,
						"bwa" : 599040,
						"bwc" : 447180,
						"roles" : {
							"guard" : 1,
							"middle" : 4,
							"exit" : 2,
							"dir" : 3
						},
						"flags" : {
							"fastStable" : 2,
							"stable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00009400000000000001,
							"pbg" : 0.000023,
							"pbm" : 0.000044,
							"pbe" : 0.000216
						}
					}
				]
			},
			{
				"as" : 196705,
				"relay" : 1,
				"bwa" : 262144,
				"bwc" : 250720,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00006,
					"pbm" : 0.000179
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 262144,
						"bwc" : 250720,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00006,
							"pbm" : 0.000179
						}
					}
				]
			},
			{
				"as" : 399040,
				"relay" : 16,
				"bwa" : 25894434,
				"bwc" : 20695743,
				"roles" : {
					"guard" : 12,
					"middle" : 16,
					"dir" : 11,
					"exit" : 3
				},
				"flags" : {
					"fastStable" : 13,
					"stable" : 2,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.006752,
					"pbg" : 0.011346,
					"pbm" : 0.004846,
					"pbe" : 0.0040680000000000004
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 16,
						"bwa" : 25894434,
						"bwc" : 20695743,
						"roles" : {
							"guard" : 12,
							"middle" : 16,
							"dir" : 11,
							"exit" : 3
						},
						"flags" : {
							"fastStable" : 13,
							"stable" : 2,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.006752,
							"pbg" : 0.011346,
							"pbm" : 0.004846,
							"pbe" : 0.0040680000000000004
						}
					}
				]
			},
			{
				"as" : 124312,
				"relay" : 4,
				"bwa" : 523286,
				"bwc" : 28312,
				"roles" : {
					"middle" : 4,
					"exit" : 4,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbe" : 0.000006
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 523286,
						"bwc" : 28312,
						"roles" : {
							"middle" : 4,
							"exit" : 4,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbe" : 0.000006
						}
					}
				]
			},
			{
				"as" : 39725,
				"relay" : 1,
				"bwa" : 65536,
				"bwc" : 8792,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbe" : 0.000004
				},
				"countries" : [
					{
						"cc" : "KZ",
						"relay" : 1,
						"bwa" : 65536,
						"bwc" : 8792,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbe" : 0.000004
						}
					}
				]
			},
			{
				"as" : 50856,
				"relay" : 4,
				"bwa" : 13406776,
				"bwc" : 5969711,
				"roles" : {
					"middle" : 4,
					"dir" : 4,
					"exit" : 2
				},
				"flags" : {
					"fast" : 4
				},
				"probs" : {
					"pbr" : 0.002734,
					"pbm" : 0.002766,
					"pbe" : 0.005435
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 4,
						"bwa" : 13406776,
						"bwc" : 5969711,
						"roles" : {
							"middle" : 4,
							"dir" : 4,
							"exit" : 2
						},
						"flags" : {
							"fast" : 4
						},
						"probs" : {
							"pbr" : 0.002734,
							"pbm" : 0.002766,
							"pbe" : 0.005435
						}
					}
				]
			},
			{
				"as" : 170440,
				"relay" : 4,
				"bwa" : 1446468,
				"bwc" : 628688,
				"roles" : {
					"middle" : 4,
					"guard" : 2,
					"exit" : 1,
					"dir" : 3
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000185,
					"pbm" : 0.000428,
					"pbg" : 0.000089,
					"pbe" : 0.000038
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 4,
						"bwa" : 1446468,
						"bwc" : 628688,
						"roles" : {
							"middle" : 4,
							"guard" : 2,
							"exit" : 1,
							"dir" : 3
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000185,
							"pbm" : 0.000428,
							"pbg" : 0.000089,
							"pbe" : 0.000038
						}
					}
				]
			},
			{
				"as" : 34764,
				"relay" : 1,
				"bwa" : 2097152,
				"bwc" : 994689,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000111,
					"pbg" : 0.000239,
					"pbm" : 0.000094
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 2097152,
						"bwc" : 994689,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000111,
							"pbg" : 0.000239,
							"pbm" : 0.000094
						}
					}
				]
			},
			{
				"as" : 9604,
				"relay" : 2,
				"bwa" : 129290,
				"bwc" : 1508,
				"roles" : {
					"middle" : 2,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbm" : 0.000004,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 2,
						"bwa" : 129290,
						"bwc" : 1508,
						"roles" : {
							"middle" : 2,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000004,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 34655,
				"relay" : 1,
				"bwa" : 153600,
				"bwc" : 28103,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000019
				},
				"countries" : [
					{
						"cc" : "HU",
						"relay" : 1,
						"bwa" : 153600,
						"bwc" : 28103,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000019
						}
					}
				]
			},
			{
				"as" : 48685,
				"relay" : 1,
				"bwa" : 10240,
				"bwc" : 101840,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000004
				},
				"countries" : [
					{
						"cc" : "IS",
						"relay" : 1,
						"bwa" : 10240,
						"bwc" : 101840,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000004
						}
					}
				]
			},
			{
				"as" : 159952,
				"relay" : 8,
				"bwa" : 1748970,
				"bwc" : 914527,
				"roles" : {
					"middle" : 8,
					"exit" : 1,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"stable" : 4,
					"notFastStable" : 1,
					"fastStable" : 2,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.0005660000000000001,
					"pbm" : 0.000582,
					"pbe" : 0.000088,
					"pbg" : 0.001027
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 1748970,
						"bwc" : 914527,
						"roles" : {
							"middle" : 8,
							"exit" : 1,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"stable" : 4,
							"notFastStable" : 1,
							"fastStable" : 2,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.0005660000000000001,
							"pbm" : 0.000582,
							"pbe" : 0.000088,
							"pbg" : 0.001027
						}
					}
				]
			},
			{
				"as" : 20286,
				"relay" : 2,
				"bwa" : 112640,
				"bwc" : 14894,
				"roles" : {
					"middle" : 2,
					"exit" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbe" : 0.000009999999999999999
				},
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 2,
						"bwa" : 112640,
						"bwc" : 14894,
						"roles" : {
							"middle" : 2,
							"exit" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbe" : 0.000009999999999999999
						}
					}
				]
			},
			{
				"as" : 114344,
				"relay" : 2,
				"bwa" : 4491264,
				"bwc" : 5142231,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"exit" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.003355,
					"pbg" : 0.0018800000000000002,
					"pbm" : 0.0018800000000000002,
					"pbe" : 0.006303
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 4491264,
						"bwc" : 5142231,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"exit" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.003355,
							"pbg" : 0.0018800000000000002,
							"pbm" : 0.0018800000000000002,
							"pbe" : 0.006303
						}
					}
				]
			},
			{
				"as" : 16333,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000004
				},
				"countries" : [
					{
						"cc" : "MK",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000004
						}
					}
				]
			},
			{
				"as" : 128688,
				"relay" : 8,
				"bwa" : 1195008,
				"bwc" : 767612,
				"roles" : {
					"middle" : 8,
					"exit" : 2,
					"dir" : 6,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 6,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.00015099999999999998,
					"pbg" : 0.000052,
					"pbm" : 0.00022999999999999998,
					"pbe" : 0.000173
				},
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 8,
						"bwa" : 1195008,
						"bwc" : 767612,
						"roles" : {
							"middle" : 8,
							"exit" : 2,
							"dir" : 6,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 6,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.00015099999999999998,
							"pbg" : 0.000052,
							"pbm" : 0.00022999999999999998,
							"pbe" : 0.000173
						}
					}
				]
			},
			{
				"as" : 9,
				"relay" : 1,
				"bwa" : 3200000,
				"bwc" : 2776564,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.001908,
					"pbe" : 0.005723
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 3200000,
						"bwc" : 2776564,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001908,
							"pbe" : 0.005723
						}
					}
				]
			},
			{
				"as" : 46687,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 6576,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.00001
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 6576,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.00001
						}
					}
				]
			},
			{
				"as" : 89448,
				"relay" : 2,
				"bwa" : 1323398,
				"bwc" : 233042,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000071,
					"pbm" : 0.000213
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 1323398,
						"bwc" : 233042,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000071,
							"pbm" : 0.000213
						}
					}
				]
			},
			{
				"as" : 72274,
				"relay" : 2,
				"bwa" : 5966449,
				"bwc" : 5103515,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.001895,
					"pbe" : 0.000139,
					"pbm" : 0.005546
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 846449,
						"bwc" : 50504,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000046,
							"pbe" : 0.000139
						}
					},
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 5120000,
						"bwc" : 5053011,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001849,
							"pbm" : 0.005546
						}
					}
				]
			},
			{
				"as" : 43184,
				"relay" : 4,
				"bwa" : 1050699,
				"bwc" : 525076,
				"roles" : {
					"middle" : 4,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 2,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000128,
					"pbm" : 0.00035800000000000003,
					"pbe" : 0.000026
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 1050699,
						"bwc" : 525076,
						"roles" : {
							"middle" : 4,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 2,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000128,
							"pbm" : 0.00035800000000000003,
							"pbe" : 0.000026
						}
					}
				]
			},
			{
				"as" : 13656,
				"relay" : 2,
				"bwa" : 102400,
				"bwc" : 95272,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 1,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000013,
					"pbm" : 0.000038
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 102400,
						"bwc" : 95272,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 1,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000013,
							"pbm" : 0.000038
						}
					}
				]
			},
			{
				"as" : 43711,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 474861,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000113,
					"pbm" : 0.000338
				},
				"countries" : [
					{
						"cc" : "HU",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 474861,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000113,
							"pbm" : 0.000338
						}
					}
				]
			},
			{
				"as" : 237,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 611050,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000274,
					"pbg" : 0.000588,
					"pbm" : 0.000232
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 611050,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000274,
							"pbg" : 0.000588,
							"pbm" : 0.000232
						}
					}
				]
			},
			{
				"as" : 35017,
				"relay" : 1,
				"bwa" : 2445092,
				"bwc" : 1704994,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000484,
					"pbm" : 0.001451
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 2445092,
						"bwc" : 1704994,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000484,
							"pbm" : 0.001451
						}
					}
				]
			},
			{
				"as" : 53850,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 2252,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000008
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 2252,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000008
						}
					}
				]
			},
			{
				"as" : 13110,
				"relay" : 1,
				"bwa" : 77564,
				"bwc" : 3112,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 77564,
						"bwc" : 3112,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 29632,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 15225,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000016,
					"pbg" : 0.000035,
					"pbm" : 0.000014
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 15225,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000016,
							"pbg" : 0.000035,
							"pbm" : 0.000014
						}
					}
				]
			},
			{
				"as" : 6697,
				"relay" : 1,
				"bwa" : 45056,
				"bwc" : 631,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbe" : 0.000001
				},
				"countries" : [
					{
						"cc" : "BY",
						"relay" : 1,
						"bwa" : 45056,
						"bwc" : 631,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbe" : 0.000001
						}
					}
				]
			},
			{
				"as" : 260416,
				"relay" : 16,
				"bwa" : 27155097,
				"bwc" : 17251025,
				"roles" : {
					"guard" : 6,
					"middle" : 16,
					"dir" : 9,
					"exit" : 8
				},
				"flags" : {
					"fastStable" : 10,
					"stable" : 2,
					"notFastStable" : 1,
					"fast" : 3
				},
				"probs" : {
					"pbr" : 0.010428,
					"pbg" : 0.002881,
					"pbm" : 0.013618,
					"pbe" : 0.014789
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 13,
						"bwa" : 26474260,
						"bwc" : 17162760,
						"roles" : {
							"guard" : 6,
							"middle" : 13,
							"dir" : 7,
							"exit" : 7
						},
						"flags" : {
							"fastStable" : 9,
							"stable" : 2,
							"notFastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.010398,
							"pbg" : 0.002881,
							"pbm" : 0.013534000000000001,
							"pbe" : 0.014782
						}
					},
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 56283,
						"bwc" : 4999,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbe" : 0.000007
						}
					},
					{
						"cc" : "IE",
						"relay" : 1,
						"bwa" : 373950,
						"bwc" : 81870,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000025,
							"pbm" : 0.000075
						}
					},
					{
						"cc" : "BE",
						"relay" : 1,
						"bwa" : 250604,
						"bwc" : 1396,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 38216,
				"relay" : 2,
				"bwa" : 735763,
				"bwc" : 218306,
				"roles" : {
					"middle" : 2,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000047,
					"pbm" : 0.000009,
					"pbe" : 0.000132
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 735763,
						"bwc" : 218306,
						"roles" : {
							"middle" : 2,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000047,
							"pbm" : 0.000009,
							"pbe" : 0.000132
						}
					}
				]
			},
			{
				"as" : 126640,
				"relay" : 8,
				"bwa" : 3759104,
				"bwc" : 2637670,
				"roles" : {
					"guard" : 2,
					"middle" : 8,
					"dir" : 5,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 5,
					"fast" : 3
				},
				"probs" : {
					"pbr" : 0.0008489999999999999,
					"pbg" : 0.000448,
					"pbm" : 0.002057,
					"pbe" : 0.000038
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 8,
						"bwa" : 3759104,
						"bwc" : 2637670,
						"roles" : {
							"guard" : 2,
							"middle" : 8,
							"dir" : 5,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 5,
							"fast" : 3
						},
						"probs" : {
							"pbr" : 0.0008489999999999999,
							"pbg" : 0.000448,
							"pbm" : 0.002057,
							"pbe" : 0.000038
						}
					}
				]
			},
			{
				"as" : 2442,
				"relay" : 2,
				"bwa" : 91655,
				"bwc" : 16309,
				"roles" : {
					"middle" : 2,
					"dir" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbm" : 0.000004,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 2,
						"bwa" : 91655,
						"bwc" : 16309,
						"roles" : {
							"middle" : 2,
							"dir" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000004,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 17183,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 18580,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 18580,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 50432,
				"relay" : 4,
				"bwa" : 2048000,
				"bwc" : 1302459,
				"roles" : {
					"guard" : 2,
					"middle" : 4,
					"exit" : 2,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.00025299999999999997,
					"pbg" : 0.000132,
					"pbm" : 0.000183,
					"pbe" : 0.00044399999999999995
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 4,
						"bwa" : 2048000,
						"bwc" : 1302459,
						"roles" : {
							"guard" : 2,
							"middle" : 4,
							"exit" : 2,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.00025299999999999997,
							"pbg" : 0.000132,
							"pbm" : 0.000183,
							"pbe" : 0.00044399999999999995
						}
					}
				]
			},
			{
				"as" : 66548,
				"relay" : 4,
				"bwa" : 257136,
				"bwc" : 35621,
				"roles" : {
					"middle" : 4,
					"exit" : 3,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 2,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000015,
					"pbe" : 0.000036,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "ZA",
						"relay" : 4,
						"bwa" : 257136,
						"bwc" : 35621,
						"roles" : {
							"middle" : 4,
							"exit" : 3,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 2,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000015,
							"pbe" : 0.000036,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 6332,
				"relay" : 1,
				"bwa" : 1342256,
				"bwc" : 938649,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000113,
					"pbm" : 0.000339
				},
				"countries" : [
					{
						"cc" : "MX",
						"relay" : 1,
						"bwa" : 1342256,
						"bwc" : 938649,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000113,
							"pbm" : 0.000339
						}
					}
				]
			},
			{
				"as" : 24624,
				"relay" : 2,
				"bwa" : 369371,
				"bwc" : 50184,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000028000000000000003,
					"pbm" : 0.000082
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 369371,
						"bwc" : 50184,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000028000000000000003,
							"pbm" : 0.000082
						}
					}
				]
			},
			{
				"as" : 1835,
				"relay" : 1,
				"bwa" : 3145728,
				"bwc" : 1426966,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000562,
					"pbg" : 0.001209,
					"pbm" : 0.000477
				},
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 3145728,
						"bwc" : 1426966,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000562,
							"pbg" : 0.001209,
							"pbm" : 0.000477
						}
					}
				]
			},
			{
				"as" : 393249,
				"relay" : 1,
				"bwa" : 153600,
				"bwc" : 44727,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000018,
					"pbm" : 0.000055
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 153600,
						"bwc" : 44727,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000018,
							"pbm" : 0.000055
						}
					}
				]
			},
			{
				"as" : 240464,
				"relay" : 8,
				"bwa" : 163840,
				"bwc" : 15491,
				"roles" : {
					"middle" : 8,
					"exit" : 8
				},
				"flags" : {
					"notFastStable" : 4,
					"stable" : 4
				},
				"probs" : {
					"pbr" : 0.000024,
					"pbe" : 0.000072
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 8,
						"bwa" : 163840,
						"bwc" : 15491,
						"roles" : {
							"middle" : 8,
							"exit" : 8
						},
						"flags" : {
							"notFastStable" : 4,
							"stable" : 4
						},
						"probs" : {
							"pbr" : 0.000024,
							"pbe" : 0.000072
						}
					}
				]
			},
			{
				"as" : 19580,
				"relay" : 2,
				"bwa" : 106496,
				"bwc" : 6703,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.0000049999999999999996
				},
				"countries" : [
					{
						"cc" : "NZ",
						"relay" : 2,
						"bwa" : 106496,
						"bwc" : 6703,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.0000049999999999999996
						}
					}
				]
			},
			{
				"as" : 7725,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 3100,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000005
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 3100,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000005
						}
					}
				]
			},
			{
				"as" : 5172,
				"relay" : 2,
				"bwa" : 183296,
				"bwc" : 46345,
				"roles" : {
					"middle" : 2,
					"exit" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000013000000000000001,
					"pbe" : 0.000039
				},
				"countries" : [
					{
						"cc" : "EE",
						"relay" : 2,
						"bwa" : 183296,
						"bwc" : 46345,
						"roles" : {
							"middle" : 2,
							"exit" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000013000000000000001,
							"pbe" : 0.000039
						}
					}
				]
			},
			{
				"as" : 17090,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 148975,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000134,
					"pbm" : 0.000402
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 148975,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
								"pbr" : 0.000134,
							"pbm" : 0.000402
						}
					}
				]
			},
			{
				"as" : 101226,
				"relay" : 2,
				"bwa" : 162816,
				"bwc" : 50173,
				"roles" : {
					"middle" : 2,
					"exit" : 2
				},
				"flags" : {
					"stable" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000033,
					"pbe" : 0.000099
				},
				"countries" : [
					{
						"cc" : "IS",
						"relay" : 2,
						"bwa" : 162816,
						"bwc" : 50173,
						"roles" : {
							"middle" : 2,
							"exit" : 2
						},
						"flags" : {
							"stable" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000033,
							"pbe" : 0.000099
						}
					}
				]
			},
			{
				"as" : 2482,
				"relay" : 2,
				"bwa" : 165888,
				"bwc" : 47326,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbm" : 0.000012
				},
				"countries" : [
					{
						"cc" : "GR",
						"relay" : 2,
						"bwa" : 165888,
						"bwc" : 47326,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000012
						}
					}
				]
			},
			{
				"as" : 78576,
				"relay" : 2,
				"bwa" : 786432,
				"bwc" : 890788,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000216,
					"pbg" : 0.00046499999999999997,
					"pbm" : 0.000184
				},
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 2,
						"bwa" : 786432,
						"bwc" : 890788,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000216,
							"pbg" : 0.00046499999999999997,
							"pbm" : 0.000184
						}
					}
				]
			},
			{
				"as" : 170832,
				"relay" : 4,
				"bwa" : 782336,
				"bwc" : 279792,
				"roles" : {
					"middle" : 4,
					"exit" : 2,
					"dir" : 3
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000056,
					"pbe" : 0.000103,
					"pbm" : 0.000066
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 4,
						"bwa" : 782336,
						"bwc" : 279792,
						"roles" : {
							"middle" : 4,
							"exit" : 2,
							"dir" : 3
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000056,
							"pbe" : 0.000103,
							"pbm" : 0.000066
						}
					}
				]
			},
			{
				"as" : 166184,
				"relay" : 8,
				"bwa" : 29838044,
				"bwc" : 21398454,
				"roles" : {
					"guard" : 5,
					"middle" : 8,
					"exit" : 3,
					"dir" : 3
				},
				"flags" : {
					"fastStable" : 7,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.011059999999999999,
					"pbg" : 0.0048660000000000005,
					"pbm" : 0.013966,
					"pbe" : 0.01435
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 29838044,
						"bwc" : 21398454,
						"roles" : {
							"guard" : 5,
							"middle" : 8,
							"exit" : 3,
							"dir" : 3
						},
						"flags" : {
							"fastStable" : 7,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.011059999999999999,
							"pbg" : 0.0048660000000000005,
							"pbm" : 0.013966,
							"pbe" : 0.01435
						}
					}
				]
			},
			{
				"as" : 11696,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 28200,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbe" : 0.000012
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 28200,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbe" : 0.000012
						}
					}
				]
			},
			{
				"as" : 28717,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 439560,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000125,
					"pbg" : 0.000268,
					"pbm" : 0.000106
				},
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 439560,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000125,
							"pbg" : 0.000268,
							"pbm" : 0.000106
						}
					}
				]
			},
			{
				"as" : 17474,
				"relay" : 2,
				"bwa" : 1645075,
				"bwc" : 565309,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000332,
					"pbg" : 0.000442,
					"pbm" : 0.000554
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 1645075,
						"bwc" : 565309,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000332,
							"pbg" : 0.000442,
							"pbm" : 0.000554
						}
					}
				]
			},
			{
				"as" : 48781,
				"relay" : 1,
				"bwa" : 128000,
				"bwc" : 20244,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000014,
					"pbm" : 0.000043
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 128000,
						"bwc" : 20244,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000014,
							"pbm" : 0.000043
						}
					}
				]
			},
			{
				"as" : 7753,
				"relay" : 1,
				"bwa" : 640000,
				"bwc" : 354279,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00013,
					"pbg" : 0.00028,
					"pbm" : 0.00011
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 640000,
						"bwc" : 354279,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00013,
							"pbg" : 0.00028,
							"pbm" : 0.00011
						}
					}
				]
			},
			{
				"as" : 31,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 39809,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 39809,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 43576,
				"relay" : 2,
				"bwa" : 665600,
				"bwc" : 593974,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000051,
					"pbg" : 0.000103,
					"pbm" : 0.000049
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 665600,
						"bwc" : 593974,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000051,
							"pbg" : 0.000103,
							"pbm" : 0.000049
						}
					}
				]
			},
			{
				"as" : 58844,
				"relay" : 2,
				"bwa" : 358400,
				"bwc" : 278396,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000017,
					"pbg" : 0.000031,
					"pbm" : 0.000022
				},
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 2,
						"bwa" : 358400,
						"bwc" : 278396,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000017,
							"pbg" : 0.000031,
							"pbm" : 0.000022
						}
					}
				]
			},
			{
				"as" : 25536,
				"relay" : 2,
				"bwa" : 440880,
				"bwc" : 18969,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbe" : 0.000009,
					"pbm" : 0.00001
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 440880,
						"bwc" : 18969,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbe" : 0.000009,
							"pbm" : 0.00001
						}
					}
				]
			},
			{
				"as" : 8928,
				"relay" : 1,
				"bwa" : 68698,
				"bwc" : 2089,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000008
				},
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 1,
						"bwa" : 68698,
						"bwc" : 2089,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000008
						}
					}
				]
			},
			{
				"as" : 12180,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 50958,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 50958,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 36012,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 91447,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000013,
					"pbe" : 0.000038
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 91447,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000013,
							"pbe" : 0.000038
						}
					}
				]
			},
			{
				"as" : 14380,
				"relay" : 4,
				"bwa" : 1127630,
				"bwc" : 445016,
				"roles" : {
					"guard" : 1,
					"middle" : 4,
					"dir" : 3
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000121,
					"pbg" : 0.000203,
					"pbm" : 0.000161
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 1127630,
						"bwc" : 445016,
						"roles" : {
							"guard" : 1,
							"middle" : 4,
							"dir" : 3
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000121,
							"pbg" : 0.000203,
							"pbm" : 0.000161
						}
					}
				]
			},
			{
				"as" : 2578,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 50448,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbm" : 0.000027
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 50448,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbm" : 0.000027
						}
					}
				]
			},
			{
				"as" : 66140,
				"relay" : 2,
				"bwa" : 460800,
				"bwc" : 113952,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"guard" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000102,
					"pbe" : 0.000099,
					"pbg" : 0.000148,
					"pbm" : 0.000058
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 460800,
						"bwc" : 113952,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"guard" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000102,
							"pbe" : 0.000099,
							"pbg" : 0.000148,
							"pbm" : 0.000058
						}
					}
				]
			},
			{
				"as" : 125600,
				"relay" : 4,
				"bwa" : 1269760,
				"bwc" : 1067567,
				"roles" : {
					"middle" : 4,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"fast" : 3,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.00037000000000000005,
					"pbm" : 0.000072,
					"pbe" : 0.001038
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 1269760,
						"bwc" : 1067567,
						"roles" : {
							"middle" : 4,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fast" : 3,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.00037000000000000005,
							"pbm" : 0.000072,
							"pbe" : 0.001038
						}
					}
				]
			},
			{
				"as" : 30176,
				"relay" : 1,
				"bwa" : 22814995,
				"bwc" : 17386988,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.01745,
					"pbe" : 0.052351
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 22814995,
						"bwc" : 17386988,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.01745,
							"pbe" : 0.052351
						}
					}
				]
			},
			{
				"as" : 30881,
				"relay" : 1,
				"bwa" : 98304,
				"bwc" : 25946,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000018
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 98304,
						"bwc" : 25946,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000018
						}
					}
				]
			},
			{
				"as" : 16232,
				"relay" : 1,
				"bwa" : 39829,
				"bwc" : 204,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 1,
						"bwa" : 39829,
						"bwc" : 204,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 1106,
				"relay" : 2,
				"bwa" : 1280000,
				"bwc" : 687340,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000142,
					"pbm" : 0.000425
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 1280000,
						"bwc" : 687340,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000142,
							"pbm" : 0.000425
						}
					}
				]
			},
			{
				"as" : 27220,
				"relay" : 4,
				"bwa" : 220160,
				"bwc" : 64988,
				"roles" : {
					"middle" : 4,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"fast" : 2,
					"notFastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000019999999999999998,
					"pbm" : 0.000054000000000000005,
					"pbe" : 0.000007
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 220160,
						"bwc" : 64988,
						"roles" : {
							"middle" : 4,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fast" : 2,
							"notFastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000019999999999999998,
							"pbm" : 0.000054000000000000005,
							"pbe" : 0.000007
						}
					}
				]
			},
			{
				"as" : 42455,
				"relay" : 1,
				"bwa" : 409600,
				"bwc" : 269439,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000035,
					"pbm" : 0.000105
				},
				"countries" : [
					{
						"cc" : "IM",
						"relay" : 1,
						"bwa" : 409600,
						"bwc" : 269439,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000035,
							"pbm" : 0.000105
						}
					}
				]
			},
			{
				"as" : 41727,
				"relay" : 1,
				"bwa" : 131072,
				"bwc" : 252,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000012,
					"pbm" : 0.000037
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 131072,
						"bwc" : 252,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000012,
							"pbm" : 0.000037
						}
					}
				]
			},
			{
				"as" : 232584,
				"relay" : 8,
				"bwa" : 687388,
				"bwc" : 214662,
				"roles" : {
					"middle" : 8,
					"exit" : 7,
					"guard" : 1,
					"dir" : 2
				},
				"flags" : {
					"stable" : 6,
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00007299999999999999,
					"pbe" : 0.000151,
					"pbg" : 0.000029,
					"pbm" : 0.000038
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 8,
						"bwa" : 687388,
						"bwc" : 214662,
						"roles" : {
							"middle" : 8,
							"exit" : 7,
							"guard" : 1,
							"dir" : 2
						},
						"flags" : {
							"stable" : 6,
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00007299999999999999,
							"pbe" : 0.000151,
							"pbg" : 0.000029,
							"pbm" : 0.000038
						}
					}
				]
			},
			{
				"as" : 21284,
				"relay" : 1,
				"bwa" : 32768,
				"bwc" : 152,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "GR",
						"relay" : 1,
						"bwa" : 32768,
						"bwc" : 152,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 43146,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 12628,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000014,
					"pbe" : 0.000043
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 12628,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000014,
							"pbe" : 0.000043
						}
					}
				]
			},
			{
				"as" : 109280,
				"relay" : 16,
				"bwa" : 2748074,
				"bwc" : 1639864,
				"roles" : {
					"middle" : 16,
					"guard" : 4,
					"dir" : 6,
					"exit" : 3
				},
				"flags" : {
					"fastStable" : 11,
					"fast" : 2,
					"stable" : 2,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000411,
					"pbm" : 0.000513,
					"pbg" : 0.000411,
					"pbe" : 0.00031299999999999996
				},
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 3,
						"bwa" : 479820,
						"bwc" : 111756,
						"roles" : {
							"middle" : 3,
							"guard" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.000043,
							"pbm" : 0.000087,
							"pbg" : 0.000043
						}
					},
					{
						"cc" : "PL",
						"relay" : 5,
						"bwa" : 1032192,
						"bwc" : 897161,
						"roles" : {
							"guard" : 2,
							"middle" : 5,
							"dir" : 3,
							"exit" : 2
						},
						"flags" : {
							"fastStable" : 4,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.00019200000000000003,
							"pbg" : 0.000137,
							"pbm" : 0.000149,
							"pbe" : 0.000289
						}
					},
					{
						"cc" : "SK",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 86623,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbe" : 0.000024
						}
					},
					{
						"cc" : "AT",
						"relay" : 2,
						"bwa" : 614400,
						"bwc" : 405896,
						"roles" : {
							"middle" : 2,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000125,
							"pbm" : 0.000146,
							"pbg" : 0.000231
						}
					},
					{
						"cc" : "CZ",
						"relay" : 2,
						"bwa" : 61440,
						"bwc" : 1421,
						"roles" : {
							"middle" : 2
						},
						"flags" : {
							"stable" : 1,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000019
						}
					},
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 343134,
						"bwc" : 85382,
						"roles" : {
							"middle" : 2
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000028000000000000003,
							"pbm" : 0.000085
						}
					},
					{
						"cc" : "HU",
						"relay" : 1,
						"bwa" : 114688,
						"bwc" : 51625,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbm" : 0.000027
						}
					}
				]
			},
			{
				"as" : 35807,
				"relay" : 1,
				"bwa" : 1936442,
				"bwc" : 485985,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000532,
					"pbe" : 0.001597
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1936442,
						"bwc" : 485985,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000532,
							"pbe" : 0.001597
						}
					}
				]
			},
			{
				"as" : 184224,
				"relay" : 8,
				"bwa" : 91530973,
				"bwc" : 62583408,
				"roles" : {
					"guard" : 7,
					"middle" : 8,
					"dir" : 7
				},
				"flags" : {
					"fastStable" : 7,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.02157,
					"pbg" : 0.04421,
					"pbm" : 0.020508
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 91530973,
						"bwc" : 62583408,
						"roles" : {
							"guard" : 7,
							"middle" : 8,
							"dir" : 7
						},
						"flags" : {
							"fastStable" : 7,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.02157,
							"pbg" : 0.04421,
							"pbm" : 0.020508
						}
					}
				]
			},
			{
				"as" : 91416,
				"relay" : 8,
				"bwa" : 1385491,
				"bwc" : 525910,
				"roles" : {
					"middle" : 8,
					"dir" : 7,
					"exit" : 1,
					"guard" : 2
				},
				"flags" : {
					"fastStable" : 4,
					"fast" : 3,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000176,
					"pbm" : 0.000199,
					"pbe" : 0.000015,
					"pbg" : 0.000315
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 1385491,
						"bwc" : 525910,
						"roles" : {
							"middle" : 8,
							"dir" : 7,
							"exit" : 1,
							"guard" : 2
						},
						"flags" : {
							"fastStable" : 4,
							"fast" : 3,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000176,
							"pbm" : 0.000199,
							"pbe" : 0.000015,
							"pbg" : 0.000315
						}
					}
				]
			},
			{
				"as" : 11520,
				"relay" : 2,
				"bwa" : 133120,
				"bwc" : 13479,
				"roles" : {
					"middle" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 133120,
						"bwc" : 13479,
						"roles" : {
							"middle" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 72446,
				"relay" : 2,
				"bwa" : 1024000,
				"bwc" : 521177,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000164,
					"pbg" : 0.000352,
					"pbm" : 0.000139
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 1024000,
						"bwc" : 521177,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000164,
							"pbg" : 0.000352,
							"pbm" : 0.000139
						}
					}
				]
			},
			{
				"as" : 53792,
				"relay" : 8,
				"bwa" : 4523393,
				"bwc" : 3206784,
				"roles" : {
					"middle" : 8,
					"dir" : 6,
					"guard" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 7,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00218,
					"pbm" : 0.005696,
					"pbg" : 0.000555,
					"pbe" : 0.000285
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 4523393,
						"bwc" : 3206784,
						"roles" : {
							"middle" : 8,
							"dir" : 6,
							"guard" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 7,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00218,
							"pbm" : 0.005696,
							"pbg" : 0.000555,
							"pbe" : 0.000285
						}
					}
				]
			},
			{
				"as" : 67176,
				"relay" : 2,
				"bwa" : 179200,
				"bwc" : 38747,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000014,
					"pbm" : 0.000018,
					"pbe" : 0.000024
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 179200,
						"bwc" : 38747,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000014,
							"pbm" : 0.000018,
							"pbe" : 0.000024
						}
					}
				]
			},
			{
				"as" : 36572,
				"relay" : 4,
				"bwa" : 663552,
				"bwc" : 357229,
				"roles" : {
					"middle" : 4,
					"exit" : 2,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.00016099999999999998,
					"pbe" : 0.000054999999999999995,
					"pbg" : 0.000281,
					"pbm" : 0.000147
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 4,
						"bwa" : 663552,
						"bwc" : 357229,
						"roles" : {
							"middle" : 4,
							"exit" : 2,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.00016099999999999998,
							"pbe" : 0.000054999999999999995,
							"pbg" : 0.000281,
							"pbm" : 0.000147
						}
					}
				]
			},
			{
				"as" : 701,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 154,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 154,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 22460,
				"relay" : 4,
				"bwa" : 527360,
				"bwc" : 95496,
				"roles" : {
					"middle" : 4,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.00004,
					"pbm" : 0.00007999999999999999,
					"pbe" : 0.000043
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 4,
						"bwa" : 527360,
						"bwc" : 95496,
						"roles" : {
							"middle" : 4,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.00004,
							"pbm" : 0.00007999999999999999,
							"pbe" : 0.000043
						}
					}
				]
			},
			{
				"as" : 111,
				"relay" : 1,
				"bwa" : 11838456,
				"bwc" : 6300614,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000935,
					"pbg" : 0.000524,
					"pbm" : 0.000524,
					"pbe" : 0.001756
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 11838456,
						"bwc" : 6300614,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000935,
							"pbg" : 0.000524,
							"pbm" : 0.000524,
							"pbe" : 0.001756
						}
					}
				]
			},
			{
				"as" : 59746,
				"relay" : 2,
				"bwa" : 300748,
				"bwc" : 26883,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbm" : 0.000012
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 300748,
						"bwc" : 26883,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000012
						}
					}
				]
			},
			{
				"as" : 33304,
				"relay" : 2,
				"bwa" : 524288,
				"bwc" : 264103,
				"roles" : {
					"guard" : 2,
					"middle" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000059999999999999995,
					"pbg" : 0.00013000000000000002,
					"pbm" : 0.000052000000000000004
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 524288,
						"bwc" : 264103,
						"roles" : {
							"guard" : 2,
							"middle" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000059999999999999995,
							"pbg" : 0.00013000000000000002,
							"pbm" : 0.000052000000000000004
						}
					}
				]
			},
			{
				"as" : 50821,
				"relay" : 1,
				"bwa" : 614400,
				"bwc" : 443136,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000131,
					"pbg" : 0.000282,
					"pbm" : 0.000112
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 614400,
						"bwc" : 443136,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000131,
							"pbg" : 0.000282,
							"pbm" : 0.000112
						}
					}
				]
			},
			{
				"as" : 12542,
				"relay" : 1,
				"bwa" : 228352,
				"bwc" : 45816,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000017,
					"pbm" : 0.000051
				},
				"countries" : [
					{
						"cc" : "PT",
						"relay" : 1,
						"bwa" : 228352,
						"bwc" : 45816,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000017,
							"pbm" : 0.000051
						}
					}
				]
			},
			{
				"as" : 2637,
				"relay" : 1,
				"bwa" : 272105,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000015,
					"pbm" : 0.000044
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 272105,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000015,
							"pbm" : 0.000044
						}
					}
				]
			},
			{
				"as" : 67968,
				"relay" : 2,
				"bwa" : 716800,
				"bwc" : 345076,
				"roles" : {
					"middle" : 2,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000063,
					"pbm" : 0.000158,
					"pbg" : 0.000033
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 716800,
						"bwc" : 345076,
						"roles" : {
							"middle" : 2,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000063,
							"pbm" : 0.000158,
							"pbg" : 0.000033
						}
					}
				]
			},
			{
				"as" : 22102,
				"relay" : 2,
				"bwa" : 2591634,
				"bwc" : 1816405,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.001093,
					"pbg" : 0.000611,
					"pbm" : 0.00062,
					"pbe" : 0.002048
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 2591634,
						"bwc" : 1816405,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001093,
							"pbg" : 0.000611,
							"pbm" : 0.00062,
							"pbe" : 0.002048
						}
					}
				]
			},
			{
				"as" : 36252,
				"relay" : 1,
				"bwa" : 256000,
				"bwc" : 97710,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000017,
					"pbg" : 0.000037,
					"pbm" : 0.000015
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 256000,
						"bwc" : 97710,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000017,
							"pbg" : 0.000037,
							"pbm" : 0.000015
						}
					}
				]
			},
			{
				"as" : 20931,
				"relay" : 1,
				"bwa" : 983040,
				"bwc" : 777879,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000197,
					"pbg" : 0.000423,
					"pbm" : 0.000167
				},
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 1,
						"bwa" : 983040,
						"bwc" : 777879,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000197,
							"pbg" : 0.000423,
							"pbm" : 0.000167
						}
					}
				]
			},
			{
				"as" : 12922,
				"relay" : 2,
				"bwa" : 481383,
				"bwc" : 36428,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"exit" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000107,
					"pbg" : 0.00006,
					"pbm" : 0.00006,
					"pbe" : 0.000201
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 481383,
						"bwc" : 36428,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"exit" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000107,
							"pbg" : 0.00006,
							"pbm" : 0.00006,
							"pbe" : 0.000201
						}
					}
				]
			},
			{
				"as" : 49776,
				"relay" : 1,
				"bwa" : 614400,
				"bwc" : 187764,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000188,
					"pbe" : 0.000563
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 614400,
						"bwc" : 187764,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000188,
							"pbe" : 0.000563
						}
					}
				]
			},
			{
				"as" : 12338,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbe" : 0.000026
				},
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbe" : 0.000026
						}
					}
				]
			},
			{
				"as" : 13193,
				"relay" : 1,
				"bwa" : 128000,
				"bwc" : 30812,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000011,
					"pbe" : 0.000032
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 128000,
						"bwc" : 30812,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbe" : 0.000032
						}
					}
				]
			},
			{
				"as" : 50458,
				"relay" : 2,
				"bwa" : 304128,
				"bwc" : 23382,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000015,
					"pbm" : 0.000044
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 2,
						"bwa" : 304128,
						"bwc" : 23382,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000015,
							"pbm" : 0.000044
						}
					}
				]
			},
			{
				"as" : 21565,
				"relay" : 1,
				"bwa" : 291840,
				"bwc" : 64035,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000025,
					"pbm" : 0.000075
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 291840,
						"bwc" : 64035,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000025,
							"pbm" : 0.000075
						}
					}
				]
			},
			{
				"as" : 14517,
				"relay" : 1,
				"bwa" : 79168,
				"bwc" : 8686,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.00001
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 79168,
						"bwc" : 8686,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.00001
						}
					}
				]
			},
			{
				"as" : 399040,
				"relay" : 16,
				"bwa" : 24566908,
				"bwc" : 19745979,
				"roles" : {
					"middle" : 16,
					"guard" : 11,
					"dir" : 10,
					"exit" : 3
				},
				"flags" : {
					"fastStable" : 14,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.005648,
					"pbm" : 0.009830000000000002,
					"pbg" : 0.005967,
					"pbe" : 0.001146
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 15,
						"bwa" : 23509927,
						"bwc" : 19214941,
						"roles" : {
							"middle" : 15,
							"guard" : 10,
							"dir" : 9,
							"exit" : 2
						},
						"flags" : {
							"fastStable" : 13,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.005534,
							"pbm" : 0.009766,
							"pbg" : 0.005903,
							"pbe" : 0.000931
						}
					},
					{
						"cc" : "IT",
						"relay" : 1,
							"bwa" : 1056981,
						"bwc" : 531038,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000114,
							"pbg" : 0.000064,
							"pbm" : 0.000064,
							"pbe" : 0.000215
						}
					}
				]
			},
			{
				"as" : 8437,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 32480,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbe" : 0.000007
				},
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 32480,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbe" : 0.000007
						}
					}
				]
			},
			{
				"as" : 30640,
				"relay" : 1,
				"bwa" : 66560,
				"bwc" : 25020,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 66560,
						"bwc" : 25020,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 12400,
				"relay" : 1,
				"bwa" : 141324,
				"bwc" : 45538,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000018
				},
				"countries" : [
					{
						"cc" : "IL",
						"relay" : 1,
						"bwa" : 141324,
						"bwc" : 45538,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000018
						}
					}
				]
			},
			{
				"as" : 50616,
				"relay" : 8,
				"bwa" : 1093569,
				"bwc" : 382076,
				"roles" : {
					"guard" : 1,
					"middle" : 8,
					"dir" : 3
				},
				"flags" : {
					"fastStable" : 4,
					"stable" : 2,
					"notFastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000061000000000000005,
					"pbg" : 0.000083,
					"pbm" : 0.000105
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 8,
						"bwa" : 1093569,
						"bwc" : 382076,
						"roles" : {
							"guard" : 1,
							"middle" : 8,
							"dir" : 3
						},
						"flags" : {
							"fastStable" : 4,
							"stable" : 2,
							"notFastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000061000000000000005,
							"pbg" : 0.000083,
							"pbm" : 0.000105
						}
					}
				]
			},
			{
				"as" : 207260,
				"relay" : 4,
				"bwa" : 19602100,
				"bwc" : 16157405,
				"roles" : {
					"guard" : 2,
					"middle" : 4,
					"exit" : 2,
					"dir" : 3
				},
				"flags" : {
					"fastStable" : 2,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.0075970000000000005,
					"pbg" : 0.005782,
					"pbm" : 0.004567,
					"pbe" : 0.012442
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 4,
						"bwa" : 19602100,
						"bwc" : 16157405,
						"roles" : {
							"guard" : 2,
							"middle" : 4,
							"exit" : 2,
							"dir" : 3
						},
						"flags" : {
							"fastStable" : 2,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.0075970000000000005,
							"pbg" : 0.005782,
							"pbm" : 0.004567,
							"pbe" : 0.012442
						}
					}
				]
			},
			{
				"as" : 41704,
				"relay" : 1,
				"bwa" : 154660,
				"bwc" : 65704,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000012,
					"pbm" : 0.000035
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 154660,
						"bwc" : 65704,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000012,
							"pbm" : 0.000035
						}
					}
				]
			},
			{
				"as" : 24238,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 17103,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000008
				},
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 17103,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000008
						}
					}
				]
			},
			{
				"as" : 250672,
				"relay" : 8,
				"bwa" : 1198444,
				"bwc" : 190564,
				"roles" : {
					"middle" : 8,
					"dir" : 5,
					"exit" : 1
				},
				"flags" : {
					"fast" : 6,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000066,
					"pbm" : 0.000178,
					"pbe" : 0.00002
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 1198444,
						"bwc" : 190564,
						"roles" : {
							"middle" : 8,
							"dir" : 5,
							"exit" : 1
						},
						"flags" : {
							"fast" : 6,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000066,
							"pbm" : 0.000178,
							"pbe" : 0.00002
						}
					}
				]
			},
			{
				"as" : 39301,
				"relay" : 1,
				"bwa" : 7298398,
				"bwc" : 4192367,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000907,
					"pbg" : 0.00195,
					"pbm" : 0.00077
				},
				"countries" : [
					{
						"cc" : "EE",
						"relay" : 1,
						"bwa" : 7298398,
						"bwc" : 4192367,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000907,
							"pbg" : 0.00195,
							"pbm" : 0.00077
						}
					}
				]
			},
			{
				"as" : 31314,
				"relay" : 2,
				"bwa" : 1715200,
				"bwc" : 1167040,
				"roles" : {
					"middle" : 2,
					"guard" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000496,
					"pbm" : 0.000288,
					"pbg" : 0.000276,
					"pbe" : 0.000925
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 1715200,
						"bwc" : 1167040,
						"roles" : {
							"middle" : 2,
							"guard" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000496,
							"pbm" : 0.000288,
							"pbg" : 0.000276,
							"pbe" : 0.000925
						}
					}
				]
			},
			{
				"as" : 35352,
				"relay" : 2,
				"bwa" : 162423,
				"bwc" : 26234,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbe" : 0.000002
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 2,
						"bwa" : 162423,
						"bwc" : 26234,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbe" : 0.000002
						}
					}
				]
			},
			{
				"as" : 125368,
				"relay" : 4,
				"bwa" : 3220147,
				"bwc" : 2030248,
				"roles" : {
					"middle" : 4,
					"guard" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.00048400000000000006,
					"pbm" : 0.001215,
					"pbg" : 0.000234
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 3220147,
						"bwc" : 2030248,
						"roles" : {
							"middle" : 4,
							"guard" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.00048400000000000006,
							"pbm" : 0.001215,
							"pbg" : 0.000234
						}
					}
				]
			},
			{
				"as" : 52120,
				"relay" : 4,
				"bwa" : 13853494,
				"bwc" : 9556397,
				"roles" : {
					"guard" : 3,
					"middle" : 4,
					"exit" : 3,
					"dir" : 3
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.004791,
					"pbg" : 0.0026810000000000002,
					"pbm" : 0.002705,
					"pbe" : 0.008986000000000001
				},
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 4,
						"bwa" : 13853494,
						"bwc" : 9556397,
						"roles" : {
							"guard" : 3,
							"middle" : 4,
							"exit" : 3,
							"dir" : 3
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.004791,
							"pbg" : 0.0026810000000000002,
							"pbm" : 0.002705,
							"pbe" : 0.008986000000000001
						}
					}
				]
			},
			{
				"as" : 31246,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 564648,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000377,
					"pbe" : 0.001131
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 564648,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000377,
							"pbe" : 0.001131
						}
					}
				]
			},
			{
				"as" : 2607,
				"relay" : 1,
				"bwa" : 8351042,
				"bwc" : 5349067,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.003253,
					"pbg" : 0.006997,
					"pbm" : 0.002764
				},
				"countries" : [
					{
						"cc" : "SK",
						"relay" : 1,
						"bwa" : 8351042,
						"bwc" : 5349067,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.003253,
							"pbg" : 0.006997,
							"pbm" : 0.002764
						}
					}
				]
			},
			{
				"as" : 36477,
				"relay" : 1,
				"bwa" : 393216,
				"bwc" : 92458,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000092,
					"pbe" : 0.000275
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 393216,
						"bwc" : 92458,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000092,
							"pbe" : 0.000275
						}
					}
				]
			},
			{
				"as" : 393378,
				"relay" : 2,
				"bwa" : 2150400,
				"bwc" : 1498862,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000397,
					"pbg" : 0.000553,
					"pbm" : 0.000282,
					"pbe" : 0.000353
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 2,
						"bwa" : 2150400,
						"bwc" : 1498862,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000397,
							"pbg" : 0.000553,
							"pbm" : 0.000282,
							"pbe" : 0.000353
						}
					}
				]
			},
			{
				"as" : 26376,
				"relay" : 2,
				"bwa" : 530906,
				"bwc" : 68947,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbe" : 0.000009,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 2,
						"bwa" : 530906,
						"bwc" : 68947,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbe" : 0.000009,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 55512,
				"relay" : 8,
				"bwa" : 5120000,
				"bwc" : 3716013,
				"roles" : {
					"guard" : 4,
					"middle" : 8,
					"dir" : 5
				},
				"flags" : {
					"fastStable" : 7,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.0012000000000000001,
					"pbg" : 0.002303,
					"pbm" : 0.001297
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 5120000,
						"bwc" : 3716013,
						"roles" : {
							"guard" : 4,
							"middle" : 8,
							"dir" : 5
						},
						"flags" : {
							"fastStable" : 7,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.0012000000000000001,
							"pbg" : 0.002303,
							"pbm" : 0.001297
						}
					}
				]
			},
			{
				"as" : 4658,
				"relay" : 1,
				"bwa" : 196608,
				"bwc" : 7145,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbm" : 0.000028
				},
				"countries" : [
					{
						"cc" : "HK",
						"relay" : 1,
						"bwa" : 196608,
						"bwc" : 7145,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbm" : 0.000028
						}
					}
				]
			},
			{
				"as" : 9050,
				"relay" : 1,
				"bwa" : 107593,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000005
				},
				"countries" : [
					{
						"cc" : "RO",
						"relay" : 1,
						"bwa" : 107593,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000005
						}
					}
				]
			},
			{
				"as" : 154096,
				"relay" : 8,
				"bwa" : 9307668,
				"bwc" : 5262963,
				"roles" : {
					"middle" : 8,
					"dir" : 7,
					"guard" : 3,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 6,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.001189,
					"pbm" : 0.003087,
					"pbg" : 0.000441,
					"pbe" : 0.000039
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 9307668,
						"bwc" : 5262963,
						"roles" : {
							"middle" : 8,
							"dir" : 7,
							"guard" : 3,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 6,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.001189,
							"pbm" : 0.003087,
							"pbg" : 0.000441,
							"pbe" : 0.000039
						}
					}
				]
			},
			{
				"as" : 126752,
				"relay" : 16,
				"bwa" : 2411085,
				"bwc" : 776596,
				"roles" : {
					"middle" : 16,
					"exit" : 4,
					"dir" : 11,
					"guard" : 1
				},
				"flags" : {
					"fast" : 5,
					"fastStable" : 9,
					"stable" : 1,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000279,
					"pbe" : 0.00021199999999999998,
					"pbg" : 0.000185,
					"pbm" : 0.00043999999999999996
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 16,
						"bwa" : 2411085,
						"bwc" : 776596,
						"roles" : {
							"middle" : 16,
							"exit" : 4,
							"dir" : 11,
							"guard" : 1
						},
						"flags" : {
							"fast" : 5,
							"fastStable" : 9,
							"stable" : 1,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000279,
							"pbe" : 0.00021199999999999998,
							"pbg" : 0.000185,
							"pbm" : 0.00043999999999999996
						}
					}
				]
			},
			{
				"as" : 27699,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 14093,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbm" : 0.000013
				},
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 14093,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000013
						}
					}
				]
			},
			{
				"as" : 21021,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 139,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 139,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 8339,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 17529,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000017,
					"pbg" : 0.000036,
					"pbm" : 0.000014
				},
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 17529,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000017,
							"pbg" : 0.000036,
							"pbm" : 0.000014
						}
					}
				]
			},
			{
				"as" : 93632,
				"relay" : 2,
				"bwa" : 614400,
				"bwc" : 530205,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"exit" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000158,
					"pbg" : 0.000089,
					"pbm" : 0.000089,
					"pbe" : 0.00029600000000000004
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 614400,
						"bwc" : 530205,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"exit" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000158,
							"pbg" : 0.000089,
							"pbm" : 0.000089,
							"pbe" : 0.00029600000000000004
						}
					}
				]
			},
			{
				"as" : 42336,
				"relay" : 1,
				"bwa" : 262144,
				"bwc" : 144173,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000022,
					"pbg" : 0.000046,
					"pbm" : 0.000018
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 262144,
						"bwc" : 144173,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000022,
							"pbg" : 0.000046,
							"pbm" : 0.000018
						}
					}
				]
			},
			{
				"as" : 65560,
				"relay" : 2,
				"bwa" : 390144,
				"bwc" : 270890,
				"roles" : {
					"middle" : 2,
					"dir" : 1,
					"guard" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000097,
					"pbm" : 0.000127,
					"pbg" : 0.000037,
					"pbe" : 0.000125
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 390144,
						"bwc" : 270890,
						"roles" : {
							"middle" : 2,
							"dir" : 1,
							"guard" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000097,
							"pbm" : 0.000127,
							"pbg" : 0.000037,
							"pbe" : 0.000125
						}
					}
				]
			},
			{
				"as" : 12728,
				"relay" : 2,
				"bwa" : 167936,
				"bwc" : 11297,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000013000000000000001,
					"pbm" : 0.000039
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 167936,
						"bwc" : 11297,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000013000000000000001,
							"pbm" : 0.000039
						}
					}
				]
			},
			{
				"as" : 226,
				"relay" : 1,
				"bwa" : 5242880,
				"bwc" : 3767212,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.001553,
					"pbg" : 0.003339,
					"pbm" : 0.001319
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 5242880,
						"bwc" : 3767212,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001553,
							"pbg" : 0.003339,
							"pbm" : 0.001319
						}
					}
				]
			},
			{
				"as" : 64008,
				"relay" : 8,
				"bwa" : 5262368,
				"bwc" : 2939239,
				"roles" : {
					"middle" : 8,
					"guard" : 3,
					"dir" : 3
				},
				"flags" : {
					"fastStable" : 6,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.0009370000000000001,
					"pbm" : 0.0022320000000000005,
					"pbg" : 0.000577
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 5262368,
						"bwc" : 2939239,
						"roles" : {
							"middle" : 8,
							"guard" : 3,
							"dir" : 3
						},
						"flags" : {
							"fastStable" : 6,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.0009370000000000001,
							"pbm" : 0.0022320000000000005,
							"pbg" : 0.000577
						}
					}
				]
			},
			{
				"as" : 5054,
				"relay" : 2,
				"bwa" : 643072,
				"bwc" : 189325,
				"roles" : {
					"middle" : 2,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000047000000000000004,
					"pbm" : 0.000053,
					"pbg" : 0.000088
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 2,
						"bwa" : 643072,
						"bwc" : 189325,
						"roles" : {
							"middle" : 2,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000047000000000000004,
							"pbm" : 0.000053,
							"pbg" : 0.000088
						}
					}
				]
			},
			{
				"as" : 1853,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 36810,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 36810,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 1672,
				"relay" : 8,
				"bwa" : 608021,
				"bwc" : 171522,
				"roles" : {
					"middle" : 8,
					"dir" : 5,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 2,
					"notFastStable" : 2,
					"fast" : 4
				},
				"probs" : {
					"pbr" : 0.000049999999999999996,
					"pbm" : 0.000072,
					"pbe" : 0.000077
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 608021,
						"bwc" : 171522,
						"roles" : {
							"middle" : 8,
							"dir" : 5,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 2,
							"notFastStable" : 2,
							"fast" : 4
						},
						"probs" : {
							"pbr" : 0.000049999999999999996,
							"pbm" : 0.000072,
							"pbe" : 0.000077
						}
					}
				]
			},
			{
				"as" : 44557,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 1023873,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000091,
					"pbg" : 0.000051,
					"pbm" : 0.000051,
					"pbe" : 0.000172
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 1023873,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000091,
							"pbg" : 0.000051,
							"pbm" : 0.000051,
							"pbe" : 0.000172
						}
					}
				]
			},
			{
				"as" : 57735,
				"relay" : 1,
				"bwa" : 746250,
				"bwc" : 749913,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000248,
					"pbe" : 0.000745
				},
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 746250,
						"bwc" : 749913,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000248,
							"pbe" : 0.000745
						}
					}
				]
			},
			{
				"as" : 160920,
				"relay" : 8,
				"bwa" : 2105480,
				"bwc" : 745769,
				"roles" : {
					"middle" : 8,
					"guard" : 2,
					"dir" : 5
				},
				"flags" : {
					"fastStable" : 5,
					"fast" : 3
				},
				"probs" : {
					"pbr" : 0.000316,
					"pbm" : 0.000532,
					"pbg" : 0.00042
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 2105480,
						"bwc" : 745769,
						"roles" : {
							"middle" : 8,
							"guard" : 2,
							"dir" : 5
						},
						"flags" : {
							"fastStable" : 5,
							"fast" : 3
						},
						"probs" : {
							"pbr" : 0.000316,
							"pbm" : 0.000532,
							"pbg" : 0.00042
						}
					}
				]
			},
			{
				"as" : 31790,
				"relay" : 2,
				"bwa" : 201544,
				"bwc" : 156777,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000048,
					"pbe" : 0.000074,
					"pbm" : 0.000069
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 2,
						"bwa" : 201544,
						"bwc" : 156777,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000048,
							"pbe" : 0.000074,
							"pbm" : 0.000069
						}
					}
				]
			},
			{
				"as" : 118248,
				"relay" : 4,
				"bwa" : 848945,
				"bwc" : 274603,
				"roles" : {
					"middle" : 4,
					"dir" : 2
				},
				"flags" : {
					"fast" : 3,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000069,
					"pbm" : 0.000206
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 848945,
						"bwc" : 274603,
						"roles" : {
							"middle" : 4,
							"dir" : 2
						},
						"flags" : {
							"fast" : 3,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000069,
							"pbm" : 0.000206
						}
					}
				]
			},
			{
				"as" : 66726,
				"relay" : 2,
				"bwa" : 353280,
				"bwc" : 58506,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000014000000000000001,
					"pbm" : 0.000039999999999999996
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 353280,
						"bwc" : 58506,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000014000000000000001,
							"pbm" : 0.000039999999999999996
						}
					}
				]
			},
			{
				"as" : 35637,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 30562,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbm" : 0.000012
				},
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 30562,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000012
						}
					}
				]
			},
			{
				"as" : 896,
				"relay" : 4,
				"bwa" : 22432871,
				"bwc" : 16977347,
				"roles" : {
					"guard" : 3,
					"middle" : 4,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.0056560000000000004,
					"pbg" : 0.011845999999999999,
					"pbm" : 0.005122
				},
				"countries" : [
					{
						"cc" : "NO",
						"relay" : 4,
						"bwa" : 22432871,
						"bwc" : 16977347,
						"roles" : {
							"guard" : 3,
							"middle" : 4,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.0056560000000000004,
							"pbg" : 0.011845999999999999,
							"pbm" : 0.005122
						}
					}
				]
			},
			{
				"as" : 19969,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 29331,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000012,
					"pbe" : 0.000037
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 29331,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000012,
							"pbe" : 0.000037
						}
					}
				]
			},
			{
				"as" : 33182,
				"relay" : 1,
				"bwa" : 3145728,
				"bwc" : 2325561,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000841,
					"pbm" : 0.002524
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 3145728,
						"bwc" : 2325561,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000841,
							"pbm" : 0.002524
						}
					}
				]
			},
			{
				"as" : 7377,
				"relay" : 1,
				"bwa" : 420864,
				"bwc" : 91664,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000021,
					"pbm" : 0.000064
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 420864,
						"bwc" : 91664,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000021,
							"pbm" : 0.000064
						}
					}
				]
			},
			{
				"as" : 42322,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 13362,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 13362,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 50266,
				"relay" : 1,
				"bwa" : 37298247,
				"bwc" : 28022394,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.0042,
					"pbg" : 0.009032,
					"pbm" : 0.003568
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 37298247,
						"bwc" : 28022394,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.0042,
							"pbg" : 0.009032,
							"pbm" : 0.003568
						}
					}
				]
			},
			{
				"as" : 67770,
				"relay" : 2,
				"bwa" : 1253376,
				"bwc" : 1063653,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000146,
					"pbg" : 0.000143,
					"pbm" : 0.00009300000000000001,
					"pbe" : 0.000203
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 2,
						"bwa" : 1253376,
						"bwc" : 1063653,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000146,
							"pbg" : 0.000143,
							"pbm" : 0.00009300000000000001,
							"pbe" : 0.000203
						}
					}
				]
			},
			{
				"as" : 290808,
				"relay" : 8,
				"bwa" : 8614807,
				"bwc" : 5248984,
				"roles" : {
					"guard" : 4,
					"middle" : 8,
					"exit" : 3,
					"dir" : 6
				},
				"flags" : {
					"fastStable" : 6,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.0032189999999999996,
					"pbg" : 0.004211,
					"pbm" : 0.0018740000000000002,
					"pbe" : 0.003572
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 6,
						"bwa" : 6204367,
						"bwc" : 4108415,
						"roles" : {
							"guard" : 2,
							"middle" : 6,
							"exit" : 3,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 4,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.0027010000000000003,
							"pbg" : 0.003097,
							"pbm" : 0.001434,
							"pbe" : 0.003572
						}
					},
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 1310720,
						"bwc" : 946386,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000445,
							"pbg" : 0.000957,
							"pbm" : 0.000378
						}
					},
					{
						"cc" : "SG",
						"relay" : 1,
						"bwa" : 1099720,
						"bwc" : 194183,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000073,
							"pbg" : 0.000157,
							"pbm" : 0.000062
						}
					}
				]
			},
			{
				"as" : 26560,
				"relay" : 8,
				"bwa" : 2068465,
				"bwc" : 1252760,
				"roles" : {
					"middle" : 8,
					"dir" : 4
				},
				"flags" : {
					"fast" : 6,
					"notFastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000544,
					"pbm" : 0.001633
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 2068465,
						"bwc" : 1252760,
						"roles" : {
							"middle" : 8,
							"dir" : 4
						},
						"flags" : {
							"fast" : 6,
							"notFastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000544,
							"pbm" : 0.001633
						}
					}
				]
			},
			{
				"as" : 57056,
				"relay" : 8,
				"bwa" : 481023,
				"bwc" : 35229,
				"roles" : {
					"middle" : 8,
					"dir" : 3,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 3,
					"stable" : 1,
					"notFastStable" : 2,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000019999999999999998,
					"pbm" : 0.000061,
					"pbe" : 0.000003
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 481023,
						"bwc" : 35229,
						"roles" : {
							"middle" : 8,
							"dir" : 3,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 3,
							"stable" : 1,
							"notFastStable" : 2,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000019999999999999998,
							"pbm" : 0.000061,
							"pbe" : 0.000003
						}
					}
				]
			},
			{
				"as" : 130120,
				"relay" : 8,
				"bwa" : 11443493,
				"bwc" : 10300595,
				"roles" : {
					"middle" : 8,
					"exit" : 4,
					"dir" : 2,
					"guard" : 3
				},
				"flags" : {
					"fastStable" : 6,
					"stable" : 2
				},
				"probs" : {
					"pbr" : 0.0047090000000000005,
					"pbe" : 0.000088,
					"pbm" : 0.003992,
					"pbg" : 0.010047
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 7,
						"bwa" : 11341093,
						"bwc" : 10265198,
						"roles" : {
							"middle" : 7,
							"exit" : 3,
							"guard" : 3,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 5,
							"stable" : 2
						},
						"probs" : {
							"pbr" : 0.004695,
							"pbe" : 0.000044999999999999996,
							"pbm" : 0.003992,
							"pbg" : 0.010047
						}
					},
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 35397,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000014,
							"pbe" : 0.000043
						}
					}
				]
			},
			{
				"as" : 13703,
				"relay" : 1,
				"bwa" : 819200,
				"bwc" : 657596,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000126,
					"pbg" : 0.000272,
					"pbm" : 0.000107
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 819200,
						"bwc" : 657596,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000126,
							"pbg" : 0.000272,
							"pbm" : 0.000107
						}
					}
				]
			},
			{
				"as" : 7657,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 2079,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000004
				},
				"countries" : [
					{
						"cc" : "NZ",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 2079,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000004
						}
					}
				]
			},
			{
				"as" : 14511,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 872,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000005
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 872,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000005
						}
					}
				]
			},
			{
				"as" : 5680,
				"relay" : 2,
				"bwa" : 1515520,
				"bwc" : 1264245,
				"roles" : {
					"middle" : 2,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000393,
					"pbm" : 0.000356,
					"pbg" : 0.000824
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 2,
						"bwa" : 1515520,
						"bwc" : 1264245,
						"roles" : {
							"middle" : 2,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000393,
							"pbm" : 0.000356,
							"pbg" : 0.000824
						}
					}
				]
			},
			{
				"as" : 13752,
				"relay" : 2,
				"bwa" : 221184,
				"bwc" : 7630,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000016,
					"pbm" : 0.000048
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 2,
						"bwa" : 221184,
						"bwc" : 7630,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000016,
							"pbm" : 0.000048
						}
					}
				]
			},
			{
				"as" : 12337,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 30772,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbe" : 0.000012
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 30772,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbe" : 0.000012
						}
					}
				]
			},
			{
				"as" : 9433,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 424080,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000044,
					"pbg" : 0.000094,
					"pbm" : 0.000037
				},
				"countries" : [
					{
						"cc" : "NZ",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 424080,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000044,
							"pbg" : 0.000094,
							"pbm" : 0.000037
						}
					}
				]
			},
			{
				"as" : 56813,
				"relay" : 1,
				"bwa" : 5242880,
				"bwc" : 5222747,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.003727,
					"pbg" : 0.008014,
					"pbm" : 0.003166
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 5242880,
						"bwc" : 5222747,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.003727,
							"pbg" : 0.008014,
							"pbm" : 0.003166
						}
					}
				]
			},
			{
				"as" : 45204,
				"relay" : 1,
				"bwa" : 4694913,
				"bwc" : 3577815,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000325,
					"pbg" : 0.000182,
					"pbm" : 0.000182,
					"pbe" : 0.000611
				},
				"countries" : [
					{
						"cc" : "MN",
						"relay" : 1,
						"bwa" : 4694913,
						"bwc" : 3577815,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000325,
							"pbg" : 0.000182,
							"pbm" : 0.000182,
							"pbe" : 0.000611
						}
					}
				]
			},
			{
				"as" : 48039,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 49841,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000043,
					"pbg" : 0.000092,
					"pbm" : 0.000036
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 49841,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000043,
							"pbg" : 0.000092,
							"pbm" : 0.000036
						}
					}
				]
			},
			{
				"as" : 33892,
				"relay" : 4,
				"bwa" : 9620993,
				"bwc" : 8271896,
				"roles" : {
					"middle" : 4,
					"dir" : 4,
					"guard" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.0018909999999999999,
					"pbm" : 0.00097,
					"pbg" : 0.00031,
					"pbe" : 0.004397
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 4,
						"bwa" : 9620993,
						"bwc" : 8271896,
						"roles" : {
							"middle" : 4,
							"dir" : 4,
							"guard" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.0018909999999999999,
							"pbm" : 0.00097,
							"pbg" : 0.00031,
							"pbe" : 0.004397
						}
					}
				]
			},
			{
				"as" : 260416,
				"relay" : 16,
				"bwa" : 29333598,
				"bwc" : 16191327,
				"roles" : {
					"middle" : 16,
					"guard" : 9,
					"dir" : 6,
					"exit" : 3
				},
				"flags" : {
					"fast" : 3,
					"fastStable" : 12,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.010397,
					"pbm" : 0.017325,
					"pbg" : 0.008988,
					"pbe" : 0.004875
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 13,
						"bwa" : 26875998,
						"bwc" : 15055864,
						"roles" : {
							"middle" : 13,
							"guard" : 7,
							"dir" : 5,
							"exit" : 3
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 10,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.009760999999999999,
							"pbm" : 0.015912,
							"pbg" : 0.008491,
							"pbe" : 0.004875
						}
					},
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 614400,
						"bwc" : 205396,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000154,
							"pbg" : 0.000331,
							"pbm" : 0.000131
						}
					},
					{
						"cc" : "IT",
						"relay" : 2,
						"bwa" : 1843200,
						"bwc" : 930067,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000482,
							"pbg" : 0.000166,
							"pbm" : 0.0012820000000000002
						}
					}
				]
			},
			{
				"as" : 98576,
				"relay" : 8,
				"bwa" : 472368,
				"bwc" : 99577,
				"roles" : {
					"middle" : 8,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"stable" : 2,
					"fast" : 1,
					"fastStable" : 3,
					"notFastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000034,
					"pbm" : 0.000091,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 8,
						"bwa" : 472368,
						"bwc" : 99577,
						"roles" : {
							"middle" : 8,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"stable" : 2,
							"fast" : 1,
							"fastStable" : 3,
							"notFastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000034,
							"pbm" : 0.000091,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 5421,
				"relay" : 1,
				"bwa" : 380738,
				"bwc" : 52562,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000049,
					"pbe" : 0.000146
				},
				"countries" : [
					{
						"cc" : "BG",
						"relay" : 1,
						"bwa" : 380738,
						"bwc" : 52562,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000049,
							"pbe" : 0.000146
						}
					}
				]
			},
			{
				"as" : 6720,
				"relay" : 4,
				"bwa" : 376954,
				"bwc" : 78279,
				"roles" : {
					"middle" : 4,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000018,
					"pbm" : 0.00004600000000000001,
					"pbe" : 0.000008
				},
				"countries" : [
					{
						"cc" : "IL",
						"relay" : 4,
						"bwa" : 376954,
						"bwc" : 78279,
						"roles" : {
							"middle" : 4,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000018,
							"pbm" : 0.00004600000000000001,
							"pbe" : 0.000008
						}
					}
				]
			},
			{
				"as" : 20207,
				"relay" : 1,
				"bwa" : 237568,
				"bwc" : 125185,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000018,
					"pbg" : 0.00001,
					"pbm" : 0.00001,
					"pbe" : 0.000035
				},
				"countries" : [
					{
						"cc" : "AR",
						"relay" : 1,
						"bwa" : 237568,
						"bwc" : 125185,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000018,
							"pbg" : 0.00001,
							"pbm" : 0.00001,
							"pbe" : 0.000035
						}
					}
				]
			},
			{
				"as" : 30006,
				"relay" : 2,
				"bwa" : 677888,
				"bwc" : 278041,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000108,
					"pbg" : 0.000054,
					"pbm" : 0.000089,
					"pbe" : 0.00018
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 677888,
						"bwc" : 278041,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000108,
							"pbg" : 0.000054,
							"pbm" : 0.000089,
							"pbe" : 0.00018
						}
					}
				]
			},
			{
				"as" : 16456,
				"relay" : 2,
				"bwa" : 47104,
				"bwc" : 36873,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000018
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 2,
						"bwa" : 47104,
						"bwc" : 36873,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000018
						}
					}
				]
			},
			{
				"as" : 8047,
				"relay" : 1,
				"bwa" : 76488,
				"bwc" : 7319,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000007
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 76488,
						"bwc" : 7319,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000007
						}
					}
				]
			},
			{
				"as" : 2510,
				"relay" : 1,
				"bwa" : 65536,
				"bwc" : 3170,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 65536,
						"bwc" : 3170,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							
						}
					}
				]
			},
			{
				"as" : 15962,
				"relay" : 1,
				"bwa" : 665600,
				"bwc" : 323484,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000179,
					"pbg" : 0.000385,
					"pbm" : 0.000152
				},
				"countries" : [
					{
						"cc" : "SK",
						"relay" : 1,
						"bwa" : 665600,
						"bwc" : 323484,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000179,
							"pbg" : 0.000385,
							"pbm" : 0.000152
						}
					}
				]
			},
			{
				"as" : 14,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 11608,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbm" : 0.000027
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 11608,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbm" : 0.000027
						}
					}
				]
			},
			{
				"as" : 67216,
				"relay" : 8,
				"bwa" : 6924831,
				"bwc" : 2079912,
				"roles" : {
					"guard" : 3,
					"middle" : 8,
					"exit" : 1,
					"dir" : 7
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 5
				},
				"probs" : {
					"pbr" : 0.001872,
					"pbg" : 0.0010860000000000002,
					"pbm" : 0.004492,
					"pbe" : 0.000034
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 8,
						"bwa" : 6924831,
						"bwc" : 2079912,
						"roles" : {
							"guard" : 3,
							"middle" : 8,
							"exit" : 1,
							"dir" : 7
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 5
						},
						"probs" : {
							"pbr" : 0.001872,
							"pbg" : 0.0010860000000000002,
							"pbm" : 0.004492,
							"pbe" : 0.000034
						}
					}
				]
			},
			{
				"as" : 373216,
				"relay" : 8,
				"bwa" : 13094070,
				"bwc" : 6490757,
				"roles" : {
					"guard" : 4,
					"middle" : 8,
					"dir" : 5,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 6,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.0037860000000000003,
					"pbg" : 0.002132,
					"pbm" : 0.005653,
					"pbe" : 0.003571
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 7,
						"bwa" : 12786870,
						"bwc" : 6217021,
						"roles" : {
							"guard" : 4,
							"middle" : 7,
							"dir" : 5,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 5,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.0037280000000000004,
							"pbg" : 0.002132,
							"pbm" : 0.0054800000000000005,
							"pbe" : 0.003571
						}
					},
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 307200,
						"bwc" : 273736,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000058,
							"pbm" : 0.000173
						}
					}
				]
			},
			{
				"as" : 53792,
				"relay" : 8,
				"bwa" : 5918882,
				"bwc" : 3610327,
				"roles" : {
					"guard" : 5,
					"middle" : 8,
					"dir" : 6,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 7,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.001686,
					"pbg" : 0.001116,
					"pbm" : 0.003935,
					"pbe" : 0.00001
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 5918882,
						"bwc" : 3610327,
						"roles" : {
							"guard" : 5,
							"middle" : 8,
							"dir" : 6,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 7,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.001686,
							"pbg" : 0.001116,
							"pbm" : 0.003935,
							"pbe" : 0.00001
						}
					}
				]
			},
			{
				"as" : 29587,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 56941,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "BE",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 56941,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 6855,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 2454,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "SK",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 2454,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 14051,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 188575,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000034,
					"pbm" : 0.000101
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 188575,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000034,
							"pbm" : 0.000101
						}
					}
				]
			},
			{
				"as" : 4922,
				"relay" : 1,
				"bwa" : 32768,
				"bwc" : 0,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 32768,
						"bwc" : 0,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 25408,
				"relay" : 1,
				"bwa" : 1374208,
				"bwc" : 1142742,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000676,
					"pbm" : 0.002027
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1374208,
						"bwc" : 1142742,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000676,
							"pbm" : 0.002027
						}
					}
				]
			},
			{
				"as" : 52736,
				"relay" : 4,
				"bwa" : 236629,
				"bwc" : 103637,
				"roles" : {
					"middle" : 4,
					"dir" : 3,
					"exit" : 1
				},
				"flags" : {
					"notFastStable" : 1,
					"fast" : 3
				},
				"probs" : {
					"pbr" : 0.000024,
					"pbm" : 0.000038,
					"pbe" : 0.000032
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 236629,
						"bwc" : 103637,
						"roles" : {
							"middle" : 4,
							"dir" : 3,
							"exit" : 1
						},
						"flags" : {
							"notFastStable" : 1,
							"fast" : 3
						},
						"probs" : {
							"pbr" : 0.000024,
							"pbm" : 0.000038,
							"pbe" : 0.000032
						}
					}
				]
			},
			{
				"as" : 760,
				"relay" : 1,
				"bwa" : 58368,
				"bwc" : 26118,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000004
				},
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 58368,
						"bwc" : 26118,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000004
						}
					}
				]
			},
			{
				"as" : 68022,
				"relay" : 2,
				"bwa" : 921600,
				"bwc" : 804304,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000183,
					"pbg" : 0.000392,
					"pbm" : 0.000155
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 921600,
						"bwc" : 804304,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000183,
							"pbg" : 0.000392,
							"pbm" : 0.000155
						}
					}
				]
			},
			{
				"as" : 54046,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 69179,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000023
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 69179,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000023
						}
					}
				]
			},
			{
				"as" : 33480,
				"relay" : 1,
				"bwa" : 393339,
				"bwc" : 151377,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000005,
					"pbg" : 0.00001,
					"pbm" : 0.000004
				},
				"countries" : [
					{
						"cc" : "IN",
						"relay" : 1,
						"bwa" : 393339,
						"bwc" : 151377,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000005,
							"pbg" : 0.00001,
							"pbm" : 0.000004
						}
					}
				]
			},
			{
				"as" : 126752,
				"relay" : 16,
				"bwa" : 4422445,
				"bwc" : 1212404,
				"roles" : {
					"middle" : 16,
					"dir" : 9,
					"exit" : 4,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 6,
					"fast" : 9,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00037699999999999995,
					"pbm" : 0.0009599999999999999,
					"pbe" : 0.00014399999999999998,
					"pbg" : 0.000026
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 16,
						"bwa" : 4422445,
						"bwc" : 1212404,
						"roles" : {
							"middle" : 16,
							"dir" : 9,
							"exit" : 4,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 6,
							"fast" : 9,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00037699999999999995,
							"pbm" : 0.0009599999999999999,
							"pbe" : 0.00014399999999999998,
							"pbg" : 0.000026
						}
					}
				]
			},
			{
				"as" : 16952,
				"relay" : 8,
				"bwa" : 2883229,
				"bwc" : 1470731,
				"roles" : {
					"middle" : 8,
					"exit" : 2,
					"dir" : 5,
					"guard" : 2
				},
				"flags" : {
					"fastStable" : 5,
					"fast" : 3
				},
				"probs" : {
					"pbr" : 0.0005099999999999999,
					"pbm" : 0.000535,
					"pbe" : 0.00008499999999999999,
					"pbg" : 0.00091
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 7,
						"bwa" : 2789021,
						"bwc" : 1455625,
						"roles" : {
							"middle" : 7,
							"guard" : 2,
							"dir" : 4,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 5,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.0005049999999999999,
							"pbm" : 0.000535,
							"pbg" : 0.00091,
							"pbe" : 0.000069
						}
					},
					{
						"cc" : "NO",
						"relay" : 1,
						"bwa" : 94208,
						"bwc" : 15106,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000005,
							"pbe" : 0.000016
						}
					}
				]
			},
			{
				"as" : 17486,
				"relay" : 1,
				"bwa" : 15113,
				"bwc" : 919,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000007
				},
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 1,
						"bwa" : 15113,
						"bwc" : 919,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000007
						}
					}
				]
			},
			{
				"as" : 77870,
				"relay" : 2,
				"bwa" : 512000,
				"bwc" : 249286,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000067,
					"pbg" : 0.000144,
					"pbm" : 0.000057
				},
				"countries" : [
					{
						"cc" : "RO",
						"relay" : 2,
						"bwa" : 512000,
						"bwc" : 249286,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000067,
							"pbg" : 0.000144,
							"pbm" : 0.000057
						}
					}
				]
			},
			{
				"as" : 399040,
				"relay" : 16,
				"bwa" : 13277276,
				"bwc" : 11150006,
				"roles" : {
					"middle" : 16,
					"guard" : 11,
					"dir" : 10,
					"exit" : 1
				},
				"flags" : {
					"fast" : 3,
					"fastStable" : 13
				},
				"probs" : {
					"pbr" : 0.004353,
					"pbm" : 0.009543000000000001,
					"pbg" : 0.003475,
					"pbe" : 0.000034
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 16,
						"bwa" : 13277276,
						"bwc" : 11150006,
						"roles" : {
							"middle" : 16,
							"guard" : 11,
							"dir" : 10,
							"exit" : 1
						},
						"flags" : {
							"fast" : 3,
							"fastStable" : 13
						},
						"probs" : {
							"pbr" : 0.004353,
							"pbm" : 0.009543000000000001,
							"pbg" : 0.003475,
							"pbe" : 0.000034
						}
					}
				]
			},
			{
				"as" : 18636,
				"relay" : 2,
				"bwa" : 1358946,
				"bwc" : 436381,
				"roles" : {
					"middle" : 2,
					"dir" : 1,
					"guard" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000049,
					"pbm" : 0.000048,
					"pbg" : 0.000099
				},
				"countries" : [
					{
						"cc" : "KR",
						"relay" : 2,
						"bwa" : 1358946,
						"bwc" : 436381,
						"roles" : {
							"middle" : 2,
							"dir" : 1,
							"guard" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000049,
							"pbm" : 0.000048,
							"pbg" : 0.000099
						}
					}
				]
			},
			{
				"as" : 78738,
				"relay" : 2,
				"bwa" : 13362930,
				"bwc" : 12033991,
				"roles" : {
					"middle" : 2,
					"guard" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.003584,
					"pbm" : 0.003056,
					"pbg" : 0.007696
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 2,
						"bwa" : 13362930,
						"bwc" : 12033991,
						"roles" : {
							"middle" : 2,
							"guard" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.003584,
							"pbm" : 0.003056,
							"pbg" : 0.007696
						}
					}
				]
			},
			{
				"as" : 7456,
				"relay" : 1,
				"bwa" : 256000,
				"bwc" : 53655,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000054,
					"pbm" : 0.000163
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 256000,
						"bwc" : 53655,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000054,
							"pbm" : 0.000163
						}
					}
				]
			},
			{
				"as" : 5028,
				"relay" : 2,
				"bwa" : 235563,
				"bwc" : 13321,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000011,
					"pbm" : 0.000034
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 2,
						"bwa" : 235563,
						"bwc" : 13321,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbm" : 0.000034
						}
					}
				]
			},
			{
				"as" : 8612,
				"relay" : 1,
				"bwa" : 63648,
				"bwc" : 1200,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000005
				},
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 1,
						"bwa" : 63648,
						"bwc" : 1200,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000005
						}
					}
				]
			},
			{
				"as" : 24958,
				"relay" : 2,
				"bwa" : 121856,
				"bwc" : 43689,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000019
				},
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 2,
						"bwa" : 121856,
						"bwc" : 43689,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000019
						}
					}
				]
			},
			{
				"as" : 15517,
				"relay" : 1,
				"bwa" : 93480,
				"bwc" : 1050,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 1,
						"bwa" : 93480,
						"bwc" : 1050,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 50472,
				"relay" : 1,
				"bwa" : 4798066,
				"bwc" : 1708201,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"authority" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbg" : 0.000006,
					"pbm" : 0.000003
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 4798066,
						"bwc" : 1708201,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"authority" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbg" : 0.000006,
							"pbm" : 0.000003
						}
					}
				]
			},
			{
				"as" : 8877,
				"relay" : 1,
				"bwa" : 240640,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000023,
					"pbm" : 0.000068
				},
				"countries" : [
					{
						"cc" : "BG",
						"relay" : 1,
						"bwa" : 240640,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000023,
							"pbm" : 0.000068
						}
					}
				]
			},
			{
				"as" : 83572,
				"relay" : 2,
				"bwa" : 425916,
				"bwc" : 33297,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000019999999999999998,
					"pbg" : 0.000029,
					"pbm" : 0.000031
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 425916,
						"bwc" : 33297,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000019999999999999998,
							"pbg" : 0.000029,
							"pbm" : 0.000031
						}
					}
				]
			},
			{
				"as" : 15682,
				"relay" : 1,
				"bwa" : 307200,
				"bwc" : 198786,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000046,
					"pbg" : 0.000099,
					"pbm" : 0.000039
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 307200,
						"bwc" : 198786,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000046,
							"pbg" : 0.000099,
							"pbm" : 0.000039
						}
					}
				]
			},
			{
				"as" : 106680,
				"relay" : 2,
				"bwa" : 135168,
				"bwc" : 42389,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000016,
					"pbm" : 0.000048
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 135168,
						"bwc" : 42389,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000016,
							"pbm" : 0.000048
						}
					}
				]
			},
			{
				"as" : 36212,
				"relay" : 2,
				"bwa" : 672282,
				"bwc" : 87517,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000029999999999999997,
					"pbg" : 0.000066,
					"pbm" : 0.000026000000000000002
				},
				"countries" : [
					{
						"cc" : "SG",
						"relay" : 2,
						"bwa" : 672282,
						"bwc" : 87517,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000029999999999999997,
							"pbg" : 0.000066,
							"pbm" : 0.000026000000000000002
						}
					}
				]
			},
			{
				"as" : 40712,
				"relay" : 8,
				"bwa" : 1487024,
				"bwc" : 367876,
				"roles" : {
					"middle" : 8,
					"dir" : 3
				},
				"flags" : {
					"fastStable" : 5,
					"stable" : 3
				},
				"probs" : {
					"pbr" : 0.000137,
					"pbm" : 0.000407
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 8,
						"bwa" : 1487024,
						"bwc" : 367876,
						"roles" : {
							"middle" : 8,
							"dir" : 3
						},
						"flags" : {
							"fastStable" : 5,
							"stable" : 3
						},
						"probs" : {
							"pbr" : 0.000137,
							"pbm" : 0.000407
						}
					}
				]
			},
			{
				"as" : 12993,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 467196,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00016,
					"pbg" : 0.000343,
					"pbm" : 0.000136
				},
				"countries" : [
					{
						"cc" : "LV",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 467196,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00016,
							"pbg" : 0.000343,
							"pbm" : 0.000136
						}
					}
				]
			},
			{
				"as" : 15085,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 10445,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 10445,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 3549,
				"relay" : 1,
				"bwa" : 1112044,
				"bwc" : 737122,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00026,
					"pbg" : 0.000146,
					"pbm" : 0.000146,
					"pbe" : 0.000489
				},
				"countries" : [
					{
						"cc" : "AR",
						"relay" : 1,
						"bwa" : 1112044,
						"bwc" : 737122,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00026,
							"pbg" : 0.000146,
							"pbm" : 0.000146,
							"pbe" : 0.000489
						}
					}
				]
			},
			{
				"as" : 9790,
				"relay" : 1,
				"bwa" : 132379,
				"bwc" : 5369,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000017
				},
				"countries" : [
					{
						"cc" : "NZ",
						"relay" : 1,
						"bwa" : 132379,
						"bwc" : 5369,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000017
						}
					}
				]
			},
			{
				"as" : 21932,
				"relay" : 4,
				"bwa" : 1303304,
				"bwc" : 185027,
				"roles" : {
					"middle" : 4,
					"dir" : 3,
					"exit" : 1
				},
				"flags" : {
					"fast" : 4
				},
				"probs" : {
					"pbr" : 0.000345,
					"pbm" : 0.000044,
					"pbe" : 0.000989
				},
				"countries" : [
					{
						"cc" : "HU",
						"relay" : 4,
						"bwa" : 1303304,
						"bwc" : 185027,
						"roles" : {
							"middle" : 4,
							"dir" : 3,
							"exit" : 1
						},
						"flags" : {
							"fast" : 4
						},
						"probs" : {
							"pbr" : 0.000345,
							"pbm" : 0.000044,
							"pbe" : 0.000989
						}
					}
				]
			},
			{
				"as" : 3226,
				"relay" : 1,
				"bwa" : 303668,
				"bwc" : 80768,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000025,
					"pbe" : 0.000074
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 303668,
						"bwc" : 80768,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000025,
							"pbe" : 0.000074
						}
					}
				]
			},
			{
				"as" : 65226,
				"relay" : 2,
				"bwa" : 2797543,
				"bwc" : 2394717,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000815,
					"pbg" : 0.001542,
					"pbm" : 0.000904
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 2,
						"bwa" : 2797543,
						"bwc" : 2394717,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000815,
							"pbg" : 0.001542,
							"pbm" : 0.000904
						}
					}
				]
			},
			{
				"as" : 38330,
				"relay" : 2,
				"bwa" : 544768,
				"bwc" : 247795,
				"roles" : {
					"middle" : 2,
					"guard" : 1,
					"dir" : 1
				},
				"flags" : {
					"stable" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000066,
					"pbm" : 0.000062,
					"pbg" : 0.000135
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 544768,
						"bwc" : 247795,
						"roles" : {
							"middle" : 2,
							"guard" : 1,
							"dir" : 1
						},
						"flags" : {
							"stable" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000066,
							"pbm" : 0.000062,
							"pbg" : 0.000135
						}
					}
				]
			},
			{
				"as" : 12513,
				"relay" : 1,
				"bwa" : 35696,
				"bwc" : 1862,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 35696,
						"bwc" : 1862,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							
						}
					}
				]
			},
			{
				"as" : 21261,
				"relay" : 1,
				"bwa" : 4096000,
				"bwc" : 3970656,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.001329,
					"pbg" : 0.000745,
					"pbm" : 0.000745,
					"pbe" : 0.002498
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 4096000,
						"bwc" : 3970656,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001329,
							"pbg" : 0.000745,
							"pbm" : 0.000745,
							"pbe" : 0.002498
						}
					}
				]
			},
			{
				"as" : 24956,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 804,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 804,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 11234,
				"relay" : 2,
				"bwa" : 101710,
				"bwc" : 8927,
				"roles" : {
					"middle" : 2,
					"exit" : 2
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbe" : 0.000008
				},
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 2,
						"bwa" : 101710,
						"bwc" : 8927,
						"roles" : {
							"middle" : 2,
							"exit" : 2
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbe" : 0.000008
						}
					}
				]
			},
			{
				"as" : 21788,
				"relay" : 1,
				"bwa" : 819200,
				"bwc" : 516295,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000274,
					"pbe" : 0.000821
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 819200,
						"bwc" : 516295,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000274,
							"pbe" : 0.000821
						}
					}
				]
			},
			{
				"as" : 13189,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 294888,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000788,
					"pbg" : 0.001695,
					"pbm" : 0.00067
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 294888,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000788,
							"pbg" : 0.001695,
							"pbm" : 0.00067
						}
					}
				]
			},
			{
				"as" : 2860,
				"relay" : 1,
				"bwa" : 55922,
				"bwc" : 5111,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000005
				},
				"countries" : [
					{
						"cc" : "PT",
						"relay" : 1,
						"bwa" : 55922,
						"bwc" : 5111,
						"roles" : {
							"middle" : 1,
								"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000005
						}
					}
				]
			},
			{
				"as" : 114338,
				"relay" : 2,
				"bwa" : 1744442,
				"bwc" : 1644504,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"dir" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00014199999999999998,
					"pbg" : 0.000298,
					"pbm" : 0.000118,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 2,
						"bwa" : 1744442,
						"bwc" : 1644504,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"dir" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00014199999999999998,
							"pbg" : 0.000298,
							"pbm" : 0.000118,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 4412,
				"relay" : 4,
				"bwa" : 3232622,
				"bwc" : 2830539,
				"roles" : {
					"middle" : 4,
					"dir" : 3,
					"guard" : 1
				},
				"flags" : {
					"fast" : 3,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.0006050000000000001,
					"pbm" : 0.000711,
					"pbg" : 0.001104
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 4,
						"bwa" : 3232622,
						"bwc" : 2830539,
						"roles" : {
							"middle" : 4,
							"dir" : 3,
							"guard" : 1
						},
						"flags" : {
							"fast" : 3,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.0006050000000000001,
							"pbm" : 0.000711,
							"pbg" : 0.001104
						}
					}
				]
			},
			{
				"as" : 4565,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 3306,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000008
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 3306,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000008
						}
					}
				]
			},
			{
				"as" : 1133,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 33666,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbm" : 0.000027
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 33666,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbm" : 0.000027
						}
					}
				]
			},
			{
				"as" : 34743,
				"relay" : 1,
				"bwa" : 98304,
				"bwc" : 1089,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000007,
					"pbm" : 0.000022
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 98304,
						"bwc" : 1089,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000007,
							"pbm" : 0.000022
						}
					}
				]
			},
			{
				"as" : 34224,
				"relay" : 1,
				"bwa" : 604939,
				"bwc" : 212677,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000026,
					"pbg" : 0.000056,
					"pbm" : 0.000022
				},
				"countries" : [
					{
						"cc" : "BG",
						"relay" : 1,
						"bwa" : 604939,
						"bwc" : 212677,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000026,
							"pbg" : 0.000056,
							"pbm" : 0.000022
						}
					}
				]
			},
			{
				"as" : 8737,
				"relay" : 1,
				"bwa" : 174785,
				"bwc" : 59251,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000011,
					"pbm" : 0.000034
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 174785,
						"bwc" : 59251,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbm" : 0.000034
						}
					}
				]
			},
			{
				"as" : 25668,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 36457,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000018
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 36457,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000018
						}
					}
				]
			},
			{
				"as" : 158604,
				"relay" : 4,
				"bwa" : 2107804,
				"bwc" : 1198566,
				"roles" : {
					"guard" : 2,
					"middle" : 4,
					"exit" : 2,
					"dir" : 3
				},
				"flags" : {
					"fastStable" : 2,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000552,
					"pbg" : 0.000175,
					"pbm" : 0.000258,
					"pbe" : 0.0012230000000000001
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 4,
						"bwa" : 2107804,
						"bwc" : 1198566,
						"roles" : {
							"guard" : 2,
							"middle" : 4,
							"exit" : 2,
							"dir" : 3
						},
						"flags" : {
							"fastStable" : 2,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000552,
							"pbg" : 0.000175,
							"pbm" : 0.000258,
							"pbe" : 0.0012230000000000001
						}
					}
				]
			},
			{
				"as" : 11424,
				"relay" : 4,
				"bwa" : 1929216,
				"bwc" : 1009301,
				"roles" : {
					"guard" : 2,
					"middle" : 4,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 2,
					"fast" : 1,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.00017,
					"pbg" : 0.000263,
					"pbm" : 0.00024,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 4,
						"bwa" : 1929216,
						"bwc" : 1009301,
						"roles" : {
							"guard" : 2,
							"middle" : 4,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 2,
							"fast" : 1,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.00017,
							"pbg" : 0.000263,
							"pbm" : 0.00024,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 2534,
				"relay" : 2,
				"bwa" : 27435,
				"bwc" : 560,
				"roles" : {
					"middle" : 2
				},
				"flags" : {
					"notFastStable" : 1,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbm" : 0.000012
				},
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 2,
						"bwa" : 27435,
						"bwc" : 560,
						"roles" : {
							"middle" : 2
						},
						"flags" : {
							"notFastStable" : 1,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000012
						}
					}
				]
			},
			{
				"as" : 51953,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 386632,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000106,
					"pbm" : 0.000319
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 386632,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000106,
							"pbm" : 0.000319
						}
					}
				]
			},
			{
				"as" : 182184,
				"relay" : 8,
				"bwa" : 1058461,
				"bwc" : 437275,
				"roles" : {
					"middle" : 8,
					"dir" : 5,
					"exit" : 1
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 6
				},
				"probs" : {
					"pbr" : 0.00009099999999999999,
					"pbm" : 0.00021,
					"pbe" : 0.000064
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 1058461,
						"bwc" : 437275,
						"roles" : {
							"middle" : 8,
							"dir" : 5,
							"exit" : 1
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 6
						},
						"probs" : {
							"pbr" : 0.00009099999999999999,
							"pbm" : 0.00021,
							"pbe" : 0.000064
						}
					}
				]
			},
			{
				"as" : 9506,
				"relay" : 1,
				"bwa" : 79714,
				"bwc" : 20035,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000004
				},
				"countries" : [
					{
						"cc" : "SG",
						"relay" : 1,
						"bwa" : 79714,
						"bwc" : 20035,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000004
						}
					}
				]
			},
			{
				"as" : 30217,
				"relay" : 1,
				"bwa" : 5242880,
				"bwc" : 2626538,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.001582,
					"pbe" : 0.004747
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 5242880,
						"bwc" : 2626538,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001582,
							"pbe" : 0.004747
						}
					}
				]
			},
			{
				"as" : 10594,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 43004,
				"relay" : 2,
				"bwa" : 419760,
				"bwc" : 244739,
				"roles" : {
					"middle" : 2,
					"guard" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000049,
					"pbm" : 0.000048,
					"pbg" : 0.000098
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 2,
						"bwa" : 419760,
						"bwc" : 244739,
						"roles" : {
							"middle" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000049,
							"pbm" : 0.000048,
							"pbg" : 0.000098
						}
					}
				]
			},
			{
				"as" : 44616,
				"relay" : 8,
				"bwa" : 4467712,
				"bwc" : 3368899,
				"roles" : {
					"guard" : 4,
					"middle" : 8,
					"dir" : 4,
					"exit" : 2
				},
				"flags" : {
					"fastStable" : 4,
					"fast" : 2,
					"notFastStable" : 2
				},
				"probs" : {
					"pbr" : 0.001273,
					"pbg" : 0.001508,
					"pbm" : 0.0022879999999999997,
					"pbe" : 0.000018
				},
				"countries" : [
					{
						"cc" : "LU",
						"relay" : 8,
						"bwa" : 4467712,
						"bwc" : 3368899,
						"roles" : {
							"guard" : 4,
							"middle" : 8,
							"dir" : 4,
							"exit" : 2
						},
						"flags" : {
							"fastStable" : 4,
							"fast" : 2,
							"notFastStable" : 2
						},
						"probs" : {
							"pbr" : 0.001273,
							"pbg" : 0.001508,
							"pbm" : 0.0022879999999999997,
							"pbe" : 0.000018
						}
					}
				]
			},
			{
				"as" : 31595,
				"relay" : 1,
				"bwa" : 61440,
				"bwc" : 12612,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000005,
					"pbm" : 0.000014
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 61440,
						"bwc" : 12612,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000005,
							"pbm" : 0.000014
						}
					}
				]
			},
			{
				"as" : 45032,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 3215,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000014,
					"pbe" : 0.000043
				},
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 3215,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000014,
							"pbe" : 0.000043
						}
					}
				]
			},
			{
				"as" : 35022,
				"relay" : 2,
				"bwa" : 1067665,
				"bwc" : 98929,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000047000000000000004,
					"pbg" : 0.000078,
					"pbm" : 0.00006500000000000001
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 2,
						"bwa" : 1067665,
						"bwc" : 98929,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000047000000000000004,
							"pbg" : 0.000078,
							"pbm" : 0.00006500000000000001
						}
					}
				]
			},
			{
				"as" : 8331,
				"relay" : 1,
				"bwa" : 5120000,
				"bwc" : 5050772,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.004082,
					"pbg" : 0.008778,
					"pbm" : 0.003468
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 5120000,
						"bwc" : 5050772,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.004082,
							"pbg" : 0.008778,
							"pbm" : 0.003468
						}
					}
				]
			},
			{
				"as" : 35339,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 3539,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 3539,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 13060,
				"relay" : 4,
				"bwa" : 5383092,
				"bwc" : 2181447,
				"roles" : {
					"middle" : 4,
					"dir" : 3,
					"guard" : 2
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 3,
					"authority" : 1
				},
				"probs" : {
					"pbr" : 0.000029,
					"pbm" : 0.00005,
					"pbg" : 0.000039
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 4,
						"bwa" : 5383092,
						"bwc" : 2181447,
						"roles" : {
							"middle" : 4,
							"dir" : 3,
							"guard" : 2
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 3,
							"authority" : 1
						},
						"probs" : {
							"pbr" : 0.000029,
							"pbm" : 0.00005,
							"pbg" : 0.000039
						}
					}
				]
			},
			{
				"as" : 197226,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 307959,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000188,
					"pbg" : 0.000404,
					"pbm" : 0.00016
				},
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 307959,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000188,
							"pbg" : 0.000404,
							"pbm" : 0.00016
						}
					}
				]
			},
			{
				"as" : 8559,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 963049,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000408,
					"pbg" : 0.000878,
					"pbm" : 0.000347
				},
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 963049,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000408,
							"pbg" : 0.000878,
							"pbm" : 0.000347
						}
					}
				]
			},
			{
				"as" : 130208,
				"relay" : 8,
				"bwa" : 18485214,
				"bwc" : 12413796,
				"roles" : {
					"middle" : 8,
					"exit" : 2,
					"guard" : 4,
					"dir" : 3
				},
				"flags" : {
					"stable" : 2,
					"fastStable" : 5,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.004155000000000001,
					"pbm" : 0.002176,
					"pbe" : 0.004889,
					"pbg" : 0.0054009999999999996
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 6,
						"bwa" : 16314334,
						"bwc" : 10401991,
						"roles" : {
							"middle" : 6,
							"exit" : 2,
							"guard" : 3,
							"dir" : 2
						},
						"flags" : {
							"stable" : 2,
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.0037350000000000005,
							"pbm" : 0.001791,
							"pbe" : 0.004889,
							"pbg" : 0.0045260000000000005
						}
					},
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 122880,
						"bwc" : 50661,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000013,
							"pbm" : 0.000039
						}
					},
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 2048000,
						"bwc" : 1961144,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000407,
							"pbg" : 0.000875,
							"pbm" : 0.000346
						}
					}
				]
			},
			{
				"as" : 24560,
				"relay" : 1,
				"bwa" : 25600,
				"bwc" : 93,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "IN",
						"relay" : 1,
						"bwa" : 25600,
						"bwc" : 93,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 12635,
				"relay" : 1,
				"bwa" : 71968,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbm" : 0.000012
				},
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 71968,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000012
						}
					}
				]
			},
			{
				"as" : 154096,
				"relay" : 8,
				"bwa" : 3852040,
				"bwc" : 2487615,
				"roles" : {
					"middle" : 8,
					"dir" : 6,
					"guard" : 1
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 6
				},
				"probs" : {
					"pbr" : 0.000803,
					"pbm" : 0.0015519999999999998,
					"pbg" : 0.000856
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 3852040,
						"bwc" : 2487615,
						"roles" : {
							"middle" : 8,
							"dir" : 6,
							"guard" : 1
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 6
						},
						"probs" : {
							"pbr" : 0.000803,
							"pbm" : 0.0015519999999999998,
							"pbg" : 0.000856
						}
					}
				]
			},
			{
				"as" : 26560,
				"relay" : 8,
				"bwa" : 1724999,
				"bwc" : 495426,
				"roles" : {
					"middle" : 8,
					"dir" : 3
				},
				"flags" : {
					"fast" : 6,
					"notFastStable" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000211,
					"pbm" : 0.0006330000000000001
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 1724999,
						"bwc" : 495426,
						"roles" : {
							"middle" : 8,
							"dir" : 3
						},
						"flags" : {
							"fast" : 6,
							"notFastStable" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000211,
							"pbm" : 0.0006330000000000001
						}
					}
				]
			},
			{
				"as" : 116676,
				"relay" : 4,
				"bwa" : 1761280,
				"bwc" : 1298897,
				"roles" : {
					"middle" : 4,
					"guard" : 3,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"stable" : 1,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.000353,
					"pbm" : 0.000277,
					"pbg" : 0.000588,
					"pbe" : 0.000196
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 4,
						"bwa" : 1761280,
						"bwc" : 1298897,
						"roles" : {
							"middle" : 4,
							"guard" : 3,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"stable" : 1,
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.000353,
							"pbm" : 0.000277,
							"pbg" : 0.000588,
							"pbe" : 0.000196
						}
					}
				]
			},
			{
				"as" : 1221,
				"relay" : 1,
				"bwa" : 155877,
				"bwc" : 6940,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000018
				},
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 1,
						"bwa" : 155877,
						"bwc" : 6940,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000018
						}
					}
				]
			},
			{
				"as" : 2819,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 119500,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000046,
					"pbg" : 0.000099,
					"pbm" : 0.000039
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 119500,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000046,
							"pbg" : 0.000099,
							"pbm" : 0.000039
						}
					}
				]
			},
			{
				"as" : 30475,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 50570,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00001,
					"pbm" : 0.000029
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 50570,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00001,
							"pbm" : 0.000029
						}
					}
				]
			},
			{
				"as" : 18016,
				"relay" : 2,
				"bwa" : 2388536,
				"bwc" : 696891,
				"roles" : {
					"middle" : 2,
					"exit" : 2,
					"guard" : 1,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000107,
					"pbe" : 0.000204,
					"pbg" : 0.000058,
					"pbm" : 0.000058
				},
				"countries" : [
					{
						"cc" : "LU",
						"relay" : 2,
						"bwa" : 2388536,
						"bwc" : 696891,
						"roles" : {
							"middle" : 2,
							"exit" : 2,
							"guard" : 1,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000107,
							"pbe" : 0.000204,
							"pbg" : 0.000058,
							"pbm" : 0.000058
						}
					}
				]
			},
			{
				"as" : 33724,
				"relay" : 1,
				"bwa" : 66560,
				"bwc" : 4230,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000005,
					"pbm" : 0.000015
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 66560,
						"bwc" : 4230,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000005,
							"pbm" : 0.000015
						}
					}
				]
			},
			{
				"as" : 12778,
				"relay" : 2,
				"bwa" : 76841,
				"bwc" : 20893,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"stable" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 76841,
						"bwc" : 20893,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"stable" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 13204,
				"relay" : 4,
				"bwa" : 1779304,
				"bwc" : 736513,
				"roles" : {
					"guard" : 1,
					"middle" : 4,
					"dir" : 4,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.00016,
					"pbg" : 0.000054,
					"pbm" : 0.00039000000000000005,
					"pbe" : 0.000037
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 4,
						"bwa" : 1779304,
						"bwc" : 736513,
						"roles" : {
							"guard" : 1,
							"middle" : 4,
							"dir" : 4,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.00016,
							"pbg" : 0.000054,
							"pbm" : 0.00039000000000000005,
							"pbe" : 0.000037
						}
					}
				]
			},
			{
				"as" : 58472,
				"relay" : 4,
				"bwa" : 2989871,
				"bwc" : 982394,
				"roles" : {
					"middle" : 4,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"stable" : 1,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.000128,
					"pbm" : 0.000155,
					"pbg" : 0.000229
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 2989871,
						"bwc" : 982394,
						"roles" : {
							"middle" : 4,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"stable" : 1,
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.000128,
							"pbm" : 0.000155,
							"pbg" : 0.000229
						}
					}
				]
			},
			{
				"as" : 12992,
				"relay" : 4,
				"bwa" : 52028589,
				"bwc" : 44135439,
				"roles" : {
					"guard" : 4,
					"middle" : 4,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.010734,
					"pbg" : 0.023085,
					"pbm" : 0.00912
				},
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 4,
						"bwa" : 52028589,
						"bwc" : 44135439,
						"roles" : {
							"guard" : 4,
							"middle" : 4,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.010734,
							"pbg" : 0.023085,
							"pbm" : 0.00912
						}
					}
				]
			},
			{
				"as" : 142648,
				"relay" : 4,
				"bwa" : 4531373,
				"bwc" : 2397008,
				"roles" : {
					"middle" : 4,
					"exit" : 3,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.00106,
					"pbe" : 0.002162,
					"pbg" : 0.000728,
					"pbm" : 0.000288
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 4,
						"bwa" : 4531373,
						"bwc" : 2397008,
						"roles" : {
							"middle" : 4,
							"exit" : 3,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.00106,
							"pbe" : 0.002162,
							"pbg" : 0.000728,
							"pbm" : 0.000288
						}
					}
				]
			},
			{
				"as" : 11404,
				"relay" : 1,
				"bwa" : 5887373,
				"bwc" : 3823106,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.001908,
					"pbg" : 0.001069,
					"pbm" : 0.001069,
					"pbe" : 0.003584
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 5887373,
						"bwc" : 3823106,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001908,
							"pbg" : 0.001069,
							"pbm" : 0.001069,
							"pbe" : 0.003584
						}
					}
				]
			},
			{
				"as" : 199520,
				"relay" : 8,
				"bwa" : 12967936,
				"bwc" : 9727052,
				"roles" : {
					"guard" : 4,
					"middle" : 8,
					"exit" : 1,
					"dir" : 5
				},
				"flags" : {
					"fastStable" : 6,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.00455,
					"pbg" : 0.002758,
					"pbm" : 0.010785000000000001,
					"pbe" : 0.000105
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 12967936,
						"bwc" : 9727052,
						"roles" : {
							"guard" : 4,
							"middle" : 8,
							"exit" : 1,
							"dir" : 5
						},
						"flags" : {
							"fastStable" : 6,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.00455,
							"pbg" : 0.002758,
							"pbm" : 0.010785000000000001,
							"pbe" : 0.000105
						}
					}
				]
			},
			{
				"as" : 17858,
				"relay" : 1,
				"bwa" : 188815,
				"bwc" : 18182,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbe" : 0.000023
				},
				"countries" : [
					{
						"cc" : "KR",
						"relay" : 1,
						"bwa" : 188815,
						"bwc" : 18182,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbe" : 0.000023
						}
					}
				]
			},
			{
				"as" : 34757,
				"relay" : 1,
				"bwa" : 179794,
				"bwc" : 1477,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 179794,
						"bwc" : 1477,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 394844,
				"relay" : 2,
				"bwa" : 225280,
				"bwc" : 54819,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000019999999999999998,
					"pbm" : 0.000059999999999999995
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 2,
						"bwa" : 225280,
						"bwc" : 54819,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000019999999999999998,
							"pbm" : 0.000059999999999999995
						}
					}
				]
			},
			{
				"as" : 48683,
				"relay" : 1,
				"bwa" : 136192,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbe" : 0.000026
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 136192,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbe" : 0.000026
						}
					}
				]
			},
			{
				"as" : 9737,
				"relay" : 1,
				"bwa" : 50342,
				"bwc" : 14489,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "TH",
						"relay" : 1,
						"bwa" : 50342,
						"bwc" : 14489,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 31122,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 450015,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000072,
					"pbg" : 0.00004,
					"pbm" : 0.00004,
					"pbe" : 0.000135
				},
				"countries" : [
					{
						"cc" : "IE",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 450015,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000072,
							"pbg" : 0.00004,
							"pbm" : 0.00004,
							"pbe" : 0.000135
						}
					}
				]
			},
			{
				"as" : 5410,
				"relay" : 1,
				"bwa" : 62317,
				"bwc" : 23368,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000005
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 62317,
						"bwc" : 23368,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000005
						}
					}
				]
			},
			{
				"as" : 10064,
				"relay" : 4,
				"bwa" : 323234,
				"bwc" : 119740,
				"roles" : {
					"middle" : 4,
					"exit" : 3,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000027000000000000002,
					"pbm" : 0.000004,
					"pbe" : 0.000079
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 2,
						"bwa" : 118434,
						"bwc" : 16953,
						"roles" : {
							"middle" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000004,
							"pbe" : 0.000009
						}
					},
					{
						"cc" : "CN",
						"relay" : 2,
						"bwa" : 204800,
						"bwc" : 102787,
						"roles" : {
							"middle" : 2,
							"exit" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000023000000000000003,
							"pbe" : 0.00007000000000000001
						}
					}
				]
			},
			{
				"as" : 18396,
				"relay" : 2,
				"bwa" : 151695,
				"bwc" : 32090,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000007
				},
				"countries" : [
					{
						"cc" : "KZ",
						"relay" : 2,
						"bwa" : 151695,
						"bwc" : 32090,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000007
						}
					}
				]
			},
			{
				"as" : 20495,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 58582,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbe" : 0.000027
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 58582,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbe" : 0.000027
						}
					}
				]
			},
			{
				"as" : 45758,
				"relay" : 1,
				"bwa" : 45000,
				"bwc" : 371,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000002
				},
				"countries" : [
					{
						"cc" : "TH",
						"relay" : 1,
						"bwa" : 45000,
						"bwc" : 371,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000002
						}
					}
				]
			},
			{
				"as" : 13489,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 5934,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "CO",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 5934,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 145408,
				"relay" : 4,
				"bwa" : 2001772,
				"bwc" : 1060657,
				"roles" : {
					"guard" : 1,
					"middle" : 4,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.00022600000000000002,
					"pbg" : 0.000102,
					"pbm" : 0.0005729999999999999
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 2001772,
						"bwc" : 1060657,
						"roles" : {
							"guard" : 1,
							"middle" : 4,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.00022600000000000002,
							"pbg" : 0.000102,
							"pbm" : 0.0005729999999999999
						}
					}
				]
			},
			{
				"as" : 43688,
				"relay" : 2,
				"bwa" : 620446,
				"bwc" : 92949,
				"roles" : {
					"middle" : 2
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000037,
					"pbm" : 0.000112
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 620446,
						"bwc" : 92949,
						"roles" : {
							"middle" : 2
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000037,
							"pbm" : 0.000112
						}
					}
				]
			},
			{
				"as" : 35632,
				"relay" : 1,
				"bwa" : 44314,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 44314,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 5669,
				"relay" : 1,
				"bwa" : 24576,
				"bwc" : 548,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 24576,
						"bwc" : 548,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 54640,
				"relay" : 8,
				"bwa" : 1516739,
				"bwc" : 339791,
				"roles" : {
					"middle" : 8,
					"dir" : 7,
					"exit" : 1
				},
				"flags" : {
					"fast" : 4,
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000248,
					"pbm" : 0.000188,
					"pbe" : 0.000555
				},
				"countries" : [
					{
						"cc" : "SK",
						"relay" : 1,
						"bwa" : 196608,
						"bwc" : 11494,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000007,
							"pbm" : 0.000021
						}
					},
					{
						"cc" : "AT",
						"relay" : 3,
						"bwa" : 721304,
						"bwc" : 146950,
						"roles" : {
							"middle" : 3,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 2,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000202,
							"pbm" : 0.000049999999999999996,
							"pbe" : 0.000555
						}
					},
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 460587,
						"bwc" : 163522,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000029,
							"pbm" : 0.000086
						}
					},
					{
						"cc" : "CH",
						"relay" : 1,
						"bwa" : 76800,
						"bwc" : 6372,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000018
						}
					},
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 61440,
						"bwc" : 11453,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000013
						}
					}
				]
			},
			{
				"as" : 34779,
				"relay" : 1,
				"bwa" : 246733,
				"bwc" : 13128,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000054,
					"pbe" : 0.000161
				},
				"countries" : [
					{
						"cc" : "SI",
						"relay" : 1,
						"bwa" : 246733,
						"bwc" : 13128,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000054,
							"pbe" : 0.000161
						}
					}
				]
			},
			{
				"as" : 14130,
				"relay" : 2,
				"bwa" : 4643840,
				"bwc" : 4448974,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.001526,
					"pbg" : 0.000854,
					"pbm" : 0.000863,
					"pbe" : 0.002862
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 4643840,
						"bwc" : 4448974,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.001526,
							"pbg" : 0.000854,
							"pbm" : 0.000863,
							"pbe" : 0.002862
						}
					}
				]
			},
			{
				"as" : 3352,
				"relay" : 1,
				"bwa" : 332800,
				"bwc" : 52774,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000043,
					"pbg" : 0.000092,
					"pbm" : 0.000036
				},
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 1,
						"bwa" : 332800,
						"bwc" : 52774,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000043,
							"pbg" : 0.000092,
							"pbm" : 0.000036
						}
					}
				]
			},
			{
				"as" : 83300,
				"relay" : 4,
				"bwa" : 1182753,
				"bwc" : 714087,
				"roles" : {
					"middle" : 4,
					"dir" : 4,
					"guard" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.00022899999999999998,
					"pbm" : 0.000554,
					"pbg" : 0.000133
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 1182753,
						"bwc" : 714087,
						"roles" : {
							"middle" : 4,
							"dir" : 4,
							"guard" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.00022899999999999998,
							"pbm" : 0.000554,
							"pbg" : 0.000133
						}
					}
				]
			},
			{
				"as" : 24544,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 59843,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbe" : 0.000024
				},
				"countries" : [
					{
						"cc" : "HK",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 59843,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbe" : 0.000024
						}
					}
				]
			},
			{
				"as" : 41476,
				"relay" : 2,
				"bwa" : 1175309,
				"bwc" : 539805,
				"roles" : {
					"middle" : 2,
					"guard" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00032399999999999996,
					"pbm" : 0.000292,
					"pbg" : 0.000681
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 2,
						"bwa" : 1175309,
						"bwc" : 539805,
						"roles" : {
							"middle" : 2,
							"guard" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00032399999999999996,
							"pbm" : 0.000292,
							"pbg" : 0.000681
						}
					}
				]
			},
			{
				"as" : 4760,
				"relay" : 1,
				"bwa" : 516402,
				"bwc" : 55306,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000023,
					"pbg" : 0.00005,
					"pbm" : 0.00002
				},
				"countries" : [
					{
						"cc" : "HK",
						"relay" : 1,
						"bwa" : 516402,
						"bwc" : 55306,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000023,
							"pbg" : 0.00005,
							"pbm" : 0.00002
						}
					}
				]
			},
			{
				"as" : 56423,
				"relay" : 1,
				"bwa" : 295166,
				"bwc" : 5371,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000014,
					"pbm" : 0.000041
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 295166,
						"bwc" : 5371,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000014,
							"pbm" : 0.000041
						}
					}
				]
			},
			{
				"as" : 10834,
				"relay" : 1,
				"bwa" : 32768,
				"bwc" : 202,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "AR",
						"relay" : 1,
						"bwa" : 32768,
						"bwc" : 202,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 22702,
				"relay" : 2,
				"bwa" : 187946,
				"bwc" : 6084,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000008000000000000001,
					"pbm" : 0.000023
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 187946,
						"bwc" : 6084,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000008000000000000001,
							"pbm" : 0.000023
						}
					}
				]
			},
			{
				"as" : 35271,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 1020299,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000247,
					"pbe" : 0.000741
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 1020299,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000247,
							"pbe" : 0.000741
						}
					}
				]
			},
			{
				"as" : 48209,
				"relay" : 1,
				"bwa" : 65536,
				"bwc" : 33339,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000005,
					"pbe" : 0.000015
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 65536,
						"bwc" : 33339,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000005,
							"pbe" : 0.000015
						}
					}
				]
			},
			{
				"as" : 145404,
				"relay" : 4,
				"bwa" : 2394500,
				"bwc" : 837496,
				"roles" : {
					"guard" : 2,
					"middle" : 4,
					"dir" : 3
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00043599999999999997,
					"pbg" : 0.000808,
					"pbm" : 0.0005
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 3,
						"bwa" : 1606049,
						"bwc" : 712241,
						"roles" : {
							"guard" : 1,
							"middle" : 3,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000406,
							"pbg" : 0.000744,
							"pbm" : 0.000475
						}
					},
					{
						"cc" : "SG",
						"relay" : 1,
						"bwa" : 788451,
						"bwc" : 125255,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00003,
							"pbg" : 0.000064,
							"pbm" : 0.000025
						}
					}
				]
			},
			{
				"as" : 2514,
				"relay" : 2,
				"bwa" : 401408,
				"bwc" : 269180,
				"roles" : {
					"middle" : 2,
					"guard" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000061000000000000005,
					"pbm" : 0.000136,
					"pbg" : 0.000044
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 2,
						"bwa" : 401408,
						"bwc" : 269180,
						"roles" : {
							"middle" : 2,
							"guard" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000061000000000000005,
							"pbm" : 0.000136,
							"pbg" : 0.000044
						}
					}
				]
			},
			{
				"as" : 24166,
				"relay" : 2,
				"bwa" : 188416,
				"bwc" : 63641,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000015000000000000002,
					"pbm" : 0.000029,
					"pbe" : 0.000016
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 188416,
						"bwc" : 63641,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000015000000000000002,
							"pbm" : 0.000029,
							"pbe" : 0.000016
						}
					}
				]
			},
			{
				"as" : 1759,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 33930,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 33930,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 44565,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 26716,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbe" : 0.000024
				},
				"countries" : [
					{
						"cc" : "TR",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 26716,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbe" : 0.000024
						}
					}
				]
			},
			{
				"as" : 2603,
				"relay" : 1,
				"bwa" : 27025916,
				"bwc" : 16461406,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.004451,
					"pbg" : 0.009573,
					"pbm" : 0.003782
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 27025916,
						"bwc" : 16461406,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.004451,
							"pbg" : 0.009573,
							"pbm" : 0.003782
						}
					}
				]
			},
			{
				"as" : 95384,
				"relay" : 2,
				"bwa" : 5962713,
				"bwc" : 3684449,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.001423,
					"pbg" : 0.000791,
					"pbm" : 0.0008280000000000001,
					"pbe" : 0.002651
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 5860313,
						"bwc" : 3648824,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001411,
							"pbg" : 0.000791,
							"pbm" : 0.000791,
							"pbe" : 0.002651
						}
					},
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 35625,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000012,
							"pbm" : 0.000037
						}
					}
				]
			},
			{
				"as" : 44734,
				"relay" : 1,
				"bwa" : 229760,
				"bwc" : 32877,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000016,
					"pbg" : 0.000009,
					"pbm" : 0.000009,
					"pbe" : 0.00003
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 229760,
						"bwc" : 32877,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000016,
							"pbg" : 0.000009,
							"pbm" : 0.000009,
							"pbe" : 0.00003
						}
					}
				]
			},
			{
				"as" : 24806,
				"relay" : 1,
				"bwa" : 819200,
				"bwc" : 505022,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00022,
					"pbe" : 0.000661
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 819200,
						"bwc" : 505022,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00022,
							"pbe" : 0.000661
						}
					}
				]
			},
			{
				"as" : 30994,
				"relay" : 2,
				"bwa" : 358400,
				"bwc" : 170959,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000067,
					"pbg" : 0.000032,
					"pbm" : 0.000059999999999999995,
					"pbe" : 0.000109
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 2,
						"bwa" : 358400,
						"bwc" : 170959,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000067,
							"pbg" : 0.000032,
							"pbm" : 0.000059999999999999995,
							"pbe" : 0.000109
						}
					}
				]
			},
			{
				"as" : 12129,
				"relay" : 1,
				"bwa" : 524288,
				"bwc" : 551285,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000147,
					"pbg" : 0.000315,
					"pbm" : 0.000125
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 524288,
						"bwc" : 551285,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000147,
							"pbg" : 0.000315,
							"pbm" : 0.000125
						}
					}
				]
			},
			{
				"as" : 8218,
				"relay" : 1,
				"bwa" : 614400,
				"bwc" : 613142,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000149,
					"pbg" : 0.000321,
					"pbm" : 0.000127
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 614400,
						"bwc" : 613142,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000149,
							"pbg" : 0.000321,
							"pbm" : 0.000127
						}
					}
				]
			},
			{
				"as" : 26496,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 19816,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 19816,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 66036,
				"relay" : 4,
				"bwa" : 561152,
				"bwc" : 404018,
				"roles" : {
					"middle" : 4,
					"exit" : 1,
					"dir" : 1,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 3,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000029,
					"pbm" : 0.000054999999999999995,
					"pbe" : 0.000024,
					"pbg" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 233472,
						"bwc" : 126714,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000022,
							"pbm" : 0.000042,
							"pbe" : 0.000024
						}
					},
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 307200,
						"bwc" : 276595,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbg" : 0.000009,
							"pbm" : 0.000004
						}
					},
					{
						"cc" : "BR",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 709,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 71776,
				"relay" : 8,
				"bwa" : 8892416,
				"bwc" : 7581462,
				"roles" : {
					"middle" : 8,
					"dir" : 6,
					"guard" : 4,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 7
				},
				"probs" : {
					"pbr" : 0.0038520000000000004,
					"pbm" : 0.0038120000000000003,
					"pbg" : 0.007731,
					"pbe" : 0.000012
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 8892416,
						"bwc" : 7581462,
						"roles" : {
							"middle" : 8,
							"dir" : 6,
							"guard" : 4,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 7
						},
						"probs" : {
							"pbr" : 0.0038520000000000004,
							"pbm" : 0.0038120000000000003,
							"pbg" : 0.007731,
							"pbe" : 0.000012
						}
					}
				]
			},
			{
				"as" : 197451,
				"relay" : 1,
				"bwa" : 520192,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000025,
					"pbe" : 0.000074
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 520192,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000025,
							"pbe" : 0.000074
						}
					}
				]
			},
			{
				"as" : 8432,
				"relay" : 4,
				"bwa" : 2114463,
				"bwc" : 1565096,
				"roles" : {
					"middle" : 4,
					"dir" : 4,
					"guard" : 2
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000475,
					"pbm" : 0.000869,
					"pbg" : 0.000559
				},
				"countries" : [
					{
						"cc" : "HR",
						"relay" : 4,
						"bwa" : 2114463,
						"bwc" : 1565096,
						"roles" : {
							"middle" : 4,
							"dir" : 4,
							"guard" : 2
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000475,
							"pbm" : 0.000869,
							"pbg" : 0.000559
						}
					}
				]
			},
			{
				"as" : 39351,
				"relay" : 1,
				"bwa" : 2560000,
				"bwc" : 2551930,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.001627,
					"pbg" : 0.000912,
					"pbm" : 0.000912,
					"pbe" : 0.003056
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 2560000,
						"bwc" : 2551930,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001627,
							"pbg" : 0.000912,
							"pbm" : 0.000912,
							"pbe" : 0.003056
						}
					}
				]
			},
			{
				"as" : 199520,
				"relay" : 8,
				"bwa" : 7581696,
				"bwc" : 7121275,
				"roles" : {
					"guard" : 3,
					"middle" : 8,
					"dir" : 5
				},
				"flags" : {
					"fastStable" : 6,
					"stable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.001625,
					"pbg" : 0.002474,
					"pbm" : 0.0024000000000000002
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 7581696,
						"bwc" : 7121275,
						"roles" : {
							"guard" : 3,
							"middle" : 8,
							"dir" : 5
						},
						"flags" : {
							"fastStable" : 6,
							"stable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.001625,
							"pbg" : 0.002474,
							"pbm" : 0.0024000000000000002
						}
					}
				]
			},
			{
				"as" : 27747,
				"relay" : 1,
				"bwa" : 31702,
				"bwc" : 111,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000002
				},
				"countries" : [
					{
						"cc" : "AR",
						"relay" : 1,
						"bwa" : 31702,
						"bwc" : 111,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000002
						}
					}
				]
			},
			{
				"as" : 17019,
				"relay" : 1,
				"bwa" : 3426819,
				"bwc" : 2784629,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00104,
					"pbg" : 0.002236,
					"pbm" : 0.000883
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 3426819,
						"bwc" : 2784629,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00104,
							"pbg" : 0.002236,
							"pbm" : 0.000883
						}
					}
				]
			},
			{
				"as" : 18515,
				"relay" : 1,
				"bwa" : 153600,
				"bwc" : 38552,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000023,
					"pbm" : 0.000068
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 153600,
						"bwc" : 38552,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000023,
							"pbm" : 0.000068
						}
					}
				]
			},
			{
				"as" : 101346,
				"relay" : 2,
				"bwa" : 819200,
				"bwc" : 736225,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00025100000000000003,
					"pbe" : 0.000524,
					"pbm" : 0.00023
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 819200,
						"bwc" : 736225,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00025100000000000003,
							"pbe" : 0.000524,
							"pbm" : 0.00023
						}
					}
				]
			},
			{
				"as" : 4589,
				"relay" : 1,
				"bwa" : 122880,
				"bwc" : 22609,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000016,
					"pbe" : 0.000048
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 122880,
						"bwc" : 22609,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000016,
							"pbe" : 0.000048
						}
					}
				]
			},
			{
				"as" : 24542,
				"relay" : 2,
				"bwa" : 122880,
				"bwc" : 55843,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000011,
					"pbm" : 0.000032
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 122880,
						"bwc" : 55843,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbm" : 0.000032
						}
					}
				]
			},
			{
				"as" : 13127,
				"relay" : 1,
				"bwa" : 69632,
				"bwc" : 120,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 69632,
						"bwc" : 120,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 63376,
				"relay" : 8,
				"bwa" : 2148690,
				"bwc" : 1269419,
				"roles" : {
					"middle" : 8,
					"dir" : 3
				},
				"flags" : {
					"fastStable" : 4,
					"fast" : 4
				},
				"probs" : {
					"pbr" : 0.000348,
					"pbm" : 0.001045
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 2148690,
						"bwc" : 1269419,
						"roles" : {
							"middle" : 8,
							"dir" : 3
						},
						"flags" : {
							"fastStable" : 4,
							"fast" : 4
						},
						"probs" : {
							"pbr" : 0.000348,
							"pbm" : 0.001045
						}
					}
				]
			},
			{
				"as" : 47869,
				"relay" : 1,
				"bwa" : 281600,
				"bwc" : 140800,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000077,
					"pbg" : 0.000043,
					"pbm" : 0.000043,
					"pbe" : 0.000145
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 281600,
						"bwc" : 140800,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000077,
							"pbg" : 0.000043,
							"pbm" : 0.000043,
							"pbe" : 0.000145
						}
					}
				]
			},
			{
				"as" : 43234,
				"relay" : 1,
				"bwa" : 76309,
				"bwc" : 3432,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbm" : 0.000011
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 76309,
						"bwc" : 3432,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000011
						}
					}
				]
			},
			{
				"as" : 102754,
				"relay" : 2,
				"bwa" : 204800,
				"bwc" : 77506,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000017,
					"pbm" : 0.000051000000000000006
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 2,
						"bwa" : 204800,
						"bwc" : 77506,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000017,
							"pbm" : 0.000051000000000000006
						}
					}
				]
			},
			{
				"as" : 23628,
				"relay" : 2,
				"bwa" : 131072,
				"bwc" : 27249,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"notFastStable" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000012,
					"pbm" : 0.000036
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 2,
						"bwa" : 131072,
						"bwc" : 27249,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"notFastStable" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000012,
							"pbm" : 0.000036
						}
					}
				]
			},
			{
				"as" : 49978,
				"relay" : 2,
				"bwa" : 757760,
				"bwc" : 576201,
				"roles" : {
					"middle" : 2,
					"guard" : 1,
					"dir" : 1
				},
				"flags" : {
					"stable" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000147,
					"pbm" : 0.000131,
					"pbg" : 0.000313
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 757760,
						"bwc" : 576201,
						"roles" : {
							"middle" : 2,
							"guard" : 1,
							"dir" : 1
						},
						"flags" : {
							"stable" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000147,
							"pbm" : 0.000131,
							"pbg" : 0.000313
						}
					}
				]
			},
			{
				"as" : 41691,
				"relay" : 1,
				"bwa" : 561888,
				"bwc" : 277721,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000049,
					"pbm" : 0.000148
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 561888,
						"bwc" : 277721,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000049,
							"pbm" : 0.000148
						}
					}
				]
			},
			{
				"as" : 46056,
				"relay" : 2,
				"bwa" : 21168337,
				"bwc" : 14090590,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.004525,
					"pbg" : 0.009732,
					"pbm" : 0.003845
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 21168337,
						"bwc" : 14090590,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.004525,
							"pbg" : 0.009732,
							"pbm" : 0.003845
						}
					}
				]
			},
			{
				"as" : 348,
				"relay" : 2,
				"bwa" : 9912583,
				"bwc" : 7097249,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.0023350000000000003,
					"pbg" : 0.004671,
					"pbm" : 0.00192,
					"pbe" : 0.000414
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 9912583,
						"bwc" : 7097249,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.0023350000000000003,
							"pbg" : 0.004671,
							"pbm" : 0.00192,
							"pbe" : 0.000414
						}
					}
				]
			},
			{
				"as" : 1653,
				"relay" : 1,
				"bwa" : 5120000,
				"bwc" : 5042505,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00134,
					"pbg" : 0.002881,
					"pbm" : 0.001138
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 5120000,
						"bwc" : 5042505,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00134,
							"pbg" : 0.002881,
							"pbm" : 0.001138
						}
					}
				]
			},
			{
				"as" : 8401,
				"relay" : 1,
				"bwa" : 50671,
				"bwc" : 3921,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000005
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 50671,
						"bwc" : 3921,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000005
						}
					}
				]
			},
			{
				"as" : 25019,
				"relay" : 1,
				"bwa" : 43320,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000004
				},
				"countries" : [
					{
						"cc" : "SA",
						"relay" : 1,
						"bwa" : 43320,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000004
						}
					}
				]
			},
			{
				"as" : 28072,
				"relay" : 4,
				"bwa" : 386201,
				"bwc" : 29532,
				"roles" : {
					"middle" : 4,
					"dir" : 4,
					"exit" : 1
				},
				"flags" : {
					"fast" : 4
				},
				"probs" : {
					"pbr" : 0.000024999999999999998,
					"pbm" : 0.00006500000000000001,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 386201,
						"bwc" : 29532,
						"roles" : {
							"middle" : 4,
							"dir" : 4,
							"exit" : 1
						},
						"flags" : {
							"fast" : 4
						},
						"probs" : {
							"pbr" : 0.000024999999999999998,
							"pbm" : 0.00006500000000000001,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 38951,
				"relay" : 1,
				"bwa" : 153600,
				"bwc" : 23743,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000016,
					"pbm" : 0.000048
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 153600,
						"bwc" : 23743,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000016,
							"pbm" : 0.000048
						}
					}
				]
			},
			{
				"as" : 21409,
				"relay" : 1,
				"bwa" : 2854613,
				"bwc" : 27610,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.001671,
					"pbm" : 0.005013
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 2854613,
						"bwc" : 27610,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.001671,
							"pbm" : 0.005013
						}
					}
				]
			},
			{
				"as" : 10103,
				"relay" : 1,
				"bwa" : 627258,
				"bwc" : 119783,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000072,
					"pbg" : 0.00004,
					"pbm" : 0.00004,
					"pbe" : 0.000136
				},
				"countries" : [
					{
						"cc" : "HK",
						"relay" : 1,
						"bwa" : 627258,
						"bwc" : 119783,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000072,
							"pbg" : 0.00004,
							"pbm" : 0.00004,
							"pbe" : 0.000136
						}
					}
				]
			},
			{
				"as" : 80004,
				"relay" : 4,
				"bwa" : 915632,
				"bwc" : 148134,
				"roles" : {
					"middle" : 4,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 2,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000052000000000000004,
					"pbm" : 0.000154
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 915632,
						"bwc" : 148134,
						"roles" : {
							"middle" : 4,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 2,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000052000000000000004,
							"pbm" : 0.000154
						}
					}
				]
			},
			{
				"as" : 46844,
				"relay" : 1,
				"bwa" : 3651563,
				"bwc" : 2114889,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.001291,
					"pbg" : 0.002776,
					"pbm" : 0.001097
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 3651563,
						"bwc" : 2114889,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001291,
							"pbg" : 0.002776,
							"pbm" : 0.001097
						}
					}
				]
			},
			{
				"as" : 33597,
				"relay" : 1,
				"bwa" : 4389,
				"bwc" : 124,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000005
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 4389,
						"bwc" : 124,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000005
						}
					}
				]
			},
			{
				"as" : 27229,
				"relay" : 1,
				"bwa" : 50000,
				"bwc" : 1287,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000004
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 50000,
						"bwc" : 1287,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000004
						}
					}
				]
			},
			{
				"as" : 38478,
				"relay" : 1,
				"bwa" : 353403,
				"bwc" : 153175,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000023,
					"pbg" : 0.000013,
					"pbm" : 0.000013,
					"pbe" : 0.000044
				},
				"countries" : [
					{
						"cc" : "HK",
						"relay" : 1,
						"bwa" : 353403,
						"bwc" : 153175,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000023,
							"pbg" : 0.000013,
							"pbm" : 0.000013,
							"pbe" : 0.000044
						}
					}
				]
			},
			{
				"as" : 26914,
				"relay" : 1,
				"bwa" : 1280000,
				"bwc" : 1218167,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00035,
					"pbg" : 0.000754,
					"pbm" : 0.000298
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1280000,
						"bwc" : 1218167,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00035,
							"pbg" : 0.000754,
							"pbm" : 0.000298
						}
					}
				]
			},
			{
				"as" : 23242,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 16577,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbe" : 0.000017
					},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 16577,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbe" : 0.000017
						}
					}
				]
			},
			{
				"as" : 10835,
				"relay" : 1,
				"bwa" : 81920,
				"bwc" : 27062,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000017
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 81920,
						"bwc" : 27062,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000017
						}
					}
				]
			},
			{
				"as" : 50716,
				"relay" : 1,
				"bwa" : 3617792,
				"bwc" : 2299451,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000722,
					"pbm" : 0.002165
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 3617792,
						"bwc" : 2299451,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000722,
							"pbm" : 0.002165
						}
					}
				]
			},
			{
				"as" : 6703,
				"relay" : 1,
				"bwa" : 75298,
				"bwc" : 19747,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbm" : 0.000012
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 75298,
						"bwc" : 19747,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000012
						}
					}
				]
			},
			{
				"as" : 130120,
				"relay" : 8,
				"bwa" : 39208684,
				"bwc" : 28309048,
				"roles" : {
					"guard" : 6,
					"middle" : 8,
					"dir" : 6,
					"exit" : 4
				},
				"flags" : {
					"fastStable" : 7,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.011214,
					"pbg" : 0.014668,
					"pbm" : 0.007845,
					"pbe" : 0.011128
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 3,
						"bwa" : 25208065,
						"bwc" : 18189027,
						"roles" : {
							"guard" : 3,
							"middle" : 3,
							"dir" : 3,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.007319999999999999,
							"pbg" : 0.011346,
							"pbm" : 0.00542,
							"pbe" : 0.005196
						}
					},
					{
						"cc" : "NL",
						"relay" : 5,
						"bwa" : 14000619,
						"bwc" : 10120021,
						"roles" : {
							"guard" : 3,
							"middle" : 5,
							"exit" : 3,
							"dir" : 3
						},
						"flags" : {
							"fastStable" : 4,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.003894,
							"pbg" : 0.003322,
							"pbm" : 0.002425,
							"pbe" : 0.005932
						}
					}
				]
			},
			{
				"as" : 44604,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 1044435,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00033,
					"pbe" : 0.000989
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 1044435,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00033,
							"pbe" : 0.000989
						}
					}
				]
			},
			{
				"as" : 98576,
				"relay" : 8,
				"bwa" : 7295377,
				"bwc" : 5441015,
				"roles" : {
					"middle" : 8,
					"dir" : 3,
					"exit" : 4,
					"guard" : 1
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 3,
					"stable" : 3
				},
				"probs" : {
					"pbr" : 0.001788,
					"pbm" : 0.001544,
					"pbe" : 0.000035,
					"pbg" : 0.003785
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 8,
						"bwa" : 7295377,
						"bwc" : 5441015,
						"roles" : {
							"middle" : 8,
							"dir" : 3,
							"exit" : 4,
							"guard" : 1
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 3,
							"stable" : 3
						},
						"probs" : {
							"pbr" : 0.001788,
							"pbm" : 0.001544,
							"pbe" : 0.000035,
							"pbg" : 0.003785
						}
					}
				]
			},
			{
				"as" : 2107,
				"relay" : 1,
				"bwa" : 406924,
				"bwc" : 54577,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00003,
					"pbe" : 0.000091
				},
				"countries" : [
					{
						"cc" : "SI",
						"relay" : 1,
						"bwa" : 406924,
						"bwc" : 54577,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00003,
							"pbe" : 0.000091
						}
					}
				]
			},
			{
				"as" : 42682,
				"relay" : 1,
				"bwa" : 30007,
				"bwc" : 165,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 30007,
						"bwc" : 165,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 2609,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 649,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbm" : 0.000001
				},
				"countries" : [
					{
						"cc" : "TN",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 649,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbm" : 0.000001
						}
					}
				]
			},
			{
				"as" : 33891,
				"relay" : 1,
				"bwa" : 491520,
				"bwc" : 144139,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000054,
					"pbg" : 0.00003,
					"pbm" : 0.00003,
					"pbe" : 0.000101
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 491520,
						"bwc" : 144139,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000054,
							"pbg" : 0.00003,
							"pbm" : 0.00003,
							"pbe" : 0.000101
						}
					}
				]
			},
			{
				"as" : 120232,
				"relay" : 4,
				"bwa" : 7053898,
				"bwc" : 4869160,
				"roles" : {
					"guard" : 2,
					"middle" : 4,
					"dir" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 2,
					"stable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.001147,
					"pbg" : 0.002457,
					"pbm" : 0.0009760000000000001,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 1103719,
						"bwc" : 1041905,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000125,
							"pbg" : 0.000266,
							"pbm" : 0.00011
						}
					},
					{
						"cc" : "CZ",
						"relay" : 2,
						"bwa" : 5950179,
						"bwc" : 3827255,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"guard" : 1
						},
						"flags" : {
							"stable" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001022,
							"pbe" : 0.000009,
							"pbg" : 0.002191,
							"pbm" : 0.000866
						}
					}
				]
			},
			{
				"as" : 1764,
				"relay" : 1,
				"bwa" : 5252194,
				"bwc" : 3264711,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00176,
					"pbg" : 0.003785,
					"pbm" : 0.001495
				},
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 5252194,
						"bwc" : 3264711,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00176,
							"pbg" : 0.003785,
							"pbm" : 0.001495
						}
					}
				]
			},
			{
				"as" : 199520,
				"relay" : 8,
				"bwa" : 10735616,
				"bwc" : 9192412,
				"roles" : {
					"guard" : 6,
					"middle" : 8,
					"dir" : 5,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 8
				},
				"probs" : {
					"pbr" : 0.002447,
					"pbg" : 0.004557,
					"pbm" : 0.002712,
					"pbe" : 0.000078
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 10735616,
						"bwc" : 9192412,
						"roles" : {
							"guard" : 6,
							"middle" : 8,
							"dir" : 5,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 8
						},
						"probs" : {
							"pbr" : 0.002447,
							"pbg" : 0.004557,
							"pbm" : 0.002712,
							"pbe" : 0.000078
						}
					}
				]
			},
			{
				"as" : 36236,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 11960,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000017,
					"pbg" : 0.000037,
					"pbm" : 0.000014
				},
				"countries" : [
					{
						"cc" : "HK",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 11960,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000017,
							"pbg" : 0.000037,
							"pbm" : 0.000014
						}
					}
				]
			},
			{
				"as" : 47678,
				"relay" : 1,
				"bwa" : 1140736,
				"bwc" : 998852,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000362,
					"pbm" : 0.001087
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 1140736,
						"bwc" : 998852,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000362,
							"pbm" : 0.001087
						}
					}
				]
			},
			{
				"as" : 154096,
				"relay" : 8,
				"bwa" : 13014459,
				"bwc" : 11205798,
				"roles" : {
					"middle" : 8,
					"dir" : 7,
					"guard" : 3
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 6
				},
				"probs" : {
					"pbr" : 0.004484,
					"pbm" : 0.004287,
					"pbg" : 0.00917
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 13014459,
						"bwc" : 11205798,
						"roles" : {
							"middle" : 8,
							"dir" : 7,
							"guard" : 3
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 6
						},
						"probs" : {
							"pbr" : 0.004484,
							"pbm" : 0.004287,
							"pbg" : 0.00917
						}
					}
				]
			},
			{
				"as" : 39959,
				"relay" : 1,
				"bwa" : 7942691,
				"bwc" : 0,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.002277,
					"pbg" : 0.004898,
					"pbm" : 0.001935
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 7942691,
						"bwc" : 0,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.002277,
							"pbg" : 0.004898,
							"pbm" : 0.001935
						}
					}
				]
			},
			{
				"as" : 35626,
				"relay" : 2,
				"bwa" : 118885,
				"bwc" : 23539,
				"roles" : {
					"middle" : 2,
					"exit" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbe" : 0.000018
				},
				"countries" : [
					{
						"cc" : "IN",
						"relay" : 2,
						"bwa" : 118885,
						"bwc" : 23539,
						"roles" : {
							"middle" : 2,
							"exit" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbe" : 0.000018
						}
					}
				]
			},
			{
				"as" : 130208,
				"relay" : 8,
				"bwa" : 14453830,
				"bwc" : 9692793,
				"roles" : {
					"middle" : 8,
					"dir" : 6,
					"exit" : 2,
					"guard" : 3
				},
				"flags" : {
					"fast" : 3,
					"stable" : 2,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.00317,
					"pbm" : 0.004176,
					"pbe" : 0.000018,
					"pbg" : 0.005317
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1714328,
						"bwc" : 532526,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000164,
							"pbm" : 0.000492
						}
					},
					{
						"cc" : "FR",
						"relay" : 4,
						"bwa" : 4616585,
						"bwc" : 3203190,
						"roles" : {
							"middle" : 4,
							"exit" : 2,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"stable" : 2,
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001235,
							"pbe" : 0.000018,
							"pbm" : 0.002069,
							"pbg" : 0.001619
						}
					},
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 3145728,
						"bwc" : 1538367,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000717,
							"pbg" : 0.001542,
							"pbm" : 0.000609
						}
					},
					{
						"cc" : "IE",
						"relay" : 1,
						"bwa" : 676389,
						"bwc" : 189947,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000051,
							"pbm" : 0.000154
						}
					},
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 4300800,
						"bwc" : 4228763,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001003,
							"pbg" : 0.002156,
							"pbm" : 0.000852
						}
					}
				]
			},
			{
				"as" : 36025,
				"relay" : 1,
				"bwa" : 1808513,
				"bwc" : 837661,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000383,
					"pbg" : 0.000824,
					"pbm" : 0.000325
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1808513,
						"bwc" : 837661,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000383,
							"pbg" : 0.000824,
							"pbm" : 0.000325
						}
					}
				]
			},
			{
				"as" : 32004,
				"relay" : 4,
				"bwa" : 1812480,
				"bwc" : 1269263,
				"roles" : {
					"middle" : 4
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.00038,
					"pbm" : 0.001141
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 1812480,
						"bwc" : 1269263,
						"roles" : {
							"middle" : 4
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.00038,
							"pbm" : 0.001141
						}
					}
				]
			},
			{
				"as" : 12836,
				"relay" : 4,
				"bwa" : 322556,
				"bwc" : 78034,
				"roles" : {
					"middle" : 4,
					"dir" : 3
				},
				"flags" : {
					"notFastStable" : 1,
					"fast" : 3
				},
				"probs" : {
					"pbr" : 0.000022,
					"pbm" : 0.000068
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 322556,
						"bwc" : 78034,
						"roles" : {
							"middle" : 4,
							"dir" : 3
						},
						"flags" : {
							"notFastStable" : 1,
							"fast" : 3
						},
						"probs" : {
							"pbr" : 0.000022,
							"pbm" : 0.000068
						}
					}
				]
			},
			{
				"as" : 2764,
				"relay" : 1,
				"bwa" : 61609,
				"bwc" : 20561,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000003
				},
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 1,
						"bwa" : 61609,
						"bwc" : 20561,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000003
						}
					}
				]
			},
			{
				"as" : 79714,
				"relay" : 2,
				"bwa" : 1634304,
				"bwc" : 610628,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000276,
					"pbm" : 0.0008290000000000001
				},
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 2,
						"bwa" : 1634304,
						"bwc" : 610628,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000276,
							"pbm" : 0.0008290000000000001
						}
					}
				]
			},
			{
				"as" : 17994,
				"relay" : 2,
				"bwa" : 805304,
				"bwc" : 80329,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000078,
					"pbg" : 0.000016,
					"pbm" : 0.000162,
					"pbe" : 0.000055
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 805304,
						"bwc" : 80329,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000078,
							"pbg" : 0.000016,
							"pbm" : 0.000162,
							"pbe" : 0.000055
						}
					}
				]
			},
			{
				"as" : 125336,
				"relay" : 4,
				"bwa" : 343547,
				"bwc" : 146489,
				"roles" : {
					"middle" : 4,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 1,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000042999999999999995,
					"pbm" : 0.000129
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 343547,
						"bwc" : 146489,
						"roles" : {
							"middle" : 4,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 1,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000042999999999999995,
							"pbm" : 0.000129
						}
					}
				]
			},
			{
				"as" : 20521,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 0,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000238,
					"pbg" : 0.000133,
					"pbm" : 0.000133,
					"pbe" : 0.000447
				},
				"countries" : [
					{
						"cc" : "MT",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 0,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000238,
							"pbg" : 0.000133,
							"pbm" : 0.000133,
							"pbe" : 0.000447
						}
					}
				]
			},
			{
				"as" : 27220,
				"relay" : 4,
				"bwa" : 378958,
				"bwc" : 71872,
				"roles" : {
					"middle" : 4,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"fast" : 4
				},
				"probs" : {
					"pbr" : 0.000022,
					"pbe" : 0.000018,
					"pbm" : 0.000048
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 378958,
						"bwc" : 71872,
						"roles" : {
							"middle" : 4,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"fast" : 4
						},
						"probs" : {
							"pbr" : 0.000022,
							"pbe" : 0.000018,
							"pbm" : 0.000048
						}
					}
				]
			},
			{
				"as" : 40712,
				"relay" : 8,
				"bwa" : 934764,
				"bwc" : 258172,
				"roles" : {
					"middle" : 8,
					"dir" : 4,
					"guard" : 1
				},
				"flags" : {
					"fast" : 4,
					"stable" : 1,
					"notFastStable" : 1,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.00007199999999999999,
					"pbm" : 0.00015000000000000001,
					"pbg" : 0.000068
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 8,
						"bwa" : 934764,
						"bwc" : 258172,
						"roles" : {
							"middle" : 8,
							"dir" : 4,
							"guard" : 1
						},
						"flags" : {
							"fast" : 4,
							"stable" : 1,
							"notFastStable" : 1,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.00007199999999999999,
							"pbm" : 0.00015000000000000001,
							"pbg" : 0.000068
						}
					}
				]
			},
			{
				"as" : 35533,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 4960,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000012,
					"pbe" : 0.000035
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 4960,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000012,
							"pbe" : 0.000035
						}
					}
				]
			},
			{
				"as" : 64194,
				"relay" : 2,
				"bwa" : 2929664,
				"bwc" : 2609332,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000625,
					"pbg" : 0.001343,
					"pbm" : 0.00053
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 2929664,
						"bwc" : 2609332,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000625,
							"pbg" : 0.001343,
							"pbm" : 0.00053
						}
					}
				]
			},
			{
				"as" : 20178,
				"relay" : 1,
				"bwa" : 61440,
				"bwc" : 13062,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000004
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 61440,
						"bwc" : 13062,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000004
						}
					}
				]
			},
			{
				"as" : 42005,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 50975,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000013,
					"pbm" : 0.000039
				},
				"countries" : [
					{
						"cc" : "SK",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 50975,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000013,
							"pbm" : 0.000039
						}
					}
				]
			},
			{
				"as" : 67674,
				"relay" : 2,
				"bwa" : 358400,
				"bwc" : 172567,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000061,
					"pbe" : 0.000043,
					"pbg" : 0.000101,
					"pbm" : 0.00004
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 2,
						"bwa" : 358400,
						"bwc" : 172567,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000061,
							"pbe" : 0.000043,
							"pbg" : 0.000101,
							"pbm" : 0.00004
						}
					}
				]
			},
			{
				"as" : 34119,
				"relay" : 1,
				"bwa" : 61440,
				"bwc" : 14628,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000005,
					"pbe" : 0.000016
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 61440,
						"bwc" : 14628,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000005,
							"pbe" : 0.000016
						}
					}
				]
			},
			{
				"as" : 19202,
				"relay" : 1,
				"bwa" : 153600,
				"bwc" : 110881,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000017,
					"pbm" : 0.00005
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 153600,
						"bwc" : 110881,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000017,
							"pbm" : 0.00005
						}
					}
				]
			},
			{
				"as" : 4181,
				"relay" : 1,
				"bwa" : 655360,
				"bwc" : 239796,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000155,
					"pbm" : 0.000466
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 655360,
						"bwc" : 239796,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000155,
							"pbm" : 0.000466
						}
					}
				]
			},
			{
				"as" : 9617,
				"relay" : 1,
				"bwa" : 88553,
				"bwc" : 1418,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000006
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 88553,
						"bwc" : 1418,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000006
						}
					}
				]
			},
			{
				"as" : 12605,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 11972,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 11972,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 103,
				"relay" : 1,
				"bwa" : 1667627,
				"bwc" : 496958,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000374,
					"pbm" : 0.001122
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1667627,
						"bwc" : 496958,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000374,
							"pbm" : 0.001122
						}
					}
				]
			},
			{
				"as" : 83466,
				"relay" : 2,
				"bwa" : 1082429,
				"bwc" : 281472,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000082,
					"pbe" : 0.000067,
					"pbg" : 0.000129,
					"pbm" : 0.000051
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 2,
						"bwa" : 1082429,
						"bwc" : 281472,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000082,
							"pbe" : 0.000067,
							"pbg" : 0.000129,
							"pbm" : 0.000051
						}
					}
				]
			},
			{
				"as" : 29405,
				"relay" : 1,
				"bwa" : 3145728,
				"bwc" : 1076657,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.001553,
					"pbg" : 0.00087,
					"pbm" : 0.00087,
					"pbe" : 0.002917
				},
				"countries" : [
					{
						"cc" : "SK",
						"relay" : 1,
						"bwa" : 3145728,
						"bwc" : 1076657,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001553,
							"pbg" : 0.00087,
							"pbm" : 0.00087,
							"pbe" : 0.002917
						}
					}
				]
			},
			{
				"as" : 6849,
				"relay" : 1,
				"bwa" : 30720,
				"bwc" : 103,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 30720,
						"bwc" : 103,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 185900,
				"relay" : 4,
				"bwa" : 2063826,
				"bwc" : 349870,
				"roles" : {
					"middle" : 4,
					"guard" : 1,
					"exit" : 3,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000216,
					"pbm" : 0.000057,
					"pbg" : 0.000021,
					"pbe" : 0.00057
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 2063826,
						"bwc" : 349870,
						"roles" : {
							"middle" : 4,
							"guard" : 1,
							"exit" : 3,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000216,
							"pbm" : 0.000057,
							"pbg" : 0.000021,
							"pbe" : 0.00057
						}
					}
				]
			},
			{
				"as" : 13977,
				"relay" : 1,
				"bwa" : 58368,
				"bwc" : 492,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 58368,
						"bwc" : 492,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 23148,
				"relay" : 1,
				"bwa" : 336144,
				"bwc" : 26317,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000012,
					"pbg" : 0.000007,
					"pbm" : 0.000007,
					"pbe" : 0.000023
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 336144,
						"bwc" : 26317,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000012,
							"pbg" : 0.000007,
							"pbm" : 0.000007,
							"pbe" : 0.000023
						}
					}
				]
			},
			{
				"as" : 62800,
				"relay" : 2,
				"bwa" : 1353728,
				"bwc" : 927607,
				"roles" : {
					"middle" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00041400000000000003,
					"pbe" : 0.00003,
					"pbm" : 0.001211
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 1353728,
						"bwc" : 927607,
						"roles" : {
							"middle" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00041400000000000003,
							"pbe" : 0.00003,
							"pbm" : 0.001211
						}
					}
				]
			},
			{
				"as" : 15756,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbe" : 0.000011
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbe" : 0.000011
						}
					}
				]
			},
			{
				"as" : 62206,
				"relay" : 2,
				"bwa" : 2764800,
				"bwc" : 2281274,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"exit" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000855,
					"pbg" : 0.000479,
					"pbm" : 0.000479,
					"pbe" : 0.001607
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 2764800,
						"bwc" : 2281274,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"exit" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000855,
							"pbg" : 0.000479,
							"pbm" : 0.000479,
							"pbe" : 0.001607
						}
					}
				]
			},
			{
				"as" : 25430,
				"relay" : 2,
				"bwa" : 356626,
				"bwc" : 80007,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000026000000000000002,
					"pbm" : 0.000079
				},
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 2,
						"bwa" : 356626,
						"bwc" : 80007,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000026000000000000002,
							"pbm" : 0.000079
						}
					}
				]
			},
			{
				"as" : 9112,
				"relay" : 1,
				"bwa" : 215040,
				"bwc" : 68262,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000019,
					"pbg" : 0.00004,
					"pbm" : 0.000016
				},
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 215040,
						"bwc" : 68262,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000019,
							"pbg" : 0.00004,
							"pbm" : 0.000016
						}
					}
				]
			},
			{
				"as" : 54640,
				"relay" : 8,
				"bwa" : 1910784,
				"bwc" : 1081364,
				"roles" : {
					"middle" : 8,
					"dir" : 5,
					"exit" : 1
				},
				"flags" : {
					"fast" : 3,
					"fastStable" : 5
				},
				"probs" : {
					"pbr" : 0.00032900000000000003,
					"pbm" : 0.0005949999999999999,
					"pbe" : 0.000396
				},
				"countries" : [
					{
						"cc" : "HU",
						"relay" : 2,
						"bwa" : 430080,
						"bwc" : 229597,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000063,
							"pbm" : 0.00019
						}
					},
					{
						"cc" : "CH",
						"relay" : 1,
						"bwa" : 307200,
						"bwc" : 270179,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00006,
							"pbm" : 0.00018
						}
					},
					{
						"cc" : "AT",
						"relay" : 2,
						"bwa" : 200704,
						"bwc" : 100280,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000015,
							"pbm" : 0.000047000000000000004
						}
					},
					{
						"cc" : "CZ",
						"relay" : 2,
						"bwa" : 819200,
						"bwc" : 443486,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000181,
							"pbe" : 0.000396,
							"pbm" : 0.000148
						}
					},
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 153600,
						"bwc" : 37822,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00001,
							"pbm" : 0.00003
						}
					}
				]
			},
			{
				"as" : 9145,
				"relay" : 1,
				"bwa" : 56320,
				"bwc" : 36,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000005
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 56320,
						"bwc" : 36,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000005
						}
					}
				]
			},
			{
				"as" : 62684,
				"relay" : 2,
				"bwa" : 378880,
				"bwc" : 303735,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"dir" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.00008900000000000001,
					"pbg" : 0.000184,
					"pbm" : 0.000073,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 378880,
						"bwc" : 303735,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"dir" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.00008900000000000001,
							"pbg" : 0.000184,
							"pbm" : 0.000073,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 80460,
				"relay" : 4,
				"bwa" : 855361,
				"bwc" : 150795,
				"roles" : {
					"middle" : 4,
					"dir" : 3
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.000032000000000000005,
					"pbm" : 0.000097
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 855361,
						"bwc" : 150795,
						"roles" : {
							"middle" : 4,
							"dir" : 3
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.000032000000000000005,
							"pbm" : 0.000097
						}
					}
				]
			},
			{
				"as" : 51013,
				"relay" : 1,
				"bwa" : 4121610,
				"bwc" : 2939691,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.001582,
					"pbg" : 0.003403,
					"pbm" : 0.001344
				},
				"countries" : [
					{
						"cc" : "SK",
						"relay" : 1,
						"bwa" : 4121610,
						"bwc" : 2939691,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001582,
							"pbg" : 0.003403,
							"pbm" : 0.001344
						}
					}
				]
			},
			{
				"as" : 51167,
				"relay" : 1,
				"bwa" : 2097152,
				"bwc" : 2042976,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000614,
					"pbg" : 0.00132,
					"pbm" : 0.000521
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 2097152,
						"bwc" : 2042976,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000614,
							"pbg" : 0.00132,
							"pbm" : 0.000521
						}
					}
				]
			},
			{
				"as" : 812,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 28677,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000023
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 28677,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000023
						}
					}
				]
			},
			{
				"as" : 60072,
				"relay" : 2,
				"bwa" : 401467,
				"bwc" : 175555,
				"roles" : {
					"middle" : 2,
					"guard" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000049,
					"pbm" : 0.000124,
					"pbg" : 0.000024
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 401467,
						"bwc" : 175555,
						"roles" : {
							"middle" : 2,
							"guard" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000049,
							"pbm" : 0.000124,
							"pbg" : 0.000024
						}
					}
				]
			},
			{
				"as" : 27756,
				"relay" : 4,
				"bwa" : 4215808,
				"bwc" : 3212825,
				"roles" : {
					"middle" : 4,
					"exit" : 2,
					"guard" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.002406,
					"pbe" : 0.0063880000000000004,
					"pbg" : 0.000562,
					"pbm" : 0.000266
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 4215808,
						"bwc" : 3212825,
						"roles" : {
							"middle" : 4,
							"exit" : 2,
							"guard" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.002406,
							"pbe" : 0.0063880000000000004,
							"pbg" : 0.000562,
							"pbm" : 0.000266
						}
					}
				]
			},
			{
				"as" : 199520,
				"relay" : 8,
				"bwa" : 6899676,
				"bwc" : 5706121,
				"roles" : {
					"guard" : 3,
					"middle" : 8,
					"exit" : 3,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 6,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.001729,
					"pbg" : 0.0005679999999999999,
					"pbm" : 0.00309,
					"pbe" : 0.0015290000000000002
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 6899676,
						"bwc" : 5706121,
						"roles" : {
							"guard" : 3,
							"middle" : 8,
							"exit" : 3,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 6,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.001729,
							"pbg" : 0.0005679999999999999,
							"pbm" : 0.00309,
							"pbe" : 0.0015290000000000002
						}
					}
				]
			},
			{
				"as" : 7738,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 1255,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000003
				},
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 1255,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000003
						}
					}
				]
			},
			{
				"as" : 41720,
				"relay" : 2,
				"bwa" : 409600,
				"bwc" : 227750,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000088,
					"pbg" : 0.000047,
					"pbm" : 0.000058,
					"pbe" : 0.000158
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 2,
						"bwa" : 409600,
						"bwc" : 227750,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000088,
							"pbg" : 0.000047,
							"pbm" : 0.000058,
							"pbe" : 0.000158
						}
					}
				]
			},
			{
				"as" : 26934,
				"relay" : 1,
				"bwa" : 1695486,
				"bwc" : 1117609,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00034,
					"pbg" : 0.000731,
					"pbm" : 0.000289
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1695486,
						"bwc" : 1117609,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00034,
							"pbg" : 0.000731,
							"pbm" : 0.000289
						}
					}
				]
			},
			{
				"as" : 63376,
				"relay" : 8,
				"bwa" : 741376,
				"bwc" : 284363,
				"roles" : {
					"middle" : 8,
					"dir" : 4,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 5,
					"fast" : 2,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00006099999999999999,
					"pbm" : 0.00017499999999999997,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 741376,
						"bwc" : 284363,
						"roles" : {
							"middle" : 8,
							"dir" : 4,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 5,
							"fast" : 2,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00006099999999999999,
							"pbm" : 0.00017499999999999997,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 83092,
				"relay" : 4,
				"bwa" : 1397919,
				"bwc" : 401430,
				"roles" : {
					"middle" : 4,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000758,
					"pbm" : 0.000048,
					"pbe" : 0.002227
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 1397919,
						"bwc" : 401430,
						"roles" : {
							"middle" : 4,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000758,
							"pbm" : 0.000048,
							"pbe" : 0.002227
						}
					}
				]
			},
			{
				"as" : 43317,
				"relay" : 1,
				"bwa" : 301199,
				"bwc" : 0,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000026,
					"pbg" : 0.000055,
					"pbm" : 0.000022
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 301199,
						"bwc" : 0,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000026,
							"pbg" : 0.000055,
							"pbm" : 0.000022
						}
					}
				]
			},
			{
				"as" : 12668,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 150804,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000087,
					"pbg" : 0.000187,
					"pbm" : 0.000074
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 150804,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000087,
							"pbg" : 0.000187,
							"pbm" : 0.000074
						}
					}
				]
			},
			{
				"as" : 17534,
				"relay" : 2,
				"bwa" : 102400,
				"bwc" : 5128,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000011
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 102400,
						"bwc" : 5128,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000011
						}
					}
				]
			},
			{
				"as" : 19832,
				"relay" : 2,
				"bwa" : 1646737,
				"bwc" : 258514,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.00007,
					"pbm" : 0.00021
				},
				"countries" : [
					{
						"cc" : "TW",
						"relay" : 2,
						"bwa" : 1646737,
						"bwc" : 258514,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.00007,
							"pbm" : 0.00021
						}
					}
				]
			},
			{
				"as" : 75236,
				"relay" : 4,
				"bwa" : 284554,
				"bwc" : 90098,
				"roles" : {
					"middle" : 4,
					"dir" : 4
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000008
				},
				"countries" : [
					{
						"cc" : "PA",
						"relay" : 4,
						"bwa" : 284554,
						"bwc" : 90098,
						"roles" : {
							"middle" : 4,
							"dir" : 4
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000008
						}
					}
				]
			},
			{
				"as" : 31211,
				"relay" : 1,
				"bwa" : 2723940,
				"bwc" : 1565352,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000751,
					"pbg" : 0.001616,
					"pbm" : 0.000638
				},
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 1,
						"bwa" : 2723940,
						"bwc" : 1565352,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000751,
							"pbg" : 0.001616,
							"pbm" : 0.000638
						}
					}
				]
			},
			{
				"as" : 145408,
				"relay" : 4,
				"bwa" : 6062080,
				"bwc" : 3247464,
				"roles" : {
					"middle" : 4,
					"dir" : 1,
					"guard" : 1
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.002544,
					"pbm" : 0.0074259999999999994,
					"pbg" : 0.000206
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 6062080,
						"bwc" : 3247464,
						"roles" : {
							"middle" : 4,
							"dir" : 1,
							"guard" : 1
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.002544,
							"pbm" : 0.0074259999999999994,
							"pbg" : 0.000206
						}
					}
				]
			},
			{
				"as" : 5036,
				"relay" : 2,
				"bwa" : 235344,
				"bwc" : 48526,
				"roles" : {
					"middle" : 2,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000011,
					"pbm" : 0.000012,
					"pbe" : 0.000022
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 2,
						"bwa" : 235344,
						"bwc" : 48526,
						"roles" : {
							"middle" : 2,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbm" : 0.000012,
							"pbe" : 0.000022
						}
					}
				]
			},
			{
				"as" : 31736,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 49540,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbe" : 0.000012
				},
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 49540,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbe" : 0.000012
						}
					}
				]
			},
			{
				"as" : 198252,
				"relay" : 1,
				"bwa" : 53248,
				"bwc" : 11708,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000007,
					"pbm" : 0.00002
				},
				"countries" : [
					{
						"cc" : "BA",
						"relay" : 1,
						"bwa" : 53248,
						"bwc" : 11708,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000007,
							"pbm" : 0.00002
						}
					}
				]
			},
			{
				"as" : 9478,
				"relay" : 2,
				"bwa" : 133120,
				"bwc" : 22509,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 2,
						"bwa" : 133120,
						"bwc" : 22509,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 76570,
				"relay" : 2,
				"bwa" : 127749,
				"bwc" : 8615,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"fast" : 1,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbe" : 0.000009,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 2,
						"bwa" : 127749,
						"bwc" : 8615,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"fast" : 1,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbe" : 0.000009,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 55470,
				"relay" : 1,
				"bwa" : 1901167,
				"bwc" : 473899,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00008,
					"pbg" : 0.000173,
					"pbm" : 0.000068
				},
				"countries" : [
					{
						"cc" : "IN",
						"relay" : 1,
						"bwa" : 1901167,
						"bwc" : 473899,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00008,
							"pbg" : 0.000173,
							"pbm" : 0.000068
						}
					}
				]
			},
			{
				"as" : 396828,
				"relay" : 2,
				"bwa" : 2199552,
				"bwc" : 596270,
				"roles" : {
					"middle" : 2,
					"guard" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.0006529999999999999,
					"pbm" : 0.000382,
					"pbg" : 0.000362,
					"pbe" : 0.001214
				},
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 2,
						"bwa" : 2199552,
						"bwc" : 596270,
						"roles" : {
							"middle" : 2,
							"guard" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.0006529999999999999,
							"pbm" : 0.000382,
							"pbg" : 0.000362,
							"pbe" : 0.001214
						}
					}
				]
			},
			{
				"as" : 42964,
				"relay" : 1,
				"bwa" : 1405459,
				"bwc" : 983577,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000116,
					"pbg" : 0.000065,
					"pbm" : 0.000065,
					"pbe" : 0.000218
				},
				"countries" : [
					{
						"cc" : "HU",
						"relay" : 1,
						"bwa" : 1405459,
						"bwc" : 983577,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000116,
							"pbg" : 0.000065,
							"pbm" : 0.000065,
							"pbe" : 0.000218
						}
					}
				]
			},
			{
				"as" : 12035,
				"relay" : 1,
				"bwa" : 98304,
				"bwc" : 12900,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000013,
					"pbe" : 0.000039
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 98304,
						"bwc" : 12900,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000013,
							"pbe" : 0.000039
						}
					}
				]
			},
			{
				"as" : 24309,
				"relay" : 1,
				"bwa" : 95322,
				"bwc" : 50022,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000005,
					"pbe" : 0.000014
				},
				"countries" : [
					{
						"cc" : "IN",
						"relay" : 1,
						"bwa" : 95322,
						"bwc" : 50022,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000005,
							"pbe" : 0.000014
						}
					}
				]
			},
			{
				"as" : 6663,
				"relay" : 1,
				"bwa" : 307200,
				"bwc" : 103542,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000077,
					"pbe" : 0.00023
				},
				"countries" : [
					{
						"cc" : "RO",
						"relay" : 1,
						"bwa" : 307200,
						"bwc" : 103542,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000077,
							"pbe" : 0.00023
						}
					}
				]
			},
			{
				"as" : 22308,
				"relay" : 4,
				"bwa" : 296960,
				"bwc" : 32083,
				"roles" : {
					"middle" : 4,
					"exit" : 4,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2,
					"stable" : 2
				},
				"probs" : {
					"pbr" : 0.000064,
					"pbe" : 0.00019300000000000003
				},
				"countries" : [
					{
						"cc" : "LU",
						"relay" : 4,
						"bwa" : 296960,
						"bwc" : 32083,
						"roles" : {
							"middle" : 4,
							"exit" : 4,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2,
							"stable" : 2
						},
						"probs" : {
							"pbr" : 0.000064,
							"pbe" : 0.00019300000000000003
						}
					}
				]
			},
			{
				"as" : 49170,
				"relay" : 1,
				"bwa" : 98304,
				"bwc" : 8247,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000018
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 98304,
						"bwc" : 8247,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000018
						}
					}
				]
			},
			{
				"as" : 141464,
				"relay" : 4,
				"bwa" : 4054525,
				"bwc" : 3694605,
				"roles" : {
					"middle" : 4,
					"guard" : 2,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.001052,
					"pbm" : 0.001609,
					"pbg" : 0.000676,
					"pbe" : 0.00087
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 4054525,
						"bwc" : 3694605,
						"roles" : {
							"middle" : 4,
							"guard" : 2,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.001052,
							"pbm" : 0.001609,
							"pbg" : 0.000676,
							"pbe" : 0.00087
						}
					}
				]
			},
			{
				"as" : 9269,
				"relay" : 1,
				"bwa" : 141843,
				"bwc" : 22338,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbe" : 0.000017
				},
				"countries" : [
					{
						"cc" : "HK",
						"relay" : 1,
						"bwa" : 141843,
						"bwc" : 22338,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbe" : 0.000017
						}
					}
				]
			},
			{
				"as" : 73,
				"relay" : 1,
				"bwa" : 4864070,
				"bwc" : 3750066,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.001878,
					"pbg" : 0.004039,
					"pbm" : 0.001596
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 4864070,
						"bwc" : 3750066,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001878,
							"pbg" : 0.004039,
							"pbm" : 0.001596
						}
					}
				]
			},
			{
				"as" : 27536,
				"relay" : 2,
				"bwa" : 153600,
				"bwc" : 18202,
				"roles" : {
					"middle" : 2
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000011,
					"pbm" : 0.000034
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 2,
						"bwa" : 153600,
						"bwc" : 18202,
						"roles" : {
							"middle" : 2
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbm" : 0.000034
						}
					}
				]
			},
			{
				"as" : 3061,
				"relay" : 1,
				"bwa" : 195280,
				"bwc" : 172696,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000031,
					"pbm" : 0.000094
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 195280,
						"bwc" : 172696,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000031,
							"pbm" : 0.000094
						}
					}
				]
			},
			{
				"as" : 56617,
				"relay" : 1,
				"bwa" : 65536,
				"bwc" : 1225,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbe" : 0.000004
				},
				"countries" : [
					{
						"cc" : "LV",
						"relay" : 1,
						"bwa" : 65536,
						"bwc" : 1225,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbe" : 0.000004
						}
					}
				]
			},
			{
				"as" : 45753,
				"relay" : 1,
				"bwa" : 88205,
				"bwc" : 12930,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000004
				},
				"countries" : [
					{
						"cc" : "HK",
						"relay" : 1,
						"bwa" : 88205,
						"bwc" : 12930,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000004
						}
					}
				]
			},
			{
				"as" : 34702,
				"relay" : 1,
				"bwa" : 92160,
				"bwc" : 32974,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000007,
					"pbm" : 0.000022
				},
				"countries" : [
					{
						"cc" : "EE",
						"relay" : 1,
						"bwa" : 92160,
						"bwc" : 32974,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000007,
							"pbm" : 0.000022
						}
					}
				]
			},
			{
				"as" : 17676,
				"relay" : 1,
				"bwa" : 126976,
				"bwc" : 141867,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbe" : 0.000004
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 126976,
						"bwc" : 141867,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbe" : 0.000004
						}
					}
				]
			},
			{
				"as" : 9063,
				"relay" : 1,
				"bwa" : 197064,
				"bwc" : 58795,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000012,
					"pbe" : 0.000035
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 197064,
						"bwc" : 58795,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000012,
							"pbe" : 0.000035
						}
					}
				]
			},
			{
				"as" : 35018,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 2866,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.00001
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 2866,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.00001
						}
					}
				]
			},
			{
				"as" : 12083,
				"relay" : 1,
				"bwa" : 202752,
				"bwc" : 29921,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 202752,
						"bwc" : 29921,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 37956,
				"relay" : 2,
				"bwa" : 122880,
				"bwc" : 43159,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"stable" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000011,
					"pbe" : 0.000009,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 122880,
						"bwc" : 43159,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"stable" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbe" : 0.000009,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 10508,
				"relay" : 1,
				"bwa" : 196608,
				"bwc" : 34238,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000019,
					"pbg" : 0.000041,
					"pbm" : 0.000016
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 196608,
						"bwc" : 34238,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000019,
							"pbg" : 0.000041,
							"pbm" : 0.000016
						}
					}
				]
			},
			{
				"as" : 18126,
				"relay" : 1,
				"bwa" : 536683,
				"bwc" : 34552,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000011,
					"pbm" : 0.000034
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 536683,
						"bwc" : 34552,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbm" : 0.000034
						}
					}
				]
			},
			{
				"as" : 34594,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 332,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "HR",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 332,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 25795,
				"relay" : 1,
				"bwa" : 153600,
				"bwc" : 104989,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000012,
					"pbm" : 0.000035
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 153600,
						"bwc" : 104989,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000012,
							"pbm" : 0.000035
						}
					}
				]
			},
			{
				"as" : 3790,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 26012,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000011,
					"pbe" : 0.000032
				},
				"countries" : [
					{
						"cc" : "CR",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 26012,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbe" : 0.000032
						}
					}
				]
			},
			{
				"as" : 18286,
				"relay" : 2,
				"bwa" : 356352,
				"bwc" : 140128,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000049,
					"pbg" : 0.000098,
					"pbm" : 0.000048
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 356352,
						"bwc" : 140128,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000049,
							"pbg" : 0.000098,
							"pbm" : 0.000048
						}
					}
				]
			},
			{
				"as" : 199520,
				"relay" : 8,
				"bwa" : 7462837,
				"bwc" : 6141754,
				"roles" : {
					"guard" : 4,
					"middle" : 8,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 6,
					"stable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.001955,
					"pbg" : 0.000534,
					"pbm" : 0.005329
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 7462837,
						"bwc" : 6141754,
						"roles" : {
							"guard" : 4,
							"middle" : 8,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 6,
							"stable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.001955,
							"pbg" : 0.000534,
							"pbm" : 0.005329
						}
					}
				]
			},
			{
				"as" : 8896,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 823433,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000293,
					"pbg" : 0.00063,
					"pbm" : 0.000249
				},
				"countries" : [
					{
						"cc" : "NO",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 823433,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000293,
							"pbg" : 0.00063,
							"pbm" : 0.000249
						}
					}
				]
			},
			{
				"as" : 52736,
				"relay" : 4,
				"bwa" : 330752,
				"bwc" : 25223,
				"roles" : {
					"middle" : 4,
					"dir" : 3
				},
				"flags" : {
					"fast" : 4
				},
				"probs" : {
					"pbr" : 0.000023,
					"pbm" : 0.000069
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 330752,
						"bwc" : 25223,
						"roles" : {
							"middle" : 4,
							"dir" : 3
						},
						"flags" : {
							"fast" : 4
						},
						"probs" : {
							"pbr" : 0.000023,
							"pbm" : 0.000069
						}
					}
				]
			},
			{
				"as" : 17746,
				"relay" : 1,
				"bwa" : 44653,
				"bwc" : 1012,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000002
				},
				"countries" : [
					{
						"cc" : "NZ",
						"relay" : 1,
						"bwa" : 44653,
						"bwc" : 1012,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000002
						}
					}
				]
			},
			{
				"as" : 9105,
				"relay" : 1,
				"bwa" : 140254,
				"bwc" : 19459,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000007,
					"pbm" : 0.000022
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 140254,
						"bwc" : 19459,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000007,
							"pbm" : 0.000022
						}
					}
				]
			},
			{
				"as" : 21502,
				"relay" : 1,
				"bwa" : 149933,
				"bwc" : 20367,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000018
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 149933,
						"bwc" : 20367,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000018
						}
					}
				]
			},
			{
				"as" : 34,
				"relay" : 1,
				"bwa" : 593792,
				"bwc" : 92104,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000028,
					"pbm" : 0.000083
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 593792,
						"bwc" : 92104,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000028,
							"pbm" : 0.000083
						}
					}
				]
			},
			{
				"as" : 17416,
				"relay" : 2,
				"bwa" : 1632644,
				"bwc" : 1128892,
				"roles" : {
					"middle" : 2,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00037799999999999997,
					"pbm" : 0.00041,
					"pbg" : 0.000722
				},
				"countries" : [
					{
						"cc" : "RO",
						"relay" : 2,
						"bwa" : 1632644,
						"bwc" : 1128892,
						"roles" : {
							"middle" : 2,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00037799999999999997,
							"pbm" : 0.00041,
							"pbg" : 0.000722
						}
					}
				]
			},
			{
				"as" : 33139,
				"relay" : 1,
				"bwa" : 25600,
				"bwc" : 133,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 25600,
						"bwc" : 133,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 12874,
				"relay" : 1,
				"bwa" : 1219584,
				"bwc" : 0,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00024,
					"pbm" : 0.000719
				},
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 1,
						"bwa" : 1219584,
						"bwc" : 0,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00024,
							"pbm" : 0.000719
						}
					}
				]
			},
			{
				"as" : 3651,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 123,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 123,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 26560,
				"relay" : 8,
				"bwa" : 3176170,
				"bwc" : 1869552,
				"roles" : {
					"middle" : 8,
					"dir" : 6,
					"exit" : 2
				},
				"flags" : {
					"fast" : 8
				},
				"probs" : {
					"pbr" : 0.000775,
					"pbm" : 0.001919,
					"pbe" : 0.000406
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 3176170,
						"bwc" : 1869552,
						"roles" : {
							"middle" : 8,
							"dir" : 6,
							"exit" : 2
						},
						"flags" : {
							"fast" : 8
						},
						"probs" : {
							"pbr" : 0.000775,
							"pbm" : 0.001919,
							"pbe" : 0.000406
						}
					}
				]
			},
			{
				"as" : 31660,
				"relay" : 2,
				"bwa" : 819200,
				"bwc" : 66959,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000149,
					"pbm" : 0.00044800000000000005
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 2,
						"bwa" : 819200,
						"bwc" : 66959,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000149,
							"pbm" : 0.00044800000000000005
						}
					}
				]
			},
			{
				"as" : 61924,
				"relay" : 2,
				"bwa" : 943063,
				"bwc" : 827229,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000169,
					"pbm" : 0.000507
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 943063,
						"bwc" : 827229,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000169,
							"pbm" : 0.000507
						}
					}
				]
			},
			{
				"as" : 47692,
				"relay" : 1,
				"bwa" : 3513228,
				"bwc" : 1458033,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000861,
					"pbe" : 0.002582
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 3513228,
						"bwc" : 1458033,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000861,
							"pbe" : 0.002582
						}
					}
				]
			},
			{
				"as" : 35244,
				"relay" : 1,
				"bwa" : 196608,
				"bwc" : 166266,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000041,
					"pbm" : 0.000123
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 196608,
						"bwc" : 166266,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000041,
							"pbm" : 0.000123
						}
					}
				]
			},
			{
				"as" : 29169,
				"relay" : 1,
				"bwa" : 1381781,
				"bwc" : 1115963,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000265,
					"pbg" : 0.000148,
					"pbm" : 0.000148,
					"pbe" : 0.000497
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 1381781,
						"bwc" : 1115963,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000265,
							"pbg" : 0.000148,
							"pbm" : 0.000148,
							"pbe" : 0.000497
						}
					}
				]
			},
			{
				"as" : 6866,
				"relay" : 1,
				"bwa" : 63488,
				"bwc" : 3143,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbm" : 0.000012
				},
				"countries" : [
					{
						"cc" : "GR",
						"relay" : 1,
						"bwa" : 63488,
						"bwc" : 3143,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000012
						}
					}
				]
			},
			{
				"as" : 130208,
				"relay" : 8,
				"bwa" : 7243279,
				"bwc" : 6114548,
				"roles" : {
					"guard" : 5,
					"middle" : 8,
					"dir" : 6,
					"exit" : 3
				},
				"flags" : {
					"fastStable" : 7,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.001238,
					"pbg" : 0.002393,
					"pbm" : 0.001136,
					"pbe" : 0.000181
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 8,
						"bwa" : 7243279,
						"bwc" : 6114548,
						"roles" : {
							"guard" : 5,
							"middle" : 8,
							"dir" : 6,
							"exit" : 3
						},
						"flags" : {
							"fastStable" : 7,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.001238,
							"pbg" : 0.002393,
							"pbm" : 0.001136,
							"pbe" : 0.000181
						}
					}
				]
			},
			{
				"as" : 50673,
				"relay" : 1,
				"bwa" : 307200,
				"bwc" : 109980,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000081,
					"pbg" : 0.000046,
					"pbm" : 0.000046,
					"pbe" : 0.000153
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 307200,
						"bwc" : 109980,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000081,
							"pbg" : 0.000046,
							"pbm" : 0.000046,
							"pbe" : 0.000153
						}
					}
				]
			},
			{
				"as" : 63376,
				"relay" : 8,
				"bwa" : 3052543,
				"bwc" : 1604294,
				"roles" : {
					"guard" : 2,
					"middle" : 8,
					"dir" : 8
				},
				"flags" : {
					"fastStable" : 6,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000492,
					"pbg" : 0.000942,
					"pbm" : 0.000534
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 3052543,
						"bwc" : 1604294,
						"roles" : {
							"guard" : 2,
							"middle" : 8,
							"dir" : 8
						},
						"flags" : {
							"fastStable" : 6,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000492,
							"pbg" : 0.000942,
							"pbm" : 0.000534
						}
					}
				]
			},
			{
				"as" : 59469,
				"relay" : 1,
				"bwa" : 15406716,
				"bwc" : 12947137,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.005117,
					"pbg" : 0.002868,
					"pbm" : 0.002867,
					"pbe" : 0.009614
				},
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 15406716,
						"bwc" : 12947137,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.005117,
							"pbg" : 0.002868,
							"pbm" : 0.002867,
							"pbe" : 0.009614
						}
					}
				]
			},
			{
				"as" : 22772,
				"relay" : 1,
				"bwa" : 655360,
				"bwc" : 161333,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000088,
					"pbg" : 0.000189,
					"pbm" : 0.000075
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 655360,
						"bwc" : 161333,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000088,
							"pbg" : 0.000189,
							"pbm" : 0.000075
						}
					}
				]
			},
			{
				"as" : 49544,
				"relay" : 1,
				"bwa" : 9225181,
				"bwc" : 7020858,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.002839,
					"pbg" : 0.006106,
					"pbm" : 0.002412
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 9225181,
						"bwc" : 7020858,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.002839,
							"pbg" : 0.006106,
							"pbm" : 0.002412
						}
					}
				]
			},
			{
				"as" : 33070,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 23265,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbm" : 0.000026
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 23265,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbm" : 0.000026
						}
					}
				]
			},
			{
				"as" : 10507,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 39,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 39,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 30158,
				"relay" : 1,
				"bwa" : 5181,
				"bwc" : 72,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000002
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 5181,
						"bwc" : 72,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000002
						}
					}
				]
			},
			{
				"as" : 35612,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 49,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 49,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 75120,
				"relay" : 2,
				"bwa" : 484813,
				"bwc" : 106875,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000031,
					"pbm" : 0.000092
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 2,
						"bwa" : 484813,
						"bwc" : 106875,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000031,
							"pbm" : 0.000092
						}
					}
				]
			},
			{
				"as" : 154096,
				"relay" : 8,
				"bwa" : 7526928,
				"bwc" : 3695603,
				"roles" : {
					"middle" : 8,
					"dir" : 6,
					"guard" : 3,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 4,
					"fast" : 3,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.001599,
					"pbm" : 0.003724,
					"pbg" : 0.0008770000000000001,
					"pbe" : 0.000199
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 7526928,
						"bwc" : 3695603,
						"roles" : {
							"middle" : 8,
							"dir" : 6,
							"guard" : 3,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 4,
							"fast" : 3,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001599,
							"pbm" : 0.003724,
							"pbg" : 0.0008770000000000001,
							"pbe" : 0.000199
						}
					}
				]
			},
			{
				"as" : 8615,
				"relay" : 1,
				"bwa" : 786432,
				"bwc" : 630707,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000269,
					"pbg" : 0.000579,
					"pbm" : 0.000229
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 786432,
						"bwc" : 630707,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000269,
							"pbg" : 0.000579,
							"pbm" : 0.000229
						}
					}
				]
			},
			{
				"as" : 12392,
				"relay" : 1,
				"bwa" : 196169,
				"bwc" : 91748,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000018,
					"pbm" : 0.000054
				},
				"countries" : [
					{
						"cc" : "BE",
						"relay" : 1,
						"bwa" : 196169,
						"bwc" : 91748,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000018,
							"pbm" : 0.000054
						}
					}
				]
			},
			{
				"as" : 250,
				"relay" : 1,
				"bwa" : 83113,
				"bwc" : 13845,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbe" : 0.000004
				},
				"countries" : [
					{
						"cc" : "EU",
						"relay" : 1,
						"bwa" : 83113,
						"bwc" : 13845,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbe" : 0.000004
						}
					}
				]
			},
			{
				"as" : 21632,
				"relay" : 4,
				"bwa" : 7903767,
				"bwc" : 5897254,
				"roles" : {
					"guard" : 4,
					"middle" : 4,
					"dir" : 4,
					"exit" : 2
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.002236,
					"pbg" : 0.001921,
					"pbm" : 0.0013739999999999998,
					"pbe" : 0.0034130000000000002
				},
				"countries" : [
					{
						"cc" : "GR",
						"relay" : 4,
						"bwa" : 7903767,
						"bwc" : 5897254,
						"roles" : {
							"guard" : 4,
							"middle" : 4,
							"dir" : 4,
							"exit" : 2
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.002236,
							"pbg" : 0.001921,
							"pbm" : 0.0013739999999999998,
							"pbe" : 0.0034130000000000002
						}
					}
				]
			},
			{
				"as" : 35888,
				"relay" : 4,
				"bwa" : 9779371,
				"bwc" : 8075098,
				"roles" : {
					"middle" : 4,
					"dir" : 4,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.00212,
					"pbm" : 0.005412,
					"pbg" : 0.000948
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 9779371,
						"bwc" : 8075098,
						"roles" : {
							"middle" : 4,
							"dir" : 4,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.00212,
							"pbm" : 0.005412,
							"pbg" : 0.000948
						}
					}
				]
			},
			{
				"as" : 45570,
				"relay" : 1,
				"bwa" : 1059485,
				"bwc" : 253678,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000055,
					"pbg" : 0.000118,
					"pbm" : 0.000046
				},
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 1,
						"bwa" : 1059485,
						"bwc" : 253678,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000055,
							"pbg" : 0.000118,
							"pbm" : 0.000046
						}
					}
				]
			},
			{
				"as" : 83300,
				"relay" : 4,
				"bwa" : 710084,
				"bwc" : 237004,
				"roles" : {
					"middle" : 4,
					"dir" : 4,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 2,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000096,
					"pbm" : 0.000156,
					"pbg" : 0.000132
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 710084,
						"bwc" : 237004,
						"roles" : {
							"middle" : 4,
							"dir" : 4,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 2,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000096,
							"pbm" : 0.000156,
							"pbg" : 0.000132
						}
					}
				]
			},
			{
				"as" : 13076,
				"relay" : 4,
				"bwa" : 169662,
				"bwc" : 7542,
				"roles" : {
					"middle" : 4,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"notFastStable" : 2,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000013000000000000001,
					"pbm" : 0.000039
				},
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 4,
						"bwa" : 169662,
						"bwc" : 7542,
						"roles" : {
							"middle" : 4,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"notFastStable" : 2,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000013000000000000001,
							"pbm" : 0.000039
						}
					}
				]
			},
			{
				"as" : 224,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 979492,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000223,
					"pbm" : 0.00067
				},
				"countries" : [
					{
						"cc" : "NO",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 979492,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000223,
							"pbm" : 0.00067
						}
					}
				]
			},
			{
				"as" : 20231,
				"relay" : 1,
				"bwa" : 171009,
				"bwc" : 0,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 171009,
						"bwc" : 0,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 21378,
				"relay" : 1,
				"bwa" : 61344,
				"bwc" : 1134,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000004
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 61344,
						"bwc" : 1134,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000004
						}
					}
				]
			},
			{
				"as" : 45454,
				"relay" : 1,
				"bwa" : 84191,
				"bwc" : 23582,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000006
				},
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 1,
						"bwa" : 84191,
						"bwc" : 23582,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000006
						}
					}
				]
			},
			{
				"as" : 21599,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 11719,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbe" : 0.000024
				},
				"countries" : [
					{
						"cc" : "PA",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 11719,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbe" : 0.000024
						}
					}
				]
			},
			{
				"as" : 35274,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 7815,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000008
				},
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 7815,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000008
						}
					}
				]
			},
			{
				"as" : 197145,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 840606,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000356,
					"pbg" : 0.000766,
					"pbm" : 0.000303
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 840606,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000356,
							"pbg" : 0.000766,
							"pbm" : 0.000303
						}
					}
				]
			},
			{
				"as" : 27553,
				"relay" : 1,
				"bwa" : 100599,
				"bwc" : 33228,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000005,
					"pbm" : 0.000015
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 100599,
						"bwc" : 33228,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000005,
							"pbm" : 0.000015
						}
					}
				]
			},
			{
				"as" : 29182,
				"relay" : 1,
				"bwa" : 1290240,
				"bwc" : 1193979,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000433,
					"pbm" : 0.0013
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1290240,
						"bwc" : 1193979,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000433,
							"pbm" : 0.0013
						}
					}
				]
			},
			{
				"as" : 12430,
				"relay" : 1,
				"bwa" : 7168,
				"bwc" : 0,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000003
				},
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 1,
						"bwa" : 7168,
						"bwc" : 0,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000003
						}
					}
				]
			},
			{
				"as" : 274,
				"relay" : 2,
				"bwa" : 194560,
				"bwc" : 16324,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000014999999999999999,
					"pbm" : 0.000044999999999999996
				},
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 2,
						"bwa" : 194560,
						"bwc" : 16324,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000014999999999999999,
							"pbm" : 0.000044999999999999996
						}
					}
				]
			},
			{
				"as" : 28986,
				"relay" : 1,
				"bwa" : 917504,
				"bwc" : 789230,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000277,
					"pbg" : 0.000155,
					"pbm" : 0.000155,
					"pbe" : 0.00052
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 917504,
						"bwc" : 789230,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000277,
							"pbg" : 0.000155,
							"pbm" : 0.000155,
							"pbe" : 0.00052
						}
					}
				]
			},
			{
				"as" : 12271,
				"relay" : 1,
				"bwa" : 524288,
				"bwc" : 181990,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000123,
					"pbg" : 0.000265,
					"pbm" : 0.000105
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 524288,
						"bwc" : 181990,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000123,
							"pbg" : 0.000265,
							"pbm" : 0.000105
						}
					}
				]
			},
			{
				"as" : 25074,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 537715,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000266,
					"pbg" : 0.000572,
					"pbm" : 0.000226
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 537715,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000266,
							"pbg" : 0.000572,
							"pbm" : 0.000226
						}
					}
				]
			},
			{
				"as" : 10887,
				"relay" : 1,
				"bwa" : 61440,
				"bwc" : 28213,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbm" : 0.000012
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 61440,
						"bwc" : 28213,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000012
						}
					}
				]
			},
			{
				"as" : 174,
				"relay" : 1,
				"bwa" : 8115375,
				"bwc" : 6490109,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.002292,
					"pbg" : 0.004929,
					"pbm" : 0.001947
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 8115375,
						"bwc" : 6490109,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.002292,
							"pbg" : 0.004929,
							"pbm" : 0.001947
						}
					}
				]
			},
			{
				"as" : 39554,
				"relay" : 1,
				"bwa" : 612352,
				"bwc" : 210356,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000092,
					"pbe" : 0.000277
				},
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 612352,
						"bwc" : 210356,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000092,
							"pbe" : 0.000277
						}
					}
				]
			},
			{
				"as" : 51377,
				"relay" : 1,
				"bwa" : 4336654,
				"bwc" : 1498542,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00083,
					"pbg" : 0.000465,
					"pbm" : 0.000465,
					"pbe" : 0.001559
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 4336654,
						"bwc" : 1498542,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00083,
							"pbg" : 0.000465,
							"pbm" : 0.000465,
							"pbe" : 0.001559
						}
					}
				]
			},
			{
				"as" : 26729,
				"relay" : 1,
				"bwa" : 35540,
				"bwc" : 6758,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbe" : 0.000002
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 35540,
						"bwc" : 6758,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbe" : 0.000002
						}
					}
				]
			},
			{
				"as" : 7600,
				"relay" : 1,
				"bwa" : 62121,
				"bwc" : 2070,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000004
				},
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 1,
						"bwa" : 62121,
						"bwc" : 2070,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000004
						}
					}
				]
			},
			{
				"as" : 27756,
				"relay" : 4,
				"bwa" : 10597998,
				"bwc" : 7635741,
				"roles" : {
					"middle" : 4,
					"dir" : 2,
					"guard" : 2
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.002705,
					"pbm" : 0.007022,
					"pbg" : 0.001093
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 10597998,
						"bwc" : 7635741,
						"roles" : {
							"middle" : 4,
							"dir" : 2,
							"guard" : 2
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.002705,
							"pbm" : 0.007022,
							"pbg" : 0.001093
						}
					}
				]
			},
			{
				"as" : 24955,
				"relay" : 1,
				"bwa" : 128000,
				"bwc" : 36577,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00001,
					"pbm" : 0.00003
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 128000,
						"bwc" : 36577,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00001,
							"pbm" : 0.00003
						}
					}
				]
			},
			{
				"as" : 29580,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 946264,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.0003,
					"pbg" : 0.000646,
					"pbm" : 0.000255
				},
				"countries" : [
					{
						"cc" : "BG",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 946264,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.0003,
							"pbg" : 0.000646,
							"pbm" : 0.000255
						}
					}
				]
			},
			{
				"as" : 199520,
				"relay" : 8,
				"bwa" : 10106880,
				"bwc" : 8024106,
				"roles" : {
					"guard" : 7,
					"middle" : 8,
					"dir" : 4,
					"exit" : 2
				},
				"flags" : {
					"fastStable" : 7,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.001824,
					"pbg" : 0.0036519999999999994,
					"pbm" : 0.001544,
					"pbe" : 0.00028
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 10106880,
						"bwc" : 8024106,
						"roles" : {
							"guard" : 7,
							"middle" : 8,
							"dir" : 4,
							"exit" : 2
						},
						"flags" : {
							"fastStable" : 7,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.001824,
							"pbg" : 0.0036519999999999994,
							"pbm" : 0.001544,
							"pbe" : 0.00028
						}
					}
				]
			},
			{
				"as" : 140912,
				"relay" : 4,
				"bwa" : 246975,
				"bwc" : 34901,
				"roles" : {
					"middle" : 4,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2,
					"stable" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000014,
					"pbm" : 0.000041
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 4,
						"bwa" : 246975,
						"bwc" : 34901,
						"roles" : {
							"middle" : 4,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2,
							"stable" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000014,
							"pbm" : 0.000041
						}
					}
				]
			},
			{
				"as" : 45711,
				"relay" : 1,
				"bwa" : 100912,
				"bwc" : 6537,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbe" : 0.000012
				},
				"countries" : [
					{
						"cc" : "ID",
						"relay" : 1,
						"bwa" : 100912,
						"bwc" : 6537,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbe" : 0.000012
						}
					}
				]
			},
			{
				"as" : 12231,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 26156,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000008
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 26156,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000008
						}
					}
				]
			},
			{
				"as" : 57146,
				"relay" : 2,
				"bwa" : 135168,
				"bwc" : 12257,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000017
				},
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 2,
						"bwa" : 135168,
						"bwc" : 12257,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000017
						}
					}
				]
			},
			{
				"as" : 41508,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 23904,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000011,
					"pbm" : 0.000032
				},
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 23904,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbm" : 0.000032
						}
					}
				]
			},
			{
				"as" : 98576,
				"relay" : 8,
				"bwa" : 937099,
				"bwc" : 363919,
				"roles" : {
					"middle" : 8,
					"dir" : 5,
					"exit" : 2,
					"guard" : 1
				},
				"flags" : {
					"fast" : 5,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.00006,
					"pbm" : 0.000108,
					"pbe" : 0.000031,
					"pbg" : 0.000039
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 8,
						"bwa" : 937099,
						"bwc" : 363919,
						"roles" : {
							"middle" : 8,
							"dir" : 5,
							"exit" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 5,
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.00006,
							"pbm" : 0.000108,
							"pbe" : 0.000031,
							"pbg" : 0.000039
						}
					}
				]
			},
			{
				"as" : 22989,
				"relay" : 1,
				"bwa" : 3712952,
				"bwc" : 2283376,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00051,
					"pbg" : 0.001097,
					"pbm" : 0.000433
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 3712952,
						"bwc" : 2283376,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00051,
							"pbg" : 0.001097,
							"pbm" : 0.000433
						}
					}
				]
			},
			{
				"as" : 115336,
				"relay" : 2,
				"bwa" : 10506240,
				"bwc" : 695,
				"roles" : {
					"middle" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.002044,
					"pbm" : 0.006122,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 10506240,
						"bwc" : 695,
						"roles" : {
							"middle" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.002044,
							"pbm" : 0.006122,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 84320,
				"relay" : 2,
				"bwa" : 153600,
				"bwc" : 21446,
				"roles" : {
					"middle" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000013000000000000001,
					"pbm" : 0.000039999999999999996
				},
				"countries" : [
					{
						"cc" : "BE",
						"relay" : 2,
						"bwa" : 153600,
						"bwc" : 21446,
						"roles" : {
							"middle" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000013000000000000001,
							"pbm" : 0.000039999999999999996
						}
					}
				]
			},
			{
				"as" : 16810,
				"relay" : 1,
				"bwa" : 91136,
				"bwc" : 17677,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000005,
					"pbm" : 0.000014
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 91136,
						"bwc" : 17677,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000005,
							"pbm" : 0.000014
						}
					}
				]
			},
			{
				"as" : 11290,
				"relay" : 2,
				"bwa" : 161792,
				"bwc" : 18692,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000009999999999999999,
					"pbm" : 0.000029
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 2,
						"bwa" : 161792,
						"bwc" : 18692,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000009999999999999999,
							"pbm" : 0.000029
						}
					}
				]
			},
			{
				"as" : 2701,
				"relay" : 1,
				"bwa" : 81920,
				"bwc" : 29793,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000013,
					"pbm" : 0.000038
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 81920,
						"bwc" : 29793,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000013,
							"pbm" : 0.000038
						}
					}
				]
			},
			{
				"as" : 35816,
				"relay" : 1,
				"bwa" : 303369,
				"bwc" : 76242,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00001,
					"pbm" : 0.000029
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 303369,
						"bwc" : 76242,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00001,
							"pbm" : 0.000029
						}
					}
				]
			},
			{
				"as" : 32475,
				"relay" : 1,
				"bwa" : 921600,
				"bwc" : 665037,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000147,
					"pbg" : 0.000315,
					"pbm" : 0.000125
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 921600,
						"bwc" : 665037,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000147,
							"pbg" : 0.000315,
							"pbm" : 0.000125
						}
					}
				]
			},
			{
				"as" : 13301,
				"relay" : 1,
				"bwa" : 1112922,
				"bwc" : 825634,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000278,
					"pbg" : 0.000156,
					"pbm" : 0.000156,
					"pbe" : 0.000522
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 1112922,
						"bwc" : 825634,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000278,
							"pbg" : 0.000156,
							"pbm" : 0.000156,
							"pbe" : 0.000522
						}
					}
				]
			},
			{
				"as" : 23136,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 41955,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbm" : 0.000027
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 41955,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbm" : 0.000027
						}
					}
				]
			},
			{
				"as" : 8342,
				"relay" : 1,
				"bwa" : 32768,
				"bwc" : 10150,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 32768,
						"bwc" : 10150,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 63376,
				"relay" : 8,
				"bwa" : 832565,
				"bwc" : 203243,
				"roles" : {
					"middle" : 8,
					"dir" : 5,
					"exit" : 1,
					"guard" : 1
				},
				"flags" : {
					"stable" : 1,
					"fast" : 4,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.000062,
					"pbm" : 0.000139,
					"pbe" : 0.000024,
					"pbg" : 0.000023
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 8,
						"bwa" : 832565,
						"bwc" : 203243,
						"roles" : {
							"middle" : 8,
							"dir" : 5,
							"exit" : 1,
							"guard" : 1
						},
						"flags" : {
							"stable" : 1,
							"fast" : 4,
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.000062,
							"pbm" : 0.000139,
							"pbe" : 0.000024,
							"pbg" : 0.000023
						}
					}
				]
			},
			{
				"as" : 1312,
				"relay" : 1,
				"bwa" : 1843200,
				"bwc" : 1836775,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000535,
					"pbg" : 0.001151,
					"pbm" : 0.000455
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1843200,
						"bwc" : 1836775,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000535,
							"pbg" : 0.001151,
							"pbm" : 0.000455
						}
					}
				]
			},
			{
				"as" : 86700,
				"relay" : 2,
				"bwa" : 22485303,
				"bwc" : 16906080,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.010265000000000002,
					"pbg" : 0.005898,
					"pbm" : 0.005778999999999999,
					"pbe" : 0.019117
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 22485303,
						"bwc" : 16906080,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.010265000000000002,
							"pbg" : 0.005898,
							"pbm" : 0.005778999999999999,
							"pbe" : 0.019117
						}
					}
				]
			},
			{
				"as" : 11398,
				"relay" : 1,
				"bwa" : 73426,
				"bwc" : 4880,
					"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000005,
					"pbe" : 0.000016
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 73426,
						"bwc" : 4880,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000005,
							"pbe" : 0.000016
						}
					}
				]
			},
			{
				"as" : 12836,
				"relay" : 4,
				"bwa" : 247808,
				"bwc" : 41832,
				"roles" : {
					"middle" : 4,
					"dir" : 3
				},
				"flags" : {
					"fast" : 4
				},
				"probs" : {
					"pbr" : 0.000011,
					"pbm" : 0.000035
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 247808,
						"bwc" : 41832,
						"roles" : {
							"middle" : 4,
							"dir" : 3
						},
						"flags" : {
							"fast" : 4
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbm" : 0.000035
						}
					}
				]
			},
			{
				"as" : 83092,
				"relay" : 4,
				"bwa" : 595968,
				"bwc" : 298217,
				"roles" : {
					"guard" : 2,
					"middle" : 4,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000066,
					"pbg" : 0.000118,
					"pbm" : 0.000081
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 595968,
						"bwc" : 298217,
						"roles" : {
							"guard" : 2,
							"middle" : 4,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.000066,
							"pbg" : 0.000118,
							"pbm" : 0.000081
						}
					}
				]
			},
			{
				"as" : 6893,
				"relay" : 1,
				"bwa" : 10991674,
				"bwc" : 7806593,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00457,
					"pbg" : 0.009827,
					"pbm" : 0.003882
				},
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 1,
						"bwa" : 10991674,
						"bwc" : 7806593,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00457,
							"pbg" : 0.009827,
							"pbm" : 0.003882
						}
					}
				]
			},
			{
				"as" : 35041,
				"relay" : 1,
				"bwa" : 2097152,
				"bwc" : 2081629,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000444,
					"pbg" : 0.000954,
					"pbm" : 0.000377
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 2097152,
						"bwc" : 2081629,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000444,
							"pbg" : 0.000954,
							"pbm" : 0.000377
						}
					}
				]
			},
			{
				"as" : 8767,
				"relay" : 1,
				"bwa" : 61440,
				"bwc" : 50341,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbm" : 0.000013
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 61440,
						"bwc" : 50341,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000013
						}
					}
				]
			},
			{
				"as" : 7545,
				"relay" : 1,
				"bwa" : 28264,
				"bwc" : 199,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000003
				},
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 1,
						"bwa" : 28264,
						"bwc" : 199,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000003
						}
					}
				]
			},
			{
				"as" : 30880,
				"relay" : 1,
				"bwa" : 12388351,
				"bwc" : 10149555,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.006241,
					"pbg" : 0.003498,
					"pbm" : 0.003497,
					"pbe" : 0.011726
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 12388351,
						"bwc" : 10149555,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.006241,
							"pbg" : 0.003498,
							"pbm" : 0.003497,
							"pbe" : 0.011726
						}
					}
				]
			},
			{
				"as" : 788076,
				"relay" : 4,
				"bwa" : 24898980,
				"bwc" : 5322622,
				"roles" : {
					"guard" : 2,
					"middle" : 4
				},
				"flags" : {
					"fastStable" : 2,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.014211999999999999,
					"pbg" : 0.011926,
					"pbm" : 0.030709
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 4,
						"bwa" : 24898980,
						"bwc" : 5322622,
						"roles" : {
							"guard" : 2,
							"middle" : 4
						},
						"flags" : {
							"fastStable" : 2,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.014211999999999999,
							"pbg" : 0.011926,
							"pbm" : 0.030709
						}
					}
				]
			},
			{
				"as" : 70940,
				"relay" : 2,
				"bwa" : 358400,
				"bwc" : 128499,
				"roles" : {
					"middle" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000053,
					"pbe" : 0.000116,
					"pbm" : 0.000043
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 358400,
						"bwc" : 128499,
						"roles" : {
							"middle" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000053,
							"pbe" : 0.000116,
							"pbm" : 0.000043
						}
					}
				]
			},
			{
				"as" : 17120,
				"relay" : 2,
				"bwa" : 639708,
				"bwc" : 433864,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000076,
					"pbg" : 0.000156,
					"pbm" : 0.00007000000000000001
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 639708,
						"bwc" : 433864,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000076,
							"pbg" : 0.000156,
							"pbm" : 0.00007000000000000001
						}
					}
				]
			},
			{
				"as" : 72702,
				"relay" : 2,
				"bwa" : 230400,
				"bwc" : 81626,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000019999999999999998,
					"pbm" : 0.000059
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 230400,
						"bwc" : 81626,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000019999999999999998,
							"pbm" : 0.000059
						}
					}
				]
			},
			{
				"as" : 59124,
				"relay" : 2,
				"bwa" : 200704,
				"bwc" : 101265,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000012,
					"pbm" : 0.000022,
					"pbe" : 0.000016
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 200704,
						"bwc" : 101265,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000012,
							"pbm" : 0.000022,
							"pbe" : 0.000016
						}
					}
				]
			},
			{
				"as" : 50463,
				"relay" : 1,
				"bwa" : 30720,
				"bwc" : 168,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "IL",
						"relay" : 1,
						"bwa" : 30720,
						"bwc" : 168,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 55430,
				"relay" : 1,
				"bwa" : 196608,
				"bwc" : 9312,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbg" : 0.000017,
					"pbm" : 0.000007
				},
				"countries" : [
					{
						"cc" : "SG",
						"relay" : 1,
						"bwa" : 196608,
						"bwc" : 9312,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbg" : 0.000017,
							"pbm" : 0.000007
						}
					}
				]
			},
			{
				"as" : 57381,
				"relay" : 1,
				"bwa" : 1552357,
				"bwc" : 614031,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000133,
					"pbm" : 0.0004
				},
				"countries" : [
					{
						"cc" : "NO",
						"relay" : 1,
						"bwa" : 1552357,
						"bwc" : 614031,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000133,
							"pbm" : 0.0004
						}
					}
				]
			},
			{
				"as" : 41334,
				"relay" : 1,
				"bwa" : 39023,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000002
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 39023,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000002
						}
					}
				]
			},
			{
				"as" : 34011,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 9880,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbm" : 0.000026
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 9880,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbm" : 0.000026
						}
					}
				]
			},
			{
				"as" : 31114,
				"relay" : 2,
				"bwa" : 175407,
				"bwc" : 20611,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000009999999999999999,
					"pbe" : 0.000007,
					"pbm" : 0.000023
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 2,
						"bwa" : 175407,
						"bwc" : 20611,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000009999999999999999,
							"pbe" : 0.000007,
							"pbm" : 0.000023
						}
					}
				]
			},
			{
				"as" : 65104,
				"relay" : 4,
				"bwa" : 5633383,
				"bwc" : 4043589,
				"roles" : {
					"guard" : 2,
					"middle" : 4,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 3,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.001611,
					"pbg" : 0.002535,
					"pbm" : 0.0022979999999999997
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 4,
						"bwa" : 5633383,
						"bwc" : 4043589,
						"roles" : {
							"guard" : 2,
							"middle" : 4,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 3,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.001611,
							"pbg" : 0.002535,
							"pbm" : 0.0022979999999999997
						}
					}
				]
			},
			{
				"as" : 16942,
				"relay" : 1,
				"bwa" : 65536,
				"bwc" : 54774,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000005,
					"pbm" : 0.000016
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 65536,
						"bwc" : 54774,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000005,
							"pbm" : 0.000016
						}
					}
				]
			},
			{
				"as" : 28719,
				"relay" : 1,
				"bwa" : 957863,
				"bwc" : 503748,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000069,
					"pbe" : 0.000207
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 957863,
						"bwc" : 503748,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000069,
							"pbe" : 0.000207
						}
					}
				]
			},
			{
				"as" : 2683,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 2891,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000008
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 2891,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000008
						}
					}
				]
			},
			{
				"as" : 31229,
				"relay" : 1,
				"bwa" : 3584000,
				"bwc" : 3339799,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000359,
					"pbg" : 0.000773,
					"pbm" : 0.000305
				},
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 3584000,
						"bwc" : 3339799,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000359,
							"pbg" : 0.000773,
							"pbm" : 0.000305
						}
					}
				]
			},
			{
				"as" : 99844,
				"relay" : 4,
				"bwa" : 5457920,
				"bwc" : 4005003,
				"roles" : {
					"middle" : 4,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.003522,
					"pbm" : 0.00303,
					"pbg" : 0.007537
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 5457920,
						"bwc" : 4005003,
						"roles" : {
							"middle" : 4,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.003522,
							"pbm" : 0.00303,
							"pbg" : 0.007537
						}
					}
				]
			},
			{
				"as" : 46816,
				"relay" : 1,
				"bwa" : 882048,
				"bwc" : 262982,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000095,
					"pbm" : 0.000284
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 882048,
						"bwc" : 262982,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000095,
							"pbm" : 0.000284
						}
					}
				]
			},
			{
				"as" : 41887,
				"relay" : 1,
				"bwa" : 1624073,
				"bwc" : 300627,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000226,
					"pbm" : 0.000679
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 1624073,
						"bwc" : 300627,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000226,
							"pbm" : 0.000679
						}
					}
				]
			},
			{
				"as" : 28072,
				"relay" : 4,
				"bwa" : 578196,
				"bwc" : 136473,
				"roles" : {
					"middle" : 4,
					"dir" : 4,
					"exit" : 1,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 2,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000033,
					"pbm" : 0.000033,
					"pbe" : 0.000052,
					"pbg" : 0.000014
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 578196,
						"bwc" : 136473,
						"roles" : {
							"middle" : 4,
							"dir" : 4,
							"exit" : 1,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 2,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000033,
							"pbm" : 0.000033,
							"pbe" : 0.000052,
							"pbg" : 0.000014
						}
					}
				]
			},
			{
				"as" : 55329,
				"relay" : 1,
				"bwa" : 738456,
				"bwc" : 379289,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000052,
					"pbg" : 0.000029,
					"pbm" : 0.000029,
					"pbe" : 0.000098
				},
				"countries" : [
					{
						"cc" : "KH",
						"relay" : 1,
						"bwa" : 738456,
						"bwc" : 379289,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000052,
							"pbg" : 0.000029,
							"pbm" : 0.000029,
							"pbe" : 0.000098
						}
					}
				]
			},
			{
				"as" : 60116,
				"relay" : 2,
				"bwa" : 646407,
				"bwc" : 177250,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000029,
					"pbm" : 0.000089
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 646407,
						"bwc" : 177250,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000029,
							"pbm" : 0.000089
						}
					}
				]
			},
			{
				"as" : 65104,
				"relay" : 4,
				"bwa" : 9865448,
				"bwc" : 7593394,
				"roles" : {
					"guard" : 3,
					"middle" : 4,
					"dir" : 3
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.002905,
					"pbg" : 0.005747,
					"pbm" : 0.002967
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 950631,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000382,
							"pbg" : 0.000821,
							"pbm" : 0.000324
						}
					},
					{
						"cc" : "FR",
						"relay" : 2,
						"bwa" : 6612601,
						"bwc" : 5367064,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.002291,
							"pbg" : 0.004926,
							"pbm" : 0.0019459999999999998
						}
					},
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 2228847,
						"bwc" : 1275699,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000232,
							"pbm" : 0.000697
						}
					}
				]
			},
			{
				"as" : 13213,
				"relay" : 1,
				"bwa" : 1643554,
				"bwc" : 464040,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.002765,
					"pbe" : 0.008296
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 1643554,
						"bwc" : 464040,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.002765,
							"pbe" : 0.008296
						}
					}
				]
			},
			{
				"as" : 16652,
				"relay" : 1,
				"bwa" : 262144,
				"bwc" : 185483,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000063,
					"pbg" : 0.000136,
					"pbm" : 0.000054
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 262144,
						"bwc" : 185483,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000063,
							"pbg" : 0.000136,
							"pbm" : 0.000054
						}
					}
				]
			},
			{
				"as" : 19181,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 58354,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000053,
					"pbe" : 0.000158
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 58354,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000053,
							"pbe" : 0.000158
						}
					}
				]
			},
			{
				"as" : 4725,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 9409,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000005,
					"pbm" : 0.000015
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 9409,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000005,
							"pbm" : 0.000015
						}
					}
				]
			},
			{
				"as" : 16245,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 102171,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbe" : 0.000028
				},
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 102171,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbe" : 0.000028
						}
					}
				]
			},
			{
				"as" : 33785,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 191817,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00001,
					"pbg" : 0.000021,
					"pbm" : 0.000008
				},
				"countries" : [
					{
						"cc" : "EG",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 191817,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00001,
							"pbg" : 0.000021,
							"pbm" : 0.000008
						}
					}
				]
			},
			{
				"as" : 6871,
				"relay" : 1,
				"bwa" : 82545,
				"bwc" : 10233,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbm" : 0.000011
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 82545,
						"bwc" : 10233,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000011
						}
					}
				]
			},
			{
				"as" : 11300,
				"relay" : 2,
				"bwa" : 647236,
				"bwc" : 265887,
				"roles" : {
					"middle" : 2,
					"guard" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000128,
					"pbm" : 0.00007400000000000001,
					"pbg" : 0.000071,
					"pbe" : 0.000239
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 647236,
						"bwc" : 265887,
						"roles" : {
							"middle" : 2,
							"guard" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000128,
							"pbm" : 0.00007400000000000001,
							"pbg" : 0.000071,
							"pbe" : 0.000239
						}
					}
				]
			},
			{
				"as" : 50465,
				"relay" : 1,
				"bwa" : 3327125,
				"bwc" : 1587032,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000793,
					"pbg" : 0.001705,
					"pbm" : 0.000673
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 3327125,
						"bwc" : 1587032,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000793,
							"pbg" : 0.001705,
							"pbm" : 0.000673
						}
					}
				]
			},
			{
				"as" : 13280,
				"relay" : 4,
				"bwa" : 216965,
				"bwc" : 25794,
				"roles" : {
					"middle" : 4,
					"dir" : 1
				},
				"flags" : {
					"fast" : 2,
					"notFastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000019,
					"pbm" : 0.000056000000000000006
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 216965,
						"bwc" : 25794,
						"roles" : {
							"middle" : 4,
							"dir" : 1
						},
						"flags" : {
							"fast" : 2,
							"notFastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000019,
							"pbm" : 0.000056000000000000006
						}
					}
				]
			},
			{
				"as" : 7303,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 11502,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000003
				},
				"countries" : [
					{
						"cc" : "AR",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 11502,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000003
						}
					}
				]
			},
			{
				"as" : 46261,
				"relay" : 1,
				"bwa" : 5242880,
				"bwc" : 3640354,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.001479,
					"pbg" : 0.000829,
					"pbm" : 0.000829,
					"pbe" : 0.002779
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 5242880,
						"bwc" : 3640354,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001479,
							"pbg" : 0.000829,
							"pbm" : 0.000829,
							"pbe" : 0.002779
						}
					}
				]
			},
			{
				"as" : 65060,
				"relay" : 4,
				"bwa" : 501760,
				"bwc" : 388377,
				"roles" : {
					"middle" : 4,
					"exit" : 2,
					"guard" : 1,
					"dir" : 1
				},
				"flags" : {
					"stable" : 2,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.00004100000000000001,
					"pbe" : 0.000018,
					"pbg" : 0.000064,
					"pbm" : 0.00004
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 4,
						"bwa" : 501760,
						"bwc" : 388377,
						"roles" : {
							"middle" : 4,
							"exit" : 2,
							"guard" : 1,
							"dir" : 1
						},
						"flags" : {
							"stable" : 2,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.00004100000000000001,
							"pbe" : 0.000018,
							"pbg" : 0.000064,
							"pbm" : 0.00004
						}
					}
				]
			},
			{
				"as" : 186608,
				"relay" : 4,
				"bwa" : 11503481,
				"bwc" : 9198689,
				"roles" : {
					"guard" : 3,
					"middle" : 4,
					"dir" : 3
				},
				"flags" : {
					"fastStable" : 2,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.002842,
					"pbg" : 0.0052770000000000004,
					"pbm" : 0.003247
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 9437184,
						"bwc" : 7232757,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.002389,
							"pbg" : 0.005136,
							"pbm" : 0.002029
						}
					},
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 2066297,
						"bwc" : 1965932,
						"roles" : {
							"middle" : 2,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00045299999999999995,
							"pbm" : 0.0012180000000000001,
							"pbg" : 0.000141
						}
					}
				]
			},
			{
				"as" : 48780,
				"relay" : 1,
				"bwa" : 98304,
				"bwc" : 31994,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbm" : 0.000028
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 98304,
						"bwc" : 31994,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbm" : 0.000028
						}
					}
				]
			},
			{
				"as" : 31400,
				"relay" : 1,
				"bwa" : 406528,
				"bwc" : 47097,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00002,
					"pbm" : 0.000061
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 406528,
						"bwc" : 47097,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00002,
							"pbm" : 0.000061
						}
					}
				]
			},
			{
				"as" : 418,
				"relay" : 2,
				"bwa" : 148480,
				"bwc" : 13965,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbm" : 0.000013000000000000001
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 148480,
						"bwc" : 13965,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000013000000000000001
						}
					}
				]
			},
			{
				"as" : 9351,
				"relay" : 1,
				"bwa" : 93099,
				"bwc" : 1842,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 93099,
						"bwc" : 1842,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 7029,
				"relay" : 1,
				"bwa" : 51540,
				"bwc" : 1050,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000003
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51540,
						"bwc" : 1050,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000003
						}
					}
				]
			},
			{
				"as" : 22852,
				"relay" : 2,
				"bwa" : 279305,
				"bwc" : 46949,
				"roles" : {
					"middle" : 2,
					"dir" : 2,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000022,
					"pbm" : 0.000046,
					"pbe" : 0.00002
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 279305,
						"bwc" : 46949,
						"roles" : {
							"middle" : 2,
							"dir" : 2,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000022,
							"pbm" : 0.000046,
							"pbe" : 0.00002
						}
					}
				]
			},
			{
				"as" : 1438,
				"relay" : 2,
				"bwa" : 863630,
				"bwc" : 548317,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 1,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000089,
					"pbm" : 0.000268
				},
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 2,
						"bwa" : 863630,
						"bwc" : 548317,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 1,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000089,
							"pbm" : 0.000268
						}
					}
				]
			},
			{
				"as" : 3303,
				"relay" : 1,
				"bwa" : 128000,
				"bwc" : 47288,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000012,
					"pbm" : 0.000037
				},
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 1,
						"bwa" : 128000,
						"bwc" : 47288,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000012,
							"pbm" : 0.000037
						}
					}
				]
			},
			{
				"as" : 3216,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 1042155,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000167,
					"pbe" : 0.000501
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 1042155,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000167,
							"pbe" : 0.000501
						}
					}
				]
			},
			{
				"as" : 40788,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 4426,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000007
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 4426,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000007
						}
					}
				]
			},
			{
				"as" : 23655,
				"relay" : 1,
				"bwa" : 59944,
				"bwc" : 445,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000003
				},
				"countries" : [
					{
						"cc" : "NZ",
						"relay" : 1,
						"bwa" : 59944,
						"bwc" : 445,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000003
						}
					}
				]
			},
			{
				"as" : 23674,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 59681,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbe" : 0.000017
				},
				"countries" : [
					{
						"cc" : "PK",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 59681,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbe" : 0.000017
						}
					}
				]
			},
			{
				"as" : 13448,
				"relay" : 2,
				"bwa" : 343040,
				"bwc" : 196469,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000092,
					"pbg" : 0.000184,
					"pbm" : 0.000093
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 343040,
						"bwc" : 196469,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000092,
							"pbg" : 0.000184,
							"pbm" : 0.000093
						}
					}
				]
			},
			{
				"as" : 28528,
				"relay" : 4,
				"bwa" : 456704,
				"bwc" : 186374,
				"roles" : {
					"middle" : 4,
					"dir" : 1,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 3,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000049,
					"pbm" : 0.000064,
					"pbg" : 0.000081
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 456704,
						"bwc" : 186374,
						"roles" : {
							"middle" : 4,
							"dir" : 1,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 3,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000049,
							"pbm" : 0.000064,
							"pbg" : 0.000081
						}
					}
				]
			},
			{
				"as" : 13276,
				"relay" : 1,
				"bwa" : 225280,
				"bwc" : 63221,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000007,
					"pbg" : 0.000014,
					"pbm" : 0.000006
				},
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 1,
						"bwa" : 225280,
						"bwc" : 63221,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000007,
							"pbg" : 0.000014,
							"pbm" : 0.000006
						}
					}
				]
			},
			{
				"as" : 5712,
				"relay" : 2,
				"bwa" : 167936,
				"bwc" : 14381,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000014,
					"pbm" : 0.000043
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 2,
						"bwa" : 167936,
						"bwc" : 14381,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000014,
							"pbm" : 0.000043
						}
					}
				]
			},
			{
				"as" : 53111,
				"relay" : 1,
				"bwa" : 987648,
				"bwc" : 144926,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000028,
					"pbm" : 0.000083
				},
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 1,
						"bwa" : 987648,
						"bwc" : 144926,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000028,
							"pbm" : 0.000083
						}
					}
				]
			},
			{
				"as" : 11351,
				"relay" : 1,
				"bwa" : 239616,
				"bwc" : 0,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000017,
					"pbm" : 0.000051
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 239616,
						"bwc" : 0,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000017,
							"pbm" : 0.000051
						}
					}
				]
			},
			{
				"as" : 6584,
				"relay" : 2,
				"bwa" : 753970,
				"bwc" : 556927,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000098,
					"pbm" : 0.000294
				},
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 2,
						"bwa" : 753970,
						"bwc" : 556927,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000098,
							"pbm" : 0.000294
						}
					}
				]
				},
			{
				"as" : 30693,
				"relay" : 1,
				"bwa" : 9381768,
				"bwc" : 6364892,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.002159,
					"pbm" : 0.006477
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 9381768,
						"bwc" : 6364892,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.002159,
							"pbm" : 0.006477
						}
					}
				]
			},
			{
				"as" : 6079,
				"relay" : 1,
				"bwa" : 283270,
				"bwc" : 112106,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000044,
					"pbm" : 0.000132
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 283270,
						"bwc" : 112106,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000044,
							"pbm" : 0.000132
						}
					}
				]
			},
			{
				"as" : 11814,
				"relay" : 1,
				"bwa" : 71680,
				"bwc" : 24976,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbm" : 0.000011
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 71680,
						"bwc" : 24976,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000011
						}
					}
				]
			},
			{
				"as" : 199520,
				"relay" : 8,
				"bwa" : 19281858,
				"bwc" : 14048051,
				"roles" : {
					"guard" : 6,
					"middle" : 8,
					"dir" : 3
				},
				"flags" : {
					"fastStable" : 7,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.003088,
					"pbg" : 0.005246000000000001,
					"pbm" : 0.004025
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 8,
						"bwa" : 19281858,
						"bwc" : 14048051,
						"roles" : {
							"guard" : 6,
							"middle" : 8,
							"dir" : 3
						},
						"flags" : {
							"fastStable" : 7,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.003088,
							"pbg" : 0.005246000000000001,
							"pbm" : 0.004025
						}
					}
				]
			},
			{
				"as" : 15467,
				"relay" : 1,
				"bwa" : 8192000,
				"bwc" : 8153720,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00247,
					"pbg" : 0.005311,
					"pbm" : 0.002098
				},
				"countries" : [
					{
						"cc" : "HU",
						"relay" : 1,
						"bwa" : 8192000,
						"bwc" : 8153720,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00247,
							"pbg" : 0.005311,
							"pbm" : 0.002098
						}
					}
				]
			},
			{
				"as" : 2516,
				"relay" : 1,
				"bwa" : 735483,
				"bwc" : 64509,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000036,
					"pbg" : 0.000077,
					"pbm" : 0.000031
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 735483,
						"bwc" : 64509,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000036,
							"pbg" : 0.000077,
							"pbm" : 0.000031
						}
					}
				]
			},
			{
				"as" : 32875,
				"relay" : 1,
				"bwa" : 65536,
				"bwc" : 42603,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000005,
					"pbm" : 0.000016
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 65536,
						"bwc" : 42603,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000005,
							"pbm" : 0.000016
						}
					}
				]
			},
			{
				"as" : 9304,
				"relay" : 1,
				"bwa" : 36907,
				"bwc" : 190,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000002
				},
				"countries" : [
					{
						"cc" : "HK",
						"relay" : 1,
						"bwa" : 36907,
						"bwc" : 190,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000002
						}
					}
				]
			},
			{
				"as" : 27320,
				"relay" : 4,
				"bwa" : 1393539,
				"bwc" : 296573,
				"roles" : {
					"guard" : 1,
					"middle" : 4,
					"dir" : 3,
					"exit" : 1
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000108,
					"pbg" : 0.000156,
					"pbm" : 0.000136,
					"pbe" : 0.000029
				},
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 3,
						"bwa" : 1291139,
						"bwc" : 285730,
						"roles" : {
							"guard" : 1,
							"middle" : 3,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000098,
							"pbg" : 0.000156,
							"pbm" : 0.000136
						}
					},
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 10843,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00001,
							"pbe" : 0.000029
						}
					}
				]
			},
			{
				"as" : 85852,
				"relay" : 2,
				"bwa" : 9523810,
				"bwc" : 6428859,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"exit" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.002664,
					"pbg" : 0.001493,
					"pbm" : 0.001493,
					"pbe" : 0.005004
				},
				"countries" : [
					{
						"cc" : "TR",
						"relay" : 2,
						"bwa" : 9523810,
						"bwc" : 6428859,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"exit" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.002664,
							"pbg" : 0.001493,
							"pbm" : 0.001493,
							"pbe" : 0.005004
						}
					}
				]
			},
			{
				"as" : 100132,
				"relay" : 2,
				"bwa" : 409600,
				"bwc" : 167445,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000064,
					"pbm" : 0.000192
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 2,
						"bwa" : 409600,
						"bwc" : 167445,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000064,
							"pbm" : 0.000192
						}
					}
				]
			},
			{
				"as" : 33837,
				"relay" : 1,
				"bwa" : 139885,
				"bwc" : 13903,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000013,
					"pbm" : 0.000038
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 139885,
						"bwc" : 13903,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000013,
							"pbm" : 0.000038
						}
					}
				]
			},
			{
				"as" : 5713,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 30,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "ZA",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 30,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 40430,
				"relay" : 1,
				"bwa" : 1310720,
				"bwc" : 240277,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000203,
					"pbg" : 0.000114,
					"pbm" : 0.000114,
					"pbe" : 0.000381
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1310720,
						"bwc" : 240277,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000203,
							"pbg" : 0.000114,
							"pbm" : 0.000114,
							"pbe" : 0.000381
						}
					}
				]
			},
			{
				"as" : 29695,
				"relay" : 1,
				"bwa" : 237568,
				"bwc" : 18078,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "NO",
						"relay" : 1,
						"bwa" : 237568,
						"bwc" : 18078,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 10489,
				"relay" : 1,
				"bwa" : 131072,
				"bwc" : 49733,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00001,
					"pbm" : 0.00003
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 131072,
						"bwc" : 49733,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00001,
							"pbm" : 0.00003
						}
					}
				]
			},
			{
				"as" : 79486,
				"relay" : 2,
				"bwa" : 50953137,
				"bwc" : 14560204,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"exit" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000868,
					"pbg" : 0.000486,
					"pbm" : 0.000486,
					"pbe" : 0.001631
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 5242880,
						"bwc" : 1087969,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000152,
							"pbg" : 0.000085,
							"pbm" : 0.000085,
							"pbe" : 0.000286
						}
					},
					{
						"cc" : "RO",
						"relay" : 1,
						"bwa" : 45710257,
						"bwc" : 13472235,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000716,
							"pbg" : 0.000401,
							"pbm" : 0.000401,
							"pbe" : 0.001345
						}
					}
				]
			},
			{
				"as" : 22854,
				"relay" : 2,
				"bwa" : 235078,
				"bwc" : 22867,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000009999999999999999,
					"pbm" : 0.000029999999999999997
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 235078,
						"bwc" : 22867,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000009999999999999999,
							"pbm" : 0.000029999999999999997
						}
					}
				]
			},
			{
				"as" : 20001,
				"relay" : 1,
				"bwa" : 144727,
				"bwc" : 40694,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbe" : 0.000023
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 144727,
						"bwc" : 40694,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbe" : 0.000023
						}
					}
				]
			},
			{
				"as" : 56322,
				"relay" : 1,
				"bwa" : 5242880,
				"bwc" : 2320837,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000429,
					"pbg" : 0.000922,
					"pbm" : 0.000364
				},
				"countries" : [
					{
						"cc" : "HU",
						"relay" : 1,
						"bwa" : 5242880,
						"bwc" : 2320837,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000429,
							"pbg" : 0.000922,
							"pbm" : 0.000364
						}
					}
				]
			},
			{
				"as" : 9556,
				"relay" : 1,
				"bwa" : 29196,
				"bwc" : 438,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000002
				},
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 1,
						"bwa" : 29196,
						"bwc" : 438,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000002
						}
					}
				]
			},
			{
				"as" : 6430,
				"relay" : 2,
				"bwa" : 87414,
				"bwc" : 110,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000018
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 2,
						"bwa" : 87414,
						"bwc" : 110,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000018
						}
					}
				]
			},
			{
				"as" : 12334,
				"relay" : 1,
				"bwa" : 148480,
				"bwc" : 34071,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000011,
					"pbm" : 0.000032
				},
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 1,
						"bwa" : 148480,
						"bwc" : 34071,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbm" : 0.000032
						}
					}
				]
			},
			{
				"as" : 50613,
				"relay" : 1,
				"bwa" : 83968,
				"bwc" : 226087,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000042,
					"pbm" : 0.000127
				},
				"countries" : [
					{
						"cc" : "IS",
						"relay" : 1,
						"bwa" : 83968,
						"bwc" : 226087,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000042,
							"pbm" : 0.000127
						}
					}
				]
			},
			{
				"as" : 2854,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 14747,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 14747,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 70850,
				"relay" : 2,
				"bwa" : 5273600,
				"bwc" : 5063753,
				"roles" : {
					"middle" : 2,
					"guard" : 1,
					"dir" : 1
				},
				"flags" : {
					"stable" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.001585,
					"pbm" : 0.0013529999999999998,
					"pbg" : 0.003403
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 2,
						"bwa" : 5273600,
						"bwc" : 5063753,
						"roles" : {
							"middle" : 2,
							"guard" : 1,
							"dir" : 1
						},
						"flags" : {
							"stable" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001585,
							"pbm" : 0.0013529999999999998,
							"pbg" : 0.003403
						}
					}
				]
			},
			{
				"as" : 26068,
				"relay" : 1,
				"bwa" : 524288,
				"bwc" : 232882,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000154,
					"pbg" : 0.000086,
					"pbm" : 0.000086,
					"pbe" : 0.000289
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 524288,
						"bwc" : 232882,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000154,
							"pbg" : 0.000086,
							"pbm" : 0.000086,
							"pbe" : 0.000289
						}
					}
				]
			},
			{
				"as" : 58146,
				"relay" : 2,
				"bwa" : 40960,
				"bwc" : 4081,
				"roles" : {
					"middle" : 2,
					"exit" : 2
				},
				"flags" : {
					"stable" : 2
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbe" : 0.000018
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 40960,
						"bwc" : 4081,
						"roles" : {
							"middle" : 2,
							"exit" : 2
						},
						"flags" : {
							"stable" : 2
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbe" : 0.000018
						}
					}
				]
			},
			{
				"as" : 766,
				"relay" : 1,
				"bwa" : 153600,
				"bwc" : 26427,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbm" : 0.000028
				},
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 1,
						"bwa" : 153600,
						"bwc" : 26427,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbm" : 0.000028
						}
					}
				]
			},
			{
				"as" : 48635,
				"relay" : 1,
				"bwa" : 256000,
				"bwc" : 9878,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000045,
					"pbm" : 0.000135
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 256000,
						"bwc" : 9878,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000045,
							"pbm" : 0.000135
						}
					}
				]
			},
			{
				"as" : 1606,
				"relay" : 2,
				"bwa" : 1569110,
				"bwc" : 1123677,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.00042500000000000003,
					"pbg" : 0.000096,
					"pbm" : 0.000038,
					"pbe" : 0.00114
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 2,
						"bwa" : 1569110,
						"bwc" : 1123677,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.00042500000000000003,
							"pbg" : 0.000096,
							"pbm" : 0.000038,
							"pbe" : 0.00114
						}
					}
				]
			},
			{
				"as" : 197922,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 487173,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000174,
					"pbg" : 0.000098,
					"pbm" : 0.000098,
					"pbe" : 0.000328
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 487173,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000174,
							"pbg" : 0.000098,
							"pbm" : 0.000098,
							"pbe" : 0.000328
						}
					}
				]
			},
			{
				"as" : 29691,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 332021,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000088,
					"pbg" : 0.000189,
					"pbm" : 0.000075
				},
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 332021,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000088,
							"pbg" : 0.000189,
							"pbm" : 0.000075
						}
					}
				]
			},
			{
				"as" : 262868,
				"relay" : 1,
				"bwa" : 45056,
				"bwc" : 4576,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "BR",
						"relay" : 1,
						"bwa" : 45056,
						"bwc" : 4576,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 29737,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 46089,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000049,
					"pbe" : 0.000146
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 46089,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000049,
							"pbe" : 0.000146
						}
					}
				]
			},
			{
				"as" : 29194,
				"relay" : 1,
				"bwa" : 196608,
				"bwc" : 59268,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000015,
					"pbm" : 0.000045
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 196608,
						"bwc" : 59268,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000015,
							"pbm" : 0.000045
						}
					}
				]
			},
			{
				"as" : 71184,
				"relay" : 2,
				"bwa" : 7086080,
				"bwc" : 5680793,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"exit" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.002149,
					"pbg" : 0.001204,
					"pbm" : 0.001204,
					"pbe" : 0.004037
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 2,
						"bwa" : 7086080,
						"bwc" : 5680793,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"exit" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.002149,
							"pbg" : 0.001204,
							"pbm" : 0.001204,
							"pbe" : 0.004037
						}
					}
				]
			},
			{
				"as" : 22030,
				"relay" : 1,
				"bwa" : 25600,
				"bwc" : 421,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 25600,
						"bwc" : 421,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 12898,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 2385,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.00001
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 2385,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.00001
						}
					}
				]
			},
			{
				"as" : 65060,
				"relay" : 4,
				"bwa" : 2252800,
				"bwc" : 845731,
				"roles" : {
					"middle" : 4,
					"dir" : 3,
					"guard" : 3,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 3
				},
				"probs" : {
					"pbr" : 0.000585,
					"pbm" : 0.001428,
					"pbg" : 0.000272,
					"pbe" : 0.000059
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 4,
						"bwa" : 2252800,
						"bwc" : 845731,
						"roles" : {
							"middle" : 4,
							"dir" : 3,
							"guard" : 3,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.000585,
							"pbm" : 0.001428,
							"pbg" : 0.000272,
							"pbe" : 0.000059
						}
					}
				]
			},
			{
				"as" : 32172,
				"relay" : 2,
				"bwa" : 1114112,
				"bwc" : 948773,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.00021600000000000002,
					"pbe" : 0.000018,
					"pbm" : 0.00063
				},
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 2,
						"bwa" : 1114112,
						"bwc" : 948773,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.00021600000000000002,
							"pbe" : 0.000018,
							"pbm" : 0.00063
						}
					}
				]
			},
			{
				"as" : 16002,
				"relay" : 2,
				"bwa" : 1833779,
				"bwc" : 1096753,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000508,
					"pbg" : 0.001084,
					"pbm" : 0.000439
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 1833779,
						"bwc" : 1096753,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000508,
							"pbg" : 0.001084,
							"pbm" : 0.000439
						}
					}
				]
			},
			{
				"as" : 32613,
				"relay" : 1,
				"bwa" : 2529995,
				"bwc" : 1620737,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000961,
					"pbg" : 0.000539,
					"pbm" : 0.000539,
					"pbe" : 0.001806
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 2529995,
						"bwc" : 1620737,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000961,
							"pbg" : 0.000539,
							"pbm" : 0.000539,
							"pbe" : 0.001806
						}
					}
				]
			},
			{
				"as" : 577,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 590,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 590,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 79164,
				"relay" : 2,
				"bwa" : 204800,
				"bwc" : 141739,
				"roles" : {
					"middle" : 2,
					"exit" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000021000000000000002,
					"pbe" : 0.000065
				},
				"countries" : [
					{
						"cc" : "TR",
						"relay" : 2,
						"bwa" : 204800,
						"bwc" : 141739,
						"roles" : {
							"middle" : 2,
							"exit" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000021000000000000002,
							"pbe" : 0.000065
						}
					}
				]
			},
			{
				"as" : 97646,
				"relay" : 2,
				"bwa" : 225280,
				"bwc" : 194341,
				"roles" : {
					"middle" : 2,
					"guard" : 1,
					"dir" : 1
				},
				"flags" : {
					"stable" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000049999999999999996,
					"pbm" : 0.000049000000000000005,
					"pbg" : 0.000101
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 225280,
						"bwc" : 194341,
						"roles" : {
							"middle" : 2,
							"guard" : 1,
							"dir" : 1
						},
						"flags" : {
							"stable" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000049999999999999996,
							"pbm" : 0.000049000000000000005,
							"pbg" : 0.000101
						}
					}
				]
			},
			{
				"as" : 37989,
				"relay" : 1,
				"bwa" : 1188614,
				"bwc" : 423572,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00013,
					"pbg" : 0.000073,
					"pbm" : 0.000073,
					"pbe" : 0.000245
				},
				"countries" : [
					{
						"cc" : "SG",
						"relay" : 1,
						"bwa" : 1188614,
						"bwc" : 423572,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00013,
							"pbg" : 0.000073,
							"pbm" : 0.000073,
							"pbe" : 0.000245
						}
					}
				]
			},
			{
				"as" : 6530,
				"relay" : 2,
				"bwa" : 135168,
				"bwc" : 34989,
				"roles" : {
					"middle" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000011,
					"pbe" : 0.000024,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 135168,
						"bwc" : 34989,
						"roles" : {
							"middle" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbe" : 0.000024,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 12256,
				"relay" : 2,
				"bwa" : 338452,
				"bwc" : 87198,
				"roles" : {
					"middle" : 2,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000023000000000000003,
					"pbm" : 0.000026000000000000002,
					"pbg" : 0.000044
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 338452,
						"bwc" : 87198,
						"roles" : {
							"middle" : 2,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000023000000000000003,
							"pbm" : 0.000026000000000000002,
							"pbg" : 0.000044
						}
					}
				]
			},
			{
				"as" : 6488,
				"relay" : 1,
				"bwa" : 829325,
				"bwc" : 133643,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000122,
					"pbm" : 0.000365
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 829325,
						"bwc" : 133643,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000122,
							"pbm" : 0.000365
						}
					}
				]
			},
			{
				"as" : 45546,
				"relay" : 2,
				"bwa" : 307200,
				"bwc" : 154103,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000047000000000000004,
					"pbm" : 0.000141
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 307200,
						"bwc" : 154103,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000047000000000000004,
							"pbm" : 0.000141
						}
					}
				]
			},
			{
				"as" : 12634,
				"relay" : 1,
				"bwa" : 81920,
				"bwc" : 9171,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 81920,
						"bwc" : 9171,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 22927,
				"relay" : 1,
				"bwa" : 30720,
				"bwc" : 0,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "AR",
						"relay" : 1,
						"bwa" : 30720,
						"bwc" : 0,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 44581,
				"relay" : 1,
				"bwa" : 262144,
				"bwc" : 175329,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000067,
					"pbg" : 0.000144,
					"pbm" : 0.000057
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 262144,
						"bwc" : 175329,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000067,
							"pbg" : 0.000144,
							"pbm" : 0.000057
						}
					}
				]
			},
			{
				"as" : 80460,
				"relay" : 4,
				"bwa" : 447141,
				"bwc" : 28804,
				"roles" : {
					"middle" : 4,
					"dir" : 2,
					"guard" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 2,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000036,
					"pbm" : 0.000079,
					"pbg" : 0.000031
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 447141,
						"bwc" : 28804,
						"roles" : {
							"middle" : 4,
							"dir" : 2,
							"guard" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 2,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000036,
							"pbm" : 0.000079,
							"pbg" : 0.000031
						}
					}
				]
			},
			{
				"as" : 6389,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 484,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 484,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 30936,
				"relay" : 1,
				"bwa" : 211968,
				"bwc" : 47566,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbm" : 0.000027
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 211968,
						"bwc" : 47566,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbm" : 0.000027
						}
					}
				]
			},
			{
				"as" : 197019,
				"relay" : 1,
				"bwa" : 7788951,
				"bwc" : 6894727,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.004303,
					"pbg" : 0.009255,
					"pbm" : 0.003656
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 7788951,
						"bwc" : 6894727,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.004303,
							"pbg" : 0.009255,
							"pbm" : 0.003656
						}
					}
				]
			},
			{
				"as" : 5617,
				"relay" : 1,
				"bwa" : 665600,
				"bwc" : 520058,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000142,
					"pbm" : 0.000425
				},
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 665600,
						"bwc" : 520058,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000142,
							"pbm" : 0.000425
						}
					}
				]
			},
			{
				"as" : 31669,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 100928,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbe" : 0.000023
				},
				"countries" : [
					{
						"cc" : "BE",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 100928,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbe" : 0.000023
						}
					}
				]
			},
			{
				"as" : 8943,
				"relay" : 1,
				"bwa" : 879639,
				"bwc" : 1046818,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000419,
					"pbm" : 0.001256
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 879639,
						"bwc" : 1046818,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000419,
							"pbm" : 0.001256
						}
					}
				]
			},
			{
				"as" : 25308,
				"relay" : 4,
				"bwa" : 1372453,
				"bwc" : 601203,
				"roles" : {
					"middle" : 4,
					"exit" : 2,
					"dir" : 3,
					"guard" : 1
				},
				"flags" : {
					"stable" : 1,
					"fastStable" : 2,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000328,
					"pbm" : 0.000225,
					"pbe" : 0.000592,
					"pbg" : 0.000167
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 4,
						"bwa" : 1372453,
						"bwc" : 601203,
						"roles" : {
							"middle" : 4,
							"exit" : 2,
							"dir" : 3,
							"guard" : 1
						},
						"flags" : {
							"stable" : 1,
							"fastStable" : 2,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000328,
							"pbm" : 0.000225,
							"pbe" : 0.000592,
							"pbg" : 0.000167
						}
					}
				]
			},
			{
				"as" : 99760,
				"relay" : 4,
				"bwa" : 4409344,
				"bwc" : 3385463,
				"roles" : {
					"middle" : 4,
					"guard" : 3,
					"dir" : 3
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.0012439999999999999,
					"pbm" : 0.001065,
					"pbg" : 0.002665
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 4409344,
						"bwc" : 3385463,
						"roles" : {
							"middle" : 4,
							"guard" : 3,
							"dir" : 3
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.0012439999999999999,
							"pbm" : 0.001065,
							"pbg" : 0.002665
						}
					}
				]
			},
			{
				"as" : 8422,
				"relay" : 1,
				"bwa" : 32768,
				"bwc" : 678,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 32768,
						"bwc" : 678,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
					"as" : 27320,
				"relay" : 4,
				"bwa" : 640068,
				"bwc" : 443770,
				"roles" : {
					"middle" : 4,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 1,
					"notFastStable" : 2,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000123,
					"pbm" : 0.000368
				},
				"countries" : [
					{
						"cc" : "SK",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 418032,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000112,
							"pbm" : 0.000335
						}
					},
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 34884,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					},
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 27648,
						"bwc" : 77,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					},
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 65536,
						"bwc" : 25661,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000005,
							"pbm" : 0.000015
						}
					}
				]
			},
			{
				"as" : 8476,
				"relay" : 4,
				"bwa" : 3682683,
				"bwc" : 3269156,
				"roles" : {
					"middle" : 4,
					"guard" : 1,
					"dir" : 3
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.001368,
					"pbm" : 0.003974,
					"pbg" : 0.000132
				},
				"countries" : [
					{
						"cc" : "NO",
						"relay" : 2,
						"bwa" : 3153920,
						"bwc" : 3070531,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001284,
							"pbm" : 0.003854
						}
					},
					{
						"cc" : "SE",
						"relay" : 2,
						"bwa" : 528763,
						"bwc" : 198625,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000084,
							"pbg" : 0.000132,
							"pbm" : 0.00011999999999999999
						}
					}
				]
			},
			{
				"as" : 15290,
				"relay" : 1,
				"bwa" : 94763,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 94763,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 12897,
				"relay" : 1,
				"bwa" : 815569,
				"bwc" : 574827,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000114,
					"pbm" : 0.000342
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 815569,
						"bwc" : 574827,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000114,
							"pbm" : 0.000342
						}
					}
				]
			},
			{
				"as" : 77048,
				"relay" : 4,
				"bwa" : 8825797,
				"bwc" : 7753653,
				"roles" : {
					"middle" : 4,
					"dir" : 4,
					"guard" : 2
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.0023350000000000003,
					"pbm" : 0.004416,
					"pbg" : 0.0025889999999999997
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 8825797,
						"bwc" : 7753653,
						"roles" : {
							"middle" : 4,
							"dir" : 4,
							"guard" : 2
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.0023350000000000003,
							"pbm" : 0.004416,
							"pbg" : 0.0025889999999999997
						}
					}
				]
			},
			{
				"as" : 23292,
				"relay" : 1,
				"bwa" : 53489,
				"bwc" : 1533,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 53489,
						"bwc" : 1533,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 13280,
				"relay" : 4,
				"bwa" : 361378,
				"bwc" : 167505,
				"roles" : {
					"middle" : 4,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2,
					"stable" : 1,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00007999999999999999,
					"pbm" : 0.000238
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 361378,
						"bwc" : 167505,
						"roles" : {
							"middle" : 4,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2,
							"stable" : 1,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00007999999999999999,
							"pbm" : 0.000238
						}
					}
				]
			},
			{
				"as" : 5432,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 43569,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbm" : 0.000028
				},
				"countries" : [
					{
						"cc" : "BE",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 43569,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbm" : 0.000028
						}
					}
				]
			},
			{
				"as" : 8402,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 59767,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000012,
					"pbm" : 0.000037
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 59767,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000012,
							"pbm" : 0.000037
						}
					}
				]
			},
			{
				"as" : 31688,
				"relay" : 4,
				"bwa" : 1364848,
				"bwc" : 497575,
				"roles" : {
					"guard" : 1,
					"middle" : 4,
					"exit" : 1,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 2,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000103,
					"pbg" : 0.000014,
					"pbm" : 0.000247,
					"pbe" : 0.000047
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 1364848,
						"bwc" : 497575,
						"roles" : {
							"guard" : 1,
							"middle" : 4,
							"exit" : 1,
							"dir" : 4
						},
						"flags" : {
							"fastStable" : 2,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000103,
							"pbg" : 0.000014,
							"pbm" : 0.000247,
							"pbe" : 0.000047
						}
					}
				]
			},
			{
				"as" : 15003,
				"relay" : 1,
				"bwa" : 4194304,
				"bwc" : 4154975,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.003046,
					"pbg" : 0.001707,
					"pbm" : 0.001707,
					"pbe" : 0.005724
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 4194304,
						"bwc" : 4154975,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.003046,
							"pbg" : 0.001707,
							"pbm" : 0.001707,
							"pbe" : 0.005724
						}
					}
				]
			},
			{
				"as" : 15830,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 51860,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000025,
					"pbm" : 0.000076
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 51860,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000025,
							"pbm" : 0.000076
						}
					}
				]
			},
			{
				"as" : 65060,
				"relay" : 4,
				"bwa" : 18634326,
				"bwc" : 15219776,
				"roles" : {
					"middle" : 4,
					"exit" : 4,
					"guard" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.014648,
					"pbe" : 0.031709,
					"pbg" : 0.006117,
					"pbm" : 0.006116
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 4,
						"bwa" : 18634326,
						"bwc" : 15219776,
						"roles" : {
							"middle" : 4,
							"exit" : 4,
							"guard" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.014648,
							"pbe" : 0.031709,
							"pbg" : 0.006117,
							"pbm" : 0.006116
						}
					}
				]
			},
			{
				"as" : 7459,
				"relay" : 1,
				"bwa" : 236378,
				"bwc" : 34922,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000013,
					"pbm" : 0.000039
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 236378,
						"bwc" : 34922,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000013,
							"pbm" : 0.000039
						}
					}
				]
			},
			{
				"as" : 20093,
				"relay" : 1,
				"bwa" : 326446,
				"bwc" : 21884,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000017,
					"pbm" : 0.000051
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 326446,
						"bwc" : 21884,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000017,
							"pbm" : 0.000051
						}
					}
				]
			},
			{
				"as" : 11841,
				"relay" : 1,
				"bwa" : 98304,
				"bwc" : 38561,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000018
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 98304,
						"bwc" : 38561,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000018
						}
					}
				]
			},
			{
				"as" : 24751,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 1024000,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000417,
					"pbg" : 0.000234,
					"pbm" : 0.000234,
					"pbe" : 0.000784
				},
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 1024000,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000417,
							"pbg" : 0.000234,
							"pbm" : 0.000234,
							"pbe" : 0.000784
						}
					}
				]
			},
			{
				"as" : 34823,
				"relay" : 1,
				"bwa" : 2011956,
				"bwc" : 1099374,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000319,
					"pbe" : 0.000958
				},
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 2011956,
						"bwc" : 1099374,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000319,
							"pbe" : 0.000958
						}
					}
				]
			},
			{
				"as" : 15685,
				"relay" : 1,
				"bwa" : 256000,
				"bwc" : 83812,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000044,
					"pbg" : 0.000095,
					"pbm" : 0.000038
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 256000,
						"bwc" : 83812,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000044,
							"pbg" : 0.000095,
							"pbm" : 0.000038
						}
					}
				]
			},
			{
				"as" : 35475,
				"relay" : 1,
				"bwa" : 532512,
				"bwc" : 187055,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000033,
					"pbm" : 0.000099
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 532512,
						"bwc" : 187055,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000033,
							"pbm" : 0.000099
						}
					}
				]
			},
			{
				"as" : 25538,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 900,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 900,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 125336,
				"relay" : 4,
				"bwa" : 677888,
				"bwc" : 345640,
				"roles" : {
					"guard" : 1,
					"middle" : 4,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1,
					"notFastStable" : 2
				},
				"probs" : {
					"pbr" : 0.00016600000000000002,
					"pbg" : 0.000328,
					"pbm" : 0.000172
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 677888,
						"bwc" : 345640,
						"roles" : {
							"guard" : 1,
							"middle" : 4,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1,
							"notFastStable" : 2
						},
						"probs" : {
							"pbr" : 0.00016600000000000002,
							"pbg" : 0.000328,
							"pbm" : 0.000172
						}
					}
				]
			},
			{
				"as" : 19366,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 14643,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbe" : 0.000011
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 14643,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbe" : 0.000011
						}
					}
				]
			},
			{
				"as" : 5645,
				"relay" : 1,
				"bwa" : 61440,
				"bwc" : 10380,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 61440,
						"bwc" : 10380,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 65104,
				"relay" : 4,
				"bwa" : 10559488,
				"bwc" : 5454552,
				"roles" : {
					"guard" : 2,
					"middle" : 4,
					"dir" : 4
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.001632,
					"pbg" : 0.003069,
					"pbm" : 0.001822
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 3,
						"bwa" : 8511488,
						"bwc" : 4422433,
						"roles" : {
							"guard" : 2,
							"middle" : 3,
							"dir" : 3
						},
						"flags" : {
							"fastStable" : 3
						},
						"probs" : {
							"pbr" : 0.001441,
							"pbg" : 0.003069,
							"pbm" : 0.00125
						}
					},
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 2048000,
						"bwc" : 1032119,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000191,
							"pbm" : 0.000572
						}
					}
				]
			},
			{
				"as" : 36850,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 13768,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00001,
					"pbm" : 0.000029
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 13768,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00001,
							"pbm" : 0.000029
						}
					}
				]
			},
			{
				"as" : 49288,
				"relay" : 4,
				"bwa" : 384752,
				"bwc" : 76085,
				"roles" : {
					"middle" : 4,
					"dir" : 2
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 1,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000026000000000000002,
					"pbm" : 0.000077
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 4,
						"bwa" : 384752,
						"bwc" : 76085,
						"roles" : {
							"middle" : 4,
							"dir" : 2
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 1,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000026000000000000002,
							"pbm" : 0.000077
						}
					}
				]
			},
			{
				"as" : 29933,
				"relay" : 1,
				"bwa" : 196227,
				"bwc" : 31011,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 196227,
						"bwc" : 31011,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 31688,
				"relay" : 4,
				"bwa" : 1447509,
				"bwc" : 656742,
				"roles" : {
					"middle" : 4,
					"dir" : 2,
					"exit" : 1,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 3,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00014199999999999998,
					"pbm" : 0.000116,
					"pbe" : 0.000156,
					"pbg" : 0.000155
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 1447509,
						"bwc" : 656742,
						"roles" : {
							"middle" : 4,
							"dir" : 2,
							"exit" : 1,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 3,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00014199999999999998,
							"pbm" : 0.000116,
							"pbe" : 0.000156,
							"pbg" : 0.000155
						}
					}
				]
			},
			{
				"as" : 23387,
				"relay" : 1,
				"bwa" : 27114,
				"bwc" : 282,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 27114,
						"bwc" : 282,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 29518,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 898390,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000379,
					"pbg" : 0.000814,
					"pbm" : 0.000322
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 898390,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000379,
							"pbg" : 0.000814,
							"pbm" : 0.000322
						}
					}
				]
			},
			{
				"as" : 6539,
				"relay" : 1,
				"bwa" : 1079654,
				"bwc" : 536601,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000247,
					"pbg" : 0.000138,
					"pbm" : 0.000138,
					"pbe" : 0.000464
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 1079654,
						"bwc" : 536601,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000247,
							"pbg" : 0.000138,
							"pbm" : 0.000138,
							"pbe" : 0.000464
						}
					}
				]
			},
			{
				"as" : 11426,
				"relay" : 1,
				"bwa" : 262144,
				"bwc" : 148716,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000049,
					"pbm" : 0.000147
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 262144,
						"bwc" : 148716,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000049,
							"pbm" : 0.000147
						}
					}
				]
			},
			{
				"as" : 69942,
				"relay" : 2,
				"bwa" : 409600,
				"bwc" : 348654,
				"roles" : {
					"middle" : 2,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.00008099999999999999,
					"pbm" : 0.000084,
					"pbg" : 0.00016
				},
				"countries" : [
					{
						"cc" : "IT",
						"relay" : 2,
						"bwa" : 409600,
						"bwc" : 348654,
						"roles" : {
							"middle" : 2,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.00008099999999999999,
							"pbm" : 0.000084,
							"pbg" : 0.00016
						}
					}
				]
			},
			{
				"as" : 30058,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 2174,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 2174,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 29859,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 165,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 165,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 31103,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 65842,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000032,
					"pbg" : 0.000069,
					"pbm" : 0.000027
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 65842,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000032,
							"pbg" : 0.000069,
							"pbm" : 0.000027
						}
					}
				]
			},
			{
				"as" : 2527,
				"relay" : 1,
				"bwa" : 132370,
				"bwc" : 20825,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbm" : 0.000011
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 132370,
						"bwc" : 20825,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000011
						}
					}
				]
			},
			{
				"as" : 13285,
				"relay" : 1,
				"bwa" : 65536,
				"bwc" : 17418,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000005,
					"pbm" : 0.000014
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 65536,
						"bwc" : 17418,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000005,
							"pbm" : 0.000014
						}
					}
				]
			},
			{
				"as" : 56950,
				"relay" : 1,
				"bwa" : 3145728,
				"bwc" : 2395921,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000587,
					"pbm" : 0.001761
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 3145728,
						"bwc" : 2395921,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000587,
							"pbm" : 0.001761
						}
					}
				]
			},
			{
				"as" : 27756,
				"relay" : 4,
				"bwa" : 9290226,
				"bwc" : 6027172,
				"roles" : {
					"middle" : 4,
					"guard" : 2,
					"dir" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 2,
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.0018609999999999998,
					"pbm" : 0.00146,
					"pbg" : 0.002417,
					"pbe" : 0.001706
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 9290226,
						"bwc" : 6027172,
						"roles" : {
							"middle" : 4,
							"guard" : 2,
							"dir" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 2,
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.0018609999999999998,
							"pbm" : 0.00146,
							"pbg" : 0.002417,
							"pbe" : 0.001706
						}
					}
				]
			},
			{
				"as" : 8334,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 120700,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00004,
					"pbm" : 0.000119
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 120700,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00004,
							"pbm" : 0.000119
						}
					}
				]
			},
			{
				"as" : 29562,
				"relay" : 1,
				"bwa" : 148062,
				"bwc" : 50394,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 148062,
						"bwc" : 50394,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 13030,
				"relay" : 1,
				"bwa" : 4194304,
				"bwc" : 3860430,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.001523,
					"pbg" : 0.000854,
					"pbm" : 0.000854,
					"pbe" : 0.002862
				},
				"countries" : [
					{
						"cc" : "CH",
						"relay" : 1,
						"bwa" : 4194304,
						"bwc" : 3860430,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001523,
							"pbg" : 0.000854,
							"pbm" : 0.000854,
							"pbe" : 0.002862
						}
					}
				]
			},
			{
				"as" : 9143,
				"relay" : 1,
				"bwa" : 94208,
				"bwc" : 25547,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 94208,
						"bwc" : 25547,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 13118,
				"relay" : 1,
				"bwa" : 196608,
				"bwc" : 10542,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000015,
					"pbm" : 0.000046
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 196608,
						"bwc" : 10542,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000015,
							"pbm" : 0.000046
						}
					}
				]
			},
			{
				"as" : 13660,
				"relay" : 2,
				"bwa" : 203364,
				"bwc" : 36148,
				"roles" : {
					"middle" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000013000000000000001,
					"pbm" : 0.000023,
					"pbe" : 0.000016
				},
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 2,
						"bwa" : 203364,
						"bwc" : 36148,
						"roles" : {
							"middle" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000013000000000000001,
							"pbm" : 0.000023,
							"pbe" : 0.000016
						}
					}
				]
			},
			{
				"as" : 34549,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 17675,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbm" : 0.000012
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 17675,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000012
						}
					}
				]
			},
			{
				"as" : 28812,
				"relay" : 1,
				"bwa" : 256028,
				"bwc" : 40370,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000007,
					"pbe" : 0.00002
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 256028,
						"bwc" : 40370,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000007,
							"pbe" : 0.00002
						}
					}
				]
			},
			{
				"as" : 5483,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 14462,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.00002,
					"pbe" : 0.000061
				},
				"countries" : [
					{
						"cc" : "HU",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 14462,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.00002,
							"pbe" : 0.000061
						}
					}
				]
			},
			{
				"as" : 12353,
				"relay" : 1,
				"bwa" : 196608,
				"bwc" : 980,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "PT",
						"relay" : 1,
						"bwa" : 196608,
						"bwc" : 980,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 47447,
				"relay" : 1,
				"bwa" : 2621440,
				"bwc" : 2095941,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000333,
					"pbg" : 0.000716,
					"pbm" : 0.000283
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 2621440,
						"bwc" : 2095941,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000333,
							"pbg" : 0.000716,
							"pbm" : 0.000283
						}
					}
				]
			},
			{
				"as" : 16086,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 2366249,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000553,
					"pbm" : 0.001659
				},
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 2366249,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000553,
							"pbm" : 0.001659
						}
					}
				]
			},
			{
				"as" : 25255,
				"relay" : 1,
				"bwa" : 1007526,
				"bwc" : 470606,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000253,
					"pbm" : 0.000759
				},
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 1007526,
						"bwc" : 470606,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000253,
							"pbm" : 0.000759
						}
					}
				]
			},
			{
				"as" : 93304,
				"relay" : 2,
				"bwa" : 4296704,
				"bwc" : 3562444,
				"roles" : {
					"middle" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.001006,
					"pbm" : 0.003019
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 4296704,
						"bwc" : 3562444,
						"roles" : {
							"middle" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.001006,
							"pbm" : 0.003019
						}
					}
				]
			},
			{
				"as" : 28685,
				"relay" : 1,
				"bwa" : 2097152,
				"bwc" : 1699742,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000571,
					"pbg" : 0.00032,
					"pbm" : 0.00032,
					"pbe" : 0.001073
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 2097152,
						"bwc" : 1699742,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000571,
							"pbg" : 0.00032,
							"pbm" : 0.00032,
							"pbe" : 0.001073
						}
					}
				]
			},
			{
				"as" : 47069,
				"relay" : 1,
				"bwa" : 590943,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000052,
					"pbm" : 0.000157
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 590943,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000052,
							"pbm" : 0.000157
						}
					}
				]
			},
			{
				"as" : 52284,
				"relay" : 1,
				"bwa" : 65536,
				"bwc" : 28075,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.00001
				},
				"countries" : [
					{
						"cc" : "PA",
						"relay" : 1,
						"bwa" : 65536,
						"bwc" : 28075,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.00001
						}
					}
				]
			},
			{
				"as" : 12436,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 49574,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000008,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "BG",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 49574,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000008,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 25071,
				"relay" : 1,
				"bwa" : 218924,
				"bwc" : 71869,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbm" : 0.000028
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 218924,
						"bwc" : 71869,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbm" : 0.000028
						}
					}
				]
			},
			{
				"as" : 65060,
				"relay" : 4,
				"bwa" : 3528450,
				"bwc" : 1990104,
				"roles" : {
					"guard" : 3,
					"middle" : 4,
					"exit" : 2,
					"dir" : 3
				},
				"flags" : {
					"fastStable" : 3,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.0007390000000000001,
					"pbg" : 0.001084,
					"pbm" : 0.000534,
					"pbe" : 0.000598
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 4,
						"bwa" : 3528450,
						"bwc" : 1990104,
						"roles" : {
							"guard" : 3,
							"middle" : 4,
							"exit" : 2,
							"dir" : 3
						},
						"flags" : {
							"fastStable" : 3,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.0007390000000000001,
							"pbg" : 0.001084,
							"pbm" : 0.000534,
							"pbe" : 0.000598
						}
					}
				]
			},
			{
				"as" : 20640,
				"relay" : 1,
				"bwa" : 48157,
				"bwc" : 1301,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000005
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 48157,
						"bwc" : 1301,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000005
						}
					}
				]
			},
			{
				"as" : 41733,
				"relay" : 1,
				"bwa" : 957440,
				"bwc" : 28812,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000018
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 957440,
						"bwc" : 28812,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000018
						}
					}
				]
			},
			{
				"as" : 99760,
				"relay" : 4,
				"bwa" : 2479148,
				"bwc" : 774827,
				"roles" : {
					"middle" : 4,
					"dir" : 2,
					"guard" : 2,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000552,
					"pbm" : 0.000442,
					"pbg" : 0.00031,
					"pbe" : 0.000903
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 2479148,
						"bwc" : 774827,
						"roles" : {
								"middle" : 4,
							"dir" : 2,
							"guard" : 2,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.000552,
							"pbm" : 0.000442,
							"pbg" : 0.00031,
							"pbe" : 0.000903
						}
					}
				]
			},
			{
				"as" : 719,
				"relay" : 1,
				"bwa" : 97280,
				"bwc" : 413,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbe" : 0.000027
				},
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 1,
						"bwa" : 97280,
						"bwc" : 413,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbe" : 0.000027
						}
					}
				]
			},
			{
				"as" : 13280,
				"relay" : 4,
				"bwa" : 684032,
				"bwc" : 130935,
				"roles" : {
					"middle" : 4,
					"dir" : 4
				},
				"flags" : {
					"fast" : 3,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.00007,
					"pbm" : 0.000211
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 684032,
						"bwc" : 130935,
						"roles" : {
							"middle" : 4,
							"dir" : 4
						},
						"flags" : {
							"fast" : 3,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.00007,
							"pbm" : 0.000211
						}
					}
				]
			},
			{
				"as" : 12676,
				"relay" : 1,
				"bwa" : 30720,
				"bwc" : 16435,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 30720,
						"bwc" : 16435,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 15969,
				"relay" : 1,
				"bwa" : 614400,
				"bwc" : 395673,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000117,
					"pbg" : 0.000252,
					"pbm" : 0.000099
				},
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 614400,
						"bwc" : 395673,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000117,
							"pbg" : 0.000252,
							"pbm" : 0.000099
						}
					}
				]
			},
			{
				"as" : 4685,
				"relay" : 1,
				"bwa" : 307200,
				"bwc" : 173904,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000024,
					"pbm" : 0.000072
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 307200,
						"bwc" : 173904,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000024,
							"pbm" : 0.000072
						}
					}
				]
			},
			{
				"as" : 65104,
				"relay" : 4,
				"bwa" : 6049792,
				"bwc" : 3380627,
				"roles" : {
					"middle" : 4,
					"exit" : 2,
					"guard" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 3,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.002293,
					"pbe" : 0.006442000000000001,
					"pbg" : 0.000313,
					"pbm" : 0.000124
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 3,
						"bwa" : 5787648,
						"bwc" : 3241155,
						"roles" : {
							"middle" : 3,
							"exit" : 2,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 2,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.002259,
							"pbe" : 0.006442000000000001,
							"pbg" : 0.00024,
							"pbm" : 0.000095
						}
					},
					{
						"cc" : "CA",
						"relay" : 1,
						"bwa" : 262144,
						"bwc" : 139472,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000034,
							"pbg" : 0.000073,
							"pbm" : 0.000029
						}
					}
				]
			},
			{
				"as" : 94412,
				"relay" : 2,
				"bwa" : 219184,
				"bwc" : 56722,
				"roles" : {
					"middle" : 2
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000014000000000000001,
					"pbm" : 0.000044
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 2,
						"bwa" : 219184,
						"bwc" : 56722,
						"roles" : {
							"middle" : 2
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000014000000000000001,
							"pbm" : 0.000044
						}
					}
				]
			},
			{
				"as" : 8972,
				"relay" : 1,
				"bwa" : 2097152,
				"bwc" : 2094025,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000421,
					"pbg" : 0.000906,
					"pbm" : 0.000358
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 2097152,
						"bwc" : 2094025,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000421,
							"pbg" : 0.000906,
							"pbm" : 0.000358
						}
					}
				]
			},
			{
				"as" : 4765,
				"relay" : 1,
				"bwa" : 86885,
				"bwc" : 20775,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbm" : 0.000001
				},
				"countries" : [
					{
						"cc" : "TH",
						"relay" : 1,
						"bwa" : 86885,
						"bwc" : 20775,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbm" : 0.000001
						}
					}
				]
			},
			{
				"as" : 99760,
				"relay" : 4,
				"bwa" : 6062080,
				"bwc" : 5122661,
				"roles" : {
					"guard" : 1,
					"middle" : 4,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.0011429999999999997,
					"pbg" : 0.000296,
					"pbm" : 0.0031349999999999998
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 4,
						"bwa" : 6062080,
						"bwc" : 5122661,
						"roles" : {
							"guard" : 1,
							"middle" : 4,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.0011429999999999997,
							"pbg" : 0.000296,
							"pbm" : 0.0031349999999999998
						}
					}
				]
			},
			{
				"as" : 41661,
				"relay" : 1,
				"bwa" : 40960,
				"bwc" : 14442,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000003
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 40960,
						"bwc" : 14442,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000003
						}
					}
				]
			},
			{
				"as" : 96062,
				"relay" : 2,
				"bwa" : 7140837,
				"bwc" : 2208857,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"exit" : 2,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000167,
					"pbg" : 0.000087,
					"pbm" : 0.000087,
					"pbe" : 0.000327
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 2,
						"bwa" : 7140837,
						"bwc" : 2208857,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"exit" : 2,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000167,
							"pbg" : 0.000087,
							"pbm" : 0.000087,
							"pbe" : 0.000327
						}
					}
				]
			},
			{
				"as" : 13598,
				"relay" : 2,
				"bwa" : 71680,
				"bwc" : 2894,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"stable" : 1,
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbe" : 0.000009,
					"pbm" : 0.000008
				},
				"countries" : [
					{
						"cc" : "GR",
						"relay" : 2,
						"bwa" : 71680,
						"bwc" : 2894,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"stable" : 1,
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbe" : 0.000009,
							"pbm" : 0.000008
						}
					}
				]
			},
			{
				"as" : 36351,
				"relay" : 1,
				"bwa" : 614400,
				"bwc" : 257723,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000182,
					"pbg" : 0.000391,
					"pbm" : 0.000155
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 614400,
						"bwc" : 257723,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000182,
							"pbg" : 0.000391,
							"pbm" : 0.000155
						}
					}
				]
			},
			{
				"as" : 11154,
				"relay" : 2,
				"bwa" : 660480,
				"bwc" : 269559,
				"roles" : {
					"middle" : 2,
					"exit" : 1,
					"guard" : 1,
					"dir" : 1
				},
				"flags" : {
					"stable" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000126,
					"pbe" : 0.000009,
					"pbg" : 0.000265,
					"pbm" : 0.000105
				},
				"countries" : [
					{
						"cc" : "LU",
						"relay" : 2,
						"bwa" : 660480,
						"bwc" : 269559,
						"roles" : {
							"middle" : 2,
							"exit" : 1,
							"guard" : 1,
							"dir" : 1
						},
						"flags" : {
							"stable" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000126,
							"pbe" : 0.000009,
							"pbg" : 0.000265,
							"pbm" : 0.000105
						}
					}
				]
			},
			{
				"as" : 19108,
				"relay" : 1,
				"bwa" : 174080,
				"bwc" : 46022,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000017,
					"pbm" : 0.000051
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 174080,
						"bwc" : 46022,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000017,
							"pbm" : 0.000051
						}
					}
				]
			},
			{
				"as" : 35662,
				"relay" : 1,
				"bwa" : 307200,
				"bwc" : 210328,
				"roles" : {
					"guard" : 1,
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000074,
					"pbg" : 0.00016,
					"pbm" : 0.000063
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 307200,
						"bwc" : 210328,
						"roles" : {
							"guard" : 1,
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000074,
							"pbg" : 0.00016,
							"pbm" : 0.000063
						}
					}
				]
			},
			{
				"as" : 27823,
				"relay" : 1,
				"bwa" : 409600,
				"bwc" : 173970,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000094,
					"pbg" : 0.000053,
					"pbm" : 0.000053,
					"pbe" : 0.000177
				},
				"countries" : [
					{
						"cc" : "AR",
						"relay" : 1,
						"bwa" : 409600,
						"bwc" : 173970,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000094,
							"pbg" : 0.000053,
							"pbm" : 0.000053,
							"pbe" : 0.000177
						}
					}
				]
			},
			{
				"as" : 33885,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 1007347,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000241,
					"pbg" : 0.000518,
					"pbm" : 0.000205
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 1007347,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000241,
							"pbg" : 0.000518,
							"pbm" : 0.000205
						}
					}
				]
			},
			{
				"as" : 77048,
				"relay" : 4,
				"bwa" : 853613,
				"bwc" : 167991,
				"roles" : {
					"middle" : 4,
					"dir" : 4
				},
				"flags" : {
					"fast" : 4
				},
				"probs" : {
					"pbr" : 0.000071,
					"pbm" : 0.00021199999999999998
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 853613,
						"bwc" : 167991,
						"roles" : {
							"middle" : 4,
							"dir" : 4
						},
						"flags" : {
							"fast" : 4
						},
						"probs" : {
							"pbr" : 0.000071,
							"pbm" : 0.00021199999999999998
						}
					}
				]
			},
			{
				"as" : 31661,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 1048576,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000303,
					"pbe" : 0.000909
				},
				"countries" : [
					{
						"cc" : "DK",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 1048576,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000303,
							"pbe" : 0.000909
						}
					}
				]
			},
			{
				"as" : 4766,
				"relay" : 1,
				"bwa" : 98304,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000004,
					"pbm" : 0.000011
				},
				"countries" : [
					{
						"cc" : "KR",
						"relay" : 1,
						"bwa" : 98304,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000004,
							"pbm" : 0.000011
						}
					}
				]
			},
			{
				"as" : 16946,
				"relay" : 2,
				"bwa" : 2179072,
				"bwc" : 2190099,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"exit" : 1,
					"dir" : 2
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000476,
					"pbg" : 0.000261,
					"pbm" : 0.000292,
					"pbe" : 0.000875
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 2,
						"bwa" : 2179072,
						"bwc" : 2190099,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"exit" : 1,
							"dir" : 2
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000476,
							"pbg" : 0.000261,
							"pbm" : 0.000292,
							"pbe" : 0.000875
						}
					}
				]
			},
			{
				"as" : 11557,
				"relay" : 1,
				"bwa" : 10093050,
				"bwc" : 5415230,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.001922,
					"pbg" : 0.004134,
					"pbm" : 0.001633
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 10093050,
						"bwc" : 5415230,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.001922,
							"pbg" : 0.004134,
							"pbm" : 0.001633
						}
					}
				]
			},
			{
				"as" : 32097,
				"relay" : 1,
				"bwa" : 772029,
				"bwc" : 274157,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.0001,
					"pbm" : 0.0003
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 772029,
						"bwc" : 274157,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.0001,
							"pbm" : 0.0003
						}
					}
				]
			},
			{
				"as" : 5603,
				"relay" : 1,
				"bwa" : 716800,
				"bwc" : 555661,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000109,
					"pbm" : 0.000327
				},
				"countries" : [
					{
						"cc" : "SI",
						"relay" : 1,
						"bwa" : 716800,
						"bwc" : 555661,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000109,
							"pbm" : 0.000327
						}
					}
				]
			},
			{
				"as" : 40475,
				"relay" : 1,
				"bwa" : 10240,
				"bwc" : 154523,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 1,
					"authority" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000004
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 10240,
						"bwc" : 154523,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1,
							"authority" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000004
						}
					}
				]
			},
			{
				"as" : 8551,
				"relay" : 1,
				"bwa" : 94557,
				"bwc" : 1873,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000002
				},
				"countries" : [
					{
						"cc" : "IL",
						"relay" : 1,
						"bwa" : 94557,
						"bwc" : 1873,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000002
						}
					}
				]
			},
			{
				"as" : 92950,
				"relay" : 2,
				"bwa" : 204800,
				"bwc" : 41395,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000016,
					"pbm" : 0.000047000000000000004
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 2,
						"bwa" : 204800,
						"bwc" : 41395,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000016,
							"pbm" : 0.000047000000000000004
						}
					}
				]
			},
			{
				"as" : 5495,
				"relay" : 1,
				"bwa" : 71680,
				"bwc" : 38294,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000006,
					"pbm" : 0.000017
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 71680,
						"bwc" : 38294,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000006,
							"pbm" : 0.000017
						}
					}
				]
			},
			{
				"as" : 1280,
				"relay" : 1,
				"bwa" : 6553600,
				"bwc" : 4839002,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.002041,
					"pbg" : 0.004389,
					"pbm" : 0.001734
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 6553600,
						"bwc" : 4839002,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.002041,
							"pbg" : 0.004389,
							"pbm" : 0.001734
						}
					}
				]
			},
			{
				"as" : 24644,
				"relay" : 2,
				"bwa" : 587776,
				"bwc" : 97645,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1,
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000039,
					"pbm" : 0.00011899999999999999
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 2,
						"bwa" : 587776,
						"bwc" : 97645,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1,
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000039,
							"pbm" : 0.00011899999999999999
						}
					}
				]
			},
			{
				"as" : 3243,
				"relay" : 1,
				"bwa" : 49053,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbe" : 0.000004
				},
				"countries" : [
					{
						"cc" : "PT",
						"relay" : 1,
						"bwa" : 49053,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbe" : 0.000004
						}
					}
				]
			},
			{
				"as" : 40676,
				"relay" : 1,
				"bwa" : 1508717,
				"bwc" : 590235,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000358,
					"pbe" : 0.001074
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 1508717,
						"bwc" : 590235,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000358,
							"pbe" : 0.001074
						}
					}
				]
			},
			{
				"as" : 36375,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 119314,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000043,
					"pbg" : 0.000092,
					"pbm" : 0.000036
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 119314,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000043,
							"pbg" : 0.000092,
							"pbm" : 0.000036
						}
					}
				]
			},
			{
				"as" : 39743,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 29017,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbe" : 0.00001
				},
				"countries" : [
					{
						"cc" : "RO",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 29017,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbe" : 0.00001
						}
					}
				]
			},
			{
				"as" : 31342,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 251,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbm" : 0.000027
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 251,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbm" : 0.000027
						}
					}
				]
			},
			{
				"as" : 15763,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 2112,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000006
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 2112,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000006
						}
					}
				]
			},
			{
				"as" : 24828,
				"relay" : 2,
				"bwa" : 3062879,
				"bwc" : 1521237,
				"roles" : {
					"guard" : 2,
					"middle" : 2,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.00092,
					"pbg" : 0.0007199999999999999,
					"pbm" : 0.000552,
					"pbe" : 0.001487
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 2,
						"bwa" : 3062879,
						"bwc" : 1521237,
						"roles" : {
							"guard" : 2,
							"middle" : 2,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.00092,
							"pbg" : 0.0007199999999999999,
							"pbm" : 0.000552,
							"pbe" : 0.001487
						}
					}
				]
			},
			{
				"as" : 36352,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 24933,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbm" : 0.000028
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 24933,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbm" : 0.000028
						}
					}
				]
			},
			{
				"as" : 42239,
				"relay" : 1,
				"bwa" : 0,
				"bwc" : 0,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"notFastStable" : 1
				},
				"probs" : {
					
				},
				"countries" : [
					{
						"cc" : "UA",
						"relay" : 1,
						"bwa" : 0,
						"bwc" : 0,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"notFastStable" : 1
						},
						"probs" : {
							
						}
					}
				]
			},
			{
				"as" : 20454,
				"relay" : 1,
				"bwa" : 110961,
				"bwc" : 34364,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 110961,
						"bwc" : 34364,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 15943,
				"relay" : 1,
				"bwa" : 729150,
				"bwc" : 15494,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000088,
					"pbm" : 0.000264
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 729150,
						"bwc" : 15494,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000088,
							"pbm" : 0.000264
						}
					}
				]
			},
			{
				"as" : 6724,
				"relay" : 1,
				"bwa" : 358400,
				"bwc" : 5314,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000103,
					"pbm" : 0.000309
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 358400,
						"bwc" : 5314,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000103,
							"pbm" : 0.000309
						}
					}
				]
			},
			{
				"as" : 4713,
				"relay" : 1,
				"bwa" : 59347,
				"bwc" : 622,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000002,
					"pbm" : 0.000005
				},
				"countries" : [
					{
						"cc" : "JP",
						"relay" : 1,
						"bwa" : 59347,
						"bwc" : 622,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000002,
							"pbm" : 0.000005
						}
					}
				]
			},
			{
				"as" : 20807,
				"relay" : 1,
				"bwa" : 655360,
				"bwc" : 189085,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000036,
					"pbg" : 0.000078,
					"pbm" : 0.000031
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 655360,
						"bwc" : 189085,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000036,
							"pbg" : 0.000078,
							"pbm" : 0.000031
						}
					}
				]
			},
			{
				"as" : 43470,
				"relay" : 1,
				"bwa" : 1903286,
				"bwc" : 648044,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000603,
					"pbm" : 0.00181
				},
				"countries" : [
					{
						"cc" : "PL",
						"relay" : 1,
						"bwa" : 1903286,
						"bwc" : 648044,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000603,
							"pbm" : 0.00181
						}
					}
				]
			},
			{
				"as" : 12715,
				"relay" : 1,
				"bwa" : 63488,
				"bwc" : 4319,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "ES",
						"relay" : 1,
						"bwa" : 63488,
						"bwc" : 4319,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 21844,
				"relay" : 1,
				"bwa" : 307200,
				"bwc" : 68936,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000025,
					"pbm" : 0.000075
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 307200,
						"bwc" : 68936,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000025,
							"pbm" : 0.000075
						}
					}
				]
			},
			{
				"as" : 13184,
				"relay" : 1,
				"bwa" : 55296,
				"bwc" : 2126,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbe" : 0.000002
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 55296,
						"bwc" : 2126,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbe" : 0.000002
						}
					}
				]
			},
			{
				"as" : 196689,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 28014,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000012,
					"pbm" : 0.000037
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 28014,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000012,
							"pbm" : 0.000037
						}
					}
				]
			},
			{
				"as" : 12654,
				"relay" : 2,
				"bwa" : 233548,
				"bwc" : 44710,
				"roles" : {
					"guard" : 1,
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1,
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000027,
					"pbg" : 0.000052,
					"pbm" : 0.000029999999999999997
				},
				"countries" : [
					{
						"cc" : "CA",
						"relay" : 2,
						"bwa" : 233548,
						"bwc" : 44710,
						"roles" : {
							"guard" : 1,
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1,
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000027,
							"pbg" : 0.000052,
							"pbm" : 0.000029999999999999997
						}
					}
				]
			},
			{
				"as" : 45230,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 1422,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000004
				},
				"countries" : [
					{
						"cc" : "NZ",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 1422,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000004
						}
					}
				]
			},
			{
				"as" : 39651,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 3230,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 3230,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 31688,
				"relay" : 4,
				"bwa" : 1175465,
				"bwc" : 387179,
				"roles" : {
					"middle" : 4,
					"dir" : 4,
					"guard" : 2
				},
				"flags" : {
					"fastStable" : 4
				},
				"probs" : {
					"pbr" : 0.000165,
					"pbm" : 0.00021099999999999998,
					"pbg" : 0.000284
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 1175465,
						"bwc" : 387179,
						"roles" : {
							"middle" : 4,
							"dir" : 4,
							"guard" : 2
						},
						"flags" : {
							"fastStable" : 4
						},
						"probs" : {
							"pbr" : 0.000165,
							"pbm" : 0.00021099999999999998,
							"pbg" : 0.000284
						}
					}
				]
			},
			{
				"as" : 31333,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 309895,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000067,
					"pbm" : 0.0002
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 309895,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000067,
							"pbm" : 0.0002
						}
					}
				]
			},
			{
				"as" : 49880,
				"relay" : 2,
				"bwa" : 1638400,
				"bwc" : 1560005,
				"roles" : {
					"middle" : 2,
					"dir" : 1,
					"guard" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000205,
					"pbm" : 0.000197,
					"pbg" : 0.00042
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 1638400,
						"bwc" : 1560005,
						"roles" : {
							"middle" : 2,
							"dir" : 1,
							"guard" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000205,
							"pbm" : 0.000197,
							"pbg" : 0.00042
						}
					}
				]
			},
			{
				"as" : 5408,
				"relay" : 1,
				"bwa" : 589302,
				"bwc" : 6281,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000011,
					"pbm" : 0.000032
				},
				"countries" : [
					{
						"cc" : "GR",
						"relay" : 1,
						"bwa" : 589302,
						"bwc" : 6281,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbm" : 0.000032
						}
					}
				]
			},
			{
				"as" : 41164,
				"relay" : 1,
				"bwa" : 143360,
				"bwc" : 38289,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000011,
					"pbe" : 0.000034
				},
				"countries" : [
					{
						"cc" : "NO",
						"relay" : 1,
						"bwa" : 143360,
						"bwc" : 38289,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbe" : 0.000034
						}
					}
				]
			},
			{
				"as" : 29422,
				"relay" : 1,
				"bwa" : 20480,
				"bwc" : 241,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "FI",
						"relay" : 1,
						"bwa" : 20480,
						"bwc" : 241,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 3265,
				"relay" : 1,
				"bwa" : 32768,
				"bwc" : 911,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "NL",
						"relay" : 1,
						"bwa" : 32768,
						"bwc" : 911,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 10178,
				"relay" : 2,
				"bwa" : 112640,
				"bwc" : 12574,
				"roles" : {
					"middle" : 2,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 2
				},
				"probs" : {
					"pbr" : 0.000009,
					"pbm" : 0.000026000000000000002
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 2,
						"bwa" : 112640,
						"bwc" : 12574,
						"roles" : {
							"middle" : 2,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 2
						},
						"probs" : {
							"pbr" : 0.000009,
							"pbm" : 0.000026000000000000002
						}
					}
				]
			},
			{
				"as" : 6830,
				"relay" : 1,
				"bwa" : 25600,
				"bwc" : 161,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "CZ",
						"relay" : 1,
						"bwa" : 25600,
						"bwc" : 161,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 47241,
				"relay" : 1,
				"bwa" : 1219584,
				"bwc" : 685892,
				"roles" : {
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000106,
					"pbe" : 0.000318
				},
				"countries" : [
					{
						"cc" : "RU",
						"relay" : 1,
						"bwa" : 1219584,
						"bwc" : 685892,
						"roles" : {
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000106,
							"pbe" : 0.000318
						}
					}
				]
			},
			{
				"as" : 20738,
				"relay" : 1,
				"bwa" : 1125599,
				"bwc" : 544230,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000243,
					"pbg" : 0.000522,
					"pbm" : 0.000206
				},
				"countries" : [
					{
						"cc" : "GB",
						"relay" : 1,
						"bwa" : 1125599,
						"bwc" : 544230,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000243,
							"pbg" : 0.000522,
							"pbm" : 0.000206
						}
					}
				]
			},
			{
				"as" : 30962,
				"relay" : 1,
				"bwa" : 1024000,
				"bwc" : 403387,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000089,
					"pbm" : 0.000266
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 1024000,
						"bwc" : 403387,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000089,
							"pbm" : 0.000266
						}
					}
				]
			},
			{
				"as" : 44432,
				"relay" : 1,
					"bwa" : 1048576,
				"bwc" : 616581,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000266,
					"pbg" : 0.000572,
					"pbm" : 0.000226
				},
				"countries" : [
					{
						"cc" : "IS",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 616581,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000266,
							"pbg" : 0.000572,
							"pbm" : 0.000226
						}
					}
				]
			},
			{
				"as" : 55,
				"relay" : 1,
				"bwa" : 102400,
				"bwc" : 12934,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbm" : 0.000009
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 102400,
						"bwc" : 12934,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbm" : 0.000009
						}
					}
				]
			},
			{
				"as" : 8866,
				"relay" : 1,
				"bwa" : 512000,
				"bwc" : 123541,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000079,
					"pbg" : 0.000045,
					"pbm" : 0.000045,
					"pbe" : 0.000149
				},
				"countries" : [
					{
						"cc" : "BG",
						"relay" : 1,
						"bwa" : 512000,
						"bwc" : 123541,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000079,
							"pbg" : 0.000045,
							"pbm" : 0.000045,
							"pbe" : 0.000149
						}
					}
				]
			},
			{
				"as" : 38657,
				"relay" : 1,
				"bwa" : 98304,
				"bwc" : 28739,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000003
				},
				"countries" : [
					{
						"cc" : "AU",
						"relay" : 1,
						"bwa" : 98304,
						"bwc" : 28739,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000003
						}
					}
				]
			},
			{
				"as" : 31688,
				"relay" : 4,
				"bwa" : 997771,
				"bwc" : 293658,
				"roles" : {
					"middle" : 4,
					"dir" : 3
				},
				"flags" : {
					"notFastStable" : 1,
					"fastStable" : 1,
					"fast" : 2
				},
				"probs" : {
					"pbr" : 0.000121,
					"pbm" : 0.00036300000000000004
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 4,
						"bwa" : 997771,
						"bwc" : 293658,
						"roles" : {
							"middle" : 4,
							"dir" : 3
						},
						"flags" : {
							"notFastStable" : 1,
							"fastStable" : 1,
							"fast" : 2
						},
						"probs" : {
							"pbr" : 0.000121,
							"pbm" : 0.00036300000000000004
						}
					}
				]
			},
			{
				"as" : 41454,
				"relay" : 1,
				"bwa" : 819200,
				"bwc" : 777566,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000028,
					"pbg" : 0.00006,
					"pbm" : 0.000024
				},
				"countries" : [
					{
						"cc" : "HR",
						"relay" : 1,
						"bwa" : 819200,
						"bwc" : 777566,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000028,
							"pbg" : 0.00006,
							"pbm" : 0.000024
						}
					}
				]
			},
			{
				"as" : 16276,
				"relay" : 1,
				"bwa" : 3145728,
				"bwc" : 2718510,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000871,
					"pbg" : 0.000488,
					"pbm" : 0.000488,
					"pbe" : 0.001637
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 3145728,
						"bwc" : 2718510,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000871,
							"pbg" : 0.000488,
							"pbm" : 0.000488,
							"pbe" : 0.001637
						}
					}
				]
			},
			{
				"as" : 34610,
				"relay" : 1,
				"bwa" : 204800,
				"bwc" : 41458,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000033,
					"pbg" : 0.000072,
					"pbm" : 0.000028
				},
				"countries" : [
					{
						"cc" : "SE",
						"relay" : 1,
						"bwa" : 204800,
						"bwc" : 41458,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000033,
							"pbg" : 0.000072,
							"pbm" : 0.000028
						}
					}
				]
			},
			{
				"as" : 3595,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 37724,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000005,
					"pbm" : 0.000014
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 37724,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000005,
							"pbm" : 0.000014
						}
					}
				]
			},
			{
				"as" : 13237,
				"relay" : 1,
				"bwa" : 1048576,
				"bwc" : 205709,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000639,
					"pbm" : 0.001917
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 1048576,
						"bwc" : 205709,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000639,
							"pbm" : 0.001917
						}
					}
				]
			},
			{
				"as" : 12322,
				"relay" : 1,
				"bwa" : 30720,
				"bwc" : 13398,
				"roles" : {
					"middle" : 1,
					"exit" : 1
				},
				"flags" : {
					"stable" : 1
				},
				"probs" : {
					"pbr" : 0.000003,
					"pbe" : 0.000009
				},
				"countries" : [
					{
						"cc" : "FR",
						"relay" : 1,
						"bwa" : 30720,
						"bwc" : 13398,
						"roles" : {
							"middle" : 1,
							"exit" : 1
						},
						"flags" : {
							"stable" : 1
						},
						"probs" : {
							"pbr" : 0.000003,
							"pbe" : 0.000009
						}
					}
				]
			},
			{
				"as" : 167,
				"relay" : 1,
				"bwa" : 256000,
				"bwc" : 369200,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000016,
					"pbg" : 0.000033,
					"pbm" : 0.000013
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 256000,
						"bwc" : 369200,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000016,
							"pbg" : 0.000033,
							"pbm" : 0.000013
						}
					}
				]
			},
			{
				"as" : 61391,
				"relay" : 1,
				"bwa" : 8094654,
				"bwc" : 3802511,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.003105,
					"pbg" : 0.00174,
					"pbm" : 0.00174,
					"pbe" : 0.005835
				},
				"countries" : [
					{
						"cc" : "MT",
						"relay" : 1,
						"bwa" : 8094654,
						"bwc" : 3802511,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.003105,
							"pbg" : 0.00174,
							"pbm" : 0.00174,
							"pbe" : 0.005835
						}
					}
				]
			},
			{
				"as" : 6418,
				"relay" : 2,
				"bwa" : 124577,
				"bwc" : 8848,
				"roles" : {
					"middle" : 2
				},
				"flags" : {
					"fast" : 1,
					"notFastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000011,
					"pbm" : 0.000032
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 2,
						"bwa" : 124577,
						"bwc" : 8848,
						"roles" : {
							"middle" : 2
						},
						"flags" : {
							"fast" : 1,
							"notFastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000011,
							"pbm" : 0.000032
						}
					}
				]
			},
			{
				"as" : 21213,
				"relay" : 1,
				"bwa" : 404358,
				"bwc" : 137283,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000098,
					"pbg" : 0.000055,
					"pbm" : 0.000055,
					"pbe" : 0.000185
				},
				"countries" : [
					{
						"cc" : "AT",
						"relay" : 1,
						"bwa" : 404358,
						"bwc" : 137283,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000098,
							"pbg" : 0.000055,
							"pbm" : 0.000055,
							"pbe" : 0.000185
						}
					}
				]
			},
			{
				"as" : 30083,
				"relay" : 1,
				"bwa" : 256000,
				"bwc" : 566556,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000087,
					"pbg" : 0.000186,
					"pbm" : 0.000074
				},
				"countries" : [
					{
						"cc" : "US",
						"relay" : 1,
						"bwa" : 256000,
						"bwc" : 566556,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000087,
							"pbg" : 0.000186,
							"pbm" : 0.000074
						}
					}
				]
			},
			{
				"as" : 4771,
				"relay" : 1,
				"bwa" : 51200,
				"bwc" : 17642,
				"roles" : {
					"middle" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000001,
					"pbm" : 0.000002
				},
				"countries" : [
					{
						"cc" : "NZ",
						"relay" : 1,
						"bwa" : 51200,
						"bwc" : 17642,
						"roles" : {
							"middle" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000001,
							"pbm" : 0.000002
						}
					}
				]
			},
			{
				"as" : 43561,
				"relay" : 1,
				"bwa" : 325632,
				"bwc" : 98078,
				"roles" : {
					"middle" : 1,
					"dir" : 1
				},
				"flags" : {
					"fast" : 1
				},
				"probs" : {
					"pbr" : 0.000027,
					"pbm" : 0.00008
				},
				"countries" : [
					{
						"cc" : "BG",
						"relay" : 1,
						"bwa" : 325632,
						"bwc" : 98078,
						"roles" : {
							"middle" : 1,
							"dir" : 1
						},
						"flags" : {
							"fast" : 1
						},
						"probs" : {
							"pbr" : 0.000027,
							"pbm" : 0.00008
						}
					}
				]
			},
			{
				"as" : 24940,
				"relay" : 1,
				"bwa" : 3174400,
				"bwc" : 2009786,
				"roles" : {
					"guard" : 1,
					"middle" : 1,
					"exit" : 1,
					"dir" : 1
				},
				"flags" : {
					"fastStable" : 1
				},
				"probs" : {
					"pbr" : 0.000779,
					"pbg" : 0.000437,
					"pbm" : 0.000437,
					"pbe" : 0.001464
				},
				"countries" : [
					{
						"cc" : "DE",
						"relay" : 1,
						"bwa" : 3174400,
						"bwc" : 2009786,
						"roles" : {
							"guard" : 1,
							"middle" : 1,
							"exit" : 1,
							"dir" : 1
						},
						"flags" : {
							"fastStable" : 1
						},
						"probs" : {
							"pbr" : 0.000779,
							"pbg" : 0.000437,
							"pbm" : 0.000437,
							"pbe" : 0.001464
						}
					}
				]
			}
		],
		"clients" : {
			"total" : 3464352,
			"atBridges" : 14244,
			"atRelays" : 3450108,
			"cip4" : 14004,
			"cip6" : 244,
			"cptObfs2" : 144,
			"cptObfs3" : 296,
			"cptOR" : 13808,
			"cptUnknown" : 0
		},
		"servers" : {
			"total" : {
				"count" : 61404,
				"bwa" : 64163973674,
				"bwc" : 42539175662,
				"osv" : {
					"linux" : 46512,
					"windows" : 10518,
					"freebsd" : 1916,
					"darwin" : 1682
				},
				"tsv" : {
					"v023" : 41812,
					"v022" : 13790,
					"v025" : 472,
					"v024" : 5330
				}
			},
			"relays" : {
				"total" : {
					"count" : 57360,
					"bwa" : 63593148484,
					"bwc" : 42508916492,
					"osv" : {
						"linux" : 43560,
						"windows" : 9644,
						"freebsd" : 1780,
						"darwin" : 1620
					},
					"tsv" : {
						"v023" : 39244,
						"v022" : 13140,
						"v025" : 464,
						"v024" : 4512
					},
					"pbr" : 16.637823999999807
				},
				"roles" : {
					"guard" : {
						"count" : 17980,
						"bwa" : 44781445716,
						"bwc" : 32536432840,
						"osv" : {
							"linux" : 15588,
							"freebsd" : 960,
							"darwin" : 216,
							"windows" : 928
						},
						"tsv" : {
							"v023" : 11852,
							"v022" : 3384,
							"v024" : 2584,
							"v025" : 160
						},
						"pbg" : 16.768908000000025
					},
					"middle" : {
						"count" : 57360,
						"bwa" : 63593148484,
						"bwc" : 42508916492,
						"osv" : {
							"linux" : 43560,
							"windows" : 9644,
							"freebsd" : 1780,
							"darwin" : 1620
						},
						"tsv" : {
							"v023" : 39244,
							"v022" : 13140,
							"v025" : 464,
							"v024" : 4512
						},
						"pbm" : 16.94390799999997
					},
					"dir" : {
						"count" : 33880,
						"bwa" : 46801465220,
						"bwc" : 31208897120,
						"osv" : {
							"linux" : 23052,
							"windows" : 8100,
							"freebsd" : 1012,
							"darwin" : 1272
						},
						"tsv" : {
							"v023" : 24408,
							"v022" : 6056,
							"v024" : 3080,
							"v025" : 336
						}
					},
					"exit" : {
						"count" : 14480,
						"bwa" : 25929795768,
						"bwc" : 16833210372,
						"osv" : {
							"linux" : 11340,
							"windows" : 2032,
							"freebsd" : 440,
							"darwin" : 336
						},
						"tsv" : {
							"v022" : 3936,
							"v023" : 9116,
							"v024" : 1364,
							"v025" : 64
						},
						"pbe" : 16.20125999999995,
						"pex" : {
							"p4" : 14296,
							"p6" : 11720,
							"p8" : 14092,
							"p46" : 11672,
							"p48" : 14044,
							"p68" : 11484,
							"p468" : 11436
						}
					}
				},
				"flags" : {
					"fastStable" : {
						"count" : 32272,
						"bwa" : 53076307224,
						"bwc" : 37675765864,
						"osv" : {
							"linux" : 27340,
							"windows" : 2748,
							"freebsd" : 1280,
							"darwin" : 412
						},
						"tsv" : {
							"v023" : 21404,
							"v022" : 7288,
							"v024" : 3288,
							"v025" : 292
						},
						"probs" : {
							"relay" : 13.837027999999922,
							"guard" : 16.40656800000004,
							"middle" : 11.108503999999966,
							"exit" : 13.995959999999982
						}
					},
					"stable" : {
						"count" : 4652,
						"bwa" : 113360084,
						"bwc" : 31351192,
						"osv" : {
							"linux" : 3896,
							"windows" : 440,
							"darwin" : 116,
							"freebsd" : 144
						},
						"tsv" : {
							"v022" : 2004,
							"v023" : 2344,
							"v025" : 64,
							"v024" : 240
						},
						"probs" : {
							"relay" : 0.014091999999999985,
							"exit" : 0.017740000000000013,
							"middle" : 0.02462799999999999
						}
					},
					"fast" : {
						"count" : 17208,
						"bwa" : 10316821152,
						"bwc" : 4794883372,
						"osv" : {
							"linux" : 10392,
							"windows" : 5416,
							"darwin" : 952,
							"freebsd" : 284
						},
						"tsv" : {
							"v023" : 13440,
							"v024" : 888,
							"v022" : 2816,
							"v025" : 64
						},
						"probs" : {
							"relay" : 2.7758199999999804,
							"middle" : 5.784420000000004,
							"exit" : 2.181272000000001,
							"guard" : 0.3623400000000001
						}
					},
					"notFastStable" : {
						"count" : 3228,
						"bwa" : 86660024,
						"bwc" : 6916064,
						"osv" : {
							"linux" : 1932,
							"windows" : 1040,
							"darwin" : 140,
							"freebsd" : 72
						},
						"tsv" : {
							"v025" : 44,
							"v023" : 2056,
							"v022" : 1032,
							"v024" : 96
						},
						"probs" : {
							"middle" : 0.026355999999999997,
							"relay" : 0.01088399999999999,
							"exit" : 0.006287999999999998
						}
					},
					"authority" : {
						"count" : 204,
						"bwa" : 160053672,
						"bwc" : 84063812,
						"osv" : {
							"linux" : 152,
							"freebsd" : 48
						},
						"tsv" : {
							"v025" : 116,
							"v024" : 88
						},
						"probs" : {
							"relay" : 0.000572,
							"middle" : 0.001256,
							"guard" : 0.000432
						}
					}
				}
			},
			"bridges" : {
				"total" : {
					"count" : 4044,
					"bwa" : 570825190,
					"bwc" : 30259170,
					"osv" : {
						"freebsd" : 136,
						"windows" : 874,
						"linux" : 2952,
						"darwin" : 62
					},
					"tsv" : {
						"v024" : 818,
						"v023" : 2568,
						"v022" : 650,
						"v025" : 8
					}
				},
				"brps" : {
					"https" : {
						"count" : 1658,
						"bwa" : 314662454,
						"bwc" : 16296386,
						"osv" : {
							"freebsd" : 60,
							"linux" : 1238,
							"windows" : 328,
							"darwin" : 20
						},
						"tsv" : {
							"v024" : 392,
							"v023" : 1006,
							"v022" : 256,
							"v025" : 4
						}
					},
					"other" : {
						"count" : 566,
						"bwa" : 21188396,
						"bwc" : 607100,
						"osv" : {
							"windows" : 74,
							"linux" : 448,
							"freebsd" : 32,
							"darwin" : 12
						},
						"tsv" : {
							"v023" : 358,
							"v024" : 80,
							"v022" : 128
						}
					},
					"email" : {
						"count" : 1748,
						"bwa" : 231986688,
						"bwc" : 13312488,
						"osv" : {
							"linux" : 1250,
							"windows" : 416,
							"darwin" : 30,
							"freebsd" : 44
						},
						"tsv" : {
							"v023" : 1144,
							"v024" : 340,
							"v022" : 260,
							"v025" : 4
						}
					}
				},
				"brts" : {
					"obfs2" : {
						"count" : 594,
						"bwa" : 136127934,
						"bwc" : 9257756,
						"osv" : {
							"linux" : 570,
							"freebsd" : 20,
							"darwin" : 4
						},
						"tsv" : {
							"v024" : 590,
							"v025" : 4
						}
					},
					"obfs3" : {
						"count" : 98,
						"bwa" : 30099088,
						"bwc" : 3334356,
						"osv" : {
							"freebsd" : 8,
							"linux" : 86,
							"darwin" : 4
						},
						"tsv" : {
							"v024" : 98
						}
					},
					"obfs23" : {
						"count" : 94,
						"bwa" : 29840972,
						"bwc" : 3333704,
						"osv" : {
							"freebsd" : 8,
							"linux" : 82,
							"darwin" : 4
						},
						"tsv" : {
							"v024" : 94
						}
					}
				},
				"bres" : {
					"bre" : {
						"count" : 548,
						"bwa" : 110199432,
						"bwc" : 5198122,
						"osv" : {
							"linux" : 548
						},
						"tsv" : {
							"v024" : 388,
							"v023" : 160
						}
					}
				}
			}
		}
	}
}