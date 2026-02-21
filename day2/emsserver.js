const express = require("express")
const app = express()
app.use(express.json())

var cnt = 1;
var emps = [
    {id: cnt++, name: "Amit", salary: 22000}
];

app.get("/employee", (req, res) => {
    res.send(emps);
})


app.listen(3001, () => {
    console.log("Server started on port 3001")
})