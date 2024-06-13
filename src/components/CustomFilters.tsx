import React, { useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Switch,
  Typography,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
} from "@mui/material";
import { typesOfCards, Features } from "../utils/CardInfo";

interface Card {
  minimumSalary: string;
  features: string[];
  cardName: string;
}

interface CustomFiltersProps {
  setCardsDetails: (cards: Card[]) => void;
  cardDetails: Card[];
}

const CustomFilters: React.FC<CustomFiltersProps> = ({
  setCardsDetails,
  cardDetails,
}) => {
  const [salary, setSalary] = useState<any>("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedCardType, setSelectedCardType] = useState<string>("");

  const onSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(e.target.value);
  };

  const onFeatureToggle = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((item) => item !== feature)
        : [...prev, feature]
    );
  };

  const onCardTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCardType(event.target.value);
  };

  useEffect(() => {
    filterCards();
    // eslint-disable-next-line
  }, [salary, selectedFeatures, selectedCardType]);

  const filterCards = () => {
    const filteredCards = cardDetails.filter((card: any) => {
      const cardSalary = parseInt(
        card.minimumSalary.replace("AED ", "").replace(",", "")
      );
      const inputSalary = salary ? parseInt(salary.replace(",", "")) : null;
      const meetsSalaryRequirement = !inputSalary || cardSalary <= inputSalary;
      const meetsFeatureRequirement =
        selectedFeatures.length === 0 ||
        selectedFeatures.every((feature) => card.features.includes(feature));
      const meetsCardTypeRequirement =
        !selectedCardType || card.cardName === selectedCardType;
      return (
        meetsSalaryRequirement &&
        meetsFeatureRequirement &&
        meetsCardTypeRequirement
      );
    });
    setCardsDetails(filteredCards);
  };
  return (
    <Box>
      <Box className="white-box">
        <Typography variant="h6">Looking for Specifics?</Typography>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          style={{ marginBottom: "10px" }}
          onClick={() => {
            setSalary("");
            setSelectedFeatures([]);
            setSelectedCardType("");
          }}
        >
          Reset All
        </Button>
        <TextField
          label="Salary"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          value={salary}
          onChange={onSalaryChange}
        />
      </Box>

      <Box className="white-box">
        <Box className="header-reset">
          <Typography variant="subtitle1">Feature</Typography>
          <Button
            variant="text"
            color="secondary"
            fullWidth
            onClick={() => setSelectedFeatures([])}
          >
            Reset
          </Button>
        </Box>
        <List>
          {Features.map((feature, index) => (
            <ListItem key={index}>
              <ListItemText primary={feature} />
              <Switch
                edge="end"
                checked={selectedFeatures.includes(feature)}
                onChange={() => onFeatureToggle(feature)}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box className="white-box">
        <Box className="header-reset">
          <Typography variant="subtitle1">Cards Type</Typography>
          <Button
            variant="text"
            color="secondary"
            fullWidth
            onClick={() => setSelectedCardType("")}
          >
            Reset
          </Button>
        </Box>
        <FormControl component="fieldset">
          <RadioGroup value={selectedCardType} onChange={onCardTypeChange}>
            {typesOfCards.map((card, index) => (
              <FormControlLabel
                key={index}
                value={card}
                control={<Radio color="primary" />}
                label={card}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default CustomFilters;
