import React from "react";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { Countries } from "./Countries";
import { Country } from "./Country";
import { Welcome } from "./Welcome";
import { Header } from "./Header";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />

        <Route path="/" exact component={Welcome} />
        <Route path="/countries/" exact component={Countries} />
        <Route path="/country/:code" component={Country} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
