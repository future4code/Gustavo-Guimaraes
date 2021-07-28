import React from "react";
import styled from "styled-components";
import axios from "axios";
import BlocoDetalhe from "./BlocoDetalhe";

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

const TabelaUsuarios = styled.div`
  border: 1px solid black;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 30px;
  }
  width: 100%;
`;

class BlocoLista extends React.Component {
  state = {
    listaUsuarios: [],
    detalheUsuario: false,
  };

  componentDidMount() {
    this.pegarListaUsuarios();
  }

  deletarUsuario = (id) => {
    const url3 = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    const retorno = window.confirm("Você tem certeza?");
    if (retorno == true) {
      axios
        .delete(url3, {
          headers: {
            Authorization: "gustavo-guimaraes-lovelace",
          },
        })
        .then(() => {
          alert("Você deletou esse usuário");
          this.pegarListaUsuarios();
        })
        .catch(() => {
          alert("Houve um erro para deletar o usuário");
        });
    } else {
      alert("Você cancelou a operação");
    }
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
      })
      .catch((erro) => {
        alert("Deu erro", erro);
      });
  };

  mudaDetalhe = () => {
    this.setState({ detalheUsuario: !this.state.detalheUsuario });
  };

  render() {
    const detalheDoUser = this.state.detalheUsuario;
    const listaDeUsers = this.state.listaUsuarios.map((usuario) => {
      return (
        <TabelaUsuarios>
          <button onClick={this.mudaDetalhe}>Detalhes</button>
          <p key={usuario.id}>{usuario.name}</p>
          <button
            onClick={() => {
              this.deletarUsuario(usuario.id);
            }}
          >
            deletar
          </button>
        </TabelaUsuarios>
      );
    });
    return (
      <div>
        <button onClick={this.props.mudaPag}>Lista para Cadastros</button>
        <BlocoPrincipal>
          <BlocoInputs>
            <h3>Usuários Cadastrados:</h3>
            {!detalheDoUser && listaDeUsers}
            {detalheDoUser && <BlocoDetalhe />}
          </BlocoInputs>
        </BlocoPrincipal>
      </div>
    );
  }
}

export default BlocoLista;
