import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function LeadCaptureForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box className="signin_wrapper">
        <Button variant="outlined" onClick={handleClickOpen}>
          Sign In
        </Button>
      </Box>

      <Dialog className="common_dialog" open={open} onClose={handleClose}>
        <DialogTitle align="center">Sign in</DialogTitle>
        <DialogContent>
          <Box className="signin_content">
            <Avatar sx={{ color: "goldenrod", backgroundColor: "#261414" }}>
              <LockOutlinedIcon />
            </Avatar>
            <DialogContentText>
              To sign in to this website, please enter your email address and
              password here.
            </DialogContentText>
          </Box>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <DialogActions>
              <Button
                className="closs_btn"
                type="submit"
                fullWidth
                variant="contained"
              >
                Sign In
              </Button>
            </DialogActions>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <Link href="#" variant="body2" className="footer_links">
                Forgot password?
              </Link>
              <Link href="#" variant="body2" className="footer_links">
                {"Don't have an account? Sign Up"}
              </Link>
            </Box>
            <Box
              className="dialog_footer"
              sx={{ display: "flex", justifyContent: "end" }}
            >
              <Button
                onClick={handleClose}
                color="primary"
                className="closs_btn"
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </DialogContent>
        <Copyright sx={{ mt: 2 }} />
      </Dialog>
    </ThemeProvider>
  );
}
