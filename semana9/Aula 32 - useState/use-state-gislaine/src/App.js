import React, {useEffect, useState} from "react";
import "./styles.css";
import axios from "axios";
import { PokeCard } from "./components/index.js";
const baseUrl = "https://pokeapi.co/api/v2/pokemon"

export function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState([])

  useEffect(() =>{
    axios
      .get(`${baseUrl}/?limit=151`)
      .then(response => {
        setPokeList(response.data.results);

      })
      .catch(err => {
        console.log(err);
      });
  }, [])
  
  const changePokeName = event => {
    setPokeName(event.target.value
    )};
  ;

  return (
    <div className="App">

      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard urlBase={baseUrl} pokemon={pokeName} />}
    </div>
  );
}
