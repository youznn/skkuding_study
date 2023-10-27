import PokemonItem from "../components/PokemonItem.tsx";
import React from "react";
import PokeData from "../data.js";

function MainPage() {
  return (
    <PokemonItem
      index={1}
      name={PokeData[1].name}
      height={PokeData[1].height}
      weight={PokeData[1].weight}
      types={PokeData[1].types}
    />
  );
}

export default MainPage;
