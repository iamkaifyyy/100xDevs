// express.js 

const express = require('express');
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys;
    console.log(johnKidneys);

    const numberofKidneys = johnKidneys.length;
    let numberofHealthyKidneys = 0;

    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberofHealthyKidneys = numberofHealthyKidneys + 1;
        }
    }

    const numberofUnhealthyKidneys = numberofKidneys - numberofHealthyKidneys;

    res.json({
        numberofKidneys,
        numberofHealthyKidneys,
        numberofUnhealthyKidneys
    });
});


app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })

    res,json({
        msg: "done!"
    })
})




app.listen(3000);