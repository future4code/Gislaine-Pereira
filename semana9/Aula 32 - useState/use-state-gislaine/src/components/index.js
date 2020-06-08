import React, {useEffect, useState} from "react";
import axios from "axios";

export function PokeCard(props) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() =>{
    axios
      .get(`${props.urlBase}/${props.pokemon}`)
      .then(response => {
        setPokemon(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.pokemon, props.urlBase]
  )
  

 
  return (
    <div>
      <p>{pokemon.name}</p>
      {pokemon.weight && <p>{pokemon.weight}Kg</p>}
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );    
}

