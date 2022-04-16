import { useRef } from "react";
import SidebarData from "./SidebarData";
import outSideClick from "../hooks/outSideClick";
import * as classes from "./styles/Sidebar.module.css";
//import { VscMenu } from "react-icons/vsc";
// <FaBeer style={{ marginRight: "8px", marginLeft: "12px" }} />

export default function Sidebar({ open }) {
  const sideBarRef = useRef(null);
  const outClick = outSideClick(sideBarRef);

  outClick ? console.log("Outside Click") : console.log("Inside Click");
  console.log(`OutClick: ${outClick} - Open: ${open}`);

  /* const sideBaropen = classes.wrapper.open;
  const sideBarClosed = classes.wrapper; */

  /* const bodyClick = (e) => {
    if (outClick && open) {
      const className = classes.wrapper;
    } else {
      className = [classes.wrapper, classes.open].join(" ");
    }
  }; */

  // not working. remove outClick
  // maybe use bodyClick func?
  return (
    <section
      ref={sideBarRef}
      className={
        open == false && outClick == true
          ? classes.wrapper
          : [classes.wrapper, classes.open].join(" ")
      }
    >
      <SidebarData />
    </section>
  );
}
