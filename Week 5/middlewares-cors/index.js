// middlewares

const express = require("express");

const app = express();

let requestCount = 0;

function requestIncreaser() {
    requestCount = requestCount + 1;
    console.log("total no of requests = " + requestCount);
}

app.get("/sum", function(req, res){

    requestIncreaser();
    // console.log("total no of requests = " + requestCount)

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    });
});


app.get("/multiply", function(req, res){

    requestIncreaser();f

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    });
});

app.listen(3000); 