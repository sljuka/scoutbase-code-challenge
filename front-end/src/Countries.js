import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CountryList = styled.ul`
  text-align: left;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 5px;
  list-style: none;
  margin-top: 20px;
  padding: 0px;
  max-width: 400px;
`;

const ContinentName = styled.span`
  font-weight: 100;
  color: ${props => props.theme.colors.gray};
  font-size: 0.8em;
`;

const CountryLink = styled(Link)`
  display: block;
  cursor: pointer;
  padding: 10px;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  text-decoration: none;
  :link {
    color: ${props => props.theme.colors.black};
  }
  :visited {
    color: ${props => props.theme.colors.blue};
  }
  :hover {
    color: white;
    background-color: ${props => props.theme.colors.blue};
  }

  &:hover ${ContinentName} {
    color: ${props => props.theme.colors.white};
  }
`;

const CountryName = styled.div`
  font-size: 1.3em;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px 0;
`;

const Languages = styled.span`
  font-size: 0.9em;
  list-style: none;
  margin: 0px;
`;

export function Countries() {
  const { loading, error, data } = useQuery(gql`
    {
      countries {
        code
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
    <CountryList>
      {data.countries.map(
        ({ name, continent: { name: continentName }, languages, code }) => (
          <li key={name}>
            <CountryLink to={`country/${code}`}>
              <CountryName>
                <span>{name}</span>
                <ContinentName>{continentName}</ContinentName>
              </CountryName>
              <Languages>
                {languages
                  .map(language => `${language.native} (${language.name})`)
                  .join(", ")}
              </Languages>
            </CountryLink>
          </li>
        )
      )}
    </CountryList>
  );
}
