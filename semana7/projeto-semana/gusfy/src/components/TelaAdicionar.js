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

  button {
    margin: 5px;
  }
`;

class TelaAdicionar extends React.Component {
  state = {
    nomeDaPlaylist: "",
  };

  adicionarPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const headers = {
      headers: {
        Authorization: "gustavo-guimaraes-lovelace",
      },
    };
    const body = {
      name: this.state.nomeDaPlaylist,
    };

    axios
      .post(url, body, headers)
      .then((resp) => {
        alert("Playlist Adicionada");
        this.setState({ nomeDaPlaylist: "" });
      })
      .catch((erro) => {
        alert(erro);
      });
  };

  mudaNomeDaPlaylist = (event) => {
    this.setState({ nomeDaPlaylist: event.target.value });
  };

  render() {
    return (
      <div>
        <BlocoPrincipal>
          <h2>Cadastrar Playlist</h2>
          <span>Adicionar: </span>
          <input
            value={this.state.nomeDaPlaylist}
            onChange={this.mudaNomeDaPlaylist}
          ></input>
          <button onClick={this.adicionarPlaylist}>Salvar</button>
        </BlocoPrincipal>
      </div>
    );
  }
}

export default TelaAdicionar;
