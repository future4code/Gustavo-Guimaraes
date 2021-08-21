import React from "react";
import styled from "styled-components";

const ContainerBotoes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background-image: none;
  background-color: #0c0a0a78;
  font-family: "Dosis", sans-serif;

  button {
    background-image: none;
    background-color: #0c0a0adf;
    color: white;
    min-height: 10vh;
    width: 15vw;
    margin: 15px;
    border-radius: 5%;
    cursor: pointer;
    font-size: 2vw;
    text-align: center;
    font-family: "Dosis", sans-serif;
  }

  h2 {
    font-size: 3vw;
    text-align: center;
    background-image: none;

    color: white;
    min-height: 10vh;
    margin: 15px;
    border-radius: 5%;
  }
`;

function CreateTrip(props) {
  return (
    <ContainerBotoes>
      <button onClick={props.onClick1}>{props.botao1}</button>
      <h2>{props.text}</h2>
      <button onClick={props.onClick2}>{props.botao2} </button>
    </ContainerBotoes>
  );
}

export default CreateTrip;
