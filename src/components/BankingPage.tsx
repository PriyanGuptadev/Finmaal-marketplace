import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import CustomFilters from "./CustomFilters";
import BankingCards from "./BankingCards";
import Footer from "./Footer";
import { creditCards } from "../utils/CardInfo";

interface BankingPageProps {
  creditCardsDetails: any[];
  setCreditCardsDetails: (cards: any[]) => void;
}

const BankingPage: React.FC<BankingPageProps> = ({
  creditCardsDetails,
  setCreditCardsDetails,
}) => {
  return (
    <div>
      <Header />
      <Box className="container">
        <Box display="flex">
          <Box className="left-sidebar">
            <CustomFilters
              cardDetails={creditCards}
              setCardsDetails={setCreditCardsDetails}
            />
          </Box>
          <Box className="right-part-box">
            <BankingCards cardDetails={creditCardsDetails} />
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default BankingPage;
