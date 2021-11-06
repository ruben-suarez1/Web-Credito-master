import React from "react";
import { Grid, Typography } from "@material-ui/core";
import FormRegister from "../../components/Web/FormRegister";
import { Redirect } from "react-router-dom";
import { getAccessTokenApi } from "../../api/auth";
import "./Register.scss";

export default function Register() {
  if (getAccessTokenApi()) {
    return <Redirect to="/user" />;
  }
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className="form-title"
    >
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography color="initial" variant="h2">
              Regístrate en MiCrédito
            </Typography>
          </Grid>
          <Grid item>
            <FormRegister />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
}
