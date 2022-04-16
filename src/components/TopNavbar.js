import React from "react";
import { Link } from "react-router-dom";
import { FaList } from "react-icons/fa";
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

/* const styles = {
  anchor: {
    textDecoration: "none",
    color: "red",
    fontSize: "20px",
    background: "gray",
  },
}; */
