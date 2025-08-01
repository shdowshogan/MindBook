import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({name:"", email: "", password: "",cpassword:""});
  let history = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      const {name,email,password} = credentials;
      const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({name,email,password}),
    });
    const json = await response.json();
    console.log(json);
    if (json) {
      localStorage.setItem("token", json.authtoken);
      //redirect
      history("/home");
      props.showAlert("Registered Successfully","success");
    } else {
      props.showAlert("Invalid Credentials","danger");
    }
  };

  const OnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <div className="container mb-3 w-25" style={{ minWidth: "300px" }}>
          <h1 style={{ fontFamily: "Roboto Flex" }}>Register User</h1>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            onChange={OnChange}
            name="name"
          />
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={OnChange}
            name="email"
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
            onChange={OnChange}
            name="password"
            minLength={5}
          />
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            onChange={OnChange}
            name="cpassword"
            minLength={5}
          />
        </div>
        <div className="container mb-3 text-center">
          <button
            type="submit"
            className="w-25 btn btn-primary"
            style={{
              background: "linear-gradient(to right, #00c6ff, #0072ff)",
              color: "white",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
