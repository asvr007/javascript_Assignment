document.addEventListener('DOMContentLoaded', async () => {
    try {
      const apiKey = 'b5a4964ddd8aaa2c2493d2fa902b2de5';
      const city = 'bangalore'; 
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error('Weather data not available.');
      }
  
      const weatherData = await response.json();
  
      const weatherContainer = document.querySelector('.weather-data');
  
      weatherContainer.innerHTML = `
        <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Weather: ${weatherData.weather[0].description}</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
      `;
    } catch (error) {
      const weatherContainer = document.querySelector('.weather-data');
      weatherContainer.innerHTML = '<p>Failed to fetch weather data.</p>';
      console.error(error);
    }
  });
  