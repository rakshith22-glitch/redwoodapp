export const schema = gql`
  type Order {
    id: Int!
    orderId: String!
    itemname: String
  }

  type Query {
    orders: [Order!]! @requireAuth
    order(id: Int!): Order @requireAuth
  }

  input CreateOrderInput {
    orderId: String!
    itemname: String
  }

  input UpdateOrderInput {
    orderId: String
    itemname: String
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order! @skipAuth
    updateOrder(id: Int!,input: UpdateOrderInput!): Order! @skipAuth
    deleteOrder(id: Int!): Order! @skipAuth
  }
`
