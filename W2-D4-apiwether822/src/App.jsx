import './App.css'
import { useState,useEffect } from 'react'

export default function App() {
const [city,setCity] = useState('Seoul');
const [weather,setWeather] = useState(null)
const cityNames = [`Seoul`,`paris`,`New york`]
const API_KEY = 'e267969c868dfe8bbbf0dc8ea11a6247'
const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

useEffect(()=>{
    //사이드 이팩트
  fetch(WEATHER_API)
    .then((res)=>res.json())
    .then((data)=>setWeather(data))
},[city])
  
const handleClick =(cityName) =>{
  setCity(cityName)
}
console.log({city});

if(weather === null){
  return <div>Loading...</div>
}else{
  return (
    <main>
      {cityNames.map((city) => <button onClick ={()=>handleClick(city)}>{city}</button>)}
      <div>
      <h1>{weather.name}</h1>
      
        <p>현재 온도: {weather.main.temp}도</p>
        <p>최고 온도: {weather.main["temp_max"]}도</p>
        <p>최저 온도: {weather.main["temp_min"]}도</p>
      </div>
    </main>
  )
}

  
  
}
