export default function VideoTitle({ title, overview }) {
    return (
        <div className=" mx-12 my-65 ">
            <h1 className="text-4xl font-bold text-black mb-4">{title}</h1>
            <p className="text-lg text-gray-800 w-1/3">{overview}</p>  
            <div className="flex my-4">
                <button className=" text-black bg-gray-100 flex items-center " > 
                    <span className="text-4xl mr-1">▶</span> PLAY</button>
                <button className=" bg-gray-500 mx-3 " >ⓘ More Info</button>    
            </div>
        </div>
    );
}