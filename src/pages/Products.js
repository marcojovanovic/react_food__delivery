import React from 'react';

import styled from 'styled-components';
import foodImage from '../img/candy1.png';

import { FoodContext } from '../context';

function Products() {
  const { menuItems, uniqueCategories, filtered } = React.useContext(
    FoodContext
  );

  return (
    <FoodMainWrapper back={foodImage}>
      <FoodMainTitle>Sortiraj hranu u prodavnici !!!</FoodMainTitle>
      <ButtonWrapper>
        {uniqueCategories.map((item, index) => {
          return (
            <FoodButton key={index} onClick={() => filtered(item)}>
              {item}
            </FoodButton>
          );
        })}
      </ButtonWrapper>

      <FoodContainer>
        {menuItems.map((food) => {
          const { image, id, name, cena } = food;
          return (
            <FoodCard key={id}>
              <FoodImage src={image} alt="food image" />
              <FoodTitle>{name}</FoodTitle>
             
                <FoodPrice>{cena} din</FoodPrice>
            
            </FoodCard>
          );
        })}
      </FoodContainer>
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


const FoodContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 25rem);
  place-content: center;
  grid-gap: 5rem 4vw;
  margin-top: 10vh;
`;

const FoodTitle = styled.h1`
  font-size: calc(1.3rem + 0.4vw);
  transform: translateY(-3.4rem);
  text-align: center;
`;

const FoodMainTitle = styled.h1`
  text-align: center;
  color: white;
  font-size: calc(3rem + 0.3vw);
  text-transform: uppercase;
  margin: 3rem 0;
`;

const FoodPrice = styled.h3`
  font-size: calc(0.9rem + 0.4vw);
  transform:rotate(-30deg);
  position:absolute;
  top:5%;
  left:-5%;
  color: #c33e3f;
  background:#444;
  border-radius:10px;
  width:50%;
`;



const FoodCard = styled.div`
  width: 26rem;
  cursor: pointer;
  text-align: center;
  border: 2px solid #333;
  border-radius: 10px;
  position:relative;
`;

const FoodImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
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

export default Products;
