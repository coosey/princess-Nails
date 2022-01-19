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
          <img className="slick-img" src="./images/carousel/IMG_3229.jpg" />
        </div>
        <div>
          <img className="slick-img" src="./images/carousel/IMG_3228.jpg" />
        </div>
        <div>
          <img className="slick-img" src="./images/carousel/IMG_3227.jpg" />
        </div>
        <div>
          <img className="slick-img" src="./images/carousel/IMG_3226.jpg" />
        </div>
        <div>
          <img className="slick-img" src="./images/carousel/IMG_3224.jpg" />
        </div>
        <div>
          <img className="slick-img" src="./images/carousel/IMG_3223.jpg" />
        </div>
        <div>
          <img className="slick-img" src="./images/carousel/IMG_3222.jpg" />
        </div>
        <div>
          <img className="slick-img" src="./images/carousel/IMG_3221.jpg" />
        </div>
        <div>
          <img className="slick-img" src="./images/carousel/IMG_3220.jpg" />
        </div>
        <div>
          <img className="slick-img" src="./images/carousel/IMG_3219.jpg" />
        </div>
        <div>
          <img className="slick-img" src="./images/carousel/IMG_3218.jpg" />
        </div>
      </Slider>
    </div>
  )
}

export default Carousel;