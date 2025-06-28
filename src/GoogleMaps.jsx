import './GoogleMaps.css'

import { useEffect, useRef } from "react";
// import { geocodeCity } from "./helpers/geocodeAddress";

// Loader is made by google which calls the google API whenever we wish to access it 
import { Loader } from "@googlemaps/js-api-loader";


export default function GoogleMaps({coordinates}){

  // useRef helps us access our DOM directly from react, here it will create a div for our map
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY, 
      // latest version
      version: "weekly",

      // optional to add markers etc.
      libraries: ["marker"],    
    });


    // this is the call to the API
    loader

      .load()

      .then((google) => {
        // a default center to avoid error
        const defaultCenter = { lat: 28.6139, lng: 77.2090 };

      const map = new google.maps.Map(mapRef.current, {
        center: coordinates || defaultCenter,
        zoom: 10,

        // markerID for advanced marker
        mapId:import.meta.env.VITE_MAP_ID
      });

      // add marker
      const { AdvancedMarkerElement } = google.maps.marker;

      const marker = new AdvancedMarkerElement({
        map,
        position: coordinates || defaultCenter,
        title: "You are here!",
      });
      });
  }, []);

  return (
    <div>
      <div
      // this is the div we were referring to
        ref={mapRef}
        style={{
          width: "65vw",
          height: "500px",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};

