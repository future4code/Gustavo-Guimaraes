import useProtectedPage from "../../hooks/useProtectedPage";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardPost from "../../components/CardPost/CardPost";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { goToAdicionar } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import axios from "axios";
import {
  ContainerNovoPost,
  InputTitulo,
  InputTexto,
  ContainerGeral,
  ContainerPosts,
} from "./styled";
import { Button } from "@material-ui/core";

function Home() {
  useProtectedPage();
  const { data, pegaPost } = useRequestData([], `${BASE_URL}/posts`);
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
        pegaPost(`${BASE_URL}/posts`);
        clear();
      })
      .catch((error) => {
        alert(error);
      });
  };

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
          pegaPost={pegaPost}
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
