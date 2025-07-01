import GoogleMaps from './GoogleMaps'
import { geocodeCity } from './helpers/geocodeAddress';
import Loading from './Loading';
import './ResultBox.css'
import { useState, useEffect } from 'react';

export default function ResultBox({city, info}) {
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchCoordinates = async () => {
      try {
        const coords = await geocodeCity(city, import.meta.env.VITE_GOOGLE_MAPS_KEY);
        console.log(coords);
        setCoordinates(coords);
        setError(null);
      } catch (err) {
        console.error("Geocoding failed:", err.message);
        setError("City not found");
        setCoordinates(null);
      }
    };

    fetchCoordinates();
  }, [city]);

  if (error) {
    return <div style={{ color: "red" }}>❌ {error}</div>;
  }

  if (!coordinates) {
    return(
      <Loading/>
    );
  }

  return (
    <div className='ResultBox'>

      <p className='search poppins'>Search results for : "{city}"</p>

      {/* if info exists */}
      {info && info.main && (
        <div className='weatherDetails'>
          <p className='weatherToday poppins'>Weather Today in {info.name}</p>

          <div className="temperature">
            <p className='poppins'>Temperature</p>

            <p className='temp poppins'> {Math.floor(info.main.temp)}°C</p>
          </div>


          <div className='feelsLike'>

            <p className='poppins'>Feels like</p>
          
            <p className='temp poppins'> {Math.floor(info.main.feels_like)}°C</p>
          </div>



          <p className='description poppins'>{info.weather[0].description}</p>

          <p>Winds: {info.wind.speed} km/h</p>



          <p> Humidity: {info.main.humidity}%</p>
        </div>
      )}
      <GoogleMaps coordinates={coordinates} />

    </div>
  );
}