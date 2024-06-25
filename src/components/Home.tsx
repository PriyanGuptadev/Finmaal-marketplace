import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import React, { useState, Fragment } from "react";
import QuizIcon from "@mui/icons-material/Quiz";
import InfoIcon from "@mui/icons-material/Info";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { services } from "../utils/Services";
import FAQs from "./Faqs";
import ServicesList from "./ServicesList";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import { faqs } from "../utils/FAQS";
import ExploreOfferings from "./ExploreOffring";
import Benefits from "./Benfits";
import "./index.css";
type Anchor = "left";

const Home: React.FC = () => {
  const [state, setState] = useState({ left: false });
  const [modalName, setModalName] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (name: string) => {
    setModalName(name);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalName("");
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box sx={{ width: 300 }} role="presentation">
      <List>
        {[
          "FAQ's",
          "Discover Finmaal Benefits",
          "View Offerings",
          "About Us",
          "Auxiliary Services",
        ].map((text) => (
          <ListItem className="sidebar-list-item" key={text} disablePadding>
            <ListItemButton onClick={() => openModal(text)}>
              <ListItemIcon>
                {text === "FAQ's" ? (
                  <QuizIcon />
                ) : text === "Discover Finmaal Benefits" ? (
                  <InfoIcon />
                ) : text === "View Offerings" ? (
                  <VisibilityIcon />
                ) : text === "About Us" ? (
                  <BusinessCenterIcon />
                ) : (
                  text === "Auxiliary Services" && <SupportAgentIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Fragment>
      <div className="moreinfo-btn">
        {(["left"] as const).map((anchor) => (
          <Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              More Information <QueryStatsIcon />
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </Fragment>
        ))}
      </div>
      <div>
        {modalName === "FAQ's" && (
          <FAQs faqs={faqs} isOpen={isModalOpen} onClose={closeModal} />
        )}
        {modalName === "Discover Finmaal Benefits" && (
          <Benefits isOpen={isModalOpen} onClose={closeModal} />
        )}
        {modalName === "View Offerings" && (
          <ExploreOfferings isOpen={isModalOpen} onClose={closeModal} />
        )}
        {modalName === "Auxiliary Services" && (
          <ServicesList isOpen={isModalOpen} onClose={closeModal} />
        )}
        {modalName === "About Us" && (
          <AboutUs isOpen={isModalOpen} onClose={closeModal} />
        )}
      </div>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="flex-start"
        sx={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {services.map((elem: any) => (
          <Grid item xs={12} sm={6} md={3} key={services.indexOf(elem)}>
            <Card className="card_name">
              <CardHeader className="card_title" title={elem.title} subheader={elem.subtitle} />
              <CardContent className="card_icon">{elem.icon}</CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Fragment>
  );
};

export default Home;
