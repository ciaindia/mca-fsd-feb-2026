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

//CW: Design post method to push new employee record in emps
app.post("/employee", (req, res) => {
    let emp = {id: cnt++, name: req.body.name, salary: req.body.salary}
    emps.push(emp)
    res.send("Employee added successfully") 
})


//CW: Design delete method to remove employee record in emps using id
app.delete("/employee/:id", (req, res) => {
    let id = req.params.id
    emps = emps.filter(emp => emp.id != id)
    res.send("Employee deleted successfully")
})

//CW: Design put method to update employee record in emps using id and map method
app.put("/employee/:id", (req, res) => {
    let id = req.params.id
    emps = emps.map(emp => emp.id == id ? {id: id, name: req.body.name, salary: req.body.salary} : emp)
    res.send("Employee updated successfully")
})

//CW: Design get method to read single employee from emps 
app.get("/employee/:id", (req, res) => {
    let id = req.params.id
    let emp = emps.find(emp => emp.id == id)
    res.send(emp)
})




app.listen(3001, () => {
    console.log("Server started on port 3001")
})