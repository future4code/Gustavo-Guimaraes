import React from "react";
import styled from "styled-components";
import axios from "axios";

class BlocoDetalhe extends React.Component {
  state = {
    dadosUsuario: "",
  };

  pegaDetalhesUsuario = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    axios
      .get(url, {
        headers: {
          Authorization: "gustavo-guimaraes-lovelace",
        },
      })
      .then((res) => {
        this.setState({ dadosUsuario: res.data });
      })
      .catch((erro) => {
        alert("Deu erro", erro);
      });
  };

  render() {
    return <div>po</div>;
  }
}

export default BlocoDetalhe;
