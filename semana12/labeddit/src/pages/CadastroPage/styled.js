import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

export const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 99.8%;

  height: 70vh;
`;

export const ContainerInputs = styled.div`
  flex-grow: 1;
  justify-self: center;
  height: 60vh;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    width: 300px;
    height: 40px;
    color: black;
  }
`;

export const BotaoLogar = styled(Button)`
  margin: 15px 0px 5px 0px;
  display: block;
  width: 150px;
`;

export const BotaoCadastrar = styled(Button)`
  margin: 15px 0px 5px 0px;
  display: block;
  width: 330px;
  color: black;
  text-align: center;
`;
