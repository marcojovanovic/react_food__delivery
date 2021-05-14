import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import { FoodContext } from '../context';


function Navbar() {


  const {sidebar} = React.useContext(FoodContext);




  return (
    <>
       <NavbarUl sidebar={sidebar}>
         
         <li>
           <Link to="#">Dokumentacija</Link>
         </li>
          <li>
           <Link to="/contact">Naruci Hranu</Link>
         </li>
          <li>
           <Link to="/products">Menu</Link>
         </li>
         <li>
           <Link to="/location">Nasa Lokacija</Link>
         </li>
        
        
    
     </NavbarUl>
    </>
  )

  }
  const NavbarUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction:column;
  background:white;
  width:20%;
  position:absolute;
  top:0;
  left: ${({ sidebar }) => (sidebar ? 0 : '-100%')};
  padding:calc(2vh + 2vw);
  justify-content: space-around;
  height:100vh;
  transition:all 0.3s ease-in-out;
  color:#333;


  

  & li {
   
    font-size: calc(1.1rem + 0.6vw);
    margin-bottom:calc(1.5vh + 1vw);
    font-size:calc(0.8rem + 0.5vw);
  }

  & a {
    color: ${(props) => props.theme.linkColor};
  }
  
`









export default Navbar
