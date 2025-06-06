import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/moviecard";

function Favorites (){
const {favorites}= useMovieContext();

if(favorites){
    return(
    <div className="favorites">
        <h2>Your Favorite movies</h2>
    <div className="movies-grid">
        {favorites.map((movie) =>( 
          <MovieCard movie={movie} key={movie.id}/> ))}
    </div>
    </div>
    );
}


    return(


        <div className="favorites-empty">
            <h2>No favs yet!</h2>
            <p>Start adding movies to your favorites</p>
        </div>



    )
}

export default Favorites;