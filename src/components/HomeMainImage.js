import React from 'react'

import foodImage from '../img/foodCentral.png';
import styled from 'styled-components'

function HomeMainImage() {




  return (
    <>
      <CreativeDiv back={foodImage}></CreativeDiv> 
    </>
  )
}

const CreativeDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-20deg);
  background: url(${(props) => (props.back ? props.back : 'lightblue')});
  background-position: center;
  background-size: cover;
  width: calc(30rem + 5vw);
  height: calc(30rem + 5vw);

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

  @media screen and (max-width: 700px) {
    width: 20rem;
    height: 20rem;
  }

  @media screen and (max-width: 600px) {
    transform: translate(-30%, 30%) rotate(-20deg);

    &:hover {
      transform: translate(-30%, 30%) rotate(0);
    }
  }
  @media screen and (max-width: 500px) {
    transform: translate(-40%, 30%) rotate(-20deg);
    width: 13rem;
    height: 13rem;

    &:hover {
      transform: translate(-10%, 80%) rotate(0);
    }
  }
`;

export default HomeMainImage
