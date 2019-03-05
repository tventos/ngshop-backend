var express = require('express');
var router = express.Router();

var ProductController = require('../controllers/productController');

// Get products
router.get('/', ProductController.index);

// Create product
router.post('/', ProductController.create);

module.exports = router;