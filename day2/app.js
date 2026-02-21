const express = require("express")
const app = express()

//run this on browser
//http://localhost:3000/
app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/calc", (req, res) => {
    res.send("GET Calc")
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})

//install nodemon: npm i g nodemon
//run this application first in terminal 
// node app.js
// nodemon app.js 