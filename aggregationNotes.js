
**probleme**


* wenn verschiedene collections mit unterschiedlichen feldern in eine ziel_collection aggregiert werden sollen, müssen entweder alle map-funktionen alle felder mit jeweils sinnvollen angaben enthalten (also 0 oder null o.ä. wenn die ausgangs-collection die felder nicht enthält), oder die reduce funktion muss den fall, dass ein feld in der map nicht auftaucht, sinnvoll abfangen (also 1* fragen, ob die map das feld übergibt und 2* wenn ja, dann es überehmen oder 3* wenn nein dann es anlegen (mit leerem inhalt, oder 0, oder null - je nachdem)



/* http://docs.mongodb.org/manual/tutorial/map-reduce-examples/ */
// define a map function
var myMap = function() {
	emit (	
		this.date,								// this always refers to the instance document 
												// the map function is currently processing
		{	
			guards: this.guards,				// gibt ein document zurück: "{guards: int}"
			some: this.else,
			and: 1
		}
	);
};

// oder auch emit als teil einer schleife
var myMap2 = function() {
	for (var idx = 0; idx < this.items.length; idx++) {
    	var key = this.items[idx].sku;
		var value = {
			count: 1,
	 		qty: this.items[idx].qty
	 	};
		emit (key, value);
	}
};



the type of the return object must be identical to the type of the value emitted by the map function to ensure that the following operations is true:
http://docs.mongodb.org/manual/reference/method/db.collection.mapReduce/#requirements-for-the-reduce-function

// define a corresponding reduce function
var myReduce = function ( key, valuesArray ) {	// key ist das erste element aus emit
												// valuesArray ein array der zweiten elemente über alle keys
  var sum = 0;
  values.forEach(function(guard) {
    sum += guards.count;						// guards.count gibt es garnicht, nur so als beispiel
  });
  return {guards: sum};
};


var myResult = db.importCollection.mapReduce ( 
	myMap, 
	myReduce, 
	{out: "facts"} 
);


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
		merge : collectionName ,			// 'reduce' statt 'merge' könnte zur folge haben, dass alte und   
											// neue werte aufaddiert weredn, statt dass die alten durch  
											// die neuen ersetzt werden
		nonAtomic : true					// prevents locking of the db during post-processing
}


wo immer die import daten einen array enthalten, muss ich diesen in der mapFunction durchlaufen, um emit mit den passenden key:values zu befüllen (http://docs.mongodb.org/manual/reference/method/db.collection.mapReduce/#calculate-order-and-total-quantity-with-average-quantity-per-item)

mit finalize kann man schön durchschnitte u.ä. errechnen
http://docs.mongodb.org/manual/reference/method/db.collection.mapReduce/#calculate-order-and-total-quantity-with-average-quantity-per-item

Subsequent Incremental Map-Reduce
http://docs.mongodb.org/manual/tutorial/perform-incremental-map-reduce/

*/



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
// end sample data setup

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
reduce = function(k, values) {
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

reduce = function(k, values) {
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
