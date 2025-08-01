import React,{useContext, useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom';
// import { Navigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

const Navbar = () => {
  const context = useContext(noteContext);
  const {logout,getUser,user} = context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
    }
  }, [getUser]);

  let history = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    history('/login');
    logout();
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-color">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Home">
            MindBook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            {user.name && <h2>Hi {user.name}</h2>}
            {console.log(user.name)}
            {!localStorage.getItem('token') ? <form className="d-flex" role="search">
              <Link className="btn login-btn mx-2" to='/login'  role="button">Login</Link>
              <Link className="btn signup-btn mx-1"  to='/signup' role="button">Register User</Link>
            </form>:<button onClick={handleLogout} className="btn logout-btn mx-2">Log Out</button>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
