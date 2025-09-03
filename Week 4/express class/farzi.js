const express = require('express');

const app = express();

app.get("/", function(req, res){
    res.json({
        msg: "you have succesfully rdien the rius"
    })
})