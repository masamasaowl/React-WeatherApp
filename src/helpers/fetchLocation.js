// ================== Browser Geolocation API ===================

export default function fetchLocation(){
    // the following method triggers a popup requesting for location permission
    // it has three parameters which we treat as 3 functions
    // navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);

    return new Promise((resolve, reject) => {
        // we return the location val as a promise
        navigator.geolocation.getCurrentPosition(

          // function 1
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            resolve(userLocation);
          },

          //  function 2 
          (error) => {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                console.error("Location access denied by user");
                break;
              case error.POSITION_UNAVAILABLE:
                console.error("Location information is unavailable");
                break;
              case error.TIMEOUT:
                console.error("Location request timed out");
                break;
            }
            reject(error);
          },

          // function 3 (options)  
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
          }
        );
      });
}
