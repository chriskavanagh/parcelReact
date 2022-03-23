import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SizeContextProvider } from "./context/size-context";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  const [open, setOpen] = useState(false);
  // initialize side variable.
  //let side;

  // prop of open is true, className openWrapper is used on <Sidebar/>
  const clickHandler = (e) => {
    console.log(open);
    setOpen(!open);
  };

  //  close sideBar when body is clicked
  /* const onClick = (e) => {
    console.log("CLICKED");
    if (open) {
      setOpen(!open);
    }
  }; */

  const onClick = (e) => {
    console.log("CLICKED");
    open ? setOpen(!open) : console.log("Sidebar Not Open");
  };

  // adds onClick body handler to Body.
  useEffect(() => {
    document.body.addEventListener("click", onClick);

    return () => {
      document.body.removeEventListener("click", onClick);
    };
  });

  return (
    <>
      <BrowserRouter>
        <SizeContextProvider>
          <Sidebar open={open} />
          {/* {side} */}
          <Routes>
            <Route path="/" element={<Home click={clickHandler} />} />
            <Route path="/about" element={<About click={clickHandler} />} />
          </Routes>
        </SizeContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
