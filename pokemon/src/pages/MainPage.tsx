import React from "react";
import PokeData from "../data.js";
import PokemonItem from "../components/PokemonItem";
import styles from "../styles/App.module.css";
import { Link, Route } from "react-router-dom";
import DetailPages from "./DetailPages";
function MainPage() {
  return (
    <body className={styles.body}>
      <nav className={styles.nav}>
        <h1>Pokemon List</h1>
      </nav>
      <main>
        <div className={styles.container}>
          {PokeData.slice(0, 10).map((pokemon, index) => (
            <Link to={`/detail/${index}`} key={index}>
              <PokemonItem
                key={index}
                index={pokemon.index}
                name={pokemon.name}
                height={pokemon.height}
                weight={pokemon.weight}
                types={pokemon.types}
              />
            </Link>
          ))}
        </div>
      </main>
    </body>
  );
}

export default MainPage;
