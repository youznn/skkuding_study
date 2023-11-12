import React from "react";
import PokemonItem from "../components/PokemonItem";
import { Link } from "react-router-dom";
import "../styles/App.css";

function MainPage() {
  const numPokemons = 10; // 원하는 포켓몬 수

  return (
    <div>
      <nav className="hover: cursor-pointer  border-b  border-solid border-b-yellow-400 text-2xl font-sans font-bold gap-4 p-6">
        <h1 className="pl-20 text-yellow-400 hover:text-yellow-400/[0.4]">
          Pokemon List
        </h1>
      </nav>
      <main>
        <div className="grid grid-cols-2 grid-rows-5 items-stretch justify-items-stretch px-20 gap-8 m-8">
          {Array.from({ length: numPokemons }, (_, index) => (
            <Link to={`/detail/${index}`} key={index}>
              <PokemonItem index={index} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
