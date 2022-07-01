import styled from 'styled-components';
import React, { useState } from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const FormsContainer = styled.div`
  text-align: left;
  margin-left: 100px;
`;
const FormsTitle = styled.h1`
  margin-bottom: 10px;
`;

const FormsInput = styled.input`
  width: 90%;
  background-color: lightgrey;
  border-radius: 10px;
  height: 80px;
  font-size: 40px;
`;

const FormsButton = styled(Link)`
  font-size: 20px;
  border-radius: 10px;
  text-decoration: none;
  background-color: lightgrey;
  padding: 8px;
  color: black;
  &: active {
    background-color: grey;
  }
  &: hover {
    cursor: pointer;
    transition: 200ms;
    box-shadow: 5px 5px 5px grey;
  }
`;

const ButtonDiv = styled.div`
  text-align: center;
`;

function ClickAlert(
  nameInput,
  URLInput,
  rate,
  priceRate,
  RestaurantListState,
  setRestaurantListState
) {
  const newCard = {
    picture: URLInput,
    name: nameInput,
    grade: rate,
    price: priceRate,
  };
  setRestaurantListState([...RestaurantListState, newCard]);
}

function AddMiamMiam({ RestaurantListState, setRestaurantListState }) {
  const [nameInput, setName] = useState('');
  const [URLInput, setURL] = useState('');
  const [rate, setRate] = useState(0);
  const [priceRate, setPriceRate] = useState(0);
  return (
    <FormsContainer>
      <FormsTitle>Nom</FormsTitle>
      <FormsInput
        type="text"
        id="name"
        name="name"
        size="100"
        onChange={(event) => setName(event.target.value)}
      />
      <FormsTitle>Image-URL</FormsTitle>
      <FormsInput
        type="text"
        id="URL"
        name="URL"
        size="100"
        onChange={(event) => setURL(event.target.value)}
      />
      <FormsTitle>Ma note</FormsTitle>
      <Rating rate={rate} setRate={setRate} isStar />
      <FormsTitle name="ajouter">Rapport qualité-prix</FormsTitle>
      <Rating rate={priceRate} setRate={setPriceRate} isStar={false} />
      <ButtonDiv>
        <FormsButton
          to="/"
          onClick={() =>
            ClickAlert(
              nameInput,
              URLInput,
              rate,
              priceRate,
              RestaurantListState,
              setRestaurantListState
            )
          }
        >
          Ajouter
        </FormsButton>
      </ButtonDiv>
    </FormsContainer>
  );
}

export default AddMiamMiam;
