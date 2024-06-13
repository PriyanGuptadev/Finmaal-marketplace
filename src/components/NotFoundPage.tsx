import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };
  return (
    <Container className="root-not-found">
      <Typography className="title-not-found" variant="h1" component="h1">
        404
      </Typography>
      <Typography className="subtitle-not-found" variant="h6" component="h2">
        Oops! The page you are looking for does not exist.
      </Typography>
      <Button
        className="button-not-found"
        variant="contained"
        color="primary"
        onClick={handleBackHome}
      >
        Go Back Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;
