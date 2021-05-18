import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';



import { FoodContext } from '../context';
import Navbar from '../components/Navbar';
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';



import Roll from 'react-reveal/Roll';

import { FaBars } from 'react-icons/fa';

const HomeMainImage = lazy(() => import('../components/HomeMainImage'));

function Home() {
  const { icon, changeTheme, bringBackSide } = React.useContext(FoodContext);

  return (
    <HomeContainer>
      <HomeImg>
        <Navbar />
        <DonaImg>
          <Roll left delay={1000}>
            <img src="/assets/mainImg/dona.png" alt="" />
          </Roll>
        </DonaImg>
      </HomeImg>

      <FaBars onClick={bringBackSide} className="bars" color="#333" size={40} />

      <Suspense fallback={''}>
        <HomeMainImage />
      </Suspense>

      <Toggle onClick={changeTheme}>
        <Slide right delay={2000}>
          {icon}
        </Slide>
      </Toggle>

      <IceCreamImg>
        <Rotate>
          <img src="/assets/mainImg/iceCream.png" alt="" />
        </Rotate>
      </IceCreamImg>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
 height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.pageBackground};



  @media screen and (max-width: 600px) {
      height:130vh;
    }

  // icon class

  .bars {
    position: absolute;
    top: 5%;
    left: 15%;
    cursor: pointer;

    @media screen and (max-width: 1100px) {
      left: 90%;
    }
  }
`;

const HomeImg = styled.div`
  width: calc(95rem + 8vw);
  height: calc(95rem + 1vw);
  background-color: ${(props) => props.theme.divColor};
  position: relative;
  border-radius: 31% 40% 100% 0% / 0% 0% 100% 49%;
`;



const DonaImg = styled.div`
  width: calc(18rem + 0.5vw);
  position: absolute;
  bottom: 5%;
  left: 40%;
  background: transparent;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const IceCreamImg = styled.div`
  width: calc(18rem + 0.5vw);
  position: absolute;
  right: 4%;
  bottom: 5%;

  @media screen and (max-width: 1200px) {
    display: none;
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

  @media screen and (max-width: 1100px) {
    position: absolute;
    left: 8%;
    top: 5%;
    border: 1px solid white;
  }
`;

export default Home;
