import React from "react";
import Home from "./Home.jsx";
import NavBar from "./NavBar.jsx";
import Contact from "./Links/Contact.jsx";
import Services from "./Links/Services.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="Services" element={<Services />} />
          <Route path="/" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
    </div>
  )
}

export default App;