import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { goToDetalhes } from "../../routes/coordinator";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import CommentIcon from "@material-ui/icons/Comment";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

const ContainerCard = styled.div`
  background-color: white;
  border-radius: 10px;
  height: 60vh;
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

const ContainerCurtidas = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 3px;
  }
  cursor: pointer;
`;

function CardPost(props) {
  const history = useHistory();

  const votarNoPost = (id, choice) => {
    axios
      .post(
        `${BASE_URL}/posts/${id}/votes`,
        {
          direction: choice,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ContainerCard>
      <ContainerUser>
        <h1>{props.usuario}</h1>
      </ContainerUser>
      <ContainerTitulo>
        <h2>{props.titulo} </h2>
        {props.conteudo}
      </ContainerTitulo>
      <ContainerReacoes>
        <ContainerCurtidas>
          <ArrowUpwardIcon onClick={() => votarNoPost(props.id, 1)} />
          <p> {props.numCurtidas} </p>
          <ArrowDownwardIcon onClick={() => votarNoPost(props.id, -1)} />
        </ContainerCurtidas>
        {props.buttonHome && (
          <ContainerCurtidas onClick={() => goToDetalhes(history, props.id)}>
            <CommentIcon />
            <p>{props.numComentarios} comentários</p>
          </ContainerCurtidas>
        )}
      </ContainerReacoes>
    </ContainerCard>
  );
}

export default CardPost;
