import React from "react";
import About from "./About.jsx";
import Carousel from "./Carousel.jsx";
import Footer from "./Footer.jsx";
// import Socials from "./Links/Socials.jsx";
import HomeGallery from "./HomeGallery.jsx";

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <HomeGallery />
      <About />
      <Footer />
      {/* <Socials /> */}
    </div>
  )
}

export default Home;