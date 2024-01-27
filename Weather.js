
const axios = require("axios");

const apiKey = '490f0dafd5bd908781dc99cb51b44b22';

const city = 'pune';

const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

axios.get(apiUrl)
.then(response => {
    const weatherData = response.data;
    console.log(`Weather in ${city}:`);
    console.log(`-Humidity: ${weatherData.main.humidity}%`);
    console.log(`- Temperature: ${weatherData.main.temp}C`);
    console.log(`- Weather: ${weatherData.main.Weather[0].description}`);
})
.catch(error =>{
    console.error('Error fetching weather data:'.error.message);
});