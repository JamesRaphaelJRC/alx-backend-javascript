const http = require('http');

// Create a small HTTP server
const app = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Display 'Hello Holberton School!' in the page body for any endpoint
  res.end('Hello Holberton School!\n');
});

// HTTP server should listen on port 1245
const port = 1245;
app.listen(port, () => {
});

// Export the app variable
module.exports = app;
