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

  div {
    margin: 20px;
    display: flex;
    flex-direction: column;
  }

  button {
    margin: 15px;
  }
`;

class TelaAdicionarMusica extends React.Component {
  state = {
    inputNome: "",
    inputArtista: "",
    inputLink: "",
  };

  adicionaMusica = async () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`;
    const headers = {
      headers: {
        Authorization: "gustavo-guimaraes-lovelace",
      },
    };

    const body = {
      name: this.state.inputNome,
      artist: this.state.inputArtista,
      url: this.state.inputLink,
    };

    await axios
      .post(url, body, headers)
      .then((resp) => {
        alert(resp);
      })
      .catch((erro) => {
        alert(erro);
      });
    this.setState({ name: "", artist: "", url: "" });
    this.props.listaDeMusicas(this.props.playlist.id);
  };

  mudaInputNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  mudaInputArtista = (event) => {
    this.setState({ inputArtista: event.target.value });
  };

  mudaInputLink = (event) => {
    this.setState({ inputLink: event.target.value });
  };

  render() {
    return (
      <BlocoPrincipal>
        <div>
          <label>Nome da Música</label>
          <input
            value={this.state.inputNome}
            onChange={this.mudaInputNome}
          ></input>
        </div>
        <div>
          <label>Artistas</label>
          <input
            value={this.state.inputArtista}
            onChange={this.mudaInputArtista}
          ></input>
        </div>
        <div>
          <label>Url da Música</label>
          <input
            value={this.state.inputLink}
            onChange={this.mudaInputLink}
          ></input>
        </div>
        <button type="submit" onClick={this.adicionaMusica}>
          Adicionar música
        </button>
        <button onClick={this.props.mudaPagAdicionaMusica}>
          Voltar para Playlists
        </button>
      </BlocoPrincipal>
    );
  }
}

export default TelaAdicionarMusica;
