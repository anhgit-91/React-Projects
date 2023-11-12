import { useState, useEffect } from "react";
import axios from "axios";

// const KEY_API = "5f4989bd884aecb3218580c9369ac9a4";

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("Sydney");
    const [searchValue, setSearchValue] = useState("");

    const KEY_API = "5f4989bd884aecb3218580c9369ac9a4";

    // Get data
    useEffect(() => {
        // Fetch country details when the component mounts
        const fetchWeatherData = async () => {
            try {
                const result = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEY_API}`
                );
                const weather = result.data;
                console.log(weather);

                setWeatherData(weather);
            } catch (error) {
                console.error("Error fetching country details:", error);
            }
        };
        fetchWeatherData();
    }, [city]);

    // // handle City name change
    const handleCityChange = () => {
        setCity(searchValue);
    };

    //handle key press
    const handleKeyPress = (e) => {
        // Check if the pressed key is Enter (key code 13)
        if (e.key === "Enter") {
            handleCityChange();
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter city"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleCityChange}>Get Weather Forecast</button>
            {weatherData && (
                <div>
                    <h2>{weatherData.name}</h2>
                    <p>{weatherData.weather[0].main}</p>
                    <p>Current Temperature: {weatherData.main.temp} °C</p>
                    <div>
                        <span>L: {weatherData.main.temp_min} °C</span>
                        <span>H: {weatherData.main.temp_max} °C</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather;
