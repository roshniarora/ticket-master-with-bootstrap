import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link to="/" class="navbar-brand">
          <img src="" alt="" />
          Ticket Master
        </Link>
        {/* <h2>Ticket Master</h2> */}
        <ul class="navbar-nav">
          <li class="nav-item">
            {" "}
            <Link to="/home" class="nav-link">
              Home
            </Link>
          </li>

          <li class="nav-item">
            {" "}
            <Link to="/register" class="nav-link">
              Register
            </Link>
          </li>
          <li class="nav-item">
            {" "}
            <Link to="/login" class="nav-link">
              Login
            </Link>
          </li>
          <li class="nav-item">
            {" "}
            <Link to="/customer" class="nav-link">
              Customer
            </Link>
          </li>
          <li class="nav-item">
            {" "}
            <Link
              to="/department"
              class="nav-link"
            >
              Department
            </Link>
          </li>
          <li class="nav-item">
            {" "}
            <Link to="/employee" class="nav-link">
              Employee
            </Link>
          </li>
          <li class="nav-item">
            {" "}
            <Link to="/ticket" class="nav-link">
              Tickets
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
