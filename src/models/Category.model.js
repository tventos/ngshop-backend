import mangoose from 'mongoose';

const mongoose = mangoose;
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {type: String, required: true},
    uri: {type: String, required: true}
}, {
    versionKey: false
});

export const Category = mongoose.model('Category', CategorySchema);