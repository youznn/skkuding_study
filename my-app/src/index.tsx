import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
  }),
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetPokemons {
        pokemondata: pokemon_v2_pokemon(limit: 10) {
          index: id
          name
          height
          weight
          base_experience
          abilities: pokemon_v2_pokemonabilities {
            ability: pokemon_v2_ability {
              name
            }
          }
          types: pokemon_v2_pokemontypes {
            type: pokemon_v2_type {
              name
            }
          }
          hp: pokemon_v2_pokemonstats(where: { stat_id: { _eq: 2 } }) {
            base_stat
          }
          attack: pokemon_v2_pokemonstats(where: { stat_id: { _eq: 2 } }) {
            base_stat
          }
          defense: pokemon_v2_pokemonstats(where: { stat_id: { _eq: 3 } }) {
            base_stat
          }
          special_attack: pokemon_v2_pokemonstats(
            where: { stat_id: { _eq: 4 } }
          ) {
            base_stat
          }
          special_defense: pokemon_v2_pokemonstats(
            where: { stat_id: { _eq: 5 } }
          ) {
            base_stat
          }
          speed: pokemon_v2_pokemonstats(where: { stat_id: { _eq: 6 } }) {
            base_stat
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
