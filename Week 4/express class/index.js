const express = require('express');
const app = express();

const users = [{
    name: "kaify",
    kidneys: [{
        healthy: false
    }]
}];

app.get("/", function(req, res){
    const johnKidneys = users[0].kidneys;
    console.log(johnKidneys);

    const noofKidneys = johnKidneys.length; 
    
    
});

app.post("/", function(req, res){
    
})

app.listen(3000);

