import React from "react";
import * as classes from "./styles/Home.module.css";

export default function Home() {
  return (
    <section className={classes.wrapper}>
      <h1 className={classes.top}>React App With Parcel</h1>
      <p className={[classes.para, classes.text].join(" ")}>
        ipsum dolor sit amet consectetur adipisicing elit. Odio excepturi
        eligendi minima ab hic. Dolorem praesentium possimus ea, a consequuntur
        assumenda animi enim accusamus cumque? Repellendus aliquid voluptates
        enim. Maxime.
      </p>
      <p className={[classes.para2, classes.text].join(" ")}>
        minima eligendi iure quas modi alias placeat inventore, cupiditate neque
        architecto quam perferendis consectetur similique nulla repellendus
        quisquam amet. Eum placeat nam commodi et veniam quisquam, architecto
        amet adipisci.
      </p>
    </section>
  );
}
