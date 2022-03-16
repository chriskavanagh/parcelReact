import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Home from "./components/Home";
//import ReactDOM from "react-dom";
import React from "react";

function App() {
  return (
    <>
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
