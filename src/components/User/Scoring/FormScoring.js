import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  Grid,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export const FormScoring = ({
  scoringForm,
  setScoringForm,
  onSubmitScoring,
  showButton,
}) => {
  const { register, errors, handleSubmit } = useForm();
  const handleChange = (e) => {
    setScoringForm({
      ...scoringForm,
      [e.target.name]: e.target.value,
    });
  };
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit(onSubmitScoring)} className={classes.form}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={4}
      >
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="havecredits">
              ¿Tiene un credito con alguna entidad?
            </InputLabel>
            <Select
              fullWidth
              native
              name="havecredits"
              label="¿Tiene un crédito con alguna entidad?"
              onChange={handleChange}
              defaultValue={scoringForm.havecredits}
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              <option value={"Si"}>Si</option>
              <option value={"No"}>No</option>
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.havecredits?.message}
          </Typography>
        </Grid>
        {scoringForm.havecredits === "Si" ? (
          <>
            <Grid item xs={12} lg={6}>
              <FormControl
                variant="outlined"
                color="secondary"
                fullWidth={true}
              >
                <InputLabel htmlFor="amountcreditacquired">
                  ¿Entre qué rangos de precios está el crédito adquirido?
                </InputLabel>
                <Select
                  native
                  name="amountcreditacquired"
                  label="¿Entre qué rangos de precios está el crédito adquirido?"
                  onChange={handleChange}
                  defaultValue={scoringForm.amountcreditacquired}
                  inputRef={register({
                    required: { value: true, message: "Campo obligatorio" },
                  })}
                >
                  <option aria-label="None" />
                  <option value={"1"}>
                    Menor a 5.000.000 Pesos Colombianos
                  </option>
                  <option value={"2"}>
                    Entre 5.000.001 y 10.000.000 Pesos Colombianos
                  </option>
                  <option value={"3"}>
                    Entre 10.000.001 y 20.000.000 Pesos Colombianos
                  </option>
                  <option value={"4"}>
                    Entre 20.000.001 y 30.000.000 Pesos Colombianos
                  </option>
                  <option value={"5"}>
                    Entre 30.000.001 y 40.000.000 Pesos Colombianos
                  </option>
                </Select>
              </FormControl>
              <Typography
                variant="body1"
                display="block"
                color="error"
                gutterBottom
              >
                {errors?.amountcreditacquired?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl
                variant="outlined"
                color="secondary"
                fullWidth={true}
              >
                <InputLabel htmlFor="dayspastdue">
                  ¿Cuántos días de mora tiene?
                </InputLabel>
                <Select
                  fullWidth
                  native
                  name="dayspastdue"
                  label="¿Cuántos días de mora tiene?"
                  onChange={handleChange}
                  defaultValue={scoringForm.dayspastdue}
                  inputRef={register({
                    required: { value: true, message: "Campo obligatorio" },
                  })}
                >
                  <option aria-label="None" />
                  <option value={0}>0 días</option>
                  <option value={1}>1 - 30 días</option>
                  <option value={2}>31 - 60 días</option>
                  <option value={3}>61 - 90 días</option>
                </Select>
              </FormControl>
              <Typography
                variant="body1"
                display="block"
                color="error"
                gutterBottom
              >
                {errors?.dayspastdue?.message}
              </Typography>
            </Grid>
          </>
        ) : (
          ""
        )}
      </Grid>

      {showButton ? (
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Calcular Scoring
            </Button>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
    </form>
  );
};
