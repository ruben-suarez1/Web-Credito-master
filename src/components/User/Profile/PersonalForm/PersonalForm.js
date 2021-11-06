import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Button,
  Typography,
  Snackbar,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import Alert from "@material-ui/lab/Alert";
import "./PersonalForm.scss";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  Departments,
  Citys,
  getIdDepartment,
} from "../../../../utils/FormObjects";
import { useForm } from "react-hook-form";
import moment from "moment";

export default function PersonalForm(props) {
  const {
    userPersonalData,
    setUserPersonalData,
    onSubmitPersonal,
    open,
    setOpen,
    openError,
    setOpenError,
    message,
  } = props;
  const { register, errors, handleSubmit, reset } = useForm({});

  const handleChange = (e) => {
    try {
      if (e.target) {
        setUserPersonalData({
          ...userPersonalData,
          [e.target.name]: e.target.value,
        });
      } else {
        const yearsDiff = moment().diff(e, "years", false);
        setUserPersonalData({
          ...userPersonalData,
          [`datebirth`]: e._d,
          [`age`]: yearsDiff,
        });
        reset({ ...userPersonalData, age: yearsDiff });
      }
    } catch (error) {}
  };

  const handleClose = () => {
    setOpen(false);
    setOpenError(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitPersonal)} className="personal-form">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={4}
      >
        <Grid item xs={12} lg={6}>
          <TextField
            label="Nombres"
            color="secondary"
            variant="outlined"
            fullWidth
            name="names"
            onChange={handleChange}
            defaultValue={userPersonalData.names}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
              pattern: {
                value: /^([a-z ñáéíóú])+$/i,
                message: "Solo puede ingresar letras en su nombre",
              },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.names?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Apellidos"
            variant="outlined"
            color="secondary"
            fullWidth
            name="lastname"
            onChange={handleChange}
            defaultValue={userPersonalData.lastname}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
              pattern: {
                value: /^([a-z ñáéíóú])+$/i,
                message: "Solo puede ingresar letras en su apellido",
              },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.lastname?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <KeyboardDatePicker
            fullWidth={true}
            color="secondary"
            inputVariant="outlined"
            margin="normal"
            name="datebirth"
            mask="__/__/____"
            autoOk={true}
            label="Fecha de nacimiento"
            openTo="year"
            invalidDateMessage="Formato de fecha Invalido"
            allowKeyboardControl={true}
            maxDateMessage="La fecha ingresada no es valida"
            format="DD/MM/yyyy"
            maxDate={new Date()}
            value={userPersonalData.datebirth}
            onChange={handleChange}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.datebirth?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="departbirth">
              Departamento de Nacimiento
            </InputLabel>
            <Select
              native
              name="departbirth"
              defaultValue={userPersonalData.departbirth}
              onChange={handleChange}
              label="Departamento de Nacimiento"
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              {Departments().map((Departament) => {
                return (
                  <option key={Departament.id} value={Departament.name}>
                    {Departament.name}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.departbirth?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="city-birth">Ciudad de nacimiento</InputLabel>
            <Select
              native
              name="citybirth"
              defaultValue={userPersonalData.citybirth}
              onChange={handleChange}
              label="Cuidad de Nacimiento"
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              {Citys(
                getIdDepartment(userPersonalData.departbirth, Departments())
              ).map((City) => {
                return (
                  <option key={City.id} value={City.name}>
                    {City.name}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.citybirth?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="type-doc">Tipo de Documento</InputLabel>
            <Select
              native
              name="typedoc"
              defaultValue={userPersonalData.typedoc}
              onChange={handleChange}
              label="Tipo de Documento"
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              <option value={"CC"}>Cédula de Ciudadanía</option>
              <option value={"CT"}>Cédula de Extranjería</option>
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.typedoc?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Número de Identificación"
            variant="outlined"
            color="secondary"
            fullWidth
            type="number"
            name="ndoc"
            onChange={handleChange}
            defaultValue={userPersonalData.ndoc}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
              minLength: {
                value: 8,
                message:
                  "El número de identificación debe tener mínimo 7 digitos",
              },
              pattern: {
                value: /^[^.,-]?\d+$/i,
                message: "Solo puede ingresar números enteros y positivos.",
              },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.ndoc?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label=" Celular"
            variant="outlined"
            color="secondary"
            fullWidth
            type="number"
            name="tel"
            onChange={handleChange}
            defaultValue={userPersonalData.tel}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
              minLength: {
                value: 10,
                message: "El número de celular debe tener mínimo 10 digitos",
              },
              pattern: {
                value: /^[^.,-]?\d+$/i,
                message: "Solo puede ingresar números enteros y positivos.",
              },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.tel?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Edad"
            variant="outlined"
            color="secondary"
            fullWidth
            type="number"
            name="age"
            disabled
            onChange={handleChange}
            defaultValue={userPersonalData.age}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
              pattern: {
                value: /^[^.,-]?\d+$/i,
                message: "Solo puede ingresar números enteros y positivos.",
              },
              min: {
                value: 18,
                message: "Debe tener mínimo 18 años",
              },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.age?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="marital-status">Estado Civil</InputLabel>
            <Select
              native
              name="maritalstatus"
              defaultValue={userPersonalData.maritalstatus}
              onChange={handleChange}
              label="Estado Civil"
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              <option value={"Soltero(a)"}>Soltero(a)</option>
              <option value={"Casado(a)"}>Casado(a)</option>
              <option value={"Unión Libre"}>Unión Libre</option>
              <option value={"Divorciado(a)"}>Divorciado(a)</option>
              <option value={"En relación"}>
                En relación (más de 1 año de convivencia)
              </option>
              <option value={"Separado(a)"}>Separado(a)</option>
              <option value={"Viudo(a)"}>Viudo(a)</option>
              <option value={"Comprometido(a)"}>Comprometido(a)</option>
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.maritalstatus?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="educational-level">
              Nivel de Estudio
            </InputLabel>
            <Select
              native
              name="educationallevel"
              defaultValue={userPersonalData.educationallevel}
              onChange={handleChange}
              label="Nivel de Estudio"
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              <option value={"Sin Estudios"}>Sin Estudios</option>
              <option value={"Primaria"}>Primaria</option>
              <option value={"Bachiller"}>Bachiller</option>
              <option value={"Técnico"}>Técnico</option>
              <option value={"Tecnólogo"}>Tecnólogo</option>
              <option value={"Universitario"}>Universitario</option>
              <option value={"Especialista"}>Especialista</option>
              <option value={"Magister"}>Magister</option>
              <option value={"Doctorado"}>Doctorado</option>
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.educationallevel?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Profesión"
            variant="outlined"
            color="secondary"
            fullWidth
            name="profession"
            onChange={handleChange}
            defaultValue={userPersonalData.profession}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
              pattern: {
                value: /^([a-z ñáéíóú])+$/i,
                message: "Solo puede ingresar letras en su profesión",
              },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.profession?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Ocupación"
            helperText=" "
            variant="outlined"
            color="secondary"
            fullWidth
            name="occupation"
            onChange={handleChange}
            defaultValue={userPersonalData.occupation}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
              pattern: {
                value: /^([a-z ñáéíóú])+$/i,
                message: "Solo puede ingresar letras en su ocupación",
              },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.occupation?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Número de personas de su Núcleo Familiar"
            helperText="*Incluyéndose"
            variant="outlined"
            color="secondary"
            fullWidth
            type="number"
            name="numpersonsfamilynucleus"
            onChange={handleChange}
            defaultValue={userPersonalData.numpersonsfamilynucleus}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
              pattern: {
                value: /^[^.,-]?\d+$/i,
                message: "Solo puede ingresar números enteros y positivos.",
              },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.numpersonsfamilynucleus?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Número de personas a cargo suyo"
            variant="outlined"
            color="secondary"
            fullWidth
            type="number"
            name="numpersonsdependents"
            onChange={handleChange}
            defaultValue={userPersonalData.numpersonsdependents}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
              pattern: {
                value: /^[^.,-]?\d+$/i,
                message: "Solo puede ingresar números enteros y positivos.",
              },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.numpersonsdependents?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="type-housing">Tipo de Vivienda</InputLabel>
            <Select
              native
              name="typehousing"
              defaultValue={userPersonalData.typehousing}
              onChange={handleChange}
              label="Tipo de Vivienda"
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              <option value={"Familiar"}>Familiar</option>
              <option value={"Patrimonio"}>Patrimonio</option>
              <option value={"Propia"}>Propia</option>
              <option value={"Arriendo"}>Arriendo</option>
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.typehousing?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="depart-residence">
              Departamento de residencia
            </InputLabel>
            <Select
              native
              name="departresidence"
              defaultValue={userPersonalData.departresidence}
              onChange={handleChange}
              label="Departamento de Residencia"
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              {Departments().map((Departament) => {
                return (
                  <option key={Departament.id} value={Departament.name}>
                    {Departament.name}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.departresidence?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="city-residence">
              Ciudad de residencia
            </InputLabel>
            <Select
              native
              name="cityresidence"
              defaultValue={userPersonalData.cityresidence}
              onChange={handleChange}
              label="Cuidad de Residencia"
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              {Citys(
                getIdDepartment(userPersonalData.departresidence, Departments())
              ).map((City) => {
                return (
                  <option key={City.id} value={City.name}>
                    {City.name}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.cityresidence?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Dirección de Residencia"
            variant="outlined"
            color="secondary"
            fullWidth
            name="homeaddress"
            onChange={handleChange}
            defaultValue={userPersonalData.homeaddress}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.homeaddress?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Años en la dirección actual"
            variant="outlined"
            color="secondary"
            fullWidth
            type="number"
            name="yearsresidence"
            onChange={handleChange}
            defaultValue={userPersonalData.yearsresidence}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.yearsresidence?.message}
          </Typography>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12}>
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              endIcon={<ExitToAppIcon />}
            >
              Guardar Información Personal
            </Button>
          </Grid>
        </Grid>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={openError}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} variant="filled" severity="error">
            {message}
          </Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} variant="filled" severity="success">
            Información Personal Guardada.
          </Alert>
          {/* <Alert onClose={handleClose} variant="filled" severity="success">
            Ya Puede calcular su Scoring
          </Alert> */}
        </Snackbar>
      </Grid>
    </form>
  );
}
