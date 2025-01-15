import { useState, useEffect } from "react";

const WeatherApp = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "29896500950f5a19eef66823ef77f325";

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });

            // Fetch weather data
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
            );

            if (!response.ok) {
              throw new Error("Failed to fetch weather data");
            }

            const data = await response.json();
            setWeather(data);
            setLoading(false);
          } catch (err) {
            setError("Error fetching weather data");
            setLoading(false);
          }
        },
        () => {
          setError("Error getting location. Please enable location services.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading weather data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="weather-container">
      {weather && (
        <div className="weather-info">
          <h2>Weather in {weather.name}</h2>
          <div className="weather-details">
            <p>Temperature: {Math.round(weather.main.temp)}°C</p>
            <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
            <p>Weather: {weather.weather[0].main}</p>
            <p>Description: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}

      <style>{`
        .weather-container {
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .weather-info {
          text-align: center;
        }

        .weather-details {
          margin-top: 20px;
          text-align: left;
        }

        h2 {
          color: #333;
          margin-bottom: 20px;
        }

        p {
          margin: 10px 0;
          color: #666;
        }
      `}</style>
    </div>
  );
};

// export default WeatherApp;

export default function Right() {
  return (
    <div className="right">
      <WeatherApp />
    </div>
  );
}
