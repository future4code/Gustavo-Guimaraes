import styled from "styled-components";
import Header from "../../../otherComponents/Header";
import useForm from "../../../hooks/useForm";
import axios from "axios";

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

function CreateTrip() {
  const token = localStorage.getItem("token");

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
      <Header />
      <div>
        <h3> Criar nova viagem</h3>
      </div>
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
