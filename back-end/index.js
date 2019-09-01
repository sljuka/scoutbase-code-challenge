const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");
const { users } = require("./stubs");

const app = express();

// Enabling cors. I assume this is what is meant by "must be accessible for external clients." from README
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // token from createUser or loginUser mutation can be added to http headers in '/graphql' playground in bottom left corner
    const token = req.headers.authorization || "";

    // TODO: only demo purpose authentication
    const user = token === "12345" ? users[0] : null;

    return { user };
  }
});

server.applyMiddleware({ app, path: "/graphql" });

app.get("/", function(req, res) {
  res.send("Visit /graphql");
});

const port = 3000;
app.listen(port, () => {
  console.log(`started server on port ${port}`);
});
