// ExpressJS - Easy

const { get } = require("cheerio/lib/api/traversing");
const express = require("express");
const app = express();
const port = 6969;

// TODO: Implement `get` method for / route
app.get("/",(request,response)=>{
    response.send("Hello, Express!")
});

// TODO: Implement `listen` method
app.listen(port,()=>console.log("Server is running on port 6969"));