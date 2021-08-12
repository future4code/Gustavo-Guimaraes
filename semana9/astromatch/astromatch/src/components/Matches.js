import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const TelaInteira = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c7c7c7;
`;
const TelaPrincipal = styled.div`
  width: 400px;
  min-height: 600px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  background-color: white;

  display: flex;
  align-items: flex-start;
  button {
    align-self: center;
  }
`;
const HeaderPrincipal = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid black;
  box-sizing: border-box;
  h2 {
    position: relative;
    margin: auto 100px;
  }
`;

const CardMatch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 6px;
  }
`;

export function Matches(props) {
  const [listaMatches, setListaMatches] = useState([]);

  const pegaListaMatches = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gustavo-guimaraes/matches";

    axios
      .get(url)
      .then((resp) => {
        console.log(resp.data.matches);
        setListaMatches(resp.data.matches);
      })
      .catch((erro) => {
        alert(erro);
      });
  };

  const limpaMatches = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gustavo-guimaraes/clear";

    axios
      .put(url)
      .then((resp) => {
        alert("Sucesso");
        pegaListaMatches();
      })
      .catch((erro) => {
        alert("Erro");
      });
  };

  useEffect(() => {
    pegaListaMatches();
  }, []);

  const matches = listaMatches.map((match) => {
    return (
      <CardMatch>
        <img src={match.photo} />
        <span key={match.id}>{match.name}</span>
      </CardMatch>
    );
  });

  return (
    <TelaInteira>
      <TelaPrincipal>
        <HeaderPrincipal>
          <h2>Astromatch </h2>

          <Button variant="contained" onClick={props.mudaParaHome}>Troca página</Button>
        </HeaderPrincipal>
        {matches}
        <Button variant="contained" color="secondary" onClick={limpaMatches}>Limpar matches</Button>
      </TelaPrincipal>
    </TelaInteira>
  );
}
