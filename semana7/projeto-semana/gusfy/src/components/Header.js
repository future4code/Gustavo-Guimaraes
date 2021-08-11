import React from "react";
import styled from "styled-components";

const BlocoHeader = styled.div`
  width: 250px;
  background-color: black;
  display: flex;
  flex-direction: column;
  border-right: 1px solid;
  color: white;

  div {
    border: 5px solid green;
    cursor: pointer;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <BlocoHeader>
        <h1>GusFy</h1>
        <div onClick={this.props.mudaAdicionarPlaylist}>
          <p> Adicionar Playlist</p>
        </div>
        <div onClick={this.props.mudaPagDeExibir}>
          <p> Exibir Playlists</p>
        </div>
      </BlocoHeader>
    );
  }
}

export default Header;
