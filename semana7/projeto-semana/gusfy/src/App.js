import React from "react";
import styled from "styled-components";
import axios from "axios";
import TelaAdicionar from "./components/TelaAdicionar";
import TelaPlaylists from "./components/Playlists/TelaPlaylists";

class App extends React.Component {
  render() {
    return (
      <div>
        <TelaAdicionar />
        <hr />
        <TelaPlaylists />
      </div>
    );
  }
}

export default App;
