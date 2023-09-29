// ExpressJS - Easy

const { get } = require("cheerio/lib/api/traversing");
const express = require("express");
const app = express();
const port = 6969;

// TODO: Implement `get` method for / route
app.get('/',(req,res,next)=>{
  res.send("Hello, Express!");
})
app.listen(port,(req,res)=>{
  console.log("Server is running on port 6969");
});
// TODO: Implement `listen` method
