const http = require('http');
const url = require('url');
const cities = require('./cities.js');


// get weather from cities
const getWether = async (city) => {
  let cls = '°C';
  const url = "https://api.open-meteo.com/v1/forecast";
  const cityObj = cities.find(val => val.name === city)
  const query = `?latitude=${cityObj.lat}&longitude=${cityObj.lng}&current_weather=true`
  const response = await fetch(url+query);
  const data = await response.json();
  return `Temperature in ${cityObj.name}: ${data.current_weather.temperature} C`
}
const server = http.createServer(async (req, res) => {
    // Request handling logic goes here

    // Inside the request handler
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    if(parsedUrl.query){
      const query = parsedUrl.query;
      if(path === '/weather'){
        let msg = await getWether(query.cityName);
        // res.setHeader('encoding', 'utf-16')
        res.end(msg)
      }
    }
  });
  server.listen(3000, () => {
    console.log('Server is listening on port 3000');
  });