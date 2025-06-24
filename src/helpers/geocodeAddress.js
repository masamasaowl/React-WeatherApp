export const geocodeCity = async (cityName, apiKey) => {
  if (!cityName) return null;

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      cityName
    )}&key=${apiKey}`
  );

  const data = await response.json();

  if (data.status === "OK") {
    const location = data.results[0].geometry.location;
    return location; // { lat, lng }
  } else {
    throw new Error("City not found");
  }
};