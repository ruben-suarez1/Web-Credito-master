import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InformationTabs from "../../components/User/Profile/InformationTabs";
import "./Profile.scss";

export default function Profile() {
  const useStyles = makeStyles((theme) => ({
    content: {
      [theme.breakpoints.up("md")]: {
        alignItems: "flex-start",
      },
      [theme.breakpoints.down("sm")]: {
        alignItems: "center",
      },
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="profile"
      >
        <Grid item xs={false} md={1} />
        <Grid item xs={12} md={10}>
          <Typography color="initial" align="center" variant="h2">
            Edita tu información
          </Typography>
          <Grid
            container
            direction="row"
            justify="center"
            className={classes.content}
          >
            <Grid item>
              <InformationTabs />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={false} md={1} />
      </Grid>
    </div>
  );
}
