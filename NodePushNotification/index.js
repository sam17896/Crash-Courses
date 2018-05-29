const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname,"client")));
app.use(bodyParser.json());

const publicVapidKey = "BA7zvMDGtWKu7SEOvqPvtyvej_a52TXMlQgoUcbfkmyR3o7oMEL3YPYlurknYAIWPA-3aj_zvUPIcdcSWOAxisk";
const privateVapidKey = "kHlWyrePYg860DCPpMehADHYdF7_2W-sfPMpAljQmvY";


webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);


// Subscribe Route
app.post('/subcribe', (req, res)=>{
    const subscription = req.body;
    res.status(201).json({});

    const payload = JSON.stringify({title:"Push Test"});


    webpush.sendNotification(subscription,payload).catch(err=>console.errpr(err));
});


const port = 5000;


app.listen(port , () => console.log("Server started at port",port));