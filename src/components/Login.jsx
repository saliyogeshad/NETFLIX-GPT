import React from "react"
import Header from "./Header"
import netflixbanner from "../assets/images/netflixbanner.jpg"

export default function Login(){
    const [isSignInForm , setIsSignInForm] = React.useState(true)

    function toggleSignInForm(){
            setIsSignInForm(!isSignInForm)
    }

    return (
        <div className="  h-screen"> 
            <div className="absolute top-0 left-0  z-10">
                <Header />
            </div>
            
             <img src={netflixbanner} alt="Netflix Banner"
             className="absolute inset-0 w-full h-full object-cover opacity-70" />
             
            <form className="absolute z-20 p-12 my-46 mx-auto right-0 left-0
                             w-3/12 bg-black/70 text-white">  

                <h1 className="font-medium my-4 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm &&  <input type="name" placeholder="Full Name" className="p-2 my-4 w-full"/>} 

                <input type="text" placeholder="Email Address" className="p-2 my-4 w-full"/>

                <input type="password" placeholder="Password" className="p-2 my-4 w-full"/>

                <button className="p-4 my-6 w-full bg-red-700 text-white">{isSignInForm ? "Sign In" : "Sign Up"}</button> 

                <p onClick={toggleSignInForm} className="cursor-pointer hover:underline"> 
                    { isSignInForm?"New here? Signup Now !":"Already Resgistered? SignIn Now!"}</p>  

            </form>
        </div>

)

}