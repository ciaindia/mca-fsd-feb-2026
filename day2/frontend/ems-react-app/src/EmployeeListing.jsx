import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function EmployeeListing() {
    const url = "http://localhost:3001/employee"
    const [emps, setEmps] = useState([])

    useEffect(() => {
        axios.get(url).then(res => setEmps(res.data))
    }, [])

    const deleteEmployee = (id) => {
        if(window.confirm("Are you sure you want to delete this employee?")){
            axios.delete(url + "/" + id)
            alert("Employee deleted successfully")
            window.location.reload()
        }
    }

    const updateEmployee = (id) => {
        const name = prompt("Enter new name")
        const salary = prompt("Enter new salary")
        if (name && salary) {
            axios.put(url + "/" + id, { name, salary }).then(() => {
                alert("Employee updated successfully")
                window.location.reload()
            })
        }
    }   

  return (
    <div>
        <h1>Employee Listing</h1>
        <table border={1}>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Salary</td>
                    <td colSpan={2}>Actions</td>
                </tr>
            </thead>
            <tbody>
                {emps.map(emp => (
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.salary}</td>
                        <td><button onClick={() => deleteEmployee(emp.id)}>Delete</button></td>
                        <td><button onClick={() => updateEmployee(emp.id)}>Edit</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
