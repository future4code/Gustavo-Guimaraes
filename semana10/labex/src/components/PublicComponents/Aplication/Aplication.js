import styled from "styled-components";
import Header from "../../../otherComponents/Header";
import useForm from "../../../hooks/useForm";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: "Dosis", sans-serif;

  h3 {
    background-image: none;
    background-color: white;
    width: 50vw;
    height: 70px;
    text-align: center;
    margin: 30px;
  }
`;

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-image: none;
  background-color: #ffffff0;
  margin: 5vh;

  input,
  select {
    width: 50vw;
    margin: 2vh;
    background-image: none;
    background-color: white;
    height: 50px;
    border-radius: 5px;
    border: 1px solid black;
  }
  button {
    width: 20vw;
    margin: 2vh;
    background-image: none;
    background-color: #000000;
    height: 50px;
    color: white;
    font-size: 1vw;
    border-radius: 5px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #80808047;
    background-image: none;
    align-items: center;
  }
`;

function Aplications() {
  const [listaViagens, setListaViagens] = useState([]);
  const [viagemId, setViagemId] = useState("");
  const history = useHistory();

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const toApply = (event) => {
    event.preventDefault();
    applyTotrip(viagemId);
    cleanFields();
  };

  const changeId = (e) => {
    setViagemId(e.target.value);
  };

  const getListOfTrips = async () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gustavo-guimaraes-lovelace/trips";

    await axios
      .get(url)
      .then((resp) => {
        setListaViagens(resp.data.trips);
      })
      .catch((erro) => {
        alert(erro);
      });
  };

  const applyTotrip = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gustavo-guimaraes-lovelace/trips/${id}/apply`;
    const body = form;

    axios
      .post(url, body)
      .then((resp) => {
        alert("Sucesso");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const viagens = listaViagens.map((viagem) => {
    return (
      <option key={viagem.id} value={viagem.id}>
        {viagem.name}
      </option>
    );
  });

  useEffect(() => {
    getListOfTrips();
  }, []);

  return (
    <ContainerGeral>
      <Header
        botao1="Voltar"
        botao2="Pagina Inicial"
        onClick1={() => history.goBack()}
        onClick2={() => history.push("/")}
        text=" Aplique-se para a viagem!"
      />
      <ContainerForm>
        <form onSubmit={toApply}>
          {listaViagens && (
            <select value={viagemId} onChange={changeId}>
              <option>Selecione sua viagem</option>
              {viagens}
            </select>
          )}
          <br />

          <input
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder="Nome"
            required
          />
          <input
            name={"age"}
            value={form.age}
            onChange={onChange}
            placeholder="Idade"
            required
            type={"number"}
          />
          <input
            name={"applicationText"}
            value={form.applicationText}
            onChange={onChange}
            placeholder="Texto para a aplicação"
            required
          />
          <input
            name={"profession"}
            value={form.profession}
            onChange={onChange}
            placeholder="Profissão"
            required
          />
          <input
            name={"country"}
            value={form.country}
            onChange={onChange}
            placeholder="País"
            required
          />
          <br />
          <button>Enviar</button>
        </form>
      </ContainerForm>
    </ContainerGeral>
  );
}

export default Aplications;
