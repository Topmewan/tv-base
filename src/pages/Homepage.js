import SearchBar from "../components/SearchBar";
import {useContext} from "react";
import ShowsContext from '../context/shows/showsContext';

const HomePage = () => {
    const showContext = useContext(ShowsContext);
    const {loading,shows} = showContext;
    return(
        <div className="homepage">
            <SearchBar/>
            {loading ? <h2>Loading..</h2> :
                <div>
                    {shows.map(item => (<h3>{item.show.name}</h3>))}
                </div>
            }
        </div>
    );
};

export default HomePage;