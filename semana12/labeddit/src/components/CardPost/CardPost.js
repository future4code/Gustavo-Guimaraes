import styled from "styled-components";

const ContainerCard = styled.div`
  background-color: white;
  height: 15vh;
  width: 70vw;
  margin: 16px;

  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const ContainerTitulo = styled.div`
  margin-left: 16px;
`;

const ContainerConteudo = styled.div`
  display: flex;
  justify-content: center;
`;

function CardPost(props) {
  return (
    <ContainerCard>
      <ContainerTitulo>
        <h2>{props.titulo} </h2>
      </ContainerTitulo>
      <ContainerConteudo>{props.conteudo}</ContainerConteudo>
    </ContainerCard>
  );
}

export default CardPost;
