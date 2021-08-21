import styled from "styled-components";
import Header from "../../../otherComponents/Header";
import useForm from "../../../hooks/useForm";
import axios from "axios";
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
    width: 60vw;
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

function CreateTrip() {
  const token = localStorage.getItem("token");
  const history = useHistory();

  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: 0,
  });

  const toApply = (event) => {
    event.preventDefault();
    postNewTrip();
    cleanFields();
  };

  const postNewTrip = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gustavo-guimaraes-lovelace/trips";
    const body = form;

    const headers = {
      headers: {
        auth: token,
      },
    };

    axios
      .post(url, body, headers)
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ContainerGeral>
      <Header
        text="Criar nova viagem"
        botao1="Voltar"
        onClick1={() => history.goBack()}
        botao2="Página Inicial"
        onClick2={() => history.push("/")}
      />

      <ContainerForm>
        <form onSubmit={toApply}>
          <br />
          <input
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder="Nome da viagem"
            required
          />
          <input
            name={"planet"}
            value={form.planet}
            onChange={onChange}
            placeholder="Planeta"
            required
          />
          <input
            name={"date"}
            value={form.date}
            onChange={onChange}
            placeholder="Data"
            required
          />
          <input
            name={"description"}
            value={form.description}
            onChange={onChange}
            placeholder="Descrição"
            required
          />
          <input
            name={"durationInDays"}
            value={form.durationInDays}
            onChange={onChange}
            placeholder="Duração em dias"
            required
          />
          <br />
          <button>Enviar</button>
        </form>
      </ContainerForm>
    </ContainerGeral>
  );
}

export default CreateTrip;
