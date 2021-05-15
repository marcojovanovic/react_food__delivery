import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FoodContext } from '../context';

function Navbar() {
  const { sidebar, setSidebar } = React.useContext(FoodContext);

  return (
    <>
      <NavbarUl sidebar={sidebar}>
        <NavbarLi>
          <Link onClick={()=> setSidebar(false)}  to="#">Dokumentacija</Link>
        </NavbarLi>
        <NavbarLi>
          <Link onClick={()=> setSidebar(false)}  to="/contact">Naruci Hranu</Link>
        </NavbarLi>
        <NavbarLi>
          <Link onClick={()=> setSidebar(false)}  to="/products">Menu</Link>
        </NavbarLi>
        <NavbarLi>
          <Link onClick={()=> setSidebar(false)}  to="/location">Nasa Lokacija</Link>
        </NavbarLi>
      </NavbarUl>
    </>
  );
}
const NavbarUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.sideColor};
  width: 20%;
  position: absolute;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? 0 : '-100%')};
  padding-top: 2rem;
  justify-content: space-around;
  height: 100vh;
  transition: all 0.3s ease-in-out;
  color: #333;


  @media screen and (max-width: 600px) {
      height:130vh;
    }

  & li {
  }

  & a {
    color: ${(props) => props.theme.linkColor};
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
    font-size:calc(0.7rem + 0.8vw);
  }
`;

const NavbarLi = styled.li`
  position: relative;
  z-index: 1;
  margin-bottom: calc(1vh + 1vw);
  font-size: calc(0.8rem + 0.5vw);
  cursor: pointer;
  display: block;
  width: 100%;
  padding-left: 2vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #e22255;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s ease-in-out;
  }

  &:hover&::before,
  &:active&::before {
    transform: scaleX(1);
    transform-origin: left;
  }
`;
export default Navbar;
