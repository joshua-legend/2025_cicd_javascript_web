const APIKEY = "b3901f4db8f339495bfb558819b7ed00";
const lat = 37.489;
const long = 126.723;
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`)
  .then((res) => res.json())
  .then((v) => console.log(v));
