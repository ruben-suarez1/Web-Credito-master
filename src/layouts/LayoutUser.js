import React, { useState } from "react";
import "./LayoutBasic.scss";
import MenuTopUser from "../components/User/MenuTopUser";
import { makeStyles } from "@material-ui/core";
import DrawerUser from "../components/User/MenuTopUser/DrawerUser";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    mmarginRight: -240,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function LayoutUser() {
  const classes = styles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


    return (
      <div className={classes.root}>
        <MenuTopUser open={open} handleDrawerOpen={handleDrawerOpen} />
        <DrawerUser open={open} handleDrawerClose={handleDrawerClose} />  
      </div>
    );
  }

