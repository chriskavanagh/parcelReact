import SidebarData from "./SidebarData";
import outSideClick from "../hooks/outSideClick";
import { useRef, useState, useEffect } from "react";
import * as classes from "./styles/Sidebar.module.css";
//import { VscMenu } from "react-icons/vsc";
// <FaBeer style={{ marginRight: "8px", marginLeft: "12px" }} />

export default function Sidebar({ open, setOpen }) {
  // const [closed, setClosed] = useState(true);
  const sideBarRef = useRef(null);
  const outClick = outSideClick(sideBarRef);
  console.log(`open = ${open}`);
  console.log(`outClick = ${outClick}`);
  //console.log(outClick);

  function closeWithClick(event) {
    if (outClick) {
      setOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", closeWithClick);

    return () => {
      document.removeEventListener("click", closeWithClick);
    };
  }, [outClick]);

  /* useEffect(() => {
    if (outClick) {
      document.addEventListener("click", closeWithClick);
    } else {
      document.removeEventListener("click", closeWithClick);
    }

    return () => {
      document.removeEventListener("click", closeWithClick);
    };
  });  */

  return (
    <>
      <section
        ref={sideBarRef}
        className={
          !open ? classes.wrapper : [classes.wrapper, classes.open].join(" ")
        }
      >
        <SidebarData />
      </section>
      {outClick ? (
        <section
          ref={sideBarRef}
          className={
            !open ? classes.wrapper : [classes.wrapper, classes.open].join(" ")
          }
        >
          <SidebarData />
        </section>
      ) : (
        <section
          ref={sideBarRef}
          className={
            open ? classes.wrapper : [classes.wrapper, classes.open].join(" ")
          }
        >
          <SidebarData />
        </section>
      )}
    </>
  );
}
