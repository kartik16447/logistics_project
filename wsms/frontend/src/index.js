import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./Authentication/Login";
import "./newStyles.css";

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById("root")
);
