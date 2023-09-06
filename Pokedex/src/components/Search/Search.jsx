// Import css
import './Search.css';

function Search() {
    return (
        <div className='search-wrapper'>
        <input 
            type="text"
            id="pokemon-name-search"
            placeholder="Pokemon name...."
        />
        </div>
    )

}

export default Search;