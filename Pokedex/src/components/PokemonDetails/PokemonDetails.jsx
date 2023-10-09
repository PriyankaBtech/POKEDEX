import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetails() {

    const {id} = useParams();
    //console.log(id);
    const [pokemon, setPokemon] = useState({});

    async function downloadPokemons() {

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(response.data);
        // sprites.other.dream_world.front_default
        setPokemon({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t) => t.type.name)
        })
    }

    useEffect(() => {
        downloadPokemons()
    }, []);


    return (
       <div className="pokemon-details-wrapper">
          <div className="pokemon-name">name: {pokemon.name}</div>
          <img className="pokemon-details-image" src= {pokemon.image} />
          <div>Height: {pokemon.height}</div>
          <div>Weight: {pokemon.weight}</div>
          <div className="pokemon-details-types">
            {pokemon.types && pokemon.types.map((t) => <div key={t}> {t} </div>)}
          </div>
       </div>
    )
    
}

export default PokemonDetails;