import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export default function SecondaryContainer() {
    const movies = useSelector((store) => store.movies )
    
    return (
        <div className="z-10 -mt-35 bg-transparent">
            <p>{!movies&&"this is 2nd"}</p>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}  />
            <MovieList title={"Trending"} movies={movies.nowPlayingMovies}  />
            <MovieList title={"Popular"} movies={movies.popularMovies}  />
            <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}  />
            <MovieList title={"Horror"} movies={movies.nowPlayingMovies}  />

        </div>
    );
}