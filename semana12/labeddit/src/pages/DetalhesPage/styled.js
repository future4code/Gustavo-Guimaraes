import styled from "styled-components";
import { Input, TextField } from "@material-ui/core";

export const ContainerNovoPost = styled.div`
  background-color: white;
  border-radius: 10px;
  min-height: 20vh;
  width: 50vw;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  :hover {
    box-shadow: rgba(88, 0, 252, 0.1) 0px 1px 1px 0px inset,
      rgba(88, 0, 252, 0.25) 0px 50px 100px -20px,
      rgba(88, 0, 252, 0.3) 0px 30px 60px -30px;
  }
`;

export const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 93vh;
  overflow-y: scroll;
  align-items: center;
`;

export const InputTexto = styled(Input)`
  width: 40vw;
  height: 8vh;
  color: black;
  margin-right: 8px;
`;
