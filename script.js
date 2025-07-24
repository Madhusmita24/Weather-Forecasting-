async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY';  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherInfo = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
            document.getElementById('weatherResult').innerHTML = weatherInfo;
        } else {
            document.getElementById('weatherResult').innerHTML = `<p>City not found!</p>`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherResult').innerHTML = `<p>Something went wrong. Try again later.</p>`;
    }
}