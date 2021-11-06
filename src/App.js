import React from "react";
import "./App.scss";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themeConfig";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import "moment/locale/es";
import AuthProvider from "./providers/AuthProvider";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils} locale="es">
         <AppRouter />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
export default App;
