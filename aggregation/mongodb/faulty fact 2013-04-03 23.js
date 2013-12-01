/*  because of a missing query for "date" parameter
    this aggregation ran over the whole import database
    and added up every document
    
    client numbers presumably returned NaN because the result surpassed 
    the value space that javascript can handle
    servers.total.count:4600366 means we so far have 4.600.366 documents in the database.
    servers.osv.other:0 means that no server ever reported an OS of type “other”
    servers.tsv results suggest that only tor version 022 or newer were used
*/
 
{
	"_id" : "2013-04-03 23",
	"value" : {
		"date" : "2013-04-03 23",
		"span" : 1,
		"clients" : {
			"total" : NaN,
			"atBridges" : NaN,
			"atRelays" : NaN,
			"cip4" : 129058464,
			"cip6" : 390312,
			"cptObfs2" : 224208,
			"cptObfs3" : 254712,
			"cptOR" : 128846808,
			"cptUnknown" : 73008
		},
		"servers" : {
			"total" : {
				"count" : 4600366,
				"bwa" : 3766426282507,
				"bwc" : 2333606697200,
				"osv" : {
					"linux" : 3430745,
					"darwin" : 107535,
					"freebsd" : 143608,
					"windows" : 832345,
					"other" : 0
				},
				"tsv" : {
					"v010" : 0,
					"v011" : 0,
					"v012" : 0,
					"v020" : 0,
					"v021" : 0,
					"v022" : 906414,
					"v023" : 3025454,
					"v024" : 607315
				}
			},
			"bridges" : {
				"total" : {
					"count" : 1408648,
					"bwa" : 196742763201,
					"bwc" : 8995753423,
					"osv" : {
						"linux" : 1034291,
						"darwin" : 18718,
						"freebsd" : 47435,
						"windows" : 295287,
						"other" : 0
					},
					"tsv" : {
						"v010" : 0,
						"v011" : 0,
						"v012" : 0,
						"v020" : 0,
						"v021" : 0,
						"v022" : 210304,
						"v023" : 842898,
						"v024" : 349469
					}
				}
			},
			"relays" : {
				"roleAll" : {
					"total" : {
						"count" : 3191718,
						"bwa" : 3569683519306,
						"bwc" : 2324610943777,
						"osv" : {
							"linux" : 2396454,
							"darwin" : 88817,
							"freebsd" : 96173,
							"windows" : 537058,
							"other" : 0
						},
						"tsv" : {
							"v010" : 0,
							"v011" : 0,
							"v012" : 0,
							"v020" : 0,
							"v021" : 0,
							"v022" : 696110,
							"v023" : 2182556,
							"v024" : 257846
						},
						"pbr" : 939.9792429882168
					}
				}
			}
		}
	}
}
> 
