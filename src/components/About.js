import React from "react";
import * as classes from "./styles/About.module.css";

export default function About() {
  return (
    <section className={classes.wrapper}>
      <h1 className={classes.top}>About Us</h1>

      <p className={[classes.one, classes.text].join(" ")}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At provident
        facilis inventore adipisci magnam ipsam voluptates veritatis, vel
        quisquam eligendi dolorum natus expedita quo omnis eaque aut harum
        repellat amet.
      </p>
    </section>
  );
}
