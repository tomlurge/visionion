It can't be overestimated enough that what you output in the map step has to have the exact same structure than what you output in the reduce step. It's called idempotence but few people have a good idea of what it actually means. I had a lot of problems with scripts running fine on the testdata but then failing strangely on the actual data.  The reason was that the actual data set was much bigger and the mapReduce engine started to work through it in chunks: processing the first 100 documents in the collection, then the next 100 documents and so forth, and then aggregatig those results together like they were new input documents. So what you spit out in the reduce step - and you think you're done with that - get's sucked into another mapreduce circle again, and again... That's why it's so important that when implementing the reduce step to always have in mind that you might not just chew through one more of those single-document map outputs, but through one of the results - which in this case were much more complex and therefor required some additional checks and logic. E.g. since we are counting a lot of single relay entries on a given date there was more than one place where it was tempting to add a +1 in the reduce step instead of adding the actual value contained in the document to be reduced - which might as well be 100 (and in that case actually was because MongoDBs mapReduce workes through the data in chunks of 100 documents). 

Another important thing to note - and that you don't learn from the MongoDB docs - is that you have a lot of freedom with your JavaScript as long as you don't break idempotence (see above). Most of the stuff like numbers of relays complying to certain characteristics is aggregated by just adding up document after document and is logically not very interesting. But the more complex constructs like countries and autonomous systems which I had to collect from different documents through different means and intermediary steps can't be handled that easily. First I tried to aggregate them stepwise through intermediate collections but that didn't quite work out and made the whole thing very complex. Stackoverflow was my best friend again. The examples other people had posted really opened my eyes for what is possible within the reduce step - as long as the final output can be fed into it again (the importance of idempotence...).

Indices to support MapReduce
Indices over the import table are useful to speed up mapReduce. Two indices can be used:
	an index on "addd" since we query over "addd"
	an index on "date" since we emit date as (part of) the key 
see also:	
	http://stackoverflow.com/questions/15106869/mongodb-mapreduce-performance-using-indexes
	http://stackoverflow.com/questions/12015064/mongodb-mapreduce-and-sorting
	http://edgystuff.tumblr.com/post/7624019777/optimizing-map-reduce-with-mongodb
The respective MongoDB commands are:					
	> db.import.ensureIndex({date:1})
	> db.import.ensureIndex({addd:-1})	// 	descending since normally we are only interested 
										//	in the newest additions


/*	

		

note:	out.merge	replaces existing documents with the same _id
		out.reduce	adds fields if they aren't already present, 
					but doesn't touch fields that are (no updates!)

wo immer die import daten einen array enthalten, muss ich diesen in der mapFunction durchlaufen, um emit mit den passenden key:values zu befüllen (http://docs.mongodb.org/manual/reference/method/db.collection.mapReduce/#calculate-order-and-total-quantity-with-average-quantity-per-item)

mit finalize kann man schön durchschnitte u.ä. errechnen
http://docs.mongodb.org/manual/reference/method/db.collection.mapReduce/#calculate-order-and-total-quantity-with-average-quantity-per-item

Subsequent Incremental Map-Reduce
http://docs.mongodb.org/manual/tutorial/perform-incremental-map-reduce/

*	wenn verschiedene collections mit unterschiedlichen feldern in eine ziel-collection aggregiert 
	werden sollen, müssen entweder alle map-funktionen alle felder mit jeweils sinnvollen angaben 
	enthalten (also 0 oder null o.ä. wenn die ausgangs-collection die felder nicht enthält), oder die 
	reduce funktion muss den fall, dass ein feld in der map nicht auftaucht, sinnvoll abfangen (also 
	1* fragen, ob die map das feld übergibt und 2* wenn ja, dann es überehmen oder 3* wenn nein dann 
	es anlegen (mit leerem inhalt, oder 0, oder null - je nachdem)
	siehe MAPPING 2 COLLECTIONS INTO 1 RESULT - VERSION #2


//	doing stuff

http://docs.mongodb.org/manual/reference/method/db.collection.mapReduce/#db.collection.mapReduce
The following map function may call emit(key,value) multiple times depending on the number of elements in the input document's items field:
function() {
	this.items.forEach(function(item){ emit(item.sku, 1); });
}

//	accessing a field in an array
var chartData = [{"Value1":17.800,"DateAndTime":"\/Date(1338501601000)\/"}]
chartData[0].DateAndTime;

//	accessing name of field  and value of field
var myObject = {} ;
myObject["aaa"] = "AAA" ;
myObject["bbb"] = "BBB" ;
var fieldName, fieldValue ;
for(fieldName in myObject) {
   fieldValue = myObject[fieldName] ;
   alert("name : " + fieldName + " : value : " + fieldValue) ;
}


*/


/*		aggregation steps
	0.	aggregation starts either triggered by the import of new data 
		or periodically, first checking the import collection for newly imported documents
		from the newly imported documents it extracts the dates and for each distinct date starts the following aggregation procedure:
	1.	more than one mapReduce for one import collection
		some mapReduce steps are to complex to put them together in one map/reduce
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
*/

/*
um das mal festzuhalten

	der trick ist, dass in den kleinen aggregierungsfunktionen, 
	die diese finale hier nur vorbereiten, alle aggFunktionen verscheidene keys haben, 
	aber alle datensätze enthalten das date. 
	diese date mache ich hier zum key. so kann ich alle felder aus der pre-aggregation 
	in einem rutsch in ein document schreiben
	"in einem rutsch" ist das entscheidende detail, weil nur so felder zu einem schon exístoerenden document zugefügt werden können.
*/	

/* newest tactical considerations  (Friday, August 9, 2013)
	it's not possible to aggregate from multiple documents in tempFacts into one visFacts document
		if those multiple documents in tempFacts do not each carry every field of the final visFacts document
		which means that they each would have to be around 3000 lines long and contain a template of the final aggregated monster
		that's just not feasable. while it would be a nice show off of dedication and diligence it would also be a maintenance nightmare, not to mention evolution and diversification
	that said: what alternatives do we have?
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
*/



//	MAPPING an OBJECT or ARRAY
//	http://docs.mongodb.org/manual/tutorial/map-reduce-examples
//	define a map function
var myMap = function() {
	emit (	
		this.date,								//	key 'this' always refers to the current instance document 
		{	
			guards: this.guards_count,			// 	value
			some: this.name,					//	gibt ein array von documenten zurück: 
			and: 1								//	[ {"guards": "anInt", "some": "aString", "and": 1} ]
		}
	);
};
//	oder auch emit als teil einer schleife über einen array
var myMap2 = function() {
	for (var i = 0; i < this.items.length; i++) {
    	var key = this.items[i].sku;
		var value = {
			count: 1,
	 		qty: this.items[i].qty
	 	};
		emit (key, value);
	}
};
//	define a corresponding reduce function
var myReduce = function ( key, valuesArray ) {	//	key greift auf alle von emit ausgegebenen keys zu
												//	valuesArray ist ein array aller werte zu einem key
		 reducedVal = { 
		 	count: 0, 
		 	qty: 0 
		 };
		 for (var i = 0; i < valuesArray.length; i++) {
			 reducedVal.count += valuesArray[i].count;
			 reducedVal.qty += valuesArray[i].qty;
		 }
		 return reducedVal;
};	
//	let it run
var myResult = db.importCollection.mapReduce ( 
	myMap, 
	myReduce, 
	{out: "facts"} 
);



//	MAPPING 2 COLLECTIONS INTO 1 RESULT - VERSION #1
//	http://stackoverflow.com/questions/5681851/mongodb-combine-data-from-multiple-collections-in-to-one-how/8746805#8746805
db.users_comments.remove();
//	intercept non-existant fields in reduce step 
var mapUsers, mapComments, reduce;
//	setup sample data - wouldn't actually use this in production
db.users.remove();
db.comments.remove();
db.users.save({firstName:"Rich",lastName:"S",gender:"M",country:"CA",age:"18"});
db.users.save({firstName:"Rob",lastName:"M",gender:"M",country:"US",age:"25"});
db.users.save({firstName:"Sarah",lastName:"T",gender:"F",country:"US",age:"13"});
var users = db.users.find(); 	//	um im nächsten schritt auf users[i]._id zugreifen zu können
db.comments.save({userId: users[0]._id, "comment": "Hey, what's up?", created: new ISODate()});
db.comments.save({userId: users[1]._id, "comment": "Not much", created: new ISODate()});
db.comments.save({userId: users[0]._id, "comment": "Cool", created: new ISODate()});
//
mapUsers = function() {
    var values = {
        country: this.country,
        gender: this.gender,
        age: this.age
    };
    emit(this._id, values);
};
mapComments = function() {
    var values = {
        commentId: this._id,
        comment: this.comment,
        created: this.created
    };
    emit(this.userId, values);
};
var reduce = function(k, values) {
    var result = {}, 
    commentFields = {
        "commentId": '', 
        "comment": '',
        "created": ''
    };
    values.forEach(function(value) {
        var field;
        if ("comment" in value) {								//	if one of the values fields is named 'comment's the value is a comment document
            if (!("comments" in result)) {						//	if there havn't been added any 'comment's to 'result' so far
                result.comments = [];							//	create a 'comments' array in 'result' 
            }
            result.comments.push(value);						//	add the 'comment' document to the 'comments' array in 'result'
        } 
/*      else if ("comments" in value) {							//	this 'else' clause covers a case that can't occur here:
            if (!("comments" in result)) {						//	adding a 'comments' array from one result to another result.
                result.comments = [];							//	removing the clause seems to make no difference in the result
            }
            result.comments.push.apply(result.comments, value.comments);
        }
*/
        for (field in value) {									//	take care of all other fields
            if (value.hasOwnProperty(field) && 					//	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
            	!(field in commentFields)) {					//	if field is not comment field	
                	result[field] = value[field];				//	add it to result
            }
        }
    });
    return result;
};
/*	reduce can be simplyfied to:
var reduce = function(k, values) {
    var result = {} ,
    values.forEach(function(value) {
        var field;
        for (field in value) {
            if (value.hasOwnProperty(field) {
                result[field] = value[field];
            }
        }
    });
    return result;
};
that still works in principle: 
all fields are preserved, 
(but of course arrays are reduced to one element (the first, it seems))
regardless of their occurrence in all or only some of the mapped  collections 
*/
db.users.mapReduce(mapUsers, reduce, {"out": {"reduce": "users_comments"}});
db.comments.mapReduce(mapComments, reduce, {"out": {"reduce": "users_comments"}});
db.users_comments.find().pretty(); // see the resulting collection




//	MAPPING 2 COLLECTIONS INTO 1 RESULT - VERSION #2
//	http://stackoverflow.com/questions/9696940/merging-two-collections-in-mongodb/9723549#9723549
//	adding empty fields in map step
var mapDetails = function() {
    var output = {								//	konstruiert das value
    	studentid: this.studentid, 				//	füllt einige werte schon aus
    	classes_1: [], 
    	classes_2: [], 
    	year: this.year, 
    	overall: 0, 							//	oder setzt sie auf default 0
    	subscore: 0
    }
    if (this.year == 1) {						//	rödelt noch ein bisschen auf einzelnen feldern rum
        output.classes_1 = this.classes;
    }
    if (this.year == 2) {
        output.classes_2 = this.classes;
    }
    emit(this.studentid, output);				//	gibt dann key/value aus
};
var mapGpas = function() {
    emit(
    	this.studentid, 
    	{
    		studentid: this.studentid, 
    		classes_1: [], 
    		classes_2: [], 
    		year: 0, 							//	year:0 benutzt er in reduce als switch
    		overall: this.overall, 
    		subscore: this.subscore
    	}
    );
};
var reduceFunction = function(key, values) {
    var outs = { 
    	studentid: "0", 
    	classes_1: [], 
    	classes_2: [], 
    	overall: 0, 
    	subscore: 0
    };
    values.forEach( function(v) {
        outs.studentid = v.studentid;
        v.classes_1.forEach(
        	function(class)	{
        		if (outs.classes_1.indexOf(class)==-1) {
        			outs.classes_1.push(class)
        		}
        	}
        )
        v.classes_2.forEach( 
        	function(class) {
        		if (outs.classes_2.indexOf(class)==-1) {
        			outs.classes_2.push(class)
        		}
        	}
        )
        if (v.year == 0) {						//	year:0 switch
            outs.overall = v.overall;
            outs.subscore = v.subscore;
        }
    });
    return outs;
};
res = db.details.mapReduce(mapDetails, reduceFunction, {out: {reduce: 'joined'}})
res = db.gpas.mapReduce(mapGpas, reduceFunction, {out: {reduce: 'joined'}})





//	ADD 1 FOR EACH
//	http://www.javacodegeeks.com/2012/06/mapreduce-with-mongodb.html
var map = function() {
	var category;
	if ( this.pages >= 250 )
		category = 'Big Books';
	else
		category = "Small Books";
	emit(category, {name: this.name});
};
//	Here, the collection produced by the Map function will have a collection of following members.
	{"Big Books",[{name: "Understanding XML"}, {name : "Understanding Web Services"}]);
	{"Small Books",[{name: "Understanding JAVA"}, {name : "Understanding JSON"},{name: "Understanding Axis2"}]);
//
var reduce = function(key, values) {
	var sum = 0;
	values.forEach(function(doc) {
		sum += 1;
	});
	return {books: sum};
};mapRed
//
> var count  = db.books.mapReduce(map, reduce, {out: "book_results"});
> db[count.result].find()
//
{ "_id" : "Big Books", "value" : { "books" : 2 } }
{ "_id" : "Small Books", "value" : { "books" : 3 } 




//	http://stuporglue.org/mongodb-map-reduce-tutorial-with-complete-code/
//	Set up our documents
$users = Array(
    Array('_id' => 1, 'server' => Array('A','B','C','D')),
    Array('_id' => 2, 'server' => Array('C','D','E','F')),
    Array('_id' => 3, 'server' => Array('E','F','G','H')),
    Array('_id' => 4, 'server' => Array('I','J','K','L')),
    Array('_id' => 5, 'server' => Array('A','B','C','D','E','Q','R','S','T','U')),
//
var map = function(){
    var serverToKeep = [];
    this.server.forEach(
		function(v) {
			if(serverToCheck.indexOf(v) != -1) {
				serverToKeep.push(v);
			}
		}
	);
    // we set the emit key to 1, because we don't care which user is using it, we just need a
    //  list of the server IDs. this way all the server IDs will end up in one document
    emit(1,{'server':serverToKeep}); 
};
var reduce = function(k,multiple){
    var serverToKeep = [];
    for (var j in multiple) {
		one = multiple[j];
		var count = one.server.length;
		for (var i = 0; i<count; i++) {
			if (serverToKeep.indexOf(one.server[i]) == -1) {	//	check if one.server[i] is present in serverToKeep
				serverToKeep.push(one.server[i]);
			}
		}
	}
	return {'server':serverToKeep};
};




//	REVERSI
//	http://cookbook.mongodb.org/patterns/pivot/
//
db.actors.insert( { actor: "Richard Gere", movies: ['Pretty Woman', 'Runaway Bride', 'Chicago'] });
db.actors.insert( { actor: "Julia Roberts", movies: ['Pretty Woman', 'Runaway Bride', 'Erin Brockovich'] });
//
map = function() {
	for (var i in this.movies) {
		key = { movie: this.movies[i] };
		value = { actors: [ this.actor ] };
		emit(key, value);
	}
};
reduce = function(key, values) {
	actor_list = { actors: [] };
	for(var i in values) {
		actor_list.actors = values[i].actors.concat(actor_list.actors);
	}
	return actor_list;
}
//
{ "_id" : { "movie" : "Chicago" }, "value" : { "actors" : [ "Richard Gere" ] } }
{ "_id" : { "movie" : "Erin Brockovich" }, "value" : { "actors" : [ "Julia Roberts" ] } }
{ "_id" : { "movie" : "Pretty Woman" }, "value" : { "actors" : [ "Richard Gere", "Julia Roberts" ] } }
{ "_id" : { "movie" : "Runaway Bride" }, "value" : { "actors" : [ "Richard Gere", "Julia Roberts" ] } }




//	UNIQUE ITEMS
//	http://cookbook.mongodb.org/patterns/unique_items_map_reduce/
//	1. pass
map = function() {
	day = Date.UTC(this.date.getFullYear(), this.date.getMonth(), this.date.getDate());
	emit({day: day, user_id: this.user_id}, {count: 1});
}
reduce = function(key, values) {
	var count = 0;
	values.forEach(
		function(v) {
			count += v['count'];
		}
	);
	return {count: count};
}
//	2. pass
map = function() {
  emit(this['_id']['day'], {count: 1});
}




//	CONDITIONAL AGGREGATION
//	http://tebros.com/2011/07/using-mongodb-mapreduce-to-join-2-collections/
//
us_econ_map = function() {
	//	The data set contains grant amounts going back to 1946.  I
	//	am only interested in 2009 grants.
	if (this.FY2009 !== undefined && this.FY2009 !== null) {				// map only if....
		emit( 
			this.country_name, 
			{
				dollars: this.FY2009,
				life_expectancy: 0
    		}
    	);
	}
}
r = function(key, values) {
    var result = {
    	dollars: 0, 
    	life_expectancy: 0
    };
    values.forEach(function(value) {
        // Sum up all the money from all the 2009 grants for this country (key)
        result.dollars += (value.dollars !== null) ? value.dollars : 0;
        // Only set life expectancy once
        if (result.life_expectancy === 0 && value.life_expectancy !== null ) {
            result.life_expectancy = value.life_expectancy;
        }
    });
    return result;
}




//	LOOP THROUGH INNER ARRAY
//	http://www.mongovue.com/2010/11/03/yet-another-mongodb-map-reduce-tutorial/#comment-117
//
function MapCode() {
	emit(
		this.CountryID,
		{ "data":
			[
				{	"city": this.City,
					"lat":  this.Latitude,
					"lon":  this.Longitude	}
			]
		}
	);
}
function ReduceCode(key, values) {
	var reduced = {"data":[]};
	for (var i in values) {						//	for(var i in values) statt forEach / (i=0;i<lnegth;i++) loop
		var inter = values[i];
		for (var j in inter.data) {				//	loop through value array within valueS array
			reduced.data.push(inter.data[j]);
		}
	}
	return reduced;
}




//	INSERTING key + MASSAGING THE RESULT OBJECT
//	http://docs.mongodb.org/manual/tutorial/perform-incremental-map-reduce/
//
db.sessions.save( { userid: "a", ts: ISODate('2011-11-03 14:17:00'), length: 95 } );
db.sessions.save( { userid: "b", ts: ISODate('2011-11-03 14:23:00'), length: 110 } );
db.sessions.save( { userid: "c", ts: ISODate('2011-11-03 15:02:00'), length: 120 } );
db.sessions.save( { userid: "d", ts: ISODate('2011-11-03 16:45:00'), length: 45 } );
//	next day
db.sessions.save( { userid: "a", ts: ISODate('2011-11-04 11:05:00'), length: 105 } );
db.sessions.save( { userid: "b", ts: ISODate('2011-11-04 13:14:00'), length: 120 } );
db.sessions.save( { userid: "c", ts: ISODate('2011-11-04 17:00:00'), length: 130 } );
db.sessions.save( { userid: "d", ts: ISODate('2011-11-04 15:37:00'), length: 65 } );
//
var mapFunction = function() {
	var key = this.userid;
	var value = {
		userid: this.userid,
		total: this.length,
		count: 1,
		avg_time: 0
	};
	emit( key, value );
};
var reduceFunction = function(key, values) {
	var reducedObject = {						//	reduced_object wird vorbereitet
		userid: key,							//	interessant: der 'key' wird hier in ein feld eingesetzt
		total: 0,
		count:0,
		avg_time:0
	};
	values.forEach(	function(value) {			//	forEach statt (i=0;i<length;i++) loop
			reducedObject.total += value.total;	//	nun wird auf reduced_object
			reducedObject.count += value.count;	//	ein wenig rumgerödelt
		}
	);
	return reducedObject;						//	und fertig ist die laube
};




//	GETTING RID OF THAT !!*#?/\!!..cking >>VALUE<< FIELD
	Looka here:
		function clean(collection) { 
		  collection.find().forEach( function(result) {
		  var value = result.value;
		  delete value._id;     
		  collection.update({_id: result._id}, value);     
		  collection.update({_id: result.id}, {$unset: {value: 1}} ) } )};
		http://stackoverflow.com/questions/7257989/in-mongodb-mapreduce-how-can-i-flatten-the-values-object
	Maybe:
		insert that at the beginning of "aggregateFacts.js", cleaning the "tempFacts" collection
		and then do the same to the aggregated fact (in the finalize section?) before adding it to the "facts" collection 
		
db.tempFacts.find().forEach( function(result) {
    var value = result.value;
    delete value._id;
    db.tempFacts.update({_id: result._id}, value);
    db.tempFacts.update({_id: result.id}, {$unset: {value: 1}} )
} );
		
function clean(collection) { 
      collection.find().forEach( function(result) {
      var value = result.value;
      delete value._id;     
      collection.update({_id: result._id}, value);     
      collection.update({_id: result.id}, {$unset: {value: 1}} ) } )};