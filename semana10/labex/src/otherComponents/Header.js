import React from "react";
import styled from "styled-components";

const ContainerBotoes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;

  button,
  h2 {
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
  }
`;

function CreateTrip(props) {
  return (
    <ContainerBotoes>
      <button onClick={props.onClick1}>{props.botao1}</button>
      <h2>{props.text}</h2>
      {props.showButton && (
        <button onClick={props.onClick2}>{props.botao2} </button>
      )}
    </ContainerBotoes>
  );
}

export default CreateTrip;
