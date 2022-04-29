import { Link } from "react-router-dom";
import {
  FaBeer,
  FaAdjust,
  FaArtstation,
  FaBluetooth,
  FaCodepen,
  FaDashcube,
} from "react-icons/fa";
import * as classes from "./styles/SidebarData.module.css";
import { VscMenu } from "react-icons/vsc";

export default function SidebarData({ open, setOpen }) {
  return (
    <main className={classes.wrapper}>
      <VscMenu
        onClick={() => setOpen(!open)}
        style={{
          color: "white",
          fontSize: "1.8rem",
          marginLeft: "22px",
          marginTop: "9px",
        }}
      />
      <div className={classes.text}>
        <FaBeer className={classes.reactIcons} />
        <Link to="/">Home</Link>
      </div>
      <div className={classes.text}>
        <FaAdjust className={classes.reactIcons} />
        <Link to="/about">About</Link>
      </div>
      <div className={classes.text}>
        <FaArtstation className={classes.reactIcons} />
        <Link to="/">Home</Link>
      </div>

      <div className={classes.text}>
        <FaBluetooth className={classes.reactIcons} />
        <Link to="/about">React</Link>
      </div>
      <div className={classes.text}>
        <FaDashcube className={classes.reactIcons} />
        <Link to="/about">About</Link>
      </div>
      <div className={classes.text}>
        <FaCodepen className={classes.reactIcons} />
        <Link to="/">Home</Link>
      </div>

      <div className={classes.footer}>
        <p>About Press Copyright</p>
        <p>Contact us Creators</p>
        <p>Advertise Developers</p>
        <p>Terms Privacy Policy & Safety</p>
        <p>How YouTube works</p>
        <p>Test new features</p>
        <p>©2022 Google LLC</p>
      </div>
    </main>
  );
}
