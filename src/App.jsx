import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonInitial from "./components/ButtonInitial";
import { AuthProvider } from "./context/auth";
import Home from "./pages/Home";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import backgroundHeader from "./assets/Images/fundo.jpg";
import backgroundMid from "./assets/Images/galaxy.jpg";

import Comunicate from "./pages/Comunicate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Parallax pages={3} style={{ top: "0", left: "0" }}>
      <ParallaxLayer
        offset={0}
        speed={0.5}
        factor={1}
        style={{
          backgroundImage: `url(${backgroundHeader})`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
        }}
      >
        <Home></Home>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.5}
        factor={1}
        style={{
          backgroundImage: `url(${backgroundMid})`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
        }}
      >
        <Comunicate></Comunicate>
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
