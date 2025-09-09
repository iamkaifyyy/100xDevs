const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get("/asd", function(req, res){
    res.send("this is asd route");
})


app.listen(3000);




r0
 