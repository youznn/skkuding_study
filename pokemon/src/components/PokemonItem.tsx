import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/App.module.css";
import axios from "axios";

interface Props {
  index: number;
}

const PokemonItem: FC<Props> = ({ index }) => {
  const [pokemon, setPokemon] = useState<any | null>(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {pokemon ? (
        <div className={styles.item}>
          <div className="img-wrapper">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                index + 1
              }.png`}
              alt={pokemon.name}
            />
          </div>
          <div className="info-wrapper">
            <h2>{pokemon.name}</h2>
            <p>height: {pokemon.height}dm</p>
            <p>weight: {pokemon.weight}hg</p>
            <p>
              types:{" "}
              {pokemon.types.map((type: any) => type.type.name).join(", ")}
            </p>
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default PokemonItem;
