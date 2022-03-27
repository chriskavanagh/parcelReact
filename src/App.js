import { BrowserRouter, Routes, Route, resolvePath } from "react-router-dom";
import { SizeContextProvider } from "./context/size-context";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Home from "./components/Home";
import Test from "./components/Test";

function App() {
  const [open, setOpen] = useState(false);
  //let side; initialize side variable.

  // prop of open is true, className `.wrapper.open` is used on <Sidebar/>
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

  // open ? side=<Sidebar open={open} /> : null;

  return (
    <>
      <SizeContextProvider>
        <Sidebar open={open} />
        {/* {side} */}
        <Routes>
          <Route path="/" element={<Home click={clickHandler} />} />
          <Route path="/about" element={<About click={clickHandler} />} />
          <Route path="/test" element={<Test click={clickHandler} />} />
          <Route
            path="*"
            element={
              <main style={styles.main}>
                <h1 style={styles.h1}>No Such Page Exists!</h1>
                <h3>
                  <span style={styles.span}>404 Error</span> - Page Not Found
                </h3>
              </main>
            }
          />
        </Routes>
      </SizeContextProvider>
    </>
  );
}

export default App;

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "3rem",
    height: "100vh",
  },
  h1: {
    marginBottom: "3.8rem",
  },
  span: {
    color: "red",
  },
};
