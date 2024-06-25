import React from "react";
import {
  Typography,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaymentsIcon from "@mui/icons-material/Payments";
import SavingsIcon from "@mui/icons-material/Savings";
const ExploreOfferings = ({ isOpen, onClose }: any) => (
  <Dialog
    className="common_dialog"
    open={isOpen}
    onClose={onClose}
    maxWidth="sm"
    fullWidth
  >
    <DialogTitle>
      <Typography variant="h2">Explore Finmaal Offerings</Typography>
    </DialogTitle>
    <DialogContent className="offering_details" dividers>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Link to="">
            <AccountBalanceWalletIcon />
            Personal Finance Services
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="">
            <AccountBalanceIcon />
            Business Finance Solutions
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="">
            <SavingsIcon />
            Investment Management
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="">
            <PaymentsIcon />
            Insurance and Risk Management
          </Link>
        </Grid>
      </Grid>
    </DialogContent>
    <DialogActions className="dialog_footer">
      <Button onClick={onClose} className="closs_btn" color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

export default ExploreOfferings;
