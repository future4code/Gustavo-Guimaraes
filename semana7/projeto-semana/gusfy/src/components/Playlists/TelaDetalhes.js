import React from "react";
import styled from "styled-components";
import axios from "axios";
import TelaAdicionarMusica from "./TelaAdicionarMusica/TelaAdicionarMusica";

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
    display: flex;
    justify-content: center;
    margin: 25px;
    align-items: center;

    audio {
      margin: 0px 20px;
    }
  }
`;

class TelaDetalhe extends React.Component {
  state = {
    pagAdicionaMusica: false,
  };

  componentDidMount() {
    this.props.listaDeMusicas(this.props.playlist.id);
  }

  mudaPagAdicionaMusica = () => {
    this.setState({ pagAdicionaMusica: !this.state.pagAdicionaMusica });
  };

  deletaMusicaDaPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks/${id}`;

    const headers = {
      headers: {
        Authorization: "gustavo-guimaraes-lovelace",
      },
    };

    axios
      .delete(url, headers)
      .then((resp) => {
        alert("Musica Deletada com sucesso");
        this.props.listaDeMusicas(this.props.playlist.id);
      })
      .catch((erro) => {
        alert(erro);
      });
  };

  render() {
    const todasAsMusicas = this.props.musicas.map((musica) => {
      return (
        <div>
          <button
            onClick={() => {
              this.deletaMusicaDaPlaylist(musica.id);
            }}
          >
            X
          </button>
          <span>
            {" "}
            <strong>{musica.artist} </strong> - {musica.name}{" "}
          </span>
          <audio controls="controls">
            <source src={musica.url} type="mp4"></source>
          </audio>
        </div>
      );
    });
    const playlist = this.props.playlist.map((playlist) => {
      if (this.props.playlistId === playlist.id)
        return <h2>{playlist.name}</h2>;
    });
    if (this.state.pagAdicionaMusica) {
      return (
        <div>
          <TelaAdicionarMusica
            mudaPagAdicionaMusica={this.mudaPagAdicionaMusica}
            playlistId={this.props.playlistId}
            listaDeMusicas={this.props.listaDeMusicas}
            playlist={this.props.playlist}
          />
        </div>
      );
    }
    return (
      <BlocoPrincipal>
        <button onClick={this.props.renderizaPagDetalhes}>voltar</button>
        {playlist}
        <button onClick={this.mudaPagAdicionaMusica}>Adicionar</button>
        {todasAsMusicas}
      </BlocoPrincipal>
    );
  }
}

export default TelaDetalhe;
