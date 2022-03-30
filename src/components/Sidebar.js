import React from "react";
import { Link } from "react-router-dom";
import * as classes from "./styles/Sidebar.module.css";

export default function Sidebar({ open }) {
  //console.log(`Sidebar ${open}`);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    async function handleResize() {
      const w = await document.body.clientWidth;
      setWidth(w);
      console.log(width);
    }
    window.addEventListener("resize", handleResize);
    window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <section
      className={
        !open ? classes.wrapper : [classes.wrapper, classes.open].join(" ")
      }
    >
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
