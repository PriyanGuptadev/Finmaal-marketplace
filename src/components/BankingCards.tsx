import React, { Fragment, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import cardImage from "../assets/vecteezy_credit-card-clipart-design-illustration_9398850.png";
import "./index.css";
import { Pagination } from "@mui/material";

const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: "auto",
});

interface BankingCardsProps {
  cardDetails: any[];
}

const BankingCards: React.FC<BankingCardsProps> = ({ cardDetails }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const numberOfPages = Math.ceil(cardDetails.length / itemsPerPage);
  const handleChange = (event: any, value: any) => {
    setPage(value);
  };
  const paginatedDetails = cardDetails.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  return (
    <Fragment>
      {cardDetails.length > 0 ? (
        paginatedDetails.map((card: any, index: number) => {
          return (
            <Fragment key={index}>
              <StyledCard className="cardWidht">
                <CardContent>
                  <Typography
                    className="card-heading"
                    variant="h5"
                    component="div"
                  >
                    {card.cardName}
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={2}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={cardImage}
                        alt={card.cardName}
                      />
                    </Grid>
                    <Grid item xs={12} sm={10} className="grid-card">
                      <Box className="cardTextbox">
                        <Typography
                          className="text-1"
                          variant="body2"
                          color="text.secondary"
                        >
                          Minimum Salary:
                        </Typography>
                        <Typography
                          className="text-2"
                          variant="body2"
                          color="text.secondary"
                        >
                          {card.minimumSalary}
                        </Typography>
                      </Box>

                      <Box className="cardTextbox">
                        <Typography
                          className="text-1"
                          variant="body2"
                          color="text.secondary"
                        >
                          Annual Fee:
                        </Typography>
                        <Typography
                          className="text-2"
                          variant="body2"
                          color="text.secondary"
                        >
                          {card.annualFee}
                        </Typography>
                      </Box>

                      <Box className="cardTextbox">
                        <Typography
                          className="text-1"
                          variant="body2"
                          color="text.secondary"
                        >
                          Rate:
                        </Typography>
                        <Typography
                          className="text-2"
                          variant="body2"
                          color="text.secondary"
                        >
                          {card.rate}
                        </Typography>
                      </Box>

                      <Box className="cardTextbox">
                        <Typography
                          className="text-1"
                          variant="body2"
                          color="text.secondary"
                        >
                          Salary Transfer:
                        </Typography>
                        <Typography
                          className="text-2"
                          variant="body2"
                          color="text.secondary"
                        >
                          {card.salaryTransfer}
                        </Typography>
                      </Box>

                      <Button
                        variant="contained"
                        color="primary"
                        href={'*'}
                        className="buttonApply"
                        style={{ marginTop: "10px" }}
                      >
                        Apply Now
                      </Button>
                    </Grid>
                  </Grid>
                  <Box className="features" mt={2}>
                    <Typography variant="subtitle1">Features:</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.features.join(", ")}
                    </Typography>
                  </Box>
                </CardContent>
              </StyledCard>
            </Fragment>
          );
        })
      ) : (
        <p className="no-data">No cards match the selected filters.</p>
      )}
      {paginatedDetails.length > 0 && (
        <Pagination count={numberOfPages} page={page} onChange={handleChange} />
      )}
    </Fragment>
  );
};

export default BankingCards;
