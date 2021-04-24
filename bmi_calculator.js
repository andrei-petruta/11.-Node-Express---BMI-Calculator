const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    height /= 100;

    var bmi = (weight/(height ** 2));
    bmi = bmi.toFixed(2);

    res.send(`Your current BMI is ${bmi}!`);
})

app.listen(3000, function() {
    console.log("Server started with port 3000.");
})