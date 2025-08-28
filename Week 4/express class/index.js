// creating an http server 
//express
// node default library => no

const express = require("express");

const app = express();



app.get("/", function(req, res){
     res.send("hi there")
})


app.listen(3000);


// created a http server 