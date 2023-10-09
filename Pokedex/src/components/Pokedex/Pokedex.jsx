import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";

// Import css
import './Pokedex.css'

function Pokedex() {
    return (
        <div className="pokedex-wrapper">
        <h1 id="pokedex-heading">POKEDEX</h1>
        <Search/>
        <PokemonList/>
        </div>
    )

}

export default Pokedex;