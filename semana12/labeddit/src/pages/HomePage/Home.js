import useProtectedPage from "../../hooks/useProtectedPage";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardPost from "../../components/CardPost/CardPost";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";

const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 93vh;
  overflow-y: scroll;
  align-items: center;
`;

const BotaoPostar = styled.div`
  display: flex;
  align-items: flex-start;
  position: fixed;
  left: 0;
  top: 80px;
  justify-content: center;
`;

const ContainerPosts = styled.div`
  height: 100%;
  width: 60vw;
  display: flex;
  flex-direction: column;
`;

function Home() {
  useProtectedPage();
  const data = useRequestData([], `${BASE_URL}/posts`);
  console.log(data);

  const arrayPosts =
    data &&
    data.map((post) => {
      return <CardPost conteudo={post.body} titulo={post.title} />;
    });

  return (
    <ContainerGeral>
      <ContainerPosts>{arrayPosts}</ContainerPosts>
      <BotaoPostar>
        <Button
          startIcon={<AddCircleIcon color="primary" style={{ fontSize: 60 }} />}
        ></Button>
        <h3>Novo Post</h3>
      </BotaoPostar>
    </ContainerGeral>
  );
}

export default Home;
