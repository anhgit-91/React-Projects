import { useState } from "react";

const Forecast = () => {
    // group objects by date
    function groupBy(array, keyExtractor) {
        return array.reduce((result, obj) => {
            const key = keyExtractor(obj);
            const existingGroup = result.find(
                (group) => keyExtractor(group[0]) === key
            );

            if (existingGroup) {
                existingGroup.push(obj);
            } else {
                result.push([obj]);
            }

            return result;
        }, []);
    }

    // Get data
    useEffect(() => {
        // Fetch country details when the component mounts
        const fetchWeatherData = async () => {
            try {
                const result = await axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast?q=Sydney&appid=5f4989bd884aecb3218580c9369ac9a4`
                );
                const weatherData = result.data.list;
                const groupedWeatherData = groupBy(weatherData, (obj) =>
                    obj.dt_txt.slice(0, 11)
                );
                console.log(groupedWeatherData);
                // setWeatherData(weatherData);
            } catch (error) {
                console.error("Error fetching country details:", error);
            }
        };
        fetchWeatherData();
    }, [city]);
    return <div>Forecast</div>;
};

export default Forecast;
