import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
function Weather() {
  let api = {
    apiBase: "https://api.openweathermap.org/data/2.5/",
    key: "75f494e7614f490261d4a24141df22c8",
  };

  const [city, setCity] = useState("sohag");
  const [data, setData] = useState({});
  const [background, setBackground] = useState("");
  const [date, setDate] = useState({});
  const [notFound, setNotFound] = useState(false);
  const ref = useRef(null);
  const refI = useRef(null);
  setInterval(() => {
    // update date
    const dates = new Date();
    const d = {
      day: dates.getDate(),
      month: dates.getMonth() + 1,
      years: dates.getFullYear(),
    };
    setDate(d);
  }, 1000);

  useEffect(() => {
    //fetch  data and control background
    axios
      .get(`${api.apiBase}weather?q=${city}&appid=${api.key}`)
      .then((res) => {
        setNotFound(false);
        const data = {
          city: res.data.name,
          temp: res.data.main.temp,
          status: res.data.weather[0].description,
          country: res.data.sys.country,
          main: res.data.weather[0].main,
        };
        setData(data);
      })
      .catch((error) => {
        setNotFound(true);
      });

    if (data.main === "Clear") {
      setBackground("clear");
    }
    if (data.main === "Clouds") {
      setBackground("cloud");
    }
    if (data.main === "Rain") {
      setBackground("rain");
    }
  }, [api.apiBase, api.key, city, data.main]);

  const changeCity = () => {
    setCity(ref.current.value);
  };
  return (
    <div className={`Weather ${background}`}>
      <div className="Search">
        <input type="text" placeholder="Enter city" ref={ref}></input>
        <i
          ref={refI}
          className="fa-solid fa-magnifying-glass"
          onClick={() => {
            changeCity();
          }}></i>
      </div>
      <h1 className="date">
        {date.day} / {date.month} / {date.years}
      </h1>
      {notFound ? (
        <div className="error"><h2>Please enter a valid city name</h2></div>
      ) : (
        <div className="result">
          <div className="content">
            <div className="temp">
              <div className="info">
                <div className="city">
                  <span>{data.city}</span>
                  <span>-</span>
                  <span>{data.country}</span>
                </div>
                <div className="description">
                  <i className="fa-solid fa-cloud"></i>
                  {data.status}
                </div>
              </div>
              <div className="deg">
                {Math.floor(data.temp - 273.15)} <sup>o</sup> C
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
