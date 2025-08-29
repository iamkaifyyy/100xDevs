// this file created for tutorial of express.js

const express = require("express");
const app = express();

console.log(app);

app.get("/", function(req, res){
    res.send();
})



const port = 3000;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})