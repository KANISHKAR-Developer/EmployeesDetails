import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleRegistration = (event) => {
    event.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
      id: formData.id,
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      password: formData.password,
    };

    existingUsers.push(newUser);

    localStorage.setItem("users", JSON.stringify(existingUsers));

    navigate("/");
    alert("Account is created");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container h-100 register-container">
      <div className="col-md-6">
        <h2
          className="mt-5 text-center pb-2
        "
        >
          Register
        </h2>
        <form className="register-form p-4 rounded shadow formback">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Mobile number"
              name="mobile"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Employee ID"
              name="id"
              onChange={handleInputChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleRegistration}
          >
            Submit
          </button>
          <Link to="/" className="btn btn-link">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
