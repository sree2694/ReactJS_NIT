var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;

var app = express();

app.get("/connect", (req, res)=>{
    mongoClient.connect("mongodb://127.0.0.1:27017")
    .then(()=>{
        res.send("Connected with MongoDB Server Successfully..");
    })
    .catch((err)=>{
        console.log(err);
    })
});
app.listen(5000);
console.log(`Server Started : http://127.0.0.1:5000`);
