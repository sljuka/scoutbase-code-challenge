import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

export function Countries() {
  const { loading, error, data } = useQuery(gql`
    {
      countries {
        name
        code
        emoji
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data.countries.map(({ name, code, emoji }) => (
        <li key={code}>
          {name} {code} {emoji}
        </li>
      ))}
    </ul>
  );
}
