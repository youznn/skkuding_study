import React from "react";
import { useParams, Link } from "react-router-dom"; // useParams 추가
import PokeData from "../data.js";
import DetailTable from "../PokemonData";
import "../styles/App.css";

function DetailPages() {
  const { id } = useParams();

  if (id !== undefined) {
    const pokemon = parseInt(id, 10);
    return (
      <div className="font-sans bg-slate-950 text-gray-200 font-light">
        <nav className="hover: cursor-pointer  border-b  border-solid border-b-yellow-400 text-2xl font-sans font-bold gap-4 p-6">
          <Link to={"/"}>
            <h1 className="pl-20  text-yellow-400 hover:text-yellow-400/[0.4]">
              Pokemon List
            </h1>
          </Link>
        </nav>
        <main className="flex flex-col justify-center items-center gap-4 p-4">
          <div className="border border-solid border-yellow-400 rounded-full overflow-hidden">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                pokemon + 1
              }.png`}
              alt={PokeData[pokemon].name}
            />
          </div>
          <h1 className="text-3xl font-medium">{PokeData[pokemon].name}</h1>
          <DetailTable index={id} />
        </main>
      </div>
    );
  } else {
    return <div>HELLO</div>;
  }
}

export default DetailPages;
