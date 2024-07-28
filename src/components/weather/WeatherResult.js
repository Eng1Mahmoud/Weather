import React from "react";

const WeatherResult = ({ data }) => {
    return (
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
    );
};

export default WeatherResult;
