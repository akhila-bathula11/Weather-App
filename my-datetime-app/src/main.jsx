
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import { WeatherApp } from "./components/weather-app/weather-app.jsx";

createRoot(document.getElementById("root")).render(<WeatherApp/>);