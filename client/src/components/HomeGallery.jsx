import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const HomeGallery = () => {

  const style = { marginBottom: 0, fontSize: "1.7em", letterSpacing: "1px", textAlign: "center" }

  return (
    <div className="home-gallery-container">
      <div className="home-gallery">
        <div className="home-photo">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="220"
              image="./images/home/home-manicure.jpg"
              alt="manicure"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={style}>
                Manicures
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A manicure is a beauty treatment which uses special tools, creams, waxes and/or massage techniques to leave your nails & hands healthy and looking good
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="home-photo">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="220"
              image="./images/home/home-pedicure.jpg"
              alt="manicure"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={style}>
                Pedicures
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A pedicure is a therapeutic treatment for your feet that removes dead skin, softens hard skin and shapes and treats your toenails. Think of it as a manicure for the feet!
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="home-photo">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="220"
              image="./images/home/home-pedicure.jpg"
              alt="manicure"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={style}>
                Nail Art
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A pedicure is a therapeutic treatment for your feet that removes dead skin, softens hard skin and shapes and treats your toenails. Think of it as a manicure for the feet!
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="home-photo">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="220"
              image="./images/home/home-pedicure.jpg"
              alt="manicure"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={style}>
                Wax
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A pedicure is a therapeutic treatment for your feet that removes dead skin, softens hard skin and shapes and treats your toenails. Think of it as a manicure for the feet!
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default HomeGallery;