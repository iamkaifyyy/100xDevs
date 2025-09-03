const express = require('express');

const app = express();

function ticketChecker(req, res, next){
    const ticket = req.query.ticket;
    if(ticket == 'free'){
        next();
    } else {
        res.status(403).send('Access Denied');
    }
}

app.use(ticketChecker);

app.get("/", function(){
    res.send("you ride the first ride"
    )
});

app.get("/", function(){
    res.send("you ride the first ride"
    )
});

app.get("/", function(){
    res.send("you ride the first ride"
    )
});


app.listen(3000);

let nu