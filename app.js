var searchButton = document.querySelector(".sbtn");
const url1 = "https://api.openweathermap.org/data/2.5/weather?q=";
var searchBox = document.querySelector(".search input");
const url2 = "&appid=b48cd167f07b16bdb751bf1eaf89b818&units=metric";

async function checkWeather(city) {
    const response = await fetch(url1 + city + url2);
    var data = await response.json();

    console.log(data);
    // console.log(data.weather.main);

    document.querySelector(".city").innerHTML = data.weather[0].main;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    // Change the weather icon based on the weather conditions
    const weatherCondition = data.weather[0].main.toLowerCase();
    console.log(weatherCondition)
    const weatherIcon = document.querySelector(".badal");

    if (weatherCondition.includes("clouds")) {
        weatherIcon.src = "images/clouds.png";
    } else if (weatherCondition.includes("rain")) {
        weatherIcon.src = "images/rain.png";
    } else if (weatherCondition.includes("clear")) {
        weatherIcon.src = "images/clear.png";
    } else if (weatherCondition.includes("snow")) {
        weatherIcon.src = "images/snow.png";
    } else if (weatherCondition.includes("mist") || weatherCondition.includes("fog")) {
        weatherIcon.src = "images/fog.png";
    } else {
        weatherIcon.src = "images/default.png"; // Default image if no specific condition matches
    }
}

searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
