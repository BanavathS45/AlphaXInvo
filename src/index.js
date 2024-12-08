import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "./css/style.css";
import "./css/alphaX.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "animate.css/animate.compat.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AnimatePresence>
    <BrowserRouter  >
      <App />

      {/* <Blog/> */}
      {/* <Store/> */}
    </BrowserRouter>
  </AnimatePresence>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
