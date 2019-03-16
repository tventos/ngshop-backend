import { gql } from 'apollo-server-express';

export default gql`
type Product {
    scalar: Product
    _id: String!
    name: String!
    description: String
    price: Int!
    uri: String!
    category: Category
}

type ProductList {
    scalar: ProductList
    list: [Product]
    count: Int
    countTotal: Int
}

input FilterInput {
    name: String
    price_min: Int
    price_max: Int
    uri: String
}

type Category {
    _id: String!
    name: String!
    uri: String!
}

type Query {
    products(category_id: String limit: Int offset: Int input: FilterInput): ProductList
    product(uri: String): [Product!]!
    category(uri: String!): Category
    categories: [Category!]!
}

type Mutation {
    createProduct(name: String! description: String price: Int! uri: String! category_id: String!): Product!
    clearAll: Product!
    createCategory(name: String! uri: String!): Category!
}
`;
