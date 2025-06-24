import axios from 'axios';


export default async function getWeatherInfo() {
    let weatherAPI = import.meta.env.VITE_API_URL;
    let key = import.meta.env.VITE_API_KEY;

    // console.log(geocodeAddress(city));

    let lat = 18.5287;
    let lon = 73.8536;
    
    console.log(weatherAPI, key);
        // const response = await fetch(`${weatherAPI}?lat=${lat}&lon=${lon}&appid=${key}`);
    try {
            const response = await axios.get(weatherAPI,{
            params: {
                lat: lat,
                lon: lon,
                appid: key
            }
        })
        console.log("temp ('C):",response.data.main.temp-273.15);
    }
    catch (error) {
            console.log(error);
    }   
}