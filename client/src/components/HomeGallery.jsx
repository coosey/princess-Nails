import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const HomeGallery = () => {
  return (
    <div>
      <h5>What we specialize in</h5>
      <div className="home-gallery">
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="150"
              image="./images/home/home-manicure.jpg"
              alt="manicure"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Manicures
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A manicure is a beauty treatment which uses special tools, creams, waxes and/or massage techniques to leave your nails & hands healthy and looking good
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div>Pedicure</div>
        <div>Nail Art</div>
        <div>Wax</div>
      </div>
    </div>
  )
}

export default HomeGallery;