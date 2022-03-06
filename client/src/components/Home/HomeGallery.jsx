import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const HomeGallery = () => {

  const style = { marginBottom: 0, fontSize: "1.7em", letterSpacing: "1px", textAlign: "center" }

  return (
    <div>
      <h4 className="home-header">What We Specialize In</h4>
      <div className="home-gallery">
        <div className="home-photo-1">
          <Card className="home-1" sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="320"
              image="./images/home/home-manicure2.webp"
              alt="manicure"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={style}>
                Manicures
              </Typography>
              <Typography variant="body2" color="text.secondary" >
                A manicure is a beauty treatment which uses special tools, creams, waxes and/or massage techniques to leave your nails & hands healthy and looking good
              </Typography>
            </CardContent>
          </Card>
          <Card className="home-2" sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="320"
              image="./images/home/home-pedicure.webp"
              alt="pedicure"
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
        <div className="home-photo-2">
          <Card className="home-3" sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="320"
              image="./images/home/home-nailart.webp"
              alt="nail-art"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={style}>
                Nail Art
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Nail art is a creative way to paint, decorate, enhance, and embellish nails. It is a type of artwork that can be done on fingernails and toenails, usually after manicures or pedicures.
              </Typography>
            </CardContent>
          </Card>
          <Card className="home-4" sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="320"
              image="./images/home/home-wax.webp"
              alt="wax"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={style}>
                Wax
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get smooth, sleek and sexy. Waxing isn't just about hair removal. It's a skin care treatment as well. Our fast and effective waxing services will leave your skin hair-free and fabulously smooth.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default HomeGallery;