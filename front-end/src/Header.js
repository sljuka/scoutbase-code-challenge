import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.h3`
  & > a {
    color: ${props => props.theme.colors.black};
    text-decoration: none;
  }
`;

export const Header = () => (
  <StyledHeader>
    <Link to="/">
      Countries app{" "}
      <span role="img" aria-label="planet-earth">
        🌎
      </span>
    </Link>
  </StyledHeader>
);
