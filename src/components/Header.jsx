import netflixlogo from "../assets/images/NETFLIX-logo.png"

export default function Header(){

    return (
        <div className=" bg-gradient-to-b from-black ">
            <img className="w-45 z-10 p-2" 
                src={netflixlogo} alt="Netflix Logo" /> 
        </div>

        
        )
}