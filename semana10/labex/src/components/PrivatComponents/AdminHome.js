import styled from "styled-components";
import { useHistory } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../otherComponents/Header";

const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerProdutos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: grey;
  height: 100%;
  width: 100vw;
  margin: 15px;
`;

const ContainerViagem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
  justify-content: space-evenly;
  align-items: center;
  margin: 15px auto;
  background-image: none;
  height: 40vh;
  width: 50vw;
  background-color: white;
  border-radius: 2%;

  h2,
  h4,
  strong,
  p {
    background-color: white;
    background-image: none;
    max-width: 40vw;
    text-align: center;
  }
  button {
    background-color: blue;
    background-image: none;
    width: 100%;
    min-height: 60px;
  }
`;

const ContainerBotoes = styled.div`
  display: flex;
  background-color: white;
  background-image: none;
`;

function AdminHome() {
  const token = localStorage.getItem("token");
  const history = useHistory();
  const [listaViagens, setListaViagens] = useState([]);

  const goToCreate = () => {
    history.push("/admin/trips/create");
  };

  const goToHome = () => {
    history.push("/");
  };

  const goToDetails = (id) => {
    history.push(`/admin/trips/${id}`);
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

  const deleteTrip = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gustavo-guimaraes-lovelace/trips/${id}`;
    const headers = {
      headers: {
        auth: token,
      },
    };

    axios
      .delete(url, headers)
      .then((resp) => {
        alert("Sucesso", resp);
        getListOfTrips();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      getListOfTrips();
    } else {
      goToHome();
    }
  }, []);

  const viagensArray = listaViagens.map((viagem) => {
    return (
      <ContainerViagem>
        <div key={viagem.id}>
          <h2>{viagem.name}</h2>
        </div>
        <div>
          <h4>{viagem.description}</h4>
        </div>
        <div>
          <p>
            <strong>Destino: </strong>
            {viagem.planet}
          </p>
          <p>
            <strong>Duração: </strong>
            {viagem.durationInDays}
          </p>
          <p>
            <strong>Data: </strong>
            {viagem.date}
          </p>
          <ContainerBotoes>
            <button onClick={() => deleteTrip(viagem.id)}>
              Deletar Viagem
            </button>
            <button onClick={() => goToDetails(viagem.id)}>
              Visualizar detalhes
            </button>
          </ContainerBotoes>
        </div>
      </ContainerViagem>
    );
  });

  return (
    <ContainerGeral>
      <Header
        botao1="Criar nova viagem!"
        botao2="Pagina Inicial"
        onClick1={goToCreate}
        onClick2={goToHome}
        showButton={true}
        text="LabeX"
      />
      <ContainerProdutos>{viagensArray}</ContainerProdutos>
    </ContainerGeral>
  );
}

export default AdminHome;
