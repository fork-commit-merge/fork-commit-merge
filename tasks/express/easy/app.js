// ExpressJS - Easy

const { get } = require("cheerio/lib/api/traversing");
const express = require("express");
const app = express();
const port = 6969;

// TODO: Implement `get` method for / route
app.get("/", async (req,res)=>{
   res.send("Get Method working");
};

// TODO: Implement `listen` method
app.listen(port);
