var mongoose = require('mongoose');


// Books Schema 
var bookSchema = mongoose.Schema({
	titile: {
		type: String,
		required : true
	},
	genere: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	publisher: {
		type: String
	},
	pages: {
		type: String
	},
	image_url: {
		type: String
	},
	but_url:{
		type:String
	},
	create_date : {
		type: Date,
		default : Date.now
	}
});


var Books = module.exports = mongoose.model('books', bookSchema);


//Get Books

module.exports.getBooks = function (callback, limit){
	Books.find(callback).limit(limit);	
}

module.exports.getBooksById = function(id, callback){
	Books.findById(id,callback);
}

module.exports.addBook = function (book, callback){
	Books.create(book, callback);	
}


module.exports.updateBook = function(id, book, options, callback) {
	var query = {_id: id};
	var update = {
		title: book.title,
		genre: book.genre,
		description: book.description,
		author: book.author,
		publisher: book.publisher,
		pages: book.pages,
		image_url: book.image_url,
		buy_url: book.buy_url
	}
	Book.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeBook = function(id, callback){
	var query = {_id: id};
	Book.remove(query, callback);
}