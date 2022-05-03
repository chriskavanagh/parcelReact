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
import People from "./components/People";
import Languages from "./components/Languages";
import SuperHeroes from "./components/SuperHeroes";
import Pagination from "./components/Pagination";

//import { ReactQueryDevtools } from "react-query/devtools";
//import { QueryClient, QueryClientProvider, useQuery } from "react-query";

function App() {
  const [open, setOpen] = useState(false);

  const clickHandler = (event) => {
    event.stopPropagation();
    //open == false ? setOpen(true) : setOpen(false);
    open ? setOpen(false) : setOpen(true);
  };

  //  close sideBar when body is clicked
  /*  const onClick = (event) => {
    event.stopPropagation();
    if (open) {
      setOpen(false);
    }
  }; */

  return (
    <>
      <SizeContextProvider>
        <TopNavbar click={clickHandler} />
        <Sidebar open={open} setOpen={setOpen} />

        <Routes>
          <Route path="/" element={<Home click={clickHandler} />} />

          <Route path="/person" element={<Characters />} />
          <Route path="/lang" element={<Languages />} />
          <Route path="/people" element={<People />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route
            path="/about"
            element={
              <About click={clickHandler} open={open} setOpen={setOpen} />
            }
          />
          <Route path="/test" element={<Test click={clickHandler} />} />
          <Route path="/heroes" element={<SuperHeroes />} />
          <Route path="/data" element={<MyData />} />

          <Route
            path="*"
            element={
              <main style={styles.main}>
                <h1 style={styles.h1}>
                  Something Went <span style={styles.span}>Wrong!</span>
                </h1>
                <h2 style={styles.h2}>
                  <span style={styles.span}>No</span> Such Page Exists
                </h2>
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
    justifyContent: "start",
    color: "white",
    fontSize: "3rem",
    height: "100vh",
  },
  h1: {
    marginBottom: "3.8rem",
    marginTop: "3rem",
  },
  h2: { color: "white", marginBottom: "6rem" },
  span: {
    color: "red",
  },
};
