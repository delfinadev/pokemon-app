import React, { useState } from "react";
import './searchInput.css'

export default function SearchInput({ getPokemon }) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <form>
        <label>Busca tu Pokemon preferido</label>
        <input
          type="text"
          name="pokemon"
          className=""
          placeholder="Busca tu Pokemon"
          onChange={handleChange}
          // value={pokemon}
        />
      </form>
      <button className="btn-danger " onClick={(e) => getPokemon(search)}>
         Buscar
      </button>
    </>
  );
}
