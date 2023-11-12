import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import "../styles/App.css";

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
        <div className="flex justify-start items-center p-6 gap-4 border border-solid border-yellow-400/[.4] hover:border-yellow-400 hover: ease-in-out hover:duration-200 rounded-md cursor-pointer">
          <div className="img-wrapper">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                index + 1
              }.png`}
              alt={pokemon.name}
              className="w-16 h-16"
            />
          </div>
          <div className="info-wrapper">
            <h2 className="text-white font-medium text-2xl">{pokemon.name}</h2>
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
