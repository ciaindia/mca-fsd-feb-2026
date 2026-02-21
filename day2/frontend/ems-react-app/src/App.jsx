// Create new react app using 
// npm create vite@latest ems-react-app

import EmployeeListing from "./EmployeeListing"

//CW: Create EmployeeListing.jsx component to list all employees from http://localhost:3000/employee
function App() {

  return (
    <>
      <h1>Employee Management System</h1>
      <EmployeeListing />
    </>
  )
}

export default App
