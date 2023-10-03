import { useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import styles from "./weatherApp.module.css";

export default function WeatherApp() {
  const [weather, setWeather] = useState("");

  function changeCity(city) {
    setWeather("");
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_KEY}&units=metric`
    )
      .then((data) => data.json())
      .then((data) => setWeather(data));
  }
  return (
    <div className={styles.weatherContainer}>
      <WeatherForm changeCity={(e) => changeCity(e)} />
      <WeatherMainInfo weather={weather} />
    </div>
  );
}
