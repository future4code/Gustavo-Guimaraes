import useProtectedPage from "../../hooks/useProtectedPage";
import styled from "styled-components";
import { Button } from "@material-ui/core";
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
import { ContainerNovoPost, ContainerGeral, InputTexto } from "./styled";

function DetalhesPost() {
  useProtectedPage();
  const params = useParams();
  const [form, onChange, clear] = useForm({ body: "" });
  const [postCorreto, setPostCorreto] = useState("");
  const { data, pegaPost } = useRequestData(
    [],
    `${BASE_URL}/posts/${params.id}/comments`
  );
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

  const comentar = () => {
    axios
      .post(`${BASE_URL}/posts/${params.id}/comments`, form, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((resp) => {
        alert("Sucesso");
        pegaPost(`${BASE_URL}/posts/${params.id}/comments`);
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
          params={params.id}
          pegaPost={pegaPost}
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
