function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityName = document.querySelector("#current-city");
  
  let temperature = response.data.temperature.current;

  cityName.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
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

let form = document.querySelector("#search-form");
form.addEventListener("submit", displayCity);

showTemperature("Paris");
