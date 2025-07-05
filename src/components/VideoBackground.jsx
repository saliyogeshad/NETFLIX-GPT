import { useSelector } from "react-redux"
import useMovieTrailer from "../hooks/useMovieTrailer";


export default function VideoBackground( {movieId} ) {
    const trailerVideo = useSelector(store=>store.movies?.trailerVideo)
    
   useMovieTrailer(movieId)

    return (
        <div className="overflow-hidden w-full h-screen flex justify-center items-center ">
            <iframe 
            className="w-[120%] h-[120%]  object-cover top-[-5%] left-[-5%] bottom-[-5%] right-[-5%] aspect-video pointer-events-none " 
            //add pointer-events-none above
            src= {`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1`} //&mute=1 add this to auto play
            title="YouTube video player"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  
            >

            </iframe>
        </div>
    );
}