const express = require('express');
const expressGraphQL = require('express-graphql');
const schema =require('./schema.js')

var app = express();

app.use('/graphql',expressGraphQL({
    schema:schema,
    graphiql:true
}));

app.listen(4000, ()=>{
    console.log("Server Running on port 4000");
});