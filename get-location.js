default function getWeatherData() {
  let coords = {
    lat: String | Number,
    lon: String | Number,
  };
  
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((pos) => {
        coords.lat = pos.coords.latitude;
        coords.lon = pos.coords.longitude;
        resolve(coords);
        if (!pos.coords) {
          reject(new Error("Error al obteber la geolocalización"));
        }
      });
    });
  }
}
