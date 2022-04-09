import { SizeContextProvider } from "./context/size-context";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Characters from "./components/Characters";
import TopNavbar from "./components/TopNavbar";
import Sidebar from "./components/Sidebar";
import MyData from "./components/MyData";
import About from "./components/About";
import Home from "./components/Home";
import Test from "./components/Test";
//import { ReactQueryDevtools } from "react-query/devtools";
//import { QueryClient, QueryClientProvider, useQuery } from "react-query";

function App() {
  //const queryClient = new QueryClient();
  //const url = `https://course-api.com/react-store-products`;
  //const url = `https://rickandmortyapi.com/api`;
  const [open, setOpen] = useState(false);
  console.log(typeof open);
  //let side; initialize side variable.

  const clickHandler = (event) => {
    console.log(open);
    setOpen((open) => !open);
    // use "event.stopPropagation or the click will bleed through to body"
    event.stopPropagation();
  };

  //  close sideBar when body is clicked
  const onClick = (event) => {
    console.log(`Body Is Clicked`);
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
  useEffect(() => {
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  });

  //
  const scrollClick = (event) => {
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
  }, [open]);

  // open ? side=<Sidebar open={open} /> : null;

  return (
    <>
      <SizeContextProvider>
        <TopNavbar />
        <Sidebar open={open} />
        {/* {side} */}

        <Routes>
          <Route path="/" element={<Home click={clickHandler} />} />
          <Route path="/person" element={<Characters />} />
          <Route path="/about" element={<About click={clickHandler} />} />
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
