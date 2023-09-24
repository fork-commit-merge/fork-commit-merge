// ExpressJS - Easy

const { get } = require("cheerio");
const express = require("express");
const app = express();
const port = 6969;

// TODO: Implement `get` method for / route
app.get('/',(req,res)=>{
    res.send("<p>Hello, Express!</p>")
})

// TODO: Implement `listen` method
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);   
})