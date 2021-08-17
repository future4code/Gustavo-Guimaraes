import "./Home.css"
import styled from "styled-components";

const ContainerGeral =styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 200px 70px 1fr;

height: 100vh;
width: 100%;

color: white;


h1, h3{
    margin-top: 15vh;
    background-image: none;
    align-self: center;
    justify-self: center;
    grid-column: 1/-1;

}

h1{ 
    font-size: 9vw;
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
        font-size: 2vw
    }
`;



function Home() {
    return ( 
        <ContainerGeral>
            <h1>LabeX</h1>
            <h3>Viagens espaciais ao seu alcance</h3>
            <button>Lista de Viagens</button>
            <button>Área do Admin</button>
  
        </ContainerGeral>
    );
}

export default Home;