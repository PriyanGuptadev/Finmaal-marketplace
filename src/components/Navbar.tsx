import React from "react";
import {Container, Toolbar, Box, AppBar} from "@mui/material";
import { Link } from "react-router-dom";

const Navbar: React.FC =() => {
  return (
    <AppBar className="navbar-backGroud" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to={""} style={{ marginRight: "50px", color: "white" }}>
              Home
            </Link>
            <Link
              to={"banking_page"}
              style={{ marginRight: "50px", color: "white" }}
            >
              Banking
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
