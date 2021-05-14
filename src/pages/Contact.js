import React from 'react';
import styled from 'styled-components';
import foodImage from '../img/header-bg.jpg';

import { FoodContext } from '../context';

function Contact() {
  const {
    pushToFirebase,
    toast,
    ToastContainer,
    register,
    errors,
    handleSubmit,
  } = React.useContext(FoodContext);

  return (
    <ContactContainer back={foodImage}>
      <OrderImg>
        <img src="/assets/Contact/order.png" alt="" />
      </OrderImg>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        draggable
        pauseOnHover
      ></ToastContainer>
      <FormContainer>
        <form onSubmit={handleSubmit(pushToFirebase)}>
          <Label htmlFor="name">Ime i Prezime</Label>
          <FormField>
            <input
              type="text"
              name="firstName"
              autoComplete="off"
              {...register('firstName')}
            />
          </FormField>
          <ErrorField>{errors.firstName?.message}</ErrorField>
          <Label htmlFor="address">Adresa</Label>
          <FormField>
            <input
              type="text"
              name="address"
              autoComplete="off"
              {...register('address')}
            />
          </FormField>

          <ErrorField>{errors.address?.message}</ErrorField>
          <Label htmlFor="telephone">Broj Telefona</Label>
          <FormField>
            <input
              type="number"
              name="telephone"
              autoComplete="off"
              {...register('telephone')}
            />
          </FormField>
          <ErrorField>
            {errors.telephone && 'Pravilno popunite polje telefon'}
          </ErrorField>
          <Label htmlFor="orders">Porudzbina</Label>
          <FormField>
            <textarea
              type="text"
              name="orders"
              rows="12"
              autoComplete="off"
              {...register('orders')}
            ></textarea>
          </FormField>
          <ErrorField>{errors.orders?.message}</ErrorField>
          <Button type="submit">Poruči</Button>
        </form>
      </FormContainer>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${(props) => (props.back ? props.back : 'lightblue')});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 4vh 2vw;
  overflow: hidden;
`;

const Button = styled.button`
  font-weight: bold;
  color: white;
  line-height: 2.5rem;
  padding: 1.2rem 4rem;
  font-size: 1.5rem;
  border: 1px solid #ff923cba;
  border-radius: 25px 0 25px 25px;
  background: transparent;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-align: center;
  margin: 4rem auto;
  letter-spacing: 0.4rem;
  width: 30%;

  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em #ff923cba;
    background-size: 100% 100%;
    transform: translateY(-0.15em);
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

const FormContainer = styled.div`
  width: 70rem;
  margin: auto;

  @media (max-width: 1000px) {
    width: 80% !important;
  }
`;

const OrderImg = styled.div`
  width: 7rem;
  margin: auto;
  margin-bottom: 2vh;

  & img {
    margin-top: 5vh;
  }
`;

const FormField = styled.div`
  background-color: #f2f6f8;
  border-radius: 25px 25px 25px 0;
  border: none;
  box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);
  padding: 12px 12px;
  margin: 1.7vh 0;

  & input {
    color: #333;
    width: 100%;
  }

  @media (max-width: 100px) {
    max-width: 50% !important;
  }

  &:focus {
    background-color: #f2f6f8;
    border: none;
    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);
  }
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 2.1rem;
  color: white;
`;

const ErrorField = styled.p`
  color: #c33e3f;
  font-size: 1.3rem;
`;

export default Contact;
