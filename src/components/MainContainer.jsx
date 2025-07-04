import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { randonIndex } from "../utils/constants";

export default function MainContainer() {
    const movies = useSelector(store=>store.movies?.nowPlayingMovies)
    if(!movies) return;//this is early return

    const mainMovie = movies[4]

    const { original_title , overview , id} = mainMovie
    return (
        <div className=" ">
            <div className="">
                <VideoTitle title={ original_title } overview={overview } />
                <VideoBackground movieId={id} /> 
            </div>
        </div>
    );
}