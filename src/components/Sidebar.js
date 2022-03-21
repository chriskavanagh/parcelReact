import React from "react";
import { Link } from "react-router-dom";
import * as classes from "./styles/Sidebar.module.css";

export default function Sidebar({ open }) {
  //console.log(typeof 10n);
  //const [width, setWidth] = React.useState(0);
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  React.useEffect(() => {
    async function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      //console.log(width);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  /* const sideBaropen = classes.wrapper.open;
  const sideBarClosed = classes.wrapper; */

  return (
    <section
      className={
        !open ? classes.wrapper : [classes.wrapper, classes.open].join(" ")
      }
    >
      <h2 style={{ color: "white" }}>Height: {dimensions.height}</h2>
      <h2 style={{ color: "white" }}>Width: {dimensions.width}</h2>
      <nav className={classes.nav}>
        <ul className={classes.top}>
          <li key={"100"} className={classes.myLink}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </li>
          <li key={"101"} className={classes.myLink}>
            <Link to="/about" className={classes.link}>
              About
            </Link>
          </li>
          <li key={"102"} className={classes.myLink}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </li>
          <li key={"103"} className={classes.myLink}>
            <Link to="/" className={classes.link}>
              React
            </Link>
          </li>
          <li key={"104"} className={classes.myLink}>
            <Link to="/about" className={classes.link}>
              React
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
