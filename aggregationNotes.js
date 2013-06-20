/*
import collection index 
	nach zeit
	
mapreduce tage+stunden-weise anstossen
		zum einen ist das resourcenschonender
		zum anderen können dann updates leichter eingearbeitet werden
	query
		zeitabfrage
		tag und stunde,
		wenn keine stunde verfügbar (clients collection), dann nur tag
		
out : { 
		merge : collectionName ,			//	in this case 'merge' instead of 'reduce'
											//	because erduce would add new values to existing documents  
											//	whereas merge replaces already existing documents with the same _id
		nonAtomic : true					//	prevents locking of the db during post-processing
		query : span(date)					//	aggregates only documents of a given time, 
											//	since a given time or for a given timespan
}


wo immer die import daten einen array enthalten, muss ich diesen in der mapFunction durchlaufen, um emit mit den passenden key:values zu befüllen (http://docs.mongodb.org/manual/reference/method/db.collection.mapReduce/#calculate-order-and-total-quantity-with-average-quantity-per-item)

mit finalize kann man schön durchschnitte u.ä. errechnen
http://docs.mongodb.org/manual/reference/method/db.collection.mapReduce/#calculate-order-and-total-quantity-with-average-quantity-per-item

Subsequent Incremental Map-Reduce
http://docs.mongodb.org/manual/tutorial/perform-incremental-map-reduce/

*/

**probleme**

* wenn verschiedene collections mit unterschiedlichen feldern in eine ziel_collection aggregiert werden sollen, müssen entweder alle map-funktionen alle felder mit jeweils sinnvollen angaben enthalten (also 0 oder null o.ä. wenn die ausgangs-collection die felder nicht enthält), oder die reduce funktion muss den fall, dass ein feld in der map nicht auftaucht, sinnvoll abfangen (also 1* fragen, ob die map das feld übergibt und 2* wenn ja, dann es überehmen oder 3* wenn nein dann es anlegen (mit leerem inhalt, oder 0, oder null - je nachdem)



// http://docs.mongodb.org/manual/tutorial/map-reduce-examples
// define a map function
var myMap = function() {
	emit (	
		this.date,								//	key
												// 	'this' always refers to the instance document 
												// 	the map function is currently processing
		{	
			guards: this.guards_count,			// 	value
			some: this.name,					//	gibt ein array von documenten zurück: 
			and: 1								//	[ {"guards": "anInt", "some": "aString", "and": 1} ]
		}
	);
};
// oder auch emit als teil einer schleife
// über einen array
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
		 reducedVal = { count: 0, qty: 0 };
		 for (var i = 0; i < countObjVals.length; i++) {
			 reducedVal.count += countObjVals[i].count;
			 reducedVal.qty += countObjVals[i].qty;
		 }
		 return reducedVal;
};	
//	let it run
var myResult = db.importCollection.mapReduce ( 
	myMap, 
	myReduce, 
	{out: "facts"} 
);





// http://stackoverflow.com/questions/5681851/mongodb-combine-data-from-multiple-collections-in-to-one-how/8746805#8746805
// merging 2 collections
// intercepting non-existant fields in reduce step 
var mapUsers, mapComments, reduce;
db.users_comments.remove();

// setup sample data - wouldn't actually use this in production
db.users.remove();
db.comments.remove();
db.users.save({firstName:"Rich",lastName:"S",gender:"M",country:"CA",age:"18"});
db.users.save({firstName:"Rob",lastName:"M",gender:"M",country:"US",age:"25"});
db.users.save({firstName:"Sarah",lastName:"T",gender:"F",country:"US",age:"13"});
var users = db.users.find();
db.comments.save({userId: users[0]._id, "comment": "Hey, what's up?", created: new ISODate()});
db.comments.save({userId: users[1]._id, "comment": "Not much", created: new ISODate()});
db.comments.save({userId: users[0]._id, "comment": "Cool", created: new ISODate()});

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
        if ("comment" in value) {
            if (!("comments" in result)) {
                result.comments = [];
            }
            result.comments.push(value);
        } else if ("comments" in value) {
            if (!("comments" in result)) {
                result.comments = [];
            }
            result.comments.push.apply(result.comments, value.comments);
        }
        for (field in value) {
            if (value.hasOwnProperty(field) && !(field in commentFields)) {
                result[field] = value[field];
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
not sure though if and how the reduce function could be simplyfied any further
*/

db.users.mapReduce(mapUsers, reduce, {"out": {"reduce": "users_comments"}});
db.comments.mapReduce(mapComments, reduce, {"out": {"reduce": "users_comments"}});
db.users_comments.find().pretty(); // see the resulting collection





// http://stackoverflow.com/questions/9696940/merging-two-collections-in-mongodb/9723549#9723549
// merging 2 collections
// adding empty fields in map step
var mapDetails = function(){
    var output = {studentid: this.studentid, classes_1: [], classes_2: [], year: this.year, overall: 0, subscore: 0}
    if (this.year == 1) {
        output.classes_1 = this.classes;
    }
    if (this.year == 2) {
        output.classes_2 = this.classes;
    }
    emit(this.studentid, output);
};

var mapGpas = function() {
    emit(this.studentid, {studentid: this.studentid, classes_1: [], classes_2: [], year: 0, overall: this.overall, subscore: this.subscore});		// interessant, dass er year hier einführt, obwohl er es nur in der anderen map benötigt und im reduce step garnicht mehr benutzt
};

var r = function(key, values) {
    var outs = { studentid: "0", classes_1: [], classes_2: [], overall: 0, subscore: 0};

    values.forEach(function(v){
        outs.studentid = v.studentid;
        v.classes_1.forEach(function(class){if(outs.classes_1.indexOf(class)==-1){outs.classes_1.push(class)}})
        v.classes_2.forEach(function(class){if(outs.classes_2.indexOf(class)==-1){outs.classes_2.push(class)}})

        if (v.year == 0) {
            outs.overall = v.overall;
            outs.subscore = v.subscore;
        }
    });
    return outs;
};

res = db.details.mapReduce(mapDetails, r, {out: {reduce: 'joined'}})
res = db.gpas.mapReduce(mapGpas, r, {out: {reduce: 'joined'}})


// http://www.javacodegeeks.com/2012/06/mapreduce-with-mongodb.html
// MapReduce with MongoDB
var map = function() {
	var category;
	if ( this.pages >= 250 )
		category = 'Big Books';
	else
		category = "Small Books";
	emit(category, {name: this.name});
};
// Here, the collection produced by the Map function will have a collection of following members.
	{"Big Books",[{name: "Understanding XML"}, {name : "Understanding Web Services"}]);
	{"Small Books",[{name: "Understanding JAVA"}, {name : "Understanding JSON"},{name: "Understanding Axis2"}]);
//
var reduce = function(key, values) {
	var sum = 0;
	values.forEach(function(doc) {
		sum += 1;
	});
	return {books: sum};
};


// http://stuporglue.org/mongodb-map-reduce-tutorial-with-complete-code/
//
// Set up our documents
$users = Array(
    Array('_id' => 1, 'server' => Array('A','B','C','D')),
    Array('_id' => 2, 'server' => Array('C','D','E','F')),
    Array('_id' => 3, 'server' => Array('E','F','G','H')),
    Array('_id' => 4, 'server' => Array('I','J','K','L')),
    Array('_id' => 5, 'server' => Array('A','B','C','D','E','Q','R','S','T','U')),
//
var map = function(){
    var serverToKeep = [];
    this.server.forEach(function(v){
        if(serverToCheck.indexOf(v) != -1){
        serverToKeep.push(v);
        }
    });
    // we set the emit key to 1, because we don't care which user is using it, we just need a
    //  list of the server IDs. this way all the server IDs will end up in one document
    emit(1,{'server':serverToKeep}); 
};
var reduce = function(k,multiple){
    var serverToKeep = [];
    for(var j in multiple){
        one = multiple[j];
        var count = one.server.length;
        for(var i = 0;i<count;i++){
        	if(serverToKeep.indexOf(one.server[i]) == -1){
            	serverToKeep.push(one.server[i]);
        	}
        }
    }
    return {'server':serverToKeep};
};


// http://cookbook.mongodb.org/patterns/pivot/
//
db.actors.insert( { actor: "Richard Gere", movies: ['Pretty Woman', 'Runaway Bride', 'Chicago'] });
db.actors.insert( { actor: "Julia Roberts", movies: ['Pretty Woman', 'Runaway Bride', 'Erin Brockovich'] });
//
map = function() {
  for(var i in this.movies){
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


// http://cookbook.mongodb.org/patterns/unique_items_map_reduce/
//
// 1. pass
map = function() {
  day = Date.UTC(this.date.getFullYear(), this.date.getMonth(), this.date.getDate());

  emit({day: day, user_id: this.user_id}, {count: 1});
}
reduce = function(key, values) {
  var count = 0;

  values.forEach(function(v) {
    count += v['count'];
  });

  return {count: count};
}
// 2. pass
map = function() {
  emit(this['_id']['day'], {count: 1});
}


// http://tebros.com/2011/07/using-mongodb-mapreduce-to-join-2-collections/
//
us_econ_map = function() {
  // The data set contains grant amounts going back to 1946.  I
  // am only interested in 2009 grants.
  if (this.FY2009 !== undefined && this.FY2009 !== null) {
    emit(this.country_name, {
      dollars: this.FY2009,
      life_expectancy: 0
    });
  }
}
r = function(key, values) {
    var result = {dollars: 0, life_expectancy: 0};
    values.forEach(function(value) {
        // Sum up all the money from all the 2009 grants for this
        // country (key)
        result.dollars += (value.dollars !== null) ? value.dollars : 0;
        // Only set life expectancy once
        if (result.life_expectancy === 0 &&
            value.life_expectancy !== null
        ) {
            result.life_expectancy = value.life_expectancy;
        }
    });

    return result;
}


// http://www.mongovue.com/2010/11/03/yet-another-mongodb-map-reduce-tutorial/#comment-117
//
function MapCode() {
	emit(this.CountryID,
	{ "data":
		[
			{	"city": this.City,
				"lat":  this.Latitude,
				"lon":  this.Longitude	}
		]
	});
}
function ReduceCode(key, values) {
	var reduced = {"data":[]};
	for (var i in values) {
		var inter = values[i];
		for (var j in inter.data) {
			reduced.data.push(inter.data[j]);
		}
	}
	return reduced;
}


// http://docs.mongodb.org/manual/tutorial/perform-incremental-map-reduce/
//
db.sessions.save( { userid: "a", ts: ISODate('2011-11-03 14:17:00'), length: 95 } );
db.sessions.save( { userid: "b", ts: ISODate('2011-11-03 14:23:00'), length: 110 } );
db.sessions.save( { userid: "c", ts: ISODate('2011-11-03 15:02:00'), length: 120 } );
db.sessions.save( { userid: "d", ts: ISODate('2011-11-03 16:45:00'), length: 45 } );

db.sessions.save( { userid: "a", ts: ISODate('2011-11-04 11:05:00'), length: 105 } );
db.sessions.save( { userid: "b", ts: ISODate('2011-11-04 13:14:00'), length: 120 } );
db.sessions.save( { userid: "c", ts: ISODate('2011-11-04 17:00:00'), length: 130 } );
db.sessions.save( { userid: "d", ts: ISODate('2011-11-04 15:37:00'), length: 65 } );
//
var mapFunction = function() {
	var key = this.userid;
	var value = {
		userid: this.userid,
		total_time: this.length,
		count: 1,
		avg_time: 0
	};
	emit( key, value );
};
var reduceFunction = function(key, values) {
	var reducedObject = {
		userid: key,
		total_time: 0,
		count:0,
		avg_time:0
	};
	values.forEach(	function(value) {
						reducedObject.total_time += value.total_time;
						reducedObject.count += value.count;
					}
	);
	return reducedObject;
};


// http://docs.mongodb.org/manual/tutorial/map-reduce-examples/
// #return-the-total-price-per-customer
//
var mapFunction1 = function() {
	emit(this.cust_id, this.price);
};
var reduceFunction1 = function(keyCustId, valuesPrices) {
	return Array.sum(valuesPrices);
};


// http://docs.mongodb.org/manual/tutorial/map-reduce-examples/
// #calculate-order-and-total-quantity-with-average-quantity-per-item
//
var mapFunction2 = function() {
	for (var i = 0; i < this.items.length; i++) {
		var key = this.items[i].sku;
		var value = {
			count: 1,
			qty: this.items[i].qty
		};
		emit(key, value);
	}
};
