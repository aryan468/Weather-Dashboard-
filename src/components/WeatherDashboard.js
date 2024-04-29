// WeatherDashboard.js

import React from 'react';
import './WeatherDashboard.css';

const WeatherDashboard = ({ weatherData, city }) => {
    return (
        <div className="weather-dashboard">
            <div className="dashboard-header">
                <h2>{city}</h2>
            </div>
            <div className="dashboard-content">
                {weatherData ? (
                    <div className="weather-details">
                        <div className="weather-info">
                            <div className="weather-info-item">
                                <h3>Temperature</h3>
                                <p>{weatherData.temperature}°f</p>
                            </div>
                            <div className="weather-info-item">
                                <h3>Humidity</h3>
                                <p>{weatherData.humidity}%</p>
                            </div>
                            <div className="weather-info-item">
                                <h3>Wind Speed</h3>
                                <p>{weatherData.windSpeed} m/s</p>
                            </div>
                            <div className="weather-info-item">
                                <h3>Pressure</h3>
                                <p>{weatherData.pressure} hPa</p>
                            </div>
                            <div className="weather-info-item">
                                <h3>Visibility</h3>
                                <p>{weatherData.visibility} meters</p>
                            </div>
                            <div className="weather-info-item">
                                <h3>Weather</h3>
                                <p>{weatherData.weather}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="no-data">No weather data available</p>
                )}
            </div>
        </div>
    );
};

export default WeatherDashboard;
