const mongoose = require("mongoose");
const express = require("express");
const app = express();
require('mongoose-assert')(mongoose);
var bodyParser = require('body-parser');

var productRouter = require('./routes/Product.router');

mongoose.connect("mongodb://localhost:27017/ngshop", { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);

    app.listen(3000, function(){
        console.log("Сервер ожидает подключения...");
    });
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Products
app.use('/api/products', productRouter);













/*
app.get("/api/users", function(req, res){

    User.find({}, function(err, users){

        if(err) return console.log(err);
        res.send(users)
    });
});



app.get("/api/users/:id", function(req, res){

    const id = req.params.id;
    User.findOne({_id: id}, function(err, user){

        if(err) return console.log(err);
        res.send(user);
    });
});*/