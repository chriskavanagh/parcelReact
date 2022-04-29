import React, { useEffect, useRef } from "react";
//import outSideClick from "../hooks/outSideClick";
import * as classes from "./styles/About.module.css";

export default function About({ click, open, setOpen }) {
  //const sideBarRef = useRef(null);
  //const outClick = outSideClick(sideBarRef);
  //console.log(outClick);

  /* const onClick = (event) => {
    //console.log(event);
    event.stopPropagation();
    open ? setOpen(false) : console.log("Already Closed");
  };

  useEffect(() => {
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [open]); */
  return (
    <section className={classes.wrapper}>
      <h1 className={classes.top}>About Us</h1>

      <p className={[classes.one, classes.text].join(" ")}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At provident
        facilis inventore adipisci magnam ipsam voluptates veritatis, vel
        quisquam eligendi dolorum natus expedita quo omnis eaque aut harum
        repellat amet.
      </p>
      <button className={classes.btn} onClick={click}>
        Open Side Drawer
      </button>
    </section>
  );
}
