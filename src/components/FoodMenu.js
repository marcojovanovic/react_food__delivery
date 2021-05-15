import React from 'react';
import { FoodContext } from '../context';
import styled from 'styled-components';

function FoodMenu() {
  const { menuItems } = React.useContext(FoodContext);

  return (
    <>
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
    </>
  );
}

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

const FoodPrice = styled.h3`
  font-size: calc(0.9rem + 0.4vw);
  transform: rotate(-30deg);
  position: absolute;
  top: 5%;
  left: -5%;
  color: #c33e3f;
  background: #444;
  border-radius: 10px;
  width: 50%;
`;

const FoodCard = styled.div`
  width: 26rem;
  cursor: pointer;
  text-align: center;
  border: 2px solid #333;
  border-radius: 10px;
  position: relative;
`;

const FoodImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export default FoodMenu;
