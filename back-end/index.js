const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app, path: "/graphql" });

app.get("/", function(req, res) {
  res.send("Visit /graphql");
});

const port = 3000;
app.listen(port, () => {
  console.log(`started server on port ${port}`);
});
