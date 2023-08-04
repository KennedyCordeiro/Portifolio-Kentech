import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonInitial from "./components/ButtonInitial";
import { AuthProvider } from "./context/auth";
import Home from "./pages/Home";
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import backgroundHeader from "./assets/Images/fundo.jpg";

function App() {
  const [count, setCount] = useState(0);
  const parallax = useRef<IParallax>(null!)

  return (
    <Parallax pages={1} style={{ top: "0", left: "0" }}>
      <ParallaxLayer
        offset={0}
        speed={1}
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
    </Parallax> 
  );
}

export default App;
