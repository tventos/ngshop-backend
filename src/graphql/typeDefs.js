import { gql } from 'apollo-server-express';

export default gql`
type Product {
    scalar: Product
    _id: String!
    name: String!
    description: String
    price: Int!
    uri: String!
}

input ProductInput {
    _id: String
    name: String!
    description: String
    price: Int!
    uri: String!
    category_id: String!
}

input FilterInput {
    _id: String
    name: String
    price_min: Int
    price_max: Int
    uri: String
    category_id: String!
}

type Category {
    scalar: Category
    _id: String!
    name: String!
    uri: String!
}

type Query {
    products(input: FilterInput): [Product!]!
    product(id: ID): [Product!]!
    categories: [Category!]!
}

type Mutation {
    createProduct(input: ProductInput): Product!
    clearAll: Product!
    createCategory(name: String! uri: String!): Category!
}
`;
