var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var mongojs = require('mongojs');
var db = mongojs('customerapp',['users']);
var ObjectId = mongojs.ObjectId;
var path = require('path');

var app = express();

//View Engine
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));



//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//path
app.use(express.static(path.join(__dirname,'public')));



//Global vars 

app.use(function(req,res,next){
	res.locals.errors = null;
	next();
});


//Express validator 
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));


app.get('/', function(req,res) {

	db.users.find(function(err,docs){
		var title = 'Customers';
		res.render('indes',{
			title : title,
			users : docs
		});// body...
	});

});


app.post('/user/add' , function(req,res){

	req.checkBody('first_name', 'First Name is Required').notEmpty();
	req.checkBody('last_name', 'Last Name is Required').notEmpty();
	req.checkBody('email', 'Email is Required').notEmpty();


	var errors  = req.validationErrors();

	if(errors){

			db.users.find(function(err,docs){
			var title = 'Customers';
			res.render('indes',{
				title : title,
				users : docs
			});// body...
		});

	}else{

		var newUser = {
			first_name : req.body.first_name,
			last_name : req.body.last_name,
			email : req.body.email
		}

		db.users.insert(newUser,function(err,result){
			if(err){
				console.log(err);
			}else
				res.redirect('/');
		});

		console.log("Success");
	}
});


app.delete('/users/delete/:id', function(req,res){
	console.log(req.params.id);
	db.users.remove({ _id: ObjectId(req.params.id)},function(err,result){
		if(err){
			console.log(err);
		}
		res.redirect('/');
	});
});

app.listen(3000,function 
	(argument) {
	console.log('server started on port 3000...');
	// body...
});