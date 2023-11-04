// ExpressJS - Easy


const express = require("express");
const app = express();
const port = 6969;


app.get('/', (req, res) => {

    try {

        res.status(200).send("Hello, Express!");

    } catch (error) {

        res.status(400).send(error);

    }

})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})