import React from "react";
import PokemonItem from "../components/PokemonItem";
import styles from "../styles/App.module.css";
import { Link } from "react-router-dom";

function MainPage() {
  const numPokemons = 10; // 원하는 포켓몬 수

  return (
    <body className={styles.body}>
      <nav className={styles.nav}>
        <h1>Pokemon List</h1>
      </nav>
      <main>
        <div className={styles.container}>
          {Array.from({ length: numPokemons }, (_, index) => (
            <Link to={`/detail/${index}`} key={index}>
              <PokemonItem index={index} />
            </Link>
          ))}
        </div>
      </main>
    </body>
  );
}

export default MainPage;
