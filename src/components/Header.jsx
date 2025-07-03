import netflixlogo from "../assets/images/NETFLIX-logo.png"
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"; 
import { useSelector } from "react-redux";


export default function Header(){
    
    const user = useSelector((store) =>store.user)   
    console.log("Redux user:", user);
    const navigate = useNavigate()  
    
    function handleSignOut(){

        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/")
        }).catch((error) => {
        // An error happened.
            navigate("/error")  
        });
    }

    return (
        <div className="w-screen bg-gradient-to-b from-black flex justify-between">
            <img className="w-45 z-10 -mt-0 p-0" 
                src={netflixlogo} alt="Netflix Logo" />

         
            {user&&(<div className="flex">
            <img className="h-15 w15 my-15 mx-2"
                src={ user?.photoURL }
                    alt="profile icon " />                 

            <button className="bg-red-500 h-15 w-30 my-15 mx-2 font-bold" onClick={handleSignOut}>
                     Sign Out</button>                     

            </div>)}
        
        </div>
        )
}