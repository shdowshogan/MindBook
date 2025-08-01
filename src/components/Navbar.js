import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
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
            <form className="d-flex" role="search">
              <Link className="btn login-btn mx-2" to='/login'  role="button">Login</Link>
              <Link className="btn signup-btn mx-1"  to='/signup' role="button">Register User</Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
