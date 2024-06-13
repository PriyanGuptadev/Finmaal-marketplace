import React, { Fragment } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RemoveBagImage from "../assets/com-removebg-preview.png";
import MarketPlaceItems from "./MarketPlaceItems";

const Home: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };
  return (
    <Fragment>
      <Box
        className="slider-backGroud"
        sx={{ maxWidth: "100%", margin: "0 auto" }}
      >
        <Slider {...settings}>
          <Box className="slider-backGroud">
            <h3 className="text-center">
              "We're building innovative & ethical solutions to serve
              generations by fulfilling their financial needs at every stage of
              their lives, from lifestyle planning to retirement to death..."
            </h3>
          </Box>
          <Box className="slider-backGroud">
            <h3>
              "At Finmaal, we are driven by integrity, innovation, and
              customer-centricity. We believe in providing transparent and
              ethical financial solutions that empower our customers. Our
              commitment to excellence, continuous improvement, and fostering
              trust ensures we meet the evolving needs of our clients and the
              market."
            </h3>
          </Box>
          <Box className="slider-backGroud">
            <h3>
              "We're building innovative & ethical solutions to serve
              generations by fulfilling their financial needs at every stage of
              their lives, from lifestyle planning to retirement to death..."
            </h3>
          </Box>
        </Slider>
      </Box>
      <Fragment>
        <Box className="mainContainer">
          <Box
            sx={{
              display: "grid",
              width: "100%",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h1" sx={{ fontSize: 56, color: "white" }}>
              Finmaal Marketplace
            </Typography>
            <Typography className="smallText">
              The Finmaal Marketplace is complemented by our range of innovative
              offerings, including personalized financial advice, secure digital
              wallets, and engaging financial literacy tools. Together, these
              solutions cater to the comprehensive lifestyle financial needs of
              our customers, ensuring a seamless and informed financial journey.
            </Typography>
          </Box>

          <Box sx={{ marginTop: 5, display: "flex", justifyContent: "center" }}>
            <Grid sx={{ justifyContent: "center" }} container spacing={10}>
              <Grid item>
                <Box sx={{ display: "grid", gap: 10 }}>
                  <Box sx={{ width: 240 }}>
                    <div className="yellowBorderLeft" />
                    <Typography className="leftText">
                      Personalized <br /> Financial Advice
                    </Typography>
                  </Box>
                  <Box sx={{ width: 240 }}>
                    <div className="yellowBorderLeft" />
                    <Typography className="leftText">
                      Financial Literacy & <br /> Inclusion
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item sx={{ marginTop: "-21px" }}>
                <img src={RemoveBagImage} alt="computer" />
              </Grid>
              <Grid item>
                <Box sx={{ display: "grid", gap: 7 }}>
                  <Box sx={{ width: 240 }}>
                    <div className="yellowBorderRight" />
                    <Typography className="rigthText">
                      All financial <br /> information in one <br />
                      place
                    </Typography>
                  </Box>
                  <Box sx={{ width: 240 }}>
                    <div className="yellowBorderRight" />
                    <Typography className="rigthText">
                      Hassle-free motor <br /> claim Experience
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Divider
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
                borderBottom: "2px solid yellow",
                width: "97.4vw",
              }}
            />
            <MarketPlaceItems />
          </Box>
        </Box>
      </Fragment>
    </Fragment>
  );
};

export default Home;
