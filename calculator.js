const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmi-calcumator", function(req, res){
    res.sendFile(__dirname + "bmiCalculator.html");
});

app.post("/", function (req, res) {

    var a = Number(req.body.num1);
    var b = Number(req.body.num2);
    var c = a + b;
    res.send("The result is " + c);
});

app.post("/bmiCalculator", function(req, res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var bmi = weight / (Math.pow(height));

    res.send("your bmi is" + bmi);
    
    if(bmi < 30){
        res.send("");
    }else if (bmi < 50) {
        res.send("");
    }else if (bmi > 70){
        res.send("");
    }
});

app.listen("3000", function(){
    console.log("Server runing on port 3000");
});

