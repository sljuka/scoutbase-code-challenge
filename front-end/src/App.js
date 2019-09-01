import React from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Countries } from "./Countries";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <Countries />
      </div>
    </ApolloProvider>
  );
}

export default App;
