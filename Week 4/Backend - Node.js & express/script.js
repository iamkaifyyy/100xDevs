const express = require('express')
const app = express();

app.get("/", function(req, res){
    res.send('hello world');
})


app.get("/home", function(req, res){
    res.send('Home Page is this');
})



app.listen(3000);
