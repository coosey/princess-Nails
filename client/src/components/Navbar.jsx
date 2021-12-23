import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import "../../dist/styles.css";

const Navbar = () => {
  const navigate = useNavigate();
  const homeClick = e => navigate("/");

  return (
    <div className="navBar">
      <Stack direction="row" sx={{ justifyContent: "space-evenly", alignItems: "center" }}>
        <div className="services">Services</div>
        <div className="title">Princess Nails</div>
        <div className="contact">Contact</div>
      </Stack>
    </div>

  )

}

export default Navbar;