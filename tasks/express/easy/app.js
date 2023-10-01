// ExpressJS - Easy
const express = require("express");
const app = express();
const port = 6969;

app.get('/', (_request, response) => {
  response.send('Hello, Express')
});

app.listen(port, () => console.log(`Server is running on port ${port}`))