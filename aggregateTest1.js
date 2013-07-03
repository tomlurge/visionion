
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
        if ("comment" in value) {
            if (!("comments" in result)) {
                result.comments = [];
            }
            result.comments.push(value);
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


