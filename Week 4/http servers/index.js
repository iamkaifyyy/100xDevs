const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get("/asd", function(req, res){
    res.send("this is asd route");
})

app.get("/routes", function(req, res){
    res.send("kaifyyyy");
})




app.listen(3000);



