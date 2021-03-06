import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const About = () => {
  return (
      <div className="about-container">
        <Box>
          <Paper variant="outlined">
          <h5 className="about-Header">About Us</h5>
          <div className="about-Body">
            <p>
              At Princess Nails, our professional technicians will provide you a rewarding beauty experience to truly pamper yourself. We're about nail care that is really centered around your wellbeing and prosperity, and we take pride in providing you quality service.
            </p>
              <br></br>
            <p>
              Specializing in manicures, pedicures, acrylic nails, and waxing, Princess Nails offer the best quality products and decent pricing! Come check out hundreds of beautiful gel colors and stylish nail models, and visit us for the best facial, manicure, or pedicure experience in town!
            </p>
              <br></br>
            <p>
              Conveniently located in Murrieta right of the I-215S freeway on Los Alamos Rd, Princess Nails has been providing the highest level of personal care in Murrieta for over 20 years! With our sense responsibility to your beauty and excellent customer service, we welcome new and old clients alike.
            </p>
          </div>
          </Paper>
        </Box>
      </div>
  )
}

export default About;
