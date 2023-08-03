import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonInitial from "./components/ButtonInitial";
import { AuthProvider } from "./context/auth";
import RoutesApp from "./routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AuthProvider>
      <RoutesApp id="auth"></RoutesApp>
    </AuthProvider>
  );
}

export default App;
