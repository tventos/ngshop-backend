import * as productController from "../controllers/Product.controller";
import * as categoryController from "../controllers/Category.controller";

export default {
    Query: {
        products: productController.ProductsQuery,
        product: productController.ProductQuery,
        categories: categoryController.CategoryQuery
    },
    Mutation: {
        createProduct: productController.createProductMutation,
        clearAll: productController.clearAllProductsMutation,
        createCategory: categoryController.createCategoryMutation
    }
};