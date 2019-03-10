import { Product } from "../models/Product.model";

export const ProductsQuery = async (parent, args, ctx, info) => {
    let filter = {};
    let offset = 0;
    let limit = 12;

    if (typeof args.input !== "undefined") {
        if (args.input.name) {
            filter['name'] = {$regex: '.*' + args.input.name + '.*'};
        }

        if (args.input.price_min || args.input.price_max) {
            filter['price'] = {
                "$gt": parseInt(args.input.price_min),
                "$lt": parseInt(args.input.price_max)
            };
        }
    }

    if (args.offset) {
        offset = args.offset;
    }

    if (args.limit) {
        limit = args.limit;
    }

    const countTotal = Product.find(filter).countDocuments();

    return await Product.find(filter).skip(offset).limit(limit).then(result => {
        return {
            list: result,
            count: result.length,
            countTotal: countTotal
        }
    })
};

export const ProductQuery = async (parent, args) => {
    return await Product.find({uri: args.uri}).exec();
};

export const createProductMutation = async (parent, args) => {
    return await new Product(args.input).save();
};

export const clearAllProductsMutation = async () => {
    return await Product.remove({});
};