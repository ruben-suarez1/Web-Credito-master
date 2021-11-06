import React from "react";
import { Grid } from "@material-ui/core";
import Info from "./Info";
import NavigationFooter from "./NavigationFooter";
import ContactFooter from "./ContactFooter";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Info />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <NavigationFooter />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <ContactFooter />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Grid container className="footer__copyright">
            <Grid item xs={6}>
              © 2020 ALL RIGHTS RESERVED
            </Grid>
            <Grid item xs={6}>
              MICRÉDITO
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </footer>
  );
}
