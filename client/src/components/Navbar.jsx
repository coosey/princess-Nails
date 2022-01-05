import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "../../dist/styles.css";

const NavBar = () => {

  return (
    <nav className="navBar">
      <div className="nav-container">
        <NavLink exact to="/services" className="nav-link">
          Services
        </NavLink>
        <NavLink exact to="/" className="title-link">
          Princess Nails
        </NavLink>
        <NavLink exact to="/contact" className="nav-link">
          Contact
        </NavLink>
      </div>
    </nav>

  )

}

export default NavBar;

