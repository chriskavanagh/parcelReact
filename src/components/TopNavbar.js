import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import * as classes from "./styles/TopNavbar.module.css";

export default function TopNavbar({ click }) {
  return (
    <nav>
      <ul className={classes.mainNav}>
        <li className={classes.links}>
          <GiHamburgerMenu
            onClick={click}
            style={{ color: "white", fontSize: "1.6rem" }}
          />
        </li>
        <li className={classes.links}>
          <Link className={classes.anchor} to="/about">
            About
          </Link>
        </li>
        <li className={classes.links}>
          <Link className={classes.anchor} to="/home">
            Products
          </Link>
        </li>
        <li className={classes.links}>
          <Link className={classes.anchor} to="about">
            Our Team
          </Link>
        </li>
        <li className={[classes.push, classes.links].join(" ")}>
          <Link className={classes.anchor} to="/home">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

/* const styles = {
  anchor: {
    textDecoration: "none",
    color: "red",
    fontSize: "20px",
    background: "gray",
  },
}; */
