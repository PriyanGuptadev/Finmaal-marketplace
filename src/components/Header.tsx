import React from "react";
import { Box } from "@mui/material";
import "./index.css";

const Header: React.FC = () => {
  return (
    <Box className="Discover-box">
      <Box className="container">
        <h3>Discover Your Ideal Credit Card </h3>
        <p>
          From Over 200 Options Searching for the perfect credit card to suit
          your lifestyle? Look no further. Whether you're interested in earning
          airmiles, enjoying two-for-one entertainment deals, or benefiting from
          cashback rewards, we've got you covered. Our extensive selection
          includes cards that offer free airport lounge access, travel perks,
          and more. Simply enter your preferences below to find the card that
          matches your needs and start enjoying your benefits today.
        </p>
      </Box>
    </Box>
  );
};

export default Header;
