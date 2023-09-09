import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const storedUsers = JSON.parse(localStorage.getItem("users"));

    if (!storedUsers) {
      alert("User not found");
    } else {
      const foundUser = storedUsers.find(
        (user) => user.email === email && user.password === password
      );
      if (foundUser) {
        alert("Correct password");
        navigate("/employeeslist");
      } else {
        alert("Wrong email or password");
      }
    }
  };

  return (
    <div className="container h-100 h-100 login-container">
      <div className="col-md-6">
        <h2
          className="mt-5 text-center
        "
        >
          Log in
        </h2>
        <form
          className="login-form p-4 rounded shadow formback"
          onSubmit={handleLogin}
        >
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/register" className="btn btn-link">
            Register
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
