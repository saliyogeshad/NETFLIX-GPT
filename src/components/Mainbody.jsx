import React from "react";
import Login from "./Login"
import Browse from "./Browse"
import { Routes , Route } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser , removeUser} from "../utils/userSlice"



const Mainbody = () =>{
    const dispatch = useDispatch()

    React.useEffect(()=>{
        const auth = getAuth();
                onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in
                    const {uid , email , displayName , photoURL } = user;
                    dispatch(addUser({uid:uid , email:email , displayName:displayName , photoURL:photoURL })) 
                    // ...
                } else {
                    // User is signed out
                    dispatch(removeUser())
                    // ...
                }
                });
    },[])
    
    return ( 
                
        <Routes>
            <Route path="/" element= { <Login/> } /> 
            <Route path="/browse" element={<Browse/>} />
        </Routes>
     
)}
export default Mainbody 