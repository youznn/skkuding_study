import { useQuery, gql } from "@apollo/client";
import styles from "./styles/Detail.module.css";
import React from "react";

const GET_POKEMONS = gql`
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
      special_attack: pokemon_v2_pokemonstats(where: { stat_id: { _eq: 4 } }) {
        base_stat
      }
      special_defense: pokemon_v2_pokemonstats(where: { stat_id: { _eq: 5 } }) {
        base_stat
      }
      speed: pokemon_v2_pokemonstats(where: { stat_id: { _eq: 6 } }) {
        base_stat
      }
    }
  }
`;

function DetailTable({ index }: any) {
  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pokemon = data && data.pokemondata && data.pokemondata[index];

  return (
    <div className={styles.table_wrapper}>
      <table>
        <tbody>
          <tr className={styles.tr}>
            <td className={styles.firstdata}>Height</td>
            <td className={styles.seconddata}>{pokemon.height} dm</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.firstdata}>Weight</td>
            <td className={styles.seconddata}> {pokemon.weight} hg</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.firstdata}>Types</td>
            <td className={styles.seconddata}>
              {pokemon.types.map((type: any, index: number) => (
                <React.Fragment key={index}>
                  {index > 0 && ", "} {type.type.name}
                </React.Fragment>
              ))}
            </td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.firstdata}>Base Experience</td>
            <td className={styles.seconddata}>{pokemon.base_experience}</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.firstdata}>Abilites</td>
            <td className={styles.seconddata}>
              {pokemon.abilities.map((ability: any, index: number) => (
                <React.Fragment key={index}>
                  {index > 0 && ", "} {ability.ability.name}
                </React.Fragment>
              ))}
            </td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.firstdata}>HP</td>
            <td className={styles.seconddata}>{pokemon.hp[0].base_stat}</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.firstdata}>Attack</td>
            <td className={styles.seconddata}>
              {pokemon.attack[0].base_stat}{" "}
            </td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.firstdata}>Defense</td>
            <td className={styles.seconddata}>
              {pokemon.defense[0].base_stat}{" "}
            </td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.firstdata}>Special-attack</td>
            <td className={styles.seconddata}>
              {pokemon.special_attack[0].base_stat}
            </td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.firstdata}>Special-defense</td>
            <td className={styles.seconddata}>
              {pokemon.special_defense[0].base_stat}
            </td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.firstdata}>Speed</td>
            <td className={styles.seconddata}>{pokemon.speed[0].base_stat} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DetailTable;
