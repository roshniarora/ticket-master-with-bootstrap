import axios from "../../config/axios";
import * as types from "../store/constant";
import Swal from "sweetalert2";
import { useHistory } from "react-router";

// Register a user

export const registerUser = async (data, history) => {
  try {
    const res = await axios.post("/register", data);
    if (res.data.hasOwnProperty("error")) return alert(res.data.error);
    else {
      // alert("registered successfully");
      Swal.fire("Good job!", 'Register Successfully"', "success");
      history.push("/login");
    }
  } catch (err) {
    if (err.response) return Swal.fire(err.response.data);
  }
};

// Login a User

export const loginUser = (data, history) => async (dispatch) => {
  try {
    const res = await axios.post("/login", data);
    dispatch({ type: types.LOGIN_LOADER, payload: false });
    if (res.data.hasOwnProperty("error")) return Swal.fire(res.data.error);
    else {
      localStorage.setItem("token", res.data.token);
      Swal.fire("Good job!", 'login Successfully"', "success");
      dispatch(history.push("/"));
    }
  } catch (err) {
    console.log(err);
  }
};

// Logout User

// export const logoutUser = () => (dispatch) => {
//   // const history = useHistory();
//   localStorage.removeItem("token");

//   Swal.fire("Are you sure?", "You want to Logout!", "warning");
//   // dispatch(history.push("/home"));
//   // dispatch({ type: "RESET" });
// };

// export const startLogoutUser = () => (dispatch) => {
//   axios.delete("/users/logout").then((response) => {
//     if (response.data.notice) {
//       alert(response.data.notice);
//       localStorage.removeItem("token");
//       // dispatch(setUser({}));
//       window.location.href = "/";
//     }
//   });
// };
