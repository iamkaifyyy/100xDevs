// middlewares

const express = require("express");

const app = express();

let requestCount = 0;

app.get("/sum", function(req, res){

    requestCount = requestCount + 1;
    console.log("total no of requests = " + requestCount);

    console.log("total no of requests = " + requestCount)

    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a + b
    });
});


app.get("/multiply", function(req, res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a + b
    });
});

app.listen(3000); 