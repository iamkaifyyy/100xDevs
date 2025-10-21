// this video is for http deep dive - Authentication 

const express = require("express")

const app = express();
app.use(express.json());

const users = [];

function generateToken(){
    return Math.random()
}

app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username, 
        password: password
    })

    res.json({
        message:"You are signed in"
    })

})

app.post("/signin", function(req, res){
   
})

app.listen(3000); // tht the http server is listening on port 3000

