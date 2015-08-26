## Technical Overview

In a nutshell:

* Tor metrics data get's prepared and imported into a [MongoDB](http://www.mongodb.org/) database.
* Aggregation and indexing transforms the imported data into a big fact table (a "[cube](http://en.wikipedia.org/wiki/OLAP_cube)" in OLAP parlance) suitable to drive the visualization.
* Visualization Framework is [D3.js](http://d3js.org/), additionally [Crossfilter](http://square.github.io/crossfilter/), maybe also [dc.js](http://nickqizhu.github.io/dc.js/).
* Client side application framework used will probably be [React.js](http://facebook.github.io/react/), or [Angular.js](http://angularjs.org/) later.
* Targeted web browsers are Chrome and Firefox. Others might work as well.
Most of the visualization facets get rendered seperatly, on seperate planes (technically DIVs).
The application prepares the joins and the eyes carry them out.


### <span id="databse">Database</span>
Since the data schema is quite flat and in a certain flux a NoSQL database seems appropriate.
[**MongoDB**](http://www.mongodb.org/) was [chosen](http://kkovacs.eu/cassandra-vs-mongodb-vs-couchdb-vs-redis "Cassandra vs MongoDB vs CouchDB vs Redis vs Riak vs HBase vs Couchbase vs Neo4j vs Hypertable vs ElasticSearch vs Accumulo vs VoltDB vs Scalaris comparison") because of it's JavaScript support which promises nice integration with client side logic. MongoDB also satisfies an important requirement by the Tor project: it's available as a stable Debian package, although slightly dated ([MongoDB 2.0.6](https://packages.debian.org/search?keywords=mongodb&searchon=names&suite=stable&section=all)), and as a rather recent version in Wheezy backports ([MongoDB 2.4.8](https://packages.debian.org/search?keywords=mongodb&searchon=names&section=all&suite=wheezy-backports)). In retrospect it should be said that no other database suitable to our requirements was available as a package in the stable Debian distribution. We were lucky.

A super-quick introduction into MongoDB-specific terminology: a **collection** is the MongoDB equivalent to a "table" in an RDBMS and likewise a **document** is the equivalent to a "table row" in an RDBMS.

MongoDB also fits our purpose well because its performance doesn't suffer from sparsely populated collections.
As a document store it supports nested collections which comes in handy when the data sets retrieved from the network are not as uniform and regular as an RDBMS likes them to be.
As MongoDB is a schemaless database we do not have to worry about future structural changes.
When e.g. more performance data becomes available we can seamlessly add it without having to touch any of the existing documents.

Together with these benefits come some constraints that need to be taken into account when designiing the facts collection:

- no joins
 (but we can work around that by visually layering querie results on top of each other)
- only 64 indices per collection (equals table in SQL-speak)
 (slightly easing this problem: composite indices)
- only one field in an index can be an array
 (no workaround: we have to avoid arrays if they aren't really necessary)

Since the complexity of the underlying data is rather limited MongoDBs query capabilities, although less expressive than SQL, should be sufficient.
With a visualization tool the most interesting joins are anyway those that are carried out in the eyes of the user.

The ability to store JavaScript-code in the MongoDB might help in the development of an analyzer toolkit.
Support for geo-data could be beneficial either (no other NoSQL database has that so easily available AFAIK).


### <span id="webapp">Web application framework</span>

[React.js](http://facebook.github.io/react/)is promising candidate because of it's declarative style and it's attractive approach to routing and view updates. Ressources:

- [React Getting Started](http://facebook.github.io/react/docs/getting-started.html)
- the accompanying routing architecture [Flux](http://facebook.github.io/react/blog/2014/05/06/flux.html)
- [D3 and React - the future of charting components?](http://10consulting.com/2014/02/19/d3-plus-reactjs-for-charting/)
- From the D3 creator himself: [bar + sum: d3.js, react.js, & Flux](http://bl.ocks.org/milroc/d22bbf92231876505e5d)
- Scalable Data Visualization - [React.js Conference 2015 talk and demo] (https://github.com/znation/scalable-data-visualization)

But there is a problem: both React.js and D3.js want to control the DOM. 
It is possible to tell React to stay away from the D3 part of the DOM but the question is what benefits React can then provide to us.
- [Ways of Integrating React.js and D3](http://ahmadchatha.com/writings/article1.html)


[Angular.js](http://angularjs.org/) is runner up. It integrates nicely [with](http://briantford.com/blog/angular-d3.html "Using the D3.js Visualization Library with AngularJS") D3.js. and [with](http://square.github.com/cube/) MongoDB (also [here](http://square.github.com/cubism/)).
 A prototype with Angular, D3 and MongoDB is documented [here](http://adilmoujahid.com/posts/2015/01/interactive-data-visualization-d3-dc-python-mongodb/). THere's also a new book [Data Visualization with D3 and AngularJS](http://shop.oreilly.com/product/9781784398484.do).
But AngularJS currently undergoes a major rework. Version 2 is expected for the end of 2015 and will (try to) incorporate the good (declarative) parts of React.js. 

[Backbone] is a rather pedestrian solution but will be tedious as soon as the interface get's more elaborated.

[Ember] is used in the company of D3's developer Mike Bostock. Ember is rather opinionated and bloated. OTOH in our case framework size is negligable compared to data size. The strength of Ember is that it can provide results quickly. It is also used in related Tor project: [Globe](https://globe.torproject.org/).

Status: undecided. Advantage for Angular.

>TODO
>we'll know more after the first prototype.

### <span id="vis">Visualization framework</span>
[D3.js](http://d3js.org/) is a [leading](http://www.netmagazine.com/features/top-20-data-visualisation-tools "The top 20 data visualisation tools") data visualization framework for the web.
It keeps a strong link between the data and it's visual representation, expresses it in a nice declarative and CSS-like style, provides an impressive set of features and renders to SVG.



