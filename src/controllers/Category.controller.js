import { Category } from "../models/Category.model";

export const CategoriesQuery = async () => {
    return await Category.find({}).exec();
};

export const CategoryQuery = async (parent, args) => {
    return await Category.findOne({"uri":args.uri}).exec();
};

export const createCategoryMutation = async (parent, args) => {
    return await new Category(args).save();
};