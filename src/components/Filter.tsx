import React from "react";
import { Button, Grid, MenuItem, Select, TextField } from "@mui/material";

const accountTypes = ["All", "Savings", "Checking", "Business"];
const feeStructures = ["All", "$0/month", "$5/month", "$10/month"];

const Filters = ({ onFilter, onReset }: any) => {
  const [interestRateRange, setInterestRateRange] = React.useState("");
  const [accountType, setAccountType] = React.useState("All");
  const [feeStructure, setFeeStructure] = React.useState("All");

  const handleFilter = () => {
    onFilter({ interestRateRange, accountType, feeStructure });
  };

  const handleReset = () => {
    setInterestRateRange("");
    setAccountType("All");
    setFeeStructure("All");
    onReset();
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <TextField
          sx={{ width: "100%" }}
          label="Interest Rate Range"
          value={interestRateRange}
          onChange={(e) => setInterestRateRange(e.target.value)}
        />
      </Grid>

      <Grid item xs={2}>
        <Select
          sx={{ width: "100%" }}
          label="Account Type"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
        >
          {accountTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={2}>
        <Select
          sx={{ width: "100%" }}
          label="Fee Structure"
          value={feeStructure}
          onChange={(e) => setFeeStructure(e.target.value)}
        >
          {feeStructures.map((fee) => (
            <MenuItem key={fee} value={fee}>
              {fee}
            </MenuItem>
          ))}
        </Select>
      </Grid>

      <Grid item xs={4} className="Filter_wrapper">
        <Button variant="contained" onClick={handleFilter}>
          Apply Filters
        </Button>
        <Button variant="outlined" onClick={handleReset}>
          Reset All
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filters;
