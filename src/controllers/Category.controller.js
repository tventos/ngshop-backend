import { Category } from "../models/Category.model";

export const CategoryQuery = async (parent, args) => {
    return await Category.find({}).exec();
};

export const createCategoryMutation = async (parent, args) => {
    return await new Category(args).save();
};