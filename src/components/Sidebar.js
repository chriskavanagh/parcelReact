import SidebarData from "./SidebarData";
import { useRef, useEffect } from "react";
//import outSideClick from "../hooks/outSideClick";
import * as classes from "./styles/Sidebar.module.css";

export default function Sidebar({ open, setOpen }) {
  const node = useRef();

  //const node = useRef(false);

  console.log(`open = ${open}`);
  //console.log(`isClicked = ${isClicked}`);
  //console.log(outClick);

  const handleClick = (e) => {
    console.log(e.timeStamp);
    if (node.current.contains(e.target)) {
      console.log(`INSIDE CLICK = ${e.target}`);
      // inside click
      return;
    } // outside click
    console.log(`OUT CLICK = ${e.target}`);
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    console.log("event listener fired");

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [open]);

  return (
    <>
      <section
        id="side"
        ref={node}
        className={
          !open ? classes.wrapper : [classes.wrapper, classes.open].join(" ")
        }
      >
        <SidebarData open={open} setOpen={setOpen} />
      </section>
    </>
  );
}
