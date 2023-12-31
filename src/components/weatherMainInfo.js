import styles from "./weatherMainInfo.module.css";

export default function WeatherMainInfo({ weather }) {
  return (
    <div className={weather && styles.mainInfo}>
      {weather && (
        <>
          <div className={styles.city}>{weather.name}</div>
          <div className={styles.row}>
            <img
              src={
                "http://openweathermap.org/img/wn/" +
                weather.weather[0].icon +
                "@2x.png"
              }
              width="80"
              height="80"
              alt="weather icon"
            />
            <div className={styles.contInfo}>
              <div className={styles.condition}>
                {weather.weather[0].description}
              </div>
              <div className={styles.current}>{weather.main.temp}°</div>
            </div>
          </div>
          <div>
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5054252.738268882!2d${weather.coord.lon}!3d${weather.coord.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1696353462543!5m2!1ses-419!2smx`}
              width="100%"
              height="365"
            ></iframe>
          </div>
        </>
      )}
    </div>
  );
}
