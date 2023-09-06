import React, { useState, useEffect } from "react";
import axios from "axios";
import { WiDaySunny, WiRain, WiCloud, WiDayHaze } from "react-icons/wi"; 
import "./WeatherComponent.css";

const WeatherComponent = ({ coordinates }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Load weather data when the component mounts
    const loadWeatherData  = async () => {
      try {
        const apiKey = "76c535d555a455c5359080efc8670642"; 
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=${apiKey}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    loadWeatherData();
  }, [coordinates]);

  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  // Convert from Kelvin to Celsius
  const temperatureCelsius = (weatherData.main.temp - 273.15).toFixed(2);

  const minTemperature = (weatherData.main.temp_min - 273.15).toFixed(2);
  const maxTemperature = (weatherData.main.temp_max - 273.15).toFixed(2);

  const weatherIcons = {
    Clear: <WiDaySunny />,
    Rain: <WiRain />,
    Clouds: <WiCloud />,
    Haze: <WiDayHaze />,
  };

  const weatherIcon = weatherIcons[weatherData.weather[0].main] || null;

  return (
    <div>
      <h3>{weatherData.name}</h3>
      {weatherIcon && <div className="weather-icon">{weatherIcon}</div>}
      <p>Temperature: {temperatureCelsius}°C</p>
      <p>Min: {minTemperature}°C</p>
      <p>Max: {maxTemperature}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default WeatherComponent;
