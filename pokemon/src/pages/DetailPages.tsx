import React from "react";
import { useParams, Link } from "react-router-dom"; // useParams 추가
import PokeData from "../data.js";
import styles from "../styles/Detail.module.css";
import DetailTable from "../PokemonData";

function DetailPages() {
  const { id } = useParams();

  if (id !== undefined) {
    const pokemon = parseInt(id, 10);
    return (
      <div className={styles.body}>
        <nav className={styles.nav}>
          <Link to={"/"}>
            <h1>Pokemon List</h1>
          </Link>
        </nav>
        <main className={styles.main}>
          <div className={styles.img_wrapper}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                pokemon + 1
              }.png`}
              alt={PokeData[pokemon].name}
            />
          </div>
          <h1>{PokeData[pokemon].name}</h1>
          <DetailTable index={id} />
        </main>
      </div>
    );
  } else {
    return <div>HELLO</div>;
  }
}

export default DetailPages;
