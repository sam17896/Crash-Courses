var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


//mongoose.connect('mongodb://localhost/bookstore');
//var db = mongoose.connection;

app.get('/', function (req, res) {
	// body...
	res.send('Hello World!');
});


app.listen(3000);
