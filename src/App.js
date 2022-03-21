import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Home from "./components/Home";
//import ReactDOM from "react-dom";

function App() {
  // initialize side variable.
  //let side;
  const [open, setOpen] = useState(false);

  // prop of open is true, className openWrapper is used on <Sidebar/>
  const clickHandler = (e) => {
    console.log(open);
    setOpen(!open);
  };

  // function to close sideBar when body is clicked
  const onClick = (e) => {
    console.log("CLICKED");
    if (open) {
      setOpen(!open);
    }
  };

  /* const onClick = (e) => {
    console.log("CLICKED");
    open ? setOpen(!open) : console.log("Sidebar Not Open");
  }; */

  // adds onClick body handler to Body.
  useEffect(() => {
    document.body.addEventListener("click", onClick);

    return () => {
      document.body.removeEventListener("click", onClick);
    };
  });

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
