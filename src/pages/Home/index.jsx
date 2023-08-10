import React from "react";
import * as C from "./Home.styles";
import NavBar from "../../components/Navbar";
import kentech from "../../assets/Images/kentech.png";

const Home = () => {
  return (
    <C.Container>
      <C.Nav>
        <NavBar></NavBar>
      </C.Nav>
      <C.ContainerHeader>
        <img src={kentech} alt="Logo kentech" style={{ width: "600px" }}></img>
      </C.ContainerHeader>
    </C.Container>
  );
};

export default Home;
