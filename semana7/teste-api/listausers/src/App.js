import React from "react";
import styled from "styled-components";
import axios from "axios";
import BlocoInicial from "./components/BlocoInicial";
import BlocoLista from "./components/BlocoLista/BlocoLista";

class App extends React.Component {
  state = {
    pagInicial: true,
  };

  mudaPag = () => {
    this.setState({ pagInicial: !this.state.pagInicial });
  };

  render() {
    if (this.state.pagInicial) {
      return (
        <BlocoInicial
          pagInicial={this.state.pagInicial}
          mudaPag={this.mudaPag}
        />
      );
    }
    return (
      <BlocoLista pagInicial={this.state.pagInicial} mudaPag={this.mudaPag} />
    );
  }
}

export default App;
