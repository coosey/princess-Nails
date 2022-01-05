import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h4 className="contact-title">Contact Us</h4>
      <div className="contact-info">
        <p>39872 Los Alamos Rd Ste A3B Murrieta, CA 92562</p>
        <p>(951) 698-7191</p>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.301835324778!2d-117.18690954901354!3d33.57151158064491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc82703dccff57%3A0x8b0a0aa414b33a4f!2sPrincess%20Nails%20(WE&#39;RE!5e0!3m2!1sen!2sus!4v1641415906986!5m2!1sen!2sus"
          width="600px"
          height="450px"
          style={{ border:"0" }}
          allowFullScreen=""
          loading="lazy"
        >
        </iframe>
      </div>
    </div>
  )
}

export default Contact;