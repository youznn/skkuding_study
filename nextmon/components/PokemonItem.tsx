"use client";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";

interface Props {
  index: number;
}

const PokemonItem: FC<Props> = ({ index }) => {
  const [pokemon, setPokemon] = useState<any | null>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("error");
        }
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  }, [index]);

  return (
    <div>
      {pokemon ? (
        <div className="flex justify-start items-center p-6 gap-4 border border-solid border-yellow-400/[.4] hover:border-yellow-400 hover: ease-in-out hover:duration-200 rounded-md cursor-pointer">
          <div className="img-wrapper">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                index + 1
              }.png`}
              alt={pokemon.name}
              width={100}
              height={100}
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
