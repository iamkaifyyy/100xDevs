const express = require('express');
const app = express();

app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("index");
});

app.get("/profile", function (req, res){
    res.send("hello from profile");
});

app.get("/profile/bond", function(req, res){
    res.send("hello from profile");
});

app.listen(3000);

