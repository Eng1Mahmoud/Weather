import React, { useEffect } from "react";
import Weather from "./components/weather/Weather";
import { ChangeLang } from "./components/ChangeLang";
import { WeatherContext } from "./context/context";
import { getCurrentLocation } from "./helper/getlocation";
import i18next from "i18next";

function App() {
    console.log("render");
    const [lang, setLang] = React.useState(i18next.language);
    const [location, setLocation] = React.useState({ lat: 0, lon: 0 });
    // get location and set direction depend on the language in i18next
    useEffect(() => {
        document.body.style.direction = lang === "ar" ? "rtl" : "ltr"; // change the direction of the page
        const getLocation = async () => {
            const position = await getCurrentLocation();
            setLocation(position);
        };
        getLocation();
    }, [lang]);
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
