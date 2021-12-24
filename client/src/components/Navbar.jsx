import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Services from "./Services.jsx";
import { NavLink } from "react-router-dom";
import "../../dist/styles.css";

const Navbar = () => {
  const navigate = useNavigate();

  const homeClick = e => navigate("/");


  return (
    <nav className="navBar">
      <div className="nav-container">
        <NavLink exact to="/services" className="services-link">
          Services
        </NavLink>
        <NavLink exact to="/" className="title-link">
          Princess Nails
        </NavLink>
      </div>
    </nav>

  )

}

export default Navbar;

// return (
//   <div className="navBar">
//     <Stack direction="row" sx={{ justifyContent: "space-evenly", alignItems: "center" }}>
//       <div className="services">Services</div>
//       <div className="title">Princess Nails</div>
//       <div className="contact">Contact</div>
//     </Stack>
//   </div>

// )