import React from "react";
import "./NavigationFooter.scss";
import { Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import InfoIcon from "@material-ui/icons/Info";
import ScoreIcon from "@material-ui/icons/Score";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export default function NavigationFooter() {
  return (
    <Grid className="navigation" container>
      <Grid item xs={12}>
        <Typography variant="h4">Navegación</Typography>
      </Grid>
      <Grid item xs={6} sm={6} md={6}>
        <RenderListLeft />
      </Grid>
      <Grid item xs={6} sm={6} md={6}>
        <RenderListRight />
      </Grid>
    </Grid>
  );
}

function RenderListLeft() {
  return (
    <List component="ul">
      <ListItem>
        <Link to="/scoring">
          <ScoreIcon />
          Scoring
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/contact">
          <ContactSupportIcon />
          Contactenos
        </Link>
      </ListItem>
    </List>
  );
}
function RenderListRight() {
  return (
    <List component="ul">
      <ListItem>
        <Link to="/about">
          <InfoIcon />
          Nosotros
        </Link>
      </ListItem>
    </List>
  );
}
