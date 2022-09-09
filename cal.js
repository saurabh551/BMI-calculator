const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req ,res){
//res.sendFile("index.html");
res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res){
//console.log(req.body.num1);
var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);

var result = num1 + num2;
  res.send("The result of the cal is " + result);
});
app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCal.html");
  //res.send("<h1>BMI Calculator</h1>");
});
app.post("/bmicalculator", function(req, res){
//console.log(req.body.num1);
var w1 = Number(req.body.w1);
var h1 = Number(req.body.h1);

var output = w1 + h1;
  res.send("Your BMI is  " + output);
});
app.listen(3000, function(){
  console.log("Server started on port 3000");
});
