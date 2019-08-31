const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schema");

const app = express();

const resolvers = {
  Query: {
    movies: () => [],
    users: () => []
  },
  Mutation: {
    createUser: (_, { username, password }) => ({
      token: "12345",
      user: {
        id: "1",
        name: "First user",
        birthday: "1990-12-1",
        country: "RS"
      }
    })
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app, path: "/graphql" });

app.get("/", function(req, res) {
  res.send("Visit /graphql");
});

const port = 3000;
app.listen(port, () => {
  console.log(`started server on port ${port}`);
});
