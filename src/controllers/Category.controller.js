import { Category } from "../models/Category.model";

export const CategoriesQuery = async () => {
    return await Category.find({}).exec();
};

export const CategoryQuery = async (parent, args) => {
    let filter = {};

    if (typeof parent !== "undefined") {
        if (parent.category_id) {
            filter['_id'] = parent.category_id;
        }
    } else {
        filter['uri'] = args.uri;
    }

    return await Category.find(filter).exec();
};

export const createCategoryMutation = async (parent, args) => {
    return await new Category(args).save();
};