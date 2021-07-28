import React from "react";
import styled from "styled-components";
import axios from "axios";

const BlocoPrincipal = styled.div`
  position: absolute;
  top: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BlocoInputs = styled.div`
  border: 1px solid black;
  height: 200px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;

  div {
    margin: 10px;
  }

  div > label {
    display: block;
  }

  div > button {
    background-color: #4366d8;
    border-radius: 5px;
    height: 30px;
    width: 80px;
    font-size: 16px;
    color: white;
    cursor: pointer;
  }
`;

class BlocoInicial extends React.Component {
  state = {
    valorNome: "",
    valorEmail: "",
  };

  criarListaUsuarios = () => {
    const url1 =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.valorNome,
      email: this.state.valorEmail,
    };

    axios
      .post(url1, body, {
        headers: {
          Authorization: "gustavo-guimaraes-lovelace",
        },
      })
      .then(() => {
        alert("Usuário adicionado");
        this.setState({ valorNome: "", valorEmail: "" });
      })
      .catch((error) => {
        alert(error);
      });
  };

  mudaNome = (event) => {
    this.setState({ valorNome: event.target.value });
  };

  mudaEmail = (event) => {
    this.setState({ valorEmail: event.target.value });
  };

  render() {
    return (
      <div>
        <button onClick={this.props.mudaPag}>Lista De Cadastrados</button>
        <BlocoPrincipal>
          <BlocoInputs>
            <div>
              <label>Nome:</label>
              <input value={this.state.valorNome} onChange={this.mudaNome} />
            </div>
            <div>
              <label>E-mail:</label>
              <input value={this.state.valorEmail} onChange={this.mudaEmail} />
            </div>
            <div>
              <button onClick={this.criarListaUsuarios}>Salvar</button>
            </div>
          </BlocoInputs>
        </BlocoPrincipal>
      </div>
    );
  }
}

export default BlocoInicial;
