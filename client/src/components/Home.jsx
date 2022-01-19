import React from "react";
import About from "./About.jsx";
import Carousel from "./Carousel.jsx";
import Socials from "./Links/Socials.jsx";
import HomeGallery from "./HomeGallery.jsx";

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <HomeGallery />
      <About />
      <Socials />
    </div>
  )
}

export default Home;