const express = require("express");
const app = express();
const port = 6969;

app.get("/", (req, res) => {
  res.send("<h1>Hello, Express!</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
