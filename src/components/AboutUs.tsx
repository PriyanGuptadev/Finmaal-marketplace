import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";

function AboutUs({ isOpen, onClose }: any) {
  return (
    <Dialog className="common_dialog" open={isOpen} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle variant="h2">About Finmaal</DialogTitle>
      <DialogContent>
        <Typography gutterBottom>
          Simplifying Financial Services to Make People's Lives Easier!
        </Typography>
        <Typography variant="body1" paragraph>
          Finmaal is on a mission to simplify financial services to make
          people's lives easier. We offer a marketplace that fulfills
          lifestyle-financial needs, where users can compare, select, and buy
          from a variety of providers all in one place.
        </Typography>
        <Typography variant="body1" paragraph>
          Launched in 2019, Finmaal started with a car insurance platform
          partnered with top insurance companies. Now, it has expanded to
          include banking and other insurance services. Our innovative offerings
          include personalized financial advice, secure digital wallets, and
          engaging financial literacy tools.
        </Typography>
        <Typography variant="body1" paragraph>
          Our solutions cater to comprehensive lifestyle financial needs,
          ensuring a seamless and informed financial journey. We are dedicated
          to serving you at every stage of your life with innovative and ethical
          solutions.
        </Typography>
      </DialogContent>
      <DialogActions className="dialog_footer">
        <Button onClick={onClose} className="closs_btn" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AboutUs;
