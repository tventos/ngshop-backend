var Product = require('../models/Product.model');

exports.index = function (req, res) {
    Product.find({}, function(err, products){

        if(err) return console.log(err);

        res.send(products);
    });
};

exports.create = function (req, res) {
    if (!req.body) res.sendStatus(400);

    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;

    const product = new Product({
        name: name,
        description: description,
        price: price
    });

    product.save(function(err){
        if(err) return console.log(err);

        res.send(product);
    });
};