import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as classes from "./styles/Sidebar.module.css";

export default function Sidebar({ open }) {
  console.log(`Button ${open}`);
  console.count(`Rerender: `);

  /* const sideBaropen = classes.wrapper.open;
  const sideBarClosed = classes.wrapper; */

  return (
    <section
      className={
        open == false
          ? classes.wrapper
          : [classes.wrapper, classes.open].join(" ")
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
          <hr className={classes.divider} />
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
          <li key={"105"} className={classes.myLink}>
            <Link to="/about" className={classes.link}>
              React
            </Link>
          </li>
          <hr className={classes.divider} />
        </ul>
        <div
          style={{
            padding: ".7rem",
            color: "white",
            fontSize: "13px",
            display: "inline-block",
            scrollbarWidth: "thin",
          }}
        >
          <p
            style={{
              marginBottom: "1rem",
              marginTop: "1rem",
              marginLeft: "1rem",
              marginRight: "1rem",
              padding: ".5rem",
              lineHeight: "1.8rem",
              display: "inline-block",
            }}
          >
            AboutPressCopyrightContact usCreatorsAdvertiseDevelopers
          </p>
          <p
            style={{
              marginBottom: "1rem",
              lineHeight: "1.8rem",
              display: "inline-block",
            }}
          >
            TermsPrivacyPolicy & SafetyHow YouTube worksTest new features © 2022
          </p>
          <p
            style={{
              marginBottom: "1rem",
              marginTop: "2rem",
              lineHeight: "1.8rem",
              display: "inline-block",
            }}
          >
            Google LLC
          </p>
        </div>
      </nav>
    </section>
  );
}
