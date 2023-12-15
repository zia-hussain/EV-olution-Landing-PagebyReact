import { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [open, setOpen] = useState();

  return (
    <div className="nav">
      <div className="nav-logo">Ev-olution</div>
      <div className="nav-menu2">
      <ul className="nav-menu" style={{ opacity: open ? "1" : "0" }}>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav-contact">Contact</li>
      </ul>
      {!open ? (
        <i
          id="open"
          className="fa-solid fa-bars"
          onClick={() => setOpen(true)}
        ></i>
      ) : (
        <i
          id="close"
          className="fa-solid fa-xmark"
          onClick={() => setOpen(false)}
        ></i>
      )}
      </div>
    </div>
  );
};

export default Navbar;
