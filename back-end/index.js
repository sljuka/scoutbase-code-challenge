const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const app = express();
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!"
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app, path: "/graphql" });

app.get("/", function(req, res) {
  res.send("Hello World");
});

const port = 3000;
app.listen(port, () => {
  console.log(`started server on port ${port}`);
});
