const searchField = document.querySelector(".search-field");
const searchBtn = document.querySelector(".fa-solid");

const apiKey = "0d88af26058b19e927fbcefec9c9f00f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function weatherCheck(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status == 404 || searchField.value == "") {

        alert("Input a valid city name or check your spelling please.");

    } else {
        const data = await response.json();

    console.log(data);
    
    if (data.weather[0].main == "Clear") {
        document.querySelector(".weather-icon").src = "images/clear.png";
    } 
    else if (data.weather[0].main == "Clouds") {
        document.querySelector(".weather-icon").src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        document.querySelector(".weather-icon").src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        document.querySelector(".weather-icon").src = "images/mist.png";
    }
    else if (data.weather[0].main == "Rain") {
        document.querySelector(".weather-icon").src = "images/rain.png";
    }
    else if (data.weather[0].main == "Snow") {
        document.querySelector(".weather-icon").src = "images/snow.png";
    }
    else if (data.weather[0].main == "Fog") {
        document.querySelector(".weather-icon").src = "images/fog.png";
    }

    document.querySelector(".description").innerHTML = data.weather[0].description;
    document.querySelector(".weather-temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".country-name").innerHTML = data.sys.country + ".";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/H";
    }
    
}

searchBtn.addEventListener("click", () => {
    weatherCheck(searchField.value);
});

searchField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        weatherCheck(searchField.value);
    }
});