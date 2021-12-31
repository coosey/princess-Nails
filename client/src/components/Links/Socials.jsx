import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYelp } from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className="social-container">
      <h3 className="social-header">Follow our Socials!</h3>
      <div className="social-body">
        <a href="https://www.instagram.com/princessnails_murrieta/" className="social-IG">
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
        <a href="https://www.yelp.com/biz/princess-nails-murrieta-2" className="social-Yelp">
          <FontAwesomeIcon icon={faYelp} size="3x" />
        </a>
      </div>
    </div>
  )
}

export default Socials;