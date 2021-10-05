import {useContext} from "react";

//Context
import ShowsContext from '../context/shows/showsContext';

//Components
import SearchBar from "../components/SearchBar";
import ListItem from "../components/ListItem";
import Spinner from "../components/Spinner";

const HomePage = () => {
    const showContext = useContext(ShowsContext);
    const {loading,shows} = showContext;
    return(
        <div className="homepage">
            <SearchBar/>
            {loading ? (
                <Spinner/>
                ) : (
                <div className="homepage__list">
                    {shows.map(item => <ListItem
                        key={item.show.id}
                        id={item.show.id}
                        image={item.show.image ? item.show.image.medium : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}
                        name={item.show.name}
                        rating={item.show.rating.average ? item.show.rating.average : "No rating"}
                    />
                    )}
                </div>
            )}
        </div>
    );
};

export default HomePage;