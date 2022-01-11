import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const Services = () => {
  const fullSetData = (name, price) => {
    return { name, price }
  }

  const fillData = (name, price) => {
    return { name, price }
  }

  const waxData = (name, price) => {
    return { name, price }
  }

  const fullSets = [
    fullSetData('REGULAR', 35),
    fullSetData('WHITE TIPS W/ GEL', 40),
    fullSetData('PINK & WHITE', 50),
    fullSetData('POWDER COLOR', 45)
  ]

  const fills = [
    fillData('REGULAR', 30),
    fillData('PINK', 35),
    fillData('PINK & WHITE', 45)
  ]

  const waxes = [
    waxData('UPPER LIP', 7),
    waxData('CHIN', 10),
    waxData('EYEBROWS', 12),
    waxData('UNDERARMS', 17),
    waxData('HALF ARMS', 30),
    waxData('FULL ARMS', 40),
    waxData('HALF LEGS (UPPER/LOWER)', 35),
    waxData('FULL LEGS', 50),
    waxData('CHEST', 35),
    waxData('BACK', 40),
    waxData('BIKINI', 30),
    waxData('BRAZILIAN', 50)
  ]

  return (
      <div className="services">
        <div className="fullset-fill">
          <h4 className="services-title">Come get professionally polished</h4>
          <div className="services-fullset">
            <Typography variant="h5" sx={{ textAlign: "center", margin: "15px" }}>Full Set</Typography>
            <TableContainer component={Paper}>
              <Table size="medium" aria-label="simple-table">
                <TableBody>
                  {fullSets.map(set => (
                    <TableRow key={set.name}>
                      <TableCell component="th" scope="row">{set.name}</TableCell>
                      <TableCell>{set.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="services-fill">
            <Typography variant="h5" sx={{ textAlign: "center", margin: "15px" }}>Fills</Typography>
              <TableContainer component={Paper}>
                <Table size="medium" aria-label="simple-table">
                  <TableBody>
                    {fills.map(fill => (
                      <TableRow key={fill.name}>
                        <TableCell component="th" scope="row">{fill.name}</TableCell>
                        <TableCell>{fill.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
          </div>
          <h5 className="services-quote">~ A good manicure says everything ~</h5>
          <div className="img-1">
            <Card>
              <CardMedia
                component="img"
                image="./images/services-nail2.jpg"
              />
            </Card>
          </div>
        </div>
        <div className="img-2">
          <div className="fullset-img">
            <Card>
              <CardMedia
                component="img"
                image="./images/services-nail.jpg"
              />
            </Card>
          </div>
          <div className="wax">
          <Typography variant="h5" sx={{ textAlign: "center", margin: "15px" }}>Wax</Typography>
                <TableContainer component={Paper}>
                  <Table size="medium" aria-label="simple-table">
                    <TableBody>
                      {waxes.map(wax => (
                        <TableRow key={wax.name}>
                          <TableCell component="th" scope="row">{wax.name}</TableCell>
                          <TableCell>{wax.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
          </div>
        </div>
      </div>
  )
}

export default Services;