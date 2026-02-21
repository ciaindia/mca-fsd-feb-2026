import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function EmployeeListing() {
    const url = "http://localhost:3001/employee"

    const [emps, setEmps] = useState([])

    useEffect(() => {
        axios.get(url).then(res => setEmps(res.data))
    }, [])






    
  return (
    <div>
        <h1>Employee Listing</h1>
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Salary</td>
                </tr>
            </thead>
            <tbody>
                {emps.map(emp => (
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.salary}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
