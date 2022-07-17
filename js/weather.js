//API : https://home.openweathermap.org/
//API는 다른 서버와 이야기 하는 것
API_KEY = "c3a1f0b3eab8acc2c1bf9a2e4ec03141"
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    //$units=metric
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / `;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

// argument 하나는 모든 게 잘 될때, 하나는 에러가 났을 때
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);