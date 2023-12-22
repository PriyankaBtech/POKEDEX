import './Pokedex.css'

import { useState } from "react";

import PokemonDetails from "../PokemonDetails/PokemonDetails";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";

function Pokedex() {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className="pokedex-wrapper">
        <Search updateSearchTerm={setSearchTerm}/>
        {(searchTerm.length === 0) ? <PokemonList/> : <PokemonDetails pokemonName={searchTerm}/>}
        </div>
    )
}

export default Pokedex;