import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ContainerCard = styled.div`
  background-color: white;
  border-radius: 10px;
  height: 25vh;
  width: 70vw;
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

const ContainerUser = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContainerTitulo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContainerReacoes = styled.div`
  border: 1px solid black;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  padding: 8px;
  box-sizing: border-box;
`;

function CardComentarios(props) {
  const history = useHistory();

  return (
    <ContainerCard>
      <ContainerUser>
        <h1>{props.usuario}</h1>
      </ContainerUser>
      <ContainerTitulo>{props.conteudo}</ContainerTitulo>
      <ContainerReacoes>
        <p>curtidas {props.numCurtidas} </p>
        <p>comentários {props.numComentarios}</p>
      </ContainerReacoes>
    </ContainerCard>
  );
}

export default CardComentarios;
