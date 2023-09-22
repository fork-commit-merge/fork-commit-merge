// ExpressJS - Easy

const express = require("express");
const app = express();
const port = 6969;

app.get("/", (req, res) => {
    res.send("Hello, Express!");
});
app.listen(port, () => {
    console.log("Server is running on port 6969");
})

// TODO: Implement `get` method for / route

// TODO: Implement `listen` method
