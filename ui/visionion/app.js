var express = require('express');
// var d3 = require("d3");
// var db = require("mongodb");
var db = require("mongoose");

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

app.listen(7777);