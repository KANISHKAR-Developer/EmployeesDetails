import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EmployeesList = () => {
  const [storedUsers, setStoredUsers] = useState([]);

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem("users")) || [];
    setStoredUsers(usersData);
  }, []);

  return (
    <div className="container employees-list-container">
      <h2 className="mt-5">Employee List</h2>
      <table className="table table-bordered table-hover shadow rounded">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {storedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <Link to={`/employeedetails/${user.id}`}>More Info</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesList;
