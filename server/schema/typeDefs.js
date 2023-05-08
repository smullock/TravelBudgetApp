const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }


  type Item {
  _id: ID!
  date: String!
  city: String!
  hotel: String!
  details: String!
  flights: Float!
  accomodation: Float!
  food: Float!
  activities:Float!
  
}



  type Query {
    users: [User]
    user(username: String!): User
    items: [Item!]!
    item(_id: ID!): Item!

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addItem(date: String!,city: String!, hotel: String!, details: String!, flights: Float!, accomodation: Float!, food: Float!, activities: Float!): Item!
    updateItem(id: ID!, date: String!, city: String!, hotel: String!, details: String,flights: Float, accomodation:Float,food:Float,activities:Float) : Item
    deleteItem(id: ID!): Item!
  }
`;

module.exports = typeDefs;