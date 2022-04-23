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
        <FaBeer />
        <Link to="/">Home</Link>
      </div>
      <div className={classes.text}>
        <FaAdjust />
        <Link to="/about">About</Link>
      </div>
      <div className={classes.text}>
        <FaArtstation />
        <Link to="/">Home</Link>
      </div>

      <div className={classes.text}>
        <FaBluetooth />
        <Link to="/about">React</Link>
      </div>
      <div className={classes.text}>
        <FaDashcube />
        <Link to="/about">About</Link>
      </div>
      <div className={classes.text}>
        <FaCodepen />
        <Link to="/">Home</Link>
      </div>

      <div
        style={{
          color: "#E1D9D1",
          display: "block",
          scrollbarWidth: "thin",
          padding: "24px 24px",
          // borderTop: "1px solid white",
          fontWeight: "500",
          fontSize: "16px",
          textAlign: "left",
          fontFamily: "Roboto, Arial, sans-serif",
          width: "100%",
          borderBottom: "3px solid red",
        }}
      >
        <p
          style={{
            color: "#E1D9D1",
            lineHeight: "1.4",
          }}
        >
          About Press Copyright
        </p>
        <p
          style={{
            color: "#E1D9D1",
            lineHeight: "1.4",
          }}
        >
          Contact us Creators
        </p>
        <p
          style={{
            color: "#E1D9D1",
            lineHeight: "1.4",
            marginBottom: "1rem",
          }}
        >
          Advertise Developers
        </p>
        <p
          style={{
            color: "#E1D9D1",
            lineHeight: "1.4",
          }}
        >
          Terms Privacy Policy & Safety
        </p>
        <p
          style={{
            color: "#E1D9D1",
            lineHeight: "1.4",
          }}
        >
          How YouTube works
        </p>
        <p
          style={{
            color: "#E1D9D1",
            lineHeight: "1.4",
            marginBottom: "1.7rem",
          }}
        >
          Test new features
        </p>
        <p
          style={{
            color: "#E1D9D1",
            lineHeight: "1.4",
            marginBottom: "1rem",
          }}
        >
          ©2022 Google LLC
        </p>
      </div>
    </main>
  );
}
