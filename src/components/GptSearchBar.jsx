import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";



export default function GptSearchBar() {

    const langKey = useSelector((store) => store.config.lang);

    return (
        <div className="pt-[20%] flex items-center justify-center bg-transparent">
            <form className="flex items-center justify-center  h-18 w-1/2 bg-gray-700 rounded-4xl">
                <input
                    type="text"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                    className="w-2/3 p-2 border border-gray-500  focus:ring-blue-500 rounded-4xl "
                />
                <button className="ml-2 p-2 bg-blue-600 text-white rounded-4xl hover:bg-blue-700">
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
}