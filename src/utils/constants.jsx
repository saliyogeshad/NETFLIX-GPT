export const logo= "just empty for now" 
export const API_OPTIONS = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTFiOTViNDRiYjQ1N2MxNzcxYmZkZjZiZGE5YzExOSIsIm5iZiI6MTc1MTUzNjc2OC4xNzkwMDAxLCJzdWIiOiI2ODY2NTQ4MGRhZDYyY2RiZWFhYzY0ODciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.XK6ZK0-RZoauXbliuVWJHQIQ1nUlJ2rXjF9BOQd3mUg'
                }
                };
                
export function randonIndex(variable){
    return  Math.floor(Math.random() * variable.length) 
}

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"

export const SearchIcon = () => {
        return (
            <svg width="40" height="40" viewBox="0 0 100 100" className="">
            <circle
                cx="40"
                cy="40"
                r="20"
                stroke="#333"
                strokeWidth="5"
                fill="none"
                className="search-circle"
            />
            <line
                x1="55"
                y1="55"
                x2="80"
                y2="80"
                stroke="#333"
                strokeWidth="5"
                className="search-line "
            />
            </svg>
        );
        };


export const SUPPORTED_LANGUAGES = [
    {identifier: 'en', name: 'English'},
    {identifier: 'hi', name: 'Hindi'},
    {identifier: 'es', name: 'Spanish'},
]
