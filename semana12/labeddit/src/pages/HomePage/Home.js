import useProtectedPage from "../../hooks/useProtectedPage";
import styled from "styled-components";
import { Button, Input } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardPost from "../../components/CardPost/CardPost";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { goToAdicionar } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

import useForm from "../../hooks/useForm";
import axios from "axios";

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

const InputTitulo = styled(Input)`
  width: 13vw;
  height: 8vh;
  color: black;
  margin-right: 8px;
`;

const InputTexto = styled(Input)`
  width: 30vw;
  height: 8vh;
  color: black;
  margin-right: 8px;
`;

const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 93vh;
  overflow-y: scroll;
  align-items: center;
`;

const ContainerPosts = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Home() {
  useProtectedPage();
  const data = useRequestData([], `${BASE_URL}/posts`);
  const [form, onChange, clear] = useForm({
    title: "",
    body: "",
  });
  console.log(data);

  const onSubmitForm = (event) => {
    event.preventDefault();
    postar();
  };

  const postar = () => {
    axios
      .post(`${BASE_URL}/posts`, form, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((resp) => {
        alert(resp, "post criado");
        clear();
      })
      .catch((error) => {
        alert(error);
      });
  };

  const history = useHistory();

  const arrayPosts =
    data &&
    data.map((post) => {
      return (
        <CardPost
          conteudo={post.body}
          titulo={post.title}
          usuario={post.username}
          numCurtidas={post.voteSum}
          numComentarios={post.commentCount}
          id={post.id}
          buttonHome={true}
        />
      );
    });

  return (
    <ContainerGeral>
      <ContainerPosts>
        <ContainerNovoPost>
          <h1>Novo Post:</h1>
          <form onSubmit={onSubmitForm}>
            <InputTitulo
              name={"title"}
              value={form.title}
              onChange={onChange}
              required
              autoFocus={true}
              placeholder="Título"
            />
            <InputTexto
              name={"body"}
              value={form.body}
              onChange={onChange}
              id="outlined-basic"
              label="Sua mensagem aqui"
              variant="outlined"
              margin="normal"
              placeholder="Sua mensagem aqui"
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
        {arrayPosts}
      </ContainerPosts>
    </ContainerGeral>
  );
}

export default Home;
