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

  h3 {
    background-image: none;
    background-color: white;
    width: 60vw;
    height: 70px;
    text-align: center;
    margin: 30px;
  }
`;

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;

  input,
  select,
  button {
    width: 60vw;
    margin: 2vh;
    background-image: none;
    background-color: white;
  }
`;

function Aplications() {
  const [listaViagens, setListaViagens] = useState([]);
  const [viagemId, setViagemId] = useState("");
  const history = useHistory();

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: 0,
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
        console.log(erro);
      });
  };

  const applyTotrip = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gustavo-guimaraes-lovelace/trips/${id}/apply`;
    const body = form;

    axios
      .post(url, body)
      .then((resp) => {
        console.log(resp);
        alert("Sucesso");
      })
      .catch((error) => {
        console.log(error);
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
    console.log(viagemId);
  }, [viagemId]);

  return (
    <ContainerGeral>
      <Header
        botao1="Voltar"
        botao2="Pagina Inicial"
        onClick1={() => history.goBack()}
        onClick2={() => history.push("/")}
        showButton={true}
        text="LabeX"
      />
      <div>
        <h3> Aplique-se para a viagem! </h3>
      </div>
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
