var express = require('express'),
		d3 = require("d3"),
		db = require("mongodb");

var app = express();

app.configure(function(){
	app.set('view engine', 'jade');
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
	res.render(
		"index.jade",
		{layout:false}
	);
});

app.listen(8080);