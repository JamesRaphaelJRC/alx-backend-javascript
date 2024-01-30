const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

// Create a small HTTP server
const app = http.createServer((req, res) => {
  // Set the response headers
  res.setHeader(200, {'Content-Type': 'text/plain'});
  res.statusCode = 200;

  // Display 'Hello Holberton School!' in the page body for any endpoint
  res.end('Hello Holberton School!');
});

// HTTP server should listen on port 1245
app.listen(port, () => {
});

// Export the app variable
module.exports = app;
