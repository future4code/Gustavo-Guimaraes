import Header from "../../otherComponents/Header";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const ContainerGeral = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ContainerPrincipal = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const CardLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 70vh;
  background-image: none;
  background-color: #8080802d;
  h2,
  input {
    background-image: none;
    background-color: white;
    margin: 15px;
  }
`;

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeSenha = (e) => {
    setSenha(e.target.value);
  };

  const goToDetails = () => {
    history.push("/admin/trips/list");
  };

  const logIn = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gustavo-guimaraes-lovelace/login";
    const body = {
      email: email,
      password: senha,
    };

    axios
      .post(url, body)
      .then((resp) => {
        localStorage.setItem("token", resp.data.token);
        goToDetails();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <ContainerGeral>
      <Header botao1="Voltar" />
      <ContainerPrincipal>
        <CardLogin>
          <h2> Login: </h2>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={changeEmail}
          />
          <input
            placeholder="Senha"
            type="password"
            value={senha}
            onChange={changeSenha}
          />
          <input type="submit" onClick={logIn} />
        </CardLogin>
      </ContainerPrincipal>
    </ContainerGeral>
  );
}

export default Login;
