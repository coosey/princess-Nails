import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "5px",
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <div className="slick-container">
      <Slider {...settings}>
        <div>
          <img className="slick-img" src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img className="slick-img" src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img className="slick-img" src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img className="slick-img" src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img className="slick-img" src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img className="slick-img" src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img className="slick-img" src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img className="slick-img" src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img className="slick-img" src="http://placekitten.com/g/400/200" />
        </div>
      </Slider>
    </div>
  )
}

export default Carousel;