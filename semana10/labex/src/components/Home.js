import styled from "styled-components";
import { useHistory } from "react-router";

const ContainerGeral = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 70px 1fr;

  height: 100vh;
  width: 100%;
  font-family: "Dosis", sans-serif;
  color: white;

  h1,
  h3 {
    margin-top: 15vh;
    background-image: none;
    align-self: center;
    justify-self: center;
    grid-column: 1/-1;
  }

  h1 {
    font-size: 12vw;
  }

  h3 {
    font-size: 3vw;
  }

  button {
    background-image: none;
    background-color: #0c0a0adf;
    color: white;
    height: 30vh;
    width: 30vw;
    grid-row-start: 3;
    justify-self: center;
    align-self: center;
    border-radius: 5%;
    cursor: pointer;
    font-size: 2vw;
  }
`;

function Home() {
  const history = useHistory();

  const goToList = () => {
    history.push("/trips/list");
  };

  const goToAdmin = () => {
    history.push("/login");
  };

  return (
    <ContainerGeral>
      <h1>LabeX</h1>
      <h3>Viagens espaciais ao seu alcance</h3>
      <button onClick={goToList}>Lista de Viagens</button>
      <button onClick={goToAdmin}>Área do Admin</button>
    </ContainerGeral>
  );
}

export default Home;
