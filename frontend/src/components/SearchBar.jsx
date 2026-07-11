import "../styles/searchBar.css";

function SearchBar({ value, onChange, placeholder }) {

    return (

        <input

            className="search-box"

            value={value}

            onChange={onChange}

            placeholder={placeholder}

        />

    );

}

export default SearchBar;