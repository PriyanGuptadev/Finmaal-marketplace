import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  TextField,
  FormControl,
  Autocomplete,
  Chip,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Grid,
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

  const onCardTypeChange = (event: SelectChangeEvent<string>) => {
    setSelectedCardType(event.target.value);
  };
  const onFeatureChange = (
    event: React.ChangeEvent<{}>,
    newValue: string[]
  ) => {
    setSelectedFeatures(newValue);
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
    <Grid container spacing={3} my={3} sx={{ alignItems: "center" }}>
      <Grid item xs={1}>
        <Typography variant="h6" sx={{ width: "50%" }}>
          Filters:{" "}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          sx={{ width: "100%" }}
          label="Salary"
          variant="outlined"
          fullWidth
          type="number"
          value={salary}
          onChange={onSalaryChange}
        />
      </Grid>

      <Grid item xs={3}>
        <Autocomplete
          sx={{ width: "100%" }}
          multiple
          options={Features}
          value={selectedFeatures}
          onChange={onFeatureChange}
          renderInput={(params) => (
            <TextField {...params} variant="outlined" label="Feature" />
          )}
          renderTags={(tagValue: string[], getTagProps) =>
            tagValue.map((option: string, index: number) => (
              <Chip
                label={option}
                {...getTagProps({ index })}
                onDelete={() => {
                  setSelectedFeatures((prev) =>
                    prev.filter((val: string) => val !== option)
                  );
                }}
              />
            ))
          }
        />
      </Grid>

      <Grid item xs={3}>
        <FormControl fullWidth sx={{ width: "100%" }}>
          <InputLabel id="demo-simple-select-label">Card Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            sx={{ width: "100%" }}
            id="demo-simple-select"
            value={selectedCardType}
            label="Card Type"
            onChange={onCardTypeChange}
          >
            {typesOfCards.map((card, index) => (
              <MenuItem value={card} key={index}>
                {card}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2} className="Filter_wrapper">
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          style={{ minHeight: "100%" }}
          onClick={() => {
            setSalary("");
            setSelectedFeatures([]);
            setSelectedCardType("");
          }}
        >
          Reset All
        </Button>
      </Grid>
    </Grid>
  );
};

export default CustomFilters;
