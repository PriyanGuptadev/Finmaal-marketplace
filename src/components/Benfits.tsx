import React from "react";
import { Dialog, DialogTitle, DialogActions, Button, Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const benefits = [
  "Simplified Financial Services",
  "Comprehensive Platform",
  "Personalized Financial Advice",
  "Digital Wallet",
  "Gamification",
  "Efficient Motor Claims",
];

const Benefits = ({ isOpen, onClose }: any) => {
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
    <Dialog className="common_dialog" open={isOpen} onClose={onClose}>
      <DialogTitle>Benefits of Choosing Finmaal</DialogTitle>
      <Box
        className="slider-backGroud"
        sx={{ maxWidth: "100%", margin: "0 auto" }}
      >
        <Slider {...settings}>
          {benefits.map((benefit, index) => (
            <Box className="slider-backGroud" key={index}>
              <h3 className="text-center"> {benefit} </h3>
              <h3>
                Finmaal offers {benefit.toLowerCase()} to enhance user
                experience and simplify financial management.
              </h3>
            </Box>
          ))}
        </Slider>
      </Box>
      <DialogActions className="dialog_footer">
        <Button className="closs_btn" onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Benefits;
