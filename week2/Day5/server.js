const http = require('http');
const server = http.createServer((req, res) => {
    // Request handling logic goes here
  });
  server.listen(3000, () => {
    console.log('Server is listening on port 3000');
  });