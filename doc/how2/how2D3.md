rangeRoundBands
d3.scale.ordinal().rangeRoundBands([left, right], spacing, outerPadding)

keys
	data = d3.keys(data).map(function (key) {
	 return {
	 	aname: name(key),
		avlue: data[key]};
	 });
	d3.keys returns a list of keys in the data dictionary, which we then map over with an iterator function that returns a simple dictionary for every item. 

g	a group
d	the current datum
i	the current index


d3.								reference d3, so we can access it's methods
	.select("body")				css selector references the DOM
	.append("p")					appends it to the end of the selected elem (body)
	.text("a new d!");			insert text in selected elem (p)

d3
	.select("div")				select the first elem of the given type
	.selectAll("p")				select all p elements in that one body element
	.data(myDataset)				use my data referenced by var myDataset
	.enter()						noch keine p vorhanden, also enter
	.append("p")					append a p for each datum in data
	.text(function(d) { return "I want my " + d + "!";});	
								insert the current datum into the current p
	
	when chaining methods together, anytime after you call data(), you can
	create an anonymous function that accepts d as input. The magical
	data() method ensures that d is set to the corresponding value in your
	original data set, given the current element at hand. The value of 
	“the current element” changes over time as D3 loops through each 
	element.
					
var svg = d3.select("body")		create an svg element on a page
	.append("svg")
	.attr("width", 500)
	.attr("height", 50);			
	
svg								0 use variable svg
	.selectAll('rect')		    1 for all rectangles in the graph
	.data(data)					2 load the data
	.enter()						3 go through it
	.append('rect')				4 for each datum append a rect
	.attr('class', 'bar')		5 and define some attributes
	.attr('x', function (d) { return x(d.bucket); })
	.attr('width', x.rangeBand())
	.attr('y', function (d) { return y(d.N); })
	.attr('height', function (d) { return height-pad - y(d.N); });
     

nested .selectAll
	d3.selectAll('tbody tr').selectAll('td')
		 .style('color', function (d, i,j) { return i%2 ? 'green' : 'red'; })
		 .style('font-weight', function (d, i,j) { return j%2 ? 'italic' : 'bold'; })
	i selects the 'td’s
	  each 'td' has a 'parentnode' (check the console)
	j selects the ‘tr’s
	ergo the second parameter selects the outer node

.data().enter()					when there's more data to come than nodes in the document
.data()							(and nothing more) when updating existing nodes
.data().exit()					when there's less data to come than existing nodes
								You can't chain .enter() and .exit() because they are 
								just references and don't create a new selection. 
								Mind you, all three can happen at once because selection 
								elements are bound to instances of datum, not their number. 
								If you shifted an array and then pushed a new value, the 
								previous first item would go to the .exit() reference and 
								the new addition would go to the .enter() reference.

.classed("bar", true)			toggles the class, useful for controlling style
.style() 						is used to apply styling directly to an html elem (inline)
				



				
var xhr = d3.xhr('<a_url>');
   xhr.mimeType('application/json');
   xhr.header('User-Agent', 'our example');
   xhr.on('load', function (request) { ... });
   xhr.on('error', function (error) { ... });
   xhr.on('progress', function () { ... });
   xhr.send('GET');
   
TopoJSON	a more compact extension of GeoJSON, created by Mike Bostock. 

shapes
	rect							x y width height
	circle						cx cy r
	ellipse						cx cy rx ry
	line							x1 x2 y1 y2
	text							x y
	path		
styles
	fill	(the color) 				(called "fill" even inside a css-command)
	stroke
	stroke-width
	opacity
	font-family
	font-size
depth
	determined by the order of code (later is higher / in front)

