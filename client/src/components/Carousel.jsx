import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  )
}

export default Carousel;