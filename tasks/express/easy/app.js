// TODO: Implement `get` method for / route
// Import the Express.js module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define the port number
const port = 6969;

// Set up a route that responds with "Hello, Express!" when accessed
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// TODO: Implement `listen` method
