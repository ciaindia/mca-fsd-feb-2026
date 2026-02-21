const express = require("express")

const app = express()

//run this on browser
//http://localhost:3000/
app.get("/", (req, res) => {
    res.send("Hello World!")
})


app.listen(3000, () => {
    console.log("Server started on port 3000")
})
