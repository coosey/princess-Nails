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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="slick-container">
      <Slider {...settings}>
        <div>
          <img className="slick-img" src="./images/carousel/3229.webp" alt="nail art 1" />
        </div>
        <div>
          <img className="slick-img" src="./images/carousel/3228.webp" alt="nail art 2" />
        </div>
        <div>
          <img className="slick-img" src="./images/carousel/3227.webp" alt="nail art 3" />
        </div>
        <div>
          <img className="slick-img" src="./images/carousel/3226.webp" alt="nail art 4" />
        </div>
        <div>
          <img className="slick-img" src="./images/carousel/3224.webp" alt="nail art 5" />
        </div>
        <div>
          <img className="slick-img" src="./images/carousel/3223.webp" alt="nail art 6" />
        </div>
        <div>
          <img className="slick-img" src="./images/carousel/3222.webp" alt="nail art 7" />
        </div>
        <div>
          <img className="slick-img" src="./images/carousel/3221.webp" alt="nail art 8" />
        </div>
        <div>
          <img className="slick-img" src="./images/carousel/3220.webp" alt="nail art 9" />
        </div>
        <div>
          <img className="slick-img" src="./images/carousel/3219.webp" alt="nail art 10" />
        </div>
        <div>
          <img className="slick-img" src="./images/carousel/3218.webp" alt="nail art 11" />
        </div>
      </Slider>
    </div>
  )
}

export default Carousel;