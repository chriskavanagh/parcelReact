import React from "react";
import * as classes from "./styles/Button.module.css";

export default function Button({ click, name }) {
  return (
    <div onClick={click} className={classes.btn}>
      {name}
    </div>
  );
}
