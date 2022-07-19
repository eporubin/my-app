import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";



export default function Forecast(props){
   
    let [forecast, setForecast] = useState(null);
    
    
    async function initializeForecast(){
        let apiKey = "2120c535876391f18db8ca2cc1fdc54e";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        const response = await axios.get(apiUrl);
        setForecast(response.data.daily);
    }
    useEffect(() => {
        initializeForecast()
      }, [props.coordinates]);
 
    return(
        <div className="Forecast">
            <div className="container">
                <div className="row">
                    {forecast &&
                        forecast.map(function (dailyForecast, index){
                            if(index > 0 && index < 7){
                                return(
                                    <ForecastDay key={index} data={dailyForecast}  />
                                )
                            }
                        })
                    }
                    {!forecast && <p>Forecast Loading...</p>}
                </div>
            </div>
        </div>
    )
}