import React, { useState } from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import LeadCaptureForm from "./LeadCaptureForm";
import ComparisonPage from "./ComparisonPage";
import Filters from "./Filter";
import { initialAccounts } from "../utils/BankAccounts";

const Cards = () => {
  const [accounts, setAccounts] = useState(initialAccounts);

  const handleFilter = (filters: any) => {
    const filteredAccounts = initialAccounts.filter((account) => {
      const interestRateMatch = filters.interestRateRange
        ? account.interestRate === filters.interestRateRange
        : true;
      const accountTypeMatch =
        filters.accountType !== "All"
          ? account.type === filters.accountType
          : true;
      const feeStructureMatch =
        filters.feeStructure !== "All"
          ? account.fee === filters.feeStructure
          : true;

      return interestRateMatch && accountTypeMatch && feeStructureMatch;
    });

    setAccounts(filteredAccounts);
  };
  const handleReset = () => {
    setAccounts(initialAccounts);
  };

  return (
    <Container>
      <CssBaseline />

      <Box sx={{display: 'flex', gap: 2}}>
        
      <Box sx={{ my: 4, flex: '1' }}>
        <Filters onFilter={handleFilter} onReset={handleReset} />
      </Box>

      <Box sx={{ my: 4 }}>
        <LeadCaptureForm />
      </Box>
      </Box>
      <Box sx={{ my: 4 }}>
        <ComparisonPage accounts={accounts} />
      </Box>
    </Container>
  );
};

export default Cards;
