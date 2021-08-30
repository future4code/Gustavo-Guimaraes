import Header from "../../otherComponents/Header";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const ContainerGeral = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: "Dosis", sans-serif;
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
    width: 50vw;
    margin: 2vh;
    background-image: none;
    background-color: white;
    height: 50px;
    border-radius: 5px;
    border: 1px solid black;
    padding: 5px;
  }
  button {
    width: 20vw;
    margin: 12vh;
    background-image: none;
    background-color: #000000;
    height: 50px;
    color: white;
    font-size: 1vw;
    border-radius: 5px;
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

  const goToTrips = () => {
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
        goToTrips();
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      goToTrips();
    }
  }, []);

  return (
    <ContainerGeral>
      <Header
        botao1="Voltar"
        onClick1={() => history.goBack()}
        text="LogIn"
        botao2="Nossas Viagens"
        onClick2={() => history.push("/trips/list")}
      />
      <ContainerPrincipal>
        <CardLogin>
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
          <button type="submit" onClick={logIn}>
            Logar
          </button>
        </CardLogin>
      </ContainerPrincipal>
    </ContainerGeral>
  );
}

export default Login;
