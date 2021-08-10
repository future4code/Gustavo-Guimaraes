import axios from "axios";
import React, {useState, useEffect} from "react"

function PokeCard(props){

  const [pokemone, setPokemone] = useState({})
  console.log(props)



  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        setPokemone(response.data );
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    pegaPokemon(props.pokemon)
}, [props.pokemon])

    return (
      <div>
        <p>{pokemone.name}</p>
        <p>{pokemone.weight} Kg</p>
        {pokemone.types && <p>{pokemone.types[0].type.name}</p>}
        {pokemone.sprites && (
          <img src={pokemone.sprites.front_default} alt={pokemone.name} />
        )}
      </div>
    );
  
}


export default PokeCard;
