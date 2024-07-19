import { useState, useEffect } from "react";
import axios from "axios";
import { weatherBackground } from "./helpers";
import { useContext } from "react";
import { WeatherContext } from "../../context/context";
const api = {
  apiBase: "https://api.openweathermap.org/data/2.5/",
  key: "75f494e7614f490261d4a24141df22c8",
};

export const useFetchWeather = (city) => {
  const { lang, location } = useContext(WeatherContext);
  console.log(location);
  const [data, setData] = useState({});
  const [background, setBackground] = useState("");
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${api.apiBase}weather?lat=${location.lat}&lon=${location.lon}&q=${city}&appid=${api.key}&lang=${lang}`,
        );
        setNotFound(false);
        const weatherData = {
          city: res.data.name,
          temp: res.data.main.temp,
          status: res.data.weather[0].description,
          country: res.data.sys.country,
          main: res.data.weather[0].main,
        };
        setData(weatherData);
        setBackground(weatherBackground[weatherData.main] || "");
      } catch (error) {
        setNotFound(true);
      }
    };

    fetchData();
  }, [city, lang, location.lat, location.lon]);

  return { data, background, notFound };
};
