import styled from "styled-components";

export const NavOptions = styled.div`
  font-family: "Poppins", sans-serif;
  color: #090909;
  display: flex !important;
  align-items: center;
  gap: 25px;
  font-weight: 500;

  text-decoration: inherit;
`;

// General styles end
export const Text = styled.a`
  color: inherit;
  color: #090909;
`;

export const ListOptions = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;
`;

export const Link = styled.a`
  color: #090909;
  position: relative;
  display: inline-block;
  text-decoration: none;
  ::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    border-radius: 4px;
    scale: 0 1;
    transform-origin: left;
    transition: scale 0.25s;
  }
  :hover::before {
    scale: 1;
  }
`;
