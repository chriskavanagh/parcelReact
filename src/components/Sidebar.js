import React from "react";
import { Link } from "react-router-dom";
import * as classes from "./styles/Sidebar.module.css";

export default function Sidebar() {
  return (
    <section className={classes.wrapper}>
      <nav className={classes.nav}>
        <ul className={classes.top}>
          <li>
            <Link to="/about" className={classes.link}>
              <h3>React</h3>
            </Link>
          </li>
          <li>
            <Link to="/" className={classes.link}>
              <h3>React</h3>
            </Link>
          </li>
          <li>
            <Link to="/about" className={classes.link}>
              <h3>React</h3>
            </Link>
          </li>
          <li>
            <Link to="/" className={classes.link}>
              <h3>React</h3>
            </Link>
          </li>
          <li>
            <Link to="/about" className={classes.link}>
              <h3>React</h3>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
