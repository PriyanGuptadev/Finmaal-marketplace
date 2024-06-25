import React, { Fragment } from "react";
import { Box, Divider, Typography } from "@mui/material";
import ComputerImage from "../assets/com2.png";
import MobileImage from "../assets/mobile.png";
import FileImage from "../assets/file.png";
import CarsImage from "../assets/cars.png";

function MarketPlaceItems() {
  return (
    <Fragment>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <Box>
          <Typography className="finmaalText">
            <span>Finmaal</span> Digital <br />
            Fact Finder
          </Typography>
          <Typography sx={{ fontSize: 18, marginTop: 2 }}>
            Personalized financial-need analysis
          </Typography>
          <Typography
            sx={{
              color: "rgb(138, 138, 138)",
              fontSize: 16,
              lineHeight: 1.5,
            }}
          >
            Accessible with just a few clicks, offering a quick & tailored{" "}
            <br />
            personalized need analysis & product recommendation.
            <br />
            <span>
              1. Digitalized Solution
              <br />
              2. User friendly process
              <br />
              3. Comprehensive Financial Calculators
              <br />
              4. Personalized Recommendations
            </span>
          </Typography>
        </Box>
        <Box>
          <img src={ComputerImage} alt="computer" />
        </Box>
      </Box>
      <Divider
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 10,
          borderBottom: "2px solid yellow",
          gap: 8,
          width: "97.4vw",
        }}
      />
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <Box>
          <Typography className="finmaalText">
            <span>Finmaal</span> Digital <br />
            Wallet
          </Typography>
          <Typography sx={{ fontSize: 18, marginTop: 2 }}>
            All of your Financial Information in 1 wallet
          </Typography>
          <Typography
            sx={{
              color: "rgb(138, 138, 138)",
              fontSize: 16,
              lineHeight: 1.5,
            }}
          >
            A single place to access your financial information such as <br />
            insurance policies & bank accounts.
            <br />
            <span>
              1. One App for all financial information
              <br />
              2. Ease in Claim requests
              <br />
              3. Store & upload relevant documents.
            </span>
          </Typography>
        </Box>
        <Box
          style={{ width: "30%", display: "flex", justifyContent: "center" }}
        >
          <img src={MobileImage} alt="computer" />
        </Box>
      </Box>
      <Divider
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 10,
          borderBottom: "2px solid yellow",
          gap: 8,
          width: "97.4vw",
        }}
      />
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <Box>
          <Typography className="finmaalText">
            <span>Finmaal</span> <br />
            Gamification
          </Typography>
          <Typography sx={{ fontSize: 18, marginTop: 2 }}>
            Financial learning without consequences!
          </Typography>
          <Typography
            sx={{
              color: "rgb(138, 138, 138)",
              fontSize: 16,
              lineHeight: 1.5,
            }}
          >
            Empowering youth with financial literacy through an interactive
            <br />
            game that imparts valuable lessons, equipping them to make
            <br /> informed decisions in their early financial journeys{" "}
          </Typography>
        </Box>
        <Box>
          <img src={FileImage} alt="computer" />
        </Box>
      </Box>
      <Divider
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 10,
          borderBottom: "2px solid yellow",
          gap: 8,
          width: "97.4vw",
        }}
      />
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <Box>
          <Typography className="finmaalText">
            <span>Finmaal</span> Motor <br />
            Claims Solution
          </Typography>
          <Typography sx={{ fontSize: 18, marginTop: 2 }}>
            Hassle Free Motor claims experience!
          </Typography>
          <Typography
            sx={{
              color: "rgb(138, 138, 138)",
              fontSize: 16,
              lineHeight: 1.5,
            }}
          >
            Our revolutionary motor claims solution offers a hassle-free <br />
            and efficient experience for our customers. With streamlined <br />
            processes, transparent communication, and quick resolution <br />
            times, we ensure that your claims are handled with the utmost <br />
            care and professionalism. Our goal is to get you back on the
            <br />
            road as swiftly and smoothly as possible.
          </Typography>
        </Box>
        <Box>
          <img src={CarsImage} alt="computer" />
        </Box>
      </Box>
    </Fragment>
  );
}

export default MarketPlaceItems;
