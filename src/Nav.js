import React from "react";
import "./style.css";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="nav-logo">
          <img src="./logo512.png" alt="react-logo" className="nav-icon" />
          <p className="nav-title">ReactFacts</p>
        </div>
        <p className="description">React Course - Project 1</p>
      </nav>
    </header>
  );
}
