import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import foodImage from '../img/foodCentral.png';

function Home() {
  return (
    <>
      <HomeImg>
         <NavbarUl>
         
              <li><Link to='/about'>Prodavnica</Link></li>
              <li><Link to='/products'>Proizvodi</Link></li>
              <li><Link to='/contact'>Naruci Hranu</Link></li>
            
         </NavbarUl>
        <DonaImg>
          <img src="/assets/dona.png" alt="" />
        </DonaImg>
      </HomeImg>
      <CreativeDiv back={foodImage}></CreativeDiv>

      <IceCreamImg>
        <img src="/assets/iceCream.png" alt="" />
      </IceCreamImg>
    </>
  );
}

const HomeImg = styled.div`
  width: calc(95rem + 8vw);
  height: calc(95rem + 1vw);
  background: #f52d56;
  position: relative;
  border-radius: 31% 40% 100% 0% / 0% 0% 100% 49%;
`;

const CreativeDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-20deg);
  background: url(${(props) => (props.back ? props.back : 'lightblue')});
  background-position: center;
  background-size: cover;
  width: 40rem;
  height: 40rem;
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
`;

const DonaImg = styled.div`
  width: 20rem;
  position: absolute;
  bottom: 5%;
  left: 40%;
  background: transparent;
`;

const IceCreamImg = styled.div`
  width: 20rem;
  position: absolute;
  right: 4%;
  bottom: 5%;
`;


const NavbarUl = styled.ul`
  width:100%;
  display:flex;
  justify-content:space-around;
  

& li{
  margin-top:calc(2vh + 1vw);
  font-size:calc(1.1rem + 0.6vw);
}

`



export default Home;
