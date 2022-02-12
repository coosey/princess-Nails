import React from "react";
import About from "./About.jsx";
import Carousel from "./Carousel.jsx";
import Footer from "../Footer.jsx";
import HomeGallery from "./HomeGallery.jsx";

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <HomeGallery />
      <About />
      <Footer />
    </div>
  )
}

export default Home;