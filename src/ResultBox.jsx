import GoogleMaps from './GoogleMaps'
import { geocodeCity } from './helpers/geocodeAddress';
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
    return <div>🔄 Fetching map...</div>;
  }

  return (
    <div className='ResultBox'>
      {info && info.main && (
        <div className='weatherDetails'>

          <p>{city}</p>

          <p className='temp'> {Math.floor(info.main.temp - 273.5)}°C</p>

          <p>{info.weather[0].description}</p>

          <p>{info.wind.speed} km/h</p>



          <p> Humidity: {info.main.humidity}%</p>
          <p> Location: {info.name}</p>
        </div>
      )}
      <GoogleMaps coordinates={coordinates} />

    </div>
  );
}