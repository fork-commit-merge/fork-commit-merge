// ExpressJS - Easy

import express from "express";
const app = express();
const PORT = 6969;

// Root route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
