function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityName = document.querySelector("#current-city");
  let description = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let currentDate = document.querySelector("#current-date");
  let date = new Date(response.data.time * 1000);
  let temperature = response.data.temperature.current;
  let iconElement = document.querySelector("#icon");

  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon" />`;
  currentDate.innerHTML = formatDate(date);
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  description.innerHTML = response.data.condition.description;
  cityName.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;

}

function showTemperature(city) {
  let apiKey = "t39a377fcb5bac04bc0ecf418e394foa";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(refreshWeather);
}

function displayCity(event) {
  event.preventDefault();
   let city = document.querySelector("#search-input");

  showTemperature(city.value);
}

function displayForecast() {  
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml + 
      `
      <div class="weather-forecast">
        <div class="weather-temperature-day">${day}</div>
        <div class="weather-temperature-icon">⛅</div>
        <div class="weather-temperatures">
          <div class="weather-temperature">
            <strong>13&deg;</strong>
          </div>
          <div class="weather-temperature">9&deg;</div>
        </div>
      </div>
  `;
});

let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = forecastHtml;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", displayCity);

showTemperature("Thohoyandou");
displayForecast();
