import React from "react";
import { Link } from "react-router-dom";
import * as classes from "./styles/Sidebar.module.css";

export default function Sidebar({ open }) {
  //console.log(typeof 10n);

  /* const sideBaropen = classes.wrapper.open;
  const sideBarClosed = classes.wrapper; */

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
