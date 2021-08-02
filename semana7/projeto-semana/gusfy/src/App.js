import React from "react";
import styled from "styled-components";
import axios from "axios";
import TelaAdicionar from "./components/TelaAdicionar";
import TelaPlaylists from "./components/Playlists/TelaPlaylists";
import Header from "./components/Header";

const BlocoInteiro = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  display: flex;
`;

class App extends React.Component {
  state = {
    pagAdicionaPlaylist: false,
    pagExibirPlaylist: true,
  };

  mudaPagDeAdicionar = () => {
    this.setState({ pagAdicionaPlaylist: true });
    this.setState({ pagExibirPlaylist: false });
  };

  mudaPagDeExibir = () => {
    this.setState({ pagAdicionaPlaylist: false });
    this.setState({ pagExibirPlaylist: true });
  };

  render() {
    return (
      <BlocoInteiro>
        <Header
          mudaAdicionarPlaylist={this.mudaPagDeAdicionar}
          mudaPagDeExibir={this.mudaPagDeExibir}
        />
        {this.state.pagAdicionaPlaylist && <TelaAdicionar />}
        {this.state.pagExibirPlaylist && <TelaPlaylists />}
      </BlocoInteiro>
    );
  }
}

export default App;
