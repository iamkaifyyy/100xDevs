// this is for creating http server 

const express = require("express");

const app = express();

app.get("/sum", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer: a + b 
    })
});


app.listen(3000);