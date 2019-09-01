import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import styled from "styled-components";

const Flag = styled.div`
  font-size: 8em;
`;

const Name = styled.h1`
  margin: 10px 0;
`;

const Details = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  font-size: 1.2em;
  & > div {
    margin: 0 10px;
  }
`;

export const Country = ({ match }) => {
  const { loading, error, data } = useQuery(gql`
    {
      country(code: "${match.params.code}") {
        currency
        name
        emoji
        phone
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { currency, name, emoji, phone } = data.country;

  return (
    <div>
      <Flag>
        <span>{emoji}</span>
      </Flag>
      <Name>{name}</Name>
      <Details>
        <div>📞 {phone}</div>
        <div>💵 {currency.split(",").join(", ")}</div>
      </Details>
    </div>
  );
};
