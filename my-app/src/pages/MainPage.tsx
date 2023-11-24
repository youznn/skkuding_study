import PokemonItem from "../components/PokemonItem";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import "../styles/App.css";
import { useState } from "react";
import PageButton from "../components/PageButton";

function MainPage() {
  const [page, setPage] = useState(0);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = parseInt(e.target.value, 10);
    setPage(newValue);
  }
  return (
    <div>
      <Nav />
      <main>
        <div className="grid grid-cols-3 grid-rows-3 items-stretch justify-items-stretch px-20 gap-8 m-8">
          {Array.from({ length: 9 }, (_, index) => (
            <Link to={`/detail/${10 * page + index}`} key={10 * page + index}>
              <PokemonItem index={10 * page + index} />
            </Link>
          ))}
        </div>
        <div className="flex text-white justify-center gap-5 m-8 ">
          {Array.from({ length: 10 }, (_, index) => (
            <PageButton
              key={index}
              buttonIdx={index}
              isActive={index === page}
              onClick={handleChange}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
