import React from "react";
import * as classes from "./styles/Home.module.css";

export default function Home({ click }) {
  return (
    <>
      <section className={classes.wrapper}>
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
