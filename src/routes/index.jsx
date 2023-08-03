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
        <Routes>
          <Parallax pages={3} speed={1} id="0aesquerda">
            <ParallaxLayer
              offset={0}
              speed={1}
              factor={1}
              style={{
                backgroundImage: `url(${backgroundHeader})`,
                backgroundSize: "cover",
              }}
            >
              <Route exact path="*" element={<Home />} />
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.5}>
              <Route exact path="/Comunicate" element={<Comunicate />} />
            </ParallaxLayer>
          </Parallax>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
