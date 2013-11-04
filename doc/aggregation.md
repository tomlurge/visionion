//	Subsequent Incremental Map-Reduce
	http://docs.mongodb.org/manual/tutorial/perform-incremental-map-reduce/

*	wenn verschiedene collections mit unterschiedlichen feldern in eine ziel-collection aggregiert 
	werden sollen, müssen entweder alle map-funktionen alle felder mit jeweils sinnvollen angaben 
	enthalten (also 0 oder null o.ä. wenn die ausgangs-collection die felder nicht enthält), oder die 
	reduce funktion muss den fall, dass ein feld in der map nicht auftaucht, sinnvoll abfangen (also 
	1* fragen, ob die map das feld übergibt und 2* wenn ja, dann es überehmen oder 3* wenn nein dann 
	es anlegen (mit leerem inhalt, oder 0, oder null - je nachdem)
	siehe MAPPING 2 COLLECTIONS INTO 1 RESULT - VERSION #2

//	mapping heterogeneous collections
	if several collections with different fields have to be aggregated into one target collection   
	either all map functions have to contaion all fields (with sensible defaults like 0 or null)   
	or the reduce function must handle the case of a missing field, which means:   
	- asking/waiting if map delivers the field
	- if yes that case receive the value
	- otherwise create it with sensible defaults
	see MAPPING 2 COLLECTIONS INTO 1 RESULT - VERSION #2

//	calling emit multiple times
	http://docs.mongodb.org/manual/reference/method/db.collection.mapReduce/#db.collection.mapReduce
	The following map function may call emit(key,value) multiple times depending on the number of elements in the input document's items field:
	function() {
		this.items.forEach(function(item){ emit(item.sku, 1); });
	}

//	accessing a field in an array
	var chartData = [{"Value1":17.800,"DateAndTime":"\/Date(1338501601000)\/"}]
	chartData[0].DateAndTime;
	
//	accessing name of field and value of field
	var myObject = {} ;
	myObject["aaa"] = "AAA" ;
	myObject["bbb"] = "BBB" ;
	var fieldName, fieldValue ;
	for(fieldName in myObject) {
	   fieldValue = myObject[fieldName] ;
	   alert("name : " + fieldName + " : value : " + fieldValue) ;
	}


//	aggregation steps
	
	0.	aggregation starts either triggered by the import of new data 
		or periodically, first checking the import collection for newly imported documents
		from the newly imported documents it extracts the dates and for each distinct date starts the following aggregation procedure:
	1.	more than one mapReduce for one import collection
		some mapReduce steps are too complex to put them together in one map/reduce
	A.	they can be run sequentially and all be reduced to one result { out: { reduce : "tempFacts" }
		http://stackoverflow.com/questions/5681851/mongodb-combine-data-from-multiple-collections-in-to-one-how
		http://tebros.com/2011/07/using-mongodb-mapreduce-to-join-2-collections/
	2.	probably we can then also aggregate from different import tables
		should still be possible with  { out: { reduce : "tempFacts" }
	B.	amounting to the following mapReduce steps:
		* clients				from clients import collection
		* servers
			**					from bridges import collection
			**					from relays import collection
		* bridges				from bridges import collection
		* relays				from relays import collection
		* countries
			**					from clients import collection
			**					from relays import collection
		* autonomous systems	from relays import collection
	3.	server and countries need to be aggregated from 2 import collections
		and the resulting aggregates reduced into one, like: { out: { reduce : "servers/countries/autosys" } }
	p4.	to get rid of the "value" object we need one further step
		http://stackoverflow.com/questions/7257989/in-mongodb-mapreduce-how-can-i-flatten-the-values-object
		this is not part of the mapReduce operation
	5.	the resulting fact document has to be added to the facts collection
		overwriting older documents for the same date if need be (e.g. if new data arrived for already existing imports)
		using the update() method
		The update() method can either replace the existing document with the new document or update specific fields in the existing document.
		If the <update> argument contains fields not currently in the document, the update() method adds the new fields to the document.
		If you set the upsert option in the <options> argument to true or 1 and no existing document match the <query> argument, the update() method can insert a new document into the collection.


// tactical considerations  (Friday, August 9, 2013)

	it's not possible to aggregate from multiple documents in tempFacts into one visFacts document
		if those multiple documents in tempFacts do not each carry every field of the final visFacts document
		which means that they each would have to be around 3000 lines long and contain a template of the final aggregated monster. that's just not feasable
	what alternatives do we have?
	we could aggregate into multiple smaller documents like we do right now
		and then just copy the results into a final visFacts document with ordinary database commands instead of fancy mapreduce logic. we could do this while also getting rid of the "value" attribute that MongoDB's mapReduce insists on forcing on us thereby killimg two birds with one stone (poor birds! in german this saying is somewhat less disturbing).
		downside: mixing mapReduce and database procedures. getting rid of "value" is not that important either
	or we could try some fancy looping logic like some of the MAPPING 2 COLLECTIONS INTO 1 RESULT - VERSIONs below 
		and see how far we get.
		downside: it's not clear and how many portals to hell that opens
	or we could reevaluate if it was good idea to split import data across 3 collections 
		and if we could consolidate aggergation into 1 step and process by consolidating imports into 1 table
		downside: requires thinking.
		thinking: 
			query could be refined to only select appropriate documents 
				(maybe imported dcuments get a field "_typ" with values "client", "relay" or "bridge")
				but that would still need more than one aggregation script
				not good...
			or in every map step we first ask if the document has the field we're asking for
				can that be solved programmatically by a loop?
				do we have to ask for each object too?
					could that even facilitate the procedure? 
			OR:	let's add a type field
				copy all raw data into one import collection called "import"
				copy all aggregate scripts into one big script (like in the beginning)
				modify aggregation script
					either where appropriate add "if type == xxx" statements to the map step
					or, easier but longer, if/else whole blocks copied over from the current scripts
						with the else being default values ("", 0, etc)
				use out:reduce instead of merge




