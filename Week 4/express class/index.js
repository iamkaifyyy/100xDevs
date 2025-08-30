// this file created for tutorial of express.js

const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})

app.use((req, res) => {
    console.log(req);
    console.log("request Recieved!");

    res.send("this is a basic response!");

});

