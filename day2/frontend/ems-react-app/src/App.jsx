// Create new react app using 
// npm create vite@latest ems-react-app

import EmployeeListing from "./EmployeeListing"
import EmployeeAdd from "./EmployeeAdd"

//CW: Create EmployeeListing.jsx component to list all employees from http://localhost:3000/employee
function App() {

  return (
    <>
      <h1>Employee Management System</h1>
      <EmployeeAdd />
      <EmployeeListing />
    </>
  )
}

export default App
