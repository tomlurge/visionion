/** TODO
 *
 *	currently client data is aggregated on a per day basis. hourly facts contain
 * 	daily client data. monthly client data has to be handled differnetly.
 * 	for further discussion see
 * 	https://github.com/tomlurge/visionion/issues/5
 *
 */

/*
 *
 * 		0.1		CONTENTS
 *
 *		0			intro
 *		1.		MAP
 *		2			REDUCE
 *		2.1		initialization
 *		2.2		clients & servers
 *		2.3		country
 *		2.4		autosys
 *		3			FINALIZE
 *		4			EXECUTE
 *
 *
 *
 *		0.		INTRODUCTION
 *
 *					This script, factMR.js, takes the output of importMR.js - the
 *					'facts' collection - and consolidates it into daily and monthly
 *					aggregates. It doesn't add or change anything logically. It's only
 *					purpose is to generate a more compact overview over the data
 *					aggregated by importMR.js and thereby facilitate a fluid
 *					visualization experience.
 *
 *					The MAP step strips the 'date' field of each fact from the undesired
 *					detail - either hours for daily aggregation or hours and days for
 *					monthly aggregation. It then passes on the otherwise unaltered fact
 *					to the reduce step where all facts from the same day or month are
 *					consolidated into one new daily or monthly fact.
 *
 *					The REDUCE section is exactly the same as in importMR.js.
 *					It is, again, comparatively short. Especially reducing the 'server'
 *					objects is a very straight forward process.
 *					OTOH 'countries' and 'autonomous systems' have to go through some
 *					nested loops because they collect data from different sections of
 *					the mapping output.
 *
 *					The FINIALIZE section is empty so far. Computation of averages and
 *					bound might eventually be added in this section.
 *
 *					The EXECUTE section configures the map reduce apparatus and sets its
 *					global variables.
 *					Finally the script get's called as either daily or monthly
 *					aggregation and with the desired 'start', 'end' and 'updated'
 *					parameters.
 *
 *
 */




/*
 *
 *		1.		MAP
 *
 */


function mapValues() {
	"use strict";

	var period;

	//	DAILY AGGREGATION
	if (theSpan === "d") {
		//	strip hours from "date"
		period = this.value.date.slice(0,10);
	}

	//	MONTHLY AGGREGATION
	if (theSpan === "m") {
		//	strip hours and days from "date"
		period = this.value.date.slice(0,7);
	}

	this.value.date = period;

//	SEND THE RESULT TO REDUCE
	emit(period, this);
}



/*
 *
 *		2.		REDUCE
 *
 */


function reduceFact(key, values) {
	"use strict";
	//	will go through every property in incoming data - server and client -
	//	and add it to the result fact as aggregated so far


	/*
	 *		2.1		INITIALIZATION
	 */

	//	INITIALIZE REDUCTION BY GATHERING OF ADMINISTRATIVE DATA
	var fact = {
		date: key,
		span: theSpan,
		updt: theUpdate,
		client: {},
		server: {
			total: {},
			bridge: {},
			relay: {}
		},
		country: [],
		autosys: []
	};


	//	REDUCE INCOMING DATA TO THE RESULT FACT
	values.forEach(function(value) {

		/*
		 *		2.2		CLIENTS & SERVERS
		 */

		//	first reduce all properties except "country" and "autosys" arrays
		//	because these require special treatment (function "update()" won't
		//	touch arrays)
		update(fact, value);

		function update(fact, value){
			for (var property in value){
				if (value.hasOwnProperty(property) &&
						//	arrays are handled seperately
						//	(that concerns the sections "country" and "autosys")
					Object.prototype.toString.call(value[property]) !==
					"[object Array]"
				) {
					//	check incoming value against already aggregated fact
					//	existing path - needs to be updated
					if (fact[property] !== undefined) {
						if (typeof(fact[property]) === 'number') {
							fact[property] += value[property];
						}
						else if (typeof(fact[property]) === 'string') {
							fact[property] = value[property];
						}
						else {	//	element is object - drill down
							update(fact[property], value[property]);
						}
					} else {	//	new path - needs to be added
						fact[property] = clone(value[property]);
					}
				}
			}
			//	see http://stackoverflow.com/a/122190/128165 for details
			function clone(input){
				if(input === null || typeof(input) !== 'object') {
					return input;
				}
				var NewProto = function() {};
				NewProto.prototype = input.constructor;
				var temp = new NewProto();

				for(var key in input) {
					if (input.hasOwnProperty(key)) {
						temp[key] = clone(input[key]);
					}
				}
				return temp;
			}
		}

		/*
		 *		2.3		COUNTRIES
		 */

		value.country.forEach(function(vCountry) {
			//	double loop part 1: country in values emitted from map
			//	assuming data about this country hasn't already been aded to fact
			var incomingCountryAlreadyknown = false;
			//	double loop part 2: country in fact
			for (var fc = 0, fcl = fact.country.length; fc < fcl; fc++) {
				//	check the array for country already added to the aggregation
				var countryFact = fact.country[fc];
				//	if an object for this country was already added to the array
				if (countryFact.country === vCountry.country) {
					//	add values from countryMapped to that already existing object
					update(countryFact, vCountry);
					if (vCountry.autosys) {
						//	inner double loop part 1: 'as' in mapped.country
						for (var vca = 0, vcal = vCountry.autosys.length;
								 vca < vcal;
								 vca++) {
							//	(can be nmore than one,
							//	 because incoming may be pre-aggregated)
							var incomingASinCountryAlreadyKown = false;
							//	countryASmap is the whole object {as: int, count: int}
							var countryASmap = vCountry.autosys[vca];

							//	<- inner double loop part 2: 'as' in fact.country
							for (var fca = 0, fcal = countryFact.autosys.length;
									 fca < fcal;
									 fca++) {
								var countryAsFact = countryFact.autosys[fca];
								if (countryAsFact.as === countryASmap.as) {
									countryAsFact.count += countryASmap.count;
									incomingASinCountryAlreadyKown = true;
									break;
								}
							}
							//	after the inner loop is through
							if (!incomingASinCountryAlreadyKown) {
								//	if the 'as' wasn't found in the array add it
								countryFact.autosys.push(countryASmap);
							}
							//	return to the outer loop, check the next country passed in
						}
					}
					incomingCountryAlreadyknown = true;
					break;
				}
			}
			//	if the country does not exist in the array so far
			if (!incomingCountryAlreadyknown) {
				//	add the country object to the array
				fact.country.push(vCountry);
			}
		});

		/*
		 *		2.4		AUTONOMOUS SYSTEMS
		 */

		value.autosys.forEach(function(vAutosys) {
			var incomingASalreadyKnown = false;
			for (var fa = 0, fal = fact.autosys.length; fa < fal; fa++) {
				//	for each object in fact.autosys
				var asFact = fact.autosys[fa];
				//	if that object's 'as' field equals that of the relay
				if (asFact.as === vAutosys.as) {
					//	add up the numbers
					update(asFact, vAutosys);
					for (var vac = 0, vacl = vAutosys.country.length;
							 vac < vacl;
							 vac++) {
						var incomingCountryInASalreadyKown = false;
						var asCountryMap = vAutosys.country[vac];
						for (var fac = 0, facl = asFact.country.length;
								 fac < facl;
								 fac++) {
							var asCountryFact = asFact.country[fac];
							if (asCountryFact.cc === asCountryMap.cc) {
								update(asCountryFact, asCountryMap);
								incomingCountryInASalreadyKown = true;
								break;
							}
						}
						if (!incomingCountryInASalreadyKown) {
							asFact.country.push(asCountryMap);
						}
					}
					incomingASalreadyKnown = true;
					break;
				}
			}
			if (!incomingASalreadyKnown) {
				fact.autosys.push(vAutosys);
			}
		});

	});

	//	finally retun the reduced fact
	return fact;

}



/*
 *
 *		3.		FINALIZE
 *
 *
 */

function finalizeFact(key, fact) {
	"use strict";
	/*
	 maybe add some finishing touches like averages etc
	 */
	return fact;
}



/*
 *
 *		4.		EXECUTE
 *
 */


function runAggregation (inSpan, inStart, inEnd, inUpdated) {
	"use strict";

	var span = inSpan;
	var start = inStart;
	var end = inEnd || start;
	var updated = inUpdated || "1999-12-31T23:59:59.999Z";


	//	supported "span" values are "d" (daily) and "m" (monthly)
	if (span !== ("d" || "m")) {
		print('first parameter must be "d" (for daily) or "m" (for monthly)!');
		return;
	}


	db.runCommand (
		{
			mapReduce: "facts",			//	the sourcing database collection
			map: mapValues,
			reduce: reduceFact,
			finalize: finalizeFact,
			out: {
				//	the final fact collection:
				//	'merge' replaces existing documents with the same key,
				//	'reduce' adds values to existing documents
				merge: "facts"
			},
			query: {
				"date": {
					"$gte": start,
					"$lte": end
					//	both conditions have to include equality, otherwise
					//	single parameter invocation (start === end) would return
					//	an empty result
				},
				"updt": {
					"$gte": updated
				}
			},
			jsMode: true,
			//	if "true" it's faster, but needs more memory
			//	works only for up to 500.000 keys
			sort: {
				//	speeds up mapReduce as 'date' is indexed in the import
				//	collection but demands that "sort" equals the key of the
				//	map operation
				"date": 1
			},
			scope: {
				//	globally (in the mapReduce job) available variables
				theSpan: span,
				theUpdate: updated
			}
		}
	);
}


runAggregation(
	//	mandatory: either "d" for daily aggregation or "m" for monthly aggregation
	"d"
	//	mandatory: start aggregation at (inclusive)
	,"2013-04-02 00"
	//	optional: stop aggregation at (inclusive)
//,"2013-04-03 00"
	//	optional: only consider data added on or after
//,"2013-08-14T09:23:45.302Z"
);