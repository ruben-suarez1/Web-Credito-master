import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div>
      <h1>
        Errror 404, ir a <Link to="/">Inicio</Link>
      </h1>
    </div>
  );
}
