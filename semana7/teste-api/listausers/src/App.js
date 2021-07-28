import React from "react";
import styled from "styled-components";
import axios from "axios";
import BlocoInicial from "./components/BlocoInicial";

const BlocoPrincipal = styled.div`
  position: absolute;
  top: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BlocoInputs = styled.div`
  border: 1px solid black;
  height: 100%;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  padding: 10px;

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

const BotaoAtualizado = styled.button`
  position: absolute;
  right: 0;
`;

class App extends React.Component {
  state = {
    valorNome: "",
    valorEmail: "",
    listaUsuarios: [],
    pagInicial: true,
  };

  mudaPag = () => {
    this.setState({ pagInicial: !this.state.pagInicial });
  };

  componentDidMount() {
    this.pegarListaUsuarios();
  }

  deletarUsuario = (id) => {
    const url3 = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    axios
      .delete(url3, {
        headers: {
          Authorization: "gustavo-guimaraes-lovelace",
        },
      })
      .then(() => {
        alert("Você deletou esse usuário");
      })
      .catch(() => {
        alert("Houve um erro para deletar o usuário");
      });
  };

  pegarListaUsuarios = () => {
    const ulr2 =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    axios
      .get(ulr2, {
        headers: {
          Authorization: "gustavo-guimaraes-lovelace",
        },
      })
      .then((res) => {
        this.setState({
          listaUsuarios: res.data.map((usuario) => {
            return usuario;
          }),
        });
        console.log(this.state.listaUsuarios);
      })
      .catch((erro) => {
        alert("Deu erro", erro);
      });
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
    const listaDeUsers = this.state.listaUsuarios.map((usuario) => {
      return (
        <div>
          <li key={usuario.id}>{usuario.name}</li>
          <button
            onClick={() => {
              this.deletarUsuario(usuario.id);
            }}
          >
            deletar
          </button>
        </div>
      );
    });
    if (this.state.pagInicial) {
      return (
        <div>
          <button onClick={this.mudaPag}>Lista De Cadastrados</button>
          <BlocoPrincipal className="App">
            <BlocoInicial
              nome={this.state.valorNome}
              email={this.state.valorEmail}
              mudaNome={this.mudaNome}
              mudaEmail={this.mudaEmail}
              criarListaUsuarios={this.criarListaUsuarios}
            />
          </BlocoPrincipal>
        </div>
      );
    }
    return (
      <div>
        <button onClick={this.mudaPag}>Lista para Cadastros</button>
        <BotaoAtualizado onClick={this.pegarListaUsuarios}>
          Atualizar Lista
        </BotaoAtualizado>
        <BlocoPrincipal>
          <BlocoInputs>
            <h3>Usuários Cadastrados:</h3>
            {listaDeUsers}
          </BlocoInputs>
        </BlocoPrincipal>
      </div>
    );
  }
}

export default App;
