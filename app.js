var searchButton = document.querySelector(".sbtn");
var searchBox = document.querySelector(".search");
const url1 = "https://api.openweathermap.org/data/2.5/weather?q=";
const url2 = "&appid=b48cd167f07b16bdb751bf1eaf89b818&units=metric";

async function checkWeather(city) {
    try {
        const response = await fetch(url1 + city + url2);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        console.log(data);

        document.querySelector("#city h1").innerText = data.name;
        document.querySelector("#temp").innerText = Math.round(data.main.temp) + "°C";
        document.querySelector("#condition").innerText = data.weather[0].main;
        document.querySelector("#highlow").innerText = `H: ${Math.round(data.main.temp_max)}° L: ${Math.round(data.main.temp_min)}°`;

        // Change the background GIF based on the weather conditions
        const weatherCondition = data.weather[0].main.toLowerCase();
        console.log(weatherCondition);

        let backgroundGif;
        if (weatherCondition.includes("clouds")) {
            backgroundGif = "images/drizzle.gif";
        } else if (weatherCondition.includes("rain")) {
            backgroundGif = "images/rain.gif";
        } else if (weatherCondition.includes("clear")) {
            backgroundGif = "images/clear1.gif";
        } else if (weatherCondition.includes("snow")) {
            backgroundGif = "images/snow.gif";
        } else if (weatherCondition.includes("mist") || weatherCondition.includes("fog")) {
            backgroundGif = "images/fog.gif";
        } else if (weatherCondition.includes("smoke")) {
            backgroundGif = "images/smoke1.gif";
        } else {
            backgroundGif = "images/default.gif";
        }

        document.querySelector(".weather-app").style.backgroundImage = `url('${backgroundGif}')`;
    } catch (error) {
        alert(error.message);
    }
}

searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
