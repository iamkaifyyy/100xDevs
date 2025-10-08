const express = require('express')
const app = express()

let requestCount = 0;

function requestIncreaser(){
  requestCount = requestCount + 1;
  console.log("total no of requests = " + requestCount);
  req.requestCount = requestCount;
}

app.get('/sum', (req, res) => {
  requestIncreaser();
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  
  res.json({
    ans: a + b
  })
})

app.get('/multiply', (req, res) => {
  requestIncreaser();
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  
  res.json({
    ans: a * b
  })
})


app.listen(3000)