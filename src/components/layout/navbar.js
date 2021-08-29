import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="tick-mast">Ticket Master</div>
        <ul className="navbar-nav">
          <li className="nav-item">
            {" "}
            <Link to="/home" className="nav-link">
              {" "}
              Home
            </Link>
          </li>

          <li className="nav-item">
            {" "}
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>

          <li class="nav-item">
            {" "}
            <Link to="/customer" className="nav-link">
              Customer
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link to="/department" className="nav-link">
              Department
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link to="/employee" className="nav-link">
              Employee
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link to="/ticket" className="nav-link">
              Tickets
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
