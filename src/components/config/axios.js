import Axios from "axios";

const token = localStorage.getItem("token");
const axios = Axios.create({
  baseURL: `http://localhost:3009/api`,
});

axios.interceptors.request.use(function (config) {
  console.log(token, "auth_token");
  config.headers.authorization = token ? `${token}` : "";
  return config;
});

export default axios;
