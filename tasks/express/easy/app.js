// ExpressJS - Easy

const express = require("express");
const app = express();
const port = 6969;

// Implement `get` method for / route
app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

// Implement `listen` method
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});