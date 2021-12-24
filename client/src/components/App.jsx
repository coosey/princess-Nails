import React from "react";
import Navbar from "./Navbar.jsx";
import Services from "./Services.jsx";
import About from "./About.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app" >
        <Navbar />
        <About />
      </div>
    </Router>
  )
}

export default App;