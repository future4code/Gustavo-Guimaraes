import React from "react";
import styled from "styled-components";
import axios from "axios";

class TelaPlaylists extends React.Component {
  state = {
    playlists: [],
    musicas: [],
    pagDetalhes: false,
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
        alert(erro);
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
        alert(erro);
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
        this.renderizaPagDetalhes();
      })
      .catch((erro) => {
        alert(erro);
      });
  };

  renderizaPagDetalhes = () => {
    this.setState({ pagDetalhes: !this.state.pagDetalhes });
  };

  render() {
    const todasAsMusicas = this.state.musicas.map((musica) => {
      return <p>{musica.name}</p>;
    });
    const todasAsPlaylists = this.state.playlists.map((playlist) => {
      return (
        <div>
          <button
            onClick={() => {
              this.listaDeMusicas(playlist.id);
            }}
          >
            Detalhes
          </button>
          <span key={playlist.id}>{playlist.name}</span>
          <button
            onClick={() => {
              this.deletarPlaylist(playlist.id);
            }}
          >
            X
          </button>
        </div>
      );
    });
    const playlistCerta = this.state.playlists.filter((id) => {
      if (id === id.id) {
        return <div>{id.name}</div>;
      }
    });

    //Usar o método searchPlaylist

    if (this.state.pagDetalhes) {
      return (
        <div>
          <button onClick={this.renderizaPagDetalhes}>voltar</button>
          <div>{playlistCerta}</div>
          {this.state.pagDetalhes && todasAsMusicas}
        </div>
      );
    }
    return (
      <div>
        <div>Playlists: </div>
        {todasAsPlaylists}
      </div>
    );
  }
}

export default TelaPlaylists;
