import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Home from "./components/Home";
//import ReactDOM from "react-dom";
import React, { useState } from "react";

function App() {
  let side;
  const [open, setOpen] = useState(false);

  // prop of open is true, className openWrapper is used on <Sidebar/>
  const clickHandler = (e) => {
    console.log(open);
    setOpen(!open);
  };

  // not using this way to show <Sidebar/>
  /* if (open) {
    side = <Sidebar open={open} />;
  } */
  return (
    <>
      <BrowserRouter>
        <Sidebar open={open} />
        {/* {side} */}
        <Routes>
          <Route path="/" element={<Home click={clickHandler} />} />
          <Route path="/about" element={<About click={clickHandler} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
