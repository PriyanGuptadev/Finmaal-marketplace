import React from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";

const ComparisonPage = ({ accounts }: any) => {
  return (
    <Grid container spacing="25" className="account_card_wrapper">
      {accounts.length > 0 ? (
        accounts.map((account: any) => (
          <Grid item xs={3}>
            <Card key={account.id} sx={{ maxWidth: "100%" }}>
              <CardContent>
                <Typography variant="h5" component="h5" mb={2}>
                  {account.name}
                </Typography>
                <Typography
                  variant="body2"
                  className="acc_details"
                  color="text.secondary"
                >
                  Interest Rate: {account.interestRate}
                </Typography>
                <Typography
                  variant="body2"
                  className="acc_details"
                  color="text.secondary"
                >
                  Type: {account.type}
                </Typography>
                <Typography
                  variant="body2"
                  className="acc_details"
                  color="text.secondary"
                >
                  Fee: {account.fee}
                </Typography>
                <Button className="acc_more_btn">More Info</Button>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <p className="no-data">No Records match the selected filters.</p>
      )}
    </Grid>
  );
};

export default ComparisonPage;
