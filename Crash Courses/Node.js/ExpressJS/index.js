var express = require('express');
var bodyParser = require('body-parser');

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



//JSON PARSING
var people = [
	{
		name: 'Jeff',
		age : 30
	},
	{
		name: 'sara',
		age: 22
	}
]

app.get('/', function(req,res) {
	var title = 'Customers';
	res.render('indes',{
		title : title
	});// body...
});

app.listen(3000,function 
	(argument) {
	console.log('server started on port 3000...');
	// body...
});