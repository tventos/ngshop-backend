import mangoose from 'mongoose';

const mongoose = mangoose;
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: false},
    price: {type: Number, required: true},
    uri: {type: String, required: true},
    category_id: {type: String, required: true}
}, {
    versionKey: false
});

export const Product = mongoose.model('Product', ProductSchema);