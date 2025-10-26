// here creating an auth middleware

// 100xDevs Assignment

const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "kaifyyy123"
const app = express();

const users = [];

app.post("/signup", function(req, res){
  const username = req.body.username
  const password = req.body.password

  users.push({
    username: username,
    password: password
  })

  res.json({
    message: "You are signed in!"
  })
})

app.post("/signin", function(req, res){
  const username = req.body.username
  const password = req.body.password

  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if(users[i].username === username && users[i].password === password){
      foundUser = users[i] 
    }   
  }

  if(!foundUser){
    res.json({
      message: "Credentials incorrect"
    })
  } else {
    const token = jwt.sign({
      username
    }, JWT_SECRET);
    res.json({
      token: token
    })
  }

})

function auth(req, res, next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    if(decodedData.username) {
        next();
    } else {
        res.json({
            message: "you are not logged in"
        })
    }
}

function logger(req, res, next){
    console.log(req.method + "request came");
    next();
}

app.get("/me", auth,  function(req, res){
  const token = req.headers.token; 

  const decodedData = jwt.verify(token, JWT_SECRET);

  if(decodedData.username) {
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
      if(users[i].username === decodedData.username && users[i].password === password){
        foundUser = users[i] 
      }   
    }

    res.json({
      username: foundUser.username,
      password: foundUser.password
    })
  }
   
})


app.listen(3000);