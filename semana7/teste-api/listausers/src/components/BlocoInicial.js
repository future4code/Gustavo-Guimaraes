import React from "react";
import styled from "styled-components";
import axios from "axios";

const BlocoInputs = styled.div`
  border: 1px solid black;
  height: 200px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;

  div {
    margin: 10px;
  }

  div > label {
    display: block;
  }

  div > button {
    background-color: #4366d8;
    border-radius: 5px;
    height: 30px;
    width: 80px;
    font-size: 16px;
    color: white;
    cursor: pointer;
  }
`;

class BlocoInicial extends React.Component {
  render() {
    return (
      <BlocoInputs>
        <div>
          <label>Nome:</label>
          <input value={this.props.nome} onChange={this.props.mudaNome} />
        </div>
        <div>
          <label>E-mail:</label>
          <input value={this.props.email} onChange={this.props.mudaEmail} />
        </div>
        <div>
          <button onClick={this.props.criarListaUsuarios}>Salvar</button>
        </div>
      </BlocoInputs>
    );
  }
}

export default BlocoInicial;
