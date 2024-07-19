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

  return (
    <div>
      <h2 className="date">{date.formattedDate}</h2>
      <h2 className="date">{date.formattedTime}</h2>
    </div>
  );
};

export default DateDisplay;
