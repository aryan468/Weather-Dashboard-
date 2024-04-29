// WeatherDetails.js

import React from 'react';
import './WeatherDetails.css';

const WeatherDetails = ({ weather }) => {
    return (
        <div className="weather-details">
            <p>Temperature: {weather.temperature}°C</p>
            <p>Humidity: {weather.humidity}%</p>
            <p>Wind Speed: {weather.windSpeed} km/h</p>
            {/* Add more weather details here as needed */}
        </div>
    );
};

export default WeatherDetails;
