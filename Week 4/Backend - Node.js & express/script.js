const express = require('express')
const app = express();


// construction of middleware

app.use(function(req, res, next){
    console.log(req); 
});



app.get("/", function(req, res){
    res.send('hello world');
})


app.get("/home", function(req, res){
    res.send('Home Page is this');
})

  
app.listen(3000);
