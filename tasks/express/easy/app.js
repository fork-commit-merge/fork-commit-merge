import express from 'express'

const app = express();
const port = 6969;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
})

app.listen(port, () => {
  console.log(`server is start on port ${port}`);

})