
import Search from "../Search/Search";

// Import css
import './Pokedex.css'

function Pokedex() {
    return (
        <div className="pokedex-wrapper">
        <h1 id="pokedex-heading">POKEDEX</h1>
        <Search/>
        </div>
    )

}

export default Pokedex;