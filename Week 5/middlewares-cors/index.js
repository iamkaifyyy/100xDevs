const express = require('express')
const app = express()

let requestCount = 0;

app.get('/sum', (req, res) => {
  requestCount = requestCount + 1;
  console.log("total no of requests = " + requestCount);
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  
  res.json({
    ans: a + b
  })
})


app.get("")

app.listen(3000)