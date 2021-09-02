import useProtectedPage from "../../hooks/useProtectedPage";
import styled from "styled-components";
import { Input, TextField, Button } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardPost from "../../components/CardPost/CardPost";
import { useParams } from "react-router";
import CardComentarios from "../../components/CardComentarios/CardComentarios";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const ContainerNovoPost = styled.div`
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

const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 93vh;
  overflow-y: scroll;
  align-items: center;
`;

const InputTexto = styled(Input)`
  width: 40vw;
  height: 8vh;
  color: black;
  margin-right: 8px;
`;

function DetalhesPost() {
  useProtectedPage();
  const params = useParams();
  const [form, onChange, clear] = useForm({ body: "" });
  const [postCorreto, setPostCorreto] = useState("");
  const data = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`);
  console.log(params);

  const onSubmitForm = (event) => {
    event.preventDefault();
    comentar();
  };

  const pegarPost = () => {
    axios
      .get(`${BASE_URL}/posts/`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((resp) => {
        setPostCorreto(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /*   const pegarComentarios = () => {
    axios
      .get(`${BASE_URL}/posts/${params.id}/comments`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((resp) => {

      });
  };
 */
  const comentar = () => {
    axios
      .post(`${BASE_URL}/posts/${params.id}/comments`, form, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((resp) => {
        alert("Sucesso");
        clear();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postExibido =
    postCorreto &&
    postCorreto.filter((post) => {
      return post.id === params.id;
    });

  const arrayComentarios =
    data &&
    data.map((post) => {
      return (
        <CardComentarios
          key={post.id}
          conteudo={post.body}
          titulo={post.title}
          usuario={post.username}
          numCurtidas={post.voteSum}
          numComentarios={post.commentCount}
          id={post.id}
        />
      );
    });

  useEffect(() => {
    pegarPost();
  }, []);

  return (
    <ContainerGeral>
      {postExibido && (
        <CardPost
          key={postExibido[0].id}
          conteudo={postExibido[0].body}
          titulo={postExibido[0].title}
          usuario={postExibido[0].username}
          numCurtidas={postExibido[0].voteSum}
          numComentarios={postExibido[0].commentCount}
        />
      )}

      <ContainerNovoPost>
        <h1>Novo Comentário:</h1>
        <form onSubmit={onSubmitForm}>
          <InputTexto
            name={"body"}
            value={form.body}
            onChange={onChange}
            id="outlined-basic"
            label="Sua mensagem aqui"
            variant="outlined"
            margin="normal"
            placeholder="..."
            required
          />
          <Button
            type="submit"
            startIcon={
              <AddCircleIcon color="primary" style={{ fontSize: 60 }} />
            }
          ></Button>
        </form>
      </ContainerNovoPost>
      {arrayComentarios}
    </ContainerGeral>
  );
}

export default DetalhesPost;
