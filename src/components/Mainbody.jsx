import { Routes , Route } from 'react-router-dom'
import Browse from "./Browse"
import Login from "./Login"

const Mainbody = () =>{
    return ( 
                
        <Routes>
            <Route path="/" element= { <Login/> } /> 
            <Route path="/browse" element={<Browse/>} />
        </Routes>
     
)}
export default Mainbody 