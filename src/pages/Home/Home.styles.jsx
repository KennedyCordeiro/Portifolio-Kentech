import styled, { keyframes } from "styled-components";
import backgroundHeader from "../../assets/Images/fundo.jpg";

const fadeIn = keyframes`
  from { 
    opacity:0;
  }
  
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn};
  gap: 10px;
  height: 100vh;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundHeader});
  width: 100%;
  height: 100%;
  color: white;
  //border-radius: 30px 0 0 30px;
  float: right;
`;
