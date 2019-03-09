import * as productController from "../controllers/Product.controller";
import * as categoryController from "../controllers/Category.controller";

export default {
    Query: {
        products: productController.ProductsQuery,
        product: productController.ProductQuery,
        category: categoryController.CategoryQuery,
        categories: categoryController.CategoriesQuery
    },
    Mutation: {
        createProduct: productController.createProductMutation,
        clearAll: productController.clearAllProductsMutation,
        createCategory: categoryController.createCategoryMutation
    },
    Category: {
        products: async (root, args, ctx, info) => {
            return productController.ProductsQuery(root, args, ctx, info)
        },
        count: async (root, args, ctx, info) => {
            return productController.ProductsQuery(root, args, ctx, info)
        }
    }
};