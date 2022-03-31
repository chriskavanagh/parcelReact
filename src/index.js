import "./index.css";
import React, { useRef, useEffect, useState } from "react";
import App from "./App.js";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

/* ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
); */

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
