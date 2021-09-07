import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/actions/authAction";
import Swal from "sweetalert2";
import "./navbar.scss";
import { useHistory } from "react-router";

const Navbar = () => {
  const token = localStorage.getItem("token");

  const history = useHistory();

  const handlelogout = () => {
    Swal.fire({
      title: "Are you sure? You want to Logout!",
      // showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Yes`,
      // denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        history.push("/login");
        Swal.fire("logout!", "", "success");
      }
      // } else if (result.isDenied) {
      //   Swal.fire("Changes are not saved", "", "info");
      // }
    });
    // console.log(
    //   Swal.fire("Are you sure?", "You want to Logout!", "warning"),
    //   "prompt"
    // );
    // if (Swal.fire("Are you sure?", "You want to Logout!", "warning") === true) {
    //   console.log(
    //     Swal.fire("Are you sure?", "You want to Logout!", "warning"),
    //     "prompt2"
    //   );
    //   localStorage.removeItem("token");
    //   return history.push("/login");
    // } else {
    //   return Swal.fire("something went wrong", "error");
    // }
  };

  return (
    <div className="nav-container">
      {!token ? (
        <div>
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            {/* <div className="tick-mast">Ticket Master</div> */}
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
            </ul>
          </nav>
        </div>
      ) : (
        <div>
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <ul className="navbar-nav">
              <li className="nav-item">
                {" "}
                <Link to="/home" className="nav-link">
                  {" "}
                  Home
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
              <li className="nav-item">
                {" "}
                <Link onClick={handlelogout} className="nav-link">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
