var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: false},
    price: {type: Number, required: true}
}, {
    versionKey: false
});

module.exports = mongoose.model('Product', ProductSchema);