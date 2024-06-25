import React from "react";
import { Grid, Typography, Link } from "@mui/material";

const HomePageFooter = () => {
  return (
    <footer className="footer">
      <Grid container className="footer-content">
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Company Name
          </Typography>
          <Typography variant="body1">
            A brief description or tagline about the company.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} className="footer-links">
          <Link href="#">Home</Link>
          <Link href="#">Services</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact Us</Link>
        </Grid>
      </Grid>
      <Typography variant="body2" className="footer-text">
        © {new Date().getFullYear()} Company Name. All rights reserved.
      </Typography>
    </footer>
  );
};

export default HomePageFooter;
