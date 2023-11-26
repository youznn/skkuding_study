import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPages from "./pages/DetailPages";
import { useEffect } from "react";
import axios from "axios";
import usePokemonStore from "./datas/PokemonData";

function App() {
  const { setPokemons } = usePokemonStore();
  useEffect(() => {
    Array.from({ length: 100 }, (_, index) =>
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
        .then((response) => {
          console.log(index);
          setPokemons(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPages />} />
      </Routes>
    </Router>
  );
}

export default App;
