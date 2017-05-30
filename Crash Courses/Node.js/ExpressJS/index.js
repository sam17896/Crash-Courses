var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');


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





//JSON PARSING
var people = [
	{
		id: 1,
		firt_name: 'Jeff',
		last_name : "Doe",
		email: 'Jeffdoe@gmail.com'
	},
	{
		id: 2,
		firt_name: 'Sara',
		last_name : "Doe",
		email: 'Saradoe@gmail.com'
	},
	{
		id: 3,
		firt_name: 'Bob',
		last_name : "Doe",
		email: 'Bobdoe@gmail.com'
	} 
]

app.get('/', function(req,res) {
	var title = 'Customers';
	res.render('indes',{
		title : title,
		users : people
	});// body...
});


app.post('/user/add' , function(req,res){

	req.checkBody('firt_name', 'First Name is Required').notEmpty();
	req.checkBody('last_name', 'Last Name is Required').notEmpty();
	req.checkBody('email', 'Email is Required').notEmpty();


	var errors  = req.validationErrors();

	if(errors){
		var title = 'Customers';
		res.render('indes',{
			title : title,
			users : people,
			errors : errors
		});
	}else{

		var newUser = {
			firt_name : req.body.firt_name,
			last_name : req.body.last_name,
			email : req.body.email
	}

		console.log("Success");
	}
});


app.listen(3000,function 
	(argument) {
	console.log('server started on port 3000...');
	// body...
});