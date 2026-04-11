//select * from users;
const express = require("express")
const mysql = require("mysql2")
const jwt = require("jsonwebtoken")
const app = express()
const SECRETKEY = "SECR3TKEY"
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "%TGBbgt5",
    database: "tms"
})

app.post("/login", (req, res) => {
    const { username, password } = req.body
    const query = "SELECT * FROM users WHERE username = ? AND password = ?"
    db.query(query, [username, password], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            if (result.length > 0) {
                const token = jwt.sign({ username }, SECRETKEY, { expiresIn: "1h" })
                res.json({ token })
            } else {
                res.json({ message: "Invalid credentials" })
            }
        }
    })
})

app.listen(3001, () => {
    console.log(`Listening on port ${3001}`);
})