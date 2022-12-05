import React from "react";
import "./Navbar.css";

export default function Navbar() {
  const [showNav, setShowNav] = React.useState(false);

  function handleClick() {
    setShowNav((prevNav) => {
      return !prevNav;
    });
  }
  return (
    <header className="header">
      <nav className={`main-nav ${showNav === true ? "showMobileNav" : ""}`}>
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#acasa">
              Acasa
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#informatii">
              Informatii
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#jocuri">
              Jocuri
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#echipa">
              Echipa
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="main-nav-link"
              href="https://docs.google.com/spreadsheets/d/1L7LKrVUALK8qND5gBUk_pqs_cckiprEA6yugAORcIQE/edit?usp=sharing"
            >
              Inscrie-te
            </a>
          </li>
        </ul>
      </nav>
      <button className={`mobileNavButton`} onClick={handleClick}>
        <img
          src={process.env.PUBLIC_URL + "/menu-icon.svg"}
          className="menu-icon"
        />
      </button>
    </header>
  );
}
