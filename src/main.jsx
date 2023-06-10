import React from "react";
import HomePage from "./HomePage/HomePage.jsx";
import ReactDOM from "react-dom/client";
// import './reset.css';  I tried to import this file but I think the specificity on the rules is overriding .index.css
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
