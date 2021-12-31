import React from "react";
import About from "./About.jsx";
import Carousel from "../Carousel.jsx";
import Socials from "./Socials.jsx";

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <About />
      <Socials />
    </div>
  )
}

export default Home;