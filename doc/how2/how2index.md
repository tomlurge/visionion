#Indexing in MongoDB
##some notes

welche daten/zeitraum habe ich in import
	> db.import.distinct("date", {},{"date":1, "_id": -1})
		"2013-10-17 23"
		"2011-03-06 00"

welche indices über import
	> db.import.getIndexes()
			"_id" : 1
			"addd" : -1
			"date" : -1, "type" : 1


welche indices über fact
	> db.fact.getIndexes()	
			[ ]


#####from Oreilly.MongoDB.The.Definitive.Guide.Sep.2010

built in maximum of 64 indices per collection    
ordering by -1 (descending) may be useful to keep just the (block with the) e.g. latest entries in memory    
indexes on keys in embedded documents are identical to those on top-level keys and may be combinded in compound indices    
there is a limit of 127 to the number of characters in an index name, so complex indexes may need acustom names

	> db.foo.ensureIndex({"a" : 1, "b" : 1, "c" : 1, ..., "z" : 1}, {"name" : "alphabet"})
analyzing queries to see if an index was used as expected (page 70 ff)

	> db.foo.find().explain()
dropping a database also deletes the indices, removing all of the documents just empties the indices but leaves them intact and operational as soon as new documents get imported

#####Dot Notation
MongoDB uses the dot notation to access the elements of an array and to access the fields of a subdocument. [http://docs.mongodb.org/manual/core/indexes](http://docs.mongodb.org/manual/core/indexes)

	'<array>.<index>'
	'<subdocument>.<field>'
	see also
	http://docs.mongodb.org/manual/tutorial/query-documents/#read-operations-subdocuments
	http://docs.mongodb.org/manual/tutorial/query-documents/#read-operations-arrays

#####Compound Index

You can create indexes on a single field or on multiple fields using a compound index.   
Compound Multikey Indexes May Only Include One Array Field.   
An index “covers” a query if:

- all the fields in the query are part of that index, and
- all the fields returned in the documents that match the query are in the same index.
- When an index covers a query, the server can both match the query conditions and return the results using only the index;

In general, you should create indexes that support your primary, common, and user-facing queries. Doing so requires MongoDB to scan the fewest number of documents possible.

You can create indexes on fields in sub-documents, just as you can index top-level fields in documents. 

	{"_id": ObjectId(...)
 		"name": "John Doe",
 		"date: "12.3.1901",
 		"address": {
 	       "street": "Main"
 	       "zipcode": 53511
 	       "state": "WI"
        }
	}
	db.people.ensureIndex( { "name": 1, "date": -1, "address.zipcode": 1 } )
	
#####Multikey Indexes
if you index a field that contains an array, MongoDB indexes each value in the array separately.  
Example Given the following document:

	{ "_id" : ObjectId("..."),
	  "author" : "Steve",
	  "tags" : [ "weather", "hot", "april" ] }

Then an index on the tags field would be a multikey index and would include these separate entries:

	{ tags: "weather" }
	{ tags: "hot" }
	{ tags: "april" }

search for "weather" and "hot" will find the document two times but list it only once   

[mongo-multikeys-as-a-substitute-for-indexes/7288657#7288657](http://stackoverflow.com/questions/7288320/mongo-multikeys-as-a-substitute-for-indexes/7288657#7288657)    
[how-does-mongodb-index-arrays/4060436#4060436](http://stackoverflow.com/questions/4059126/how-does-mongodb-index-arrays/4060436#4060436)   
You can use multikey indexes to index fields within objects embedded in arrays. Use dot.notation

	{	"_id": ObjectId(...)
 		"comments": [
    		{ 	author_id: ObjectId(...)
      			date: Date(...)
      			text: "Please expand the cheddar selection." },
    		{ 	author_id: ObjectId(...)
      			date: Date(...)
     			 text: "Please expand the mustard selection." }
     	]
	}
	> db.feedback.ensureIndex({ comments.text: 1 })
	> db.feedback.find( { "comments.text": "Please expand the cheddar selection." } )
	
#####Compound Multikey Indexes May Only Include One Array Field.   
MongoDB does not index parallel arrays because they require the index to include each value in the Cartesian product of the compound keys

#####Create Compound Indexes to Support Several Different Queries

If you sometimes query on only one key and at other times query on that key combined with a second key, then creating a compound index is more efficient than creating a single-key index. MongoDB will use the compound index for both queries.   
[index.http://docs.mongodb.org/manual/tutorial/create-indexes-to-support-queries/](index.http://docs.mongodb.org/manual/tutorial/create-indexes-to-support-queries/)

#####Create Indexes that Support Covered Queries
A covered query is a query in which:   

- all the fields in the query are part of an index, and
- all the fields returned in the results are in the same

[index.http://docs.mongodb.org/manual/tutorial/create-indexes-to-support-queries/](index.http://docs.mongodb.org/manual/tutorial/create-indexes-to-support-queries/)

#####Use Indexes to Sort Query Results

#####Ensure Indexes Fit RAM

For the fastest processing, ensure that your indexes fit entirely in RAM so that the system can avoid reading the index from disk.

	> db.collection.totalIndexSize()

Indexes do not have to fit entirely into RAM in all cases. If the value of the indexed field increments with every insert, and most queries select recently added documents; then MongoDB only needs to keep the parts of the index that hold the most recent or “right-most” values in RAM.   
The above example shows an index size of almost 4.3 gigabytes. To ensure this index fits in RAM, you must not only have more than that much RAM available but also must have RAM available for the rest of the working set.   
If you run a query that requires MongoDB to scan every document in a collection, the working set will expand to include every document.

#####Return a List of All Indexes 
e.g. in 'people' collection

	db.people.getIndexes()
	
#####Create Queries that Ensure Selectivity - IMPORTANT ADVICE

Selectivity is the ability of a query to narrow results using the index. Effective indexes are more selective and allow MongoDB to use the index for a larger portion of the work associated with fulfilling the query.   
To ensure selectivity, write queries that limit the number of possible documents with the indexed field. Write queries that are appropriately selective relative to your indexed data.
[http://docs.mongodb.org/manual/tutorial/create-queries-that-ensure-selectivity/](http://docs.mongodb.org/manual/tutorial/create-queries-that-ensure-selectivity/)
	
#####Multi-key index are not covered -  DOES THIS MAKE ARRAYS A NO GO ????
there are some JIRA issues already filed. So, despite of using indexes the queries are not covered (for multi-key indexes)   
[how-to-read-multikey-index-values-in-mongodb](http://stackoverflow.com/questions/17224575/how-to-read-multikey-index-values-in-mongodb)

#####Mongo does not support "wildcard" queries, 

so if your documents were structured the first way 

		'groups' : {
   			152 : 'hi',
   			111 : 'group2'
		}

and you wanted to find a sub-document with the value "hi", but did not know that the key was 152, you would not be able to do it. With the second document structure, 

		'groups' : [
   			{ 'id' : 152, 'name' : 'hi' },
   			{ 'id' : 111, 'name' : 'group2' }
		]

you can easily query for {"groups.name":"hi"}.   
[mongo-indexing-on-object-arrays-vs-objects](http://stackoverflow.com/questions/9589856/mongo-indexing-on-object-arrays-vs-objects/9593678#9593678)
	

#####Arrays, Multikey
[how-to-query-mongodb-for-matching-documents-where-item-is-in-document-array](http://stackoverflow.com/questions/12739299)

	doc = { 'Things' : [ 'one' , 'two' , 'three' ] }

ein index über einen array wie in diesem besispiel erzeugt einen multikey index   
auf dem funktioniert dann eine abfrage wie die folgende

	db.your_collection.find({ Things: 'one' })

wenn der inhalt des arrays aber aus (komplexen) objekten besteht, macht ein multikey imdex nicht viel sinn, denn er würde das ganze objekt indexieren   
	stattdessen kann man dann indices auf einzelne felder innerhalb des objekts anlegen.  
	dies macht man einfach mit dot notation und das ganze verhält sich genauso wie wenn der array ein objekt wäre (vulgo: geschweifte statt eckige klammern)   
	
arrays vs complex object   
	but maybe the question arrays vs complex object	just boils down to how mongo allows to search for field names. because storing many similar objects in an object forces me to give each of them it's own name, like:
	
		{
			name_1: {
				"a": "valueOfA",
				"b": "valueOfB"
			} ,
			name_2: {
				"a" .... etc

since object field names can't be duplicates.   
the field name would have to be the objects name, like it's AS number oder country code. to get these objects I'd have to adress them by "name" and that means I'd have to know the name - doable with countries, but not with autonomous systems - or I'd have to be able to query for existing (field) names.

#####What are the pros and cons of using embedded documents versus arrays in mongoid?
http://stackoverflow.com/questions/12501934

embedded documents 

	- have named fields, and can embed other documents for rich data representation
	- you can reference fields directly using dotted notation
	- creating an index on an embedded document field only indexes that field
	- you can use field selection to retrieve a subset of fields.
arrays

	- you can match array values using operators such as $all, $in, $nin.
	- you can also use multikey indexes indexing each element of the array.
	- you can use the $slice operator to retrieve a subset of an array.	
and again arrays and objects of objects   
[MongoDB: Building complex data structures](http://stackoverflow.com/questions/8614856)





