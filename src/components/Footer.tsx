import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: "auto",
        color: "goldenrod",
        backgroundColor: "#261414",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="goldenrod">
              We compare over 200 credit cards to help you find the right one.
              From airmiles to cashback, we have a card for every need.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="goldenrod">
              Email: support@creditcards.com
              <br />
              Phone: +971 1234 5678
            </Typography>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="goldenrod">
            &copy; {new Date().getFullYear()} Credit Card Application. All
            rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
