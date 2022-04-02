import React from "react";
import * as classes from "./styles/TopNavbar.module.css";

export default function TopNavbar() {
  return (
    <nav>
      <ul className={classes.mainNav}>
        <li className={classes.links}>
          <a className={classes.anchor} href="">
            About
          </a>
        </li>
        <li className={classes.links}>
          <a className={classes.anchor} href="">
            Products
          </a>
        </li>
        <li className={classes.links}>
          <a className={classes.anchor} href="">
            Our Team
          </a>
        </li>
        <li className={[classes.push, classes.links].join(" ")}>
          <a className={classes.anchor} href="">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  anchor: {
    textDecoration: "none",
    color: "red",
    fontSize: "20px",
    background: "gray",
  },
};
