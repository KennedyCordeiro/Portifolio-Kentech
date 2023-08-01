import styled, { keyframes } from "styled-components";

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
`;
