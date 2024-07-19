import React from "react";
import Weather from "./components/weather/Weather";
import { i18nInit } from "./helper/i18next";
import { ChangeLang } from "./components/ChangeLang";
import { WeatherContext } from "./context/context";
function App() {
  const [lang, setLang] = React.useState("en");
  // handle language change
  const changeLang = (lang) => {
    setLang(lang);
  };
  // i18nInit();
  i18nInit();
  return (
    <div className="App">
      <WeatherContext.Provider value={{ lang, changeLang }}>
        <ChangeLang />
        <Weather />
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
