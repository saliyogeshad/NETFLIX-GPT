import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import netflixbanner from "../assets/images/netflixbanner.jpg"

export default function GptSearch(){

    return(
        <div className="">
            <img src={netflixbanner} alt="Netflix Banner"
             className="absolute inset-0 w-full h-full object-cover opacity-40 z-1" />
            <div className=" z-5 relative">
                <GptSearchBar/>
                <GptMovieSuggestions /> 
            </div>
        </div>
    )
}