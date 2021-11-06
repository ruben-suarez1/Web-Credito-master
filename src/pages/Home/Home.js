import React from "react";
import { Typography, Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Home() {
  const useStyles = makeStyles((theme) => ({
    content: {
      [theme.breakpoints.up("md")]: {
        alignItems: "flex-start",
      },
      [theme.breakpoints.down("sm")]: {
        alignItems: "center",
      },
    },
    MuiInputLabelRoot: {
      marginRight: theme.spacing(2),
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
        <Grid item xs={1} md={1} />
        <Grid item xs={10} md={10}>
          <Hidden smDown>
            <Typography
              color="initial"
              align="center"
              variant="h1"
              style={{ paddingBottom: 20 }}
            >
              ¡Bienvenido a MiCrédito!
            </Typography>
          </Hidden>
          <Hidden mdUp>
            <Typography
              color="initial"
              align="center"
              variant="h2"
              style={{ paddingBottom: 20 }}
              className="Titulo"
            >
              ¡Bienvenido a MiCrédito!
            </Typography>
          </Hidden>
          <Grid
            container
            direction="row"
            justify="center"
            className={classes.content}
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                color="secondary"
                style={{ paddingBottom: 15 }}
              >
                ¿Qué es MiCrédito?
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                align="justify"
                style={{ paddingBottom: 15 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent fringilla volutpat ultrices. Morbi pellentesque dolor
                eget felis feugiat, ac molestie eros facilisis. Quisque semper
                eu enim in rhoncus. Nam commodo volutpat laoreet. Quisque
                lobortis ullamcorper felis sit amet viverra. Integer luctus
                ultricies nibh eu cursus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Maecenas mi
                nisi, efficitur nec semper varius, ultrices tincidunt dolor.
                Quisque facilisis ac quam vel semper. Maecenas sodales pharetra
                elit.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                color="secondary"
                style={{ paddingBottom: 15 }}
              >
                ¿Cómo lo hacemos?
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                align="justify"
                style={{ paddingBottom: 15 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent fringilla volutpat ultrices. Morbi pellentesque dolor
                eget felis feugiat, ac molestie eros facilisis. Quisque semper
                eu enim in rhoncus. Nam commodo volutpat laoreet. Quisque
                lobortis ullamcorper felis sit amet viverra. Integer luctus
                ultricies nibh eu cursus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Maecenas mi
                nisi, efficitur nec semper varius, ultrices tincidunt dolor.
                Quisque facilisis ac quam vel semper. Maecenas sodales pharetra
                elit.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                color="secondary"
                style={{ paddingBottom: 15 }}
              >
                ¿Qué es el Scoring?
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                align="justify"
                style={{ paddingBottom: 15 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent fringilla volutpat ultrices. Morbi pellentesque dolor
                eget felis feugiat, ac molestie eros facilisis. Quisque semper
                eu enim in rhoncus. Nam commodo volutpat laoreet. Quisque
                lobortis ullamcorper felis sit amet viverra. Integer luctus
                ultricies nibh eu cursus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Maecenas mi
                nisi, efficitur nec semper varius, ultrices tincidunt dolor.
                Quisque facilisis ac quam vel semper. Maecenas sodales pharetra
                elit.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} md={1} />
      </Grid>
    </div>
  );
}
