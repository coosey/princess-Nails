import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const About = () => {
  return (
      <div className="about-container">
        <h5 className="about-Header">About Us</h5>
        <Box>
          <Paper variant="outlined">
          <div className="about-Body">
            Hi! My name is Lisa, as a mother of 3, I opened this family-owned business almost 20 years ago. Many loving customers and friends have still come back to this place to receive the best treatment we can offer! Princess Nails is the only nail salon you need to visit in Murrieta. We specialize in manicures, pedicures, and waxing. Come visit Princess Nails for a relaxing experience!
          </div>
          </Paper>
        </Box>
      </div>
  )
}

export default About;
