import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { i18nInit } from "./helper/i18next";
const root = ReactDOM.createRoot(document.getElementById("root"));
// i18nInit();
i18nInit();
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

reportWebVitals();
