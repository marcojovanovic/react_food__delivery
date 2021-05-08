import React from 'react';
import styled from 'styled-components';
import foodImage from '../img/header-bg.jpg';
import {orderFirestore} from '../firebase/config'


function Contact() {
  return (
    <ContactContainer back={foodImage}>
      <OrderImg>
        <img src="/assets/order.png" alt="" />
      </OrderImg>

      <FormContainer>
        <form>
          <Label htmlFor="naslov">Ime i Prezime</Label>
          <FormField>
            <input type="text" name="naslov" required autoComplete="off" />
          </FormField>

          <div className="form-group"></div>

          <Label htmlFor="Img">Adresa</Label>
          <FormField>
            <input type="text" name="imgURL" required autoComplete="off" />
          </FormField>

          <div className="form-group">
            <Label htmlFor="Autor">Broj Telefona</Label>
            <FormField>
              <input type="text" name="autor" required autoComplete="off" />
            </FormField>
          </div>
          <Label htmlFor="naslov">Porudzbina</Label>
          <FormField>
            <textarea
              type="text"
              name="sadrzaj"
              rows="12"
              required
              autoComplete="off"
            ></textarea>
          </FormField>
          <Button>Poruci</Button>
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

const Button = styled.div`
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
  margin-top: 6rem;
  letter-spacing: 0.4rem;

  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em #ff923cba;
    background-size: 100% 100%;
    transform: translateY(-0.15em);
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

const Title = styled.div`
  font-family: 'Pacifico', cursive;
  text-align: center;
  font-size: 3rem;
  transform: translateY(5rem);
  margin-bottom: 10rem;
  letter-spacing: 0.5rem;
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

export default Contact;
