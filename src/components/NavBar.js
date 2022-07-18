import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function NavBar() {
  return (
    <nav className="NavBar">
      <img src={logo} alt="logo" />
      <ul className="navbar-links">
        <Link className="navbar-links-item" to="/">
          View Properties
        </Link>
        <Link className="navbar-links-item" to="/add-property">
          Add Property
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
