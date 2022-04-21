import SidebarData from "./SidebarData";
//import outSideClick from "../hooks/outSideClick";
import { useRef, useState, useEffect } from "react";
import * as classes from "./styles/Sidebar.module.css";
//import { VscMenu } from "react-icons/vsc";
// <FaBeer style={{ marginRight: "8px", marginLeft: "12px" }} />

export default function Sidebar({ open, setOpen }) {
  const node = useRef();
  //const sideBarRef = useRef(null);
  //const { isClicked } = outSideClick(sideBarRef);
  console.log(`open = ${open}`);
  //console.log(`isClicked = ${isClicked}`);
  //console.log(outClick);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    } // outside click
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    console.log("event listener fired");

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <>
      <section
        id="side"
        ref={node}
        className={
          !open ? classes.wrapper : [classes.wrapper, classes.open].join(" ")
        }
      >
        <SidebarData />
      </section>
    </>
  );
}
