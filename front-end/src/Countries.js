import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

export function Countries() {
  const { loading, error, data } = useQuery(gql`
    {
      countries {
        name
        continent {
          name
        }
        languages {
          name
          native
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data.countries.map(
        ({ name, continent: { name: continentName }, languages }) => (
          <li key={name}>
            {name} {continentName}
            <ul>
              {languages.map(language => (
                <li>
                  {language.native} ({language.name})
                </li>
              ))}
            </ul>
          </li>
        )
      )}
    </ul>
  );
}
