import styled from "styled-components";
import { useHistory } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../otherComponents/Header";
import Loading from "../../otherComponents/Loading";

const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Dosis", sans-serif;
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
  font-family: "Dosis", sans-serif;
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
`;

function ListTrip() {
  const history = useHistory();
  const [listaViagens, setListaViagens] = useState([]);

  const goToApplication = () => {
    history.push("/trips/application");
  };

  const goToHome = () => {
    history.push("/");
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

  useEffect(() => {
    getListOfTrips();
  }, [setListaViagens]);

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
        </div>
      </ContainerViagem>
    );
  });

  return (
    <ContainerGeral>
      <Header
        botao2="Aplicar-se a Viagem!"
        botao1="Voltar"
        onClick2={goToApplication}
        onClick1={goToHome}
        text="Nossas Viagens"
      />
      {!viagensArray ? (
        <Loading />
      ) : (
        <ContainerProdutos>{viagensArray}</ContainerProdutos>
      )}
    </ContainerGeral>
  );
}

export default ListTrip;
