import React from "react";
import styled from "styled-components";
import Perfis from "./Perfis";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DenseAppBar from "./Material/DenseAppBar";

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
  height: 90px;
  width: 400px;
  box-sizing: border-box;
  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 7px;
  }
  button {
    position: absolute;
    top: 15px;
    right: 10px;
  }
`;

export function Home(props) {
  return (
    <TelaInteira>
      <TelaPrincipal>
        <HeaderPrincipal>
          <DenseAppBar
            mudaParaMatches={props.mudaParaMatches}
            paginaAtual={props.paginaAtual}
          />
        </HeaderPrincipal>
        <Perfis />
      </TelaPrincipal>
    </TelaInteira>
  );
}
