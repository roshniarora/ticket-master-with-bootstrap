import axios from "../../config/axios";

// const auth = (cust, data) => {
//   return {
//     type: cust,
//     payload: data,
//   };
// };

// Register User

const registerUser = async (data, history) => {
  try {
    const res = await axios.post("/register", data);
    if (res.data.hasOwnProperty("error")) return alert(res.data.error);
    else {
      alert("Register Successfully");
      history.push("/user/login");
    }
  } catch (err) {
    if (err.response) return alert(err.response.data);
  }
};

// Login User

const loginUser = (data, history) => async () => {
  try {
    const res = await axios.post("/login", data);
    if (res.data.hasOwnProperty("error")) return alert(res.data.error);
    else {
      alert("Login Successfully");
      localStorage.setItem("token", res.data.token);
      history.push("/");
    }
  } catch (err) {
    console.log(err);
  }
};
export { loginUser, registerUser };
