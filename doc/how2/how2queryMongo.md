
## find stuff in mongo

	db.collectionName.find( {_id : "2013-04-03 22", bre : true } ).count()
	db.collectionName.find( {"fieldName.subFieldName": "value"} )
	db.collectionName.find( {fieldName: {"$gt": 20, "$lt": 25 } } )


	$in, $all, $nin                                 // set operators
	$nin                                            // doesn't use indices
	db.x.find('y.z': { $nin: ["black", "blue"] }    // neither
	db.x.find('y.z': { $in: ["black", "blue"] }     // or (inclusive)
	db.x.find('y.z': { $all: ["black", "blue"] }    // all of them
	db.categories.find({_id: {$in: product['category_ids']}})


	db.food.find({"fruit" : ["apple", "peach"]})    // returns only exact match
	db.numbers.find({n: {$type: 18}});              // type 18 for 64-bit int
	                                                // see bsonspec.org

	db.users.find({age: {$gte: 0, $lte: 30})        // $lt $lte $gt $gte
	$ne, $not, $or, $and, $exists                   // boolean operators
	db.users.find(last_name: {$not: /^B/} }         // last name doesn't start with 'B'
	db.products.find('details.manufacturer': 'ACME', tags: {$ne: "gardening"} }
	            // find all products manufactured by ACME
	            // that aren’t tagged with gardening:
	{ _id: 1, tags: ["tools", "equipment", "soil"] }// e.g.
	db.products.find({tags: "soil"})                // searching an array
	                                                // needs no special syntax
	db.products.find({'tags.0': "soil"})            // 'soil' first tag in tags-array
	db.users.find({addresses: {$elemMatch: {name: 'home', state: 'NY'}}})
	            // $elemMatch
	            // to restrict multiple conditions to the same sub-document
	            // wichtig, falls ein user mehrere adressen haben kann
	            // aber die beiden kriterien von derselben adresse
	            // erfüllt werden sollen
	db.users.find({addresses: {$size: 3}})          // user mit genau 3 adressen
	db.reviews.find({$where: "function() { return this.helpful_votes > 3; }"}})
	            // js queries with $where
	db.reviews.find({$where: "this.helpful_votes > 3"}})
	            // the same, in abbreviated form
	db.reviews.find( { user_id: ObjectId("4c4b1476238d3b4dd5000001"),
	           $where: "(this.rating * .92) > 3" } )
	            // uses a standard query on a presumably- indexed user_id field,
	            // and employs a JavaScript expression for a special usecase
	db.users.find(last_name: {$not: /^B/} }         // regEx, indexed
	            // regular expression other than this prefix style expression
	            // aren't indexed
	db.orders.find({subtotal: {$mod: [3, 0]}})      // modulo operator
	db.users.find({_id: {$type: 2}})                // find by BSON type

	db.users.find({}, {username: 1})
	            // projection: find all, but only return username
	            // returns _id too, if you don't explicitely 0 that
	db.users.find({}, {addresses: 0})            // return everything but adresses
	db.prod.find({}, {rev: {$slice: 12}} )          // pagination, the first 12
	db.prod.find({}, {rev: {$slice: -12}} )         // pagination, the last 12
	db.prod.find({}, {rev: {$slice: [24, 12] }} )   // skip 24, return #25 to #36
	db.prod.find({"desc":"mp3").limit(12).skip(24)  // skip 24, return #25 to #36
	db.reviews.find({}).sort({helpful_votes:-1, rating: -1})
	            // sort by helpfullness, then by rating, descending
	db.docs.find({}).skip(500000).limit(10).sort({date: 1}) // inefficient !!!

	db.relay.find({date: "2013-04-27 07"},{pex:1,type: 1, nick:1}).sort({pex:-1})

	db.products.distinct("tags")
	db.products.distinct("tags", {category_id: ObjectId("6a5b1476238d3b4dd5000048")})
	            // distinct tags von objekten aus einer bestimmten kategorie
	db.map.find({"gps" : {"$near" : [40, -73]}})
	            // finds all documents in map in order by distance from (40, -73)
	db.runCommand({"group" : { ... } )
	            // aggregation - group by key, def guide s82
	db.runCommand({"group" : {
	  "ns" : "stocks",                              // collection
	  "key" : "day",                                // group by
	  "initial" : {"time" : 0},                     // start with
	  "$reduce" : function(doc, prev) {             // keep only the highest
	    if (doc.time > prev.time) {
	      prev.price = doc.price;
	      prev.time = doc.time; }},
	  "condition": {"day" : {"$gt" : "2010/09/30"}} // after a certain date
	}})                                             // returns an array of docs
	                                                // plus some meta data

