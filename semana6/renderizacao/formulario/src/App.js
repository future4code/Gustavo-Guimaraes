
import styled from "styled-components"
import React from "react";
import Pagina2 from "./components/Pagina2"
import Pagina3 from "./components/Pagina3"
import Final from "./components/Final"
import Pagina1 from "./components/Pagina1"


const BotaoNext = styled.button`
  
  width: 10rem;
  margin: auto;
  margin-top: 25px;
  display: block;
  padding: 0.25rem;
`

class App extends React.Component {

  state = {
    etapa: 1,
  }

  pagshowed = () => {
    switch (this.state.etapa) {
      case 1: 
      return {Pagina1};
      case 2:
      return {Pagina2};
      case 3: 
      return {Pagina3};
      case 4: 
      return {Final};
    }
    }

    onClickPageChange = () => {
      const novaEtapa = this.state.etapa + 1
      this.setState({etapa: novaEtapa})
      return novaEtapa
    }

    
    
    

  render () {

    const etapaComponente = this.state.etapa.map((pag) => {
      return (
        
      );
    })



    return (
      <div>
        <BotaoNext onClick={this.onClickPageChange}>Próxima etapa</BotaoNext>
      </div>


    )
  }
  


}

export default App;
