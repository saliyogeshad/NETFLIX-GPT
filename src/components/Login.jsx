import React from "react"
import Header from "./Header"
import { checkValidData  } from "../utils/validate"
import netflixbanner from "../assets/images/netflixbanner.jpg"
import {auth} from "../utils/firebase"
import { createUserWithEmailAndPassword ,  signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"
import seal from "../assets/images/seal.webp"




export default function Login(){

    const [isSignInForm , setIsSignInForm] = React.useState(true)
    const [errorMessage , setErrorMessage] = React.useState(null)
    const dispatch = useDispatch()
    

    function toggleSignInForm(){
            setIsSignInForm(!isSignInForm)
    }

    const name = React.useRef(null)
    const email = React.useRef(null)
    const password = React.useRef(null)
    
    //validate the form data 
    function handleButtonClick(){ 
        const message = checkValidData(email.current.value , password.current.value)
        setErrorMessage(message)
        //this code here returns/ ends the need to move ahead, rather run the function above in a loop
        //until message is null
        //"If message exists (is truthy), then stop here and exit the function."
        // exiting the function means it doesn't run any further code in that function.
        if(message) return ;  

        if(!isSignInForm){
            //SignUP logic
            createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                    displayName: name.current.value,
                     photoURL: seal
                    })
                    .then(() => {
                        // Profile updated!
                        const {uid , email , displayName , photoURL } = auth.currentUser;
                        dispatch(addUser({uid:uid ,
                            email:email ,
                            displayName:displayName ,
                            photoURL:photoURL })
                        )                    
                    })
                    // .catch((error) => {
                    //     // An error occurred
                    //     setErrorMessage(error.message)  
                    // });
                    
                })
                    // Signed up 
                    // // ...
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage( errorCode +" "+errorMessage ) 
                    // ..
                });

        }else{
            //SignIn logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value )
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage("User not Found")
                });
                        }
       
    }



    return (
        <div className="  h-screen"> 
            <div className="absolute top-0 left-0  z-10 ">
                <Header />
            </div>
            
             <img src={netflixbanner} alt="Netflix Banner"
             className="absolute inset-0 w-full h-full object-cover opacity-70" />
             
            <form onSubmit={(e)=>e.preventDefault()}
                className="absolute z-20 p-12 my-46 mx-auto right-0 left-0
                             w-3/12 bg-black/70 text-white">  

                <h1 className="font-medium my-4 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm &&  <input ref={name} type="name" placeholder="Full Name" className="p-2 my-4 w-full"/>} 

                <input ref={email}
                    type="email" placeholder="Email Address" className="p-2 my-4 w-full"/>

                <input ref={password}
                    type="password" placeholder="Password" className="p-2 my-4 w-full"/>

                <p className="text-red-500">{errorMessage}</p>

                <button className="p-4 my-6 w-full bg-red-700 text-white" onClick={handleButtonClick}
                    >{isSignInForm ? "Sign In" : "Sign Up"}</button> 

                <p onClick={toggleSignInForm} className="cursor-pointer hover:underline"> 
                    { isSignInForm?"New here? Signup Now !":"Already Resgistered? SignIn Now!"}</p>  

            </form>
        </div>

)

}