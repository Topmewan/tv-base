import { useState,useContext } from "react";
import ShowsContext from '../context/shows/showsContext';

import Alert from "./Alert";


function SearchBar() {
    const [searchTerm,setSearchTerm] = useState("");

    const showsContext = useContext(ShowsContext);
    const {searchShows} = showsContext;



    const handleSearch = (e) => {
        e.preventDefault();

        searchShows(searchTerm);

    };

    return (
        <div className="searchbar">
            <Alert message="Please enter something" type="danger"/>
            <form className="searchbar__form">
                <input
                    type="text"
                    placeholder="Search for TV Show"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    className="btn btn-block"
                    onClick={handleSearch}>
                    Search</button>
            </form>

        </div>


    );
};

export default SearchBar;