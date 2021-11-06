import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LayoutBasic from "../layouts/LayoutBasic";
import LayoutUser from "../layouts/LayoutUser";

import Footer from "../components/Web/Footer";

import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { UserRoutes } from "./UserRoutes";

import Error404 from "../pages/Error404";
import useAuth from "../hooks/useAuth";
import { CircularProgress } from "@material-ui/core";

export const AppRouter = () => {
  const { user, isLoading } = useAuth();
  console.log(user, isLoading);
  if (isLoading) {
    return (
      <CircularProgress
        color="secondary"
        size={100}
        style={{ marginBottom: 200 }}
      />
    );
  } else {
    return (
      <Router>
        <div>
          {user ? <LayoutUser /> : <LayoutBasic />}
          <Switch>
            <PublicRoute exact path="/" component={Home} isLoggedIn={!!user} />
            <PublicRoute
              exact
              path="/login"
              component={Login}
              isLoggedIn={!!user}
            />
            <PublicRoute
              exact
              path="/register"
              component={Register}
              isLoggedIn={!!user}
            />
            <PrivateRoute path="/" component={UserRoutes} isLoggedIn={!!user} />
            <Route component={Error404} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
};
