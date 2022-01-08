import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';

const Services = () => {
  const fullSetData = (name, price) => {
    return { name, price }
  }

  const fullSets = [
    fullSetData('Regular', 35),
    fullSetData('White tips w/ gel', 40),
    fullSetData('Pink & white', 50),
    fullSetData('Powder color', 45)
  ]

  return (
      <div className="services">
          <h4 className="services-title">Come get professionally polished.</h4>
          <div className="services-fullset">
            <Typography variant="h5" sx={{ textAlign: "center", margin: "5px" }}>Full Set</Typography>
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
      </div>
  )
}

export default Services;