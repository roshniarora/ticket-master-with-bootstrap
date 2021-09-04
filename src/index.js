import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "sweetalert2/dist/sweetalert2.all.min.js";
import "sweetalert2/dist/sweetalert2.min.css";
import "@popperjs/core";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

import configureStore from "../src/components/redux/store/configureStore";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));
