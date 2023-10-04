import styles from "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import WeatherApp from "./components/weatherApp";

const App = () => {
  return (
    <div className={styles.body}>
      <WeatherApp />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
