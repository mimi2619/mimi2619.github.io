import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="acasa">
              Acasa
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="informatii">
              Informatii
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="jocuri">
              Jocuri
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="inscrie-te">
              Inscrie-te
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
