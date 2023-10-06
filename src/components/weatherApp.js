import { cloneElement, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import styles from "./weatherApp.module.css";

export default function WeatherApp() {
  const [weather, setWeather] = useState("");
  const [error, setError] = useState(false);

  function changeCity(city) {
    setWeather("");
    setError(false);
    city = city.trim();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_KEY}&units=metric`
    )
      .then((data) => data.json())
      .then((data) => {
        if (data.cod == "404") setError(true);
        else {
          setWeather(data);
        }
      });
  }
  return (
    <div className={styles.weatherContainer}>
      <h1 style={{ textAlign: "center", margin: "10px" }}>WeatherApp</h1>
      <WeatherForm changeCity={(e) => changeCity(e)} />
      {error ? (
        <h3 style={{ textAlign: "center" }}>Ciudad no encontrada!</h3>
      ) : (
        <WeatherMainInfo weather={weather} />
      )}
    </div>
  );
}
