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
 *					aggregates. It doesn't add or change anything logically. Its only
 *					purpose is to generate a more compact overview of the data
 *					aggregated by importMR.js and thereby facilitate a fluid
 *					visualization experience.
 *
 *					It differs from importMR.js in that it has to work on aggregated
 *					data which regretfully and diseíngeously but unavoidably has all
 *					values boxed except "_id" in a "value" element. MongoDB just loves
 *					it that way.
 *
 *					The MAP step generates new mapping keys by stripping the '_id'
 *					field of each fact from undesired detail - either hours for daily
 *					aggregation or hours and days for monthly aggregation.
 *					It also sets the 'date' to the start of that day or month.
 *					It then passes on the otherwise unaltered fact to the reduce step
 *					where all facts from the same day or month are consolidated into
 *					one new daily or monthly fact.
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

	var key;
	var hourly = this;


	//	DAILY AGGREGATION
	if (theSpan === "d") {
		//	strip hours from "_id"
		key = hourly._id.slice(0,10);
		//	set 'date' to the start of that day
		hourly.value.date = key + "T00:00";
	}


	//	MONTHLY AGGREGATION
	if (theSpan === "m") {
		//	strip hours and days from "_id"
		key = hourly._id.slice(0,7);
		//	set 'date' to the start of that month
		hourly.value.date = key + "-01T00:00";
	}


	//	SEND THE RESULT TO REDUCE
	emit(key, hourly.value);

}



/*
 *
 *		2.		REDUCE
 *
 */


function reduceFact(key, hourly) {
	"use strict";
	//	will go through every property in incoming data - server and client -
	//	and add it to the result fact as aggregated so far


/*
 *		2.1		INITIALIZATION
 */

	//	INITIALIZE REDUCTION BY GATHERING OF ADMINISTRATIVE DATA
	var fact = {
		date: "",
		span: "",
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
	hourly.forEach(function(value) {

/*
 *		2.2		CLIENTS & SERVERS
 */

		//	first reduce all properties except "country" and "autosys" arrays
		//	because these require special treatment
		//	(function "update()" won't touch arrays)
		update(fact, value);

		function update(reduced, mapped) {
			for (var property in mapped) {
				if (mapped.hasOwnProperty(property) &&
						//	arrays are handled seperately
						//	(that concerns the sections "country" and "autosys")
					Object.prototype.toString.call(mapped[property]) !==
					"[object Array]"
				) {
					//	check incoming value against already reduced fact
					//	existing path - needs to be updated
					if (reduced[property] !== undefined) {
						if (typeof(reduced[property]) === 'number') {
							reduced[property] += mapped[property];
						}
						else if (typeof(reduced[property]) === 'string') {
							reduced[property] = mapped[property];
						}
						else {	//	element is object - drill down
							update(reduced[property], mapped[property]);
						}
					} else {	//	new path - needs to be added
						reduced[property] = clone(mapped[property]);
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
		/*	SIMPLE VERSION
		//	LOOP 1/2: 'country' array in values emitted from map
		value.country.forEach( function(valCountryObj) {
			//	assuming data about current country hasn't already been aded to fact
			var incomingCountryAlreadyKnown = false;
			//	LOOP 2/2: for each country object in fact's 'country' array
			fact.country.forEach( function(factCountryObj) {
				//	if an object for this country was already added to the array
				if (factCountryObj.country === valCountryObj.country) {
					//	add values from incoming country to the fact's country object
					update(factCountryObj, valCountryObj);
					incomingCountryAlreadyKnown = true;
				}
			});
			//	if the country wasn't found in the reduced fact
			if (!incomingCountryAlreadyKnown) {
				//	add the country object to the fact.counry array
				fact.country.push(valCountryObj);
			}
		});
		*/

		/*	EXTENDED VERSION WITH LOOPS OPTIMIZED FOR PERFORMANCE */
		//	LOOP OVER COUNTRY ARRAY 1/2: INCOMING VALUES
		value.country.forEach(function(valCountryObj) {
			//	assuming data about current country hasn't already been aded to fact
			var incomingCountryAlreadyKnown = false;

			//	LOOP OVER COUNTRY ARRAY 2/2: REDUCED FACT
			for (var fc = 0, fcl = fact.country.length; fc < fcl; fc++) {
				var factCountryObj = fact.country[fc];
				//	if an object for this country was already added to the array
				if (factCountryObj.country === valCountryObj.country) {
					//	add values from incoming country to the fact's country object
					update(factCountryObj, valCountryObj);
					incomingCountryAlreadyKnown = true;
					break;
				}
			}
			//	if the incoming country wasn't found in the fact.country array
			if (!incomingCountryAlreadyKnown) {
				//	add the country object to the array
				fact.country.push(valCountryObj);
			}
		});
		/*	EXCESSIVE VERSION WITH LOOPS OPTIMIZED FOR PERFORMANCE
		 AND COUNTRY.AUTOSYS IMPLEMENTED AS ARRAY INSTEAD OF A SIMPLE OBJECT

		//	OUTER LOOP OVER COUNTRY ARRAY 1/2: INCOMING VALUES
		value.country.forEach(function(valCountryObj) {
			//	assuming data about current country hasn't already been aded to fact
			var incomingCountryAlreadyKnown = false;

			//	OUTER LOOP OVER COUNTRY ARRAY 2/2: REDUCED FACT
			for (var fc = 0, fcl = fact.country.length; fc < fcl; fc++) {
				var factCountryObj = fact.country[fc];
				//	if an object for this country was already added to the array
				if (factCountryObj.country === valCountryObj.country) {
					//	add values from incoming country to the fact's country object
					update(factCountryObj, valCountryObj);

					//	update() doesn't cover arrays, therefor country.autosys has to be
					//	handeled seperately
					if (valCountryObj.autosys) {
						//	INNER LOOP 1/2: AS data in incoming value.country
						for (var vca = 0, vcal = valCountryObj.autosys.length;
								 vca < vcal;
								 vca++) {
							//	(can be nmore than one because incoming may be pre-aggregated)
							var ASinIncomingCountryAlreadyKown = false;
							//	valCountryAS is the whole object {as: string, count: int}
							var valCountryAS = valCountryObj.autosys[vca];

							//	INNER LOOP 2/2: check fact.country.autosys for incoming AS
							//	make sure the fact object has an autosys array
							if (!factCountryObj.autosys) {
								factCountryObj.autosys = [];
							}
							for (var fca = 0, fcal = factCountryObj.autosys.length;
									 fca < fcal;
									 fca++) {
								var factCountryAS = factCountryObj.autosys[fca];
								//	if incoming country.AS is found in fact, add count
								if (factCountryAS.as === valCountryAS.as) {
									factCountryAS.count += valCountryAS.count;
									ASinIncomingCountryAlreadyKown = true;
									break;
								}
							}
							//	after the inner loop is through
							if (!ASinIncomingCountryAlreadyKown) {
								//	if incoming AS wasn't found in fact.country.autosys, add it
								factCountryObj.autosys.push(valCountryAS);
							}
							//	return to the outer loop, check the next country passed in
						}
					}

					incomingCountryAlreadyKnown = true;
					break;
				}
			}
			//	if the incoming country doesn't exist in the fact.country array so far
			if (!incomingCountryAlreadyKnown) {
				//	add the country object to the array
				fact.country.push(valCountryObj);
			}
		});
		 */

/*
 *		2.4		AUTONOMOUS SYSTEMS
 */
		/* SIMPLE VERSION
		//	OUTER LOOP OVER AUTOSYS ARRAY 1/2: INCOMING VALUES
		value.autosys.forEach( function(valASobj) {
			var incomingASalreadyKnown = false;
			//	OUTER LOOP OVER AUTOSYS ARRAY 2/2: REDUCED FACT
			fact.autosys.forEach( function(factASobj) {

				//	if the fact's object's 'as' field equals that of the incoming value
				if (factASobj.as === valASobj.as) {
					//	add up the numbers
					update(factASobj, valASobj);


					//	update() doesn't cover arrays, therefor autosys.country has to be
					//	handeled seperately. first check for it's existance since inner
					//	arrays in AS (and country) objects are only created on demand
					if (valASobj.country) {

						//	INNER LOOP OVER AUTOSYS.COUNTRY ARRAY 1/2: INCOMING VALUE
						//	now check each country in the country array
						//	of that incoming AS object value
						valASobj.country.forEach(function (valAScountryObj) {
							var incomingAScountryAlreadyKown = false;

							//	INNER LOOP OVER AUTOSYS.COUNTRY ARRAY 2/2: REDUCED FACT
							//	compare them with the countries in the country array
							//	of  fact's AS object. again check for it's existance first
							if (!factASobj.country) {
								factASobj.country = [];
							}
							factASobj.country.forEach(function (factAScountryObj) {

								//	if the incoming AS is already present in fact
								if (factAScountryObj.cc === valAScountryObj.cc) {
									//	add up the numbers
									update(factAScountryObj, valAScountryObj);
									incomingAScountryAlreadyKown = true;
								}

							});
							//	if incoming AS wasn't already known add it to facts country
							if (!incomingAScountryAlreadyKown) {
								factASobj.country.push(valAScountryObj);
							}

						});

					}


					incomingASalreadyKnown = true;
				}
			});
			//	if the incoming country wasn't already known add it to the fact
			if (!incomingASalreadyKnown) {
				fact.autosys.push(valASobj);
			}
		});
		 */

		/*	EXTENDED VERSION WITH LOOPS OPTIMIZED FOR PERFORMANCE */
		//	OUTER LOOP OVER AUTOSYS ARRAY 1/2: INCOMING VALUES
		value.autosys.forEach(function(valASobj) {
			//	assuming data about current AS hasn't already been aded to fact
			var incomingASalreadyKnown = false;

			//	OUTER LOOP OVER AUTOSYS ARRAY 2/2: REDUCED FACT
			for (var fa = 0, fal = fact.autosys.length; fa < fal; fa++) {
				var factASobj = fact.autosys[fa];

				//	if the fact's object's 'as' field equals that of the incoming value
				if (factASobj.as === valASobj.as) {
					//	add up the numbers
					update(factASobj, valASobj);

					//	update() doesn't cover arrays, therefor autosys.country has to be
					//	handeled seperately
					if (valASobj.country) {
						//	INNER LOOP OVER AUTOSYS.COUNTRY ARRAY 1/2: INCOMING VALUE
						//	now check each country in the country array
						//	of that incoming AS object value
						for (var vac = 0, vacl = valASobj.country.length;
								 vac < vacl;
								 vac++) {
							var incomingCountryInASalreadyKown = false;
							var valAScountryObj = valASobj.country[vac];

							//	INNER LOOP OVER AUTOSYS.COUNTRY ARRAY 2/2: REDUCED FACT
							//	compare them with the countries in the country array
							//	of  fact's AS object
							//	but first make sure the fact object has an autosys array
							if (!factASobj.country) {
								factASobj.country = [];
							}
							for (var fac = 0, facl = factASobj.country.length;
									 fac < facl;
									 fac++) {
								var factAScountryObj = factASobj.country[fac];
								//	if the incoming AS is already present in fact
								if (factAScountryObj.cc === valAScountryObj.cc) {
									//	add up the numbers
									update(factAScountryObj, valAScountryObj);
									incomingCountryInASalreadyKown = true;
									break;
								}
							}
							//	if incoming AS wasn't already known add it to the facts country
							if (!incomingCountryInASalreadyKown) {
								factASobj.country.push(valAScountryObj);
							}
						}
					}

					incomingASalreadyKnown = true;
					break;
				}
			}
			//	if the incoming country wasn't already known add it to the fact
			if (!incomingASalreadyKnown) {
				fact.autosys.push(valASobj);
			}
		});


	// END values.forEach
	});


	//	fact.span has to be set after update(), otherwise it wil be overwritten
	fact.span = theSpan;

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
	var updated = inUpdated || "2000-01-01T00:00:00.000Z";


	//	supported "span" values are "d" (daily) and "m" (monthly)
	if ( ! ( (span === "d") || (span === "m") ) ) {
		print('first parameter must be "d" (for "daily") or "m" (for "monthly")!');
		return;
	}


	db.runCommand (
		{
			mapReduce: "fact",	//	the sourcing database collection
			map: mapValues,
			reduce: reduceFact,
			finalize: finalizeFact,
			out: {
				//	the final fact collection:
				//	'merge' replaces existing documents with the same key,
				//	'reduce' adds values to existing documents
				merge: "fact"
			},
			query: {
				"_id": {
					"$gte": start,
					"$lte": end
					//	both conditions have to include equality, otherwise
					//	single parameter invocation (start === end) would return
					//	an empty result
				},
				//	only work from hourly data
					"value.span": "h",
					"value.updt": {
						"$gte": updated
					}
			},
			jsMode: false,
			//	if "true" it's faster, but needs more memory
			//	works only for up to 500.000 keys
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
	"m"
	//	mandatory: start aggregation at (inclusive)
	,"2013-04-01-00"
	//	optional: stop aggregation at (inclusive)
	,"2013-05-01-23"
	//	NOTE that we are using '_id', not 'date' here. reasons:
	//			'_id' is always indexed and
	// 			it's shorter and easier to write than JavaScript Date
	//	optional: only consider data added on or after...
	//,"2013-08-14T09:23:45.302Z"
);


/*	HINT - READ BEFORE RUNNING

	 in absence of a polished UI this has to do as interface and manual:

	 - of course check parameters in runAggregation)
	 - check parameters in db.runCommand, especially
	 -- mapReduce
	 -- merge

	 everything else should work automagically

 */
