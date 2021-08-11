import React from "react";
import styled from "styled-components";
import axios from "axios";
import TelaDetalhe from "./TelaDetalhes";

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

const BlocoPlaylists = styled.span`
  border: 1px solid gray;
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

class TelaPlaylists extends React.Component {
  state = {
    playlists: [],
    musicas: [],
    pagDetalhes: false,
    playlistId: "",
  };

  componentDidMount() {
    this.listaPlaylists();
  }

  listaPlaylists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const headers = {
      headers: {
        Authorization: "gustavo-guimaraes-lovelace",
      },
    };

    axios
      .get(url, headers)
      .then((resp) => {
        this.setState({ playlists: resp.data.result.list });
      })
      .catch((erro) => {
        alert(erro.response);
      });
  };

  deletarPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    const headers = {
      headers: {
        Authorization: "gustavo-guimaraes-lovelace",
      },
    };

    axios
      .delete(url, headers)
      .then((resp) => {
        alert("Playlist deletada com sucesso");
        this.listaPlaylists();
      })
      .catch((erro) => {
        alert(erro.response);
      });
  };

  listaDeMusicas = async (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    const headers = {
      headers: {
        Authorization: "gustavo-guimaraes-lovelace",
      },
    };

    await axios
      .get(url, headers)
      .then((resp) => {
        this.setState({
          musicas: resp.data.result.tracks,
        });
        this.renderizaPagDetalhes(id);
      })
      .catch((erro) => {
        /* alert(erro); */
      });
  };

  renderizaPagDetalhes = (id) => {
    this.setState({
      pagDetalhes: !this.state.pagDetalhes,
      playlistId: id,
    });
    console.log(this.state.playlistId);
  };

  render() {
    const todasAsPlaylists = this.state.playlists.map((playlist) => {
      return (
        <BlocoPlaylists>
          <span
            onClick={() => {
              this.listaDeMusicas(playlist.id);
            }}
            key={playlist.id}
          >
            {playlist.name}
          </span>
          <button
            onClick={() => {
              this.deletarPlaylist(playlist.id);
            }}
          >
            X
          </button>
        </BlocoPlaylists>
      );
    });

    if (this.state.pagDetalhes) {
      return (
        <TelaDetalhe
          renderizaPagDetalhes={this.renderizaPagDetalhes}
          pagDetalhes={this.state.pagDetalhes}
          playlist={this.state.playlists}
          musicas={this.state.musicas}
          listaDeMusicas={this.listaDeMusicas}
          playlistId={this.state.playlistId}
        />
      );
    }
    return (
      <BlocoPrincipal>
        <h1>Playlists: </h1>
        {todasAsPlaylists}
      </BlocoPrincipal>
    );
  }
}

export default TelaPlaylists;
