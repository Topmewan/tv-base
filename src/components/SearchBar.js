import {useState} from "react";


function SearchBar() {
    const [search,setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(search)


    }
    return (
        <div className="searchbar">
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