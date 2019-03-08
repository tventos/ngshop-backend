import { gql } from 'apollo-server-express';

export default gql`
type Product {
    _id: String!
    name: String!
    description: String
    price: Int!
}

type Query {
    products: [Product!]!
    product(id: ID): [Product!]!
}

type Mutation {
    createProduct(name: String! description: String price: Int!): Product!
}
`;
