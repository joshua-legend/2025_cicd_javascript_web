const APIKEY = "b3901f4db8f339495bfb558819b7ed00";

const locationCity = {
  bupyeong: {
    lat: 37.489,
    long: 126.723,
  },
  bern: {
    lat: 46.948,
    long: 7.447,
  },
  wellington: {
    lat: -41.286,
    long: 174.776,
  },
  tashkent: {
    lat: 41.299,
    long: 69.24,
  },
  tokyo: {
    lat: 35.689,
    long: 139.692,
  },
  losAngeles: {
    lat: 34.052,
    long: -118.244,
  },
  london: {
    lat: 51.507,
    long: -0.128,
  },
};

const weatherImage = {
  Clear: "images/sunny.jpg",
  Clouds: "images/cloudy.jpg",
  Rain: "images/rainy.jpg",
  Snow: "images/snow.jpg",
};

const getWeatherCity = (city) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${locationCity[city].lat}&lon=${locationCity[city].long}&appid=${APIKEY}`)
    .then((res) => res.json())
    .then((v) => {
      const weather = v.weather[0].main;
      console.log(`weather:${weather}`);
      document.body.style.backgroundImage = `url("${weatherImage[weather]}")`;
    });
};
getWeatherCity("bupyeong");

const bupyeongBtn = document.querySelector("#bupyeong");
const bernBtn = document.querySelector("#bern");
const wellingtonBtn = document.querySelector("#wellington");
const tashkentBtn = document.querySelector("#tashkent");
const tokyoBtn = document.querySelector("#tokyo");
const losAngelesBtn = document.querySelector("#losAngeles");
const londonBtn = document.querySelector("#london");

const koreaTime = document.querySelector("#koreaTime");
const foreignTime = document.querySelector("#foreignTime");

setInterval(() => {
  koreaTime.innerText = `한국시간:` + new Date().toLocaleTimeString();
}, 1000);

let foreignTimeInterval = setInterval(() => {
  foreignTime.innerText = `부평시간:` + new Date().toLocaleTimeString();
}, 1000);

bupyeongBtn.addEventListener("click", () => {
  getWeatherCity("bupyeong");
});
bernBtn.addEventListener("click", () => {
  getWeatherCity("bern");
  clearInterval(foreignTimeInterval);
  foreignTimeInterval = setInterval(() => {
    foreignTime.innerText = `베른시간:` + new Date().toLocaleTimeString();
  }, 1000);
});
wellingtonBtn.addEventListener("click", () => {
  getWeatherCity("wellington");
  clearInterval(foreignTimeInterval);
  foreignTimeInterval = setInterval(() => {
    foreignTime.innerText = `웰링턴시간:` + new Date().toLocaleTimeString();
  }, 1000);
});
tashkentBtn.addEventListener("click", () => {
  getWeatherCity("tashkent");
  clearInterval(foreignTimeInterval);
  foreignTimeInterval = setInterval(() => {
    foreignTime.innerText = `타슈켄트시간:` + new Date().toLocaleTimeString();
  }, 1000);
});
tokyoBtn.addEventListener("click", () => {
  getWeatherCity("tokyo");
  clearInterval(foreignTimeInterval);
  foreignTimeInterval = setInterval(() => {
    foreignTime.innerText = `도쿄시간:` + new Date().toLocaleTimeString();
  }, 1000);
});
losAngelesBtn.addEventListener("click", () => {
  getWeatherCity("losAngeles");
  clearInterval(foreignTimeInterval);
  foreignTimeInterval = setInterval(() => {
    foreignTime.innerText = `LA시간:` + new Date().toLocaleTimeString();
  }, 1000);
});
londonBtn.addEventListener("click", () => {
  getWeatherCity("london");
  clearInterval(foreignTimeInterval);
  foreignTimeInterval = setInterval(() => {
    foreignTime.innerText = `런던시간:` + new Date().toLocaleTimeString();
  }, 1000);
});
