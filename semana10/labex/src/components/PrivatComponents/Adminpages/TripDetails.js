import styled from "styled-components";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../../otherComponents/Header";

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
    background-color: blue;
    background-image: none;
    width: 5vw;
    height: 5vh;
    margin: 10px;
  }
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
      console.log(error);
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
        console.log(resp);
        getTripsDetails();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const goToHome = () => {
    history.push("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      getTripsDetails();
      console.log(viagem);
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
          <div>
            <button onClick={() => decideCandidate(candidate.id, false)}>
              Recusar
            </button>
            <button onClick={() => decideCandidate(candidate.id, true)}>
              Aceitar
            </button>
          </div>
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
        showButton={true}
        text={viagem.name}
      />
      {viagem && (
        <ContainerViagem>
          <div>
            <h4>Aprovados:</h4>
            <h4>{arrayApproved}</h4>
          </div>
          {/*           <div>
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
          </div> */}
        </ContainerViagem>
      )}
      <div>
        <h2>Pendentes: </h2>
      </div>
      {arrayCandidates}
    </div>
  );
}

export default TripDetails;
