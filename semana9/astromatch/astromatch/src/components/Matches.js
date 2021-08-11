import styled from "styled-components";
import Perfis from "./Perfis";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
  height: 600px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  background-color: white;
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
    margin: auto 110px;
  }
`;

export function Matches(props) {
  const [listaMatches, setListaMatches] = useState([]);

  const pegaListaMatches = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/matches";

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

  useEffect(() => {
    pegaListaMatches();
  }, []);

  const matches = listaMatches.map((match) => {
    return <p key={match.id}>{match.name}</p>;
  });

  return (
    <TelaInteira>
      <TelaPrincipal>
        <HeaderPrincipal>
          <h2>Astromatch </h2>

          <p onClick={props.mudaParaHome}>Troca página</p>
        </HeaderPrincipal>
        {matches}
      </TelaPrincipal>
    </TelaInteira>
  );
}
