import React from "react";
import styled from "styled-components";
import axios from "axios";

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
        <div>
          <h1>TopPlay</h1>
          <h2>A melhor playlist. Feita por você.</h2>
        </div>
        <div>
          <span>Adicionar: </span>
          <input
            value={this.state.nomeDaPlaylist}
            onChange={this.mudaNomeDaPlaylist}
          ></input>
          <button onClick={this.adicionarPlaylist}>Salvar</button>
        </div>
      </div>
    );
  }
}

export default TelaAdicionar;
