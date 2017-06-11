var mongoose = require('mongoose');


// Genre Schema 
var genreSchema = mongoose.Schema({
	name: {
		type: String,
		required : true
	},
	create_date : {
		type: Date,
		default : Date.now
	}
});


var Genre = module.exports = mongoose.model('generes', genreSchema);


//Get Genres
module.exports.getGenres = function (callback, limit){
	Genre.find(callback).limit(limit);	
}

// Add Genre
module.exports.addGenre = function (generes, callback){
	Genre.create(generes, callback);	
}


module.exports.updateGenre = function (id,generes,options, callback){
	var query = {_id: id};
	var update = {
		name : generes.name
	}	
	Genre.findOneAndUpdate(query, update, options,callback);
}


module.exports.removeGenre =  function(id, callback) {
	var query = {_id: id};
	Genre.remove(query, callback);
}