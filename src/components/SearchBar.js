import {useState} from "react";
import Alert from "./Alert";


function SearchBar() {
    const [search,setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
    }
    return (
        <div className="searchbar">
            <Alert message="Please enter something" type="danger"/>
            <form className="searchbar__form">
                <input
                    type="text"
                    placeholder="Search for TV Show"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    className="btn btn-block"
                    onClick={handleSearch}>
                    Search</button>
            </form>

        </div>


    );
}

export default SearchBar;