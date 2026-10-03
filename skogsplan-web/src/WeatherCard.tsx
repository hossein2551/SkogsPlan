import { useEffect, useState } from "react";
import { API_BASE_URL } from "./api";
type WeatherCardProps = {
  latitude: number;
  longitude: number;
};

type WeatherData = {
  current: {
    temperature_2m: number;
    precipitation: number;
    wind_speed_10m: number;
  };
};
function WeatherCard({ latitude, longitude }: WeatherCardProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  useEffect(() => {
  fetch(
  `${API_BASE_URL}/Weather?latitude=${latitude}&longitude=${longitude}`
)
    .then((response) => response.json())
    .then((data: WeatherData) => setWeather(data));
}, [latitude, longitude]);
if (!weather) {
  return <div className="weather-card">Hämtar väder...</div>;
}
  return (
    <div className="weather-card">
      <h3>Väder</h3>
      <p>🌡️ Temperatur: {weather.current.temperature_2m} °C</p>
<p>🌧️ Nederbörd: {weather.current.precipitation} mm</p>
<p>💨 Vind: {weather.current.wind_speed_10m} km/h</p>
    </div>
  );
}
export default WeatherCard;