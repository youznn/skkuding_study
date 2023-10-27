import React, { FC } from "react";
import styles from "../styles/Detail.module.css";
import PokeData from "../data";

interface PokemonTableProps {
  index: string;
}

const PokemonTable: FC<PokemonTableProps> = ({ index }) => {
  const pokemon = PokeData[parseInt(index)];
  return (
    <div className={styles.table_wrapper}>
      <table>
        <tr className={styles.tr}>
          <td className={styles.firstdata}>Height</td>
          <td className={styles.seconddata}> {pokemon.height} dm</td>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.firstdata}>Weight</td>
          <td className={styles.seconddata}> {pokemon.weight} hg</td>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.firstdata}>Types</td>
          <td className={styles.seconddata}> {pokemon.types.join(", ")}</td>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.firstdata}>Base Experience</td>
          <td className={styles.seconddata}> {pokemon["base-Experience"]}</td>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.firstdata}>Abilites</td>
          <td className={styles.seconddata}> {pokemon.abilities.join(", ")}</td>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.firstdata}>HP</td>
          <td className={styles.seconddata}> {pokemon.hp}</td>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.firstdata}>Attack</td>
          <td className={styles.seconddata}> {pokemon.attack}</td>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.firstdata}>Defense</td>
          <td className={styles.seconddata}> {pokemon.defense}</td>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.firstdata}>Special-attack</td>
          <td className={styles.seconddata}> {pokemon["special-attack"]}</td>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.firstdata}>Special-defense</td>
          <td className={styles.seconddata}> {pokemon["special-defense"]}</td>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.firstdata}>Speed</td>
          <td className={styles.seconddata}> {pokemon.speed}</td>
        </tr>
      </table>
    </div>
  );
};

export default PokemonTable;
