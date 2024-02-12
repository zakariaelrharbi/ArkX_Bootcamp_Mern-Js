// Your challenge is to create a program that randomly selects a city from
// a predefined list and retrieves the temperature data for that city from
// a weather API. You'll be utilizing asynchronous programming concepts,
// including promises and async/await, to fetch the temperature data 
// and display it to the user.
const cities = [
    { name: "New York", lat: 40.7128, lng: -74.006 },
    { name: "London", lat: 51.5074, lng: -0.1278 },
    { name: "Paris", lat: 48.8566, lng: 2.3522 },
    { name: "Tokyo", lat: 35.6895, lng: 139.6917 },
    { name: "Sydney", lat: -33.8651, lng: 151.2099 },
    { name: "Rome", lat: 41.9028, lng: 12.4964 },
    { name: "Cairo", lat: 30.0444, lng: 31.2357 },
    { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729 },
    { name: "Dubai", lat: 25.2048, lng: 55.2708 },
    { name: "Rabat", lat: 34.0209, lng: -6.8416 },
  ];
  
  function selectRandomCity(cities) {
    const randomIndex = Math.floor(Math.random() * cities.length);
    const randomc = cities[randomIndex];
    return cities[randomIndex];
  }
  const fetchData = async (cities) => {
    const selectedRandomCity = selectRandomCity(cities);
    console.log(`the selected city is : ${selectedRandomCity.name}`);
    console.log()
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${selectedRandomCity.lat}&longitude=${selectedRandomCity.lng}&current_weather=true`
    );
    const data = await response.json();
    return data;
  };
  
  const Display = async (cities) => {
    const data = await fetchData(cities);
    const temp = data.current_weather.temperature;
    console.log(`temperature is ${temp}`);
  };
  Display(cities);
