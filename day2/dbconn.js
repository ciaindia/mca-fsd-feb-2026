const express = require("express")
const mysql = require("mysql2");    //npm install mysql2

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "company"
});

const app = express()
app.use(express.json())

//npm install cors
const cors = require("cors")
app.use(cors())

app.get("/employees", (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})


app.listen(3002, () => {
    console.log("Server started on port 3001")
})