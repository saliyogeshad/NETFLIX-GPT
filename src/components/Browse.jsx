import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


export default function Browse(){ 
    
    useNowPlayingMovies() 
   
    return <div className="bg-white h-screen w-screen ">
               <div className=" "> 
                    <Header/>
                    <MainContainer/>
                    <SecondaryContainer/>
               
               </div> 
            </div>
    
}