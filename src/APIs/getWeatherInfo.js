import axios from 'axios';
import { geocodeCity } from '../helpers/geocodeAddress';


export default async function getWeatherInfo(city) {
    let weatherAPI = import.meta.env.VITE_API_URL;
    let key = import.meta.env.VITE_API_KEY;

    let coordinates, lat, lon;
    // find coordinates
    try {
        coordinates = await geocodeCity(city, import.meta.env.VITE_GOOGLE_MAPS_KEY);  

        lat = coordinates.lat;
        lon = coordinates.lng;  
    } catch (error) {
        console.error("Geocoding failed:", error.message);
    }
    
    console.log(weatherAPI, key);

    // call the weather API
    try {
            const response = await axios.get(weatherAPI,{
            params: {
                lat: lat,
                lon: lon,
                appid: key,
                units: "metric"
            }
        })
    console.log(response.data);
        return response.data;
    }
    catch (error) {
            console.log(error);
    }   
}