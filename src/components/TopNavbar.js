import React from "react";
import { Link } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";
//import { GiHamburgerMenu } from "react-icons/gi";
import * as classes from "./styles/TopNavbar.module.css";

export default function TopNavbar({ click }) {
  return (
    <nav>
      <ul className={classes.mainNav}>
        <li className={classes.links}>
          <VscMenu
            onClick={click}
            style={{
              color: "white",
              fontSize: "1.7rem",
              marginLeft: "10px",
            }}
          />
        </li>
        <li className={classes.links}>
          <Link className={classes.anchor} to="/about">
            About
          </Link>
        </li>
        <li className={classes.links}>
          <Link className={classes.anchor} to="/people">
            People
          </Link>
        </li>
        <li className={classes.links}>
          <Link className={classes.anchor} to="/data">
            Data
          </Link>
        </li>
        <li className={[classes.push, classes.links].join(" ")}>
          <Link className={classes.anchor} to="/lang">
            Languages
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
