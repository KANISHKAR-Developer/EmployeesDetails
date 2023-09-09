import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeesList from "./Components/EmployeesList";
import EmployeeDetails from "./Components/EmployeeDetails";
import "./App.css";
const App = () => {
  return (
    <div className="back">
      <Router>
        <Routes>
          <Route path="/EmployeesDetails" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/employeeslist" element={<EmployeesList />} />
          <Route path="/employeedetails/:id" element={<EmployeeDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
