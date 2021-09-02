import axios from "../../config/axios";
import * as types from "../store/constant";

// const auth = (cust, data) => {
//   return {
//     type: cust,
//     payload: data,
//   };
// };

// Register User

export const registerUser = async (data, history) => {
  try {
    const res = await axios.post("/register", data);
    if (res.data.hasOwnProperty("error")) return alert(res.data.error);
    else {
      alert("Register Successfully");
      history.push("/login");
    }
  } catch (err) {
    if (err.response) return alert(err.response.data);
  }
};

// Login User

export const loginUser = (data, history) => async (dispatch) => {
  try {
    const res = await axios.post("/login", data);
    dispatch({ type: types.LOGIN_LOADER, payload: false });
    if (res.data.hasOwnProperty("error")) return alert(res.data.error);
    else {
      localStorage.setItem("token", res.data.token);
      alert("Login Successfully");
      dispatch(history.push("/"));
    }
  } catch (err) {
    console.log(err);
  }
};

// Logout User

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  alert("Logged out Successfully.");
  // dispatch({ type: "RESET" });
  window.location.href = "/";
};

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
