import React from "react";
import About from "./About.jsx";
import NavBar from "./NavBar.jsx";
import Services from "./Links/Services.jsx";
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="Services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;