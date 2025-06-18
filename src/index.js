function displayCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input");
  let cityName = document.querySelector("#current-city");
  cityName.innerHTML = city.value;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", displayCity);