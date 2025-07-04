import MovieCard from "./MovieCard";

export default function MovieList({title , movies}){
    
    return (
        <div className="p-6" >
            <h1 className="text-3xl font-bold py-1 textShadow " >{title}</h1>
            <div className="flex overflow-x-scroll bg-transparent">
                <div className="flex bg-transparent">
                    {movies&&movies.map(movie=>
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />) }
                    
                </div>
            </div>
        </div>
    )
}