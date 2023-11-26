import React, { FC, useEffect, useState } from "react";
import Img from "./Img";
import axios from "axios";
import "../styles/App.css";
import usePokemonStore from "../datas/PokemonData";

interface Props {
  index: number;
}

interface Pokemon {
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
}

function PokemonItem({ index }: Props) {
  const { pokemons, setPokemons } = usePokemonStore();
  const pokemon = pokemons[index];

  return (
    <div>
      {pokemon ? (
        <div className="flex justify-start items-center p-6 gap-4 border border-solid border-yellow-400/[.4] hover:border-yellow-400 hover: ease-in-out hover:duration-200 rounded-md cursor-pointer">
          <div className="img-wrapper">
            <Img index={index} name={pokemon.name} className={"w-16 h-16"} />
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
}

export default PokemonItem;
