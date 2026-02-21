import React, { useState } from 'react'
import axios from 'axios'

export default function EmployeeAdd() {
    const [name, setName] = useState("")
    const [salary, setSalary] = useState("")

    const addEmployee = () => {
        axios.post("http://localhost:3001/employee", { name, salary })
        alert("Employee added successfully")
        window.location.reload()
    }

  return (
    <div>
        <h1>Add Employee</h1>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="salary">Salary</label>
            <input type="text" onChange={(e) => setSalary(e.target.value)}/>
            <button onClick={addEmployee}>Add Employee</button>
    </div>
  )
}
