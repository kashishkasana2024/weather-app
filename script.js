async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();

    document.getElementById("weather").innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>🌡 Temp: ${data.main.temp}°C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬 Wind: ${data.wind.speed} m/s</p>
      <p>☁ Weather: ${data.weather[0].main}</p>
    `;
  } catch (error) {
    document.getElementById("weather").innerHTML = `<p>${error.message}</p>`;
  }
}
