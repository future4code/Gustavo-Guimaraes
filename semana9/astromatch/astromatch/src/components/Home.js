import React from "react";
import styled from "styled-components";
import Perfis from "./Perfis";

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

export function Home() {
  return (
    <TelaInteira>
      <TelaPrincipal>
        <HeaderPrincipal>
          <h2>Astromatch </h2>

          <p>Troca página</p>
        </HeaderPrincipal>
        <Perfis />
      </TelaPrincipal>
    </TelaInteira>
  );
}
