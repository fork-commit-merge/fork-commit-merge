// ExpressJS - Easy

const { get } = require("cheerio/lib/api/traversing");
const express = require("express");
const app = express();
const port = 6969;

// TODO: Implement `get` method for / route
app.get('/', (request, response) => {
    response.json('Get route')
})

// TODO: Implement `listen` method
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})