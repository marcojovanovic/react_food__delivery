import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import foodImage from '../img/foodCentral.png';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import { FoodContext } from '../context';
import RubberBand from 'react-reveal/RubberBand';
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';

function Home() {
  const { theme, setTheme } = React.useContext(FoodContext);

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const icon = theme === 'dark' ? <HiMoon size={40} /> : <CgSun size={40} />;

  return (
    <HomeContainer>
      <HomeImg>
        <NavbarUl>
          <RubberBand>
            <li>
              <Link to="/about">Prodavnica</Link>
            </li>
            <li>
              <Link to="/products">Proizvodi</Link>
            </li>
            <li>
              <Link to="/contact">Naruci Hranu</Link>
            </li>
          </RubberBand>
        </NavbarUl>

        <DonaImg>
          <Roll left delay={1000}>
            <img src="/assets/dona.png" alt="" />
          </Roll>
        </DonaImg>
      </HomeImg>

      <CreativeDiv back={foodImage}></CreativeDiv>

      <Toggle onClick={changeTheme}>
        <Slide right delay={2000}>
          {icon}
        </Slide>
      </Toggle>

      <IceCreamImg>
        <Rotate>
          <img src="/assets/iceCream.png" alt="" />
        </Rotate>
      </IceCreamImg>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.pageBackground};
`;

const HomeImg = styled.div`
  width: calc(95rem + 8vw);
  height: calc(95rem + 1vw);
  background-color: ${(props) => props.theme.divColor};
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
  transition: all 0.3s ease-in;
  cursor: pointer;
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

  &:hover {
    transform: translate(-50%, -50%) rotate(0);
  }
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
  width: 100%;
  display: flex;
  justify-content: space-around;

  & li {
    margin-top: calc(2vh + 1vw);
    font-size: calc(1.1rem + 0.6vw);
    color: ${(props) => props.theme.linkColor};
  }

  & a {
    color: ${(props) => props.theme.linkColor};
  }
`;

const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.toggleColor};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
  position: absolute;
  right: 8%;
  top: 5%;
`;

export default Home;
