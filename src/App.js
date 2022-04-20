import { SizeContextProvider } from "./context/size-context";
import { Routes, Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Characters from "./components/Characters";
import TopNavbar from "./components/TopNavbar";
import Sidebar from "./components/Sidebar";
import MyData from "./components/MyData";
import React, { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Test from "./components/Test";
//import { ReactQueryDevtools } from "react-query/devtools";
//import { QueryClient, QueryClientProvider, useQuery } from "react-query";

function App(props) {
  const [open, setOpen] = useState(false);

  //let side; initialize side variable.

  const clickHandler = (event) => {
    event.stopPropagation();
    open == false ? setOpen(true) : setOpen(false);
  };

  //  close sideBar when body is clicked
  const onClick = (event) => {
    event.stopPropagation();
    if (open) {
      setOpen(false);
    }
  };

  /* const onClick = (e) => {
    console.log(`onClick/App ${open}`);
    open == true ? setOpen(false) : console.log("Sidebar Not Open");
    //e.stopPropagation();
  }; */

  // adds onClick body handler to Body.
  /* useEffect(() => {
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }); */

  //
  /* const scrollClick = (event) => {
    if (open) {
      console.log("scrollClick is clicked");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  });

  // try no click event. or not an eventListener
  useEffect(() => {
    scrollClick();
  }, [open]); */

  // open ? side=<Sidebar open={open} /> : null;
  //console.log({ type: side });

  return (
    <>
      <SizeContextProvider>
        <TopNavbar click={clickHandler} />
        <Sidebar open={open} setOpen={setOpen} />
        {/* {side} */}

        <Routes>
          <Route path="/" element={<Home click={clickHandler} />} />
          <Route path="/person" element={<Characters />} />
          <Route
            path="/about"
            element={
              <About click={clickHandler} open={open} setOpen={setOpen} />
            }
          />
          <Route path="/test" element={<Test click={clickHandler} />} />
          <Route path="/data" element={<MyData />} />

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
