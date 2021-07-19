
import styled from "styled-components"
import React from "react";

const BoxGeral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  

  input, label {
    display: block;
    min-width: 100%;
    text-align: center;
    margin: auto;
    padding: 0.3em;
    margin-top: 1em;
  }
  button, select { 
    margin: auto;
    display: block;
    padding: 0.3em;
    margin-top: 1em;
  }
`

class App extends React.Component {

  state = {
    etapa1: true,
    etapa2: "",
    etapa3: "",
  }


  onClickpag1 = () => {
    this.setState({etapa1: false})
  }

  render() { 
    if(this.state.etapa1) { return  (
    <div>    
      <BoxGeral>

      <h1 id="title"> ETAPA 1 - DADOS GERAIS  </h1>
      <form id="survey-form">
        <label for="name" id="name-label"> 1. Qual o seu nome?</label>
        <input type="text" id="name" name="name" placeholder="Coloque seu nome" autofocus autocomplete="on" required />
        <label for="number" id="number-label"> 2. Qual sua idade? </label>
        <input type="number" id="number" name="number" min="0" max="130" placeholder="Coloque sua idade" />
        <label for="email" id="email-label"> 3. Qual seu email? </label>
        <input type="email" id="email" name="email" placeholder="Coloque seu email" autocomplete="on" required />

        <label for="dropdown" id="dropdown"> 4. Qual a sua escolaridade? </label>
        <select id="dropdown">
            <option label="Ensino Médio Incompleto"></option>
            <option label="Ensino Médio Completo"></option>
            <option label="Ensino Superior Incompleto"></option>
            <option label="Ensino Superior Completo"></option>
            
        </select>
        <button onClick={this.onClickpag1}>Próxima etapa</button>
      </form>
    </BoxGeral>
  </div>

  )
  } } 
  
} 
  

export default App;
