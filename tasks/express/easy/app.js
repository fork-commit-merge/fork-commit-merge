// ExpressJS - Easy

import express from "express";

const app = express();
const port = 6969;

// GET route
app.get("/", (req, res) => {
    res.send("Hello, express!");
});

// Listen
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
