import React, { Suspense, lazy, useEffect } from 'react';

import styled from 'styled-components';
import foodImage from '../img/candy1.png';

import { FoodContext } from '../context';

const FoodMenu = lazy(() => import('../components/FoodMenu'));

function Products() {
  const { uniqueCategories, filtered, loading, setLoading } = React.useContext(
    FoodContext
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <FoodMainWrapper back={foodImage}>
      <FoodMainTitle>
        Koristi filtere, da izaberes svoju hranu !!!
      </FoodMainTitle>
      <ButtonWrapper>
        {uniqueCategories.map((item, index) => {
          return (
            <FoodButton key={index} onClick={() => filtered(item)}>
              {item}
            </FoodButton>
          );
        })}
      </ButtonWrapper>
      {loading ? (
        <Suspense fallback={''}>
          <FoodMenu />
        </Suspense>
      ) : (
        <LoaderWrapper>
          <Loader>
            <div></div>
            <div></div>
          </Loader>
        </LoaderWrapper>
      )}
    </FoodMainWrapper>
  );
}

const FoodMainWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${(props) => (props.back ? props.back : 'lightblue')});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: auto;
  padding: 4vh 2vw;
`;
const FoodMainTitle = styled.h1`
  text-align: center;
  color: white;
  font-size: calc(3rem + 0.3vw);
  text-transform: uppercase;
  margin: 3rem 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5rem auto;
`;

const FoodButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 25px 25px 25px 0;
  line-height: 1.5;
  font-size: calc(1.5rem + 0.3vw);
  padding: 1em 2em;
  letter-spacing: 0.05rem;
  box-shadow: inset 0 0 0 4px #c33e3f;
  color: #ee8824;
  transition: color 0.25s 0.0833333333s;
  position: relative;
  margin-left: 3rem;

  &:focus {
    outline: 2px dotted #ee8824;
  }

  &::before,
  &::after {
    border: 0 solid transparent;
    box-sizing: border-box;
    content: '';
    pointer-events: none;
    position: absolute;
    width: 0;
    height: 0;
    bottom: 0;
    right: 0;
  }
  &::before {
    border-bottom-width: 4px;
    border-left-width: 4px;
  }
  &::after {
    border-top-width: 4px;
    border-right-width: 4px;
  }
  &:hover {
    color: white;
  }
  &:hover::before,
  &:hover::after {
    border-color: #ee8824;
    transition: border-color 0s, width 0.25s, height 0.25s;
    width: 100%;
    height: 100%;
  }
  &:hover::before {
    transition-delay: 0s, 0s, 0.25s;
  }
  &:hover::after {
    transition-delay: 0s, 0.25s, 0s;
  }
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 200px;
  height: 400px;

  & div {
    position: absolute;
    border: 4px solid #ee8824;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  & div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

export default Products;
