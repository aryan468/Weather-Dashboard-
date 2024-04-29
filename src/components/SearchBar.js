// SearchBar.js

import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (city.trim() !== '') {
            onSearch(city.trim());
        }
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={handleChange}
                className="search-input"
            />
            <button type="submit" className="search-button">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
