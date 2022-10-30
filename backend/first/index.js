const express = require("express");
const app = express();

const PORT = process.env.PORT || 80;

const info = { "slackUsername": "Ojerry", "backend": true, "age": 22, "bio": "A Scientist, baller, software engineer doing and making awesome things" }
app.get("/", (req, res)=>{
  res.send(info)
})

app.listen(PORT, ()=>{
  console.log(`server started at port ${PORT}`)
})