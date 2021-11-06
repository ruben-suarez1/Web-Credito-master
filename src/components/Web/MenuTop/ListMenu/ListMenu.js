import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import InfoIcon from "@material-ui/icons/Info";
import ScoreIcon from "@material-ui/icons/Score";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import "./ListMenu.scss";
export default function ListMenu(props) {
  return (
    <div className="list-menu">
      <List component="nav" aria-label="main mailbox folders">
        <Link to="/scoring">
          <ListItem button onClick={props.handleDrawerClose}>
            <ListItemIcon>
              <ScoreIcon />
            </ListItemIcon>
            <ListItemText primary="¿Qué es Scoring?" />
          </ListItem>
        </Link>
        <Link to="/about" >
          <ListItem button onClick={props.handleDrawerClose}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Nosotros" />
          </ListItem>
        </Link>
        <Link to="/contact">
          <ListItem button onClick={props.handleDrawerClose}>
            <ListItemIcon>
              <ContactSupportIcon />
            </ListItemIcon>
            <ListItemText primary="Contactenos" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <Link to="/login">
          <ListItem button onClick={props.handleDrawerClose}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Iniciar Sesión" />
          </ListItem>
        </Link>
        <Link to="/register">
          <ListItem button onClick={props.handleDrawerClose}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Registrarse" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
