import React from "react";
import { Link } from "react-router-dom";
import * as classes from "./styles/Home.module.css";

export default function Home({ click }) {
  return (
    <>
      <section className={classes.wrapper}>
        <nav className={classes.myNav}>
          <ul className={classes.myUl}>
            <li key={"1"} className={classes.link}>
              <Link to="/" className={classes.myLink}>
                Home
              </Link>
            </li>
            <li key={"2"} className={classes.link}>
              <Link to="/about" className={classes.myLink}>
                About
              </Link>
            </li>
          </ul>
        </nav>
        <h1 className={classes.top}>React App With Parcel</h1>
        <p className={[classes.para, classes.text].join(" ")}>
          ipsum assumenda animi amet consectetur adipisicing elit. Odio
          excepturi eligendi minima ab hic. Dolorem praesentium possimus ea, a
          consequuntur assumenda animi enim accusamus cumque? Repellendus
          aliquid voluptates enim. Maxime.
        </p>
        <p className={[classes.para2, classes.text].join(" ")}>
          <button className={classes.btn} onClick={click}>
            Open Side Drawer
          </button>
        </p>
      </section>
    </>
  );
}
