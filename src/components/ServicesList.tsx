import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { extraServices } from "../utils/Services";
const ServicesList = ({ isOpen, onClose }: any) => {
  return (
    <Dialog
      className="common_dialog"
      open={isOpen}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle variant="h2">Auxiliary Services</DialogTitle>
      <DialogContent>
        <List className="Auxiliary-list">
          {extraServices.map((service, index) => (
            <ListItem className="Auxiliary-list-item" key={index}>
              <span>{service.icon}</span>
              <ListItemText
                className="Auxiliary-list-title"
                primary={service.name}
                secondary={service.description}
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions className="dialog_footer">
        <Button onClick={onClose} className="closs_btn" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ServicesList;
