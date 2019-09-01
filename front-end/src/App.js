import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Countries } from "./Countries";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com"
});

const Index = () => <p>Welcome to the countries app</p>;
const Country = () => <p>Country</p>;

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <h2>Countries app 🌎</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/countries">Countries</Link>
            </li>
            <li>
              <Link to="/country/CI">Country</Link>
            </li>
          </ul>
        </div>

        <Route path="/" exact component={Index} />
        <Route path="/countries/" exact component={Countries} />
        <Route path="/country/:code" component={Country} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
