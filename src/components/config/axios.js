import Axios from "axios";

const token = localStorage.getItem("authToken");
const axios = Axios.create({
  baseURL: `http://localhost:3009/api`,
});

axios.interceptors.request.use(function (config) {
  config.headers.Authorization = token ? `${token}` : "";
  return config;
});

export default axios;
