import React from "react";
import i18next from "i18next";
import { useContext } from "react";
import { WeatherContext } from "../context/context";

const languages = [
  {
    title: "English",
    code: "en",
  },
  {
    title: "العربية",
    code: "ar",
  },
];

export const ChangeLang = () => {
  const { changeLang } = useContext(WeatherContext);
  // handleChange language
  const handleChange = (lang) => {
    changeLang(lang);
    i18next.changeLanguage(lang);
    // change the direction of the page
    if (lang === "ar") {
      document.body.style.direction = "rtl";
    } else {
      document.body.style.direction = "ltr";
    }
  };

  return (
    <div
      className="lang"
      style={{
        display: "flex",
        justifyContent: "end",
        position: "fixed",
        top: "5px",
        right: "10px",
      }}
    >
      <select
        defaultValue={i18next.language}
        style={{
          width: "100px",
          padding: "10px",
          borderRadius: "5px",
          display: "block",
        }}
        onChange={(e) => handleChange(e.target.value)}
      >
        {languages.map((lang, index) => (
          <option
            style={{
              color: "red",
              display: "block",
              padding: "5px",
            }}
            key={index}
            value={lang.code}
          >
            {lang.title}
          </option>
        ))}
      </select>
    </div>
  );
};
