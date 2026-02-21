const express = require("express")
const app = express()

//run this on browser
//http://localhost:3000/endpoint
app.get("/", (req, res) => {
    res.send("Hello World!")
})


//CW: Design api to print square of number
// http://localhost:3000/sqr/7 

app.get("/sqr/:num", (req, res) => {
    let x = req.params.num
    res.send(`Square of ${x} is ${x * x}`)
})

//CW: Design api to print addition of 2 numbers
// http://localhost:3000/add/5/6





app.use(express.json())

app.post("/calc", (req, res) => {
  let x = req.body.num1
  let y = req.body.num2

  res.send(`${x} + ${y} = ${x + y}`)
})











app.get("/calc", (req, res) => {
    res.send("GET Calc")
})

//CW: POST PUT and DELETE method for /calc



app.put("/calc", (req, res) => {
    res.send("PUT Calc")
})

app.delete("/calc", (req, res) => {
    res.send("DELETE Calc")
})



app.listen(3000, () => {
    console.log("Server started on port 3000")
})

//install nodemon: npm i -g nodemon
//run this application first in terminal 
// node app.js
// nodemon app.js 