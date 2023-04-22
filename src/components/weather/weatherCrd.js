import React, { useEffect } from 'react'
import { useState } from 'react';
const WeatherCrd = ({tempInfo}) => {
    const [weatherState,setWeatherState]=useState("");
const {   temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,country,sunset,}=tempInfo;
    useEffect(()=>{
        if(weathermood){
            switch(weathermood){
                case "clouds":setWeatherState("wi-day-cloudy");
                break;
                case "Haze":setWeatherState("wi-fog");
                break;
                case "clear":setWeatherState("wi-day-sunny");
                break;
                default:
                setWeatherState("wi-day-cloudy");
               
            }
        }
    },[weathermood])
  return (
    <div>
       <article className="widget">
<div className="weatherIcon">
<i className={`wi ${weatherState}`}></i>
</div>
<div className="weatherInfo">
<div className="temperature">
<span>{temp}</span>
</div>
<div className="description">
<div className="place">{name}</div>
<div className='place'>{name}{country}</div>
<div className='place'>{name} {country}</div>
</div>
</div>
<div className='date'>{new Date().toLocaleString()}</div>

        </article>
    </div>
  )
}

export default WeatherCrd
