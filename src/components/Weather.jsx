// React imports
import React, { useState, useEffect, useRef } from 'react';

// Image assets
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';

// CSS import
import './Weather.css';


const Weather = () => {

    // Ref to access inpt field without re-rendering
    const inputRef = useRef();

    // State to store weather data
    const [weatherData, setWeatherData] = useState(false);

    // Mapping of weather condition codes to corresponding icons
    const allIcons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon
    }

    // Function to fetch weather data for the given city
    const search = async (city) => {
        // If input is empty, generate alert
        if(city === ""){
            alert("Enter City Name");
            return;
        }

        try{
            // Compose API endpoint with city name and API key from environment
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const response = await fetch(url);
            const data = await response.json();

            // If request fails (e.g., city not found), show error
            if(!response.ok){
                alert(data.message);
                return;
            }

            // Useful for debugging
            console.log(data);

            // Select appropriate icon or fallback to clear icon
            const icon = allIcons[data.weather[0].icon] || clear_icon;
            
            // Update weather data in state
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp), // Rounded temperature
                location: data.name,
                icon: icon
            });
        }
        catch (error){
            // Handle API or network errors
            setWeatherData(false);
            console.error("Error in fetching weather data");
        }
    }

    // On initial load, fetch weather for a default city (Karachi)
    useEffect(() => {
        search("Karachi");
    }, [])

    return (
        <div className='weather'>

            {/* Search bar with input and search icon */}
            <div className='search-bar'>
                <input ref={inputRef} type="text" placeholder='Search'/>
                <img src={search_icon} alt="" onClick={() => search(inputRef.current.value)}/>
            </div>

            {/* Conditional rendering of weather info */}
            {weatherData ? <>
                {/* Weather Image */}
                <img src={weatherData.icon} alt="" className='weather-icon'/>

                {/* Display Temperature */}
                <p className='temperature'>{weatherData.temperature}°C</p>

                {/* City Name */}
                <p className='location'>{weatherData.location}</p>

                {/* Humidity and Wind Speed metrics */}
                <div className='weather-data'>
                    <div className='weather-metric'>
                        <img src={humidity_icon} alt="" />
                        <div>
                            <p>{weatherData.humidity} %</p>
                            <span>Humidity</span>
                        </div>
                    </div>

                    <div className='weather-metric'>
                        <img src={wind_icon} alt="" />
                        <div>
                            <p>{weatherData.windSpeed} Km/h</p>
                            <span>Wind Speed</span>
                        </div>
                    </div>
                </div>
            </> : 

            // Empty state — optionally show a loading or default message
            <></>}
        </div>
    )
}

export default Weather