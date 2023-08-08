import React from "react";
import * as C from "./Home.styles";
import NavBar from "../../components/Navbar";

const Home = () => {
  return (
    <C.Container>
      <C.Nav>
        <NavBar></NavBar>
      </C.Nav>
      <C.ContainerHeader>
        <h1>Home</h1>
      </C.ContainerHeader>
    </C.Container>
  );
};

export default Home;
