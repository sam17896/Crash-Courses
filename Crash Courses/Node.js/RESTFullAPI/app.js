var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Genre = require('./models/generes.js');
Books = require('./models/book.js');

mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function (req, res) {
	// body...
	res.send('Please use /api/books or /api/generes!');
});

app.get('/api/generes', function(req, res){

	Genre.getGenres(function(err, generes){
		if(err){
			throw err;
		} else {
			res.json(generes)
		}
	});

});


app.post('/api/generes', function(req, res){
	var generes = req.body;
	Genre.addGenre(generes, function(err, generes){
		if(err){
			throw err;
		} else {
			res.json(generes)
		}
	});

});


app.get('/api/books', function(req, res){

	Books.getBooks(function(err, books){
		if(err){
			throw err;
		} else {
			res.json(books)
		}
	});

});

app.get('/api/books/:_id', function(req, res){

	Books.getBooksById(req.params._id,function(err, book){
		if(err){
			throw err;
		} else {
			res.json(book)
		}
	});

});


app.post('/api/books', function(req, res){
	var book = req.body;
	Books.addBook(book, function(err, book){
		if(err){
			throw err;
		} else {
			res.json(book)
		}
	});

});


app.listen(3000);
console.log('Running on port 3000....')