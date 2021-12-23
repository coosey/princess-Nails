import React from "react";
import "../../dist/styles.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const homeClick = e => navigate("/");

  return (
    <div className="navBar">
      <h1 className="title">Princess Nails</h1>
    </div>
  )

}

export default Navbar;