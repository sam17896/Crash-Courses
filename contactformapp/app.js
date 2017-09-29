const express =require('express');
const bodyParser = require('body-parser');
const exphbs =require('express-handlebars');
const path = require('path');
const nodemailer= require('nodemailer');


const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/public',express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.render('contact');
});

app.listen(3000,()=>{
    console.log('server started!!');
})