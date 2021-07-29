import React from "react"
import axios from "axios";
import styled from "styled-components"

const BlocoInteiro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 80vw;
  margin: 0 auto;
  background-color: aliceblue;
  height: 100vh;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;

  justify-content: center;
  
`

const BarraPesquisa = styled.div`

  align-self: flex-end;
`
const BlocoPrincipal = styled.div`
  flex-grow: 1;
  padding: 100px;
 
`

const BlocoAtividades = styled.div`
  height: 500px;
  width: 500px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

class TelaEscolha extends React.Component {
state = {

    atividades: [],
    inputPreco: "",
    boxAtividades: false,
}

getProgramaBaixoCusto = (value) => {
    const url = `http://www.boredapi.com/api/activity?minprice=0&maxprice=${value}`
    axios.get(url)
    .then((res) => {
        console.log(res.data)
        this.setState({atividades: res.data})
        this.setState({boxAtividades: true})
    } ).catch((erro) => {
      alert(erro)
    })
}

mudaInput = (event) => {
  this.setState ({inputPreco: event.target.value})
}

  render() { 
    const {activity, participants, type, price} = this.state.atividades
  return (
    <BlocoInteiro>
      <Header> 
        <h2>Programas de Fim de Semana!</h2>
        <h3>Saiba de algo que caiba no seu orçamento!</h3>
      </Header>
      <BarraPesquisa>
        <label>Preço máximo que quer pagar: (em uma escala de 0 a 1) </label>
        <br />
        <input value={this.state.inputPreco} onChange={this.mudaInput}></input> 
        <button onClick={() => {
          this.getProgramaBaixoCusto(this.state.inputPreco)
        }} >Buscar</button>
      </BarraPesquisa>
      <BlocoPrincipal className="App">
        <BlocoAtividades >
        <h3>Atividades</h3>
        {this.state.boxAtividades && 
        <div>
          <p>Nome: {activity} </p>
          <p>Preço: {price}</p>
          <p>Quantos participantes estão envolvidos: {participants} </p>
        </div>}
        </BlocoAtividades >
      </BlocoPrincipal>
    </BlocoInteiro>
  );
}}

export default TelaEscolha;
