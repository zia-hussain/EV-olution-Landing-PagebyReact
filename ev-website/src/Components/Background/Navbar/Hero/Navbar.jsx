import { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav">
      <div className="nav-logo">Ev-olution</div>
      <ul className="nav-menu" style={{ display: open ? "flex" : "none" }}>
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
  );
};

export default Navbar;
