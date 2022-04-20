//import { useSizeContext } from "../context/size-context";
import * as classes from "./styles/Home.module.css";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
//import outSideClick from "../hooks/outSideClick";

export default function Home({ click }) {
  //const sideBar = useRef(null);
  //const outclick = outSideClick(sideBar);
  //const dimensions = useContext(SizeContext); (without useSizeContext hook)
  //const dimensions = useSizeContext(); (use like dimensions.width etc)
  //const { height, width } = useSizeContext(); //(destructure height, weight)

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
            {/* <li key={"3"} className={classes.link}>
              <Link to="/about" className={classes.myLink}>
                Height: {height}
              </Link>
            </li>
            <li key={"4"} className={classes.link}>
              <Link to="/about" className={classes.myLink}>
                Width: {width}
              </Link>
            </li> */}
          </ul>
        </nav>
        <h1 className={classes.top}>
          React <span>App With Parcel</span>
        </h1>
        <h3 style={{ color: "pink" }}></h3>
        <p className={[classes.para, classes.text].join(" ")}>
          ipsum assumenda animi amet consectetur adipisicing elit. Odio
          excepturi eligendi minima ab hic. Dolorem praesentium possimus ea, a
          consequuntur assumenda animi enim accusamus cumque? Repellendus
          aliquid voluptates enim. Maxime.
        </p>
        <div className={[classes.para2, classes.text].join(" ")}>
          <Button name={"Open Side Drawer"} click={click} />
        </div>
      </section>
    </>
  );
}
