import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Comunicate from "../pages/Comunicate";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import backgroundHeader from "../assets/Images/fundo.jpg";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <h1>teste</h1>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
