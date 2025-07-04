import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


export default function Browse(){ 
    
    useNowPlayingMovies() 
    usePopularMovies()
   
    return <div className="bg-black h-full w-full ">
               <div className=" "> 
                    <Header/>
                    <MainContainer/>
                    <SecondaryContainer/>
               
               </div> 
            </div>
    
}