import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import CarRentalIcon from "@mui/icons-material/CarRental";
import AddHomeIcon from "@mui/icons-material/AddHome";
import HandymanIcon from "@mui/icons-material/Handyman";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import SimCardIcon from "@mui/icons-material/SimCard";

export const services = [
  {
    id: 1,
    title: "Car",
    subtitle: "Insurance",
    icon: <DirectionsCarFilledIcon color="primary" />,
    badge: "",
  },
  {
    id: 2,
    title: "Health",
    subtitle: "Insurance",
    icon: <HealthAndSafetyIcon color="primary" />,
    badge: "",
  },
  {
    id: 3,
    title: "Term",
    subtitle: "Life",
    icon: <BeachAccessIcon color="primary" />,
    badge: "COVID-19 covered",
  },
  {
    id: 4,
    title: "Investment",
    subtitle: "and Life Plans",
    icon: <CurrencyExchangeIcon color="primary" />,
    badge: "",
  },
  {
    id: 5,
    title: "Travel",
    subtitle: "Insurance",
    icon: <LocalAirportIcon color="primary" />,
    badge: "Instant Policy",
  },
  {
    id: 6,
    title: "Bike",
    subtitle: "Insurance",
    icon: <TwoWheelerIcon color="primary" />,
    badge: "",
  },
  {
    id: 7,
    title: "Corporate",
    subtitle: "Health",
    icon: <Diversity1Icon color="primary" />,
    badge: "",
  },
  {
    id: 8,
    title: "Critical",
    subtitle: "Illness",
    icon: <CoronavirusIcon color="primary" />,
    badge: "Cancer Cover",
  },
  {
    id: 9,
    title: "Home",
    subtitle: "Insurance",
    icon: <HomeIcon color="primary" />,
    badge: "",
  },
  {
    id: 10,
    title: "Business",
    subtitle: "Insurance",
    icon: <BusinessIcon color="primary" />,
    badge: "NEW",
  },
  {
    id: 11,
    title: "AECB",
    subtitle: "Credit Score",
    icon: <CreditScoreIcon color="primary" />,
    badge: "NEW",
  },
  {
    id: 12,
    title: "Credit",
    subtitle: "Card",
    icon: <CreditCardIcon color="primary" />,
    badge: "Know Your AECB Credit Score",
  },
  {
    id: 13,
    title: "Bank",
    subtitle: "Account",
    icon: <AccountBalanceIcon color="primary" />,
    badge: "",
  },
  {
    id: 14,
    title: "Personal",
    subtitle: "Loan",
    icon: <VolunteerActivismIcon color="primary" />,
    badge: "",
  },
  {
    id: 15,
    title: "Car",
    subtitle: "Loan",
    icon: <CarRentalIcon color="primary" />,
    badge: "",
  },
  {
    id: 16,
    title: "Home",
    subtitle: "Loan",
    icon: <AddHomeIcon color="primary" />,
    badge: "",
  },
];

export const extraServices = [
  {
    name: "Car Wash",
    description: "Get your car washed at discounted prices.",
    icon: <CarRentalIcon color="action" />,
  },
  {
    name: "Garage Repair Discounts",
    description: "Exclusive discounts at select garages.",
    icon: <HandymanIcon color="action" />,
  },
  {
    name: "DU Internet Connections",
    description: "High-speed internet connections from DU.",
    icon: <NetworkWifiIcon color="action" />,
  },
  {
    name: "E-SIMs",
    description: "Digital SIM cards for your devices.",
    icon: <SimCardIcon color="action" />,
  },
];
