export const geocodeCity = async (cityName, apiKey) => {
  // avoid empty input errors
  if (!cityName) return null;

  const response = await fetch(

    // the encodeURIComponent ensures that the spaces in the request is safe
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      cityName
    )}&key=${apiKey}`
  );

  // return json
  const data = await response.json();

  if (data.status === "OK") {
    const location = data.results[0].geometry.location;
    console.log(location);
    return location; // { lat, lng }
  } else {
    throw new Error("City not found");
  }
};