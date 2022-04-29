import React from "react";
import * as classes from "./styles/Button.module.css";

export default function Button({ click, name }) {
  return (
    <button onClick={click} className={classes.btn}>
      {name}
    </button>
  );
}
