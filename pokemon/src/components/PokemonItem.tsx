import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/App.module.css";

interface Props {
  index: number;
  name: string;
  height: string;
  weight: string;
  types: string[];
}

const PokemonItem: FC<Props> = ({ index, name, height, weight, types }) => {
  return (
    <div className={styles.item}>
      <div className="img-wrapper">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`}
          alt={name}
        />
      </div>
      <div className="info-wrapper">
        <h2>{name}</h2>
        <p>height: {height}dm</p>
        <p>weight: {weight}hg</p>
        <p>types: {types.join(", ")}</p>
      </div>
    </div>
  );
};

export default PokemonItem;
