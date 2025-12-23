const express = require("express");
const { userModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "BondJamesBond";
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { z } = require('zod');


mongoose.connect("mongodb://localhost:27017/database-dev");

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
 
  const requiredBody = z.object({
    email: z.string(),
    name: z.string(),
    password: z.string()
  })

  try {
    hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);
    await userModel.create({
      email: username,
      password: hashedPassword,
      name: name,
    });
  } catch (e) {
    console.log("Error while putting the DB ", e);
  }

  res.json({
    message: "You're logged in",
  });
});

app.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await userModel.findOne({
    email: username,
    password: password,
  });

  const passwordMatch = bcrypt.compare(password, user.password);

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      JWT_SECRET
    );
    res.json({
      message: "Generated token",
    });
  } else {
    res.status(403).json({
      message: "Invalid Credentials",
    });
  }
});

app.post("/todo", auth, async (req, res) => {
  const userId = req.userId;
  const title = req.body.title;

  await TodoModel.create({
    title,
    userId,
  });

  res.json({
    message: "Todo created",
  });
});

app.get("/todos", auth, async (req, res) => {
  const userId = req.userId;
  const todos = await TodoModel.find({
    userId: userId,
  });

  res.json({
    todos,
  });
});

function auth(req, res, next) {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      message: "Unauthorized",
    });
  }
}

app.listen(3000);
