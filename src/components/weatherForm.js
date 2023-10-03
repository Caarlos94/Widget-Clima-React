import { useState } from "react";
import styles from "./weatherForm.module.css";

export default function WeatherForm({ changeCity }) {
  const [city, setCity] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setCity(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    changeCity(city);
    setCity("");
  }

  return (
    <form className={styles.container} onSubmit={(e) => handleSubmit(e)}>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => handleChange(e)}
        value={city}
      ></input>
      <button>Search</button>
    </form>
  );
}
