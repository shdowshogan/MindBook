import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.authtoken) {
      localStorage.setItem("token", json.authtoken);
      //redirect
      props.showAlert("Logged In successfully!","success")
      history("/home");
    } else {
      props.showAlert("Invalid Credentials!","danger")
      // alert("Invalid Credentials");
    }
  };

  const OnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <div className="container mb-3 w-25" style={{ minWidth: "300px" }}>
          <h1 style={{ fontFamily: "Roboto Flex" }}>Login</h1>
          <label htmlFor="email" className="form-label">
            Email Id
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={credentials.email}
            onChange={OnChange}
          />
        </div>
        <div className="container mb-3 w-25" style={{ minWidth: "300px" }}>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={OnChange}
          />
        </div>
        <div className="container mb-3 text-center">
          <button type="submit" className="w-25 btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
