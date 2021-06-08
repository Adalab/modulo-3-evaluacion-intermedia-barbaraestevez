import React, { useState } from "react";
import "../stylesheets/App.scss";
import data from "../data/data.json";
import PokeList from "./PokeList";

function App() {
  const [pokemonData] = useState(data);
  return (
    <div>
      <h1 className="title">Mi lista de pokemon</h1>
      <PokeList pokemons={pokemonData} />
    </div>
  );
}

export default App;