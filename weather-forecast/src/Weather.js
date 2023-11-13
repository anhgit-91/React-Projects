import { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [city, setCity] = useState("Sydney");
    const [searchValue, setSearchValue] = useState("");
    const [error, setError] = useState("");

    const KEY_API = "5f4989bd884aecb3218580c9369ac9a4";

    // Get data
    useEffect(() => {
        // Fetch country details when the component mounts
        const fetchWeatherData = async () => {
            try {
                const result = await axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${KEY_API}&units=metric`
                );
                const weather = result.data.list;
                console.log(result.data);
                setWeatherData(weather);
                setError("");
            } catch (error) {
                console.error("Error fetching country details:", error);
                setWeatherData([]);
                setError(
                    "Error fetching weather data. Please check the city name."
                );
            }
        };

        fetchWeatherData();

        // Update current time every second
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Fetch weather data every 6 hours
        const fetchIntervalId = setInterval(() => {
            fetchWeatherData();
        }, 6 * 60 * 60 * 1000); // 6 hours in milliseconds

        // Cleanup interval on component unmount
        return () => {
            clearInterval(intervalId);
            clearInterval(fetchIntervalId);
        };
    }, [city]);

    const renderData = () => {
        const currentHour = currentTime.getHours();

        for (const item of weatherData) {
            const objectHour = new Date(item["dt_txt"]).getHours();

            // Check if the current hour is within the specified range
            if (
                (currentHour >= objectHour && currentHour < objectHour + 3) ||
                (currentHour >= objectHour &&
                    objectHour + 3 > 24 &&
                    currentHour < (objectHour + 3) % 24)
            ) {
                return (
                    <div key={item["dt_txt"]} className="weather-info">
                        <div className="left">
                            <h3 className="date">{currentDate}</h3>
                            <h2 className="location">{city}</h2>
                            <p className="temp">{item["main"]["temp"]} °C</p>
                        </div>
                        <div className="mid">
                            <img
                                src={`https://openweathermap.org/img/wn/${item["weather"][0].icon}@4x.png`}
                                alt=""
                            />
                            <p>{item["weather"][0].description}</p>
                        </div>
                        <div className="right">
                            <p>
                                <span>Feels like: </span>
                                {item["main"]["feels_like"]} °C
                            </p>
                            <p>
                                <span>Humidity: </span>
                                {item["main"]["humidity"]} %
                            </p>
                            <p>
                                <span>Pressure: </span>
                                {item["main"]["pressure"]} MB
                            </p>
                            <p>
                                <span>Wind:</span> {item["wind"]["speed"] * 3.6}{" "}
                                KM/H
                            </p>
                        </div>
                    </div>
                );
            }
        }

        // // If no match is found
        // return <p>No data to display</p>;
    };

    // Get current day, month (name), and year
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const currentDate = currentTime.toLocaleDateString(undefined, options);

    // Get the icon
    useEffect(() => {}, []);

    // handle City name change
    const handleCityChange = () => {
        setCity(searchValue);
        setSearchValue("");
    };

    //handle key press
    const handleKeyPress = (e) => {
        // Check if the pressed key is Enter (key code 13)
        if (e.key === "Enter") {
            handleCityChange();
        }
    };

    return (
        <>
            <div className="section">
                <input
                    required
                    type="text"
                    placeholder="Enter city"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={handleCityChange}>Search</button>
                {error && (
                    <div>
                        <p style={{ color: "red" }} className="error-message">
                            {error}
                        </p>
                    </div>
                )}
            </div>
            {weatherData && <>{renderData()}</>}
        </>
    );
};

export default Weather;
