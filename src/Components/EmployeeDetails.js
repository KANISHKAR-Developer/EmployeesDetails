import React from "react";
import { useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const { id } = useParams();
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const selectedEmployee = storedUsers.find((user) => user.id === id);

  return (
    <div className="container employee-details-container">
      <h2 className="mt-5">Employee Details</h2>
      {selectedEmployee ? (
        <div className="mt-3 shadow formback rounded p-2">
          <p>
            <strong>Employee ID:</strong> {selectedEmployee.id}
          </p>
          <p>
            <strong>Name:</strong> {selectedEmployee.name}
          </p>
          <p>
            <strong>Mobile:</strong> {selectedEmployee.mobile}
          </p>
          <p>
            <strong>Email:</strong> {selectedEmployee.email}
          </p>
        </div>
      ) : (
        <p className="mt-3">Employee not found</p>
      )}
    </div>
  );
};

export default EmployeeDetails;
