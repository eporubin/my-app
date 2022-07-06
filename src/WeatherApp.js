import React, { useState } from "react";
import axios from "axios";

export default function WeatherApp() {
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState(undefined);

  async function handleSubmit(event) {
    event.preventDefault();
    if (searchTerm !== "") {
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=2120c535876391f18db8ca2cc1fdc54e&units=metric`;
      const response = await axios.get(apiUrl);
      setWeatherData(response);
    }
  }
  function recordSearchTerm(event) {
    setSearchTerm(event.target.value);
  }
  return (
    <div className="SearchEngine">
      <form>
        <input
          placeholder="Type something"
          className="p-1 m-2"
          type="search"
          onChange={recordSearchTerm}
        ></input>
        <button
          type="submit"
          className="btn btn-success p-2"
          onClick={handleSubmit}
        >
          Search
        </button>
        <button
          type="submit"
          className="btn btn-primary p-2"
        >
          Current
        </button>
      </form>
      <div>
        <h4>
          {weatherData && (
            <ul>
              <li> Temperature: {Math.round(weatherData.data.main.temp)}°C </li>
              <li>Decription: {weatherData.data.weather[0].description}</li>
              <li>Humidity: {weatherData.data.main.humidity}%</li>
              <li> Wind: {weatherData.data.wind.speed} km/h</li>
              <li>
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}@2x.png`}
                  alt={weatherData.data.weather[0].description}
                />
              </li>
            </ul>
          )}
          {!weatherData && <p>Please enter a city</p>}
        </h4>
      </div>
    </div>
  );
}
