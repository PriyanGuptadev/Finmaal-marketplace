import "./App.css";
import { creditCards } from "./utils/CardInfo";
import { useState } from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import BankingPage from "./components/BankingPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFoundPage from "./components/NotFoundPage";
import Cards from "./components/Cards";

function App() {
  const [creditCardsDetails, setCreditCardsDetails] = useState(creditCards);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/banking_page" element={<Cards />} />
        <Route
          path="/cards"
          element={
            <BankingPage
              creditCardsDetails={creditCardsDetails}
              setCreditCardsDetails={setCreditCardsDetails}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
