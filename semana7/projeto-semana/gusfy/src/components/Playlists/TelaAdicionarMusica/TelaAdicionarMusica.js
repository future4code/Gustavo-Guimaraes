import React from "react";
import styled from "styled-components";
import axios from "axios";

const BlocoPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75vw;
  height: 100%;
  padding: 50px;
  box-sizing: border-box;
  border: 1px solid;
`;

class TelaAdicionarMusica extends React.Component {
  render() {
    return (
      <BlocoPrincipal>
        <div>
          <label>Nome da Música</label>
          <input></input>
        </div>
        <div>
          <label>Artistas</label>
          <input></input>
        </div>
        <div>
          <label>Url da Música</label>
          <input></input>
        </div>
        <button type="submit">Adicionar música</button>
        <button onClick={this.props.mudaPagAdicionaMusica}>
          Voltar para Playlists
        </button>
      </BlocoPrincipal>
    );
  }
}

export default TelaAdicionarMusica;
