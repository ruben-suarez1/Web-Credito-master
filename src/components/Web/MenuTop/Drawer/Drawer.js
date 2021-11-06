import React from "react";
import {
  Drawer as Dw,
  makeStyles,
  Divider,
  IconButton,
  useTheme,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListMenu from "../ListMenu";
import "./Drawer.scss";

export default function Drawer(props) {
  const styles = makeStyles((theme) => ({
    drawer: {
      width: 240,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 240,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-start",
      backgroundColor: "#16202b",
    },
    button: {
      color: "#ffF",
    },
  }));
  const classes = styles();

  const theme = useTheme();
  return (
    <Dw
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="right"
      variant="temporary"
      open={props.open}
      onClose={props.handleDrawerClose}
    >
      <div className={classes.drawerHeader}>
        <IconButton
          className={classes.button}
          onClick={() => props.handleDrawerClose()}
        >
          {theme.direction === "rtl" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider></Divider>
      <ListMenu handleDrawerClose={props.handleDrawerClose}/>
    </Dw>
  );
}
