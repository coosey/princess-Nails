import React from "react";
import Home from "./Links/Home.jsx";
import NavBar from "./NavBar.jsx";
import Contact from "./Links/Contact.jsx";
import Services from "./Links/Services.jsx";
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="Services" element={<Services />} />
          <Route path="/" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;