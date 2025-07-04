import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice"; 
import netflixlogo from "../assets/images/NETFLIX-logo.png"
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"; 
import { useSelector } from "react-redux";


export default function Header(){
    
    const user = useSelector((store) =>store.user)   
    const navigate = useNavigate()  
    const dispatch = useDispatch();  
    
    function handleSignOut(){

        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
            navigate("/error")  
        });
    }

    React.useEffect(()=>{
        const auth = getAuth();

        // This listener will be called when the user's sign-in state changes
                const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in
                    const {uid , email , displayName , photoURL } = user;
                    dispatch(addUser({uid:uid , email:email , displayName:displayName , photoURL:photoURL })) 
                    // ...
                    navigate("/browse")
                } else {
                    // User is signed out
                    dispatch(removeUser())
                    // ...
                    navigate("/")
                }
                });

                return ()=> unsubscribe(); // Cleanup the listener on component unmount
    },[])

    return (
        <div className="w-screen bg-gradient-to-b from-black flex justify-between absolute">

            <div className="overflow-hidden">
            <img className="w-45 z-10 -mt-10 h-45 mx-10 object-cover" 
                src={netflixlogo} alt="Netflix Logo" />
            </div>

            {user&&(<div className="flex mx-4 ">
            <img className="h-13 w-13 my-8 mx-2 rounded border border-red-500"
                src={ user?.photoURL }
                    alt="profile icon " />                 

            <button className="bg-red-500 h-15 w-30 my-7 mx-2 font-bold " onClick={handleSignOut}>
                     Sign Out</button>                     

            </div>)}
        
        </div>
        )
}