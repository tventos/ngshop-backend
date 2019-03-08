import { Product } from "../models/Product.model";

export const ProductsQuery = async (parent, args) => {
    let filter = {
        category_id: args.input.category_id
    };

    if (args.input.name) {
        filter['name'] = { $regex: '.*' + args.input.name + '.*' };
    }

    if (args.input.price_min || args.input.price_max) {
        filter['price'] = {
            "$gt": parseInt(args.input.price_min),
            "$lt": parseInt(args.input.price_max)
        };
    }

    return await Product.find(filter).exec();
};

export const ProductQuery = async (parent, args) => {
    return await Product.find({_id: args.id}).exec();
};

export const createProductMutation = async (parent, args) => {
    return await new Product(args.input).save();
};

export const clearAllProductsMutation = async () => {
    return await Product.remove({});
};