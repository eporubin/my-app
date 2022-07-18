import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";



export default function Forecast(props){
   
    let [forecast, setForecast] = useState(null);
    
    
    async function initializeForecast(){
        let apiKey = "2120c535876391f18db8ca2cc1fdc54e";
        console.log(" props is ", props);
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        const response = await axios.get(apiUrl);
        setForecast(response.data.daily);
        console.log("FOrecast is")
        console.log(response.data.daily);
    }
    useEffect(() => {
        initializeForecast()
      }, [props]);
 
    return(
        <div className="Forecast">
            <div className="container">
                <div className="row">
                    {forecast && <ForecastDay data={forecast[0]} />}
                    {!forecast && <p>Forecast Loading...</p>}
                </div>
            </div>
        </div>
    )
}