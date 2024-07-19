import React, { useEffect } from "react";
import Weather from "./components/weather/Weather";
import { ChangeLang } from "./components/ChangeLang";
import { WeatherContext } from "./context/context";
import { getCurrentLocation } from "./helper/getlocation";

function App() {
  console.log("render");
  const [lang, setLang] = React.useState("en");
  const [location, setLocation] = React.useState({ lat: 0, lon: 0 });
  // get location
  useEffect(() => {
    const getLocation = async () => {
      const position = await getCurrentLocation();
      setLocation(position);
    };
    getLocation();
  }, []);
  // handle language change
  const changeLang = (lang) => {
    setLang(lang);
  };
  return (
    <div className="App">
      <WeatherContext.Provider value={{ lang, changeLang, location }}>
        <ChangeLang />
        <Weather />
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
