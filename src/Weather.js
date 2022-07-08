import React, {useEffect, useState} from "react";
import "./Weather.css";
import axios from "axios";
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";
export default function Weather() {
    
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState(undefined);
  async function handleSubmit(event) {
    event.preventDefault();
    if (searchTerm !== "") {
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=2120c535876391f18db8ca2cc1fdc54e&units=metric`;
      const response = await axios.get(apiUrl);
      setWeatherData(response);
      console.log(setWeatherData);
    }
  }
  async function handleCurrent(event) {
    event.preventDefault();
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=2120c535876391f18db8ca2cc1fdc54e&units=metric`;
      const response = await axios.get(apiUrl);
      setWeatherData(response);
  }
 async function initializeMyAwesomeApp() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=2120c535876391f18db8ca2cc1fdc54e&units=metric`;
      const response = await axios.get(apiUrl);
      setWeatherData(response);
  };

  useEffect(() => {
    initializeMyAwesomeApp()
  }, [])

  function recordSearchTerm(event) {
    setSearchTerm(event.target.value);
  }
  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row g-0">
            <div className="col-sm-12">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for a city" aria-label="Enter a city name" onChange={recordSearchTerm}/>
                    <button className="btn btn-info" type="button" onClick={handleSubmit}>Search</button>
                    <button className="btn btn-warning" type="button" onClick={handleCurrent}>Current</button>
                </div>
            </div>
        </div>
      </form>
      <div>      
          {weatherData &&( 
               <div className="container-fluid">
                <h1>{weatherData.data.name} </h1>
                
                <FormattedDate />
               

               <div className="row">
               <div className="col-sm-6">
                        <div className="clearfix weather-temperature">
                            <img
                                src={`http://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}@2x.png`}
                                alt={weatherData.data.weather[0].description}
                                className="float-left"
                            />
                            <div className="float-left">
                            <b>{Math.round(weatherData.data.main.temp)}</b>
                                <span className="units">
                                <a href="/">°C</a> | <a href="/">°F</a>
                                </span>
                            </div>
                        </div>
                   </div>
                   <div className="col-sm-6 d-flex justify-content-center">
                        <div className="details mt-4">
                        <h4 className="text-capitalize"> {weatherData.data.weather[0].description} </h4>
                            <h4>Humidity: {weatherData.data.main.humidity}%</h4>
                            <h4>Wind: {weatherData.data.wind.speed} km/h</h4>    
                        </div>
                   </div>
               </div>
           </div>          
          )}
          {!weatherData && <p>Please enter a city</p>}
        </div>
        <Forecast />
    </div>
    );
}