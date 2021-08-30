import styled from "styled-components";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../../otherComponents/Header";
import Loading from "../../../otherComponents/Loading";

const ContainerViagem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
  justify-content: space-evenly;
  align-items: center;
  margin: 15px auto;
  background-image: none;
  min-height: 40vh;
  width: 50vw;
  background-color: white;
  border-radius: 2%;
  font-family: "Dosis", sans-serif;
  div {
    background-color: white;
    background-image: none;
  }
  h2,
  h4,
  strong,
  p,
  li {
    background-color: white;
    background-image: none;
    max-width: 40vw;
    text-align: center;
  }
  button {
    min-width: 100%;
    margin: 2vh;
    background-image: none;
    background-color: #000000;
    height: 50px;
    color: white;
    font-size: 1vw;
    border-radius: 5px;
    min-height: 50px;
  }
`;

const ContainerPendent = styled.div`
  position: relative;
  margin: auto;
  width: 50vw;
  background-image: none;
  background-color: #0c0a0a78;
  font-family: "Dosis", sans-serif;

  h2 {
    font-size: 3vw;
    text-align: center;
    background-image: none;

    color: white;
    min-height: 10vh;
    margin: 15px;
    border-radius: 5%;
  }
`;

const ContainerBotoes = styled.div`
  display: flex;
  justify-content: space-around;
`;

function TripDetails(props) {
  const [viagem, setViagem] = useState({});
  const [candidates, setCandidates] = useState([]);
  const [approved, setApproved] = useState([]);
  const token = localStorage.getItem("token");
  const history = useHistory();
  const params = useParams();

  const getTripsDetails = async (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gustavo-guimaraes-lovelace/trip/${params.id}`;

    const headers = {
      headers: {
        auth: token,
      },
    };

    try {
      const resp = await axios.get(url, headers);
      setViagem(resp.data.trip);
      setCandidates(resp.data.trip.candidates);
      setApproved(resp.data.trip.approved);
    } catch (error) {
      alert(error);
    }
  };

  const decideCandidate = (candidateId, choice) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gustavo-guimaraes-lovelace/trips/${params.id}/candidates/${candidateId}/decide`;
    const headers = {
      headers: {
        auth: token,
      },
    };
    const body = {
      approve: choice,
    };

    axios
      .put(url, body, headers)
      .then((resp) => {
        getTripsDetails();
      })
      .catch((error) => {
        alert(error);
      });
  };

  const goToHome = () => {
    history.push("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      getTripsDetails();
    } else {
      goToHome();
    }
  }, []);

  const arrayApproved = approved.map((approve) => {
    return (
      <ul>
        <li>{approve.name}</li>
      </ul>
    );
  });

  const arrayCandidates = candidates.map((candidate) => {
    return (
      <div>
        <ContainerViagem>
          <div>
            <h2>
              {candidate.name} - {candidate.age}
            </h2>
          </div>
          <div>
            {" "}
            <h4>{candidate.applicationText}</h4>
          </div>
          <div>
            <p>
              <strong> {candidate.country} - Profissão: </strong>
              {candidate.profession}{" "}
            </p>
          </div>
          <ContainerBotoes>
            <button onClick={() => decideCandidate(candidate.id, false)}>
              Recusar
            </button>
            <button onClick={() => decideCandidate(candidate.id, true)}>
              Aceitar
            </button>
          </ContainerBotoes>
        </ContainerViagem>
      </div>
    );
  });

  return (
    <div>
      <Header
        botao1="Voltar"
        botao2="Home"
        onClick1={history.goBack}
        onClick2={goToHome}
        text={viagem.name}
      />
      {viagem && (
        <ContainerViagem>
          <h2>Aprovados:</h2>
          <h4>{arrayApproved}</h4>
        </ContainerViagem>
      )}
      <ContainerPendent>
        <h2>Pendentes: </h2>
      </ContainerPendent>
      {!viagem ? <Loading /> : arrayCandidates}
    </div>
  );
}

export default TripDetails;
