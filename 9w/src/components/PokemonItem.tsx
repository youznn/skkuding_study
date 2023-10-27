import React from "react";
import { Link, Route } from "react-router-dom";
import PokeData from "../data.js";

function PokemonItem({ index, name, height, weight, types }) {
  return (
    <Link to={"/"} className="item">
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
        <p>types: {types}</p>
      </div>
    </Link>
  );
}

export default PokemonItem;
