// ExpressJS - Easy

const express = require("express");
const app = express();
const port = 6969;

// TODO: Implement `get` method for / route

app.get("/",(req,res,next)=>{
    res.send("Hello, Express!");
})

// TODO: Implement `listen` method
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
