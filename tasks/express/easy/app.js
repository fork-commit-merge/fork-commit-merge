// ExpressJS - Easy
import express from 'express'
const app = express();
const port = 6969;

// TODO: Implement `get` method for / route
app.get('/', (req, res) => {
    res.end("Hello, Express!");
})

// TODO: Implement `listen` method
app.listen(port, () => {
    console.log(`server is running at port:${port}`)
})
