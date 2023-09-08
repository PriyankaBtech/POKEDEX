import { useEffect, useState } from "react";
import axios from 'axios'
import './PokemonList.css';
import Pokemon from "../Pokemon/Pokemon";'./pokemon';


function PokemonList() {

    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const POKEDEX_URL = 'https://pokeapi.co/api/v2/pokemon';

    async function downloadPokemons() {
        const response = await axios.get(POKEDEX_URL); // this download the list of 20 pokemons

        const pokemonResults = response.data.results; // we get the array of pokemons from result

        console.log(response.data);

        // iterating over the array of pokemons, and using their URL, to create an array of promises
        // that will download those 20 pokemons        
        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));

        // passing that promise array to axios.all
        const pokemonData = await axios.all(pokemonResultPromise); // array of 20 pokemons with detailed data
        console.log(pokemonData);
        
        // now iterate on the data of each pokemon, and extract id, name, image, types 
        const pokeListResult = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return {
                    id: pokemon.id,
                    name: pokemon.name,
                    image: pokemon.sprites.other.dream_world.front_default,
                    types: pokeData.types,
                }
        });
        console.log(pokeListResult);
        setPokemonList(pokeListResult);

        setIsLoading(false);
    }

    //useEffect(fn, Array)
    useEffect(() => {
        downloadPokemons();
    }, []);
    
    return(
        <div className="pokemon-list-wrapper">
        <div>Pokemon List</div>
        { (isLoading) ? "Loading..." :
         pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} />) }
        </div>
    )    
}

export default PokemonList;