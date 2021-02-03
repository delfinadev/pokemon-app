import { useState, useEffect } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    let url = ` https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    axios.get(url).then((response) => {
      setData(response.data.results);
    });
  }, [pokemon]);

  function getPokemon(poke) {
    setPokemon(poke);
  }

  return (
    <div className="App">
      <h1>Pokemon app</h1>
      <SearchInput getPokemon={getPokemon} />
      {/* <Cards data={data}/> */}
    </div>
  );
}

export default App;
