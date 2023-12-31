import './PokemonList.css';

import usePokemonList from "../../hooks/usePokemonList";
import Pokemon from "../Pokemon/Pokemon";

function PokemonList() {
    
    // contains UI logic
    const [ pokemonListState, setPokemonListState ] = usePokemonList('https://pokeapi.co/api/v2/pokemon')
    
    return(
        <div className="pokemon-list-wrapper">
       
       <div className="pokemon-wrappper">
            { (pokemonListState.isLoading) ? "Loading..." :
             pokemonListState.pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />) }
       </div>

       <div className="controls">
           <button disabled={pokemonListState.prevUrl == null} onClick={() => {
            const urlToSet = pokemonListState.prevUrl;
            setPokemonListState({ ...pokemonListState, pokedexUrl: urlToSet})
           }} >Prev</button>

           <button disabled={pokemonListState.nextUrl == null} onClick={() => {
            const urlToSet = pokemonListState.nextUrl;
            setPokemonListState({ ...pokemonListState, pokedexUrl: urlToSet})
           }} >Next</button>
       </div>
        </div>
    )    
}

export default PokemonList;