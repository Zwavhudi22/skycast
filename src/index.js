function refreshWeather(response) {
  console.log(response.data.temperature.current);
}

function showTemperature(city) {
  let apiKey = "t39a377fcb5bac04bc0ecf418e394foa";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(refreshWeather);
}

function displayCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#current-city");
  let city = document.querySelector("#search-input");
  cityName.innerHTML = city.value;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", displayCity);
