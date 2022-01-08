import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallSharpIcon from '@mui/icons-material/CallSharp';

const Contact = () => {
  const createData = (day, time) => {
    return { day, time }
  }

  const rows = [
    createData('Monday', "9:30 A.M - 7:30 P.M"),
    createData('Tuesday', "9:30 A.M - 7:30 P.M"),
    createData('Wednesday', "9:30 A.M - 7:30 P.M"),
    createData('Thursday', "9:30 A.M - 7:30 P.M"),
    createData('Friday', "9:30 A.M - 7:30 P.M"),
    createData('Saturday', "9:30 A.M - 7:30 P.M"),
    createData('Sunday', "Closed"),
  ]

  return (
    <div className="contact">
      <div className="contact-location">
        <h4 className="contact-location-title">Location</h4>
        <div className="google-map">
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
      <div className="information">
        <h4 className="contact-title">
          <LocationOnIcon />
          Address
        </h4>
          <div className="contact-info">39872 Los Alamos Rd Ste A3B Murrieta, CA 92562</div>
        <h4 className="contact-title">
          <CallSharpIcon />
          Phone
        </h4>
          <div className="contact-info">(951) 698-7191</div>
        <h4 className="contact-title">Business Hours</h4>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="simple table">
              <TableBody>
                {rows.map(row => (
                  <TableRow
                    key={row.day}
                  >
                    <TableCell component="th" scope="row">{row.day}</TableCell>
                    <TableCell>{row.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </div>
    </div>
  )
}

export default Contact;