const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String
  }

  type Director {
    id: ID!
    name: String!
    birthday: String
    country: String
    moviesDirected: [Movie]
  }

  type Actor {
    id: ID!
    name: String!
    birthday: String
    country: String
    directors: [Director]
    movies: [Movie]
  }

  type Movie {
    id: ID!
    scoutbase_rating: String!
    title: String!
    year: String!
    rating: Float!
    actors: [Actor]
    directors: [Director]
  }

  type Session {
    token: String!
    user: User!
  }

  type Query {
    movies: [Movie]
  }

  type Mutation {
    createUser(username: String!, password: String!): Session
    loginUser(username: String!, password: String!): Session
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = {
  typeDefs
};
