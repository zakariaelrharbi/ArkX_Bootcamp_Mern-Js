// In this challenge, we will build upon the previous 
// "Random City Temperature Display" exercise and introduce file operations.
// The goal is to read the city name from a file named "input.txt,"
// retrieve the weather data for the chosen city, and write 
// the temperature result into a file with the city name as "cityname.txt".
// Before writing the result, you should delete any existing file for 
// the chosen city.

const fs = require('fs');


// Read the file
const readCityName = () => {
  try {
    const cityName = fs.readFileSync('Input.txt', 'utf-8').trim();
    return cityName; // Return the city name
  } catch (error) {
    console.error(`Error reading city name: ${error.message}`);
    throw error; // Propagate the error
  }
};

// Fetch weather data
const weatherData = async (city) => {
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true`);
    const data = await response.json();
    return data.current_weather.temperature + ' ' + data.current_weather_units.temperature; // Assuming the temperature key is 'temperature_2m'
  } catch (error) {
    console.error(`Error fetching weather data: ${error.message}`);
    throw error; // Propagate the error
  }
};

async function deleteExistingFile(cityName) {
  try {
    fs.unlinkSync(`${cityName}.txt`);
  } catch (error) {
    // Ignore error if file doesn't exist
    if (error.code !== 'ENOENT') {
      throw new Error(`Failed to delete existing file for ${cityName}: ${error.message}`);
    }
  }
}

async function writeTemperatureToFile(cityName, temperature) {
  try {
    fs.writeFileSync(`${cityName}.txt`, `Temperature in ${cityName}: ${temperature}`);
    console.log(`Temperature for ${cityName} written to ${cityName}.txt`);
  } catch (error) {
    throw new Error(`Failed to write temperature to ${cityName}.txt: ${error.message}`);
  }
}

async function main() {
  try {
    const cityName = await readCityName();
    const city = {
      name: cityName,
      latitude: '33.5883',
      longitude: '-7.6114',
    };

    await deleteExistingFile(cityName);

    const temperature = await weatherData(city);

    await writeTemperatureToFile(cityName, temperature);
  } catch (error) {
    console.error(error.message);
  }
}

main();

