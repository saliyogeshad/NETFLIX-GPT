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
