
import styled from 'styled-components';


const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
`

const ContainerBotoes = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        background-image: none;
        background-color: #0c0a0adf;
        color: white;
        height: 10vh;
        width: 15vw;
        margin: 15px;
        border-radius: 5%;
        cursor: pointer;
        font-size: 2vw
    }
`

const ContainerProdutos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: grey;
    height: 100%;
    width: 100vw ;
    margin: 15px;
`

const ContainerViagem = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.2em;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    background-image: none;
    height: 25vh;
    width: 50vw;
    background-color: grey;
    
    h2, p {
        background-color: grey;
        background-image: none;
    }

`

function ListTrip() {

  


  return (
    <ContainerGeral >
        <ContainerBotoes>
            <button>Se candidate</button>
            <button>Voltar a página inicial </button>
        </ContainerBotoes>
        <ContainerProdutos >
            <ContainerViagem>
                <h2>Nome</h2>
                <p>Preço</p>
                <p>descrição</p>            
            </ContainerViagem>
            <ContainerViagem>
                <h2>Nome</h2>
                <p>Preço</p>
                <p>descrição</p>            
            </ContainerViagem>
        </ContainerProdutos >

    </ContainerGeral>
  );
}

export default ListTrip;
