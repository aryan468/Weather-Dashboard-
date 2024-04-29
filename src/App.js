// App.js

import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherDashboard from './components/WeatherDashboard';
import './App.css';

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');

    const handleSearch = async (cityName) => {
        try {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cf4c9300eee5d51253f97ca4212f9efe`);
            const data = response.data;
            const weather = {
                temperature: data.main.temp,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                pressure: data.main.pressure,
                visibility: data.visibility,
                weather: data.weather[0].main,
            };
            setWeatherData(weather);
            setCity(cityName);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setWeatherData(null);
        }
    };

    return (
        <div className="App">
            <h1 className="title">Weather Dashboard</h1>
            <SearchBar onSearch={handleSearch} />
            <WeatherDashboard weatherData={weatherData} city={city} />
        </div>
    );
}

export default App;
