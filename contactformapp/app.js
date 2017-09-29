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

app.post('/send',(req,res)=>{
    const output = `
    <p>You have a new contact request</p>
    <h3><Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Company: ${req.body.company}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
   </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        // host: 'smtp.ethereal.email',
        // port: 587,
        // secure: false, // true for 465, false for other ports
        service : 'gmail',
        auth: {
            user: 'vollage123@gmail.com', // generated ethereal user
            pass: 'kuchbara'  // generated ethereal password
        },
        tls : {
            rejectUnauthorized :false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Vollage" <vollage123@gmail.com>', // sender address
        to: 'ahsan.kai@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

        res.render('contact',{msg:'Email has been send'});
    });
})

app.listen(3000,()=>{
    console.log('server started!!');
})