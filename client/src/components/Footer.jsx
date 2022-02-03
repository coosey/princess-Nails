import React from "react";
import Socials from "./Links/Socials.jsx";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallSharpIcon from '@mui/icons-material/CallSharp';

const Footer = () => {
  return (
    <div className="footer">
      <table className="footer-info">
        <thead className="footer-header">
          <tr>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody className="footer-body">
          <tr>
            <td>
              <LocationOnIcon />
              &nbsp; 39872 Los Alamos Rd Ste A3B Murrieta, CA 92562
            </td>
          </tr>
          <tr>
            <td>
              <CallSharpIcon />
              &nbsp; (951) 698-7191
            </td>
          </tr>
        </tbody>
      </table>
      <table className="footer-info">
        <thead className="footer-header">
          <tr>
            <th>Business hours</th>
          </tr>
        </thead>
        <tbody className="footer-body">
          <tr>
            <td>
              MON - SAT (9:30 A.M - 7:30 P.M)
            </td>
          </tr>
          <tr>
            <td>
              SUN (CLOSED)
            </td>
          </tr>
        </tbody>
      </table>
      <Socials />
    </div>
  )
}

export default Footer;