import React from "react";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import styled, { ThemeProvider } from "styled-components";
import { Countries } from "./Countries";
import { Country } from "./Country";
import { Welcome } from "./Welcome";
import { Header } from "./Header";
import { theme } from "./theme";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com"
});

const Container = styled.div`
  color: ${props => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <Container>
            <Header />

            <Route path="/" exact component={Welcome} />
            <Route path="/countries/" component={Countries} />
            <Route path="/country/:code" component={Country} />
          </Container>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
