import React from "react";
import "./ContactFooter.scss";
import { Typography, Grid } from "@material-ui/core";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export default function ContactFooter() {
  return (
    <Grid className="contact-footer" container>
      <Grid item xs={12}>
        <Typography variant="h4">Contáctenos</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <RenderList />
      </Grid>
    </Grid>
  );
}
function RenderList() {
  return (
    <List component="ul">
      <ListItem>
        <span>
          <PhoneIcon />
          01 8000 2412
        </span>
      </ListItem>
      <ListItem>
        <span>
          <ContactPhoneIcon />
          3117002122 - 3201042122
        </span>
      </ListItem>
      <ListItem>
        <span>
          <EmailIcon />
          servicioalcliente@micredito.com
        </span>
      </ListItem>
    </List>
  );
}
