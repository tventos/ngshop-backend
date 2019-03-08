import { gql } from 'apollo-server-express';

export default gql`
type Product {
    _id: String!
    name: String!
    description: String
    price: Int!
}

type Category {
    _id: String!
    name: String!
    uri: String!
}

type Query {
    products: [Product!]!
    product(id: ID): [Product!]!
    categories: [Category!]!
}

type Mutation {
    createProduct(name: String! description: String price: Int!): Product!
    clearAll: Product!
    createCategory(name: String! uri: String!): Category!
}
`;
