import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYelp } from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className="social-container">
      <h2 className="social-header">
        Follow Our Socials!
      </h2>
      <div className="social-body">
        <a href="https://www.instagram.com/princessnails_murrieta/" className="social-IG" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
        <a href="https://www.yelp.com/biz/princess-nails-murrieta-2" className="social-Yelp" aria-label="Yelp">
          <FontAwesomeIcon icon={faYelp} size="3x" />
        </a>
      </div>
    </div>
  )
}

export default Socials;