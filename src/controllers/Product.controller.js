import { Product } from "../models/Product.model";

export const ProductsQuery = async (parent, args) => {
    return await Product.find({}).exec();
};

export const ProductQuery = async (parent, args) => {
    return await Product.find({_id: args.id}).exec();
};

export const createProductMutation = async (parent, args) => {
    return await new Product(args).save();
};

export const clearAllProductsMutation = async () => {
    return await Product.remove({});
};