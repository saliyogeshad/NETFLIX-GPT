import { useSelector } from "react-redux";

export default function VideoTitle({ title, overview }) {
    const trailerVideo = useSelector(store=>store.movies?.trailerVideo)

    return (
        <div className=" mx-12 my-65 absolute ">
            <h1 className="text-5xl font-bold text-white mb-4 textShadow">{title}</h1>
            <p className="text-lg text-gray-200 w-1/3 textShadow">{overview}</p>  
            <div className="flex my-4">
                <button className=" text-black bg-gray-100 flex items-center hover:opacity-50 " > 
                    <span className="text-4xl mr-1">▶</span> PLAY</button>
                <button className=" bg-gray-700 mx-3  opacity-70 text-white hover:opacity-50 " >ⓘ More Info</button>    
            </div>
        </div>
    );
}