import styled from "styled-components";
import Header from "../../../otherComponents/Header";

const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;

  h3 {
    background-image: none;
    background-color: white;
    width: 60vw;
    height: 70px;
    text-align: center;
    margin: 30px;
  }
`;

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 60vw;
    margin: 2vh;
    background-image: none;
    background-color: white;
  }
`;

function Aplications() {
  return (
    <ContainerGeral>
      <Header />
      <div>
        <h3> Aplique-se para a viagem! </h3>
      </div>
      <ContainerForm>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
      </ContainerForm>
    </ContainerGeral>
  );
}

export default Aplications;
