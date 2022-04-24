import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "../Components/Styles/Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light container">
        <div className="container-fluid">
          <h5 className="navbar-brand">
            <i className="bx bx-code-alt">
              <span style={{ color: "#E83A14" }}>Code</span>
            </i>
          </h5>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item mx-3">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <Button variant="contained" style={{ margin: "5px" }}>
              Login
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
