import React, { useState } from "react";
import { useFetchWeather } from "./useFetchWeather";
import SearchInput from "./SearchInput";
import DateDisplay from "./DateDisplay";
import NotFound from "./NotFound";
import WeatherResult from "./WeatherResult";

function Weather() {
    const [city, setCity] = useState("");
    const { data, background, notFound } = useFetchWeather(city);
    const [name, setName] = useState("");
    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const searchCity = () => {
        setCity(city);
    };

    return (
        <div className={`Weather ${background}`}>
            <SearchInput
                city={city}
                onCityChange={handleCityChange}
                onSearch={searchCity}
            />
            <DateDisplay />
            {notFound ? <NotFound /> : <WeatherResult data={data} />}
        </div>
    );
}

export default Weather;
