import { useEffect, useRef } from "react";

// Loader is made by google which calls the google API whenever we wish to access it 
import { Loader } from "@googlemaps/js-api-loader";
import { Marker } from "@react-google-maps/api";

const SimpleMapLoader = () => {

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
        // Initialize map once API is loaded async
        new google.maps.Map(mapRef.current, {
          center: { lat: 28.6139, lng: 77.2090 },
          zoom: 10,
        });


        const { AdvancedMarkerElement } = google.maps.marker;
        const marker = new AdvancedMarkerElement({
          map,
          position: { lat: 28.6139, lng: 77.2090 },
          title: "Delhi!",
        });

      })

      .catch((e) => {
        console.error("Error loading Google Maps: ", e);
      });

  }, []);

  return (
    <div>
      <div
      // this is the div we were referring to
        ref={mapRef}
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};

export default SimpleMapLoader;