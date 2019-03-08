import { Product } from "../models/Product.model";

export default {
    Query: {
        products: async () => await Product.find({}).exec(),
        product: async (parent, args) => await Product.find({_id: args.id}).exec()
    },
    Mutation: {
        createProduct: async (parent, args) => await new Product(args).save()
    }
};