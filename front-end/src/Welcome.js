import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CountriesLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.blue};
`;

export const Welcome = () => (
  <div>
    <h1>Welcome traveler! :)</h1>
    <CountriesLink to="/countries">List all countries</CountriesLink>
  </div>
);
