import React from "react";
import WeatherIcon from 'react-icons-weather';

export default function ForecastDay(props){
    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["SUN", "MON","TUE", "WED", "THU", "FRI", "SAT"];
        return days[day];
    }
    return(
        <div className="col-sm-2">
        <div className="ForecastDay">
            <div className="row">
                <div className="col-12">
                    <div className="week-day-label">{day()}</div>
                </div>
            </div>
            <div className="row">
                 <div className="col-12">
                    <div className="icon-day-label">
                        <WeatherIcon name="owm"  iconId={(props.data.weather[0].id).toString()} flip="horizontal" rotate="90" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="week-day-temps">
                        <span className="max-temp">{Math.round(props.data.temp.max)}°C </span> 
                        <span className="min-temp">{Math.round(props.data.temp.min)}°C </span>
                    </div>
                </div>
            </div>
        </div>
        </div>
)
    

}