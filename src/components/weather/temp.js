import React ,{useEffect, useState} from 'react';
import "./style.css";
import WeatherCrd from './weatherCrd';
const Temp = () => {
    const [searchValue,setSearchValue]=useState("pune");
    const [tempInfo,setTempInfo]=useState({});
    const getWeather=async()=>{
      try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=48531c4045e2ca9bd3bc41f6736190c3`;
      const res=await fetch(url);
      const data =await res.json();
      const {temp,humidity,pressure}=data.main;
      const {main:weathermood}=data.weather[0];
      const {name}=data;
      const {speed}=data.wind;
      const {country,sunset}=data.sys;
      
      const myNewWeatherInfo={
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,country,sunset,
      };
      setTempInfo(myNewWeatherInfo);
      }
      catch(error){
        console.log(error);
      }
    };
    useEffect(()=>{
      getWeather();
    },[]);
  return (
    <>
    <div className="wrap">

        <div className="search">
            <input type="search" placeholder='search...'  id="search" className="searchTerm"
            value={searchValue}  onChange={(e)=>setSearchValue(e.target.value)}              />
        <button className='searchButton' type="button"  onClick={getWeather}>Search</button>
        </div>
            </div>
       
        
    
<WeatherCrd tempInfo={tempInfo}/>
     </>
  );
};

export default Temp
