import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

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
      <h1>
        Country {name} <span>{emoji}</span>
      </h1>
      <div>{phone}</div>
      <div>{currency}</div>
    </div>
  );
};
