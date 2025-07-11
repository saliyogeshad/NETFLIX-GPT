import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


export default function Browse(){ 

     const  showGptSearch  = useSelector((store) => store.gpt.showGptSearch); 
    
    useNowPlayingMovies() 
    usePopularMovies()
   
    return <div className="bg-black ">
               <div className=" "> 
                    <Header/>

                    {showGptSearch?(
                         <GptSearch/>
                    ):(
                    <>
                         <MainContainer/>
                         <SecondaryContainer/>
                    </>
                    )}
               
               </div> 
            </div>
    
}