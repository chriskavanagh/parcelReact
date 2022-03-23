import React from "react";
import * as classes from "./styles/Button.module.css";

export default function Button(props) {
  return (
    <div onClick={props.click} className={classes.btn}>
      {props.name}
    </div>
  );
}
