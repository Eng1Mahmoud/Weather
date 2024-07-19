import React, { useEffect, useState } from "react";
import { updateDate } from "./helpers";
import { useContext } from "react";
import { WeatherContext } from "../../context/context";
const DateDisplay = () => {
  const { lang } = useContext(WeatherContext);
  const [date, setDate] = useState(updateDate(lang));

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(updateDate(lang));
    }, 1000);
    return () => clearInterval(interval);
  }, [lang]);

  return <h1 className="date">{date.formatted}</h1>;
};

export default DateDisplay;
