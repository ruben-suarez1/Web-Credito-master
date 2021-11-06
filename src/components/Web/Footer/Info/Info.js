import React from "react";
import "./Info.scss";
import Logo from "../../../../assets/img/png/Logo.png";
import { Typography } from "@material-ui/core";

export default function Info() {
  return (
    <div className="info">
      <img src={Logo} alt="MiCrédito" />
      <Typography variant="body1" color="initial">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.{" "}
      </Typography>
    </div>
  );
}
