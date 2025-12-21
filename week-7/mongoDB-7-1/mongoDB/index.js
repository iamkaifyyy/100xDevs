const express = require('express');
const { userModel, TodoModel } = require('./db')
const jwt = require('jsonwebtoken');
const JWT_SECRET = "BondJamesBond"
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/database_dev/student');

const app = express(); 
app.use(express.json()); 



app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    await userModel.create({
        email: username,
        password: password,
        name: name
    })

    res.json({
        message: "You're logged in"
    })
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = userModel.findOne({
        email: username,
        password: password
    })

    if(user){
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET); 
        res.json({
            message: "Generated token"
        })
    } else {
        res.status(403).json({
            message: "Invalid Credentials"
        })
    }
}) 

app.post("/todo", auth, async (req, res) => {
    const userId = req.userId;
    const title = req.body.title;

    await TodoModel.create({
        title,
        userId
    })

    res.json({
        message: "Todo created"
    })
})

app.get("/todos", auth, async(req, res)=> {  
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId: userId
    })

    res.json({
        todos
    })
})


function auth(req, res, next){
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData){
        req.userId = decodedData.id;
        next();
    } else {
        res.status(403).json({
            message: "Unauthorized"
        })
    }
}

app.listen(3000); 