import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import foodImage from '../img/candy1.png';
import { products } from '../data';

function Products() {
  const [foodItems, setFoodItems] = useState(products);

  const [menuItems, setMenuItems] = useState(products);

  const [buttonValue, setButtonValue] = useState('');

  const categories = ['all', foodItems.map((item) => item.category)].flat();

  const uniqueCategories = Array.from(new Set(categories));

  const filtered = (buttonValue) => {
    if (buttonValue === 'all') {
      setMenuItems(products);
    } else {
      let filteredItems = foodItems.filter(
        (item) => item.category === buttonValue
      );

      setMenuItems(filteredItems);
    }
  };

  return (
    <FoodMainWrapper back={foodImage}>
      <FoodMainTitle>Klikom sortiraj hranu u prodavnici !!!</FoodMainTitle>
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
  margin-top: 9vh;
`;

const FoodTitle = styled.h1`
  font-size: calc(1.3rem + 0.4vw);
  transform: translateY(-3.4rem);
  text-align: center;
`;

const FoodMainTitle = styled.h1`
  text-align: center;
  color: white;
  font-size: calc(2rem + 0.3vw);
`;

const FoodPrice = styled.h3`
  font-size: calc(0.9rem + 0.4vw);
  transform: translate(-7.5rem, -34.2rem);
  color: #c33e3f;
`;

const FoodCard = styled.div`
  width: 26rem;
  cursor: pointer;
  text-align: center;
  border: 2px solid #333;
  border-radius: 10px;
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
