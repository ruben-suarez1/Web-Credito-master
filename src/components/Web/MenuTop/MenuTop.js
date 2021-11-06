import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  IconButton,
  Hidden,
} from "@material-ui/core";

import clsx from "clsx";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../../../assets/img/png/Logo.png";
import "./MenuTop.scss";

const useStyles = makeStyles((theme) => ({
  hide: {
    display: "none",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${240}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 240,
  },

  offset: theme.mixins.toolbar,
}));

export default function MenuTop(props) {
  const classes = useStyles();
  return (
    <div className="menu-top">
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })}
      >
        <Toolbar className="menu-top__toolbar">
          <Link to="/" className="menu-top__title">
            <img src={Logo} alt="MiCrédito" />
          </Link>
          <Hidden smDown>
            <Link className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-colorInherit" to="/scoring">
            ¿Qué es Scoring?
            </Link>
            <Link className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-colorInherit" to="/about">
            Nosotros
            </Link>
            <Link className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-colorInherit" to="/contact">
            Contactenos
            </Link>
            <Link className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-colorInherit" to="/login">
            Iniciar Sesión
            </Link>
            <Button
              href="/register"
              color="inherit"
              variant="outlined"
              endIcon={<ArrowForwardIosIcon />}
            >
              Regístrate
            </Button>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              aria-label="open drawer"
              edge="end"
              color="inherit"
              className={clsx(props.open && classes.hide)}
              onClick={() => props.handleDrawerOpen()}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
}
