import React, { useState, useEffect } from "react";
import { Grid, Typography, SnackbarContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  calculateScoringApi,
  getFormProgressApi,
  getScoringApi,
  getScoringInfoApi,
  saveScoringInfoApi,
} from "../../../api/user";
import { getAccessTokenApi } from "../../../api/auth";
import { ProgressCircular } from "../../Content/ProgressCircular";
import { FormScoring } from "./FormScoring";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  snackbar: {
    backgroundColor: "#F44336",
  },
  button: {
    marginTop: theme.spacing(3),
  },
  scoring: {
    marginTop: theme.spacing(2),
  },
}));

export default function ContentScoring() {
  const [showAlert, setShowAlert] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showCircularProgress, setShowCircularProgress] = useState(false);
  const [showScoring, setShowScoring] = useState(false);
  const [valueScoring, setValueScoring] = useState();
  const [scoringForm, setScoringForm] = useState(null);

  useEffect(() => {
    const fetchScoringData = async () => {
      const { scoring } = await getScoringApi(getAccessTokenApi());
      if (scoring !== null) {
        setValueScoring(scoring);
        setShowScoring(true);
      }
      const { scoringData } = await getScoringInfoApi(getAccessTokenApi());
      setScoringForm(scoringData);
    };
    fetchScoringData();
  }, []);

  const onSubmitScoring = async (data, e) => {
    e.preventDefault();
    setValueScoring("");
    setShowScoring(false);
    setShowButton(false);
    const token = await getAccessTokenApi();
    const { progress } = await getFormProgressApi(token);
    if (progress !== 100) {
      setShowAlert(true);
      setShowButton(true);
    } else {
      setShowCircularProgress(true);
      if (scoringForm.havecredits === "No") {
        scoringForm.amountcreditacquired = null;
        scoringForm.dayspastdue = null;
      }
      const result = await saveScoringInfoApi(scoringForm, token);
      if (result.message) {
        setShowCircularProgress(false);
        setValueScoring(result.message);
        setShowScoring(true);
        setShowButton(true);
      } else {
        const data = await calculateScoringApi(getAccessTokenApi());
        if (!data.message) {
          setShowCircularProgress(false);
          setValueScoring(data.scoring);
          setShowScoring(true);
          setShowButton(true);
        } else {
          setShowCircularProgress(false);
          setValueScoring(data.message);
          setShowScoring(true);
          setShowButton(true);
        }
      }
    }
  };

  const classes = useStyles();

  return !scoringForm ? (
    <ProgressCircular
      variantMessage="h4"
      message="Cargando su información, por favor espere un momento"
    />
  ) : (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography color="initial" align="justify" variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <FormScoring
        scoringForm={scoringForm}
        setScoringForm={setScoringForm}
        onSubmitScoring={onSubmitScoring}
        showButton={showButton}
      />
      {showAlert ? (
        <div className={classes.root}>
          <SnackbarContent
            className={classes.snackbar}
            message={
              "No ha completado toda su información, diríjase hacia el menú Perfil y completela."
            }
          />
        </div>
      ) : (
        ""
      )}
      {showCircularProgress ? (
        <ProgressCircular
          variantMessage="h4"
          message="Calculando su Scoring, esto puede tardar unos segundos"
        />
      ) : (
        ""
      )}
      {showScoring ? (
        <Typography
          color="initial"
          align="justify"
          variant="h5"
          className={classes.scoring}
        >
          {`Su scoring tiene un valor de: ${valueScoring}`}
        </Typography>
      ) : (
        ""
      )}
    </Grid>
  );
}
