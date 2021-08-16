import "./Home.css"
import styled from "styled-components";

const ContainerGeral =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;

color: white;
font-size: 100px;
button {
        background-image: none;
        background-color: #0c0a0adf;
        color: white;
        height: 250px;
        width: 250px;
    }
`

const ContainerBotoes = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;


` 

function Home() {
    return ( 
        <ContainerGeral>
            <h1>LabeX</h1>
       {/*  <ContainerBotoes > */}
        <button>Acessar lista de Viagens</button>
        <button>Acessar área do Admin</button>
       {/*  </ContainerBotoes> */}
        </ContainerGeral>
    );
}

export default Home;