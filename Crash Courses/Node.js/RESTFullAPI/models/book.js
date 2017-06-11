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
